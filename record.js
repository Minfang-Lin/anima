// 把 index.html 渲染成 30fps 的 MP4。
// 用法：npm install && npx playwright install chromium
//   npm run record                  横版 16:9，1920×1080
//   npm run record -- --ratio 3:4   竖版 3:4，1080×1440
//   node record.js 我的视频.mp4 --ratio 3:4
//   加 --audio：带配音和背景音乐（先运行 python3 make_audio.py 生成 build/ 下的音轨）
// 需要 ffmpeg：系统里装好的 ffmpeg，或者用环境变量 FFMPEG 指定路径。
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");

const FPS = 30;
const SIZES = { "16:9": [1920, 1080], "3:4": [1080, 1440] };
const args = process.argv.slice(2);
const ri = args.indexOf("--ratio");
const RATIO = ri >= 0 ? args.splice(ri, 2)[1] : "16:9";
if (!SIZES[RATIO]) { console.error(`不支持的比例 ${RATIO}，可选：${Object.keys(SIZES).join("、")}`); process.exit(1); }
const [VW, VH] = SIZES[RATIO];
const ai = args.indexOf("--audio");
const AUDIO = ai >= 0 && args.splice(ai, 1).length > 0;
const fs = require("fs");
const TL_PATH = path.join(__dirname, "build", "timeline.json");
const WAV = path.join(__dirname, "build", "soundtrack.wav");
if (AUDIO && !(fs.existsSync(TL_PATH) && fs.existsSync(WAV))) {
  console.error("没有找到 build/timeline.json 和 build/soundtrack.wav，请先运行 python3 make_audio.py");
  process.exit(1);
}
const TIMELINE = AUDIO ? JSON.parse(fs.readFileSync(TL_PATH, "utf8")) : null;
const OUT = args[0] || `diabetes-vessels${RATIO === "16:9" ? "" : "-" + RATIO.replace(":", "x")}${AUDIO ? "-voice" : ""}.mp4`;
const FFMPEG = process.env.FFMPEG || "ffmpeg";

(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const page = await browser.newPage({ viewport: { width: VW, height: VH } });
  await page.addInitScript(([ratio, tl]) => {
    window.__RECORD = true; window.__RATIO = ratio;
    if (tl) window.__TIMELINE = tl;
  }, [RATIO, TIMELINE]);
  await page.goto("file://" + path.resolve(__dirname, "index.html"));
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
})();
