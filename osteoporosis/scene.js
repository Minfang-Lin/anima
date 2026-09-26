Anima.register("osteoporosis", {
    "title": "骨头的存款",
    "tag": "骨骼小剧场",
    "headline": "骨头也会被“【掏空】”？",
    "lede": "骨头是活的，一直在拆旧建新。拆得多、建得少，骨量就会减少，最后变成轻轻一摔就骨折的骨质疏松。",
    "summary": "骨头怎样一点点变“空”：骨量减少、骨质疏松、T 值和脆性骨折，以及怎样保护骨头。",
    "footer": "骨密度检查和骨质疏松治疗，可到骨科、内分泌科或骨质疏松专科门诊就诊。",
    "canvasLabel": "卡通骨小梁剖面动画",
    "disease": "骨质疏松",
    "organs": ["bone"],
    "categories": ["bone"],
    "color": "#6aa8e8"
  }, () => {
  const CH = [
    { title: "骨头是活的", t: 0.5, loss: 0, broken: 0, clast: 0.6, blast: 0.6, bank: 0, spine: 0, crack: 0, calcium: 0.3, sleepy: 0, heal: 0,
      pill: ["年龄", "30 岁", "ok"],
      text: "骨头不是一块死的“石头”，而是一直在翻新的活组织。破骨细胞负责把旧骨头一点点拆掉，成骨细胞负责把新骨头砌回去。年轻时两边配合得刚刚好，骨头里的骨小梁像一张结实的网架。",
      fact: "成年人每年大约有 10% 的骨骼在更新",
      labels: ["trab", "clast", "blast"] },
    { title: "骨量像一笔存款", t: -0.5, loss: 0.15, broken: 0, clast: 0.75, blast: 0.45, bank: 1, spine: 0, crack: 0, calcium: 0.3, sleepy: 0, heal: 0,
      pill: ["年龄", "30 → 55 岁", "warn"],
      text: "骨量就像银行里的存款。从小到大一直在存，大约 30 岁左右存到最多，叫作峰值骨量，之后就慢慢往外取。女性绝经后雌激素下降，破骨细胞变得特别活跃，骨量会在几年里掉得很快。",
      fact: "年轻时存得越多，老了越不容易骨质疏松",
      labels: ["peak", "meno"] },
    { title: "骨量减少：网架变细了", t: -1.8, loss: 0.5, broken: 0.06, clast: 0.9, blast: 0.35, bank: 0, spine: 0, crack: 0, calcium: 0.2, sleepy: 0, heal: 0,
      pill: ["年龄", "58 岁", "warn"],
      text: "拆得多、砌得少，骨小梁就一点点变细、变薄。用双能 X 线测骨密度，T 值在 -1 到 -2.5 之间，叫作骨量减少。它还不是骨质疏松，但已经在提醒：该给骨头“存款”了。",
      fact: "骨密度 T 值：≥ -1 正常；-1 到 -2.5 骨量减少；≤ -2.5 骨质疏松",
      labels: ["thin"] },
    { title: "骨质疏松：网架断了", t: -3.0, loss: 0.82, broken: 0.35, clast: 1, blast: 0.3, bank: 0, spine: 0, crack: 0, calcium: 0.2, sleepy: 0, heal: 0,
      pill: ["年龄", "66 岁", "bad"],
      text: "继续流失下去，骨小梁开始一根根断开，孔洞越来越大，骨髓里的脂肪也变多了。T 值低于或等于 -2.5，就是骨质疏松。它几乎没有感觉，很多人直到骨折才知道。",
      fact: "我国 50 岁以上人群骨质疏松患病率约 19%，女性约 32%",
      labels: ["hole", "fat"] },
    { title: "轻轻一摔就骨折", t: -3.2, loss: 0.86, broken: 0.42, clast: 1, blast: 0.25, bank: 0, spine: 1, crack: 1, calcium: 0.2, sleepy: 0, heal: 0,
      pill: ["身高", "矮了 4 厘米", "bad"],
      text: "骨质疏松的骨头又脆又轻，轻轻一摔、弯腰搬东西，甚至咳嗽都可能骨折。最常见的是脊椎压缩性骨折，人会变矮、驼背；还有手腕和髋部骨折。髋部骨折后，很多老人从此需要长期照顾。",
      fact: "身高比年轻时矮了 4 厘米以上，要警惕脊椎骨折",
      labels: ["crack", "spine"] },
    { title: "给骨头存款、防跌倒", t: -2.6, loss: 0.6, broken: 0.35, clast: 0.4, blast: 0.9, bank: 0, spine: 0, crack: 0, calcium: 1, sleepy: 1, heal: 1,
      pill: ["钙", "1000 mg/天", "ok"],
      text: "吃够钙和蛋白质，多晒太阳补充维生素 D；多做快走、慢跑、跳舞这类负重运动，加上力量和平衡训练；不吸烟、少喝酒，家里做好防跌倒。确诊骨质疏松后，光补钙是不够的，需要在医生指导下用抑制破骨或促进成骨的药物。",
      fact: "50 岁以上每天钙推荐 1000 到 1200 mg；T 值 ≤ -2.5 或发生过脆性骨折，应尽早就医",
      labels: ["calcium", "sleep", "build"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    marrow: "#ffd9cc", fat: "#fff1b8", bone: "#fff3dc", osteon: "#f0dcb8", newBone: "#fffbe8",
    clast: "#b48ce0", blast: "#8fd3e8", crumb: "#f3dfbd", calcium: "#ffffff", sun: "#ffc94d",
    women: "#ff7b7b", men: "#6aa8e8", disc: "#bfe6f5", heartPink: "#ff9fb0",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, heart, bolt, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { t: 0.5, loss: 0, broken: 0, clast: 0.6, blast: 0.6, bank: 0, spine: 0, crack: 0, calcium: 0.3, sleepy: 0, heal: 0 };

  // ---------- 几何：上下两层骨皮质，中间是骨小梁网架 ----------
  const G = () => {
    const outTop = H * 0.1, outBot = H * 0.97, ct = H * 0.075 * (1 - 0.5 * S.loss);
    return { outTop, outBot, ct, inTop: outTop + ct, inBot: outBot - ct };
  };

  // 骨小梁：节点 + 连接它们的梁，每根梁有固定的编号，粗细和断开都由编号决定
  function lattice(g) {
    const sp = H * 0.2, rows = Math.max(3, Math.round((g.inBot - g.inTop) / sp)), rh = (g.inBot - g.inTop) / rows;
    const cols = Math.ceil(W / sp) + 2;
    const node = (r, c) => {
      const id = r * 100 + c;
      const x = (c - 0.5) * sp + (rnd(id + 5) - 0.5) * sp * 0.5;
      const y = r === 0 ? g.inTop : r === rows ? g.inBot : g.inTop + r * rh + (rnd(id + 9) - 0.5) * rh * 0.4;
      return { x, y, id };
    };
    const edges = [];
    for (let r = 0; r <= rows; r++) for (let c = 0; c < cols; c++) {
      const a = node(r, c);
      const add = (b, k) => {
        const seed = a.id * 3 + k;
        const f = clamp(1 - 0.7 * S.loss * (0.5 + rnd(seed + 1)) + 0.2 * S.blast * S.heal, 0.18, 1);
        edges.push({ a, b, seed, w: H * 0.045 * f, broken: rnd(seed + 0.5) < S.broken, inner: r > 0 && r < rows });
      };
      if (r > 0 && r < rows) add(node(r, c + 1), 0);
      if (r < rows) add(node(r + 1, c), 1);
      if (r < rows && (r + c) % 2 === 0) add(node(r + 1, c + 1), 2);
    }
    return edges;
  }

  function update() {}

  // ---------- 画笔 ----------
  function strutPath(e, part) {
    const { a, b } = e;
    if (!e.broken) { ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); return; }
    // 断开的梁：两头各剩一小截
    const k = 0.3 * part;
    ctx.moveTo(a.x, a.y); ctx.lineTo(a.x + (b.x - a.x) * k, a.y + (b.y - a.y) * k);
    ctx.moveTo(b.x, b.y); ctx.lineTo(b.x + (a.x - b.x) * k, b.y + (a.y - b.y) * k);
  }
  const mid = (e, t = 0.5) => ({ x: e.a.x + (e.b.x - e.a.x) * t, y: e.a.y + (e.b.y - e.a.y) * t });
  const normal = (e) => { const dx = e.b.x - e.a.x, dy = e.b.y - e.a.y, l = Math.hypot(dx, dy) || 1; return { x: -dy / l, y: dx / l }; };

  function clastAt(edges, k) {
    const pool = edges.filter((e) => e.inner && !e.broken);
    const e = pool[(k * 7 + 3) % pool.length];
    const n = normal(e), s = H * 0.045, side = k % 2 ? 1 : -1, m = mid(e, 0.45);
    return { e, x: m.x + n.x * side * (e.w / 2 + s * 0.8), y: m.y + n.y * side * (e.w / 2 + s * 0.8), s, n, side, m };
  }
  function blastsAt(edges, k) {
    const pool = edges.filter((e) => e.inner && !e.broken);
    const e = pool[(k * 11 + 6) % pool.length];
    const n = normal(e), s = H * 0.026, side = k % 2 ? -1 : 1;
    return { e, n, side, cells: [0.3, 0.5, 0.7].map((t) => { const m = mid(e, t); return { x: m.x + n.x * side * (e.w / 2 + s * 1.05), y: m.y + n.y * side * (e.w / 2 + s * 1.05) }; }), s };
  }

  function drawClast(c, sleepy) {
    const { x, y, s } = c;
    const ang = Math.atan2(-c.n.y * c.side, -c.n.x * c.side); // 嘴朝着骨头
    const open = sleepy > 0.5 ? 0.05 : 0.25 + 0.2 * Math.abs(Math.sin(time * 5 + x));
    ctx.save(); ctx.translate(x, y);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, s, ang + open, ang + Math.PI * 2 - open); ctx.closePath();
    ctx.fillStyle = C.clast; ctx.fill(); outline(2); ctx.stroke();
    // 多个细胞核
    ctx.fillStyle = "#8a63c4";
    for (const [dx, dy] of [[-0.35, 0.3], [0.05, 0.45], [-0.45, -0.1]]) {
      const rx = dx * Math.cos(ang) - dy * Math.sin(ang), ry = dx * Math.sin(ang) + dy * Math.cos(ang);
      ctx.beginPath(); ctx.arc(rx * s, ry * s, s * 0.12, 0, 6.3); ctx.fill();
    }
    const fx = -Math.cos(ang) * s * 0.3, fy = -Math.sin(ang) * s * 0.3 - s * 0.2;
    if (sleepy > 0.5) {
      outline(1.6); ctx.beginPath();
      ctx.arc(fx - s * 0.2, fy, s * 0.09, 0.15 * Math.PI, 0.85 * Math.PI);
      ctx.moveTo(fx + s * 0.29, fy); ctx.arc(fx + s * 0.2, fy, s * 0.09, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
      ctx.fillStyle = C.soft; ctx.font = `${s * 0.6}px ${Anima.ROUND}`;
      const t = (time * 0.6 + x * 0.01) % 1;
      ctx.fillText("z", fx + s * (0.5 + t * 0.6), fy - s * (0.6 + t));
    } else {
      ctx.fillStyle = C.ink;
      ctx.beginPath(); ctx.arc(fx - s * 0.2, fy, s * 0.08, 0, 6.3); ctx.arc(fx + s * 0.2, fy, s * 0.08, 0, 6.3); ctx.fill();
    }
    ctx.restore();
  }

  function drawBlast(x, y, s) {
    ctx.beginPath(); ctx.ellipse(x, y, s, s * 0.85, 0, 0, 6.3); ctx.fillStyle = C.blast; ctx.fill(); outline(1.8); ctx.stroke();
    face(x, y, s * 0.75, 0.9, true);
  }

  // ---------- 场景 ----------
  function scene() {
    const g = G();
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = C.marrow; ctx.fillRect(0, g.inTop, W, g.inBot - g.inTop);
    // 骨髓里的脂肪：骨质疏松时变多
    const nFat = Math.round(6 + 16 * S.loss * (1 - 0.3 * S.heal));
    for (let i = 0; i < nFat; i++) {
      const x = rnd(i + 3000) * W, y = g.inTop + rnd(i + 3100) * (g.inBot - g.inTop), r = H * (0.018 + rnd(i + 3200) * 0.02);
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fillStyle = C.fat; ctx.fill(); outline(1.2); ctx.stroke();
    }

    const edges = lattice(g);
    // 骨小梁：先画粗描边，再盖上填充，得到连在一起的网架
    ctx.lineCap = "round";
    for (const e of edges) { ctx.beginPath(); strutPath(e, 1); ctx.strokeStyle = C.ink; ctx.lineWidth = e.w + 5; ctx.stroke(); }
    for (const e of edges) { ctx.beginPath(); strutPath(e, 1); ctx.strokeStyle = C.bone; ctx.lineWidth = e.w; ctx.stroke(); }

    // 骨皮质（上下两层）
    for (const [y0, y1] of [[g.outTop, g.inTop], [g.inBot, g.outBot]]) {
      ctx.fillStyle = C.bone; ctx.fillRect(-10, y0, W + 20, y1 - y0);
      outline(3); ctx.beginPath(); ctx.moveTo(0, y0); ctx.lineTo(W, y0); ctx.moveTo(0, y1); ctx.lineTo(W, y1); ctx.stroke();
      ctx.strokeStyle = C.osteon; ctx.lineWidth = 2;
      for (let x = H * 0.06; x < W; x += H * 0.12) {
        const cy = (y0 + y1) / 2, r = (y1 - y0) * 0.32;
        ctx.beginPath(); ctx.arc(x, cy, r, 0, 6.3); ctx.stroke();
        ctx.beginPath(); ctx.arc(x, cy, r * 0.45, 0, 6.3); ctx.stroke();
      }
    }

    // 成骨细胞：沿着骨小梁排队，身后砌出一层新骨
    const nb = Math.round(S.blast * 5);
    const blastGroups = [];
    for (let k = 0; k < nb; k++) {
      const b = blastsAt(edges, k);
      blastGroups.push(b);
      const a0 = mid(b.e, 0.25), a1 = mid(b.e, 0.75), off = b.e.w / 2 + 2;
      ctx.strokeStyle = C.newBone; ctx.lineWidth = Math.max(3, H * 0.012 * S.blast); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(a0.x + b.n.x * b.side * off, a0.y + b.n.y * b.side * off); ctx.lineTo(a1.x + b.n.x * b.side * off, a1.y + b.n.y * b.side * off); ctx.stroke();
      for (const c of b.cells) drawBlast(c.x, c.y + Math.sin(time * 2 + c.x) * 1.5, b.s);
    }

    // 裂纹：轻轻一摔就骨折
    const cracked = [];
    if (S.crack > 0.02) {
      const pool = edges.filter((e) => e.inner && !e.broken);
      for (let k = 0; k < 3; k++) {
        const e = pool[(k * 13 + 2) % pool.length], m = mid(e, 0.5), n = normal(e), L = e.w * 1.3;
        cracked.push(m);
        ctx.save(); ctx.globalAlpha *= S.crack * (0.6 + 0.4 * Math.abs(Math.sin(time * 3 + k)));
        ctx.strokeStyle = C.ink; ctx.lineWidth = 3; ctx.lineJoin = "miter";
        ctx.beginPath();
        for (let j = 0; j <= 4; j++) {
          const t = j / 4 - 0.5, z = (j % 2 ? 1 : -1) * e.w * 0.18;
          ctx[j ? "lineTo" : "moveTo"](m.x + n.x * t * L + (n.y) * z, m.y + n.y * t * L - n.x * z);
        }
        ctx.stroke();
        ctx.restore();
        bolt(m.x + H * 0.05, m.y - H * 0.05, H * 0.03, S.crack * (0.5 + 0.5 * Math.sin(time * 4 + k)), "#ff5d73");
      }
    }

    // 破骨细胞：啃出小坑，碎屑飘走
    const nc = Math.round(S.clast * 5);
    const clasts = [];
    for (let k = 0; k < nc; k++) {
      const c = clastAt(edges, k);
      clasts.push(c);
      const pit = c.s * 0.55 * (1 - 0.6 * S.sleepy);
      ctx.beginPath(); ctx.arc(c.m.x + c.n.x * c.side * c.e.w * 0.45, c.m.y + c.n.y * c.side * c.e.w * 0.45, pit, 0, 6.3);
      ctx.fillStyle = C.marrow; ctx.fill();
      if (S.sleepy < 0.5) {
        for (let j = 0; j < 3; j++) {
          const t = (time * 0.7 + j / 3 + k * 0.17) % 1;
          ctx.save(); ctx.globalAlpha *= 1 - t;
          ctx.fillStyle = C.crumb;
          ctx.fillRect(c.x + c.n.x * c.side * t * c.s * 2 + (j - 1) * c.s * 0.5, c.y + c.n.y * c.side * t * c.s * 2 - t * c.s, c.s * 0.22, c.s * 0.22);
          ctx.restore();
        }
      }
      drawClast(c, S.sleepy);
    }

    // 钙和维生素 D
    let calciumDot = null, sun = null;
    if (S.calcium > 0.02) {
      const n = Math.round(S.calcium * 14);
      for (let i = 0; i < n; i++) {
        const x = ((rnd(i + 4000) + time * 0.04) % 1) * W, y = g.inTop + (0.1 + rnd(i + 4100) * 0.8) * (g.inBot - g.inTop) + Math.sin(time + i) * 4;
        const r = H * 0.018;
        ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fillStyle = C.calcium; ctx.fill(); outline(1.4); ctx.stroke();
        ctx.fillStyle = C.soft; ctx.font = `${r}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("Ca", x, y + 1); ctx.textAlign = "left";
        if (!calciumDot && x > W * 0.3 && x < W * 0.6) calciumDot = { x, y };
      }
      if (S.heal > 0.3) {
        const sx = W - H * 0.12, sy = g.inTop + H * 0.12, sr = H * 0.045;
        ctx.save(); ctx.globalAlpha *= S.heal;
        ctx.strokeStyle = C.ink; ctx.lineWidth = 3;
        for (let k = 0; k < 8; k++) {
          const a = k * Math.PI / 4 + time * 0.3;
          ctx.beginPath(); ctx.moveTo(sx + Math.cos(a) * sr * 1.3, sy + Math.sin(a) * sr * 1.3); ctx.lineTo(sx + Math.cos(a) * sr * 1.7, sy + Math.sin(a) * sr * 1.7); ctx.stroke();
        }
        ctx.beginPath(); ctx.arc(sx, sy, sr, 0, 6.3); ctx.fillStyle = C.sun; ctx.fill(); outline(2); ctx.stroke();
        ctx.fillStyle = C.ink; ctx.font = `${sr}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("D", sx, sy + 1); ctx.textAlign = "left";
        ctx.restore();
        sun = { x: sx, y: sy };
      }
    }

    let bank = null, spine = null;
    if (S.bank > 0.02) bank = drawBank();
    if (S.spine > 0.02) spine = drawSpine();

    if (S.heal > 0.02) {
      for (const [i, h] of [[0, 0.15], [1, 0.4], [2, 0.62], [3, 0.85]]) {
        const x = h * W, y = ((rnd(i + 8100) - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02), C.heartPink);
        ctx.restore();
      }
    }
    return { g, edges, clasts, blastGroups, cracked, calciumDot, sun, bank, spine };
  }

  // 骨量随年龄变化的小图表（示意）
  function drawBank() {
    const cw = Math.min(H * 0.62, W * 0.56), ch = H * 0.4, x = W - cw - 14, y = H - ch - 14;
    ctx.save(); ctx.globalAlpha *= S.bank;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, cw, ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(x, y, cw, ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const fs = cw / 16;
    const px = x + fs * 2.2, py = y + fs * 2.2, pw = cw - fs * 3.4, ph = ch - fs * 4.4;
    const X = (age) => px + (age / 80) * pw, Y = (v) => py + ph - v * ph;
    ctx.fillStyle = C.ink; ctx.font = `${fs * 1.05}px ${Anima.ROUND}`; ctx.textBaseline = "middle";
    ctx.fillText("骨量随年龄的变化（示意）", x + fs * 0.8, y + fs * 1.1);
    outline(1.8); ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py + ph); ctx.lineTo(px + pw, py + ph); ctx.stroke();
    ctx.fillStyle = C.soft; ctx.font = `${fs * 0.85}px ${Anima.ROUND}`; ctx.textAlign = "center";
    for (const a of [0, 30, 50, 80]) ctx.fillText(a + "岁", X(a), py + ph + fs * 0.9);
    ctx.save(); ctx.translate(px - fs * 0.9, py + ph / 2); ctx.rotate(-Math.PI / 2); ctx.fillText("骨量", 0, 0); ctx.restore();
    ctx.textAlign = "left";
    // 绝经
    ctx.strokeStyle = C.soft; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(X(50), py); ctx.lineTo(X(50), py + ph); ctx.stroke(); ctx.setLineDash([]);
    const women = [[0, 0.12], [10, 0.4], [20, 0.85], [30, 1], [40, 0.97], [50, 0.9], [55, 0.78], [60, 0.7], [70, 0.6], [80, 0.52]];
    const men = [[0, 0.12], [10, 0.4], [20, 0.88], [30, 1.0], [40, 0.99], [50, 0.95], [60, 0.88], [70, 0.8], [80, 0.72]];
    for (const [pts, col] of [[men, C.men], [women, C.women]]) {
      ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.lineJoin = "round";
      ctx.beginPath(); pts.forEach(([a, v], i) => ctx[i ? "lineTo" : "moveTo"](X(a), Y(v * 0.9))); ctx.stroke();
    }
    ctx.font = `${fs * 0.9}px ${Anima.ROUND}`;
    ctx.fillStyle = C.men; ctx.fillText("男", X(80) - fs * 1.1, Y(0.72 * 0.9) - fs * 0.8);
    ctx.fillStyle = C.women; ctx.fillText("女", X(80) - fs * 1.1, Y(0.52 * 0.9) + fs * 0.9);
    // 沿着女性曲线移动的小点
    const age = (time * 8) % 80;
    let v = 0;
    for (let i = 1; i < women.length; i++) if (age <= women[i][0]) { const [a0, v0] = women[i - 1], [a1, v1] = women[i]; v = v0 + (v1 - v0) * (age - a0) / (a1 - a0); break; }
    ctx.beginPath(); ctx.arc(X(age), Y(v * 0.9), fs * 0.45, 0, 6.3); ctx.fillStyle = C.paper; ctx.fill(); outline(2); ctx.stroke();
    ctx.restore();
    return { peak: { x: X(30), y: Y(0.9) }, meno: { x: X(55), y: Y(0.78 * 0.9) }, card: { x, y, cw, ch } };
  }

  // 脊椎小卡片：一节椎体被压扁
  function drawSpine() {
    const cw = H * 0.36, ch = H * 0.46, x = W - cw - 14, y = H - ch - 14;
    ctx.save(); ctx.globalAlpha *= S.spine;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, cw, ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(x, y, cw, ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const fs = cw / 9, vx = x + cw * 0.22, vw = cw * 0.56, vh = ch * 0.13, gap = ch * 0.035;
    let yy = y + fs * 0.9;
    let squashed = null;
    for (let i = 0; i < 5; i++) {
      const hurt = i === 2;
      const h = hurt ? vh * 0.55 : vh;
      if (hurt) {
        // 楔形：前面（左侧）被压得更扁
        ctx.beginPath(); ctx.moveTo(vx, yy + vh * 0.45); ctx.lineTo(vx + vw, yy); ctx.lineTo(vx + vw, yy + vh); ctx.lineTo(vx, yy + vh); ctx.closePath();
        ctx.fillStyle = "#ffe3d6"; ctx.fill(); outline(2.2); ctx.stroke();
        outline(2); ctx.beginPath(); ctx.moveTo(vx + vw * 0.2, yy + vh * 0.55); ctx.lineTo(vx + vw * 0.35, yy + vh * 0.75); ctx.lineTo(vx + vw * 0.5, yy + vh * 0.6); ctx.lineTo(vx + vw * 0.65, yy + vh * 0.8); ctx.stroke();
        face(vx + vw * 0.5, yy + vh * 0.35, vh * 0.35, -0.8, false);
        squashed = { x: vx + vw * 0.15, y: yy + vh * 0.7 };
      } else {
        rrect(vx, yy, vw, h, 8); ctx.fillStyle = C.bone; ctx.fill(); outline(2.2); ctx.stroke();
        face(vx + vw * 0.5, yy + h * 0.5, h * 0.4, 0.4, false);
      }
      yy += vh + gap;
      if (i < 4) { rrect(vx + vw * 0.08, yy - gap, vw * 0.84, gap, gap / 2); ctx.fillStyle = C.disc; ctx.fill(); }
    }
    ctx.fillStyle = C.ink; ctx.font = `${fs * 0.95}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("脊椎压缩骨折", x + cw / 2, y + ch - fs * 0.8);
    ctx.textAlign = "left";
    ctx.restore();
    return { squashed, card: { x, y, cw, ch } };
  }

  function hud() {
    const t = S.t;
    pill(14, 12, "骨密度 T 值", `${t > 0.05 ? "+" : ""}${t.toFixed(1)}`, t >= -1 ? C.mint : t > -2.5 ? "#e7a500" : "#f25f6b", false);
    const [label, value, st] = CH[cur].pill;
    pill(W - 14, 12, label, value, st === "ok" ? C.mint : st === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const r = scene(), g = r.g;
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const midY = (g.inTop + g.inBot) / 2, low = g.inBot - H * 0.04, high = g.inTop + H * 0.04;
    const inner = r.edges.filter((e) => e.inner && !e.broken && mid(e).x > W * 0.25 && mid(e).x < W * 0.5);
    const e0 = inner[0];
    if (e0) {
      const m = mid(e0);
      callout("trab", on("trab"), m.x, m.y, m.x + W * 0.2, midY, "骨小梁：结实的网架");
      callout("thin", on("thin"), m.x, m.y, m.x - W * 0.06, low, "骨小梁变细、变薄");
    }
    const c0 = r.clasts[0];
    callout("clast", on("clast") && !!c0, c0 ? c0.x : 0, c0 ? c0.y : 0, c0 ? c0.x + W * 0.08 : 0, high, "破骨细胞：拆掉旧骨");
    const b0 = r.blastGroups[0];
    callout("blast", on("blast") && !!b0, b0 ? b0.cells[1].x : 0, b0 ? b0.cells[1].y : 0, b0 ? b0.cells[1].x + W * 0.06 : 0, low, "成骨细胞：砌上新骨");
    callout("build", on("build") && !!b0, b0 ? b0.cells[1].x : 0, b0 ? b0.cells[1].y : 0, b0 ? b0.cells[1].x + W * 0.06 : 0, low, "成骨细胞加油砌骨头");
    const sl = r.clasts[1] || c0;
    callout("sleep", on("sleep") && !!sl, sl ? sl.x : 0, sl ? sl.y : 0, sl ? sl.x - W * 0.08 : 0, high, "药物让破骨细胞歇一歇");
    callout("calcium", on("calcium") && !!r.calciumDot, r.calciumDot ? r.calciumDot.x : 0, r.calciumDot ? r.calciumDot.y : 0, r.calciumDot ? r.calciumDot.x + W * 0.12 : 0, midY, "钙、维生素 D 和蛋白质");
    if (r.bank) {
      callout("peak", on("peak"), r.bank.peak.x, r.bank.peak.y, r.bank.card.x + r.bank.card.cw * 0.3, r.bank.card.y - 8, "30 岁左右存到最多");
      callout("meno", on("meno"), r.bank.meno.x, r.bank.meno.y, r.bank.card.x - W * 0.12, r.bank.card.y + r.bank.card.ch * 0.75, "女性绝经后掉得快");
    } else { callout("peak", false, 0, 0, 0, 0, ""); callout("meno", false, 0, 0, 0, 0, ""); }
    const br = r.edges.find((e) => e.broken && e.inner && mid(e).x > W * 0.2 && mid(e).x < W * 0.55);
    if (br) { const m = mid(br); callout("hole", on("hole"), m.x, m.y, m.x + W * 0.04, high, "骨小梁断开，孔洞变大"); }
    else callout("hole", false, 0, 0, 0, 0, "");
    callout("fat", on("fat"), W * 0.7, midY, W * 0.72, low, "骨髓里的脂肪变多了");
    const ck = r.cracked[0];
    callout("crack", on("crack") && !!ck, ck ? ck.x : 0, ck ? ck.y : 0, ck ? ck.x - W * 0.04 : 0, high, "轻轻一摔就断了");
    if (r.spine) callout("spine", on("spine"), r.spine.squashed.x, r.spine.squashed.y, r.spine.card.x - W * 0.12, r.spine.card.y + r.spine.card.ch * 0.5, "椎体被压扁：变矮、驼背");
    else callout("spine", false, 0, 0, 0, 0, "");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#6aa8e8",
    titleCard: { lines: ["骨头也会", "被“掏空”？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
