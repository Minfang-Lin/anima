// 降压药是怎么起作用的：教科书示意图画风（机制类集），通用画法见 shared/textbook.js。
Anima.register("bp-drugs", {
    "title": "降压药是怎么起作用的",
    "tag": "血压小剧场",
    "headline": "降压药拧的是哪个【旋钮】？",
    "lede": "血压高低由几个“旋钮”一起决定：心脏泵多少血、血管里有多少液体、小动脉收得多紧，还有一套激素系统在幕后调控。常用的五类降压药，各自拧的是哪一个？看看它们是怎么起作用的，又该怎么吃。",
    "summary": "利尿剂、钙通道阻滞剂、普利类、沙坦类和β受体阻滞剂分别作用在哪里，常见的注意事项，以及为什么不能自己停药。",
    "footer": "降压方案请遵医嘱，不要自行停药或换药；请到心内科或高血压门诊定期随访。",
    "canvasLabel": "教科书式示意图：心脏、小动脉、肾脏和 RAAS 链条上的五类降压药",
    "disease": "高血压",
    "organs": ["vessels", "heart", "kidney"],
    "categories": ["cardio"],
    "color": "#d9603b",
    "look": "textbook"
  }, () => {
  const CH = [
    { title: "血压的几个“旋钮”",
      pill: ["常用降压药", "5 大类", "ok"],
      text: "血压高低，主要看几个“旋钮”：心脏每分钟泵出多少血，和心率、收缩力有关；血管里装着多少液体，要看肾脏留下多少钠和水；全身的小动脉收得多紧，就是血管阻力。幕后还有一套激素系统在调控。常用的几类降压药，各拧一个旋钮。",
      fact: "血压大致取决于：心脏泵出的血量 × 小动脉的阻力",
      labels: ["knob", "raas"] },
    { title: "利尿剂：多排一点钠和水",
      pill: ["要复查", "血钾等", "warn"],
      text: "利尿剂里常用的是噻嗪类。肾小管本来会把原尿里的钠重新收回血里，水也跟着钠回去。噻嗪类挡住肾小管上回收钠的转运体，让身体多排一些钠和水，血管里的液体少了，血压就降下来。它可能影响血钾、血钠等电解质，要按医生要求复查。",
      fact: "噻嗪类作用在肾脏的远曲小管；服药期间按医嘱查电解质",
      labels: ["thz", "out", "k"] },
    { title: "地平类：堵住钙通道",
      pill: ["可能", "脚踝水肿", "warn"],
      text: "小动脉壁里有一层平滑肌，它要收缩，得靠钙离子穿过细胞膜上的钙通道进到细胞里。钙通道阻滞剂，常用的是“地平类”，把钙通道堵住，钙进不去，平滑肌放松，小动脉舒张，血压就降了。部分人会有脚踝水肿、面部发红、头痛。",
      fact: "地平类常见的不适：脚踝水肿、面部发红、头痛",
      labels: ["ccb", "relax", "ring"] },
    { title: "RAAS 链条和普利类",
      pill: ["部分人", "干咳", "warn"],
      text: "这套激素系统叫 RAAS。肾脏放出肾素，把血管紧张素原剪成血管紧张素Ⅰ，ACE 酶再把它剪成血管紧张素Ⅱ。血管紧张素Ⅱ让小动脉收紧，还让肾上腺分泌醛固酮，使肾脏留钠留水。普利类药物抑制 ACE 酶，血管紧张素Ⅱ就少了。部分人吃了会干咳。",
      fact: "普利类抑制 ACE 酶；干咳明显时告诉医生，可以换药",
      labels: ["acei", "ang2"] },
    { title: "沙坦类：挡住 AT1 受体",
      pill: ["孕妇", "禁用", "bad"],
      text: "沙坦类换了个办法：不管前面怎么剪，直接挡住血管紧张素Ⅱ要结合的 AT1 受体，它插不上，血管就收不紧。普利类和沙坦类对心脏、肾脏还有保护作用，合并糖尿病、蛋白尿的人常会用到。但孕妇禁用；服药期间要查血钾和肾功能。",
      fact: "普利类、沙坦类：孕妇禁用，服药期间查血钾和肾功能",
      labels: ["arb", "queue"] },
    { title: "洛尔类：让心跳慢下来",
      pill: ["不能", "突然停药", "bad"],
      text: "心脏上有β1受体，交感神经放出的去甲肾上腺素插上去，心跳就加快、收缩更有劲。β受体阻滞剂也就是“洛尔类”，把β1受体挡住，心跳慢下来，收缩力减弱，肾脏放出的肾素也少了。它适合心率偏快、有冠心病或心衰的人，不能突然停药。",
      fact: "洛尔类要停药或减量，须在医生指导下慢慢来",
      labels: ["bb", "slow"] },
    { title: "自己停药会怎样",
      pill: ["停药后", "忽高忽低", "bad"],
      text: "有人觉得血压正常了、身上也没什么感觉，就自己把药停了。可药一停，旋钮又拧了回去，血压常常反弹，甚至忽高忽低。血管壁被一次次猛冲，心、脑、肾受伤的风险跟着上升，中风、心梗、肾功能下降就可能找上门。",
      fact: "血压正常是药在起作用，不是病好了",
      labels: ["stop", "swing"] },
    { title: "降压药这样吃",
      pill: ["多数人目标", "<130/80", "ok"],
      text: "多数高血压需要长期吃药。医生常用小剂量两种药联合，或者一片里含两种药的单片复方。每天固定时间吃，在家定期量血压并记下来，复诊时给医生看。感觉好了也别自己停药、换药。多数人的目标是低于 130/80 毫米汞柱，老年人等要个体化，听医生的。",
      fact: "多数人目标 <130/80 mmHg；老年人等目标个体化，听医生的",
      labels: ["combo", "home"] },
  ];
  const DUR = 12; // 每幕秒数

  const { clamp, mix, rnd, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0, prevCur = -1, prevLt = 0;
  const TB = Anima.textbook({ W: () => W, H: () => H, time: () => time });
  const { ctx, TAU, rgba, glossy, txt, font, smoothPath, sample, along, ease, LF, SF, IR, topY, nar, mol, receptor, minusSign, noSign, bolt, arrow, flow, bilayer } = TB;
  // 标注：淡出时沿用最后一次的位置
  const lastTag = {};
  function tag(key, on, tx, ty, bx, by, text, col) {
    if (on) lastTag[key] = [tx, ty, bx, by];
    const q = lastTag[key];
    if (!q) return;
    TB.tag(key, on, q[0], q[1], q[2], q[3], text, col);
  }

  // =================== 本集新登记的图标（形状 + 颜色都不和词典里已有的撞） ===================
  const REG = Anima.textbook, SHP = REG.SHAPES;
  const shape = (name, def) => { if (!SHP[name]) REG.registerShape(name, def); };
  const circNotch = (c, r) => { const s = r * 0.98; c.lineTo(-s, 0); c.arc(0, 0, s, Math.PI, 0, true); };
  // 钙离子：圆角十字（“+”号）
  const PA = 0.34, PB = 0.95;
  shape("bp_plus", {
    path(c, r) { [[-PA, -PB], [PA, -PB], [PA, -PA], [PB, -PA], [PB, PA], [PA, PA], [PA, PB], [-PA, PB], [-PA, PA], [-PB, PA], [-PB, -PA], [-PA, -PA]].forEach((p, k) => { if (k) c.lineTo(p[0] * r, p[1] * r); else c.moveTo(p[0] * r, p[1] * r); }); c.closePath(); },
    notch(c, r) { const k = 1.1; [[-PB, 0], [-PB, PA], [-PA, PA], [-PA, PB], [PA, PB], [PA, PA], [PB, PA], [PB, 0]].forEach((p) => c.lineTo(p[0] * r * k, p[1] * r * k)); },
  });
  // 钠离子：中间镂空一个“+”的圆球
  shape("bp_naBall", {
    path(c, r) {
      c.moveTo(r * 0.85, 0); c.arc(0, 0, r * 0.85, 0, TAU); c.closePath();
      const a = 0.13, b = 0.46, P = [[-a, -b], [a, -b], [a, -a], [b, -a], [b, a], [a, a], [a, b], [-a, b], [-a, a], [-b, a], [-b, -a], [-a, -a]].reverse();
      P.forEach((p, k) => { if (k) c.lineTo(p[0] * r, p[1] * r); else c.moveTo(p[0] * r, p[1] * r); }); c.closePath();
    },
    notch: circNotch,
  });
  // 肽链：几颗珠子连成一串（血管紧张素原 / Ⅰ / Ⅱ）
  const beadXs = (n) => { const o = []; for (let k = 0; k < n; k++) o.push((k - (n - 1) / 2) * 0.62); return o; };
  const beads = (n) => ({
    path(c, r) { beadXs(n).forEach((x, k) => { const y = (k % 2 ? -0.08 : 0.08) * r; c.moveTo(x * r + r * 0.42, y); c.arc(x * r, y, r * 0.42, 0, TAU); }); },
    notch(c, r) { const k = 1.1, xs = beadXs(n); c.lineTo((xs[0] - 0.46) * r * k, 0); xs.forEach((x) => c.arc(x * r * k, 0, 0.46 * r * k, Math.PI, 0, true)); },
  });
  shape("bp_beads3", beads(3));
  shape("bp_beads4", beads(4));
  shape("bp_beads6", beads(6));
  // 酶：张着口的圆（口朝右）
  shape("bp_pac", { path(c, r) { c.moveTo(0, 0); c.arc(0, 0, r, 0.62, TAU - 0.62); c.closePath(); }, notch: circNotch });
  // 去甲肾上腺素：六元环 + 侧链短棒
  const HX = []; for (let k = 0; k < 6; k++) { const a = k * TAU / 6; HX.push([Math.cos(a) * 0.72 - 0.2, Math.sin(a) * 0.72]); }
  shape("bp_cat", {
    path(c, r) { HX.forEach((p, k) => { if (k) c.lineTo(p[0] * r, p[1] * r); else c.moveTo(p[0] * r, p[1] * r); }); c.closePath(); c.rect(r * 0.45, -r * 0.15, r * 0.62, r * 0.3); },
    notch(c, r) { const k = 1.1; [[-0.92, 0], [-0.56, 0.62], [0.16, 0.62], [0.52, 0]].forEach((p) => c.lineTo(p[0] * r * k, p[1] * r * k)); },
  });
  // 水：小水滴
  shape("bp_wdrop", {
    path(c, r) { c.moveTo(0, -r); c.bezierCurveTo(r * 0.3, -r * 0.5, r * 0.72, -r * 0.05, r * 0.72, r * 0.3); c.arc(0, r * 0.3, r * 0.72, 0, Math.PI); c.bezierCurveTo(-r * 0.72, -r * 0.05, -r * 0.3, -r * 0.5, 0, -r); c.closePath(); },
    notch: circNotch,
  });
  const reg = (k, d) => { if (!REG.MOLECULES[k]) REG.register(k, d); };
  reg("bp_ca", { shape: "bp_plus", color: "#9cc23a", label: "钙离子" });
  reg("bp_cach", { shape: "channel", color: ["#f0f7df", "#b9d77a", "#5f7f22"], label: "钙通道" });
  reg("bp_na", { shape: "bp_naBall", color: "#7d8fb5", label: "钠离子" });
  reg("bp_ncc", { shape: "glutPore", color: ["#eef1f8", "#aab6d3", "#4f5f86"], label: "钠转运体" });
  reg("bp_h2o", { shape: "bp_wdrop", color: ["#e2f4fd", "#5bb8ea", "#237fb0"], label: "水" });
  reg("bp_agt", { shape: "bp_beads6", color: "#b3a293", label: "血管紧张素原" });
  reg("bp_ang1", { shape: "bp_beads4", color: "#e0ad84", label: "血管紧张素Ⅰ" });
  reg("bp_ang2", { shape: "bp_beads3", color: "#b8552d", label: "血管紧张素Ⅱ", receptor: { color: ["#fbefe8", "#e8b49d", "#9a4f31"], label: "AT1受体" } });
  reg("bp_renin", { shape: "bp_pac", color: "#b98bd6", label: "肾素" });
  reg("bp_ace", { shape: "bp_pac", color: "#2e9aa6", label: "ACE 酶" });
  reg("bp_aldo", { shape: "lp_sterol", color: "#e083a8", label: "醛固酮" });
  reg("bp_ne", { shape: "bp_cat", color: "#e8b43a", label: "去甲肾上腺素", receptor: { color: ["#fff7e0", "#f0d188", "#a37a1a"], label: "β1受体" } });
  // 五类药：胶囊，每类一个固定颜色，全集一致
  reg("bp_thz", { shape: "capsule", color: "#2b8ad8", label: "利尿剂（噻嗪类）" });
  reg("bp_ccb", { shape: "capsule", color: "#17a07a", label: "钙通道阻滞剂（地平类）" });
  reg("bp_acei", { shape: "capsule", color: "#e38b17", label: "普利类（ACEI）" });
  reg("bp_arb", { shape: "capsule", color: "#c43f8e", label: "沙坦类（ARB）" });
  reg("bp_bb", { shape: "capsule", color: "#6f4cc9", label: "洛尔类（β受体阻滞剂）" });
  // 阻断时的“药物分子”：和被阻断的天然分子同形 + 堵头，颜色用该类药的颜色
  reg("bp_ccbM", { shape: "bp_plus", color: "#17a07a", label: "地平类", plug: true, blocks: "bp_ca" });
  reg("bp_arbM", { shape: "bp_beads3", color: "#c43f8e", label: "沙坦类", plug: true, blocks: "bp_ang2" });
  reg("bp_bbM", { shape: "bp_cat", color: "#6f4cc9", label: "洛尔类", plug: true, blocks: "bp_ne" });
  const DC = (k) => TB.molecule(k).color; // [亮, 中, 深]

  // ---------- 本集颜色 ----------
  const K = Object.assign({}, TB.K, {
    myo: ["#fbe0dc", "#e8a3a0", "#b25c5f"], edge: "#a9585c",
    art: ["#f8cfcf", "#d9797d", "#9f4449"], vein: ["#e3e8fa", "#9aa9dc", "#56659f"],
    kid: ["#f6c2b4", "#d77c69", "#9c4a3c"], adr: ["#fbe6b0", "#e9bf5e", "#a07a1c"],
    smc: ["#fbe3dc", "#eab3a6", "#b86f60"], adv: ["#fbf2ef", "#efd8d0", "#c3a197"], media: "#f1c6bb",
    lumen: "#fff7f5", rbc: ["#f7b1ac", "#dc5f5a", "#9e3430"],
    urine: "#fff8df", cell: "#f7f0ea", blood: "#fbe4e2",
    ok: "#2fa465", warn: "#d99400", bad: "#e0443e", calm: "#3aa98a",
  });
  const S = { calm: 0 };
  let phase = 0, hrNow = 76, bpS = 150, bpD = 95;

  // 药物起效：每幕开始 2 秒后，药慢慢“上岗”
  const dOnOf = (T) => ease(clamp((T - 3.2) / 2, 0, 1));
  // 第 7 幕：自己停药后的收缩压
  const STOP = 0.36;
  function sysAt(mode, t) {
    const n = 2.2 * Math.sin(t * 47) + 1.4 * Math.sin(t * 113 + 1);
    if (mode === "steady" || t < STOP) return 125 + n;
    const u = t - STOP, rise = 1 - Math.exp(-u * 12);
    return 125 + n + 28 * rise + rise * (13 * Math.sin(u * 36) + 7 * Math.sin(u * 89 + 2));
  }
  const revealOf = (T) => 0.06 + 0.94 * ease(clamp(T / 6.5, 0, 1));

  function update(dt) {
    if (cur !== lastCur) { prevCur = lastCur; prevLt = lt; lastCur = cur; lt = 0; }
    lt += dt; prevLt += dt;
    const d = dOnOf(lt);
    const hrT = cur === 5 ? 86 - 22 * d : cur === 6 ? 84 : 72;
    hrNow += (hrT - hrNow) * (1 - Math.exp(-dt * 2));
    phase += dt * hrNow / 60;
    let ts = 150, td = 95;
    if (cur >= 1 && cur <= 5) { ts = 150 - 12 * d; td = 95 - 7 * d; }
    else if (cur === 6) { ts = sysAt("stop", revealOf(lt)); td = 80 + (ts - 125) * 0.5; }
    else if (cur === 7) { ts = 126; td = 78; }
    const k = 1 - Math.exp(-dt * 3);
    bpS += (ts - bpS) * k; bpD += (td - bpD) * k;
  }
  const beatPulse = () => { const p = ((phase % 1) + 1) % 1; return p < 0.28 ? Math.sin(p / 0.28 * Math.PI) : 0; };

  // =================== 通用小画件 ===================
  function tubeL(pts, w, c) { // 在当前坐标系里画一段血管
    const sp = sample(pts, 24);
    const line = () => { ctx.beginPath(); sp.forEach((p, i) => { if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }); };
    ctx.lineCap = "butt"; ctx.lineJoin = "round";
    line(); ctx.strokeStyle = c[2]; ctx.lineWidth = w + Math.max(1.6, w * 0.12); ctx.stroke();
    ctx.strokeStyle = c[1]; ctx.lineWidth = w; ctx.stroke();
    ctx.strokeStyle = rgba(c[0], 0.85); ctx.lineWidth = w * 0.3; ctx.stroke();
  }
  // 心脏（正面观，简化），返回心脏范围
  function heartIcon(cx, cy, s, beat) {
    const k = 1 + 0.05 * beatPulse() * (beat == null ? 1 : beat);
    ctx.save(); ctx.translate(cx, cy); ctx.scale(k, k);
    tubeL([[-0.36 * s, -1.05 * s], [-0.36 * s, -0.42 * s]], s * 0.2, K.vein);
    tubeL([[0.34 * s, -0.5 * s], [0.5 * s, -0.8 * s], [0.9 * s, -0.84 * s]], s * 0.17, K.vein);
    tubeL([[0.02 * s, -0.42 * s], [0.0, -0.95 * s], [0.25 * s, -1.18 * s], [0.58 * s, -1.08 * s], [0.66 * s, -0.72 * s]], s * 0.2, K.art);
    ctx.beginPath();
    ctx.moveTo(-0.05 * s, -0.5 * s);
    ctx.bezierCurveTo(0.35 * s, -0.78 * s, 0.95 * s, -0.62 * s, 0.9 * s, -0.08 * s);
    ctx.bezierCurveTo(0.85 * s, 0.4 * s, 0.4 * s, 0.78 * s, 0.12 * s, 0.98 * s);
    ctx.bezierCurveTo(-0.22 * s, 0.72 * s, -0.86 * s, 0.35 * s, -0.86 * s, -0.12 * s);
    ctx.bezierCurveTo(-0.86 * s, -0.62 * s, -0.4 * s, -0.72 * s, -0.05 * s, -0.5 * s);
    ctx.closePath();
    ctx.fillStyle = glossy(-0.2 * s, -0.25 * s, s * 1.1, K.myo[0], K.myo[1]); ctx.fill();
    ctx.strokeStyle = K.edge; ctx.lineWidth = Math.max(1.2, s * 0.03); ctx.stroke();
    // 前室间沟（冠状动脉）
    ctx.strokeStyle = rgba(K.art[2], 0.55); ctx.lineWidth = Math.max(1.2, s * 0.045); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(0.05 * s, -0.42 * s); ctx.bezierCurveTo(0.2 * s, -0.05 * s, 0.22 * s, 0.4 * s, 0.14 * s, 0.86 * s); ctx.stroke();
    ctx.restore();
    return { x: cx, y: cy, s: s * k };
  }
  // 肾脏（冠状切面，简化）；adrenal 为 1 时画上方的肾上腺
  const KID = [[0.12, -0.95], [0.55, -0.85], [0.8, -0.45], [0.84, 0.12], [0.62, 0.7], [0.22, 0.96], [-0.18, 0.86], [-0.36, 0.52], [-0.2, 0.2], [-0.2, -0.2], [-0.36, -0.52], [-0.24, -0.84]];
  function kidneyIcon(cx, cy, s, adrenal, glow) {
    const P = (u, v) => [cx + u * s * 0.8, cy + v * s];
    if (glow > 0.02) {
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, s * 1.4);
      g.addColorStop(0, rgba(glow > 0 ? K.fire : K.fire, 0.3 * glow)); g.addColorStop(1, rgba(K.fire, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, s * 1.4, 0, TAU); ctx.fill();
    }
    // 输尿管、肾动脉、肾静脉
    ctx.lineCap = "round";
    const h = P(-0.22, 0.1), u1 = P(-0.4, 1.25);
    ctx.strokeStyle = "#d8c27a"; ctx.lineWidth = Math.max(1.5, s * 0.1);
    ctx.beginPath(); ctx.moveTo(h[0], h[1]); ctx.quadraticCurveTo(P(-0.45, 0.5)[0], P(-0.45, 0.5)[1], u1[0], u1[1]); ctx.stroke();
    ctx.strokeStyle = K.art[1]; ctx.lineWidth = Math.max(1.5, s * 0.11);
    ctx.beginPath(); ctx.moveTo(P(-0.2, -0.12)[0], P(-0.2, -0.12)[1]); ctx.lineTo(P(-0.75, -0.2)[0], P(-0.75, -0.2)[1]); ctx.stroke();
    ctx.strokeStyle = K.vein[1];
    ctx.beginPath(); ctx.moveTo(P(-0.2, 0.02)[0], P(-0.2, 0.02)[1]); ctx.lineTo(P(-0.75, 0.04)[0], P(-0.75, 0.04)[1]); ctx.stroke();
    if (adrenal) {
      ctx.beginPath(); const a = P(-0.05, -0.86), b = P(0.62, -0.8), c = P(0.28, -1.25);
      ctx.moveTo(a[0], a[1]); ctx.quadraticCurveTo(P(0.05, -1.1)[0], P(0.05, -1.1)[1], c[0], c[1]); ctx.quadraticCurveTo(P(0.55, -1.05)[0], P(0.55, -1.05)[1], b[0], b[1]); ctx.closePath();
      ctx.fillStyle = glossy(c[0], c[1] + s * 0.2, s * 0.4, K.adr[0], K.adr[1]); ctx.fill();
      ctx.strokeStyle = K.adr[2]; ctx.lineWidth = Math.max(1, s * 0.03); ctx.stroke();
    }
    smoothPath(KID.map((p) => P(p[0], p[1])), true);
    ctx.fillStyle = glossy(cx + s * 0.1, cy - s * 0.3, s * 1.1, K.kid[0], K.kid[1]); ctx.fill();
    ctx.strokeStyle = K.kid[2]; ctx.lineWidth = Math.max(1.2, s * 0.03); ctx.stroke();
    // 肾锥体
    const c0 = [0.18, 0];
    [-1.05, -0.38, 0.32, 1.0].forEach((a) => {
      const dx = Math.cos(a), dy = Math.sin(a) * 1.25;
      const tip = P(c0[0] + dx * 0.12, c0[1] + dy * 0.12), bx = c0[0] + dx * 0.5, by = c0[1] + dy * 0.5;
      const px = -dy * 0.15, py = dx * 0.15;
      ctx.beginPath(); ctx.moveTo(tip[0], tip[1]); ctx.lineTo(P(bx + px, by + py)[0], P(bx + px, by + py)[1]); ctx.lineTo(P(bx - px, by - py)[0], P(bx - px, by - py)[1]); ctx.closePath();
      ctx.fillStyle = rgba(K.kid[2], 0.3); ctx.fill();
    });
    // 肾盂
    ctx.beginPath(); ctx.ellipse(P(-0.02, 0.02)[0], P(-0.02, 0.02)[1], s * 0.16, s * 0.2, 0, 0, TAU);
    ctx.fillStyle = glossy(P(-0.02, 0)[0], P(-0.02, 0)[1], s * 0.2, "#fff6d8", "#ecd690"); ctx.fill(); ctx.strokeStyle = "#b99a3c"; ctx.lineWidth = 1; ctx.stroke();
    return { x: cx, y: cy, s, spot: P(0.55, -0.5), adrenal: P(0.28, -1.05), top: cy - s * (adrenal ? 1.25 : 0.95) };
  }
  // 小动脉横切面：relax 0 收紧（管腔小、管壁厚）～ 1 舒张
  function ringIcon(cx, cy, R, relax) {
    const rl = R * (0.26 + 0.3 * relax), re = rl + Math.max(2, R * 0.07), rm = R * 0.84;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fillStyle = glossy(cx, cy, R, K.adv[0], K.adv[1]); ctx.fill();
    ctx.strokeStyle = K.adv[2]; ctx.lineWidth = Math.max(1, R * 0.025); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, rm, 0, TAU); ctx.fillStyle = K.media; ctx.fill();
    const mr = (rm + re) / 2, th = rm - re, N = Math.max(9, Math.round(TAU * mr / Math.max(8, th * 1.25)));
    for (let k = 0; k < N; k++) {
      const a = k / N * TAU + 0.2, x = cx + Math.cos(a) * mr, y = cy + Math.sin(a) * mr;
      ctx.save(); ctx.translate(x, y); ctx.rotate(a + Math.PI / 2);
      ctx.beginPath(); ctx.ellipse(0, 0, TAU * mr / N * 0.52, th * 0.3, 0, 0, TAU);
      ctx.fillStyle = glossy(0, 0, th * 0.4, K.smc[0], K.smc[1]); ctx.fill(); ctx.strokeStyle = rgba(K.smc[2], 0.6); ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(0, 0, TAU * mr / N * 0.14, th * 0.11, 0, 0, TAU); ctx.fillStyle = rgba(K.smc[2], 0.5); ctx.fill();
      ctx.restore();
    }
    ctx.beginPath(); ctx.arc(cx, cy, re, 0, TAU); ctx.fillStyle = "#f9dde2"; ctx.fill(); ctx.strokeStyle = "#d9a5ae"; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, rl, 0, TAU); ctx.fillStyle = K.lumen; ctx.fill();
    // 红细胞
    const nr = Math.max(1, Math.round(1 + relax * 3));
    for (let k = 0; k < nr; k++) {
      const a = time * 0.6 + k * TAU / nr, d = rl * 0.45;
      rbc(cx + Math.cos(a) * d * (nr > 1 ? 1 : 0), cy + Math.sin(a) * d * (nr > 1 ? 1 : 0), Math.min(rl * 0.42, R * 0.13), a);
    }
    return { x: cx, y: cy, R, rl, rm, smc: [cx + Math.cos(0.2 + TAU / N * 2) * mr, cy + Math.sin(0.2 + TAU / N * 2) * mr] };
  }
  function rbc(x, y, r, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0);
    ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.8, 0, 0, TAU); ctx.fillStyle = glossy(0, 0, r, K.rbc[0], K.rbc[1]); ctx.fill();
    ctx.strokeStyle = K.rbc[2]; ctx.lineWidth = Math.max(0.8, r * 0.1); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(0, 0, r * 0.42, r * 0.3, 0, 0, TAU); ctx.fillStyle = rgba(K.rbc[2], 0.25); ctx.fill();
    ctx.restore();
  }
  // 跨膜的孔道蛋白（钙通道 / 钠转运体）：两根柱子，中间是孔
  function pore(key, x, yMem, r, mt, glow, hourglass) {
    const c = DC(key), top = yMem - mt / 2 - r * 0.95, bot = yMem + mt / 2 + r * 0.7, g = r * 0.42, gp = hourglass ? r * 0.2 : g, ow = r * 1.3;
    if (glow > 0.02) {
      const gr = ctx.createRadialGradient(x, top, 0, x, top, r * 2.6);
      gr.addColorStop(0, rgba(c[1], 0.5 * glow)); gr.addColorStop(1, rgba(c[1], 0));
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(x, top, r * 2.6, 0, TAU); ctx.fill();
    }
    ctx.fillStyle = "#f3f9fd"; ctx.fillRect(x - g, top + 1, g * 2, bot - top - 2);
    [-1, 1].forEach((sd) => {
      ctx.beginPath();
      ctx.moveTo(x + sd * g, top); ctx.lineTo(x + sd * ow, top); ctx.lineTo(x + sd * ow, bot); ctx.lineTo(x + sd * g, bot);
      ctx.lineTo(x + sd * gp, yMem); ctx.closePath();
      ctx.fillStyle = glossy(x + sd * (g + ow) / 2 - r * 0.15, yMem - r * 0.3, r * 1.2, c[0], c[1]); ctx.fill();
      ctx.strokeStyle = c[2]; ctx.lineWidth = Math.max(1, r * 0.09); ctx.lineJoin = "round"; ctx.stroke();
      ctx.strokeStyle = rgba(c[2], 0.2); ctx.lineWidth = Math.max(1, r * 0.1);
      ctx.beginPath(); ctx.moveTo(x + sd * (g + ow) * 0.55, top + r * 0.3); ctx.lineTo(x + sd * (g + ow) * 0.55, bot - r * 0.3); ctx.stroke();
    });
    return { top, bot };
  }
  // 平滑肌细胞内部：肌丝（收缩时肌丝互相滑近），contract 0～1
  function muscle(r, contract) {
    const g = ctx.createLinearGradient(0, r.y, 0, r.y + r.h);
    g.addColorStop(0, mix("#eef1f7", "#fde3cc", contract)); g.addColorStop(1, mix("#f5f7fb", "#fff2e6", contract));
    ctx.fillStyle = g; ctx.fillRect(r.x, r.y, r.w, r.h);
    const rows = r.h > 110 ? 2 : 1, pulse = 0.5 + 0.5 * Math.sin(time * 2.4);
    const sq = 0.2 * contract * (0.7 + 0.3 * pulse);
    const act = mix("#b9c0cf", "#d98a74", contract), myo = mix("#9aa3b5", "#8a4f63", contract);
    for (let row = 0; row < rows; row++) {
      const y = r.y + r.h * (row + 0.5) / rows + (rows > 1 ? (row ? -1 : 1) * r.h * 0.06 : 0);
      const unit = Math.min(r.w / 4.5, Math.max(40, r.h / rows * 1.2)), L = unit * (1 - sq), hh = Math.min(r.h / rows * 0.16, unit * 0.12);
      const cnt = Math.ceil(r.w / L) + 2, x0 = r.x + r.w / 2 - L * cnt / 2 + (row ? L * 0.5 : 0);
      ctx.lineCap = "round";
      for (let k = 0; k < cnt; k++) {
        const xa = x0 + k * L, xb = xa + L;
        ctx.strokeStyle = act; ctx.lineWidth = Math.max(1, hh * 0.28);
        ctx.beginPath();
        for (const dy of [-hh, hh]) { ctx.moveTo(xa, y + dy); ctx.lineTo(xa + L * 0.4, y + dy); ctx.moveTo(xb, y + dy); ctx.lineTo(xb - L * 0.4, y + dy); }
        ctx.stroke();
        ctx.strokeStyle = myo; ctx.lineWidth = Math.max(2, hh * 0.75);
        const mw = unit * 0.26;
        ctx.beginPath(); ctx.moveTo(xa + L / 2 - mw, y); ctx.lineTo(xa + L / 2 + mw, y); ctx.stroke();
        ctx.lineWidth = Math.max(1, hh * 0.22);
        ctx.beginPath();
        for (let j = -2; j <= 2; j++) { if (!j) continue; const hx = xa + L / 2 + j * mw * 0.42; ctx.moveTo(hx, y - hh * 0.3); ctx.lineTo(hx + Math.sign(j) * hh * 0.4, y - hh * 0.85); ctx.moveTo(hx, y + hh * 0.3); ctx.lineTo(hx + Math.sign(j) * hh * 0.4, y + hh * 0.85); }
        ctx.stroke();
        ctx.beginPath(); ctx.ellipse(xa, y, hh * 0.35, hh * 1.35, 0, 0, TAU); ctx.fillStyle = mix("#a7afc0", "#a0605a", contract); ctx.fill();
      }
    }
  }
  // 胶囊（两种颜色：单片复方）
  function comboCap(x, y, r, rot, k1, k2) {
    const c1 = DC(k1), c2 = DC(k2);
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0);
    ctx.beginPath(); ctx.roundRect(-r * 1.05, -r * 0.55, r * 2.1, r * 1.1, r * 0.55);
    ctx.save(); ctx.clip();
    ctx.fillStyle = glossy(-r * 0.5, 0, r, c1[0], c1[1]); ctx.fillRect(-r * 1.1, -r, r * 1.1, r * 2);
    ctx.fillStyle = glossy(r * 0.5, 0, r, c2[0], c2[1]); ctx.fillRect(0, -r, r * 1.1, r * 2);
    ctx.restore();
    ctx.strokeStyle = "#4a4f63"; ctx.lineWidth = Math.max(1, r * 0.1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -r * 0.55); ctx.lineTo(0, r * 0.55); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.55)"; ctx.beginPath(); ctx.ellipse(-r * 0.4, -r * 0.25, r * 0.3, r * 0.11, 0, 0, TAU); ctx.fill();
    ctx.restore();
  }
  // 药名小字（胶囊旁边）
  function drugLabel(key, x, y, text, fs, align) {
    ctx.save(); font(fs, 700); ctx.lineJoin = "round"; ctx.textAlign = align || "center"; ctx.textBaseline = "middle";
    ctx.strokeStyle = "rgba(255,255,255,0.92)"; ctx.lineWidth = Math.max(3, fs * 0.3); ctx.strokeText(text, x, y);
    ctx.fillStyle = DC(key)[2]; ctx.fillText(text, x, y); ctx.restore();
  }
  function label(t, x, y, fs, col, align, w) {
    ctx.save(); font(fs, w || 500); ctx.lineJoin = "round"; ctx.textAlign = align || "center"; ctx.textBaseline = "middle";
    ctx.strokeStyle = "rgba(255,255,255,0.9)"; ctx.lineWidth = Math.max(3, fs * 0.28); ctx.strokeText(t, x, y);
    ctx.fillStyle = col || K.ink; ctx.fillText(t, x, y); ctx.restore();
  }
  function fitFs(texts, w, fs0) {
    let fs = fs0;
    for (let k = 0; k < 30; k++) { font(fs, 500); if (Math.max.apply(null, texts.map((t) => ctx.measureText(t).width)) <= w) break; fs *= 0.94; }
    return fs;
  }
  // 白底面板 + 标题
  function card(r, head) {
    TB.panel(r, 10);
    const fs = Math.min(SF() * 1.1, r.h * 0.1);
    if (head) txt(head, r.x + r.w / 2, r.y + fs * 1.1, fs, K.ink, "center", 700);
    return r.y + (head ? fs * 2.1 : 6);
  }
  function panelClip(r, fn) { ctx.save(); ctx.beginPath(); ctx.roundRect(r.x, r.y, r.w, r.h, 10); ctx.clip(); fn(); ctx.restore(); ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(r.x, r.y, r.w, r.h, 10); ctx.stroke(); }
  // 放大框：从原位置的小圈连两条虚线到放大面板
  function zoomLines(p, r, rad) {
    ctx.save(); ctx.strokeStyle = K.leader; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(p[0] + rad * 0.7, p[1] - rad * 0.7); ctx.lineTo(r.x, r.y + 4); ctx.moveTo(p[0] + rad * 0.7, p[1] + rad * 0.7); ctx.lineTo(r.x, r.y + r.h - 4); ctx.stroke();
    ctx.setLineDash([]); ctx.beginPath(); ctx.arc(p[0], p[1], rad, 0, TAU); ctx.fillStyle = "rgba(255,255,255,0.35)"; ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = 1.4; ctx.stroke();
    ctx.restore();
  }
  function alertIcon(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r * 0.62, 0, TAU);
    ctx.fillStyle = glossy(x, y, r * 0.62, "#ffe3a8", K.fire); ctx.fill(); ctx.strokeStyle = "#a86200"; ctx.lineWidth = Math.max(1, r * 0.06); ctx.stroke();
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
  function tubeIcon(x, y, r) { // 抽血化验的试管
    ctx.save(); ctx.translate(x, y); ctx.rotate(0.35);
    ctx.beginPath(); ctx.moveTo(-r * 0.22, -r * 0.8); ctx.lineTo(-r * 0.22, r * 0.55); ctx.arc(0, r * 0.55, r * 0.22, Math.PI, 0, true); ctx.lineTo(r * 0.22, -r * 0.8);
    ctx.fillStyle = "rgba(240,244,250,0.95)"; ctx.fill();
    ctx.save(); ctx.clip(); ctx.fillStyle = glossy(0, r * 0.4, r * 0.4, "#f7b1ac", "#c9504b"); ctx.fillRect(-r, r * 0.05, r * 2, r); ctx.restore();
    ctx.strokeStyle = K.soft; ctx.lineWidth = Math.max(1, r * 0.07); ctx.stroke();
    ctx.fillStyle = "#8aa0c8"; ctx.beginPath(); ctx.roundRect(-r * 0.3, -r * 0.98, r * 0.6, r * 0.24, r * 0.06); ctx.fill();
    ctx.restore();
  }

  // =================== 图例 ===================
  function legendItems(i) {
    const n = nar();
    return [
      n ? [["mol", "bp_thz", "噻嗪"], ["mol", "bp_ccb", "地平"], ["mol", "bp_acei", "普利"], ["mol", "bp_arb", "沙坦"], ["mol", "bp_bb", "洛尔"]]
        : [["mol", "bp_thz", "利尿剂（噻嗪类）"], ["mol", "bp_ccb", "钙通道阻滞剂（地平类）"], ["mol", "bp_acei", "普利类（ACEI）"], ["mol", "bp_arb", "沙坦类（ARB）"], ["mol", "bp_bb", "β受体阻滞剂（洛尔类）"]],
      [["mol", "bp_na", "钠离子"], ["mol", "bp_h2o", "水"], ["mol", "bp_ncc", "钠转运体"], ["mol", "bp_thz", "噻嗪类"], ["no", "", "被挡住"]],
      [["mol", "bp_ca", "钙离子"], ["mol", "bp_cach", "钙通道"], ["mol", "bp_ccbM", "地平类"], ["no", "", "被堵住"]],
      [["mol", "bp_ang2", "血管紧张素Ⅱ"], ["mol", "bp_renin", "肾素"], ["mol", "bp_ace", "ACE 酶"], ["mol", "bp_acei", "普利类"], ["minus", "", "抑制"]],
      [["mol", "bp_ang2", "血管紧张素Ⅱ"], ["rec", "bp_ang2", "AT1受体"], ["mol", "bp_arbM", "沙坦类"], ["no", "", "被占住"]],
      [["mol", "bp_ne", "去甲肾上腺素"], ["rec", "bp_ne", "β1受体"], ["mol", "bp_bbM", "洛尔类"], ["no", "", "被占住"]],
      [["line", "#2f3a55", "收缩压"], ["band", rgba(K.ok, 0.22), "目标范围"], ["dash", K.bad, "自己停药"]],
      [["mol", "bp_arb", "沙坦类"], ["mol", "bp_ccb", "地平类"], ["no", "", "不擅自停药"]],
    ][i];
  }
  function areaFor(i) {
    const Lg = TB.legendLayout(legendItems(i)), top = topY();
    const A = nar() ? { x: 8, y: top, w: W - 16, h: H - top - Lg.h - 8 } : { x: 16, y: top, w: W - 32, h: H - top - 12 };
    return { A, Lg };
  }
  const onOf = (i, live) => (k) => live && CH[i].labels.indexOf(k) >= 0;

  // =================== 第 1 幕：几个旋钮 ===================
  function scene0(A, Lg, live, T) {
    const n = nar(), on = onOf(0, live), fs = SF();
    const rowH = A.h * (n ? 0.56 : 0.62), cw = A.w / 3;
    const s = Math.min(cw * 0.26, rowH * (n ? 0.26 : 0.27));
    const cy = A.y + rowH * (n ? 0.45 : 0.46);
    const X = [A.x + cw * 0.5, A.x + cw * 1.5, A.x + cw * 2.5];
    const show = (k) => clamp((T - 0.3 - k * 0.5) / 0.5, 0, 1);
    const hi = heartIcon(X[0], cy, s * 0.95, 1);
    const ri = ringIcon(X[1], cy, s * 1.02, 0.35);
    const ki = kidneyIcon(X[2] + s * 0.1, cy - s * 0.05, s * 0.9, 0, 0);
    const heads = [["心脏泵血", "心率、收缩力"], ["小动脉松紧", "血管阻力"], ["血管里的液体", "肾脏留钠留水"]];
    const drugs = [["bp_bb", "洛尔类"], ["bp_ccb", "地平类"], ["bp_thz", "噻嗪类"]];
    const capR = Math.max(IR() * 0.85, s * 0.2);
    const caps = [];
    heads.forEach((h, k) => {
      const yT = cy + s * 1.28 + fs * 0.4;
      label(h[0], X[k], yT, fs * 1.08, K.ink, "center", 700);
      if (!n || H > 400) label(h[1], X[k], yT + fs * 1.35, fs * 0.95, K.soft, "center", 500);
      // 旋钮编号
      const bx = X[k] - s * 1.25, by = cy - s * 0.95, br = Math.max(7, fs * 0.72);
      ctx.beginPath(); ctx.arc(bx, by, br, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = 1.2; ctx.stroke();
      txt(String(k + 1), bx, by + 0.5, br * 1.25, K.ink, "center", 700);
      // 药物胶囊（依次出现）
      const a = show(k + 1), px = X[k] + s * 1.3, py = cy - s * 0.85;
      ctx.save(); ctx.globalAlpha *= a;
      mol(drugs[k][0], px, py - (1 - a) * s * 0.4 + Math.sin(time * 1.6 + k) * 1.5, capR, 1, -0.35);
      drugLabel(drugs[k][0], px, py + capR * 1.35, drugs[k][1], fs * 0.95);
      ctx.restore();
      caps.push([px, py]);
    });
    // 下方：RAAS 链条（示意）
    const right = n ? A.x + A.w : W - Lg.bw - 30;
    const by = A.y + rowH + (A.h - rowH) * (n ? 0.5 : 0.42), bx0 = A.x + (n ? 4 : 12), bw = right - bx0;
    const ir = Math.min(IR() * 0.95, (A.h - rowH) * 0.18, bw * 0.035);
    // 底板
    ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.strokeStyle = "#d6dde9"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.roundRect(bx0, by - ir * 2.7, bw, ir * 5.7 + fs * 1.3, 10); ctx.fill(); ctx.stroke();
    label("4", bx0 + ir * 1.1, by - ir * 1.7, fs * 0.9, K.ink, "center", 700);
    ctx.beginPath(); ctx.arc(bx0 + ir * 1.1, by - ir * 1.7, Math.max(7, fs * 0.72), 0, TAU); ctx.strokeStyle = K.ink; ctx.lineWidth = 1.2; ctx.stroke();
    txt(n ? "RAAS" : "激素系统 RAAS（肾素-血管紧张素-醛固酮）", bx0 + ir * 2.3, by - ir * 1.7, fs * 0.92, K.ink, "left", 700);
    const xs = [0.12, 0.3, 0.48, 0.66, 0.86].map((f) => bx0 + bw * f);
    const yc = by + ir * 0.7;
    const sp = arrow([[xs[0] + ir * 1.2, yc], [xs[4] - ir * 1.9, yc]], "#b9c3d6", Math.max(2, ir * 0.22), 1, "go");
    flow(sp, "#8f9ab3", 3, Math.max(1.8, ir * 0.18), 0.9, 0.25);
    mol("bp_renin", xs[0], yc, ir * 1.05, 1, Math.sin(time * 2) * 0.1);
    mol("bp_ang1", xs[1], yc, ir * 0.85, 1);
    mol("bp_ace", xs[2], yc, ir * 1.05, 1, Math.sin(time * 2 + 1) * 0.1);
    mol("bp_ang2", xs[3], yc, ir * 0.9, 1);
    // AT1 受体（小段细胞膜）
    const mt = Math.max(4, ir * 0.55);
    bilayer(xs[4] - ir * 2.3, xs[4] + ir * 2.3, yc + ir * 1.2, mt);
    receptor("bp_ang2", xs[4], yc + ir * 1.2, ir * 0.8, mt, 0.4 + 0.3 * Math.sin(time * 3), 0, ["bp_ang2", 1]);
    const nm = n ? ["肾素", "紧张素Ⅰ", "ACE", "紧张素Ⅱ", "AT1"] : ["肾素", "血管紧张素Ⅰ", "ACE 酶", "血管紧张素Ⅱ", "AT1 受体"];
    const ly = yc + ir * 2.25 + fs * 0.25;
    nm.forEach((t, k) => txt(t, xs[k], k === 4 ? ly + ir * 0.3 : ly, fs * 0.85, K.soft, "center", 500));
    // 普利类 → ACE，沙坦类 → AT1
    const a4 = show(4), a5 = show(5);
    ctx.save(); ctx.globalAlpha *= a4;
    mol("bp_acei", xs[2] + ir * 1.6, yc - ir * 1.5, capR * 0.9, 1, -0.35); minusSign(xs[2] + ir * 0.2, yc - ir * 1.7, ir * 0.42, 1);
    if (!n) drugLabel("bp_acei", xs[2] + ir * 1.6 + capR * 1.5, yc - ir * 1.5, "普利类", fs * 0.9, "left");
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= a5;
    mol("bp_arb", xs[4] - ir * 2.4, yc - ir * 1.5, capR * 0.9, 1, -0.35); noSign(xs[4] - ir * 0.1, yc - ir * 1.9, ir * 0.42, 1);
    if (!n) drugLabel("bp_arb", xs[4] - ir * 2.4 - capR * 1.5, yc - ir * 1.5, "沙坦类", fs * 0.9, "right");
    ctx.restore();
    if (n) tag("knob", on("knob"), caps[2][0], caps[2][1] + capR * 1.8, A.x + A.w * 0.62, A.y + rowH + LF() * 0.15, "各管一个旋钮", DC("bp_thz")[1]);
    else tag("knob", on("knob"), caps[0][0], caps[0][1] - capR * 0.5, X[1], A.y + LF() * 0.9, "每类药各管一个旋钮", DC("bp_bb")[1]);
    tag("raas", on("raas") && !n, xs[3], yc - ir * 0.6, n ? A.x + A.w * 0.5 : (xs[3] + right) / 2 + LF() * 2, by - ir * 4.4, "RAAS：幕后调控血压的激素链条", DC("bp_ang2")[1]);
  }

  // =================== 第 2 幕：利尿剂 ===================
  function tubule(Z, d, live) {
    const n = nar();
    const ir = Math.min(IR(), Z.h * 0.058, Z.w * 0.045), mt = Math.max(6, ir * 0.85);
    const yM = Z.y + Z.h * 0.4, yB = Z.y + Z.h * 0.8, yBot = Z.y + Z.h;
    const xs = [0.22, 0.5, 0.78].map((f) => Z.x + Z.w * f);
    const fs = SF();
    const out = { ir, yM, yB, xs };
    panelClip(Z, () => {
      ctx.fillStyle = K.urine; ctx.fillRect(Z.x, Z.y, Z.w, yM - Z.y);
      ctx.fillStyle = K.cell; ctx.fillRect(Z.x, yM, Z.w, yB - yM);
      ctx.fillStyle = K.blood; ctx.fillRect(Z.x, yB, Z.w, yBot - yB);
      // 细胞核
      [0.36, 0.64].forEach((f) => { ctx.beginPath(); ctx.ellipse(Z.x + Z.w * f, (yM + yB) / 2 + ir * 0.4, ir * 1.5, ir * 0.9, 0, 0, TAU); ctx.fillStyle = "rgba(160,140,170,0.25)"; ctx.fill(); });
      // 细胞之间的连接
      ctx.strokeStyle = "rgba(180,160,150,0.5)"; ctx.lineWidth = 1;
      [0.08, 0.92].forEach((f) => { ctx.beginPath(); ctx.moveTo(Z.x + Z.w * f, yM); ctx.lineTo(Z.x + Z.w * f, yB); ctx.stroke(); });
      bilayer(Z.x, Z.x + Z.w, yM, mt);
      bilayer(Z.x, Z.x + Z.w, yB, mt * 0.7);
      // 血里的红细胞
      for (let k = 0; k < 6; k++) { const x = Z.x + ((rnd(k + 5) * Z.w + time * Z.w * 0.05) % (Z.w + ir * 4)) - ir * 2; rbc(x, yB + (yBot - yB) * (0.55 + 0.15 * Math.sin(k)), ir * 0.8, k); }
      // 钾离子
      for (let k = 0; k < 3; k++) {
        const x = Z.x + Z.w * (0.14 + k * 0.33), y = yB + (yBot - yB) * 0.5, a = k === 2 ? 1 - 0.7 * d : 1;
        ctx.save(); ctx.globalAlpha *= a;
        ctx.beginPath(); ctx.arc(x, y, ir * 0.62, 0, TAU); ctx.fillStyle = glossy(x, y, ir * 0.62, "#e6f7ef", "#5fbf95"); ctx.fill(); ctx.strokeStyle = "#2f8a62"; ctx.lineWidth = 1; ctx.stroke();
        txt("K⁺", x, y + 0.5, ir * 0.62, "#1f5e42", "center", 700);
        ctx.restore();
        if (k === 0) out.k = [x, y];
      }
      // 转运体
      xs.forEach((x) => { pore("bp_ncc", x, yM, ir, mt, (1 - d) * (0.35 + 0.25 * Math.sin(time * 3 + x)), false); });
      // 钠离子 + 水：被收回（进细胞、进血）或随尿排出
      const N = 12;
      for (let i = 0; i < N; i++) {
        const j = i % 3, x = xs[j], thr = 0.1 + rnd(i + 50) * 0.8, wA = clamp((thr - d) * 5, 0, 1);
        const u = (time * 0.075 + rnd(i + 7)) % 1;
        const x0 = Z.x + Z.w * (0.02 + rnd(i + 20) * 0.5), y0 = Z.y + (yM - Z.y) * (0.22 + rnd(i + 30) * 0.5);
        const cxl = x + (rnd(i + 40) - 0.5) * Z.w * 0.12;
        const pts = [[x0, y0], [x + (x0 < x ? -1 : 1) * ir * 0.8, yM - mt / 2 - ir * 1.6], [x, yM - mt / 2 - ir * 0.3], [x, yM + mt / 2 + ir * 0.8], [cxl, (yM + yB) / 2], [cxl + ir, yB + (yBot - yB) * 0.3]];
        const spA = sample(pts, 30);
        const fade = (t) => clamp(t / 0.08, 0, 1) * clamp((1 - t) / 0.1, 0, 1);
        if (wA > 0.02) {
          const p = along(spA, u), q = along(spA, Math.max(0, u - 0.05));
          mol("bp_na", p[0], p[1], ir * 0.62, wA * fade(u));
          if (i % 2 === 0) mol("bp_h2o", q[0] + ir * 0.7, q[1] - ir * 0.2, ir * 0.5, wA * fade(u) * 0.9);
        }
        if (wA < 0.98) {
          const xx = x0 + (Z.x + Z.w * 1.05 - x0) * u, yy = y0 + Math.sin(u * 9 + i) * ir * 0.5;
          mol("bp_na", xx, yy, ir * 0.62, (1 - wA) * fade(u));
          if (i % 2 === 0) mol("bp_h2o", xx - ir * 1.1, yy + ir * 0.5, ir * 0.5, (1 - wA) * fade(u) * 0.9);
        }
      }
      // 药：噻嗪类胶囊落在转运体口上
      xs.forEach((x, j) => {
        const a = clamp(d * 1.4 - j * 0.15, 0, 1);
        if (a < 0.02) return;
        const dy = yM - mt / 2 - ir * 1.55, py = dy - (1 - a) * ir * 4;
        mol("bp_thz", x, py, ir * 0.95, a);
        noSign(x + ir * 1.7, dy - ir * 0.2, ir * 0.48, clamp((a - 0.6) * 2.5, 0, 1));
        if (j === 1) out.cap = [x, py];
      });
      // 文字
      label(n ? "肾小管腔" : "肾小管腔（原尿）", Z.x + 8, Z.y + fs * 0.9, fs * 0.92, K.soft, "left", 500);
      label("肾小管细胞", Z.x + 8, (yM + yB) / 2 - ir * 1.4, fs * 0.92, K.soft, "left", 500);
      label("血液", Z.x + 8, yB + (yBot - yB) * 0.25 + 2, fs * 0.92, "#b0605a", "left", 500);
      // 排尿方向
      const ay = Z.y + (yM - Z.y) * 0.18;
      const sp = arrow([[Z.x + Z.w * 0.66, ay], [Z.x + Z.w - 10, ay]], "#d6b85a", Math.max(2, ir * 0.22), 0.5 + 0.5 * d, "go");
      label("流向尿液", Z.x + Z.w * 0.66 - 6, ay, fs * 0.88, "#9c7f24", "right", 500);
      out.urine = [Z.x + Z.w * 0.9, Z.y + (yM - Z.y) * 0.55];
    });
    return out;
  }
  function volGauge(r, v, head) {
    const fs = SF();
    txt(head, r.x + r.w / 2, r.y + fs * 0.6, fs * 0.95, K.ink, "center", 700);
    const tw = Math.min(r.w * 0.5, fs * 2.8), tx = r.x + (r.w - tw) / 2, ty = r.y + fs * 1.5, th = r.h - fs * 2.8;
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(tx, ty, tw, th, tw * 0.3); ctx.fill();
    ctx.save(); ctx.clip();
    const lv = ty + th * (1 - v);
    ctx.fillStyle = glossy(tx + tw * 0.4, lv + th * 0.3, th * 0.8, "#f7b8b3", "#d9605a"); ctx.fillRect(tx, lv, tw, th);
    ctx.strokeStyle = "rgba(255,255,255,0.6)"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(tx, lv + Math.sin(time * 3) * 1.5); ctx.lineTo(tx + tw, lv - Math.sin(time * 3) * 1.5); ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = "#8f9ab3"; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.roundRect(tx, ty, tw, th, tw * 0.3); ctx.stroke();
    return { x: tx + tw / 2, y: lv, bottom: ty + th };
  }
  function scene1(A, Lg, live, T) {
    const n = nar(), on = onOf(1, live), d = dOnOf(T);
    let Z, gz, kd = null;
    if (n) {
      Z = { x: A.x, y: A.y + 2, w: A.w * 0.8, h: A.h - 4 };
      gz = { x: A.x + A.w * 0.81, y: A.y + 2, w: A.w * 0.19, h: A.h - 4 };
    } else {
      const L = { x: A.x, y: A.y, w: A.w * 0.28, h: A.h };
      Z = { x: A.x + A.w * 0.32, y: A.y + 2, w: A.w * 0.68, h: A.h - Lg.bh - 22 };
      const ks = Math.min(L.w * 0.34, L.h * 0.17);
      kd = kidneyIcon(L.x + L.w * 0.48, L.y + L.h * 0.26, ks, 0, 0);
      txt("肾脏", kd.x - ks * 0.1, kd.y + ks * 1.45, SF(), K.soft, "center", 700);
      zoomLines(kd.spot, Z, ks * 0.16);
      gz = { x: L.x + L.w * 0.12, y: L.y + L.h * 0.56, w: L.w * 0.76, h: L.h * 0.42 };
    }
    const R = tubule(Z, d, live);
    const g = volGauge(gz, 0.78 - 0.24 * d, n ? "血容量" : "血管里的液体");
    if (!n) {
      ctx.save(); ctx.globalAlpha *= d; txt("↓ 变少", g.x + gz.w * 0.28, g.y, SF(), DC("bp_thz")[2], "left", 700); ctx.restore();
    }
    const c = R.cap || [R.xs[1], R.yM - R.ir * 2];
    if (n) {
      tag("thz", on("thz") && d > 0.5, c[0], c[1] - R.ir * 0.5, Z.x + Z.w * 0.5, Z.y + LF() * 1.0, "噻嗪类挡住钠转运体", DC("bp_thz")[1]);
      tag("k", on("k") && T > 6, R.k[0], R.k[1], Z.x + Z.w * 0.55, R.yM + (R.yB - R.yM) * 0.6, "要复查血钾等电解质", "#5fbf95");
    } else {
      tag("thz", on("thz") && d > 0.5, c[0], c[1] - R.ir * 0.5, Z.x + Z.w * 0.36, R.yM + (R.yB - R.yM) * 0.5, "噻嗪类：挡住回收钠的转运体", DC("bp_thz")[1]);
      tag("out", on("out") && d > 0.7, R.urine[0], R.urine[1], Z.x + Z.w * 0.8, R.yM + (R.yB - R.yM) * 0.5, "钠和水随尿排出", DC("bp_h2o")[1]);
      tag("k", on("k") && T > 5.5, R.k[0], R.k[1], Z.x + Z.w * 0.3, Z.y + Z.h + LF() * 1.8, "注意：按医嘱复查血钾等电解质", "#5fbf95");
    }
  }

  // =================== 第 3 幕：钙通道阻滞剂 ===================
  function smcZoom(Z, d) {
    const n = nar();
    const ir = Math.min(IR(), Z.h * 0.06, Z.w * 0.045), mt = Math.max(6, ir * 0.85);
    const yM = Z.y + Z.h * (n ? 0.42 : 0.4), yBot = Z.y + Z.h, fs = SF();
    const xs = [0.2, 0.5, 0.8].map((f) => Z.x + Z.w * f);
    const contract = 1 - 0.85 * d;
    const out = { ir, yM, xs };
    panelClip(Z, () => {
      ctx.fillStyle = "#f6f9fc"; ctx.fillRect(Z.x, Z.y, Z.w, yM - Z.y);
      muscle({ x: Z.x, y: yM + mt / 2, w: Z.w, h: yBot - yM - mt / 2 }, contract);
      bilayer(Z.x, Z.x + Z.w, yM, mt);
      xs.forEach((x) => pore("bp_cach", x, yM, ir, mt, (1 - d) * (0.3 + 0.3 * Math.sin(time * 4 + x)), true));
      // 钙离子：穿过通道进入细胞 / 被挡在外面弹回去
      const N = 12;
      for (let i = 0; i < N; i++) {
        const j = i % 3, x = xs[j], thr = 0.1 + rnd(i + 70) * 0.8, wA = clamp((thr - d) * 5, 0, 1);
        const u = (time * 0.11 + rnd(i + 9)) % 1;
        const x0 = x + (rnd(i + 21) - 0.5) * Z.w * 0.28, y0 = Z.y + (yM - Z.y) * (0.15 + rnd(i + 31) * 0.3);
        const fade = (t) => clamp(t / 0.1, 0, 1) * clamp((1 - t) / 0.12, 0, 1);
        if (wA > 0.02) {
          const sp = sample([[x0, y0], [x + (x0 < x ? -1 : 1) * ir * 0.5, yM - mt / 2 - ir * 1.4], [x, yM], [x + (rnd(i + 41) - 0.5) * ir * 3, yM + (yBot - yM) * 0.45]], 24);
          const p = along(sp, u);
          mol("bp_ca", p[0], p[1], ir * 0.5, wA * fade(u), time * 0.8 + i);
          if (u > 0.55 && u < 0.9) { // 进细胞后点亮一下
            const gr = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], ir * 2.2);
            gr.addColorStop(0, rgba("#ffb03a", 0.35 * wA)); gr.addColorStop(1, rgba("#ffb03a", 0));
            ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(p[0], p[1], ir * 2.2, 0, TAU); ctx.fill();
          }
        }
        if (wA < 0.98) {
          const tip = [x + (x0 < x ? -1 : 1) * ir * 1.2, yM - mt / 2 - ir * 2.9];
          const k = u < 0.5 ? ease(u / 0.5) : ease((1 - u) / 0.5);
          mol("bp_ca", x0 + (tip[0] - x0) * k, y0 + (tip[1] - y0) * k, ir * 0.5, (1 - wA) * fade(u), time * 0.8 + i);
        }
      }
      // 药：地平类分子堵在通道口
      xs.forEach((x, j) => {
        const a = clamp(d * 1.4 - j * 0.15, 0, 1);
        if (a < 0.02) return;
        const dy = yM - mt / 2 - ir * 1.35, py = dy - (1 - a) * ir * 4;
        mol("bp_ccbM", x, py, ir * 0.7, a);
        noSign(x + ir * 1.8, dy - ir * 0.3, ir * 0.46, clamp((a - 0.6) * 2.5, 0, 1));
        if (j === 1) out.plug = [x, py - ir * 0.3];
      });
      label("细胞外", Z.x + 8, Z.y + fs * 0.9, fs * 0.92, K.soft, "left", 500);
      label("平滑肌细胞", Z.x + 8, yM + mt / 2 + fs * 0.95, fs * 0.92, K.soft, "left", 500);
      // 收缩 / 放松的小箭头
      const ay = yM + (yBot - yM) * 0.8;
      ctx.save(); ctx.globalAlpha *= clamp(contract * 1.2, 0, 1);
      arrow([[Z.x + Z.w * 0.08, ay], [Z.x + Z.w * 0.2, ay]], "#d98a74", Math.max(2, ir * 0.2), 1, "go");
      arrow([[Z.x + Z.w * 0.92, ay], [Z.x + Z.w * 0.8, ay]], "#d98a74", Math.max(2, ir * 0.2), 1, "go");
      ctx.restore();
      label(contract > 0.5 ? "收缩" : "放松", Z.x + Z.w * 0.5, ay, fs, contract > 0.5 ? "#b0603a" : K.calm, "center", 700);
      out.cell = [Z.x + Z.w * 0.5, ay - fs * 0.8];
    });
    return out;
  }
  function scene2(A, Lg, live, T) {
    const n = nar(), on = onOf(2, live), d = dOnOf(T);
    let Z, ri;
    if (n) {
      Z = { x: A.x + A.w * 0.3, y: A.y + 2, w: A.w * 0.7, h: A.h - 4 };
      const R = Math.min(A.w * 0.13, A.h * 0.3);
      ri = ringIcon(A.x + A.w * 0.14, A.y + A.h * 0.42, R, 0.1 + 0.85 * d);
      txt("小动脉", ri.x, ri.y + R + SF() * 0.9, SF(), K.soft, "center", 700);
    } else {
      Z = { x: A.x + A.w * 0.34, y: A.y + 2, w: A.w * 0.66, h: A.h - Lg.bh - 22 };
      const R = Math.min(A.w * 0.12, A.h * 0.25);
      ri = ringIcon(A.x + A.w * 0.15, A.y + A.h * 0.36, R, 0.1 + 0.85 * d);
      txt("小动脉横切面", ri.x, ri.y + R + SF() * 1.1, SF(), K.soft, "center", 700);
      txt(d > 0.5 ? "管腔变宽，血压下降" : "管腔窄，阻力大", ri.x, ri.y + R + SF() * 2.6, SF() * 0.95, d > 0.5 ? K.calm : "#b0603a", "center", 500);
    }
    zoomLines(ri.smc, Z, Math.max(6, ri.R * 0.12));
    const R2 = smcZoom(Z, d);
    const p = R2.plug || [R2.xs[1], R2.yM - R2.ir * 2];
    if (n) {
      tag("ccb", on("ccb") && d > 0.5, p[0], p[1], Z.x + Z.w * 0.5, Z.y + LF() * 1.0, "地平类堵住钙通道", DC("bp_ccb")[1]);
      tag("relax", on("relax") && d > 0.8, R2.cell[0], R2.cell[1] + LF() * 0.3, Z.x + Z.w * 0.5, R2.yM + (Z.y + Z.h - R2.yM) * 0.42, "钙进不来，肌肉放松", K.calm);
    } else {
      tag("ccb", on("ccb") && d > 0.5, p[0], p[1], Z.x + Z.w * 0.5, Z.y + (R2.yM - Z.y) * 0.22, "地平类：堵住钙通道", DC("bp_ccb")[1]);
      tag("relax", on("relax") && d > 0.8, R2.cell[0] + Z.w * 0.08, R2.cell[1] + LF() * 0.8, Z.x + Z.w * 0.72, Z.y + Z.h + LF() * 1.6, "钙进不来，平滑肌放松", K.calm);
      tag("ring", on("ring") && d > 0.8, ri.x, ri.y - ri.rl * 0.6, ri.x, A.y + LF() * 0.8, "小动脉舒张", K.calm);
    }
  }

  // =================== 第 4 幕：RAAS + 普利类 ===================
  function scene3(A, Lg, live, T) {
    const n = nar(), on = onOf(3, live), d = dOnOf(T), fs = SF();
    const ir = n ? Math.min(IR() * 1.05, A.w * 0.035, A.h * 0.075) : Math.min(IR() * 1.25, A.h * 0.055);
    const P = (u, v) => [A.x + A.w * u, A.y + A.h * v];
    const pos = n ? { agt: P(0.08, 0.2), ren: P(0.27, 0.2), a1: P(0.46, 0.2), ace: P(0.66, 0.2), a2: P(0.89, 0.2), ring: P(0.84, 0.7), ald: P(0.42, 0.72), kid: P(0.15, 0.7) }
      : { agt: P(0.07, 0.5), ren: P(0.2, 0.5), a1: P(0.33, 0.5), ace: P(0.47, 0.5), a2: P(0.61, 0.5), ring: P(0.86, 0.3), ald: P(0.66, 0.86), kid: P(0.55, 0.84), rk: P(0.2, 0.17) };
    const R = n ? Math.min(A.h * 0.22, A.w * 0.12) : Math.min(A.h * 0.16, A.w * 0.085);
    const ks2 = n ? Math.min(A.h * 0.16, A.w * 0.07) : Math.min(A.h * 0.1, A.w * 0.045);
    const adr = [pos.kid[0] + 0.28 * ks2 * 0.8, pos.kid[1] - 1.05 * ks2];
    const at1 = [pos.ring[0] - R - ir * 2.8, pos.ring[1] + R * 0.35];
    const lw = Math.max(2, ir * 0.22), dim = 1 - 0.75 * d;
    // 箭头
    const go = (a, b, col, al) => arrow([a, b], col, lw, al, "go");
    const sA = go([pos.agt[0] + ir * 2.1, pos.agt[1]], [pos.a1[0] - ir * 1.9, pos.a1[1]], "#b9c3d6", 1);
    flow(sA, "#8f9ab3", 3, lw * 0.8, 1, 0.25);
    const sB = go([pos.a1[0] + ir * 1.9, pos.a1[1]], [pos.a2[0] - ir * 1.6, pos.a2[1]], "#b9c3d6", 0.4 + 0.6 * dim);
    flow(sB, "#8f9ab3", 3, lw * 0.8, dim, 0.25);
    const col2 = DC("bp_ang2")[1];
    let sC, sD;
    if (n) {
      sC = arrow([[pos.a2[0] + ir * 0.2, pos.a2[1] + ir * 1.5], [pos.ring[0] + R * 0.1, pos.ring[1] - R - ir * 0.5]], col2, lw, 0.3 + 0.7 * dim, "go");
      sD = arrow([[pos.a2[0] - ir * 1.0, pos.a2[1] + ir * 1.3], [pos.a2[0] - ir * 4.5, pos.ald[1] - ir * 0.2], [pos.ald[0] + ir * 2.2, pos.ald[1]]], col2, lw, 0.3 + 0.7 * dim, "go");
    } else {
      sC = arrow([[pos.a2[0] + ir * 1.8, pos.a2[1] - ir * 0.5], [at1[0] - ir * 0.5, pos.a2[1] - ir * 1.5], [at1[0], at1[1] - ir * 3.4]], col2, lw, 0.3 + 0.7 * dim, "go");
      sD = arrow([[pos.a2[0] - ir * 0.3, pos.a2[1] + ir * 1.7], [pos.a2[0] - ir * 0.5, (pos.a2[1] + adr[1]) / 2], [adr[0] + ir * 0.2, adr[1] - ir * 1.1]], col2, lw, 0.3 + 0.7 * dim, "go");
    }
    flow(sC, "#ffffff", 2, lw * 0.8, dim, 0.3); flow(sD, "#ffffff", 2, lw * 0.8, dim, 0.3);
    // 肾脏放出肾素（宽屏）
    if (!n) {
      const ks = Math.min(A.h * 0.12, A.w * 0.05);
      kidneyIcon(pos.rk[0], pos.rk[1], ks, 0, 0);
      txt("肾脏", pos.rk[0] - ks * 1.2, pos.rk[1] - ks * 0.9, fs, K.soft, "center", 700);
      const sR = arrow([[pos.rk[0] + ks * 0.2, pos.rk[1] + ks * 1.05], [pos.ren[0], pos.ren[1] - ir * 1.8]], DC("bp_renin")[1], lw, 0.8, "go");
      flow(sR, DC("bp_renin")[1], 2, lw * 0.8, 1, 0.3);
    }
    // 分子与酶
    const bob = (k) => Math.sin(time * 1.8 + k) * 1.5;
    mol("bp_agt", pos.agt[0], pos.agt[1] + bob(0), ir * 0.62, 1);
    mol("bp_renin", pos.ren[0], pos.ren[1] + bob(1), ir * 1.1, 1, Math.sin(time * 2) * 0.12);
    mol("bp_ang1", pos.a1[0], pos.a1[1] + bob(2), ir * 0.78, 1);
    // 普利类让血管紧张素Ⅰ在 ACE 前面堆起来
    for (let k = 0; k < 2; k++) { const a = clamp(d * 2 - k * 0.6, 0, 1); mol("bp_ang1", pos.a1[0] + (k ? 1 : -1) * ir * 0.6, pos.a1[1] - ir * (1.2 + k * 0.9) + bob(k + 5), ir * 0.7, a); }
    mol("bp_ace", pos.ace[0], pos.ace[1] + bob(3), ir * 1.2, 1, Math.sin(time * 2 + 1) * 0.12 * dim);
    const nA2 = 3;
    for (let k = 0; k < nA2; k++) {
      const a = k === 0 ? 1 : clamp(1 - d * 1.6 + (k === 1 ? 0.3 : 0), 0, 1);
      mol("bp_ang2", pos.a2[0] + [0, -0.8, 0.8][k] * ir, pos.a2[1] + [0, -1.1, -1.1][k] * ir + bob(k + 4), ir * 0.8, a);
    }
    // 小动脉（AT1 受体在这里）
    const ri = ringIcon(pos.ring[0], pos.ring[1], R, 0.15 + 0.6 * d);
    if (!n) {
      const mt = Math.max(5, ir * 0.6);
      bilayer(at1[0] - ir * 2.2, at1[0] + ir * 2.2, at1[1], mt);
      receptor("bp_ang2", at1[0], at1[1], ir * 0.8, mt, dim * (0.4 + 0.3 * Math.sin(time * 3)), 0, ["bp_ang2", dim]);
      arrow([[at1[0] + ir * 2.4, at1[1]], [pos.ring[0] - R - 3, pos.ring[1] + R * 0.2]], "#c9a79c", Math.max(1.5, lw * 0.7), 0.8, "go");
    }
    // 肾上腺 → 醛固酮
    const kd = kidneyIcon(pos.kid[0], pos.kid[1], ks2, 1, 0);
    if (!n) arrow([[adr[0] + ks2 * 0.5, adr[1] + ks2 * 0.1], [pos.ald[0] - ir * 1.8, pos.ald[1] - ir * 0.3]], "#e7a6c1", Math.max(1.5, lw * 0.8), 0.9, "go");
    mol("bp_aldo", pos.ald[0], pos.ald[1] + bob(7), ir * 0.9, 0.35 + 0.65 * dim);
    // 酶上的药：普利类胶囊卡进 ACE 的口 + ⊖
    const cp = [pos.ace[0] + ir * 1.1 + (1 - d) * ir * 2.5, pos.ace[1] - (1 - d) * ir * 3];
    mol("bp_acei", cp[0], cp[1], ir * 0.72, d, -0.2);
    minusSign(pos.ace[0], pos.ace[1] - ir * 1.9, ir * 0.5, clamp((d - 0.5) * 2.5, 0, 1));
    // 名称
    const f2 = fs * (n ? 0.82 : 0.92), below = ir * 1.6 + f2 * 0.5;
    const nm = n ? ["紧张素原", "肾素", "紧张素Ⅰ", "ACE", "紧张素Ⅱ"] : ["血管紧张素原", "肾素", "血管紧张素Ⅰ", "ACE 酶", "血管紧张素Ⅱ"];
    [pos.agt, pos.ren, pos.a1, pos.ace, pos.a2].forEach((p, k) => label(nm[k], p[0], p[1] + below, f2, k === 1 ? DC("bp_renin")[2] : k === 3 ? DC("bp_ace")[2] : K.ink, "center", k === 1 || k === 3 ? 700 : 500));
    if (!n) label("（来自肝脏）", pos.agt[0], pos.agt[1] + below + f2 * 1.25, f2 * 0.9, K.soft, "center", 500);
    label(n ? "收紧血管" : "小动脉收紧", ri.x, ri.y + R + f2 * 0.95, f2, K.ink, "center", 500);
    if (!n) label("AT1 受体", at1[0], at1[1] + ir * 1.4 + f2 * 0.6, f2, K.ink, "center", 500);
    if (n) label("醛固酮：留钠留水", (pos.kid[0] + pos.ald[0]) / 2 + ir * 0.3, pos.ald[1] + ks2 * 1.25 + f2 * 0.3, f2, K.ink, "center", 500);
    else {
      label("肾上腺", kd.adrenal[0] - ks2 * 1.3, kd.adrenal[1] - ks2 * 0.1, f2, K.soft, "right", 500);
      label("醛固酮：让肾脏留钠留水", pos.ald[0] + ir * 1.6, pos.ald[1], f2, K.ink, "left", 500);
    }
    if (!n) {
      ctx.save(); ctx.globalAlpha *= d;
      label("血管紧张素Ⅰ堆在门口", pos.a1[0], pos.a1[1] - ir * 3.9, f2 * 0.92, K.soft, "center", 500);
      ctx.restore();
    }
    tag("acei", on("acei") && d > 0.5, cp[0], cp[1] - ir * 0.3, n ? A.x + A.w * 0.33 : pos.ace[0] + A.w * 0.03, n ? A.y + A.h * 0.45 : A.y + LF() * 0.9, n ? "普利类抑制 ACE" : "普利类：抑制 ACE 酶", DC("bp_acei")[1]);
    if (!n) tag("ang2", on("ang2") && d > 0.6, pos.a2[0] + ir * 0.8, pos.a2[1] + ir * 0.4, pos.a2[0] + A.w * 0.12, pos.a2[1] + A.h * 0.1, "血管紧张素Ⅱ变少", col2);
  }

  // =================== 第 5 幕：沙坦类 ===================
  function receptorZoom(Z, key, mkey, dkey, d, opt) {
    const n = nar();
    const ir = Math.min(IR() * 1.05, Z.w * 0.05, Z.h * 0.07), mt = Math.max(7, ir * 0.9);
    const yM = Z.y + Z.h * opt.mem, yBot = Z.y + Z.h, fs = SF();
    const cnt = opt.count || 4, xs = [];
    for (let i = 0; i < cnt; i++) xs.push(Z.x + Z.w * ((i + 0.5) / cnt));
    const res = { ir, yM, xs, bound: 0 };
    panelClip(Z, () => {
      ctx.fillStyle = "#f6f9fc"; ctx.fillRect(Z.x, Z.y, Z.w, yM - Z.y);
      const st = xs.map((x, i) => {
        const occ = clamp(d * 1.8 - rnd(i + 40) * 0.8, 0, 1);
        const Pp = 4.5 + rnd(i + 3) * 2.5, ph = (time / Pp + rnd(i + 5)) % 1;
        let glow = 0;
        if (ph > 0.18 && ph < 0.82) glow = clamp((ph - 0.18) / 0.06, 0, 1) * clamp((0.82 - ph) / 0.06, 0, 1);
        glow *= 1 - occ;
        return { x, occ, ph, glow };
      });
      const act = clamp(st.reduce((a, s) => a + s.glow, 0) / cnt * 1.3, 0, 1) * (1 - 0.3 * d) + 0.1;
      res.act = act;
      opt.inside({ x: Z.x, y: yM + mt / 2, w: Z.w, h: yBot - yM - mt / 2 }, act);
      bilayer(Z.x, Z.x + Z.w, yM, mt);
      if (opt.top) opt.top(res);
      const relY = opt.srcY != null ? opt.srcY : Z.y + (yM - Z.y) * 0.2;
      st.forEach((s, i) => {
        const occ = s.occ > 0.01 ? [dkey, s.occ] : null;
        const dock = receptor(key, s.x, yM, ir, mt, s.glow, 0, occ);
        if (s.occ > 0.5) { noSign(s.x + ir * 1.9, dock.y - ir * 0.3, ir * 0.48, clamp((s.occ - 0.5) * 3, 0, 1)); if (!res.drug || i === 1) res.drug = { x: s.x, y: dock.y - ir * 1.1 }; }
        // 天然分子：飘下来 → 结合 → 离开
        const ra = 1 - s.occ;
        if (ra > 0.02) {
          const ph = s.ph, sx = opt.srcX != null ? opt.srcX + (s.x - opt.srcX) * 0.25 : s.x + (rnd(i + 8) - 0.5) * ir * 6;
          let x, y, a = ra;
          if (ph < 0.18) { const t = ease(ph / 0.18); x = sx + (s.x - sx) * t; y = relY + (dock.y - relY) * t; a *= clamp(ph / 0.05, 0, 1); }
          else if (ph < 0.82) { x = s.x; y = dock.y + Math.sin(time * 2 + i) * 0.6; }
          else { const t = (ph - 0.82) / 0.18; x = s.x + t * ir * 3 * (i % 2 ? 1 : -1); y = dock.y - t * ir * 3; a *= 1 - t; }
          mol(mkey, x, y, ir, a);
          if (ph > 0.25 && ph < 0.75 && !res.natural) res.natural = { x, y: y - ir * 0.5 };
        }
        // 被药占住时：天然分子在上面“排队”
        const qa = clamp(s.occ * 1.5 - 0.3, 0, 1);
        if (qa > 0.02) {
          const hop = Math.abs(Math.sin(time * 1.6 + i * 1.3));
          const qx = s.x + Math.sin(time * 0.7 + i) * ir * 0.5, qy = dock.y - ir * 3.3 - hop * ir * 0.8;
          mol(mkey, qx, qy, ir, qa);
          if (i === cnt - 1 || !res.queue) res.queue = { x: qx, y: qy };
        }
      });
      // 游离的天然分子
      if (opt.free) for (let i = 0; i < opt.free; i++) {
        const t = (rnd(i + 60) + time * 0.02 * (0.5 + rnd(i + 61))) % 1;
        const x = Z.x + Z.w * (0.06 + 0.88 * (0.5 + 0.5 * Math.sin(t * TAU)));
        const y = Z.y + (yM - Z.y) * (0.14 + rnd(i + 80) * 0.22) + Math.sin(time * 0.9 + i * 2) * ir * 0.4;
        mol(mkey, x, y, ir * 0.85, 0.85);
      }
      if (opt.labels) opt.labels(res, fs);
    });
    return res;
  }
  function listCard(r, head, items, T) {
    const y0 = card(r, head), pad = Math.min(r.w, r.h) * 0.06;
    const nn = items.length, rh = (r.y + r.h - pad * 0.5 - y0) / nn;
    const icon = Math.min(rh * 0.66, SF() * 3.4);
    const fs = fitFs(items.map((it) => it.t), r.w - pad * 2 - icon * 1.3, Math.min(SF() * 1.35, rh * 0.4));
    const out = [];
    items.forEach((it, i) => {
      const y = y0 + rh * (i + 0.5), ix = r.x + pad + icon * 0.5;
      const show = clamp((T - 0.8 - i * 0.8) / 0.5, 0, 1);
      ctx.save(); ctx.globalAlpha *= 0.2 + 0.8 * show;
      it.icon(ix, y, icon * 0.5, show);
      txt(it.t, ix + icon * 0.75, y + 0.5, fs, K.ink, "left", 500);
      ctx.restore();
      if (i < nn - 1) { ctx.strokeStyle = "#e6eaf2"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(r.x + pad, y + rh / 2); ctx.lineTo(r.x + r.w - pad, y + rh / 2); ctx.stroke(); }
      out.push({ x: ix, y });
    });
    return out;
  }
  function scene4(A, Lg, live, T) {
    const n = nar(), on = onOf(4, live), d = dOnOf(T);
    const Z = n ? { x: A.x, y: A.y + 2, w: A.w, h: A.h - 4 } : { x: A.x, y: A.y + 2, w: A.w * 0.6, h: A.h - 4 };
    const R = receptorZoom(Z, "bp_ang2", "bp_ang2", "bp_arbM", d, {
      mem: n ? 0.56 : 0.58, count: 4, free: n ? 3 : 5,
      inside: (r, act) => muscle(r, clamp(act * 1.1, 0, 1) * (1 - 0.6 * d)),
      labels: (res, fs) => {
        label("细胞外", Z.x + 8, Z.y + fs * 0.9, fs * 0.92, K.soft, "left", 500);
        label("血管平滑肌细胞", Z.x + 8, res.yM + res.ir * 0.9 + fs * 0.9, fs * 0.92, K.soft, "left", 500);
      },
    });
    if (!n) {
      const r = { x: A.x + A.w * 0.63, y: A.y + 2, w: A.w * 0.37, h: A.h - Lg.bh - 24 };
      listCard(r, "普利类、沙坦类", [
        { icon: (x, y, s) => { heartIcon(x - s * 0.4, y + s * 0.12, s * 0.72, 0.5); kidneyIcon(x + s * 0.75, y + s * 0.05, s * 0.62, 0, 0); }, t: "保护心脏和肾脏" },
        { icon: (x, y, s) => noSign(x, y, s * 0.62, 1), t: "孕妇禁用" },
        { icon: (x, y, s) => tubeIcon(x, y, s), t: "查血钾、肾功能" },
      ], T);
    }
    const dr = R.drug || { x: R.xs[1], y: R.yM - R.ir * 2 };
    const q = R.queue;
    if (n) {
      tag("arb", on("arb") && d > 0.5, dr.x, dr.y, Z.x + Z.w * 0.5, R.yM + (Z.y + Z.h - R.yM) * 0.62, "沙坦类占住 AT1 受体", DC("bp_arb")[1]);
      tag("queue", on("queue") && !!q && d > 0.7, q ? q.x : 0, q ? q.y : 0, Z.x + Z.w * 0.5, Z.y + LF() * 0.9, "血管紧张素Ⅱ插不上", DC("bp_ang2")[1]);
    } else {
      tag("arb", on("arb") && d > 0.5, dr.x, dr.y, Z.x + Z.w * 0.5, R.yM + (Z.y + Z.h - R.yM) * 0.66, "沙坦类：占住 AT1 受体", DC("bp_arb")[1]);
      tag("queue", on("queue") && !!q && d > 0.7, q ? q.x : 0, q ? q.y : 0, Z.x + Z.w * 0.72, Z.y + LF() * 1.0, "血管紧张素Ⅱ插不上，血管收不紧", DC("bp_ang2")[1]);
    }
  }

  // =================== 第 6 幕：洛尔类 ===================
  function scene5(A, Lg, live, T) {
    const n = nar(), on = onOf(5, live), d = dOnOf(T), fs = SF();
    let Z, hi;
    if (n) {
      Z = { x: A.x, y: A.y + 2, w: A.w, h: A.h - 4 };
    } else {
      Z = { x: A.x + A.w * 0.3, y: A.y + 2, w: A.w * 0.7, h: A.h - Lg.bh - 22 };
      const s = Math.min(A.w * 0.09, A.h * 0.17);
      hi = heartIcon(A.x + A.w * 0.13, A.y + A.h * 0.3, s, 1);
      label("心率 " + Math.round(hrNow) + " 次/分", hi.x, hi.y + s * 1.3, fs * 1.1, d > 0.5 ? K.calm : "#b0603a", "center", 700);
      // 肾脏放出的肾素也少了
      const ks = s * 0.55, kx = A.x + A.w * 0.08, ky = A.y + A.h * 0.72;
      kidneyIcon(kx, ky, ks, 0, 0);
      for (let k = 0; k < 3; k++) {
        const a = k === 0 ? 1 : clamp(1 - d * 1.5 + (k === 1 ? 0.3 : 0), 0, 1);
        mol("bp_renin", kx + ks * 1.4 + k * IR() * 1.9, ky - ks * 0.3 + Math.sin(time * 2 + k) * 1.5, IR() * 0.75, a, 0.1 * Math.sin(time + k));
      }
      label(d > 0.5 ? "肾素也放得少了" : "肾脏放出肾素", kx + ks * 1.4 + IR() * 1.9, ky + ks * 0.75, fs * 0.95, K.soft, "center", 500);
    }
    const R = receptorZoom(Z, "bp_ne", "bp_ne", "bp_bbM", d, {
      mem: n ? 0.6 : 0.62, count: 4, srcX: Z.x + Z.w * 0.5,
      srcY: Z.y + Z.h * (n ? 0.3 : 0.32),
      inside: (r, act) => {
        act = 0.3 + 0.7 * act;
        TB.postsynaptic(r.x, r.y, r.w, r.h, act);
        const ty = r.y + r.h * 0.72, amp = r.h * 0.26;
        // 心肌细胞的节律：心跳慢下来，尖峰就稀
        ctx.strokeStyle = mix("#8f9ab3", K.fire, act); ctx.lineWidth = Math.max(1.4, H * 0.004); ctx.lineJoin = "round";
        ctx.beginPath();
        const x0 = r.x + r.w * 0.24, x1 = r.x + r.w * 0.94;
        for (let x = x0; x <= x1; x += 1.5) {
          const ph = phase - (x1 - x) / (x1 - x0) * 3.2, f = ((ph % 1) + 1) % 1;
          const y = ty - (f < 0.1 ? Math.sin(f / 0.1 * Math.PI) * amp : f > 0.3 && f < 0.5 ? Math.sin((f - 0.3) / 0.2 * Math.PI) * amp * 0.18 : 0);
          if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
        label("心肌细胞", r.x + 8, r.y + SF() * 1.0, SF() * 0.92, K.soft, "left", 500);
        label("跳动", r.x + r.w * 0.14, ty - amp * 0.2, SF() * 0.9, K.soft, "center", 500);
      },
      top: (res) => {
        TB.presynaptic({ cx: Z.x + Z.w * 0.5, top: Z.y - 2, by: Z.y + Z.h * (n ? 0.16 : 0.18), brx: Z.w * (n ? 0.17 : 0.13), bry: Z.h * (n ? 0.13 : 0.14), aw: Z.w * 0.035, mt: res.ir * 0.8, ir: res.ir * 0.8, dot: DC("bp_ne")[1] });
      },
      labels: (res, fs2) => {
        label("交感神经末梢", Z.x + Z.w * 0.5 + Z.w * (n ? 0.19 : 0.15), Z.y + fs2 * 1.0, fs2 * 0.92, K.soft, "left", 500);
      },
    });
    if (n) {
      const s = Math.min(Z.w * 0.075, Z.h * 0.1);
      hi = heartIcon(Z.x + Z.w * 0.1, Z.y + s * 1.35, s, 1);
      label(Math.round(hrNow) + " 次/分", hi.x, hi.y + s * 1.35, fs * 0.95, d > 0.5 ? K.calm : "#b0603a", "center", 700);
    }
    const dr = R.drug || { x: R.xs[1], y: R.yM - R.ir * 2 };
    if (n) {
      tag("bb", on("bb") && d > 0.5, dr.x, dr.y, Z.x + Z.w * 0.72, Z.y + Z.h * 0.36, "洛尔类挡住β1受体", DC("bp_bb")[1]);
    } else {
      tag("bb", on("bb") && d > 0.5, dr.x, dr.y, Z.x + Z.w * 0.8, Z.y + Z.h * 0.34, "洛尔类：挡住β1受体", DC("bp_bb")[1]);
      tag("slow", on("slow") && d > 0.8, hi.x + hi.s * 0.5, hi.y - hi.s * 0.3, hi.x + A.w * 0.04, A.y + LF() * 0.8, "心跳慢下来、收缩变温和", K.calm);
    }
  }

  // =================== 第 7、8 幕：血压曲线 ===================
  function bpChart(r, mode, reveal) {
    TB.panel(r, 10);
    const fs = SF() * 0.95, n = nar();
    const px = r.x + fs * 2.9, py = r.y + fs * 2.3, pw = r.w - fs * 3.6, ph = r.h - fs * 3.9;
    const lo = 100, hi = 185, X = (t) => px + pw * t, Y = (v) => py + ph * (1 - (v - lo) / (hi - lo));
    txt("收缩压（mmHg）", r.x + fs * 0.7, r.y + fs * 1.1, fs, K.ink, "left", 700);
    ctx.fillStyle = rgba(K.ok, 0.13); ctx.fillRect(px, Y(130), pw, Y(lo) - Y(130));
    ctx.strokeStyle = "#e6eaf2"; ctx.lineWidth = 1;
    [120, 140, 160, 180].forEach((v) => { ctx.beginPath(); ctx.moveTo(px, Y(v)); ctx.lineTo(px + pw, Y(v)); ctx.stroke(); txt(String(v), px - fs * 0.4, Y(v), fs * 0.85, K.soft, "right", 500); });
    ctx.save(); ctx.setLineDash([5, 4]); ctx.strokeStyle = K.ok; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.moveTo(px, Y(130)); ctx.lineTo(px + pw, Y(130)); ctx.stroke(); ctx.restore();
    label("目标 <130", px + pw - 4, Y(130) + fs * 0.85, fs * 0.9, "#23705a", "right", 700);
    ctx.strokeStyle = "#aab5cc"; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py + ph); ctx.lineTo(px + pw, py + ph); ctx.stroke();
    txt(mode === "stop" ? "时间 →" : "每天固定时间吃药 →", px + pw, py + ph + fs * 0.9, fs * 0.85, K.soft, "right", 500);
    // 曲线
    ctx.save(); ctx.beginPath(); ctx.rect(px, r.y, pw * reveal + 2, r.h); ctx.clip();
    ctx.strokeStyle = "#2f3a55"; ctx.lineWidth = Math.max(1.6, H * 0.0045); ctx.lineJoin = "round"; ctx.beginPath();
    for (let k = 0; k <= 200; k++) { const t = k / 200, x = X(t), y = Y(sysAt(mode, t)); if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    const hv = sysAt(mode, reveal), hx = X(reveal), hy = Y(hv);
    ctx.beginPath(); ctx.arc(hx, hy, Math.max(3, fs * 0.28), 0, TAU); ctx.fillStyle = hv > 140 ? K.bad : K.ok; ctx.fill(); ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.5; ctx.stroke();
    const out = { X, Y, px, py, pw, ph, head: [hx, hy] };
    if (mode === "stop") {
      const sx = X(STOP);
      ctx.save(); ctx.setLineDash([5, 4]); ctx.strokeStyle = K.bad; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(sx, py); ctx.lineTo(sx, py + ph); ctx.stroke(); ctx.restore();
      const ir = Math.max(8, fs * 0.8);
      comboCap(sx, py + ph - ir * 1.4, ir * 0.9, -0.3, "bp_arb", "bp_ccb");
      noSign(sx + ir * 1.2, py + ph - ir * 2.1, ir * 0.55, 1);
      label(n ? "吃药" : "按时吃药", (px + sx) / 2, py + ph * 0.3, fs, "#23705a", "center", 700);
      // 找最高点给标注
      let best = STOP + 0.05;
      for (let t = STOP + 0.05; t <= reveal; t += 0.005) if (sysAt(mode, t) > sysAt(mode, best)) best = t;
      out.stop = [sx, py + ph - ir * 1.4];
      out.peak = reveal > STOP + 0.15 ? [X(best), Y(sysAt(mode, best))] : null;
    }
    return out;
  }
  function organRow(r, T, vertical) {
    const items = [["脑", "中风"], ["心", "心梗、心衰"], ["肾", "肾功能下降"]];
    const fs = SF();
    items.forEach((it, i) => {
      const a = clamp((T - 4.5 - i * 0.9) / 0.6, 0, 1);
      let cx, cy, s;
      if (vertical) { const rh = r.h / 3; s = Math.min(rh * 0.3, r.w * 0.13); cx = r.x + r.w * 0.22; cy = r.y + rh * (i + 0.5); }
      else { const cw = r.w / 3; s = Math.min(cw * 0.22, r.h * 0.26); cx = r.x + cw * (i + 0.5); cy = r.y + r.h * 0.4; }
      const pulse = 0.6 + 0.4 * Math.sin(time * 3 + i);
      if (a > 0.02) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, s * 1.7);
        g.addColorStop(0, rgba(K.fire, 0.35 * a * pulse)); g.addColorStop(1, rgba(K.fire, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, s * 1.7, 0, TAU); ctx.fill();
      }
      ctx.save(); ctx.globalAlpha *= 0.45 + 0.55 * a;
      if (i === 0) { const b = TB.brainBox({ x: cx - s * 1.25, y: cy - s * 1.05, w: s * 2.5, h: s * 2.1 }); TB.brain(b); }
      else if (i === 1) heartIcon(cx, cy + s * 0.1, s * 0.85, 1);
      else kidneyIcon(cx + s * 0.15, cy, s * 0.85, 0, 0);
      ctx.restore();
      if (a > 0.02) { ctx.save(); ctx.globalAlpha *= a; alertIcon(cx + s * 1.0, cy - s * 0.85, Math.max(9, s * 0.45)); ctx.restore(); }
      if (vertical) {
        txt(it[0] + "：" + it[1], cx + s * 1.8, cy, fs * 1.05, a > 0.5 ? "#9c4a1a" : K.soft, "left", 700);
      } else {
        txt(it[1], cx, cy + s * 1.35 + fs * 0.3, fs * (nar() ? 0.9 : 1), a > 0.5 ? "#9c4a1a" : K.soft, "center", 700);
      }
    });
  }
  function scene6(A, Lg, live, T) {
    const n = nar(), on = onOf(6, live), reveal = revealOf(T);
    let C, O;
    if (n) { C = { x: A.x, y: A.y + 2, w: A.w, h: A.h * 0.58 }; O = { x: A.x, y: A.y + A.h * 0.6, w: A.w, h: A.h * 0.4 }; }
    else { C = { x: A.x, y: A.y + 2, w: A.w * 0.56, h: A.h - 4 }; O = { x: A.x + A.w * 0.6, y: A.y + 2, w: A.w * 0.4, h: A.h - Lg.bh - 24 }; }
    const ch = bpChart(C, "stop", reveal);
    if (!n) { card(O, "长期忽高忽低，会伤到"); organRow({ x: O.x, y: O.y + SF() * 2.4, w: O.w, h: O.h - SF() * 2.6 }, T, true); }
    else organRow(O, T, false);
    tag("stop", on("stop") && reveal > STOP + 0.02, ch.stop[0], ch.stop[1] - 6, ch.stop[0] + (n ? C.w * 0.12 : C.w * 0.05), C.y + C.h * (n ? 0.3 : 0.42), "自己停药", K.bad);
    tag("swing", on("swing") && !!ch.peak, ch.peak ? ch.peak[0] : 0, ch.peak ? ch.peak[1] : 0, n ? C.x + C.w * 0.6 : C.x + C.w * 0.66, n ? C.y + LF() * 0.9 : C.y + LF() * 2.8, "血压反弹、忽高忽低", "#b0603a");
  }

  // =================== 第 8 幕：怎么吃 ===================
  function monitor(cx, cy, s) {
    const w = s * 2.2, h = s * 1.5, x = cx - w / 2, y = cy - h / 2;
    // 袖带
    ctx.strokeStyle = "#8f9ab3"; ctx.lineWidth = Math.max(1.5, s * 0.05); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x + w * 0.1, y + h * 0.5); ctx.bezierCurveTo(x - w * 0.25, y + h * 0.6, x - w * 0.3, y + h * 1.25, x - w * 0.05, y + h * 1.25); ctx.stroke();
    ctx.beginPath(); ctx.roundRect(x - w * 0.28, y + h * 1.1, w * 0.46, h * 0.36, h * 0.1); ctx.fillStyle = glossy(x - w * 0.05, y + h * 1.2, w * 0.3, "#dfe6f4", "#9fb0cf"); ctx.fill(); ctx.strokeStyle = "#5f6b82"; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.roundRect(x, y, w, h, s * 0.2); ctx.fillStyle = glossy(x + w * 0.3, y + h * 0.3, w * 0.8, "#ffffff", "#dde3ee"); ctx.fill(); ctx.strokeStyle = "#8f9ab3"; ctx.lineWidth = 1.2; ctx.stroke();
    const sx = x + w * 0.1, sy = y + h * 0.12, sw = w * 0.8, sh = h * 0.56;
    ctx.fillStyle = "#e9fbf4"; ctx.beginPath(); ctx.roundRect(sx, sy, sw, sh, s * 0.08); ctx.fill(); ctx.strokeStyle = "#9cc9b6"; ctx.stroke();
    txt(Math.round(bpS) + "/" + Math.round(bpD), sx + sw / 2, sy + sh * 0.45, sh * 0.44, "#23705a", "center", 700);
    txt("mmHg", sx + sw * 0.5, sy + sh * 0.82, sh * 0.2, "#23705a", "center", 500);
    ctx.beginPath(); ctx.arc(x + w * 0.5, y + h * 0.84, h * 0.08, 0, TAU); ctx.fillStyle = K.ok; ctx.fill();
    return { x: cx, y: cy, screen: [sx + sw * 0.2, sy + sh], bottom: y + h };
  }
  function pillBox(r, T) {
    const days = ["一", "二", "三", "四", "五", "六", "日"], cw = r.w / 7, fs = Math.min(SF() * 0.95, cw * 0.5);
    const today = Math.floor(T / 1.2) % 7;
    const out = {};
    days.forEach((dname, k) => {
      const x = r.x + k * cw + 2, w = cw - 4, y = r.y + fs * 1.4, h = r.h - fs * 1.4;
      txt(dname, x + w / 2, r.y + fs * 0.65, fs, K.soft, "center", 500);
      ctx.beginPath(); ctx.roundRect(x, y, w, h, Math.min(w, h) * 0.18);
      ctx.fillStyle = k === today ? "#eaf7f1" : "#ffffff"; ctx.fill(); ctx.strokeStyle = k === today ? K.ok : "#b9c3d6"; ctx.lineWidth = k === today ? 1.8 : 1.2; ctx.stroke();
      const taken = k < today;
      const cr = Math.min(w * 0.3, h * 0.28);
      if (!taken) comboCap(x + w / 2, y + h / 2, cr, -0.5, "bp_arb", "bp_ccb");
      else checkIcon(x + w / 2, y + h / 2, cr * 1.4, 1);
      if (k === 3) out.cap = [x + w / 2, y + h / 2];
    });
    return out;
  }
  function scene7(A, Lg, live, T) {
    const n = nar(), on = onOf(7, live);
    const Lw = n ? A.w * 0.44 : A.w * 0.42;
    // 平稳的绿光
    const g = ctx.createRadialGradient(A.x + Lw / 2, A.y + A.h * 0.4, 0, A.x + Lw / 2, A.y + A.h * 0.4, Lw * 0.7);
    g.addColorStop(0, rgba(K.calm, 0.12)); g.addColorStop(1, rgba(K.calm, 0));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(A.x + Lw / 2, A.y + A.h * 0.4, Lw * 0.7, 0, TAU); ctx.fill();
    const s = n ? Math.min(Lw * 0.26, A.h * 0.2) : Math.min(Lw * 0.2, A.h * 0.17);
    const mo = monitor(A.x + Lw * 0.58, A.y + A.h * (n ? 0.26 : 0.27), s);
    const bh = n ? A.h * 0.3 : A.h * 0.24;
    const pb = pillBox({ x: A.x + Lw * 0.04, y: A.y + A.h * (n ? 0.62 : 0.64), w: Lw * 0.92, h: bh }, T);
    label(n ? "每天固定时间吃" : "按星期分好，每天固定时间吃（示意）", A.x + Lw * 0.5, A.y + A.h * (n ? 0.62 : 0.64) + bh + SF() * 0.9, SF() * 0.92, K.soft, "center", 500);
    const r = n ? { x: A.x + Lw + 4, y: A.y + 2, w: A.w - Lw - 4, h: A.h - 4 } : { x: A.x + A.w * 0.46, y: A.y + 2, w: A.w * 0.54, h: A.h - Lg.bh - 24 };
    const ico = (fn) => (x, y, rr, show) => { fn(x, y, rr); checkIcon(x + rr * 0.75, y + rr * 0.6, rr * 0.7, show); };
    listCard(r, n ? "这样吃药" : "用药原则", [
      { icon: ico((x, y, rr) => comboCap(x - rr * 0.1, y - rr * 0.1, rr * 0.55, -0.5, "bp_arb", "bp_ccb")), t: n ? "长期规律吃" : "多数人需要长期规律服药" },
      { icon: ico((x, y, rr) => { mol("bp_arb", x - rr * 0.35, y - rr * 0.3, rr * 0.4, 1, -0.4); mol("bp_ccb", x + rr * 0.2, y + rr * 0.1, rr * 0.4, 1, -0.4); }), t: n ? "联合 / 单片复方" : "小剂量联合，或单片复方" },
      { icon: ico((x, y, rr) => { ctx.beginPath(); ctx.arc(x - rr * 0.1, y - rr * 0.1, rr * 0.6, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = K.soft; ctx.lineWidth = Math.max(1, rr * 0.1); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x - rr * 0.1, y - rr * 0.1); ctx.lineTo(x - rr * 0.1, y - rr * 0.5); ctx.moveTo(x - rr * 0.1, y - rr * 0.1); ctx.lineTo(x + rr * 0.2, y + rr * 0.05); ctx.stroke(); }), t: n ? "每天固定时间" : "每天固定时间吃" },
      { icon: ico((x, y, rr) => { ctx.beginPath(); ctx.roundRect(x - rr * 0.65, y - rr * 0.55, rr * 1.1, rr * 0.8, rr * 0.15); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = K.soft; ctx.lineWidth = Math.max(1, rr * 0.08); ctx.stroke(); ctx.fillStyle = "#e9fbf4"; ctx.fillRect(x - rr * 0.5, y - rr * 0.42, rr * 0.8, rr * 0.36); }), t: n ? "在家量血压" : "在家定期量血压、记下来" },
      { icon: (x, y, rr) => { comboCap(x, y, rr * 0.55, -0.5, "bp_arb", "bp_ccb"); noSign(x + rr * 0.45, y + rr * 0.35, rr * 0.38, 1); }, t: n ? "不自己停药换药" : "不自己停药、换药" },
    ], T);
    tag("home", on("home") && T > 1, mo.screen[0], mo.screen[1], A.x + Lw * 0.5, n ? A.y + A.h * 0.52 : A.y + A.h * 0.5, n && W < 520 ? "目标听医生的" : "多数人目标 <130/80", K.ok);
    tag("combo", on("combo") && !n && T > 2, pb.cap[0], pb.cap[1], A.x + Lw * 0.5, A.y + A.h * 0.99, "单片复方：一片含两种药", DC("bp_arb")[1]);
  }

  function drawScene(i, live, T) {
    const L = areaFor(i), A = L.A, Lg = L.Lg;
    [scene0, scene1, scene2, scene3, scene4, scene5, scene6, scene7][i](A, Lg, live, T);
    TB.legend(Lg);
  }

  function pillW(label2, value) {
    const fs = Math.max(12, W / 60) * Anima.UI;
    font(fs, 500); const a = ctx.measureText(label2).width;
    font(fs * 1.4, 700); const b = ctx.measureText(value).width;
    return a + b + 34;
  }
  function hud() {
    const s = Math.round(bpS), dd = Math.round(bpD), v = s + "/" + dd;
    const col = s >= 140 ? K.bad : s >= 130 ? K.warn : K.ok;
    const lab = nar() ? "血压" : "血压 mmHg";
    pill(14, 12, lab, v, col, false);
    const p = CH[cur].pill;
    if (p && 14 + pillW(lab, "150/95") + 10 + pillW(p[0], p[1]) + 14 <= W) pill(W - 14, 12, p[0], p[1], p[2] === "ok" ? K.ok : p[2] === "warn" ? K.warn : K.bad, true);
  }

  function draw() {
    TB.background();
    const f = clamp(lt / 0.7, 0, 1);
    if (f < 1 && prevCur >= 0 && prevCur !== cur) {
      ctx.save(); ctx.globalAlpha = 1 - f; drawScene(prevCur, false, prevLt); ctx.restore();
    }
    ctx.save(); ctx.globalAlpha = prevCur >= 0 ? f : 1; drawScene(cur, true, lt); ctx.restore();
    ctx.globalAlpha = 1;
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#d9603b",
    titleCard: { lines: ["降压药，", "是怎么起作用的？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
