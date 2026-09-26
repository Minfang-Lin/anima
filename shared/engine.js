// 科普动画共用引擎：绘本风画笔、章节切换、网页播放和逐帧录制。
// 每一集在自己的 scene.js 里用 Anima.register(...) 登记章节数据、状态、update() 和 draw()。
(() => {
  // 老版本 iOS / 安卓 WebView 没有 roundRect，这里补一个简单版本
  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
      r = Math.max(0, Math.min(typeof r === "number" ? r : 0, Math.abs(w) / 2, Math.abs(h) / 2));
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r); this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r); this.arcTo(x, y, x + w, y, r);
      this.closePath();
    };
  }

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
  let UI = REC ? LY.UI : 1;

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
    // 顶部留给数值胶囊，标注不放进去
    const top = (Math.max(12, W / 60) * UI * 1.4 + 22) * pillRows + 10;
    const bx = clamp(lx - w / 2, 6, W - w - 6), by = clamp(ly < ty ? ly - bh : ly, top, H - bh - 6);
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

  // ---------- 画风 ----------
  // 默认是卡通绘本风；meta.look === "textbook"（机制类集，见 shared/textbook.js）时，
  // 胶囊、片头标题卡和录制视频的外框换成干净的教科书示意图样式。
  const TB_SKIN = {
    tb: true, font: SANS, w: "500 ", bold: "700 ", ink: "#2f3a55", soft: "#6c7893",
    bg: "#eef1f6", shadow: "rgba(47,58,85,0.10)", line: "#aeb7c9", veil: "rgba(251,252,254,0.95)",
    factBg: "#f3f6fb", factLine: "#b9c3d6",
  };
  const CARTOON_SKIN = {
    tb: false, font: ROUND, w: "", bold: "", ink: C.ink, soft: C.soft,
    bg: "#fff1ee", shadow: C.ink, line: C.ink, veil: "rgba(255,241,238,0.92)",
    factBg: "#fff6da", factLine: C.sugar,
  };
  const skin = () => (ep && ep.meta && ep.meta.look === "textbook" ? TB_SKIN : CARTOON_SKIN);
  // 描边：卡通风用粗深紫线，教科书风用细灰线
  function edge(w) {
    const k = skin();
    if (!k.tb) { outline(w); return; }
    ctx.strokeStyle = k.line; ctx.lineWidth = Math.max(1.2, w * 0.4); ctx.lineJoin = "round"; ctx.lineCap = "round";
  }

  // 角落里的数值胶囊
  let leftPillEnd = 0; // 这一帧左上角胶囊的右边缘
  let pillRows = 1, pillRowsNow = 1; // 顶部胶囊占了几行（上一帧的结果，给标注避让用）
  function pill(x, y, label, value, color, alignRight) {
    const fs = Math.max(12, W / 60) * UI, k = skin();
    const f1 = `${k.w}${fs}px ${k.font}`, f2 = `${k.bold}${fs * 1.4}px ${k.font}`;
    ctx.font = f1;
    const t1 = ctx.measureText(label).width;
    ctx.font = f2;
    const t2 = ctx.measureText(value).width;
    const w = t1 + t2 + 34, h = fs * 1.4 + 14;
    let bx = alignRight ? x - w : x;
    // 窄屏上右边的胶囊和左边的挤在一起时，叠放到左边那个的下面
    if (alignRight && y < H / 2 && bx < leftPillEnd + 8) { bx = 14; y = y + h + 8; pillRowsNow = 2; }
    if (!alignRight && y < H / 2) leftPillEnd = Math.max(leftPillEnd, bx + w);
    rrect(bx, y, w, h, h / 2); ctx.fillStyle = C.paper; ctx.fill();
    if (k.tb) { ctx.strokeStyle = "#5f6b82"; ctx.lineWidth = 1.2; } else outline(2.5);
    ctx.stroke();
    ctx.textBaseline = "middle";
    ctx.font = f1; ctx.fillStyle = k.soft; ctx.fillText(label, bx + 14, y + h / 2 + 1);
    ctx.font = f2; ctx.fillStyle = color; ctx.fillText(value, bx + 20 + t1, y + h / 2 + 1);
  }

  // 按宽度换行：中文逐字断行，英文单词和数字（如 LDL-C、3.4）不拆开，标点不放在行首
  function wrapText(text, maxW) {
    const tokens = text.match(/[A-Za-z0-9.\-()/%+<>=≥≤μ]+|./gu) || [];
    const lines = []; let line = "";
    for (const tk of tokens) {
      if (ctx.measureText(line + tk).width > maxW && line.trim() && !"，。、；：！？）》”".includes(tk)) {
        lines.push(line); line = tk.replace(/^\s+/, "");
      } else line += tk;
    }
    if (line) lines.push(line);
    return lines;
  }

  // ---------- 小剧场登记与播放 ----------
  // 每一集的 scene.js 调用 Anima.register(id, meta, factory)：
  //   meta    标题、页头文字、所属器官和病种等
  //   factory 每次播放时调用一次，返回 { chapters, state, dur, accent, titleCard, sync, update, draw }
  // 单集页面在 <body data-episode="id"> 里写明要播哪一集；展厅页面用 Anima.play(id) / Anima.stop() 切换。
  const registry = {};
  let ep = null;          // 正在播放的这一集
  let playing = !reduce;
  let rafId = 0, last = 0;
  const $ = (id) => document.getElementById(id);
  // 清空一个元素（Chrome 61 没有 replaceChildren）
  const clear = (el) => { while (el.firstChild) el.removeChild(el.firstChild); };

  function register(id, meta, factory) { registry[id] = { id, meta, factory }; }
  // 每一集有几幕由它自己的章节数决定，不固定
  function sceneCount(r) {
    if (r.count == null) r.count = r.factory().chapters.length;
    return r.count;
  }
  function episodes() { return Object.values(registry).map((r) => Object.assign({ id: r.id }, r.meta, { scenes: sceneCount(r) })); }

  function sync() { if (ep) ep.cfg.sync({ W, H, time, cur }); }
  function resize() {
    if (!ep) return;
    if (REC) { W = LY.SW / LY.K; H = LY.SH / LY.K; cv.width = VW; cv.height = VH; }
    else {
      // 手机等窄屏用接近方形的舞台（和竖版视频一致），标注字号也放大一些
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const narrow = cv.clientWidth < 640;
      cv.style.aspectRatio = narrow ? "1000 / 820" : "16 / 9";
      UI = narrow ? 1.25 : 1;
      W = cv.clientWidth; H = W * (narrow ? 0.82 : 9 / 16);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    sync();
  }

  function update(dt) {
    const { CH, S } = ep;
    const tgt = CH[cur];
    const k = 1 - Math.exp(-dt * 1.4);
    for (const key of Object.keys(S)) if (key in tgt) S[key] = lerp(S[key], tgt[key], k);
    sync();
    ep.cfg.update(dt);
  }
  function draw() {
    ctx.globalAlpha = 1; leftPillEnd = 0; pillRowsNow = 1;
    sync(); ep.cfg.draw();
    pillRows = pillRowsNow;
  }

  function go(i) {
    if (!ep) return;
    const CH = ep.CH;
    cur = (i + CH.length) % CH.length; ep.chT = 0;
    const c = CH[cur];
    $("nTitle").textContent = c.title;
    $("nText").textContent = c.text;
    $("nFact").textContent = c.fact;
    $("chapters").querySelectorAll("button").forEach((b, j) => { if (j === cur) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current"); });
    sync();
  }

  // 页头、章节列表等界面元素只绑定一次事件
  let uiBound = false;
  function bindUI() {
    if (uiBound) return;
    uiBound = true;
    addEventListener("resize", resize);
    $("prev").addEventListener("click", () => go(cur - 1));
    $("next").addEventListener("click", () => go(cur + 1));
    $("play").addEventListener("click", () => { playing = !playing; $("play").textContent = playing ? "暂停" : "播放"; });
    cv.addEventListener("click", () => go(cur + 1)); // 点一下画面进入下一幕
    addEventListener("keydown", (e) => {
      if (!ep) return;
      if (e.key === "ArrowRight") go(cur + 1);
      if (e.key === "ArrowLeft") go(cur - 1);
      if (e.key === " " && e.target === document.body) { e.preventDefault(); $("play").click(); }
    });
  }

  // 用 meta 填写页头（标签、标题、简介）和页脚
  function renderHeader(meta, n) {
    const h = $("epHeader");
    if (h) {
      clear(h);
      const tag = document.createElement("span"); tag.className = "tag"; tag.textContent = `${meta.tag} · ${n} 幕`;
      const h1 = document.createElement("h1");
      // 标题里用【】包住的字会高亮
      for (const [k, part] of meta.headline.split(/【|】/).entries()) {
        if (!part) continue;
        if (k % 2) { const em = document.createElement("em"); em.textContent = part; h1.appendChild(em); }
        else h1.appendChild(document.createTextNode(part));
      }
      const p = document.createElement("p"); p.className = "lede"; p.textContent = meta.lede;
      h.append(tag, h1, p);
    }
    const f = $("epFooter");
    if (f) f.textContent = "科普示意动画，比例和形象都经过卡通化处理，不能替代医生的诊断和建议。" + (meta.footer || "");
    if (meta.canvasLabel) cv.setAttribute("aria-label", meta.canvasLabel);
  }

  function frame(now) {
    if (!ep) { rafId = 0; return; }
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    time += dt;
    if (playing) { ep.chT += dt; if (ep.chT > ep.DUR) go(cur + 1); }
    $("prog").style.width = (ep.chT / ep.DUR * 100).toFixed(2) + "%";
    update(dt);
    draw();
    rafId = requestAnimationFrame(frame);
  }

  function play(id) {
    const r = registry[id];
    if (!r) throw new Error("没有登记这一集：" + id);
    const cfg = r.factory();
    ep = { id, meta: r.meta, cfg, CH: cfg.chapters, S: cfg.state, DUR: cfg.dur || 11, accent: cfg.accent || C.coral, chT: 0 };
    for (const k of Object.keys(labelAlpha)) delete labelAlpha[k];
    time = 0; cur = 0;
    bindUI();
    r.count = ep.CH.length;
    renderHeader(r.meta, ep.CH.length);
    const list = $("chapters");
    clear(list);
    ep.CH.forEach((c, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button"; b.id = "ch" + i;
      const num = document.createElement("span"); num.textContent = i + 1;
      const name = document.createElement("em"); name.textContent = c.title;
      b.append(num, name);
      b.addEventListener("click", () => go(i));
      li.appendChild(b); list.appendChild(li);
    });
    $("play").textContent = playing ? "暂停" : "播放";
    resize();
    go(0);
    if (REC) { setupRecording(); return; }
    last = performance.now();
    if (!rafId) rafId = requestAnimationFrame(frame);
  }

  function stop() {
    ep = null;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
  }

  // ---------- 录制：舞台 + 片头 + 字幕卡 ----------
  function renderVideo() {
    const { CH, cfg, accent } = ep; // 片头副标题默认是“<tag> · N 幕”
    const SW = LY.SW, SH = LY.SH, portrait = VH > VW, c = CH[cur], k = skin();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = k.bg; ctx.fillRect(0, 0, VW, VH);
    if (!k.tb) {
      ctx.fillStyle = "#ffdcd6";
      for (let y = 11; y < VH; y += 22) for (let x = 11; x < VW; x += 22) { ctx.beginPath(); ctx.arc(x, y, 1.6, 0, Math.PI * 2); ctx.fill(); }
    }
    ctx.fillStyle = k.shadow; rrect(SX + 8, SY + 8, SW, SH, 36); ctx.fill();
    ctx.save(); ctx.translate(SX, SY); rrect(0, 0, SW, SH, 36); ctx.clip(); ctx.scale(LY.K, LY.K);
    draw();
    const titleT = window.__TIMELINE ? window.__TIMELINE.intro : 2.5;
    const ta = time < titleT ? 1 : clamp(1 - (time - titleT), 0, 1);
    if (ta > 0) {
      ctx.globalAlpha = ta;
      ctx.fillStyle = k.veil; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = k.ink; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      const lines = portrait ? cfg.titleCard.lines : [cfg.titleCard.lines.join("")];
      const fs = portrait ? 62 : 72;
      ctx.font = `${k.bold}${fs}px ${k.font}`;
      lines.forEach((ln, i) => ctx.fillText(ln, W / 2, H / 2 - 30 - (lines.length - 1 - i) * fs * 1.25));
      ctx.font = `${k.w}${fs * 0.47}px ${k.font}`; ctx.fillStyle = k.soft; ctx.fillText(cfg.titleCard.sub || `${ep.meta.tag} · ${CH.length} 幕`, W / 2, H / 2 + 50);
      ctx.textAlign = "left"; ctx.globalAlpha = 1;
    }
    ctx.restore();
    edge(4); rrect(SX, SY, SW, SH, 36); ctx.stroke();

    ctx.textBaseline = "middle";
    const badgeAt = (x, y, fs) => {
      ctx.font = `${k.bold}${fs}px ${k.font}`;
      const badge = `第 ${cur + 1} 幕`, bw = ctx.measureText(badge).width + fs * 1.1, bh = fs * 1.6;
      rrect(x, y - bh / 2, bw, bh, bh / 2); ctx.fillStyle = accent; ctx.fill();
      if (!k.tb) { outline(3); ctx.stroke(); }
      ctx.fillStyle = C.paper; ctx.fillText(badge, x + fs * 0.55, y + 1);
      return bw;
    };
    if (!portrait) {
      const cy0 = SY + SH + 26, ch = VH - cy0 - 22;
      ctx.fillStyle = k.shadow; rrect(SX + 6, cy0 + 6, SW, ch, 28); ctx.fill();
      ctx.fillStyle = C.paper; rrect(SX, cy0, SW, ch, 28); ctx.fill(); edge(4); ctx.stroke();
      const bw = badgeAt(SX + 26, cy0 + 43, 28);
      ctx.fillStyle = k.ink; ctx.font = `${k.bold}36px ${k.font}`; ctx.fillText(c.title, SX + 46 + bw, cy0 + 43);
      ctx.font = `24px ${SANS}`; ctx.fillStyle = k.ink;
      wrapText(c.text, SW - 56).slice(0, 3).forEach((ln, i) => ctx.fillText(ln, SX + 28, cy0 + 90 + i * 34));
      return;
    }
    const bw = badgeAt(SX, 78, 34);
    ctx.fillStyle = k.ink; ctx.font = `${k.bold}50px ${k.font}`;
    ctx.fillText(c.title, SX + bw + 20, 80);
    const cy0 = SY + SH + 34, ch = VH - cy0 - 40;
    ctx.fillStyle = k.shadow; rrect(SX + 8, cy0 + 8, SW, ch, 32); ctx.fill();
    ctx.fillStyle = C.paper; rrect(SX, cy0, SW, ch, 32); ctx.fill(); edge(4); ctx.stroke();
    ctx.fillStyle = k.ink; ctx.font = `35px ${SANS}`;
    wrapText(c.text, SW - 70).slice(0, 5).forEach((ln, i) => ctx.fillText(ln, SX + 35, cy0 + 52 + i * 52));
    // 数据条只有一行，放不下就把字缩小
    let ffs = 26;
    ctx.font = `${ffs}px ${SANS}`;
    while (ffs > 18 && ctx.measureText(c.fact).width > SW - 90) { ffs -= 1; ctx.font = `${ffs}px ${SANS}`; }
    const fy = cy0 + ch - 58;
    rrect(SX + 28, fy - 26, SW - 56, 52, 18); ctx.fillStyle = k.factBg; ctx.fill();
    ctx.strokeStyle = k.factLine; ctx.lineWidth = k.tb ? 1.5 : 2.5; ctx.setLineDash([8, 6]); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = k.ink; ctx.fillText(wrapText(c.fact, SW - 90)[0], SX + 45, fy + 1);
  }

  // 由 record.js 调用：每次推进一帧并画出来；有配音时每幕时长跟着 __TIMELINE 走
  function setupRecording() {
    const TL = window.__TIMELINE;
    const durs = TL ? TL.durs : ep.CH.map(() => ep.DUR);
    window.__rec = {
      total: durs.reduce((a, b) => a + b, 0),
      tick(dt) {
        time += dt; ep.chT += dt;
        if (ep.chT > durs[cur] && cur < ep.CH.length - 1) { const over = ep.chT - durs[cur]; go(cur + 1); ep.chT = over; }
        update(dt); renderVideo();
      },
    };
  }

  // 单集页面：所有脚本加载完后，自动播放 <body data-episode> 指定的那一集
  document.addEventListener("DOMContentLoaded", () => {
    const id = document.body.dataset.episode;
    if (id) play(id);
  });

  window.Anima = {
    ctx, C, ROUND, SANS, rnd, lerp, clamp, mix,
    outline, rrect, face, sweat, heart, bolt, dots, callout, pill,
    register, episodes, play, stop,
    get UI() { return UI; },
    // 当前这一集的画风（"textbook" 或空），给 shared/textbook.js 等共用工具看
    get look() { return (ep && ep.meta && ep.meta.look) || ""; },
  };
})();
