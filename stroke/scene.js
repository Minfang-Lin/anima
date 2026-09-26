Anima.register("stroke", {
    "title": "大脑的抢救时间",
    "tag": "大脑小剧场",
    "headline": "中风，每一分钟都【要紧】",
    "lede": "大脑里的神经元像一颗颗会发光的小星星，全靠脑血管送氧气。血管一堵或一破，它们就一片片熄灭。认出中风、马上打 120，就是在和时间抢大脑。",
    "summary": "缺血性和出血性中风是怎么回事，怎样用“中风 120”认出中风，以及溶栓、取栓的黄金时间。",
    "footer": "出现中风症状请立即拨打 120；平时可到神经内科就诊。",
    "canvasLabel": "卡通脑组织里神经元和脑血管的动画",
    "disease": "脑卒中（中风）",
    "organs": ["brain"],
    "categories": ["cardio"],
    "color": "#e0609a"
  }, () => {
  // clock：左上角“发病时间”，数字会平滑走动，字符串直接显示
  // ischT / ischR：缺血熄灭范围的目标和每秒推进速度（在一幕之内慢慢扩大）
  const CH = [
    { title: "大脑离不开血", clot: 0, bleed: 0, card: 0, heal: 0, mins: 0, clock: "未发病", ischT: 0, ischR: 0.5,
      pill: ["神经元", "正常", "ok"],
      text: "大脑里大约有 860 亿个神经元，像一颗颗会发光的小星星，手拉着手传递信号。它们自己几乎不储存能量，全靠脑血管源源不断地送来氧气和葡萄糖。血流一旦停下来，神经元很快就会受伤。",
      fact: "大脑只占体重的 2% 左右，却要用掉全身约 20% 的氧气",
      labels: ["neuron", "vessel"] },
    { title: "缺血性中风：血管堵了", clot: 1, bleed: 0, card: 0, heal: 0, mins: 5, clock: 5, ischT: 0.2, ischR: 0.03,
      pill: ["神经元", "受损中", "warn"],
      text: "如果脑血管里长了斑块，或者心脏里掉下一块血栓，顺着血流卡在脑血管里，路就被堵死了。下游的神经元一下子没了氧气，这就是缺血性中风，也叫脑梗死。它是最常见的一种，大多数中风都是这一型。",
      fact: "缺血性中风约占全部中风的七到八成",
      labels: ["clot", "down"] },
    { title: "时间就是大脑", clot: 1, bleed: 0, card: 0, heal: 0, mins: 60, clock: 60, ischT: 0.9, ischR: 0.065,
      pill: ["神经元", "受损中", "bad"],
      text: "血管堵住以后，缺血最重的中心区，神经元最先熄灭；外面一圈还在苦苦撑着，叫“半暗带”，如果能尽快恢复血流，还有机会救回来。可每拖一分钟，熄灭的范围就扩大一圈。所以说，时间就是大脑。",
      fact: "大血管堵塞时，平均每分钟约有 190 万个神经元死亡",
      labels: ["core", "penumbra"] },
    { title: "出血性中风：血管破了", clot: 0, bleed: 1, card: 0, heal: 0, mins: 0, clock: "刚刚", ischT: 0, ischR: 0.6,
      pill: ["神经元", "被挤压", "bad"],
      text: "还有一种中风，是脑血管自己破了。长期血压高，小血管壁被冲得又薄又脆，某一天突然破裂，血渗进脑组织里，形成血肿，把周围的神经元挤得喘不过气。它常在情绪激动、用力的时候发生，来得又急又重。",
      fact: "长期高血压是脑出血最重要的危险因素",
      labels: ["rupture", "press"] },
    { title: "认出中风：中风 120", clot: 1, bleed: 0, card: 1, heal: 0, mins: 0, clock: "马上打 120", ischT: 0.35, ischR: 0.05,
      pill: null,
      text: "怎么快速认出中风？记住“中风 120”：“1”是看一张脸，口角有没有歪斜；“2”是查两只手臂，平举时有没有一侧无力、往下掉；“0”是聆听说话，是不是口齿不清。只要有一项，就立刻拨打 120，并记下发病时间。",
      fact: "不要等症状自己好转，也不要自己给病人喂药喂水",
      labels: ["clock"] },
    { title: "抢救的黄金时间", clot: 0, bleed: 0, card: 0, heal: 1, mins: 0, clock: "已送医", ischT: 0.22, ischR: 0.05,
      pill: ["神经元", "好转中", "ok"],
      text: "到了医院，医生会先做头颅 CT 等检查，分清是堵了还是破了。缺血性中风在发病 4.5 小时内可以静脉溶栓，大血管堵住的还可以把血栓取出来，越早效果越好。平时管好血压、血糖、血脂，不吸烟，有房颤要规范治疗。",
      fact: "静脉溶栓一般要在发病 4.5 小时内，越早救回的神经元越多",
      labels: ["open", "saved"] },
  ];
  const DUR = 12;

  const C = Object.assign({}, Anima.C, {
    fold: "#f9cfca", wall: "#ff8f8f", lumen: "#ffd3d0", rbc: "#f0525e", rbcDim: "#b98a90",
    clot: "#9e2f45", clotHi: "#c8566a", o2: "#6ab4ff", star: "#ffd95a", starDead: "#c7bdc6",
    glow: "255,214,90", blood: "#c93a4f", bloodHi: "#e36374", heartPink: "#ff9fb0", accent: "#e0609a",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { clot: 0, bleed: 0, card: 0, heal: 0, mins: 0 };
  let isch = 0, lastCur = -1, chTime = 0;

  // ---------- 几何 ----------
  const vY = (x) => H * 0.27 + Math.sin(x / W * Math.PI * 2 + 0.6) * H * 0.018;
  const VR = () => H * 0.045;
  const XC = () => W * 0.36;            // 血栓的位置
  const XR = () => W * 0.72;            // 出血破口的位置
  const branchXs = () => [0.13, 0.31, 0.5, 0.68, 0.87].map((f) => f * W);

  function neurons() {
    const n = Math.max(5, Math.round(W / (H * 0.2)));
    const ys = [0.47, 0.66, 0.85];
    const list = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < n; c++) {
      const id = r * 50 + c;
      const x = (c + 0.5) * W / n + (rnd(id + 7) - 0.5) * W / n * 0.35;
      const y = H * ys[r] + (rnd(id + 17) - 0.5) * H * 0.06;
      list.push({ r, c, id, x, y, x0: x, y0: y, dead: 0, weak: 0, press: 0 });
    }
    // 下游的神经元按离缺血中心的远近排队，越近越先熄灭
    const xc = XC() + H * 0.06, core = { x: W * 0.64, y: H * 0.64 };
    const down = list.filter((p) => p.x > xc).sort((a, b) => Math.hypot(a.x - core.x, a.y - core.y) - Math.hypot(b.x - core.x, b.y - core.y));
    const m = down.length;
    down.forEach((p, i) => {
      p.down = true;
      p.dead = clamp(isch * m - i, 0, 1);
      p.weak = clamp((isch * m + m * 0.35 - i) / (m * 0.35), 0, 1) * (1 - p.dead) * clamp(isch * 6, 0, 1) * (1 - S.heal);
    });
    // 出血：血肿把周围的神经元挤开
    if (S.bleed > 0.02) {
      const b = blob();
      for (const p of list) {
        const d = Math.hypot(p.x - b.x, p.y - b.y) || 1, need = b.r + H * 0.06;
        if (d < need + H * 0.08) {
          const push = Math.min(H * 0.035, Math.max(0, need - d));
          p.x += (p.x - b.x) / d * push; p.y += (p.y - b.y) / d * push * 0.6;
          p.press = clamp((need + H * 0.08 - d) / (H * 0.12), 0, 1) * S.bleed;
        }
      }
    }
    return { list, n };
  }
  const blob = () => {
    const x = XR(), r = H * 0.13 * S.bleed;
    return { x, y: vY(x) + VR() + r * 0.85 + H * 0.02, r };
  };

  // ---------- 粒子 ----------
  const cells = Array.from({ length: 16 }, (_, i) => ({ x: rnd(i + 40) * 1.1 - 0.05, yo: rnd(i + 80) - 0.5, ph: rnd(i + 120) * 6 }));
  const hearts = Array.from({ length: 6 }, (_, i) => ({ x: 0.08 + i * 0.17 + rnd(i + 900) * 0.05, y: rnd(i + 950) }));

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; chTime = 0; }
    chTime += dt;
    const c = CH[cur];
    const step = c.ischR * dt;
    isch = isch < c.ischT ? Math.min(c.ischT, isch + step) : Math.max(c.ischT, isch - step * 1.5);
    const xcF = XC() / (W || 1), flowDown = 1 - S.clot;
    for (const p of cells) {
      const blocked = S.clot > 0.5;
      let v = 0.11;
      if (p.x > xcF) v *= clamp(flowDown * 1.4, 0, 1);
      p.x += v * dt;
      if (blocked && p.x < xcF && p.x > xcF - 0.02) p.x = -0.05 - rnd(p.ph) * 0.05; // 被血栓挡住，从上游重新流过来
      if (p.x > 1.05) p.x = -0.05;
    }
  }

  // ---------- 画笔 ----------
  function starPath(x, y, s, rot) {
    ctx.beginPath();
    for (let k = 0; k < 5; k++) {
      const a = rot + k * Math.PI * 2 / 5 - Math.PI / 2, b = a + Math.PI / 5;
      const ox = x + Math.cos(a) * s, oy = y + Math.sin(a) * s;
      const ix = x + Math.cos(b) * s * 0.58, iy = y + Math.sin(b) * s * 0.58;
      if (k === 0) ctx.moveTo(ox, oy); else ctx.lineTo(ox, oy);
      ctx.quadraticCurveTo(x + Math.cos(b) * s * 0.72, y + Math.sin(b) * s * 0.72, ix, iy);
      const na = a + Math.PI * 2 / 5;
      ctx.quadraticCurveTo(x + Math.cos(na - Math.PI / 10) * s * 0.8, y + Math.sin(na - Math.PI / 10) * s * 0.8, x + Math.cos(na) * s, y + Math.sin(na) * s);
    }
    ctx.closePath();
  }

  function drawNeuron(p, s) {
    const alive = 1 - p.dead;
    const tw = 1 + 0.06 * Math.sin(time * 2.4 + p.id) * alive;
    const x = p.x, y = p.y + Math.sin(time * 1.5 + p.id * 0.7) * s * 0.08 * alive;
    const bright = alive * (1 - 0.45 * p.weak) * (1 - 0.35 * p.press);
    if (bright > 0.05) {
      const gr = ctx.createRadialGradient(x, y, s * 0.3, x, y, s * 2.1);
      gr.addColorStop(0, `rgba(${C.glow},${0.55 * bright})`); gr.addColorStop(1, `rgba(${C.glow},0)`);
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(x, y, s * 2.1, 0, 6.3); ctx.fill();
    }
    starPath(x, y, s * tw, Math.sin(time * 0.8 + p.id) * 0.08 * alive);
    ctx.fillStyle = mix(C.starDead, C.star, clamp(bright * 1.15, 0, 1)); ctx.fill(); outline(2); ctx.stroke();
    const fs = s * 0.62, fy = y + s * 0.08;
    if (p.dead > 0.5) {
      // 熄灭：闭着眼睛
      outline(Math.max(1.2, fs * 0.09)); ctx.beginPath();
      ctx.moveTo(x - fs * 0.45, fy - fs * 0.08); ctx.lineTo(x - fs * 0.2, fy - fs * 0.08);
      ctx.moveTo(x + fs * 0.2, fy - fs * 0.08); ctx.lineTo(x + fs * 0.45, fy - fs * 0.08);
      ctx.moveTo(x - fs * 0.15, fy + fs * 0.3); ctx.lineTo(x + fs * 0.15, fy + fs * 0.3);
      ctx.stroke();
    } else {
      const mood = 1 - 1.8 * Math.max(p.weak, p.press);
      face(x, fy, fs, clamp(mood, -1, 1), bright > 0.4);
      if (p.weak > 0.4 || p.press > 0.4) sweat(x + s * 0.75, y - s * 0.75, s * 0.45);
    }
  }

  function vesselPath(off) {
    ctx.beginPath();
    for (let x = -10; x <= W + 10; x += 10) ctx.lineTo(x, vY(x) + off);
  }

  function scene() {
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    // 大脑的褶皱（脑回）
    ctx.strokeStyle = C.fold; ctx.lineWidth = H * 0.022; ctx.lineCap = "round";
    for (let i = 0; i < 7; i++) {
      const y0 = H * (0.08 + i * 0.15), amp = H * 0.035;
      ctx.beginPath();
      for (let x = -20; x <= W + 20; x += 12) ctx.lineTo(x, y0 + Math.sin(x / (H * 0.09) + i * 1.7) * amp + Math.sin(x / (H * 0.23) + i) * amp * 0.8);
      ctx.stroke();
    }
    dots(26, C.dot);

    const vr = VR(), xc = XC(), flowDown = 1 - S.clot;
    const { list, n } = neurons();
    const s = H * 0.042;

    // 小分支血管：伸进神经元中间
    const bxs = branchXs();
    const branchPts = (bx, t) => ({ x: bx + Math.sin(t * 5 + bx) * H * 0.03, y: vY(bx) + vr * 0.6 + t * (H * 0.96 - vY(bx)) });
    for (const bx of bxs) {
      const blocked = bx > xc ? S.clot : 0;
      ctx.lineCap = "round";
      for (const [w, col] of [[H * 0.034 + 5, C.ink], [H * 0.034, mix(C.lumen, "#e8d6d8", blocked)]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath();
        for (let t = 0; t <= 1.001; t += 0.05) { const q = branchPts(bx, t); ctx.lineTo(q.x, q.y); }
        ctx.stroke();
      }
      const flow = bx > xc ? flowDown : 1;
      if (flow > 0.05) for (let j = 0; j < 4; j++) {
        const t = (time * 0.18 + j / 4 + bx * 0.001) % 1, q = branchPts(bx, t);
        ctx.save(); ctx.globalAlpha *= flow;
        ctx.beginPath(); ctx.arc(q.x, q.y, H * 0.011, 0, 6.3); ctx.fillStyle = C.o2; ctx.fill(); outline(1.2); ctx.stroke();
        ctx.restore();
      }
    }

    // 神经元之间的连线和传递的信号
    const at = (r, c) => list[r * n + c];
    const links = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < n; c++) {
      if (c < n - 1) links.push([at(r, c), at(r, c + 1)]);
      if (r < 2) links.push([at(r, c), at(r + 1, c)]);
      if (r < 2 && c < n - 1 && (r + c) % 2 === 0) links.push([at(r, c), at(r + 1, c + 1)]);
    }
    links.forEach(([a, b], i) => {
      const live = Math.min(1 - a.dead, 1 - b.dead);
      ctx.strokeStyle = mix("#c9b7bd", "#f0a25a", live); ctx.lineWidth = Math.max(2, H * 0.007);
      ctx.setLineDash(live > 0.5 ? [] : [5, 6]);
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.quadraticCurveTo((a.x + b.x) / 2 + (rnd(i) - 0.5) * H * 0.05, (a.y + b.y) / 2 + (rnd(i + 3) - 0.5) * H * 0.05, b.x, b.y); ctx.stroke();
      ctx.setLineDash([]);
      if (live > 0.6 && i % 2 === 0) {
        const t = (time * 0.5 + rnd(i + 11)) % 1;
        const mx = (a.x + b.x) / 2 + (rnd(i) - 0.5) * H * 0.05, my = (a.y + b.y) / 2 + (rnd(i + 3) - 0.5) * H * 0.05;
        const px = (1 - t) ** 2 * a.x + 2 * (1 - t) * t * mx + t * t * b.x, py = (1 - t) ** 2 * a.y + 2 * (1 - t) * t * my + t * t * b.y;
        ctx.save(); ctx.globalAlpha *= live * Math.sin(t * Math.PI);
        ctx.beginPath(); ctx.arc(px, py, H * 0.008, 0, 6.3); ctx.fillStyle = "#fff6c2"; ctx.fill();
        ctx.restore();
      }
    });

    // 出血：血肿
    let bl = null;
    if (S.bleed > 0.02) {
      bl = blob();
      ctx.save();
      ctx.beginPath();
      for (let k = 0; k <= 40; k++) {
        const a = k / 40 * Math.PI * 2, rr = bl.r * (1 + 0.08 * Math.sin(a * 5 + time * 1.5));
        ctx.lineTo(bl.x + Math.cos(a) * rr * 1.15, bl.y + Math.sin(a) * rr * 0.9);
      }
      ctx.closePath(); ctx.fillStyle = C.blood; ctx.fill(); outline(2.5); ctx.stroke();
      ctx.fillStyle = C.bloodHi; ctx.beginPath(); ctx.ellipse(bl.x - bl.r * 0.35, bl.y - bl.r * 0.35, bl.r * 0.3, bl.r * 0.15, -0.5, 0, 6.3); ctx.fill();
      ctx.restore();
    }

    for (const p of list) drawNeuron(p, s);

    // 主血管
    ctx.lineCap = "round";
    for (const [w, col] of [[vr * 2 + 6, C.ink], [vr * 2, C.wall], [vr * 1.3, C.lumen]]) {
      vesselPath(0); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.stroke();
    }
    // 下游缺血：管腔变暗
    if (S.clot > 0.02) {
      ctx.save(); ctx.beginPath(); ctx.rect(xc, 0, W - xc, H); ctx.clip();
      ctx.globalAlpha *= S.clot * 0.55; vesselPath(0); ctx.strokeStyle = "#d9c8cc"; ctx.lineWidth = vr * 1.3; ctx.stroke();
      ctx.restore();
    }
    // 红细胞
    for (const p of cells) {
      const x = p.x * W, y = vY(x) + p.yo * vr * 0.8;
      let a = 1;
      if (S.clot > 0.5 && x < xc) a = clamp((xc - x) / (H * 0.08), 0, 1);
      const dim = x > xc ? S.clot : 0;
      ctx.save(); ctx.globalAlpha *= a;
      ctx.beginPath(); ctx.ellipse(x, y, vr * 0.5, vr * 0.36, Math.sin(time + p.ph) * 0.4, 0, 6.3);
      ctx.fillStyle = mix(C.rbc, C.rbcDim, dim); ctx.fill(); outline(1.6); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x, y, vr * 0.22, vr * 0.13, Math.sin(time + p.ph) * 0.4, 0, 6.3); ctx.fillStyle = "rgba(0,0,0,0.12)"; ctx.fill();
      ctx.restore();
    }

    // 血栓
    let clotAt = null;
    if (S.clot > 0.02) {
      const cy = vY(xc), r = vr * 1.05 * clamp(S.clot * 1.2, 0, 1);
      clotAt = { x: xc, y: cy };
      ctx.save();
      ctx.beginPath();
      for (let k = 0; k <= 24; k++) {
        const a = k / 24 * Math.PI * 2, rr = r * (1 + 0.15 * Math.sin(a * 4 + 1));
        ctx.lineTo(xc + Math.cos(a) * rr * 0.9, cy + Math.sin(a) * rr * 0.98);
      }
      ctx.closePath(); ctx.fillStyle = C.clot; ctx.fill(); outline(2.2); ctx.stroke();
      ctx.strokeStyle = C.clotHi; ctx.lineWidth = 2;
      for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.moveTo(xc - r * 0.6, cy - r * 0.5 + k * r * 0.33); ctx.lineTo(xc + r * 0.6, cy - r * 0.3 + k * r * 0.3); ctx.stroke(); }
      ctx.restore();
    }
    // 溶栓：血栓碎成小块被冲走
    if (S.heal > 0.02 && S.clot < 0.9) {
      for (let k = 0; k < 5; k++) {
        const t = (time * 0.25 + k / 5) % 1, x = xc + t * W * 0.4, y = vY(x) + Math.sin(k * 2 + time) * vr * 0.4;
        ctx.save(); ctx.globalAlpha *= S.heal * (1 - t);
        ctx.beginPath(); ctx.arc(x, y, vr * 0.18 * (1 - t * 0.5), 0, 6.3); ctx.fillStyle = C.clotHi; ctx.fill(); outline(1.2); ctx.stroke();
        ctx.restore();
      }
    }

    // 出血：血管破口和往外渗的血滴
    if (bl) {
      const x = XR(), y = vY(x) + vr;
      ctx.save(); ctx.globalAlpha *= S.bleed;
      outline(2.5); ctx.beginPath();
      ctx.moveTo(x - vr * 0.8, y - vr * 0.4); ctx.lineTo(x - vr * 0.3, y - vr * 0.05); ctx.lineTo(x, y - vr * 0.5); ctx.lineTo(x + vr * 0.35, y); ctx.lineTo(x + vr * 0.8, y - vr * 0.35);
      ctx.stroke();
      for (let k = 0; k < 3; k++) {
        const t = (time * 0.6 + k / 3) % 1, dy = t * (bl.y - bl.r * 0.6 - y);
        ctx.fillStyle = C.blood; ctx.beginPath(); ctx.ellipse(x + (k - 1) * vr * 0.4, y + dy, vr * 0.18, vr * 0.26, 0, 0, 6.3); ctx.fill(); outline(1.2); ctx.stroke();
      }
      ctx.restore();
    }

    let card = null;
    if (S.card > 0.02) card = drawCard();

    if (S.heal > 0.02) {
      for (const [i, h] of hearts.entries()) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.85;
        heart(x, y, Math.max(7, H * 0.02), i % 2 ? C.heartPink : C.star);
        ctx.restore();
      }
    }
    return { list, clotAt, bl, card, s };
  }

  // “中风 120”小卡片
  function drawCard() {
    const narrow = W < 600;
    const cw = narrow ? W * 0.6 : Math.min(W * 0.4, H * 0.8), ch = narrow ? H * 0.64 : H * 0.62;
    const x = W - cw - 12, y = H - ch - 12;
    ctx.save(); ctx.globalAlpha *= S.card;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, cw, ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(x, y, cw, ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const fs = Math.min(ch / 13, cw / 11);
    ctx.textBaseline = "middle"; ctx.fillStyle = C.ink; ctx.font = `${fs * 1.15}px ${Anima.ROUND}`;
    ctx.fillText("中风 120", x + fs * 0.8, y + fs * 1.1);
    const rows = [["1", "看一张脸", "口角歪斜"], ["2", "查两只手臂", "一侧无力"], ["0", "聆听说话", "口齿不清"]];
    const rowH = (ch - fs * 4.4) / 3;
    rows.forEach(([num, a, b], i) => {
      const cy = y + fs * 2.3 + rowH * (i + 0.5), bx = x + fs * 1.2;
      ctx.beginPath(); ctx.arc(bx, cy, fs * 0.72, 0, 6.3); ctx.fillStyle = C.accent; ctx.fill(); outline(2); ctx.stroke();
      ctx.fillStyle = C.paper; ctx.font = `${fs}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.fillText(num, bx, cy + 1); ctx.textAlign = "left";
      ctx.fillStyle = C.ink; ctx.font = `${fs * 0.92}px ${Anima.ROUND}`; ctx.fillText(a, bx + fs * 1.1, cy - fs * 0.5);
      ctx.fillStyle = C.soft; ctx.font = `${fs * 0.8}px ${Anima.ROUND}`; ctx.fillText(b, bx + fs * 1.1, cy + fs * 0.55);
      icon(i, x + cw - fs * 1.7, cy, fs * 0.95);
    });
    // 底部：马上打 120
    const by = y + ch - fs * 1.6, bw = cw - fs * 1.2, bh = fs * 1.35;
    const pulse = 1 + 0.03 * Math.sin(time * 4);
    ctx.save(); ctx.translate(x + cw / 2, by + bh / 2); ctx.scale(pulse, pulse);
    rrect(-bw / 2, -bh / 2, bw, bh, bh / 2); ctx.fillStyle = "#f25f6b"; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = C.paper; ctx.font = `${fs * 0.9}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.fillText("有一项，马上打 120", 0, 1);
    ctx.restore();
    ctx.textAlign = "left";
    ctx.restore();
    return { x, y, cw, ch };
  }

  function icon(kind, x, y, s) {
    if (kind === 0) {
      // 一边嘴角往下的脸
      ctx.beginPath(); ctx.arc(x, y, s, 0, 6.3); ctx.fillStyle = "#ffe0c8"; ctx.fill(); outline(2); ctx.stroke();
      ctx.fillStyle = C.ink;
      ctx.beginPath(); ctx.arc(x - s * 0.35, y - s * 0.2, s * 0.1, 0, 6.3); ctx.arc(x + s * 0.35, y - s * 0.12, s * 0.1, 0, 6.3); ctx.fill();
      outline(2); ctx.beginPath(); ctx.moveTo(x - s * 0.45, y + s * 0.3); ctx.quadraticCurveTo(x, y + s * 0.45, x + s * 0.45, y + s * 0.6); ctx.stroke();
    } else if (kind === 1) {
      // 两只手臂平举，一只往下掉
      const drop = 0.35 + 0.15 * Math.sin(time * 2);
      ctx.lineCap = "round";
      for (const [ang, col] of [[0, "#ffe0c8"], [drop, "#ffe0c8"]]) {
        const ox = x - s * 1.0, oy = y + (col && ang ? s * 0.35 : -s * 0.35);
        ctx.strokeStyle = C.ink; ctx.lineWidth = s * 0.42 + 4; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + Math.cos(ang) * s * 1.9, oy + Math.sin(ang) * s * 1.9); ctx.stroke();
        ctx.strokeStyle = col; ctx.lineWidth = s * 0.42; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + Math.cos(ang) * s * 1.9, oy + Math.sin(ang) * s * 1.9); ctx.stroke();
        ctx.beginPath(); ctx.arc(ox + Math.cos(ang) * s * 2.05, oy + Math.sin(ang) * s * 2.05, s * 0.3, 0, 6.3); ctx.fillStyle = col; ctx.fill(); outline(2); ctx.stroke();
      }
    } else {
      // 说话气泡，里面是歪歪扭扭的线
      rrect(x - s * 1.1, y - s * 0.75, s * 2.2, s * 1.3, s * 0.5); ctx.fillStyle = "#eaf4ff"; ctx.fill(); outline(2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - s * 0.5, y + s * 0.55); ctx.lineTo(x - s * 0.7, y + s * 0.95); ctx.lineTo(x - s * 0.15, y + s * 0.55); ctx.fillStyle = "#eaf4ff"; ctx.fill(); ctx.stroke();
      outline(2); ctx.beginPath();
      for (let k = 0; k <= 12; k++) ctx.lineTo(x - s * 0.8 + k * s * 0.135, y - s * 0.1 + Math.sin(k * 1.4 + time * 3) * s * 0.18);
      ctx.stroke();
    }
  }

  const PB = () => (Math.max(12, W / 60) * Anima.UI * 1.4 + 14) + 12; // 左上角胶囊的底边
  function hud() {
    const c = CH[cur];
    const txt = typeof c.clock === "number" ? `${Math.round(S.mins)} 分钟` : c.clock;
    const col = cur === 0 ? C.mint : cur === CH.length - 1 ? C.mint : typeof c.clock === "number" && S.mins < 10 ? "#e7a500" : "#f25f6b";
    pill(14, 12, "发病时间", txt, col, false);
    if (!c.pill) return;
    const [label, value, st] = c.pill;
    pill(W - 14, 12, label, value, st === "ok" ? C.mint : st === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  // 标注指向的点会随神经元熄灭而换人，这里让它平滑地移过去
  const tgt = {};
  function sm(key, p, dx, dy) {
    if (!p) return null;
    const x = p.x + dx, y = p.y + dy, o = tgt[key];
    if (!o || Math.hypot(o.x - x, o.y - y) > W * 0.6) return (tgt[key] = { x, y });
    o.x += (x - o.x) * 0.08; o.y += (y - o.y) * 0.08;
    return o;
  }

  function draw() {
    const r = scene();
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const { list, s } = r;
    const vr = VR();
    const pickN = (f) => list.filter(f).sort((a, b) => a.y - b.y || a.x - b.x)[0];
    const n0 = pickN((p) => p.r === 0 && p.x > W * 0.12 && p.x < W * 0.3);
    callout("neuron", on("neuron") && !!n0, n0 ? n0.x : 0, n0 ? n0.y + s * 0.6 : 0, n0 ? n0.x + W * 0.06 : 0, H * 0.58, "神经元：会发光的小星星");
    const vx = W * 0.58;
    callout("vessel", on("vessel"), vx, vY(vx) + vr, vx + W * 0.08, H * 0.44, "脑血管：送来氧气和养分");
    const xc = XC();
    callout("clot", on("clot"), xc, vY(xc) + vr * 0.9, xc - W * 0.08, H * 0.42, "血栓堵住了血管");
    const d0 = pickN((p) => p.down && p.r === 0 && p.x > W * 0.6);
    callout("down", on("down") && !!d0, d0 ? d0.x : 0, d0 ? d0.y + s * 0.6 : 0, d0 ? d0.x : 0, H * 0.56, "下游没有氧气了");
    const core = sm("core", list.filter((p) => p.dead > 0.9 && p.r === 1).sort((a, b) => a.x - b.x)[0], 0, s * 0.5);
    callout("core", on("core") && !!core, core ? core.x : 0, core ? core.y : 0, core ? core.x - W * 0.04 : 0, H * 0.94, "神经元一片片熄灭");
    const pen = sm("pen", list.filter((p) => p.weak > 0.3 && p.dead < 0.3 && p.r === 0).sort((a, b) => a.x - b.x)[0], 0, -s * 0.9);
    callout("penumbra", on("penumbra") && !!pen, pen ? pen.x : 0, pen ? pen.y : 0, pen ? pen.x + W * 0.02 : 0, H * 0.4, "半暗带：还有机会救回来");
    const xr = XR();
    callout("rupture", on("rupture"), xr + vr * 0.3, vY(xr) + vr, xr - W * 0.2, H * 0.4, "血管破了，血渗出来");
    const pr = sm("pr", list.filter((p) => p.press > 0.4 && p.y > H * 0.55).sort((a, b) => b.press - a.press)[0], 0, s * 0.6);
    callout("press", on("press") && !!pr, pr ? pr.x : 0, pr ? pr.y : 0, pr ? pr.x - W * 0.08 : 0, H * 0.95, "血肿挤压周围的神经元");
    callout("clock", on("clock"), W * 0.08, PB() + 2, W * 0.18, H * 0.4, "记下发病时间");
    callout("open", on("open"), xc + W * 0.06, vY(xc + W * 0.06) + vr * 0.8, xc - W * 0.06, H * 0.42, "溶栓或取栓，血流通了");
    const sv = list.filter((p) => p.down && p.dead < 0.1 && p.r === 2).sort((a, b) => a.x - b.x)[0];
    callout("saved", on("saved") && !!sv, sv ? sv.x : 0, sv ? sv.y + s * 0.6 : 0, sv ? sv.x + W * 0.1 : 0, H * 0.97, "越早，救回的神经元越多");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e0609a",
    titleCard: { lines: ["中风，", "每一分钟都要紧"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
