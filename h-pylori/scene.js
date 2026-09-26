Anima.register("h-pylori", {
    "title": "胃里的小螺旋",
    "tag": "胃部小剧场",
    "headline": "胃酸那么强，细菌怎么【活下来】？",
    "lede": "胃酸酸得能杀死大部分细菌，幽门螺杆菌却能在胃里住上几十年。走进胃黏膜看一看：它怎样给自己造护盾、怎样传给家人、会带来哪些伤害，以及怎样查、怎样治。",
    "summary": "幽门螺杆菌怎样在胃酸里活下来、怎样在家人之间传播，会引起胃炎、溃疡，以及呼气试验和四联疗法。",
    "footer": "有胃部不适、胃溃疡病史或胃癌家族史，想检查或治疗幽门螺杆菌，请到消化内科就诊。",
    "canvasLabel": "卡通胃黏膜和幽门螺杆菌动画",
    "disease": "幽门螺杆菌感染",
    "organs": ["stomach"],
    "categories": ["digestive"],
    "color": "#5fae6e"
  }, () => {
  const CH = [
    { title: "胃的酸和盾", bugs: 0, swim: 0, shield: 0, inflame: 0, ulcer: 0, atro: 0, spread: 0, risk: 0, test: 0, meds: 0, heal: 0,
      pill: ["胃酸 pH", "约 1.5", "bad"],
      text: "胃里装着很强的胃酸，pH 大约只有 1 到 2，能帮我们消化食物、杀死吃进来的大部分细菌。那胃为什么不会把自己消化掉？因为胃黏膜细胞会分泌一层厚厚的黏液，像一面盾牌盖在表面，把胃酸挡在外面。",
      fact: "胃液 pH 约 1～2，比柠檬汁还要酸",
      labels: ["acid", "mucus", "cell"] },
    { title: "幽门螺杆菌登场", bugs: 0.35, swim: 1, shield: 1, inflame: 0, ulcer: 0, atro: 0, spread: 0, risk: 0, test: 0, meds: 0, heal: 0,
      pill: ["护盾 pH", "约 7", "ok"],
      text: "大多数细菌进了胃就活不下来，幽门螺杆菌却有自己的绝招。它会产生尿素酶，把胃里的尿素分解成氨，在身边造出一圈碱性的护盾，中和胃酸。然后它甩动尾巴上的鞭毛，钻进黏液层，贴在胃黏膜细胞上住下来。",
      fact: "幽门螺杆菌靠尿素酶和鞭毛，能在胃里住上几十年",
      labels: ["bug", "shield", "hide"] },
    { title: "它是怎么传给人的", bugs: 1, swim: 0, shield: 1, inflame: 0.2, ulcer: 0, atro: 0, spread: 1, risk: 0, test: 0, meds: 0, heal: 0,
      pill: ["感染率", "40%～50%", "warn"],
      text: "幽门螺杆菌主要通过口口和粪口途径传播。一家人共用碗筷、夹菜，大人把饭嚼碎了喂孩子，都可能把细菌传过去，所以常常一家人都有。大多数人是小时候感染的。吃饭时分餐、用公筷，饭前便后洗手，能减少传染。",
      fact: "我国人群幽门螺杆菌感染率约 40%～50%",
      labels: ["many", "stick"] },
    { title: "胃被伤害了", bugs: 1, swim: 0, shield: 1, inflame: 1, ulcer: 1, atro: 0, spread: 0, risk: 0, test: 0, meds: 0, heal: 0,
      pill: ["胃黏膜", "发炎", "bad"],
      text: "幽门螺杆菌长期住在胃里，会释放毒素，破坏黏液层，引来免疫细胞，几乎所有感染的人都会有慢性胃炎。黏膜保护变弱后，胃酸就能伤到下面的组织，一部分人会出现胃溃疡或十二指肠溃疡，表现为反复的胃痛、反酸。",
      fact: "大多数十二指肠溃疡和不少胃溃疡与幽门螺杆菌有关",
      labels: ["gastritis", "ulcer"] },
    { title: "更远的风险", bugs: 0.8, swim: 0, shield: 1, inflame: 0.6, ulcer: 0, atro: 1, spread: 0, risk: 1, test: 0, meds: 0, heal: 0,
      pill: ["胃癌风险", "升高", "warn"],
      text: "少数人的慢性胃炎会一步步往前走：胃黏膜慢慢变薄，叫萎缩；有的细胞还变得像肠子里的细胞，叫肠化。这条路走得很慢，要很多年，只有少数人会走到胃癌。但幽门螺杆菌确实被世界卫生组织列为一类致癌因素。",
      fact: "根除幽门螺杆菌，能降低胃癌风险，越早越好",
      labels: ["atro", "im"] },
    { title: "吹口气就能查，按疗程治", bugs: 0, swim: 0, shield: 0, inflame: 0, ulcer: 0, atro: 0.3, spread: 0, risk: 0, test: 1, meds: 1, heal: 1,
      pill: ["疗程", "14 天", "ok"],
      text: "查幽门螺杆菌很简单，做碳 13 或碳 14 尿素呼气试验，吹口气就行，检查前要按医生要求停用部分药物。治疗一般是医生开的 14 天联合用药，常用四联疗法，一定要按时足量吃完；停药至少 4 周后复查，看是否根除。建议家人一起查。",
      fact: "呼气试验前一般要停用抑酸药 2 周、抗菌药 4 周",
      labels: ["breath", "med", "clean"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    acid: "#eef5a6", acidDeep: "#dcec84", hion: "#ffb35c", mucus: "#e3f1ff", mucusEdge: "#a9cde8",
    cell: "#ffc9c2", cellHurt: "#ff9f9f", goblet: "#d6c6f5", bug: "#a98be8", bugDark: "#7f63c9",
    shield: "rgba(150,225,215,0.45)", shieldEdge: "#5fb8a6", pit: "#e87a82", immune: "#ffffff",
    bowl: "#ffe7b0", chop: "#c98a55", bag: "#bfe6f5", capsule: "#ffb3c7", capsule2: "#ffffff", heartPink: "#ff9fb0",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { bugs: 0, swim: 0, shield: 0, inflame: 0, ulcer: 0, atro: 0, spread: 0, risk: 0, test: 0, meds: 0, heal: 0 };
  const lerp = (a, b, t) => a + (b - a) * t;

  // ---------- 几何：上面是胃腔（胃酸），中间是黏液层，下面是一排胃黏膜细胞 ----------
  const G = () => {
    const cellTop = H * 0.66, cellH = H * 0.24, cw = H * 0.13;
    const ux = W * 0.64, uw = cw * 1.7 * S.ulcer;
    return { cellTop, cellH, cw, ux, uw, br: H * 0.03 };
  };
  const mTop = (g, x) => {
    const base = H * 0.5 + Math.sin(x * 0.02 + time * 0.8) * H * 0.008;
    const u = S.ulcer * Math.exp(-(((x - g.ux) / (g.cw * 2)) ** 2)); // 溃疡上方黏液变薄
    return base + u * (g.cellTop - H * 0.5 - H * 0.01);
  };

  // ---------- 粒子 ----------
  const ORDER = [4, 1, 7, 2, 6, 0, 8, 3, 5];
  const bugPos = (g, k) => {
    const x = W * (0.06 + 0.11 * k) + (rnd(k + 20) - 0.5) * W * 0.04;
    const stuck = rnd(k + 30) < 0.6;
    const y = stuck ? g.cellTop - g.br * 0.9 : g.cellTop - g.br * (2.2 + rnd(k + 40) * 1.4);
    return { x, y, ang: Math.PI / 2 + (rnd(k + 50) - 0.5) * 1.6, k, stuck };
  };
  const hions = Array.from({ length: 16 }, (_, i) => ({ x: rnd(i + 100), y: rnd(i + 120), ph: rnd(i + 140) * 6 }));
  const hearts = Array.from({ length: 6 }, (_, i) => ({ x: rnd(i + 8000), y: rnd(i + 8100), ph: rnd(i + 8200) * 6 }));

  function update() {}

  // ---------- 小角色 ----------
  // 幽门螺杆菌：螺旋形身体，头上一张调皮的小脸，尾巴上几根鞭毛
  function bug(x, y, r, ang, shield, mood = 0.8) {
    if (shield > 0.02) {
      ctx.save(); ctx.globalAlpha *= shield;
      const sr = r * 2.7 * (1 + 0.05 * Math.sin(time * 3 + x));
      ctx.beginPath(); ctx.arc(x, y, sr, 0, 6.3); ctx.fillStyle = C.shield; ctx.fill();
      ctx.strokeStyle = C.shieldEdge; ctx.lineWidth = 2; ctx.setLineDash([5, 5]); ctx.lineDashOffset = -time * 10; ctx.stroke(); ctx.setLineDash([]);
      ctx.restore();
    }
    const L = r * 3.4;
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    // 鞭毛
    ctx.strokeStyle = C.ink; ctx.lineWidth = Math.max(1.2, r * 0.12); ctx.lineCap = "round";
    for (let j = -1.5; j <= 1.5; j++) {
      ctx.beginPath();
      for (let t = 0; t <= 1.001; t += 0.1) {
        const px = -L / 2 - t * r * 1.8, py = j * r * 0.18 + t * j * r * 0.35 + Math.sin(t * 9 - time * 12 + j) * r * 0.18;
        ctx[t ? "lineTo" : "moveTo"](px, py);
      }
      ctx.stroke();
    }
    // 螺旋身体
    const body = () => {
      ctx.beginPath();
      for (let t = 0; t <= 1.001; t += 0.05) {
        const px = -L / 2 + t * L, py = Math.sin(t * Math.PI * 3 - time * 6) * r * 0.42 * (0.4 + 0.6 * t);
        ctx[t ? "lineTo" : "moveTo"](px, py);
      }
    };
    body(); ctx.strokeStyle = C.ink; ctx.lineWidth = r * 0.8 + 4; ctx.stroke();
    body(); ctx.strokeStyle = C.bug; ctx.lineWidth = r * 0.8; ctx.stroke();
    ctx.restore();
    // 头：永远正着的小脸
    const hx = x + Math.cos(ang) * L * 0.55, hy = y + Math.sin(ang) * L * 0.55;
    ctx.beginPath(); ctx.arc(hx, hy, r * 0.72, 0, 6.3); ctx.fillStyle = C.bug; ctx.fill(); outline(2); ctx.stroke();
    face(hx, hy + r * 0.05, r * 0.6, mood, true);
    if (mood > 0.5) { // 调皮地吐舌头
      ctx.beginPath(); ctx.arc(hx + r * 0.08, hy + r * 0.3, r * 0.1, 0, Math.PI); ctx.fillStyle = C.coral; ctx.fill();
    }
    return { hx, hy };
  }

  function immuneCell(x, y, s) {
    ctx.beginPath(); ctx.arc(x, y, s, 0, 6.3); ctx.fillStyle = C.immune; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = "#e7dcff"; ctx.beginPath(); ctx.arc(x + s * 0.4, y - s * 0.4, s * 0.25, 0, 6.3); ctx.fill();
    face(x, y + s * 0.05, s * 0.7, 0.1, false);
    outline(1.5); ctx.beginPath();
    ctx.moveTo(x - s * 0.45, y - s * 0.42); ctx.lineTo(x - s * 0.12, y - s * 0.28);
    ctx.moveTo(x + s * 0.45, y - s * 0.42); ctx.lineTo(x + s * 0.12, y - s * 0.28); ctx.stroke();
  }

  function capsule(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    rrect(-s, -s * 0.45, s * 2, s * 0.9, s * 0.45); ctx.fillStyle = C.capsule2; ctx.fill();
    ctx.save(); rrect(-s, -s * 0.45, s * 2, s * 0.9, s * 0.45); ctx.clip(); ctx.fillStyle = C.capsule; ctx.fillRect(-s, -s, s, s * 2); ctx.restore();
    rrect(-s, -s * 0.45, s * 2, s * 0.9, s * 0.45); outline(1.8); ctx.stroke();
    ctx.restore();
    face(x, y, s * 0.42, 1, false);
  }

  // ---------- 场景 ----------
  function scene() {
    const g = G(), step = Math.max(4, W / 160);
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(20, C.dot);

    // 胃腔：胃酸池
    const ag = ctx.createLinearGradient(0, 0, 0, H * 0.55);
    ag.addColorStop(0, C.acid); ag.addColorStop(1, C.acidDeep);
    ctx.fillStyle = ag; ctx.fillRect(0, 0, W, H * 0.6);
    // 冒小泡泡
    for (let i = 0; i < 12; i++) {
      const t = (time * 0.12 + rnd(i + 200)) % 1, x = rnd(i + 220) * W + Math.sin(time * 2 + i) * 4, y = H * 0.5 - t * H * 0.45;
      ctx.save(); ctx.globalAlpha *= 0.8 * (1 - t);
      ctx.beginPath(); ctx.arc(x, y, H * (0.008 + rnd(i + 240) * 0.01), 0, 6.3); ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.fill();
      ctx.strokeStyle = "#b8c95a"; ctx.lineWidth = 1.2; ctx.stroke();
      ctx.restore();
    }
    // 氢离子：胃酸里的小酸粒
    const hr = Math.max(6, H * 0.018);
    for (const h of hions) {
      const x = ((h.x + time * 0.015) % 1) * W, y = H * 0.1 + h.y * H * 0.36 + Math.sin(time * 1.5 + h.ph) * H * 0.015;
      ctx.beginPath(); ctx.arc(x, y, hr, 0, 6.3); ctx.fillStyle = C.hion; ctx.fill(); outline(1.3); ctx.stroke();
      if (hr > 7) {
        ctx.fillStyle = C.ink; ctx.font = `${hr * 1.05}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("H⁺", x, y + 1); ctx.textAlign = "left";
      }
    }

    // 黏液层
    ctx.beginPath();
    for (let x = -step; x <= W + step; x += step) ctx.lineTo(x, mTop(g, x));
    ctx.lineTo(W + step, g.cellTop + 10); ctx.lineTo(-step, g.cellTop + 10); ctx.closePath();
    ctx.fillStyle = C.mucus; ctx.globalAlpha = 0.92; ctx.fill(); ctx.globalAlpha = 1;
    ctx.strokeStyle = C.mucusEdge; ctx.lineWidth = 3; ctx.setLineDash([10, 6]);
    ctx.beginPath(); for (let x = -step; x <= W + step; x += step) ctx.lineTo(x, mTop(g, x)); ctx.stroke(); ctx.setLineDash([]);
    // 黏液里的小纹路
    ctx.strokeStyle = "rgba(169,205,232,0.7)"; ctx.lineWidth = 2;
    for (let i = 0; i < 10; i++) {
      const x = rnd(i + 300) * W, y = lerp(mTop(g, x), g.cellTop, 0.3 + rnd(i + 320) * 0.4);
      ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + H * 0.03, y - H * 0.012, x + H * 0.06, y); ctx.stroke();
    }

    // 黏膜下的组织 + 炎症
    ctx.fillStyle = "#ffd9d3"; ctx.fillRect(0, g.cellTop + g.cellH * 0.9, W, H);
    if (S.inflame > 0.02) {
      const pulse = 0.8 + 0.2 * Math.sin(time * 3.5);
      const rg = ctx.createRadialGradient(W * 0.55, H * 0.85, H * 0.05, W * 0.55, H * 0.85, W * 0.6);
      rg.addColorStop(0, `rgba(255,110,110,${0.45 * S.inflame * pulse})`); rg.addColorStop(1, "rgba(255,110,110,0)");
      ctx.fillStyle = rg; ctx.fillRect(0, g.cellTop - H * 0.05, W, H);
    }

    // 溃疡：黏膜破了一个坑
    let pit = null;
    if (S.ulcer > 0.02) {
      const pw = g.uw * 1.05, pd = g.cellH * 1.1 * S.ulcer;
      ctx.beginPath(); ctx.moveTo(g.ux - pw, g.cellTop);
      ctx.bezierCurveTo(g.ux - pw * 0.7, g.cellTop + pd, g.ux + pw * 0.7, g.cellTop + pd, g.ux + pw, g.cellTop);
      ctx.closePath(); ctx.fillStyle = C.pit; ctx.fill(); outline(2.5); ctx.stroke();
      pit = { x: g.ux, y: g.cellTop + pd * 0.6 };
    }

    // 胃黏膜细胞
    const n = Math.ceil(W / g.cw) + 1, cells = [];
    for (let i = 0; i < n; i++) {
      const x = (i + 0.5) * g.cw - g.cw * 0.2;
      if (S.ulcer > 0.02 && Math.abs(x - g.ux) < g.uw) continue;
      const atroHere = S.atro * clamp((W * 0.55 - x) / (W * 0.25), 0, 1);
      const h = g.cellH * (1 - 0.35 * atroHere), y = g.cellTop + (g.cellH - h) * 0;
      const goblet = atroHere > 0.35 && i % 3 === 1;
      const hurt = S.inflame * (0.5 + 0.5 * rnd(i + 400)) + (S.ulcer > 0.1 && Math.abs(x - g.ux) < g.uw + g.cw * 1.2 ? 0.8 : 0);
      rrect(x - g.cw * 0.46, y, g.cw * 0.92, h, g.cw * 0.3);
      ctx.fillStyle = goblet ? C.goblet : mix(C.cell, C.cellHurt, clamp(hurt * 0.6, 0, 1)); ctx.fill(); outline(2); ctx.stroke();
      if (goblet) {
        // 肠化：长出肠道样的杯状细胞，顶上鼓着一个黏液“杯子”
        ctx.beginPath(); ctx.ellipse(x, y + h * 0.3, g.cw * 0.28, h * 0.22, 0, 0, 6.3); ctx.fillStyle = C.paper; ctx.fill(); outline(1.5); ctx.stroke();
      }
      // 细胞核在下半部分
      ctx.beginPath(); ctx.ellipse(x, y + h * 0.75, g.cw * 0.2, h * 0.12, 0, 0, 6.3); ctx.fillStyle = goblet ? "#b39ce8" : "#f59aa0"; ctx.fill();
      const mood = clamp(0.9 - hurt * 1.3 - atroHere * 0.8 + S.heal * 0.8, -1, 1);
      face(x, y + h * (goblet ? 0.58 : 0.4), g.cw * 0.34, mood, true);
      if (mood < -0.4 && i % 2 === 0) sweat(x + g.cw * 0.28, y + h * 0.12, g.cw * 0.18);
      cells.push({ x, y, h, goblet, atroHere });
    }

    // 免疫细胞：赶来“打仗”，引起炎症
    const imm = [];
    if (S.inflame > 0.05) {
      const is = g.cw * 0.22;
      for (let k = 0; k < 6; k++) {
        const x = W * (0.1 + 0.16 * k) + Math.sin(time * 0.8 + k) * g.cw * 0.4, y = g.cellTop + g.cellH + H * 0.03 + Math.cos(time + k) * 3;
        ctx.save(); ctx.globalAlpha *= clamp(S.inflame * 1.5, 0, 1); immuneCell(x, y, is); ctx.restore();
        imm.push({ x, y });
      }
    }

    // 住在黏液里的细菌
    const nb = Math.round(clamp(S.bugs, 0, 1) * ORDER.length), bugs = [];
    for (let j = 0; j < nb; j++) {
      const p = bugPos(g, ORDER[j]);
      if (S.ulcer > 0.1 && Math.abs(p.x - g.ux) < g.uw + g.br * 2) p.y = mTop(g, p.x) + g.br * 1.5;
      const wig = Math.sin(time * 2 + p.k) * g.br * 0.2;
      const h = bug(p.x + wig, p.y, g.br, p.ang + Math.sin(time * 1.5 + p.k) * 0.15, S.shield * 0.8, 0.8);
      bugs.push(Object.assign({}, p, h));
    }

    // 正在钻进黏液的那一只
    let swimmer = null;
    if (S.swim > 0.02) {
      const t = (time / 7) % 1, e = clamp(t / 0.7, 0, 1), ease = e * e * (3 - 2 * e);
      const x0 = W * 0.2, y0 = H * 0.26, x1 = W * 0.44, y1 = g.cellTop - g.br * 1.1;
      const x = lerp(x0, x1, ease) + Math.sin(e * 14) * g.br * 0.5 * (1 - e), y = lerp(y0, y1, ease);
      const a = S.swim * (t < 0.06 ? t / 0.06 : t > 0.94 ? (1 - t) / 0.06 : 1);
      ctx.save(); ctx.globalAlpha *= a;
      const ang = Math.atan2(y1 - y0, x1 - x0) + Math.sin(time * 5) * 0.2;
      const h = bug(x, y, g.br * 1.15, ang, S.shield, 1);
      ctx.restore();
      swimmer = Object.assign({ x, y, sr: g.br * 1.15 * 2.7, a }, h);
    }

    // 药物胶囊：飘进来，清除细菌
    if (S.meds > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.meds;
      for (let k = 0; k < 4; k++) {
        const t = (time * 0.08 + k / 4) % 1, x = W * (0.12 + 0.2 * k) + Math.sin(time + k) * 8, y = H * 0.12 + t * H * 0.36;
        ctx.save(); ctx.globalAlpha *= t > 0.85 ? (1 - t) / 0.15 : 1;
        capsule(x, y, Math.max(8, H * 0.026), 0.4 * Math.sin(time + k));
        ctx.restore();
      }
      ctx.restore();
    }

    let spreadCard = null, riskCard = null, testCard = null;
    if (S.spread > 0.02) spreadCard = drawSpread();
    if (S.risk > 0.02) riskCard = drawRisk();
    if (S.test > 0.02) testCard = drawTest();

    if (S.heal > 0.02) {
      for (const h of hearts) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), C.heartPink);
        ctx.restore();
      }
    }
    return { g, cells, bugs, swimmer, pit, imm, spreadCard, riskCard, testCard };
  }

  // ---------- 小卡片 ----------
  const cardBox = (wk, hk) => { const cw = Math.min(W * wk, H * 0.8), ch = cw * hk; return { x: W - cw - 14, y: H * 0.1 + (Anima.UI > 1 ? H * 0.08 : 0), cw, ch }; };
  function cardBg(k, a) {
    ctx.globalAlpha *= a;
    ctx.fillStyle = C.ink; rrect(k.x + 5, k.y + 5, k.cw, k.ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(k.x, k.y, k.cw, k.ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
  }
  function bowl(x, y, s) {
    ctx.beginPath(); ctx.moveTo(x - s, y); ctx.quadraticCurveTo(x - s, y + s * 0.9, x, y + s * 0.9); ctx.quadraticCurveTo(x + s, y + s * 0.9, x + s, y); ctx.closePath();
    ctx.fillStyle = C.bowl; ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x, y, s, s * 0.22, 0, 0, 6.3); ctx.fillStyle = "#fff6e0"; ctx.fill(); outline(2); ctx.stroke();
  }
  function chopsticks(x, y, s, ang, color) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    ctx.lineCap = "round";
    for (const d of [-s * 0.08, s * 0.08]) {
      ctx.strokeStyle = C.ink; ctx.lineWidth = s * 0.1 + 3; ctx.beginPath(); ctx.moveTo(0, d); ctx.lineTo(-s * 1.3, d * 2.5); ctx.stroke();
      ctx.strokeStyle = color; ctx.lineWidth = s * 0.1; ctx.beginPath(); ctx.moveTo(0, d); ctx.lineTo(-s * 1.3, d * 2.5); ctx.stroke();
    }
    ctx.restore();
  }
  // 传播：共用碗筷 vs 分餐公筷
  function drawSpread() {
    const k = cardBox(0.62, 0.46);
    ctx.save(); cardBg(k, S.spread);
    const fs = k.cw / 13, s = k.cw * 0.12, by = k.y + k.ch * 0.42;
    const lx = k.x + k.cw * 0.26, rx = k.x + k.cw * 0.74;
    // 左：几双筷子伸进同一个碗
    bowl(lx, by, s);
    chopsticks(lx - s * 0.2, by, s, -2.4, C.chop); chopsticks(lx + s * 0.2, by, s, -0.7, C.chop); chopsticks(lx, by - s * 0.1, s, -1.57, C.chop);
    for (let j = 0; j < 3; j++) {
      const t = (time * 0.7 + j / 3) % 1;
      ctx.beginPath(); ctx.arc(lx + (j - 1) * s * 0.45, by - s * 0.05 - Math.sin(t * Math.PI) * s * 0.5, s * 0.12, 0, 6.3); ctx.fillStyle = C.bug; ctx.fill(); outline(1.2); ctx.stroke();
    }
    // 右：公筷 + 小碗，打个勾
    bowl(rx - s * 0.5, by + s * 0.1, s * 0.6); bowl(rx + s * 0.6, by + s * 0.1, s * 0.6);
    chopsticks(rx + s * 0.1, by - s * 0.1, s * 0.9, -1.2, "#6cc9ae");
    ctx.strokeStyle = C.mint; ctx.lineWidth = 4; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(rx + s * 0.7, by - s * 0.9); ctx.lineTo(rx + s * 0.9, by - s * 0.65); ctx.lineTo(rx + s * 1.3, by - s * 1.15); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.font = `${fs}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("共用碗筷", lx, k.y + k.ch - fs * 0.95); ctx.fillText("分餐、公筷", rx, k.y + k.ch - fs * 0.95);
    ctx.textAlign = "left";
    ctx.restore();
    return k;
  }
  // 风险：胃炎 → 萎缩 → 肠化 → 胃癌（只有少数人走到最后）
  function drawRisk() {
    const k = cardBox(0.66, 0.36);
    ctx.save(); cardBg(k, S.risk);
    const names = ["慢性胃炎", "萎缩", "肠化", "胃癌"], fs = k.cw / 15;
    const y = k.y + k.ch * 0.4, gap = k.cw / 4;
    const hot = Math.floor(time / 1.4) % 4;
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    for (let i = 0; i < 4; i++) {
      const cx = k.x + gap * (i + 0.5), w = gap * 0.82, h = fs * 1.8;
      ctx.save(); if (i === 3) ctx.globalAlpha *= 0.75;
      rrect(cx - w / 2, y - h / 2 - (hot === i ? 3 : 0), w, h, h / 2);
      ctx.fillStyle = ["#ffe0cc", "#ffd0b8", "#e6d8ff", "#f6c1c1"][i]; ctx.fill();
      outline(2); if (i === 3) ctx.setLineDash([5, 4]); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = C.ink; ctx.font = `${fs * (names[i].length > 2 ? 0.85 : 1)}px ${Anima.ROUND}`;
      ctx.fillText(names[i], cx, y - (hot === i ? 3 : 0) + 1);
      ctx.restore();
      if (i < 3) {
        const ax = cx + gap / 2;
        outline(1.8); ctx.beginPath(); ctx.moveTo(ax - fs * 0.25, y); ctx.lineTo(ax + fs * 0.25, y); ctx.lineTo(ax + fs * 0.05, y - fs * 0.2); ctx.moveTo(ax + fs * 0.25, y); ctx.lineTo(ax + fs * 0.05, y + fs * 0.2); ctx.stroke();
      }
    }
    ctx.fillStyle = C.soft; ctx.font = `${fs * 0.9}px ${Anima.ROUND}`;
    ctx.fillText("要很多年，只有少数人会走到最后", k.x + k.cw / 2, k.y + k.ch - fs * 1.0);
    ctx.textAlign = "left";
    ctx.restore();
    return k;
  }
  // 呼气试验：吹口气就能查
  function drawTest() {
    const k = cardBox(0.4, 0.62);
    ctx.save(); cardBg(k, S.test);
    const fs = k.cw / 8.5, cx = k.x + k.cw * 0.5, s = k.cw * 0.2;
    // 小人侧脸吹气
    const hx = k.x + k.cw * 0.25, hy = k.y + k.ch * 0.42;
    ctx.beginPath(); ctx.arc(hx, hy, s * 0.8, 0, 6.3); ctx.fillStyle = "#ffe0cc"; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(hx - s * 0.15, hy - s * 0.15, s * 0.1, 0, 6.3); ctx.fill();
    ctx.beginPath(); ctx.arc(hx + s * 0.45, hy + s * 0.2, s * 0.14, 0, 6.3); ctx.stroke();
    // 吹进袋子
    const blow = 0.85 + 0.15 * Math.sin(time * 2.5);
    const bx = k.x + k.cw * 0.7, byy = k.y + k.ch * 0.42;
    outline(2); ctx.beginPath(); ctx.moveTo(hx + s * 0.6, hy + s * 0.2); ctx.lineTo(bx - s * 0.9 * blow, byy + s * 0.2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(bx, byy, s * 0.95 * blow, s * 1.2 * blow, 0, 0, 6.3); ctx.fillStyle = C.bag; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.font = `${fs * 0.8}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("¹³C", bx, byy + 1);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    ctx.fillText("呼气试验", cx, k.y + k.ch - fs * 0.95);
    ctx.textAlign = "left";
    ctx.restore();
    return { k, bag: { x: bx, y: byy } };
  }

  function hud() {
    const b = S.bugs, last = cur === CH.length - 1;
    pill(14, 12, "细菌", b < 0.08 ? (last ? "已清除" : "没有") : b < 0.5 ? "少量" : "很多", b < 0.08 ? C.mint : b < 0.5 ? "#e7a500" : "#f25f6b", false);
    const [label, value, st] = CH[cur].pill;
    pill(W - 14, 12, label, value, st === "ok" ? C.mint : st === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const r = scene(), g = r.g;
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const upper = H * 0.42, bot = H * 0.975;
    const mid = (x) => (mTop(g, x) + g.cellTop) / 2;
    callout("acid", on("acid"), W * 0.3, H * 0.36, W * 0.24, upper - H * 0.1, "胃酸：pH 约 1～2");
    callout("mucus", on("mucus"), W * 0.72, mid(W * 0.72), W * 0.72, upper - H * 0.1, "厚厚的黏液保护层");
    const c0 = r.cells.find((c) => c.x > W * 0.4);
    callout("cell", on("cell") && !!c0, c0 ? c0.x : 0, c0 ? c0.y + c0.h * 0.4 : 0, c0 ? c0.x + W * 0.08 : 0, bot, "胃黏膜细胞");
    const sw = r.swimmer;
    callout("bug", on("bug") && !!sw && sw.a > 0.5, sw ? sw.hx : 0, sw ? sw.hy : 0, W * 0.2, upper - H * 0.1, "幽门螺杆菌");
    callout("shield", on("shield") && !!sw && sw.a > 0.5, sw ? sw.x + sw.sr * 0.7 : 0, sw ? sw.y - sw.sr * 0.7 : 0, W * 0.7, upper - H * 0.1, "尿素酶造出的碱性护盾");
    const st = r.bugs.find((b) => b.stuck && b.x > W * 0.55);
    callout("hide", on("hide") && !!st, st ? st.hx : 0, st ? st.hy : 0, st ? st.hx : 0, bot, "钻进黏液层，贴在细胞上");
    const b1 = r.bugs.find((b) => b.x < W * 0.35);
    callout("many", on("many") && !!b1, b1 ? b1.hx : 0, b1 ? b1.hy : 0, W * 0.22, bot, "常常一家人都有");
    const b2 = r.bugs.find((b) => b.stuck && b.x > W * 0.5);
    callout("stick", on("stick") && !!b2, b2 ? b2.hx : 0, b2 ? b2.hy : 0, W * 0.74, bot, "在胃里一住就是几十年");
    const im = r.imm[1];
    callout("gastritis", on("gastritis") && !!im, im ? im.x : 0, im ? im.y : 0, W * 0.2, bot, "免疫细胞赶来：慢性胃炎");
    callout("ulcer", on("ulcer") && !!r.pit, r.pit ? r.pit.x : 0, r.pit ? r.pit.y : 0, g.ux + W * 0.04, upper - H * 0.1, "溃疡：黏膜破了个坑");
    const at = r.cells.find((c) => !c.goblet && c.atroHere > 0.6);
    callout("atro", on("atro") && !!at, at ? at.x : 0, at ? at.y + at.h * 0.5 : 0, W * 0.18, bot, "萎缩：黏膜变薄");
    const gb = r.cells.find((c) => c.goblet && c.x > W * 0.2);
    callout("im", on("im") && !!gb, gb ? gb.x : 0, gb ? gb.y + gb.h * 0.3 : 0, W * 0.58, bot, "肠化：像肠子的细胞");
    if (r.testCard) callout("breath", on("breath"), r.testCard.bag.x, r.testCard.bag.y + r.testCard.k.ch * 0.2, r.testCard.k.x + r.testCard.k.cw * 0.3, r.testCard.k.y + r.testCard.k.ch + H * 0.08, "吹口气就能查");
    else callout("breath", false, 0, 0, 0, 0, "");
    callout("med", on("med"), W * 0.32, H * 0.3, W * 0.22, upper - H * 0.1, "按时足量吃完药");
    const cc = r.cells.find((c) => c.x > W * 0.55);
    callout("clean", on("clean") && !!cc, cc ? cc.x : 0, cc ? cc.y + cc.h * 0.4 : 0, W * 0.5, bot, "细菌清除，黏膜恢复");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#5fae6e",
    titleCard: { lines: ["胃酸那么强，", "细菌怎么活下来？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
