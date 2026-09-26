Anima.register("lipids", {
    "title": "血脂小船",
    "tag": "血脂小剧场",
    "headline": "化验单上的【血脂】，到底在说什么？",
    "lede": "胆固醇不是坏东西，它要坐“脂蛋白小船”才能在血液里旅行。认识 LDL、HDL、载脂蛋白和 Lp(a)，看懂自己的血脂化验单。",
    "summary": "认识 LDL、HDL、载脂蛋白和 Lp(a)：HDL 不是越高越好，Lp(a) 一生至少查一次。",
    "footer": "血脂异常请到心内科或内分泌科就诊，降脂目标请结合自己的心血管风险和医生一起制定。",
    "canvasLabel": "卡通血管里的脂蛋白小船动画",
    "disease": "高血脂",
    "organs": ["vessels"],
    "categories": ["metabolic", "cardio"],
    "color": "#9b7fe0"
  }, () => {
  const CH = [
    { title: "胆固醇不是坏东西", ldlc: 2.6, ldl: 0.55, hdl: 0.6, enter: 0, plaque: 0, apob: 0, sleepy: 0, pickup: 0.4, lpa: 0, heal: 0, card: 1,
      pill: ["HDL-C", "1.3 mmol/L", "ok"],
      text: "胆固醇并不是坏东西。它是细胞膜的原料，还能用来制造激素和胆汁，大部分由肝脏自己合成。可它是油性的，不能直接溶在血液里，要坐上一种叫“脂蛋白”的小船，才能在血液里旅行。",
      fact: "化验单上的各种“胆固醇”，其实是不同脂蛋白小船里装的胆固醇",
      labels: ["liver", "boat"] },
    { title: "认识两种小船：LDL 和 HDL", ldlc: 2.6, ldl: 0.55, hdl: 0.7, enter: 0, plaque: 0, apob: 0, sleepy: 0, pickup: 1, lpa: 0, heal: 0, card: 0,
      pill: ["HDL-C", "1.3 mmol/L", "ok"],
      text: "血液里有两种主要的小船。低密度脂蛋白（LDL）个头大，负责把胆固醇从肝脏送到全身；高密度脂蛋白（HDL）个头小，能把组织里多余的胆固醇运回肝脏处理。化验单上的 LDL-C 和 HDL-C，就是这两种小船里装的胆固醇。",
      fact: "一般人群 LDL-C 合适水平 < 3.4 mmol/L；HDL-C < 1.0 mmol/L 为偏低",
      labels: ["ldl", "hdl"] },
    { title: "LDL 太多，钻进血管壁", ldlc: 4.6, ldl: 1, hdl: 0.5, enter: 1, plaque: 0.7, apob: 0, sleepy: 0, pickup: 0.4, lpa: 0, heal: 0, card: 0,
      pill: ["HDL-C", "1.1 mmol/L", "ok"],
      text: "LDL 小船太多时，就会从内皮的缝隙钻进血管壁，被困在里面、被氧化。免疫细胞把它们吞下去，变成泡沫细胞，慢慢堆成斑块。LDL 越多、在血里待得越久，斑块就长得越快。",
      fact: "LDL-C 目标因人而异：一般 < 3.4，高危 < 2.6，极高危 < 1.8 mmol/L",
      labels: ["enter", "plaque"] },
    { title: "HDL 并不是越高越好", ldlc: 4.6, ldl: 1, hdl: 1, enter: 0.8, plaque: 0.7, apob: 0, sleepy: 1, pickup: 0.25, lpa: 0, heal: 0, card: 0,
      pill: ["HDL-C", "2.6 mmol/L", "warn"],
      text: "那 HDL 是不是越高越好？并不是。HDL-C 只说明 HDL 小船里装了多少胆固醇，不代表小船干活有多卖力。研究发现，HDL-C 特别高的人风险不一定更低，用药物把 HDL-C 升高，也没有减少心梗。看化验单时，不用追求 HDL-C 越高越好。",
      fact: "目前不建议用药物专门升高 HDL-C",
      labels: ["sleepy"] },
    { title: "载脂蛋白：数一数有几艘船", ldlc: 3.1, ldl: 1, hdl: 0.5, enter: 0.8, plaque: 0.75, apob: 1, sleepy: 0, pickup: 0.4, lpa: 0, heal: 0, card: 0,
      pill: ["ApoB", "1.3 g/L", "bad"],
      text: "载脂蛋白是小船的“船身蛋白”。每一艘 LDL 这类容易钻进血管壁的小船上，都有且只有一个载脂蛋白 B（ApoB），所以查 ApoB 就像在数船的数量。有时 LDL-C 看起来不高，但小船又小又多，ApoB 就会偏高。HDL 的主要船身蛋白则是载脂蛋白 A1。",
      fact: "有糖尿病、肥胖或甘油三酯高的人，ApoB 更能反映真实风险",
      labels: ["apob", "small"] },
    { title: "特别说说 Lp(a)", ldlc: 2.6, ldl: 0.55, hdl: 0.6, enter: 0.5, plaque: 0.8, apob: 0, sleepy: 0, pickup: 0.4, lpa: 1, heal: 0, card: 0,
      pill: ["Lp(a)", "90 mg/dL", "bad"],
      text: "还要特别说说 Lp(a)，也叫脂蛋白小 a。它像一艘 LDL 小船多挂了一条带钩的小尾巴，更容易粘在血管壁上，还会促进血栓和炎症，也和主动脉瓣钙化有关。Lp(a) 主要由基因决定，饮食和运动几乎改变不了它，而且很多人其他血脂指标都正常。",
      fact: "建议一生至少查一次 Lp(a)；常以 50 mg/dL（约 105 nmol/L）作为明显升高的界值",
      labels: ["lpa", "hook"] },
    { title: "怎么管好血脂", ldlc: 1.8, ldl: 0.3, hdl: 0.6, enter: 0.1, plaque: 0.55, apob: 0, sleepy: 0, pickup: 1, lpa: 1, heal: 1, card: 0,
      pill: ["Lp(a)", "90 mg/dL", "bad"],
      text: "管好血脂，重点是把 LDL-C 和 ApoB 降到适合自己的目标。少吃肥肉、油炸食品和反式脂肪，多吃蔬菜和全谷物，规律运动、不吸烟，必要时在医生指导下用降脂药。如果 Lp(a) 偏高，其他危险因素就要管得更严，也建议家人去查一查。",
      fact: "血脂目标因人而异，请结合自己的心血管风险，和医生一起制定",
      labels: ["fewer", "lpaStay"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    wall: "#ffb3b3", adv: "#ffcdc4", lumen: "#fff4ec", endo: "#ffe0e6",
    ldl: "#ffc26b", ldlOx: "#c98a55", chol: "#ffe27a", apob: "#9b7fe0",
    hdl: "#8fdcc2", apoa: "#6aa8e8", lpaTail: "#e36fa7", liver: "#e8906b",
    plaque: "#ffe29a", core: "#ffd166", platelet: "#d9c6ff", heartPink: "#ff9fb0",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, heart, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { ldlc: 2.6, ldl: 0.55, hdl: 0.6, enter: 0, plaque: 0, apob: 0, sleepy: 0, pickup: 0.4, lpa: 0, heal: 0, card: 1 };

  // ---------- 几何 ----------
  const G = () => {
    const cy = H * 0.5, R = H * 0.19, wallT = H * 0.13, px = W * 0.64, sig = W * 0.11;
    return { cy, R, wallT, px, sig };
  };
  const bump = (g, x) => Math.exp(-(((x - g.px) / g.sig) ** 2));
  const topE = (g) => g.cy - g.R;
  const botE = (g, x) => g.cy + g.R - S.plaque * g.R * 0.55 * bump(g, x);

  // ---------- 粒子 ----------
  const ldls = Array.from({ length: 32 }, (_, i) => ({ x: rnd(i + 10) * 1.1, yn: rnd(i + 60) * 1.6 - 0.8, ph: rnd(i + 110) * 6 }));
  const hdls = Array.from({ length: 16 }, (_, i) => ({ x: rnd(i + 160) * 1.1, yn: rnd(i + 190) * 1.6 - 0.8, ph: rnd(i + 220) * 6 }));
  const lpas = Array.from({ length: 5 }, (_, i) => ({ x: i / 5 + rnd(i + 250) * 0.1, yn: rnd(i + 270) * 1.2 - 0.6, ph: rnd(i + 290) * 6 }));
  const hops = [];
  const hearts = Array.from({ length: 8 }, (_, i) => ({ x: rnd(i + 8000), y: rnd(i + 8100), ph: rnd(i + 8200) * 6 }));

  const nLdl = () => Math.round(clamp(S.ldl * 20 * (1 + 0.55 * S.apob), 0, ldls.length));
  const nHdl = () => Math.round(clamp(S.hdl * hdls.length, 0, hdls.length));
  const nLpa = () => Math.round(clamp(S.lpa * lpas.length, 0, lpas.length));
  const ldlR = () => H * 0.036 * (1 - 0.32 * S.apob);

  function update(dt) {
    const g = G();
    const sp = dt * 0.06 * (1 + 0.25 * Math.max(0, Math.sin(time * Math.PI * 2)));
    for (const a of [ldls, hdls, lpas]) for (const p of a) { p.x += sp * (a === hdls ? 1.15 : 1); if (p.x > 1.1) p.x -= 1.2; }
    // HDL 从血管壁上“接走”多余的胆固醇：小油滴从管壁往上跳
    if (Math.random() < dt * 3 * S.pickup * (1 - 0.7 * S.sleepy)) {
      const x = (0.15 + Math.random() * 0.8) * W;
      hops.push({ x, y0: botE(g, x) + 6, t: 0 });
    }
    for (let i = hops.length - 1; i >= 0; i--) { hops[i].t += dt * 0.8; if (hops[i].t > 1) hops.splice(i, 1); }
  }

  // ---------- 小船们 ----------
  function ldlBoat(x, y, r, ox = 0, mood = 0.7) {
    ctx.save(); ctx.translate(x, y);
    ctx.beginPath(); ctx.arc(0, 0, r, 0, 6.3); ctx.fillStyle = mix(C.ldl, C.ldlOx, ox); ctx.fill(); outline(2); ctx.stroke();
    // 船舱里的胆固醇
    ctx.fillStyle = C.chol;
    for (const [a, d] of [[0.6, 0.55], [2.4, 0.5], [4.2, 0.55]]) { ctx.beginPath(); ctx.arc(Math.cos(a) * r * d, Math.sin(a) * r * d * 0.8 - r * 0.1, r * 0.13, 0, 6.3); ctx.fill(); }
    // ApoB：缠在船身上的一条紫色带子（每艘船只有一条）
    const glow = S.apob;
    ctx.lineCap = "round";
    ctx.strokeStyle = C.ink; ctx.lineWidth = r * 0.34 + 3;
    ctx.beginPath(); ctx.arc(0, 0, r * 0.86, 0.35 * Math.PI, 0.95 * Math.PI); ctx.stroke();
    ctx.strokeStyle = C.apob; ctx.lineWidth = r * 0.34;
    ctx.beginPath(); ctx.arc(0, 0, r * 0.86, 0.35 * Math.PI, 0.95 * Math.PI); ctx.stroke();
    if (glow > 0.4) {
      ctx.save(); ctx.globalAlpha *= clamp((glow - 0.4) * 2, 0, 1);
      const bx = Math.cos(0.65 * Math.PI) * r * 0.86, by = Math.sin(0.65 * Math.PI) * r * 0.86;
      ctx.beginPath(); ctx.arc(bx, by, r * 0.3, 0, 6.3); ctx.fillStyle = C.paper; ctx.fill(); outline(1.5); ctx.stroke();
      ctx.fillStyle = C.apob; ctx.font = `${r * 0.42}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("B", bx, by + 1); ctx.textAlign = "left";
      ctx.restore();
    }
    face(r * 0.12, -r * 0.18, r * 0.55, mood);
    ctx.restore();
  }
  function hdlBoat(x, y, r, sleepy) {
    ctx.save(); ctx.translate(x, y);
    // ApoA1：船边上的蓝色小花瓣
    for (const a of [-2.2, -0.9, 0.5]) {
      ctx.beginPath(); ctx.ellipse(Math.cos(a) * r * 0.95, Math.sin(a) * r * 0.95, r * 0.32, r * 0.2, a, 0, 6.3);
      ctx.fillStyle = C.apoa; ctx.fill(); outline(1.4); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(0, 0, r, 0, 6.3); ctx.fillStyle = C.hdl; ctx.fill(); outline(2); ctx.stroke();
    if (sleepy) {
      outline(Math.max(1.2, r * 0.12));
      ctx.beginPath();
      ctx.arc(-r * 0.3, -r * 0.05, r * 0.14, 0.15 * Math.PI, 0.85 * Math.PI);
      ctx.moveTo(r * 0.44, -r * 0.05); ctx.arc(r * 0.3, -r * 0.05, r * 0.14, 0.15 * Math.PI, 0.85 * Math.PI);
      ctx.stroke();
      ctx.beginPath(); ctx.arc(0, r * 0.3, r * 0.1, 0, 6.3); ctx.stroke();
    } else face(0, 0, r * 0.62, 0.8);
    ctx.restore();
  }
  function lpaBoat(x, y, r) {
    // 小尾巴：一串小圈（apo(a) 的环状结构），最后一个是钩子
    ctx.save(); ctx.translate(x, y);
    let tx = -r * 0.9, ty = r * 0.2;
    for (let k = 0; k < 4; k++) {
      const nx = tx - r * 0.42, ny = ty + Math.sin(time * 4 + k + x * 0.02) * r * 0.18;
      ctx.beginPath(); ctx.arc(nx, ny, r * 0.22, 0, 6.3); ctx.fillStyle = C.lpaTail; ctx.fill(); outline(1.5); ctx.stroke();
      tx = nx; ty = ny;
    }
    outline(Math.max(2, r * 0.14));
    ctx.beginPath(); ctx.moveTo(tx - r * 0.2, ty); ctx.lineTo(tx - r * 0.55, ty); ctx.arc(tx - r * 0.55, ty + r * 0.2, r * 0.2, -Math.PI / 2, Math.PI * 0.9, true); ctx.stroke();
    ctx.restore();
    ldlBoat(x, y, r, 0, 0.3);
  }

  // ---------- 场景 ----------
  function scene() {
    const g = G(), step = Math.max(4, W / 160);
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(24, C.dot);

    // 管壁
    const wt = g.cy - g.R - g.wallT, wb = g.cy + g.R + g.wallT;
    ctx.fillStyle = C.adv; ctx.fillRect(0, wt, W, wb - wt);
    ctx.fillStyle = C.wall; ctx.fillRect(0, wt + g.wallT * 0.3, W, wb - wt - g.wallT * 0.6);
    outline(3); ctx.beginPath(); ctx.moveTo(0, wt); ctx.lineTo(W, wt); ctx.moveTo(0, wb); ctx.lineTo(W, wb); ctx.stroke();
    // 管腔
    ctx.fillStyle = C.lumen; ctx.beginPath();
    for (let x = -step; x <= W + step; x += step) ctx.lineTo(x, topE(g));
    for (let x = W + step; x >= -step; x -= step) ctx.lineTo(x, botE(g, x));
    ctx.closePath(); ctx.fill();

    // 斑块
    if (S.plaque > 0.02) {
      ctx.beginPath();
      for (let x = g.px - g.sig * 2.2; x <= g.px + g.sig * 2.2; x += step) ctx.lineTo(x, botE(g, x));
      ctx.lineTo(g.px + g.sig * 2.2, g.cy + g.R + 4); ctx.lineTo(g.px - g.sig * 2.2, g.cy + g.R + 4); ctx.closePath();
      ctx.fillStyle = C.plaque; ctx.fill();
      const coreH = S.plaque * g.R * 0.35;
      ctx.beginPath(); ctx.ellipse(g.px, g.cy + g.R - coreH * 0.55, g.sig * 0.7 * S.plaque + 2, coreH * 0.55 + 1, 0, 0, 6.3);
      ctx.fillStyle = C.core; ctx.fill(); outline(2); ctx.setLineDash([5, 5]); ctx.stroke(); ctx.setLineDash([]);
      for (let i = 0; i < 4; i++) {
        const fx = g.px + (i - 1.5) * g.sig * 0.3 * S.plaque, fy = g.cy + g.R - coreH * (0.45 + 0.2 * (i % 2)), fs = Math.max(5, H * 0.018) * S.plaque;
        ctx.beginPath(); ctx.arc(fx, fy, fs, 0, 6.3); ctx.fillStyle = "#fff8e1"; ctx.fill(); outline(1.5); ctx.stroke();
        face(fx, fy, fs * 0.9, -0.2, false);
      }
      outline(3.5); ctx.beginPath();
      for (let x = g.px - g.sig * 1.8; x <= g.px + g.sig * 1.8; x += step) ctx.lineTo(x, botE(g, x));
      ctx.stroke();
    }

    // 困在管壁里、被氧化的 LDL
    const nTrap = Math.round(S.enter * 9);
    for (let i = 0; i < nTrap; i++) {
      const x = g.px - g.sig * 1.9 + i * g.sig * 0.42 + (rnd(i + 600) - 0.5) * 8;
      if (Math.abs(x - g.px) < g.sig * 0.9 * S.plaque) continue; // 斑块里的已经变成泡沫细胞了
      const y = g.cy + g.R + g.wallT * (0.28 + rnd(i + 620) * 0.25);
      ldlBoat(x, y, ldlR() * 0.8, 0.8, -0.5);
    }

    // 内皮细胞
    const cellL = Math.max(22, W / 30);
    for (const side of [-1, 1]) {
      for (let i = 0, x = cellL / 2; x < W + cellL; i++, x += cellL) {
        const r = rnd(i + (side < 0 ? 100 : 1000));
        if (side > 0 && r < S.enter * 0.22 && Math.abs(x - g.px) < g.sig * 2.4) continue; // LDL 钻进去的缝隙
        const y = (side < 0 ? topE(g) : botE(g, x)) - side * 4;
        const ang = side > 0 ? Math.atan2(botE(g, x + 1) - botE(g, x - 1), 2) : 0;
        ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
        rrect(-cellL * 0.44, -4.5, cellL * 0.88, 9, 4.5); ctx.fillStyle = C.endo; ctx.fill(); outline(1.6); ctx.stroke();
        ctx.restore();
      }
    }

    // 正在钻进管壁的一艘 LDL
    if (S.enter > 0.3) {
      const t = (time * 0.35) % 1, x = g.px - g.sig * 1.35;
      const y = lerp(botE(g, x) - ldlR() * 1.2, g.cy + g.R + g.wallT * 0.4, clamp(t * 1.3, 0, 1));
      ctx.save(); ctx.globalAlpha *= clamp((S.enter - 0.3) * 2, 0, 1) * (t > 0.9 ? (1 - t) * 10 : 1);
      ldlBoat(x, y, ldlR(), clamp(t * 1.5 - 0.5, 0, 0.8), 0.5 - t);
      ctx.restore();
    }

    // HDL 接走的小油滴
    for (const h of hops) {
      ctx.save(); ctx.globalAlpha *= 1 - h.t;
      ctx.beginPath(); ctx.arc(h.x + Math.sin(h.t * 6) * 4, h.y0 - h.t * g.R * 0.8, Math.max(3, H * 0.01), 0, 6.3);
      ctx.fillStyle = C.chol; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.restore();
    }

    // 血液里的小船
    const lr = ldlR(), hr = H * 0.024;
    const yIn = (x, yn, r) => Math.min(g.cy + yn * g.R * 0.78, botE(g, x) - r - 6);
    for (let i = 0; i < nHdl(); i++) {
      const p = hdls[i], x = p.x * W;
      hdlBoat(x, yIn(x, p.yn, hr) + Math.sin(time * 2 + p.ph) * 2, hr, S.sleepy > 0.5 && i % 3 !== 2);
    }
    for (let i = 0; i < nLdl(); i++) {
      const p = ldls[i], x = p.x * W;
      ldlBoat(x, yIn(x, p.yn, lr) + Math.sin(time * 1.6 + p.ph) * 2, lr, 0, 0.7);
    }
    for (let i = 0; i < nLpa(); i++) {
      const p = lpas[i], x = p.x * W;
      lpaBoat(x, yIn(x, p.yn, lr) + Math.sin(time * 1.4 + p.ph) * 2, lr * 1.05);
    }
    // 打瞌睡的 HDL 头上的 z
    if (S.sleepy > 0.05) {
      ctx.save(); ctx.globalAlpha *= S.sleepy;
      ctx.fillStyle = C.soft; ctx.font = `${hr * 1.1}px ${Anima.ROUND}`;
      for (let i = 0; i < nHdl(); i++) {
        if (i % 3 === 2) continue;
        const p = hdls[i], x = p.x * W, y = yIn(x, p.yn, hr);
        const t = (time * 0.6 + p.ph) % 1;
        ctx.fillText("z", x + hr * (0.8 + t), y - hr * (1 + t * 1.2));
      }
      ctx.restore();
    }
    // 钩在管壁上的 Lp(a)，旁边聚着血小板
    let stuck = null;
    if (S.lpa > 0.05) {
      ctx.save(); ctx.globalAlpha *= clamp(S.lpa * 1.5, 0, 1);
      for (const [k, fx] of [[0, 0.26], [1, 0.84]]) {
        const x = fx * W, y = botE(g, x) - lr * 1.1;
        for (let j = 0; j < 5; j++) {
          ctx.beginPath(); ctx.ellipse(x - lr * 2.2 + j * lr * 0.5, botE(g, x) - 4 - (j % 2) * lr * 0.35, lr * 0.32, lr * 0.2, j, 0, 6.3);
          ctx.fillStyle = C.platelet; ctx.fill(); outline(1.2); ctx.stroke();
        }
        lpaBoat(x, y, lr * 1.05);
        if (k === 0) stuck = { x: x - lr * 2.4, y: botE(g, x) - 6 };
      }
      ctx.restore();
    }

    // 肝脏：小船从这里出发
    const lx = -H * 0.06, lrad = H * 0.3;
    ctx.beginPath(); ctx.ellipse(lx, g.cy, lrad * 0.75, lrad, 0, 0, 6.3);
    ctx.fillStyle = C.liver; ctx.fill(); outline(3); ctx.stroke();
    face(lx + lrad * 0.38, g.cy - lrad * 0.05, lrad * 0.3, 0.8);

    // 胆固醇的用处小卡片
    let card = null;
    if (S.card > 0.02) card = drawCard();

    if (S.heal > 0.02) {
      for (const h of hearts) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), C.heartPink);
        ctx.restore();
      }
    }
    return { g, stuck, card };
  }
  const lerp = (a, b, t) => a + (b - a) * t;

  function drawCard() {
    const cw = H * 0.4, ch = H * 0.34, x = W - cw - 14, y = H - ch - 14;
    ctx.save(); ctx.globalAlpha *= S.card;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, cw, ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(x, y, cw, ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const fs = cw / 8.5;
    ctx.fillStyle = C.ink; ctx.font = `${fs * 1.05}px ${Anima.ROUND}`; ctx.textBaseline = "middle";
    ctx.fillText("胆固醇的用处", x + fs * 0.8, y + fs * 1.1);
    const rows = [["细胞膜", "cell"], ["激素", "hormone"], ["胆汁", "bile"]];
    rows.forEach(([name, kind], i) => {
      const cy = y + fs * 2.6 + i * (ch - fs * 3) / 3, ix = x + fs * 1.4, s = fs * 0.62;
      if (kind === "cell") {
        ctx.beginPath(); ctx.arc(ix, cy, s, 0, 6.3); ctx.fillStyle = "#ffe0e6"; ctx.fill(); outline(1.8); ctx.stroke();
        ctx.beginPath(); ctx.arc(ix, cy, s * 0.7, 0, 6.3); ctx.stroke();
        ctx.beginPath(); ctx.arc(ix, cy, s * 0.25, 0, 6.3); ctx.fillStyle = "#f59fb3"; ctx.fill();
      } else if (kind === "hormone") {
        ctx.beginPath();
        for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3; ctx[k ? "lineTo" : "moveTo"](ix + Math.cos(a) * s, cy + Math.sin(a) * s); }
        ctx.closePath(); ctx.fillStyle = C.sugar; ctx.fill(); outline(1.8); ctx.stroke();
      } else {
        ctx.beginPath(); ctx.moveTo(ix, cy - s); ctx.quadraticCurveTo(ix + s * 0.9, cy + s * 0.2, ix, cy + s * 0.8);
        ctx.quadraticCurveTo(ix - s * 0.9, cy + s * 0.2, ix, cy - s); ctx.fillStyle = "#9fd88a"; ctx.fill(); outline(1.8); ctx.stroke();
      }
      ctx.fillStyle = C.ink; ctx.font = `${fs}px ${Anima.ROUND}`;
      ctx.fillText(name, ix + s * 1.8, cy + 1);
    });
    ctx.restore();
    return { x, y, cw, ch };
  }

  function hud() {
    const v = S.ldlc;
    pill(14, 12, "LDL-C", `${v.toFixed(1)} mmol/L`, v < 3.4 ? C.mint : v < 4.1 ? "#e7a500" : "#f25f6b", false);
    const [label, value, st] = CH[cur].pill;
    pill(W - 14, 12, label, value, st === "ok" ? C.mint : st === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const { g, stuck, card } = scene();
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const lr = ldlR(), hr = H * 0.024;
    const yIn = (x, yn, r) => Math.min(g.cy + yn * g.R * 0.78, botE(g, x) - r - 6);
    const above = g.cy - g.R - g.wallT * 0.5, below = g.cy + g.R + g.wallT * 0.6;
    callout("liver", on("liver"), H * 0.12, g.cy + g.R * 0.5, W * 0.2, below, "大部分胆固醇由肝脏自己合成");
    const pick = (arr, n, a, b) => arr.slice(0, n).find((p) => p.x > a && p.x < b);
    const l0 = pick(ldls, nLdl(), 0.3, 0.5);
    const l0x = l0 ? l0.x * W : 0, l0y = l0 ? yIn(l0x, l0.yn, lr) : 0;
    callout("boat", on("boat") && !!l0, l0x, l0y, l0x + W * 0.04, above, "脂蛋白：运胆固醇的小船");
    callout("ldl", on("ldl") && !!l0, l0x, l0y, l0x - W * 0.02, above, "LDL：把胆固醇送到全身");
    const h0 = pick(hdls, nHdl(), 0.55, 0.8);
    const h0x = h0 ? h0.x * W : 0, h0y = h0 ? yIn(h0x, h0.yn, hr) : 0;
    callout("hdl", on("hdl") && !!h0, h0x, h0y, h0x, below, "HDL：把多余胆固醇运回肝脏");
    const ex = g.px - g.sig * 1.35;
    callout("enter", on("enter"), ex, botE(g, ex) + 6, ex - W * 0.14, below, "LDL 钻进血管壁");
    callout("plaque", on("plaque"), g.px, g.cy + g.R - S.plaque * g.R * 0.2, g.px + W * 0.14, below, "越积越多，长成斑块");
    const hs = hdls.slice(0, nHdl()).find((p, i) => i % 3 !== 2 && p.x > 0.35 && p.x < 0.7);
    const hsx = hs ? hs.x * W : 0;
    callout("sleepy", on("sleepy") && !!hs, hsx, hs ? yIn(hsx, hs.yn, hr) : 0, hsx, above, "HDL-C 高 ≠ 小船更卖力");
    callout("apob", on("apob") && !!l0, l0x - lr * 0.3, l0y + lr * 0.8, l0x - W * 0.04, above, "每艘小船只有 1 个 ApoB");
    const l1 = pick(ldls, nLdl(), 0.62, 0.85);
    callout("small", on("small") && !!l1, l1 ? l1.x * W : 0, l1 ? yIn(l1.x * W, l1.yn, lr) : 0, l1 ? l1.x * W : 0, below, "小而密的 LDL：船更多");
    const p0 = pick(lpas, nLpa(), 0.3, 0.7);
    const p0x = p0 ? p0.x * W : 0;
    callout("lpa", on("lpa") && !!p0, p0x - lr * 2, p0 ? yIn(p0x, p0.yn, lr) + lr * 0.2 : 0, p0x - W * 0.05, above, "Lp(a)：多了一条带钩的尾巴");
    callout("hook", on("hook") && !!stuck, stuck ? stuck.x : 0, stuck ? stuck.y : 0, stuck ? stuck.x + W * 0.1 : 0, below, "粘在管壁上，还招来血小板");
    callout("fewer", on("fewer"), g.px, botE(g, g.px) - 4, g.px - W * 0.1, above, "LDL 小船少了，斑块更稳定");
    callout("lpaStay", on("lpaStay") && !!stuck, stuck ? stuck.x + lr * 2.4 : 0, stuck ? stuck.y - lr : 0, stuck ? stuck.x + W * 0.08 : 0, below, "Lp(a) 变化不大，其他指标要管得更严");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#9b7fe0",
    titleCard: { lines: ["化验单上的血脂，", "到底在说什么？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
