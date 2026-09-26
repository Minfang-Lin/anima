Anima.register("diabetes-vessels", {
    "title": "糖与血管",
    "tag": "血管小剧场",
    "headline": "多余的【糖】，如何一步步伤害血管",
    "lede": "跟着血管里的红细胞小伙伴走一趟：看看血糖升高后，血管里发生了什么，以及我们可以怎样帮它们。",
    "summary": "多余的糖怎样一步步伤害血管：糖化、内皮受伤、斑块和微血管病变。",
    "footer": "",
    "canvasLabel": "卡通血管纵切面动画",
    "disease": "糖尿病",
    "organs": [
      "vessels"
    ],
    "categories": [
      "metabolic"
    ],
    "color": "#ff7b7b"
  }, () => {
  const CH = [
    { title: "健康的血管", glucose: 5.2, ages: 0, damage: 0, plaque: 0, micro: 0, heal: 0,
      text: "血管内壁铺着一层整整齐齐的内皮细胞，光滑又有弹性。红细胞开开心心地流过，血液里的葡萄糖（小方糖）不多不少，刚好够身体使用。",
      fact: "正常空腹血糖 3.9–6.1 mmol/L",
      labels: ["endo", "rbc", "glu"] },
    { title: "血糖长期偏高", glucose: 13, ages: 0.05, damage: 0, plaque: 0, micro: 0, heal: 0,
      text: "胰岛素不够用，或者身体对它不敏感时，葡萄糖进不了细胞，只好留在血液里。小方糖越来越多，血管每天都泡在甜甜的血液里。",
      fact: "糖尿病诊断：空腹 ≥ 7.0 mmol/L，或随机血糖 ≥ 11.1 mmol/L",
      labels: ["glu", "hud"] },
    { title: "糖化：黏黏的 AGEs", glucose: 13, ages: 1, damage: 0.15, plaque: 0, micro: 0, heal: 0,
      text: "多余的糖会悄悄粘到蛋白质上，慢慢变成晚期糖基化终产物（AGEs，图里皱着眉的棕色小团子）。它们把管壁里的胶原纤维绑在一起，血管变硬，跳动时也撑不开了。",
      fact: "糖化血红蛋白 HbA1c 也是这类反应的产物，反映近 2–3 个月的平均血糖",
      labels: ["age", "wall"] },
    { title: "内皮受伤，发炎了", glucose: 13, ages: 1, damage: 1, plaque: 0.18, micro: 0, heal: 0,
      text: "AGEs 和高糖代谢会产生很多活性氧（小闪电）。内皮细胞被电得晕头转向，彼此之间出现缝隙，血管不再能好好放松。白细胞赶来帮忙，却黏在伤口上，钻进了管壁。",
      fact: "氧化应激 + 慢性炎症，是动脉粥样硬化的起点",
      labels: ["ros", "gap", "mono"] },
    { title: "斑块长大，路变窄了", glucose: 13, ages: 1, damage: 1, plaque: 1, micro: 0, heal: 0,
      text: "钻进管壁的白细胞吞下被氧化的坏胆固醇，变成胖胖的泡沫细胞，越堆越多，形成像奶油一样的脂质核心，外面盖着一层纤维帽。通道变窄，红细胞只能挤着过去。斑块一旦破裂，会形成血栓，引起心梗或中风。",
      fact: "糖尿病患者发生心血管疾病的风险约为非糖尿病人群的 2–4 倍",
      labels: ["core", "cap", "hud2"] },
    { title: "小血管也在受伤", glucose: 13, ages: 1, damage: 1, plaque: 1, micro: 1, heal: 0,
      text: "最细的毛细血管只容得下红细胞排队通过。高血糖让它的基底膜变厚，管壁开始渗漏。眼睛、肾脏和神经都靠这些小血管供养，所以会出现视网膜病变、糖尿病肾病和手脚麻木。",
      fact: "三大微血管并发症：眼（视网膜）· 肾（肾小球）· 神经（手脚麻木）",
      labels: ["bm", "leak", "single"] },
    { title: "照顾好血糖，血管会感谢你", glucose: 6.4, ages: 0.55, damage: 0.35, plaque: 0.75, micro: 0, heal: 1,
      text: "已经造成的损伤很难完全消失，但把血糖、血压、血脂控制在目标范围，再加上不吸烟、多运动，就能明显放慢新的损伤，让斑块更稳定。红细胞们又能笑着出发啦。",
      fact: "常见目标：HbA1c < 7%，血压 < 130/80 mmHg，定期查眼底和尿微量白蛋白",
      labels: ["hud", "heal"] },
  ];
  const DUR = 11; // 每幕秒数

  // 配色（在共用调色板上加本主题的颜色）
  const C = Object.assign({}, Anima.C, {
    tissue: "#ffe7e3", dot: "#ffd6cf", wall: "#ffb3b3", adv: "#ffcdc4",
    lumen: "#fff4ec", lumenSweet: "#fff0c2", endo: "#ffe0e6", endoHurt: "#d9c8cf",
    rbc: "#ff7b7b", rbcTired: "#e0897a", age: "#b07a4f",
    mono: "#ffffff", plaque: "#ffe29a", core: "#ffd166", bm: "#c9b6f2",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, heart, bolt, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { glucose: 5.2, ages: 0, damage: 0, plaque: 0, micro: 0, heal: 0 };
  // ---------- 几何 ----------
  const G = () => {
    const cy = H * 0.52, pulse = Math.sin(time * Math.PI * 2 * 1.0);
    const R = H * 0.25 * (1 + 0.035 * pulse * (1 - 0.85 * S.ages));
    const wallT = H * 0.15, px = W * 0.6, sig = W * 0.12;
    return { cy, R, wallT, px, sig, pulse };
  };
  const bump = (g, x) => Math.exp(-(((x - g.px) / g.sig) ** 2));
  const topE = (g, x) => g.cy - g.R + S.plaque * g.R * 0.16 * bump(g, x);
  const botE = (g, x) => g.cy + g.R - S.plaque * g.R * 0.62 * bump(g, x);
  const half = (g, x) => (botE(g, x) - topE(g, x)) / 2;
  const mid = (g, x) => (botE(g, x) + topE(g, x)) / 2;

  // ---------- 粒子 ----------
  const rbcs = Array.from({ length: 24 }, (_, i) => ({ x: rnd(i) * 1.2, yn: rnd(i + 50) * 1.5 - 0.75, ph: rnd(i + 90) * 6 }));
  const glus = Array.from({ length: 110 }, (_, i) => ({ x: rnd(i + 200), yn: rnd(i + 400) * 1.8 - 0.9, ph: rnd(i + 600) * 6, rot: rnd(i + 700) * 6 }));
  const monos = Array.from({ length: 4 }, (_, i) => ({ x: rnd(i + 900) * 0.4, st: 0, d: 0, k: i }));
  const sparks = [];
  const capR = Array.from({ length: 8 }, (_, i) => ({ x: i / 8 }));
  const leaks = [];
  const hearts = Array.from({ length: 9 }, (_, i) => ({ x: rnd(i + 8000), y: rnd(i + 8100), ph: rnd(i + 8200) * 6 }));

  function update(dt) {
    const g = G();
    const beat = 1 + 0.3 * Math.max(0, g.pulse);
    const base = 0.09 * beat * (1 - 0.25 * S.ages);

    for (const p of rbcs) {
      const h = Math.max(half(g, p.x * W), 4);
      p.x += base * dt * clamp(g.R / h, 0.6, 2.4) * (0.8 + 0.4 * (1 - Math.abs(p.yn)));
      if (p.x > 1.1) p.x -= 1.2;
    }
    for (const p of glus) {
      const h = Math.max(half(g, p.x * W), 4);
      p.x += base * 0.9 * dt * clamp(g.R / h, 0.6, 2.4);
      p.rot += dt * 0.8;
      if (p.x > 1.05) p.x -= 1.1;
    }
    for (const m of monos) {
      if (m.st === 0) {
        m.x += base * 0.55 * dt;
        if (S.damage > 0.5 && Math.abs(m.x * W - g.px) < g.sig * 0.5) m.st = 1;
        if (m.x > 1.1) m.x = -0.1 - rnd(m.k + time) * 0.3;
      } else {
        m.d += dt * 0.35;
        if (m.d > 1.6 || S.damage < 0.3) { m.st = 0; m.d = 0; m.x = -0.1 - rnd(m.k * 3 + time) * 0.4; }
      }
    }
    if (Math.random() < S.damage * dt * 7 && S.micro < 0.5) {
      sparks.push({ x: Math.random() * W, top: Math.random() < 0.5, life: 0.7, off: Math.random() * 14 });
    }
    for (let i = sparks.length - 1; i >= 0; i--) { sparks[i].life -= dt; if (sparks[i].life <= 0) sparks.splice(i, 1); }
    for (const c of capR) { c.x += dt * 0.06 * (1 - 0.3 * S.ages); if (c.x > 1.06) c.x -= 1.12; }
    if (S.micro > 0.5 && Math.random() < dt * 6 * S.ages) {
      leaks.push({ x: Math.random() * W, dir: Math.random() < 0.5 ? -1 : 1, d: 0, life: 2.4 });
    }
    for (let i = leaks.length - 1; i >= 0; i--) { const l = leaks[i]; l.d += dt * 18; l.life -= dt; if (l.life <= 0) leaks.splice(i, 1); }
  }

  // ---------- 小画笔 ----------
  function sugarCube(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(rot) * 0.4);
    rrect(-s, -s, s * 2, s * 2, s * 0.5);
    ctx.fillStyle = C.sugar; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath(); ctx.arc(-s * 0.35, -s * 0.35, s * 0.28, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  const rbcMood = () => clamp(1 - 1.5 * S.damage - 0.3 * S.ages + 0.6 * S.heal, -1, 1);

  // ---------- 大血管 ----------
  function drawMacro() {
    const g = G();
    const step = Math.max(4, W / 160);
    // 组织背景 + 圆点
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = C.dot;
    for (let i = 0; i < 30; i++) { ctx.beginPath(); ctx.arc(rnd(i + 30) * W, rnd(i + 60) * H, 3 + rnd(i) * 4, 0, Math.PI * 2); ctx.fill(); }

    // 管壁
    const wallTop = g.cy - g.R - g.wallT, wallBot = g.cy + g.R + g.wallT;
    ctx.fillStyle = C.adv;
    rrect(-10, wallTop, W + 20, wallBot - wallTop, 0); ctx.fill();
    ctx.fillStyle = C.wall;
    ctx.fillRect(0, wallTop + g.wallT * 0.3, W, wallBot - wallTop - g.wallT * 0.6);
    outline(3);
    ctx.beginPath(); ctx.moveTo(0, wallTop); ctx.lineTo(W, wallTop); ctx.moveTo(0, wallBot); ctx.lineTo(W, wallBot); ctx.stroke();

    // 胶原纤维（白色波浪）+ AGE 交联
    for (const side of [-1, 1]) {
      for (let f = 0; f < 2; f++) {
        const y0 = g.cy + side * (g.R + g.wallT * (0.3 + f * 0.25));
        ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = 2.2; ctx.lineCap = "round";
        ctx.beginPath();
        for (let x = 0; x <= W; x += step) {
          const y = y0 + Math.sin(x * 0.04 + f * 2 + side + time * 0.6 * (1 - S.ages)) * 3.5 * (1 - 0.7 * S.ages);
          ctx[x ? "lineTo" : "moveTo"](x, y);
        }
        ctx.stroke();
      }
      if (S.ages > 0.05) {
        for (let i = 0; i < 26; i++) {
          if (rnd(i + (side > 0 ? 3000 : 3100)) > S.ages) continue;
          const x = (i + 0.5) / 26 * W;
          const y1 = g.cy + side * (g.R + g.wallT * 0.3), y2 = g.cy + side * (g.R + g.wallT * 0.55);
          ctx.fillStyle = C.age; outline(1.5);
          ctx.beginPath(); ctx.arc(x, (y1 + y2) / 2, 3.2 * S.ages, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          ctx.strokeStyle = C.age; ctx.lineWidth = 2.5;
          ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2); ctx.stroke();
        }
      }
    }

    // 管腔
    ctx.fillStyle = mix(C.lumen, C.lumenSweet, (S.glucose - 5) / 8);
    ctx.beginPath();
    for (let x = -step; x <= W + step; x += step) ctx.lineTo(x, topE(g, x));
    for (let x = W + step; x >= -step; x -= step) ctx.lineTo(x, botE(g, x));
    ctx.closePath(); ctx.fill();

    // 斑块
    if (S.plaque > 0.02) {
      const baseY = g.cy + g.R + 4;
      ctx.beginPath();
      for (let x = g.px - g.sig * 2.2; x <= g.px + g.sig * 2.2; x += step) ctx.lineTo(x, botE(g, x));
      ctx.lineTo(g.px + g.sig * 2.2, baseY); ctx.lineTo(g.px - g.sig * 2.2, baseY); ctx.closePath();
      ctx.fillStyle = C.plaque; ctx.fill();
      const coreH = S.plaque * g.R * 0.4;
      ctx.fillStyle = C.core;
      ctx.beginPath();
      ctx.ellipse(g.px, g.cy + g.R - coreH * 0.55, g.sig * 0.72 * S.plaque + 2, coreH * 0.55 + 1, 0, 0, Math.PI * 2);
      ctx.fill(); outline(2); ctx.setLineDash([5, 5]); ctx.stroke(); ctx.setLineDash([]);
      // 胖胖的泡沫细胞
      for (let i = 0; i < 5; i++) {
        if (rnd(i + 5000) * 0.9 > S.plaque) continue;
        const fx = g.px + (i - 2) * g.sig * 0.26 * S.plaque, fy = g.cy + g.R - coreH * (0.45 + 0.25 * (i % 2));
        const fs = Math.max(5, H * 0.018) * S.plaque;
        ctx.fillStyle = "#fff8e1"; ctx.beginPath(); ctx.arc(fx, fy, fs, 0, Math.PI * 2); ctx.fill(); outline(1.5); ctx.stroke();
        face(fx, fy, fs * 0.9, -0.2, false);
      }
      // 纤维帽
      outline(3.5);
      ctx.beginPath();
      for (let x = g.px - g.sig * 1.8; x <= g.px + g.sig * 1.8; x += step) ctx.lineTo(x, botE(g, x));
      ctx.stroke();
      ctx.strokeStyle = "#fffaf0"; ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = g.px - g.sig * 1.5; x <= g.px + g.sig * 1.5; x += step) ctx.lineTo(x, botE(g, x) + 3);
      ctx.stroke();
    }

    // 内皮细胞：圆滚滚的小砖
    const cellL = Math.max(22, W / 30);
    for (const side of [-1, 1]) {
      const edge = side < 0 ? topE : botE;
      for (let i = 0, x = cellL / 2; x < W + cellL; i++, x += cellL) {
        const r = rnd(i + (side < 0 ? 100 : 1000));
        if (r < S.damage * 0.28 * (1 - 0.5 * S.heal)) continue;
        const y = edge(g, x) - side * 4;
        const ang = Math.atan2(edge(g, x + 1) - edge(g, x - 1), 2);
        const len = cellL * (0.46 - 0.1 * S.damage);
        ctx.save(); ctx.translate(x, y); ctx.rotate(ang + (r - 0.5) * 0.45 * S.damage);
        rrect(-len, -4.5, len * 2, 9, 4.5);
        ctx.fillStyle = mix("#ffe0e6", "#d9c8cf", S.damage * (0.5 + r)); ctx.fill();
        outline(1.6); ctx.stroke();
        ctx.fillStyle = "#f59fb3";
        ctx.beginPath(); ctx.arc(0, 0, 2.2, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }
      // AGEs：皱眉的棕色小团子
      if (S.ages > 0.02) {
        for (let i = 0; i < 12; i++) {
          if (rnd(i + (side < 0 ? 2000 : 2100)) > S.ages) continue;
          const x = (i + 0.2 + rnd(i + 2200) * 0.6) / 12 * W;
          const s = (4 + 4 * S.ages) * Math.max(1, W / 1000);
          const y = edge(g, x) - side * (s + 6);
          ctx.fillStyle = C.age;
          ctx.beginPath();
          ctx.arc(x - s * 0.6, y, s * 0.8, 0, Math.PI * 2);
          ctx.arc(x + s * 0.6, y, s * 0.8, 0, Math.PI * 2);
          ctx.arc(x, y - s * 0.4, s * 0.9, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = C.ink;
          ctx.beginPath(); ctx.arc(x - s * 0.35, y - s * 0.2, s * 0.14, 0, Math.PI * 2); ctx.arc(x + s * 0.35, y - s * 0.2, s * 0.14, 0, Math.PI * 2); ctx.fill();
          outline(1.3);
          ctx.beginPath(); ctx.moveTo(x - s * 0.6, y - s * 0.6); ctx.lineTo(x - s * 0.15, y - s * 0.4);
          ctx.moveTo(x + s * 0.6, y - s * 0.6); ctx.lineTo(x + s * 0.15, y - s * 0.4); ctx.stroke();
        }
      }
    }

    // 活性氧小闪电
    for (const s of sparks) {
      const y = s.top ? topE(g, s.x) + 14 + s.off : botE(g, s.x) - 14 - s.off;
      bolt(s.x, y, Math.max(7, H * 0.022), clamp(s.life / 0.3, 0, 1));
    }

    // 小方糖
    const nG = Math.round(clamp((S.glucose - 3) / 11, 0, 1) * glus.length);
    const cube = Math.max(3.5, H * 0.011);
    for (let i = 0; i < nG; i++) {
      const p = glus[i], x = p.x * W;
      const y = mid(g, x) + p.yn * half(g, x) * 0.88 + Math.sin(time * 2 + p.ph) * 2;
      sugarCube(x, y, cube, p.rot);
    }

    // 红细胞小伙伴
    const rbcR = Math.max(10, H * 0.04);
    const mood = rbcMood();
    for (const p of rbcs) {
      const x = p.x * W;
      const narrow = clamp(g.R / Math.max(half(g, x), 1) - 1, 0, 1);
      const y = mid(g, x) + p.yn * half(g, x) * 0.7 + Math.sin(time * 1.6 + p.ph) * 2;
      ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(time * 0.8 + p.ph) * 0.12);
      ctx.scale(1 + 0.15 * narrow, 1 - 0.2 * narrow);
      ctx.beginPath(); ctx.ellipse(0, 0, rbcR, rbcR * 0.82, 0, 0, Math.PI * 2);
      ctx.fillStyle = mix(C.rbc, C.rbcTired, S.ages * 0.6 * (1 - S.heal)); ctx.fill();
      outline(2.2); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.beginPath(); ctx.ellipse(-rbcR * 0.45, -rbcR * 0.42, rbcR * 0.22, rbcR * 0.13, -0.5, 0, Math.PI * 2); ctx.fill();
      face(0, rbcR * 0.05, rbcR * 0.7, mood - 0.6 * narrow);
      if (mood - narrow < -0.2) { // 汗珠
        ctx.fillStyle = "#9fd8ff";
        ctx.beginPath(); ctx.moveTo(rbcR * 0.75, -rbcR * 0.7); ctx.quadraticCurveTo(rbcR * 1.05, -rbcR * 0.25, rbcR * 0.75, -rbcR * 0.2);
        ctx.quadraticCurveTo(rbcR * 0.5, -rbcR * 0.35, rbcR * 0.75, -rbcR * 0.7); ctx.fill(); outline(1.2); ctx.stroke();
      }
      ctx.restore();
    }

    // 白细胞
    if (S.damage > 0.2) {
      const ms = Math.max(9, H * 0.03);
      for (const m of monos) {
        const x = m.st ? g.px + (m.k - 1.5) * g.sig * 0.3 : m.x * W;
        let y = botE(g, x) - ms - 4;
        if (m.st) y += Math.min(m.d, 1) * (g.R * 0.45 * S.plaque + ms);
        const a = clamp((S.damage - 0.2) * 2, 0, 1) * (m.st && m.d > 1.2 ? 1 - (m.d - 1.2) / 0.4 : 1);
        ctx.save(); ctx.globalAlpha *= a;
        ctx.beginPath(); ctx.arc(x, y, ms, 0, Math.PI * 2);
        ctx.fillStyle = C.mono; ctx.fill(); outline(2); ctx.stroke();
        ctx.fillStyle = "#e7dcff";
        ctx.beginPath(); ctx.arc(x + ms * 0.35, y - ms * 0.35, ms * 0.25, 0, Math.PI * 2); ctx.fill();
        face(x, y + ms * 0.05, ms * 0.7, 0.3);
        ctx.restore();
      }
    }

    // 最后一幕：飘起的小爱心
    if (S.heal > 0.02) {
      for (const h of hearts) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), "#ff9fb0");
        ctx.restore();
      }
    }
    return g;
  }

  // ---------- 毛细血管 ----------
  function drawMicro() {
    const cy = H * 0.52, h = H * 0.085;
    const bm = 4 + S.ages * H * 0.04;
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 26; i++) {
      const x = rnd(i + 7000) * W, y = rnd(i + 7100) * H;
      if (Math.abs(y - cy) < h + bm + 30) continue;
      ctx.beginPath(); ctx.ellipse(x, y, 26, 17, rnd(i + 7200) * 3, 0, Math.PI * 2);
      ctx.fillStyle = "#ffd6cf"; ctx.fill(); outline(1.5); ctx.stroke();
      ctx.fillStyle = "#f5b3c0"; ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();
    }
    // 基底膜
    ctx.fillStyle = C.bm;
    ctx.fillRect(0, cy - h - bm, W, bm); ctx.fillRect(0, cy + h, W, bm);
    outline(2.5);
    ctx.beginPath(); ctx.moveTo(0, cy - h - bm); ctx.lineTo(W, cy - h - bm); ctx.moveTo(0, cy + h + bm); ctx.lineTo(W, cy + h + bm); ctx.stroke();
    // 内皮 + 管腔
    ctx.fillStyle = "#ffe0e6"; ctx.fillRect(0, cy - h - 3, W, 6); ctx.fillRect(0, cy + h - 3, W, 6);
    ctx.fillStyle = C.lumenSweet; ctx.fillRect(0, cy - h + 3, W, 2 * h - 6);
    // 渗出的小糖滴
    for (const l of leaks) {
      ctx.save(); ctx.globalAlpha *= clamp(l.life / 2.4, 0, 1);
      sugarCube(l.x, cy + l.dir * (h + bm * 0.5 + l.d), Math.max(3, H * 0.009), l.x);
      ctx.restore();
    }
    // 排队挤过去的红细胞
    const mood = rbcMood();
    for (const c of capR) {
      const x = c.x * W;
      ctx.save(); ctx.translate(x, cy);
      ctx.beginPath(); ctx.ellipse(0, 0, h * 0.62, h * 0.82, 0, 0, Math.PI * 2);
      ctx.fillStyle = C.rbc; ctx.fill(); outline(2.2); ctx.stroke();
      face(0, 0, h * 0.5, mood - 0.3);
      ctx.restore();
    }
    return { cy, h, bm };
  }

  function hud(onMacro) {
    const high = S.glucose > 7;
    pill(14, 12, "血糖", S.glucose.toFixed(1), high ? "#e7a500" : C.mint, false);
    if (onMacro) {
      const nar = Math.round(S.plaque * 39);
      pill(W - 14, 12, "管腔变窄", nar + "%", nar > 20 ? "#f25f6b" : C.mint, true);
    }
  }

  function draw() {
    const L = CH[cur].labels;
    const m = S.micro;
    ctx.globalAlpha = 1;
    if (m < 0.99) {
      const g = drawMacro();
      const on = (k) => L.includes(k) && m < 0.5;
      const ex = W * 0.2;
      callout("endo", on("endo"), ex, topE(g, ex) + 4, ex + W * 0.1, g.cy - g.R - g.wallT * 0.4, "内皮细胞：光滑的内衬");
      const r = rbcs.find(p => p.x > 0.38 && p.x < 0.55) || rbcs[0];
      const rx = r.x * W, ry = mid(g, rx) + r.yn * half(g, rx) * 0.7;
      callout("rbc", on("rbc"), rx, ry, rx + W * 0.1, g.cy + g.R + g.wallT * 0.35, "红细胞小伙伴");
      const nG = Math.max(1, Math.round(clamp((S.glucose - 3) / 11, 0, 1) * glus.length));
      const gp = glus.slice(0, nG).find(p => p.x > 0.68 && p.x < 0.85);
      if (gp) { const gx = gp.x * W; callout("glu", on("glu"), gx, mid(g, gx) + gp.yn * half(g, gx) * 0.88, gx - W * 0.05, g.cy - g.R - g.wallT * 0.4, "葡萄糖（小方糖）"); }
      else callout("glu", false, 0, 0, 0, 0, "");
      const ax = W * 0.35;
      callout("age", on("age"), ax, botE(g, ax) - 12, ax - W * 0.06, g.cy + g.R + g.wallT * 0.35, "AGEs 黏在内皮上");
      const wx = W * 0.8;
      callout("wall", on("wall"), wx, g.cy - g.R - g.wallT * 0.42, wx - W * 0.06, g.cy - g.R * 0.45, "纤维被绑住，管壁变硬");
      const sx = W * 0.18;
      callout("ros", on("ros"), sx, topE(g, sx) + 20, sx + W * 0.08, g.cy - g.R * 0.35, "活性氧小闪电");
      const gx2 = W * 0.4;
      callout("gap", on("gap"), gx2, botE(g, gx2) - 4, gx2 - W * 0.08, g.cy + g.R + g.wallT * 0.35, "内皮出现缝隙");
      callout("mono", on("mono"), g.px, botE(g, g.px) - 14, g.px + W * 0.14, g.cy + g.R + g.wallT * 0.35, "白细胞钻进管壁");
      callout("core", on("core"), g.px, g.cy + g.R - S.plaque * g.R * 0.22, g.px + W * 0.18, g.cy + g.R + g.wallT * 0.35, "脂质核心（泡沫细胞）");
      callout("cap", on("cap"), g.px - g.sig * 0.7, botE(g, g.px - g.sig * 0.7), g.px - W * 0.22, g.cy - g.R * 0.35, "纤维帽");
      callout("heal", on("heal"), W * 0.5, g.cy, W * 0.5, g.cy - g.R - g.wallT * 0.35, "损伤放慢，斑块更稳定");
      hud(true);
    }
    if (m > 0.01) {
      ctx.save(); ctx.globalAlpha = m;
      const c = drawMicro();
      const on = (k) => L.includes(k);
      callout("bm", on("bm"), W * 0.3, c.cy - c.h - c.bm / 2, W * 0.34, H * 0.2, "基底膜变厚");
      const lk = leaks.find(l => l.dir > 0 && l.life > 1.2);
      callout("leak", on("leak") && !!lk, lk ? lk.x : 0, lk ? c.cy + c.h + c.bm * 0.5 + lk.d : 0, W * 0.6, H * 0.84, "管壁渗漏");
      callout("single", on("single"), W * 0.78, c.cy - c.h * 0.8, W * 0.74, H * 0.25, "排好队，一个一个挤过去");
      hud(false);
      ctx.restore();
    }
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: C.rbc,
    titleCard: { lines: ["多余的糖，", "如何一步步伤害血管"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
