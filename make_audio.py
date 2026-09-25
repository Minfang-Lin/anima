"""生成视频的配音和背景音乐。

1. 从 index.html 读出七幕旁白，用离线的 Kokoro 中文语音模型（sherpa-onnx）合成配音；
2. 按配音长度排好每一幕的时长，写到 build/timeline.json，record.js 会按它来渲染画面；
3. 用代码合成一段轻柔的八音盒 + 铺底和弦背景音乐（无版权问题），配音响起时自动压低音量；
4. 混成 build/soundtrack.wav。

用法：
    pip install sherpa-onnx soundfile numpy
    # 下载并解压语音模型到 models/：
    # https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/kokoro-multi-lang-v1_1.tar.bz2
    python3 make_audio.py                # 默认女声 sid=3
    python3 make_audio.py --sid 60       # 换一个声音（3–57 女声，58–102 男声）
"""
import argparse
import json
import os
import re

import numpy as np
import soundfile as sf

SR = 44100
ROOT = os.path.dirname(os.path.abspath(__file__))
BUILD = os.path.join(ROOT, "build")

INTRO = "多余的糖，是怎样一步步伤害血管的？跟着红细胞小伙伴，一起去血管里看看吧。"
# 配音时的读法替换（画面字幕不变）
SPOKEN = {"AGEs": "A G E S", "HbA1c": "糖化血红蛋白"}

LEAD, GAP = 0.8, 1.4        # 每幕开始后多久开口、说完后留白多久
TITLE_FADE = 1.0            # 片头标题淡出时长
TAIL = 2.5                  # 最后一幕说完后多留几秒让音乐收尾
SAD = {2, 3, 4, 5}          # 这几幕用小调走向（下标从 0 开始）


def chapter_texts():
    html = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    block = html[html.index("const CH = ["):html.index("const DUR")]
    return re.findall(r'\btext: "([^"]+)"', block)


def spoken(text):
    for k, v in SPOKEN.items():
        text = text.replace(k, v)
    return text


# ---------------- 配音 ----------------
def make_tts(model_dir):
    import sherpa_onnx
    d = model_dir.rstrip("/") + "/"
    cfg = sherpa_onnx.OfflineTtsConfig(
        model=sherpa_onnx.OfflineTtsModelConfig(
            kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(
                model=d + "model.onnx", voices=d + "voices.bin", tokens=d + "tokens.txt",
                data_dir=d + "espeak-ng-data", dict_dir=d + "dict",
                lexicon=d + "lexicon-us-en.txt," + d + "lexicon-zh.txt"),
            num_threads=4),
        rule_fsts=d + "date-zh.fst," + d + "phone-zh.fst," + d + "number-zh.fst",
        max_num_sentences=1)
    return sherpa_onnx.OfflineTts(cfg)


def synth(tts, text, sid, speed):
    a = tts.generate(text, sid=sid, speed=speed)
    x = np.asarray(a.samples, dtype=np.float32)
    # 重采样到 44.1kHz（线性插值对语音足够）
    n = int(len(x) * SR / a.sample_rate)
    x = np.interp(np.linspace(0, len(x) - 1, n), np.arange(len(x)), x).astype(np.float32)
    # 去掉首尾静音
    idx = np.where(np.abs(x) > 0.01)[0]
    if len(idx):
        x = x[max(0, idx[0] - 800):idx[-1] + 2000]
    return x / (np.abs(x).max() + 1e-9) * 0.9


# ---------------- 背景音乐 ----------------
NOTE = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A": 9, "B": 11}


def freq(name, octave):
    return 440.0 * 2 ** ((NOTE[name] + 12 * (octave + 1) - 69) / 12)


CHORDS = {  # 根音 + 和弦音
    "C": ["C", "E", "G"], "G": ["G", "B", "D"], "Am": ["A", "C", "E"],
    "F": ["F", "A", "C"], "Em": ["E", "G", "B"], "Dm": ["D", "F", "A"],
}
BRIGHT = ["C", "G", "Am", "F"]
GENTLE_SAD = ["Am", "F", "C", "Em"]


def music_box(f, dur):
    t = np.arange(int(dur * SR)) / SR
    env = np.exp(-t * 3.2) * np.minimum(1, t * 400)
    tone = np.sin(2 * np.pi * f * t) + 0.22 * np.sin(2 * np.pi * f * 3.01 * t) * np.exp(-t * 6)
    return (tone * env).astype(np.float32)


def pad(freqs, dur):
    t = np.arange(int(dur * SR)) / SR
    env = np.minimum(1, t / 0.9) * np.minimum(1, (dur - t) / 0.9)
    x = sum(np.sin(2 * np.pi * f * t) + 0.5 * np.sin(2 * np.pi * f * 1.003 * t) for f in freqs)
    return (x * env / len(freqs)).astype(np.float32)


def make_music(total, chapter_starts):
    bpm = 72
    bar = 4 * 60 / bpm
    out = np.zeros(int((total + 4) * SR), dtype=np.float32)

    def add(sig, at):
        i = int(at * SR)
        j = min(len(out), i + len(sig))
        out[i:j] += sig[:j - i]

    def chapter_at(t):
        return max(i for i, s in enumerate(chapter_starts) if s <= t + 1e-6)

    b = 0
    while b * bar < total:
        t0 = b * bar
        prog = GENTLE_SAD if chapter_at(t0) in SAD else BRIGHT
        name = prog[b % 4]
        notes = CHORDS[name]
        root = notes[0]
        tones = [freq(root, 5), freq(notes[1], 5 if NOTE[notes[1]] > NOTE[root] else 6),
                 freq(notes[2], 5 if NOTE[notes[2]] > NOTE[root] else 6), freq(root, 6)]
        # 八分音符琶音：根-五-三-五-高八度根-五-三-五
        order = [tones[0], tones[2], tones[1], tones[2], tones[3], tones[2], tones[1], tones[2]]
        for k in range(8):
            vel = 0.55 if k % 2 else 0.8
            if chapter_at(t0) in SAD and k % 2:
                continue  # 伤感段落琶音稀疏一些
            add(music_box(order[k], 2.2) * vel * 0.35, t0 + k * bar / 8)
        add(pad([freq(n, 3 if NOTE[n] >= NOTE[root] else 4) for n in notes], bar + 0.9) * 0.22, t0)
        add(np.sin(2 * np.pi * freq(root, 2) * np.arange(int(bar * SR)) / SR).astype(np.float32)
            * np.minimum(1, np.arange(int(bar * SR)) / SR / 0.3) * np.exp(-np.arange(int(bar * SR)) / SR * 0.6)
            * 0.18, t0)
        b += 1

    # 简单混响：几条衰减的回声
    wet = np.zeros_like(out)
    for d, g in [(0.113, 0.35), (0.197, 0.25), (0.311, 0.18), (0.473, 0.12)]:
        k = int(d * SR)
        wet[k:] += out[:-k] * g
    out = out + wet
    out = out[:int(total * SR)]
    # 开头 2 秒淡入，结尾 3 秒淡出
    n = len(out)
    out[:2 * SR] *= np.linspace(0, 1, 2 * SR)
    out[n - 3 * SR:] *= np.linspace(1, 0, 3 * SR)
    return out / (np.abs(out).max() + 1e-9)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--model", default=os.environ.get("KOKORO_DIR", os.path.join(ROOT, "models", "kokoro-multi-lang-v1_1")))
    ap.add_argument("--sid", type=int, default=3, help="说话人编号：3–57 女声，58–102 男声")
    ap.add_argument("--speed", type=float, default=0.95)
    ap.add_argument("--music", type=float, default=0.16, help="背景音乐音量（0–1）")
    args = ap.parse_args()

    texts = chapter_texts()
    tts = make_tts(args.model)
    intro = synth(tts, spoken(INTRO), args.sid, args.speed)
    voices = []
    for i, t in enumerate(texts):
        print(f"配音 第 {i + 1} 幕…", flush=True)
        voices.append(synth(tts, spoken(t), args.sid, args.speed))

    intro_len = 0.5 + len(intro) / SR + 0.4
    durs, starts, speech = [], [], []
    t = 0.0
    for i, v in enumerate(voices):
        starts.append(t)
        lead = intro_len + TITLE_FADE + LEAD if i == 0 else LEAD
        speech.append((t + lead, v))
        d = lead + len(v) / SR + GAP + (TAIL if i == len(voices) - 1 else 0)
        durs.append(round(d, 3))
        t += d
    total = t
    speech.insert(0, (0.5, intro))

    voice = np.zeros(int(total * SR) + SR, dtype=np.float32)
    for at, v in speech:
        i = int(at * SR)
        voice[i:i + len(v)] += v
    voice = voice[:int(total * SR)]

    music = make_music(total, starts)
    # 配音时把音乐压低（平滑的侧链）
    active = np.convolve((np.abs(voice) > 0.02).astype(np.float32), np.ones(SR // 2) / (SR // 2), mode="same")
    duck = 1 - 0.55 * np.clip(active * 3, 0, 1)
    mix = voice * 0.95 + music * args.music * duck
    mix = mix / max(1.0, np.abs(mix).max() / 0.97)

    os.makedirs(BUILD, exist_ok=True)
    stereo = np.stack([mix, mix], axis=1)
    sf.write(os.path.join(BUILD, "soundtrack.wav"), stereo, SR)
    json.dump({"intro": round(intro_len, 3), "durs": durs, "total": round(total, 3)},
              open(os.path.join(BUILD, "timeline.json"), "w"), ensure_ascii=False, indent=1)
    print(f"完成：build/soundtrack.wav（{total:.1f} 秒），build/timeline.json")


if __name__ == "__main__":
    main()
