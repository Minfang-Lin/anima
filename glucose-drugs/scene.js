// 降糖药是怎么起作用的：教科书示意图画风（机制类集），通用画法见 shared/textbook.js。
// 第 1 幕是全身“阀门”总图，后面每幕放大一个阀门：肝细胞（双胍类）、肾小管（SGLT2 抑制剂）、
// GLP-1 受体（GLP-1 受体激动剂）、血管里的 DPP-4 酶（DPP-4 抑制剂）、胰岛 β 细胞（促泌剂）和胰岛素笔、用药原则。
// 每类药一个固定颜色的胶囊图标，全集一致；阻断转运体 / 酶的药带堵头（plug），并配 ⊘。
Anima.register("glucose-drugs", {
    "title": "降糖药是怎么起作用的",
    "tag": "血糖小剧场",
    "headline": "降糖药各拧哪个【阀门】？",
    "lede": "血糖像水池的水位，由肝脏、肾脏、胰岛、肠道、肌肉和大脑几个“阀门”一起管着。双胍类、SGLT2 抑制剂、GLP-1 受体激动剂、DPP-4 抑制剂、促泌剂和胰岛素，拧的是不同的阀门。",
    "summary": "常用降糖药怎样起作用：双胍类、SGLT2 抑制剂、GLP-1 受体激动剂、DPP-4 抑制剂、磺脲类和胰岛素，常见副作用、低血糖风险和用药原则。",
    "footer": "用药方案请遵医嘱，不要自行调整；到内分泌科定期随访。",
    "canvasLabel": "降糖药作用机制示意图：肝脏、肾小管、GLP-1 受体、DPP-4 酶和胰岛 β 细胞",
    "disease": "2 型糖尿病",
    "organs": ["pancreas", "kidney", "liver"],
    "categories": ["metabolic"],
    "color": "#7c9a32",
    "look": "textbook"
  }, () => {
  const CH = [
    { title: "血糖由几个“阀门”管着", glu: 8.6, gs: "warn", pill: ["阀门", "六个", "ok"],
      text: "血糖像水池里的水位，由好几个阀门一起管着：肠道把吃进的糖吸收进来，肝脏也会往血里放糖；胰岛分泌胰岛素，让肌肉和脂肪把糖收走；肾脏把糖滤出去，又捡回来；大脑还管着食欲。不同的降糖药，拧的是不同的阀门。",
      fact: "空腹血糖的控制目标一般是 4.4～7.0 mmol/L",
      labels: ["blood", "valve"] },
    { title: "双胍类：让肝脏少放糖", glu: 7.4, gs: "warn", pill: ["阀门", "肝脏", "ok"],
      text: "双胍类的代表是二甲双胍，很多人最先用的就是它。它主要让肝脏少往血里放糖，也能让身体对胰岛素更敏感。常见的不舒服是恶心、腹泻、肚子胀，随餐或饭后吃可以减轻，多数人会慢慢适应。肾功能不好时，医生会调整用法。",
      fact: "二甲双胍是我国指南推荐的 2 型糖尿病一线用药",
      labels: ["liver", "sens", "gi"] },
    { title: "SGLT2 抑制剂：让糖随尿走", glu: 7.0, gs: "ok", pill: ["阀门", "肾脏", "ok"],
      text: "肾脏每天把血里的糖滤出去，再由肾小管上的 SGLT2 转运体把糖“捡回”血里。SGLT2 抑制剂把这个转运体堵住，多出来的糖就随尿排走，血糖跟着下降，它对心脏和肾脏也有保护作用。用药期间要多喝水，保持外阴清洁，预防感染。",
      fact: "健康人的肾脏每天滤出约 180 克糖，几乎全部被重吸收",
      labels: ["pick", "block", "water"] },
    { title: "GLP-1 受体激动剂：一药管四处", glu: 6.6, gs: "ok", pill: ["作用", "四处", "ok"],
      text: "吃饭后，肠道会放出一种激素叫 GLP-1。GLP-1 受体激动剂模仿它：血糖高时促进胰岛素分泌，压低升糖的胰高糖素，让胃排空慢一点，还作用于大脑，让人不那么饿，所以常能帮着减重。它多数是打针，也有口服的，刚开始常有恶心等胃肠反应。",
      fact: "多数是皮下注射，有每天一次，也有每周一次的",
      labels: ["mimic", "gi"] },
    { title: "DPP-4 抑制剂：护住自己的 GLP-1", glu: 6.8, gs: "ok", pill: ["阀门", "肠-胰", "ok"],
      text: "身体自己分泌的 GLP-1 寿命很短，几分钟就被血里的 DPP-4 酶剪断了。DPP-4 抑制剂把这把“剪刀”堵住，让自己的 GLP-1 多留一会儿，饭后胰岛素分泌得更好。它是口服药，作用比较温和，单独使用不太容易引起低血糖。",
      fact: "体内自己分泌的 GLP-1，几分钟内就会被分解掉",
      labels: ["cut", "guard", "insup"] },
    { title: "促泌剂和胰岛素：当心低血糖", glu: 3.5, gs: "bad", pill: ["风险", "低血糖", "bad"],
      text: "磺脲类等促泌剂直接“催”胰岛多分泌胰岛素，不管血糖高还是低都在催，所以要特别当心低血糖。胰岛素是直接补充钥匙，剂量要由医生按血糖调整。出现心慌、手抖、出汗、饥饿，要马上测血糖、吃点糖。平时按时吃饭，随身带几块糖。",
      fact: "用药的糖尿病患者，血糖 < 3.9 mmol/L 就算低血糖",
      labels: ["push", "low", "dose"] },
    { title: "用药原则：听医生的，常复查", glu: 6.2, gs: "ok", pill: ["原则", "遵医嘱", "ok"],
      text: "选哪种药，医生会看血糖高低、体重，还有心脏和肾脏的情况，常常几种药联合使用。不要自己加药、停药，也别听信能替代降糖药的偏方。定期查血糖、糖化血红蛋白和肾功能，再配合管住嘴、迈开腿，药才能发挥好作用。",
      fact: "多数人糖化血红蛋白控制在 7% 以下，通常 3～6 个月查一次",
      labels: ["nostop", "check"] },
  ];
  const DUR = 12;

  const { clamp, mix, rnd, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0, prevCur = -1, prevLt = 0;
  const TB = Anima.textbook({ W: () => W, H: () => H, time: () => time });
  const { ctx, TAU, rgba, glossy, txt, panel, background, smoothPath, sample, along, ease, LF, SF, IR, nar, mol, receptor, minusSign, noSign, bolt, arrow, flow, bilayer, tag } = TB;

  // ---------- 本集新登记的图标（形状名带 gd_ 前缀，免得和别的集撞名） ----------
  const REG = Anima.textbook, circNotch = REG.SHAPES.circle.notch;
  // GLP-1 / GLP-1 受体激动剂：水滴形（激动剂和天然激素同形，颜色不同）
  REG.registerShape("gd_drop", {
    path(c, r) {
      c.moveTo(0, -r * 1.05);
      c.bezierCurveTo(r * 0.3, -r * 0.6, r * 0.82, -r * 0.1, r * 0.8, r * 0.3);
      c.arc(0, r * 0.3, r * 0.8, 0, Math.PI, false);
      c.bezierCurveTo(-r * 0.82, -r * 0.1, -r * 0.3, -r * 0.6, 0, -r * 1.05);
      c.closePath();
    },
    notch(c, r) { const s = r * 0.86; c.lineTo(-s, 0); c.lineTo(-s, r * 0.3); c.arc(0, r * 0.3, s, Math.PI, 0, true); c.lineTo(s, 0); },
  });
  // DPP-4 酶：张着口的“剪刀”（缺口朝上）
  REG.registerShape("gd_pac", {
    path(c, r) { const m = 0.62; c.moveTo(0, r * 0.12); c.arc(0, r * 0.12, r * 0.95, -Math.PI / 2 + m, -Math.PI / 2 - m + TAU, false); c.closePath(); },
    notch: circNotch,
  });
  // 胰高糖素：十字形
  REG.registerShape("gd_plus", {
    path(c, r) {
      const a = 0.32, b = 0.95;
      const P = [[-a, -b], [a, -b], [a, -a], [b, -a], [b, a], [a, a], [a, b], [-a, b], [-a, a], [-b, a], [-b, -a], [-a, -a]];
      P.forEach((p, k) => { if (k) c.lineTo(p[0] * r, p[1] * r); else c.moveTo(p[0] * r, p[1] * r); });
      c.closePath();
    },
    notch: circNotch,
  });
  // SGLT2 转运体：一整块跨膜蛋白，中间一条让糖通过的缝
  REG.registerShape("gd_sglt", {
    path(c, r) {
      c.roundRect(-r * 0.95, -r, r * 1.9, r * 2, r * 0.35);
      c.moveTo(-r * 0.2, -r * 0.62); c.lineTo(-r * 0.2, r * 0.62); c.lineTo(r * 0.2, r * 0.62); c.lineTo(r * 0.2, -r * 0.62); c.closePath();
    },
    notch: circNotch,
  });
  REG.register("glp1", { shape: "gd_drop", color: ["#ffe0bf", "#ee8f2b", "#a3560d"], label: "GLP-1", receptor: { color: ["#fff1e2", "#f6c28e", "#b0712f"], label: "GLP-1 受体" } });
  REG.register("glp1ra", { shape: "gd_drop", color: ["#e6d6f7", "#8e5bc9", "#5a3190"], label: "GLP-1 受体激动剂" });
  REG.register("glucagon", { shape: "gd_plus", color: ["#d5efc0", "#58a83a", "#336b1f"], label: "胰高糖素" });
  REG.register("sglt2", { shape: "gd_sglt", color: ["#fde6c8", "#e0a15a", "#95601f"], label: "SGLT2 转运体" });
  REG.register("glut2", { shape: "glutPore", color: ["#eef2f7", "#b3c1d3", "#6d7d95"], label: "葡萄糖出口" });
  REG.register("dpp4", { shape: "gd_pac", color: ["#ece3d6", "#9c8466", "#5f4c35"], label: "DPP-4 酶" });
  // 各类药的胶囊（全集颜色固定）
  REG.register("metf", { shape: "capsule", color: ["#c9ecdc", "#2e9d74", "#1b6247"], label: "双胍类" });
  REG.register("sglt2i", { shape: "capsule", color: ["#cfe1f6", "#2f78c4", "#1a4c85"], label: "SGLT2 抑制剂", plug: true, blocks: "sglt2" });
  REG.register("glp1cap", { shape: "capsule", color: ["#e6d6f7", "#8e5bc9", "#5a3190"], label: "GLP-1 受体激动剂" });
  REG.register("dpp4i", { shape: "capsule", color: ["#f6e7b0", "#c9a21a", "#806506"], label: "DPP-4 抑制剂", plug: true, blocks: "dpp4" });
  REG.register("su", { shape: "capsule", color: ["#fbd6bd", "#e2702f", "#9a4312"], label: "磺脲类", receptor: { color: ["#fdeee4", "#f2b48e", "#a55a2c"], label: "磺脲类受体" } });
  REG.register("inscap", { shape: "capsule", color: ["#f7c9e6", "#cc4f9f", "#86285f"], label: "胰岛素" });

  const M = TB.MOLECULES;
  const K = Object.assign({}, TB.K, {
    glu: M.glu.color, ins: M.ins.color, glp1: M.glp1.color, ra: M.glp1ra.color, gcg: M.glucagon.color,
    metf: M.metf.color, sgi: M.sglt2i.color, dpi: M.dpp4i.color, su: M.su.color, dpp: M.dpp4.color, sglt: M.sglt2.color,
    lumen0: "#fff8f6", lumen1: "#fbe8e7", endo: ["#fdeef2", "#efc4cf", "#c38a9b"], rbc: ["#f8bcbc", "#e27575", "#b04848"],
    beta: ["#fff6e8", "#f7dfbe", "#c99a62"], alpha: ["#f3f9ec", "#d6e9c4", "#86a86a"],
    hep: ["#fff5ef", "#f8dccf", "#c99a86"], myo: ["#fff7f7", "#fbe6e8", "#cf96a0"],
    uri0: "#fffbea", uri1: "#fbf0c6", tub: ["#fff8f2", "#f5ddd0", "#c69e8a"],
    lip: ["#fffbe8", "#f5d98a", "#c9a23e"],
    ok: "#2fa465", warn: "#d99400",
  });
  const S = { glu: 8.6 };

  function update(dt) {
    if (cur !== lastCur) { prevCur = lastCur; prevLt = lt; lastCur = cur; lt = 0; }
    lt += dt; prevLt += dt;
  }

  // ---------- 图例 ----------
  function legendItems(i) {
    const n = nar();
    const L = [
      [["mol", "metf", "双胍类"], ["mol", "sglt2i", "SGLT2 抑制剂"], ["mol", "glp1cap", n ? "GLP-1 激动剂" : "GLP-1 受体激动剂"], ["mol", "dpp4i", "DPP-4 抑制剂"], ["mol", "su", n ? "磺脲类" : "磺脲类（促泌剂）"], ["mol", "inscap", "胰岛素"]],
      [["mol", "metf", "双胍类"], ["mol", "glu", "葡萄糖"], ["minus", "", "减少"], ["mol", "insr", "胰岛素受体"]],
      [["mol", "sglt2", "SGLT2 转运体"], ["mol", "sglt2i", "SGLT2 抑制剂"], ["no", "", "被堵住"], ["mol", "glu", "葡萄糖"]],
      [["mol", "glp1", "GLP-1"], ["mol", "glp1ra", n ? "激动剂" : "GLP-1 受体激动剂"], ["rec", "glp1", "GLP-1 受体"], ["mol", "glucagon", "胰高糖素"], ["minus", "", "减少"]],
      [["mol", "glp1", "GLP-1"], ["mol", "dpp4", "DPP-4 酶"], ["mol", "dpp4i", n ? "抑制剂" : "DPP-4 抑制剂"], ["mol", "ins", "胰岛素"]],
      [["mol", "su", "磺脲类"], ["rec", "su", "磺脲类受体"], ["mol", "ins", "胰岛素"], ["mol", "glu", "葡萄糖"]],
      [["mol", "metf", "双胍类"], ["mol", "sglt2i", "SGLT2 抑制剂"], ["mol", "glp1cap", "GLP-1 受体激动剂"], ["no", "", "不要这样做"]],
    ][i];
    if (!n) return L;
    return [L, [L[0], L[1], L[2]], [L[0], L[1], L[2]], [L[0], L[1], L[2]], [L[0], L[1], L[2]], [L[0], L[2], L[3]], [["mol", "metf", "双胍类"], ["mol", "sglt2i", "SGLT2 抑制剂"], ["no", "", "不要"]]][i];
  }

  // 顶部胶囊在窄屏上可能叠成两行：照引擎 pill() 的算法量一下，内容从胶囊下面开始
  function contentTop(i) {
    const fs = Math.max(12, W / 60) * Anima.UI, h = fs * 1.4 + 14;
    TB.font(fs, 500); const a1 = ctx.measureText("血糖").width, b1 = ctx.measureText(CH[i].pill[0]).width;
    TB.font(fs * 1.4, 700); const a2 = ctx.measureText(S.glu.toFixed(1) + " mmol/L").width, b2 = ctx.measureText(CH[i].pill[1]).width;
    const two = W - 14 - (b1 + b2 + 34) < 14 + (a1 + a2 + 34) + 8;
    return 12 + (two ? h * 2 + 8 : h) + 8;
  }
  function areaFor(i) {
    const n = nar(), Lg = TB.legendLayout(legendItems(i)), top = contentTop(i);
    const A = n ? { x: 8, y: top, w: W - 16, h: H - top - Lg.h - 8 } : { x: 16, y: top, w: W - 32, h: H - top - 12 };
    const LB = n ? { x: W, y: H } : { x: W - Lg.bw - 12, y: H - Lg.bh - 12 }; // 宽屏右下角图例框的左上角
    return { A, Lg, n, LB };
  }
  // 标注：夹在内容区里，窄屏避开底部图例
  function put(G, key, on, tx, ty, bx, by, text, col) {
    const h = LF() * 1.8;
    tag(key, on, tx, ty, bx, clamp(by, G.A.y + h / 2 + 2, H - h / 2 - 4 - (G.n ? G.Lg.h : 0)), text, col);
  }

  // =================== 通用画法 ===================
  // 横向的一段血管：内皮细胞、红细胞、流动的葡萄糖。返回管腔内的 y 映射
  const gluP = Array.from({ length: 34 }, (_, i) => ({ x: rnd(i + 10) * 1.2, yn: rnd(i + 60) * 2 - 1, rot: rnd(i + 110) * 6, sp: 0.8 + rnd(i + 150) * 0.4 }));
  const rbcP = Array.from({ length: 5 }, (_, i) => ({ x: i / 5 + rnd(i + 300) * 0.1, yn: rnd(i + 320) * 1.4 - 0.7, ph: rnd(i + 340) * 6 }));
  const nGlu = () => Math.round(clamp((S.glu - 3) * 3.2, 3, gluP.length));
  function band(r, nG, rg) {
    const ew = Math.max(3, Math.min(r.h * 0.09, 9));
    ctx.save(); ctx.beginPath(); ctx.rect(r.x, r.y, r.w, r.h); ctx.clip();
    const lg = ctx.createLinearGradient(0, r.y, 0, r.y + r.h);
    lg.addColorStop(0, K.lumen0); lg.addColorStop(1, K.lumen1);
    ctx.fillStyle = lg; ctx.fillRect(r.x, r.y, r.w, r.h);
    const L = Math.max(26, r.w / 14);
    [[r.y, 0], [r.y + r.h - ew, 1]].forEach((row) => {
      for (let x = r.x - L * 0.3 * row[1]; x < r.x + r.w + L; x += L) {
        ctx.beginPath(); ctx.roundRect(x + 1, row[0], L - 2, ew, ew / 2);
        ctx.fillStyle = glossy(x + L * 0.4, row[0] + ew * 0.3, L * 0.6, K.endo[0], K.endo[1]); ctx.fill();
        ctx.strokeStyle = K.endo[2]; ctx.lineWidth = 1; ctx.stroke();
      }
    });
    const yIn = (yn, rr) => r.y + r.h / 2 + yn * Math.max(0, r.h / 2 - ew - rr - 1);
    const px = (x0, sp) => r.x + (((x0 + time * 0.035 * sp) % 1.2) - 0.1) * r.w;
    const rr = Math.max(5, Math.min(IR() * 0.85, r.h * 0.16));
    for (const p of rbcP) {
      const x = px(p.x, 0.9), y = yIn(p.yn, rr * 0.6) + Math.sin(time * 1.4 + p.ph) * 1.5;
      ctx.beginPath(); ctx.ellipse(x, y, rr * 1.15, rr * 0.62, 0, 0, TAU);
      ctx.fillStyle = glossy(x, y, rr, K.rbc[0], K.rbc[1]); ctx.globalAlpha = 0.6; ctx.fill(); ctx.globalAlpha = 1;
      ctx.strokeStyle = rgba(K.rbc[2], 0.5); ctx.lineWidth = 1; ctx.stroke();
    }
    for (let i = 0; i < nG; i++) {
      const p = gluP[i], u = ((p.x + time * 0.035 * p.sp) % 1.2) - 0.1;
      const fade = clamp((u + 0.08) / 0.12, 0, 1) * clamp((1.08 - u) / 0.08, 0, 1);
      mol("glu", r.x + u * r.w, yIn(p.yn, rg) + Math.sin(time + i) * 1.2, rg, fade, p.rot + time * 0.4);
    }
    ctx.restore();
    return { yIn, ew, px, mid: r.y + r.h / 2 };
  }
  // 细胞：圆角矩形 + 膜
  function cellBox(r, c, mt, rad) {
    ctx.beginPath(); ctx.roundRect(r.x, r.y, r.w, r.h, rad);
    const g = ctx.createLinearGradient(0, r.y, 0, r.y + r.h);
    g.addColorStop(0, c[0]); g.addColorStop(1, c[1]);
    ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = K.memHead; ctx.lineWidth = mt * 0.7; ctx.stroke();
    ctx.strokeStyle = K.memEdge; ctx.lineWidth = 1; ctx.stroke();
  }
  // 沿路径搬运的分子
  function carry(sp, type, n, r, a, speed, ph) {
    if (!sp || a < 0.02) return null;
    let pick = null;
    for (let i = 0; i < n; i++) {
      const t = (time * speed + i / n + (ph || 0)) % 1, p = along(sp, t);
      const al = a * clamp(Math.sin(t * Math.PI) * 1.6, 0, 1);
      mol(type, p[0], p[1], r, al, type === "glu" ? t * 4 : 0);
      if (!pick && t > 0.35 && t < 0.65) pick = { x: p[0], y: p[1] };
    }
    return pick;
  }
  function mito(x, y, er, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0);
    ctx.beginPath(); ctx.ellipse(0, 0, er * 1.5, er * 0.8, 0, 0, TAU);
    ctx.fillStyle = glossy(0, 0, er * 1.5, "#ffd9cf", "#f0a898"); ctx.fill(); ctx.strokeStyle = "#c46f60"; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); for (let k = -2; k <= 2; k++) { ctx.moveTo(k * er * 0.45, -er * 0.55); ctx.lineTo(k * er * 0.45 + er * 0.15, er * 0.55); } ctx.stroke();
    ctx.restore();
  }
  function glycogen(x, y, gs, fill) {
    for (let k = 0; k < 11; k++) {
      const a = k * 2.4, d = k === 0 ? 0 : (k < 5 ? 1.25 : 2.3) * gs;
      ctx.beginPath(); ctx.arc(x + Math.cos(a) * d, y + Math.sin(a) * d * 0.85, gs, 0, TAU);
      ctx.fillStyle = rgba(K.glu[1], k < 11 * fill ? 0.75 : 0.18); ctx.fill();
      ctx.strokeStyle = rgba(K.glu[2], 0.5); ctx.lineWidth = 0.8; ctx.stroke();
    }
  }
  // 分泌颗粒
  function granule(x, y, r, type, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill();
    ctx.strokeStyle = K.memEdge; ctx.lineWidth = Math.max(1, r * 0.13); ctx.stroke();
    ctx.restore();
    mol(type, x, y, r * 0.55, a, 0);
  }
  // 胰岛细胞（β 分泌胰岛素，α 分泌胰高糖素）：rate 分泌快慢，topY 分泌物飘到哪里
  const GRAN = [[-0.42, 0.05], [-0.12, -0.28], [0.22, -0.12], [0.42, 0.2], [0.05, 0.3], [-0.3, -0.5], [0.3, -0.5], [0.12, 0.62]];
  function isletCell(cx, cy, r, kind, rate, toY, glow) {
    const c = kind === "a" ? K.alpha : K.beta, type = kind === "a" ? "glucagon" : "ins";
    if (glow > 0.03) {
      const gl = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.6);
      gl.addColorStop(0, rgba(K.fire, (0.3 + 0.08 * Math.sin(time * 5)) * glow)); gl.addColorStop(1, rgba(K.fire, 0));
      ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(cx, cy, r * 1.6, 0, TAU); ctx.fill();
    }
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU);
    ctx.fillStyle = glossy(cx - r * 0.2, cy - r * 0.1, r, c[0], c[1]); ctx.fill();
    ctx.strokeStyle = K.memHead; ctx.lineWidth = Math.max(2.5, r * 0.08); ctx.stroke();
    ctx.strokeStyle = c[2]; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx - r * 0.1, cy + r * 0.38, r * 0.26, r * 0.19, -0.2, 0, TAU); ctx.fillStyle = "rgba(60,50,80,0.2)"; ctx.fill();
    const gr = r * 0.15;
    GRAN.forEach((p, k) => granule(cx + p[0] * r + Math.sin(time * 0.8 + k) * 0.8, cy + p[1] * r * 0.85 + Math.cos(time * 0.7 + k) * 0.8, gr, type, 0.9));
    // 分泌：颗粒到顶上，放出分子往上飘
    const nSec = 3, top = cy - r, mr = Math.max(4, r * 0.13) * (type === "ins" ? 1.15 : 1);
    let rel = null;
    for (let k = 0; k < nSec; k++) {
      const t = (time * (0.12 + 0.3 * rate) + k / nSec) % 1, sx = cx + (k - 1) * r * 0.32;
      const a0 = clamp(rate * 1.6, 0, 1);
      if (t < 0.45) granule(sx, cy + (top + gr * 1.1 - cy) * ease(t / 0.45), gr, type, a0 * clamp(t / 0.08, 0, 1));
      else {
        const u = (t - 0.45) / 0.55, x = sx + Math.sin(u * 5 + k) * mr * 0.6, y = top - (top - toY) * ease(u);
        mol(type, x, y, mr, a0 * clamp((1 - u) / 0.15, 0, 1), Math.sin(time + k) * 0.3);
        if (!rel && u > 0.2 && u < 0.7 && a0 > 0.3) rel = { x, y };
      }
    }
    return { cx, cy, r, rel: rel || { x: cx, y: top - (top - toY) * 0.4 } };
  }
  // ---- 器官小图标（教科书风：光泽渐变 + 细描边） ----
  function shape(pts, x, y, sx, sy) { smoothPath(pts.map((p) => [x + p[0] * sx, y + p[1] * sy]), true); }
  function organ(kind, x, y, s) {
    const lw = Math.max(1, s * 0.035);
    ctx.lineJoin = "round"; ctx.lineCap = "round";
    const fillStroke = (c, gx, gy, gr) => { ctx.fillStyle = glossy(gx, gy, gr, c[0], c[1]); ctx.fill(); ctx.strokeStyle = c[2]; ctx.lineWidth = lw; ctx.stroke(); };
    if (kind === "liver") {
      const c = ["#f5c9b8", "#c8664e", "#8a3e2c"];
      shape([[-1, -0.3], [-0.6, -0.62], [0, -0.64], [0.6, -0.52], [1, -0.38], [0.85, -0.12], [0.3, 0.16], [-0.2, 0.46], [-0.7, 0.52], [-0.98, 0.2]], x, y, s, s);
      fillStroke(c, x - s * 0.2, y - s * 0.2, s);
      ctx.strokeStyle = rgba(c[2], 0.45); ctx.beginPath(); ctx.moveTo(x + s * 0.12, y - s * 0.6); ctx.quadraticCurveTo(x - s * 0.02, y - s * 0.2, x - s * 0.08, y + s * 0.3); ctx.stroke();
    } else if (kind === "kidney") {
      const c = ["#f6cdc6", "#c95f58", "#8a3431"];
      shape([[0, -1], [0.5, -0.85], [0.64, -0.2], [0.56, 0.55], [0.15, 0.98], [-0.35, 0.85], [-0.5, 0.42], [-0.2, 0.12], [-0.2, -0.16], [-0.5, -0.42], [-0.4, -0.86]], x, y, s * 0.75, s * 0.72);
      fillStroke(c, x, y - s * 0.2, s * 0.8);
      ctx.strokeStyle = "#e0c08a"; ctx.lineWidth = Math.max(1.5, s * 0.08);
      ctx.beginPath(); ctx.moveTo(x - s * 0.18, y); ctx.quadraticCurveTo(x - s * 0.5, y + s * 0.2, x - s * 0.45, y + s * 0.85); ctx.stroke();
    } else if (kind === "pancreas") {
      const c = ["#fde8cc", "#eab27a", "#a8733c"];
      shape([[-1, 0.05], [-0.85, -0.32], [-0.45, -0.3], [0.1, -0.2], [0.7, -0.34], [1.02, -0.2], [0.9, 0.06], [0.3, 0.14], [-0.3, 0.26], [-0.75, 0.44]], x, y, s, s);
      fillStroke(c, x - s * 0.3, y - s * 0.1, s);
      [[-0.55, 0.02], [0.05, -0.04], [0.6, -0.14]].forEach((p) => { ctx.beginPath(); ctx.arc(x + p[0] * s, y + p[1] * s, s * 0.08, 0, TAU); ctx.fillStyle = "#f29bb5"; ctx.fill(); ctx.strokeStyle = "#b85775"; ctx.lineWidth = 1; ctx.stroke(); });
    } else if (kind === "gut") {
      const pts = [[-0.8, -0.55], [0.8, -0.55], [0.86, -0.18], [-0.8, -0.18], [-0.86, 0.18], [0.8, 0.18], [0.86, 0.55], [-0.8, 0.55]].map((p) => [x + p[0] * s, y + p[1] * s]);
      [["#a4554d", s * 0.34], ["#e79a92", s * 0.27], ["#fbd3cf", s * 0.12]].forEach((q) => { ctx.strokeStyle = q[0]; ctx.lineWidth = q[1]; smoothPath(pts, false); ctx.stroke(); });
    } else if (kind === "muscle") {
      const c = ["#f7cdd3", "#d9828f", "#9c4a56"];
      ctx.save(); ctx.translate(x - s * 0.12, y); ctx.rotate(-0.2);
      ctx.beginPath(); ctx.ellipse(0, 0, s * 0.85, s * 0.4, 0, 0, TAU); fillStroke(c, 0, -s * 0.1, s * 0.8);
      ctx.clip(); ctx.strokeStyle = rgba(c[2], 0.35); ctx.lineWidth = Math.max(1, s * 0.03);
      for (let k = -6; k <= 6; k++) { ctx.beginPath(); ctx.moveTo(k * s * 0.13, -s * 0.4); ctx.lineTo(k * s * 0.13, s * 0.4); ctx.stroke(); }
      ctx.restore();
      ctx.beginPath(); ctx.arc(x + s * 0.68, y + s * 0.38, s * 0.3, 0, TAU); fillStroke(K.lip, x + s * 0.6, y + s * 0.3, s * 0.3);
    } else if (kind === "brain") {
      const c = ["#f7f4fb", "#dcd6ea", "#9e97bb"];
      shape([[-1, 0.2], [-0.95, -0.35], [-0.55, -0.75], [0, -0.85], [0.55, -0.72], [0.95, -0.3], [0.95, 0.2], [0.6, 0.45], [0.2, 0.4], [-0.2, 0.55], [-0.6, 0.5]], x, y, s, s * 0.8);
      fillStroke(c, x - s * 0.2, y - s * 0.3, s);
      ctx.save(); ctx.clip(); ctx.strokeStyle = "#cbc3dd"; ctx.lineWidth = Math.max(1, s * 0.05);
      [[-0.5, -0.3, 0.35], [0.1, -0.45, 0.4], [0.5, -0.05, 0.3], [-0.2, 0.15, 0.3]].forEach((g) => { ctx.beginPath(); ctx.arc(x + g[0] * s, y + g[1] * s, g[2] * s, 0.3, 2.6); ctx.stroke(); });
      ctx.restore();
      ctx.beginPath(); ctx.ellipse(x + s * 0.28, y + s * 0.55, s * 0.12, s * 0.2, -0.3, 0, TAU); fillStroke(c, x + s * 0.28, y + s * 0.5, s * 0.2);
    } else if (kind === "stomach") {
      const c = ["#fcd9cd", "#e58f7a", "#a4513f"];
      shape([[-0.3, -1], [-0.02, -1], [0.02, -0.6], [0.3, -0.45], [0.78, -0.3], [0.95, 0.15], [0.7, 0.72], [0.1, 0.9], [-0.55, 0.78], [-0.9, 0.62], [-0.85, 0.35], [-0.45, 0.35], [-0.3, -0.2]], x, y, s, s);
      fillStroke(c, x + s * 0.1, y, s);
    }
  }
  function badges(keys, x, y, r) {
    const gap = r * 2.5, y0 = y - (keys.length - 1) * gap / 2;
    keys.forEach((k, i) => mol(k, x, y0 + i * gap + (M[k].plug ? r * 0.3 : 0), r, 1));
    return keys.map((k, i) => ({ x, y: y0 + i * gap }));
  }
  // 胰岛素笔：(x,y) 针尖，ang 笔身朝向，len 笔长
  function pen(x, y, len, ang, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(ang);
    const w = len * 0.16;
    ctx.strokeStyle = "#8a93a6"; ctx.lineWidth = Math.max(1, w * 0.12); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-len * 0.14, 0); ctx.stroke();
    ctx.beginPath(); ctx.roundRect(-len * 0.14 - len * 0.06, -w * 0.3, len * 0.06, w * 0.6, 2); ctx.fillStyle = "#cfd5e1"; ctx.fill();
    ctx.beginPath(); ctx.roundRect(-len, -w / 2, len * 0.8, w, w * 0.45);
    ctx.fillStyle = glossy(-len * 0.6, -w * 0.2, len * 0.5, "#f7f8fb", "#c7cedb"); ctx.fill(); ctx.strokeStyle = "#7d879c"; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.roundRect(-len * 0.52, -w * 0.28, len * 0.22, w * 0.56, w * 0.2);
    ctx.fillStyle = glossy(-len * 0.45, -w * 0.1, len * 0.12, K.ins[0], K.ins[1]); ctx.fill(); ctx.strokeStyle = K.ins[2]; ctx.stroke();
    ctx.beginPath(); ctx.roundRect(-len * 1.08, -w * 0.38, len * 0.1, w * 0.76, w * 0.2); ctx.fillStyle = "#9aa3b6"; ctx.fill();
    ctx.restore();
  }

  // =================== 第 1 幕：全身阀门总图 ===================
  function scene0(G, live, T) {
    const A = G.A, n = G.n, sf = SF();
    const s = Math.min(A.h * (n ? 0.13 : 0.12), A.w * 0.075);
    const yT = A.y + sf * 1.5 + s * 0.6, yB = A.y + A.h - sf * 1.5 - s * 0.62;
    const vh = Math.min(yB - yT - s * 2.5, A.h * (n ? 0.3 : 0.24)), vm = (yT + yB) / 2;
    const vr = { x: A.x, y: vm - vh / 2, w: A.w, h: vh };
    const ir = Math.min(IR(), vh * 0.14), rg = Math.max(4, ir * 0.62);
    const V = band(vr, nGlu(), rg);
    const xT = (n ? [0.13, 0.47, 0.8] : [0.1, 0.42, 0.74]).map((f) => A.x + A.w * f);
    const xB = (n ? [0.13, 0.47, 0.8] : [0.1, 0.4, 0.66]).map((f) => A.x + A.w * f);
    const aw = Math.max(2.4, s * 0.07), vT = vr.y + V.ew, vB = vr.y + vr.h - V.ew;
    // 通路
    const mr = Math.max(4, s * 0.16);
    const la = arrow([[xT[2], yT + s * 0.5], [xT[2], vT + mr]], K.glu[1], aw, 1, "go");          // 肝 → 血
    carry(la, "glu", 2, mr, 1, 0.3, 0);
    const pa = arrow([[xT[1], yT + s * 0.35], [xT[1], vT + mr]], K.ins[1], aw, 1, "go");         // 胰岛 → 血（胰岛素）
    carry(pa, "ins", 2, mr, 1, 0.3, 0.3);
    const ga = arrow([[xB[0] + s * 0.3, yB - s * 0.62], [xB[0] + s * 0.3, vB - mr]], K.glu[1], aw, 1, "go"); // 肠 → 血
    carry(ga, "glu", 2, mr, 1, 0.3, 0.5);
    const ma = arrow([[xB[1], vB - mr], [xB[1], yB - s * 0.5]], K.glu[1], aw, 1, "go");          // 血 → 肌肉
    carry(ma, "glu", 2, mr, 1, 0.3, 0.1);
    const kd = arrow([[xB[2] - s * 0.3, vB - mr], [xB[2] - s * 0.3, yB - s * 0.78]], K.glu[1], aw, 1, "go");  // 血 → 肾（滤出）
    carry(kd, "glu", 2, mr, 1, 0.3, 0.2);
    const ku = arrow([[xB[2] + s * 0.3, yB - s * 0.78], [xB[2] + s * 0.3, vB - mr]], K.glu[1], aw * 0.9, 1, "go"); // 肾 → 血（重吸收）
    carry(ku, "glu", 2, mr, 1, 0.3, 0.7);
    // 大脑 → 食欲（虚线）
    ctx.save(); ctx.setLineDash([aw * 1.6, aw * 1.6]);
    arrow([[xT[0] - s * 0.9, yT + s * 0.2], [xT[0] - s * 1.15, vm], [xB[0] - s * 0.95, yB - s * 0.35]], "#9e97bb", aw * 0.8, 0.9, "go");
    ctx.restore();
    // 器官
    organ("brain", xT[0], yT, s * 0.85);
    organ("pancreas", xT[1], yT, s);
    organ("liver", xT[2], yT, s);
    organ("gut", xB[0] + s * 0.1, yB, s * 0.8);
    organ("muscle", xB[1], yB, s * 0.85);
    organ("kidney", xB[2], yB, s * 0.95);
    const nameT = yT - s * 0.72 - sf * 0.65, nameB = yB + s * 0.7 + sf * 0.75;
    const nm = (t, x, y) => txt(t, x, y, sf, K.ink, "center", 700);
    nm(n ? "大脑·食欲" : "大脑：管食欲", xT[0], nameT);
    nm(n ? "胰岛" : "胰岛：胰岛素", xT[1], nameT);
    nm(n ? "肝脏" : "肝脏：放糖", xT[2], nameT);
    nm(n ? "肠道" : "肠道：吸收糖", xB[0], nameB);
    nm(n ? "肌肉脂肪" : "肌肉、脂肪：收糖", xB[1], nameB);
    nm(n ? "肾脏" : "肾脏：滤糖、捡回", xB[2], nameB);
    // 药物胶囊：贴在各自拧的阀门旁
    const br = Math.max(4.5, s * 0.22), off = s * 1.25;
    const bL = badges(["metf"], xT[2] + off, yT, br);
    badges(["glp1cap"], xT[0] + off * 0.95, yT, br);
    badges(["su", "glp1cap", "dpp4i"], xT[1] + off, yT, br * 0.9);
    badges(["inscap"], xB[1] + off, yB, br);
    const bK = badges(["sglt2i"], xB[2] + off * 0.85, yB, br);
    badges(["dpp4i"], xB[0] + off * 0.95, yB, br * 0.9);
    const on = (k) => live && CH[0].labels.indexOf(k) >= 0;
    put(G, "s0blood", on("blood"), A.x + A.w * (n ? 0.2 : 0.22), V.yIn(0.4, rg), A.x + A.w * (n ? 0.28 : 0.3), vm - vh * 0.12, "血里的糖 = 血糖", K.glu[1]);
    put(G, "s0valve", on("valve") && T > 1.2, bL[0].x, bL[0].y + br * 0.6, A.x + A.w * (n ? 0.72 : 0.72), vm + vh * 0.14, "每类药拧一个阀门", K.metf[1]);
  }

  // =================== 第 2 幕：双胍类 → 肝细胞 ===================
  function scene1(G, live, T) {
    const A = G.A, n = G.n, sf = SF();
    const d = ease(clamp((T - 1.2) / 3, 0, 1));
    const vr = { x: A.x, y: A.y, w: A.w, h: A.h * (n ? 0.26 : 0.22) };
    const ir = Math.min(IR(), vr.h * 0.2), rg = Math.max(4, ir * 0.58);
    const V = band(vr, nGlu(), rg);
    const mt = Math.max(5, ir * 0.7);
    const hc = { x: A.x + 2, y: vr.y + vr.h + A.h * 0.06, w: A.w * (n ? 0.63 : 0.58), h: 0 }; hc.h = A.y + A.h - hc.y - 3;
    cellBox(hc, K.hep, mt, 12);
    bilayer(hc.x + 8, hc.x + hc.w - 8, hc.y, mt);
    const at = (fx, fy) => [hc.x + hc.w * fx, hc.y + hc.h * fy];
    // 细胞核
    if (!n) {
      const nc = at(0.44, 0.8);
      ctx.beginPath(); ctx.ellipse(nc[0], nc[1], hc.w * 0.09, hc.h * 0.1, 0, 0, TAU); ctx.fillStyle = "rgba(120,80,90,0.13)"; ctx.fill();
      ctx.strokeStyle = "rgba(120,80,90,0.25)"; ctx.lineWidth = 1; ctx.stroke();
    }
    // 糖原 和 糖异生（线粒体）
    const gp = at(0.2, 0.6), mp = at(0.7, 0.62);
    const gs = Math.max(2.4, Math.min(ir * 0.36, hc.h * 0.055));
    glycogen(gp[0], gp[1], gs, 0.9);
    const er = Math.min(ir * (n ? 1.3 : 1.7), hc.h * 0.14, hc.w * 0.1);
    // 造糖原料（乳酸、氨基酸等小颗粒）流进线粒体
    const raw = sample([[hc.x + hc.w * 0.98, mp[1] + er * 1.6], [mp[0] + er * 1.4, mp[1] + er * 1.2], [mp[0] + er * 0.6, mp[1] + er * 0.2]], 20);
    for (let i = 0; i < 4; i++) {
      const t = (time * 0.2 + i / 4) % 1, p = along(raw, t);
      ctx.beginPath(); ctx.arc(p[0], p[1], Math.max(2, ir * 0.18), 0, TAU); ctx.fillStyle = rgba("#9aa3b6", Math.sin(t * Math.PI) * (1 - 0.6 * d)); ctx.fill();
    }
    mito(mp[0], mp[1], er, -0.2);
    txt("糖原", gp[0], gp[1] + gs * 3.2 + sf * 0.6, sf, K.glu[2], "center", 500);
    txt(n ? "造新糖" : "糖异生（造新糖）", mp[0], mp[1] + er * 1.05 + sf * 0.7, sf, "#b3584a", "center", 500);
    // 出口转运体
    const gx1 = hc.x + hc.w * 0.26, gx2 = hc.x + hc.w * 0.72, gr = Math.max(6, ir * 0.7);
    mol("glut2", gx1, hc.y, gr); mol("glut2", gx2, hc.y, gr);
    const aw = Math.max(2.2, ir * 0.16);
    // 糖原 → 出口 → 血
    arrow([[gp[0], gp[1] - gs * 3], [gx1, hc.y + hc.h * 0.3], [gx1, hc.y + gr * 1.3]], K.glu[1], aw, 0.45, "go");
    const p1 = sample([[gp[0], gp[1] - gs * 3], [gx1, hc.y + hc.h * 0.3], [gx1, hc.y], [gx1, vr.y + vr.h * 0.5]], 30);
    carry(p1, "glu", 3, rg, 1, 0.22, 0);
    // 糖异生 → 出口 → 血：吃了药就变少
    const out = 1 - 0.8 * d;
    const s2 = [[mp[0] - er * 0.4, mp[1] - er * 0.85], [gx2, hc.y + hc.h * 0.36], [gx2, hc.y + gr * 1.3]];
    const sp2 = arrow(s2, K.glu[1], aw * (1.4 - 0.6 * d), 0.3 + 0.7 * out, "go");
    const p2 = sample([s2[0], s2[1], [gx2, hc.y], [gx2, vr.y + vr.h * 0.5]], 30);
    carry(p2, "glu", 4, rg, out, 0.26, 0.2);
    const mm = along(sp2, 0.5);
    minusSign(mm[0] + aw * 3.5, mm[1], Math.max(8, ir * 0.6), d);
    // 双胍类：从血里进肝细胞，停在线粒体旁
    const cr = Math.max(6, ir * 0.62), dx = mp[0] - er * 2.2, dy = mp[1] + er * 0.3;
    const mp3 = sample([[hc.x + hc.w * 0.48, vr.y + vr.h * 0.5], [hc.x + hc.w * 0.48, hc.y], [dx - er * 0.2, hc.y + hc.h * 0.35], [dx, dy]], 30);
    const ct = ease(clamp((T - 0.3) / 2, 0, 1)), cp = along(mp3, ct);
    mol("metf", cp[0], cp[1], cr, 1);
    if (d > 0.3) arrow([[dx + cr * 1.3, dy], [mp[0] - er * 1.45, mp[1] + er * 0.1]], K.red, aw * 0.9, clamp((d - 0.3) * 2, 0, 1), "stop");
    for (let k = 0; k < 2; k++) mol("metf", V.px(0.1 + k * 0.5, 0.8), V.yIn(k ? 0.45 : -0.4, cr), cr, 0.95);
    txt("肝细胞", hc.x + sf * 2.6, hc.y + hc.h - sf * 0.9, sf, "#9a6a58", "center", 700);
    // 右边：肌肉细胞对胰岛素更敏感；宽屏下面再画个胃（胃肠反应）
    const colB = n ? A.y + A.h : G.LB.y - 12;
    const mc = { x: A.x + A.w * (n ? 0.67 : 0.63), y: hc.y, w: A.w * (n ? 0.33 : 0.37) - 2, h: 0 };
    mc.h = (n ? colB - hc.y : (A.y + A.h - hc.y) * 0.56) - 3;
    cellBox(mc, K.myo, mt, 12);
    bilayer(mc.x + 6, mc.x + mc.w - 6, mc.y, mt);
    const Ry = Math.min(ir * 1.3, mc.w * 0.13), rx = mc.x + mc.w * 0.28, gx = mc.x + mc.w * 0.74;
    const sens = 0.3 + 0.7 * d;
    const gg = ctx.createRadialGradient(rx, mc.y - Ry * 0.6, 0, rx, mc.y - Ry * 0.6, Ry * 1.8);
    gg.addColorStop(0, rgba(K.ins[1], 0.5 * sens)); gg.addColorStop(1, rgba(K.ins[1], 0));
    ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(rx, mc.y - Ry * 0.6, Ry * 1.8, 0, TAU); ctx.fill();
    mol("insr", rx, mc.y - Ry * 0.5, Ry, 1);
    mol("ins", rx, mc.y - Ry * 1.12, Math.max(4.5, Ry * 0.42), 1);
    const sgp = arrow([[rx + Ry * 0.3, mc.y + Ry * 0.9], [(rx + gx) / 2, mc.y + mc.h * 0.62], [gx - Ry * 0.2, mc.y + Ry * 1.4]], K.ins[1], aw, 0.3 + 0.7 * sens, "go");
    flow(sgp, K.ins[1], 2, Math.max(1.6, ir * 0.12), sens, 0.4);
    mol("glut4", gx, mc.y, Math.max(6, Ry * 0.62), 1);
    const p3 = sample([[gx - Ry * 0.8, vr.y + vr.h * 0.5], [gx, mc.y - Ry * 0.8], [gx, mc.y + Ry], [gx + Ry * 0.3, mc.y + mc.h * 0.75]], 24);
    carry(p3, "glu", 3, rg, 0.3 + 0.7 * sens, 0.22 + 0.1 * d, 0.1);
    txt("肌肉细胞", mc.x + mc.w / 2, mc.y + mc.h - sf * 0.9, sf, "#a0606b", "center", 700);
    let st = null;
    if (!n) {
      const sy0 = mc.y + mc.h + 8, ss = Math.min((A.y + A.h - sy0) * 0.36, (G.LB.x - mc.x) * 0.2);
      st = { x: mc.x + ss * 1.3, y: sy0 + (A.y + A.h - sy0) * 0.55 };
      organ("stomach", st.x, st.y, ss);
      mol("metf", st.x + ss * 0.05, st.y + ss * 0.2, cr * 0.9, 1, 0.3);
      txt("胃肠", st.x, st.y + ss * 1.0 + sf * 0.6, sf, "#a4513f", "center", 700);
    }
    const on = (k) => live && CH[1].labels.indexOf(k) >= 0;
    put(G, "s1liver", on("liver") && d > 0.5, mm[0] + aw * 3.5, mm[1], n ? A.x + A.w * 0.3 : mm[0] - hc.w * 0.25, n ? vr.y + vr.h * 0.5 : hc.y + hc.h * 0.2 + mt, "肝脏少往血里放糖", K.metf[1]);
    put(G, "s1sens", on("sens") && d > 0.7, rx, mc.y - Ry * 0.5, n ? mc.x + mc.w * 0.3 : mc.x + mc.w * 0.45, n ? mc.y + mc.h * 0.6 : vr.y + vr.h * 0.5, "对胰岛素更敏感", K.ins[1]);
    if (st) put(G, "s1gi", on("gi") && T > 3, st.x + st.x * 0 + 4, st.y - 10, st.x + (G.LB.x - st.x) * 0.55, mc.y + mc.h + LF() * 1.3, "胃肠不适：随餐或饭后吃", "#a4513f");
  }

  // =================== 第 3 幕：SGLT2 抑制剂 → 肾小管 ===================
  const lumP = Array.from({ length: 18 }, (_, i) => ({ x: rnd(i + 500) * 1.1, yn: rnd(i + 530) * 1.6 - 0.8, rot: rnd(i + 560) * 6 }));
  function scene2(G, live, T) {
    const A = G.A, n = G.n, sf = SF();
    const d = ease(clamp((T - 4) / 2, 0, 1));
    const mx0 = n ? A.x : A.x + A.w * 0.21, mw = A.x + A.w - mx0;
    const lum = { x: mx0, y: A.y, w: mw, h: A.h * 0.3 };
    const e0 = lum.y + lum.h, e1 = A.y + A.h * 0.7;
    const bl = { x: mx0, y: A.y + A.h * 0.75, w: n ? mw : Math.min(mw, G.LB.x - 14 - mx0), h: A.h * 0.25 };
    const ir = Math.min(IR(), lum.h * 0.2), rg = Math.max(4, ir * 0.6), mt = Math.max(5, ir * 0.65);
    // 管腔（原尿）
    const ug = ctx.createLinearGradient(0, lum.y, 0, lum.y + lum.h);
    ug.addColorStop(0, K.uri0); ug.addColorStop(1, K.uri1);
    ctx.fillStyle = ug; ctx.fillRect(lum.x, lum.y, lum.w, lum.h + 6);
    txt(n ? "肾小管（原尿）" : "肾小管腔（原尿）", lum.x + sf * 0.6, lum.y + sf * 0.9, sf, "#a88a2a", "left", 700);
    // 上皮细胞
    const nc = n ? 4 : 5, cw = mw / nc;
    for (let k = 0; k < nc; k++) {
      const x = mx0 + k * cw;
      ctx.beginPath(); ctx.roundRect(x + 1.5, e0, cw - 3, e1 - e0, 6);
      ctx.fillStyle = glossy(x + cw * 0.4, e0 + (e1 - e0) * 0.3, cw * 0.7, K.tub[0], K.tub[1]); ctx.fill();
      ctx.strokeStyle = K.tub[2]; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x + cw * 0.5, e0 + (e1 - e0) * 0.66, cw * 0.12, (e1 - e0) * 0.12, 0, 0, TAU); ctx.fillStyle = "rgba(60,50,80,0.18)"; ctx.fill();
    }
    // 刷状缘（微绒毛）
    const vh = Math.max(3, ir * 0.45), vw = Math.max(2.4, ir * 0.22);
    ctx.fillStyle = K.memHead; ctx.strokeStyle = K.memEdge; ctx.lineWidth = 1;
    for (let x = mx0 + vw * 2; x < mx0 + mw - vw; x += vw * 2.6) { ctx.beginPath(); ctx.roundRect(x - vw / 2, e0 - mt / 2 - vh, vw, vh + 2, vw / 2); ctx.fill(); ctx.stroke(); }
    bilayer(mx0, mx0 + mw, e0, mt);
    bilayer(mx0, mx0 + mw, e1, mt);
    // 血管
    const V = band(bl, nGlu(), rg);
    // 左边小插图：肾脏 + 放大镜
    if (!n) {
      const ks = Math.min(A.w * 0.075, A.h * 0.2), kx = A.x + A.w * 0.085, ky = A.y + A.h * 0.42;
      organ("kidney", kx, ky, ks);
      const zx = kx + ks * 0.3, zy = ky - ks * 0.45, zr = ks * 0.2;
      ctx.strokeStyle = K.leader; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(zx + zr * 0.7, zy - zr * 0.7); ctx.lineTo(mx0, lum.y); ctx.moveTo(zx + zr * 0.7, zy + zr * 0.7); ctx.lineTo(mx0, bl.y + bl.h); ctx.stroke(); ctx.setLineDash([]);
      ctx.beginPath(); ctx.arc(zx, zy, zr, 0, TAU); ctx.fillStyle = "rgba(255,255,255,0.35)"; ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = 1.5; ctx.stroke();
      txt("肾脏", kx, ky + ks * 0.95 + sf * 0.4, sf, K.ink, "center", 700);
      txt("肾小管上皮细胞", mx0 - sf * 0.4, (e0 + e1) / 2, sf, K.soft, "right", 500);
      txt("血液", mx0 - sf * 0.4, bl.y + bl.h / 2, sf, K.soft, "right", 500);
    }
    // 管腔里的糖：没吃药时被一路“捡”走，越往后越少；吃了药就一直流到尿里
    for (let i = 0; i < lumP.length; i++) {
      const p = lumP[i], u = (p.x + time * 0.05) % 1.1;
      const keep = 1 - (1 - d) * clamp((u - 0.12) / 0.65, 0, 1);
      const fade = clamp(u / 0.06, 0, 1) * clamp((1.1 - u) / 0.08, 0, 1);
      mol("glu", mx0 + u * mw, lum.y + lum.h * 0.58 + p.yn * (lum.h * 0.3), rg, fade * keep, p.rot + time * 0.5);
    }
    // 水：吃药后糖把水一起带走
    for (let i = 0; i < 8; i++) {
      const u = (rnd(i + 600) + time * 0.06) % 1, x = mx0 + mw * (0.45 + 0.55 * u), y = lum.y + lum.h * (0.35 + 0.5 * rnd(i + 620));
      const a = d * clamp(Math.sin(u * Math.PI) * 2, 0, 1) * 0.85, rr = Math.max(3, ir * 0.42);
      if (a < 0.02) continue;
      ctx.save(); ctx.globalAlpha *= a; ctx.beginPath(); ctx.moveTo(x, y - rr * 1.5); ctx.quadraticCurveTo(x + rr, y - rr * 0.2, x, y + rr); ctx.quadraticCurveTo(x - rr, y - rr * 0.2, x, y - rr * 1.5);
      ctx.fillStyle = glossy(x, y, rr, "#d8ecff", K.blue); ctx.fill(); ctx.strokeStyle = "#2a6fb8"; ctx.lineWidth = 0.8; ctx.stroke(); ctx.restore();
    }
    txt("流向膀胱 →", mx0 + mw - sf * 0.5, lum.y + sf * 0.9, sf, "#a88a2a", "right", 500);
    // SGLT2 转运体和出口；糖的重吸收路线
    const fr = n ? [0.18, 0.48, 0.78] : [0.16, 0.42, 0.68];
    const tr = Math.max(8, ir * 1.3), cr = Math.max(6, ir * 0.78);
    const TR = fr.map((f, j) => {
      const x = mx0 + mw * f, xg = x + tr * 1.9;
      const pts = [[x - tr * 2.2, lum.y + lum.h * 0.55], [x, e0 - tr * 1.3], [x, e0], [x, e0 + tr * 1.3], [xg, (e0 + e1) / 2 + tr], [xg, e1], [xg, V.mid]];
      mol("glut2", xg, e1, Math.max(5, tr * 0.6));
      mol("sglt2", x, e0, tr);
      carry(sample(pts, 36), "glu", 3, rg, 1 - d, 0.24, j * 0.3);
      // 药物：从管腔飞来，堵在转运体口上
      const cx = x - (1 - d) * mw * 0.25, cy = e0 - tr - cr * 0.95 - (1 - d) * lum.h * 0.25;
      mol("sglt2i", cx, cy, cr, clamp(d * 3, 0, 1));
      noSign(x + tr * 1.25, e0 - tr * 1.2, Math.max(6, tr * 0.5), clamp((d - 0.5) * 2, 0, 1));
      return { x, cx, cy };
    });
    const on = (k) => live && CH[2].labels.indexOf(k) >= 0;
    const t1 = TR[1], t2 = TR[2];
    put(G, "s2pick", on("pick") && T < 4.3, t1.x, e0 + tr * 0.8, n ? A.x + A.w * 0.5 : t1.x + mw * 0.08, n ? (e0 + e1) / 2 + tr : (e0 + e1) / 2 + tr * 0.6, "SGLT2：把糖“捡回”血里", K.sglt[1]);
    put(G, "s2block", on("block") && d > 0.6 && (!n || T < 8), t1.cx, t1.cy - cr * 0.3, n ? A.x + A.w * 0.3 : t1.x - mw * 0.02, n ? (e0 + e1) / 2 + tr : (e0 + e1) / 2 + tr * 0.6, "药物堵住，糖随尿排走", K.sgi[1]);
    put(G, "s2water", on("water") && d > 0.8 && T > (n ? 8 : 7), mx0 + mw * 0.86, lum.y + lum.h * 0.55, n ? A.x + A.w * 0.72 : mx0 + mw * 0.8, n ? (e0 + e1) / 2 + tr : (e0 + e1) / 2 + tr * 0.6, "多喝水，保持外阴清洁", K.blue);
  }

  // =================== 第 4 幕：GLP-1 受体激动剂 ===================
  function scene3(G, live, T) {
    const A = G.A, n = G.n, sf = SF();
    const hub = n ? { x: A.x, y: A.y, w: A.w, h: A.h * 0.42 } : { x: A.x, y: A.y, w: A.w * 0.3, h: A.h };
    panel(hub, 10);
    // 受体放大：膜 + 两个 GLP-1 受体（一个结合天然 GLP-1，一个结合药物）
    const ym = n ? hub.y + hub.h * 0.5 : hub.y + hub.h * 0.36;
    const ir = n ? Math.min(IR(), hub.h * 0.13) : Math.min(IR() * 1.1, hub.w * 0.08);
    const mt = Math.max(5, ir * 0.7);
    const mx0 = hub.x + 1, mx1 = n ? hub.x + hub.w * 0.62 : hub.x + hub.w - 1;
    ctx.fillStyle = mix(K.postOff, K.postOn, 0.7); ctx.fillRect(mx0, ym, mx1 - mx0, (n ? hub.y + hub.h : ym + hub.h * 0.2) - ym - 1);
    bilayer(mx0, mx1, ym, mt);
    const rx1 = mx0 + (mx1 - mx0) * 0.3, rx2 = mx0 + (mx1 - mx0) * 0.72;
    const bob = Math.sin(time * 1.5) * 0.04;
    receptor("glp1", rx1, ym, ir, mt, 0.5 + 0.2 * Math.sin(time * 3), 0, ["glp1", 0.96 + bob]);
    const dk = receptor("glp1", rx2, ym, ir, mt, 0.8 + 0.2 * Math.sin(time * 3 + 1), 0, ["glp1ra", 0.96 - bob]);
    const by2 = n ? ym + mt * 0.5 + ir * 0.75 : ym + mt + ir * 0.9, bs = n ? ir * 0.4 : ir * 0.55;
    bolt(rx1 + (n ? ir * 1.9 : 0), by2, bs, 0.8);
    bolt(rx2 + (n ? ir * 1.9 : 0), by2, bs, 0.8 + 0.2 * Math.sin(time * 5));
    // 周围飘着的药物分子
    for (let i = 0; i < 3; i++) {
      const x = mx0 + (mx1 - mx0) * (0.15 + 0.35 * i), y = hub.y + (ym - hub.y) * 0.32 + Math.sin(time * 1.2 + i * 2) * ir * 0.4;
      mol("glp1ra", x, y, ir * 0.7, 0.7);
    }
    const ly = n ? hub.y + hub.h - sf * 0.75 : ym + mt + ir * 2.2;
    txt("天然 GLP-1", rx1, ly, sf * 0.95, K.glp1[2], "center", 700);
    txt(n ? "药物" : "药物（模仿它）", rx2, ly, sf * 0.95, K.ra[2], "center", 700);
    // 用法：多数打针，也有口服
    if (!n) {
      const py = hub.y + hub.h * 0.78, pl = Math.min(hub.w * 0.4, hub.h * 0.18);
      pen(hub.x + hub.w * 0.32 + pl * 0.35, py + pl * 0.25, pl, -0.55, 1);
      mol("glp1cap", hub.x + hub.w * 0.75, py, Math.max(7, ir * 0.9), 1);
      txt("多数打针", hub.x + hub.w * 0.25, hub.y + hub.h - sf * 1.0, sf, K.ink, "center", 500);
      txt("也有口服", hub.x + hub.w * 0.75, hub.y + hub.h - sf * 1.0, sf, K.ink, "center", 500);
      txt("GLP-1 受体（放大）", hub.x + hub.w / 2, ym + hub.h * 0.24, sf * 0.9, K.soft, "center", 500);
    } else {
      const px = hub.x + hub.w * 0.81;
      pen(px + hub.w * 0.09, hub.y + hub.h * 0.58, Math.min(hub.w * 0.2, hub.h * 0.5), -0.3, 1);
      txt("多为注射", px, hub.y + hub.h - sf * 0.7, sf * 0.95, K.ink, "center", 500);
    }
    // 四个作用点
    const reg = n ? { x: A.x, y: A.y + A.h * 0.46, w: A.w, h: A.h * 0.54 }
      : { x: A.x + A.w * 0.34, y: A.y, w: A.w * 0.66, h: G.LB.y - 12 - A.y };
    const gap = n ? 5 : 10;
    const cards = [0, 1, 2, 3].map((k) => n
      ? { x: reg.x + k * (reg.w + gap) / 4, y: reg.y, w: (reg.w + gap) / 4 - gap, h: reg.h }
      : { x: reg.x, y: reg.y + k * (reg.h + gap) / 4, w: reg.w, h: (reg.h + gap) / 4 - gap });
    const aw = Math.max(2.2, ir * 0.18);
    cards.forEach((c, k) => {
      const src = n ? [c.x + c.w / 2, hub.y + hub.h + 1] : [hub.x + hub.w + 2, ym + (k - 1.5) * ir * 0.9];
      const dst = n ? [c.x + c.w / 2, c.y - 1] : [c.x - 3, c.y + c.h * 0.5];
      const sp = arrow(n ? [src, dst] : [src, [src[0] + (dst[0] - src[0]) * 0.45, src[1]], [src[0] + (dst[0] - src[0]) * 0.55, dst[1]], dst], K.ra[1], aw, 0.85, "go");
      flow(sp, K.ra[1], 2, Math.max(1.6, aw * 0.6), 1, 0.35);
    });
    const titles = n ? ["β 细胞", "α 细胞", "大脑", "胃"] : ["胰岛 β 细胞", "胰岛 α 细胞", "大脑", "胃"];
    const eff = n ? ["胰岛素↑", "胰高糖素↓", "食欲↓", "排空变慢"] : ["胰岛素 ↑", "胰高糖素 ↓", "食欲 ↓", "胃排空变慢"];
    const sub = ["血糖高时才加力", "肝脏少放糖", "吃得少，常能减重", "饭后血糖升得慢"];
    const effCol = [K.ins[2], K.gcg[2], "#6a5c9e", "#a4513f"];
    let stom = null;
    cards.forEach((c, k) => {
      panel(c, 8);
      if (n) txt(titles[k], c.x + c.w / 2, c.y + sf * 0.95, sf * 0.9, K.soft, "center", 700);
      else txt(titles[k], c.x + c.w * 0.25, c.y + c.h * 0.27, sf, K.soft, "left", 700);
      const icx = n ? c.x + c.w / 2 : c.x + c.w * 0.12, icy = n ? c.y + c.h * 0.5 : c.y + c.h * 0.54;
      const is = n ? Math.min(c.w * 0.36, c.h * 0.24) : Math.min(c.w * 0.1, c.h * 0.4);
      if (k === 0) {
        isletCell(icx, icy + is * 0.15, is * 0.8, "b", 0.9, n ? c.y + sf * 1.8 : c.y + 4, 0.6);
        mol("glu", icx + is * 1.05, icy - is * 0.7, Math.max(3.5, is * 0.2), 0.9, time * 0.5);
      } else if (k === 1) {
        isletCell(icx, icy + is * 0.15, is * 0.8, "a", 0.08, n ? c.y + sf * 1.8 : c.y + 4, 0);
        minusSign(icx + is * 0.85, icy - is * 0.55, Math.max(6, is * 0.24), 1);
      } else if (k === 3) {
        organ("stomach", icx, icy, is);
        // 食糜慢慢流出幽门
        const sp = sample([[icx + is * 0.2, icy + is * 0.1], [icx - is * 0.45, icy + is * 0.55], [icx - is * 1.1, icy + is * 0.5]], 20);
        for (let i = 0; i < 3; i++) {
          const t = (time * 0.07 + i / 3) % 1, p = along(sp, t);
          ctx.beginPath(); ctx.arc(p[0], p[1], Math.max(2, is * 0.09), 0, TAU); ctx.fillStyle = rgba("#c9a86a", Math.sin(t * Math.PI)); ctx.fill();
        }
        stom = { x: icx + is * 0.3, y: icy };
      } else {
        organ("brain", icx, icy, is * 0.95);
        minusSign(icx + is * 0.85, icy - is * 0.55, Math.max(6, is * 0.24), 1);
      }
      if (n) txt(eff[k], c.x + c.w / 2, c.y + c.h - sf * 0.85, sf * 0.9, effCol[k], "center", 700);
      else {
        txt(eff[k], c.x + c.w * 0.25, c.y + c.h * 0.62, sf * 1.2, effCol[k], "left", 700);
        TB.font(sf * 1.2, 700); const ew2 = ctx.measureText(eff[k]).width;
        txt("  " + sub[k], c.x + c.w * 0.25 + ew2, c.y + c.h * 0.62, sf, K.soft, "left", 500);
      }
    });
    const on = (k) => live && CH[3].labels.indexOf(k) >= 0;
    put(G, "s3mimic", on("mimic"), dk.x, dk.y - ir * 0.4, n ? hub.x + hub.w * 0.8 : hub.x + hub.w * 0.5, hub.y + LF() * 1.0, n ? "药物模仿 GLP-1" : "模仿 GLP-1，插进它的受体", K.ra[1]);
    if (!n && stom) put(G, "s3gi", on("gi") && T > 3, stom.x, stom.y + 4, cards[3].x + cards[3].w * 0.3, cards[3].y + cards[3].h + LF() * 2.2, "刚开始常有恶心等胃肠反应", "#a4513f");
  }

  // =================== 第 5 幕：DPP-4 抑制剂 ===================
  function scene4(G, live, T) {
    const A = G.A, n = G.n, sf = SF();
    const d = ease(clamp((T - 4.5) / 2, 0, 1));
    const vr = { x: A.x, y: A.y + A.h * (n ? 0.26 : 0.22), w: A.w, h: A.h * (n ? 0.3 : 0.28) };
    const ir = Math.min(IR(), vr.h * 0.2), rg = Math.max(4, ir * 0.55);
    const V = band(vr, Math.round(nGlu() * 0.6), rg);
    // 小肠：绒毛里的 L 细胞
    const gut = { x: A.x, y: A.y + A.h * (n ? 0.7 : 0.64), w: A.w * (n ? 0.42 : 0.34), h: A.h * (n ? 0.3 : 0.36) };
    const gg = ctx.createLinearGradient(0, gut.y, 0, gut.y + gut.h);
    gg.addColorStop(0, "#fde4e0"); gg.addColorStop(1, "#f6cbc5");
    const nv = n ? 4 : 5, vw = gut.w / nv;
    ctx.beginPath(); ctx.moveTo(gut.x, gut.y + gut.h);
    for (let k = 0; k < nv; k++) {
      const x = gut.x + k * vw;
      ctx.lineTo(x + vw * 0.12, gut.y + gut.h * 0.3);
      ctx.arc(x + vw * 0.5, gut.y + gut.h * 0.3, vw * 0.38, Math.PI, 0);
      ctx.lineTo(x + vw * 0.88, gut.y + gut.h * 0.3); ctx.lineTo(x + vw, gut.y + gut.h * 0.85);
    }
    ctx.lineTo(gut.x + gut.w, gut.y + gut.h); ctx.closePath();
    ctx.fillStyle = gg; ctx.fill(); ctx.strokeStyle = "#c98e86"; ctx.lineWidth = 1.2; ctx.stroke();
    const lx = gut.x + vw * 1.5, ly = gut.y + gut.h * 0.2;
    ctx.beginPath(); ctx.ellipse(lx, ly, vw * 0.22, gut.h * 0.16, 0, 0, TAU); ctx.fillStyle = glossy(lx, ly, vw * 0.25, K.glp1[0], "#f8c58e"); ctx.fill(); ctx.strokeStyle = K.glp1[2]; ctx.lineWidth = 1; ctx.stroke();
    txt(n ? "小肠 L 细胞" : "小肠：L 细胞分泌 GLP-1", gut.x + gut.w * 0.5, gut.y + gut.h - sf * 0.7, sf, "#a4554d", "center", 700);
    // 胰岛 β 细胞
    const br = Math.min(A.h * (n ? 0.14 : 0.16), A.w * 0.08), bx = A.x + A.w * (n ? 0.84 : 0.66), by = A.y + A.h - br * 1.05 - sf * 1.3;
    const insRate = 0.25 + 0.75 * d;
    const B = isletCell(bx, by, br, "b", insRate, vr.y + vr.h - V.ew - 4, d * 0.7);
    txt("胰岛 β 细胞", bx, by + br + sf * 0.9, sf, "#9a6a36", "center", 700);
    // DPP-4 酶：贴在血管壁上，口朝下
    const er = Math.max(9, Math.min(ir * 1.6, vr.h * 0.3)), ey = vr.y + V.ew + er * 1.05;
    const EX = (n ? [0.42, 0.62] : [0.4, 0.56]).map((f) => A.x + A.w * f);
    // GLP-1 的路线：从 L 细胞上来，沿血管往右，到 β 细胞
    const yl = vr.y + vr.h * 0.62;
    const surv = 0.08 + 0.85 * d, NP = 7, spd = 0.075;
    const path = sample([[lx, ly - gut.h * 0.1], [lx, yl], [lx + (EX[0] - lx) * 0.5, yl], [EX[0], yl], [EX[1], yl], [bx, yl], [bx, by - br]], 60);
    const cutAt = (EX[0] - lx) / (bx - lx) * 0.8 + 0.12; // 大约在第一个酶下面
    let cutPick = null;
    for (let i = 0; i < NP; i++) {
      const raw = time * spd + i / NP, t = raw % 1, cyc = Math.floor(raw);
      const lives = rnd(i * 13 + cyc * 7 + 1) < surv;
      const a = clamp(t / 0.05, 0, 1) * clamp((1 - t) / 0.06, 0, 1);
      if (lives || t < cutAt) {
        const p = along(path, t);
        mol("glp1", p[0], p[1], Math.max(4, ir * 0.55), a, 0);
      } else {
        // 被剪成两截，慢慢消失
        const u = clamp((t - cutAt) / 0.14, 0, 1), p = along(path, cutAt), fr = Math.max(3, ir * 0.4);
        const fa = (1 - u) * a;
        if (fa > 0.02) {
          ctx.save(); ctx.globalAlpha *= fa;
          [[-1, 0.4], [1, -0.3]].forEach((q) => {
            ctx.beginPath(); ctx.arc(p[0] + q[0] * u * er * 1.2, p[1] + q[1] * u * er + u * er * 0.5, fr, 0, TAU);
            ctx.fillStyle = "#e9c9a6"; ctx.fill(); ctx.strokeStyle = "#a07a55"; ctx.lineWidth = 1; ctx.stroke();
          });
          ctx.restore();
          if (!cutPick) cutPick = { x: p[0], y: p[1] };
        }
      }
    }
    // 酶 + 堵住它的药
    const cr = Math.max(5, er * 0.5);
    EX.forEach((x, j) => {
      mol("dpp4", x, ey, er, 1, Math.PI + Math.sin(time * 3 + j) * 0.06 * (1 - d));
      const cy = ey + er * 0.7 + (1 - d) * vr.h * 0.25, cx = x - (1 - d) * A.w * 0.12;
      mol("dpp4i", cx, cy, cr, clamp(d * 3, 0, 1), Math.PI);
      noSign(x + er * 1.3, ey - er * 0.1, Math.max(6, er * 0.45), clamp((d - 0.5) * 2, 0, 1));
    });
    txt("血管", A.x + sf * 1.4, vr.y + V.ew + sf * 0.9, sf, K.soft, "center", 500);
    const on = (k) => live && CH[4].labels.indexOf(k) >= 0;
    const topBy = A.y + (vr.y - A.y) * 0.5;
    put(G, "s4cut", on("cut") && T < 5, EX[0], ey, n ? A.x + A.w * 0.5 : EX[0], topBy, "DPP-4 酶：很快把 GLP-1 剪断", K.dpp[1]);
    put(G, "s4guard", on("guard") && d > 0.6, EX[1], ey + er * 0.8, n ? A.x + A.w * 0.5 : EX[1] + A.w * 0.08, topBy, "抑制剂堵住酶，GLP-1 多留一会儿", K.dpi[1]);
    put(G, "s4ins", on("insup") && d > 0.6 && T > 7.5, B.cx - br * 0.4, B.cy - br * 0.3, n ? A.x + A.w * 0.62 : B.cx - br * 2.9, n ? A.y + A.h - LF() : B.cy + br * 0.2, "胰岛素分泌更好", K.ins[1]);
  }

  // =================== 第 6 幕：促泌剂和胰岛素，当心低血糖 ===================
  function scene5(G, live, T) {
    const A = G.A, n = G.n, sf = SF();
    const vr = { x: A.x, y: A.y, w: A.w, h: A.h * (n ? 0.24 : 0.22) };
    const ir = Math.min(IR(), vr.h * 0.2), rg = Math.max(4, ir * 0.55);
    const V = band(vr, nGlu(), rg);
    const low = clamp((4.2 - S.glu) / 0.8, 0, 1);
    if (low > 0.02) { ctx.fillStyle = rgba(K.red, 0.07 * low * (0.8 + 0.2 * Math.sin(time * 2.5))); ctx.fillRect(vr.x, vr.y, vr.w, vr.h); }
    // 左：β 细胞 + 磺脲类受体
    const r = Math.min(A.h * (n ? 0.27 : 0.28), A.w * (n ? 0.17 : 0.13)), cx = A.x + A.w * (n ? 0.2 : 0.16), cy = A.y + A.h - r - sf * 1.6;
    const B = isletCell(cx, cy, r, "b", 1, vr.y + vr.h - V.ew - 4, 1);
    const ang = -0.6, rr = Math.max(6, r * 0.13);
    const sd = receptor("su", cx + Math.cos(-Math.PI / 2 + ang) * r, cy + Math.sin(-Math.PI / 2 + ang) * r, rr, Math.max(4, rr * 0.55), 0.7 + 0.3 * Math.sin(time * 4), ang, ["su", 1]);
    bolt(cx + r * 0.1, cy - r * 0.05, r * 0.22, 0.8 + 0.2 * Math.sin(time * 6));
    txt("胰岛 β 细胞", cx, cy + r + sf * 0.95, sf, "#9a6a36", "center", 700);
    // 中：血糖刻度尺
    const gx = A.x + A.w * (n ? 0.47 : 0.42), gw = Math.max(10, A.w * 0.03);
    const gy0 = vr.y + vr.h + A.h * 0.1, gy1 = A.y + A.h - sf * 1.6;
    const vmin = 2, vmax = 10, Y = (v) => gy1 - (v - vmin) / (vmax - vmin) * (gy1 - gy0);
    ctx.beginPath(); ctx.roundRect(gx - gw / 2, gy0, gw, gy1 - gy0, gw / 2); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = "#aab5cc"; ctx.lineWidth = 1.2; ctx.stroke();
    const lv = clamp(S.glu, vmin, vmax), colV = S.glu < 3.9 ? K.red : S.glu < 4.4 ? K.warn : K.ok;
    ctx.save(); ctx.beginPath(); ctx.roundRect(gx - gw / 2, gy0, gw, gy1 - gy0, gw / 2); ctx.clip();
    ctx.fillStyle = rgba(K.ok, 0.12); ctx.fillRect(gx - gw / 2, Y(7), gw, Y(4.4) - Y(7));
    ctx.fillStyle = glossy(gx - gw * 0.2, Y(lv), gw * 2, mix(colV, "#ffffff", 0.4), colV); ctx.fillRect(gx - gw / 2, Y(lv), gw, gy1 - Y(lv));
    ctx.restore();
    ctx.strokeStyle = K.red; ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(gx - gw * 1.4, Y(3.9)); ctx.lineTo(gx + gw * 1.4, Y(3.9)); ctx.stroke(); ctx.setLineDash([]);
    txt("3.9", gx - gw * 1.6, Y(3.9), sf, K.red, "right", 700);
    txt("7.0", gx - gw * 1.6, Y(7), sf * 0.9, K.soft, "right", 500);
    txt("血糖", gx, gy0 - sf * 0.8, sf, K.ink, "center", 700);
    if (!n) {
      const sx = gx + gw * 1.8;
      ["心慌", "手抖", "出汗", "饥饿"].forEach((s, k) => txt(s, sx, Y(3.9) + sf * (1.2 + k * 1.35), sf, K.red, "left", 500));
    }
    // 右：胰岛素笔打进皮下
    const sk = { x: A.x + A.w * (n ? 0.62 : 0.56), y: A.y + A.h * (n ? 0.66 : 0.6), w: A.w * (n ? 0.38 : 0.24), h: A.h * (n ? 0.34 : 0.26) };
    if (!n) sk.h = Math.min(sk.h, G.LB.y - 10 - sk.y);
    ctx.fillStyle = "#f7d9cf"; ctx.fillRect(sk.x, sk.y, sk.w, sk.h * 0.22);
    ctx.fillStyle = "#fdf1d8"; ctx.fillRect(sk.x, sk.y + sk.h * 0.22, sk.w, sk.h * 0.78);
    for (let k = 0; k < 7; k++) { const fx = sk.x + sk.w * (0.1 + 0.13 * k), fy = sk.y + sk.h * (0.5 + 0.25 * (k % 2)); ctx.beginPath(); ctx.arc(fx, fy, sk.h * 0.14, 0, TAU); ctx.fillStyle = glossy(fx, fy, sk.h * 0.14, K.lip[0], K.lip[1]); ctx.fill(); ctx.strokeStyle = rgba(K.lip[2], 0.6); ctx.lineWidth = 1; ctx.stroke(); }
    ctx.strokeStyle = "#d9a99b"; ctx.lineWidth = 1; ctx.strokeRect(sk.x, sk.y, sk.w, sk.h);
    txt("皮下", sk.x + sk.w - sf * 1.3, sk.y + sk.h - sf * 0.8, sf, "#a88a2a", "center", 500);
    const nx = sk.x + sk.w * 0.35, ny = sk.y + sk.h * 0.42, pl = Math.min(A.h * 0.42, A.w * 0.2);
    pen(nx, ny, pl, 2.2, 1);
    // 胰岛素从皮下进入血管
    const ip = sample([[nx, ny], [nx - sk.w * 0.12, sk.y - A.h * 0.05], [nx - sk.w * 0.2, vr.y + vr.h * 0.55]], 30);
    carry(ip, "ins", 3, Math.max(4.5, ir * 0.6), 1, 0.2, 0);
    const on = (k) => live && CH[5].labels.indexOf(k) >= 0;
    put(G, "s5push", on("push"), sd.x, sd.y, n ? A.x + A.w * 0.3 : cx + r * 0.3, n ? vr.y + vr.h * 0.5 : vr.y + vr.h * 0.5, "血糖不高也在“催”胰岛素", K.su[1]);
    put(G, "s5low", on("low") && S.glu < 4.2, gx + gw * 0.5, Y(Math.max(lv, 2.4)), n ? A.x + A.w * 0.74 : gx + A.w * 0.13, n ? Y(7.4) : Y(6.2), "低于 3.9 就是低血糖", K.red);
    if (!n) put(G, "s5dose", on("dose") && T > 3, nx + pl * 0.36, ny - pl * 0.5, sk.x + sk.w * 0.7, vr.y + vr.h * 0.5, "胰岛素剂量由医生调", K.ins[1]);
  }

  // =================== 第 7 幕：用药原则 ===================
  function scene6(G, live, T) {
    const A = G.A, n = G.n, sf = SF();
    const bh = Math.min(A.h * 0.2, LF() * 3.2), by = A.y + A.h - bh, topH = by - A.y - LF() * 2.6;
    const ir = Math.min(IR(), topH * 0.1);
    // 左：医生看的三件事
    const inW = A.w * (n ? 0.3 : 0.24), ih = (topH - 12) / 3;
    const ins = [0, 1, 2].map((k) => ({ x: A.x, y: A.y + k * (ih + 6), w: inW, h: ih }));
    const inT = n ? ["血糖", "体重", "心·肾"] : ["血糖高低", "体重", "心脏、肾脏"];
    ins.forEach((c, k) => {
      panel(c, 8);
      const icx = c.x + Math.min(c.h * 0.55, c.w * 0.22), icy = c.y + c.h / 2, is = Math.min(c.h * 0.36, c.w * 0.14);
      if (k === 0) mol("glu", icx, icy, is * 0.9, 1, time * 0.3);
      else if (k === 1) {
        ctx.beginPath(); ctx.moveTo(icx - is * 0.9, icy + is * 0.8); ctx.lineTo(icx - is * 0.6, icy - is * 0.5); ctx.lineTo(icx + is * 0.6, icy - is * 0.5); ctx.lineTo(icx + is * 0.9, icy + is * 0.8); ctx.closePath();
        ctx.fillStyle = glossy(icx, icy, is, "#f3f5fa", "#b9c2d4"); ctx.fill(); ctx.strokeStyle = "#7d879c"; ctx.lineWidth = 1; ctx.stroke();
        ctx.beginPath(); ctx.arc(icx, icy - is * 0.5, is * 0.32, Math.PI, 0); ctx.strokeStyle = "#7d879c"; ctx.lineWidth = Math.max(1.5, is * 0.14); ctx.stroke();
      } else {
        const hx = icx - is * 0.35, hy = icy, hs = is * 0.55;
        ctx.beginPath(); ctx.moveTo(hx, hy + hs * 0.8); ctx.bezierCurveTo(hx - hs * 1.3, hy - hs * 0.1, hx - hs * 0.5, hy - hs * 1.0, hx, hy - hs * 0.35);
        ctx.bezierCurveTo(hx + hs * 0.5, hy - hs * 1.0, hx + hs * 1.3, hy - hs * 0.1, hx, hy + hs * 0.8);
        ctx.fillStyle = glossy(hx, hy, hs, "#ffc9c9", "#e0605a"); ctx.fill(); ctx.strokeStyle = "#9c3a36"; ctx.lineWidth = 1; ctx.stroke();
        organ("kidney", icx + is * 0.55, icy, is * 0.62);
      }
      txt(inT[k], icx + is * 1.25, icy, LF(), K.ink, "left", 700);
    });
    // 中：医生评估
    const dc = { x: A.x + A.w * (n ? 0.37 : 0.31), y: A.y + topH * 0.18, w: A.w * (n ? 0.26 : 0.26), h: topH * 0.64 };
    const glowA = 0.5 + 0.2 * Math.sin(time * 1.5);
    const gl = ctx.createRadialGradient(dc.x + dc.w / 2, dc.y + dc.h / 2, 0, dc.x + dc.w / 2, dc.y + dc.h / 2, dc.w * 0.9);
    gl.addColorStop(0, rgba(K.ok, 0.18 * glowA)); gl.addColorStop(1, rgba(K.ok, 0));
    ctx.fillStyle = gl; ctx.fillRect(dc.x - dc.w * 0.4, dc.y - dc.h * 0.4, dc.w * 1.8, dc.h * 1.8);
    panel(dc, 10);
    const cbw = Math.min(dc.w * 0.34, dc.h * 0.38), cbx = dc.x + dc.w / 2 - cbw / 2, cby = dc.y + dc.h * 0.12;
    ctx.beginPath(); ctx.roundRect(cbx, cby, cbw, cbw * 1.25, 4); ctx.fillStyle = glossy(cbx + cbw * 0.3, cby, cbw, "#fbf3e3", "#e3cfa6"); ctx.fill(); ctx.strokeStyle = "#a8864a"; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.roundRect(cbx + cbw * 0.3, cby - cbw * 0.08, cbw * 0.4, cbw * 0.18, 2); ctx.fillStyle = "#8f9ab3"; ctx.fill();
    for (let k = 0; k < 3; k++) {
      const ly = cby + cbw * (0.35 + k * 0.3);
      ctx.strokeStyle = K.ok; ctx.lineWidth = Math.max(1.5, cbw * 0.07); ctx.beginPath(); ctx.moveTo(cbx + cbw * 0.15, ly); ctx.lineTo(cbx + cbw * 0.24, ly + cbw * 0.08); ctx.lineTo(cbx + cbw * 0.38, ly - cbw * 0.08); ctx.stroke();
      ctx.strokeStyle = "#b9a37a"; ctx.lineWidth = Math.max(1, cbw * 0.05); ctx.beginPath(); ctx.moveTo(cbx + cbw * 0.48, ly); ctx.lineTo(cbx + cbw * 0.85, ly); ctx.stroke();
    }
    txt(n ? "医生评估" : "医生评估，个体化选药", dc.x + dc.w / 2, dc.y + dc.h - sf * 1.1, LF(), K.ink, "center", 700);
    ins.forEach((c) => arrow([[c.x + c.w + 3, c.y + c.h / 2], [dc.x - 3, dc.y + dc.h / 2]], "#8f9ab3", Math.max(1.8, ir * 0.14), 0.8, "go"));
    // 右：常常联合用药
    const rc = { x: A.x + A.w * (n ? 0.69 : 0.63), y: A.y, w: A.w * (n ? 0.31 : 0.37), h: topH };
    panel(rc, 10);
    txt(n ? "常联合用药" : "常常几种药联合使用", rc.x + rc.w / 2, rc.y + sf * 1.1, LF(), K.ink, "center", 700);
    const combos = n ? [["metf", "sglt2i"], ["metf", "glp1cap"]] : [["metf", "sglt2i"], ["metf", "glp1cap"], ["metf", "dpp4i"]];
    const cr = Math.min(ir * 0.95, rc.w * 0.09), rowH = (rc.h - sf * 2) / combos.length;
    combos.forEach((cb, k) => {
      const yy = rc.y + sf * 2 + rowH * (k + 0.5) + Math.sin(time * 1.3 + k) * 1.5, x1 = rc.x + rc.w * 0.3, x2 = rc.x + rc.w * 0.7;
      mol(cb[0], x1, yy, cr, 1); mol(cb[1], x2, yy + (M[cb[1]].plug ? cr * 0.3 : 0), cr, 1);
      txt("+", (x1 + x2) / 2, yy, sf * 1.3, K.soft, "center", 700);
    });
    arrow([[dc.x + dc.w + 3, dc.y + dc.h / 2], [rc.x - 3, dc.y + dc.h / 2]], K.ok, Math.max(1.8, ir * 0.14), 0.8, "go");
    // 下：三条原则
    const bw = n ? A.w : (G.LB.x - 12 - A.x);
    const chips = n ? [{ k: "no", t: "不自行停药" }, { k: "cal", t: "定期复查" }, { k: "run", t: "饮食运动" }]
      : [{ k: "no", t: "不自己加药、停药，不信偏方" }, { k: "cal", t: "定期复查" }, { k: "run", t: "管住嘴、迈开腿" }];
    const cwid = n ? [0.36, 0.32, 0.32] : [0.42, 0.29, 0.29];
    let cx0 = A.x;
    const CP = chips.map((c, k) => {
      const w = bw * cwid[k] - 6, r = { x: cx0, y: by, w, h: bh };
      cx0 += w + 6;
      panel(r, 8);
      const icx = r.x + r.h * 0.5, icy = r.y + r.h / 2, is = r.h * 0.28;
      if (c.k === "no") noSign(icx, icy, is * 0.9, 1);
      else if (c.k === "cal") {
        ctx.beginPath(); ctx.roundRect(icx - is, icy - is * 0.85, is * 2, is * 1.8, 3); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = "#7d879c"; ctx.lineWidth = 1.2; ctx.stroke();
        ctx.fillStyle = K.ok; ctx.fillRect(icx - is, icy - is * 0.85, is * 2, is * 0.5);
        ctx.fillStyle = "#b9c2d4"; for (let q = 0; q < 6; q++) ctx.fillRect(icx - is * 0.7 + (q % 3) * is * 0.55, icy - is * 0.1 + Math.floor(q / 3) * is * 0.5, is * 0.3, is * 0.3);
      } else {
        const sp = [[icx - is, icy + is * 0.4], [icx - is * 0.3, icy - is * 0.6], [icx + is * 0.3, icy + is * 0.2], [icx + is, icy - is * 0.7]];
        arrow(sp, K.ok, Math.max(2, is * 0.2), 1, "go");
      }
      txt(c.t, icx + is * 1.4, icy, n ? sf * 1.05 : LF(), K.ink, "left", 700);
      return r;
    });
    const on = (k) => live && CH[6].labels.indexOf(k) >= 0;
    put(G, "s6nostop", on("nostop") && T > 1 && (!n || T < 6.5), CP[0].x + CP[0].w * 0.2, CP[0].y + 2, n ? A.x + A.w * 0.5 : CP[0].x + CP[0].w * 0.5, by - LF() * 1.3, "不舒服或效果不好，找医生调", K.red);
    put(G, "s6check", on("check") && (n ? T >= 6.5 : T > 3), CP[1].x + CP[1].w * 0.5, CP[1].y + 2, n ? A.x + A.w * 0.5 : CP[1].x + CP[1].w * 0.75, by - LF() * 1.3, "查血糖、糖化血红蛋白、肾功能", K.ok);
  }

  function drawScene(i, live, T) {
    const G = areaFor(i);
    [scene0, scene1, scene2, scene3, scene4, scene5, scene6][i](G, live, T);
    TB.legend(G.Lg);
  }

  function hud() {
    const col = (s) => (s === "ok" ? K.ok : s === "warn" ? K.warn : K.red);
    const v = S.glu, gs = v < 3.9 ? "bad" : v < 7.05 ? "ok" : "warn";
    pill(14, 12, "血糖", `${v.toFixed(1)} mmol/L`, col(gs), false);
    const p = CH[cur].pill;
    pill(W - 14, 12, p[0], p[1], col(p[2]), true);
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
    chapters: CH, state: S, dur: DUR, accent: "#7c9a32",
    titleCard: { lines: ["降糖药", "各拧哪个阀门？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
