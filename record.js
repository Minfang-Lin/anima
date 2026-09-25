// 把 index.html 渲染成 1920×1080、30fps 的 MP4。
// 用法：npm install && npx playwright install chromium && npm run record
// 需要 ffmpeg：系统里装好的 ffmpeg，或者用环境变量 FFMPEG 指定路径。
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");

const FPS = 30;
const OUT = process.argv[2] || "diabetes-vessels.mp4";
const FFMPEG = process.env.FFMPEG || "ffmpeg";

(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.addInitScript(() => { window.__RECORD = true; });
  await page.goto("file://" + path.resolve(__dirname, "index.html"));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => window.__rec);

  const total = await page.evaluate(() => window.__rec.total);
  const frames = Math.round(total * FPS);

  const ff = spawn(FFMPEG, [
    "-y", "-loglevel", "error",
    "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
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
