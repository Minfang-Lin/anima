// 血脂小船：教科书示意图画风（机制类集），通用画法见 shared/textbook.js。
Anima.register("lipids", {
    "title": "血脂小船",
    "tag": "血脂小剧场",
    "headline": "化验单上的【血脂】，到底在说什么？",
    "lede": "胆固醇不是坏东西，它要坐“脂蛋白小船”才能在血液里旅行。认识 LDL、HDL、载脂蛋白和 Lp(a)，看懂自己的血脂化验单。",
    "summary": "认识 LDL、HDL、载脂蛋白和 Lp(a)：HDL 不是越高越好，Lp(a) 一生至少查一次。",
    "footer": "血脂异常请到心内科或内分泌科就诊，降脂目标请结合自己的心血管风险和医生一起制定。",
    "canvasLabel": "脂蛋白结构与血管壁示意图：血脂小船",
    "disease": "高血脂",
    "organs": ["vessels"],
    "categories": ["metabolic", "cardio"],
    "color": "#9b7fe0",
    "look": "textbook"
  }, () => {
  const CH = [
    { title: "胆固醇不是坏东西", ldlc: 2.6, hdlc: 1.3, ldl: 0.4, plaque: 0,
      pill: ["HDL-C", "1.3 mmol/L", "ok"],
      text: "胆固醇并不是坏东西。它是细胞膜的原料，还能用来制造激素和胆汁，大部分由肝脏自己合成。可它是油性的，不能直接溶在血液里，要坐上一种叫“脂蛋白”的小船，才能在血液里旅行。",
      fact: "化验单上的各种“胆固醇”，其实是不同脂蛋白小船里装的胆固醇",
      labels: ["liver", "boat"] },
    { title: "认识两种小船：LDL 和 HDL", ldlc: 2.6, hdlc: 1.3, ldl: 0.4, plaque: 0,
      pill: ["HDL-C", "1.3 mmol/L", "ok"],
      text: "血液里有两种主要的小船。低密度脂蛋白（LDL）个头大，负责把胆固醇从肝脏送到全身；高密度脂蛋白（HDL）个头小，能把组织里多余的胆固醇运回肝脏处理。化验单上的 LDL-C 和 HDL-C，就是这两种小船里装的胆固醇。",
      fact: "一般人群 LDL-C 合适水平 < 3.4 mmol/L；HDL-C < 1.0 mmol/L 为偏低",
      labels: ["ldl", "hdl"] },
    { title: "LDL 太多，钻进血管壁", ldlc: 4.6, hdlc: 1.1, ldl: 1, plaque: 0.8,
      pill: ["HDL-C", "1.1 mmol/L", "ok"],
      text: "LDL 小船太多时，就会从内皮的缝隙钻进血管壁，被困在里面、被氧化。免疫细胞把它们吞下去，变成泡沫细胞，慢慢堆成斑块。LDL 越多、在血里待得越久，斑块就长得越快。",
      fact: "LDL-C 目标因人而异：一般 < 3.4，高危 < 2.6，极高危 < 1.8 mmol/L",
      labels: ["enter", "plaque"] },
    { title: "HDL 并不是越高越好", ldlc: 4.6, hdlc: 2.6, ldl: 0.8, plaque: 0.6,
      pill: ["HDL-C", "2.6 mmol/L", "warn"],
      text: "那 HDL 是不是越高越好？并不是。HDL-C 只说明 HDL 小船里装了多少胆固醇，不代表小船干活有多卖力。研究发现，HDL-C 特别高的人风险不一定更低，用药物把 HDL-C 升高，也没有减少心梗。看化验单时，不用追求 HDL-C 越高越好。",
      fact: "目前不建议用药物专门升高 HDL-C",
      labels: ["sleepy"] },
    { title: "载脂蛋白：数一数有几艘船", ldlc: 3.1, hdlc: 1.3, ldl: 1, plaque: 0.6,
      pill: ["ApoB", "1.3 g/L", "bad"],
      text: "载脂蛋白是小船的“船身蛋白”。每一艘 LDL 这类容易钻进血管壁的小船上，都有且只有一个载脂蛋白 B（ApoB），所以查 ApoB 就像在数船的数量。有时 LDL-C 看起来不高，但小船又小又多，ApoB 就会偏高。HDL 的主要船身蛋白则是载脂蛋白 A1。",
      fact: "有糖尿病、肥胖或甘油三酯高的人，ApoB 更能反映真实风险",
      labels: ["apob", "small"] },
    { title: "特别说说 Lp(a)", ldlc: 2.6, hdlc: 1.3, ldl: 0.5, plaque: 0.5,
      pill: ["Lp(a)", "90 mg/dL", "bad"],
      text: "还要特别说说 Lp(a)，也叫脂蛋白小 a。它像一艘 LDL 小船多挂了一条带钩的小尾巴，更容易粘在血管壁上，还会促进血栓和炎症，也和主动脉瓣钙化有关。Lp(a) 主要由基因决定，饮食和运动几乎改变不了它，而且很多人其他血脂指标都正常。",
      fact: "建议一生至少查一次 Lp(a)；常以 50 mg/dL（或 125 nmol/L）作为明显升高的界值",
      labels: ["lpa", "hook"] },
    { title: "怎么管好血脂", ldlc: 1.8, hdlc: 1.3, ldl: 0.3, plaque: 0.45,
      pill: ["Lp(a)", "90 mg/dL", "bad"],
      text: "管好血脂，重点是把 LDL-C 和 ApoB 降到适合自己的目标。少吃肥肉、油炸食品和反式脂肪，多吃蔬菜和全谷物，规律运动、不吸烟，必要时在医生指导下用降脂药。如果 Lp(a) 偏高，其他危险因素就要管得更严，也建议家人去查一查。",
      fact: "血脂目标因人而异，请结合自己的心血管风险，和医生一起制定",
      labels: ["fewer", "lpaStay"] },
  ];
  const DUR = 12;

  const { clamp, rnd, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0, prevCur = -1, prevLt = 0;
  const TB = Anima.textbook({ W: () => W, H: () => H, time: () => time });
  const { ctx, TAU, rgba, shade, glossy, txt, background, sample, along, ease, LF, SF, IR, topY, nar, mol, receptor, minusSign, arrow, flow, bilayer, tag, smoothPath } = TB;
  const K = TB.K;
  const S = { ldlc: 2.6, hdlc: 1.3, ldl: 0.4, plaque: 0 };

  // ---------- 本集颜色（新分子的颜色也登记进图标词典） ----------
  const LP = {
    chol: ["#fff1b0", "#eec233", "#9c7a0e"],      // 胆固醇：黄色甾环
    tg: ["#e3efb8", "#99b541", "#5d7420"],        // 甘油三酯：橄榄绿“E”字
    apob: ["#f7cbe2", "#c24d8c", "#7f2a58"],      // ApoB-100：品红色长带
    ldlr: ["#fbe8f2", "#e8a9cb", "#a5507c"],      // LDL 受体：浅品红（和 ApoB 同色系）
    apoa1: ["#c4ecf7", "#2fb2d6", "#16708a"],     // ApoA-I：天青色螺旋
    apoa: ["#bdeade", "#139c86", "#0b5f52"],      // apo(a)：深青绿三叶环（kringle）
    drug: ["#d3daf5", "#5d6fc0", "#34438a"],      // 降脂药（他汀类）：靛蓝胶囊
    core: ["#fff7da", "#f6dc8a"], coreTG: "#dfe7a6", coreOx: ["#efdcc6", "#b88c5f"],
    mac: ["#f3f5fc", "#bcc6e4", "#6b7bab"],       // 巨噬细胞
    plt: ["#f1e6fb", "#c3a2e8", "#7d58ad"],       // 血小板
    hep: ["#fcf0e6", "#efd0b6", "#b98563"],       // 肝细胞
    nuc: ["#ece6f5", "#bdb0d6", "#7f6fa6"],
    plasma: "#fcf8f0", intima: "#f6f0f5", media: "#f0e4ea", cap: "#ecd3df",
    smc: ["#f8e9ef", "#e4c6d3", "#b88ca0"], iel: "#d6a6c2",
    endo: ["#fdf4f7", "#f1ccda", "#c48aa2"],
    fibrin: "#b3978a", bile: ["#dff2c9", "#7fbf5a", "#4a7d2e"], ok: "#2fa465",
  };

  // ---------- 新形状（只在运行时登记，不改 shared/） ----------
  const HALF = Math.PI / 2;
  const sterolPath = (c, r) => { // 三个并排的六元环 + 右侧一小段侧链（左端是 3 位羟基一侧）
    const s = 0.4 * r, w = Math.sqrt(3) * s, dx = -0.18 * r, xs = [dx - w, dx, dx + w];
    c.moveTo(xs[0] - w / 2, -s / 2);
    xs.forEach((x) => { c.lineTo(x, -s); c.lineTo(x + w / 2, -s / 2); });
    c.lineTo(xs[2] + w / 2 + 0.42 * r, -s * 0.1);
    c.lineTo(xs[2] + w / 2, s / 2);
    for (let i = 2; i >= 0; i--) { c.lineTo(xs[i], s); c.lineTo(xs[i] - w / 2, s / 2); }
    c.closePath();
    c.moveTo(xs[0] + w / 2, -s / 2); c.lineTo(xs[0] + w / 2, s / 2);
    c.moveTo(xs[1] + w / 2, -s / 2); c.lineTo(xs[1] + w / 2, s / 2);
  };
  const flatNotch = (c, r) => { const s = r * 1.1; c.lineTo(-s, 0); c.lineTo(-s, s * 0.5); c.lineTo(s, s * 0.5); c.lineTo(s, 0); };
  const TG_PTS = [[-0.95, -0.95], [0.95, -0.95], [0.95, -0.56], [-0.5, -0.56], [-0.5, -0.2], [0.95, -0.2], [0.95, 0.2], [-0.5, 0.2], [-0.5, 0.56], [0.95, 0.56], [0.95, 0.95], [-0.95, 0.95]];
  const polyPath = (pts) => (c, r) => { pts.forEach((p, k) => { if (k) c.lineTo(p[0] * r, p[1] * r); else c.moveTo(p[0] * r, p[1] * r); }); c.closePath(); };
  const CRES_A = 0.15 * Math.PI, CRES_B = 0.85 * Math.PI;
  const shapes = {
    lp_sterol: { path: sterolPath, notch: flatNotch },
    lp_tg: { path: polyPath(TG_PTS), notch: flatNotch },
    // ApoB：一段弯弯的“带子”（月牙）；LDL 受体顶上是同样弧度的月牙槽
    lp_crescent: {
      path(c, r) { const cy = -0.72 * r; c.arc(0, cy, r, CRES_A, CRES_B, false); c.arc(0, cy, 0.62 * r, CRES_B, CRES_A, true); c.closePath(); },
      notch(c, r) { const s = r * 1.12; c.arc(0, -0.45 * s, s, CRES_B, CRES_A, true); },
    },
    // ApoA-I：两亲性螺旋（圆头短棒，带斜纹）
    lp_helix: {
      path(c, r) {
        c.moveTo(-r + 0.34 * r, -0.34 * r); c.lineTo(r - 0.34 * r, -0.34 * r); c.arc(r - 0.34 * r, 0, 0.34 * r, -HALF, HALF);
        c.lineTo(-r + 0.34 * r, 0.34 * r); c.arc(-r + 0.34 * r, 0, 0.34 * r, HALF, HALF * 3); c.closePath();
        for (let k = -2; k <= 2; k++) { c.moveTo(k * 0.34 * r - 0.12 * r, -0.34 * r); c.lineTo(k * 0.34 * r + 0.12 * r, 0.34 * r); }
      },
      notch: flatNotch,
    },
    // apo(a) 的 kringle 结构域：三叶环
    lp_kringle: {
      path(c, r) { [-HALF, HALF / 3 * 1, HALF / 3 * 7].forEach((a) => { const x = Math.cos(a) * 0.44 * r, y = Math.sin(a) * 0.44 * r; c.moveTo(x + 0.54 * r, y); c.arc(x, y, 0.54 * r, 0, TAU); }); },
      notch(c, r) { const s = r * 0.98; c.lineTo(-s, 0); c.arc(0, 0, s, Math.PI, 0, true); },
    },
  };
  Object.keys(shapes).forEach((k) => { if (!TB.SHAPES[k]) Anima.textbook.registerShape(k, shapes[k]); });
  const REG = Anima.textbook.register;
  REG("chol", { shape: "lp_sterol", color: LP.chol, label: "胆固醇" });
  REG("tg", { shape: "lp_tg", color: LP.tg, label: "甘油三酯" });
  REG("apob", { shape: "lp_crescent", color: LP.apob, label: "ApoB-100", receptor: { color: LP.ldlr, label: "LDL受体" } });
  REG("apoa1", { shape: "lp_helix", color: LP.apoa1, label: "ApoA-I" });
  REG("apoa", { shape: "lp_kringle", color: LP.apoa, label: "apo(a)" });
  REG("statin", { shape: "capsule", color: LP.drug, label: "降脂药（他汀类）" });

  function update(dt) {
    if (cur !== lastCur) { prevCur = lastCur; prevLt = lt; lastCur = cur; lt = 0; }
    lt += dt; prevLt += dt;
  }
  const cyc = (P, off) => (((time / P + (off || 0)) % 1) + 1) % 1;
  const lerp = (a, b, t) => a + (b - a) * t;

  // =================== 分子与结构 ===================
  // 胆固醇酯：甾环 + 一条脂肪酸尾巴（接在羟基那一端）
  function cholEster(x, y, r, rot, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a; ctx.translate(x, y); if (rot) ctx.rotate(rot);
    const c = LP.chol, x0 = -0.95 * r;
    ctx.strokeStyle = c[2]; ctx.lineWidth = Math.max(1, r * 0.16); ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(x0, 0);
    for (let k = 1; k <= 4; k++) ctx.lineTo(x0 - k * r * 0.34, (k % 2 ? 1 : -1) * r * 0.2);
    ctx.stroke();
    ctx.restore();
    mol("chol", x + Math.cos(rot || 0) * r * 0.25, y + Math.sin(rot || 0) * r * 0.25, r * 0.78, a == null ? 1 : a, rot || 0);
  }
  // 单个磷脂（图例用）：圆头 + 两条尾巴
  function phospho(x, y, s) {
    ctx.strokeStyle = K.memEdge; ctx.lineWidth = Math.max(1, s * 0.12); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x - s * 0.2, y); ctx.lineTo(x - s * 0.2, y + s * 1.1); ctx.moveTo(x + s * 0.2, y); ctx.lineTo(x + s * 0.2, y + s * 1.1); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y - s * 0.1, s * 0.42, 0, TAU); ctx.fillStyle = K.memHead; ctx.fill(); ctx.stroke();
  }
  // 二硫键：两个黄色小球连在一起
  function disulfide(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a;
    ctx.strokeStyle = "#a58410"; ctx.lineWidth = Math.max(1, s * 0.2);
    ctx.beginPath(); ctx.moveTo(x - s * 0.5, y); ctx.lineTo(x + s * 0.5, y); ctx.stroke();
    for (const dx of [-0.5, 0.5]) { ctx.beginPath(); ctx.arc(x + dx * s, y, s * 0.36, 0, TAU); ctx.fillStyle = glossy(x + dx * s, y, s * 0.36, "#fff3b0", "#e8c21e"); ctx.fill(); ctx.stroke(); }
    ctx.restore();
  }

  // ApoB-100：一整条缠在颗粒表面的长带（下半圈），一头是球状的 N 端
  function apoBBelt(r, glow, det) {
    const c = LP.apob, w = Math.max(1.8, r * (det ? 0.07 : 0.095));
    const a0 = HALF - 1.8, a1 = HALF + 1.8, N = 44, pts = [];
    for (let i = 0; i <= N; i++) {
      const th = a0 + (a1 - a0) * i / N, rad = r - w * 0.2 + Math.sin(th * 12 + time * 0.8) * w * 0.16;
      pts.push([Math.cos(th) * rad, Math.sin(th) * rad]);
    }
    const line = (col, lw) => { ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.beginPath(); pts.forEach((p, k) => (k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); };
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    if (glow > 0.01) line(rgba(c[1], 0.22 * glow), w * 2.8);
    line(c[2], w + Math.max(1.6, w * 0.4));
    line(c[1], w);
    line(rgba(c[0], 0.75), w * 0.3);
    const g = pts[N], gr = w * (det ? 1.05 : 0.95); // 球状结构域
    ctx.beginPath(); ctx.arc(g[0], g[1], gr, 0, TAU); ctx.fillStyle = glossy(g[0], g[1], gr, c[0], c[1]); ctx.fill();
    ctx.strokeStyle = c[2]; ctx.lineWidth = Math.max(1, gr * 0.25); ctx.stroke();
    return { x: Math.cos(HALF) * r, y: r };
  }
  // ApoA-I：几段贴在表面的螺旋
  function apoAHelices(r, det) {
    const c = LP.apoa1, w = Math.max(2, r * (det ? 0.11 : 0.24));
    [-2.55, -0.55, 1.45].forEach((s0, j) => {
      const s1 = s0 + 1.2, rad = r - w * 0.15;
      ctx.lineCap = "round";
      for (const [col, lw] of [[c[2], w + Math.max(1.4, w * 0.35)], [c[1], w]]) {
        ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.beginPath(); ctx.arc(0, 0, rad, s0, s1); ctx.stroke();
      }
      if (w > 3) {
        ctx.strokeStyle = rgba(c[0], 0.85); ctx.lineWidth = Math.max(1, w * 0.18);
        ctx.beginPath();
        for (let k = 1; k < 6; k++) {
          const th = s0 + (s1 - s0) * k / 6, cx = Math.cos(th), sx = Math.sin(th);
          ctx.moveTo(cx * (rad - w * 0.35) - sx * w * 0.2, sx * (rad - w * 0.35) + cx * w * 0.2);
          ctx.lineTo(cx * (rad + w * 0.35) + sx * w * 0.2, sx * (rad + w * 0.35) - cx * w * 0.2);
        }
        ctx.stroke();
      }
    });
  }
  // apo(a)：一串 kringle 环，由二硫键连在 ApoB 末端
  function apoaTail(r, ang, wig, lenK, det) {
    const th = HALF - 1.8, ax = Math.cos(th) * r, ay = Math.sin(th) * r;
    const L = r * (lenK || 2.6), kr = Math.max(3, r * (det ? 0.15 : 0.2));
    const ca = Math.cos(ang), sa = Math.sin(ang), pts = [];
    for (let j = 0; j <= 5; j++) {
      const u = j / 5, al = kr * 0.9 + (L - kr * 0.9) * u, side = Math.sin(u * TAU * 0.9 + time * 1.1) * r * 0.26 * wig * u;
      pts.push([ax + ca * al - sa * side, ay + sa * al + ca * side]);
    }
    pts.unshift([ax, ay]);
    const sp = sample(pts, 60);
    // 按弧长放 kringle
    const cum = [0];
    for (let i = 1; i < sp.length; i++) cum.push(cum[i - 1] + Math.hypot(sp[i][0] - sp[i - 1][0], sp[i][1] - sp[i - 1][1]));
    const tot = cum[cum.length - 1], at = (d) => { let i = 1; while (i < cum.length - 1 && cum[i] < d) i++; const u = (d - cum[i - 1]) / Math.max(1e-6, cum[i] - cum[i - 1]); return [sp[i - 1][0] + (sp[i][0] - sp[i - 1][0]) * u, sp[i - 1][1] + (sp[i][1] - sp[i - 1][1]) * u]; };
    const gap = kr * 2.25, nk = Math.max(3, Math.floor((tot - kr * 2.2) / gap) + 1);
    const dEnd = kr * 2.2 + (nk - 1) * gap;
    ctx.strokeStyle = LP.apoa[2]; ctx.lineWidth = Math.max(1, kr * 0.2); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(sp[0][0], sp[0][1]);
    for (let i = 1; i < sp.length && cum[i] < dEnd; i++) ctx.lineTo(sp[i][0], sp[i][1]);
    ctx.stroke();
    let mid = null;
    for (let k = 0; k < nk; k++) {
      const p = at(kr * 2.2 + k * gap);
      if (k === nk - 1) { // 末端的蛋白酶样结构域
        ctx.beginPath(); ctx.ellipse(p[0], p[1], kr * 1.1, kr * 0.75, ang, 0, TAU);
        ctx.fillStyle = glossy(p[0], p[1], kr, LP.apoa[1], LP.apoa[2]); ctx.fill(); ctx.strokeStyle = LP.apoa[2]; ctx.lineWidth = Math.max(1, kr * 0.12); ctx.stroke();
      } else mol("apoa", p[0], p[1], kr, 1, k * 0.7 + time * 0.3);
      if (k === Math.floor(nk / 2)) mid = p;
    }
    disulfide(ax + ca * kr * 0.45, ay + sa * kr * 0.45, Math.max(3, kr * 0.75), 1);
    return { mid, end: at(dEnd), att: [ax, ay] };
  }

  // 脂蛋白颗粒：磷脂单分子层外壳 + 嵌在壳里的游离胆固醇 + 胆固醇酯 / 甘油三酯内核 + 载脂蛋白
  // o: { kind: "ldl"|"vldl"|"hdl"|"lpa", ox, detail, rot, a, glow, tail, wig, tailK }
  function particle(x, y, r, o) {
    o = o || {};
    const a = o.a == null ? 1 : o.a;
    if (a < 0.02 || r < 1.5) return null;
    const kind = o.kind || "ldl", ox = o.ox || 0, rot = o.rot || 0, det = !!o.detail;
    let res = null;
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); if (rot) ctx.rotate(rot);
    if (kind === "lpa") res = apoaTail(r, (o.tail == null ? -0.15 : o.tail) - rot, o.wig == null ? 1 : o.wig, o.tailK, det);
    const hr = det ? Math.max(2, r * 0.05) : Math.max(1.1, r * 0.095);
    const rc = det ? r - hr * 3.7 : r * 0.7;
    ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fillStyle = shade(K.memTail, "#e3cab0", ox); ctx.fill();
    ctx.beginPath(); ctx.arc(0, 0, rc, 0, TAU);
    ctx.fillStyle = glossy(0, 0, rc, shade(LP.core[0], LP.coreOx[0], ox), shade(kind === "vldl" ? LP.coreTG : LP.core[1], LP.coreOx[1], ox)); ctx.fill();
    if (det) coreDetail(rc, kind);
    else if (r > 9) {
      const n = Math.min(9, Math.round(rc / 3));
      for (let i = 0; i < n; i++) {
        const ang = rnd(i + 3) * TAU, d = Math.sqrt(rnd(i + 17)) * rc * 0.72;
        ctx.beginPath(); ctx.ellipse(Math.cos(ang) * d, Math.sin(ang) * d, rc * 0.14, rc * 0.07, ang, 0, TAU);
        ctx.fillStyle = shade(i % 3 === 0 && kind !== "hdl" ? LP.tg[1] : LP.chol[1], "#8a6a4a", ox * 0.6); ctx.fill();
      }
    }
    // 磷脂头（外圈）、尾巴（朝内），每隔几个换成一个游离胆固醇
    const nh = Math.max(8, Math.floor(TAU * (r - hr) / (hr * 2.25))), every = kind === "hdl" ? 5 : 4;
    const heads = [];
    ctx.strokeStyle = rgba(K.memEdge, 0.8); ctx.lineWidth = Math.max(0.8, hr * 0.28); ctx.lineCap = "round";
    ctx.beginPath();
    for (let k = 0; k < nh; k++) {
      const th = k / nh * TAU, cs = Math.cos(th), sn = Math.sin(th);
      if (k % every === 2 && r > 10) continue;
      heads.push([cs * (r - hr), sn * (r - hr)]);
      if (det) for (const off of [-0.42, 0.42]) {
        const px = -sn * hr * off, py = cs * hr * off;
        ctx.moveTo(cs * (r - hr * 1.9) + px, sn * (r - hr * 1.9) + py); ctx.lineTo(cs * (r - hr * 3.5) + px, sn * (r - hr * 3.5) + py);
      }
    }
    if (det) ctx.stroke();
    ctx.beginPath();
    heads.forEach((p) => { ctx.moveTo(p[0] + hr, p[1]); ctx.arc(p[0], p[1], hr, 0, TAU); });
    ctx.fillStyle = shade(K.memHead, "#c7a07a", ox); ctx.fill();
    ctx.strokeStyle = shade(K.memEdge, "#8a6a4a", ox); ctx.lineWidth = Math.max(0.6, hr * 0.22); ctx.stroke();
    if (r > 10) for (let k = 2; k < nh; k += every) {
      const th = k / nh * TAU;
      if (det) mol("chol", Math.cos(th) * (r - hr * 2.1), Math.sin(th) * (r - hr * 2.1), hr * 1.25, 1, th);
      else { ctx.beginPath(); ctx.arc(Math.cos(th) * (r - hr), Math.sin(th) * (r - hr), hr * 0.8, 0, TAU); ctx.fillStyle = LP.chol[1]; ctx.fill(); }
    }
    ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.strokeStyle = rgba(shade(K.memEdge, "#6d5040", ox), 0.6); ctx.lineWidth = 1; ctx.stroke();
    // 载脂蛋白
    if (kind === "hdl") apoAHelices(r, det);
    else apoBBelt(r, o.glow || 0, det);
    // 氧化：外壳上的小“灼痕”
    if (ox > 0.05) {
      ctx.strokeStyle = rgba("#9a4f1e", ox * 0.9); ctx.lineWidth = Math.max(1, r * 0.06);
      for (let k = 0; k < 4; k++) {
        const th = -2.4 + k * 0.75, cx = Math.cos(th) * r * 0.92, cy = Math.sin(th) * r * 0.92, s = r * 0.16;
        ctx.beginPath();
        for (let j = 0; j < 3; j++) { const q = j * Math.PI / 3 + k; ctx.moveTo(cx - Math.cos(q) * s, cy - Math.sin(q) * s); ctx.lineTo(cx + Math.cos(q) * s, cy + Math.sin(q) * s); }
        ctx.stroke();
      }
    }
    ctx.restore();
    if (res) { // 转回世界坐标
      const c = Math.cos(rot), s = Math.sin(rot), w = (p) => (p ? [x + p[0] * c - p[1] * s, y + p[0] * s + p[1] * c] : null);
      return { mid: w(res.mid), end: w(res.end), att: w(res.att) };
    }
    return null;
  }
  // 内核里装的胆固醇酯和甘油三酯（只在放大的结构图里画）
  function coreDetail(rc, kind) {
    const s = rc * 0.28, tgFrac = kind === "vldl" ? 0.65 : kind === "hdl" ? 0.2 : 0.28;
    let i = 0;
    for (let gy = -rc; gy <= rc; gy += s * 0.9) {
      const row = Math.round(gy / (s * 0.9));
      for (let gx = -rc + (row % 2 ? s / 2 : 0); gx <= rc; gx += s) {
        i++;
        if (Math.hypot(gx, gy) > rc - s * 0.55) continue;
        const jx = Math.sin(time * 0.9 + i * 1.7) * s * 0.05, jy = Math.cos(time * 0.8 + i * 2.3) * s * 0.05;
        const rot = rnd(i + 40) * Math.PI - HALF + Math.sin(time * 0.4 + i) * 0.1;
        if (rnd(i + 90) < tgFrac) mol("tg", gx + jx, gy + jy, s * 0.34, 1, rot);
        else cholEster(gx + jx + s * 0.08, gy + jy, s * 0.33, rot, 1);
      }
    }
  }

  // 巨噬细胞 / 泡沫细胞：load 0 = 普通巨噬细胞，1 = 塞满脂滴的泡沫细胞；reach 伸出伪足
  function macro(x, y, s, load, seed, reach) {
    const N = 14, pts = [];
    for (let k = 0; k < N; k++) {
      const th = k / N * TAU;
      let rad = s * (1 + 0.09 * Math.sin(time * 1.1 + k * 2.3 + seed));
      if (reach) rad += reach.amt * s * Math.pow(Math.max(0, Math.cos(th - reach.ang)), 6);
      pts.push([x + Math.cos(th) * rad * 1.18, y + Math.sin(th) * rad * 0.86]);
    }
    smoothPath(pts, true);
    ctx.fillStyle = glossy(x, y, s * 1.2, shade(LP.mac[0], "#fffbe8", load), shade(LP.mac[1], "#ead9a6", load * 0.85)); ctx.fill();
    ctx.strokeStyle = LP.mac[2]; ctx.lineWidth = Math.max(1, s * 0.055); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x - s * 0.32, y + s * 0.12, s * 0.36, s * 0.24, 0.5, 0, TAU); ctx.fillStyle = rgba(LP.mac[2], 0.45); ctx.fill();
    const nd = Math.round(load * 10);
    for (let i = 0; i < nd; i++) {
      const ang = rnd(seed * 13 + i) * TAU, d = Math.sqrt(rnd(seed * 7 + i + 50)) * s * 0.72;
      const dx = x + Math.cos(ang) * d * 1.1 + s * 0.12, dy = y + Math.sin(ang) * d * 0.72, dr = s * (0.13 + 0.07 * rnd(seed + i * 3));
      ctx.beginPath(); ctx.arc(dx, dy, dr, 0, TAU); ctx.fillStyle = glossy(dx, dy, dr, "#fffbe0", LP.chol[1]); ctx.fill();
      ctx.strokeStyle = rgba(LP.chol[2], 0.7); ctx.lineWidth = Math.max(0.7, dr * 0.14); ctx.stroke();
    }
  }
  function platelet(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0);
    ctx.beginPath(); ctx.ellipse(0, 0, s, s * 0.55, 0, 0, TAU);
    ctx.fillStyle = glossy(0, 0, s, LP.plt[0], LP.plt[1]); ctx.fill(); ctx.strokeStyle = LP.plt[2]; ctx.lineWidth = Math.max(0.8, s * 0.1); ctx.stroke();
    ctx.fillStyle = rgba(LP.plt[2], 0.55);
    for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc((k - 1) * s * 0.4, (k % 2 ? 0.12 : -0.1) * s, s * 0.12, 0, TAU); ctx.fill(); }
    ctx.restore();
  }
  function bileDrop(x, y, s) {
    ctx.beginPath(); ctx.moveTo(x, y - s); ctx.bezierCurveTo(x + s * 0.9, y + s * 0.1, x + s * 0.6, y + s * 0.85, x, y + s * 0.85);
    ctx.bezierCurveTo(x - s * 0.6, y + s * 0.85, x - s * 0.9, y + s * 0.1, x, y - s);
    ctx.fillStyle = glossy(x, y, s, LP.bile[0], LP.bile[1]); ctx.fill(); ctx.strokeStyle = LP.bile[2]; ctx.lineWidth = Math.max(1, s * 0.1); ctx.stroke();
  }
  function steroidHormone(x, y, r) { // 类固醇激素：和胆固醇同样的甾环骨架，换成粉色
    ctx.save(); ctx.translate(x, y); ctx.beginPath(); sterolPath(ctx, r);
    ctx.fillStyle = glossy(0, 0, r, "#fde0e8", "#e58aa6"); ctx.fill(); ctx.strokeStyle = "#a44a68"; ctx.lineWidth = Math.max(1, r * 0.1); ctx.stroke();
    ctx.restore();
  }

  // 肝细胞：圆角多边形，细胞核 + 内质网
  function hepato(cx, cy, rx, ry, seed) {
    const pts = [];
    for (let k = 0; k < 6; k++) { const th = k / 6 * TAU + 0.3 + (seed || 0); pts.push([cx + Math.cos(th) * rx * (1 + 0.06 * Math.sin(k * 3)), cy + Math.sin(th) * ry]); }
    smoothPath(pts, true);
    ctx.fillStyle = glossy(cx, cy, Math.max(rx, ry) * 1.1, LP.hep[0], LP.hep[1]); ctx.fill();
    ctx.strokeStyle = K.memHead; ctx.lineWidth = Math.max(3, Math.min(rx, ry) * 0.05); ctx.stroke();
    ctx.strokeStyle = LP.hep[2]; ctx.lineWidth = 1.2; ctx.stroke();
    const nr = Math.min(rx, ry) * 0.3, nx = cx - rx * 0.28, ny = cy + ry * 0.18;
    ctx.strokeStyle = rgba(LP.hep[2], 0.45); ctx.lineWidth = Math.max(1, nr * 0.07);
    for (let k = 1; k <= 3; k++) { ctx.beginPath(); ctx.arc(nx, ny, nr * (1 + k * 0.32), -1.3, 0.9); ctx.stroke(); }
    ctx.beginPath(); ctx.arc(nx, ny, nr, 0, TAU); ctx.fillStyle = glossy(nx, ny, nr, LP.nuc[0], LP.nuc[1]); ctx.fill(); ctx.strokeStyle = LP.nuc[2]; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.arc(nx + nr * 0.15, ny - nr * 0.1, nr * 0.28, 0, TAU); ctx.fillStyle = rgba(LP.nuc[2], 0.55); ctx.fill();
    return { nx, ny, nr, er: [nx + nr * 1.5, ny - nr * 0.5] };
  }

  // 血管壁剖面：上面是血管腔，下面依次是内皮、内膜、内弹力层、中膜
  // o: { lum, iel, amp（斑块隆起高度）, px, sig, gaps: [x...], gw, cap（纤维帽厚度 0～1）, coreW }
  function vessel(r, o) {
    const eh = clamp(r.h * 0.04, 4.5, 11);
    const yE0 = r.y + r.h * (o.lum || 0.42), yIEL = r.y + r.h * (o.iel || 0.82);
    const amp = o.amp || 0, sig = o.sig || r.w * 0.12, px = o.px == null ? r.x + r.w / 2 : o.px;
    const bump = (x) => amp * Math.exp(-Math.pow((x - px) / sig, 2));
    const yE = (x) => yE0 - bump(x);
    const step = Math.max(3, r.w / 140);
    ctx.save(); ctx.beginPath(); ctx.rect(r.x, r.y, r.w, r.h); ctx.clip();
    ctx.fillStyle = LP.intima; ctx.fillRect(r.x, r.y, r.w, r.h);
    // 中膜 + 平滑肌细胞
    const mh = r.y + r.h - yIEL;
    ctx.fillStyle = LP.media; ctx.fillRect(r.x, yIEL, r.w, mh);
    if (mh > 6) {
      const rows = mh > 34 ? 2 : 1, sw = Math.max(26, r.w / 11);
      for (let row = 0; row < rows; row++) {
        const yy = yIEL + mh * (row + 0.55) / rows, hh = Math.min(mh / rows * 0.3, sw * 0.13);
        for (let x = r.x - (row ? sw / 2 : 0); x < r.x + r.w + sw; x += sw) {
          ctx.beginPath(); ctx.ellipse(x, yy, sw * 0.46, hh, 0.04, 0, TAU);
          ctx.fillStyle = glossy(x, yy, sw * 0.4, LP.smc[0], LP.smc[1]); ctx.fill(); ctx.strokeStyle = rgba(LP.smc[2], 0.6); ctx.lineWidth = 1; ctx.stroke();
          ctx.beginPath(); ctx.ellipse(x, yy, sw * 0.13, hh * 0.4, 0.04, 0, TAU); ctx.fillStyle = rgba(LP.smc[2], 0.5); ctx.fill();
        }
      }
    }
    ctx.strokeStyle = LP.iel; ctx.lineWidth = Math.max(1.5, eh * 0.28);
    ctx.beginPath(); for (let x = r.x; x <= r.x + r.w; x += step) { const y = yIEL + Math.sin(x * 0.22) * eh * 0.18; if (x === r.x) ctx.moveTo(x, y); else ctx.lineTo(x, y); } ctx.stroke();
    // 纤维帽 + 脂质核心
    let core = null;
    if (amp > 2) {
      const top = yE(px) + eh, midY = (top + yIEL) / 2;
      const g = ctx.createRadialGradient(px, midY, 0, px, midY, sig * 1.6);
      g.addColorStop(0, rgba(LP.cap, 0.95)); g.addColorStop(0.7, rgba(LP.cap, 0.5)); g.addColorStop(1, rgba(LP.cap, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(px, midY, sig * 1.6, (yIEL - top) * 0.62, 0, 0, TAU); ctx.fill();
      const capT = eh * (0.9 + 2.4 * (o.cap || 0)), cT = top + capT, cB = yIEL - eh * 0.5;
      if (cB - cT > 5) {
        const rx = sig * 0.82 * (o.coreW == null ? 1 : o.coreW), ry = (cB - cT) / 2, cy = (cT + cB) / 2;
        ctx.beginPath(); ctx.ellipse(px, cy, rx, ry, 0, 0, TAU);
        ctx.fillStyle = glossy(px, cy, Math.max(rx, ry), "#fff6d2", "#efcd6c"); ctx.fill();
        ctx.setLineDash([4, 3]); ctx.strokeStyle = "#c29a3c"; ctx.lineWidth = 1.2; ctx.stroke(); ctx.setLineDash([]);
        // 胆固醇结晶
        ctx.save(); ctx.beginPath(); ctx.ellipse(px, cy, rx, ry, 0, 0, TAU); ctx.clip();
        for (let k = 0; k < 6; k++) {
          const cx = px + (rnd(k + 300) - 0.5) * rx * 1.3, cyy = cy + (rnd(k + 320) - 0.5) * ry * 1.1, L = Math.min(rx, ry * 2) * (0.25 + 0.15 * rnd(k + 340));
          ctx.save(); ctx.translate(cx, cyy); ctx.rotate(rnd(k + 360) * Math.PI);
          ctx.beginPath(); ctx.moveTo(-L, 0); ctx.lineTo(0, -L * 0.12); ctx.lineTo(L, 0); ctx.lineTo(0, L * 0.12); ctx.closePath();
          ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.fill(); ctx.strokeStyle = "#d3ae4c"; ctx.lineWidth = 0.8; ctx.stroke(); ctx.restore();
        }
        ctx.restore();
        core = { x: px, y: cy, rx, ry, top: cT };
      }
    }
    // 血管腔（血浆）
    ctx.beginPath(); ctx.moveTo(r.x, r.y);
    for (let x = r.x; x <= r.x + r.w + step; x += step) ctx.lineTo(Math.min(x, r.x + r.w), yE(Math.min(x, r.x + r.w)));
    ctx.lineTo(r.x + r.w, r.y); ctx.closePath(); ctx.fillStyle = LP.plasma; ctx.fill();
    // 内皮细胞（可以留缝隙）
    const cw = Math.max(eh * 5, r.w / 12), gw = o.gw || eh * 2.4;
    let cells = [];
    for (let x = r.x - cw * 0.35; x < r.x + r.w; x += cw) cells.push([x + 1, x + cw - 1]);
    (o.gaps || []).forEach((gx) => {
      const g0 = gx - gw / 2, g1 = gx + gw / 2, out = [];
      cells.forEach((c) => {
        if (c[1] < g0 || c[0] > g1) { out.push(c); return; }
        if (g0 - c[0] > eh) out.push([c[0], g0]);
        if (c[1] - g1 > eh) out.push([g1, c[1]]);
      });
      cells = out;
    });
    cells.forEach((c) => {
      const x0 = c[0], x1 = c[1], m = (x0 + x1) / 2, ww = x1 - x0;
      const P = [[x0, yE(x0) + eh * 0.5]], U = [0.08, 0.28, 0.5, 0.72, 0.92];
      U.forEach((u) => { const x = x0 + ww * u; P.push([x, yE(x) - (u === 0.5 ? eh * 0.35 : 0)]); });
      P.push([x1, yE(x1) + eh * 0.5]);
      U.slice().reverse().forEach((u) => { const x = x0 + ww * u; P.push([x, yE(x) + eh]); });
      smoothPath(P, true);
      ctx.fillStyle = glossy(m, yE(m), ww * 0.5, LP.endo[0], LP.endo[1]); ctx.fill();
      ctx.strokeStyle = LP.endo[2]; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(m, yE(m) + eh * 0.32, ww * 0.18, eh * 0.3, Math.atan2(yE(m + 1) - yE(m - 1), 2), 0, TAU); ctx.fillStyle = rgba(LP.endo[2], 0.55); ctx.fill();
    });
    ctx.restore();
    return { r, eh, yE0, yIEL, yE, bump, core, px, sig, amp };
  }

  // 圆圈里的步骤编号
  function stepNum(x, y, k, a) {
    if (a != null && a < 0.02) return;
    const rr = Math.max(7.5, SF() * 0.72);
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, rr, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = 1.2; ctx.stroke();
    txt(String(k), x, y + 0.5, rr * 1.25, K.ink, "center", 700);
    ctx.restore();
  }

  // =================== 图例（支持本集的自画图标） ===================
  function legendItems(i) {
    return [
      [["m", "chol", "胆固醇"], ["p", "ldl", "脂蛋白颗粒"], ["no", "", "不能直接溶于血液"]],
      [["pl", "", "磷脂"], ["m", "chol", "游离胆固醇"], ["ce", "", "胆固醇酯"], ["m", "tg", "甘油三酯"], ["m", "apob", "ApoB-100"], ["m", "apoa1", "ApoA-I"]],
      [["p", "ldl", "LDL"], ["pox", "", "氧化的 LDL"], ["mac", "", "巨噬细胞"], ["foam", "", "泡沫细胞"]],
      [["p", "hdl", "HDL"], ["m", "chol", "胆固醇"], ["foam", "", "泡沫细胞"], ["line", LP.apoa1[1], "运回肝脏"]],
      [["p", "ldl", "LDL"], ["m", "apob", "ApoB（每颗 1 个）"], ["p", "hdl", "HDL（没有 ApoB）"]],
      [["p", "ldl", "LDL 颗粒"], ["m", "apob", "ApoB-100"], ["kr", "", "apo(a)"], ["ss", "", "二硫键"], ["plt", "", "血小板"]],
      [["p", "ldl", "LDL"], ["p", "lpa", "Lp(a)"], ["rec", "apob", "LDL 受体"], ["m", "statin", "降脂药（他汀类）"], ["minus", "", "减少合成"]],
    ][i];
  }
  function legendIcon(it, x, y, s) {
    const k = it[0];
    if (k === "p") particle(x, y, s * (it[1] === "hdl" ? 0.3 : 0.42), { kind: it[1] === "lpa" ? "ldl" : it[1] });
    else if (k === "pox") particle(x, y, s * 0.42, { kind: "ldl", ox: 1 });
    else if (k === "m") mol(it[1], x, y, s * (it[1] === "chol" ? 0.4 : 0.42), 1);
    else if (k === "ce") cholEster(x + s * 0.12, y, s * 0.3, 0, 1);
    else if (k === "pl") phospho(x, y - s * 0.25, s * 0.45);
    else if (k === "mac") macro(x, y, s * 0.33, 0, 3);
    else if (k === "foam") macro(x, y, s * 0.33, 1, 5);
    else if (k === "plt") platelet(x, y, s * 0.36, 0.2);
    else if (k === "ss") disulfide(x, y, s * 0.45, 1);
    else if (k === "kr") { for (let j = -1; j <= 1; j++) mol("apoa", x + j * s * 0.3, y + (j % 2 ? 0.08 : -0.06) * s, s * 0.17, 1, j); }
    else TB.legendIcon(it, x, y, s);
  }
  function legend(Lg) {
    const items = Lg.items, fs = Lg.fs, s = Lg.s, ws = Lg.ws, w = W, h = H;
    const put = (it, x, y) => {
      if (it[1] === "lpa" && it[0] === "p") { // Lp(a) 图例：小颗粒 + 短尾巴
        particle(x + s * 0.3, y, s * 0.27, { kind: "lpa", tail: -0.1, wig: 0.2, tailK: 2.3 });
      } else legendIcon(it, x + s / 2, y, s);
      txt(it[2].replace(/　/g, ""), x + s + fs * 0.35 + (it[1] === "lpa" ? fs * 1.9 : 0), y + 0.5, fs, K.ink, "left", 500);
    };
    if (nar()) {
      const y0 = h - Lg.h - 2;
      ctx.fillStyle = "rgba(255,255,255,0.88)"; ctx.fillRect(0, y0 - 2, w, Lg.h + 4);
      ctx.strokeStyle = "#dde3ee"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, y0 - 2); ctx.lineTo(w, y0 - 2); ctx.stroke();
      Lg.rows.forEach((row, r) => {
        const tw = row.reduce((a, k) => a + ws[k], 0) + Lg.gap * (row.length - 1);
        let x = (w - tw) / 2; const y = y0 + s * 0.55 + r * s * 1.1 + 2;
        row.forEach((k) => { put(items[k], x, y); x += ws[k] + Lg.gap; });
      });
      return;
    }
    const x0 = w - Lg.bw - 12, y0 = h - Lg.bh - 12;
    ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.beginPath(); ctx.roundRect(x0, y0, Lg.bw, Lg.bh, 8); ctx.fill();
    ctx.strokeStyle = "#d3dae7"; ctx.lineWidth = 1; ctx.stroke();
    txt("图例", x0 + fs * 0.7, y0 + fs * 0.95, fs * 0.9, K.soft, "left", 700);
    items.forEach((it, k) => put(it, x0 + fs * 0.6, y0 + fs * 1.9 + s * 0.5 + k * s * 1.08));
  }
  function legendLayout(i) {
    const items = legendItems(i).map((it) => (it[1] === "lpa" ? [it[0], it[1], it[2] + "　　"] : it)); // Lp(a) 图标带尾巴，多留一点位置
    return TB.legendLayout(items);
  }
  function areaFor(i) {
    const Lg = legendLayout(i), top = topY();
    const A = nar() ? { x: 8, y: top, w: W - 16, h: H - top - Lg.h - 8 } : { x: 16, y: top, w: W - 32, h: H - top - 12 };
    return { A, Lg };
  }
  const onOf = (i, live) => (k) => live && CH[i].labels.indexOf(k) >= 0;

  // =================== 各幕画面 ===================
  // 第 1 幕：肝细胞合成胆固醇 → 装进脂蛋白颗粒才能在血里走；右边是胆固醇的用处
  function scene0(A, Lg, live, T) {
    const n = nar(), on = onOf(0, live);
    const cx = A.x + A.w * (n ? 0.22 : 0.19), cy = A.y + A.h * (n ? 0.5 : 0.45);
    const rx = A.w * (n ? 0.21 : 0.165), ry = A.h * (n ? 0.4 : 0.36);
    const Hc = hepato(cx, cy, rx, ry, 0);
    txt("肝细胞", cx + rx * 0.2, cy - ry * 0.68, SF(), LP.hep[2], "center", 700);
    const ir = Math.min(IR() * 0.8, ry * 0.12);
    const ex = cx + rx * 0.9, ey = cy - ry * 0.12;
    // 内质网附近合成的胆固醇，一个个走向细胞边上
    for (let i = 0; i < 6; i++) {
      const t = cyc(4.5, i / 6), sx = Hc.er[0] + (rnd(i + 5) - 0.5) * rx * 0.3, sy = Hc.er[1] + (rnd(i + 9) - 0.2) * ry * 0.5;
      const u = ease(clamp(t * 1.3, 0, 1));
      mol("chol", lerp(sx, ex - ir * 1.5, u), lerp(sy, ey, u), ir, Math.sin(t * Math.PI) * 0.95, Math.sin(time + i) * 0.4);
    }
    // 血液
    const bx0 = A.x + A.w * (n ? 0.45 : 0.405), bx1 = A.x + A.w * (n ? 0.645 : 0.655);
    ctx.fillStyle = LP.plasma; ctx.beginPath(); ctx.roundRect(bx0, A.y, bx1 - bx0, A.h, 10); ctx.fill();
    ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.stroke();
    txt(n ? "血液" : "血液（以水为主）", (bx0 + bx1) / 2, A.y + A.h - SF() * 0.9, SF(), K.soft, "center", 500);
    const pr = Math.min(A.h * 0.14, (bx1 - bx0) * 0.36), pxC = (bx0 + bx1) / 2, pyC = A.y + A.h * 0.42 + Math.sin(time * 1.2) * 2;
    const sp = arrow([[ex, ey], [(ex + pxC) / 2, ey - ry * 0.12], [pxC - pr * 1.15, pyC]], LP.chol[1], Math.max(2.5, H * 0.006), 0.9, "go");
    flow(sp, LP.chol[2], 3, Math.max(2, H * 0.005), 1, 0.4);
    particle(pxC, pyC, pr, { kind: "ldl", rot: Math.sin(time * 0.5) * 0.15, detail: pr > 45 });
    // 胆固醇自己不溶于水：聚成一团油滴 + 禁止符号
    const dy = A.y + A.h * 0.76, dxC = pxC - ir * 0.6, dr = ir * 2;
    ctx.beginPath(); ctx.ellipse(dxC, dy, dr * 1.2, dr, 0, 0, TAU); ctx.fillStyle = rgba(LP.chol[1], 0.18); ctx.fill();
    ctx.strokeStyle = rgba(LP.chol[2], 0.45); ctx.lineWidth = 1; ctx.stroke();
    for (let k = 0; k < 3; k++) mol("chol", dxC + Math.sin(time * 0.8 + k) * 0.8, dy + (k - 1) * ir * 0.95, ir * 0.9, 1, 0);
    TB.noSign(dxC + dr * 1.25, dy - dr * 0.8, ir * 0.62, 0.9);
    // 右侧：胆固醇的用处
    const P = n ? { x: A.x + A.w * 0.665, y: A.y, w: A.w * 0.335, h: A.h } : { x: A.x + A.w * 0.69, y: A.y + A.h * 0.02, w: A.w * 0.31, h: A.h - Lg.bh - 24 };
    TB.panel(P, 10);
    const fs = SF();
    txt(n ? "用处" : "胆固醇的用处", P.x + P.w / 2, P.y + fs * 1.1, fs, K.ink, "center", 700);
    const rowH = (P.h - fs * 2.2) / 3, names = n ? ["细胞膜", "激素", "胆汁"] : ["细胞膜的原料", "制造激素", "制造胆汁"];
    for (let k = 0; k < 3; k++) {
      const yc = P.y + fs * 2.2 + rowH * (k + 0.5) - (n ? fs * 0.55 : 0), s = Math.min(ir * 1.05, rowH * 0.22, P.w * 0.08);
      const x1 = P.x + P.w * (n ? 0.2 : 0.13), x2 = P.x + P.w * (n ? 0.74 : 0.42);
      mol("chol", x1, yc, s, 1, 0);
      arrow([[x1 + s * 1.5, yc], [x2 - s * 1.7, yc]], K.line, Math.max(1.6, s * 0.18), 0.9, "go");
      if (k === 0) {
        const bw = s * 2.1; bilayer(x2 - bw, x2 + bw, yc, s * 1.25);
        mol("chol", x2 + s * 0.1, yc, s * 0.55, 1, HALF);
      } else if (k === 1) steroidHormone(x2, yc, s * 0.95);
      else bileDrop(x2, yc - s * 0.1, s * 0.95);
      if (n) txt(names[k], (x1 + x2) / 2, yc + s * 1.35 + fs * 0.45, fs, K.ink, "center", 500);
      else txt(names[k], x2 + s * 2.6, yc, fs, K.ink, "left", 500);
    }
    // 标注
    const tl = n ? T < 6 : true, tb = n ? T >= 6 : true;
    tag("liver", on("liver") && tl, Hc.er[0], Hc.er[1], n ? A.x + A.w * 0.3 : cx, n ? A.y + LF() * 0.9 : A.y + A.h - LF() * 0.8, "大部分胆固醇由肝脏自己合成", LP.hep[2]);
    tag("boat", on("boat") && tb, pxC, pyC - pr * 0.6, n ? A.x + A.w * 0.3 : pxC, n ? A.y + LF() * 0.9 : A.y + LF() * 0.6, "脂蛋白：运胆固醇的小船", LP.apob[1]);
  }

  // 第 2 幕：LDL 放大剖面结构图 + 三种颗粒大小对比
  function scene1(A, Lg, live, T) {
    const n = nar(), on = onOf(1, live);
    const r = n ? Math.min(A.h * 0.43, A.w * 0.3) : Math.min(A.h * 0.42, A.w * 0.22);
    const cx = A.x + (n ? A.w * 0.32 : A.w * 0.25), cy = A.y + A.h * (n ? 0.5 : 0.53);
    if (!n) txt("LDL 颗粒结构（剖面示意）", cx, cy - r - SF() * 1.1, SF(), K.ink, "center", 700);
    particle(cx, cy, r, { kind: "ldl", detail: true, rot: Math.sin(time * 0.3) * 0.04 });
    if (!n) { // 结构图上的小字：外壳 / 内核
      const fs = SF();
      ctx.strokeStyle = K.leader; ctx.lineWidth = 1;
      const a1 = -0.75, p1 = [cx + Math.cos(a1) * r * 0.97, cy + Math.sin(a1) * r * 0.97], q1 = [cx + r * 1.05, cy - r * 0.95];
      ctx.beginPath(); ctx.moveTo(p1[0], p1[1]); ctx.lineTo(q1[0], q1[1]); ctx.lineTo(q1[0] + fs * 0.6, q1[1]); ctx.stroke();
      txt("外壳：磷脂单分子层 + 游离胆固醇", q1[0] + fs * 0.9, q1[1], fs, K.soft, "left", 500);
      const p2 = [cx + r * 0.2, cy - r * 0.2], q2 = [cx + r * 1.12, cy - r * 0.62];
      ctx.beginPath(); ctx.moveTo(p2[0], p2[1]); ctx.lineTo(q2[0], q2[1]); ctx.lineTo(q2[0] + fs * 0.6, q2[1]); ctx.stroke();
      txt("内核：胆固醇酯 + 甘油三酯", q2[0] + fs * 0.9, q2[1], fs, K.soft, "left", 500);
      const p3 = [cx + r * 0.55, cy + r * 0.82], q3 = [cx + r * 1.12, cy + r * 0.95];
      ctx.beginPath(); ctx.moveTo(p3[0], p3[1]); ctx.lineTo(q3[0], q3[1]); ctx.lineTo(q3[0] + fs * 0.6, q3[1]); ctx.stroke();
      txt("ApoB-100：一整条缠在表面", q3[0] + fs * 0.9, q3[1], fs, K.soft, "left", 500);
    }
    // 大小对比
    let pos;
    const fs = SF();
    if (!n) {
      const x0 = A.x + A.w * 0.72, y = A.y + A.h * 0.34, rv = Math.min(A.h * 0.1, A.w * 0.052), gp = A.w * 0.03;
      txt("个头对比", x0, A.y + A.h * 0.12, fs, K.ink, "left", 700);
      pos = [[x0 + rv, y, rv, "vldl", "VLDL"], [x0 + rv * 2 + gp + rv * 0.55, y + rv * 0.45, rv * 0.55, "ldl", "LDL"], [x0 + rv * 2 + gp * 2 + rv * 1.1 + rv * 0.3, y + rv * 0.7, rv * 0.3, "hdl", "HDL"]];
      ctx.strokeStyle = K.faint; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(x0 - 4, y + rv); ctx.lineTo(pos[2][0] + rv * 0.6, y + rv); ctx.stroke(); ctx.setLineDash([]);
    } else {
      const x = A.x + A.w * 0.83, rv = Math.min(A.h * 0.12, A.w * 0.085);
      pos = [[x, A.y + A.h * 0.15, rv, "vldl", "VLDL"], [x, A.y + A.h * 0.49, rv * 0.58, "ldl", "LDL"], [x, A.y + A.h * 0.76, rv * 0.34, "hdl", "HDL"]];
    }
    pos.forEach((p, k) => {
      particle(p[0], p[1] + Math.sin(time * 1.2 + k) * 1.5, p[2], { kind: p[3] });
      txt(p[4], p[0], n ? p[1] + p[2] + fs * 0.75 : A.y + A.h * 0.34 + pos[0][2] + fs * 1.2, fs, K.ink, "center", 700);
    });
    if (!n) txt("大  →  小", (pos[0][0] + pos[2][0]) / 2, A.y + A.h * 0.34 + pos[0][2] + fs * 2.6, fs, K.soft, "center", 500);
    const L = pos[1], Hd = pos[2];
    if (n) {
      tag("ldl", on("ldl") && T < 6, L[0] - L[2] * 0.6, L[1], A.x + A.w * 0.4, A.y + LF() * 0.9, "LDL：把胆固醇送到全身", LP.apob[1]);
      tag("hdl", on("hdl") && T >= 6, Hd[0] - Hd[2], Hd[1], A.x + A.w * 0.4, A.y + LF() * 0.9, "HDL：把多余胆固醇运回肝脏", LP.apoa1[1]);
    } else {
      tag("ldl", on("ldl"), L[0], L[1] + L[2], A.x + A.w * 0.82, A.y + A.h * 0.56, "LDL：把胆固醇送到全身", LP.apob[1]);
      tag("hdl", on("hdl"), Hd[0], Hd[1] + Hd[2], A.x + A.w * 0.82, A.y + A.h * 0.67, "HDL：把多余胆固醇运回肝脏", LP.apoa1[1]);
    }
  }

  // 第 3 幕：LDL 穿过内皮 → 在内膜里滞留、氧化 → 巨噬细胞吞噬 → 泡沫细胞 → 斑块
  function scene2(A, Lg, live, T) {
    const n = nar(), on = onOf(2, live);
    const R = n ? A : { x: A.x, y: A.y, w: A.w, h: A.h - Lg.bh - 10 };
    const gx = R.x + R.w * 0.13, px = R.x + R.w * 0.73;
    const intH = R.h * 0.4;
    const V = vessel(R, { lum: 0.42, iel: 0.82, amp: S.plaque * intH * 0.55, px, sig: R.w * 0.11, gaps: [gx], cap: 0.2 });
    const pr = Math.min(IR() * 0.9, intH * 0.13), yInt = (f) => V.yE0 + V.eh + (V.yIEL - V.yE0 - V.eh) * f;
    txt("血管腔", R.x + 6, R.y + SF() * 0.8, SF(), K.soft, "left", 500);
    txt("内膜", R.x + 6, yInt(0.86), SF(), K.soft, "left", 500);
    if (!n) txt("中膜", R.x + 6, (V.yIEL + R.y + R.h) / 2, SF(), K.soft, "left", 500);
    // 血里的 LDL
    const nL = Math.round(6 + 10 * S.ldl);
    for (let i = 0; i < nL; i++) {
      const x = R.x + ((rnd(i + 11) + time * 0.025 * (0.7 + 0.5 * rnd(i + 12))) % 1) * R.w;
      const y = Math.min(R.y + pr * 1.4 + rnd(i + 13) * (V.yE0 - R.y - pr * 3), V.yE(x) - pr - 3) + Math.sin(time + i) * 1.5;
      particle(x, y, pr, { kind: "ldl", rot: rnd(i + 14) * 6, a: Math.min(1, (x - R.x) / (pr * 2), (R.x + R.w - x) / (pr * 2)) });
    }
    // ① 正在钻进内皮缝隙的 LDL
    const ph = cyc(4.2, 0.1);
    let ex, ey, ea = 1;
    const y0 = V.yE0 - pr * 3, y1 = yInt(0.35);
    if (ph < 0.5) { const u = ease(ph / 0.5); ex = gx - pr * 1.2 * (1 - u); ey = lerp(y0, y1, u); ea = clamp(ph / 0.08, 0, 1); }
    else { const u = (ph - 0.5) / 0.5; ex = gx + u * R.w * 0.05; ey = y1 + u * pr * 0.5; ea = 1 - clamp((u - 0.7) / 0.3, 0, 1); }
    particle(ex, ey, pr, { kind: "ldl", ox: clamp((ph - 0.55) * 2, 0, 0.5), a: ea });
    // ② 滞留、被氧化的 LDL
    const ret = [];
    for (let i = 0; i < 6; i++) {
      const x = R.x + R.w * (0.22 + (i % 3) * 0.045 + rnd(i + 70) * 0.02), y = yInt(0.25 + (i < 3 ? 0 : 0.35) + rnd(i + 71) * 0.1) + Math.sin(time * 0.8 + i) * 1.2;
      const ox = clamp(0.35 + 0.65 * rnd(i + 72) + 0.2 * Math.sin(time * 0.3 + i), 0, 1);
      particle(x, y, pr * 0.95, { kind: "ldl", ox, rot: rnd(i + 73) * 6 });
      ret.push([x, y]);
    }
    // ③ 巨噬细胞伸出伪足，吞下一个氧化的 LDL
    const ms = Math.min(intH * 0.24, R.w * 0.048), mx = R.x + R.w * 0.45, my = yInt(0.5);
    const eph = cyc(5, 0.3), ang = Math.PI;
    const tx = lerp(mx - ms * 2.6, mx - ms * 0.3, ease(clamp(eph / 0.6, 0, 1)));
    macro(mx, my, ms, 0.35, 7, { ang, amt: 0.55 * Math.sin(clamp(eph / 0.6, 0, 1) * Math.PI) });
    particle(tx, my, pr * 0.9, { kind: "ldl", ox: 1, a: 1 - clamp((eph - 0.55) / 0.2, 0, 1) });
    // ④ 斑块里的泡沫细胞
    const foams = [];
    if (V.core) {
      const c = V.core, fsz = Math.min(ms * 0.85, c.ry * 0.75 + 4);
      [[-1.1, -0.1], [1.1, -0.05], [-0.5, -0.85], [0.55, -0.9], [0, 0.35]].forEach((p, k) => {
        const x = c.x + p[0] * c.rx * 0.95, y = c.y + p[1] * c.ry * 0.95;
        if (y - fsz * 0.8 < V.yE(x) + V.eh) return;
        macro(x, y, fsz, 1, 11 + k); foams.push([x, y]);
      });
    }
    // 步骤编号
    stepNum(gx - pr * 2.4, V.yE0 - pr * 2.2, 1);
    stepNum(R.x + R.w * 0.27, yInt(0.08) - 1, 2);
    stepNum(mx + ms * 1.2, my - ms * 1.1, 3);
    if (V.core) stepNum(V.px + V.sig * 1.35, V.yE(V.px + V.sig * 1.35) + V.eh + SF(), 4);
    if (!n) { // 底部的步骤说明
      const fs = SF(), y0s = R.y + R.h + 12, colW = (A.w - Lg.bw - 30) / 2;
      ["穿过内皮的缝隙，钻进内膜", "滞留在内膜里，被氧化", "巨噬细胞把氧化的 LDL 吞下", "变成泡沫细胞，堆成斑块"].forEach((s, k) => {
        const x = A.x + (k % 2) * colW + 10, y = y0s + fs * 1.1 + Math.floor(k / 2) * fs * 2.2;
        stepNum(x + fs * 0.4, y, k + 1); txt(s, x + fs * 1.5, y + 0.5, fs, K.ink, "left", 500);
      });
    }
    tag("enter", on("enter"), gx, V.yE0 + V.eh * 0.5, n ? A.x + A.w * 0.24 : gx + R.w * 0.1, A.y + LF() * (n ? 0.9 : 0.8), "LDL 钻进血管壁", LP.apob[1]);
    const pc = V.core ? [V.core.x, V.core.y] : [px, V.yE0];
    tag("plaque", on("plaque"), pc[0], pc[1], n ? A.x + A.w * 0.74 : px + R.w * 0.04, A.y + LF() * (n ? 0.9 : 0.8), "越积越多，长成斑块", LP.chol[2]);
  }

  // 第 4 幕：HDL 把胆固醇从泡沫细胞运回肝脏（逆向转运）；HDL-C 高 ≠ 搬运得多
  function scene3(A, Lg, live, T) {
    const n = nar(), on = onOf(3, live);
    const R = n ? { x: A.x, y: A.y + A.h * 0.46, w: A.w * 0.64, h: A.h * 0.54 } : { x: A.x, y: A.y + A.h * 0.4, w: A.w * 0.5, h: A.h * 0.6 };
    const V = vessel(R, { lum: 0.34, iel: 0.8, amp: R.h * 0.12 * S.plaque, px: R.x + R.w * 0.72, sig: R.w * 0.14, cap: 0.3 });
    const intH = V.yIEL - V.yE0, fsz = Math.min(intH * 0.3, R.w * 0.07);
    const fx = R.x + R.w * 0.3, fy = V.yE0 + V.eh + intH * 0.45;
    macro(fx, fy, fsz, 1, 21);
    txt("泡沫细胞", fx + fsz * 1.35, fy + fsz * 0.5, SF(), K.soft, "left", 500);
    // 肝细胞
    const lx = A.x + A.w * (n ? 0.82 : 0.76), ly = A.y + A.h * (n ? 0.27 : 0.3), lrx = A.w * (n ? 0.16 : 0.12), lry = A.h * (n ? 0.24 : 0.25);
    hepato(lx, ly, lrx, lry, 0.4);
    txt("肝细胞", lx + lrx * 0.25, ly - lry * 0.62, SF(), LP.hep[2], "center", 700);
    // 运回肝脏的路线
    const hr = Math.max(4, Math.min(IR() * 0.62, intH * 0.2));
    const P0 = [fx, V.yE0 - hr * 2.4];
    const route = n ? [P0, [A.x + A.w * 0.5, A.y + A.h * 0.4], [lx - lrx * 0.95, ly + lry * 0.2]] : [P0, [A.x + A.w * 0.46, A.y + A.h * 0.2], [lx - lrx * 0.95, ly + lry * 0.05]];
    const sp = arrow(route, LP.apoa1[1], Math.max(2.5, H * 0.006), 0.55, "go");
    // 胆固醇从泡沫细胞出来，交给 HDL
    for (let i = 0; i < 3; i++) {
      const t = cyc(2.4, i / 3);
      mol("chol", lerp(fx + (i - 1) * fsz * 0.3, P0[0], t), lerp(fy - fsz * 0.3, P0[1] + hr, t), hr * 0.62, Math.sin(t * Math.PI), HALF * 0.3 * i);
    }
    // HDL 沿路线走，越走装得越满
    let pick = null;
    for (let i = 0; i < 4; i++) {
      const t = cyc(7, i / 4), p = along(sp, t);
      const a = clamp(t / 0.08, 0, 1) * clamp((1 - t) / 0.08, 0, 1);
      particle(p[0], p[1], hr * (0.85 + 0.35 * t), { kind: "hdl", a, rot: t * 3 });
      if (t > 0.35 && t < 0.6) pick = p;
    }
    // 肝脏里：胆固醇 → 胆汁
    for (let i = 0; i < 2; i++) {
      const t = cyc(3, i / 2);
      mol("chol", lerp(lx - lrx * 0.8, lx + lrx * 0.15, t), ly + lry * (0.02 - 0.1 * i), hr * 0.62, Math.sin(t * Math.PI), 0);
    }
    const bd = Math.max(6, hr * 0.85), bY = ly + lry * 1.02 + bd * 3.2;
    arrow([[lx + lrx * 0.1, ly + lry * 0.92], [lx + lrx * 0.1, bY - bd * 1.5]], LP.bile[1], Math.max(2, H * 0.005), 0.9, "go");
    bileDrop(lx + lrx * 0.1, bY, bd);
    txt("胆汁", lx + lrx * 0.1 + bd * 1.3, bY + bd * 0.1, SF(), LP.bile[2], "left", 700);
    if (!n) txt("逆向转运", route[1][0] + SF() * 0.4, route[1][1] - SF() * 1.1, SF(), LP.apoa1[2], "center", 700);
    // 左上：HDL-C 数值 vs 搬运能力
    const P = n ? { x: A.x, y: A.y, w: A.w * 0.52, h: A.h * 0.34 } : { x: A.x, y: A.y, w: A.w * 0.34, h: A.h * 0.27 };
    TB.panel(P, 8);
    const fs = SF(), lw = n ? P.w * 0.34 : P.w * 0.42, bx = P.x + lw + fs * 0.6, bw = P.x + P.w - fs * 0.8 - bx, bh = Math.max(8, fs * 0.9);
    if (!n) txt("化验单上的数值 ≠ 干活的多少", P.x + fs * 0.8, P.y + fs * 1.2, fs, K.ink, "left", 700);
    const r1 = P.y + P.h * (n ? 0.32 : 0.47), r2 = P.y + P.h * (n ? 0.74 : 0.8);
    txt(n ? "HDL-C" : "HDL-C（装了多少）", P.x + fs * 0.8, r1, fs, K.ink, "left", 500);
    txt(n ? "搬运能力" : "搬运能力（干了多少）", P.x + fs * 0.8, r2, fs, K.ink, "left", 500);
    const v1 = clamp(S.hdlc / 3, 0, 1);
    ctx.fillStyle = "#eef1f7"; ctx.beginPath(); ctx.roundRect(bx, r1 - bh / 2, bw, bh, bh / 2); ctx.fill(); ctx.beginPath(); ctx.roundRect(bx, r2 - bh / 2, bw, bh, bh / 2); ctx.fill();
    const g1 = ctx.createLinearGradient(bx, 0, bx + bw, 0); g1.addColorStop(0, LP.apoa1[0]); g1.addColorStop(1, LP.apoa1[1]);
    ctx.fillStyle = g1; ctx.beginPath(); ctx.roundRect(bx, r1 - bh / 2, bw * v1, bh, bh / 2); ctx.fill();
    txt(S.hdlc.toFixed(1), bx + bw * v1 - fs * 0.2, r1 - bh / 2 - fs * 0.55, fs * 0.9, LP.apoa1[2], "right", 700);
    const g2 = ctx.createLinearGradient(bx, 0, bx + bw * 0.8, 0); g2.addColorStop(0, rgba(K.line, 0.75)); g2.addColorStop(0.45, rgba(K.line, 0.6)); g2.addColorStop(1, rgba(K.line, 0));
    ctx.fillStyle = g2; ctx.beginPath(); ctx.roundRect(bx, r2 - bh / 2, bw * 0.8, bh, bh / 2); ctx.fill();
    txt("？", bx + bw * 0.62, r2 + 0.5, fs, K.ink, "center", 700);
    const sy = (r1 + r2) / 2;
    txt("≠", bx + bw * 0.3, sy, fs * 1.4, K.soft, "center", 700);
    const pk = pick || along(sp, 0.5);
    tag("sleepy", on("sleepy"), pk[0], pk[1], n ? A.x + A.w * 0.4 : A.x + A.w * 0.61, n ? A.y + A.h * 0.94 : A.y + A.h * 0.78, "HDL-C 高 ≠ 小船更卖力", LP.apoa1[1]);
  }

  // 第 5 幕：数 ApoB——每个 LDL 颗粒一个 ApoB
  function scene4(A, Lg, live, T) {
    const n = nar(), on = onOf(4, live), fs = SF();
    const top = A.y + LF() * (n ? 1.9 : 2.3), bot = A.y + A.h - (n ? 0 : LF() * 1.6);
    const pw = n ? A.w * 0.485 : A.w * 0.4, gap = n ? A.w * 0.03 : A.w * 0.04;
    const Ps = [{ x: A.x, y: top, w: pw, h: bot - top }, { x: A.x + pw + gap, y: top, w: pw, h: bot - top }];
    const capH = fs * (n ? 2.6 : 3.2);
    const res = [];
    Ps.forEach((P, pi) => {
      ctx.fillStyle = LP.plasma; ctx.beginPath(); ctx.roundRect(P.x, P.y, P.w, P.h, 10); ctx.fill(); ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.stroke();
      txt(pi ? "小而密的 LDL" : "大颗粒 LDL", P.x + fs * 0.7, P.y + fs * 1.0, fs, K.ink, "left", 700);
      const ih = P.h - capH - fs * 1.8, iy = P.y + fs * 1.8;
      const big = n ? Math.min(P.w * 0.15, ih * 0.16) : Math.min(P.w * 0.16, ih * 0.19);
      const pts = pi ? [[0.14, 0.3], [0.38, 0.24], [0.62, 0.3], [0.86, 0.25], [0.16, 0.74], [0.4, 0.68], [0.64, 0.76], [0.87, 0.7]] : [[0.27, 0.28], [0.73, 0.3], [0.3, 0.74], [0.72, 0.72]];
      const pr = pi ? big * 0.6 : big, N = pts.length;
      const cnt = clamp((T - 1.2) / 0.55, 0, N);
      pts.forEach((q, k) => {
        const x = P.x + P.w * q[0] + Math.sin(time * 0.7 + k + pi) * 1.5, y = iy + ih * q[1] + Math.cos(time * 0.6 + k * 1.3) * 1.5;
        const lit = cnt > k ? 1 : 0, now = cnt > k && cnt < k + 1.2 ? 1 : 0;
        particle(x, y, pr, { kind: "ldl", glow: now });
        if (lit) { // 数到的 ApoB：编号
          const bxp = x, byp = y + pr + Math.max(7, fs * 0.6) + 1, br = Math.max(7, fs * 0.62);
          ctx.beginPath(); ctx.arc(bxp, byp, br, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = LP.apob[1]; ctx.lineWidth = 1.4; ctx.stroke();
          txt(String(k + 1), bxp, byp + 0.5, br * 1.2, LP.apob[2], "center", 700);
        }
        if (k === 0) res.push([x, y, pr]);
      });
      // HDL：没有 ApoB，不算在内
      (pi ? [[0.27, 0.5], [0.76, 0.52]] : [[0.5, 0.5], [0.08, 0.52]]).forEach((q) => particle(P.x + P.w * q[0], iy + ih * q[1], big * 0.3, { kind: "hdl", a: 0.85 }));
      const c = Math.floor(cnt + 0.0001);
      txt(`ApoB = ${c}`, P.x + P.w / 2, P.y + P.h - capH * 0.55, fs * (n ? 1.3 : 1.5), LP.apob[2], "center", 700);
    });
    if (!n) txt("两管血的 LDL-C 差不多，颗粒数却不一样", A.x + pw + gap / 2, A.y + A.h - LF() * 0.6, fs, K.soft, "center", 500);
    const a0 = res[0], b0 = res[1];
    const ta = n ? T < 6.5 : true, tb = n ? T >= 6.5 : true;
    tag("apob", on("apob") && ta, a0[0], a0[1] + a0[2] * 0.95, n ? A.x + A.w * 0.5 : Ps[0].x + Ps[0].w * 0.5, A.y + LF() * 0.9, "每艘小船只有 1 个 ApoB", LP.apob[1]);
    tag("small", on("small") && tb, b0[0], b0[1] - b0[2], n ? A.x + A.w * 0.5 : Ps[1].x + Ps[1].w * 0.5, A.y + LF() * 0.9, "小而密的 LDL：船更多", LP.apob[1]);
  }

  // 第 6 幕：Lp(a) 的结构（LDL + 二硫键 + apo(a) 长链）；粘在血管壁上招来血小板
  function scene5(A, Lg, live, T) {
    const n = nar(), on = onOf(5, live), fs = SF();
    const r = n ? Math.min(A.h * 0.16, A.w * 0.1) : Math.min(A.h * 0.17, A.w * 0.09);
    const cx = A.x + (n ? A.w * 0.13 : r + 12), cy = A.y + A.h * (n ? 0.25 : 0.52);
    if (!n) txt("Lp(a) 结构示意", A.x + A.w * 0.24, cy - r - fs * 3.2, fs, K.ink, "center", 700);
    const L = particle(cx, cy, r, { kind: "lpa", detail: !n, tail: -0.3, wig: 0.7, tailK: n ? 2.9 : 3.3 });
    if (!n) {
      txt("LDL 颗粒", cx, cy + r + fs * 1.2, fs, K.soft, "center", 500);
      txt("二硫键", L.att[0] + fs * 0.2, L.att[1] + fs * 1.7, fs, "#8a6d0c", "left", 500);
      txt("apo(a)：一串 kringle 环", L.end[0] + r * 0.2, L.end[1] + r * 0.5, fs, LP.apoa[2], "right", 500);
    }
    // 右侧 / 下方：血管壁
    const R = n ? { x: A.x, y: A.y + A.h * 0.5, w: A.w, h: A.h * 0.5 } : { x: A.x + A.w * 0.53, y: A.y + A.h * 0.02, w: A.w * 0.47, h: A.h - Lg.bh - 22 };
    const V = vessel(R, { lum: 0.5, iel: 0.84, amp: (R.h * 0.34) * 0.3 * S.plaque * 2, px: R.x + R.w * 0.55, sig: R.w * 0.2, cap: 0.4 });
    const pr = Math.max(4, Math.min(IR() * 0.8, (V.yE0 - R.y) * 0.16));
    txt("血管腔", R.x + 6, R.y + fs * 0.8, fs, K.soft, "left", 500);
    // 血里漂着的 LDL 和 Lp(a)
    for (let i = 0; i < 3; i++) {
      const x = R.x + ((rnd(i + 500) + time * 0.02) % 1) * R.w, y = R.y + pr * 2 + rnd(i + 510) * (V.yE0 - R.y - pr * 5);
      particle(x, Math.min(y, V.yE(x) - pr * 1.6), pr, { kind: i === 1 ? "lpa" : "ldl", rot: rnd(i + 520) * 6, tail: Math.PI + 0.2, tailK: 2.2, a: Math.min(1, (x - R.x) / (pr * 3), (R.x + R.w - x) / (pr * 3)) });
    }
    // 粘在管壁上的 Lp(a)：尾巴贴着内皮，周围聚着血小板和纤维蛋白
    let stuck = null;
    [0.3, 0.7].forEach((f, k) => {
      const x = R.x + R.w * f, yb = V.yE(x);
      const cl = k ? 1 : 0.6;
      // 纤维蛋白丝
      ctx.strokeStyle = rgba(LP.fibrin, 0.85); ctx.lineWidth = Math.max(1.1, pr * 0.1);
      for (let j = 0; j < 4 + k * 2; j++) {
        const x0 = x - pr * 3 + rnd(j + 600 + k * 10) * pr * 6, y0 = yb - 2 - rnd(j + 620 + k * 10) * pr * 2.4;
        ctx.beginPath(); ctx.moveTo(x0 - pr * 2 * cl, y0 + pr * 0.6); ctx.quadraticCurveTo(x0, y0 - pr * 0.8 - Math.sin(time + j) * 1.5, x0 + pr * 2 * cl, y0 + pr * 0.3); ctx.stroke();
      }
      for (let j = 0; j < 4 + k * 4; j++) {
        const px = x - pr * 2.8 + rnd(j + 700 + k * 20) * pr * 5.6, py = V.yE(px) - pr * (0.35 + rnd(j + 720 + k * 20) * 1.6 * cl);
        platelet(px, py + Math.sin(time * 1.3 + j) * 0.6, pr * 0.55, rnd(j + 740) * 3);
      }
      const L2 = particle(x + pr * 0.8, yb - pr * 1.05, pr, { kind: "lpa", tail: Math.PI - 0.05, wig: 0.25, tailK: 2.3, rot: 0.2 });
      if (k === 1) stuck = { x: x - pr * 1.5, y: yb - pr * 0.6 };
    });
    if (L.mid) tag("lpa", on("lpa") && (n ? T < 6 : true), L.mid[0], L.mid[1], n ? A.x + A.w * 0.6 : A.x + A.w * 0.27, n ? A.y + A.h * 0.45 : A.y + LF() * 0.7, "Lp(a)：多了一条 apo(a) 长尾巴", LP.apoa[1]);
    tag("hook", on("hook") && !!stuck && (n ? T >= 6 : true), stuck.x, stuck.y, n ? A.x + A.w * 0.6 : R.x + R.w * 0.55, n ? A.y + A.h * 0.45 : A.y + LF() * 0.7, "粘在管壁上，还招来血小板", LP.plt[2]);
  }

  // 第 7 幕：降脂药让肝细胞多长 LDL 受体，把 LDL 从血里收回；Lp(a) 变化不大
  function scene6(A, Lg, live, T) {
    const n = nar(), on = onOf(6, live), fs = SF();
    const M = n ? A : { x: A.x, y: A.y, w: A.w * 0.64, h: A.h };
    const yMem = M.y + M.h * (n ? 0.5 : 0.48), ir = Math.min(IR() * 0.95, M.h * 0.06), mt = Math.max(7, ir * 0.85);
    const prog = ease(clamp((T - 1.5) / 6, 0, 1));
    // 血浆 / 肝细胞
    ctx.fillStyle = LP.plasma; ctx.beginPath(); ctx.rect(M.x, M.y, M.w, yMem - M.y); ctx.fill();
    const g = ctx.createLinearGradient(0, yMem, 0, M.y + M.h);
    g.addColorStop(0, LP.hep[0]); g.addColorStop(1, LP.hep[1]);
    ctx.fillStyle = g; ctx.beginPath(); ctx.rect(M.x, yMem, M.w, M.y + M.h - yMem); ctx.fill();
    bilayer(M.x, M.x + M.w, yMem, mt);
    txt("血液", M.x + 6, M.y + fs * 0.8, fs, K.soft, "left", 500);
    txt("肝细胞", M.x + 6, yMem + mt + fs * 0.9, fs, LP.hep[2], "left", 700);
    // 细胞核
    const nx = M.x + M.w * 0.62, ny = M.y + M.h * (n ? 0.88 : 0.86), nr = Math.min(M.h * 0.12, M.w * 0.085);
    ctx.beginPath(); ctx.arc(nx, ny, nr, 0, TAU); ctx.fillStyle = glossy(nx, ny, nr, LP.nuc[0], LP.nuc[1]); ctx.fill(); ctx.strokeStyle = LP.nuc[2]; ctx.lineWidth = 1; ctx.stroke();
    // 降脂药 → 胆固醇合成 ⊖ → 细胞核 → 更多 LDL 受体
    const sx = M.x + M.w * 0.28, sy = yMem + (M.y + M.h - yMem) * 0.6;
    const dIn = ease(clamp((T - 0.6) / 1.6, 0, 1));
    const cr = ir * 0.6;
    for (let k = 0; k < 5; k++) {
      const a = k < 2 ? 1 : 1 - prog * 0.85;
      mol("chol", sx + (k < 3 ? (k - 1) * cr * 3 : (k - 3.5) * cr * 3), sy + (k < 3 ? -cr * 1.1 : cr * 1.1) + Math.sin(time + k) * 0.8, cr, a, 0);
    }
    if (!n) txt("胆固醇合成", sx, sy + cr * 2.6, fs, K.soft, "center", 500);
    mol("statin", lerp(M.x + ir, sx - cr * 4.6, dIn), sy, ir * 0.75, dIn > 0 ? 1 : 0, 0);
    minusSign(sx - cr * 3.8, sy - cr * 2.2, ir * 0.42, clamp((T - 2) * 2, 0, 1));
    const ga = clamp((T - 2.4) / 1, 0, 1);
    arrow([[sx + cr * 4, sy], [nx - nr * 1.2, sy], [nx - nr * 0.95, ny - nr * 0.5]], LP.ok, Math.max(2, H * 0.005), ga * 0.85, "go");
    const upA = arrow([[nx, ny - nr * 1.1], [nx, yMem + mt * 1.6]], LP.ok, Math.max(2, H * 0.005), ga * 0.85, "go");
    flow(upA, LP.ok, 2, Math.max(2, H * 0.005), ga, 0.4);
    if (!n) txt("合成更多 LDL 受体", nx + nr * 1.25, (ny + yMem) / 2, fs, "#1f7a4c", "left", 700);
    // LDL 受体：数量从 3 个增加到 7 个
    const order = [1, 5, 3, 0, 6, 2, 4], slots = 7;
    const nR = 3 + 4 * prog;
    let freeIdx = 0;
    order.forEach((slot, k) => {
      const ra = clamp(nR - k, 0, 1);
      if (ra <= 0.01) return;
      const x = M.x + M.w * (0.08 + slot * 0.84 / (slots - 1));
      const ph = cyc(5.5, rnd(slot + 900));
      const bound = ph > 0.3 && ph < 0.62 ? 1 : 0;
      ctx.save(); ctx.globalAlpha *= ra;
      const d = receptor("apob", x, yMem, ir, mt, bound * 0.8 + (ra < 1 ? (1 - ra) : 0), 0, null);
      ctx.restore();
      const pr = ir * 1.25, dockY = d.y - pr * 0.72;
      // LDL：落下 → 结合 → 被收进细胞
      const use = ra > 0.95 && k < Math.round(nR) + 0.01;
      if (!use) return;
      if (ph < 0.3) { const u = ease(ph / 0.3); particle(x + (1 - u) * pr * 1.5, lerp(M.y + pr * 1.5, dockY, u), pr, { kind: "ldl", a: clamp(ph / 0.06, 0, 1) }); }
      else if (ph < 0.62) particle(x, dockY, pr, { kind: "ldl", glow: 0.6 });
      else if (ph < 0.95) {
        const u = (ph - 0.62) / 0.33, vy = lerp(yMem + pr * 1.4, yMem + pr * 3.2, u);
        ctx.save(); ctx.globalAlpha *= 1 - u;
        ctx.beginPath(); ctx.arc(x + u * pr, vy, pr * 1.3, 0, TAU); ctx.strokeStyle = K.memEdge; ctx.lineWidth = Math.max(2, mt * 0.35); ctx.stroke();
        particle(x + u * pr, vy, pr, { kind: "ldl" });
        ctx.restore();
      }
    });
    // 血里还漂着的 LDL（越来越少）和 Lp(a)（基本不变）
    const nFree = Math.round(6 - 4 * prog);
    let lpaPick = null, ldlPick = null;
    for (let i = 0; i < 6; i++) {
      const a = clamp(nFree - i, 0, 1);
      const x = M.x + ((rnd(i + 950) + time * 0.018) % 1) * M.w, y = M.y + (yMem - M.y) * (0.2 + rnd(i + 960) * 0.3);
      const ea = a * Math.min(1, (x - M.x) / (ir * 3), (M.x + M.w - x) / (ir * 3));
      particle(x, y, ir * 1.25, { kind: "ldl", rot: rnd(i + 970) * 6, a: ea });
      if (ea > 0.9 && (!ldlPick || Math.abs(x - M.x - M.w * 0.3) < Math.abs(ldlPick[0] - M.x - M.w * 0.3))) ldlPick = [x, y];
    }
    for (let i = 0; i < 2; i++) {
      const x = M.x + M.w * (0.25 + i * 0.45) + Math.sin(time * 0.4 + i) * M.w * 0.05, y = M.y + (yMem - M.y) * (0.34 + i * 0.12) + Math.cos(time * 0.5 + i) * 3;
      particle(x, y, ir * 1.3, { kind: "lpa", tail: 0.15 + Math.sin(time * 0.6 + i) * 0.2, tailK: 2.4, rot: 0.3 });
      if (i === 1) lpaPick = [x, y];
    }
    // 右侧：斑块变稳定（纤维帽变厚、脂质核心变小）
    let plaqueP = null;
    if (!n) {
      const P = { x: A.x + A.w * 0.67, y: A.y + A.h * 0.1, w: A.w * 0.33, h: A.h - Lg.bh - A.h * 0.1 - 22 };
      ctx.save(); ctx.beginPath(); ctx.roundRect(P.x, P.y, P.w, P.h, 10); ctx.clip();
      const V = vessel(P, { lum: 0.42, iel: 0.84, amp: P.h * 0.2, px: P.x + P.w * 0.5, sig: P.w * 0.25, cap: 0.2 + 0.8 * prog, coreW: 1 - 0.35 * prog });
      ctx.restore();
      ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(P.x, P.y, P.w, P.h, 10); ctx.stroke();
      txt("斑块：纤维帽变厚", P.x + P.w / 2, P.y + P.h - fs * 0.9, fs, K.ink, "center", 700);
      plaqueP = [V.px, V.yE(V.px) + V.eh * 2];
    }
    const pf = plaqueP || ldlPick || [M.x + M.w * 0.3, M.y + M.h * 0.2];
    const lp = lpaPick;
    tag("fewer", on("fewer") && (n ? T < 6.5 : true), pf[0], pf[1], n ? A.x + A.w * 0.5 : A.x + A.w * 0.835, A.y + LF() * (n ? 0.9 : 0.7), "LDL 小船少了，斑块更稳定", LP.ok);
    tag("lpaStay", on("lpaStay") && (n ? T >= 6.5 : true), lp[0], lp[1] - ir, n ? A.x + A.w * 0.5 : M.x + M.w * 0.45, A.y + LF() * (n ? 0.9 : 0.7), "Lp(a) 变化不大，其他指标要管得更严", LP.apoa[1]);
  }

  function drawScene(i, live, T) {
    const L = areaFor(i), A = L.A, Lg = L.Lg;
    [scene0, scene1, scene2, scene3, scene4, scene5, scene6][i](A, Lg, live, T);
    legend(Lg);
  }

  function hud() {
    const v = S.ldlc, col = v < 3.4 ? "#2fa465" : v < 4.1 ? "#d99400" : K.red;
    // 手机上两颗胶囊并排放不下时，左边只写数字（单位看右边的胶囊）
    pill(14, 12, "LDL-C", W < 520 ? v.toFixed(1) : `${v.toFixed(1)} mmol/L`, col, false);
    const p = CH[cur].pill;
    pill(W - 14, 12, p[0], p[1], p[2] === "ok" ? "#2fa465" : p[2] === "warn" ? "#d99400" : K.red, true);
  }

  function draw() {
    background();
    const f = clamp(lt / 0.7, 0, 1);
    if (f < 1 && prevCur >= 0 && prevCur !== cur) {
      ctx.save(); ctx.globalAlpha = 1 - f; drawScene(prevCur, false, prevLt); ctx.restore();
    }
    ctx.save(); ctx.globalAlpha = prevCur >= 0 ? f : 1; drawScene(cur, true, lt); ctx.restore();
    ctx.globalAlpha = 1;
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#9b7fe0",
    titleCard: { lines: ["化验单上的血脂，", "到底在说什么？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
