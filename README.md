# 糖与血管：糖尿病如何影响血管

一个卡通治愈风的科普动画：红细胞小伙伴带你看高血糖怎样一步步伤害血管。纯 HTML + Canvas，没有构建步骤。

## 运行

直接用浏览器打开 `index.html` 即可。键盘 ← / → 切换场景，空格暂停。

## 七幕分镜

| # | 场景 | 画面重点 | 关键数据 |
|---|------|----------|----------|
| 1 | 健康的血管 | 内皮光滑，红细胞顺畅流动，葡萄糖少量 | 空腹血糖 3.9–6.1 mmol/L |
| 2 | 血糖长期偏高 | 葡萄糖（黄色六边形）明显增多，血浆颜色变化 | 空腹 ≥ 7.0 / 随机 ≥ 11.1 mmol/L |
| 3 | 糖化：AGEs 堆积 | 褐色 AGEs 附着内皮，胶原交联，管壁搏动减弱 | HbA1c 反映 2–3 个月平均血糖 |
| 4 | 内皮受损与炎症 | 活性氧闪光，内皮出现缝隙，白细胞黏附并钻入管壁 | 氧化应激 + 慢性炎症 |
| 5 | 斑块形成 | 脂质核心、泡沫细胞、纤维帽，管腔狭窄约 39% | 心血管风险约 2–4 倍 |
| 6 | 微血管病变 | 毛细血管基底膜增厚、渗漏，红细胞单行通过 | 眼、肾、神经三大并发症 |
| 7 | 控制血糖 | 血糖回落，损伤进展放缓 | HbA1c < 7%，血压 < 130/80 mmHg |

## 如何修改

- **文案 / 数据**：编辑 `index.html` 里的 `CH` 数组，每一幕有 `title`、`text`、`fact`。
- **画面强度**：每一幕的 `glucose`、`ages`、`damage`、`plaque`、`micro` 是 0–1（血糖为 mmol/L）的目标值，动画会平滑过渡到这些值。
- **节奏**：`DUR` 是每一幕的秒数。

## 导出成 MP4 视频

`record.js` 会逐帧渲染动画，直接生成 30fps、约 77 秒的 MP4（带片头标题和每一幕的字幕卡，无声音）。支持两种比例：

- **16:9 横版**（1920×1080）：适合 B 站、YouTube、课件投影
- **3:4 竖版**（1080×1440）：适合小红书、视频号、手机观看。顶部是幕标题，下方是大字号旁白卡和数据条

逐帧渲染不受电脑卡顿影响，画面不会掉帧。

需要先装好 [Node.js](https://nodejs.org) 和 [ffmpeg](https://ffmpeg.org/download.html)，然后在项目目录里运行：

```bash
npm install
npx playwright install chromium
npm run record                   # 16:9，输出 diabetes-vessels.mp4
npm run record -- --ratio 3:4    # 3:4，输出 diabetes-vessels-3x4.mp4
node record.js 我的视频.mp4 --ratio 3:4   # 自己指定文件名
```

如果 ffmpeg 不在 PATH 里，用 `FFMPEG=/path/to/ffmpeg npm run record` 指定。

### 加上配音和背景音乐

`make_audio.py` 会用离线的 Kokoro 中文语音模型把七幕旁白读出来（开头加一句引子），再用代码合成一段轻柔的八音盒背景音乐（没有版权问题），混成一条音轨。每一幕的时长会跟着配音长度自动调整，完整视频约 2 分 23 秒。

```bash
pip install sherpa-onnx soundfile numpy
# 下载语音模型（约 360MB），解压到 models/
mkdir -p models && cd models
curl -LO https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/kokoro-multi-lang-v1_1.tar.bz2
tar xjf kokoro-multi-lang-v1_1.tar.bz2 && cd ..

python3 make_audio.py                      # 生成 build/soundtrack.wav 和 build/timeline.json
npm run record -- --audio                  # 16:9 带声音，输出 diabetes-vessels-voice.mp4
npm run record -- --ratio 3:4 --audio      # 3:4 带声音，输出 diabetes-vessels-3x4-voice.mp4
```

可以调整的地方：

- **换声音**：`python3 make_audio.py --sid 20`（3–57 是女声，58–102 是男声）
- **语速**：`--speed 1.0`（默认 0.95，稍慢一点更温柔）
- **音乐音量**：`--music 0.1`（默认 0.16；有人说话时音乐会自动压低）
- **读法**：`make_audio.py` 顶部的 `SPOKEN` 表可以改某些词的读法，比如把 "AGEs" 读成 "A G E S"
- **伤感段落**：第 3–6 幕的背景音乐换成小调、琶音更稀疏，第 7 幕回到明亮的大调

也可以只导出无声视频，在剪映 / Premiere 里自己配旁白和音乐。剪映的"文本朗读"能把字幕直接转成配音。

不想装任何东西的话，也可以全屏打开页面，用 OBS 或系统录屏（Mac：Cmd+Shift+5；Windows：Win+Alt+R）录下来。

画面比例经过夸张处理，仅用于科普，不能替代医生的诊断和建议。
