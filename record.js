// 把某个主题的动画（<主题>/index.html）渲染成 30fps 的 MP4。
// 用法：npm install && npx playwright install chromium
//   node record.js gout                        横版 16:9，1920×1080
//   node record.js gout --ratio 3:4            竖版 3:4，1080×1440
//   node record.js gout --audio                带配音和背景音乐（先运行 python3 make_audio.py gout）
//   node record.js gout 我的视频.mp4             自己指定文件名
//   node record.js gout --durs 25,30,22,33,31,29 --intro 5
//                                              不带声音，按剪映里配好的旁白长度定每一幕的秒数；
//                                              --intro 是片头标题停留的秒数（默认 3），会加在第 1 幕前面
//   node record.js gout --durs 30                 每一幕都 30 秒
// 需要 ffmpeg：系统里装好的 ffmpeg，或者用环境变量 FFMPEG 指定路径。
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");

const FPS = 30;
const SIZES = { "16:9": [1920, 1080], "3:4": [1080, 1440] };
const fs = require("fs");
const args = process.argv.slice(2);
const ri = args.indexOf("--ratio");
const RATIO = ri >= 0 ? args.splice(ri, 2)[1] : "16:9";
if (!SIZES[RATIO]) { console.error(`不支持的比例 ${RATIO}，可选：${Object.keys(SIZES).join("、")}`); process.exit(1); }
const [VW, VH] = SIZES[RATIO];
function takeOpt(name) { const i = args.indexOf(name); return i >= 0 ? args.splice(i, 2)[1] : null; }
const DURS = takeOpt("--durs");
const INTRO = takeOpt("--intro");
const ai = args.indexOf("--audio");
const AUDIO = ai >= 0 && args.splice(ai, 1).length > 0;
const TOPIC = (args.shift() || "").replace(/\/+$/, "");
const PAGE = path.join(__dirname, TOPIC, "index.html");
if (!TOPIC || !fs.existsSync(PAGE)) {
  const topics = fs.readdirSync(__dirname).filter((d) => fs.existsSync(path.join(__dirname, d, "index.html")));
  console.error(`请指定主题文件夹，可选：${topics.join("、")}`);
  process.exit(1);
}
const TL_PATH = path.join(__dirname, TOPIC, "build", "timeline.json");
const WAV = path.join(__dirname, TOPIC, "build", "soundtrack.wav");
if (AUDIO && !(fs.existsSync(TL_PATH) && fs.existsSync(WAV))) {
  console.error(`没有找到 ${TOPIC}/build/ 下的音轨，请先运行 python3 make_audio.py ${TOPIC}`);
  process.exit(1);
}
let TIMELINE = AUDIO ? JSON.parse(fs.readFileSync(TL_PATH, "utf8")) : null;
if (DURS && !AUDIO) {
  const js = fs.readFileSync(path.join(__dirname, TOPIC, "scene.js"), "utf8");
  const start = js.indexOf("const CH = [");
  const n = (js.slice(start, js.indexOf("\n  ];", start)).match(/\btext: "/g) || []).length;
  let d = DURS.split(/[,，\s]+/).filter(Boolean).map(Number);
  if (d.some((x) => !(x > 0))) { console.error("--durs 要写成用逗号隔开的秒数，例如 --durs 25,30,22"); process.exit(1); }
  if (d.length === 1) d = Array(n).fill(d[0]);
  if (d.length !== n) { console.error(`这一集有 ${n} 幕，--durs 给了 ${d.length} 个数`); process.exit(1); }
  const intro = INTRO ? Number(INTRO) : 3;
  d[0] += intro;
  TIMELINE = { intro, durs: d, total: d.reduce((a, b) => a + b, 0) };
}
const OUT = args[0] || `${TOPIC}${RATIO === "16:9" ? "" : "-" + RATIO.replace(":", "x")}${AUDIO ? "-voice" : ""}.mp4`;
const FFMPEG = process.env.FFMPEG || "ffmpeg";

(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const page = await browser.newPage({ viewport: { width: VW, height: VH } });
  await page.addInitScript(([ratio, tl]) => {
    window.__RECORD = true; window.__RATIO = ratio;
    if (tl) window.__TIMELINE = tl;
  }, [RATIO, TIMELINE]);
  await page.goto("file://" + PAGE);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => window.__rec);

  const total = await page.evaluate(() => window.__rec.total);
  const frames = Math.round(total * FPS);

  const ff = spawn(FFMPEG, [
    "-y", "-loglevel", "error",
    "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
    ...(AUDIO ? ["-i", WAV, "-c:a", "aac", "-b:a", "192k", "-shortest"] : []),
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-preset", "medium",
    "-movflags", "+faststart", OUT,
  ], { stdio: ["pipe", "inherit", "inherit"] });

  for (let i = 0; i < frames; i++) {
    const b64 = await page.evaluate((dt) => {
      window.__rec.tick(dt);
      return document.getElementById("cv").toDataURL("image/jpeg", 0.92).split(",")[1];
    }, 1 / FPS);
    if (!ff.stdin.write(Buffer.from(b64, "base64"))) await new Promise((r) => ff.stdin.once("drain", r));
    if (i % (FPS * 5) === 0) process.stdout.write(`\r渲染中 ${Math.round((i / frames) * 100)}%`);
  }
  ff.stdin.end();
  await new Promise((r, j) => ff.on("close", (c) => (c ? j(new Error("ffmpeg 退出码 " + c)) : r())));
  await browser.close();
  console.log(`\r完成：${OUT}（${frames} 帧，${total} 秒）`);
  if (TIMELINE && !AUDIO) {
    const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.round(t % 60 * 10) / 10).padStart(2, "0")}`;
    let t = TIMELINE.intro;
    const starts = TIMELINE.durs.map((d, i) => { const at = i === 0 ? TIMELINE.intro : t; t = i === 0 ? d : t + d; return at; });
    console.log("在剪映里把每段朗读放到这些时间点：片头 0:00，" + starts.map((a, i) => `第 ${i + 1} 幕 ${mmss(a)}`).join("，"));
  }
})();
