// 糖的钥匙：教科书示意图画风（机制类集），通用画法见 shared/textbook.js。
// 一张总图贯穿 6 幕：上方是毛细血管，左下是胰岛 β 细胞，中间是肌肉细胞（膜上有胰岛素受体和 GLUT4），右边是脂肪细胞。
// 各幕只改状态（血糖、胰岛素多少、受体灵不灵、GLUT4 上膜多少、β 细胞累不累……），引擎会平滑过渡。
Anima.register("insulin", {
    "title": "糖的钥匙",
    "tag": "胰腺小剧场",
    "headline": "血糖为什么会【升高】？",
    "lede": "胰岛素像一把钥匙，帮葡萄糖打开细胞的门。锁生锈了、钥匙不够了，糖就只好留在血里，一步步走向 2 型糖尿病。",
    "summary": "胰岛素怎样帮糖进细胞：胰岛素抵抗、糖尿病前期、2 型糖尿病的诊断，以及运动和减重的作用。",
    "footer": "血糖偏高或想做糖尿病筛查，可到内分泌科就诊。",
    "canvasLabel": "血管、胰岛 β 细胞和肌肉细胞示意图：胰岛素与受体结合，GLUT4 上膜，葡萄糖进入细胞",
    "disease": "2 型糖尿病",
    "organs": ["pancreas"],
    "categories": ["metabolic"],
    "color": "#e0b23a",
    "look": "textbook"
  }, () => {
  const CH = [
    { title: "吃饭后，血糖升高", glu: 7.6, keys: 1, rust: 0, open: 0.3, work: 0, tired: 0, fat: 0, ex: 0, heal: 0, harm: 0, meal: 1,
      gl: "饭后血糖", gs: "ok", pill: ["胰岛素", "开始分泌", "ok"],
      text: "吃完一碗米饭，淀粉被消化成葡萄糖，就像一块块小方糖，跑进血液里，血糖就升高了。胰腺里有一群胰岛β细胞，像一座小工厂，一发现糖多了，就赶紧做出一把把“钥匙”，这把钥匙就是胰岛素。",
      fact: "胰岛只占胰腺的 1%～2%，却管着全身的血糖",
      labels: ["sugar", "factory", "key"] },
    { title: "钥匙打开细胞的门", glu: 5.6, keys: 1, rust: 0, open: 1, work: 0, tired: 0, fat: 0, ex: 0, heal: 0, harm: 0, meal: 0,
      gl: "血糖", gs: "ok", pill: ["胰岛素", "正常", "ok"],
      text: "肌肉、肝脏和脂肪细胞，就像一座座带门锁的小房子。胰岛素这把钥匙插进锁里一拧，门就开了，血里的葡萄糖走进细胞，变成干活的能量，多的还能存起来。糖进了细胞，血糖也就慢慢回落了。",
      fact: "正常：空腹血糖 < 6.1 mmol/L，糖负荷后 2 小时 < 7.8 mmol/L",
      labels: ["lock", "enter", "energy"] },
    { title: "锁生锈了：胰岛素抵抗", glu: 5.8, keys: 2, rust: 1, open: 0.62, work: 1, tired: 0, fat: 1, ex: 0, heal: 0, harm: 0, meal: 0,
      gl: "空腹血糖", gs: "ok", pill: ["胰岛素", "加班分泌", "warn"],
      text: "肚子上的脂肪越来越多，又常常久坐不动，细胞的锁就像生了锈，钥匙插进去要拧好几下才打得开，这叫胰岛素抵抗。β细胞只好加班，做出更多钥匙。辛苦是辛苦，这时血糖往往还能保持正常。",
      fact: "腰围男性 ≥ 90 cm、女性 ≥ 85 cm，属于中心性肥胖",
      labels: ["rust", "work", "fat"] },
    { title: "糖尿病前期：工厂累了", glu: 6.6, keys: 0.7, rust: 1, open: 0.36, work: 0.5, tired: 0.6, fat: 1, ex: 0, heal: 0, harm: 0, meal: 0,
      gl: "空腹血糖", gs: "warn", pill: ["胰岛素", "有点不够", "warn"],
      text: "β细胞长年加班，渐渐累了，做出的钥匙跟不上需要。能打开的门变少，糖在血里待得更久，血糖开始偏高，但还没到糖尿病，这就是糖尿病前期。它一般没有感觉，抽血查了才知道，是身体亮起的黄灯。",
      fact: "空腹 6.1～7.0 或糖负荷后 2 小时 7.8～11.1 mmol/L：糖尿病前期",
      labels: ["tired", "nokey"] },
    { title: "2 型糖尿病：糖堆在血里", glu: 9.5, keys: 0.45, rust: 1, open: 0.12, work: 0, tired: 1, fat: 1, ex: 0, heal: 0, harm: 1, meal: 0,
      gl: "空腹血糖", gs: "bad", pill: ["胰岛素", "不够用", "bad"],
      text: "钥匙越来越少，锁又不灵，葡萄糖进不了细胞，只好堆在血液里，这就是 2 型糖尿病。有人会口渴、尿多、没力气，也有很多人毫无感觉。确诊要抽血，通常还要复查一次。血糖长期偏高，会慢慢伤害全身的血管。",
      fact: "诊断：空腹 ≥ 7.0、糖负荷后 2 小时 ≥ 11.1 mmol/L 或糖化血红蛋白 ≥ 6.5%",
      labels: ["pile", "vessel"] },
    { title: "擦掉锈，给工厂减负", glu: 5.9, keys: 1, rust: 0.35, open: 0.92, work: 0, tired: 0.2, fat: 0.3, ex: 1, heal: 1, harm: 0.4, meal: 0,
      gl: "空腹血糖", gs: "ok", pill: ["胰岛素", "负担减轻", "ok"],
      text: "锁上的锈是可以擦掉的。运动时肌肉一收缩，自己就能把糖拉进细胞，不全靠胰岛素；体重减掉 5%～10%，锁会灵活很多。吃饭七八分饱，少喝甜饮料。糖尿病前期积极干预，可以推迟甚至避免糖尿病；需要时在医生指导下用药。",
      fact: "我国成人糖尿病患病率约 12%，糖尿病前期约 38%",
      labels: ["exercise", "lighter"] },
  ];
  const DUR = 12;

  const { clamp, mix, rnd, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const TB = Anima.textbook({ W: () => W, H: () => H, time: () => time });
  const { ctx, TAU, rgba, glossy, txt, sample, along, ease, LF, SF, IR, nar, mol, minusSign, bolt, arrow, flow, bilayer, tag } = TB;

  // ---------- 本集新登记的图标（形状名带前缀，免得和别的集撞名） ----------
  const REG = Anima.textbook, circNotch = REG.SHAPES.circle.notch;
  // 葡萄糖：空心六元环（吡喃糖环），和实心六边形的腺苷区分开
  REG.registerShape("glucoseRing", {
    path(c, r) {
      for (let k = 0; k <= 6; k++) { const a = Math.PI / 6 + k * TAU / 6; if (k) c.lineTo(Math.cos(a) * r, Math.sin(a) * r); else c.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
      c.closePath();
      for (let k = 0; k <= 6; k++) { const a = Math.PI / 6 - k * TAU / 6, q = r * 0.46; if (k) c.lineTo(Math.cos(a) * q, Math.sin(a) * q); else c.moveTo(Math.cos(a) * q, Math.sin(a) * q); }
      c.closePath();
    },
    notch: circNotch,
  });
  // 胰岛素：一大一小两个相连的球（B 链 + A 链）
  REG.registerShape("insulinDimer", {
    path(c, r) {
      c.moveTo(-r * 0.3 + r * 0.62, r * 0.06); c.arc(-r * 0.3, r * 0.06, r * 0.62, 0, TAU);
      c.moveTo(r * 0.45 + r * 0.48, -r * 0.1); c.arc(r * 0.45, -r * 0.1, r * 0.48, 0, TAU);
    },
    notch: circNotch,
  });
  // GLUT4：两根并排的跨膜柱，中间留一条糖能通过的孔道
  REG.registerShape("glutPore", {
    path(c, r) { c.roundRect(-r * 0.92, -r, r * 0.74, r * 2, r * 0.3); c.roundRect(r * 0.18, -r, r * 0.74, r * 2, r * 0.3); },
    notch: circNotch,
  });
  REG.register("glu", { shape: "glucoseRing", color: ["#c6eef3", "#1ea5b8", "#0e6674"], label: "葡萄糖" });
  REG.register("ins", { shape: "insulinDimer", color: ["#f7c9e6", "#cc4f9f", "#86285f"], label: "胰岛素" });
  REG.register("insr", { shape: "Y", color: ["#fce8f4", "#e4a6ce", "#a24a82"], label: "胰岛素受体" });
  REG.register("glut4", { shape: "glutPore", color: ["#e2f6f2", "#7fcdc2", "#2c8a7f"], label: "GLUT4" });

  // ---------- 本集结构用色 ----------
  const K = Object.assign({}, TB.K, {
    glu: TB.MOLECULES.glu.color, ins: TB.MOLECULES.ins.color, insr: TB.MOLECULES.insr.color, glut: TB.MOLECULES.glut4.color,
    beta: ["#fff6e8", "#f7dfbe", "#c99a62"], betaTired: ["#f3f4f7", "#d5d9e1", "#9aa1b0"],
    lumen0: "#fff8f6", lumen1: "#fbe8e7",
    endo: ["#fdeef2", "#efc4cf", "#c38a9b"], endoHurt: ["#f1f1f4", "#cfd1da", "#9b9cad"],
    rbc: ["#f8bcbc", "#e27575", "#b04848"],
    cyto0: "#fff9f6", cyto1: "#fbece9", myoA: "#f0c3c8", myoI: "#fae4e6", myoZ: "#cf96a0",
    lip: ["#fffbe8", "#f5d98a", "#c9a23e"],
    ok: "#2fa465", warn: "#d99400",
  });
  const S = { glu: 7.6, keys: 1, rust: 0, open: 0.3, work: 0, tired: 0, fat: 0, ex: 0, heal: 0, harm: 0, meal: 1 };

  // ---------- 血管里流动的粒子 ----------
  const gluP = Array.from({ length: 44 }, (_, i) => ({ x: rnd(i + 10) * 1.2, yn: rnd(i + 60) * 2 - 1, rot: rnd(i + 110) * 6, sp: 0.8 + rnd(i + 150) * 0.4 }));
  const insP = Array.from({ length: 14 }, (_, i) => ({ x: rnd(i + 200) * 1.2, yn: rnd(i + 230) * 2 - 1, ph: rnd(i + 260) * 6, sp: 0.8 + rnd(i + 280) * 0.4 }));
  const rbcP = Array.from({ length: 4 }, (_, i) => ({ x: i / 4 + rnd(i + 300) * 0.12, yn: rnd(i + 320) * 1.4 - 0.7, ph: rnd(i + 340) * 6 }));
  const nGlu = () => Math.round(clamp((S.glu - 4) * 5.2 + S.meal * 5, 5, gluP.length));
  const nIns = () => Math.round(clamp(S.keys * 5, 0, insP.length));

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
    const sp = dt * 0.045;
    for (const p of gluP) { p.x += sp * p.sp; p.rot += dt * 0.5; if (p.x > 1.1) p.x -= 1.2; }
    for (const p of insP) { p.x += sp * p.sp * 1.1; if (p.x > 1.1) p.x -= 1.2; }
    for (const p of rbcP) { p.x += sp * 0.9; if (p.x > 1.1) p.x -= 1.2; }
  }

  // ---------- 图例（每幕一套；窄屏只留 3 个，保持一行） ----------
  function legendItems(i) {
    const n = nar();
    const L = [
      [["mol", "glu", "葡萄糖"], ["mol", "ins", "胰岛素"], ["mol", "insr", "胰岛素受体"]],
      [["mol", "ins", "胰岛素"], ["mol", "insr", "胰岛素受体"], ["mol", "glut4", "GLUT4 转运体"], ["line", K.ins[1], "胰岛素信号"]],
      [["mol", "ins", "胰岛素"], ["mol", "glut4", "GLUT4 转运体"], ["minus", "", "信号减弱"], ["band", K.lip[1], "脂肪"]],
      [["mol", "glu", "葡萄糖"], ["mol", "ins", "胰岛素"], ["mol", "insr", "胰岛素受体"], ["mol", "glut4", "GLUT4 转运体"]],
      [["mol", "glu", "葡萄糖"], ["mol", "glut4", "GLUT4 转运体"], ["band", K.endoHurt[1], "受损的血管内皮"]],
      [["mol", "glut4", "GLUT4 转运体"], ["line", K.ins[1], "胰岛素信号"], ["line", K.fire, "运动（肌肉收缩）信号"]],
    ][i];
    if (!n) return L;
    return [
      [L[0], L[1], L[2]],
      [L[1], L[2], ["line", K.ins[1], "信号"]],
      [L[0], L[1], L[2]],
      [L[1], L[2], L[3]],
      [L[0], L[1], ["band", K.endoHurt[1], "受损内皮"]],
      [["mol", "glut4", "GLUT4"], ["line", K.ins[1], "胰岛素信号"], ["line", K.fire, "运动信号"]],
    ][i];
  }

  // 顶部胶囊在窄屏上可能叠成两行：照引擎 pill() 的算法量一下，内容从胶囊下面开始
  function contentTop() {
    const fs = Math.max(12, W / 60) * Anima.UI, h = fs * 1.4 + 14;
    TB.font(fs, 500); const a1 = ctx.measureText(CH[cur].gl).width, b1 = ctx.measureText(CH[cur].pill[0]).width;
    TB.font(fs * 1.4, 700); const a2 = ctx.measureText(S.glu.toFixed(1) + " mmol/L").width, b2 = ctx.measureText(CH[cur].pill[1]).width;
    const two = W - 14 - (b1 + b2 + 34) < 14 + (a1 + a2 + 34) + 8;
    return 12 + (two ? h * 2 + 8 : h) + 8;
  }

  // ---------- 几何 ----------
  function geo() {
    const n = nar();
    const Lg = TB.legendLayout(legendItems(cur));
    const top = contentTop();
    const A = n ? { x: 8, y: top, w: W - 16, h: H - top - Lg.h - 8 } : { x: 16, y: top, w: W - 32, h: H - top - 12 };
    const ir = Math.min(IR(), A.h * 0.075);
    const vT = A.y, vH = A.h * (n ? 0.24 : 0.26), vB = vT + vH, ew = Math.max(4, vH * 0.1);
    const cT = vB + A.h * 0.03, cB = A.y + A.h;
    const col = (a, b) => ({ x0: A.x + A.w * a, x1: A.x + A.w * b });
    const beta = col(0, n ? 0.23 : 0.22), mus = col(n ? 0.25 : 0.25, n ? 0.79 : 0.77), fat = col(n ? 0.81 : 0.79, 1);
    const Ry = ir * 1.5, mt = Math.max(6, ir * 0.75);
    const ym = cT + Ry * 1.5;
    const fatB = n ? cB : H - Lg.bh - 22;
    return { n, Lg, A, ir, vT, vH, vB, ew, cT, cB, beta, mus, fat, Ry, mt, ym, fatB };
  }

  // ---------- 血管 ----------
  function vessel(g) {
    const { A, vT, vB, ew } = g;
    const lg = ctx.createLinearGradient(0, vT, 0, vB);
    lg.addColorStop(0, K.lumen0); lg.addColorStop(1, K.lumen1);
    ctx.fillStyle = lg; ctx.fillRect(0, vT, W, vB - vT);
    // 内皮细胞：上下两排扁长的细胞；血糖长期高时变灰、出现缝隙
    const L = Math.max(34, W / 13);
    const out = { hurt: null };
    [[vT, 0], [vB - ew, 1]].forEach((row) => {
      const y = row[0], side = row[1];
      for (let i = 0, x = -L * 0.3 * side; x < W + L; i++, x += L) {
        const hurt = rnd(i * 3 + side * 50 + 400) < S.harm * 0.6;
        const c = hurt ? K.endoHurt : K.endo, sh = hurt ? L * 0.08 * S.harm : 0;
        const x0 = x + 1 + sh, w = L - 2 - sh * 2;
        ctx.beginPath(); ctx.roundRect(x0, y, w, ew, ew / 2);
        ctx.fillStyle = glossy(x0 + w * 0.4, y + ew * 0.3, w * 0.6, c[0], c[1]); ctx.fill();
        ctx.strokeStyle = c[2]; ctx.lineWidth = 1; ctx.stroke();
        ctx.beginPath(); ctx.ellipse(x0 + w * 0.5, y + ew * 0.5, w * 0.12, ew * 0.28, 0, 0, TAU); ctx.fillStyle = rgba(c[2], 0.45); ctx.fill();
        if (hurt && side === 1 && x0 > A.x + A.w * 0.55 && x0 < A.x + A.w * 0.8 && !out.hurt) out.hurt = { x: x0 + w * 0.5, y: y + ew * 0.5 };
      }
    });
    // 管壁上粘着的糖（糖化）
    if (S.harm > 0.05) {
      const r = Math.max(4, g.ir * 0.36);
      for (let i = 0; i < 9; i++) {
        const x = (i + 0.3 + rnd(i + 460) * 0.4) * W / 9, y = i % 2 ? vB - ew - r * 0.8 : vT + ew + r * 0.8;
        mol("glu", x, y, r, clamp(S.harm * 2 - rnd(i + 470), 0, 1) * 0.9, 0);
      }
    }
    if (!g.n) txt("血管", A.x + TB.SF() * 1.4, vT + ew + SF() * 0.95, SF(), K.soft, "center", 500);
    return out;
  }
  function vesselContents(g) {
    const { vT, vB, ew, ir } = g;
    const yIn = (yn, r) => (vT + vB) / 2 + yn * ((vB - vT) / 2 - ew - r - 2);
    const rr = Math.max(7, ir * 0.95);
    for (const p of rbcP) {
      const x = p.x * W, y = yIn(p.yn, rr * 0.6) + Math.sin(time * 1.4 + p.ph) * 1.5;
      ctx.beginPath(); ctx.ellipse(x, y, rr * 1.15, rr * 0.62, 0, 0, TAU);
      ctx.fillStyle = glossy(x, y, rr, K.rbc[0], K.rbc[1]); ctx.globalAlpha = 0.75; ctx.fill(); ctx.globalAlpha = 1;
      ctx.strokeStyle = rgba(K.rbc[2], 0.6); ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x, y, rr * 0.5, rr * 0.2, 0, 0, TAU); ctx.fillStyle = rgba(K.rbc[2], 0.18); ctx.fill();
    }
    const rg = Math.max(5, ir * 0.5), ri = Math.max(5.5, ir * 0.56);
    const ng = nGlu();
    for (let i = 0; i < ng; i++) {
      const p = gluP[i], x = p.x * W, fade = clamp((p.x + 0.08) / 0.12, 0, 1) * clamp((1.08 - p.x) / 0.08, 0, 1);
      mol("glu", x, yIn(p.yn, rg) + Math.sin(time + i) * 1.2, rg, fade * clamp(S.glu * 1.5 - 4 - i * 0.02, 0.4, 1), p.rot);
    }
    const ni = nIns();
    for (let i = 0; i < ni; i++) {
      const p = insP[i], x = p.x * W, fade = clamp((p.x + 0.08) / 0.12, 0, 1) * clamp((1.08 - p.x) / 0.08, 0, 1);
      mol("ins", x, yIn(p.yn, ri) + Math.sin(time * 1.3 + p.ph) * 1.5, ri, fade * clamp(S.keys * 5 - i, 0, 1), Math.sin(time * 0.6 + p.ph) * 0.4);
    }
    return { yIn, rg, ri };
  }

  // ---------- 胰岛 β 细胞 ----------
  const GRAN = [[-0.42, 0.05], [-0.12, -0.28], [0.22, -0.12], [0.42, 0.2], [0.05, 0.28], [-0.3, -0.52], [0.3, -0.5], [0.12, 0.62]];
  function betaCell(g) {
    const { beta, cT, cB, vB, ew, ir } = g;
    const cw = beta.x1 - beta.x0, cx = (beta.x0 + beta.x1) / 2;
    const rx = cw * 0.44, ry = Math.min((cB - cT) * 0.44, rx * 1.12), cy = cT + ry + 2;
    const tired = S.tired, work = S.work;
    const c = [mix(K.beta[0], K.betaTired[0], tired), mix(K.beta[1], K.betaTired[1], tired), mix(K.beta[2], K.betaTired[2], tired)];
    // 加班：暖色光晕
    if (work > 0.03) {
      const gl = ctx.createRadialGradient(cx, cy, 0, cx, cy, rx * 1.7);
      gl.addColorStop(0, rgba(K.fire, (0.35 + 0.1 * Math.sin(time * 5)) * work)); gl.addColorStop(1, rgba(K.fire, 0));
      ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(cx, cy, rx * 1.7, 0, TAU); ctx.fill();
    }
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, TAU);
    ctx.fillStyle = glossy(cx - rx * 0.2, cy - ry * 0.1, Math.max(rx, ry), c[0], c[1]); ctx.fill();
    ctx.strokeStyle = K.memHead; ctx.lineWidth = Math.max(3, g.mt * 0.6); ctx.stroke();
    ctx.strokeStyle = c[2]; ctx.lineWidth = 1; ctx.stroke();
    // 细胞核
    ctx.beginPath(); ctx.ellipse(cx - rx * 0.12, cy + ry * 0.35, rx * 0.26, ry * 0.2, -0.2, 0, TAU); ctx.fillStyle = "rgba(60,50,80,0.22)"; ctx.fill();
    ctx.beginPath(); ctx.arc(cx - rx * 0.1, cy + ry * 0.36, rx * 0.06, 0, TAU); ctx.fillStyle = "rgba(60,50,80,0.45)"; ctx.fill();
    // 储存胰岛素的分泌颗粒（累了就变少、变淡）
    const gr = Math.min(ir * 0.62, rx * 0.16);
    const nGr = Math.round(GRAN.length * (1 - 0.65 * tired));
    for (let k = 0; k < nGr; k++) {
      const p = GRAN[k], x = cx + p[0] * rx + Math.sin(time * 0.8 + k) * 1, y = cy + p[1] * ry * 0.85 + Math.cos(time * 0.7 + k) * 1;
      granule(x, y, gr, 1 - 0.5 * tired);
    }
    // 分泌：颗粒移到细胞顶上，和膜融合，把胰岛素放进血管
    const rate = 0.1 + 0.16 * clamp(S.keys, 0, 2.2), nSec = Math.max(1, Math.round(1 + 1.5 * clamp(S.keys, 0, 2)));
    const topY = cy - ry, ri = Math.max(5.5, ir * 0.56);
    let rel = null;
    for (let k = 0; k < nSec; k++) {
      const t = (time * rate + k / nSec) % 1, sx = cx + (k % 2 ? 1 : -1) * rx * (0.12 + 0.18 * (k % 3) / 2);
      const y0 = cy + ry * 0.1, a0 = clamp(S.keys * 2, 0, 1) * (1 - 0.4 * tired);
      if (t < 0.5) {
        const u = ease(t / 0.5);
        granule(sx, y0 + (topY + gr * 1.1 - y0) * u, gr, a0 * clamp(t / 0.08, 0, 1));
      } else if (t < 0.6) {
        // 融合：颗粒贴在膜上变平
        const u = (t - 0.5) / 0.1;
        ctx.save(); ctx.globalAlpha *= a0 * (1 - u); ctx.translate(sx, topY + gr * 0.6); ctx.scale(1 + u * 0.5, 1 - u * 0.5);
        granule(0, 0, gr, 1); ctx.restore();
      } else {
        // 胰岛素往上走进血管
        const u = (t - 0.6) / 0.4, ey = vB - ew - ri * 1.2;
        const x = sx + Math.sin(u * 5 + k) * ri * 0.5, y = topY - (topY - ey) * ease(u);
        mol("ins", x, y, ri, a0 * clamp((1 - u) / 0.15, 0, 1), Math.sin(time + k) * 0.3);
        if (u > 0.2 && u < 0.7 && !rel) rel = { x, y };
      }
    }
    // 窄屏上这几幕底部有标注框，会盖住这行小字，就先不写
    if (!(g.n && (cur === 0 || cur === 1 || cur === 5))) txt("胰岛 β 细胞", cx, Math.min(cy + ry + SF() * 1.05, cB - SF() * 0.4), SF(), mix("#9a6a36", "#7d86a0", tired), "center", 700);
    return { cx, cy, rx, ry, rel: rel || { x: cx, y: (topY + vB) / 2 } };
  }
  function granule(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill();
    ctx.strokeStyle = K.memEdge; ctx.lineWidth = Math.max(1, r * 0.13); ctx.stroke();
    ctx.restore();
    mol("ins", x, y, r * 0.55, a, 0);
  }

  // ---------- 肌肉细胞：膜上的胰岛素受体和 GLUT4，胞内的囊泡、信号、线粒体、糖原、肌原纤维 ----------
  function muscleCell(g) {
    const { n, mus, ym, mt, cB, Ry, ir, vB, ew } = g;
    const x0 = mus.x0, x1 = mus.x1, mw = x1 - x0, Hi = cB - ym - mt / 2, yi = ym + mt / 2;
    const at = (f) => x0 + mw * f;
    const heal = S.heal, rust = S.rust, ex = S.ex;
    // 胞质
    const cg = ctx.createLinearGradient(0, ym, 0, cB);
    cg.addColorStop(0, K.cyto0); cg.addColorStop(1, K.cyto1);
    ctx.beginPath(); ctx.roundRect(x0, ym, mw, cB - ym, Math.min(14, mw * 0.06)); ctx.fillStyle = cg; ctx.fill();
    if (heal > 0.02) {
      const hg = ctx.createRadialGradient(at(0.5), yi + Hi * 0.4, 0, at(0.5), yi + Hi * 0.4, mw * 0.6);
      hg.addColorStop(0, rgba(K.ok, 0.1 * heal)); hg.addColorStop(1, rgba(K.ok, 0));
      ctx.fillStyle = hg; ctx.fillRect(x0, ym, mw, cB - ym);
    }
    ctx.strokeStyle = K.memHead; ctx.lineWidth = mt * 0.7; ctx.stroke();
    ctx.strokeStyle = K.memEdge; ctx.lineWidth = 1; ctx.stroke();
    bilayer(x0 - mt * 0.2, x1 + mt * 0.2, ym, mt);

    // 肌原纤维（运动时一收一放）
    const myT = yi + Hi * (n ? 0.7 : 0.72), myB = cB - Hi * 0.07, rows = n ? 1 : 2, rh = (myB - myT) / rows;
    const squeeze = ex * (0.5 - 0.5 * Math.cos(time * 3.2));
    ctx.save(); ctx.beginPath(); ctx.rect(x0 + mt * 0.6, myT, mw - mt * 1.2, myB - myT); ctx.clip();
    for (let r = 0; r < rows; r++) {
      const y = myT + r * rh + rh * 0.12, h = rh * 0.76, Ls = Math.max(22, mw / 7) * (1 - 0.16 * squeeze);
      ctx.fillStyle = K.myoI; ctx.beginPath(); ctx.roundRect(x0 + mt * 0.6, y, mw - mt * 1.2, h, h * 0.3); ctx.fill();
      const cx = at(0.5);
      for (let k = -8; k <= 8; k++) {
        const zx = cx + k * Ls;
        ctx.fillStyle = K.myoA; ctx.fillRect(zx + Ls * 0.22, y + h * 0.08, Ls * 0.56, h * 0.84);
        ctx.strokeStyle = K.myoZ; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(zx, y); ctx.lineTo(zx, y + h); ctx.stroke();
      }
    }
    ctx.restore();
    txt("肌肉细胞", at(0.86), n ? cB - Hi * 0.07 - rh * 0.5 : myT - SF() * 0.1, SF(), "#a0606b", "center", 700);

    // 受体和 GLUT4 的位置
    const RX = n ? [0.14, 0.66] : [0.12, 0.64];
    const GX = n ? [0.36, 0.86] : [0.32, 0.47, 0.85];
    const vr = Math.max(9, ir * 1.05), vY = yi + Hi * (n ? 0.33 : 0.34);
    const mito = { x: at(n ? 0.15 : 0.13), y: yi + Hi * (n ? 0.5 : 0.52) };
    const glyc = { x: at(n ? 0.62 : 0.66), y: yi + Hi * (n ? 0.52 : 0.5) };
    const rg = Math.max(5, ir * 0.5), ri = Math.max(5.5, ir * 0.56);

    // 线粒体（产能）
    const er = Math.min(ir * 1.5, Hi * 0.14);
    ctx.save(); ctx.translate(mito.x, mito.y); ctx.rotate(-0.25);
    ctx.beginPath(); ctx.ellipse(0, 0, er * 1.5, er * 0.8, 0, 0, TAU);
    ctx.fillStyle = glossy(0, 0, er * 1.5, "#ffd9cf", "#f0a898"); ctx.fill(); ctx.strokeStyle = "#c46f60"; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); for (let k = -2; k <= 2; k++) { ctx.moveTo(k * er * 0.45, -er * 0.55); ctx.lineTo(k * er * 0.45 + er * 0.15, er * 0.55); } ctx.stroke();
    ctx.restore();
    // 糖原（多的糖存起来）：一簇小颗粒
    const gs = Math.max(2.4, ir * 0.24), fill = clamp(0.35 + 0.65 * S.open - 0.3 * rust, 0.2, 1);
    for (let k = 0; k < 11; k++) {
      const a = k * 2.4, d = k === 0 ? 0 : (k < 5 ? 1.25 : 2.3) * gs;
      ctx.beginPath(); ctx.arc(glyc.x + Math.cos(a) * d, glyc.y + Math.sin(a) * d * 0.85, gs, 0, TAU);
      ctx.fillStyle = rgba(K.glu[1], k < 11 * fill ? 0.75 : 0.18); ctx.fill();
      ctx.strokeStyle = rgba(K.glu[2], 0.5); ctx.lineWidth = 0.8; ctx.stroke();
    }
    if (!n) txt("糖原", glyc.x, glyc.y + gs * 3.4 + SF() * 0.5, SF() * 0.9, K.glu[2], "center", 500);
    const eAct = clamp(S.open * 1.1 + ex * 0.4, 0, 1);
    bolt(mito.x + er * 1.9, mito.y - er * 0.6, er * 0.7, eAct * (0.7 + 0.3 * Math.sin(time * 4)));

    // 脂肪多、胰岛素抵抗时，肌肉细胞里也堆起小油滴
    const nLip = Math.round(4 * S.fat * rust);
    for (let k = 0; k < nLip; k++) {
      const x = at(0.22 + k * 0.17 + rnd(k + 700) * 0.05), y = yi + Hi * (0.6 + rnd(k + 710) * 0.06), r = Math.max(3, ir * 0.36);
      ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = glossy(x, y, r, K.lip[0], K.lip[1]); ctx.fill();
      ctx.strokeStyle = K.lip[2]; ctx.lineWidth = 1; ctx.stroke();
    }

    // ---- GLUT4：上膜的比例 open；没上膜的留在胞内小囊泡里 ----
    const nG = GX.length, gSlots = GX.map((f, i) => {
      const h = clamp(S.open * nG - i, 0, 1);
      return { x: at(f), h, fused: clamp((h - 0.8) / 0.2, 0, 1) };
    });
    const gH = mt / 2 + ir * 0.75, gw = ir * 0.62;
    // 胰岛素信号（先画在下面）
    const rec = RX.map((f, j) => {
      const x = at(f), occ = clamp(S.keys * 1.6 - j * 0.9, 0, 1);
      const act = occ * (1 - 0.8 * rust) * (1 + 0.2 * heal);
      return { x, occ, act };
    });
    const sig = [];
    rec.forEach((r, j) => {
      const tg = gSlots.filter((s, i) => (n ? i === j : (j === 0 ? i < 2 : i === 2)));
      tg.forEach((s, q) => {
        const sx = r.x + (s.x > r.x ? 1 : -1) * Ry * 0.2, sy = ym + Ry * 1.05;
        const ex2 = s.x + (s.x > r.x ? -1 : 1) * vr * 1.25, ey = vY + vr * 0.1;
        const pts = [[sx, sy], [(sx + ex2) / 2, Math.max(sy, ey) + Hi * 0.1], [ex2, ey]];
        const a = 0.12 + 0.88 * clamp(r.act, 0, 1);
        const sp = arrow(pts, K.ins[1], Math.max(2.2, ir * 0.2), a * clamp(r.occ * 3, 0, 1), "go");
        flow(sp, K.ins[1], 2, Math.max(1.8, ir * 0.14), clamp(r.act, 0, 1), 0.35);
        if (sp) sig.push({ sp, j, rust: rust * clamp(r.occ * 3, 0, 1) });
      });
    });
    // 胰岛素抵抗：信号在半路被削弱（⊖）
    sig.forEach((s, k) => { const m = along(s.sp, 0.5); minusSign(m[0], m[1], Math.max(6, ir * 0.42), s.rust); });
    // 运动：肌肉收缩自己发出信号，把 GLUT4 拉上膜（不靠胰岛素）
    let exPt = null;
    if (ex > 0.02) {
      const bx = at(n ? 0.56 : 0.4), by = myT - rh * 0.05;
      gSlots.forEach((s, i) => {
        if (n ? i !== 0 : i !== 1) return;
        const pts = [[bx + ir * 0.5, by - ir * 0.3], [(bx + s.x) / 2 + ir * 1.2, (by + vY) / 2 + ir * 0.2], [s.x + vr * 0.5, vY + vr * 1.25]];
        const sp = arrow(pts, K.fire, Math.max(2.2, ir * 0.2), ex, "go");
        flow(sp, "#c47400", 2, Math.max(1.8, ir * 0.14), ex, 0.45);
      });
      bolt(bx - ir * 0.3, by + rh * 0.3, ir * 1.05, ex * (0.8 + 0.2 * Math.sin(time * 6)));
      exPt = { x: bx - ir * 0.3, y: by + rh * 0.3 };
    }

    // 囊泡和上膜的 GLUT4
    gSlots.forEach((s, i) => {
      const va = 1 - s.fused;
      if (va > 0.02) {
        const y = vY - (vY - (yi + vr * 0.6)) * ease(s.h) + Math.sin(time * 1.1 + i) * 1.2 * (1 - s.h);
        ctx.save(); ctx.globalAlpha *= va;
        ctx.beginPath(); ctx.arc(s.x, y, vr, 0, TAU); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill();
        ctx.strokeStyle = K.memHead; ctx.lineWidth = Math.max(2, vr * 0.28); ctx.stroke();
        ctx.strokeStyle = K.memEdge; ctx.lineWidth = 1; ctx.stroke();
        ctx.restore();
        mol("glut4", s.x, y, vr * 0.52, va);
      }
      if (s.fused > 0.02) {
        // 还在不停地有新的囊泡往膜上送
        const t = (time * 0.3 + i * 0.37) % 1, y1 = yi + vr * 0.7;
        const sa = s.fused * (t < 0.12 ? t / 0.12 : clamp((0.9 - t) / 0.15, 0, 1)) * 0.9;
        if (sa > 0.02) {
          const y = vY - (vY - y1) * ease(clamp(t / 0.75, 0, 1));
          ctx.save(); ctx.globalAlpha *= sa;
          ctx.beginPath(); ctx.arc(s.x, y, vr, 0, TAU); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill();
          ctx.strokeStyle = K.memHead; ctx.lineWidth = Math.max(2, vr * 0.28); ctx.stroke();
          ctx.strokeStyle = K.memEdge; ctx.lineWidth = 1; ctx.stroke();
          ctx.restore();
          mol("glut4", s.x, y, vr * 0.52, sa);
        }
        mol("glut4", s.x, ym, gH, s.fused);
      }
    });

    // 葡萄糖经 GLUT4 进入细胞，走向线粒体（产能）或糖原（储存）
    let enterPt = null;
    gSlots.forEach((s, i) => {
      if (s.fused < 0.05) return;
      for (let k = 0; k < 3; k++) {
        const t = (time * 0.32 + k / 3 + i * 0.21) % 1;
        const dst = (k + i) % 2 ? glyc : mito;
        const pts = [[s.x + (rnd(i * 7 + k) - 0.5) * gw, vB + rg * 1.4], [s.x, ym - gH], [s.x, ym + gH], [dst.x + (s.x - dst.x) * 0.35, dst.y - Hi * 0.08], [dst.x, dst.y]];
        const sp = sample(pts, 30), p = along(sp, t);
        const a = s.fused * Math.sin(t * Math.PI) * clamp(S.glu / 5, 0.7, 1);
        mol("glu", p[0], p[1], rg, clamp(a * 1.6, 0, 1), t * 3);
        if (!enterPt && t > 0.22 && t < 0.45 && a > 0.4) enterPt = { x: p[0], y: p[1] };
      }
    });
    // 门没开：血糖高时，葡萄糖在膜外排队
    const nWait = Math.round(clamp((S.glu - 5.8) * 2.2, 0, 7) * (1 - S.open * 0.7));
    for (let k = 0; k < nWait; k++) {
      const x = at(0.22 + (k / 7) * 0.72 + rnd(k + 800) * 0.04), y = vB + (ym - Ry * 1.35 - vB) * (0.3 + 0.6 * rnd(k + 810)) + Math.sin(time * 1.2 + k) * 1.5;
      mol("glu", x, y, rg, clamp((S.glu - 5.8) * 2.2 - k, 0, 1) * 0.85, k);
    }

    // 胰岛素受体（Y 形酪氨酸激酶受体）：胰岛素卡进 Y 的叉口，胞内的激酶区亮起
    const recOut = rec.map((r, j) => {
      const x = r.x, yc = ym - Ry * 0.5;
      // 左边这个受体在受体灵敏时一直结合着（标注指着它）；锈了以后两个都反复结合、脱开
      const steady = j === 0 && rust < 0.55;
      const P = 4.2 + j * 1.3 - rust * 1.2, ph = steady ? 0.5 : (time / P + j * 0.37) % 1;
      let bw = 0;
      if (ph > 0.2 && ph < 0.86) bw = clamp((ph - 0.2) / 0.05, 0, 1) * clamp((0.86 - ph) / 0.05, 0, 1);
      const bound = r.occ * bw, glowA = bound * (1 - 0.75 * rust) * (1 + 0.3 * heal);
      if (glowA > 0.02) {
        const gg = ctx.createRadialGradient(x, yc - Ry * 0.3, 0, x, yc - Ry * 0.3, Ry * 1.6);
        gg.addColorStop(0, rgba(K.insr[1], 0.55 * clamp(glowA, 0, 1))); gg.addColorStop(1, rgba(K.insr[1], 0));
        ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(x, yc - Ry * 0.3, Ry * 1.6, 0, TAU); ctx.fill();
      }
      mol("insr", x, yc, Ry, 1, 0);
      // 胞内激酶区
      const ky = ym + Ry * 0.72, ks = Ry * 0.3;
      for (const d of [-1, 1]) {
        const kx = x + d * ks * 0.62;
        ctx.beginPath(); ctx.roundRect(kx - ks * 0.55, ky - ks * 0.6, ks * 1.1, ks * 1.2, ks * 0.3);
        ctx.fillStyle = glossy(kx, ky, ks, K.insr[0], mix(K.insr[1], "#b9c0cf", 0.4 * (1 - glowA))); ctx.fill();
        ctx.strokeStyle = K.insr[2]; ctx.lineWidth = 1; ctx.stroke();
        // 磷酸化（P）：激活时亮起
        const pa = clamp(glowA * 1.4, 0, 1);
        if (pa > 0.02) {
          const px = kx + d * ks * 0.75, py = ky + ks * 0.3, pr = Math.max(3.4, ks * 0.4);
          ctx.save(); ctx.globalAlpha *= pa;
          ctx.beginPath(); ctx.arc(px, py, pr, 0, TAU); ctx.fillStyle = glossy(px, py, pr, "#fff2c2", K.light); ctx.fill();
          ctx.strokeStyle = "#b8860b"; ctx.lineWidth = 1; ctx.stroke();
          if (pr > 5) txt("P", px, py + 0.5, pr * 1.3, "#7a5300", "center", 700);
          ctx.restore();
        }
      }
      // 胰岛素：从血管下来 → 卡进叉口 → 离开；抵抗时要反复结合好几次
      const cy = yc - Ry * 0.6;
      let ix = x, iy = cy, ia = r.occ;
      if (ph < 0.2) { const u = ease(ph / 0.2); ix = x + (1 - u) * Ry * 0.8 * (j % 2 ? 1 : -1); iy = vB + ri - (vB + ri - cy) * u; ia *= clamp(ph / 0.05, 0, 1); }
      else if (ph > 0.86) { const u = (ph - 0.86) / 0.14; ix = x + u * Ry * (j % 2 ? -1 : 1); iy = cy - u * Ry * 1.2; ia *= 1 - u; }
      const wig = ph > 0.2 && ph < 0.86 ? Math.sin(time * 9 + j) * 0.35 * rust : 0;
      mol("ins", ix, iy, ri, clamp(ia * 1.3, 0, 1), wig);
      // 抵抗时：更多胰岛素挤在受体上方等着
      const qa = clamp((S.keys - 1.1) * 1.6, 0, 1) * rust;
      if (qa > 0.02) {
        for (let q = 0; q < 2; q++) {
          const hop = Math.abs(Math.sin(time * 1.7 + q * 1.4 + j));
          mol("ins", x + (q ? 1 : -1) * Ry * 0.75 + Math.sin(time + q) * 2, cy - Ry * (0.9 + 0.25 * q) - hop * Ry * 0.25, ri, qa * 0.9, q);
        }
      }
      return { x, top: yc - Ry * 0.92, cy, ky, occ: r.occ, bound };
    });

    return { recOut, gSlots, mito, glyc, vY, vr, exPt, enterPt, er, x0, x1, Hi, yi, myT };
  }

  // ---------- 脂肪细胞：一颗大油滴把细胞撑满，胖了就更大 ----------
  function fatCell(g) {
    const { fat, cT, fatB, ir, n } = g;
    const cw = fat.x1 - fat.x0, cx = (fat.x0 + fat.x1) / 2;
    const avail = fatB - cT - SF() * 1.8;
    const base = Math.min(cw * 0.47, avail * 0.5);
    const r = base * (0.72 + 0.28 * S.fat), cy = cT + avail * 0.5 + 2;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU);
    ctx.fillStyle = glossy(cx, cy, r, "#fffaf2", "#f6e8d6"); ctx.fill();
    ctx.strokeStyle = K.memHead; ctx.lineWidth = Math.max(3, g.mt * 0.6); ctx.stroke();
    ctx.strokeStyle = K.memEdge; ctx.lineWidth = 1; ctx.stroke();
    const dr = r * 0.84, dx = cx - r * 0.06, dy = cy + r * 0.06;
    ctx.beginPath(); ctx.arc(dx, dy, dr, 0, TAU); ctx.fillStyle = glossy(dx, dy, dr, K.lip[0], K.lip[1]); ctx.fill();
    ctx.strokeStyle = K.lip[2]; ctx.lineWidth = 1; ctx.stroke();
    // 被挤扁的细胞核
    ctx.save(); ctx.translate(cx + r * 0.62, cy - r * 0.62); ctx.rotate(-0.8);
    ctx.beginPath(); ctx.ellipse(0, 0, r * 0.18, r * 0.07, 0, 0, TAU); ctx.fillStyle = "rgba(60,50,80,0.32)"; ctx.fill(); ctx.restore();
    txt("脂肪细胞", cx, Math.min(cy + r + SF() * 1.0, fatB - SF() * 0.4), SF(), "#9a7a2a", "center", 700);
    // 脂肪多了，放出的脂肪酸飘向肌肉细胞，让胰岛素信号变弱
    const fa = clamp((S.fat - 0.3) * 1.5, 0, 1) * S.rust;
    if (fa > 0.02) {
      for (let k = 0; k < 4; k++) {
        const t = (time * 0.12 + k / 4) % 1, x = cx - r - t * (g.fat.x0 - g.mus.x1 + cw * 0.15 + r * 0.3), y = cy + Math.sin(t * 6 + k) * r * 0.3 - r * 0.2 + k * r * 0.12;
        ctx.beginPath(); ctx.arc(x, y, Math.max(2.2, ir * 0.2), 0, TAU); ctx.fillStyle = rgba(K.lip[1], fa * Math.sin(t * Math.PI)); ctx.fill();
      }
    }
    return { cx, cy, r };
  }

  // ---------- 标注 ----------
  function put(g, key, on, tx, ty, bx, by, text, col) {
    const h = LF() * 1.8;
    tag(key, on, tx, ty, bx, clamp(by, g.A.y + h / 2 + 2, H - h / 2 - 4 - (g.n ? g.Lg.h : 0)), text, col);
  }

  function draw() {
    TB.background();
    const g = geo();
    const V = vessel(g);
    const B = betaCell(g);
    const F = fatCell(g);
    const M = muscleCell(g);
    vesselContents(g);
    // 胰岛素分泌的方向箭头
    TB.legend(g.Lg);

    const L = CH[cur].labels, on = (k) => lt > 0.6 && L.indexOf(k) >= 0;
    const n = g.n, A = g.A, lf = LF(), vMid = (g.vT + g.vB) / 2;
    const R0 = M.recOut[0], R1 = M.recOut[M.recOut.length - 1];
    const upY = g.vT + g.vH * 0.3; // 血管上半部那一排
    // 第 1 幕
    put(g, "sugar", on("sugar"), A.x + A.w * 0.6, vMid + g.vH * 0.12, A.x + A.w * (n ? 0.7 : 0.52), upY, "饭后，糖进入血液", K.glu[1]);
    put(g, "key", on("key"), B.rel.x, B.rel.y, A.x + A.w * 0.2, upY, "钥匙 = 胰岛素", K.ins[1]);
    put(g, "factory", on("factory"), B.cx + B.rx * 0.5, B.cy - B.ry * 0.1, n ? A.x + A.w * 0.3 : B.cx + B.rx * 0.9, n ? g.cB - lf * 0.9 : B.cy + B.ry * 0.55, "胰岛 β 细胞：钥匙工厂", K.beta[2]);
    // 第 2 幕
    put(g, "lock", on("lock"), R0.x, R0.cy, n ? A.x + A.w * 0.3 : R0.x + A.w * 0.03, upY, "钥匙一拧，门开了", K.ins[1]);
    const gs = M.gSlots[n ? 1 : 2], ep = { x: gs.x, y: g.ym };
    put(g, "enter", on("enter"), ep.x, ep.y - g.Ry * 0.4, n ? A.x + A.w * 0.72 : ep.x - A.w * 0.02, upY, "糖走进细胞", K.glu[1]);
    put(g, "energy", on("energy"), M.mito.x + M.er * 1.2, M.mito.y, n ? A.x + A.w * 0.28 : M.mito.x - A.w * 0.02, n ? g.cB - lf * 0.9 : M.mito.y + M.Hi * 0.25, "变成能量，多的存起来", K.fire);
    // 第 3 幕
    put(g, "rust", on("rust"), R1.x, R1.cy, n ? A.x + A.w * 0.71 : R1.x, upY, "锁生锈，要拧好几下", K.red);
    put(g, "work", on("work"), B.cx, B.cy - B.ry * 0.2, n ? A.x + A.w * 0.25 : B.cx + B.rx * 0.3, n ? upY : B.cy + B.ry * 0.62, "β 细胞加班做钥匙", K.fire);
    put(g, "fat", on("fat"), F.cx - F.r * 0.2, F.cy + F.r * 0.3, n ? A.x + A.w * 0.6 : F.cx - F.r * 0.4, n ? g.cB - lf * 0.9 : F.cy + F.r + lf * 2.2, "脂肪细胞撑大了", K.lip[2]);
    // 第 4 幕
    put(g, "tired", on("tired"), B.cx, B.cy - B.ry * 0.2, n ? A.x + A.w * 0.27 : B.cx + B.rx * 0.6, n ? upY : B.cy + B.ry * 0.62, "工厂累了，钥匙变少", K.soft);
    put(g, "nokey", on("nokey"), R1.x, R1.top + g.Ry * 0.2, n ? A.x + A.w * 0.73 : R1.x + A.w * 0.02, upY, "等不到钥匙，门不开", K.insr[2]);
    // 第 5 幕
    put(g, "pile", on("pile"), A.x + A.w * 0.4, vMid, A.x + A.w * (n ? 0.3 : 0.36), upY, "糖进不去，堆在血里", K.glu[1]);
    const hp = V.hurt || { x: A.x + A.w * 0.7, y: g.vB - g.ew / 2 };
    put(g, "vessel", on("vessel"), hp.x, hp.y, n ? A.x + A.w * 0.74 : hp.x + A.w * 0.04, n ? upY : g.vB + lf * 1.6, "血管也跟着受伤", K.endoHurt[2]);
    // 第 6 幕
    const xp = M.exPt || { x: M.x0 + (M.x1 - M.x0) * 0.4, y: M.myT };
    put(g, "exercise", on("exercise"), xp.x, xp.y, n ? A.x + A.w * 0.26 : xp.x - A.w * 0.03, g.cB - lf * 0.9, "运动的肌肉自己开门", K.fire);
    put(g, "lighter", on("lighter"), R0.x, R0.cy, n ? A.x + A.w * 0.3 : R0.x + A.w * 0.03, upY, "减重后，锁灵活多了", K.ok);
    hud();
  }

  function hud() {
    const v = S.glu, col = (s) => (s === "ok" ? K.ok : s === "warn" ? K.warn : K.red);
    pill(14, 12, CH[cur].gl, `${v.toFixed(1)} mmol/L`, col(CH[cur].gs), false);
    const p = CH[cur].pill;
    pill(W - 14, 12, p[0], p[1], col(p[2]), true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e0b23a",
    titleCard: { lines: ["血糖为什么", "会升高？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
