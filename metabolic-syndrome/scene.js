// 三高为什么爱结伴（代谢综合征）：教科书示意图画风（机制类集），通用画法见 shared/textbook.js。
// 每一幕一张独立的示意图，幕间淡入淡出（结构照 lipids）：
//   0 人体轮廓 + 5 项诊断标准；1 腹部横断面（皮下 / 内脏脂肪）+ 放大的内脏脂肪细胞；
//   2 血管 + 胰岛 β 细胞 + 肌肉细胞（胰岛素受体）+ 肝细胞：胰岛素抵抗；
//   3 内脏脂肪 → 门静脉 → 肝细胞（脂肪肝）→ VLDL → 血液里的脂蛋白；
//   4 肾小管留钠留水、交感神经、内皮 → 动脉受压、斑块，风险叠加；5 减重后各项指标一起改善 + 生活方式。
Anima.register("metabolic-syndrome", {
    "title": "三高为什么爱结伴",
    "tag": "代谢小剧场",
    "headline": "三高为什么爱【结伴】？",
    "lede": "肚子大、血糖高、血脂乱、血压高，常常一起找上同一个人。它们有一个共同的根：肚子里的内脏脂肪和胰岛素抵抗。",
    "summary": "代谢综合征：内脏脂肪如何通过胰岛素抵抗，同时推高血糖、血脂和血压；诊断标准和减重 5%～10% 的好处。",
    "footer": "腰围超标或三高中有两项以上，建议到内分泌科或心内科综合评估。",
    "canvasLabel": "代谢综合征示意图：内脏脂肪释放游离脂肪酸和炎症因子，引起胰岛素抵抗、血脂异常和血压升高",
    "disease": "代谢综合征",
    "organs": ["liver", "pancreas", "vessels"],
    "categories": ["metabolic", "cardio"],
    "color": "#c8702e",
    "look": "textbook"
  }, () => {
  const CH = [
    { title: "三高常常结伴而来", waist: 96, glu: 6.4, sbp: 138, dbp: 88, tg: 2.2, hdl: 0.95, fat: 1, ir: 1, ins: 1.6, steat: 0.6, stiff: 0.5,
      pill: ["诊断", "≥ 3 / 5 项", "warn"],
      text: "有的人肚子越来越大，体检时发现血糖偏高、甘油三酯偏高，血压也跟着往上走。这几样常常聚在同一个人身上，医学上叫代谢综合征。它们看起来是好几种病，其实有一个共同的根，就藏在肚子里。",
      fact: "5 项标准里占 3 项或以上，就可以诊断代谢综合征",
      labels: ["root", "three"] },
    { title: "根在肚子里的脂肪", waist: 96, glu: 6.4, sbp: 138, dbp: 88, tg: 2.2, hdl: 0.95, fat: 1, ir: 1, ins: 1.6, steat: 0.6, stiff: 0.5,
      pill: ["脂联素", "减少", "bad"],
      text: "脂肪分两种：皮下脂肪在皮肤下面，用手捏得起来；内脏脂肪藏在腹腔里，裹着肠子、肝脏这些内脏。内脏脂肪细胞一撑大，就不停往血里放游离脂肪酸和炎症因子，能保护代谢的脂联素反而变少了。",
      fact: "腰围男性 ≥ 90 cm、女性 ≥ 85 cm，算腹型肥胖",
      labels: ["sub", "visc", "release"] },
    { title: "胰岛素抵抗：钥匙不灵了", waist: 96, glu: 6.4, sbp: 138, dbp: 88, tg: 2.2, hdl: 0.95, fat: 1, ir: 1, ins: 2, steat: 0.6, stiff: 0.5,
      pill: ["空腹血糖", "6.4 mmol/L", "warn"], pillN: ["血糖", "6.4 mmol/L", "warn"],
      text: "游离脂肪酸和炎症因子会干扰胰岛素的信号，肌肉和肝脏对胰岛素不再敏感，这叫胰岛素抵抗。胰腺只好多分泌胰岛素来弥补，血里的胰岛素长期偏高。时间一长，胰腺渐渐跟不上，血糖就慢慢升高了。",
      fact: "空腹血糖 ≥ 6.1 或糖负荷后 2 小时 ≥ 7.8 mmol/L，算一项",
      labels: ["resist", "more", "sugar"] },
    { title: "血脂跟着乱了", waist: 96, glu: 6.4, sbp: 138, dbp: 88, tg: 2.2, hdl: 0.95, fat: 1, ir: 1, ins: 1.8, steat: 1, stiff: 0.5,
      pill: ["甘油三酯", "2.2 mmol/L", "bad"], pillN: ["甘油三酯 mmol/L", "2.2", "bad"],
      text: "大量游离脂肪酸经门静脉直接涌进肝脏，肝脏把它们重新做成甘油三酯：一部分堆在肝里，成了脂肪肝；一部分装进VLDL小船送进血液。于是甘油三酯升高，HDL-C降低，小而密的LDL变多，更容易钻进血管壁。",
      fact: "空腹甘油三酯 ≥ 1.70 或 HDL-C < 1.04 mmol/L，各算一项",
      labels: ["portal", "nafld", "vldl"] },
    { title: "血压升高，血管受伤", waist: 96, glu: 6.4, sbp: 138, dbp: 88, tg: 2.2, hdl: 0.95, fat: 1, ir: 1, ins: 1.8, steat: 1, stiff: 1,
      pill: ["血压", "138/88 mmHg", "bad"], pillN: ["血压 mmHg", "138/88", "bad"],
      text: "胰岛素长期偏高，会让肾脏多留钠、多留水，让交感神经一直处在兴奋状态，血管内皮也变得不够舒张，血压就升高了。高血糖、血脂异常、高血压凑在一起，一起损伤血管，心梗、中风的风险就一层层叠加上去。",
      fact: "血压 ≥ 130/85 mmHg，或已确诊高血压并在治疗，算一项",
      labels: ["bp", "risk"] },
    { title: "从腰围开始，一起改善", waist: 89, glu: 5.8, sbp: 127, dbp: 82, tg: 1.5, hdl: 1.06, fat: 0.35, ir: 0.35, ins: 1.1, steat: 0.3, stiff: 0.3,
      pill: ["减重", "5%～10%", "ok"],
      text: "好消息是：同一个根，也能一起拔。先量一量腰围。体重减掉5%～10%，内脏脂肪先变少，血糖、血脂、血压常常一起好转。少吃精制米面和含糖饮料，有氧运动加力量练习，睡够觉，戒烟限酒；需要用药时，按医嘱来。",
      fact: "减重 5%～10%，几项指标常常一起好转",
      labels: ["loss", "together"] },
  ];
  const DUR = 12;

  const { clamp, rnd, pill, mix } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0, prevCur = -1, prevLt = 0;
  const TB = Anima.textbook({ W: () => W, H: () => H, time: () => time });
  const { ctx, TAU, rgba, shade, glossy, txt, background, sample, along, ease, LF, SF, IR, nar, mol, minusSign, noSign, bolt, arrow, flow, bilayer, tag, smoothPath } = TB;
  const K = TB.K;
  const S = { waist: 96, glu: 6.4, sbp: 138, dbp: 88, tg: 2.2, hdl: 0.95, fat: 1, ir: 1, ins: 1.6, steat: 0.6, stiff: 0.5 };

  // ---------- 本集新登记的图标（形状名带 ms_ 前缀；颜色避开词典里已有的） ----------
  const REG = Anima.textbook, circNotch = REG.SHAPES.circle.notch;
  if (!REG.SHAPES.ms_ffa) REG.registerShape("ms_ffa", { // 游离脂肪酸：圆头（羧基）+ 锯齿长尾（碳链）
    path(c, r) {
      c.moveTo(-0.55 * r + 0.36 * r, 0); c.arc(-0.55 * r, 0, 0.36 * r, 0, TAU);
      const cl = [[-0.25, 0.1], [0.05, -0.2], [0.35, 0.1], [0.65, -0.2], [0.98, 0.1]], d = 0.14;
      cl.forEach((p, k) => { if (k) c.lineTo(p[0] * r, (p[1] - d) * r); else c.moveTo(p[0] * r, (p[1] - d) * r); });
      for (let k = cl.length - 1; k >= 0; k--) c.lineTo(cl[k][0] * r, (cl[k][1] + d) * r);
      c.closePath();
    },
    notch: circNotch,
  });
  if (!REG.SHAPES.ms_burst) REG.registerShape("ms_burst", { // 炎症因子：八角尖刺
    path(c, r) { for (let k = 0; k < 16; k++) { const a = -Math.PI / 2 + k * Math.PI / 8, q = (k % 2 ? 0.55 : 1) * r; if (k) c.lineTo(Math.cos(a) * q, Math.sin(a) * q); else c.moveTo(Math.cos(a) * q, Math.sin(a) * q); } c.closePath(); },
    notch: circNotch,
  });
  if (!REG.SHAPES.ms_clover) REG.registerShape("ms_clover", { // 脂联素：四叶草（多聚体）
    path(c, r) { [[0.44, 0], [0, 0.44], [-0.44, 0], [0, -0.44]].forEach((p) => { c.moveTo(p[0] * r + 0.5 * r, p[1] * r); c.arc(p[0] * r, p[1] * r, 0.5 * r, 0, TAU); }); },
    notch: circNotch,
  });
  if (!REG.SHAPES.ms_cross) REG.registerShape("ms_cross", { // 钠离子：加号（正离子）
    path(c, r) { const a = 0.34 * r, b = 0.95 * r; c.moveTo(-a, -b); c.lineTo(a, -b); c.lineTo(a, -a); c.lineTo(b, -a); c.lineTo(b, a); c.lineTo(a, a); c.lineTo(a, b); c.lineTo(-a, b); c.lineTo(-a, a); c.lineTo(-b, a); c.lineTo(-b, -a); c.lineTo(-a, -a); c.closePath(); },
    notch: circNotch,
  });
  REG.register("ffa", { shape: "ms_ffa", color: ["#fde3b8", "#e39b35", "#94601a"], label: "游离脂肪酸" });
  REG.register("cyto", { shape: "ms_burst", color: ["#fbd0c2", "#d95f3b", "#8e3520"], label: "炎症因子" });
  REG.register("adipo", { shape: "ms_clover", color: ["#d3f0d6", "#4fae62", "#2a7038"], label: "脂联素" });
  REG.register("na", { shape: "ms_cross", color: ["#e3e4f6", "#8a8fc4", "#4f5488"], label: "钠离子" });

  // ---------- 本集结构用色 ----------
  const C2 = {
    glu: TB.MOLECULES.glu.color, ins: TB.MOLECULES.ins.color, insr: TB.MOLECULES.insr.color, tgc: TB.MOLECULES.tg.color,
    ffa: TB.MOLECULES.ffa.color, cyto: TB.MOLECULES.cyto.color, adipo: TB.MOLECULES.adipo.color, na: TB.MOLECULES.na.color,
    apob: TB.MOLECULES.apob.color, apoa1: TB.MOLECULES.apoa1.color,
    fat: ["#fffbe8", "#f5d98a", "#c9a23e"],
    hep: ["#fcf0e6", "#efd0b6", "#b98563"], nuc: ["#ece6f5", "#bdb0d6", "#7f6fa6"],
    beta: ["#fff6e8", "#f7dfbe", "#c99a62"],
    lumen0: "#fff8f6", lumen1: "#fbe8e7",
    endo: ["#fdeef2", "#efc4cf", "#c38a9b"],
    rbc: ["#f8bcbc", "#e27575", "#b04848"],
    cyto0: "#fff9f6", cyto1: "#fbece9",
    skin: ["#fbf3ee", "#f1dfd3", "#b99f8f"],
    musc: ["#f6d3d6", "#e6a9b0", "#b77580"],
    gut: ["#fde9ea", "#f3c2c6", "#c98690"],
    bone: ["#fbf8f1", "#e8dfcc", "#a89a7c"],
    media: "#f0e0e6", smc: ["#f8e9ef", "#e4c6d3", "#b88ca0"],
    vein: ["#dfe6f7", "#9fb2e0", "#5a6fa8"],
    tube: ["#fff6de", "#f3dfa8", "#b99a4e"],
    nerve: ["#fff3c8", "#f2d27a", "#b8932c"],
    water: ["#e2f3fd", "#8cc8ee", "#3b86b8"],
    no: "#6fb7e8",
    mac: ["#f3f5fc", "#bcc6e4", "#6b7bab"],
    tape: ["#fff4c2", "#f3cf4e", "#a88410"],
    ok: "#2fa465", warn: "#d99400", bad: "#e0443e", hot: "#f2a36b",
  };

  function update(dt) {
    if (cur !== lastCur) { prevCur = lastCur; prevLt = lt; lastCur = cur; lt = 0; }
    lt += dt; prevLt += dt;
  }
  const cyc = (P, off) => (((time / P + (off || 0)) % 1) + 1) % 1;
  const lerp = (a, b, t) => a + (b - a) * t;
  const tallA = (A) => nar() && A.h > A.w * 0.7;
  const onOf = (i, live) => (k) => live && CH[i].labels.indexOf(k) >= 0;

  // =================== 通用结构 ===================
  // 脂蛋白颗粒（简化）：磷脂外壳 + 内核 + 载脂蛋白。kind: vldl / ldl / sdl（小而密 LDL）/ hdl
  function lp(x, y, r, kind, a, rot) {
    if (a != null && a < 0.02) return;
    ctx.save(); if (a != null) ctx.globalAlpha *= a; ctx.translate(x, y); if (rot) ctx.rotate(rot);
    ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fillStyle = K.memTail; ctx.fill();
    const rc = r * 0.72;
    const core = kind === "vldl" ? ["#f3f6d2", "#cfdc7c"] : kind === "sdl" ? ["#fff0b8", "#e7bf3c"] : kind === "hdl" ? ["#fffbe6", "#f7e6a6"] : ["#fff7da", "#f6dc8a"];
    ctx.beginPath(); ctx.arc(0, 0, rc, 0, TAU); ctx.fillStyle = glossy(0, 0, rc, core[0], core[1]); ctx.fill();
    if (kind === "vldl" && r > 11) {
      for (let i = 0; i < 4; i++) { const an = i * TAU / 4 + 0.6, d = rc * 0.45; mol("tg", Math.cos(an) * d, Math.sin(an) * d, rc * 0.2, 0.9, 0); }
    }
    const hr = Math.max(1.1, r * 0.1), nh = Math.max(8, Math.floor(TAU * (r - hr) / (hr * 2.3)));
    ctx.beginPath();
    for (let k = 0; k < nh; k++) { const th = k / nh * TAU, px = Math.cos(th) * (r - hr), py = Math.sin(th) * (r - hr); ctx.moveTo(px + hr, py); ctx.arc(px, py, hr, 0, TAU); }
    ctx.fillStyle = K.memHead; ctx.fill(); ctx.strokeStyle = K.memEdge; ctx.lineWidth = Math.max(0.5, hr * 0.22); ctx.stroke();
    ctx.lineCap = "round";
    if (kind === "hdl") {
      const c = C2.apoa1, w = Math.max(1.6, r * 0.22);
      [-2.5, -0.5, 1.5].forEach((s0) => { for (const q of [[c[2], w + 1.2], [c[1], w]]) { ctx.strokeStyle = q[0]; ctx.lineWidth = q[1]; ctx.beginPath(); ctx.arc(0, 0, r - w * 0.15, s0, s0 + 1.1); ctx.stroke(); } });
    } else {
      const c = C2.apob, w = Math.max(1.5, r * 0.11);
      for (const q of [[c[2], w + Math.max(1.2, w * 0.4)], [c[1], w]]) { ctx.strokeStyle = q[0]; ctx.lineWidth = q[1]; ctx.beginPath(); ctx.arc(0, 0, r - w * 0.2, 0.35, Math.PI - 0.35); ctx.stroke(); }
      const gx = Math.cos(0.35) * (r - w * 0.2), gy = Math.sin(0.35) * (r - w * 0.2), gr = w * 0.95;
      ctx.beginPath(); ctx.arc(gx, gy, gr, 0, TAU); ctx.fillStyle = glossy(gx, gy, gr, c[0], c[1]); ctx.fill(); ctx.strokeStyle = c[2]; ctx.lineWidth = 1; ctx.stroke();
    }
    ctx.restore();
  }

  // 脂肪细胞：细胞膜 + 一颗撑满的大油滴 + 被挤扁的细胞核
  function adipocyte(cx, cy, r, glow) {
    if (glow > 0.02) {
      const g = ctx.createRadialGradient(cx, cy, r * 0.8, cx, cy, r * 1.6);
      g.addColorStop(0, rgba(C2.hot, 0.35 * glow)); g.addColorStop(1, rgba(C2.hot, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r * 1.6, 0, TAU); ctx.fill();
    }
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU);
    ctx.fillStyle = glossy(cx, cy, r, "#fffaf2", "#f6e8d6"); ctx.fill();
    ctx.strokeStyle = K.memHead; ctx.lineWidth = Math.max(2.5, r * 0.06); ctx.stroke();
    ctx.strokeStyle = K.memEdge; ctx.lineWidth = 1; ctx.stroke();
    const dr = r * 0.86, dx = cx - r * 0.05, dy = cy + r * 0.05;
    ctx.beginPath(); ctx.arc(dx, dy, dr, 0, TAU); ctx.fillStyle = glossy(dx, dy, dr, C2.fat[0], C2.fat[1]); ctx.fill();
    ctx.strokeStyle = C2.fat[2]; ctx.lineWidth = 1; ctx.stroke();
    ctx.save(); ctx.translate(cx + r * 0.64, cy - r * 0.6); ctx.rotate(-0.8);
    ctx.beginPath(); ctx.ellipse(0, 0, r * 0.18, r * 0.06, 0, 0, TAU); ctx.fillStyle = "rgba(60,50,80,0.32)"; ctx.fill(); ctx.restore();
  }

  // 肝细胞：圆角多边形，细胞核；steat 0～1 胞内脂滴（脂肪肝）
  function hepato(cx, cy, rx, ry, steat, seed) {
    const pts = [];
    for (let k = 0; k < 6; k++) { const th = k / 6 * TAU + 0.3 + (seed || 0); pts.push([cx + Math.cos(th) * rx * (1 + 0.06 * Math.sin(k * 3)), cy + Math.sin(th) * ry]); }
    smoothPath(pts, true);
    ctx.fillStyle = glossy(cx, cy, Math.max(rx, ry) * 1.1, C2.hep[0], C2.hep[1]); ctx.fill();
    ctx.strokeStyle = K.memHead; ctx.lineWidth = Math.max(3, Math.min(rx, ry) * 0.05); ctx.stroke();
    ctx.strokeStyle = C2.hep[2]; ctx.lineWidth = 1.2; ctx.stroke();
    const nr = Math.min(rx, ry) * 0.24, nx = cx - rx * 0.3, ny = cy + ry * 0.22;
    ctx.beginPath(); ctx.arc(nx, ny, nr, 0, TAU); ctx.fillStyle = glossy(nx, ny, nr, C2.nuc[0], C2.nuc[1]); ctx.fill(); ctx.strokeStyle = C2.nuc[2]; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.arc(nx + nr * 0.15, ny - nr * 0.1, nr * 0.28, 0, TAU); ctx.fillStyle = rgba(C2.nuc[2], 0.55); ctx.fill();
    // 脂滴
    const drops = [];
    const D = [[0.25, -0.35, 1], [-0.05, -0.5, 0.7], [0.45, 0.05, 0.85], [0.1, 0.35, 0.75], [-0.45, -0.2, 0.6], [0.5, -0.45, 0.55], [0.25, 0.62, 0.5], [-0.2, 0.62, 0.45]];
    const base = Math.min(rx, ry) * 0.2;
    D.forEach((d, k) => {
      const s = clamp(steat * D.length * 1.1 - k, 0, 1);
      if (s < 0.02) return;
      const x = cx + d[0] * rx, y = cy + d[1] * ry, r = base * d[2] * (0.4 + 0.6 * s) * (0.6 + 0.4 * steat);
      ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = glossy(x, y, r, C2.fat[0], C2.fat[1]); ctx.fill();
      ctx.strokeStyle = C2.fat[2]; ctx.lineWidth = 1; ctx.stroke();
      drops.push([x, y, r]);
    });
    return { nx, ny, nr, drops };
  }

  // 巨噬细胞（免疫细胞）
  function macro(x, y, s, seed) {
    const N = 12, pts = [];
    for (let k = 0; k < N; k++) { const th = k / N * TAU, rad = s * (1 + 0.1 * Math.sin(time * 1.1 + k * 2.3 + seed)); pts.push([x + Math.cos(th) * rad * 1.15, y + Math.sin(th) * rad * 0.85]); }
    smoothPath(pts, true);
    ctx.fillStyle = glossy(x, y, s * 1.2, C2.mac[0], C2.mac[1]); ctx.fill();
    ctx.strokeStyle = C2.mac[2]; ctx.lineWidth = Math.max(1, s * 0.06); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x - s * 0.25, y + s * 0.1, s * 0.36, s * 0.24, 0.5, 0, TAU); ctx.fillStyle = rgba(C2.mac[2], 0.45); ctx.fill();
  }

  // 水滴
  function drop(x, y, s, a) {
    if (a != null && a < 0.02) return;
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.moveTo(x, y - s); ctx.bezierCurveTo(x + s * 0.9, y + s * 0.1, x + s * 0.6, y + s * 0.85, x, y + s * 0.85);
    ctx.bezierCurveTo(x - s * 0.6, y + s * 0.85, x - s * 0.9, y + s * 0.1, x, y - s);
    ctx.fillStyle = glossy(x, y, s, C2.water[0], C2.water[1]); ctx.fill(); ctx.strokeStyle = C2.water[2]; ctx.lineWidth = Math.max(0.8, s * 0.1); ctx.stroke();
    ctx.restore();
  }
  // 一氧化氮：小的浅蓝双球
  function noMol(x, y, s, a) {
    if (a != null && a < 0.02) return;
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    for (const d of [[-0.45, 0, "#dff0fb", C2.no], [0.45, 0, "#fde2e2", "#e08a8a"]]) {
      ctx.beginPath(); ctx.arc(x + d[0] * s, y + d[1] * s, s * 0.55, 0, TAU); ctx.fillStyle = glossy(x + d[0] * s, y, s * 0.55, d[2], d[3]); ctx.fill();
      ctx.strokeStyle = "#5a7a98"; ctx.lineWidth = Math.max(0.7, s * 0.1); ctx.stroke();
    }
    ctx.restore();
  }
  // 卷尺（腰围）
  function tapeIcon(x, y, s) {
    ctx.save(); ctx.translate(x, y);
    ctx.beginPath(); ctx.roundRect(-s, -s * 0.32, s * 2, s * 0.64, s * 0.12);
    ctx.fillStyle = glossy(0, 0, s, C2.tape[0], C2.tape[1]); ctx.fill(); ctx.strokeStyle = C2.tape[2]; ctx.lineWidth = Math.max(0.8, s * 0.08); ctx.stroke();
    ctx.beginPath(); for (let k = -4; k <= 4; k++) { const x0 = k * s * 0.22; ctx.moveTo(x0, -s * 0.32); ctx.lineTo(x0, -s * (k % 2 ? 0.12 : 0.02)); } ctx.stroke();
    ctx.restore();
  }
  // 血压表
  function gaugeIcon(x, y, s, v) {
    ctx.save(); ctx.translate(x, y);
    ctx.beginPath(); ctx.arc(0, s * 0.3, s, Math.PI, 0); ctx.closePath();
    ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = Math.max(1, s * 0.1); ctx.stroke();
    ctx.strokeStyle = C2.hot; ctx.lineWidth = Math.max(1.5, s * 0.16);
    ctx.beginPath(); ctx.arc(0, s * 0.3, s * 0.72, -0.9, -0.05); ctx.stroke();
    const an = Math.PI + (v == null ? 0.72 : v) * Math.PI;
    ctx.strokeStyle = K.ink; ctx.lineWidth = Math.max(1, s * 0.1); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(0, s * 0.3); ctx.lineTo(Math.cos(an) * s * 0.75, s * 0.3 + Math.sin(an) * s * 0.75); ctx.stroke();
    ctx.restore();
  }
  // 圆圈里的小勾
  function check(x, y, r, col, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = col; ctx.fill();
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = Math.max(1.4, r * 0.28); ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(x - r * 0.45, y + r * 0.02); ctx.lineTo(x - r * 0.1, y + r * 0.38); ctx.lineTo(x + r * 0.48, y - r * 0.35); ctx.stroke();
    ctx.restore();
  }
  // 血管腔横条（上下两排内皮），返回腔内的 y 映射
  function vesselStrip(x0, x1, vT, vB, ew) {
    const lg = ctx.createLinearGradient(0, vT, 0, vB);
    lg.addColorStop(0, C2.lumen0); lg.addColorStop(1, C2.lumen1);
    ctx.fillStyle = lg; ctx.fillRect(x0, vT, x1 - x0, vB - vT);
    const L = Math.max(30, (x1 - x0) / 12);
    [[vT, 0], [vB - ew, 1]].forEach((row) => {
      const y = row[0];
      for (let x = x0 - L * 0.3 * row[1]; x < x1; x += L) {
        const a = Math.max(x0, x + 1), b = Math.min(x1, x + L - 1);
        if (b - a < 4) continue;
        ctx.beginPath(); ctx.roundRect(a, y, b - a, ew, ew / 2);
        ctx.fillStyle = glossy(a + (b - a) * 0.4, y + ew * 0.3, (b - a) * 0.6, C2.endo[0], C2.endo[1]); ctx.fill();
        ctx.strokeStyle = C2.endo[2]; ctx.lineWidth = 1; ctx.stroke();
        ctx.beginPath(); ctx.ellipse((a + b) / 2, y + ew * 0.5, (b - a) * 0.12, ew * 0.28, 0, 0, TAU); ctx.fillStyle = rgba(C2.endo[2], 0.45); ctx.fill();
      }
    });
    return (yn, r) => (vT + vB) / 2 + yn * ((vB - vT) / 2 - ew - r - 2);
  }
  function rbc(x, y, rr) {
    ctx.beginPath(); ctx.ellipse(x, y, rr * 1.15, rr * 0.62, 0, 0, TAU);
    ctx.fillStyle = glossy(x, y, rr, C2.rbc[0], C2.rbc[1]); ctx.save(); ctx.globalAlpha *= 0.8; ctx.fill(); ctx.restore();
    ctx.strokeStyle = rgba(C2.rbc[2], 0.6); ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x, y, rr * 0.5, rr * 0.2, 0, 0, TAU); ctx.fillStyle = rgba(C2.rbc[2], 0.18); ctx.fill();
  }
  // 沿路径循环走动的一串分子
  function stream(sp, type, n, r, a, P, off) {
    if (!sp || a < 0.02) return null;
    let mid = null;
    for (let i = 0; i < n; i++) {
      const t = cyc(P, i / n + (off || 0)), p = along(sp, t);
      const fa = a * clamp(t / 0.12, 0, 1) * clamp((1 - t) / 0.12, 0, 1);
      mol(type, p[0], p[1], r, fa, Math.sin(time * 0.8 + i) * 0.5 + (type === "ffa" ? p[2] * 0.3 : 0));
      if (!mid && t > 0.35 && t < 0.65) mid = p;
    }
    return mid || along(sp, 0.5);
  }
  // 小标题（图中）
  function cap(t, x, y, col, align) { txt(t, x, y, SF(), col || K.soft, align || "center", 700); }

  // =================== 图例 ===================
  function legendItems(i) {
    const n = nar();
    const L = [
      [["tape", "", "腰围（腹型肥胖）"], ["m", "glu", "血糖"], ["m", "tg", "甘油三酯"], ["p", "hdl", "HDL"], ["gauge", "", "血压"]],
      [["fatb", "", "脂肪"], ["m", "ffa", "游离脂肪酸"], ["m", "cyto", "炎症因子"], ["m", "adipo", "脂联素"]],
      [["m", "glu", "葡萄糖"], ["m", "ins", "胰岛素"], ["m", "insr", "胰岛素受体"], ["m", "glut4", "GLUT4 转运体"], ["minus", "", "信号减弱"]],
      [["m", "ffa", "游离脂肪酸"], ["m", "tg", "甘油三酯"], ["p", "vldl", "VLDL"], ["p", "sdl", "小而密 LDL"], ["p", "hdl", "HDL"]],
      [["m", "na", "钠离子"], ["drop", "", "水"], ["nod", "", "一氧化氮（舒张血管）"], ["bolt", "", "交感神经兴奋"], ["p", "sdl", "小而密 LDL"]],
      [["m", "adipo", "脂联素"], ["m", "ffa", "游离脂肪酸"], ["band", "#d7efdc", "达标范围"], ["band", "#fbe6d6", "超出范围"]],
    ][i];
    if (!n) return L;
    return [
      [["m", "glu", "血糖"], ["m", "tg", "甘油三酯"], ["p", "hdl", "HDL"]],
      [["fatb", "", "脂肪"], ["m", "ffa", "脂肪酸"], ["m", "cyto", "炎症因子"], ["m", "adipo", "脂联素"]],
      [["m", "glu", "葡萄糖"], ["m", "ins", "胰岛素"], ["m", "insr", "受体"], ["minus", "", "信号减弱"]],
      [["m", "ffa", "脂肪酸"], ["p", "vldl", "VLDL"], ["p", "sdl", "小而密LDL"], ["p", "hdl", "HDL"]],
      [["m", "na", "钠"], ["drop", "", "水"], ["nod", "", "一氧化氮"], ["bolt", "", "交感兴奋"]],
      [["band", "#d7efdc", "达标范围"], ["band", "#fbe6d6", "超出范围"]],
    ][i];
  }
  function legendIcon(it, x, y, s) {
    const k = it[0];
    if (k === "m") mol(it[1], x, y, s * (it[1] === "ffa" ? 0.46 : 0.4), 1, 0);
    else if (k === "p") lp(x, y, s * (it[1] === "vldl" ? 0.46 : it[1] === "sdl" ? 0.3 : 0.3), it[1]);
    else if (k === "fatb") { ctx.beginPath(); ctx.arc(x, y, s * 0.36, 0, TAU); ctx.fillStyle = glossy(x, y, s * 0.36, C2.fat[0], C2.fat[1]); ctx.fill(); ctx.strokeStyle = C2.fat[2]; ctx.lineWidth = 1; ctx.stroke(); }
    else if (k === "drop") drop(x, y, s * 0.36);
    else if (k === "nod") noMol(x, y, s * 0.3);
    else if (k === "tape") tapeIcon(x, y, s * 0.42);
    else if (k === "gauge") gaugeIcon(x, y - s * 0.08, s * 0.38);
    else if (k === "band") { ctx.fillStyle = it[1]; ctx.beginPath(); ctx.roundRect(x - s * 0.45, y - s * 0.25, s * 0.9, s * 0.5, s * 0.25); ctx.fill(); ctx.strokeStyle = shade(it[1], "#000000", 0.2); ctx.lineWidth = 1; ctx.stroke(); }
    else TB.legendIcon(it, x, y, s);
  }
  function legend(Lg) {
    const items = Lg.items, fs = Lg.fs, s = Lg.s, ws = Lg.ws, w = W, h = H;
    const put = (it, x, y) => { legendIcon(it, x + s / 2, y, s); txt(it[2], x + s + fs * 0.35, y + 0.5, fs, K.ink, "left", 500); };
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

  // 顶部胶囊在窄屏上可能叠成两行：照引擎 pill() 的算法量一下，内容从胶囊下面开始
  const waistNow = () => (cur === 5 ? lerp(CH[4].waist, CH[5].waist, ease(clamp((lt - 0.8) / 5, 0, 1))) : S.waist);
  const waistStr = () => `${waistNow().toFixed(0)} cm`;
  const pillOf = (i) => (nar() && CH[i].pillN ? CH[i].pillN : CH[i].pill);
  function contentTop() {
    const fs = Math.max(12, W / 60) * Anima.UI, h = fs * 1.4 + 14, p = pillOf(cur);
    TB.font(fs, 500); const a1 = ctx.measureText("腰围").width, b1 = ctx.measureText(p[0]).width;
    TB.font(fs * 1.4, 700); const a2 = ctx.measureText(waistStr()).width, b2 = ctx.measureText(p[1]).width;
    const two = W - 14 - (b1 + b2 + 34) < 14 + (a1 + a2 + 34) + 8;
    return 12 + (two ? h * 2 + 8 : h) + 8;
  }
  function areaFor(i) {
    const Lg = TB.legendLayout(legendItems(i)), top = contentTop();
    const A = nar() ? { x: 8, y: top, w: W - 16, h: H - top - Lg.h - 8 } : { x: 16, y: top, w: W - 32, h: H - top - 12 };
    return { A, Lg };
  }
  // 标注：小框中心夹在内容区里（窄屏避开底部图例）
  function put(A, Lg, key, on, tx, ty, bx, by, text, col) {
    const h = LF() * 1.8;
    tag(key, on, tx, ty, bx, clamp(by, A.y + h / 2 + 2, H - h / 2 - 4 - (nar() ? Lg.h + 4 : 0)), text, col);
  }

  // =================== 第 1 幕：人体轮廓 + 5 项标准 ===================
  function body(cx, cy, s, T) {
    const f = S.fat, P = (u, v) => [cx + u * s, cy + v * s];
    const sk = C2.skin;
    // 手臂
    ctx.lineCap = "round";
    [-1, 1].forEach((d) => {
      const a = P(d * 0.19, -0.25), b = P(d * (0.27 + 0.03 * f), -0.05), c = P(d * (0.29 + 0.03 * f), 0.14);
      for (const q of [[sk[2], s * 0.075 + 2], [sk[1], s * 0.075]]) {
        ctx.strokeStyle = q[0]; ctx.lineWidth = q[1]; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.quadraticCurveTo(b[0], b[1], c[0], c[1]); ctx.stroke();
      }
    });
    // 头
    const hd = P(0, -0.41);
    ctx.beginPath(); ctx.ellipse(hd[0], hd[1], s * 0.075, s * 0.088, 0, 0, TAU);
    ctx.fillStyle = glossy(hd[0], hd[1], s * 0.09, sk[0], sk[1]); ctx.fill(); ctx.strokeStyle = sk[2]; ctx.lineWidth = 1.2; ctx.stroke();
    // 躯干 + 腿
    const R = [[0.045, -0.325], [0.17, -0.29], [0.205, -0.23], [0.18, -0.12], [0.18 + 0.05 * f, -0.02], [0.19 + 0.075 * f, 0.07], [0.17 + 0.04 * f, 0.16], [0.16, 0.22], [0.15, 0.34], [0.135, 0.47], [0.035, 0.47], [0.02, 0.3], [0, 0.27]];
    const pts = R.map((p) => P(p[0], p[1])).concat(R.slice(0, R.length - 1).reverse().map((p) => P(-p[0], p[1])));
    smoothPath(pts, true);
    ctx.fillStyle = glossy(cx - s * 0.05, cy - s * 0.1, s * 0.4, sk[0], sk[1]); ctx.fill();
    ctx.strokeStyle = sk[2]; ctx.lineWidth = 1.3; ctx.stroke();
    // 腿缝
    ctx.beginPath(); const l0 = P(0, 0.27), l1 = P(0, 0.47); ctx.moveTo(l0[0], l0[1]); ctx.lineTo(l1[0], l1[1]); ctx.stroke();
    // 心脏
    const ht = P(0.035, -0.17), hs = s * 0.035;
    ctx.beginPath(); ctx.moveTo(ht[0], ht[1] + hs * 1.2);
    ctx.bezierCurveTo(ht[0] - hs * 1.6, ht[1] + hs * 0.1, ht[0] - hs * 1.1, ht[1] - hs * 1.1, ht[0], ht[1] - hs * 0.4);
    ctx.bezierCurveTo(ht[0] + hs * 1.1, ht[1] - hs * 1.1, ht[0] + hs * 1.6, ht[1] + hs * 0.1, ht[0], ht[1] + hs * 1.2);
    ctx.fillStyle = glossy(ht[0], ht[1], hs * 1.3, "#f9c4c4", "#de6f6f"); ctx.fill(); ctx.strokeStyle = "#a84848"; ctx.lineWidth = 1; ctx.stroke();
    // 肝（画面左侧 = 人体右侧）
    const lv = P(-0.07, -0.075);
    ctx.save(); ctx.translate(lv[0], lv[1]); ctx.rotate(-0.12);
    ctx.beginPath(); ctx.moveTo(-s * 0.12, -s * 0.02); ctx.quadraticCurveTo(-s * 0.1, -s * 0.06, s * 0.02, -s * 0.05); ctx.quadraticCurveTo(s * 0.12, -s * 0.045, s * 0.1, -s * 0.01);
    ctx.quadraticCurveTo(s * 0.02, s * 0.02, -s * 0.07, s * 0.045); ctx.quadraticCurveTo(-s * 0.13, s * 0.03, -s * 0.12, -s * 0.02); ctx.closePath();
    ctx.fillStyle = glossy(0, 0, s * 0.1, "#f3c7b3", "#c9785c"); ctx.fill(); ctx.strokeStyle = "#8f4b33"; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
    // 腹腔：肠 + 内脏脂肪
    const ab = P(0, 0.075), arx = s * (0.12 + 0.05 * f), ary = s * 0.105;
    const pul = 0.5 + 0.5 * Math.sin(time * 2.2);
    const g = ctx.createRadialGradient(ab[0], ab[1], 0, ab[0], ab[1], arx * 1.5);
    g.addColorStop(0, rgba(C2.hot, (0.28 + 0.12 * pul) * f)); g.addColorStop(1, rgba(C2.hot, 0));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(ab[0], ab[1], arx * 1.5, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.ellipse(ab[0], ab[1], arx, ary, 0, 0, TAU); ctx.fillStyle = "rgba(253,233,234,0.9)"; ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.ellipse(ab[0], ab[1], arx, ary, 0, 0, TAU); ctx.clip();
    for (let k = 0; k < 14; k++) {
      const x = ab[0] + (rnd(k + 30) - 0.5) * arx * 1.9, y = ab[1] + (rnd(k + 40) - 0.5) * ary * 1.8, r = s * (0.018 + 0.01 * rnd(k + 50)) * (0.6 + 0.6 * f);
      ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = glossy(x, y, r, C2.fat[0], C2.fat[1]); ctx.fill(); ctx.strokeStyle = rgba(C2.fat[2], 0.6); ctx.lineWidth = 0.8; ctx.stroke();
    }
    ctx.strokeStyle = C2.gut[2]; ctx.lineWidth = Math.max(1, s * 0.006);
    for (let k = 0; k < 6; k++) {
      const x = ab[0] + ((k % 3) - 1) * arx * 0.55, y = ab[1] + (k < 3 ? -0.35 : 0.4) * ary, r = s * 0.022;
      ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = C2.gut[1]; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y, r * 0.45, 0, TAU); ctx.fillStyle = C2.gut[0]; ctx.fill();
    }
    ctx.restore();
    ctx.strokeStyle = C2.gut[2]; ctx.lineWidth = 1; ctx.beginPath(); ctx.ellipse(ab[0], ab[1], arx, ary, 0, 0, TAU); ctx.stroke();
    // 卷尺绕在腰上
    const wy = cy + s * 0.075, ww = s * (0.19 + 0.075 * f) + 2, th = s * 0.028;
    const tp = clamp((T - 0.3) / 1.2, 0, 1);
    if (tp > 0.01) {
      ctx.save(); ctx.globalAlpha *= tp;
      ctx.beginPath(); ctx.moveTo(cx - ww, wy - th / 2); ctx.quadraticCurveTo(cx, wy + th * 1.2 - th / 2, cx + ww, wy - th / 2);
      ctx.lineTo(cx + ww, wy + th / 2); ctx.quadraticCurveTo(cx, wy + th * 1.2 + th / 2, cx - ww, wy + th / 2); ctx.closePath();
      ctx.fillStyle = rgba(C2.tape[1], 0.92); ctx.fill(); ctx.strokeStyle = C2.tape[2]; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath();
      for (let k = -8; k <= 8; k++) { const u = k / 8, x = cx + u * ww, yy = wy - th / 2 + th * 1.2 * (1 - u * u); ctx.moveTo(x, yy); ctx.lineTo(x, yy + th * (k % 2 ? 0.35 : 0.6)); }
      ctx.stroke();
      ctx.restore();
    }
    return { belly: [ab[0] + arx * 0.3, ab[1] + ary * 0.15], ab, arx, ary, waist: [cx + ww, wy], liver: lv, heart: ht };
  }

  const CRIT = [
    { ic: "tape", name: "腹型肥胖", wide: "腰围：男 ≥ 90 cm，女 ≥ 85 cm", short: "腰围 男≥90、女≥85 cm", col: C2.tape[2] },
    { ic: "glu", name: "高血糖", wide: "空腹 ≥ 6.1 或糖负荷后 2 小时 ≥ 7.8 mmol/L，或已确诊糖尿病", short: "空腹≥6.1 或糖负荷后2h≥7.8", col: C2.glu[1] },
    { ic: "gauge", name: "高血压", wide: "≥ 130/85 mmHg，或已确诊高血压并治疗", short: "≥130/85 mmHg 或在治疗", col: C2.hot },
    { ic: "tg", name: "甘油三酯高", wide: "空腹 ≥ 1.70 mmol/L", short: "空腹 ≥1.70 mmol/L", col: C2.tgc[2] },
    { ic: "hdl", name: "HDL-C 低", wide: "空腹 < 1.04 mmol/L", short: "空腹 <1.04 mmol/L", col: C2.apoa1[2] },
  ];
  function critIcon(ic, x, y, s) {
    if (ic === "tape") tapeIcon(x, y, s * 0.95);
    else if (ic === "gauge") gaugeIcon(x, y - s * 0.15, s * 0.9);
    else if (ic === "hdl") lp(x, y, s * 0.72, "hdl");
    else mol(ic, x, y, s * 0.85, 1, 0);
  }

  function scene0(A, Lg, live, T) {
    const n = nar(), on = onOf(0, live), fs = SF();
    const bw = A.w * (n ? 0.34 : 0.33);
    const s = Math.min(A.h * 0.98, bw * (n ? 1.9 : 1.7));
    const Bd = body(A.x + bw * 0.5, A.y + A.h * 0.5 + s * 0.01, s, T);
    // 5 项标准
    const px = A.x + bw + A.w * (n ? 0.02 : 0.05);
    const P = n ? { x: px, y: A.y, w: A.x + A.w - px, h: A.h } : { x: px, y: A.y + 4, w: A.x + A.w - px, h: A.h - Lg.bh - 22 };
    TB.panel(P, 10);
    const headH = fs * (n ? 1.9 : 2.3), footH = fs * (n ? 2.2 : 2.6);
    txt(n ? "代谢综合征 5 项标准" : "代谢综合征的 5 项诊断标准（中国 2 型糖尿病防治指南 2020 年版）", P.x + fs * 0.9, P.y + headH * 0.55, fs, K.ink, "left", 700);
    ctx.strokeStyle = "#e3e8f1"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(P.x + 8, P.y + headH); ctx.lineTo(P.x + P.w - 8, P.y + headH); ctx.stroke();
    const rh = (P.h - headH - footH) / 5, two = n && rh > fs * 2.5;
    const is = Math.min(rh * 0.3, fs * 0.95);
    let lit3 = 0;
    const rows = [];
    CRIT.forEach((c, k) => {
      const y = P.y + headH + rh * (k + 0.5);
      const lit = clamp((T - 1.2 - k * 0.8) / 0.4, 0, 1);
      if (lit > 0.02) { ctx.fillStyle = rgba(c.col, 0.07 * lit); ctx.fillRect(P.x + 4, y - rh / 2 + 2, P.w - 8, rh - 4); }
      const ix = P.x + fs * 0.8 + is * 1.1;
      critIcon(c.ic, ix, y, is);
      const tx = ix + is * 1.6;
      if (n && two) {
        txt(c.name, tx, y - fs * 0.62, fs, K.ink, "left", 700);
        txt(c.short, tx, y + fs * 0.62, fs * 0.92, K.soft, "left", 500);
      } else if (n) {
        txt(c.name, tx, y, fs, K.ink, "left", 700);
      } else {
        txt(c.name, tx, y, fs, K.ink, "left", 700);
        txt(c.wide, tx + fs * 6.4, y, fs, K.soft, "left", 500);
      }
      check(P.x + P.w - fs * 1.3, y, fs * 0.62, C2.hot, lit);
      if (k === 2) lit3 = lit;
      rows.push([P.x, y, lit, c.col]);
    });
    // 从肚子到每一项的连线：同一个根
    rows.forEach((r, k) => {
      if (r[2] < 0.02) return;
      ctx.save(); ctx.globalAlpha *= 0.55 * r[2];
      ctx.strokeStyle = r[3]; ctx.lineWidth = Math.max(1.2, fs * 0.1); ctx.setLineDash([4, 4]); ctx.lineDashOffset = -time * 12;
      ctx.beginPath(); ctx.moveTo(Bd.belly[0], Bd.belly[1]);
      ctx.bezierCurveTo((Bd.belly[0] + r[0]) / 2, Bd.belly[1], (Bd.belly[0] + r[0]) / 2, r[1], r[0] - 2, r[1]); ctx.stroke();
      ctx.restore();
      ctx.beginPath(); ctx.arc(r[0], r[1], 3, 0, TAU); ctx.fillStyle = r[3]; ctx.fill();
    });
    // 底部：3 项以上
    const fy = P.y + P.h - footH / 2;
    ctx.strokeStyle = "#e3e8f1"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(P.x + 8, P.y + P.h - footH); ctx.lineTo(P.x + P.w - 8, P.y + P.h - footH); ctx.stroke();
    ctx.save(); ctx.globalAlpha *= 0.35 + 0.65 * lit3;
    txt(n ? "具备 3 项或以上 → 代谢综合征" : "具备 3 项或以上，即可诊断代谢综合征", P.x + P.w / 2, fy, fs * (n ? 1 : 1.1), "#b4541c", "center", 700);
    ctx.restore();
    put(A, Lg, "root", on("root"), Bd.belly[0], Bd.belly[1], n ? A.x + bw * 0.45 : A.x + bw * 0.3, A.y + A.h - LF() * 0.9, n ? "根：肚子里的脂肪" : "共同的根：肚子里的脂肪", C2.hot);
    put(A, Lg, "three", on("three") && !n, P.x + P.w * 0.5, fy + fs * 0.7, n ? A.x + A.w * 0.3 : P.x + P.w * 0.4, n ? A.y + LF() * 0.9 : P.y + P.h + LF() * 1.6, "不必 5 项都有，占 3 项就算", "#b4541c");
  }

  // =================== 第 2 幕：腹部横断面 + 放大的内脏脂肪细胞 ===================
  function crossSection(cx, cy, rx, ry) {
    const f = S.fat, sub = rx * 0.1;
    // 皮肤 + 皮下脂肪
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, TAU);
    ctx.fillStyle = glossy(cx, cy - ry * 0.3, rx, C2.fat[0], C2.fat[1]); ctx.fill();
    ctx.strokeStyle = C2.skin[2]; ctx.lineWidth = Math.max(2, rx * 0.018); ctx.stroke();
    // 皮下脂肪里的小叶纹
    ctx.strokeStyle = rgba(C2.fat[2], 0.35); ctx.lineWidth = 1;
    for (let k = 0; k < 28; k++) { const a = k / 28 * TAU, r1 = 0.97, r2 = 0.97 - sub / rx * 0.9; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * rx * r1, cy + Math.sin(a) * ry * r1); ctx.lineTo(cx + Math.cos(a + 0.05) * rx * r2, cy + Math.sin(a + 0.05) * ry * r2); ctx.stroke(); }
    // 腹壁肌肉
    const mx = rx - sub, my = ry - sub;
    ctx.beginPath(); ctx.ellipse(cx, cy, mx, my, 0, 0, TAU); ctx.fillStyle = glossy(cx, cy, mx, C2.musc[0], C2.musc[1]); ctx.fill();
    ctx.strokeStyle = C2.musc[2]; ctx.lineWidth = 1; ctx.stroke();
    // 腹腔
    const kx = mx - rx * 0.05, ky = my - ry * 0.06;
    ctx.beginPath(); ctx.ellipse(cx, cy - ry * 0.02, kx, ky * 0.96, 0, 0, TAU); ctx.fillStyle = "#fdf2f1"; ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.ellipse(cx, cy - ry * 0.02, kx, ky * 0.96, 0, 0, TAU); ctx.clip();
    // 内脏脂肪团
    const lumps = [];
    for (let k = 0; k < 26; k++) {
      const a = rnd(k + 200) * TAU, d = Math.sqrt(rnd(k + 230)) * 0.92;
      const x = cx + Math.cos(a) * kx * d, y = cy + Math.sin(a) * ky * d * 0.9 - ry * 0.05;
      if (y > cy + ky * 0.45 && Math.abs(x - cx) < kx * 0.35) continue;
      const r = rx * (0.07 + 0.05 * rnd(k + 260)) * (0.55 + 0.55 * f);
      ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = glossy(x, y, r, C2.fat[0], C2.fat[1]); ctx.fill();
      ctx.strokeStyle = rgba(C2.fat[2], 0.55); ctx.lineWidth = 0.8; ctx.stroke();
      lumps.push([x, y, r]);
    }
    // 肠管
    const guts = [[-0.45, -0.35], [-0.05, -0.5], [0.4, -0.35], [-0.6, 0.05], [-0.2, -0.08], [0.2, -0.05], [0.58, 0.08], [-0.35, 0.35], [0.35, 0.35]];
    guts.forEach((p, k) => {
      const x = cx + p[0] * kx, y = cy + p[1] * ky + Math.sin(time * 0.8 + k) * 0.8, r = rx * (0.085 + 0.02 * rnd(k + 300));
      ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = glossy(x, y, r, C2.gut[0], C2.gut[1]); ctx.fill();
      ctx.strokeStyle = C2.gut[2]; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y, r * 0.42, 0, TAU); ctx.fillStyle = "#fff6f5"; ctx.fill(); ctx.strokeStyle = rgba(C2.gut[2], 0.6); ctx.stroke();
    });
    ctx.restore();
    // 脊柱 + 腰大肌 + 主动脉
    const sy = cy + ry * 0.62, sr = rx * 0.13;
    [-1, 1].forEach((d) => { ctx.beginPath(); ctx.ellipse(cx + d * sr * 1.7, sy + sr * 0.1, sr * 0.8, sr * 0.62, 0, 0, TAU); ctx.fillStyle = glossy(cx + d * sr * 1.7, sy, sr, C2.musc[0], C2.musc[1]); ctx.fill(); ctx.strokeStyle = C2.musc[2]; ctx.lineWidth = 1; ctx.stroke(); });
    ctx.beginPath(); ctx.ellipse(cx, sy, sr, sr * 0.8, 0, 0, TAU); ctx.fillStyle = glossy(cx, sy, sr, C2.bone[0], C2.bone[1]); ctx.fill(); ctx.strokeStyle = C2.bone[2]; ctx.lineWidth = 1.2; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - sr * 0.25, sy + sr * 0.75); ctx.lineTo(cx, sy + sr * 1.7); ctx.lineTo(cx + sr * 0.25, sy + sr * 0.75); ctx.fillStyle = C2.bone[1]; ctx.fill(); ctx.stroke();
    const ao = [cx + sr * 0.35, sy - sr * 1.25];
    ctx.beginPath(); ctx.arc(ao[0], ao[1], sr * 0.38, 0, TAU); ctx.fillStyle = glossy(ao[0], ao[1], sr * 0.4, "#f9c4c4", "#de6f6f"); ctx.fill(); ctx.strokeStyle = "#a84848"; ctx.lineWidth = 1; ctx.stroke();
    // 挑一个靠右边的脂肪团做放大源
    let pick = lumps[0];
    lumps.forEach((l) => { if (l[0] - l[1] * 0.2 > pick[0] - pick[1] * 0.2 && l[1] < cy + ky * 0.3) pick = l; });
    return { sub: [cx - rx + sub * 0.5, cy - ry * 0.1], subTop: [cx, cy - ry + sub * 0.5], lump: pick, sr };
  }

  function scene1(A, Lg, live, T) {
    const n = nar(), on = onOf(1, live), fs = SF();
    const tall = tallA(A);
    const cw = A.w * (tall ? 0.72 : n ? 0.5 : 0.42);
    const rx = Math.min(cw * 0.47, A.h * (tall ? 0.3 : 0.62)), ry = rx * 0.72;
    const cx = A.x + cw * 0.5, cy = tall ? A.y + LF() * 2.2 + ry : A.y + A.h * 0.46;
    const X = crossSection(cx, cy, rx, ry);
    if (!n) cap("腹部横断面（示意）", cx - rx * 0.55, cy + ry + fs * 1.3, K.soft);
    // 放大的内脏脂肪细胞
    const zx = A.x + A.w * (tall ? 0.58 : n ? 0.72 : 0.66), zy = tall ? A.y + A.h * 0.74 : A.y + A.h * (n ? 0.5 : 0.42);
    const zr = (tall ? Math.min(A.h * 0.15, A.w * 0.17) : Math.min(A.h * (n ? 0.19 : 0.24), A.w * (n ? 0.12 : 0.11))) * (0.85 + 0.2 * S.fat);
    const L = X.lump;
    ctx.save(); ctx.strokeStyle = rgba(K.leader, 0.7); ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.arc(L[0], L[1], L[2] * 1.5, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(L[0] + L[2] * 1.1, L[1] - L[2] * 1.05); ctx.lineTo(zx - zr * 0.55, zy - zr * 0.95);
    ctx.moveTo(L[0] + L[2] * 1.1, L[1] + L[2] * 1.05); ctx.lineTo(zx - zr * 0.55, zy + zr * 0.95); ctx.stroke(); ctx.restore();
    // 周围的免疫细胞（慢性炎症）
    macro(zx - zr * 0.95, zy + zr * 0.72, zr * 0.2, 1);
    macro(zx + zr * 0.2, zy + zr * 1.12, zr * 0.18, 4);
    adipocyte(zx, zy, zr, S.fat * (0.6 + 0.4 * Math.sin(time * 2)));
    if (!n) cap("撑大的内脏脂肪细胞", zx, zy + zr * 1.55, C2.fat[2]);
    // 往外释放：游离脂肪酸、炎症因子多；脂联素少
    const ir = Math.max(6, Math.min(IR() * 0.85, zr * 0.2));
    const endX = Math.min(A.x + A.w - ir * 2, zx + zr * (n ? 1.9 : 2.3));
    const pF = [[zx + zr * 0.8, zy - zr * 0.5], [zx + zr * 1.4, zy - zr * 0.9], [endX, zy - zr * 1.05]];
    const pC = [[zx + zr * 0.9, zy + zr * 0.2], [zx + zr * 1.5, zy + zr * 0.35], [endX, zy + zr * 0.15]];
    const pA = [[zx - zr * 0.3, zy - zr * 0.9], [zx - zr * 0.25, zy - zr * 1.4], [zx + zr * 0.1, zy - zr * 1.75]];
    const sF = sample(pF, 30), sC = sample(pC, 30), sA = sample(pA, 30);
    const mF = stream(sF, "ffa", 5, ir, 1, 3.2);
    const mC = stream(sC, "cyto", 4, ir * 0.85, 1, 3.8, 0.1);
    stream(sA, "adipo", 1, ir * 0.85, 0.75 - 0.4 * S.fat, 5);
    if (!n) {
      txt("游离脂肪酸 ↑", endX - ir * 0.5, zy - zr * 1.05 - ir * 2, fs, C2.ffa[2], "center", 700);
      txt("炎症因子 ↑", endX - ir * 0.5, zy + zr * 0.15 + ir * 2.1, fs, C2.cyto[2], "center", 700);
      txt("脂联素 ↓", zx + zr * 0.1 + ir * 1.6, zy - zr * 1.75, fs, C2.adipo[2], "left", 700);
    }
    const t1 = n ? T < 4.5 : true, t2 = n ? T >= 4.5 && T < 9 : true, t3 = n ? T >= 9 : true;
    put(A, Lg, "sub", on("sub") && t1, X.subTop[0] - rx * 0.3, X.subTop[1] - ry * 0.02, n ? A.x + A.w * 0.3 : cx - rx * 0.35, A.y + LF() * 0.9, "皮下脂肪：捏得起来的一层", C2.fat[2]);
    put(A, Lg, "visc", on("visc") && t2, L[0], L[1], n ? A.x + A.w * 0.3 : cx + rx * 0.45, n ? A.y + LF() * 0.9 : cy + ry + LF() * 1.4, "内脏脂肪：裹在肠子、肝脏周围", "#b4541c");
    put(A, Lg, "release", on("release") && t3, mF[0], mF[1], n ? A.x + A.w * 0.55 : zx + zr * 1.3, n ? A.y + LF() * 0.9 : zy + zr * 1.2, n ? "脂肪酸、炎症因子多，脂联素少" : "不停往血里放脂肪酸和炎症因子", C2.ffa[2]);
    if (n) {
      txt("脂肪酸↑", mF[0] + ir * 0.5, mF[1] - ir * 1.6, fs * 0.9, C2.ffa[2], "center", 700);
      txt("炎症因子↑", mC[0], mC[1] + ir * 1.8, fs * 0.9, C2.cyto[2], "center", 700);
    }
  }

  // =================== 第 3 幕：胰岛素抵抗 ===================
  function betaCell(cx, cy, rx, ry, ir, vB, T) {
    const work = clamp(S.ins - 1, 0, 1);
    if (work > 0.03) {
      const gl = ctx.createRadialGradient(cx, cy, 0, cx, cy, rx * 1.7);
      gl.addColorStop(0, rgba(K.fire, (0.32 + 0.1 * Math.sin(time * 5)) * work)); gl.addColorStop(1, rgba(K.fire, 0));
      ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(cx, cy, rx * 1.7, 0, TAU); ctx.fill();
    }
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, TAU);
    ctx.fillStyle = glossy(cx - rx * 0.2, cy - ry * 0.1, Math.max(rx, ry), C2.beta[0], C2.beta[1]); ctx.fill();
    ctx.strokeStyle = K.memHead; ctx.lineWidth = Math.max(3, ir * 0.4); ctx.stroke();
    ctx.strokeStyle = C2.beta[2]; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx - rx * 0.12, cy + ry * 0.4, rx * 0.26, ry * 0.18, -0.2, 0, TAU); ctx.fillStyle = "rgba(60,50,80,0.22)"; ctx.fill();
    const gr = Math.min(ir * 0.62, rx * 0.16);
    [[-0.42, 0.05], [-0.12, -0.28], [0.22, -0.12], [0.42, 0.2], [0.05, 0.12], [-0.3, -0.52], [0.3, -0.5]].forEach((p, k) => {
      const x = cx + p[0] * rx, y = cy + p[1] * ry * 0.85 + Math.cos(time * 0.7 + k) * 1;
      ctx.beginPath(); ctx.arc(x, y, gr, 0, TAU); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); ctx.strokeStyle = K.memEdge; ctx.lineWidth = 1; ctx.stroke();
      mol("ins", x, y, gr * 0.55, 1, 0);
    });
    // 分泌：胰岛素一串串往上走进血管
    const nS = 2 + Math.round(3 * work), top = cy - ry;
    let rel = null;
    for (let k = 0; k < nS; k++) {
      const t = cyc(2.6 - work, k / nS), sx = cx + ((k % 3) - 1) * rx * 0.3;
      const y = lerp(top, vB, ease(t)), x = sx + Math.sin(t * 5 + k) * ir * 0.3;
      mol("ins", x, y, Math.max(5, ir * 0.56), clamp(t / 0.1, 0, 1) * clamp((1 - t) / 0.15, 0, 1), Math.sin(time + k) * 0.3);
      if (!rel && t > 0.3 && t < 0.7) rel = [x, y];
    }
    return { rel: rel || [cx, (top + vB) / 2] };
  }

  function scene2(A, Lg, live, T) {
    const n = nar(), on = onOf(2, live), fs = SF();
    const ir = Math.min(IR(), A.h * 0.07);
    const vT = A.y, vB = A.y + A.h * (n ? 0.25 : 0.27), ew = Math.max(4, (vB - vT) * 0.1);
    const yIn = vesselStrip(0, W, vT, vB, ew);
    if (!n) txt("血管", A.x + fs * 1.4, vT + ew + fs * 0.95, fs, K.soft, "center", 500);
    const cT = vB + A.h * 0.035, cB = A.y + A.h;
    const col = (a, b) => [A.x + A.w * a, A.x + A.w * b];
    const bc = col(0, n ? 0.23 : 0.21), mc = col(n ? 0.26 : 0.24, n ? 0.69 : 0.66), lc = col(n ? 0.72 : 0.69, 1);
    // β 细胞
    const brx = (bc[1] - bc[0]) * 0.42, bry = Math.min((cB - cT) * 0.36, brx * 1.15), bcy = cT + bry + 4 + (cB - cT) * 0.06;
    const Bt = betaCell((bc[0] + bc[1]) / 2, bcy, brx, bry, ir, vB - ew, T);
    txt(n ? "β 细胞" : "胰岛 β 细胞", (bc[0] + bc[1]) / 2, Math.min(bcy + bry + fs * 1.1, cB - fs * 0.4), fs, "#9a6a36", "center", 700);
    // 肌肉细胞
    const Ry = ir * 1.5, mt = Math.max(6, ir * 0.75), ym = cT + Ry * 1.4;
    const x0 = mc[0], x1 = mc[1], mw = x1 - x0, Hi = cB - ym;
    const cg = ctx.createLinearGradient(0, ym, 0, cB); cg.addColorStop(0, C2.cyto0); cg.addColorStop(1, C2.cyto1);
    ctx.beginPath(); ctx.roundRect(x0, ym, mw, cB - ym, Math.min(14, mw * 0.06)); ctx.fillStyle = cg; ctx.fill();
    ctx.strokeStyle = K.memEdge; ctx.lineWidth = 1; ctx.stroke();
    bilayer(x0 - mt * 0.2, x1 + mt * 0.2, ym, mt);
    // 肌原纤维
    const myT = ym + Hi * 0.74, myB = cB - Hi * 0.06, mh = myB - myT;
    if (mh > 6) {
      ctx.save(); ctx.beginPath(); ctx.rect(x0 + mt * 0.6, myT, mw * 0.66, mh); ctx.clip();
      ctx.fillStyle = "#fae4e6"; ctx.beginPath(); ctx.roundRect(x0 + mt * 0.6, myT, mw - mt * 1.2, mh, mh * 0.3); ctx.fill();
      const Ls = Math.max(20, mw / 8);
      for (let k = 0; k < 12; k++) { const zx = x0 + k * Ls; ctx.fillStyle = "#f0c3c8"; ctx.fillRect(zx + Ls * 0.22, myT + mh * 0.1, Ls * 0.56, mh * 0.8); ctx.strokeStyle = "#cf96a0"; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(zx, myT); ctx.lineTo(zx, myB); ctx.stroke(); }
      ctx.restore();
    }
    txt("肌肉细胞", x0 + mw * 0.84, cB - fs * 0.9, fs, "#a0606b", "center", 700);
    const RX = [0.2, 0.62], GX = [0.4, 0.84];
    const vY = ym + Hi * 0.42, vr = Math.max(8, ir * 0.95);
    const rg = Math.max(5, ir * 0.5), ri = Math.max(5.5, ir * 0.56);
    // 信号箭头 + ⊖
    let minusPt = null;
    RX.forEach((f, j) => {
      const x = x0 + mw * f, gx = x0 + mw * GX[j];
      const pts = [[x + Ry * 0.2, ym + Ry * 0.9], [(x + gx) / 2, vY + Hi * 0.12], [gx - vr * 1.3, vY]];
      const sp = arrow(pts, C2.ins[1], Math.max(2, ir * 0.18), 0.35 + 0.65 * (1 - S.ir * 0.6), "go");
      flow(sp, C2.ins[1], 2, Math.max(1.6, ir * 0.13), 1 - S.ir * 0.7, 0.3);
      const m = along(sp, 0.42);
      minusSign(m[0], m[1], Math.max(6, ir * 0.42), S.ir);
      if (j === 0) minusPt = m;
      // 干扰信号的脂肪酸和炎症因子
      mol("ffa", m[0] - ir * 1.1, m[1] + ir * 1.4 + Math.sin(time + j) * 1.5, ir * 0.62, S.ir, 0.3 + Math.sin(time * 0.7 + j) * 0.3);
      mol("cyto", m[0] + ir * 1.2, m[1] + ir * 1.3 + Math.cos(time + j) * 1.5, ir * 0.5, S.ir, time * 0.3);
    });
    // GLUT4 大多留在胞内囊泡里
    GX.forEach((f, i) => {
      const x = x0 + mw * f, up = i === 0 ? clamp(1 - S.ir, 0, 1) : 0;
      const y = lerp(vY, ym + mt, up) + Math.sin(time * 1.1 + i) * 1.2;
      ctx.beginPath(); ctx.arc(x, y, vr, 0, TAU); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill();
      ctx.strokeStyle = K.memHead; ctx.lineWidth = Math.max(2, vr * 0.28); ctx.stroke(); ctx.strokeStyle = K.memEdge; ctx.lineWidth = 1; ctx.stroke();
      mol("glut4", x, y, vr * 0.52, 1);
    });
    // 受体 + 胰岛素
    RX.forEach((f, j) => {
      const x = x0 + mw * f, yc = ym - Ry * 0.5;
      mol("insr", x, yc, Ry, 1, 0);
      mol("ins", x, yc - Ry * 0.6, ri, 1, Math.sin(time * 6 + j) * 0.3 * S.ir);
      for (let q = 0; q < 2; q++) mol("ins", x + (q ? 1 : -1) * Ry * 0.85, yc - Ry * (0.95 + 0.2 * q) - Math.abs(Math.sin(time * 1.7 + q + j)) * Ry * 0.2, ri, 0.85 * clamp(S.ins - 1, 0, 1), q);
    });
    // 门外排队的葡萄糖
    const nWait = Math.round(clamp((S.glu - 5.5) * 5, 0, 6));
    for (let k = 0; k < nWait; k++) {
      const x = x0 + mw * (0.08 + k / 6 * 0.88), y = vB + (ym - Ry * 1.3 - vB) * (0.35 + 0.5 * rnd(k + 800)) + Math.sin(time * 1.2 + k) * 1.5;
      if (Math.abs(x - (x0 + mw * RX[0])) < Ry * 1.2 || Math.abs(x - (x0 + mw * RX[1])) < Ry * 1.2) continue;
      mol("glu", x, y, rg, 0.85, k);
    }
    // 肝细胞：胰岛素本该让它少放糖（⊣），抵抗时照样往血里放
    const lcx = (lc[0] + lc[1]) / 2, lrx = (lc[1] - lc[0]) * 0.44;
    const lB = n ? cB : Math.min(cB, H - Lg.bh - 24 - fs * 1.2);
    const lry = Math.min((lB - cT) * 0.42, lrx * 1.1), lcy = cT + (lB - cT) * 0.5;
    hepato(lcx, lcy, lrx, lry, 0.25, 0.2);
    txt("肝细胞", lcx + lrx * 0.3, Math.min(lcy + lry + fs * 1.0, lB + fs * 0.6), fs, C2.hep[2], "center", 700);
    const inA = [[lcx - lrx * 0.55, vB + 2], [lcx - lrx * 0.5, lcy - lry * 0.85]];
    arrow(inA, C2.ins[1], Math.max(2, ir * 0.17), 0.8, "stop");
    minusSign(lcx - lrx * 0.52, (vB + lcy - lry * 0.85) / 2, Math.max(6, ir * 0.4), S.ir);
    const outA = arrow([[lcx + lrx * 0.3, lcy - lry * 0.55], [lcx + lrx * 0.35, vB + ir * 0.5]], C2.glu[1], Math.max(2, ir * 0.17), 0.85, "go");
    stream(outA, "glu", 3, rg, 1, 2.4);
    if (!n) txt("照样放糖", lcx + lrx * 0.42 + fs * 0.4, (vB + lcy - lry * 0.55) / 2, fs * 0.9, C2.glu[2], "left", 700);
    // 血管里：糖和胰岛素都偏多
    const nG = Math.round(clamp((S.glu - 4) * 6, 4, 22)), nI = Math.round(clamp(S.ins * 6, 3, 14));
    for (let i = 0; i < 3; i++) { const x = ((rnd(i + 300) + time * 0.04) % 1.2 - 0.1) * W; rbc(x, yIn(rnd(i + 320) * 1.4 - 0.7, ir * 0.6), Math.max(7, ir * 0.95)); }
    let gluPt = null;
    for (let i = 0; i < nG; i++) {
      const x = ((rnd(i + 10) + time * 0.045 * (0.8 + 0.4 * rnd(i + 150))) % 1.2 - 0.1) * W, y = yIn(rnd(i + 60) * 2 - 1, rg);
      mol("glu", x, y, rg, 0.95, time * 0.5 + i);
      if (!gluPt && x > A.x + A.w * 0.3 && x < A.x + A.w * 0.5) gluPt = [x, y];
    }
    for (let i = 0; i < nI; i++) {
      const x = ((rnd(i + 200) + time * 0.05 * (0.8 + 0.4 * rnd(i + 280))) % 1.2 - 0.1) * W;
      mol("ins", x, yIn(rnd(i + 230) * 2 - 1, ri) + Math.sin(time * 1.3 + i) * 1.5, ri, 1, Math.sin(time * 0.6 + i) * 0.4);
    }
    const gp = gluPt || [A.x + A.w * 0.4, (vT + vB) / 2];
    const t1 = n ? T < 4.5 : true, t2 = n ? T >= 4.5 && T < 9 : true, t3 = n ? T >= 9 : true;
    const upY = vT + (vB - vT) * 0.3;
    put(A, Lg, "resist", on("resist") && t1, minusPt[0], minusPt[1], n ? A.x + A.w * 0.5 : x0 + mw * 0.45, n ? cB - LF() * 0.9 : cB - LF() * 0.9 - fs * 1.2, "信号被干扰：胰岛素抵抗", K.red);
    put(A, Lg, "more", on("more") && t2, Bt.rel[0], Bt.rel[1], n ? A.x + A.w * 0.3 : A.x + A.w * 0.14, upY, "胰腺加班，胰岛素偏高", K.fire);
    put(A, Lg, "sugar", on("sugar") && t3, gp[0], gp[1], n ? A.x + A.w * 0.5 : A.x + A.w * 0.5, upY, "糖进不去细胞，血糖慢慢升高", C2.glu[2]);
  }

  // =================== 第 4 幕：血脂 ===================
  function scene3(A, Lg, live, T) {
    const n = nar(), on = onOf(3, live), fs = SF();
    const ir = Math.min(IR() * 0.85, A.h * 0.055);
    // 右侧血液
    const Bp = n ? { x: A.x + A.w * 0.66, y: A.y, w: A.w * 0.34, h: A.h } : { x: A.x + A.w * 0.66, y: A.y + 2, w: A.w * 0.34, h: A.h - Lg.bh - 22 };
    ctx.fillStyle = "#fcf8f0"; ctx.beginPath(); ctx.roundRect(Bp.x, Bp.y, Bp.w, Bp.h, 10); ctx.fill(); ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.stroke();
    txt("血液", Bp.x + fs * 0.7, Bp.y + fs * 0.95, fs, K.soft, "left", 700);
    // 指标（底部三行）
    const rowsH = n ? 0 : fs * 5.2;
    const inner = { x: Bp.x + 4, y: Bp.y + fs * 1.8, w: Bp.w - 8, h: Bp.h - fs * 1.8 - rowsH - 4 };
    if (!n) {
      const L3 = [["甘油三酯", "↑", C2.tgc[2]], ["HDL-C", "↓", C2.apoa1[2]], ["小而密 LDL", "↑", C2.apob[2]]];
      ctx.strokeStyle = "#ece4d4"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(Bp.x + 8, Bp.y + Bp.h - rowsH); ctx.lineTo(Bp.x + Bp.w - 8, Bp.y + Bp.h - rowsH); ctx.stroke();
      L3.forEach((r, k) => {
        const y = Bp.y + Bp.h - rowsH + fs * (1.0 + k * 1.5), a = clamp((T - 2.5 - k * 0.8) / 0.5, 0, 1);
        ctx.save(); ctx.globalAlpha *= 0.3 + 0.7 * a;
        txt(r[0], Bp.x + fs * 1.0, y, fs, K.ink, "left", 700); txt(r[1], Bp.x + Bp.w - fs * 1.4, y, fs * 1.3, r[2], "center", 700);
        ctx.restore();
      });
    }
    // 颗粒：VLDL 多、小而密 LDL 多、HDL 少
    const rv = Math.min(inner.w * 0.14, inner.h * 0.11), P = [];
    for (let i = 0; i < 4; i++) P.push(["vldl", rv, 0.2 + (i % 2) * 0.55, 0.12 + i * 0.22]);
    for (let i = 0; i < 6; i++) P.push(["sdl", rv * 0.42, 0.12 + rnd(i + 40) * 0.76, 0.1 + i * 0.15]);
    for (let i = 0; i < 2; i++) P.push(["hdl", rv * 0.4, 0.3 + i * 0.45, 0.5 + i * 0.3]);
    let vPick = null;
    P.forEach((p, k) => {
      const x = inner.x + inner.w * p[2] + Math.sin(time * 0.6 + k * 1.3) * inner.w * 0.04, y = inner.y + p[1] + (inner.h - p[1] * 2) * p[3] + Math.cos(time * 0.5 + k) * 2;
      const a = p[0] === "vldl" ? clamp(S.steat * 1.2 - k * 0.15, 0.2, 1) : 1;
      lp(x, y, p[1], p[0], a, k + time * 0.1);
      if (p[0] === "vldl" && k === 0) vPick = [x, y];
    });
    // 左下：内脏脂肪细胞
    const ar = n ? Math.min(A.w * 0.1, A.h * 0.15) : Math.min(A.w * 0.1, A.h * 0.19);
    const ax = A.x + ar * 1.25, ay = A.y + A.h - ar * (n ? 1.3 : 1.6) - fs * 1.2;
    adipocyte(ax, ay, ar, 0.7 * S.fat);
    cap("内脏脂肪", ax, ay + ar + fs * 0.95, C2.fat[2]);
    // 中间：肝细胞
    const lrx = A.w * (n ? 0.17 : 0.155), lry = A.h * (n ? 0.3 : 0.33);
    const lcx = A.x + A.w * (n ? 0.42 : 0.42), lcy = A.y + A.h * (n ? 0.36 : 0.38);
    // 门静脉：从脂肪细胞弯到肝细胞
    const vw = Math.max(8, ir * 1.1);
    const vp = [[ax + ar * 0.5, ay - ar * 0.85], [ax + ar * 0.8, lcy + lry * 0.2], [lcx - lrx * 0.95, lcy + lry * 0.35]];
    const vs = sample(vp, 40);
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    for (const q of [[C2.vein[2], vw + 2], [C2.vein[1], vw], [C2.vein[0], vw * 0.45]]) {
      ctx.strokeStyle = q[0]; ctx.lineWidth = q[1]; ctx.beginPath(); vs.forEach((p, k) => (k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
    }
    const vm = along(vs, 0.45);
    if (!n) { ctx.save(); ctx.translate(vm[0] - vw * 1.4, vm[1]); ctx.rotate(vm[2]); txt("门静脉", 0, 0, fs * 0.9, C2.vein[2], "center", 700); ctx.restore(); }
    const H0 = hepato(lcx, lcy, lrx, lry, S.steat, 0.5);
    txt("肝细胞", lcx - lrx * 0.25, lcy - lry * 0.72, fs, C2.hep[2], "center", 700);
    stream(vs, "ffa", 6, ir * 0.75, 1, 3.4);
    // 肝内：脂肪酸 → 甘油三酯 → 脂滴 / VLDL
    const inP = [[lcx - lrx * 0.9, lcy + lry * 0.35], [lcx - lrx * 0.3, lcy + lry * 0.05], [lcx + lrx * 0.15, lcy - lry * 0.05]];
    const s1 = sample(inP, 20);
    for (let i = 0; i < 3; i++) {
      const t = cyc(3, i / 3), p = along(s1, t), a = Math.sin(t * Math.PI);
      mol(t < 0.5 ? "ffa" : "tg", p[0], p[1], ir * (t < 0.5 ? 0.7 : 0.6), a, 0);
    }
    // VLDL 出肝进血
    const outP = [[lcx + lrx * 0.55, lcy - lry * 0.15], [lcx + lrx * 1.25, lcy - lry * 0.25], [Bp.x + Bp.w * 0.25, lcy - lry * 0.2]];
    const so = arrow(outP, C2.tgc[1], Math.max(2, H * 0.005), 0.75, "go");
    let vOut = null;
    for (let i = 0; i < 2; i++) {
      const t = cyc(4, i / 2), p = along(so, t);
      lp(p[0], p[1], rv * 0.75, "vldl", clamp(t / 0.1, 0, 1) * clamp((1 - t) / 0.1, 0, 1), t * 2);
      if (!vOut && t > 0.25 && t < 0.75) vOut = p;
    }
    const dp = H0.drops.length ? H0.drops[0] : [lcx, lcy, 4];
    const t1 = n ? T < 4.5 : true, t2 = n ? T >= 4.5 && T < 9 : true, t3 = n ? T >= 9 : true;
    const vp2 = along(vs, 0.3), tall = tallA(A), tY = tall ? A.y + LF() * 0.9 : A.y + A.h - LF() * 0.9;
    put(A, Lg, "portal", on("portal") && t1, vp2[0], vp2[1], n ? A.x + A.w * 0.33 : A.x + A.w * 0.14, n ? tY : A.y + A.h * 0.28, n ? "脂肪酸经门静脉涌进肝脏" : "游离脂肪酸经门静脉涌进肝脏", C2.ffa[2]);
    put(A, Lg, "nafld", on("nafld") && t2, dp[0], dp[1], n ? A.x + A.w * 0.33 : lcx + lrx * 0.3, n ? tY : lcy + lry + LF() * 1.3, "脂肪堆在肝里：脂肪肝", C2.fat[2]);
    const vq = vOut || vPick;
    put(A, Lg, "vldl", on("vldl") && t3, vq[0], vq[1], n ? A.x + A.w * 0.4 : Bp.x + Bp.w * 0.62, n ? tY : A.y + LF() * 0.8, "多产 VLDL，甘油三酯升高", C2.tgc[2]);
  }

  // =================== 第 5 幕：血压 + 风险叠加 ===================
  function mechKidney(P, ir, T) {
    TB.panel(P, 8);
    const fs = SF(), top = P.y + fs * 1.5;
    txt(nar() ? "① 肾：留钠留水" : "① 肾小管：多留钠、多留水", P.x + fs * 0.6, P.y + fs * 0.85, fs, K.ink, "left", 700);
    const cy0 = top + (P.y + P.h - top) * 0.25, ty0 = top + (P.y + P.h - top) * 0.72, hh = (P.y + P.h - top) * 0.2;
    ctx.fillStyle = C2.lumen1; ctx.beginPath(); ctx.roundRect(P.x + 6, cy0 - hh * 0.7, P.w - 12, hh * 1.4, hh * 0.7); ctx.fill(); ctx.strokeStyle = C2.endo[2]; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = C2.tube[1]; ctx.beginPath(); ctx.roundRect(P.x + 6, ty0 - hh, P.w - 12, hh * 2, hh); ctx.fill(); ctx.strokeStyle = C2.tube[2]; ctx.stroke();
    ctx.fillStyle = C2.tube[0]; ctx.beginPath(); ctx.roundRect(P.x + 10, ty0 - hh * 0.45, P.w - 20, hh * 0.9, hh * 0.45); ctx.fill();
    if (P.w > 150) { txt("血液", P.x + P.w - fs * 1.8, cy0, fs * 0.85, C2.rbc[2], "center", 500); txt("尿液", P.x + P.w - fs * 1.8, ty0, fs * 0.85, C2.tube[2], "center", 500); }
    const r = Math.max(4, Math.min(ir * 0.55, hh * 0.45));
    for (let i = 0; i < 4; i++) {
      const t = cyc(2.6, i / 4), x = P.x + P.w * (0.14 + i * 0.18);
      const y = lerp(ty0, cy0, ease(t));
      mol("na", x, y, r, clamp(t / 0.1, 0, 1) * clamp((1 - t) / 0.12, 0, 1), 0);
      drop(x + r * 1.7, lerp(ty0, cy0, ease(clamp(t - 0.12, 0, 1))), r * 0.85, clamp((t - 0.12) / 0.1, 0, 1) * clamp((1 - t) / 0.12, 0, 1));
    }
    return [P.x + P.w, (P.y + P.h + top) / 2];
  }
  function mechNerve(P, ir, T) {
    TB.panel(P, 8);
    const fs = SF(), top = P.y + fs * 1.5;
    txt("② 交感神经兴奋", P.x + fs * 0.6, P.y + fs * 0.85, fs, K.ink, "left", 700);
    const ny = top + (P.y + P.h - top) * 0.22, x0 = P.x + 8, x1 = P.x + P.w * 0.62;
    ctx.strokeStyle = C2.nerve[2]; ctx.lineWidth = Math.max(3, ir * 0.35) + 2; ctx.lineCap = "round";
    ctx.beginPath(); for (let x = x0; x <= x1; x += 3) { const y = ny + Math.sin(x * 0.08) * 2; if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y); } ctx.stroke();
    ctx.strokeStyle = C2.nerve[1]; ctx.lineWidth = Math.max(3, ir * 0.35); ctx.stroke();
    const fire = 0.5 + 0.5 * Math.sin(time * 7);
    bolt(x0 + (x1 - x0) * 0.3, ny - ir * 0.2, Math.max(6, ir * 0.7), 0.6 + 0.4 * fire);
    // 小动脉横截面：一收一收
    const vx = P.x + P.w * 0.78, vy = top + (P.y + P.h - top) * 0.52, R = Math.min((P.y + P.h - top) * 0.42, P.w * 0.18);
    const sq = 0.7 - 0.1 * fire * S.ir;
    ctx.beginPath(); ctx.arc(vx, vy, R, 0, TAU); ctx.fillStyle = glossy(vx, vy, R, C2.smc[0], C2.smc[1]); ctx.fill(); ctx.strokeStyle = C2.smc[2]; ctx.lineWidth = 1; ctx.stroke();
    for (let k = 0; k < 8; k++) { const a = k / 8 * TAU + 0.2; ctx.beginPath(); ctx.ellipse(vx + Math.cos(a) * R * 0.78, vy + Math.sin(a) * R * 0.78, R * 0.2, R * 0.07, a + Math.PI / 2, 0, TAU); ctx.fillStyle = rgba(C2.smc[2], 0.35); ctx.fill(); }
    ctx.beginPath(); ctx.arc(vx, vy, R * sq * 0.6, 0, TAU); ctx.fillStyle = C2.lumen1; ctx.fill(); ctx.strokeStyle = C2.endo[2]; ctx.stroke();
    const sp = arrow([[x1, ny], [vx - R * 0.4, ny], [vx - R * 0.5, vy - R * 0.85]], C2.nerve[2], Math.max(1.6, ir * 0.14), 0.8, "go");
    flow(sp, C2.nerve[2], 2, Math.max(1.5, ir * 0.12), 1, 0.5);
    if (P.w > 150) txt("血管收紧", (P.x + vx - R) / 2, vy + R * 0.3, fs * 0.85, K.soft, "center", 500);
    return [P.x + P.w, (P.y + P.h + top) / 2];
  }
  function mechEndo(P, ir, T) {
    TB.panel(P, 8);
    const fs = SF(), top = P.y + fs * 1.5;
    txt(nar() ? "③ 内皮：舒张变差" : "③ 血管内皮：舒张变差", P.x + fs * 0.6, P.y + fs * 0.85, fs, K.ink, "left", 700);
    const ey = top + (P.y + P.h - top) * 0.2, eh = Math.max(5, (P.y + P.h - top) * 0.14);
    const cw = Math.max(24, (P.w - 12) / 5);
    ctx.fillStyle = C2.lumen0; ctx.fillRect(P.x + 6, top, P.w - 12, ey - top);
    for (let x = P.x + 6; x < P.x + P.w - 8; x += cw) {
      const w = Math.min(cw - 2, P.x + P.w - 6 - x);
      ctx.beginPath(); ctx.roundRect(x, ey, w, eh, eh / 2); ctx.fillStyle = glossy(x + w * 0.4, ey, w * 0.6, C2.endo[0], C2.endo[1]); ctx.fill(); ctx.strokeStyle = C2.endo[2]; ctx.lineWidth = 1; ctx.stroke();
    }
    const my = ey + eh + 3, mh = P.y + P.h - 6 - my;
    ctx.fillStyle = C2.media; ctx.fillRect(P.x + 6, my, P.w - 12, mh);
    for (let x = P.x + 6 + cw * 0.5; x < P.x + P.w - 8; x += cw * 0.9) {
      ctx.beginPath(); ctx.ellipse(x, my + mh * 0.5, cw * 0.4, Math.min(mh * 0.28, cw * 0.1), 0, 0, TAU); ctx.fillStyle = glossy(x, my + mh * 0.5, cw * 0.4, C2.smc[0], C2.smc[1]); ctx.fill(); ctx.strokeStyle = rgba(C2.smc[2], 0.6); ctx.stroke();
    }
    const s = Math.max(4, Math.min(ir * 0.5, mh * 0.26));
    for (let i = 0; i < 4; i++) {
      const t = cyc(2.4, i / 4), x = P.x + P.w * (0.15 + i * 0.22);
      noMol(x, lerp(ey + eh, my + mh * 0.5, t), s, (i < 1 ? 1 : 1 - 0.8 * S.ir) * Math.sin(t * Math.PI));
    }
    minusSign(P.x + P.w * 0.84, ey + eh * 0.5, Math.max(6, ir * 0.4), S.ir);
    if (P.w > 150) txt("一氧化氮变少", P.x + P.w * 0.84, my + mh * 0.62, fs * 0.85, "#3b6f99", "center", 500);
    return [P.x + P.w, (P.y + P.h + top) / 2];
  }

  function scene4(A, Lg, live, T) {
    const n = nar(), on = onOf(4, live), fs = SF();
    const ir = Math.min(IR(), A.h * 0.06);
    const lw = A.w * (n ? 0.44 : 0.33), gap = A.h * 0.03, ph = (A.h - gap * 2) / 3;
    const ends = [
      mechKidney({ x: A.x, y: A.y, w: lw, h: ph }, ir, T),
      mechNerve({ x: A.x, y: A.y + ph + gap, w: lw, h: ph }, ir, T),
      mechEndo({ x: A.x, y: A.y + (ph + gap) * 2, w: lw, h: ph }, ir, T),
    ];
    // 右侧：动脉纵切面
    const rx0 = A.x + lw + A.w * (n ? 0.05 : 0.06);
    const stackH = n ? fs * 4.6 : fs * 3.2;
    const R = { x: rx0, y: A.y, w: A.x + A.w - rx0, h: (n ? A.h : A.h - Lg.bh - 16) - stackH };
    const Rw = n ? R : { x: R.x, y: R.y, w: R.w, h: R.h };
    ctx.save(); ctx.beginPath(); ctx.roundRect(Rw.x, Rw.y, Rw.w, Rw.h, 10); ctx.clip();
    const wall = Rw.h * (0.17 + 0.07 * S.stiff), beat = Math.pow(0.5 + 0.5 * Math.sin(time * 5.2), 3);
    const lT = Rw.y + wall, lB = Rw.y + Rw.h - wall;
    [[Rw.y, lT], [lB, Rw.y + Rw.h]].forEach((b, k) => {
      ctx.fillStyle = C2.media; ctx.fillRect(Rw.x, b[0], Rw.w, b[1] - b[0]);
      const sw = Math.max(22, Rw.w / 9), hh = Math.min((b[1] - b[0]) * 0.14, sw * 0.14);
      for (let row = 0; row < 2; row++) for (let x = Rw.x - (row ? sw / 2 : 0); x < Rw.x + Rw.w + sw; x += sw) {
        const yy = b[0] + (b[1] - b[0]) * (row ? 0.62 : 0.3) + (k ? 0.05 : -0.05) * (b[1] - b[0]);
        ctx.beginPath(); ctx.ellipse(x, yy, sw * 0.44, hh, 0, 0, TAU); ctx.fillStyle = glossy(x, yy, sw * 0.4, C2.smc[0], C2.smc[1]); ctx.fill(); ctx.strokeStyle = rgba(C2.smc[2], 0.55); ctx.lineWidth = 1; ctx.stroke();
      }
    });
    const lg = ctx.createLinearGradient(0, lT, 0, lB); lg.addColorStop(0, C2.lumen0); lg.addColorStop(1, C2.lumen1);
    ctx.fillStyle = lg; ctx.fillRect(Rw.x, lT, Rw.w, lB - lT);
    // 内皮
    const ew = Math.max(4, wall * 0.14);
    for (const y of [lT - ew, lB]) {
      const L = Math.max(28, Rw.w / 10);
      for (let x = Rw.x; x < Rw.x + Rw.w; x += L) { ctx.beginPath(); ctx.roundRect(x + 1, y, L - 2, ew, ew / 2); ctx.fillStyle = glossy(x + L * 0.4, y, L * 0.6, C2.endo[0], C2.endo[1]); ctx.fill(); ctx.strokeStyle = C2.endo[2]; ctx.lineWidth = 1; ctx.stroke(); }
    }
    // 下壁斑块
    const px = Rw.x + Rw.w * 0.62, pw = Rw.w * 0.16, pa = (lB - lT) * 0.28 * S.stiff;
    if (pa > 2) {
      ctx.beginPath(); ctx.moveTo(px - pw * 1.6, lB + 1);
      for (let x = px - pw * 1.6; x <= px + pw * 1.6; x += 3) ctx.lineTo(x, lB + 1 - pa * Math.exp(-Math.pow((x - px) / pw, 2)));
      ctx.lineTo(px + pw * 1.6, lB + 1); ctx.closePath();
      ctx.fillStyle = glossy(px, lB - pa * 0.5, pw, "#fff6d2", "#efcd6c"); ctx.fill(); ctx.strokeStyle = "#c29a3c"; ctx.lineWidth = 1.2; ctx.stroke();
      ctx.strokeStyle = C2.endo[1]; ctx.lineWidth = ew * 0.8; ctx.beginPath();
      for (let x = px - pw * 1.6; x <= px + pw * 1.6; x += 3) { const y = lB + 1 - pa * Math.exp(-Math.pow((x - px) / pw, 2)) - ew * 0.4; if (x === px - pw * 1.6) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
      ctx.stroke();
    }
    // 血流：红细胞、糖、小而密 LDL
    const mid = (lT + lB) / 2, half = (lB - lT) / 2;
    const rr = Math.max(6, Math.min(ir * 0.95, half * 0.28));
    for (let i = 0; i < 5; i++) { const x = Rw.x + ((rnd(i + 400) + time * 0.06) % 1) * Rw.w; rbc(x, mid + (rnd(i + 410) - 0.5) * half * 1.1, rr); }
    for (let i = 0; i < 5; i++) { const x = Rw.x + ((rnd(i + 430) + time * 0.05) % 1) * Rw.w; mol("glu", x, mid + (rnd(i + 440) - 0.5) * half * 1.3, rr * 0.55, 0.9, time * 0.5 + i); }
    for (let i = 0; i < 3; i++) { const x = Rw.x + ((rnd(i + 460) + time * 0.045) % 1) * Rw.w; lp(x, mid + (rnd(i + 470) - 0.5) * half * 1.2, rr * 0.6, "sdl", 1, i); }
    // 压力箭头：从腔内往两侧管壁推
    const pr = [];
    [0.15, 0.38].forEach((f) => {
      const x = Rw.x + Rw.w * f, L = half * (0.45 + 0.25 * beat);
      for (const d of [-1, 1]) {
        const y0 = mid + d * half * 0.2, y1 = mid + d * (half * 0.2 + L);
        arrow([[x, y0], [x, y1]], C2.hot, Math.max(2.4, ir * 0.24), 0.65 + 0.35 * beat, "go");
        if (d < 0) pr.push([x, y1]);
      }
    });
    ctx.restore();
    ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(Rw.x, Rw.y, Rw.w, Rw.h, 10); ctx.stroke();
    if (!n) txt("动脉（纵切面）", Rw.x + Rw.w - fs * 0.6, Rw.y + fs * 0.9, fs, K.soft, "right", 500);
    // 三个机制汇到动脉
    ends.forEach((e, k) => {
      const ty = Rw.y + Rw.h * (0.3 + k * 0.2);
      const sp = arrow([[e[0] + 4, e[1]], [(e[0] + Rw.x) / 2, (e[1] + ty) / 2], [Rw.x - 6, ty]], C2.hot, Math.max(2, ir * 0.17), 0.7, "go");
      flow(sp, C2.hot, 1, Math.max(1.6, ir * 0.13), 1, 0.4 + k * 0.05);
    });
    // 风险叠加：三块积木一块块摞起来
    const sy = Rw.y + Rw.h + (n ? fs * 0.6 : fs * 0.5), items = [["高血糖", C2.glu], ["血脂异常", C2.tgc], ["高血压", ["#fde6d6", C2.hot, "#a9481a"]]];
    TB.font(fs, 700);
    const tw0 = items.reduce((a, it) => a + ctx.measureText(it[0]).width + fs * 1.2, 0) + fs * 2.2;
    const kf = clamp(Rw.w / tw0, 0.72, 1), cf = fs * kf;
    const bh = cf * 1.7;
    TB.font(cf, 700);
    const ws = items.map((it) => ctx.measureText(it[0]).width + cf * 1.2);
    const plusW = cf * 1.1;
    let x = Rw.x;
    const rows2 = n;
    let risk = null;
    items.forEach((it, k) => {
      const a = clamp((T - 2 - k * 0.9) / 0.5, 0, 1);
      if (a < 0.02) { x += ws[k] + plusW; return; }
      ctx.save(); ctx.globalAlpha *= a;
      const yy = sy + (1 - ease(a)) * -fs;
      ctx.beginPath(); ctx.roundRect(x, yy, ws[k], bh, 6); ctx.fillStyle = glossy(x + ws[k] * 0.3, yy, ws[k], it[1][0], shade(it[1][1], "#ffffff", 0.35)); ctx.fill(); ctx.strokeStyle = it[1][2]; ctx.lineWidth = 1; ctx.stroke();
      txt(it[0], x + ws[k] / 2, yy + bh / 2 + 0.5, cf, "#2f3a55", "center", 700);
      if (k < 2) txt("+", x + ws[k] + plusW / 2, yy + bh / 2, cf * 1.2, K.soft, "center", 700);
      ctx.restore();
      x += ws[k] + plusW;
    });
    const ra = clamp((T - 4.8) / 0.6, 0, 1);
    if (!rows2 && ra > 0.02) {
      ctx.save(); ctx.globalAlpha *= ra;
      txt("→ 一起伤血管", x - plusW + fs * 0.4, sy + bh / 2, fs, "#a9481a", "left", 700);
      ctx.restore();
    }
    risk = [px, lB - pa * 0.6];
    const ta = n ? T < 6.5 : true, tb = n ? T >= 6.5 : true;
    const p0 = pr[0];
    put(A, Lg, "bp", on("bp") && ta, p0[0], p0[1], n ? A.x + A.w * 0.72 : Rw.x + Rw.w * 0.3, n ? A.y + LF() * 0.9 : Rw.y + wall * 0.5, "血压升高，管壁长期受压", "#a9481a");
    put(A, Lg, "risk", on("risk") && tb, risk[0], risk[1], n ? A.x + A.w * 0.72 : Rw.x + Rw.w * 0.72, n ? A.y + LF() * 0.9 : Rw.y + wall * 0.5, "心梗、中风风险叠加", K.red);
  }

  // =================== 第 6 幕：一起改善 ===================
  const GAUGES = [
    { k: "waist", name: "腰围", min: 70, max: 110, thr: 90, hi: true, fmt: (v) => v.toFixed(0) + " cm", tl: "90" },
    { k: "glu", name: "空腹血糖", min: 4, max: 8, thr: 6.1, hi: true, fmt: (v) => v.toFixed(1), tl: "6.1" },
    { k: "sbp", name: "血压", min: 100, max: 160, thr: 130, hi: true, fmt: (v, d) => Math.round(v) + "/" + Math.round(d), tl: "130" },
    { k: "tg", name: "甘油三酯", min: 0.5, max: 3, thr: 1.7, hi: true, fmt: (v) => v.toFixed(1), tl: "1.70" },
    { k: "hdl", name: "HDL-C", min: 0.6, max: 1.6, thr: 1.04, hi: false, fmt: (v) => v.toFixed(2), tl: "1.04" },
  ];
  function lifeIcon(k, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.lineCap = "round"; ctx.lineJoin = "round";
    const ink = K.ink, lw = Math.max(1.2, s * 0.09);
    if (k === 0) tapeIcon(0, 0, s * 0.85);
    else if (k === 1) { // 含糖饮料杯 + 禁止
      ctx.beginPath(); ctx.moveTo(-s * 0.45, -s * 0.6); ctx.lineTo(s * 0.45, -s * 0.6); ctx.lineTo(s * 0.33, s * 0.7); ctx.lineTo(-s * 0.33, s * 0.7); ctx.closePath();
      ctx.fillStyle = glossy(0, 0, s, "#fff1e0", "#f2b36e"); ctx.fill(); ctx.strokeStyle = "#a86a26"; ctx.lineWidth = lw; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(s * 0.1, -s * 0.6); ctx.lineTo(s * 0.3, -s * 0.95); ctx.stroke();
      noSign(s * 0.45, s * 0.35, s * 0.4, 1);
    } else if (k === 2) { // 哑铃 + 跑步小箭头
      ctx.strokeStyle = ink; ctx.lineWidth = lw * 1.6; ctx.beginPath(); ctx.moveTo(-s * 0.55, 0); ctx.lineTo(s * 0.55, 0); ctx.stroke();
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.roundRect(d * s * 0.62 - s * 0.14, -s * 0.42, s * 0.28, s * 0.84, s * 0.08); ctx.fillStyle = glossy(d * s * 0.62, 0, s * 0.4, "#dfe6f7", "#8fa0c8"); ctx.fill(); ctx.strokeStyle = "#4f5f88"; ctx.lineWidth = lw; ctx.stroke(); }
    } else if (k === 3) { // 月亮
      ctx.beginPath(); ctx.arc(0, 0, s * 0.62, 0, TAU); ctx.fillStyle = glossy(0, 0, s * 0.6, "#fff4c8", "#e8c34a"); ctx.fill(); ctx.strokeStyle = "#a88410"; ctx.lineWidth = lw; ctx.stroke();
      ctx.beginPath(); ctx.arc(s * 0.32, -s * 0.2, s * 0.5, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill();
      txt("z", s * 0.5, -s * 0.5, s * 0.5, K.soft, "center", 700);
    } else if (k === 4) { // 香烟 + 禁止
      ctx.beginPath(); ctx.roundRect(-s * 0.8, -s * 0.33, s * 1.3, s * 0.3, s * 0.06); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = "#8a93a8"; ctx.lineWidth = lw; ctx.stroke();
      ctx.beginPath(); ctx.roundRect(-s * 0.8, -s * 0.33, s * 0.4, s * 0.3, s * 0.06); ctx.fillStyle = "#f0b46e"; ctx.fill(); ctx.stroke();
      noSign(s * 0.45, s * 0.35, s * 0.4, 1);
    } else { // 药片（中性灰，不指定药物）
      ctx.save(); ctx.rotate(-0.5);
      ctx.beginPath(); ctx.roundRect(-s * 0.6, -s * 0.28, s * 1.2, s * 0.56, s * 0.28); ctx.fillStyle = glossy(0, 0, s * 0.6, "#ffffff", "#d7dce8"); ctx.fill(); ctx.strokeStyle = "#6c7893"; ctx.lineWidth = lw; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, -s * 0.28); ctx.lineTo(0, s * 0.28); ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
  }
  function scene5(A, Lg, live, T) {
    const n = nar(), on = onOf(5, live), fs = SF();
    const ir = Math.min(IR() * 0.8, A.h * 0.05);
    const topH = A.h * (n ? 0.62 : 0.64);
    const pg = live ? ease(clamp((T - 0.8) / 5, 0, 1)) : 1;
    const val = (k) => lerp(CH[4][k], CH[5][k], pg);
    // 左：变小的脂肪细胞（窄屏省略）
    let cellPt = null;
    const gx0 = n ? A.x : A.x + A.w * 0.3;
    if (!n) {
      const cx = A.x + A.w * 0.13, cy = A.y + topH * 0.48, r0 = Math.min(A.w * 0.1, topH * 0.3), r = r0 * (0.62 + 0.38 * val("fat"));
      ctx.beginPath(); ctx.arc(cx, cy, r0, 0, TAU); ctx.setLineDash([4, 4]); ctx.strokeStyle = rgba(K.leader, 0.6); ctx.lineWidth = 1; ctx.stroke(); ctx.setLineDash([]);
      adipocyte(cx, cy, r, 0);
      for (let i = 0; i < 4; i++) {
        const a = i / 4 * TAU + time * 0.25, d = r0 * 1.25;
        mol("adipo", cx + Math.cos(a) * d, cy + Math.sin(a) * d * 0.85, ir * 0.85, clamp((1 - val("fat")) * 1.6 - i * 0.2, 0, 1), a);
      }
      mol("ffa", cx + r0 * 1.05, cy - r0 * 0.9, ir * 0.8, clamp(val("fat"), 0, 1), 0.3);
      cap("脂肪细胞变小", cx, cy + r0 * 1.45 + fs * 0.4, C2.fat[2]);
      txt("脂联素 ↑", cx - r0 * 0.95, cy + r0 * 1.15, fs, C2.adipo[2], "center", 700);
      cellPt = [cx + r * 0.5, cy - r * 0.5];
    }
    // 右：五项指标
    const G = { x: gx0, y: A.y, w: A.x + A.w - gx0, h: topH };
    TB.panel(G, 10);
    const rh = G.h / 5, nameW = fs * (n ? 4.6 : 5.2), valW = fs * (n ? 4.4 : 5.2);
    const bx = G.x + nameW + fs * 0.4, bw = G.w - nameW - valW - fs * 1.2, bh = Math.max(6, Math.min(rh * 0.28, fs * 0.8));
    let firstBar = null, wBar = null;
    GAUGES.forEach((g, k) => {
      const y = G.y + rh * (k + 0.5), v = val(g.k);
      const u = (x) => clamp((x - g.min) / (g.max - g.min), 0, 1);
      txt(g.name, G.x + fs * 0.7, y, fs, K.ink, "left", 700);
      ctx.fillStyle = "#fbe6d6"; ctx.beginPath(); ctx.roundRect(bx, y - bh / 2, bw, bh, bh / 2); ctx.fill();
      const ts = bx + bw * u(g.thr);
      ctx.fillStyle = "#d7efdc";
      ctx.beginPath(); if (g.hi) ctx.roundRect(bx, y - bh / 2, ts - bx, bh, bh / 2); else ctx.roundRect(ts, y - bh / 2, bx + bw - ts, bh, bh / 2); ctx.fill();
      ctx.strokeStyle = K.ink; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(ts, y - bh * 0.9); ctx.lineTo(ts, y + bh * 0.9); ctx.stroke();
      txt(g.tl, ts, y - bh / 2 - fs * 0.62, fs * 0.8, K.soft, "center", 500);
      const good = g.hi ? v < g.thr : v >= g.thr, col = good ? C2.ok : C2.warn;
      const mx = bx + bw * u(v), mr = Math.max(4.5, bh * 0.75);
      ctx.beginPath(); ctx.arc(mx, y, mr, 0, TAU); ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.5; ctx.stroke();
      txt(g.fmt(v, val("dbp")), G.x + G.w - fs * 0.6, y, fs, col, "right", 700);
      if (k === 0) wBar = [mx, y];
      if (k === 2) firstBar = [mx, y];
    });
    // 下：生活方式
    const Ly = A.y + topH + A.h * 0.03, Lh = A.y + A.h - Ly;
    const Lw = n ? A.w : A.w - Lg.bw - 20;
    const labs = n ? ["量腰围", "少甜少精米面", "有氧+力量", "睡够", "戒烟限酒", "按医嘱用药"] : ["量腰围", "少吃精制米面、含糖饮料", "有氧 + 力量", "睡够觉", "戒烟限酒", "按医嘱用药"];
    const cols = n ? 3 : 6, rowsN = n ? 2 : 1;
    const cw = Lw / cols, chh = Lh / rowsN;
    labs.forEach((l, k) => {
      const c = k % cols, r = Math.floor(k / cols);
      const a = clamp((T - 1 - k * 0.5) / 0.5, 0, 1);
      if (a < 0.02) return;
      ctx.save(); ctx.globalAlpha *= a;
      const x = A.x + cw * (c + 0.5), yI = Ly + chh * r + chh * (n ? 0.32 : 0.36), s = Math.min(chh * (n ? 0.34 : 0.3), cw * (n ? 0.14 : 0.22));
      if (n) {
        lifeIcon(k, A.x + cw * c + s * 1.3, Ly + chh * (r + 0.5), s);
        txt(l, A.x + cw * c + s * 2.6, Ly + chh * (r + 0.5), fs * 0.92, K.ink, "left", 500);
      } else {
        ctx.beginPath(); ctx.arc(x, yI, s * 1.35, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.stroke();
        lifeIcon(k, x, yI, s);
        const words = l.split("、");
        words.forEach((w, j) => txt(w + (j < words.length - 1 ? "、" : ""), x, yI + s * 1.35 + fs * (0.95 + j * 1.25), fs, K.ink, "center", 500));
      }
      ctx.restore();
    });
    const ta = n ? T < 6.5 : true, tb = n ? T >= 6.5 : true;
    const lp0 = cellPt || wBar;
    put(A, Lg, "loss", on("loss") && ta, lp0[0], lp0[1], n ? A.x + A.w * 0.5 : A.x + A.w * 0.16, n ? A.y + topH + LF() * 0.2 : A.y + LF() * 0.9, "减重 5%～10%，内脏脂肪先变少", C2.ok);
    put(A, Lg, "together", on("together") && tb, firstBar[0], firstBar[1], n ? A.x + A.w * 0.5 : G.x + G.w * 0.6, n ? A.y + topH + LF() * 0.2 : A.y + topH + LF() * 0.1, "几项指标一起好转", C2.ok);
  }

  function drawScene(i, live, T) {
    const L = areaFor(i), A = L.A, Lg = L.Lg;
    [scene0, scene1, scene2, scene3, scene4, scene5][i](A, Lg, live, T);
    legend(Lg);
  }

  function hud() {
    const v = waistNow();
    pill(14, 12, "腰围", waistStr(), v >= 90 ? C2.warn : C2.ok, false);
    const p = pillOf(cur);
    pill(W - 14, 12, p[0], p[1], p[2] === "ok" ? C2.ok : p[2] === "warn" ? C2.warn : K.red, true);
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
    chapters: CH, state: S, dur: DUR, accent: "#c8702e",
    titleCard: { lines: ["三高为什么", "爱结伴？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
