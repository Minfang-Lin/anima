Anima.register("premature-beats", {
    "title": "心里咯噔一下",
    "tag": "心脏小剧场",
    "headline": "心跳为什么会【漏】一拍？",
    "lede": "心脏有自己的节拍器，平时一下一下跳得很整齐。可有时别的地方会“抢拍”，心脏提前跳一下，再停一停，人就觉得心里咯噔一下。看看早搏是怎么回事、要不要紧、该怎么查。",
    "summary": "窦房结和传导通路、房性早搏和室性早搏、常见诱因、动态心电图，以及什么时候需要重视。",
    "footer": "心慌、漏跳感明显，或伴胸痛、晕厥时，请到心内科就诊。",
    "canvasLabel": "卡通心脏的节拍器和心电图动画",
    "disease": "早搏（期前收缩）",
    "organs": ["heart"],
    "categories": ["cardio"],
    "color": "#e5484d"
  }, () => {
  // every：每隔几跳出现一次早搏（0 为没有）；kind：A 房早、V 室早、alt 轮流、mix 随机
  const CH = [
    { title: "心脏的节拍器", every: 0, kind: "A", freq: 0, ecto: 0, mood: 1, metro: 1, person: 0, trig: 0, holter: 0, warn: 0, care: 0, heal: 0,
      pill: ["心率", "60～100 次/分", "ok"],
      text: "心脏能一下一下整齐地跳，靠的是一个天然的节拍器，叫窦房结，它在右心房的上方。它发出电信号，先让两个心房收缩；信号在房室结稍等一下，再沿着传导通路传到心室，心室跟着收缩，把血泵出去。心电图上就是一排整齐的波。",
      fact: "成年人安静时心率约 60～100 次/分，节律整齐",
      labels: ["sa", "av"] },
    { title: "什么是早搏", every: 4, kind: "alt", freq: 0.3, ecto: 1, mood: 0.3, metro: 0, person: 1, trig: 0, holter: 0, warn: 0, care: 0, heal: 0,
      pill: ["感觉", "咯噔一下", "warn"],
      text: "早搏，就是还没到点，别的地方先“抢拍”发了个信号，心脏提前跳了一下，后面常跟着一个稍长的停顿，叫代偿间歇。很多人会觉得心里“咯噔”一下，好像漏跳了一拍。抢拍的信号来自心房，叫房性早搏；来自心室，叫室性早搏。",
      fact: "早搏也叫期前收缩，常见的有房性早搏和室性早搏",
      labels: ["pac", "pvc"] },
    { title: "早搏很常见", every: 6, kind: "mix", freq: 0.25, ecto: 0.6, mood: 0.6, metro: 0, person: 0, trig: 1, holter: 0, warn: 0, care: 0, heal: 0,
      pill: ["健康人", "也常见", "ok"],
      text: "早搏非常常见，不少健康人做 24 小时动态心电图，也能查到少量早搏，自己往往毫无感觉。熬夜、劳累、紧张焦虑，喝咖啡浓茶、喝酒、吸烟，或者血钾偏低，都可能让心脏更容易“抢拍”。把这些诱因去掉，早搏常常就少了。",
      fact: "偶尔出现少量早搏，在健康人里也很常见",
      labels: ["few"] },
    { title: "怎么查清楚", every: 5, kind: "mix", freq: 0.3, ecto: 0.6, mood: 0.6, metro: 0, person: 0, trig: 0, holter: 1, warn: 0, care: 0, heal: 0,
      pill: ["连续记录", "24 小时", "ok"],
      text: "普通心电图只记录十几秒，早搏不一定正好被抓到。动态心电图，也叫 Holter，是个随身带的小盒子，能连续记录 24 小时，数一数一天有多少早搏、从哪里来。医生常常还会查心脏超声、血钾和甲状腺功能，看看心脏本身有没有问题。",
      fact: "戴动态心电图时照常生活，记下心慌出现的时间更好",
      labels: ["holter", "short"] },
    { title: "什么时候要重视", every: 2, kind: "V", freq: 1, ecto: 1, mood: -1, metro: 0, person: 0, trig: 0, holter: 0, warn: 1, care: 0, heal: 0,
      pill: ["室早比例", "很高", "bad"],
      text: "如果早搏特别多，比如室性早搏占全天心跳的比例很高；或者心慌的同时伴有胸痛、晕倒、眼前发黑、明显气短；又或者本来就有冠心病、心力衰竭、心肌病等心脏病，就不能掉以轻心，要尽快找心内科医生评估。",
      fact: "早搏算不算多，要看占全天心跳的比例，由医生判断",
      labels: ["many"] },
    { title: "能做些什么", every: 9, kind: "A", freq: 0.1, ecto: 0, mood: 1, metro: 0, person: 0, trig: 0, holter: 0, warn: 0, care: 1, heal: 1,
      pill: ["多数", "不必紧张", "ok"],
      text: "没有心脏病、早搏又不多的人，大多不需要特别治疗。规律作息，别熬夜，少喝咖啡、浓茶和酒，戒烟，放松心情，早搏常会慢慢减少。如果症状明显，或者早搏很频繁，医生可能会用β受体阻滞剂等药物，必要时做导管消融。",
      fact: "多数早搏先去诱因；要不要用药或消融，听医生评估",
      labels: ["calm"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    heartRed: "#ff6f86", atria: "#ff9aac", wire: "#ffd166", spark: "#fff6b8",
    pacCol: "#ffb13b", pvcCol: "#f25f6b", grid: "#ffd9d9", gridBold: "#ffc0c0", trace: "#5b3a4a",
    card: "#fffaf5", skin: "#ffe0cc", shirt: "#8fc9e8", heartPink: "#ff9fb0", device: "#8fb8d8",
  });
  const { ctx, rnd, clamp, outline, rrect, face, sweat, heart, bolt, dots, callout, pill } = Anima;
  const ROUND = Anima.ROUND;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0; // 本幕已经播了几秒

  const S = { freq: 0, ecto: 0, mood: 1, metro: 1, person: 0, trig: 0, holter: 0, warn: 0, care: 0, heal: 0 };

  // ---------- 心跳时间表：每一跳记下时间和类型（N 正常、A 房早、V 室早） ----------
  const RR = 60 / 72;
  const beats = [];
  let nextT = null, nextType = "N", nNorm = 0, nPre = 0, nBeat = 0;
  function schedule(b) {
    const c = CH[cur];
    if (b.type !== "N") { nextT = b.t + RR * (b.type === "V" ? 1.4 : 1.25); nextType = "N"; nNorm = 0; return; }
    nNorm++;
    if (c.every > 0 && nNorm >= c.every - 1) {
      let k = c.kind;
      if (k === "alt") k = nPre % 2 ? "V" : "A";
      else if (k === "mix") k = rnd(nBeat + 300) < 0.5 ? "A" : "V";
      nPre++;
      nextT = b.t + RR * 0.6; nextType = k;
    } else { nextT = b.t + RR * (1 + (rnd(nBeat + 900) - 0.5) * 0.04); nextType = "N"; }
  }

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
    if (nextT === null) nextT = time - 8; // 开场时心电图上已经有一排波
    else if (nextT < time - 2) nextT = time; // 跳过很久没画的时间（切到后台等）
    while (time >= nextT) {
      const b = { t: nextT, type: nextType, n: nBeat++ };
      beats.push(b);
      schedule(b);
    }
    while (beats.length && beats[0].t < time - 12) beats.shift();
  }

  // ---------- 波形：每一跳是几个钟形小波叠起来 ----------
  const gs = (u, c, w, a) => a * Math.exp(-(((u - c) / w) ** 2));
  function wave(type, u) {
    if (u < -0.1 || u > 0.8) return 0;
    if (type === "V") return gs(u, 0.06, 0.035, 1.15) + gs(u, 0.13, 0.03, -0.5) + gs(u, 0.36, 0.07, -0.35);
    const p = type === "A" ? gs(u, 0.045, 0.018, -0.1) : gs(u, 0.045, 0.026, 0.13);
    return p + gs(u, 0.15, 0.008, -0.12) + gs(u, 0.17, 0.011, 1) + gs(u, 0.19, 0.01, -0.28) + gs(u, 0.42, 0.05, 0.27);
  }
  const rTime = (b) => b.t + (b.type === "V" ? 0.06 : 0.17);
  function ecgValue(t) {
    let v = 0;
    for (let i = beats.length - 1; i >= 0; i--) {
      const u = t - beats[i].t;
      if (u > 0.8) break;
      v += wave(beats[i].type, u);
    }
    return v;
  }

  // 心脏此刻的状态：心房亮、心室收缩、信号走到哪里
  const bumpT = (u, c, w) => Math.exp(-(((u - c) / w) ** 2));
  function activity() {
    let atria = 0, vent = 0, last = null;
    for (let i = beats.length - 1; i >= 0; i--) {
      const b = beats[i], u = time - b.t;
      if (u > 1) break;
      if (!last) last = b;
      if (b.type === "V") vent = Math.max(vent, bumpT(u, 0.22, 0.12));
      else { atria = Math.max(atria, bumpT(u, 0.08, 0.05)); vent = Math.max(vent, bumpT(u, 0.3, 0.1)); }
    }
    return { atria, vent, last, u: last ? time - last.t : 9 };
  }

  // ---------- 布局 ----------
  function layout() {
    const wide = W / H > 1.5;
    const s = H * 0.18, hx = wide ? W * 0.27 : W * 0.25, hy = H * 0.42;
    const cx = W * 0.5, cy = wide ? H * 0.15 : H * 0.06;
    const card = { x: cx, y: cy, w: W - 14 - cx, h: H * 0.6 - cy };
    const ecg = { x: 14, y: H * 0.75, w: W - 28, h: H * 0.225 };
    return { wide, s, hx, hy, card, ecg };
  }

  function text(t, x, y, fs, color, align) {
    ctx.fillStyle = color || C.ink; ctx.font = `${fs}px ${ROUND}`;
    ctx.textAlign = align || "center"; ctx.textBaseline = "middle";
    ctx.fillText(t, x, y); ctx.textAlign = "left";
  }
  function heartPath(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * 0.95);
    ctx.bezierCurveTo(-s * 1.3, s * 0.1, -s * 0.8, -s * 1.0, 0, -s * 0.45);
    ctx.bezierCurveTo(s * 0.8, -s * 1.0, s * 1.3, s * 0.1, 0, s * 0.95);
    ctx.closePath();
  }
  const quad = (p0, c, p1, t) => [(1 - t) * (1 - t) * p0[0] + 2 * t * (1 - t) * c[0] + t * t * p1[0], (1 - t) * (1 - t) * p0[1] + 2 * t * (1 - t) * c[1] + t * t * p1[1]];
  // 心脏里的关键点（以 s 为单位，画面左边是右心）
  const P = {
    sa: [-0.5, -0.5], av: [-0.06, -0.06], his: [0, 0.14],
    rb: { c: [-0.55, 0.25], e: [-0.36, 0.64] }, lb: { c: [0.6, 0.22], e: [0.4, 0.62] },
    pac: [0.5, -0.42], pvc: [0.62, 0.14],
  };
  function star(x, y, r, col, a) {
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath();
    for (let k = 0; k < 10; k++) {
      const ang = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.45 : r;
      ctx.lineTo(x + Math.cos(ang) * rr, y + Math.sin(ang) * rr);
    }
    ctx.closePath(); ctx.fillStyle = col; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.restore();
  }
  function glowDot(x, y, r) {
    ctx.save();
    ctx.globalAlpha *= 0.45; ctx.beginPath(); ctx.arc(x, y, r * 2, 0, 6.3); ctx.fillStyle = C.spark; ctx.fill();
    ctx.restore();
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fillStyle = C.spark; ctx.fill(); outline(1.5); ctx.stroke();
  }

  // ---------- 心脏 ----------
  function heartChar(L) {
    const { s, hx, hy } = L;
    const act = activity(), b = act.last, u = act.u;
    const sq = 1 - 0.06 * act.vent;
    const w = (p) => ({ x: hx + p[0] * s, y: hy + p[1] * s }); // 心脏坐标 → 画面坐标（不算收缩，标注用）
    ctx.save(); ctx.translate(hx, hy + s * 0.95 * (1 - sq) * 0.5); ctx.scale(sq, sq);
    // 大血管
    ctx.fillStyle = "#ff8fa0"; rrect(-s * 0.2, -s * 1.02, s * 0.36, s * 0.6, s * 0.14); ctx.fill(); outline(2.2); ctx.stroke();
    heartPath(s); ctx.fillStyle = C.heartRed; ctx.fill();
    ctx.save(); heartPath(s); ctx.clip();
    // 心房（上半部分）颜色浅一点，被信号点亮时发光
    ctx.fillStyle = C.atria; ctx.beginPath(); ctx.moveTo(-s * 1.2, -s * 1.2); ctx.lineTo(s * 1.2, -s * 1.2); ctx.lineTo(s * 1.2, -s * 0.12);
    ctx.quadraticCurveTo(0, s * 0.05, -s * 1.2, -s * 0.12); ctx.closePath(); ctx.fill();
    if (act.atria > 0.02) { ctx.save(); ctx.globalAlpha *= act.atria * 0.7; ctx.fillStyle = C.spark; ctx.fill(); ctx.restore(); }
    // 心室收缩时整体亮一下
    if (act.vent > 0.02) {
      ctx.save(); ctx.globalAlpha *= act.vent * 0.3; ctx.fillStyle = "#fff0c0";
      ctx.fillRect(-s * 1.3, -s * 0.05, s * 2.6, s * 1.1); ctx.restore();
    }
    // 室性早搏：从心室某处一圈圈扩散
    if (b && b.type === "V" && u < 0.4) {
      const r = s * 1.3 * clamp(u / 0.3, 0, 1);
      ctx.save(); ctx.globalAlpha *= 1 - u / 0.4;
      ctx.strokeStyle = C.pvcCol; ctx.lineWidth = s * 0.06;
      for (const k of [0, 0.35]) { ctx.beginPath(); ctx.arc(P.pvc[0] * s, P.pvc[1] * s, Math.max(1, r - k * s), 0, 6.3); ctx.stroke(); }
      ctx.restore();
    }
    ctx.restore();
    heartPath(s); outline(3); ctx.stroke();
    // 房室之间的分界、室间隔
    ctx.save(); ctx.globalAlpha *= 0.35; outline(2);
    ctx.beginPath(); ctx.moveTo(-s * 0.85, -s * 0.1); ctx.quadraticCurveTo(0, s * 0.06, s * 0.85, -s * 0.1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -s * 0.45); ctx.lineTo(0, -s * 0.08); ctx.stroke();
    ctx.restore();
    // 传导通路：黄色的“电线”
    ctx.lineCap = "round";
    const wires = () => {
      ctx.beginPath();
      ctx.moveTo(P.sa[0] * s, P.sa[1] * s); ctx.quadraticCurveTo(-0.45 * s, -0.2 * s, P.av[0] * s, P.av[1] * s);
      ctx.moveTo(P.sa[0] * s, P.sa[1] * s); ctx.quadraticCurveTo(0, -0.3 * s, 0.55 * s, -0.5 * s);
      ctx.moveTo(P.av[0] * s, P.av[1] * s); ctx.lineTo(P.his[0] * s, P.his[1] * s);
      ctx.quadraticCurveTo(P.rb.c[0] * s, P.rb.c[1] * s, P.rb.e[0] * s, P.rb.e[1] * s);
      ctx.moveTo(P.his[0] * s, P.his[1] * s); ctx.quadraticCurveTo(P.lb.c[0] * s, P.lb.c[1] * s, P.lb.e[0] * s, P.lb.e[1] * s);
      ctx.stroke();
    };
    ctx.strokeStyle = C.ink; ctx.lineWidth = s * 0.07 + 3; wires();
    ctx.strokeStyle = C.wire; ctx.lineWidth = s * 0.07; wires();
    // 窦房结、房室结
    for (const [p, r] of [[P.sa, 0.11], [P.av, 0.09]]) {
      ctx.beginPath(); ctx.arc(p[0] * s, p[1] * s, r * s, 0, 6.3); ctx.fillStyle = "#ffb13b"; ctx.fill(); outline(2); ctx.stroke();
    }
    // 抢拍的地方：小星星，发信号时亮起来
    if (S.ecto > 0.02) {
      const fireA = b && b.type === "A" ? clamp(1 - u / 0.5, 0, 1) : 0, fireV = b && b.type === "V" ? clamp(1 - u / 0.5, 0, 1) : 0;
      star(P.pac[0] * s, P.pac[1] * s, s * (0.13 + 0.07 * fireA), C.pacCol, S.ecto * (0.55 + 0.45 * fireA));
      star(P.pvc[0] * s, P.pvc[1] * s, s * (0.13 + 0.07 * fireV), C.pvcCol, S.ecto * (0.55 + 0.45 * fireV));
    }
    // 信号小火花沿通路走
    const r0 = Math.max(3, s * 0.07);
    if (b && b.type !== "V" && u < 0.3) {
      const o = b.type === "A" ? P.pac : P.sa, oc = b.type === "A" ? [0.2, -0.3] : [-0.45, -0.2];
      if (u < 0.1) {
        // 心房里一圈扩散
        ctx.save(); ctx.globalAlpha *= 1 - u / 0.1; ctx.strokeStyle = C.spark; ctx.lineWidth = s * 0.05;
        ctx.beginPath(); ctx.arc(o[0] * s, o[1] * s, s * (0.15 + u * 6), 0, 6.3); ctx.stroke(); ctx.restore();
      }
      let pts = [];
      if (u < 0.12) pts = [quad(o, oc, P.av, u / 0.12)];
      else if (u < 0.17) pts = [P.av];
      else if (u < 0.21) { const t = (u - 0.17) / 0.04; pts = [[P.av[0] + (P.his[0] - P.av[0]) * t, P.av[1] + (P.his[1] - P.av[1]) * t]]; }
      else { const t = clamp((u - 0.21) / 0.07, 0, 1); pts = [quad(P.his, P.rb.c, P.rb.e, t), quad(P.his, P.lb.c, P.lb.e, t)]; }
      const pulse = u >= 0.12 && u < 0.17 ? 1.3 + 0.3 * Math.sin(u * 120) : 1;
      for (const p of pts) glowDot(p[0] * s, p[1] * s, r0 * pulse);
    } else if (!b || u > 0.5) {
      // 窦房结安静地一闪一闪，准备下一拍
      glowDot(P.sa[0] * s, P.sa[1] * s, r0 * (0.6 + 0.2 * Math.sin(time * 6)));
    }
    // 小脸
    const surprised = b && b.type !== "N" && u < 0.9;
    const mood = surprised ? Math.min(S.mood, -0.2) : S.mood;
    face(0, s * 0.4, s * 0.34, mood);
    if (S.mood < -0.3) sweat(s * 0.62, -s * 0.15 + ((time * 0.7) % 1) * s * 0.18, s * 0.2);
    ctx.restore();
    // 抢拍时冒出的小惊叹
    if (surprised && S.ecto > 0.3) {
      const a = clamp(1 - u / 0.9, 0, 1);
      bolt(hx - s * 1.02, hy - s * 0.55, s * 0.16, a, C.sugar);
    }
    return { sa: w(P.sa), av: w(P.av), pac: w(P.pac), pvc: w(P.pvc), top: hy - s * 1.02 };
  }

  // ---------- 心电图 ----------
  function ecgStrip(L) {
    const e = L.ecg;
    ctx.fillStyle = C.ink; rrect(e.x + 4, e.y + 4, e.w, e.h, 14); ctx.fill();
    ctx.fillStyle = C.paper; rrect(e.x, e.y, e.w, e.h, 14); ctx.fill();
    ctx.save(); rrect(e.x, e.y, e.w, e.h, 14); ctx.clip();
    const gsz = e.h / 8;
    ctx.lineWidth = 1;
    for (let k = 0, x = e.x; x < e.x + e.w; x += gsz, k++) { ctx.strokeStyle = k % 5 ? C.grid : C.gridBold; ctx.beginPath(); ctx.moveTo(x, e.y); ctx.lineTo(x, e.y + e.h); ctx.stroke(); }
    for (let k = 0, y = e.y; y < e.y + e.h; y += gsz, k++) { ctx.strokeStyle = k % 5 ? C.grid : C.gridBold; ctx.beginPath(); ctx.moveTo(e.x, y); ctx.lineTo(e.x + e.w, y); ctx.stroke(); }
    const x0 = e.x + 8, x1 = e.x + e.w - 14, pps = H * 0.26, base = e.y + e.h * 0.64, amp = e.h * 0.42;
    const tx = (t) => x1 - (time - t) * pps;
    // 早搏的地方垫一块颜色，标上房早 / 室早
    const pre = [];
    const fs = Math.max(11, H * 0.04);
    // 左上角的小字：心电图（第 4 幕加上“记录中”），早搏的标签不压在它们上面
    ctx.font = `${fs * 0.85}px ${ROUND}`;
    const labW = ctx.measureText("心电图").width, recW = S.holter > 0.3 ? ctx.measureText("记录中").width + fs * 1.2 : 0;
    const labEnd = e.x + 10 + labW + recW;
    for (let i = 0; i < beats.length; i++) {
      const b = beats[i];
      if (b.type === "N") continue;
      const xr = tx(rTime(b));
      if (xr < x0 - 20 || xr > x1) continue;
      const col = b.type === "A" ? C.pacCol : C.pvcCol;
      ctx.save(); ctx.globalAlpha *= 0.28; ctx.fillStyle = col;
      rrect(xr - e.h * 0.2, e.y + e.h * 0.2, e.h * 0.4, e.h * 0.74, e.h * 0.12); ctx.fill(); ctx.restore();
      if (xr > labEnd + fs) text(b.type === "A" ? "房早" : "室早", xr, e.y + fs * 0.75, fs, col === C.pacCol ? "#d48600" : "#e04a57");
      // 后面的停顿
      const nb = beats[i + 1];
      const xe = nb ? tx(rTime(nb)) : x1;
      if (S.ecto > 0.5 && CH[cur].every === 4 && xe - xr > e.h * 0.8) {
        const yb = e.y + e.h * 0.9;
        ctx.save(); ctx.strokeStyle = C.soft; ctx.lineWidth = 2; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(xr + e.h * 0.22, yb); ctx.lineTo(xe - 6, yb); ctx.stroke(); ctx.restore();
        text("停顿", (xr + xe) / 2 + e.h * 0.1, yb - fs * 0.7, fs * 0.85, C.soft);
      }
      pre.push({ x: xr, y: base - amp * (b.type === "V" ? 1.15 : 1), type: b.type });
    }
    // 波形
    ctx.strokeStyle = C.trace; ctx.lineWidth = Math.max(2, H * 0.006); ctx.lineJoin = "round";
    ctx.beginPath();
    for (let x = x0; x <= x1; x += 1.5) {
      const t = time - (x1 - x) / pps;
      const y = base - ecgValue(t) * amp;
      if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    const yp = base - ecgValue(time) * amp;
    ctx.restore();
    glowDot(x1, yp, Math.max(3, H * 0.01));
    text("心电图", e.x + 10, e.y + fs * 0.75, fs * 0.85, C.soft, "left");
    // 第 4 幕：记录中
    if (S.holter > 0.3) {
      ctx.save(); ctx.globalAlpha *= S.holter;
      const rx = e.x + 10 + labW + fs * 0.7, ry = e.y + fs * 0.75;
      ctx.beginPath(); ctx.arc(rx, ry, fs * 0.25, 0, 6.3); ctx.fillStyle = (time % 1) < 0.6 ? "#f25f6b" : "#ffc0c0"; ctx.fill();
      text("记录中", rx + fs * 0.45, ry, fs * 0.85, C.soft, "left");
      ctx.restore();
    }
    outline(2.5); rrect(e.x, e.y, e.w, e.h, 14); ctx.stroke();
    return { pre, e };
  }

  // ---------- 右边的小卡片 ----------
  function cardBox(L, a) {
    const b = L.card;
    ctx.globalAlpha *= a;
    ctx.fillStyle = C.ink; rrect(b.x + 5, b.y + 5, b.w, b.h, 18); ctx.fill();
    ctx.fillStyle = C.card; rrect(b.x, b.y, b.w, b.h, 18); ctx.fill(); outline(2.5); ctx.stroke();
    return b;
  }
  // 一行一行的小清单：图标 + 文字
  function rowsCard(L, a, items, dotted) {
    ctx.save(); const b = cardBox(L, a);
    const n = items.length, pad = Math.min(b.h, b.w) * 0.07, rh = (b.h - pad * 2) / n;
    const maxC = Math.max.apply(null, items.map((it) => it.t.length));
    const fs = Math.min(rh * 0.46, H * 0.05, (b.w - pad * 2 - rh * 1.2) / (maxC + 0.5));
    const out = [];
    items.forEach((it, i) => {
      const y = b.y + pad + rh * (i + 0.5), ix = b.x + pad + rh * 0.45;
      const show = clamp((lt - 0.6 - i * 0.5) / 0.4, 0, 1);
      ctx.save(); ctx.globalAlpha *= 0.3 + 0.7 * show;
      it.icon(ix, y, rh * 0.36);
      ctx.fillStyle = C.ink; ctx.font = `${fs}px ${ROUND}`; ctx.textBaseline = "middle"; ctx.textAlign = "left";
      ctx.fillText(it.t, ix + rh * 0.62, y + 1);
      ctx.restore();
      if (dotted && i < n - 1) {
        ctx.save(); ctx.strokeStyle = "#f3dcd6"; ctx.lineWidth = 1.5; ctx.beginPath();
        ctx.moveTo(b.x + pad, y + rh / 2); ctx.lineTo(b.x + b.w - pad, y + rh / 2); ctx.stroke(); ctx.restore();
      }
      out.push({ x: ix, y });
    });
    ctx.restore();
    return { b, rows: out };
  }

  // 小图标
  function moonIcon(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0.9, 0.9 + Math.PI * 1.45); ctx.quadraticCurveTo(x + r * 0.05, y - r * 0.1, x + Math.cos(0.9) * r, y + Math.sin(0.9) * r);
    ctx.fillStyle = "#ffd766"; ctx.fill(); outline(1.8); ctx.stroke();
    star(x + r * 0.75, y - r * 0.55, r * 0.28, "#ffe89a", 1);
  }
  function cupIcon(x, y, r, cross) {
    ctx.fillStyle = "#b07a4f"; rrect(x - r * 0.7, y - r * 0.45, r * 1.2, r * 1.15, r * 0.25); ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + r * 0.55, y + r * 0.1, r * 0.3, -1.3, 1.3); outline(1.8); ctx.stroke();
    ctx.strokeStyle = C.soft; ctx.lineWidth = 1.6;
    for (const dx of [-0.3, 0.1]) {
      const k = Math.sin(time * 3 + dx * 5) * r * 0.1;
      ctx.beginPath(); ctx.moveTo(x + dx * r, y - r * 0.6); ctx.quadraticCurveTo(x + dx * r + r * 0.2 + k, y - r * 0.85, x + dx * r, y - r * 1.05); ctx.stroke();
    }
    if (cross) crossMark(x + r * 0.7, y + r * 0.55, r * 0.35);
  }
  function crossMark(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fillStyle = "#f25f6b"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.strokeStyle = C.paper; ctx.lineWidth = Math.max(1.5, r * 0.3); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x - r * 0.4, y - r * 0.4); ctx.lineTo(x + r * 0.4, y + r * 0.4); ctx.moveTo(x + r * 0.4, y - r * 0.4); ctx.lineTo(x - r * 0.4, y + r * 0.4); ctx.stroke();
  }
  function wineIcon(x, y, r) {
    ctx.beginPath(); ctx.moveTo(x - r * 0.55, y - r * 0.9); ctx.lineTo(x + r * 0.55, y - r * 0.9);
    ctx.quadraticCurveTo(x + r * 0.6, y + r * 0.1, x, y + r * 0.15); ctx.quadraticCurveTo(x - r * 0.6, y + r * 0.1, x - r * 0.55, y - r * 0.9);
    ctx.fillStyle = "#fff"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - r * 0.5, y - r * 0.45); ctx.lineTo(x + r * 0.5, y - r * 0.45); ctx.quadraticCurveTo(x + r * 0.45, y + r * 0.08, x, y + r * 0.1); ctx.quadraticCurveTo(x - r * 0.45, y + r * 0.08, x - r * 0.5, y - r * 0.45);
    ctx.fillStyle = "#c94a6e"; ctx.fill();
    outline(1.8); ctx.beginPath(); ctx.moveTo(x, y + r * 0.15); ctx.lineTo(x, y + r * 0.8); ctx.moveTo(x - r * 0.35, y + r * 0.85); ctx.lineTo(x + r * 0.35, y + r * 0.85); ctx.stroke();
  }
  function cigIcon(x, y, r) {
    ctx.save(); ctx.translate(x, y + r * 0.3); ctx.rotate(-0.35);
    ctx.fillStyle = "#fff"; rrect(-r * 0.9, -r * 0.18, r * 1.4, r * 0.36, r * 0.08); ctx.fill(); outline(1.6); ctx.stroke();
    ctx.fillStyle = "#e0a868"; rrect(-r * 0.9, -r * 0.18, r * 0.45, r * 0.36, r * 0.08); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#ff8a5c"; rrect(r * 0.5, -r * 0.18, r * 0.2, r * 0.36, r * 0.05); ctx.fill(); ctx.stroke();
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= 0.6; ctx.strokeStyle = C.soft; ctx.lineWidth = 1.6;
    const k = Math.sin(time * 2.5) * r * 0.12;
    ctx.beginPath(); ctx.moveTo(x + r * 0.62, y - r * 0.05); ctx.quadraticCurveTo(x + r * 0.95 + k, y - r * 0.5, x + r * 0.6, y - r * 0.95); ctx.stroke();
    ctx.restore();
  }
  function kIcon(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r * 0.8, 0, 6.3); ctx.fillStyle = "#bfe7da"; ctx.fill(); outline(1.8); ctx.stroke();
    text("K", x - r * 0.08, y + r * 0.04, r * 0.95, C.ink);
    // 向下的小箭头：偏低
    ctx.fillStyle = "#f25f6b"; ctx.beginPath(); ctx.moveTo(x + r * 0.6, y + r * 0.1); ctx.lineTo(x + r * 1.05, y + r * 0.1); ctx.lineTo(x + r * 0.82, y + r * 0.55); ctx.closePath(); ctx.fill(); outline(1.2); ctx.stroke();
  }
  function worryIcon(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r * 0.8, 0, 6.3); ctx.fillStyle = C.skin; ctx.fill(); outline(1.8); ctx.stroke();
    face(x, y + r * 0.05, r * 0.7, -0.8);
    sweat(x + r * 0.62, y - r * 0.75 + ((time * 0.7) % 1) * r * 0.2, r * 0.4);
  }
  function smileIcon(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r * 0.8, 0, 6.3); ctx.fillStyle = C.skin; ctx.fill(); outline(1.8); ctx.stroke();
    face(x, y + r * 0.05, r * 0.7, 1);
  }
  function capsuleIcon(x, y, r) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(-0.6);
    ctx.fillStyle = "#fff"; rrect(-r * 0.85, -r * 0.34, r * 1.7, r * 0.68, r * 0.34); ctx.fill(); outline(1.8); ctx.stroke();
    ctx.fillStyle = "#8fc9e8"; ctx.beginPath(); ctx.moveTo(0, -r * 0.34); ctx.lineTo(-r * 0.51, -r * 0.34); ctx.arc(-r * 0.51, 0, r * 0.34, -Math.PI / 2, Math.PI / 2, true); ctx.lineTo(0, r * 0.34); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  function alertIcon(x, y, r, col) {
    ctx.beginPath(); ctx.arc(x, y, r * 0.75, 0, 6.3); ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
    text("!", x, y + r * 0.05, r * 1.1, C.paper);
  }
  function checkIcon(x, y, r, on) {
    ctx.fillStyle = C.paper; rrect(x - r * 0.6, y - r * 0.6, r * 1.2, r * 1.2, r * 0.25); ctx.fill(); outline(1.8); ctx.stroke();
    if (on > 0.02) {
      ctx.save(); ctx.globalAlpha *= on; ctx.strokeStyle = "#3aa98a"; ctx.lineWidth = Math.max(2, r * 0.3); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(x - r * 0.35, y); ctx.lineTo(x - r * 0.05, y + r * 0.3); ctx.lineTo(x + r * 0.45, y - r * 0.4); ctx.stroke(); ctx.restore();
    }
  }

  // 第 1 幕：节拍器，跟着心跳摆
  function metronomeCard(L) {
    if (S.metro < 0.02) return null;
    ctx.save(); const b = cardBox(L, S.metro);
    const mh = b.h * 0.62, mx = b.x + b.w / 2, my = b.y + b.h * 0.08;
    const bw = mh * 0.62;
    ctx.fillStyle = "#e0a868";
    ctx.beginPath(); ctx.moveTo(mx - bw * 0.28, my); ctx.lineTo(mx + bw * 0.28, my); ctx.lineTo(mx + bw * 0.5, my + mh); ctx.lineTo(mx - bw * 0.5, my + mh); ctx.closePath(); ctx.fill(); outline(2.5); ctx.stroke();
    ctx.fillStyle = "#fff6e0"; ctx.beginPath(); ctx.moveTo(mx - bw * 0.16, my + mh * 0.12); ctx.lineTo(mx + bw * 0.16, my + mh * 0.12); ctx.lineTo(mx + bw * 0.3, my + mh * 0.78); ctx.lineTo(mx - bw * 0.3, my + mh * 0.78); ctx.closePath(); ctx.fill(); outline(1.6); ctx.stroke();
    // 摆杆：每一跳摆到一边
    let ph = 0;
    const lastN = beats.length ? beats[beats.length - 1] : null;
    if (lastN) ph = (lastN.n % 2 ? 1 : -1) * Math.cos(clamp((time - lastN.t) / RR, 0, 1) * Math.PI);
    const ang = ph * 0.45, px = mx, py = my + mh * 0.8, len = mh * 0.72;
    ctx.save(); ctx.translate(px, py); ctx.rotate(ang);
    outline(3); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -len); ctx.stroke();
    ctx.fillStyle = C.heartRed; rrect(-bw * 0.1, -len * 0.62, bw * 0.2, len * 0.14, 3); ctx.fill(); outline(1.6); ctx.stroke();
    ctx.restore();
    ctx.beginPath(); ctx.arc(px, py, bw * 0.05, 0, 6.3); ctx.fillStyle = C.ink; ctx.fill();
    face(mx, my + mh * 0.9, mh * 0.12, 1, false);
    const fs = Math.min(b.h * 0.1, b.w / 11);
    text("每分钟 60～100 下", b.x + b.w / 2, b.y + b.h * 0.86, fs, C.ink);
    // 嘀嗒
    if (lastN && time - lastN.t < 0.35) {
      ctx.save(); ctx.globalAlpha *= 1 - (time - lastN.t) / 0.35;
      text(lastN.n % 2 ? "嗒" : "嘀", mx + (lastN.n % 2 ? 1 : -1) * bw * 0.85, my + mh * 0.25, fs * 1.1, C.ink);
      ctx.restore();
    }
    ctx.restore();
    return b;
  }

  // 第 2 幕：人捂着胸口，“咯噔”一下
  function personCard(L) {
    if (S.person < 0.02) return null;
    ctx.save(); const b = cardBox(L, S.person);
    const u = Math.min(b.h / 8.5, b.w / 7), px = b.x + b.w * (L.wide ? 0.36 : 0.4), top = b.y + b.h - u * 7.6;
    const act = activity(), jolt = act.last && act.last.type !== "N" && act.u < 0.9 ? clamp(1 - act.u / 0.9, 0, 1) : 0;
    ctx.save(); ctx.beginPath(); rrect(b.x, b.y, b.w, b.h, 18); ctx.clip();
    ctx.fillStyle = C.shirt; rrect(px - u * 2, top + u * 3.1, u * 4, u * 5, u * 1.4); ctx.fill(); outline(2.5); ctx.stroke();
    ctx.restore();
    const hx = px + Math.sin(time * 2) * u * 0.05 - jolt * u * 0.1, hy = top + u * 1.6 - jolt * u * 0.15;
    ctx.beginPath(); ctx.arc(hx, hy, u * 1.45, 0, 6.3); ctx.fillStyle = C.skin; ctx.fill(); outline(2.5); ctx.stroke();
    ctx.fillStyle = "#c9c3c7"; ctx.beginPath(); ctx.arc(hx, hy - u * 0.6, u * 1.45, Math.PI * 1.05, Math.PI * 1.95); ctx.fill();
    face(hx, hy + u * 0.15, u * 0.9, jolt > 0.1 ? -0.5 : 0.4);
    // 胸口和手
    const chx = px - u * 0.3, chy = top + u * 4.4;
    if (jolt > 0.02) {
      ctx.save(); ctx.globalAlpha *= jolt; ctx.strokeStyle = C.pvcCol; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(chx, chy, u * (0.6 + (1 - jolt) * 1.2), 0, 6.3); ctx.stroke(); ctx.restore();
    }
    heart(chx, chy, u * 0.45 * (1 + 0.25 * jolt), C.heartRed);
    ctx.strokeStyle = C.ink; ctx.lineWidth = u * 0.7 + 5; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(px + u * 1.7, top + u * 3.7); ctx.quadraticCurveTo(px + u * 1.5, chy + u * 1.1, chx + u * 0.55, chy + u * 0.35); ctx.stroke();
    ctx.strokeStyle = C.shirt; ctx.lineWidth = u * 0.7; ctx.stroke();
    ctx.beginPath(); ctx.arc(chx + u * 0.5, chy + u * 0.35, u * 0.4, 0, 6.3); ctx.fillStyle = C.skin; ctx.fill(); outline(2); ctx.stroke();
    // “咯噔”
    const fs = Math.min(u * 1.1, b.w / 5.5);
    if (jolt > 0.02) {
      ctx.save(); ctx.globalAlpha *= clamp(jolt * 2, 0, 1);
      const bx = Math.min(hx + u * 3.5, b.x + b.w - fs * 1.7), by = hy - u * 0.6;
      ctx.translate(bx, by); ctx.scale(1 + 0.2 * jolt, 1 + 0.2 * jolt); ctx.rotate(-0.12);
      text("咯噔！", 0, 0, fs, "#e04a57");
      ctx.restore();
    } else {
      text("咚…咚…", Math.min(hx + u * 3.7, b.x + b.w - fs * 1.7), hy - u * 0.9, fs * 0.8, C.soft);
    }
    ctx.restore();
    return b;
  }

  // 第 3 幕：常见诱因
  function triggerCard(L) {
    if (S.trig < 0.02) return null;
    ctx.save(); const b = cardBox(L, S.trig);
    const items = [[moonIcon, "熬夜劳累"], [worryIcon, "紧张焦虑"], [cupIcon, "咖啡浓茶"], [wineIcon, "喝酒"], [cigIcon, "吸烟"], [kIcon, "血钾偏低"]];
    const cols = b.w / b.h > 1.3 ? 3 : 2, rows = Math.ceil(items.length / cols);
    const cw = b.w / cols, rh = b.h / rows;
    const r = Math.min(cw, rh) * 0.2, fs = Math.min(rh * 0.2, cw / 5.2);
    items.forEach((it, i) => {
      const c = i % cols, rr = Math.floor(i / cols);
      const x = b.x + cw * (c + 0.5), y = b.y + rh * rr;
      const show = clamp((lt - 0.5 - i * 0.45) / 0.4, 0, 1);
      ctx.save(); ctx.globalAlpha *= 0.25 + 0.75 * show;
      const bob = Math.sin(time * 2 + i) * r * 0.06;
      it[0](x, y + rh * 0.4 + bob, r);
      text(it[1], x, y + rh * 0.82, fs, C.ink);
      ctx.restore();
    });
    ctx.restore();
    return b;
  }

  // 第 4 幕：动态心电图小盒子 + 要做的检查
  function holterCard(L) {
    if (S.holter < 0.02) return null;
    ctx.save(); const b = cardBox(L, S.holter);
    const lw = b.w * 0.44, pad = Math.min(b.w, b.h) * 0.07;
    // 左边：小盒子和电极
    const dw = Math.min(lw * 0.62, b.h * 0.42), dh = dw * 0.72, dx = b.x + lw / 2 - dw / 2, dy = b.y + b.h * 0.52;
    const pads = [[0.18, 0.2], [0.5, 0.12], [0.82, 0.22]].map((p) => [b.x + lw * p[0], b.y + b.h * p[1] + pad * 0.6]);
    ctx.strokeStyle = C.soft; ctx.lineWidth = 2;
    pads.forEach((p, i) => {
      ctx.beginPath(); ctx.moveTo(dx + dw * (0.3 + 0.2 * i), dy); ctx.quadraticCurveTo(p[0], dy - dh * 0.3, p[0], p[1]); ctx.stroke();
    });
    for (const p of pads) {
      ctx.beginPath(); ctx.arc(p[0], p[1], dw * 0.12, 0, 6.3); ctx.fillStyle = C.paper; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.beginPath(); ctx.arc(p[0], p[1], dw * 0.04, 0, 6.3); ctx.fillStyle = C.soft; ctx.fill();
    }
    ctx.fillStyle = C.device; rrect(dx, dy, dw, dh, dw * 0.14); ctx.fill(); outline(2.5); ctx.stroke();
    ctx.fillStyle = "#e9fbf4"; rrect(dx + dw * 0.12, dy + dh * 0.14, dw * 0.76, dh * 0.46, dw * 0.06); ctx.fill(); outline(1.5); ctx.stroke();
    ctx.strokeStyle = "#3aa98a"; ctx.lineWidth = 1.6; ctx.beginPath();
    for (let k = 0; k <= 24; k++) {
      const xx = dx + dw * (0.16 + 0.68 * k / 24), t = time - (24 - k) * 0.06;
      ctx.lineTo(xx, dy + dh * 0.44 - ecgValue(t) * dh * 0.2);
    }
    ctx.stroke();
    ctx.beginPath(); ctx.arc(dx + dw * 0.22, dy + dh * 0.78, dw * 0.05, 0, 6.3); ctx.fillStyle = (time % 1) < 0.6 ? "#f25f6b" : "#ffc0c0"; ctx.fill();
    const fs0 = Math.min(dw * 0.2, b.h * 0.1);
    text("24h", dx + dw * 0.6, dy + dh * 0.79, fs0 * 0.8, C.ink);
    text("随身戴一天", b.x + lw / 2, b.y + b.h - pad - fs0 * 0.4, fs0 * 0.85, C.soft);
    // 右边：检查清单
    const items = ["动态心电图", "心脏超声", "查血钾", "甲状腺功能"];
    const x0 = b.x + lw, rw = b.w - lw - pad, rh = (b.h - pad * 2) / items.length;
    const fs = Math.min(rh * 0.4, (rw - rh * 0.9) / 5.4, H * 0.045);
    items.forEach((t, i) => {
      const y = b.y + pad + rh * (i + 0.5);
      const on = clamp((lt - 1 - i * 1.3) / 0.4, 0, 1);
      checkIcon(x0 + rh * 0.3, y, Math.min(rh * 0.32, fs * 0.8), on);
      ctx.fillStyle = C.ink; ctx.font = `${fs}px ${ROUND}`; ctx.textBaseline = "middle"; ctx.textAlign = "left";
      ctx.fillText(t, x0 + rh * 0.3 + fs * 1.05, y + 1);
    });
    ctx.save(); ctx.strokeStyle = "#f3dcd6"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x0, b.y + pad); ctx.lineTo(x0, b.y + b.h - pad); ctx.stroke(); ctx.restore();
    ctx.restore();
    return { b, device: { x: dx, y: dy + dh * 0.6 } };
  }

  function warnCard(L) {
    if (S.warn < 0.02) return null;
    const red = "#f25f6b";
    return rowsCard(L, S.warn, [
      { icon: (x, y, r) => alertIcon(x, y, r, red), t: "早搏占比很高" },
      { icon: (x, y, r) => alertIcon(x, y, r, red), t: "伴胸痛、胸闷" },
      { icon: (x, y, r) => alertIcon(x, y, r, red), t: "晕倒、眼前发黑" },
      { icon: (x, y, r) => alertIcon(x, y, r, red), t: "明显气短" },
      { icon: (x, y, r) => alertIcon(x, y, r, "#e7a500"), t: "本来有心脏病" },
    ], true);
  }
  function careCard(L) {
    if (S.care < 0.02) return null;
    return rowsCard(L, S.care, [
      { icon: moonIcon, t: "规律作息" },
      { icon: (x, y, r) => cupIcon(x, y, r, true), t: "少咖啡浓茶和酒" },
      { icon: smileIcon, t: "放松心情" },
      { icon: capsuleIcon, t: "需要时：药物或消融" },
    ], true);
  }

  function hearts() {
    if (S.heal < 0.02) return;
    for (const [i, h] of [[0, 0.08], [1, 0.42], [2, 0.6], [3, 0.35], [4, 0.94]]) {
      const x = h * W, y = ((rnd(i + 8100) - time * 0.04) % 1 + 1) % 1 * H * 0.75;
      ctx.save(); ctx.globalAlpha *= S.heal * 0.85;
      heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + i)), C.heartPink);
      ctx.restore();
    }
  }

  function hud(L) {
    const f = S.freq;
    const word = f < 0.05 ? "没有" : f < 0.4 ? "偶尔" : f < 0.75 ? "较多" : "很频繁";
    pill(14, 12, "早搏", word, f < 0.4 ? C.mint : f < 0.75 ? "#e7a500" : "#f25f6b", false);
    // 窄屏上右边的胶囊会挤掉标注的位置，只在宽屏显示
    const p = CH[cur].pill;
    if (p && L.wide) pill(W - 14, 12, p[0], p[1], p[2] === "ok" ? C.mint : p[2] === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const L = layout();
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(24, C.dot);
    hearts();
    const hc = heartChar(L);
    metronomeCard(L); personCard(L); triggerCard(L);
    const ho = holterCard(L);
    warnCard(L); careCard(L);
    const eg = ecgStrip(L);

    const on = (k) => CH[cur].labels.indexOf(k) >= 0;
    const fs = Math.max(12, W / 56) * Anima.UI, bh = fs + 14;
    const bw = (t) => { ctx.font = `${fs}px ${ROUND}`; return ctx.measureText(t).width + 22; };
    const topY = L.hy - L.s * 1.12;          // 心脏上方：气泡底边
    const midY = H * 0.625;                   // 心脏和心电图之间：气泡顶边
    const T = {
      sa: "窦房结：发出节拍", av: "房室结：稍等再往下传", pac: "心房抢拍：房性早搏", pvc: "心室抢拍：室性早搏",
      few: "偶尔一个早搏", holter: "动态心电图：记录 24 小时", short: "普通心电图只看十几秒",
      many: "早搏一个接一个", calm: "多数早搏不用太担心",
    };
    callout("sa", on("sa"), hc.sa.x, hc.sa.y, Math.max(hc.sa.x, 8 + bw(T.sa) / 2), topY, T.sa);
    callout("av", on("av"), hc.av.x, hc.av.y, L.hx + L.s * 0.8, midY, T.av);
    callout("pac", on("pac"), hc.pac.x, hc.pac.y, Math.max(hc.pac.x, 8 + bw(T.pac) / 2), topY, T.pac);
    callout("pvc", on("pvc"), hc.pvc.x, hc.pvc.y, L.hx + L.s * 0.9, midY, T.pvc);
    // 心电图上最近的一个早搏（离画面右边太近的不选，免得标注挤到边上）
    const pick = (type) => {
      const list = eg.pre.filter((p) => (!type || p.type === type) && p.x < W * 0.8 && p.x > W * 0.15);
      return list[list.length - 1] || null;
    };
    const pf = pick();
    callout("few", on("few") && !!pf, pf ? pf.x : 0, pf ? pf.y : 0, pf ? pf.x : 0, midY + bh, T.few);
    const pm = pick("V");
    callout("many", on("many") && !!pm, pm ? pm.x : 0, pm ? pm.y : 0, pm ? pm.x : 0, midY + bh, T.many);
    callout("holter", on("holter") && !!ho && L.wide, ho ? ho.device.x : 0, ho ? ho.device.y : 0, ho ? ho.device.x - W * 0.03 : 0, midY, T.holter);
    callout("short", on("short"), L.ecg.x + L.ecg.w * 0.3, L.ecg.y + L.ecg.h * 0.3, L.hx, midY + bh, T.short);
    callout("calm", on("calm"), L.hx + L.s * 0.3, L.hy - L.s * 0.2, Math.max(L.hx, 8 + bw(T.calm) / 2), topY, T.calm);
    hud(L);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e5484d",
    titleCard: { lines: ["心里咯噔一下，", "是早搏吗？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
