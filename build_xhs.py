"""把每一集打包成小红书 Builder Hub「小工具」可以直接上传的 zip。

小工具的限制：纯 HTML/CSS/JS、index.html 在 zip 根目录、总包 < 2MB、
不能有任何网络请求（字体也要打包进去）、不能有内联 <script> 和 onclick= 这类内联事件。

打包内容：
    index.html          去掉 Google Fonts 和配音配置，改为引用包内文件
    scene.js            这一集的动画
    shared/engine.js    共用引擎
    shared/style.css    共用样式
    shared/fonts.css    本地字体声明
    shared/fonts/       站酷快乐体（只保留这一集用到的字，约 100KB）和 OFL 许可证

用法：
    pip install fonttools brotli
    python3 build_xhs.py            # 打包所有主题，输出 dist/xiaohongshu/<主题>.zip
    python3 build_xhs.py gout       # 只打包某一集
"""
import io
import os
import re
import shutil
import sys
import zipfile

from fontTools import subset

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "dist", "xiaohongshu")
FONT = os.path.join(ROOT, "assets", "fonts", "ZCOOLKuaiLe-Regular.ttf")
LICENSE = os.path.join(ROOT, "assets", "fonts", "OFL.txt")
LIMIT = 2 * 1024 * 1024

FONTS_CSS = """@font-face {
  font-family: "ZCOOL KuaiLe";
  src: url("fonts/zcool-kuaile.woff2") format("woff2");
  font-display: swap;
}
"""


def read(path):
    return open(path, encoding="utf-8").read()


def topics():
    return sorted(d for d in os.listdir(ROOT)
                  if os.path.isfile(os.path.join(ROOT, d, "index.html")) and os.path.isfile(os.path.join(ROOT, d, "scene.js")))


def page_html(topic):
    html = read(os.path.join(ROOT, topic, "index.html"))
    html = re.sub(r'\s*<link rel="preconnect"[^>]*>', "", html)
    html = re.sub(r'\s*<link rel="stylesheet" href="https://fonts\.googleapis\.com[^>]*>', "", html)
    html = re.sub(r'\s*<script id="video-meta" type="application/json">.*?</script>', "", html, flags=re.S)
    html = html.replace('<link rel="stylesheet" href="../shared/style.css">',
                        '<link rel="stylesheet" href="shared/fonts.css">\n<link rel="stylesheet" href="shared/style.css">')
    html = html.replace('src="../shared/', 'src="shared/')
    return html


def font_subset(text):
    chars = set(text) | set(chr(c) for c in range(0x20, 0x7F)) | set("，。、；：！？（）“”《》·…—～％")
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = ["*"]
    font = subset.load_font(FONT, opts)
    sub = subset.Subsetter(opts)
    sub.populate(text="".join(sorted(chars)))
    sub.subset(font)
    buf = io.BytesIO()
    subset.save_font(font, buf, opts)
    return buf.getvalue()


def check(files):
    """按小工具的规则检查，不合格就停止打包。"""
    problems = []
    if "index.html" not in files:
        problems.append("zip 根目录没有 index.html")
    total = sum(len(b) for b in files.values())
    if total >= LIMIT:
        problems.append(f"总包 {total / 1024:.0f}KB，超过 2MB")
    for name, data in files.items():
        if not name.endswith((".html", ".js", ".css")):
            continue
        text = data.decode("utf-8")
        if name.endswith(".html"):
            for tag in re.findall(r"<script\b[^>]*>", text):
                if "src=" not in tag:
                    problems.append(f"{name}: 有内联脚本 {tag}")
            if re.search(r"<[^>]+\son[a-z]+\s*=", text):
                problems.append(f"{name}: 有 onclick= 这类内联事件")
        if re.search(r"https?://", re.sub(r"/\*.*?\*/", "", text, flags=re.S)):
            problems.append(f"{name}: 引用了外部网址")
        if re.search(r"\beval\s*\(|new Function\b|\bfetch\s*\(|XMLHttpRequest|WebSocket|<iframe", text):
            problems.append(f"{name}: 用到了 eval / 网络请求 / iframe")
    return total, problems


def build(topic):
    html = page_html(topic)
    scene = read(os.path.join(ROOT, topic, "scene.js"))
    engine = read(os.path.join(ROOT, "shared", "engine.js"))
    style = read(os.path.join(ROOT, "shared", "style.css"))
    files = {
        "index.html": html.encode("utf-8"),
        "scene.js": scene.encode("utf-8"),
        "shared/engine.js": engine.encode("utf-8"),
        "shared/style.css": style.encode("utf-8"),
        "shared/fonts.css": FONTS_CSS.encode("utf-8"),
        "shared/fonts/zcool-kuaile.woff2": font_subset(html + scene + engine),
        "shared/fonts/OFL.txt": open(LICENSE, "rb").read(),
    }
    total, problems = check(files)
    if problems:
        raise SystemExit(f"{topic} 没有通过检查：\n  " + "\n  ".join(problems))

    folder = os.path.join(OUT, topic)
    shutil.rmtree(folder, ignore_errors=True)
    for name, data in files.items():
        path = os.path.join(folder, name)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        open(path, "wb").write(data)
    zpath = os.path.join(OUT, topic + ".zip")
    with zipfile.ZipFile(zpath, "w", zipfile.ZIP_DEFLATED) as z:
        for name, data in files.items():
            z.writestr(name, data)
    print(f"已生成 dist/xiaohongshu/{topic}.zip（解压后 {total / 1024:.0f}KB，zip {os.path.getsize(zpath) / 1024:.0f}KB）")


if __name__ == "__main__":
    for t in sys.argv[1:] or topics():
        build(t)
