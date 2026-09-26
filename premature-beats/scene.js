// 心里咯噔一下（早搏）：教科书示意图画风（机制类集），通用画法见 shared/textbook.js。
Anima.register("premature-beats", {
    "title": "心里咯噔一下",
    "tag": "心脏小剧场",
    "headline": "心跳为什么会【漏】一拍？",
    "lede": "心脏有自己的节拍器，平时一下一下跳得很整齐。可有时别的地方会“抢拍”，心脏提前跳一下，再停一停，人就觉得心里咯噔一下。看看早搏是怎么回事、要不要紧、该怎么查。",
    "summary": "窦房结和传导通路、房性早搏和室性早搏、常见诱因、动态心电图，以及什么时候需要重视。",
    "footer": "心慌、漏跳感明显，或伴胸痛、晕厥时，请到心内科就诊。",
    "canvasLabel": "教科书式心脏冠状切面示意图：传导系统、异位起搏点与心电图条带",
    "disease": "早搏（期前收缩）",
    "organs": ["heart"],
    "categories": ["cardio"],
    "color": "#e5484d",
    "look": "textbook"
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
    { title: "早搏很常见", every: 5, kind: "mix", freq: 0.25, ecto: 0.6, mood: 0.6, metro: 0, person: 0, trig: 1, holter: 0, warn: 0, care: 0, heal: 0,
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

  const { clamp, rnd, pill, SANS } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0, prevCur = -1, prevLt = 0;
  const TB = Anima.textbook({ W: () => W, H: () => H, time: () => time });
  const { ctx, TAU, rgba, txt, font, smoothPath, sample, along, ease, LF, SF, topY, nar, mol, noSign, bolt } = TB;
  // 标注：淡出时沿用最后一次的位置（目标消失后引线不会跳到画面角落）
  const lastTag = {};
  function tag(key, on, tx, ty, bx, by, text, col) {
    if (on) lastTag[key] = [tx, ty, bx, by];
    const q = lastTag[key];
    if (!q) return;
    TB.tag(key, on, q[0], q[1], q[2], q[3], text, col);
  }

  // ---------- 本集新登记的图标：异位起搏点（五角星，和词典里已有的分子不同形、不同色） ----------
  const REG = Anima.textbook;
  if (!REG.MOLECULES.pacFocus) REG.register("pacFocus", { shape: "star", color: ["#c4f1f5", "#1c9fb0", "#0e5f6a"], label: "房性异位起搏点" });
  if (!REG.MOLECULES.pvcFocus) REG.register("pvcFocus", { shape: "star", color: ["#f9cbe4", "#c93d8a", "#7c1c52"], label: "室性异位起搏点" });

  // ---------- 本集颜色 ----------
  const K = Object.assign({}, TB.K, {
    myo: ["#fbe0dc", "#e8a3a0", "#b25c5f"],      // 心肌
    cav: ["#fffaf8", "#f7e3e0"],                 // 心腔
    edge: "#a9585c",
    art: ["#f8cfcf", "#d9797d", "#9f4449"],      // 主动脉
    vein: ["#e3e8fa", "#9aa9dc", "#56659f"],     // 上腔静脉、肺动脉
    cond: "#f4bd12", condHi: "#fff6c4", condEdge: "#9c7000",
    node: ["#fff6cc", "#f3bf2a", "#9c7000"],
    depol: "#ffb03a",
    pac: "#1c9fb0", pacD: "#12707c", pvc: "#c93d8a", pvcD: "#962a66",
    grid: "#edf0f6", gridB: "#d9e0ec", trace: "#2f3a55",
    ok: "#2fa465", warn: "#d99400", calm: "#3aa98a",
  });

  const S = { freq: 0, ecto: 0, heal: 0, holter: 0 };

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
    if (cur !== lastCur) { prevCur = lastCur; prevLt = lt; lastCur = cur; lt = 0; }
    lt += dt; prevLt += dt;
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
      if (u > 0.8) continue;
      if (u < -0.1) continue;
      v += wave(beats[i].type, u);
    }
    return v;
  }

  // =================== 心脏冠状切面（心脏坐标：u 向右、v 向下，单位 s；画面左边是右心） ===================
  const BODY = [[-0.5, -0.56], [-0.72, -0.46], [-0.86, -0.2], [-0.87, 0.08], [-0.8, 0.32], [-0.68, 0.54], [-0.46, 0.74], [-0.16, 0.9], [0.14, 1.0], [0.34, 1.06], [0.52, 0.92], [0.7, 0.68], [0.83, 0.38], [0.87, 0.08], [0.82, -0.18], [0.7, -0.4], [0.5, -0.54], [0.24, -0.52], [0.02, -0.45], [-0.22, -0.56]];
  const RA = [[-0.48, -0.44], [-0.7, -0.32], [-0.77, -0.06], [-0.67, 0.1], [-0.36, 0.13], [-0.14, 0.05], [-0.12, -0.28], [-0.26, -0.43]];
  const LA = [[0.1, -0.3], [0.1, 0.0], [0.3, 0.1], [0.6, 0.06], [0.72, -0.15], [0.6, -0.4], [0.32, -0.43]];
  const RV = [[-0.62, 0.25], [-0.66, 0.44], [-0.5, 0.63], [-0.2, 0.76], [-0.01, 0.66], [-0.05, 0.3], [-0.28, 0.23]];
  const LV = [[0.16, 0.3], [0.16, 0.56], [0.28, 0.78], [0.38, 0.8], [0.52, 0.62], [0.58, 0.32], [0.45, 0.22], [0.28, 0.22]];
  const AVY = 0.17; // 房室交界（纤维环）所在的 v
  const P = {
    sa: [-0.56, -0.44], av: [-0.07, 0.1], his: [0.02, 0.27],
    pac: [0.5, -0.12], pvc: [0.66, 0.5], vOrg: [0.1, 0.62],
  };
  const PATHS = {
    ant: [P.sa, [-0.3, -0.38], [-0.14, -0.16], P.av],
    mid: [P.sa, [-0.46, -0.24], [-0.3, -0.02], P.av],
    post: [P.sa, [-0.74, -0.2], [-0.6, 0.06], [-0.3, 0.12], P.av],
    bach: [P.sa, [-0.2, -0.49], [0.2, -0.46], [0.5, -0.36]],
    his: [P.av, [-0.02, 0.19], P.his],
    rbb: [P.his, [0.0, 0.46], [0.04, 0.68], [0.1, 0.82]],
    lbb: [P.his, [0.15, 0.42], [0.2, 0.62], [0.26, 0.82]],
    pkR: [[0.1, 0.82], [-0.16, 0.83], [-0.5, 0.67], [-0.7, 0.36]],
    pkL: [[0.26, 0.84], [0.44, 0.84], [0.62, 0.6], [0.66, 0.26]],
    pacP: [P.pac, [0.24, -0.02], [0.04, 0.07], P.av],
  };
  const SP = {};
  Object.keys(PATHS).forEach((k) => { SP[k] = sample(PATHS[k], 36); });
  // 浦肯野纤维的小分支
  const TWIGS = [];
  ["pkR", "pkL"].forEach((k) => {
    [0.18, 0.4, 0.62, 0.84].forEach((t, j) => {
      const p = along(SP[k], t), a = p[2] + (k === "pkR" ? -1 : 1) * (Math.PI / 2) * (j % 2 ? 0.7 : 1);
      const L = 0.055 + 0.025 * (j % 2);
      TWIGS.push([[p[0], p[1]], [p[0] + Math.cos(a) * L, p[1] + Math.sin(a) * L]]);
      const b = p[2] + (k === "pkR" ? 1 : -1) * 0.9;
      TWIGS.push([[p[0], p[1]], [p[0] + Math.cos(b) * 0.05, p[1] + Math.sin(b) * 0.05]]);
    });
  });

  function heartGeom(box) {
    const s = Math.min(box.w / 1.9, box.h / 2.16);
    const cx = box.x + box.w / 2 - s * 0.02, cy = box.y + (box.h - 2.16 * s) / 2 + 1.12 * s;
    const hp = (p) => [cx + p[0] * s, cy + p[1] * s];
    return { s, cx, cy, hp };
  }
  function tube(g, pts, w, c) {
    const sp = sample(pts.map(g.hp), 30);
    const line = () => { ctx.beginPath(); sp.forEach((p, i) => { if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }); };
    ctx.lineCap = "butt"; ctx.lineJoin = "round";
    line(); ctx.strokeStyle = c[2]; ctx.lineWidth = w + Math.max(2, g.s * 0.014); ctx.stroke();
    ctx.strokeStyle = c[1]; ctx.lineWidth = w; ctx.stroke();
    ctx.strokeStyle = rgba(c[0], 0.85); ctx.lineWidth = w * 0.3; ctx.stroke();
  }
  const polyPath = (g, pts) => smoothPath(pts.map(g.hp), true);

  // 最近几跳：心房 / 心室的除极波、传导通路上的冲动
  function recentBeats() {
    const out = [];
    for (let i = beats.length - 1; i >= 0 && out.length < 3; i--) { const u = time - beats[i].t; if (u >= 0 && u < 1.1) out.push({ b: beats[i], u }); }
    return out;
  }
  // 除极波：在心房 / 心室区域里从起点向外扩散的暖色
  function depolWave(g, org, R, a, ringCol, ringA, atria) {
    if (a < 0.02) return;
    const o = g.hp(org), yl = g.cy + AVY * g.s;
    ctx.save();
    polyPath(g, BODY); ctx.clip();
    ctx.beginPath();
    if (atria) ctx.rect(g.cx - g.s * 1.2, g.cy - g.s * 1.2, g.s * 2.4, yl - (g.cy - g.s * 1.2));
    else ctx.rect(g.cx - g.s * 1.2, yl, g.s * 2.4, g.s * 1.4);
    ctx.clip();
    const rr = Math.max(1, R * g.s);
    const gr = ctx.createRadialGradient(o[0], o[1], 0, o[0], o[1], rr);
    gr.addColorStop(0, rgba(K.depol, 0.5 * a)); gr.addColorStop(0.85, rgba(K.depol, 0.42 * a)); gr.addColorStop(1, rgba(K.depol, 0.2 * a));
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(o[0], o[1], rr, 0, TAU); ctx.fill();
    if (ringA > 0.02) {
      ctx.globalAlpha *= ringA;
      ctx.strokeStyle = rgba(ringCol, 0.75); ctx.lineWidth = Math.max(2, g.s * 0.035);
      ctx.beginPath(); ctx.arc(o[0], o[1], rr, 0, TAU); ctx.stroke();
    }
    ctx.restore();
  }
  function stroke(sp, g, col, w, upto) {
    const n = Math.max(2, Math.round(sp.length * (upto == null ? 1 : upto)));
    ctx.beginPath();
    for (let i = 0; i < n; i++) { const p = g.hp(sp[i]); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }
    ctx.strokeStyle = col; ctx.lineWidth = w; ctx.stroke();
  }
  function nodeShape(g, p, rx, ry, rot, glow) {
    const c = g.hp(p), s = g.s;
    if (glow > 0.02) {
      const gr = ctx.createRadialGradient(c[0], c[1], 0, c[0], c[1], s * 0.2);
      gr.addColorStop(0, rgba("#fff1a0", 0.9 * glow)); gr.addColorStop(1, rgba("#ffd34a", 0));
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(c[0], c[1], s * 0.2, 0, TAU); ctx.fill();
    }
    ctx.save(); ctx.translate(c[0], c[1]); ctx.rotate(rot);
    ctx.beginPath(); ctx.ellipse(0, 0, rx * s, ry * s, 0, 0, TAU);
    const gr = ctx.createRadialGradient(-rx * s * 0.35, -ry * s * 0.4, 1, 0, 0, rx * s * 1.2);
    gr.addColorStop(0, "#ffffff"); gr.addColorStop(0.35, K.node[0]); gr.addColorStop(1, K.node[1]);
    ctx.fillStyle = gr; ctx.fill();
    ctx.strokeStyle = K.node[2]; ctx.lineWidth = Math.max(1, s * 0.012); ctx.stroke();
    ctx.restore();
  }
  function impulse(x, y, r) {
    const gr = ctx.createRadialGradient(x, y, 0, x, y, r * 3.2);
    gr.addColorStop(0, "rgba(255,255,255,0.95)"); gr.addColorStop(0.3, "rgba(255,236,140,0.8)"); gr.addColorStop(1, "rgba(255,200,58,0)");
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(x, y, r * 3.2, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill();
    ctx.strokeStyle = K.condEdge; ctx.lineWidth = Math.max(1, r * 0.3); ctx.stroke();
  }

  // 画整颗心脏；返回标注要用的位置
  function drawHeart(box, phone) {
    const g = heartGeom(box), s = g.s, hp = g.hp;
    const rec = recentBeats();
    // 第 6 幕：心脏周围一圈柔和的绿光
    if (S.heal > 0.02) {
      const c = hp([0, 0.2]);
      const gr = ctx.createRadialGradient(c[0], c[1], s * 0.5, c[0], c[1], s * 1.25);
      gr.addColorStop(0, rgba(K.calm, 0.22 * S.heal)); gr.addColorStop(1, rgba(K.calm, 0));
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(c[0], c[1], s * 1.25, 0, TAU); ctx.fill();
    }
    // 大血管（在心脏后面）
    tube(g, [[0.14, -0.38], [0.22, -0.66], [0.44, -0.8], [0.8, -0.74]], s * 0.17, K.vein);
    tube(g, [[0.0, -0.36], [-0.04, -0.72], [0.1, -0.98], [0.4, -0.99], [0.6, -0.8], [0.63, -0.46]], s * 0.19, K.art);
    tube(g, [[-0.52, -1.06], [-0.52, -0.76], [-0.55, -0.42]], s * 0.19, K.vein);
    // 心肌
    polyPath(g, BODY);
    const c0 = hp([-0.25, -0.2]);
    const mg = ctx.createRadialGradient(c0[0], c0[1], s * 0.1, c0[0], c0[1], s * 1.35);
    mg.addColorStop(0, K.myo[0]); mg.addColorStop(1, K.myo[1]);
    ctx.fillStyle = mg; ctx.fill();
    // 心腔
    [RA, LA, RV, LV].forEach((pts) => {
      polyPath(g, pts);
      const a = hp([0, -0.5]), b = hp([0, 0.9]);
      const cg = ctx.createLinearGradient(a[0], a[1], b[0], b[1]);
      cg.addColorStop(0, K.cav[0]); cg.addColorStop(1, K.cav[1]);
      ctx.fillStyle = cg; ctx.fill();
      ctx.strokeStyle = rgba(K.edge, 0.3); ctx.lineWidth = Math.max(1, s * 0.008); ctx.stroke();
    });
    // 房室瓣口 + 瓣叶
    [[-0.45, -0.22], [0.24, 0.5]].forEach((q) => {
      const a = hp([q[0], 0.07]), b = hp([q[1], 0.3]);
      ctx.fillStyle = K.cav[1]; ctx.fillRect(a[0], a[1], b[0] - a[0], b[1] - a[1]);
    });
    ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.strokeStyle = rgba(K.edge, 0.55); ctx.lineWidth = Math.max(1, s * 0.008);
    [[-0.46, -0.4, 0.34], [-0.21, -0.27, 0.34], [0.23, 0.29, 0.34], [0.51, 0.45, 0.33]].forEach((v) => {
      const a = hp([v[0], AVY]), b = hp([v[1], v[2]]), m = (v[0] + v[1]) / 2;
      const c1 = hp([m + (v[0] < 0 ? 0.04 : -0.04) * (v[0] > v[1] ? -1 : 1), (AVY + v[2]) / 2]);
      ctx.beginPath(); ctx.moveTo(a[0] - s * 0.03, a[1]); ctx.quadraticCurveTo(c1[0], c1[1], b[0], b[1]); ctx.lineTo(a[0] + s * 0.03, a[1]); ctx.closePath(); ctx.fill(); ctx.stroke();
    });
    // 除极波
    rec.forEach((r) => {
      const b = r.b, u = r.u;
      if (b.type !== "V") {
        const org = b.type === "A" ? P.pac : P.sa;
        const aA = u < 0.2 ? 1 : clamp(1 - (u - 0.2) / 0.18, 0, 1);
        depolWave(g, org, 1.55 * ease(clamp(u / 0.09, 0, 1)), aA * clamp(u / 0.01, 0, 1), b.type === "A" ? K.pac : "#ffcf5a", u < 0.1 ? 1 - u / 0.1 : 0, true);
        const vu = u - 0.16, aV = vu < 0 ? 0 : vu < 0.3 ? 1 : clamp(1 - (vu - 0.3) / 0.18, 0, 1);
        depolWave(g, P.vOrg, 1.3 * ease(clamp(vu / 0.07, 0, 1)), aV, "#ffcf5a", vu > 0 && vu < 0.08 ? 1 - vu / 0.08 : 0, false);
      } else {
        const aV = u < 0.35 ? 1 : clamp(1 - (u - 0.35) / 0.18, 0, 1);
        depolWave(g, P.pvc, 1.75 * clamp(u / 0.2, 0, 1), aV * clamp(u / 0.01, 0, 1), K.pvc, u < 0.22 ? 1 - u / 0.22 : 0, false);
      }
    });
    // 外轮廓
    polyPath(g, BODY); ctx.strokeStyle = K.edge; ctx.lineWidth = Math.max(1.2, s * 0.012); ctx.stroke();
    // 腔名
    const lf = SF() * (phone ? 0.85 : 0.92);
    const nm = phone ? ["右房", "左房", "右室", "左室"] : ["右心房", "左心房", "右心室", "左心室"];
    font(lf, 500); ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
    [[-0.5, -0.08], [0.36, -0.24], [-0.34, 0.44], [0.36, 0.48]].forEach((p, i) => {
      const q = hp(p);
      ctx.strokeStyle = "rgba(255,250,248,0.9)"; ctx.lineWidth = Math.max(2.5, lf * 0.3); ctx.strokeText(nm[i], q[0], q[1]);
      ctx.fillStyle = rgba(K.edge, 0.9); ctx.fillText(nm[i], q[0], q[1]);
    });
    ctx.textAlign = "left";

    // 传导系统
    const w = Math.max(1.8, s * 0.03);
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    const all = ["ant", "mid", "post", "bach", "his", "rbb", "lbb", "pkR", "pkL"];
    const wOf = (k) => (k === "pkR" || k === "pkL" ? w * 0.7 : k === "his" ? w * 1.15 : w);
    all.forEach((k) => stroke(SP[k], g, rgba(K.cond, 0.22), wOf(k) * 3));
    TWIGS.forEach((t) => stroke(t, g, K.condEdge, w * 0.45 + 1.4));
    all.forEach((k) => stroke(SP[k], g, K.condEdge, wOf(k) + Math.max(1.4, s * 0.012)));
    TWIGS.forEach((t) => stroke(t, g, K.cond, w * 0.45));
    all.forEach((k) => stroke(SP[k], g, K.cond, wOf(k)));
    all.forEach((k) => stroke(SP[k], g, rgba(K.condHi, 0.9), wOf(k) * 0.32));
    // 正在传导的一段更亮
    const dots = [];
    let saGlow = 0, avGlow = 0, fireA = 0, fireV = 0;
    rec.forEach((r) => {
      const b = r.b, u = r.u, fade = clamp(1 - (u - 0.3) / 0.2, 0, 1);
      if (b.type === "V") {
        fireV = Math.max(fireV, clamp(1 - u / 0.5, 0, 1));
        return;
      }
      const lit = (k, p) => { if (p > 0.01 && fade > 0.01) { ctx.save(); ctx.globalAlpha *= fade; stroke(SP[k], g, "rgba(255,255,255,0.9)", wOf(k) * 0.9, p); stroke(SP[k], g, rgba("#ffe066", 0.5), wOf(k) * 2.6, p); ctx.restore(); } };
      const pA = clamp(u / (b.type === "A" ? 0.08 : 0.07), 0, 1);
      if (b.type === "N") {
        saGlow = Math.max(saGlow, clamp(1 - u / 0.3, 0, 1));
        ["ant", "mid", "post", "bach"].forEach((k) => lit(k, pA));
        if (u < 0.07) ["ant", "mid", "post", "bach"].forEach((k) => dots.push(along(SP[k], pA)));
      } else {
        fireA = Math.max(fireA, clamp(1 - u / 0.5, 0, 1));
        lit("pacP", pA);
        if (u < 0.08) dots.push(along(SP.pacP, pA));
      }
      if (u > 0.06 && u < 0.3) avGlow = Math.max(avGlow, clamp((u - 0.06) / 0.02, 0, 1) * clamp((0.3 - u) / 0.1, 0, 1));
      if (u >= 0.07 && u < 0.15) dots.push(P.av);
      const pH = clamp((u - 0.15) / 0.02, 0, 1), pB = clamp((u - 0.17) / 0.03, 0, 1), pK = clamp((u - 0.2) / 0.04, 0, 1);
      lit("his", pH); lit("rbb", pB); lit("lbb", pB); lit("pkR", pK); lit("pkL", pK);
      if (u >= 0.15 && u < 0.17) dots.push(along(SP.his, pH));
      if (u >= 0.17 && u < 0.2) { dots.push(along(SP.rbb, pB)); dots.push(along(SP.lbb, pB)); }
      if (u >= 0.2 && u < 0.25) { dots.push(along(SP.pkR, pK)); dots.push(along(SP.pkL, pK)); }
    });
    if (S.ecto > 0.3) { ctx.save(); ctx.globalAlpha *= clamp(S.ecto, 0, 1) * 0.5; ctx.setLineDash([w, w * 1.2]); stroke(SP.pacP, g, K.pac, w * 0.55); ctx.setLineDash([]); ctx.restore(); }
    // 窦房结、房室结
    const beatPulse = saGlow > 0 ? saGlow : 0.25 + 0.15 * Math.sin(time * 5);
    nodeShape(g, P.sa, 0.085, 0.055, -0.5, beatPulse);
    nodeShape(g, P.av, 0.07, 0.045, 0.3, avGlow);
    const ir = Math.max(2.4, s * 0.028);
    dots.forEach((d) => { const q = hp(d); impulse(q[0], q[1], ir * (d === P.av ? 1.15 + 0.2 * Math.sin(time * 40) : 1)); });
    if (saGlow > 0.3) bolt(hp(P.sa)[0] - s * 0.13, hp(P.sa)[1] - s * 0.12, s * 0.07, (saGlow - 0.3) * 1.4);
    // 异位起搏点
    if (S.ecto > 0.02) {
      [["pacFocus", P.pac, fireA, K.pac], ["pvcFocus", P.pvc, fireV, K.pvc]].forEach((f) => {
        const q = hp(f[1]), r0 = Math.max(6, s * 0.075);
        if (f[2] > 0.02) {
          const gr = ctx.createRadialGradient(q[0], q[1], 0, q[0], q[1], r0 * 3);
          gr.addColorStop(0, rgba(f[3], 0.55 * f[2])); gr.addColorStop(1, rgba(f[3], 0));
          ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(q[0], q[1], r0 * 3, 0, TAU); ctx.fill();
        }
        mol(f[0], q[0], q[1], r0 * (1 + 0.28 * f[2]), clamp(S.ecto, 0, 1) * (0.7 + 0.3 * f[2]), time * 0.3 + (f[2] > 0 ? f[2] * 0.6 : 0));
        if (f[2] > 0.5) bolt(q[0] + r0 * 1.5, q[1] - r0 * 1.2, r0 * 0.75, (f[2] - 0.5) * 2);
      });
    }
    return {
      g, s,
      sa: hp(P.sa), av: hp(P.av), pac: hp(P.pac), pvc: hp(P.pvc), his: hp(P.his),
      top: g.cy - s * 1.08, bottom: g.cy + s * 1.02, left: g.cx - s * 0.88, right: g.cx + s * 0.88,
    };
  }

  // =================== 心电图条带 ===================
  function ecgStrip(e, phone) {
    TB.panel(e, 8);
    ctx.save(); ctx.beginPath(); ctx.roundRect(e.x, e.y, e.w, e.h, 8); ctx.clip();
    const pps = H * 0.26, x0 = e.x + 6, x1 = e.x + e.w - 12;
    const base = e.y + e.h * 0.64, amp = e.h * 0.42;
    const tx = (t) => x1 - (time - t) * pps;
    // 方格纸（小格 0.04 秒，粗格 0.2 秒），跟着波形一起走
    const small = pps * 0.04, step = small >= 4.5 ? 0.04 : 0.2;
    ctx.lineWidth = 1;
    const k0 = Math.floor((time - (x1 - e.x) / pps) / step), k1 = Math.ceil((time + 0.2) / step);
    for (let k = k0; k <= k1; k++) {
      const x = tx(k * step), bold = step === 0.2 || k % 5 === 0;
      ctx.strokeStyle = bold ? K.gridB : K.grid; ctx.beginPath(); ctx.moveTo(x, e.y); ctx.lineTo(x, e.y + e.h); ctx.stroke();
    }
    const gy = step === 0.2 ? small * 5 : small;
    for (let k = 0, y = base; y > e.y; y -= gy, k++) { ctx.strokeStyle = step === 0.2 || k % 5 === 0 ? K.gridB : K.grid; ctx.beginPath(); ctx.moveTo(e.x, y); ctx.lineTo(e.x + e.w, y); ctx.stroke(); }
    for (let k = 1, y = base + gy; y < e.y + e.h; y += gy, k++) { ctx.strokeStyle = step === 0.2 || k % 5 === 0 ? K.gridB : K.grid; ctx.beginPath(); ctx.moveTo(e.x, y); ctx.lineTo(e.x + e.w, y); ctx.stroke(); }
    const fs = SF() * (phone ? 0.9 : 1);
    font(fs, 500);
    const labW = ctx.measureText("心电图").width, recW = S.holter > 0.3 ? ctx.measureText("记录中").width + fs * 1.3 : 0;
    const labEnd = e.x + 8 + labW + recW + fs * 0.4;
    // 早搏：垫一块颜色，写上房早 / 室早；第 2 幕加上代偿间歇
    const pre = [];
    const bw = Math.max(10, pps * 0.26);
    for (let i = 0; i < beats.length; i++) {
      const b = beats[i];
      if (b.type === "N") continue;
      const xr = tx(rTime(b));
      if (xr < x0 - bw || xr > x1 + bw) continue;
      const col = b.type === "A" ? K.pac : K.pvc;
      ctx.fillStyle = rgba(col, 0.12); ctx.fillRect(xr - bw * (b.type === "A" ? 0.75 : 0.45), e.y, bw * (b.type === "A" ? 1.1 : 1.05), e.h);
      ctx.fillStyle = rgba(col, 0.7); ctx.fillRect(xr - bw * (b.type === "A" ? 0.75 : 0.45), e.y, bw * (b.type === "A" ? 1.1 : 1.05), 3);
      if (xr - fs > labEnd && xr < x1) txt(b.type === "A" ? "房早" : "室早", xr - bw * 0.1, e.y + fs * 0.95, fs, b.type === "A" ? K.pacD : K.pvcD, "center", 700);
      const nb = beats[i + 1];
      const xe = nb ? tx(rTime(nb)) : null;
      if (CH[cur].every === 4 && S.ecto > 0.5 && xe && xe - xr > fs * 5) {
        const yb = e.y + e.h * 0.9;
        ctx.save(); ctx.strokeStyle = K.soft; ctx.lineWidth = 1.3; ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(xr + bw * 0.35, yb); ctx.lineTo(xe - bw * 0.2, yb); ctx.stroke(); ctx.setLineDash([]);
        ctx.beginPath(); ctx.moveTo(xr + bw * 0.35, yb - 4); ctx.lineTo(xr + bw * 0.35, yb + 4); ctx.moveTo(xe - bw * 0.2, yb - 4); ctx.lineTo(xe - bw * 0.2, yb + 4); ctx.stroke();
        ctx.restore();
        const mx = (xr + xe) / 2 + bw * 0.1;
        font(fs * 0.9, 500); const tw = ctx.measureText("代偿间歇").width;
        ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.fillRect(mx - tw / 2 - 3, yb - fs * 1.35, tw + 6, fs * 1.1);
        txt("代偿间歇", mx, yb - fs * 0.8, fs * 0.9, K.soft, "center", 500);
      }
      pre.push({ x: xr, y: base - amp * (b.type === "V" ? 0.9 : 0.7), type: b.type });
    }
    // 第 1 幕：标出 P 波、QRS 波、T 波
    let pq = null;
    if (cur === 0) {
      for (let i = beats.length - 1; i >= 0; i--) {
        const b = beats[i], xr = tx(rTime(b));
        if (b.type === "N" && xr > x0 + e.w * 0.3 && xr < x1 - e.w * 0.25) { pq = b; break; }
      }
      if (pq) {
        const a = clamp(lt / 0.8, 0, 1), fl = fs * 0.95;
        ctx.save(); ctx.globalAlpha *= a;
        const xp = tx(pq.t + 0.045), xq = tx(rTime(pq)), xt = tx(pq.t + 0.42);
        txt("P", xp, base - amp * 0.13 - fl * 0.8, fl, K.ink, "center", 700);
        txt("QRS", xq + fl * 1.4, base - amp * 0.85, fl, K.ink, "center", 700);
        txt("T", xt, base - amp * 0.27 - fl * 0.8, fl, K.ink, "center", 700);
        ctx.restore();
      }
    }
    // 波形
    const calm = S.heal;
    ctx.strokeStyle = calm > 0.5 ? "#23705a" : K.trace; ctx.lineWidth = Math.max(1.6, H * 0.0045); ctx.lineJoin = "round";
    ctx.beginPath();
    for (let x = x0; x <= x1; x += 1.25) {
      const y = base - ecgValue(time - (x1 - x) / pps) * amp;
      if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    const yp = base - ecgValue(time) * amp;
    ctx.restore();
    impulse(x1, yp, Math.max(2.4, H * 0.006));
    // 左上角：心电图（第 4 幕加上“记录中”）
    font(fs, 500);
    ctx.fillStyle = "rgba(255,255,255,0.88)"; ctx.fillRect(e.x + 4, e.y + 3, labEnd - e.x - 4, fs * 1.4);
    txt("心电图", e.x + 8, e.y + fs * 0.95, fs, K.soft, "left", 700);
    if (S.holter > 0.3) {
      ctx.save(); ctx.globalAlpha *= clamp((S.holter - 0.3) * 2, 0, 1);
      const rx = e.x + 8 + labW + fs * 0.65, ry = e.y + fs * 0.95;
      ctx.beginPath(); ctx.arc(rx, ry, fs * 0.28, 0, TAU); ctx.fillStyle = (time % 1) < 0.6 ? K.fire : "#ffe0b0"; ctx.fill();
      txt("记录中", rx + fs * 0.45, ry, fs, K.soft, "left", 500);
      ctx.restore();
    }
    return { pre, x0, x1, base, amp, pps, tx };
  }

  // =================== 右侧面板 ===================
  const FS = () => SF() * 1.02;
  // 在宽度 w 里放得下 texts 的字号
  function fitFs(texts, w, fs0) {
    let fs = fs0;
    for (let k = 0; k < 30; k++) {
      font(fs, 500);
      if (Math.max.apply(null, texts.map((t) => ctx.measureText(t).width)) <= w) break;
      fs *= 0.94;
    }
    return fs;
  }
  function title(r, t, fs) { txt(t, r.x + r.w / 2, r.y + fs * 1.05, fs, K.ink, "center", 700); return r.y + fs * 2; }

  // 小图标（细描边、光泽渐变）
  function moonIcon(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r * 0.8, 0, TAU);
    ctx.fillStyle = TB.glossy(x, y, r * 0.8, "#e4e7ff", "#8a92da"); ctx.fill(); ctx.strokeStyle = "#4f58a6"; ctx.lineWidth = Math.max(1, r * 0.07); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + r * 0.38, y - r * 0.3, r * 0.68, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill();
    ctx.fillStyle = "#8a92da";
    [[0.62, -0.62, 0.1], [0.85, 0.05, 0.07]].forEach((p) => { ctx.beginPath(); ctx.arc(x + p[0] * r, y + p[1] * r, r * p[2], 0, TAU); ctx.fill(); });
  }
  function headIcon(x, y, r) {
    ctx.beginPath();
    ctx.moveTo(x - r * 0.35, y + r * 0.85); ctx.lineTo(x - r * 0.35, y + r * 0.4);
    ctx.bezierCurveTo(x - r * 0.85, y + r * 0.1, x - r * 0.8, y - r * 0.8, x - r * 0.05, y - r * 0.82);
    ctx.bezierCurveTo(x + r * 0.55, y - r * 0.82, x + r * 0.75, y - r * 0.35, x + r * 0.6, y - r * 0.05);
    ctx.lineTo(x + r * 0.78, y + r * 0.2); ctx.lineTo(x + r * 0.55, y + r * 0.3); ctx.lineTo(x + r * 0.5, y + r * 0.55);
    ctx.lineTo(x + r * 0.2, y + r * 0.55); ctx.lineTo(x + r * 0.2, y + r * 0.85); ctx.closePath();
    ctx.fillStyle = TB.glossy(x, y, r, "#f4f6fb", "#b7c0d4"); ctx.fill(); ctx.strokeStyle = "#6c7893"; ctx.lineWidth = Math.max(1, r * 0.06); ctx.stroke();
    bolt(x + r * 0.05, y - r * 0.25, r * 0.38, 0.8 + 0.2 * Math.sin(time * 5));
  }
  function cupIcon(x, y, r, caff) {
    ctx.strokeStyle = K.soft; ctx.lineWidth = Math.max(1, r * 0.07); ctx.lineCap = "round";
    ctx.beginPath(); ctx.arc(x + r * 0.55, y + r * 0.1, r * 0.25, -1.3, 1.3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - r * 0.62, y - r * 0.35); ctx.lineTo(x + r * 0.5, y - r * 0.35); ctx.lineTo(x + r * 0.4, y + r * 0.6);
    ctx.quadraticCurveTo(x - r * 0.06, y + r * 0.72, x - r * 0.52, y + r * 0.6); ctx.closePath();
    ctx.fillStyle = TB.glossy(x, y, r, "#ffffff", "#d7dce8"); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x - r * 0.06, y - r * 0.35, r * 0.54, r * 0.1, 0, 0, TAU); ctx.fillStyle = "#8a5a36"; ctx.fill();
    ctx.strokeStyle = rgba("#8f9ab3", 0.8); ctx.lineWidth = Math.max(1, r * 0.06);
    for (const dx of [-0.25, 0.1]) {
      const k = Math.sin(time * 3 + dx * 5) * r * 0.08;
      ctx.beginPath(); ctx.moveTo(x + dx * r, y - r * 0.55); ctx.quadraticCurveTo(x + dx * r + r * 0.18 + k, y - r * 0.78, x + dx * r, y - r * 1.0); ctx.stroke();
    }
    if (caff) mol("caff", x + r * 0.78, y + r * 0.62, r * 0.3, 1);
  }
  function wineIcon(x, y, r) {
    ctx.beginPath(); ctx.moveTo(x - r * 0.5, y - r * 0.85); ctx.lineTo(x + r * 0.5, y - r * 0.85);
    ctx.quadraticCurveTo(x + r * 0.56, y + r * 0.1, x, y + r * 0.15); ctx.quadraticCurveTo(x - r * 0.56, y + r * 0.1, x - r * 0.5, y - r * 0.85);
    ctx.fillStyle = "rgba(240,244,250,0.9)"; ctx.fill();
    ctx.save(); ctx.clip();
    ctx.fillStyle = TB.glossy(x, y - r * 0.2, r * 0.6, "#e58fb0", "#9c3b63"); ctx.fillRect(x - r, y - r * 0.42, r * 2, r);
    ctx.restore();
    ctx.strokeStyle = K.soft; ctx.lineWidth = Math.max(1, r * 0.07); ctx.lineCap = "round"; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, y + r * 0.15); ctx.lineTo(x, y + r * 0.78); ctx.moveTo(x - r * 0.32, y + r * 0.82); ctx.lineTo(x + r * 0.32, y + r * 0.82); ctx.stroke();
  }
  function cigIcon(x, y, r) {
    ctx.save(); ctx.translate(x, y + r * 0.35); ctx.rotate(-0.3);
    ctx.lineWidth = Math.max(1, r * 0.06); ctx.strokeStyle = K.soft;
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(-r * 0.9, -r * 0.16, r * 1.5, r * 0.32, r * 0.06); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#e3b27a"; ctx.beginPath(); ctx.roundRect(-r * 0.9, -r * 0.16, r * 0.45, r * 0.32, r * 0.06); ctx.fill(); ctx.stroke();
    ctx.fillStyle = TB.glossy(r * 0.68, 0, r * 0.2, "#ffd28a", "#f07a3a"); ctx.beginPath(); ctx.roundRect(r * 0.6, -r * 0.16, r * 0.16, r * 0.32, r * 0.05); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = rgba("#8f9ab3", 0.8); ctx.lineWidth = Math.max(1, r * 0.06);
    const k = Math.sin(time * 2.5) * r * 0.1;
    ctx.beginPath(); ctx.moveTo(x + r * 0.7, y + r * 0.05); ctx.quadraticCurveTo(x + r * 0.95 + k, y - r * 0.4, x + r * 0.65, y - r * 0.9); ctx.stroke();
  }
  function kIcon(x, y, r) {
    ctx.save(); ctx.translate(x - r * 0.25, y); ctx.rotate(0.12);
    ctx.beginPath(); ctx.moveTo(-r * 0.22, -r * 0.85); ctx.lineTo(-r * 0.22, r * 0.62); ctx.arc(0, r * 0.62, r * 0.22, Math.PI, 0, true); ctx.lineTo(r * 0.22, -r * 0.85);
    ctx.fillStyle = "rgba(240,244,250,0.9)"; ctx.fill();
    ctx.save(); ctx.clip(); ctx.fillStyle = TB.glossy(0, r * 0.5, r * 0.4, "#d7f3ea", "#5fbfa2"); ctx.fillRect(-r, r * 0.35, r * 2, r); ctx.restore();
    ctx.strokeStyle = K.soft; ctx.lineWidth = Math.max(1, r * 0.06); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-r * 0.32, -r * 0.85); ctx.lineTo(r * 0.32, -r * 0.85); ctx.stroke();
    ctx.restore();
    txt("K⁺", x + r * 0.45, y - r * 0.35, r * 0.62, K.ink, "center", 700);
    ctx.strokeStyle = K.blue; ctx.fillStyle = K.blue; ctx.lineWidth = Math.max(1.4, r * 0.1); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x + r * 0.45, y + r * 0.05); ctx.lineTo(x + r * 0.45, y + r * 0.55); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + r * 0.45, y + r * 0.8); ctx.lineTo(x + r * 0.25, y + r * 0.5); ctx.lineTo(x + r * 0.65, y + r * 0.5); ctx.closePath(); ctx.fill();
  }
  function leafIcon(x, y, r) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(-0.6);
    ctx.beginPath(); ctx.moveTo(0, r * 0.85); ctx.quadraticCurveTo(r * 0.8, 0, 0, -r * 0.85); ctx.quadraticCurveTo(-r * 0.8, 0, 0, r * 0.85);
    ctx.fillStyle = TB.glossy(0, 0, r * 0.8, "#d4f2e2", "#4fb384"); ctx.fill(); ctx.strokeStyle = "#2b7a55"; ctx.lineWidth = Math.max(1, r * 0.06); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, r * 0.85); ctx.lineTo(0, -r * 0.6); ctx.stroke();
    ctx.restore();
  }
  function capsuleIcon(x, y, r) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(-0.6);
    ctx.lineWidth = Math.max(1, r * 0.06); ctx.strokeStyle = "#56659f";
    ctx.beginPath(); ctx.roundRect(-r * 0.85, -r * 0.34, r * 1.7, r * 0.68, r * 0.34);
    ctx.fillStyle = TB.glossy(0, 0, r, "#ffffff", "#e3e7f1"); ctx.fill();
    ctx.save(); ctx.clip(); ctx.fillStyle = TB.glossy(-r * 0.4, 0, r * 0.6, "#dbe4ff", "#7f93d6"); ctx.fillRect(-r, -r, r, r * 2); ctx.restore();
    ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -r * 0.34); ctx.lineTo(0, r * 0.34); ctx.stroke();
    ctx.restore();
  }
  function alertIcon(x, y, r, col) {
    ctx.beginPath(); ctx.arc(x, y, r * 0.62, 0, TAU);
    ctx.fillStyle = TB.glossy(x, y, r * 0.62, "#ffe3a8", col); ctx.fill(); ctx.strokeStyle = "#a86200"; ctx.lineWidth = Math.max(1, r * 0.06); ctx.stroke();
    txt("!", x, y + r * 0.03, r * 0.85, "#ffffff", "center", 700);
  }
  function checkIcon(x, y, r, on) {
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(x - r * 0.5, y - r * 0.5, r, r, r * 0.2); ctx.fill();
    ctx.strokeStyle = "#aab5cc"; ctx.lineWidth = 1.2; ctx.stroke();
    if (on > 0.02) {
      ctx.save(); ctx.globalAlpha *= on; ctx.strokeStyle = K.ok; ctx.lineWidth = Math.max(1.8, r * 0.16); ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath(); ctx.moveTo(x - r * 0.28, y); ctx.lineTo(x - r * 0.05, y + r * 0.24); ctx.lineTo(x + r * 0.34, y - r * 0.3); ctx.stroke(); ctx.restore();
    }
  }

  // 一行一行的清单
  function listPanel(r, head, items, T, dotted) {
    TB.panel(r, 10);
    const fsT = Math.min(FS() * 1.05, r.h * 0.1);
    const y0 = title(r, head, fsT) + fsT * 0.1, pad = Math.min(r.w, r.h) * 0.05;
    const n = items.length, rh = (r.y + r.h - pad * 0.6 - y0) / n;
    const icon = Math.min(rh * 0.62, FS() * 2.6);
    const fs = fitFs(items.map((it) => it.t), r.w - pad * 2 - icon * 1.25, Math.min(FS() * 1.25, rh * 0.42));
    const out = [];
    items.forEach((it, i) => {
      const y = y0 + rh * (i + 0.5), ix = r.x + pad + icon * 0.5;
      const show = clamp((T - 0.5 - i * 0.5) / 0.4, 0, 1);
      ctx.save(); ctx.globalAlpha *= 0.25 + 0.75 * show;
      it.icon(ix, y, icon * 0.5);
      txt(it.t, ix + icon * 0.72, y + 0.5, fs, K.ink, "left", 500);
      ctx.restore();
      if (dotted && i < n - 1) { ctx.strokeStyle = "#e6eaf2"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(r.x + pad, y + rh / 2); ctx.lineTo(r.x + r.w - pad, y + rh / 2); ctx.stroke(); }
      out.push({ x: ix, y });
    });
    return out;
  }

  // 第 1 幕：传导顺序（和心脏上的编号对应）
  const SEQ = [["窦房结", "发出冲动", 0, 0.05], ["结间通路", "心房除极", 0.02, 0.09], ["房室结", "稍作停顿", 0.07, 0.15], ["希氏束", "", 0.15, 0.17], ["左、右束支", "", 0.17, 0.2], ["浦肯野纤维", "心室除极", 0.2, 0.28]];
  const SEQ_AT = [[-0.66, -0.7, P.sa], [-0.28, -0.22, [-0.41, -0.17]], [-0.26, 0.19, P.av], [0.22, 0.12, [0.0, 0.2]], [0.3, 0.64, [0.22, 0.66]], [0.78, 0.84, [0.6, 0.66]]];
  function seqStep() {
    const r = recentBeats().filter((x) => x.b.type === "N")[0];
    if (!r) return -1;
    for (let k = SEQ.length - 1; k >= 0; k--) if (r.u >= SEQ[k][2] && r.u < SEQ[k][3] + 0.12) return k;
    return -1;
  }
  function badge(x, y, k, on, rad) {
    ctx.beginPath(); ctx.arc(x, y, rad, 0, TAU);
    ctx.fillStyle = on ? K.cond : "#ffffff"; ctx.fill(); ctx.strokeStyle = on ? K.condEdge : K.ink; ctx.lineWidth = 1.2; ctx.stroke();
    txt(String(k + 1), x, y + 0.5, rad * 1.25, K.ink, "center", 700);
  }
  function seqPanel(r, T, phone) {
    TB.panel(r, 10);
    const fsT = Math.min(FS() * 1.05, r.h * 0.1);
    const y0 = title(r, "电信号怎么走", fsT);
    const foot = FS() * 1.9, pad = Math.min(r.w, r.h) * 0.05;
    const rh = (r.y + r.h - foot - y0) / SEQ.length, step = seqStep();
    const rad = Math.min(rh * 0.3, FS() * 0.7);
    const texts = SEQ.map((q) => (phone || !q[1] ? q[0] : q[0] + "：" + q[1]));
    const fs = fitFs(texts, r.w - pad * 2 - rad * 3, Math.min(FS(), rh * 0.5));
    SEQ.forEach((q, k) => {
      const y = y0 + rh * (k + 0.5), show = clamp((T - 0.3 - k * 0.3) / 0.4, 0, 1);
      ctx.save(); ctx.globalAlpha *= 0.2 + 0.8 * show;
      if (step === k) { ctx.fillStyle = rgba(K.cond, 0.16); ctx.beginPath(); ctx.roundRect(r.x + pad * 0.5, y - rh * 0.46, r.w - pad, rh * 0.92, 6); ctx.fill(); }
      badge(r.x + pad + rad, y, k, step === k, rad);
      txt(texts[k], r.x + pad + rad * 2.7, y + 0.5, fs, K.ink, "left", step === k ? 700 : 500);
      if (k < SEQ.length - 1) { ctx.strokeStyle = "#b9c3d6"; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(r.x + pad + rad, y + rad + 1); ctx.lineTo(r.x + pad + rad, y + rh - rad - 1); ctx.stroke(); }
      ctx.restore();
    });
    txt("安静心率 60～100 次/分", r.x + r.w / 2, r.y + r.h - foot * 0.5, fitFs(["安静心率 60～100 次/分"], r.w - pad * 2, FS()), K.ok, "center", 700);
  }
  function seqBadges(H0) {
    const step = seqStep(), g = H0.g, rad = Math.max(7, Math.min(FS() * 0.62, g.s * 0.065));
    SEQ_AT.forEach((q, k) => {
      const b = g.hp([q[0], q[1]]), t = g.hp(q[2]);
      ctx.strokeStyle = K.leader; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(b[0], b[1]); ctx.lineTo(t[0], t[1]); ctx.stroke();
      badge(b[0], b[1], k, step === k, rad);
    });
  }

  // 第 2 幕：三种心跳对照
  function miniTrace(r, type) {
    const seq = [["N", 0]];
    seq.push([type, type === "N" ? RR : RR * 0.6]);
    seq.push(["N", seq[1][1] + (type === "V" ? RR * 1.4 : type === "A" ? RR * 1.25 : RR)]);
    const span = seq[2][1] + 0.7, t0 = -0.12;
    const X = (t) => r.x + (t - t0) / (span - t0 + 0.05) * r.w, base = r.y + r.h * 0.66, amp = r.h * 0.5;
    ctx.fillStyle = "#fbfcfe"; ctx.fillRect(r.x, r.y, r.w, r.h);
    ctx.strokeStyle = K.grid; ctx.lineWidth = 1;
    for (let t = 0; t < span; t += 0.2) { const x = X(t); ctx.beginPath(); ctx.moveTo(x, r.y); ctx.lineTo(x, r.y + r.h); ctx.stroke(); }
    if (type !== "N") {
      const xr = X(seq[1][1] + (type === "V" ? 0.06 : 0.17)), col = type === "A" ? K.pac : K.pvc, bw = r.w * 0.1;
      ctx.fillStyle = rgba(col, 0.14); ctx.fillRect(xr - bw * (type === "A" ? 0.75 : 0.45), r.y, bw * 1.1, r.h);
    }
    ctx.strokeStyle = K.trace; ctx.lineWidth = Math.max(1.3, H * 0.0035); ctx.lineJoin = "round"; ctx.beginPath();
    for (let x = r.x; x <= r.x + r.w; x += 1) {
      const t = t0 + (x - r.x) / r.w * (span - t0 + 0.05);
      let v = 0; seq.forEach((q) => { v += wave(q[0], t - q[1]); });
      const y = base - v * amp;
      if (x === r.x) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.strokeStyle = "#d6dde9"; ctx.strokeRect(r.x, r.y, r.w, r.h);
  }
  function comparePanel(r, T) {
    TB.panel(r, 10);
    const fsT = Math.min(FS() * 1.05, r.h * 0.1);
    const y0 = title(r, "三种心跳对照", fsT), pad = Math.min(r.w, r.h) * 0.045;
    const rows = [["N", "正常心跳", "窦房结按时发出"], ["A", "房性早搏", "提前出现，P 波形态不同"], ["V", "室性早搏", "提前出现，QRS 宽大畸形"]];
    const rh = (r.y + r.h - pad * 0.5 - y0) / 3, fs = fitFs(rows.map((q) => q[2]), r.w * 0.44 - pad, Math.min(FS(), rh * 0.3));
    rows.forEach((q, i) => {
      const y = y0 + rh * i, show = clamp((T - 0.4 - i * 0.6) / 0.4, 0, 1);
      ctx.save(); ctx.globalAlpha *= 0.2 + 0.8 * show;
      const ir = Math.min(rh * 0.18, FS() * 0.75), ix = r.x + pad + ir;
      if (q[0] === "N") { const g = { s: ir * 9, hp: () => [ix, y + rh * 0.3] }; nodeShape(g, [0, 0], 0.085, 0.055, -0.5, 0); }
      else mol(q[0] === "A" ? "pacFocus" : "pvcFocus", ix, y + rh * 0.3, ir, 1);
      txt(q[1], ix + ir * 1.6, y + rh * 0.3, fs * 1.08, q[0] === "N" ? K.ink : q[0] === "A" ? K.pacD : K.pvcD, "left", 700);
      txt(q[2], r.x + pad, y + rh * 0.68, fs, K.soft, "left", 500);
      miniTrace({ x: r.x + r.w * 0.5, y: y + rh * 0.1, w: r.w * 0.5 - pad, h: rh * 0.8 }, q[0]);
      ctx.restore();
      if (i < 2) { ctx.strokeStyle = "#e6eaf2"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(r.x + pad, y + rh); ctx.lineTo(r.x + r.w - pad, y + rh); ctx.stroke(); }
    });
  }

  // 第 3 幕：常见诱因
  function trigPanel(r, T) {
    TB.panel(r, 10);
    const fsT = Math.min(FS() * 1.05, r.h * 0.1);
    const y0 = title(r, "常见诱因", fsT);
    const items = [[moonIcon, "熬夜劳累"], [headIcon, "紧张焦虑"], [(x, y, s) => cupIcon(x, y, s, true), "咖啡浓茶"], [wineIcon, "喝酒"], [cigIcon, "吸烟"], [kIcon, "血钾偏低"]];
    const cols = r.w / (r.y + r.h - y0) > 1.2 ? 3 : 2, rows = Math.ceil(items.length / cols);
    const cw = r.w / cols, rh = (r.y + r.h - y0 - 4) / rows;
    const fs = fitFs(items.map((q) => q[1]), cw * 0.9, Math.min(FS(), rh * 0.24));
    const ic = Math.min(cw * 0.26, (rh - fs * 1.6) * 0.42);
    items.forEach((it, i) => {
      const c = i % cols, rr = Math.floor(i / cols);
      const x = r.x + cw * (c + 0.5), y = y0 + rh * rr;
      const show = clamp((T - 0.5 - i * 0.45) / 0.4, 0, 1);
      ctx.save(); ctx.globalAlpha *= 0.2 + 0.8 * show;
      it[0](x, y + (rh - fs * 1.5) * 0.5, ic);
      txt(it[1], x, y + rh - fs * 0.85, fs, K.ink, "center", 500);
      ctx.restore();
    });
  }

  // 第 4 幕：动态心电图记录仪 + 电极位置
  function electrode(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = TB.glossy(x, y, r, "#ffffff", "#e7ebf3"); ctx.fill();
    ctx.strokeStyle = "#8f9ab3"; ctx.lineWidth = Math.max(1, r * 0.1); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r * 0.55, 0, TAU); ctx.fillStyle = "rgba(120,190,220,0.35)"; ctx.fill();
    ctx.beginPath(); ctx.arc(x, y, r * 0.28, 0, TAU); ctx.fillStyle = TB.glossy(x, y, r * 0.28, "#ffffff", "#9aa3b5"); ctx.fill(); ctx.strokeStyle = "#6c7893"; ctx.lineWidth = 1; ctx.stroke();
  }
  function holterFigure(r) {
    const tw = Math.min(r.w * 0.92, r.h * 0.95), th = tw * 1.02, ox = r.x + (r.w - tw) / 2, oy = r.y + (r.h - th) / 2;
    const Q = (u, v) => [ox + u * tw, oy + v * th];
    // 躯干轮廓
    const pts = [[0.4, 0.0], [0.4, 0.06], [0.16, 0.13], [0.06, 0.22], [0.08, 0.5], [0.14, 0.75], [0.16, 1.0], [0.84, 1.0], [0.86, 0.75], [0.92, 0.5], [0.94, 0.22], [0.84, 0.13], [0.6, 0.06], [0.6, 0.0]];
    ctx.beginPath(); pts.forEach((p, i) => { const q = Q(p[0], p[1]); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
    ctx.fillStyle = TB.glossy(Q(0.4, 0.35)[0], Q(0.4, 0.35)[1], tw * 0.6, "#f8f9fc", "#e1e6f0"); ctx.fill();
    ctx.strokeStyle = "#9aa6c0"; ctx.lineWidth = 1.3; ctx.lineJoin = "round"; ctx.stroke();
    // 锁骨、胸骨的淡线
    ctx.strokeStyle = "#cfd6e4"; ctx.lineWidth = 1;
    ctx.beginPath(); let a = Q(0.2, 0.17), b = Q(0.46, 0.2); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); a = Q(0.8, 0.17); b = Q(0.54, 0.2); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
    a = Q(0.5, 0.22); b = Q(0.5, 0.52); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    // 心脏的位置（胸骨左侧，画面右侧）
    const hc = Q(0.58, 0.44);
    ctx.save(); ctx.translate(hc[0], hc[1]); ctx.rotate(-0.5);
    ctx.beginPath(); ctx.ellipse(0, 0, tw * 0.11, tw * 0.085, 0, 0, TAU); ctx.fillStyle = rgba("#e8a3a0", 0.55); ctx.fill(); ctx.strokeStyle = rgba(K.edge, 0.5); ctx.stroke();
    ctx.restore();
    // 记录仪（腰间）
    const dw = tw * 0.36, dh = tw * 0.22, dc = Q(0.5, 0.8), dx = dc[0] - dw / 2, dy = dc[1] - dh / 2;
    // 电极和导联线
    const E = [[0.26, 0.24], [0.74, 0.24], [0.5, 0.36], [0.76, 0.56], [0.26, 0.6]];
    const LC = ["#8f9ab3", "#5a6378", "#d9797d", "#2fa465", "#a9784a"];
    E.forEach((p, i) => {
      const q = Q(p[0], p[1]), s0 = [dx + dw * (0.2 + i * 0.15), dy];
      ctx.strokeStyle = LC[i]; ctx.lineWidth = Math.max(1.2, tw * 0.008);
      ctx.beginPath(); ctx.moveTo(s0[0], s0[1]); ctx.quadraticCurveTo((s0[0] + q[0]) / 2 + (i % 2 ? 1 : -1) * tw * 0.04, (s0[1] + q[1]) / 2, q[0], q[1]); ctx.stroke();
    });
    const er = Math.max(4, tw * 0.045);
    E.forEach((p) => { const q = Q(p[0], p[1]); electrode(q[0], q[1], er); });
    ctx.beginPath(); ctx.roundRect(dx, dy, dw, dh, dw * 0.12);
    ctx.fillStyle = TB.glossy(dx + dw * 0.4, dy + dh * 0.3, dw * 0.7, "#6e7a96", "#3a4560"); ctx.fill(); ctx.strokeStyle = "#262f45"; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = "#e9fbf4"; ctx.beginPath(); ctx.roundRect(dx + dw * 0.1, dy + dh * 0.14, dw * 0.8, dh * 0.46, dw * 0.04); ctx.fill();
    ctx.strokeStyle = "#23705a"; ctx.lineWidth = Math.max(1, dh * 0.03); ctx.beginPath();
    for (let k = 0; k <= 30; k++) { const xx = dx + dw * (0.13 + 0.74 * k / 30); ctx.lineTo(xx, dy + dh * 0.44 - ecgValue(time - (30 - k) * 0.05) * dh * 0.22); }
    ctx.stroke();
    ctx.beginPath(); ctx.arc(dx + dw * 0.2, dy + dh * 0.8, dh * 0.07, 0, TAU); ctx.fillStyle = (time % 1) < 0.6 ? K.fire : "#ffe0b0"; ctx.fill();
    txt("24h", dx + dw * 0.62, dy + dh * 0.8, dh * 0.26, "#ffffff", "center", 700);
    return { device: { x: dx + dw * 0.5, y: dy + dh }, top: oy, bottom: oy + th };
  }
  function holterPanel(r, T, phone) {
    TB.panel(r, 10);
    const fsT = Math.min(FS() * 1.05, r.h * 0.1);
    const y0 = title(r, "动态心电图", fsT), pad = Math.min(r.w, r.h) * 0.05;
    const wide = r.w / (r.y + r.h - y0) > 1.3;
    const fr = wide ? { x: r.x + pad, y: y0, w: r.w * 0.44, h: r.y + r.h - y0 - FS() * 2 } : { x: r.x + pad, y: y0, w: r.w - pad * 2, h: r.y + r.h - y0 - FS() * 1.9 };
    const out = holterFigure(fr);
    txt("随身戴一天", fr.x + fr.w / 2, r.y + r.h - FS() * 0.95, FS() * (phone ? 0.92 : 1), K.soft, "center", 500);
    if (wide) {
      const items = ["动态心电图", "心脏超声", "查血钾", "甲状腺功能"];
      const x0 = r.x + r.w * 0.52, rw = r.x + r.w - pad - x0, top = y0 + FS() * 0.6, rh = (r.y + r.h - pad - top) / (items.length + 0.6);
      txt("常做的检查", x0, top + rh * 0.3, FS(), K.soft, "left", 700);
      const fs = fitFs(items, rw - FS() * 1.8, Math.min(FS() * 1.05, rh * 0.45));
      items.forEach((t, i) => {
        const y = top + rh * (i + 1.1), on = clamp((T - 1 - i * 1.2) / 0.4, 0, 1);
        checkIcon(x0 + fs * 0.55, y, fs * 1.05, on);
        txt(t, x0 + fs * 1.5, y + 0.5, fs, K.ink, "left", 500);
      });
      ctx.strokeStyle = "#e6eaf2"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0 - pad * 0.8, y0); ctx.lineTo(x0 - pad * 0.8, r.y + r.h - pad); ctx.stroke();
    }
    return out;
  }

  // =================== 图例 ===================
  function legendItems(i) {
    return [
      [["line", K.cond, "传导系统"], ["band", rgba(K.depol, 0.55), "除极（兴奋）"], ["bolt", "", "发出冲动"]],
      [["mol", "pacFocus", "房早起搏点"], ["mol", "pvcFocus", "室早起搏点"], ["line", K.cond, "传导系统"]],
      [["mol", "pacFocus", "房早"], ["mol", "pvcFocus", "室早"], ["mol", "caff", "咖啡因"]],
      [["mol", "pacFocus", "房早"], ["mol", "pvcFocus", "室早"], ["band", rgba(K.depol, 0.55), "除极"]],
      [["mol", "pvcFocus", "室早起搏点"], ["band", rgba(K.pvc, 0.25), "室早波形"], ["line", K.cond, "传导系统"]],
      [["line", K.cond, "传导系统"], ["band", rgba(K.depol, 0.55), "除极"], ["no", "", "少喝"]],
    ][i];
  }

  // =================== 布局 ===================
  let lgCacheW = -1, lgMax = 0;
  function layout() {
    const n = nar(), top = topY(), phone = n && W < 520;
    if (lgCacheW !== W) { lgCacheW = W; lgMax = 0; if (n) for (let i = 0; i < CH.length; i++) lgMax = Math.max(lgMax, TB.legendLayout(legendItems(i)).h); }
    const gx = n ? 8 : 16;
    const bottom = n ? H - lgMax - 8 : H - 12;
    const eh = n ? clamp(H * 0.19, 50, 150) : clamp(H * 0.2, 64, 200);
    const ecg = { x: gx, y: bottom - eh, w: W - gx * 2, h: eh };
    const mainB = ecg.y - (n ? 6 : 10);
    const hb = n ? { x: gx, y: top, w: (W - gx * 2) * 0.5, h: mainB - top } : { x: gx, y: top, w: W * 0.5 - gx, h: mainB - top };
    const side = n ? { x: W * 0.5 + 2, y: top, w: W * 0.5 - gx - 2, h: mainB - top } : { x: W * 0.52, y: top, w: W * 0.48 - gx, h: mainB - top };
    return { n, phone, top, ecg, hb, side, mainB };
  }

  // =================== 各幕：面板 + 标注 + 图例 ===================
  const TXT = {
    sa: "窦房结：发出节拍", av: "房室结：稍等再往下传", pac: "心房抢拍：房性早搏", pvc: "心室抢拍：室性早搏",
    few: "偶尔一个早搏", holter: "动态心电图：记录 24 小时", short: "普通心电图只看十几秒",
    many: "早搏一个接一个", calm: "多数早搏不用太担心",
  };
  function drawScene(i, live, T, L, Hh, E) {
    const n = L.n, Lg = TB.legendLayout(legendItems(i));
    const side = n ? L.side : { x: L.side.x, y: L.side.y, w: L.side.w, h: L.side.h - Lg.bh - 10 };
    const on = (k) => live && CH[i].labels.indexOf(k) >= 0;
    const lh = LF() * 1.8;
    // 窄屏标注的两个位置：心脏上方、心脏和心电图之间
    const nTopY = L.top + lh * 0.5, nBotY = L.mainB - lh * 0.35;
    const colX = L.hb.x + L.hb.w * 0.5;
    const pickPre = (type) => {
      const list = E.pre.filter((p) => (!type || p.type === type) && p.x < E.x1 - L.ecg.w * 0.08 && p.x > L.ecg.x + L.ecg.w * 0.12);
      return list[list.length - 1] || null;
    };
    if (i === 0) {
      if (!L.phone) seqBadges(Hh);
      seqPanel(side, T, L.phone);
      if (n) {
        tag("sa", on("sa"), Hh.sa[0], Hh.sa[1], colX, nTopY, TXT.sa, K.cond);
        tag("av", on("av"), Hh.av[0], Hh.av[1], colX, nBotY, TXT.av, K.cond);
      } else {
        tag("sa", on("sa"), Hh.sa[0], Hh.sa[1], L.hb.x + LF() * 5, L.top + lh * 0.9, TXT.sa, K.cond);
        tag("av", on("av"), Hh.av[0], Hh.av[1], L.hb.x + LF() * 6, Hh.bottom - lh * 0.4, TXT.av, K.cond);
      }
    } else if (i === 1) {
      if (!n) comparePanel(side, T);
      if (n) {
        tag("pac", on("pac"), Hh.pac[0], Hh.pac[1], L.side.x + L.side.w * 0.5, L.hb.y + L.hb.h * 0.28, TXT.pac, K.pac);
        tag("pvc", on("pvc"), Hh.pvc[0], Hh.pvc[1], L.side.x + L.side.w * 0.5, L.hb.y + L.hb.h * 0.72, TXT.pvc, K.pvc);
      } else {
        tag("pac", on("pac"), Hh.pac[0], Hh.pac[1], Hh.right - LF() * 2, L.top + lh * 0.9, TXT.pac, K.pac);
        tag("pvc", on("pvc"), Hh.pvc[0], Hh.pvc[1], Hh.right - LF() * 1.5, Hh.bottom - lh * 0.2, TXT.pvc, K.pvc);
      }
    } else if (i === 2) {
      trigPanel(side, T);
      const pf = pickPre();
      tag("few", on("few") && !!pf, pf ? pf.x : 0, pf ? pf.y : 0, n ? colX : Math.min(pf ? pf.x : 0, L.side.x - LF() * 5), n ? nBotY : L.mainB - lh * 0.6, TXT.few, pf && pf.type === "A" ? K.pac : K.pvc);
    } else if (i === 3) {
      const ho = holterPanel(side, T, L.phone);
      if (n) {
        tag("holter", on("holter"), ho.device.x, ho.device.y - 2, colX, nTopY, TXT.holter, K.soft);
        tag("short", on("short"), L.ecg.x + L.ecg.w * 0.3, L.ecg.y + L.ecg.h * 0.35, colX, nBotY, TXT.short, K.soft);
      } else {
        tag("holter", on("holter"), ho.device.x, ho.device.y - 2, side.x + side.w * 0.3, side.y + side.h + LF() * 0.2 + (Lg.bh + 10) * 0.35, TXT.holter, K.soft);
        tag("short", on("short"), L.ecg.x + L.ecg.w * 0.3, L.ecg.y + L.ecg.h * 0.35, Hh.g.cx, L.mainB - lh * 0.6, TXT.short, K.soft);
      }
    } else if (i === 4) {
      listPanel(side, "这些情况要重视", [
        { icon: (x, y, r) => alertIcon(x, y, r, K.fire), t: "早搏占比很高" },
        { icon: (x, y, r) => alertIcon(x, y, r, K.fire), t: "伴胸痛、胸闷" },
        { icon: (x, y, r) => alertIcon(x, y, r, K.fire), t: "晕倒、眼前发黑" },
        { icon: (x, y, r) => alertIcon(x, y, r, K.fire), t: "明显气短" },
        { icon: (x, y, r) => alertIcon(x, y, r, "#e7b43c"), t: "本来有心脏病" },
      ], T, true);
      const pm = pickPre("V");
      tag("many", on("many") && !!pm, pm ? pm.x : 0, pm ? pm.y : 0, n ? colX : Math.min(pm ? pm.x : 0, L.side.x - LF() * 5), n ? nBotY : L.mainB - lh * 0.6, TXT.many, K.pvc);
    } else {
      listPanel(side, "能做些什么", [
        { icon: moonIcon, t: "规律作息" },
        { icon: (x, y, r) => { cupIcon(x - r * 0.1, y, r * 0.9, false); noSign(x + r * 0.55, y + r * 0.5, r * 0.36, 1); }, t: "少咖啡浓茶和酒" },
        { icon: leafIcon, t: "放松心情" },
        { icon: capsuleIcon, t: "需要时：药物或消融" },
      ], T, true);
      if (n) tag("calm", on("calm"), Hh.g.cx - Hh.s * 0.3, Hh.g.cy + Hh.s * 0.62, colX, nBotY, TXT.calm, K.calm);
      else tag("calm", on("calm"), Hh.g.cx - Hh.s * 0.3, Hh.g.cy + Hh.s * 0.62, L.hb.x + LF() * 6, Hh.bottom - lh * 0.1, TXT.calm, K.calm);
    }
    // 图例：宽屏放在右侧面板下面（心电图上方），窄屏在底部一条
    if (n) TB.legend(Lg);
    else { ctx.save(); ctx.translate(0, L.mainB + 4 - H); TB.legend(Lg); ctx.restore(); }
  }

  // 胶囊：窄屏上右边的胶囊放不下时不画（避免叠成两行挡住标注）
  function pillW(label, value) {
    const fs = Math.max(12, W / 60) * Anima.UI;
    font(fs, 500); const a = ctx.measureText(label).width;
    font(fs * 1.4, 700); const b = ctx.measureText(value).width;
    return a + b + 34;
  }
  function hud() {
    const f = S.freq;
    const word = f < 0.05 ? "没有" : f < 0.4 ? "偶尔" : f < 0.75 ? "较多" : "很频繁";
    const col = f < 0.4 ? K.ok : f < 0.75 ? K.warn : K.red;
    pill(14, 12, "早搏", word, col, false);
    const p = CH[cur].pill;
    if (p && 14 + pillW("早搏", "很频繁") + 10 + pillW(p[0], p[1]) + 14 <= W) pill(W - 14, 12, p[0], p[1], p[2] === "ok" ? K.ok : p[2] === "warn" ? K.warn : K.red, true);
  }

  function draw() {
    TB.background();
    const L = layout();
    const Hh = drawHeart(L.hb, L.phone);
    const E = ecgStrip(L.ecg, L.phone);
    const f = clamp(lt / 0.7, 0, 1);
    if (f < 1 && prevCur >= 0 && prevCur !== cur) {
      ctx.save(); ctx.globalAlpha = 1 - f; drawScene(prevCur, false, prevLt, L, Hh, E); ctx.restore();
    }
    ctx.save(); ctx.globalAlpha = prevCur >= 0 ? f : 1; drawScene(cur, true, lt, L, Hh, E); ctx.restore();
    ctx.globalAlpha = 1;
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e5484d",
    titleCard: { lines: ["心里咯噔一下，", "是早搏吗？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
