// 一夜的旅行：教科书示意图画风（机制类集），和 sleep-drive 是姊妹篇；通用画法见 shared/textbook.js。
Anima.register("sleep-cycle", {
    "title": "一夜的旅行",
    "tag": "睡眠小剧场",
    "headline": "睡着以后，大脑在【忙】什么？",
    "lede": "睡着不是关机。一整晚，大脑要沿着“睡眠路线”走好几圈：浅睡、深睡、快速眼动，修身体、扫废物、理记忆，一样都没闲着。",
    "summary": "睡眠周期、浅睡与纺锤波、深睡与生长激素、大脑的夜间清洁、快速眼动睡眠和做梦，以及怎样睡个好觉。",
    "footer": "长期失眠、打鼾憋醒、白天特别困等情况，可到睡眠医学科（睡眠门诊）就诊。",
    "canvasLabel": "睡眠结构图、脑电波与脑组织示意图：一夜的旅行",
    "disease": "睡眠的奥秘",
    "organs": ["brain"],
    "categories": ["sleep"],
    "color": "#5c6bc0",
    "look": "textbook"
  }, () => {
  const CH = [
    { title: "睡着不是关机", clock: 0, gap: 0.3, waste: 1,
      pill: ["睡眠阶段", "入睡中", "#e7a500"],
      text: "很多人以为，睡着了大脑就关机了。其实大脑一整晚都在忙，像沿着一条路线去旅行：从浅睡走到深睡，再到快速眼动睡眠，走完一圈叫一个睡眠周期，大约 90 分钟。一晚上要这样走上 4～6 圈。",
      fact: "一个睡眠周期约 90 分钟，一晚通常要走 4～6 个周期",
      labels: ["cycle", "neuron"] },
    { title: "浅睡：刚刚睡着", clock: 0.4, gap: 0.3, waste: 1,
      pill: ["睡眠阶段", "浅睡", "#5aaad8"],
      text: "刚睡着时是浅睡。脑电波慢慢变慢，还会冒出一簇簇像纺锤一样的小尖波，叫纺锤波。这时大脑对外面的声音还很敏感，一点动静就容易被吵醒。浅睡是整晚占时间最多的阶段，大约占一半。",
      fact: "浅睡约占整晚睡眠的一半，是时间最长的阶段",
      labels: ["light", "spindle"] },
    { title: "深睡：身体的修理厂", clock: 0.9, gap: 0.6, waste: 1,
      pill: ["睡眠阶段", "深睡", "#4f6fd0"],
      text: "再往下走，就到了深睡。脑电波变得又大又慢，像大海里缓缓的浪，这时最难叫醒。身体趁机修修补补：生长激素大多在深睡时分泌，帮助修复肌肉和组织。深睡主要在前半夜，所以别熬到很晚才睡。",
      fact: "深睡集中在前半夜；年纪越大，深睡通常越少",
      labels: ["slow", "gh", "early"] },
    { title: "大脑的夜间清洁队", clock: 2.0, gap: 1, waste: 0.3,
      pill: ["睡眠阶段", "深睡", "#4f6fd0"],
      text: "深睡时，大脑还会大扫除。动物研究发现，深睡时神经元之间的缝隙会变大，脑脊液像清水一样冲进来，把白天积下的代谢废物冲走，其中包括和阿尔茨海默病有关的β-淀粉样蛋白。人的研究也发现，熬通宵后这种蛋白会变多。",
      fact: "这套“冲洗系统”叫类淋巴系统，主要在睡眠时工作",
      labels: ["csf", "waste"] },
    { title: "快速眼动：做梦和整理", clock: 7.25, gap: 0.3, waste: 0.3,
      pill: ["睡眠阶段", "快速眼动", "#d46fb0"],
      text: "到了快速眼动睡眠，大脑又活跃起来，眼珠在眼皮底下快速转来转去，大多数生动的梦都发生在这时。身体的肌肉却暂时放松，免得跟着梦乱动。大脑趁机整理白天的记忆和情绪。越到后半夜，这段睡眠越长。",
      fact: "快速眼动睡眠约占整晚的 20%～25%，多在后半夜",
      labels: ["dream", "eyes", "late"] },
    { title: "怎样睡个好觉", clock: 8, gap: 0.3, waste: 0.3,
      pill: ["睡眠阶段", "醒来", "#3fb38f"],
      text: "大多数成年人每晚需要 7～9 小时，至少 7 小时。每天固定时间睡觉起床，周末也别差太多；卧室要暗、凉、静，睡前少看手机；睡不着就起来做点安静的事，困了再躺下。长期失眠首选认知行为治疗，别自己长期吃安眠药。",
      fact: "每周至少 3 晚睡不好、持续 3 个月以上，属于慢性失眠，应就医",
      labels: ["rest"] },
  ];
  const DUR = 12; // 每幕秒数

  const { clamp, mix, rnd, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0, prevCur = -1, prevLt = 0;
  let curT = 0, washPh = 0, gNow = 0.3; // 左上角胶囊显示的时刻（距 23:00 的小时数）；冲洗进度（累加，间隙变化时不乱跳）
  const TB = Anima.textbook({ W: () => W, H: () => H, time: () => time });
  const { ctx, TAU, rgba, shade, glossy, font, txt, panel, sample, along, ease, SF, IR, LF, nar, mol, noSign, arrow, flow, tag } = TB;

  // ---------- 本集新登记的图标（词典里没有的） ----------
  // 水通道：沙漏形的孔道（两头宽、中间窄），水分子从中间穿过
  Anima.textbook.registerShape("channel", {
    path(c, r) { c.moveTo(-r * 0.95, -r); c.lineTo(r * 0.95, -r); c.lineTo(r * 0.32, 0); c.lineTo(r * 0.95, r); c.lineTo(-r * 0.95, r); c.lineTo(-r * 0.32, 0); c.closePath(); },
    notch(c, r) { c.lineTo(-r, 0); c.lineTo(-r * 0.35, r); c.lineTo(r * 0.35, r); c.lineTo(r, 0); },
  });
  Anima.textbook.register("abeta", { shape: "pentagon", color: "#8f9a2c", label: "β-淀粉样蛋白" });
  Anima.textbook.register("gh", { shape: "star", color: "#ef6f8e", label: "生长激素" });
  Anima.textbook.register("aqp4", { shape: "channel", color: "#23aebf", label: "水通道 AQP4" });

  // ---------- 本集颜色 ----------
  const K = Object.assign({}, TB.K, {
    accent: "#5c6bc0",
    neu: ["#e4e8ff", "#8e9be0", "#4d5aa8"],           // 神经元
    csf: "#5cb8ea", csfFill: "#d9eefb",               // 脑脊液
    art: ["#f7c9c4", "#df8b83", "#a8534b"],           // 动脉
    vein: ["#dcd8f3", "#9f98d6", "#5f579e"],          // 静脉
    foot: ["#f1ecfb", "#cdbfeb", "#8c79c2"],          // 星形胶质细胞足突
    cell: ["#f6f7fb", "#dde1ec", "#9aa3bd"],          // 脑细胞
    pit: ["#fbd9cc", "#e79c86", "#b0624c"],           // 垂体
    hip: ["#ffe2b8", "#eba64a", "#a8681a"],           // 海马
    mem: "#e39a2b", eog: "#2f8f7f", spin: "rgba(75,159,213,0.22)", kc: "rgba(142,118,212,0.22)",
  });

  // 睡眠阶段：0 清醒，1 快速眼动（REM），2 浅睡 N1，3 浅睡 N2，4 深睡 N3
  const STG = [
    { name: "清醒", code: "清醒", col: "#e3a21a" },
    { name: "快速眼动", code: "REM", col: "#d46fb0" },
    { name: "浅睡 N1", code: "浅 N1", col: "#86c6e6" },
    { name: "浅睡 N2", code: "浅 N2", col: "#4b9fd5" },
    { name: "深睡 N3", code: "深 N3", col: "#4a5ec2" },
  ];
  // 整夜睡眠结构图（示意）：[开始, 结束（距 23:00 的小时数）, 阶段]
  const SEG = [
    [0, 0.15, 0], [0.15, 0.3, 2], [0.3, 0.55, 3], [0.55, 1.2, 4], [1.2, 1.35, 3], [1.35, 1.5, 1],
    [1.5, 1.8, 3], [1.8, 2.4, 4], [2.4, 2.75, 3], [2.75, 3.0, 1],
    [3.0, 3.1, 2], [3.1, 3.5, 3], [3.5, 3.8, 4], [3.8, 4.15, 3], [4.15, 4.5, 1],
    [4.5, 4.56, 0], [4.56, 4.66, 2], [4.66, 5.6, 3], [5.6, 6.1, 1],
    [6.1, 7.0, 3], [7.0, 7.6, 1], [7.6, 8, 0],
  ];
  const CYC = [[0.15, 1.5], [1.5, 3.0], [3.0, 4.5], [4.5, 6.1], [6.1, 7.6]];
  function stageAt(t) {
    for (let i = 0; i < SEG.length; i++) if (t < SEG[i][1]) return SEG[i][2];
    return 0;
  }

  const S = { clock: 0, gap: 0.3, waste: 1 };

  function update(dt) {
    if (cur !== lastCur) { prevCur = lastCur; prevLt = lt; lastCur = cur; lt = 0; }
    lt += dt; prevLt += dt;
    washPh += dt * 0.075 * gNow;
  }

  // ---------- 图例（每幕一套） ----------
  function legendItems(i) {
    const bands = [["band", STG[0].col, "清醒"], ["band", STG[1].col, "快速眼动"], ["band", STG[3].col, "浅睡"], ["band", STG[4].col, "深睡"]];
    return [
      bands,
      [["band", STG[3].col, "浅睡"], ["band", K.spin, "纺锤波"], ["band", K.kc, "K 复合波"]],
      [["band", STG[4].col, "深睡"], ["line", STG[4].col, "慢波"], ["mol", "gh", "生长激素"]],
      [["mol", "abeta", "β-淀粉样蛋白"], ["mol", "aqp4", "水通道 AQP4"], ["band", K.csf, "脑脊液"]],
      [["band", STG[1].col, "快速眼动"], ["line", K.eog, "眼动"], ["line", K.mem, "记忆整理"]],
      bands,
    ][i];
  }

  // =================== 通用画法 ===================
  // 整夜睡眠结构图（hypnogram）
  // o: { hi: 高亮的阶段, cur: 游标时刻, reveal: 0～1 画出多少, head: 顶上画周期括号, mini: 窄条（不写阶段名）, dawn: 天亮的暖光, span: [a, b] 顶上一条总括号 }
  function hyp(r, o) {
    const n = nar(), fs = SF() * (o.mini ? 0.82 : 1);
    panel(r, 10);
    font(fs, 600);
    const labs = STG.map((s) => (n ? s.code : s.name));
    const lw = o.mini ? ctx.measureText("23:00").width : Math.max.apply(null, labs.map((t) => ctx.measureText(t).width));
    const px = r.x + fs * 0.7 + lw + fs * 0.5, pw = r.x + r.w - (o.mini ? fs * 3.2 : fs * 1.2) - px;
    const top = r.y + (o.head || o.span ? fs * (n ? 2.5 : 2.1) : fs * 0.55), bot = r.y + r.h - (o.mini ? fs * 0.55 : fs * 1.7);
    const rh = (bot - top) / 5;
    const X = (t) => px + t / 8 * pw, Y = (s) => top + rh * (s + 0.5);
    const hiOn = (s) => !o.hi || o.hi.indexOf(s) >= 0;
    // 天亮的暖光
    if (o.dawn > 0.01) {
      const g = ctx.createLinearGradient(X(6.2), 0, X(8), 0);
      g.addColorStop(0, "rgba(255,200,90,0)"); g.addColorStop(1, `rgba(255,196,90,${0.4 * o.dawn})`);
      ctx.fillStyle = g; ctx.fillRect(X(6.2), top, X(8) - X(6.2), bot - top);
    }
    // 阶段色带
    STG.forEach((s, i) => {
      ctx.fillStyle = rgba(s.col, o.hi && hiOn(i) ? 0.2 : 0.07); ctx.fillRect(px, top + rh * i, pw, rh);
      if (!o.mini) txt(labs[i], px - fs * 0.45, Y(i) + 0.5, fs, shade(s.col, "#1b2440", 0.4), "right", o.hi && hiOn(i) ? 700 : 500);
    });
    // 坐标轴
    ctx.strokeStyle = K.line; ctx.lineWidth = 1.2; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(px, top - 2); ctx.lineTo(px, bot); ctx.lineTo(px + pw + 3, bot); ctx.stroke();
    if (o.mini) {
      txt("23:00", px - fs * 0.35, (top + bot) / 2, fs, K.soft, "right", 500);
      txt("7:00", px + pw + fs * 0.45, (top + bot) / 2, fs, K.soft, "left", 500);
    } else {
      [[0, "23:00"], [2, "1:00"], [4, "3:00"], [6, "5:00"], [8, "7:00"]].forEach((tk) => {
        ctx.beginPath(); ctx.moveTo(X(tk[0]), bot); ctx.lineTo(X(tk[0]), bot + fs * 0.3); ctx.stroke();
        txt(tk[1], clamp(X(tk[0]), px + fs * 1.2, px + pw - fs * 0.6), bot + fs * 0.95, fs * 0.92, K.soft, "center", 500);
      });
    }
    // 曲线：细线连接 + 各阶段的色条
    const rv = o.reveal == null ? 1 : o.reveal;
    ctx.save(); ctx.beginPath(); ctx.rect(px - 2, r.y, pw * rv + 4, r.h); ctx.clip();
    ctx.strokeStyle = rgba(K.ink, 0.5); ctx.lineWidth = Math.max(1, fs * 0.08); ctx.lineJoin = "round";
    ctx.beginPath();
    SEG.forEach((s, k) => { const y = Y(s[2]); if (k) ctx.lineTo(X(s[0]), y); else ctx.moveTo(X(s[0]), y); ctx.lineTo(X(s[1]), y); });
    ctx.stroke();
    const bh = Math.max(3, Math.min(rh * 0.56, fs * 0.85));
    SEG.forEach((s) => {
      const c = STG[s[2]].col, x0 = X(s[0]), w = X(s[1]) - x0;
      ctx.save(); if (!hiOn(s[2])) ctx.globalAlpha *= 0.38;
      ctx.beginPath(); ctx.roundRect(x0, Y(s[2]) - bh / 2, w, bh, Math.min(bh / 2, w / 2));
      ctx.fillStyle = glossy(x0 + w * 0.3, Y(s[2]), Math.max(w, bh), shade(c, "#ffffff", 0.35), c); ctx.fill();
      ctx.strokeStyle = shade(c, "#000000", 0.3); ctx.lineWidth = 0.8; ctx.stroke();
      ctx.restore();
    });
    ctx.restore();
    // 周期括号
    const bY = r.y + fs * 1.55;
    const brace = (a, b, lab, col) => {
      ctx.strokeStyle = col; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(X(a) + 2, bY + fs * 0.35); ctx.lineTo(X(a) + 2, bY); ctx.lineTo(X(b) - 2, bY); ctx.lineTo(X(b) - 2, bY + fs * 0.35); ctx.stroke();
      if (lab) txt(lab, (X(a) + X(b)) / 2, bY - fs * 0.62, fs * 0.9, col, "center", 600);
    };
    if (o.head > 0.01) {
      ctx.save(); ctx.globalAlpha *= o.head;
      CYC.forEach((c, k) => brace(c[0], c[1], n ? `${k + 1}` : `第 ${k + 1} 圈`, K.soft));
      ctx.restore();
    }
    if (o.span) brace(o.span[0], o.span[1], o.span[2], "#2f8f6a");
    // 游标
    if (o.cur != null) {
      const x = X(o.cur), st = stageAt(o.cur), y = Y(st), c = STG[st].col;
      ctx.strokeStyle = rgba(K.ink, 0.45); ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x, bot); ctx.stroke(); ctx.setLineDash([]);
      const gr = Math.max(8, rh * 0.9) * (1 + 0.12 * Math.sin(time * 3));
      const g = ctx.createRadialGradient(x, y, 0, x, y, gr);
      g.addColorStop(0, rgba(c, 0.55)); g.addColorStop(1, rgba(c, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, gr, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, Math.max(3.5, bh * 0.55), 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill();
      ctx.strokeStyle = shade(c, "#000000", 0.3); ctx.lineWidth = 2; ctx.stroke();
    }
    return { X, Y, px, pw, top, bot, rh, fs, bh };
  }

  // 脑电波形（示意）：q 是以 unit 为单位的横坐标，返回 -1～1
  const saw = (x) => { const f = x / TAU; return 2 * (f - Math.floor(f)) - 1; };
  const mod = (a, m) => ((a % m) + m) % m;
  const SPP = 64; // 浅睡 N2：每 SPP 个单位里有一个纺锤波（8～22）和一个 K 复合波（38～48）
  function wave(st, q) {
    if (st === 0) return 0.26 * Math.sin(q * 2.3) + 0.08 * Math.sin(q * 5.1 + 1.3) + 0.06 * Math.sin(q * 0.43);
    if (st === 1) return 0.24 * saw(q * 0.95) + 0.1 * Math.sin(q * 2.7 + 0.5) + 0.06 * Math.sin(q * 5.3);
    if (st === 2) return 0.32 * Math.sin(q * 1.05) + 0.12 * Math.sin(q * 2.6 + 2) + 0.06 * Math.sin(q * 4.9);
    if (st === 3) {
      let v = 0.24 * Math.sin(q * 1.0) + 0.1 * Math.sin(q * 2.5 + 1) + 0.05 * Math.sin(q * 4.7);
      const p = mod(q, SPP);
      if (p > 8 && p < 22) { const e = Math.sin(Math.PI * (p - 8) / 14); v = v * (1 - e * 0.6) + 0.42 * e * e * Math.sin(q * 4.6); }
      if (p > 38 && p < 48) {
        const k = (p - 38) / 10, e = Math.sin(Math.PI * k);
        v = v * (1 - e * 0.8) + (k < 0.35 ? -0.95 * Math.sin(Math.PI * k / 0.35) : 0.75 * Math.sin(Math.PI * (k - 0.35) / 0.65));
      }
      return v;
    }
    if (st === 5) { // 眼动（EOG）：一阵一阵的快速跳动
      const k = Math.floor(q / 7), f = q / 7 - k, burst = rnd(Math.floor(q / 28) + 700) < 0.85;
      const a = burst ? (rnd(k + 300) - 0.5) * 1.7 : 0, b0 = burst ? (rnd(k + 299) - 0.5) * 1.7 : 0;
      return b0 + (a - b0) * clamp(f / 0.1, 0, 1) + 0.04 * Math.sin(q * 3);
    }
    if (st === 6) return 0.05 * Math.sin(q * 7.1) + 0.04 * Math.sin(q * 11.3 + 1) + 0.03 * Math.sin(q * 17.9); // 肌电：几乎平直
    return 0.8 * Math.sin(q * 0.3) + 0.14 * Math.sin(q * 0.95 + 1) + 0.05 * Math.sin(q * 3.1); // 深睡 N3：慢波
  }
  // 画一段波形。mode "scroll"：向左滚动；"sweep"：波形固定，写入点从左往右扫（像监护仪）
  function trace(x0, x1, yc, amp, st, unit, col, mode, lw) {
    const w = x1 - x0, off = mode === "scroll" ? time * unit * 9 : 0;
    const head = mode === "sweep" ? x0 + ((time * 0.16) % 1) * w : -1e9, gw = Math.max(8, w * 0.035);
    ctx.strokeStyle = col; ctx.lineWidth = lw || Math.max(1.3, H * 0.0034); ctx.lineJoin = "round"; ctx.lineCap = "round";
    ctx.beginPath();
    let pen = false, hy = yc;
    for (let x = x0; x <= x1; x += 1) {
      const y = yc - wave(st, (x - x0 + off) / unit) * amp;
      if (x >= head && x < head + 1) hy = y;
      if (x > head && x < head + gw) { pen = false; continue; }
      if (pen) ctx.lineTo(x, y); else { ctx.moveTo(x, y); pen = true; }
    }
    ctx.stroke();
    if (head > x0) { ctx.beginPath(); ctx.arc(head, hy, Math.max(2, lw || 2), 0, TAU); ctx.fillStyle = col; ctx.fill(); }
  }
  const unitOf = () => Math.max(1.6, H * 0.0058);

  // 小面板标题
  function ptitle(r, t, col) { txt(t, r.x + SF() * 0.7, r.y + SF() * 0.95, SF() * 0.92, col || K.soft, "left", 600); }

  // =================== 版面 ===================
  function areaFor(i) {
    const Lg = TB.legendLayout(legendItems(i));
    const A = nar() ? { x: 8, y: TB.topY(), w: W - 16, h: H - TB.topY() - Lg.h - 10 } : { x: 16, y: TB.topY(), w: W - 32, h: H - TB.topY() - 12 };
    return { A, Lg };
  }
  // 上：睡眠结构图；下：细节（宽屏时右下角让给图例）
  function split(A, Lg, frac) {
    const n = nar(), g = n ? 6 : 12, hh = A.h * frac;
    return { hy: { x: A.x, y: A.y, w: A.w, h: hh }, D: { x: A.x, y: A.y + hh + g, w: n ? A.w : A.w - Lg.bw - 14, h: A.h - hh - g } };
  }
  const onOf = (i, live) => (k) => live && CH[i].labels.indexOf(k) >= 0;

  // =================== 第 1 幕：一整晚走好几圈 ===================
  function scene0(A, Lg, live, T) {
    const n = nar(), L = split(A, Lg, n ? 0.56 : 0.6), on = onOf(0, live);
    const t = clamp((T * 0.85) % 9.6 - 0.6, 0, 8);
    if (live) curT = t;
    const G = hyp(L.hy, { head: clamp((T - 1) / 1, 0, 1), cur: t, reveal: ease(clamp(T / 1.6, 0, 1)) });
    const D = L.D, g = n ? 6 : 12;
    // 左：一个神经元整夜都在放电
    const nb = { x: D.x, y: D.y, w: D.w * (n ? 0.34 : 0.3), h: D.h };
    panel(nb, 10);
    const s = Math.min(nb.h * 0.27, nb.w * 0.2), nx = nb.x + nb.w * 0.2, ny = nb.y + nb.h * 0.52;
    TB.neuron(nx, ny, s, K.neu, 0.75 + 0.25 * Math.sin(time * 2.2));
    const sx0 = nb.x + nb.w * 0.4, sx1 = nb.x + nb.w - 8, sy = nb.y + nb.h * 0.72;
    TB.spikes(sx0, sx1, sy, nb.h * 0.28, 0.8);
    if (!n) txt("放电", (sx0 + sx1) / 2, nb.y + nb.h * 0.9, SF() * 0.92, K.soft, "center", 500);
    // 右：此刻的脑电波（跟着游标变）
    const eb = { x: nb.x + nb.w + g, y: D.y, w: D.w - nb.w - g, h: D.h };
    panel(eb, 10);
    const st = stageAt(t);
    font(SF() * 0.92, 600);
    const pre = "脑电波：", pw0 = ctx.measureText(pre).width;
    const tly = n ? eb.y + eb.h - SF() * 0.85 : eb.y + SF() * 0.95, tlx = n ? eb.x + eb.w - SF() * 0.7 - pw0 - ctx.measureText(STG[st].name).width : eb.x + SF() * 0.7;
    txt(pre, tlx, tly, SF() * 0.92, K.soft, "left", 600);
    txt(STG[st].name, tlx + pw0, tly, SF() * 0.92, shade(STG[st].col, "#1b2440", 0.3), "left", 700);
    ctx.save(); ctx.beginPath(); ctx.rect(eb.x + 2, eb.y, eb.w - 4, eb.h); ctx.clip();
    trace(eb.x + SF() * 0.7, eb.x + eb.w - SF() * 0.7, eb.y + eb.h * (n ? 0.5 : 0.58), eb.h * (n ? 0.27 : 0.3), st, unitOf(), shade(STG[st].col, "#1b2440", 0.2), "scroll");
    ctx.restore();
    // 标注
    const c1 = G.X((CYC[0][0] + CYC[0][1]) / 2), by = L.hy.y + G.fs * 1.55;
    tag("cycle", on("cycle") && T > 1.6, c1, by, n ? G.X(3.35) : G.X(2.9), n ? G.Y(0) - G.rh * 0.1 : G.Y(0), "一圈约 90 分钟", STG[0].col);
    tag("neuron", on("neuron"), nx + s * 0.25, ny - s * 0.2, n ? nb.x + LF() * 4.2 : nb.x + nb.w * 0.62, nb.y + LF() * (n ? 0.9 : 1.1), "神经元整夜都在忙", K.neu[1]);
  }

  // =================== 第 2 幕：浅睡 ===================
  function speaker(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.scale(-1, 1); ctx.translate(-x, -y);
    ctx.beginPath(); ctx.moveTo(x - s * 0.9, y - s * 0.3); ctx.lineTo(x - s * 0.45, y - s * 0.3); ctx.lineTo(x, y - s * 0.7); ctx.lineTo(x, y + s * 0.7); ctx.lineTo(x - s * 0.45, y + s * 0.3); ctx.lineTo(x - s * 0.9, y + s * 0.3); ctx.closePath();
    ctx.fillStyle = glossy(x - s * 0.4, y, s, "#ffffff", "#c9d1e2"); ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = Math.max(1, s * 0.1); ctx.lineJoin = "round"; ctx.stroke();
    ctx.lineCap = "round";
    for (let k = 0; k < 3; k++) {
      const p = (time * 0.9 + k / 3) % 1;
      ctx.strokeStyle = rgba(K.fire, Math.min(1, (1 - p) * 1.4)); ctx.lineWidth = Math.max(1.5, s * 0.16);
      ctx.beginPath(); ctx.arc(x + s * 0.1, y, s * (0.5 + p * 1.1), -0.75, 0.75); ctx.stroke();
    }
    ctx.restore();
  }
  function scene1(A, Lg, live, T) {
    const n = nar(), L = split(A, Lg, n ? 0.46 : 0.5), on = onOf(1, live);
    const t = S.clock;
    if (live) curT = t;
    const G = hyp(L.hy, { hi: [2, 3], cur: t });
    // 声音：浅睡时一点动静就醒
    const ss = Math.max(8, Math.min(G.rh * 0.5, G.fs * 1.1)), spx = G.X(t) + ss * 3.4, spy = G.Y(0) + G.rh * 0.15;
    speaker(spx, spy, ss, 0.6 + 0.4 * Math.sin(time * 2));
    // 三行脑电：清醒 → N1 → N2
    const D = L.D;
    panel(D, 10);
    const rows = [[0, n ? "清醒 α 波" : "清醒：α 波"], [2, n ? "浅睡 N1" : "浅睡 N1：变慢"], [3, n ? "浅睡 N2" : "浅睡 N2"]];
    const fs = SF() * 0.92;
    font(fs, 600);
    const lw = Math.max.apply(null, rows.map((r) => ctx.measureText(r[1]).width));
    const x0 = D.x + fs * 0.8 + lw + fs * 0.7, x1 = D.x + D.w - fs * 0.8, rh = (D.h - fs * 0.6) / 3, u = unitOf();
    let sp = null;
    rows.forEach((row, k) => {
      const yc = D.y + fs * 0.3 + rh * (k + 0.5), amp = rh * 0.34, c = shade(STG[row[0]].col, "#1b2440", 0.3);
      txt(row[1], D.x + fs * 0.8, yc, fs, c, "left", 600);
      if (row[0] === 3) {
        // 纺锤波、K 复合波的底色
        for (let m = 0; m * SPP * u < x1 - x0; m++) {
          const a = x0 + (m * SPP + 8) * u, b = x0 + (m * SPP + 22) * u, ka = x0 + (m * SPP + 37) * u, kb = x0 + (m * SPP + 49) * u;
          ctx.fillStyle = K.spin; if (a < x1) { ctx.beginPath(); ctx.roundRect(a, yc - rh * 0.46, Math.min(b, x1) - a, rh * 0.92, 4); ctx.fill(); }
          ctx.fillStyle = K.kc; if (ka < x1) { ctx.beginPath(); ctx.roundRect(ka, yc - rh * 0.46, Math.min(kb, x1) - ka, rh * 0.92, 4); ctx.fill(); }
          const cx = x0 + (m * SPP + 15) * u;
          if (cx < x1 - 10 && (!sp || Math.abs(cx - (x0 + x1) * 0.5) < Math.abs(sp.x - (x0 + x1) * 0.5))) sp = { x: cx, y: yc - amp * 0.5 };
          const kx = x0 + (m * SPP + 42.5) * u;
          if (!n && kx < x1 - 20 && m === 0) txt("K 复合波", kx, yc - rh * 0.34, fs * 0.85, "#6a55b0", "center", 600);
        }
      } else {
        ctx.strokeStyle = "rgba(143,154,179,0.18)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, yc); ctx.lineTo(x1, yc); ctx.stroke();
      }
      trace(x0, x1, yc, amp, row[0], u, c, "sweep");
    });
    const cx = G.X(t);
    tag("light", on("light"), spx + ss * 0.5, spy, n ? cx + (G.X(8) - cx) * 0.55 : G.X(4.6), n ? G.Y(0) + G.rh * 0.15 : G.Y(0) + G.rh * 0.1, "浅睡：一点动静就醒", K.fire);
    if (sp) tag("spindle", on("spindle"), sp.x, sp.y, n ? sp.x + LF() * 2.5 : sp.x + LF() * 3, D.y + rh * 1.35, "纺锤波", STG[3].col);
  }

  // =================== 第 3 幕：深睡与生长激素 ===================
  function pituitary(p, r, act) {
    const c = K.pit;
    if (act > 0.01) {
      const g = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], r * 3);
      g.addColorStop(0, rgba(TB.molecule("gh").color[1], 0.45 * act)); g.addColorStop(1, rgba(TB.molecule("gh").color[1], 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p[0], p[1], r * 3, 0, TAU); ctx.fill();
    }
    ctx.beginPath(); ctx.ellipse(p[0], p[1], r * 1.15, r, 0, 0, TAU);
    ctx.fillStyle = glossy(p[0], p[1], r * 1.2, c[0], c[1]); ctx.fill();
    ctx.strokeStyle = c[2]; ctx.lineWidth = Math.max(1, r * 0.12); ctx.stroke();
  }
  // 肌肉纤维束（示意）
  function muscle(x, y, w, h, heal) {
    const nf = 4, fh = h / nf;
    for (let k = 0; k < nf; k++) {
      const yy = y + k * fh;
      ctx.beginPath(); ctx.roundRect(x, yy + fh * 0.08, w, fh * 0.84, fh * 0.42);
      ctx.fillStyle = glossy(x + w * 0.3, yy + fh * 0.3, w * 0.6, "#fbd6d0", "#e59a90"); ctx.fill();
      ctx.strokeStyle = "#b6645a"; ctx.lineWidth = 1; ctx.stroke();
      ctx.strokeStyle = "rgba(182,100,90,0.35)";
      ctx.beginPath(); for (let j = 1; j < 9; j++) { const xx = x + w * j / 9; ctx.moveTo(xx, yy + fh * 0.2); ctx.lineTo(xx, yy + fh * 0.8); } ctx.stroke();
    }
    // 修补处的光
    const hx = x + w * 0.62, hy = y + fh * 1.5;
    const g = ctx.createRadialGradient(hx, hy, 0, hx, hy, h * 0.45);
    g.addColorStop(0, rgba(TB.molecule("gh").color[1], 0.5 * heal)); g.addColorStop(1, rgba(TB.molecule("gh").color[1], 0));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(hx, hy, h * 0.45, 0, TAU); ctx.fill();
    return [hx, hy];
  }
  function scene2(A, Lg, live, T) {
    const n = nar(), L = split(A, Lg, n ? 0.45 : 0.46), on = onOf(2, live);
    const t = S.clock;
    if (live) curT = t;
    const G = hyp(L.hy, { hi: [4], cur: t });
    const D = L.D, g = n ? 6 : 12;
    // 左：慢波
    const eb = { x: D.x, y: D.y, w: D.w * (n ? 0.46 : 0.46), h: D.h };
    panel(eb, 10);
    if (!n) ptitle(eb, "深睡时的脑电");
    const u = unitOf(), ex0 = eb.x + SF() * 0.7, ex1 = eb.x + eb.w - SF() * 0.7, yc = eb.y + eb.h * 0.6, amp = eb.h * 0.28;
    ctx.strokeStyle = "rgba(143,154,179,0.2)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(ex0, yc); ctx.lineTo(ex1, yc); ctx.stroke();
    trace(ex0, ex1, yc, amp, 4, u, shade(STG[4].col, "#1b2440", 0.1), "sweep", Math.max(1.8, H * 0.0045));
    // 找一个靠中间的波峰给标注
    const per = TAU / 0.3;
    let pk = Math.round(((ex0 + ex1) / 2 - ex0) / u / per - 0.25);
    const qx = ex0 + ((pk + 0.25) * per - 0.25) * u;
    // 右：垂体分泌生长激素 → 肌肉和组织
    const br = { x: eb.x + eb.w + g, y: D.y, w: D.w - eb.w - g, h: D.h };
    panel(br, 10);
    const mw = br.w * (n ? 0.26 : 0.26);
    const bb = TB.brainBox({ x: br.x + 4, y: br.y + (n ? 2 : 6), w: br.w - mw - 12, h: br.h * 0.8 }), B = TB.brain(bb);
    const pp = B.P(0.44, 0.745), pr = Math.max(4, bb.h * 0.045);
    ctx.strokeStyle = K.pit[1]; ctx.lineWidth = Math.max(2, pr * 0.45); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(B.hypothalamus[0], B.hypothalamus[1] + bb.h * 0.02); ctx.lineTo(pp[0], pp[1] - pr * 0.6); ctx.stroke();
    pituitary(pp, pr, 0.6 + 0.4 * Math.sin(time * 2));
    if (!n) txt("垂体", pp[0] - pr * 1.6, pp[1] + pr * 0.2, SF() * 0.9, K.pit[2], "right", 700);
    const mx = br.x + br.w - mw - 4, mh = Math.min(br.h * 0.4, mw * 1.1), my = br.y + br.h * 0.86 - mh - SF() * 1.2;
    const hp = muscle(mx, my, mw - 6, mh, 0.6 + 0.4 * Math.sin(time * 1.7));
    txt(n ? "肌肉" : "肌肉和组织", mx + (mw - 6) / 2, my + mh + SF() * 0.9, SF() * 0.88, "#a0564c", "center", 600);
    const gy = br.y + br.h * 0.91;
    const gsp = arrow([[pp[0], pp[1] + pr], [pp[0], gy], [pp[0] + (mx - pp[0]) * 0.5, gy], [mx - 6, gy], [mx - 4, my + mh * 0.75]], TB.molecule("gh").color[1], Math.max(2.5, bb.h * 0.016), 0.9, "go");
    const ir = Math.min(IR(), bb.h * 0.06) * 0.8;
    if (gsp) for (let i = 0; i < 4; i++) { const tt = (time * 0.22 + i / 4) % 1, p = along(gsp, tt); mol("gh", p[0], p[1] - ir * 0.2, ir, Math.sin(tt * Math.PI), time * 0.8 + i); }
    void hp;
    // 标注
    const n3 = G.X((0.55 + 1.2) / 2);
    tag("early", on("early"), n3, G.Y(4) - G.bh * 0.5, n ? G.X(3.2) : G.X(2.3), n ? G.Y(0) - G.rh * 0.1 : G.Y(0), "前半夜深睡最多", STG[4].col);
    tag("slow", on("slow"), qx, yc - amp * 0.8, n ? eb.x + eb.w * 0.5 : eb.x + eb.w * 0.62, eb.y + LF() * (n ? 1.0 : 1.1), "又大又慢的慢波", STG[4].col);
    tag("gh", on("gh"), pp[0] + pr * 0.5, pp[1] - pr * 0.3, n ? br.x + br.w * 0.5 : br.x + br.w * 0.62, br.y + LF() * (n ? 1.0 : 1.1), "生长激素：修补身体", TB.molecule("gh").color[1]);
  }

  // =================== 第 4 幕：类淋巴系统（脑组织微观示意） ===================
  function glymph(r, live, T) {
    const n = nar(), fs = SF(), on = onOf(3, live), gv = 0.15 + 0.85 * ease(clamp((T - 0.8) / 3.2, 0, 1));
    if (live) gNow = gv;
    panel(r, 10);
    ctx.save(); ctx.beginPath(); ctx.roundRect(r.x, r.y, r.w, r.h, 10); ctx.clip();
    const head = fs * 1.9, y0 = r.y + head, y1 = r.y + r.h - fs * 0.5, hh = y1 - y0;
    const aw = r.w * (n ? 0.075 : 0.06), pv = r.w * (n ? 0.045 : 0.04), ef = r.w * (n ? 0.03 : 0.028);
    const ax0 = r.x + r.w * 0.025, pvL = ax0 + aw, efL = pvL + pv, pl = efL + ef;
    const vx1 = r.x + r.w * 0.975, vx0 = vx1 - aw * 0.95, pvR = vx0 - pv, efR = pvR - ef, pr = efR;
    // 血管（纵向）
    const vessel = (x, w, c, dir) => {
      const g = ctx.createLinearGradient(x, 0, x + w, 0);
      g.addColorStop(0, c[1]); g.addColorStop(0.4, c[0]); g.addColorStop(1, c[1]);
      ctx.fillStyle = g; ctx.fillRect(x, r.y, w, r.h);
      ctx.strokeStyle = c[2]; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(x, r.y); ctx.lineTo(x, r.y + r.h); ctx.moveTo(x + w, r.y); ctx.lineTo(x + w, r.y + r.h); ctx.stroke();
      for (let i = 0; i < 5; i++) { // 血细胞
        const p = (time * 0.18 + i / 5) % 1, yy = dir > 0 ? r.y + p * r.h : r.y + r.h - p * r.h;
        ctx.beginPath(); ctx.ellipse(x + w * (0.35 + 0.3 * rnd(i + 70)), yy, w * 0.2, w * 0.12, 0.3, 0, TAU);
        ctx.fillStyle = rgba(c[2], 0.35); ctx.fill();
      }
    };
    // 血管周围间隙（脑脊液）
    ctx.fillStyle = K.csfFill; ctx.fillRect(pvL, r.y, pv, r.h); ctx.fillRect(pvR, r.y, pv, r.h);
    vessel(ax0, aw, K.art, 1);
    vessel(vx0, vx1 - vx0, K.vein, -1);
    // 细胞之间的间隙（组织间液），醒着窄、深睡宽
    const pw = pr - pl;
    ctx.fillStyle = mix("#eef2f8", K.csfFill, gv); ctx.fillRect(pl, r.y, pw, r.h);
    const nc = n ? 3 : 4, nr = 3, base = Math.min(pw / nc, hh / nr) * 0.2;
    const gp = base * (0.3 + 0.75 * gv);
    const cw = (pw - (nc + 1) * gp) / nc, ch = (hh - (nr + 1) * gp) / nr;
    const chY = []; for (let k = 0; k <= nr; k++) chY.push(y0 + k * (ch + gp) + gp / 2);
    // 脑脊液沿血管周围间隙流下，穿过 AQP4 进入细胞间隙，带着废物流向静脉
    const ir = Math.min(IR(), hh * 0.07);
    const dotR = Math.max(1.6, ir * 0.22);
    const dot = (x, y, a) => { ctx.save(); ctx.globalAlpha *= a; ctx.beginPath(); ctx.arc(x, y, dotR, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.strokeStyle = K.csf; ctx.lineWidth = Math.max(1, dotR * 0.6); ctx.stroke(); ctx.restore(); };
    for (let i = 0; i < 7; i++) {
      const p = (time * 0.2 + i / 7) % 1;
      dot(pvL + pv * (0.3 + 0.4 * rnd(i + 90)), r.y + p * r.h, Math.sin(p * Math.PI));
      const q = (time * 0.2 * (0.4 + 0.6 * gv) + i / 7) % 1;
      dot(pvR + pv * (0.3 + 0.4 * rnd(i + 95)), r.y + r.h - q * r.h, Math.sin(q * Math.PI) * (0.3 + 0.7 * gv));
    }
    chY.forEach((cy, k) => {
      for (let i = 0; i < 5; i++) {
        const p = (washPh * 2.2 + i / 5 + rnd(k + 40) * 0.2) % 1;
        dot(pl + p * pw, cy + Math.sin(p * 9 + k) * gp * 0.12, Math.sin(p * Math.PI) * clamp(gv * 1.4, 0.15, 1));
      }
    });
    // 脑细胞
    for (let ry = 0; ry < nr; ry++) for (let cx = 0; cx < nc; cx++) {
      const x = pl + gp + cx * (cw + gp), y = y0 + gp + ry * (ch + gp);
      ctx.beginPath(); ctx.roundRect(x, y, cw, ch, Math.min(cw, ch) * 0.3);
      ctx.fillStyle = glossy(x + cw * 0.4, y + ch * 0.4, Math.max(cw, ch) * 0.7, K.cell[0], K.cell[1]); ctx.fill();
      ctx.strokeStyle = K.cell[2]; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x + cw * (0.45 + 0.1 * rnd(ry * 5 + cx)), y + ch * 0.5, Math.min(cw, ch) * 0.16, Math.min(cw, ch) * 0.13, 0, 0, TAU);
      ctx.fillStyle = "rgba(90,100,130,0.18)"; ctx.fill();
    }
    // 两侧的星形胶质细胞足突 + AQP4 水通道
    const efH = (a, b, x, w) => {
      ctx.beginPath(); ctx.roundRect(x, a, w, b - a, w * 0.45);
      ctx.fillStyle = glossy(x + w * 0.4, (a + b) / 2, (b - a) * 0.6, K.foot[0], K.foot[1]); ctx.fill();
      ctx.strokeStyle = K.foot[2]; ctx.lineWidth = 1; ctx.stroke();
    };
    const cr = Math.max(4, Math.min(ef * 0.55, ir * 0.62));
    for (let k = -1; k <= nr; k++) {
      const a = k < 0 ? r.y - 10 : chY[k] + cr * 1.15, b = k === nr ? r.y + r.h + 10 : chY[k + 1] - cr * 1.15;
      efH(a, b, efL, ef); efH(a, b, efR, ef);
    }
    chY.forEach((cy) => { mol("aqp4", efL + ef / 2, cy, cr, 1, Math.PI / 2); mol("aqp4", efR + ef / 2, cy, cr, 1, Math.PI / 2); });
    // β-淀粉样蛋白：在细胞间隙里，被水流带向静脉
    let pick = null;
    const wbx = n ? pl + pw * 0.55 : pl + pw * 0.7, wby = y1 - ch * (n ? 0.25 : 0.35);
    const nb = n ? 7 : 10;
    for (let i = 0; i < nb; i++) {
      const k = i % (nr + 1), sp = 0.7 + 0.6 * rnd(i + 21);
      const p = (rnd(i + 11) + washPh * sp) % 1;
      const x = pl + gp * 0.5 + p * (pw - gp), y = chY[k] + Math.sin(time * 1.3 + i) * gp * 0.15;
      const a = clamp(p * 10, 0, 1) * clamp((1 - p) * 8, 0, 1) * clamp(S.waste * 1.4 + 0.25, 0, 1);
      mol("abeta", x, y, ir * 0.62, a, Math.sin(time * 0.8 + i) * 0.4);
      const dd = Math.abs(x - wbx) + Math.abs(y - wby) * 2;
      if (p > 0.12 && p < 0.9 && a > 0.6 && (!pick || dd < pick.d)) pick = { x, y, d: dd };
    }
    // 水流方向的小箭头：动脉旁向下，细胞间隙里向右（流向静脉），静脉旁向上
    const chev = (x, y, ang, sz, a) => {
      ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(ang);
      ctx.strokeStyle = K.csf; ctx.lineWidth = Math.max(1.4, sz * 0.35); ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath(); ctx.moveTo(-sz * 0.5, -sz); ctx.lineTo(sz * 0.5, 0); ctx.lineTo(-sz * 0.5, sz); ctx.stroke(); ctx.restore();
    };
    const cz = Math.max(3, Math.min(gp * 0.28, ir * 0.35));
    chY.forEach((cy, k) => { for (let c = 0; c < nc; c++) if ((c + k) % 2) chev(pl + gp + (c + 0.5) * (cw + gp) + gp * 0.3, cy, 0, cz, clamp(gv * 1.3 - 0.2, 0, 0.9)); });
    [0.18, 0.5, 0.82].forEach((f) => { chev(pvL + pv / 2, r.y + r.h * f, Math.PI / 2, cz, 0.8); chev(pvR + pv / 2, r.y + r.h * f, -Math.PI / 2, cz, 0.8); });
    // 间隙变宽的标尺
    const mx = pl + gp + cw + gp / 2, my = y0 + gp + ch * 0.5;
    ctx.strokeStyle = "#2f7fb3"; ctx.lineWidth = 1.3; ctx.lineCap = "round";
    const hw = gp * 0.42, ah = Math.max(2.5, gp * 0.18);
    ctx.beginPath(); ctx.moveTo(mx - hw, my); ctx.lineTo(mx + hw, my);
    ctx.moveTo(mx - hw + ah, my - ah); ctx.lineTo(mx - hw, my); ctx.lineTo(mx - hw + ah, my + ah);
    ctx.moveTo(mx + hw - ah, my - ah); ctx.lineTo(mx + hw, my); ctx.lineTo(mx + hw - ah, my + ah); ctx.stroke();
    ctx.restore();
    // 顶部小字
    const fy = r.y + fs * 0.95;
    txt("动脉", ax0 + aw / 2, fy, fs * 0.88, K.art[2], "center", 700);
    txt("静脉", vx0 + (vx1 - vx0) / 2, fy, fs * 0.88, K.vein[2], "center", 700);
    const wide = gv > 0.55;
    txt(wide ? (n ? "深睡：细胞间隙变宽" : "深睡时：脑细胞之间的间隙变宽") : (n ? "醒着：细胞间隙窄" : "醒着时：脑细胞之间的间隙很窄"), (pl + pr) / 2, fy, fs * 0.9, wide ? "#2f7fb3" : K.soft, "center", 600);
    txt("足突", efL + ef / 2, fy, fs * 0.8, K.foot[2], "center", 600);
    txt("足突", efR + ef / 2, fy, fs * 0.8, K.foot[2], "center", 600);
    // 标注
    const cy = r.y + r.h * 0.3;
    tag("csf", on("csf"), pvL + pv / 2, cy, n ? pl + pw * 0.4 : pl + pw * 0.3, n ? y0 + gp + ch * 0.3 : y0 + gp + ch * 0.25, "脑脊液冲走废物", K.csf);
    if (pick) tag("waste", on("waste"), pick.x, pick.y, wbx, wby, "代谢废物被冲走", TB.molecule("abeta").color[1]);
  }
  function scene3(A, Lg, live, T) {
    const n = nar(), on = onOf(3, live);
    void on;
    const mini = n && H < 450, L = split(A, Lg, mini ? 0.2 : 0.3);
    const t = S.clock;
    if (live) curT = t;
    hyp(L.hy, { hi: [4], cur: t, mini });
    const D = n ? L.D : { x: A.x, y: L.D.y, w: A.w - Lg.bw - 14, h: L.D.h };
    glymph(D, live, T);
  }

  // =================== 第 5 幕：快速眼动睡眠 ===================
  function hippo(B, bb, act) {
    const pts = [B.P(0.47, 0.64), B.P(0.52, 0.665), B.P(0.6, 0.655), B.P(0.66, 0.6), B.P(0.64, 0.56)];
    const c = K.hip;
    if (act > 0.01) {
      const p = B.P(0.57, 0.63), g = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], bb.w * 0.12);
      g.addColorStop(0, rgba(c[1], 0.45 * act)); g.addColorStop(1, rgba(c[1], 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p[0], p[1], bb.w * 0.12, 0, TAU); ctx.fill();
    }
    TB.smoothPath(pts, false);
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = c[2]; ctx.lineWidth = bb.h * 0.05; ctx.stroke();
    TB.smoothPath(pts, false);
    ctx.strokeStyle = c[1]; ctx.lineWidth = bb.h * 0.036; ctx.stroke();
    return B.P(0.52, 0.66);
  }
  function scene4(A, Lg, live, T) {
    const n = nar(), mini = n && H < 450, L = split(A, Lg, mini ? 0.2 : n ? 0.34 : 0.42), on = onOf(4, live);
    const t = S.clock;
    if (live) curT = t;
    const G = hyp(L.hy, { hi: [1], cur: t, mini });
    const D = L.D, g = n ? 6 : 12;
    // 左：三道记录——脑电、眼动、肌电
    const pb = { x: D.x, y: D.y, w: D.w * (n ? 0.5 : 0.5), h: D.h };
    panel(pb, 10);
    const rows = [[1, "脑电", shade(STG[1].col, "#1b2440", 0.25)], [5, "眼动", K.eog], [6, n ? "肌张力" : "肌张力：很低", "#8f9ab3"]];
    const fs = SF() * 0.92;
    font(fs, 600);
    const lw = Math.max.apply(null, rows.map((r) => ctx.measureText(r[1]).width));
    const x0 = pb.x + fs * 0.7 + lw + fs * 0.6, x1 = pb.x + pb.w - fs * 0.7, rh = (pb.h - fs * 0.6) / 3, u = unitOf();
    let eogPt = null;
    rows.forEach((row, k) => {
      const yc = pb.y + fs * 0.3 + rh * (k + 0.5);
      if (row[0] === 6) {
        txt(row[1], pb.x + fs * 0.7, yc, fs, row[2], "left", 600);
        trace(x0, x1, yc, rh * 0.34, 6, u, row[2], "sweep");
      } else {
        txt(row[1], pb.x + fs * 0.7, yc, fs, row[2], "left", 600);
        trace(x0, x1, yc, rh * (row[0] === 5 ? 0.3 : 0.36), row[0], u, row[2], "sweep");
      }
      if (row[0] === 5) { const ex = x0 + (x1 - x0) * 0.32; eogPt = { x: ex, y: yc - wave(5, (ex - x0) / u) * rh * 0.3 }; }
    });
    // 右：大脑——皮层活跃（做梦），海马 → 皮层（整理记忆），眼球快速转动
    const br = { x: pb.x + pb.w + g, y: D.y, w: D.w - pb.w - g, h: D.h };
    panel(br, 10);
    const bb = TB.brainBox({ x: br.x + 4, y: br.y + 4, w: br.w - 8, h: br.h - 8 });
    // 皮层活跃的光晕（在大脑下面垫一层）
    const gc = [bb.x + bb.w * 0.42, bb.y + bb.h * 0.3], pulse = 0.75 + 0.25 * Math.sin(time * 2.4);
    const B = TB.brain(bb);
    ctx.save(); ctx.globalCompositeOperation = "multiply";
    const gg = ctx.createRadialGradient(gc[0], gc[1], 0, gc[0], gc[1], bb.w * 0.45);
    gg.addColorStop(0, rgba(STG[1].col, 0.35 * pulse)); gg.addColorStop(1, rgba(STG[1].col, 0));
    ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(gc[0], gc[1], bb.w * 0.45, 0, TAU); ctx.fill();
    ctx.restore();
    const hp = hippo(B, bb, pulse);
    const msp = arrow([hp, B.P(0.4, 0.5), B.P(0.26, 0.36), B.P(0.25, 0.2)], K.mem, Math.max(2.2, bb.h * 0.014), 0.85, "go");
    flow(msp, K.mem, 3, Math.max(2, bb.h * 0.012), 1, 0.35);
    if (!n) {
      txt("海马", hp[0] + bb.w * 0.04, hp[1] + bb.h * 0.08, SF() * 0.88, K.hip[2], "left", 700);
      txt("皮层", B.P(0.25, 0.14)[0] + bb.w * 0.07, B.P(0.25, 0.14)[1], SF() * 0.88, "#9a4b82", "left", 700);
    }
    // 眼球：虹膜快速上下跳动
    const e = B.eye, er = B.er;
    const jig = wave(5, time * 7) * 0.45;
    ctx.beginPath(); ctx.arc(e[0], e[1], er, 0, TAU); ctx.fillStyle = glossy(e[0], e[1], er, "#ffffff", "#e6ebf3"); ctx.fill();
    ctx.strokeStyle = "#9eaacb"; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(e[0] - er * 0.78, e[1] + jig * er, er * 0.2, er * 0.45, 0, 0, TAU);
    ctx.fillStyle = glossy(e[0] - er * 0.78, e[1], er * 0.5, "#6d9ad6", "#2c4f86"); ctx.fill();
    ctx.strokeStyle = K.eog; ctx.lineWidth = 1.4; ctx.lineCap = "round";
    const ax = e[0] - er * 1.45;
    ctx.beginPath(); ctx.moveTo(ax, e[1] - er * 0.7); ctx.lineTo(ax, e[1] + er * 0.7);
    ctx.moveTo(ax - er * 0.22, e[1] - er * 0.45); ctx.lineTo(ax, e[1] - er * 0.7); ctx.lineTo(ax + er * 0.22, e[1] - er * 0.45);
    ctx.moveTo(ax - er * 0.22, e[1] + er * 0.45); ctx.lineTo(ax, e[1] + er * 0.7); ctx.lineTo(ax + er * 0.22, e[1] + er * 0.45); ctx.stroke();
    // 标注
    const lr = G.X((7.0 + 7.6) / 2);
    tag("late", on("late"), lr, G.Y(1) + (n ? G.bh * 0.5 : -G.bh * 0.5), n ? br.x + br.w * 0.5 : G.X(6.2), n ? br.y + LF() * 0.95 : G.Y(4), "后半夜快速眼动更多", STG[1].col);
    tag("dream", on("dream"), gc[0], gc[1] + (n ? bb.h * 0.08 : 0), n ? br.x + br.w * 0.5 : br.x + br.w * 0.62, n ? br.y + br.h - LF() * 0.95 : br.y + LF() * 1.0, "生动的梦多在这时", STG[1].col);
    if (n) { if (eogPt) tag("eyes", on("eyes"), eogPt.x, eogPt.y, pb.x + pb.w * 0.55, pb.y + rh * 1.0 - LF() * 0.3, "眼珠快速转动", K.eog); }
    else tag("eyes", on("eyes"), e[0], e[1] + er, br.x + br.w * 0.3, br.y + br.h - LF() * 1.0, "眼珠快速转动", K.eog);
  }

  // =================== 第 6 幕：怎样睡个好觉 ===================
  function glyph(k, x, y, s) {
    ctx.save(); ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.lineWidth = Math.max(1.4, s * 0.1); ctx.strokeStyle = K.ink;
    if (k === 0) { // 规律作息：钟
      ctx.beginPath(); ctx.arc(x, y, s * 0.62, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - s * 0.42); ctx.moveTo(x, y); ctx.lineTo(x + s * 0.3, y + s * 0.12); ctx.stroke();
    } else if (k === 1) { // 暗：月亮
      ctx.beginPath(); ctx.arc(x, y, s * 0.6, 0.6, TAU - 0.6 + 0.001); ctx.arc(x + s * 0.34, y - s * 0.12, s * 0.46, TAU - 1.0, 1.25, true); ctx.closePath();
      ctx.fillStyle = glossy(x, y, s * 0.6, "#fff3c4", "#e8b93a"); ctx.fill(); ctx.strokeStyle = "#a57c12"; ctx.stroke();
    } else if (k === 2) { // 凉：温度计
      ctx.beginPath(); ctx.roundRect(x - s * 0.14, y - s * 0.66, s * 0.28, s * 0.9, s * 0.14); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y + s * 0.4, s * 0.25, 0, TAU); ctx.fillStyle = "#3d9df2"; ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#3d9df2"; ctx.fillRect(x - s * 0.06, y - s * 0.1, s * 0.12, s * 0.4);
    } else if (k === 3) { // 静：声音关小
      ctx.beginPath(); ctx.moveTo(x - s * 0.6, y - s * 0.2); ctx.lineTo(x - s * 0.3, y - s * 0.2); ctx.lineTo(x, y - s * 0.5); ctx.lineTo(x, y + s * 0.5); ctx.lineTo(x - s * 0.3, y + s * 0.2); ctx.lineTo(x - s * 0.6, y + s * 0.2); ctx.closePath();
      ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.stroke();
      ctx.strokeStyle = K.soft; ctx.beginPath(); ctx.moveTo(x + s * 0.2, y - s * 0.2); ctx.lineTo(x + s * 0.6, y + s * 0.2); ctx.moveTo(x + s * 0.6, y - s * 0.2); ctx.lineTo(x + s * 0.2, y + s * 0.2); ctx.stroke();
    } else if (k === 4) { // 睡前放下手机
      ctx.beginPath(); ctx.roundRect(x - s * 0.32, y - s * 0.56, s * 0.64, s * 1.12, s * 0.12); ctx.fillStyle = "#3a4560"; ctx.fill();
      ctx.beginPath(); ctx.roundRect(x - s * 0.25, y - s * 0.46, s * 0.5, s * 0.84, s * 0.06); ctx.fillStyle = glossy(x, y, s * 0.5, "#d4ecff", "#3d9df2"); ctx.fill();
      noSign(x + s * 0.42, y + s * 0.4, s * 0.3, 1);
    } else { // 睡不着先起来，困了再躺
      ctx.beginPath(); ctx.moveTo(x - s * 0.62, y - s * 0.1); ctx.lineTo(x - s * 0.62, y + s * 0.45); ctx.moveTo(x - s * 0.62, y + s * 0.2); ctx.lineTo(x + s * 0.62, y + s * 0.2); ctx.lineTo(x + s * 0.62, y + s * 0.45); ctx.stroke();
      ctx.beginPath(); ctx.roundRect(x - s * 0.55, y - s * 0.12, s * 0.35, s * 0.26, s * 0.1); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.roundRect(x - s * 0.15, y - s * 0.02, s * 0.75, s * 0.2, s * 0.06); ctx.fillStyle = "#b9c7f2"; ctx.fill(); ctx.stroke();
      ctx.restore(); ctx.save();
      arrow([[x + s * 0.2, y - s * 0.2], [x + s * 0.28, y - s * 0.72]], "#2fa465", Math.max(2, s * 0.12), 1, "go");
    }
    ctx.restore();
  }
  function scene5(A, Lg, live, T) {
    const n = nar(), L = split(A, Lg, n ? 0.55 : 0.56), on = onOf(5, live);
    const t = S.clock;
    if (live) curT = t;
    const G = hyp(L.hy, { cur: t, span: [0.15, 7.6, ""], dawn: 0.6 + 0.4 * Math.sin(time * 0.8) });
    const D = L.D;
    panel(D, 10);
    const caps = n ? [["规律作息"], ["暗"], ["凉"], ["静"], ["少看手机"], ["困了再躺"]] : [["定时睡", "定时起"], ["卧室暗"], ["卧室凉"], ["卧室静"], ["睡前少", "看手机"], ["睡不着", "先起来"]];
    const fs = SF() * (n ? 0.86 : 0.9);
    if (!n) ptitle(D, "睡个好觉，可以这样做");
    const top = D.y + (n ? fs * 0.4 : fs * 1.8), cw = D.w / 6;
    const s = Math.max(9, Math.min(cw * 0.26, (D.y + D.h - top - fs * (n ? 2.2 : 3.2)) * 0.4));
    caps.forEach((c, k) => {
      const x = D.x + cw * (k + 0.5), y = top + (D.y + D.h - top - fs * (n ? 1.6 : 2.6)) * 0.5;
      const bob = Math.sin(time * 1.4 + k * 0.9) * s * 0.04;
      ctx.beginPath(); ctx.arc(x, y + bob, s * 1.12, 0, TAU);
      ctx.fillStyle = glossy(x, y + bob, s * 1.12, "#ffffff", "#e3e9f4"); ctx.fill(); ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.stroke();
      glyph(k, x, y + bob, s);
      c.forEach((line, j) => txt(line, x, y + s * 1.12 + fs * (0.95 + j * 1.2), fs, K.ink, "center", 500));
    });
    const mx = G.X(4), myb = L.hy.y + G.fs * 1.55;
    tag("rest", on("rest") && T > 0.8, mx, myb, mx, myb, "每晚睡够 7 小时以上", "#2f8f6a");
  }

  function drawScene(i, live, T) {
    const L = areaFor(i), A = L.A, Lg = L.Lg;
    if (i === 0) scene0(A, Lg, live, T);
    else if (i === 1) scene1(A, Lg, live, T);
    else if (i === 2) scene2(A, Lg, live, T);
    else if (i === 3) scene3(A, Lg, live, T);
    else if (i === 4) scene4(A, Lg, live, T);
    else scene5(A, Lg, live, T);
    TB.legend(Lg);
  }

  function hud() {
    const m = Math.round(curT * 12) * 5 + 23 * 60, hh = Math.floor(m / 60) % 24, mm = m % 60;
    pill(14, 12, "时间", `${hh}:${mm < 10 ? "0" : ""}${mm}`, K.accent, false);
    const p = CH[cur].pill;
    pill(W - 14, 12, p[0], p[1], p[2], true);
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
    chapters: CH, state: S, dur: DUR, accent: "#5c6bc0",
    titleCard: { lines: ["睡着以后，", "大脑在忙什么？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
