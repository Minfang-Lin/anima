Anima.register("sleep-cycle", {
    "title": "一夜的旅行",
    "tag": "睡眠小剧场",
    "headline": "睡着以后，大脑在【忙】什么？",
    "lede": "睡着不是关机。一整晚，大脑要沿着“睡眠路线”走好几圈：浅睡、深睡、快速眼动，修身体、扫废物、理记忆，一样都没闲着。",
    "summary": "睡眠周期、浅睡与纺锤波、深睡与生长激素、大脑的夜间清洁、快速眼动睡眠和做梦，以及怎样睡个好觉。",
    "footer": "长期失眠、打鼾憋醒、白天特别困等情况，可到睡眠医学科（睡眠门诊）就诊。",
    "canvasLabel": "卡通睡眠路线图和大脑里戴睡帽的神经元动画",
    "disease": "睡眠的奥秘",
    "organs": ["brain"],
    "categories": ["sleep"],
    "color": "#5c6bc0"
  }, () => {
  const CH = [
    { title: "睡着不是关机", clock: 0, amp: 0.2, freq: 22, spindle: 0, deep: 0, clean: 0, waste: 1, gh: 0, dream: 0, shelf: 0, rem: 0, wake: 1, noise: 0, tour: 1, bed: 0, heal: 0,
      pill: ["睡眠阶段", "入睡中", "#e7a500"],
      text: "很多人以为，睡着了大脑就关机了。其实大脑一整晚都在忙，像沿着一条路线去旅行：从浅睡走到深睡，再到快速眼动睡眠，走完一圈叫一个睡眠周期，大约 90 分钟。一晚上要这样走上 4～6 圈。",
      fact: "一个睡眠周期约 90 分钟，一晚通常要走 4～6 个周期",
      labels: ["cycle", "neuron"] },
    { title: "浅睡：刚刚睡着", clock: 0.33, amp: 0.38, freq: 10, spindle: 1, deep: 0, clean: 0, waste: 1, gh: 0, dream: 0, shelf: 0, rem: 0, wake: 0, noise: 1, tour: 0, bed: 0, heal: 0,
      pill: ["睡眠阶段", "浅睡", "#5aaad8"],
      text: "刚睡着时是浅睡。脑电波慢慢变慢，还会冒出一簇簇像纺锤一样的小尖波，叫纺锤波。这时大脑对外面的声音还很敏感，一点动静就容易被吵醒。浅睡是整晚占时间最多的阶段，大约占一半。",
      fact: "浅睡约占整晚睡眠的一半，是时间最长的阶段",
      labels: ["light", "spindle"] },
    { title: "深睡：身体的修理厂", clock: 1.0, amp: 0.9, freq: 3.2, spindle: 0, deep: 1, clean: 0.2, waste: 1, gh: 1, dream: 0, shelf: 0, rem: 0, wake: 0, noise: 0, tour: 0, bed: 0, heal: 0,
      pill: ["睡眠阶段", "深睡", "#4f6fd0"],
      text: "再往下走，就到了深睡。脑电波变得又大又慢，像大海里缓缓的浪，这时最难叫醒。身体趁机修修补补：生长激素大多在深睡时分泌，帮助修复肌肉和组织。深睡主要在前半夜，所以别熬到很晚才睡。",
      fact: "深睡集中在前半夜；年纪越大，深睡通常越少",
      labels: ["slow", "gh", "early"] },
    { title: "大脑的夜间清洁队", clock: 1.5, amp: 0.9, freq: 3.2, spindle: 0, deep: 1, clean: 1, waste: 0.3, gh: 0, dream: 0, shelf: 0, rem: 0, wake: 0, noise: 0, tour: 0, bed: 0, heal: 0,
      pill: ["睡眠阶段", "深睡", "#4f6fd0"],
      text: "深睡时，大脑还会大扫除。动物研究发现，深睡时神经元之间的缝隙会变大，脑脊液像清水一样冲进来，把白天积下的代谢废物冲走，其中包括和阿尔茨海默病有关的β-淀粉样蛋白。人的研究也发现，熬通宵后这种蛋白会变多。",
      fact: "这套“冲洗系统”叫类淋巴系统，主要在睡眠时工作",
      labels: ["csf", "waste"] },
    { title: "快速眼动：做梦和整理", clock: 6.5, amp: 0.28, freq: 18, spindle: 0, deep: 0, clean: 0, waste: 0.25, gh: 0, dream: 1, shelf: 1, rem: 1, wake: 0, noise: 0, tour: 0, bed: 0, heal: 0,
      pill: ["睡眠阶段", "快速眼动", "#d46fb0"],
      text: "到了快速眼动睡眠，大脑又活跃起来，眼珠在眼皮底下快速转来转去，大多数生动的梦都发生在这时。身体的肌肉却暂时放松，免得跟着梦乱动。大脑趁机整理白天的记忆和情绪。越到后半夜，这段睡眠越长。",
      fact: "快速眼动睡眠约占整晚的 20%～25%，多在后半夜",
      labels: ["dream", "eyes", "late"] },
    { title: "怎样睡个好觉", clock: 8, amp: 0.2, freq: 22, spindle: 0, deep: 0, clean: 0, waste: 0.25, gh: 0, dream: 0, shelf: 0.4, rem: 0, wake: 1, noise: 0, tour: 0, bed: 1, heal: 1,
      pill: ["睡眠阶段", "醒来", "#3fb38f"],
      text: "大多数成年人每晚需要 7～9 小时，至少 7 小时。每天固定时间睡觉起床，周末也别差太多；卧室要暗、凉、静，睡前少看手机；睡不着就起来做点安静的事，困了再躺下。长期失眠首选认知行为治疗，别自己长期吃安眠药。",
      fact: "每周至少 3 晚睡不好、持续 3 个月以上，属于慢性失眠，应就医",
      labels: ["rest"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    night: "#2e3a70", nightDeep: "#252f5e", star: "#fff3b0", moon: "#ffe07a",
    road: "#fff4d6", roadRem: "#ff8fcf", roadDeep: "#7fb2ff", roadLight: "#bfe3ff",
    neuron: "#c7b8ff", neuronDark: "#a893f0", csf: "#7cc8ff", waste: "#a8a0a6",
    gh: "#ffc94d", wood: "#e8b98a", woodDark: "#c98f5e", blanket: "#8fa8ff", pillow: "#ffffff",
    skin: "#ffd9c2", heartPink: "#ff9fb0", accent: "#5c6bc0",
  });
  const { ctx, rnd, clamp, outline, rrect, face, heart, dots, callout, pill } = Anima;
  const ROUND = Anima.ROUND;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { clock: 0, amp: 0.2, freq: 22, spindle: 0, deep: 0, clean: 0, waste: 1, gh: 0, dream: 0, shelf: 0, rem: 0, wake: 1, noise: 0, tour: 1, bed: 0, heal: 0 };
  let ph = 0, washPh = 0; // 脑电波相位、冲洗进度（累加，避免频率变化时波形乱跳）

  // 睡眠路线（示意）：[距 23:00 的小时数, 深浅]；0 清醒，1 快速眼动，2 浅睡，3 深睡
  const PTS = [
    [0, 0], [0.12, 0], [0.22, 2], [0.55, 3], [1.55, 3], [1.7, 2], [1.8, 1], [1.95, 1],
    [2.05, 2], [2.3, 3], [2.85, 3], [3.0, 2], [3.2, 1], [3.45, 1],
    [3.55, 2], [3.8, 2.6], [4.15, 2.6], [4.35, 2], [4.55, 1], [4.95, 1],
    [5.05, 2], [5.9, 2], [6.1, 1], [6.75, 1],
    [6.85, 2], [7.2, 2], [7.35, 1], [7.85, 1], [8, 0],
  ];
  const CYCLES = [0.22, 1.95, 3.45, 4.95, 6.75, 8];
  function lv(t) {
    t = clamp(t, 0, 8);
    for (let i = 1; i < PTS.length; i++) {
      if (t <= PTS[i][0]) { const a = PTS[i - 1], b = PTS[i]; return a[1] + (b[1] - a[1]) * (t - a[0]) / (b[0] - a[0] || 1); }
    }
    return 0;
  }

  function update(dt) {
    ph += dt * S.freq * 0.55;
    washPh += dt * 0.12 * S.clean;
  }

  // ---------- 布局 ----------
  function layout() {
    const pfs = Math.max(12, W / 60) * Anima.UI;
    const top = 12 + pfs * 1.4 + 14 + 10;
    const card = { x: 12, y: top, w: W - 24, h: H * 0.34 };
    const yb = card.y + card.h + H * 0.03, bot = H - H * 0.03;
    const eegH = H * 0.11;
    const eeg = { x: W * 0.27, y: bot - eegH, w: W * 0.71, h: eegH };
    const zone = { x: W * 0.27, y: yb, w: W * 0.5, h: eeg.y - yb - H * 0.02 };
    const bed = { x: W * 0.02, y: yb, w: W * 0.23, h: bot - yb };
    const shelf = { x: W * 0.79, y: yb, w: W * 0.19, h: eeg.y - yb - H * 0.02 };
    return { card, eeg, zone, bed, shelf, yb, bot };
  }

  // ---------- 上方：睡眠路线图 ----------
  function drawMap(c) {
    ctx.fillStyle = C.ink; rrect(c.x + 5, c.y + 5, c.w, c.h, 18); ctx.fill();
    ctx.fillStyle = C.night; rrect(c.x, c.y, c.w, c.h, 18); ctx.fill(); outline(2.5); ctx.stroke();
    // 小星星
    ctx.save(); rrect(c.x, c.y, c.w, c.h, 18); ctx.clip();
    for (let i = 0; i < 26; i++) {
      const x = c.x + rnd(i + 500) * c.w, y = c.y + rnd(i + 540) * c.h, tw = 0.5 + 0.5 * Math.sin(time * 1.5 + i * 2.1);
      ctx.globalAlpha = 0.35 + 0.4 * tw; ctx.fillStyle = C.star;
      ctx.beginPath(); ctx.arc(x, y, 1 + rnd(i + 580) * 1.6, 0, 6.3); ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.restore();

    const fs = clamp(H * 0.032, 10, 18);
    ctx.font = `${fs}px ${ROUND}`; ctx.textBaseline = "middle";
    const labW = ctx.measureText("快速眼动").width + fs * 1.3;
    const narrow = Anima.UI > 1;
    const titleH = narrow ? fs * 0.6 : fs * 2.5, ticksH = fs * 1.7;
    const px = c.x + labW + fs * 1.4, pw = c.w - labW - fs * 2.8;
    const py = c.y + titleH + fs * 0.5, ph0 = c.h - titleH - ticksH - fs * 0.9;
    const X = (t) => px + (t / 8) * pw, Y = (l) => py + (l / 3) * ph0;

    ctx.fillStyle = "#e8ecff"; ctx.textAlign = "left";
    if (!narrow) ctx.fillText("一夜的睡眠路线图（示意）", c.x + fs * 0.8, c.y + fs * 0.95);
    // 纵轴：四种深浅
    const rows = [["清醒", 0, "#ffe07a"], ["快速眼动", 1, "#ffa3d8"], ["浅睡", 2, "#bfe3ff"], ["深睡", 3, "#8fb8ff"]];
    for (const r of rows) {
      ctx.strokeStyle = "rgba(255,255,255,0.14)"; ctx.lineWidth = 1.5; ctx.setLineDash([3, 5]);
      ctx.beginPath(); ctx.moveTo(px, Y(r[1])); ctx.lineTo(px + pw, Y(r[1])); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = r[2]; ctx.textAlign = "right"; ctx.fillText(r[0], px - fs * 0.6, Y(r[1]) + 1);
    }
    // 横轴：时间
    ctx.textAlign = "center"; ctx.fillStyle = "#c9d2ff";
    for (const [t, s] of [[0, "23:00"], [2, "1:00"], [4, "3:00"], [6, "5:00"], [8, "7:00"]]) ctx.fillText(s, X(t), c.y + c.h - ticksH * 0.5);
    ctx.textAlign = "left";

    // 第几圈（第一幕）
    if (S.tour > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.tour;
      for (let k = 0; k < 5; k++) {
        const a = X(CYCLES[k]) + 3, b = X(CYCLES[k + 1]) - 3, yy = Y(3) + fs * 0.6;
        ctx.strokeStyle = "rgba(255,243,176,0.7)"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(a, yy - 4); ctx.lineTo(a, yy); ctx.lineTo(b, yy); ctx.lineTo(b, yy - 4); ctx.stroke();
      }
      ctx.restore();
    }

    // 小路：先画描边，再按阶段上色；没走到的部分暗一些
    const path = () => { ctx.beginPath(); PTS.forEach((p, i) => ctx[i ? "lineTo" : "moveTo"](X(p[0]), Y(p[1]))); };
    ctx.lineJoin = "round"; ctx.lineCap = "round";
    path(); ctx.strokeStyle = C.ink; ctx.lineWidth = fs * 0.85; ctx.stroke();
    const segs = (alpha) => {
      for (let i = 1; i < PTS.length; i++) {
        const a = PTS[i - 1], b = PTS[i];
        const col = a[1] === 1 && b[1] === 1 ? C.roadRem : a[1] >= 2.5 && b[1] >= 2.5 ? C.roadDeep : a[1] === 0 && b[1] === 0 ? C.moon : C.road;
        ctx.globalAlpha = alpha;
        ctx.beginPath(); ctx.moveTo(X(a[0]), Y(a[1])); ctx.lineTo(X(b[0]), Y(b[1]));
        ctx.strokeStyle = col; ctx.lineWidth = fs * 0.45; ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };
    segs(0.45);
    ctx.save(); ctx.beginPath(); ctx.rect(c.x, c.y, X(S.clock) - c.x, c.h); ctx.clip(); segs(1); ctx.restore();

    // 第一幕：一颗小星星沿着路线一圈圈地跑
    if (S.tour > 0.02) {
      const tt = (time * 0.9) % 8, sx = X(tt), sy = Y(lv(tt));
      ctx.save(); ctx.globalAlpha *= S.tour;
      star(sx, sy - fs * 0.1, fs * 0.55, C.star);
      ctx.restore();
    }

    // 戴睡帽的小月亮
    const mx = X(S.clock), my = Y(lv(S.clock)) - fs * 0.15 + Math.sin(time * 2) * 1.5;
    drawMoon(mx, my, fs * 0.95);
    return { X, Y, fs, moon: { x: mx, y: my } };
  }

  function star(x, y, r, col) {
    ctx.beginPath();
    for (let k = 0; k < 10; k++) {
      const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.45 : r;
      ctx[k ? "lineTo" : "moveTo"](x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    }
    ctx.closePath(); ctx.fillStyle = col; ctx.fill(); outline(1.4); ctx.stroke();
  }

  // 闭着眼睛的小脸（睡着了）
  function sleepFace(x, y, s, dart) {
    ctx.fillStyle = "rgba(255,159,176,0.8)";
    ctx.beginPath(); ctx.ellipse(x - s * 0.55, y + s * 0.18, s * 0.14, s * 0.08, 0, 0, 6.3); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x + s * 0.55, y + s * 0.18, s * 0.14, s * 0.08, 0, 0, 6.3); ctx.fill();
    outline(Math.max(1.2, s * 0.09));
    for (const side of [-1, 1]) {
      ctx.beginPath(); ctx.arc(x + side * s * 0.32, y - s * 0.12, s * 0.13, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
      if (dart > 0.02) {
        // 快速眼动：眼皮下的眼珠左右转
        ctx.save(); ctx.globalAlpha *= dart;
        ctx.fillStyle = C.ink;
        const dx = Math.tanh(Math.sin(time * 5.5) * 4) * s * 0.09;
        ctx.beginPath(); ctx.arc(x + side * s * 0.32 + dx, y - s * 0.03, s * 0.05, 0, 6.3); ctx.fill();
        ctx.restore();
      }
    }
    ctx.beginPath(); ctx.arc(x, y + s * 0.2, s * 0.1, 0.1 * Math.PI, 0.9 * Math.PI); ctx.stroke();
  }

  // 睡帽：从头顶斜着垂下来，尖上一个小绒球
  function cap(x, y, r, col, tilt) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(tilt);
    ctx.beginPath();
    ctx.moveTo(-r * 0.85, 0);
    ctx.quadraticCurveTo(-r * 0.2, -r * 1.3, r * 0.9, -r * 1.05);
    ctx.quadraticCurveTo(r * 0.5, -r * 0.5, r * 0.85, 0);
    ctx.closePath(); ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
    rrect(-r * 0.95, -r * 0.16, r * 1.9, r * 0.32, r * 0.16); ctx.fillStyle = C.paper; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(r * 0.92, -r * 1.05, r * 0.2, 0, 6.3); ctx.fillStyle = C.paper; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.restore();
  }

  function drawMoon(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fillStyle = C.moon; ctx.fill(); outline(2); ctx.stroke();
    if (S.wake > 0.5) face(x, y + r * 0.1, r * 0.7, 1); else sleepFace(x, y + r * 0.1, r * 0.7, 0);
    cap(x, y - r * 0.7, r * 0.8, "#6f8ce0", -0.25);
  }

  // ---------- 下方：大脑里 ----------
  function neurons(z) {
    const r = Math.min(z.h * 0.2, z.w * 0.1);
    const cx = z.x + z.w / 2, spread = 1 + 0.12 * S.clean;
    const base = [[0.17, 0.62], [0.5, 0.5], [0.83, 0.64]];
    return base.map((b, i) => ({
      x: cx + (b[0] - 0.5) * z.w * spread,
      y: z.y + b[1] * z.h + Math.sin(time * 1.2 + i * 2) * 2,
      r: r * (1 + 0.05 * S.deep * Math.sin(ph * 0.5 - i * 0.6)),
      col: ["#6f8ce0", "#ff9fb0", "#ffc94d"][i], i,
    }));
  }

  function drawZone(z) {
    const ns = neurons(z);
    // 脑脊液：从神经元之间流过的蓝色清水
    let csfPt = null, drainPt = null;
    if (S.clean > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.clean;
      for (let k = 0; k < 4; k++) {
        const yy = z.y + z.h * (0.22 + k * 0.2);
        ctx.strokeStyle = "rgba(124,200,255,0.45)"; ctx.lineWidth = z.h * 0.1; ctx.lineCap = "round";
        ctx.beginPath();
        for (let x = z.x - 10; x <= z.x + z.w + 10; x += 8) {
          const y = yy + Math.sin(x * 0.03 + time * 1.5 + k) * z.h * 0.04;
          if (x === z.x - 10) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
        // 水里的小亮点，往右流
        ctx.fillStyle = C.paper;
        for (let j = 0; j < 5; j++) {
          const u = (rnd(k * 10 + j + 700) + time * 0.12) % 1, x = z.x + u * z.w;
          const y = yy + Math.sin(x * 0.03 + time * 1.5 + k) * z.h * 0.04;
          ctx.beginPath(); ctx.arc(x, y, Math.max(1.5, z.h * 0.012), 0, 6.3); ctx.fill();
        }
      }
      ctx.restore();
      // 右边的出口箭头：废物跟着水流走
      const ax = z.x + z.w + W * 0.025, ay = z.y + z.h * 0.5, as = z.h * 0.12;
      ctx.save(); ctx.globalAlpha *= S.clean;
      ctx.beginPath(); ctx.moveTo(ax - as, ay - as * 0.45); ctx.lineTo(ax, ay - as * 0.45); ctx.lineTo(ax, ay - as); ctx.lineTo(ax + as, ay);
      ctx.lineTo(ax, ay + as); ctx.lineTo(ax, ay + as * 0.45); ctx.lineTo(ax - as, ay + as * 0.45); ctx.closePath();
      ctx.fillStyle = C.csf; ctx.fill(); outline(1.8); ctx.stroke();
      for (let j = 0; j < 3; j++) {
        const t = (time * 0.6 + j / 3) % 1;
        ctx.globalAlpha = S.clean * (1 - t); ctx.fillStyle = C.waste;
        ctx.beginPath(); ctx.arc(ax + as * (0.6 + t * 1.2), ay + (j - 1) * as * 0.5, as * 0.22, 0, 6.3); ctx.fill(); outline(1); ctx.stroke();
      }
      ctx.restore();
      drainPt = { x: ax + as * 0.3, y: ay };
      const yy = z.y + z.h * 0.42, x = (ns[0].x + ns[1].x) / 2;
      csfPt = { x, y: yy + Math.sin(x * 0.03 + time * 1.5 + 1) * z.h * 0.04 };
    }

    // 突触连线
    for (const [col, lw] of [[C.ink, 0.2], [C.neuronDark, 0.1]]) {
      for (let i = 0; i < 2; i++) {
        const a = ns[i], b = ns[i + 1];
        ctx.beginPath(); ctx.moveTo(a.x + a.r * 0.8, a.y); ctx.quadraticCurveTo((a.x + b.x) / 2, (a.y + b.y) / 2 + a.r * 0.8, b.x - b.r * 0.8, b.y);
        ctx.strokeStyle = col; ctx.lineWidth = a.r * lw + (col === C.ink ? 3 : 0); ctx.lineCap = "round"; ctx.stroke();
      }
    }

    // 代谢废物：灰色小颗粒，被水流冲走
    let wastePt = null;
    const nW = 12;
    for (let i = 0; i < nW; i++) {
      const vis = clamp(S.waste * nW - i, 0, 1);
      if (vis <= 0.02) continue;
      const u = (rnd(i + 900) + washPh * (0.7 + rnd(i + 950) * 0.6)) % 1;
      const x = z.x + u * z.w, y = z.y + z.h * (0.15 + rnd(i + 930) * 0.75);
      const fade = S.clean > 0.05 ? clamp((1 - u) * 5, 0, 1) * clamp(u * 8, 0, 1) : 1;
      const rr = Math.max(3, z.h * 0.035) * (0.8 + rnd(i + 960) * 0.4);
      ctx.save(); ctx.globalAlpha *= vis * fade;
      ctx.beginPath();
      for (let k = 0; k < 7; k++) {
        const a = k / 7 * Math.PI * 2, q = rr * (0.8 + rnd(i * 7 + k + 990) * 0.4);
        ctx[k ? "lineTo" : "moveTo"](x + Math.cos(a) * q, y + Math.sin(a) * q);
      }
      ctx.closePath(); ctx.fillStyle = C.waste; ctx.fill(); outline(1.3); ctx.stroke();
      if (i % 3 === 0 && rr > 4) {
        ctx.fillStyle = C.paper; ctx.font = `${rr * 1.2}px ${ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("β", x, y + 1); ctx.textAlign = "left";
      }
      ctx.restore();
      if (!wastePt && fade > 0.9 && vis > 0.9 && u > 0.35 && u < 0.7) wastePt = { x, y };
    }

    // 神经元：戴睡帽的小圆球，伸出几根树突
    for (const n of ns) {
      // 树突：软软的小枝杈，先画深色描边再盖上身体颜色
      const dend = () => {
        ctx.beginPath();
        for (let k = 0; k < 4; k++) {
          const a = Math.PI * (0.2 + k * 0.53) + rnd(n.i * 9 + k) * 0.3 + Math.sin(time * 0.8 + k + n.i) * 0.05;
          const L = n.r * (1.35 + rnd(n.i * 9 + k + 40) * 0.25);
          const ex = n.x + Math.cos(a) * L, ey = n.y + Math.sin(a) * L;
          ctx.moveTo(n.x + Math.cos(a) * n.r * 0.5, n.y + Math.sin(a) * n.r * 0.5); ctx.lineTo(ex, ey);
          ctx.moveTo(ex, ey); ctx.lineTo(ex + Math.cos(a + 0.6) * n.r * 0.35, ey + Math.sin(a + 0.6) * n.r * 0.35);
          ctx.moveTo(ex, ey); ctx.lineTo(ex + Math.cos(a - 0.6) * n.r * 0.35, ey + Math.sin(a - 0.6) * n.r * 0.35);
        }
      };
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      dend(); ctx.strokeStyle = C.ink; ctx.lineWidth = n.r * 0.26 + 4; ctx.stroke();
      dend(); ctx.strokeStyle = C.neuron; ctx.lineWidth = n.r * 0.26; ctx.stroke();
      // 快速眼动时大脑很活跃：身边一闪一闪的小光点
      if (S.rem > 0.05) {
        for (let k = 0; k < 3; k++) {
          const a = time * 0.8 + k * 2.1 + n.i, gl = 0.5 + 0.5 * Math.sin(time * 2.2 + k + n.i);
          ctx.save(); ctx.globalAlpha *= S.rem * gl;
          ctx.fillStyle = "#fff3b0"; ctx.beginPath(); ctx.arc(n.x + Math.cos(a) * n.r * 1.5, n.y + Math.sin(a) * n.r * 1.3, n.r * 0.12, 0, 6.3); ctx.fill();
          ctx.restore();
        }
      }
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.3); ctx.fillStyle = C.neuron; ctx.fill(); outline(2.2); ctx.stroke();
      if (S.wake > 0.5) face(n.x, n.y + n.r * 0.12, n.r * 0.62, 1);
      else sleepFace(n.x, n.y + n.r * 0.12, n.r * 0.62, 0);
      cap(n.x, n.y - n.r * 0.72, n.r * 0.85, n.col, n.i % 2 ? 0.25 : -0.25);
      // 睡着时冒出小 z
      if (S.wake < 0.5 && S.rem < 0.5) {
        const t = (time * 0.5 + n.i * 0.33) % 1;
        ctx.save(); ctx.globalAlpha *= (1 - t) * (1 - S.wake);
        ctx.fillStyle = "#7a6fd0"; ctx.font = `${n.r * 0.55}px ${ROUND}`;
        ctx.fillText("z", n.x + n.r * (0.9 + t * 0.4), n.y - n.r * (0.6 + t * 0.9));
        ctx.restore();
      }
    }

    // 梦的泡泡
    let dreamPt = null;
    if (S.dream > 0.02) {
      for (const n of ns) {
        const t = (time * 0.22 + n.i * 0.37) % 1;
        const bx = n.x - n.r * 1.3 + Math.sin(time + n.i) * 3, by = n.y - n.r * (0.4 + t * 1.2), br = n.r * (0.42 + 0.12 * t);
        ctx.save(); ctx.globalAlpha *= S.dream * clamp((1 - t) * 4, 0, 1) * clamp(t * 6, 0, 1);
        ctx.beginPath(); ctx.arc(n.x - n.r * 0.95, n.y - n.r * 0.2, n.r * 0.09, 0, 6.3); ctx.fillStyle = C.paper; ctx.fill(); outline(1.2); ctx.stroke();
        ctx.beginPath(); ctx.arc(bx, by, br, 0, 6.3); ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.fill(); outline(1.8); ctx.stroke();
        dreamIcon(n.i, bx, by, br * 0.6);
        ctx.restore();
        if (n.i === 0) dreamPt = { x: n.x - n.r * 0.95, y: n.y - n.r * 0.2 };
      }
    }
    return { ns, csfPt, wastePt, dreamPt, drainPt };
  }

  function dreamIcon(k, x, y, s) {
    if (k === 0) { star(x, y, s, "#ffd24d"); return; }
    if (k === 1) {
      // 小鱼
      ctx.beginPath(); ctx.ellipse(x - s * 0.1, y, s * 0.7, s * 0.45, 0, 0, 6.3); ctx.fillStyle = "#ff9f7a"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + s * 0.5, y); ctx.lineTo(x + s * 1.0, y - s * 0.4); ctx.lineTo(x + s * 1.0, y + s * 0.4); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(x - s * 0.45, y - s * 0.08, s * 0.09, 0, 6.3); ctx.fill();
      return;
    }
    // 小云朵
    ctx.beginPath();
    ctx.arc(x - s * 0.4, y + s * 0.1, s * 0.38, 0, 6.3); ctx.arc(x + s * 0.05, y - s * 0.15, s * 0.48, 0, 6.3); ctx.arc(x + s * 0.5, y + s * 0.12, s * 0.35, 0, 6.3);
    ctx.fillStyle = "#bfe3ff"; ctx.fill(); outline(1.2); ctx.stroke();
  }

  // 记忆书架：梦里整理好的“记忆卡片”被放上书架
  function drawShelf(s, ns) {
    if (S.shelf < 0.02) return null;
    ctx.save(); ctx.globalAlpha *= S.shelf;
    const fs = clamp(H * 0.03, 10, 16);
    const top = s.y + fs * 1.4;
    const sh = s.h - fs * 1.4;
    ctx.fillStyle = C.ink; ctx.font = `${fs}px ${ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("记忆书架", s.x + s.w / 2, s.y + fs * 0.6); ctx.textAlign = "left";
    rrect(s.x, top, s.w, sh, 8); ctx.fillStyle = C.wood; ctx.fill(); outline(2.2); ctx.stroke();
    const rows = 3, rh = (sh - 8) / rows;
    const cols = ["#ff9fb0", "#8fb8ff", "#ffd24d", "#6cc9ae", "#c7b8ff", "#ffb38a"];
    let slot = null;
    for (let r = 0; r < rows; r++) {
      const yb = top + 4 + (r + 1) * rh;
      ctx.fillStyle = C.woodDark; ctx.fillRect(s.x + 3, yb - 3, s.w - 6, 3);
      const bw = (s.w - 12) / 6;
      for (let k = 0; k < 6; k++) {
        if (r === 1 && k === 3) { slot = { x: s.x + 6 + k * bw + bw / 2, y: yb - rh * 0.4, bw, bh: rh * 0.75 }; continue; }
        const h = rh * (0.6 + rnd(r * 6 + k + 1200) * 0.25);
        ctx.fillStyle = cols[(r * 6 + k) % cols.length];
        ctx.fillRect(s.x + 6 + k * bw, yb - 3 - h, bw - 1.5, h);
        ctx.strokeStyle = C.ink; ctx.lineWidth = 1.2; ctx.strokeRect(s.x + 6 + k * bw, yb - 3 - h, bw - 1.5, h);
      }
    }
    // 飞过来的记忆卡片
    if (slot && ns && S.rem > 0.05) {
      const u = (time * 0.35) % 1, from = ns[2];
      const k = clamp(u / 0.75, 0, 1), e = k * k * (3 - 2 * k);
      const x = from.x + (slot.x - from.x) * e, y = from.y - from.r + (slot.y - from.y + from.r) * e - Math.sin(e * Math.PI) * s.h * 0.25;
      const cw = slot.bw * (1.8 - 0.8 * e), chh = slot.bh * (0.7 + 0.3 * e);
      ctx.save(); ctx.globalAlpha *= S.rem;
      rrect(x - cw / 2, y - chh / 2, cw, chh, 3); ctx.fillStyle = "#fff6da"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.strokeStyle = C.soft; ctx.lineWidth = 1;
      for (let j = 1; j < 3; j++) { ctx.beginPath(); ctx.moveTo(x - cw * 0.3, y - chh / 2 + chh * j / 3); ctx.lineTo(x + cw * 0.3, y - chh / 2 + chh * j / 3); ctx.stroke(); }
      ctx.restore();
    }
    ctx.restore();
    return slot;
  }

  // 左下角：床上睡觉的小人
  function drawBed(b) {
    const s = Math.min(b.w, b.h * 1.1);
    const cx = b.x + b.w / 2, base = b.y + b.h * 0.92;
    const bw = s * 0.98, bx = cx - bw / 2, bedTop = base - s * 0.34;
    // 床头板和床
    rrect(bx, bedTop - s * 0.28, s * 0.12, s * 0.62, 6); ctx.fillStyle = C.woodDark; ctx.fill(); outline(2); ctx.stroke();
    rrect(bx, bedTop, bw, s * 0.2, 6); ctx.fillStyle = C.wood; ctx.fill(); outline(2); ctx.stroke();
    rrect(bx + s * 0.03, bedTop + s * 0.2, s * 0.07, s * 0.14, 3); ctx.fill(); ctx.stroke();
    rrect(bx + bw - s * 0.1, bedTop + s * 0.2, s * 0.07, s * 0.14, 3); ctx.fill(); ctx.stroke();
    // 枕头和头
    rrect(bx + s * 0.13, bedTop - s * 0.12, s * 0.3, s * 0.14, s * 0.07); ctx.fillStyle = C.pillow; ctx.fill(); outline(1.8); ctx.stroke();
    const hx = bx + s * 0.29, hy = bedTop - s * 0.14 - (S.wake > 0.5 ? Math.abs(Math.sin(time * 1.5)) * 1.5 : 0), hr = s * 0.12;
    ctx.beginPath(); ctx.arc(hx, hy, hr, 0, 6.3); ctx.fillStyle = C.skin; ctx.fill(); outline(2); ctx.stroke();
    if (S.wake > 0.5) face(hx, hy + hr * 0.1, hr * 0.7, 1);
    else sleepFace(hx, hy + hr * 0.1, hr * 0.7, S.rem);
    if (S.wake < 0.5) cap(hx, hy - hr * 0.62, hr * 0.85, "#6f8ce0", -0.35);
    // 被子（呼吸时轻轻起伏）
    const br = 1 + 0.03 * Math.sin(time * (S.deep > 0.5 ? 1.2 : 2));
    ctx.beginPath();
    ctx.moveTo(bx + s * 0.4, bedTop + s * 0.02);
    ctx.quadraticCurveTo(bx + s * 0.62, bedTop - s * 0.2 * br, bx + bw - s * 0.05, bedTop - s * 0.02);
    ctx.lineTo(bx + bw - s * 0.02, bedTop + s * 0.12); ctx.lineTo(bx + s * 0.38, bedTop + s * 0.12); ctx.closePath();
    ctx.fillStyle = C.blanket; ctx.fill(); outline(2); ctx.stroke();
    const eyes = { x: hx, y: hy };
    // 创可贴：生长激素在修补身体
    const patch = { x: bx + s * 0.72, y: bedTop - s * 0.07 };
    if (S.gh > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.gh;
      ctx.translate(patch.x, patch.y); ctx.rotate(-0.4);
      rrect(-s * 0.1, -s * 0.035, s * 0.2, s * 0.07, s * 0.035); ctx.fillStyle = "#ffd9a8"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.fillStyle = "#e8a86f"; ctx.fillRect(-s * 0.03, -s * 0.03, s * 0.06, s * 0.06);
      ctx.restore();
      for (let k = 0; k < 3; k++) {
        const a = time * 1.3 + k * 2.1;
        ctx.save(); ctx.globalAlpha *= S.gh * (0.5 + 0.5 * Math.sin(time * 2 + k));
        star(patch.x + Math.cos(a) * s * 0.16, patch.y - s * 0.08 + Math.sin(a) * s * 0.06, s * 0.035, "#fff3b0");
        ctx.restore();
      }
    }
    // 浅睡：外面一点动静就容易醒
    if (S.noise > 0.02) {
      const t = (time * 0.7) % 1;
      ctx.save(); ctx.globalAlpha *= S.noise * (1 - t);
      ctx.fillStyle = "#f28a4b"; ctx.font = `${s * 0.13}px ${ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("叮!", bx + bw * 0.85, bedTop - s * (0.42 + t * 0.12));
      ctx.textAlign = "left";
      ctx.restore();
    }
    // 睡着时的 zZ
    if (S.wake < 0.5) {
      const t = (time * 0.4) % 1;
      ctx.save(); ctx.globalAlpha *= (1 - t) * (1 - S.noise * 0.7);
      ctx.fillStyle = "#7a6fd0"; ctx.font = `${s * 0.12}px ${ROUND}`;
      ctx.fillText("Z", hx + hr * 0.9 + t * s * 0.1, hy - hr * (1.2 + t * 1.5));
      ctx.restore();
    }
    return { eyes, patch, s };
  }

  // 生长激素小快递：从大脑飞去身体，手里拿着小扳手
  function drawCourier(z, bedInfo) {
    if (S.gh < 0.02) return null;
    const u = (time * 0.3) % 1;
    const x0 = z.x + z.w * 0.35, y0 = z.y + z.h * 0.12, x1 = bedInfo.patch.x + bedInfo.s * 0.05, y1 = bedInfo.patch.y - bedInfo.s * 0.2;
    const x = x0 + (x1 - x0) * u, y = y0 + (y1 - y0) * u - Math.sin(u * Math.PI) * z.h * 0.15;
    const r = Math.max(8, z.h * 0.075);
    ctx.save(); ctx.globalAlpha *= S.gh * clamp((1 - u) * 6, 0, 1) * clamp(u * 8, 0, 1);
    // 小翅膀
    const flap = Math.sin(time * 12) * 0.3;
    for (const side of [-1, 1]) {
      ctx.beginPath(); ctx.ellipse(x + side * r * 0.9, y - r * 0.5, r * 0.5, r * 0.28, side * (0.5 + flap), 0, 6.3);
      ctx.fillStyle = C.paper; ctx.fill(); outline(1.4); ctx.stroke();
    }
    rrect(x - r, y - r * 0.8, r * 2, r * 1.6, r * 0.4); ctx.fillStyle = C.gh; ctx.fill(); outline(1.8); ctx.stroke();
    face(x, y, r * 0.6, 1, false);
    // 小扳手
    ctx.save(); ctx.translate(x + r * 1.2, y + r * 0.3); ctx.rotate(0.6 + Math.sin(time * 4) * 0.2);
    ctx.strokeStyle = C.ink; ctx.lineWidth = r * 0.34; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, r * 0.9); ctx.stroke();
    ctx.strokeStyle = "#cfd6e6"; ctx.lineWidth = r * 0.18;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, r * 0.9); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, r * 0.3, 0.3 * Math.PI, 2.7 * Math.PI); ctx.fillStyle = "#cfd6e6"; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.restore();
    ctx.restore();
    return { x, y };
  }

  // 脑电波
  function drawEEG(e) {
    ctx.fillStyle = C.ink; rrect(e.x + 4, e.y + 4, e.w, e.h, 12); ctx.fill();
    ctx.fillStyle = C.paper; rrect(e.x, e.y, e.w, e.h, 12); ctx.fill(); outline(2.2); ctx.stroke();
    const fs = clamp(H * 0.03, 10, 16);
    ctx.font = `${fs}px ${ROUND}`; ctx.textBaseline = "middle";
    const lw = ctx.measureText("脑电波").width + fs;
    ctx.fillStyle = C.soft; ctx.fillText("脑电波", e.x + fs * 0.5, e.y + e.h / 2 + 1);
    const x0 = e.x + lw, x1 = e.x + e.w - fs * 0.6, mid = e.y + e.h / 2, A = e.h * 0.4;
    const col = S.rem > 0.5 ? "#d46fb0" : S.deep > 0.5 ? "#4f6fd0" : S.spindle > 0.5 ? "#3b95c9" : "#e7a500";
    ctx.strokeStyle = col; ctx.lineWidth = 2.2; ctx.lineJoin = "round";
    ctx.beginPath();
    let spk = null;
    const F = S.freq * (x1 - x0) / 700;
    for (let x = x0; x <= x1; x += 1.5) {
      const u = (x - x0) / (x1 - x0);
      let v = S.amp * (0.8 * Math.sin(u * F * 6.283 + ph) + 0.2 * Math.sin(u * F * 2.3 * 6.283 + ph * 1.7));
      // 纺锤波：一簇簇快速的小尖波，从右往左移动
      let env = 0;
      for (let k = 0; k < 2; k++) {
        const c = k ? 0.72 : 0.3, pulse = 0.55 + 0.45 * Math.sin(time * 1.6 + k * 2.4);
        env = Math.max(env, pulse * Math.exp(-Math.pow((u - c) / 0.05, 2)));
      }
      v += S.spindle * env * 0.45 * Math.sin(u * 180 + time * 6);
      const y = mid - clamp(v, -1.1, 1.1) * A;
      if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      if (!spk && u >= 0.72) spk = { x, y: mid - A * 0.45 };
    }
    ctx.stroke();
    return { spk, mid: { x: x0 + (x1 - x0) * 0.4, y: mid - A * S.amp * 0.8 } };
  }

  // 最后一幕：卧室小卡片
  function drawBedroom(L) {
    if (S.bed < 0.02) return null;
    const x = W * 0.45, y = L.yb, w = W * 0.53, h = L.bot - L.yb;
    ctx.save(); ctx.globalAlpha *= S.bed;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, w, h, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(x, y, w, h, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const fs = clamp(h * 0.11, 11, 22);
    ctx.fillStyle = C.ink; ctx.font = `${fs}px ${ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("给卧室的三个关键词", x + w / 2, y + fs * 1.0);
    const items = [["暗", "#4b5596", C.paper], ["凉", "#8fd0f5", C.ink], ["静", "#9fe0c6", C.ink]];
    const br = Math.min(h * 0.17, w * 0.085), gy = y + h * 0.46;
    const gap = w / 4.6;
    items.forEach((it, k) => {
      const cx = x + w / 2 + (k - 1.5) * gap;
      ctx.beginPath(); ctx.arc(cx, gy, br, 0, 6.3); ctx.fillStyle = it[1]; ctx.fill(); outline(2); ctx.stroke();
      ctx.fillStyle = it[2]; ctx.font = `${br * 1.05}px ${ROUND}`; ctx.fillText(it[0], cx, gy + 1);
    });
    // 放下手机
    const px = x + w / 2 + 1.5 * gap, pw = br * 0.9, phh = br * 1.5;
    rrect(px - pw / 2, gy - phh / 2, pw, phh, 5); ctx.fillStyle = "#e9ecf5"; ctx.fill(); outline(2); ctx.stroke();
    ctx.strokeStyle = "#f25f6b"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(px - br * 0.7, gy - br * 0.7); ctx.lineTo(px + br * 0.7, gy + br * 0.7); ctx.moveTo(px + br * 0.7, gy - br * 0.7); ctx.lineTo(px - br * 0.7, gy + br * 0.7); ctx.stroke();
    ctx.fillStyle = C.soft; ctx.font = `${fs * 0.72}px ${ROUND}`;
    ctx.fillText("睡前放下手机", px, gy + br + fs * 0.55);
    ctx.fillStyle = C.accent; ctx.font = `${fs}px ${ROUND}`;
    ctx.fillText("每晚 7 小时以上 · 作息规律", x + w / 2, y + h - fs * 0.95);
    ctx.textAlign = "left";
    ctx.restore();
    return { x, y, w, h };
  }

  function hud() {
    const m = Math.round(S.clock * 12) * 5 + 23 * 60, hh = Math.floor(m / 60) % 24, mm = m % 60;
    pill(14, 12, "时间", `${hh}:${mm < 10 ? "0" : ""}${mm}`, C.accent, false);
    const p = CH[cur].pill;
    pill(W - 14, 12, p[0], p[1], p[2], true);
  }

  function draw() {
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(40, C.dot);
    const L = layout();
    const map = drawMap(L.card);
    const eeg = drawEEG(L.eeg);
    const bedInfo = drawBed(L.bed);
    const z = drawZone(L.zone);
    drawShelf(L.shelf, z.ns);
    const cr = drawCourier(L.zone, bedInfo);
    const room = drawBedroom(L);
    if (S.heal > 0.02) {
      for (const [i, hx] of [[0, 0.12], [1, 0.38], [2, 0.62], [3, 0.88]]) {
        const x = hx * W, y = ((rnd(i + 8100) - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02), C.heartPink);
        ctx.restore();
      }
    }
    void cr;

    const lab = CH[cur].labels, on = (k) => lab.indexOf(k) >= 0;
    const X = map.X, Y = map.Y, c = L.card;
    const mapHigh = Y(0) + map.fs * 0.2; // 路线图里“清醒”那一行，比较空
    const cbh = Math.max(12, W / 56) * Anima.UI + 14, belowMap = L.yb + cbh + 2; // 路线图正下方放一个标注
    callout("cycle", on("cycle"), X(1.1), Y(3), X(2.9), mapHigh, "一圈约 90 分钟");
    const n1 = z.ns[1];
    callout("neuron", on("neuron"), n1.x + n1.r * 0.7, n1.y + n1.r * 0.3, n1.x + W * 0.16, belowMap, "神经元整夜都在忙");
    callout("light", on("light"), map.moon.x, map.moon.y, map.moon.x + W * 0.22, mapHigh, "浅睡：一点动静就醒");
    const sp = eeg.spk;
    callout("spindle", on("spindle") && !!sp, sp ? sp.x : 0, sp ? sp.y : 0, sp ? sp.x : 0, L.eeg.y - H * 0.03, "纺锤波");
    callout("slow", on("slow"), eeg.mid.x, eeg.mid.y, W * 0.72, belowMap, "又大又慢的慢波");
    callout("gh", on("gh"), bedInfo.patch.x, bedInfo.patch.y, bedInfo.patch.x + W * 0.03, belowMap, "生长激素：修补身体");
    callout("early", on("early"), X(1.2), Y(3), X(3.6), mapHigh, "前半夜深睡最多");
    const cp = z.csfPt;
    callout("csf", on("csf") && !!cp, cp ? cp.x : 0, cp ? cp.y : 0, cp ? cp.x + W * 0.12 : 0, belowMap, "脑脊液冲走废物");
    const wp = z.drainPt;
    callout("waste", on("waste") && !!wp, wp ? wp.x : 0, wp ? wp.y : 0, wp ? wp.x : 0, L.eeg.y + L.eeg.h * 0.15, "代谢废物被冲走");
    const dp = z.dreamPt;
    callout("dream", on("dream") && !!dp, dp ? dp.x : 0, dp ? dp.y : 0, W * 0.62, belowMap, "生动的梦多在这时");
    callout("eyes", on("eyes"), bedInfo.eyes.x, bedInfo.eyes.y, bedInfo.eyes.x + W * 0.1, belowMap, "眼珠快速转动");
    callout("late", on("late"), X(6.4), Y(1), X(3.4), mapHigh, "后半夜快速眼动更多");
    callout("rest", on("rest"), X(7.8), Y(0.5), X(4.4), mapHigh, "每晚睡够 7 小时以上");
    void room; void c;
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#5c6bc0",
    titleCard: { lines: ["睡着以后，", "大脑在忙什么？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
