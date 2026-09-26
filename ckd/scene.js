Anima.register("ckd", {
    "title": "肾脏的筛子",
    "tag": "肾脏小剧场",
    "headline": "肾脏悄悄【累坏】了？",
    "lede": "肾小球像一个个小筛子，把废物滤进尿里，把蛋白质留在血里。筛子一个个坏掉，早期却几乎没有感觉，所以要靠化验早点发现。",
    "summary": "肾小球怎样过滤血液：蛋白尿、肾小球硬化、eGFR 分期、肾衰竭，以及怎样保护肾脏。",
    "footer": "尿里有蛋白、肾功能下降，或有高血压、糖尿病需要评估肾脏，可到肾内科就诊。",
    "canvasLabel": "卡通肾小球筛子过滤血液的动画",
    "disease": "慢性肾病",
    "organs": ["kidney"],
    "categories": ["kidney"],
    "color": "#c77dba"
  }, () => {
  const CH = [
    { title: "肾脏是净水厂", egfr: 100, leak: 0, scar: 0, work: 0, press: 0, waste: 0.2, late: 0, stage: 0, care: 0, heal: 0,
      pill: ["尿蛋白", "阴性", "ok"],
      text: "肾脏就像身体的净水厂。每个肾里约有一百万个肾单位，打头的是肾小球，它是一团毛细血管绕成的小筛子。血流过来，水和小分子废物从筛孔漏下去，变成尿；红细胞和蛋白质个头大，被好好地留在血里。",
      fact: "两个肾每天过滤约 180 升血液，最后只形成 1～2 升尿",
      labels: ["glom", "keep", "urine"] },
    { title: "筛孔被撑大了", egfr: 85, leak: 0.7, scar: 0, work: 0, press: 1, waste: 0.25, late: 0, stage: 0, care: 0, heal: 0,
      pill: ["尿蛋白", "+", "warn"],
      text: "高血压让血流一直猛冲筛子，高血糖又慢慢损伤筛网，时间长了，筛孔被撑大、变松。本该留下的蛋白质开始漏进尿里，小便上的泡沫变多、久久不散。尿里查到白蛋白，往往是肾脏受伤最早的信号。",
      fact: "尿白蛋白/肌酐比（UACR）≥ 30 mg/g，提示肾脏受损",
      labels: ["press", "holes", "foam"] },
    { title: "筛子一个个坏掉", egfr: 55, leak: 0.8, scar: 0.4, work: 1, press: 0.6, waste: 0.35, late: 0, stage: 0, care: 0, heal: 0,
      pill: ["尿蛋白", "+", "warn"],
      text: "受伤的肾小球会慢慢变硬，最后变成一团疤痕，再也不能过滤。剩下的肾小球只好替它们加班，每个都要滤更多的血。可越是超负荷，坏得越快，像多米诺骨牌一样一个接一个倒下。坏掉的肾单位一般长不回来。",
      fact: "肾单位坏了不能再生，保护好剩下的最要紧",
      labels: ["scar", "work"] },
    { title: "悄悄进展，靠化验发现", egfr: 40, leak: 0.85, scar: 0.6, work: 1, press: 0.4, waste: 0.45, late: 0, stage: 1, care: 0, heal: 0,
      pill: ["尿蛋白", "++", "bad"],
      text: "肾脏的后备力量很强，坏掉一大半，人可能还没有什么感觉。所以要靠化验：用血肌酐算出肾小球滤过率，就知道净水厂还剩多少力气。从九十往下分成五期，数字越小，肾功能越差。",
      fact: "eGFR < 60，或蛋白尿等肾损伤持续超过 3 个月，就是慢性肾病",
      labels: ["silent", "marker"] },
    { title: "晚期：废物排不出去", egfr: 12, leak: 0.6, scar: 0.88, work: 1, press: 0.3, waste: 1, late: 1, stage: 0, care: 0, heal: 0,
      pill: ["血肌酐", "明显升高", "bad"],
      text: "等到肾小球坏掉绝大部分，净水厂就撑不住了。废物和多余的水排不出去，人会浮肿、没胃口、恶心；肾脏帮着造血的激素也少了，出现贫血、乏力。到了这一步，就需要透析或者肾移植，来接替肾脏的工作。",
      fact: "eGFR < 15 为肾衰竭期，常需要透析或肾移植",
      labels: ["waste", "edema", "dialysis"] },
    { title: "护好剩下的小筛子", egfr: 55, leak: 0.25, scar: 0.4, work: 0.2, press: 0, waste: 0.3, late: 0, stage: 0, care: 1, heal: 1,
      pill: ["尿蛋白", "减少", "ok"],
      text: "保护肾脏，最要紧的是管好血压和血糖，吃饭少放盐。不乱吃止痛药，不碰来路不明的草药和偏方。定期查尿常规、尿白蛋白肌酐比和血肌酐，高血压、糖尿病患者每年至少查一次。早发现、早干预，很多人的肾功能能长期保持稳定。",
      fact: "我国成人慢性肾病患病率约 8%～10%，很多人并不知道",
      labels: ["relax"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    wall: "#ffb3b3", adv: "#ffcdc4", lumen: "#fff4ec", lumenMurky: "#efe6dc", endo: "#ffe0e6",
    rbc: "#ff7b7b", rbcPale: "#f2b2a8", protein: "#9fd0f0", waste: "#9a8f94", water: "#bfe6ff",
    glom: "#ff9fae", glomLoop: "#e86a82", scar: "#d6cbc6", scarLine: "#a8958f",
    cup: "#fff6f2", urine: "#fff0a8", foam: "#ffffff", heartPink: "#ff9fb0",
    g1: "#6cc9ae", g2: "#a6d67a", g3a: "#f2cf5b", g3b: "#f5a65a", g4: "#f07b6b", g5: "#c9566b",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, bolt, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { egfr: 100, leak: 0, scar: 0, work: 0, press: 0, waste: 0.2, late: 0, stage: 0, care: 0, heal: 0 };

  // ---------- 几何：上面是血管，中间一排肾小球（小筛子），下面是收集尿液的小管 ----------
  const N = 5, RANK = [2, 4, 0, 3, 1]; // 第 i 个肾小球是第几个坏掉的
  const G = () => {
    const narrow = W / H < 1.4;
    const vt = H * (narrow ? 0.3 : 0.15), vb = H * (narrow ? 0.44 : 0.32), wall = H * (narrow ? 0.03 : 0.04);
    const r = Math.min(H * 0.1, W * 0.068), cy = H * (narrow ? 0.63 : 0.6);
    const ut = H * 0.83, ub = H * 0.94;
    return { narrow, vt, vb, wall, r, cy, ut, ub, xs: Array.from({ length: N }, (_, i) => W * (0.12 + 0.19 * i)) };
  };
  const scarOf = (i) => clamp(S.scar * N - RANK[i], 0, 1);

  // ---------- 粒子 ----------
  const rbcs = Array.from({ length: 8 }, (_, i) => ({ x: i / 8 + rnd(i + 10) * 0.08, yn: rnd(i + 30) * 1.2 - 0.6, ph: rnd(i + 50) * 6 }));
  const prots = Array.from({ length: 6 }, (_, i) => ({ x: i / 6 + 0.06 + rnd(i + 70) * 0.06, yn: rnd(i + 90) * 1.2 - 0.6, ph: rnd(i + 110) * 6 }));
  const wastes = Array.from({ length: 60 }, (_, i) => ({ x: rnd(i + 130) * 1.1, yn: rnd(i + 200) * 1.8 - 0.9 }));
  const hearts = Array.from({ length: 7 }, (_, i) => ({ x: rnd(i + 8000), y: rnd(i + 8100), ph: rnd(i + 8200) * 6 }));
  const nWaste = () => Math.round(clamp(8 + S.waste * 50, 0, wastes.length));
  const nRbc = () => Math.round(8 - 3 * S.late);

  function update(dt) {
    const sp = dt * 0.05 * (1 + 0.3 * S.press);
    for (const p of rbcs) { p.x += sp; if (p.x > 1.1) p.x -= 1.2; }
    for (const p of prots) { p.x += sp * 0.9; if (p.x > 1.1) p.x -= 1.2; }
    for (const p of wastes) { p.x += sp * 1.1; if (p.x > 1.1) p.x -= 1.2; }
  }

  // ---------- 小零件 ----------
  function rbc(x, y, r, mood) {
    ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.8, 0, 0, 6.3); ctx.fillStyle = mix(C.rbc, C.rbcPale, S.late); ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.beginPath(); ctx.ellipse(x - r * 0.45, y - r * 0.4, r * 0.2, r * 0.12, -0.5, 0, 6.3); ctx.fill();
    face(x, y + r * 0.05, r * 0.62, mood);
  }
  // 蛋白质：圆滚滚的淡蓝色团子
  function protein(x, y, r, mood) {
    ctx.beginPath();
    for (let k = 0; k <= 16; k++) {
      const a = k / 16 * Math.PI * 2, rr = r * (1 + 0.1 * Math.sin(a * 3 + x * 0.01));
      ctx[k ? "lineTo" : "moveTo"](x + Math.cos(a) * rr, y + Math.sin(a) * rr * 0.85);
    }
    ctx.closePath(); ctx.fillStyle = C.protein; ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.05, r * 0.6, mood);
  }
  function wasteDot(x, y, s) { ctx.beginPath(); ctx.arc(x, y, s, 0, 6.3); ctx.fillStyle = C.waste; ctx.fill(); }
  function drop(x, y, s) {
    ctx.beginPath(); ctx.moveTo(x, y - s); ctx.quadraticCurveTo(x + s * 0.8, y + s * 0.2, x, y + s * 0.6);
    ctx.quadraticCurveTo(x - s * 0.8, y + s * 0.2, x, y - s); ctx.fillStyle = C.water; ctx.fill(); outline(1.2); ctx.stroke();
  }

  // 一个肾小球：毛线团一样的毛细血管 + 筛孔 + 小脸；外面套着接滤液的小杯子（肾小囊）
  function glomerulus(g, i) {
    const sc = scarOf(i), x = g.xs[i];
    const busy = (1 - sc) * S.work;
    const r = g.r * (1 + 0.14 * busy + 0.06 * S.press * (1 - sc)) * (1 - 0.18 * sc);
    const cy = g.cy + Math.sin(time * (2 + 3 * busy) + i) * (1 + 1.5 * busy);
    // 入球小动脉：从血管伸下来
    const sw = r * 0.34;
    rrect(x - sw / 2, g.vb + g.wall - 3, sw, cy - g.vb - g.wall, sw * 0.4);
    ctx.fillStyle = C.wall; ctx.fill(); outline(2); ctx.stroke();
    // 肾小囊和出口小管
    const cr = g.r * 1.32;
    const tw = g.r * 0.3;
    rrect(x - tw / 2, cy + cr * 0.6, tw, g.ut - cy - cr * 0.6 + 4, tw * 0.4); ctx.fillStyle = C.cup; ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, cy, cr, -0.15 * Math.PI, 1.15 * Math.PI); ctx.fillStyle = C.cup; ctx.fill(); outline(2.5); ctx.stroke();

    // 球体
    ctx.beginPath(); ctx.arc(x, cy, r, 0, 6.3);
    ctx.fillStyle = mix(C.glom, C.scar, sc); ctx.fill(); outline(2.5); ctx.stroke();
    ctx.save(); ctx.beginPath(); ctx.arc(x, cy, r - 1.5, 0, 6.3); ctx.clip();
    if (sc < 0.95) {
      // 毛细血管绕成的圈圈
      ctx.save(); ctx.globalAlpha *= 1 - sc;
      ctx.strokeStyle = C.glomLoop; ctx.lineWidth = Math.max(1.5, r * 0.07);
      for (let k = 0; k < 6; k++) {
        const a = k / 6 * Math.PI * 2 + i, d = r * 0.48;
        ctx.beginPath(); ctx.ellipse(x + Math.cos(a) * d, cy + Math.sin(a) * d, r * 0.4, r * 0.24, a + 1.2, 0, 6.3); ctx.stroke();
      }
      // 筛孔：受压久了被撑大
      const hr = r * (0.055 + 0.07 * S.leak);
      ctx.fillStyle = "rgba(91,58,74,0.55)";
      for (let k = 0; k < 9; k++) {
        const a = k / 9 * Math.PI * 2 + 0.3, d = r * (k % 2 ? 0.72 : 0.58);
        ctx.beginPath(); ctx.ellipse(x + Math.cos(a) * d, cy + Math.sin(a) * d, hr, hr * 0.8, a, 0, 6.3); ctx.fill();
      }
      ctx.restore();
    }
    if (sc > 0.05) {
      // 疤痕：乱糟糟的硬线团
      ctx.save(); ctx.globalAlpha *= sc;
      ctx.strokeStyle = C.scarLine; ctx.lineWidth = Math.max(1.5, r * 0.08);
      ctx.beginPath();
      for (let k = 0; k < 14; k++) {
        const a = rnd(i * 30 + k) * 6.3, d = rnd(i * 30 + k + 50) * r * 0.85;
        ctx[k ? "lineTo" : "moveTo"](x + Math.cos(a) * d, cy + Math.sin(a) * d);
      }
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
    // 脸
    const fs = r * 0.42;
    if (sc > 0.6) {
      // 睡着了一样闭着眼：已经不能工作
      outline(Math.max(1.4, fs * 0.12));
      ctx.beginPath();
      ctx.moveTo(x - fs * 0.45, cy - fs * 0.1); ctx.lineTo(x - fs * 0.18, cy - fs * 0.1);
      ctx.moveTo(x + fs * 0.18, cy - fs * 0.1); ctx.lineTo(x + fs * 0.45, cy - fs * 0.1);
      ctx.moveTo(x - fs * 0.18, cy + fs * 0.35); ctx.quadraticCurveTo(x, cy + fs * 0.2, x + fs * 0.18, cy + fs * 0.35);
      ctx.stroke();
    } else {
      const mood = clamp(0.9 - 0.9 * S.press - 1.2 * busy - 0.8 * S.late + 0.5 * S.heal, -1, 1);
      face(x, cy, fs, mood);
      if (busy > 0.4 || S.press > 0.5) sweat(x + r * 0.62, cy - r * 0.75 + ((time * 0.7 + i * 0.3) % 1) * r * 0.25, r * 0.28);
    }
    // 高血压、高血糖冲击：小闪电
    if (S.press > 0.05 && sc < 0.5) bolt(x - r * 0.95, cy - r * 0.8, r * 0.28, S.press * (0.5 + 0.5 * Math.sin(time * 5 + i * 2)), C.sugar);
    return { x, cy, r, sc, cr };
  }

  // ---------- 场景 ----------
  function scene() {
    const g = G();
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(26, C.dot);

    // 水肿：组织里积了水
    if (S.late > 0.05) {
      ctx.save(); ctx.globalAlpha *= S.late * 0.8;
      for (let k = 0; k < 10; k++) drop(rnd(k + 700) * W, g.vb + g.wall + rnd(k + 720) * (g.ut - g.vb - g.wall) + Math.sin(time + k) * 3, Math.max(5, H * 0.018));
      ctx.restore();
    }

    // 血管
    ctx.fillStyle = C.adv; ctx.fillRect(0, g.vt - g.wall, W, g.vb - g.vt + g.wall * 2);
    ctx.fillStyle = C.wall; ctx.fillRect(0, g.vt - g.wall * 0.7, W, g.vb - g.vt + g.wall * 1.4);
    outline(3); ctx.beginPath(); ctx.moveTo(0, g.vt - g.wall); ctx.lineTo(W, g.vt - g.wall); ctx.moveTo(0, g.vb + g.wall); ctx.lineTo(W, g.vb + g.wall); ctx.stroke();
    ctx.fillStyle = mix(C.lumen, C.lumenMurky, S.waste * 0.8); ctx.fillRect(0, g.vt, W, g.vb - g.vt);
    const cl = Math.max(22, W / 30);
    for (const [y, side] of [[g.vt, -1], [g.vb, 1]]) {
      for (let x = cl / 2; x < W + cl; x += cl) { rrect(x - cl * 0.44, y - (side < 0 ? 0 : 8), cl * 0.88, 8, 4); ctx.fillStyle = C.endo; ctx.fill(); outline(1.4); ctx.stroke(); }
    }
    const mid = (g.vt + g.vb) / 2, half = (g.vb - g.vt) / 2;
    const ws = Math.max(2.2, H * 0.007);
    for (let i = 0; i < nWaste(); i++) { const p = wastes[i]; wasteDot(p.x * W, mid + p.yn * (half - ws - 5), ws); }
    const pr = Math.max(8, H * 0.03), rr = Math.max(9, H * 0.032);
    const rbcMood = 0.8 - 1.2 * S.late;
    for (let i = 0; i < nRbc(); i++) { const p = rbcs[i]; rbc(p.x * W, mid + p.yn * (half - rr - 4) + Math.sin(time * 1.5 + p.ph) * 2, rr, rbcMood); }
    for (const p of prots) protein(p.x * W, mid + p.yn * (half - pr - 4) + Math.sin(time * 1.3 + p.ph) * 2, pr, 0.7 - 0.8 * S.late);
    // 血压高：血流里的冲击箭头
    if (S.press > 0.05) {
      ctx.save(); ctx.globalAlpha *= S.press;
      for (let k = 0; k < 4; k++) {
        const x = ((time * 0.25 + k / 4) % 1) * W * 1.1 - W * 0.05, y = mid + (k % 2 ? -1 : 1) * half * 0.35, s = half * 0.35;
        ctx.beginPath(); ctx.moveTo(x - s * 1.6, y - s * 0.25); ctx.lineTo(x, y - s * 0.25); ctx.lineTo(x, y - s * 0.6); ctx.lineTo(x + s * 0.8, y);
        ctx.lineTo(x, y + s * 0.6); ctx.lineTo(x, y + s * 0.25); ctx.lineTo(x - s * 1.6, y + s * 0.25); ctx.closePath();
        ctx.fillStyle = "rgba(255,123,123,0.55)"; ctx.fill(); outline(1.6); ctx.stroke();
      }
      ctx.restore();
    }

    // 尿液小管
    ctx.fillStyle = C.urine; rrect(-10, g.ut, W + 20, g.ub - g.ut, 0); ctx.fill();
    outline(3); ctx.beginPath(); ctx.moveTo(0, g.ut); ctx.lineTo(W, g.ut); ctx.moveTo(0, g.ub); ctx.lineTo(W, g.ub); ctx.stroke();
    for (let k = 0; k < 18; k++) {
      const x = ((rnd(k + 900) + time * 0.06) % 1) * W, y = g.ut + (0.3 + rnd(k + 920) * 0.5) * (g.ub - g.ut);
      wasteDot(x, y, ws * (1 - 0.6 * S.late));
    }
    // 泡沫：尿里有蛋白时
    let foamAt = null;
    const foamN = Math.round(S.leak * 16 * (1 - 0.5 * S.late));
    for (let k = 0; k < foamN; k++) {
      const x = ((rnd(k + 950) + time * 0.03) % 1) * W, y = g.ut + 2 + Math.sin(time * 2 + k) * 1.5, s = Math.max(3, H * 0.012) * (0.7 + rnd(k + 970) * 0.6);
      ctx.beginPath(); ctx.arc(x, y, s, 0, 6.3); ctx.fillStyle = C.foam; ctx.fill(); outline(1.2); ctx.stroke();
      if (!foamAt && x > W * 0.6 && x < W * 0.85) foamAt = { x, y };
    }

    const gl = [];
    for (let i = 0; i < N; i++) gl.push(glomerulus(g, i));

    // 滤出来的东西：水滴和废物往下掉；筛孔大了，蛋白质也跟着漏下去
    for (const q of gl) {
      if (q.sc > 0.7) continue;
      const rate = (1 - q.sc) * (1 + 0.6 * S.work) * (1 - 0.4 * S.late);
      const top = q.cy + q.r * 0.9, bot = g.ut + 6;
      for (let k = 0; k < 3; k++) {
        const t = (time * 0.45 * rate + k / 3 + q.x * 0.001) % 1, y = top + (bot - top) * t;
        ctx.save(); ctx.globalAlpha *= t > 0.85 ? (1 - t) / 0.15 : 1;
        if (k === 1) drop(q.x - q.r * 0.08, y, Math.max(3.5, H * 0.012));
        else wasteDot(q.x + (k - 1) * q.r * 0.12, y, ws * 1.1);
        ctx.restore();
      }
      if (S.leak > 0.2) {
        const t = (time * 0.3 + q.x * 0.002) % 1, y = top + (bot - top) * t;
        ctx.save(); ctx.globalAlpha *= clamp((S.leak - 0.2) * 2, 0, 1) * (t > 0.85 ? (1 - t) / 0.15 : 1);
        protein(q.x + q.r * 0.25, y, Math.max(5, H * 0.017), -0.6);
        ctx.restore();
      }
    }

    let card = null;
    if (S.stage > 0.02) card = stageCard(g);
    if (S.care > 0.02) card = careCard(g);

    if (S.heal > 0.02) {
      for (const h of hearts) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.85;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), C.heartPink);
        ctx.restore();
      }
    }
    return { g, gl, mid, half, pr, foamAt, card };
  }

  // 底部的卡片框
  function strip(g, a) {
    const x = W * 0.03, w = W * 0.94, h = H * (g.narrow ? 0.25 : 0.22), y = H - h - H * 0.02;
    ctx.globalAlpha *= a;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, w, h, 16); ctx.fill();
    ctx.fillStyle = C.paper; rrect(x, y, w, h, 16); ctx.fill(); outline(2.5); ctx.stroke();
    return { x, y, w, h };
  }

  // 肾小球滤过率分期条（示意）
  function stageCard(g) {
    ctx.save();
    const { x, y, w, h } = strip(g, S.stage);
    const fs = Math.max(10, Math.min(h * 0.17, W / 48));
    ctx.fillStyle = C.ink; ctx.font = `${fs}px ${Anima.ROUND}`; ctx.textBaseline = "middle";
    ctx.fillText("肾小球滤过率分期（mL/min/1.73㎡）", x + fs, y + fs * 1.1);
    const segs = [["G1", "≥90", C.g1, 90, 120], ["G2", "60-89", C.g2, 60, 90], ["G3a", "45-59", C.g3a, 45, 60], ["G3b", "30-44", C.g3b, 30, 45], ["G4", "15-29", C.g4, 15, 30], ["G5", "<15", C.g5, 0, 15]];
    const bx = x + fs, bw = w - fs * 2, sw = bw / 6, by = y + fs * 2.2, bh = h * 0.28;
    let mx = bx;
    segs.forEach(([name, range, col, lo, hi], k) => {
      const sx = bx + k * sw;
      rrect(sx + 2, by, sw - 4, bh, 6); ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.fillStyle = C.ink; ctx.textAlign = "center";
      ctx.font = `${fs * 0.95}px ${Anima.ROUND}`; ctx.fillText(name, sx + sw / 2, by + bh / 2 + 1);
      ctx.font = `${fs * 0.85}px ${Anima.ROUND}`; ctx.fillText(range, sx + sw / 2, by + bh + fs * 0.9);
      if (S.egfr >= lo && S.egfr < hi) mx = sx + sw * (1 - (S.egfr - lo) / (hi - lo));
    });
    ctx.textAlign = "left";
    // 当前位置的小三角
    const ty = by - 3;
    ctx.beginPath(); ctx.moveTo(mx, ty); ctx.lineTo(mx - fs * 0.5, ty - fs * 0.7); ctx.lineTo(mx + fs * 0.5, ty - fs * 0.7); ctx.closePath();
    ctx.fillStyle = C.ink; ctx.fill();
    ctx.restore();
    return { x, y, w, h, mx, my: by + bh / 2 };
  }

  // 护肾清单
  function careCard(g) {
    ctx.save();
    const { x, y, w, h } = strip(g, S.care);
    const items = [["控血压、血糖", "少盐"], ["不乱吃止痛药", "不碰偏方"], ["每年查尿", "和血肌酐"]];
    const cw = w / 3, fs = Math.max(10, Math.min(h * 0.2, cw / 9.2));
    items.forEach(([a, b], k) => {
      const cx = x + cw * k + cw / 2, cy = y + h / 2;
      const r = fs * 0.75, ix = x + cw * k + fs * 0.9;
      ctx.beginPath(); ctx.arc(ix + r, cy, r, 0, 6.3); ctx.fillStyle = C.mint; ctx.fill(); outline(1.8); ctx.stroke();
      outline(Math.max(2, fs * 0.16)); ctx.strokeStyle = C.paper;
      ctx.beginPath(); ctx.moveTo(ix + r * 0.5, cy); ctx.lineTo(ix + r * 0.9, cy + r * 0.4); ctx.lineTo(ix + r * 1.5, cy - r * 0.4); ctx.stroke();
      ctx.fillStyle = C.ink; ctx.font = `${fs}px ${Anima.ROUND}`; ctx.textBaseline = "middle";
      ctx.fillText(a, ix + r * 2.5, cy - fs * 0.65); ctx.fillText(b, ix + r * 2.5, cy + fs * 0.65);
      void cx;
    });
    ctx.restore();
    return { x, y, w, h };
  }

  function hud() {
    const v = S.egfr;
    pill(14, 12, "eGFR", `${Math.round(v)}`, v >= 60 ? C.mint : v >= 30 ? "#e7a500" : "#f25f6b", false);
    const [label, value, st] = CH[cur].pill;
    pill(W - 14, 12, label, value, st === "ok" ? C.mint : st === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const { g, gl, mid, half, pr, foamAt, card } = scene();
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const A = g.vb + g.wall + H * 0.04, B = H * 0.99, lx = W * 0.27, rx = W * 0.73;
    const healthy = gl.filter((q) => q.sc < 0.3), scarred = gl.filter((q) => q.sc > 0.7);
    const q0 = gl[1];
    callout("glom", on("glom"), q0.x, q0.cy - q0.r * 0.3, lx, A, "肾小球：一个个小筛子");
    const p0 = prots.find((p) => p.x > 0.55 && p.x < 0.85);
    callout("keep", on("keep") && !!p0, p0 ? p0.x * W : 0, p0 ? mid + p0.yn * (half - pr - 4) : 0, rx, A, "蛋白质、红细胞留在血里");
    callout("urine", on("urine"), W * 0.62, (g.ut + g.ub) / 2, W * 0.55, B, "水和废物滤下去，变成尿");
    const q1 = gl[0];
    callout("press", on("press"), q1.x - q1.r * 0.95, q1.cy - q1.r * 0.8, lx, A, "血压高、血糖高，猛冲筛子");
    const hq = gl[3], ha = -0.6;
    callout("holes", on("holes"), hq.x + Math.cos(ha) * hq.r * 0.6, hq.cy + Math.sin(ha) * hq.r * 0.6, rx, g.narrow ? A + H * 0.12 : A, "筛孔撑大，蛋白质漏出去");
    callout("foam", on("foam") && !!foamAt, foamAt ? foamAt.x : 0, foamAt ? foamAt.y : 0, rx, B, "尿里泡沫变多");
    const s0 = scarred[0] || gl[RANK.indexOf(0)];
    callout("scar", on("scar"), s0.x, s0.cy, lx, A, "变成疤痕，不能过滤了");
    const w0 = healthy.find((q) => q.x > W * 0.55) || healthy[healthy.length - 1] || gl[4];
    callout("work", on("work"), w0.x + w0.r * 0.5, w0.cy + w0.r * 0.5, rx, B, "剩下的加班，越累坏得越快");
    const h0 = healthy[0] || gl[0];
    callout("silent", on("silent"), h0.x, h0.cy - h0.r * 0.3, lx, A, "早期几乎没感觉");
    callout("marker", on("marker") && !!card && S.stage > 0.5, card ? card.mx : 0, card ? card.y + card.h * 0.35 : 0, rx, A, "要靠抽血、验尿来发现");
    const wv = wastes.slice(0, nWaste()).find((p) => p.x > 0.2 && p.x < 0.4);
    callout("waste", on("waste") && !!wv, wv ? wv.x * W : 0, wv ? mid + wv.yn * (half - 6) : 0, lx, A, "废物排不出去，堆在血里");
    callout("edema", on("edema"), W * 0.8, g.ut - H * 0.06, rx, g.narrow ? A + H * 0.22 : A, "水肿、贫血、没力气");
    callout("dialysis", on("dialysis"), W * 0.5, (g.ut + g.ub) / 2, W * 0.5, B, "需要透析或肾移植");
    const rq = healthy[1] || healthy[0] || gl[0];
    callout("relax", on("relax"), rq.x, rq.cy - rq.r * 0.3, W * 0.5, A, "剩下的小筛子松了口气");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#c77dba",
    titleCard: { lines: ["肾脏悄悄", "累坏了？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
