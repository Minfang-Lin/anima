// 导出某一集的配音稿，方便粘贴到剪映“文本朗读”里。
// 用法：node export_script.js hypertension
// 生成 hypertension/配音稿.txt：片头引子 + 每一幕的旁白。
// 英文缩写、单位已按 index.html 里 video-meta 的 spoken 表换成读法（如 mmHg → 毫米汞柱），
// 这样剪映朗读时不会念错；字幕想保留原样的话，看 scene.js 里的 text 即可。
const fs = require("fs");
const path = require("path");

const TOPIC = (process.argv[2] || "").replace(/\/+$/, "");
const dir = path.join(__dirname, TOPIC);
if (!TOPIC || !fs.existsSync(path.join(dir, "scene.js"))) {
  const topics = fs.readdirSync(__dirname).filter((d) => fs.existsSync(path.join(__dirname, d, "scene.js")));
  console.error(`请指定主题文件夹，可选：${topics.join("、")}`);
  process.exit(1);
}

const js = fs.readFileSync(path.join(dir, "scene.js"), "utf8");
const html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
const metaMatch = html.match(/<script id="video-meta" type="application\/json">([\s\S]*?)<\/script>/);
const meta = metaMatch ? JSON.parse(metaMatch[1]) : {};
const block = js.slice(js.indexOf("const CH = ["), js.indexOf("\n  ];", js.indexOf("const CH = [")));
const titles = [...block.matchAll(/\btitle: "([^"]+)"/g)].map((m) => m[1]);
const texts = [...block.matchAll(/\btext: "([^"]+)"/g)].map((m) => m[1]);

const table = meta.spoken || {};
const keys = Object.keys(table).sort((a, b) => b.length - a.length);
const say = (t) => keys.reduce((s, k) => s.split(k).join(table[k]), t);

const lines = [];
if (meta.intro) lines.push("【片头】", say(meta.intro), "");
texts.forEach((t, i) => lines.push(`【第 ${i + 1} 幕 · ${titles[i] || ""}】`, say(t), ""));
const out = path.join(dir, "配音稿.txt");
fs.writeFileSync(out, lines.join("\n"), "utf8");
console.log(`已生成 ${path.relative(__dirname, out)}：片头 + ${texts.length} 幕`);
