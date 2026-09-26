Anima.register("sleep-drive", {
    "title": "睡意从哪来",
    "tag": "睡眠小剧场",
    "headline": "为什么越熬越【困】？",
    "lede": "困意不是凭空来的：大脑里有一座跟着太阳走的生物钟，还有一只醒得越久越满的“困意沙漏”。认识腺苷、咖啡因、褪黑素和睡眠开关，看看睡意是怎么攒起来的。",
    "summary": "生物钟和睡眠压力一起决定什么时候困：腺苷、咖啡因、褪黑素、GABA 和食欲素，以及午睡为什么别太长。",
    "footer": "长期失眠可到睡眠医学科、神经内科或精神心理科就诊。",
    "canvasLabel": "卡通大脑里的困意小剧场动画",
    "disease": "睡眠与失眠",
    "organs": ["brain"],
    "categories": ["sleep"],
    "color": "#5d63c9"
  }, () => {
  const CH = [
    { title: "两个开关管睡觉", feel: 0.15, sky: 0, aden: 0.3, bound: 0.2, caff: 0, drowsy: 0, asleep: 0, forced: 0, pineal: 0, sw: 0, flip: 0, dark: 0, nap: 0, heal: 0,
      pill: ["时间", "7:00", "ok"],
      text: "什么时候犯困，主要由大脑里的两套机制一起决定。一套是生物钟，在下丘脑的视交叉上核，它跟着日照定时间，白天让人清醒，晚上提醒该休息了。另一套是睡眠压力，醒着的时间越长，它积得越多，人就越困。",
      fact: "生物钟一圈约 24 小时，每天靠早晨的光线重新对表",
      labels: ["clock", "glass"] },
    { title: "腺苷：困意的沙漏", feel: 0.85, sky: 1, aden: 0.9, bound: 0.9, caff: 0, drowsy: 0.8, asleep: 0, forced: 0, pineal: 0, sw: 0, flip: 0, dark: 0.2, nap: 0, heal: 0,
      pill: ["时间", "23:00", "warn"],
      text: "醒着的时候，大脑一直在用能量，会留下一种叫腺苷的小分子。醒得越久，腺苷积得越多，它插进神经细胞上的“困意插座”，也就是腺苷受体，神经细胞慢慢安静下来，人就越来越困。好好睡一觉，腺苷被清掉，沙漏又重新归零。",
      fact: "醒得越久，睡眠压力越大；睡一觉，它就降下来",
      labels: ["aden", "socket"] },
    { title: "咖啡因：戴墨镜的冒充者", feel: 0.25, sky: 0, aden: 0.7, bound: 0, caff: 1, drowsy: 0, asleep: 0, forced: 1, pineal: 0, sw: 0, flip: 0, dark: 0, nap: 0, heal: 0,
      pill: ["时间", "15:00", "ok"],
      text: "咖啡因长得有点像腺苷，它抢先占住困意插座，却不传递困意，所以喝了咖啡、浓茶，一时就不觉得困。可腺苷并没有消失，还在门外排队。等咖啡因慢慢代谢掉，攒下的困意就会一下子涌上来。下午喝的咖啡，到了晚上可能还在起作用。",
      fact: "咖啡因半衰期约 5 小时（3～7 小时），睡前 6 小时内少喝咖啡浓茶",
      labels: ["caff", "queue"] },
    { title: "褪黑素：天黑的信号", feel: 0.6, sky: 0.85, aden: 0.6, bound: 0.6, caff: 0, drowsy: 0.45, asleep: 0, forced: 0, pineal: 1, sw: 0, flip: 0, dark: 0.25, nap: 0, heal: 0,
      pill: ["时间", "21:00", "warn"],
      text: "天黑以后，大脑深处的松果体开始分泌褪黑素，它像一封信，告诉全身“天黑了，该准备睡觉了”。可光线会让松果体停工，尤其是手机、平板屏幕里的蓝光。睡前一直刷手机，褪黑素出来得少、出来得晚，人就迟迟睡不着。",
      fact: "褪黑素更像“到点”的信号，不是强效安眠药，要不要吃请遵医嘱",
      labels: ["mel", "blue"] },
    { title: "睡眠开关：GABA 和食欲素", feel: 0.95, sky: 1, aden: 0.9, bound: 0.9, caff: 0, drowsy: 1, asleep: 1, forced: 0, pineal: 0, sw: 1, flip: 1, dark: 0.45, nap: 0, heal: 0,
      pill: ["时间", "23:00", "ok"],
      text: "困意攒够了，天也黑了，下丘脑里的睡眠中心就放出 GABA，让清醒中心安静下来，开关拨到“睡”。白天则是食欲素让开关稳稳停在“醒”，组胺也在帮忙保持清醒。一些老式抗过敏药会让人犯困，就是因为挡住了组胺的作用。",
      fact: "这个开关像跷跷板：一头沉下去，另一头就翘起来",
      labels: ["gaba", "wake"] },
    { title: "午睡为什么别太长", feel: 0.3, sky: 0, aden: 0.3, bound: 0.2, caff: 0, drowsy: 0, asleep: 0, forced: 0, pineal: 0, sw: 0, flip: 0, dark: 0, nap: 1, heal: 1,
      pill: ["时间", "13:30", "ok"],
      text: "午睡能清掉一部分腺苷，下午更有精神。但睡得太久，晚上的睡眠压力就不够，躺下反而睡不着。睡超过 30 分钟，还容易进入深睡，醒来昏昏沉沉，这叫睡眠惰性。规律作息，白天多晒太阳，睡前少看屏幕，困意自然会按时来。",
      fact: "午睡建议 20～30 分钟，最好在下午 3 点以前",
      labels: ["nap", "short"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    neuron: "#ffd0a8", recep: "#8fd3e8", aden: "#bdb4f7", caff: "#a8703f", caffDark: "#7a4c28",
    sand: "#bdb4f7", glass: "#eaf6ff", wood: "#d9a371", dayA: "#9fdcff", dusk: "#ffb38a", night: "#2e3170",
    sun: "#ffc94d", moon: "#ffe89a", pine: "#e0a868", pineDark: "#c7894a", phone: "#5b3a4a", blue: "#7fc8ff",
    gaba: "#8fa8ff", heartPink: "#ff9fb0", card: "#fffaf0",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, heart, sweat, dots, callout, pill } = Anima;
  const ROUND = Anima.ROUND;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0; // 本幕已经播了几秒

  const S = { feel: 0.15, sky: 0, aden: 0.3, bound: 0.2, caff: 0, drowsy: 0, asleep: 0, forced: 0, pineal: 0, sw: 0, flip: 0, dark: 0, nap: 0, heal: 0 };

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
  }

  // 第 4 幕后半段：手机亮起来
  const phoneOn = () => (cur === 3 ? clamp((lt - 5.5) / 0.8, 0, 1) : 0);

  // ---------- 布局 ----------
  function layout() {
    const hw = H * 0.17, hx = 14 + hw / 2 + H * 0.02, hTop = H * 0.36, hBot = H * 0.93;
    const panelX = W - H * 0.5;
    const nr = H * 0.11;
    const nx = (hx + hw / 2 + panelX) / 2 - H * 0.01, ny = H * 0.58;
    const ww = H * 0.3, wh = H * 0.21, wx = W - ww - 16, wy = H * 0.17;
    return { hw, hx, hTop, hBot, panelX, nr, nx, ny, ww, wh, wx, wy };
  }

  // ---------- 小角色 ----------
  function text(t, x, y, fs, color, align) {
    ctx.fillStyle = color || C.ink; ctx.font = `${fs}px ${ROUND}`;
    ctx.textAlign = align || "center"; ctx.textBaseline = "middle";
    ctx.fillText(t, x, y); ctx.textAlign = "left";
  }
  // 腺苷：困倦的小圆球，眼睛半闭
  function adenosine(x, y, s) {
    ctx.beginPath(); ctx.arc(x, y, s, 0, 6.3); ctx.fillStyle = C.aden; ctx.fill(); outline(Math.max(1.2, s * 0.14)); ctx.stroke();
    outline(Math.max(1, s * 0.12));
    ctx.beginPath();
    ctx.moveTo(x - s * 0.55, y - s * 0.05); ctx.lineTo(x - s * 0.15, y - s * 0.05);
    ctx.moveTo(x + s * 0.15, y - s * 0.05); ctx.lineTo(x + s * 0.55, y - s * 0.05); ctx.stroke();
    ctx.fillStyle = C.ink;
    ctx.beginPath(); ctx.arc(x - s * 0.35, y - s * 0.03, s * 0.12, 0, Math.PI); ctx.arc(x + s * 0.35, y - s * 0.03, s * 0.12, 0, Math.PI); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x, y + s * 0.4, s * 0.1, s * 0.13, 0, 0, 6.3); ctx.fill();
  }
  // 咖啡因：戴墨镜的咖啡豆
  function caffeine(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0);
    ctx.beginPath(); ctx.ellipse(0, 0, s * 1.05, s * 0.9, 0, 0, 6.3); ctx.fillStyle = C.caff; ctx.fill(); outline(Math.max(1.2, s * 0.14)); ctx.stroke();
    ctx.strokeStyle = C.caffDark; ctx.lineWidth = Math.max(1, s * 0.12);
    ctx.beginPath(); ctx.moveTo(-s * 0.7, s * 0.5); ctx.quadraticCurveTo(0, s * 0.3, s * 0.7, s * 0.55); ctx.stroke();
    ctx.fillStyle = "#2b2230";
    rrect(-s * 0.72, -s * 0.38, s * 0.62, s * 0.4, s * 0.15); ctx.fill();
    rrect(s * 0.1, -s * 0.38, s * 0.62, s * 0.4, s * 0.15); ctx.fill();
    ctx.fillRect(-s * 0.12, -s * 0.3, s * 0.24, s * 0.08);
    ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.fillRect(-s * 0.6, -s * 0.3, s * 0.14, s * 0.08); ctx.fillRect(s * 0.22, -s * 0.3, s * 0.14, s * 0.08);
    outline(Math.max(1, s * 0.11)); ctx.beginPath(); ctx.moveTo(-s * 0.2, s * 0.12); ctx.quadraticCurveTo(s * 0.1, s * 0.34, s * 0.35, s * 0.08); ctx.stroke();
    ctx.restore();
  }
  // 褪黑素：小月牙
  function moonBit(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(-0.4);
    ctx.beginPath(); ctx.arc(0, 0, s, 0.35 * Math.PI, 1.65 * Math.PI, false);
    ctx.arc(s * 0.45, -s * 0.15, s * 0.8, 1.45 * Math.PI, 0.55 * Math.PI, true); ctx.closePath();
    ctx.fillStyle = C.moon; ctx.fill(); outline(Math.max(1, s * 0.16)); ctx.stroke();
    ctx.restore();
  }
  // 可以困倦、睡着的小脸
  function sleepyFace(x, y, s, drowsy, asleep, mood) {
    ctx.fillStyle = C.ink;
    if (asleep > 0.5) {
      outline(Math.max(1.2, s * 0.09)); ctx.beginPath();
      ctx.arc(x - s * 0.32, y - s * 0.1, s * 0.12, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.moveTo(x + s * 0.44, y - s * 0.1); ctx.arc(x + s * 0.32, y - s * 0.1, s * 0.12, 0.1 * Math.PI, 0.9 * Math.PI); ctx.stroke();
    } else {
      const blink = Math.sin(time * 1.3 + x * 0.05) > 0.985 ? 0.25 : 1;
      const eh = s * 0.13 * blink * (1 - 0.7 * drowsy);
      ctx.beginPath(); ctx.ellipse(x - s * 0.32, y - s * 0.08 + s * 0.05 * drowsy, s * 0.1, Math.max(1, eh), 0, 0, 6.3); ctx.fill();
      ctx.beginPath(); ctx.ellipse(x + s * 0.32, y - s * 0.08 + s * 0.05 * drowsy, s * 0.1, Math.max(1, eh), 0, 0, 6.3); ctx.fill();
      if (drowsy > 0.3) { // 沉重的眼皮
        outline(Math.max(1, s * 0.07)); ctx.beginPath();
        ctx.moveTo(x - s * 0.46, y - s * 0.12); ctx.lineTo(x - s * 0.18, y - s * 0.12);
        ctx.moveTo(x + s * 0.18, y - s * 0.12); ctx.lineTo(x + s * 0.46, y - s * 0.12); ctx.stroke();
      }
    }
    ctx.fillStyle = "rgba(255,159,176,0.8)";
    ctx.beginPath(); ctx.ellipse(x - s * 0.55, y + s * 0.18, s * 0.14, s * 0.08, 0, 0, 6.3); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x + s * 0.55, y + s * 0.18, s * 0.14, s * 0.08, 0, 0, 6.3); ctx.fill();
    const yawn = asleep < 0.5 && drowsy > 0.4 ? clamp(Math.sin(time * 0.9 + x * 0.01) * 1.6 - 0.2, 0, 1) : 0;
    if (yawn > 0.02) {
      ctx.fillStyle = "#b8455a";
      ctx.beginPath(); ctx.ellipse(x, y + s * 0.3, s * 0.13, s * 0.08 + s * 0.14 * yawn, 0, 0, 6.3); ctx.fill();
      outline(Math.max(1.2, s * 0.08)); ctx.stroke();
    } else if (asleep > 0.5) {
      ctx.fillStyle = C.ink; ctx.beginPath(); ctx.ellipse(x, y + s * 0.3, s * 0.07, s * 0.05, 0, 0, 6.3); ctx.fill();
    } else {
      outline(Math.max(1.2, s * 0.09)); ctx.beginPath();
      ctx.moveTo(x - s * 0.2, y + s * 0.22); ctx.quadraticCurveTo(x, y + s * 0.22 + s * 0.28 * mood, x + s * 0.2, y + s * 0.22); ctx.stroke();
    }
  }
  function zzz(x, y, s, a) {
    for (let k = 0; k < 3; k++) {
      const t = (time * 0.35 + k / 3) % 1;
      ctx.save(); ctx.globalAlpha *= a * Math.sin(t * Math.PI);
      text("z", x + t * s * 1.2, y - t * s * 2, s * (0.6 + t * 0.6), C.soft);
      ctx.restore();
    }
  }

  // ---------- 背景 ----------
  function background() {
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(40, C.dot);
    // 大脑沟回的弯弯线条
    ctx.strokeStyle = "#ffcfc6"; ctx.lineWidth = Math.max(3, H * 0.012); ctx.lineCap = "round";
    for (let i = 0; i < 6; i++) {
      const y = H * (0.12 + i * 0.16) + Math.sin(time * 0.3 + i) * 2;
      ctx.beginPath();
      for (let x = -20; x <= W + 20; x += 12) {
        const yy = y + Math.sin(x / (H * 0.09) + i * 1.7) * H * 0.025;
        if (x === -20) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
      }
      ctx.stroke();
    }
    if (S.dark > 0.01) { ctx.fillStyle = `rgba(46,49,112,${(S.dark * 0.5).toFixed(3)})`; ctx.fillRect(0, 0, W, H); }
  }

  // 右上角：天空窗口 + 生物钟小闹钟
  function skyWindow(L) {
    const { wx, wy, ww, wh } = L, s = S.sky;
    const sky = s < 0.5 ? mix(C.dayA, C.dusk, s * 2) : mix(C.dusk, C.night, (s - 0.5) * 2);
    ctx.fillStyle = C.ink; rrect(wx + 4, wy + 4, ww, wh, 14); ctx.fill();
    ctx.save(); rrect(wx, wy, ww, wh, 14); ctx.fillStyle = sky; ctx.fill(); ctx.clip();
    // 星星
    const sa = clamp((s - 0.55) * 2.5, 0, 1);
    for (let i = 0; i < 8; i++) {
      ctx.save(); ctx.globalAlpha *= sa * (0.6 + 0.4 * Math.sin(time * 1.5 + i * 2));
      ctx.fillStyle = "#fff6c8";
      const x = wx + rnd(i + 900) * ww, y = wy + rnd(i + 930) * wh * 0.6, r = wh * 0.025;
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fill();
      ctx.restore();
    }
    // 太阳落下、月亮升起
    const sunY = wy + wh * 0.38 + s * wh * 0.9, moonY = wy + wh * 1.25 - s * wh * 0.9, r = wh * 0.17;
    const sx = wx + ww * 0.32;
    ctx.strokeStyle = C.ink; ctx.lineWidth = 2;
    for (let k = 0; k < 8; k++) {
      const a = k * Math.PI / 4 + time * 0.3;
      ctx.beginPath(); ctx.moveTo(sx + Math.cos(a) * r * 1.3, sunY + Math.sin(a) * r * 1.3); ctx.lineTo(sx + Math.cos(a) * r * 1.65, sunY + Math.sin(a) * r * 1.65); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(sx, sunY, r, 0, 6.3); ctx.fillStyle = C.sun; ctx.fill(); outline(2); ctx.stroke();
    Anima.face(sx, sunY, r * 0.8, 1, false);
    const mx = wx + ww * 0.68;
    ctx.beginPath(); ctx.arc(mx, moonY, r, 0, 6.3); ctx.fillStyle = C.moon; ctx.fill(); outline(2); ctx.stroke();
    sleepyFace(mx, moonY, r * 0.8, 0, 1, 0);
    // 小山丘
    ctx.fillStyle = mix("#8fd6a0", "#3f5a78", s);
    ctx.beginPath(); ctx.moveTo(wx, wy + wh);
    ctx.quadraticCurveTo(wx + ww * 0.25, wy + wh * 0.7, wx + ww * 0.5, wy + wh * 0.88);
    ctx.quadraticCurveTo(wx + ww * 0.75, wy + wh * 0.72, wx + ww, wy + wh * 0.84);
    ctx.lineTo(wx + ww, wy + wh); ctx.closePath(); ctx.fill();
    ctx.restore();
    // 窗框
    rrect(wx, wy, ww, wh, 14); outline(3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(wx + ww / 2, wy); ctx.lineTo(wx + ww / 2, wy + wh); ctx.strokeStyle = "rgba(91,58,74,0.35)"; ctx.lineWidth = 2; ctx.stroke();
    // 生物钟：挂在窗户左下角的小闹钟（视交叉上核）
    const cx = wx - wh * 0.05, cy = wy + wh * 0.95, cr = wh * 0.24;
    outline(2.2);
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(cx + d * cr * 0.7, cy - cr * 0.85, cr * 0.28, 0, 6.3); ctx.fillStyle = C.sun; ctx.fill(); ctx.stroke(); }
    ctx.beginPath(); ctx.arc(cx, cy, cr, 0, 6.3); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(2.5); ctx.stroke();
    ctx.strokeStyle = C.soft; ctx.lineWidth = 1.5;
    for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * cr * 0.8, cy + Math.sin(a) * cr * 0.8); ctx.lineTo(cx + Math.cos(a) * cr * 0.9, cy + Math.sin(a) * cr * 0.9); ctx.stroke(); }
    const ha = -Math.PI / 2 + time * 0.25, ma = -Math.PI / 2 + time * 1.5;
    outline(2); ctx.beginPath();
    ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(ha) * cr * 0.45, cy + Math.sin(ha) * cr * 0.45);
    ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(ma) * cr * 0.7, cy + Math.sin(ma) * cr * 0.7); ctx.stroke();
    // 一道光从窗户照向闹钟：生物钟跟着日照对表
    return { clock: { x: cx - cr * 0.7, y: cy + cr * 0.4 }, win: { x: wx + ww * 0.5, y: wy + wh } };
  }

  // 左边：困意沙漏
  function hourglass(L) {
    const { hx, hw, hTop, hBot } = L, a = S.aden, mid = (hTop + hBot) / 2, neck = hw * 0.09;
    const capH = H * 0.03;
    // 上下木板
    for (const y of [hTop - capH, hBot]) { rrect(hx - hw * 0.62, y, hw * 1.24, capH, capH / 2); ctx.fillStyle = C.wood; ctx.fill(); outline(2.2); ctx.stroke(); }
    const bulb = (top) => {
      ctx.beginPath();
      if (top) { ctx.moveTo(hx - hw / 2, hTop); ctx.lineTo(hx + hw / 2, hTop); ctx.quadraticCurveTo(hx + hw / 2, mid - hw * 0.25, hx + neck, mid); ctx.lineTo(hx - neck, mid); ctx.quadraticCurveTo(hx - hw / 2, mid - hw * 0.25, hx - hw / 2, hTop); }
      else { ctx.moveTo(hx - neck, mid); ctx.lineTo(hx + neck, mid); ctx.quadraticCurveTo(hx + hw / 2, mid + hw * 0.25, hx + hw / 2, hBot); ctx.lineTo(hx - hw / 2, hBot); ctx.quadraticCurveTo(hx - hw / 2, mid + hw * 0.25, hx - neck, mid); }
      ctx.closePath();
    };
    bulb(true); ctx.fillStyle = C.glass; ctx.fill(); bulb(false); ctx.fill();
    // 沙子：上面越来越少，下面越来越多
    const half = mid - hTop;
    ctx.save(); bulb(true); ctx.clip();
    const topLevel = hTop + half * (0.15 + 0.8 * a);
    ctx.fillStyle = C.sand; ctx.fillRect(hx - hw, topLevel, hw * 2, mid - topLevel);
    ctx.restore();
    ctx.save(); bulb(false); ctx.clip();
    const botLevel = hBot - half * (0.08 + 0.85 * a);
    ctx.fillStyle = C.sand; ctx.fillRect(hx - hw, botLevel, hw * 2, hBot - botLevel);
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    for (let i = 0; i < 10; i++) { ctx.beginPath(); ctx.arc(hx + (rnd(i + 700) - 0.5) * hw, botLevel + rnd(i + 720) * (hBot - botLevel), hw * 0.04, 0, 6.3); ctx.fill(); }
    ctx.restore();
    // 细细的沙流
    if (S.asleep < 0.5 && S.nap < 0.5) {
      ctx.fillStyle = C.sand;
      for (let i = 0; i < 5; i++) { const t = (time * 0.8 + i / 5) % 1; ctx.beginPath(); ctx.arc(hx, mid + t * (botLevel - mid), hw * 0.035, 0, 6.3); ctx.fill(); }
    }
    bulb(true); outline(2.5); ctx.stroke(); bulb(false); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.6)"; rrect(hx - hw * 0.36, hTop + half * 0.12, hw * 0.08, half * 0.4, hw * 0.04); ctx.fill();
    return { mid: { x: hx + hw * 0.3, y: botLevel + (hBot - botLevel) * 0.4 }, top: { x: hx, y: hTop - capH } };
  }

  // 中间：神经细胞和它身上的“困意插座”
  const SOCK = [-2.5, -1.65, -0.8, 0.05, 3.05];
  function neuron(L) {
    const { nx, nr } = L, ny = L.ny + Math.sin(time * 1.1) * 2;
    const sway = Math.sin(time * 0.8) * 0.05;
    // 树突和轴突
    ctx.lineCap = "round";
    const branches = [-2.1, -1.2, -0.35, 0.7, 2.45, 1.75];
    for (const pass of [0, 1]) {
      branches.forEach((a0, i) => {
        const a = a0 + sway * (i % 2 ? 1 : -1), len = nr * (i === 5 ? 2.1 : 1.5);
        const x1 = nx + Math.cos(a) * len, y1 = ny + Math.sin(a) * len;
        ctx.strokeStyle = pass ? C.neuron : C.ink; ctx.lineWidth = nr * 0.28 + (pass ? 0 : 5);
        ctx.beginPath(); ctx.moveTo(nx, ny); ctx.lineTo(x1, y1); ctx.stroke();
        if (i < 5) for (const d of [-0.5, 0.5]) {
          ctx.lineWidth = nr * 0.14 + (pass ? 0 : 5);
          ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 + Math.cos(a + d) * nr * 0.45, y1 + Math.sin(a + d) * nr * 0.45); ctx.stroke();
        }
      });
    }
    ctx.beginPath(); ctx.arc(nx, ny, nr, 0, 6.3); ctx.fillStyle = C.neuron; ctx.fill(); outline(2.5); ctx.stroke();
    // 细胞核里的小脸
    sleepyFace(nx, ny + nr * 0.05, nr * 0.62, S.drowsy, S.asleep, 1 - 0.8 * S.forced);
    if (S.forced > 0.3) {
      ctx.save(); ctx.globalAlpha *= S.forced; sweat(nx + nr * 0.62, ny - nr * 0.45 + Math.sin(time * 2) * 2, nr * 0.28); ctx.restore();
    }
    if (S.asleep > 0.3 || S.drowsy > 0.6) zzz(nx + nr * 0.8, ny - nr * 0.9, nr * 0.45, Math.max(S.asleep, (S.drowsy - 0.6) * 2.5));
    // 插座
    const sockets = SOCK.map((a, i) => {
      const x = nx + Math.cos(a) * nr, y = ny + Math.sin(a) * nr, s = nr * 0.2;
      ctx.save(); ctx.translate(x, y); ctx.rotate(a + Math.PI / 2);
      ctx.beginPath(); ctx.moveTo(-s * 1.3, 0); ctx.lineTo(-s * 1.3, -s * 1.1); ctx.lineTo(-s * 0.85, -s * 1.1);
      ctx.arc(0, -s * 1.1, s * 0.85, Math.PI, 0, true); ctx.lineTo(s * 1.3, -s * 1.1); ctx.lineTo(s * 1.3, 0); ctx.closePath();
      ctx.fillStyle = C.recep; ctx.fill(); outline(2); ctx.stroke();
      ctx.restore();
      return { x, y, a, i, s, ox: nx + Math.cos(a) * (nr + s * 1.9), oy: ny + Math.sin(a) * (nr + s * 1.9) };
    });
    return { x: nx, y: ny, r: nr, sockets };
  }

  // 插在插座上的腺苷 / 咖啡因
  function occupants(N) {
    const out = { aden: null, caff: null };
    for (const k of N.sockets) {
      const oc = clamp(S.caff * 5 - k.i, 0, 1), oa = clamp(S.bound * 5 - k.i, 0, 1) * (1 - oc);
      const s = N.r * 0.26;
      if (oa > 0.02) {
        const d = (1 - oa) * N.r * 1.2, x = k.ox + Math.cos(k.a) * d, y = k.oy + Math.sin(k.a) * d + Math.sin(time * 2 + k.i) * 1.2;
        ctx.save(); ctx.globalAlpha *= oa; adenosine(x, y, s); ctx.restore();
        if (!out.aden && k.i === 1) out.aden = { x, y };
      }
      if (oc > 0.02) {
        const d = (1 - oc) * N.r * 1.2, x = k.ox + Math.cos(k.a) * d, y = k.oy + Math.sin(k.a) * d;
        ctx.save(); ctx.globalAlpha *= oc; caffeine(x, y, s * 1.1, Math.sin(time * 2.5 + k.i) * 0.15); ctx.restore();
        if (!out.caff && k.i === 1) out.caff = { x, y };
      }
    }
    return out;
  }

  // 飘在神经细胞周围的腺苷
  function freeAdenosine(L, N) {
    const n = Math.round(S.aden * 12);
    let pick = null, far = null;
    const x0 = L.hx + L.hw * 0.8, x1 = L.panelX - H * 0.03;
    for (let i = 0; i < n; i++) {
      const a = rnd(i + 50) * 6.28 + time * 0.08 * (i % 2 ? 1 : -1), d = N.r * (2.3 + rnd(i + 70) * 1.3);
      const x = clamp(N.x + Math.cos(a) * d * 1.2, x0, x1), y = clamp(N.y + Math.sin(a) * d * 0.75 + Math.sin(time * 1.3 + i) * 3, H * 0.2, H * 0.94);
      adenosine(x, y, N.r * 0.22);
      if (y > N.y + N.r * 1.2 && (!pick || x > pick.x)) pick = { x, y };
      if (!far || y < far.y) far = { x, y };
    }
    return pick || far;
  }

  // 松果体小工厂 + 手机蓝光
  function pineal() {
    const a = S.pineal, po = phoneOn();
    const s = H * 0.1, x = W - H * 0.3, y = H * 0.8;
    ctx.save(); ctx.globalAlpha *= a;
    const prod = 1 - po;
    // 飘出来的褪黑素
    for (let i = 0; i < 7; i++) {
      const t = (time * 0.22 + i / 7) % 1;
      const mx = x - s * 0.4 - t * H * 0.5 - Math.sin(t * 6 + i) * H * 0.03, my = y - s * 1.3 - t * H * 0.35;
      moonBit(mx, my, H * 0.022, Math.sin(t * Math.PI) * prod);
    }
    // 烟囱
    rrect(x - s * 0.6, y - s * 1.35, s * 0.34, s * 0.6, 4); ctx.fillStyle = C.pineDark; ctx.fill(); outline(2); ctx.stroke();
    // 松果身体
    ctx.beginPath(); ctx.moveTo(x, y - s * 1.1);
    ctx.bezierCurveTo(x + s * 0.95, y - s * 0.7, x + s * 0.95, y + s * 0.7, x, y + s * 0.9);
    ctx.bezierCurveTo(x - s * 0.95, y + s * 0.7, x - s * 0.95, y - s * 0.7, x, y - s * 1.1);
    ctx.fillStyle = C.pine; ctx.fill(); outline(2.5); ctx.stroke();
    ctx.save(); ctx.clip();
    ctx.strokeStyle = C.pineDark; ctx.lineWidth = 2;
    for (let r = -3; r <= 3; r++) for (let c = -2; c <= 2; c++) {
      const px = x + c * s * 0.42 + (r % 2 ? s * 0.21 : 0), py = y + r * s * 0.3;
      ctx.beginPath(); ctx.arc(px, py - s * 0.1, s * 0.2, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
    }
    ctx.restore();
    ctx.fillStyle = "rgba(255,250,240,0.85)"; ctx.beginPath(); ctx.ellipse(x, y + s * 0.05, s * 0.5, s * 0.36, 0, 0, 6.3); ctx.fill();
    Anima.face(x, y + s * 0.05, s * 0.4, 1 - 1.8 * po, true);
    if (po > 0.3) sweat(x + s * 0.45, y - s * 0.4, s * 0.25);
    // 手机和蓝光
    if (po > 0.01) {
      ctx.save(); ctx.globalAlpha *= po;
      const px = W - H * 0.08, py = H * 0.6, pw = H * 0.075, ph = H * 0.13;
      ctx.fillStyle = "rgba(110,180,255,0.28)";
      ctx.beginPath(); ctx.moveTo(px - pw * 0.3, py - ph * 0.3); ctx.lineTo(x + s * 0.6, y - s * 0.6); ctx.lineTo(x + s * 0.2, y + s * 0.6); ctx.lineTo(px - pw * 0.3, py + ph * 0.3); ctx.closePath(); ctx.fill();
      ctx.save(); ctx.translate(px, py); ctx.rotate(-0.15);
      rrect(-pw / 2, -ph / 2, pw, ph, pw * 0.2); ctx.fillStyle = C.phone; ctx.fill(); outline(2); ctx.stroke();
      rrect(-pw * 0.38, -ph * 0.4, pw * 0.76, ph * 0.76, pw * 0.1); ctx.fillStyle = C.blue; ctx.fill();
      ctx.restore();
      // 停工小牌
      const bw = s * 1.1, bh = s * 0.42, bx = x - bw / 2, by = y + s * 0.95;
      rrect(bx, by, bw, bh, bh / 3); ctx.fillStyle = C.paper; ctx.fill(); outline(2); ctx.stroke();
      text("停工", x, by + bh / 2 + 1, bh * 0.62, "#f25f6b");
      ctx.restore();
    }
    ctx.restore();
    return { chimney: { x: x - s * 0.43, y: y - s * 1.35 }, factory: { x: x - s * 0.5, y: y + s * 0.2 }, moon: { x: x - s * 0.4 - H * 0.2, y: y - s * 1.3 - H * 0.14 }, phone: { x: W - H * 0.1, y: H * 0.53 } };
  }

  // 睡眠开关：跷跷板
  function seesaw() {
    const a = S.sw; if (a < 0.02) return null;
    const px = W - H * 0.27, py = H * 0.88, len = H * 0.46, ang = -0.2 + 0.4 * S.flip;
    ctx.save(); ctx.globalAlpha *= a;
    // 支点
    ctx.beginPath(); ctx.moveTo(px, py - H * 0.02); ctx.lineTo(px + H * 0.06, py + H * 0.08); ctx.lineTo(px - H * 0.06, py + H * 0.08); ctx.closePath();
    ctx.fillStyle = C.wood; ctx.fill(); outline(2.5); ctx.stroke();
    ctx.save(); ctx.translate(px, py - H * 0.02); ctx.rotate(ang);
    rrect(-len / 2, -H * 0.02, len, H * 0.035, H * 0.017); ctx.fillStyle = "#f3d3a8"; ctx.fill(); outline(2.5); ctx.stroke();
    const fs = Math.max(11, H * 0.032);
    text("醒", -len / 2 + fs * 0.9, 0, fs * 0.8, "#c78800");
    text("睡", len / 2 - fs * 0.9, 0, fs * 0.8, "#5d63c9");
    // 清醒中心的太阳小精灵
    const suns = [[-len * 0.34, "食欲素"], [-len * 0.14, "组胺"]];
    const r = H * 0.045, pos = {};
    suns.forEach(([dx, name], i) => {
      const sy = -H * 0.02 - r - Math.abs(Math.sin(time * 2 + i)) * 3 * (1 - S.flip);
      ctx.strokeStyle = C.ink; ctx.lineWidth = 1.8;
      for (let k = 0; k < 8; k++) { const q = k * Math.PI / 4 + time * 0.4; ctx.beginPath(); ctx.moveTo(dx + Math.cos(q) * r * 1.15, sy + Math.sin(q) * r * 1.15); ctx.lineTo(dx + Math.cos(q) * r * 1.45, sy + Math.sin(q) * r * 1.45); ctx.stroke(); }
      ctx.beginPath(); ctx.arc(dx, sy, r, 0, 6.3); ctx.fillStyle = C.sun; ctx.fill(); outline(2); ctx.stroke();
      sleepyFace(dx, sy, r * 0.75, S.flip * 0.8, S.flip > 0.85 ? 1 : 0, 1);
      pos[i] = { dx, sy };
    });
    // 睡眠中心的月亮小精灵
    const mx = len * 0.28, my = -H * 0.02 - r * 1.3;
    ctx.beginPath(); ctx.arc(mx, my, r * 1.3, 0, 6.3); ctx.fillStyle = C.moon; ctx.fill(); outline(2); ctx.stroke();
    Anima.face(mx, my, r * 0.9, 1, true);
    ctx.restore();
    // 名牌（不跟着旋转，好认）
    const toWorld = (dx, dy) => ({ x: px + dx * Math.cos(ang) - dy * Math.sin(ang), y: py - H * 0.02 + dx * Math.sin(ang) + dy * Math.cos(ang) });
    const s0 = toWorld(pos[0].dx, pos[0].sy), s1 = toWorld(pos[1].dx, pos[1].sy), m = toWorld(mx, my);
    const nf = Math.max(10, H * 0.03);
    text("食欲素", s0.x, s0.y - r * 1.9, nf, C.ink);
    text("组胺", s1.x, s1.y - r * 1.9, nf, C.ink);
    text("GABA", m.x, m.y - r * 2, nf * 1.05, "#4a50b8");
    // GABA 小粒子：从月亮飘向太阳，让它们安静
    if (S.flip > 0.4) {
      for (let i = 0; i < 6; i++) {
        const t = (time * 0.35 + i / 6) % 1, tgt = i % 2 ? s0 : s1;
        const x = m.x + (tgt.x - m.x) * t, y = m.y + (tgt.y - m.y) * t - Math.sin(t * Math.PI) * H * 0.12;
        ctx.save(); ctx.globalAlpha *= (S.flip - 0.4) * 1.6 * Math.sin(t * Math.PI);
        ctx.beginPath(); ctx.arc(x, y, H * 0.014, 0, 6.3); ctx.fillStyle = C.gaba; ctx.fill(); outline(1.4); ctx.stroke();
        ctx.restore();
      }
    }
    ctx.restore();
    return { moon: m, sun: s0, sun1: s1 };
  }

  // 午睡小卡片
  function napCard() {
    const a = S.nap; if (a < 0.02) return null;
    const cw = Math.min(H * 0.5, W * 0.4), ch = H * 0.52, x = W - cw - 14, y = H - ch - 14;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, cw, ch, 18); ctx.fill();
    ctx.fillStyle = C.card; rrect(x, y, cw, ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const fs = Math.max(11, ch * 0.085);
    text("午睡小贴士", x + cw / 2, y + fs * 1.1, fs, C.ink);
    const cr = ch * 0.22, cx = x + cw / 2, cy = y + fs * 2 + cr + ch * 0.03;
    ctx.beginPath(); ctx.arc(cx, cy, cr, 0, 6.3); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(2.5); ctx.stroke();
    // 0～20 分钟浅绿，20～30 分钟深绿
    const A = (m) => -Math.PI / 2 + m / 60 * Math.PI * 2;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, cr * 0.86, A(0), A(20)); ctx.closePath(); ctx.fillStyle = "#c9f0e2"; ctx.fill();
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, cr * 0.86, A(20), A(30)); ctx.closePath(); ctx.fillStyle = C.mint; ctx.fill();
    ctx.strokeStyle = C.soft; ctx.lineWidth = 1.5;
    for (let k = 0; k < 12; k++) { const q = k * Math.PI / 6; ctx.beginPath(); ctx.moveTo(cx + Math.cos(q) * cr * 0.86, cy + Math.sin(q) * cr * 0.86); ctx.lineTo(cx + Math.cos(q) * cr * 0.97, cy + Math.sin(q) * cr * 0.97); ctx.stroke(); }
    const ma = A((time * 2) % 30);
    outline(2.2); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(ma) * cr * 0.75, cy + Math.sin(ma) * cr * 0.75); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, 3, 0, 6.3); ctx.fillStyle = C.ink; ctx.fill();
    text("20～30 分钟", cx, cy + cr + fs * 0.95, fs * 0.95, "#2f9c7c");
    text("下午 3 点前", cx, cy + cr + fs * 2.2, fs * 0.95, C.ink);
    ctx.restore();
    return { clock: { x: cx - cr * 0.7, y: cy - cr * 0.1 }, card: { x, y, cw, ch } };
  }

  function hearts() {
    if (S.heal < 0.02) return;
    for (const [i, h] of [[0, 0.3], [1, 0.48], [2, 0.62], [3, 0.08]]) {
      const x = h * W, y = ((rnd(i + 8100) - time * 0.04) % 1 + 1) % 1 * H;
      ctx.save(); ctx.globalAlpha *= S.heal * 0.85;
      heart(x, y, Math.max(7, H * 0.02), C.heartPink);
      ctx.restore();
    }
  }

  function hud() {
    const f = S.feel;
    pill(14, 12, "困意", `${Math.round(f * 100)}%`, f < 0.4 ? C.mint : f < 0.75 ? "#e7a500" : "#6b6fd6", false);
    const [label, value, st] = CH[cur].pill;
    pill(W - 14, 12, label, value, st === "ok" ? C.mint : st === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const L = layout();
    background();
    const win = skyWindow(L);
    const glass = hourglass(L);
    const P = pineal();
    const sw = seesaw();
    const card = napCard();
    const N = neuron(L);
    const free = freeAdenosine(L, N);
    const occ = occupants(N);
    hearts();

    const on = (k) => CH[cur].labels.indexOf(k) >= 0;
    const top = H * 0.2, low = H * 0.93;
    // 标注气泡的宽度（和引擎里的算法一致），用来让底部气泡避开左边的沙漏
    const bw = (t) => { ctx.font = `${Math.max(12, W / 56) * Anima.UI}px ${ROUND}`; return ctx.measureText(t).width + 22; };
    const clearGlass = (lx, t) => Math.max(lx, L.hx + L.hw * 0.65 + bw(t) / 2 + 6);
    const T = {
      clock: "生物钟：跟着日照定时间", glass: "睡眠压力：醒得越久越困", aden: "腺苷：用脑留下的“困意”",
      socket: "插进困意插座：越来越困", caff: "咖啡因：冒充腺苷占住插座", queue: "腺苷还在门外排队",
      mel: "褪黑素：天黑了，准备睡觉", blue: "屏幕蓝光：松果体停工", gaba: "睡眠中心放出 GABA",
      wake: "清醒中心安静下来", nap: "午睡：短一点、早一点", short: "睡太久：晚上不够困",
    };
    callout("clock", on("clock"), win.clock.x, win.clock.y, win.clock.x - bw(T.clock) / 2 - 10, H * 0.3, T.clock);
    callout("glass", on("glass"), glass.mid.x, glass.mid.y, clearGlass(glass.mid.x + W * 0.16, T.glass), low, T.glass);
    callout("aden", on("aden") && !!free, free ? free.x : 0, free ? free.y : 0, clearGlass(free ? free.x + W * 0.05 : 0, T.aden), low, T.aden);
    const sk = N.sockets[1];
    callout("socket", on("socket"), occ.aden ? occ.aden.x : sk.x, occ.aden ? occ.aden.y - N.r * 0.25 : sk.y, sk.x + W * 0.02, top, T.socket);
    callout("caff", on("caff"), occ.caff ? occ.caff.x : sk.x, occ.caff ? occ.caff.y - N.r * 0.25 : sk.y, sk.x + W * 0.02, top, T.caff);
    callout("queue", on("queue") && !!free, free ? free.x : 0, free ? free.y : 0, clearGlass(free ? free.x + W * 0.05 : 0, T.queue), low, T.queue);
    const po = phoneOn();
    callout("mel", on("mel") && po < 0.5, P.moon.x, P.moon.y, P.moon.x - W * 0.02, top, T.mel);
    callout("blue", on("blue") && po >= 0.5, P.factory.x, P.factory.y, P.factory.x - W * 0.12, top, T.blue);
    callout("gaba", on("gaba") && !!sw, sw ? sw.moon.x : 0, sw ? sw.moon.y : 0, sw ? sw.moon.x - W * 0.12 : 0, H * 0.62, T.gaba);
    callout("wake", on("wake") && !!sw, sw ? sw.sun.x : 0, sw ? sw.sun.y : 0, clearGlass(sw ? sw.sun.x - W * 0.2 : 0, T.wake), low, T.wake);
    // 窄屏上午睡卡片占了右半边，只留一个标注，放在左上角
    const wide = W / H > 1.5;
    callout("nap", on("nap") && !!card && wide, card ? card.clock.x : 0, card ? card.clock.y : 0, card ? card.card.x - W * 0.12 : 0, top, T.nap);
    if (wide) callout("short", on("short"), glass.mid.x, glass.mid.y, clearGlass(glass.mid.x + W * 0.16, T.short), low, T.short);
    else callout("short", on("short"), glass.top.x, glass.top.y + H * 0.08, 14 + bw(T.short) / 2, H * 0.3, T.short);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#5d63c9",
    titleCard: { lines: ["为什么", "越熬越困？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
