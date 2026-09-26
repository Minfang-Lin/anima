"""把「身体小剧场」展厅（根目录 index.html + 所有已上线的小剧场）打包成
小红书 Builder Hub「小工具」可以直接上传的一个 zip。

小工具的限制（见小红书《小工具容器能力清单》）：纯 HTML/CSS/JS、index.html 在 zip 根目录、
总包 < 2MB、不能有任何网络请求（字体也要打包进去）、不能有内联 <script> 和 onclick= 这类内联事件，
代码要兼容安卓 8.1 自带的 Chrome 61（JS 限 ES2017）。

打包内容：
    index.html              展厅页面（去掉 Google Fonts，改为引用包内字体）
    shared/                 引擎、样式、展厅脚本、目录、本地字体（站酷快乐体子集，OFL 许可证写在 fonts.css 的注释里）
    <主题>/scene.js          每一集的动画

新做好一集后，在根目录 index.html 里加一行 <script src="<主题>/scene.js">，
再运行这个脚本；如果忘了加，脚本会提示。

用法：
    pip install fonttools brotli
    python3 build_xhs.py                  # 输出 dist/xiaohongshu/body-theater.zip
    python3 build_xhs.py --only-listed    # 只打包已经加进展厅的集（有新集还在制作时用）
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
# 小工具只接受这些文件类型
ALLOWED = (".html", ".css", ".js", ".json", ".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp", ".woff", ".woff2")

FONTS_CSS = """/*
站酷快乐体（ZCOOL KuaiLe），按本页用到的字裁剪。
字体使用 SIL Open Font License 1.1，许可证全文见下方（小工具不接受 .txt 文件，所以写在这里）。

{license}
*/
@font-face {
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


def page_html():
    html = read(os.path.join(ROOT, "index.html"))
    html = re.sub(r'\s*<link rel="preconnect"[^>]*>', "", html)
    html = re.sub(r'\s*<link rel="stylesheet" href="https://fonts\.googleapis\.com[^>]*>', "", html)
    html = html.replace('<link rel="stylesheet" href="shared/style.css">',
                        '<link rel="stylesheet" href="shared/fonts.css">\n<link rel="stylesheet" href="shared/style.css">')
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
    for name in files:
        if not name.lower().endswith(ALLOWED):
            problems.append(f"{name}: 小工具不支持这种文件类型")
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
        # SVG / XML 命名空间（http://www.w3.org/...）只是标识，不会发请求
        code = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
        if re.search(r"https?://(?!www\.w3\.org/)", code):
            problems.append(f"{name}: 引用了外部网址")
        if re.search(r"\beval\s*\(|new Function\b|\bfetch\s*\(|XMLHttpRequest|WebSocket|<iframe", text):
            problems.append(f"{name}: 用到了 eval / 网络请求 / iframe")
    return total, problems


def check_compat(names):
    """小工具要求兼容安卓 8.1 自带的 Chrome 61（ES2017），用 tools/check_compat.js 检查。"""
    import subprocess
    tmp = os.path.join(OUT, ".compat")
    shutil.rmtree(tmp, ignore_errors=True)
    paths = []
    for n in names:
        src = os.path.join(ROOT, n)
        if not os.path.exists(src):  # 打包时生成的文件（如 fonts.css）
            continue
        paths.append(src)
    try:
        r = subprocess.run(["node", os.path.join(ROOT, "tools", "check_compat.js")] + paths, cwd=ROOT)
    except FileNotFoundError:
        raise SystemExit("没有找到 node，无法做 Chrome 61 兼容性检查。请先安装 Node.js，并在项目目录运行 npm install")
    if r.returncode != 0:
        raise SystemExit("兼容性检查没通过，请按上面的提示修改后再打包（如果提示找不到 acorn，先运行 npm install）")


def build():
    html = page_html()
    missing = [t for t in topics() if f'src="{t}/scene.js"' not in html]
    if missing and "--only-listed" in sys.argv:
        print("还没加进展厅、这次不打包：" + "、".join(missing))
    elif missing:
        raise SystemExit("这些小剧场还没加进展厅，请在根目录 index.html 里加上 <script src=\"<主题>/scene.js\">：" + "、".join(missing))
    files = {"index.html": html.encode("utf-8")}
    for src in re.findall(r'<(?:script src|link rel="stylesheet" href)="([^"]+)"', html):
        if src == "shared/fonts.css":
            continue
        files[src] = open(os.path.join(ROOT, src), "rb").read()
    text = "".join(b.decode("utf-8") for b in files.values())
    license_text = read(LICENSE).replace("*/", "* /")
    files["shared/fonts.css"] = FONTS_CSS.replace("{license}", license_text).encode("utf-8")
    files["shared/fonts/zcool-kuaile.woff2"] = font_subset(text)
    total, problems = check(files)
    if problems:
        raise SystemExit("没有通过小工具的检查：\n  " + "\n  ".join(problems))
    check_compat([n for n in files if n.endswith((".js", ".css"))])

    folder = os.path.join(OUT, "body-theater")
    shutil.rmtree(folder, ignore_errors=True)
    for name, data in files.items():
        path = os.path.join(folder, name)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        open(path, "wb").write(data)
    for old in os.listdir(OUT) if os.path.isdir(OUT) else []:
        if old.endswith(".zip"):
            os.remove(os.path.join(OUT, old))
    zpath = os.path.join(OUT, "body-theater.zip")
    with zipfile.ZipFile(zpath, "w", zipfile.ZIP_DEFLATED) as z:
        for name, data in files.items():
            z.writestr(name, data)
    eps = [n.split("/")[0] for n in files if n.endswith("/scene.js")]
    print(f"已生成 dist/xiaohongshu/body-theater.zip：{len(eps)} 集（{'、'.join(eps)}），"
          f"解压后 {total / 1024:.0f}KB，zip {os.path.getsize(zpath) / 1024:.0f}KB")


if __name__ == "__main__":
    build()
