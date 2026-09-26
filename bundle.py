"""把每一集打包成一个独立的 HTML 文件（共用的样式和引擎直接写进页面里），
单独下载、双击就能在浏览器里打开，也方便发给别人。

用法：
    python3 bundle.py            # 打包所有主题，输出到 standalone/<主题>.html
    python3 bundle.py gout       # 只打包某一集
"""
import os
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))


def topics():
    return sorted(d for d in os.listdir(ROOT)
                  if d != "standalone" and os.path.isfile(os.path.join(ROOT, d, "index.html")))


def bundle(topic):
    html = open(os.path.join(ROOT, topic, "index.html"), encoding="utf-8").read()
    css = open(os.path.join(ROOT, "shared", "style.css"), encoding="utf-8").read()
    js = open(os.path.join(ROOT, "shared", "engine.js"), encoding="utf-8").read()
    link = '<link rel="stylesheet" href="../shared/style.css">'
    script = '<script src="../shared/engine.js"></script>'
    if link not in html or script not in html:
        raise SystemExit(f"{topic}/index.html 里没有找到共用样式或引擎的引用")
    html = html.replace(link, "<style>\n" + css + "</style>")
    html = html.replace(script, "<script>\n" + js + "</script>")
    out_dir = os.path.join(ROOT, "standalone")
    os.makedirs(out_dir, exist_ok=True)
    out = os.path.join(out_dir, topic + ".html")
    open(out, "w", encoding="utf-8").write(html)
    print(f"已生成 standalone/{topic}.html")


if __name__ == "__main__":
    for t in sys.argv[1:] or topics():
        bundle(t)
