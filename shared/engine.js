// 科普动画共用引擎：绘本风画笔、章节切换、网页播放和逐帧录制。
// 每个主题页面只需要提供章节数据、状态、update() 和 draw()，然后调用 Anima.start(...)。
(() => {
  // 共用配色（主题可以往里加自己的颜色）
  const C = {
    ink: "#5b3a4a", paper: "#ffffff", soft: "#9a7885", mint: "#6cc9ae", coral: "#ff7b7b",
    sugar: "#ffc94d", blush: "#ff9fb0", ros: "#8b7cf6", tissue: "#ffe7e3", dot: "#ffd6cf",
  };
  const ROUND = '"ZCOOL KuaiLe", "Yuanti SC", "YouYuan", "PingFang SC", sans-serif';
  const SANS = '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif';

  const cv = document.getElementById("cv");
  const ctx = cv.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 录制模式（record.js 注入 window.__RECORD / __RATIO / __TIMELINE）：固定尺寸画布，逐帧手动推进
  const REC = window.__RECORD === true;
  const LAYOUTS = {
    // VW×VH 视频尺寸；舞台左上角 (SX, SY)、大小 SW×SH；K 为舞台缩放；UI 为标注字号倍数
    "16:9": { VW: 1920, VH: 1080, SX: 240, SY: 36, SW: 1440, SH: 810, K: 1, UI: 1 },
    "3:4": { VW: 1080, VH: 1440, SX: 40, SY: 150, SW: 1000, SH: 820, K: 1.3, UI: 1.7 },
  };
  const LY = LAYOUTS[window.__RATIO] || LAYOUTS["16:9"];
  const { VW, VH, SX, SY } = LY;
  const UI = REC ? LY.UI : 1;

  let W = 0, H = 0, time = 0, cur = 0;
  const labelAlpha = {};

  // ---------- 小工具 ----------
  const rnd = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const mix = (h1, h2, t) => {
    const a = parseInt(h1.slice(1), 16), b = parseInt(h2.slice(1), 16);
    const c = (s) => Math.round(lerp((a >> s) & 255, (b >> s) & 255, clamp(t, 0, 1)));
    return `rgb(${c(16)},${c(8)},${c(0)})`;
  };

  // ---------- 绘本风画笔 ----------
  function outline(w = 2.5) { ctx.strokeStyle = C.ink; ctx.lineWidth = w; ctx.lineJoin = "round"; ctx.lineCap = "round"; }
  function rrect(x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }
  // mood: 1 开心，0 平静，-1 难过
  function face(x, y, s, mood, blush = true) {
    ctx.fillStyle = C.ink;
    const blink = (Math.sin(time * 1.3 + x * 0.05) > 0.985) ? 0.25 : 1;
    ctx.beginPath(); ctx.ellipse(x - s * 0.32, y - s * 0.08, s * 0.1, s * 0.13 * blink, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x + s * 0.32, y - s * 0.08, s * 0.1, s * 0.13 * blink, 0, 0, Math.PI * 2); ctx.fill();
    if (blush) {
      ctx.fillStyle = "rgba(255,159,176,0.8)";
      ctx.beginPath(); ctx.ellipse(x - s * 0.55, y + s * 0.18, s * 0.14, s * 0.08, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(x + s * 0.55, y + s * 0.18, s * 0.14, s * 0.08, 0, 0, Math.PI * 2); ctx.fill();
    }
    outline(Math.max(1.2, s * 0.09));
    ctx.beginPath();
    ctx.moveTo(x - s * 0.2, y + s * 0.2);
    ctx.quadraticCurveTo(x, y + s * 0.2 + s * 0.28 * mood, x + s * 0.2, y + s * 0.2);
    ctx.stroke();
  }
  // 汗珠，(x, y) 是水滴顶端
  function sweat(x, y, s) {
    ctx.fillStyle = "#9fd8ff";
    ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + s * 0.6, y + s * 0.9, x, y + s);
    ctx.quadraticCurveTo(x - s * 0.5, y + s * 0.7, x, y); ctx.fill(); outline(1.2); ctx.stroke();
  }
  function heart(x, y, s, color) {
    ctx.beginPath();
    ctx.moveTo(x, y + s * 0.7);
    ctx.bezierCurveTo(x - s * 1.2, y - s * 0.1, x - s * 0.5, y - s * 0.9, x, y - s * 0.3);
    ctx.bezierCurveTo(x + s * 0.5, y - s * 0.9, x + s * 1.2, y - s * 0.1, x, y + s * 0.7);
    ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
  }
  function bolt(x, y, s, a, color = C.ros) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(-s * 0.2, -s); ctx.lineTo(s * 0.45, -s * 0.15); ctx.lineTo(0, -s * 0.05);
    ctx.lineTo(s * 0.25, s); ctx.lineTo(-s * 0.45, s * 0.05); ctx.lineTo(0, -s * 0.02); ctx.closePath();
    ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.restore();
  }
  // 圆点背景
  function dots(n, color, seed = 30) {
    ctx.fillStyle = color;
    for (let i = 0; i < n; i++) { ctx.beginPath(); ctx.arc(rnd(i + seed) * W, rnd(i + seed + 30) * H, 3 + rnd(i) * 4, 0, Math.PI * 2); ctx.fill(); }
  }

  // 对话框标注：key 用来记住淡入淡出，(tx, ty) 指向的点，(lx, ly) 气泡位置
  function callout(key, on, tx, ty, lx, ly, text) {
    const a = labelAlpha[key] = lerp(labelAlpha[key] || 0, on ? 1 : 0, 0.08);
    if (a < 0.02) return;
    ctx.save();
    ctx.globalAlpha *= a;
    const fs = Math.max(12, W / 56) * UI;
    ctx.font = `${fs}px ${ROUND}`;
    const w = ctx.measureText(text).width + 22, bh = fs + 14;
    const bx = clamp(lx - w / 2, 6, W - w - 6), by = clamp(ly < ty ? ly - bh : ly, 6, H - bh - 6);
    outline(2);
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(clamp(lx, bx + 12, bx + w - 12), ly < ty ? by + bh : by); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = C.paper;
    ctx.beginPath(); ctx.arc(tx, ty, 4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    rrect(bx, by, w, bh, bh / 2); ctx.fill(); outline(2.5); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.textBaseline = "middle";
    ctx.fillText(text, bx + 11, by + bh / 2 + 1);
    ctx.restore();
  }

  // 角落里的数值胶囊
  function pill(x, y, label, value, color, alignRight) {
    const fs = Math.max(12, W / 60) * UI;
    ctx.font = `${fs}px ${ROUND}`;
    const t1 = ctx.measureText(label).width;
    ctx.font = `${fs * 1.4}px ${ROUND}`;
    const t2 = ctx.measureText(value).width;
    const w = t1 + t2 + 34, h = fs * 1.4 + 14;
    const bx = alignRight ? x - w : x;
    rrect(bx, y, w, h, h / 2); ctx.fillStyle = C.paper; ctx.fill(); outline(2.5); ctx.stroke();
    ctx.textBaseline = "middle";
    ctx.font = `${fs}px ${ROUND}`; ctx.fillStyle = C.soft; ctx.fillText(label, bx + 14, y + h / 2 + 1);
    ctx.font = `${fs * 1.4}px ${ROUND}`; ctx.fillStyle = color; ctx.fillText(value, bx + 20 + t1, y + h / 2 + 1);
  }

  function wrapText(text, maxW) {
    const lines = []; let line = "";
    for (const ch of text) {
      // 标点不放在行首
      if (ctx.measureText(line + ch).width > maxW && line && !"，。、；：！？）》”".includes(ch)) { lines.push(line); line = ch; } else line += ch;
    }
    if (line) lines.push(line);
    return lines;
  }

  // ---------- 启动 ----------
  function start(cfg) {
    const CH = cfg.chapters, S = cfg.state, DUR = cfg.dur || 11;
    const accent = cfg.accent || C.coral;
    let chT = 0, playing = !reduce;
    const sync = () => cfg.sync({ W, H, time, cur });

    function resize() {
      if (REC) { W = LY.SW / LY.K; H = LY.SH / LY.K; cv.width = VW; cv.height = VH; }
      else {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = cv.clientWidth; H = W * 9 / 16;
        cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      sync();
    }
    addEventListener("resize", resize); resize();

    function update(dt) {
      const tgt = CH[cur];
      const k = 1 - Math.exp(-dt * 1.4);
      for (const key of Object.keys(S)) if (key in tgt) S[key] = lerp(S[key], tgt[key], k);
      sync();
      cfg.update(dt);
    }
    function draw() { ctx.globalAlpha = 1; sync(); cfg.draw(); }

    // 界面
    const list = document.getElementById("chapters");
    CH.forEach((c, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button"; b.id = "ch" + i;
      b.innerHTML = `<span>${i + 1}</span>${c.title}`;
      b.addEventListener("click", () => go(i));
      li.appendChild(b); list.appendChild(li);
    });
    const playBtn = document.getElementById("play");
    function go(i) {
      cur = (i + CH.length) % CH.length; chT = 0;
      const c = CH[cur];
      document.getElementById("nTitle").textContent = c.title;
      document.getElementById("nText").textContent = c.text;
      document.getElementById("nFact").textContent = c.fact;
      list.querySelectorAll("button").forEach((b, j) => { if (j === cur) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current"); });
      sync();
    }
    document.getElementById("prev").onclick = () => go(cur - 1);
    document.getElementById("next").onclick = () => go(cur + 1);
    playBtn.onclick = () => { playing = !playing; playBtn.textContent = playing ? "暂停" : "播放"; };
    playBtn.textContent = playing ? "暂停" : "播放";
    addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") go(cur + 1);
      if (e.key === "ArrowLeft") go(cur - 1);
      if (e.key === " " && e.target === document.body) { e.preventDefault(); playBtn.click(); }
    });
    go(0);

    // 录制画面：舞台 + 片头 + 字幕卡
    function renderVideo() {
      const SW = LY.SW, SH = LY.SH, portrait = VH > VW, c = CH[cur];
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "#fff1ee"; ctx.fillRect(0, 0, VW, VH);
      ctx.fillStyle = "#ffdcd6";
      for (let y = 11; y < VH; y += 22) for (let x = 11; x < VW; x += 22) { ctx.beginPath(); ctx.arc(x, y, 1.6, 0, Math.PI * 2); ctx.fill(); }
      ctx.fillStyle = C.ink; rrect(SX + 8, SY + 8, SW, SH, 36); ctx.fill();
      ctx.save(); ctx.translate(SX, SY); rrect(0, 0, SW, SH, 36); ctx.clip(); ctx.scale(LY.K, LY.K);
      draw();
      const titleT = window.__TIMELINE ? window.__TIMELINE.intro : 2.5;
      const ta = time < titleT ? 1 : clamp(1 - (time - titleT), 0, 1);
      if (ta > 0) {
        ctx.globalAlpha = ta;
        ctx.fillStyle = "rgba(255,241,238,0.92)"; ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = C.ink; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        const lines = portrait ? cfg.titleCard.lines : [cfg.titleCard.lines.join("")];
        const fs = portrait ? 62 : 72;
        ctx.font = `${fs}px ${ROUND}`;
        lines.forEach((ln, i) => ctx.fillText(ln, W / 2, H / 2 - 30 - (lines.length - 1 - i) * fs * 1.25));
        ctx.font = `${fs * 0.47}px ${ROUND}`; ctx.fillStyle = C.soft; ctx.fillText(cfg.titleCard.sub, W / 2, H / 2 + 50);
        ctx.textAlign = "left"; ctx.globalAlpha = 1;
      }
      ctx.restore();
      outline(4); rrect(SX, SY, SW, SH, 36); ctx.stroke();

      ctx.textBaseline = "middle";
      const badgeAt = (x, y, fs) => {
        ctx.font = `${fs}px ${ROUND}`;
        const badge = `第 ${cur + 1} 幕`, bw = ctx.measureText(badge).width + fs * 1.1, bh = fs * 1.6;
        rrect(x, y - bh / 2, bw, bh, bh / 2); ctx.fillStyle = accent; ctx.fill(); outline(3); ctx.stroke();
        ctx.fillStyle = C.paper; ctx.fillText(badge, x + fs * 0.55, y + 1);
        return bw;
      };
      if (!portrait) {
        const cy0 = SY + SH + 26, ch = VH - cy0 - 22;
        ctx.fillStyle = C.ink; rrect(SX + 6, cy0 + 6, SW, ch, 28); ctx.fill();
        ctx.fillStyle = C.paper; rrect(SX, cy0, SW, ch, 28); ctx.fill(); outline(4); ctx.stroke();
        const bw = badgeAt(SX + 26, cy0 + 43, 28);
        ctx.fillStyle = C.ink; ctx.font = `36px ${ROUND}`; ctx.fillText(c.title, SX + 46 + bw, cy0 + 43);
        ctx.font = `24px ${SANS}`;
        wrapText(c.text, SW - 56).slice(0, 3).forEach((ln, i) => ctx.fillText(ln, SX + 28, cy0 + 90 + i * 34));
        return;
      }
      const bw = badgeAt(SX, 78, 34);
      ctx.fillStyle = C.ink; ctx.font = `50px ${ROUND}`;
      ctx.fillText(c.title, SX + bw + 20, 80);
      const cy0 = SY + SH + 34, ch = VH - cy0 - 40;
      ctx.fillStyle = C.ink; rrect(SX + 8, cy0 + 8, SW, ch, 32); ctx.fill();
      ctx.fillStyle = C.paper; rrect(SX, cy0, SW, ch, 32); ctx.fill(); outline(4); ctx.stroke();
      ctx.fillStyle = C.ink; ctx.font = `35px ${SANS}`;
      wrapText(c.text, SW - 70).slice(0, 5).forEach((ln, i) => ctx.fillText(ln, SX + 35, cy0 + 52 + i * 52));
      ctx.font = `26px ${SANS}`;
      const fy = cy0 + ch - 58;
      rrect(SX + 28, fy - 26, SW - 56, 52, 18); ctx.fillStyle = "#fff6da"; ctx.fill();
      ctx.strokeStyle = C.sugar; ctx.lineWidth = 2.5; ctx.setLineDash([8, 6]); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = C.ink; ctx.fillText(wrapText(c.fact, SW - 90)[0], SX + 45, fy + 1);
    }

    const prog = document.getElementById("prog");
    if (REC) {
      // 由 record.js 调用：每次推进一帧并画出来；有配音时每幕时长跟着 __TIMELINE 走
      const TL = window.__TIMELINE;
      const durs = TL ? TL.durs : CH.map(() => DUR);
      window.__rec = {
        total: durs.reduce((a, b) => a + b, 0),
        tick(dt) {
          time += dt; chT += dt;
          if (chT > durs[cur] && cur < CH.length - 1) { const over = chT - durs[cur]; go(cur + 1); chT = over; }
          update(dt); renderVideo();
        },
      };
      return;
    }
    let last = performance.now();
    function frame(now) {
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      time += dt;
      if (playing) { chT += dt; if (chT > DUR) go(cur + 1); }
      prog.style.width = (chT / DUR * 100).toFixed(2) + "%";
      update(dt);
      draw();
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  window.Anima = {
    ctx, C, ROUND, SANS, UI, rnd, lerp, clamp, mix,
    outline, rrect, face, sweat, heart, bolt, dots, callout, pill, start,
  };
})();
