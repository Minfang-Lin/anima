// 睡意从哪来：教科书示意图画风（机制类集），通用画法见 shared/textbook.js。
Anima.register("sleep-drive", {
    "title": "睡意从哪来",
    "tag": "睡眠小剧场",
    "headline": "为什么越熬越【困】？",
    "lede": "困意不是凭空来的：大脑里有一座跟着太阳走的生物钟，还有一只醒得越久越满的“困意沙漏”。认识腺苷、咖啡因、褪黑素和睡眠开关，看看睡意是怎么攒起来的。",
    "summary": "生物钟和睡眠压力一起决定什么时候困：腺苷、咖啡因、褪黑素、GABA 和食欲素，以及午睡为什么别太长。",
    "footer": "长期失眠可到睡眠医学科、神经内科或精神心理科就诊。",
    "canvasLabel": "大脑与突触示意图：睡意从哪来",
    "disease": "睡眠与失眠",
    "organs": ["brain"],
    "categories": ["sleep"],
    "color": "#5d63c9",
    "look": "textbook"
  }, () => {
  const CH = [
    { title: "两个开关管睡觉", feel: 0.15, aden: 0.3, bound: 0.2, caff: 0, sky: 0, mel: 0,
      pill: ["时间", "7:00", "ok"],
      text: "什么时候犯困，主要由大脑里的两套机制一起决定。一套是生物钟，在下丘脑的视交叉上核，它跟着日照定时间，白天让人清醒，晚上提醒该休息了。另一套是睡眠压力，醒着的时间越长，它积得越多，人就越困。",
      fact: "生物钟一圈约 24 小时，每天靠早晨的光线重新对表",
      labels: ["clock", "glass"] },
    { title: "腺苷：困意的沙漏", feel: 0.85, aden: 0.9, bound: 0.9, caff: 0, sky: 1, mel: 0,
      pill: ["时间", "23:00", "warn"],
      text: "醒着的时候，大脑一直在用能量，会留下一种叫腺苷的小分子。醒得越久，腺苷积得越多，它插进神经细胞上的“困意插座”，也就是腺苷受体，神经细胞慢慢安静下来，人就越来越困。好好睡一觉，腺苷被清掉，沙漏又重新归零。",
      fact: "醒得越久，睡眠压力越大；睡一觉，它就降下来",
      labels: ["aden", "socket"] },
    { title: "咖啡因：戴墨镜的冒充者", feel: 0.25, aden: 0.7, bound: 0, caff: 1, sky: 0, mel: 0,
      pill: ["时间", "15:00", "ok"],
      text: "咖啡因长得有点像腺苷，它抢先占住困意插座，却不传递困意，所以喝了咖啡、浓茶，一时就不觉得困。可腺苷并没有消失，还在门外排队。等咖啡因慢慢代谢掉，攒下的困意就会一下子涌上来。下午喝的咖啡，到了晚上可能还在起作用。",
      fact: "咖啡因半衰期约 5 小时（3～7 小时），睡前 6 小时内少喝咖啡浓茶",
      labels: ["caff", "queue"] },
    { title: "褪黑素：天黑的信号", feel: 0.6, aden: 0.6, bound: 0.6, caff: 0, sky: 0.85, mel: 1,
      pill: ["时间", "21:00", "warn"],
      text: "天黑以后，大脑深处的松果体开始分泌褪黑素，它像一封信，告诉全身“天黑了，该准备睡觉了”。可光线会让松果体停工，尤其是手机、平板屏幕里的蓝光。睡前一直刷手机，褪黑素出来得少、出来得晚，人就迟迟睡不着。",
      fact: "褪黑素更像“到点”的信号，不是强效安眠药，要不要吃请遵医嘱",
      labels: ["mel", "blue"] },
    { title: "睡眠开关：GABA 和食欲素", feel: 0.95, aden: 0.9, bound: 0.9, caff: 0, sky: 1, mel: 0.6,
      pill: ["时间", "23:00", "ok"],
      text: "困意攒够了，天也黑了，下丘脑里的睡眠中心就放出 GABA，让清醒中心安静下来，开关拨到“睡”。白天则是食欲素让开关稳稳停在“醒”，组胺也在帮忙保持清醒。一些老式抗过敏药会让人犯困，就是因为挡住了组胺的作用。",
      fact: "这个开关像跷跷板：一头沉下去，另一头就翘起来",
      labels: ["gaba", "wake"] },
    { title: "午睡为什么别太长", feel: 0.3, aden: 0.3, bound: 0.2, caff: 0, sky: 0, mel: 0,
      pill: ["时间", "13:30", "ok"],
      text: "午睡能清掉一部分腺苷，下午更有精神。但睡得太久，晚上的睡眠压力就不够，躺下反而睡不着。睡超过 30 分钟，还容易进入深睡，醒来昏昏沉沉，这叫睡眠惰性。规律作息，白天多晒太阳，睡前少看屏幕，困意自然会按时来。",
      fact: "午睡建议 20～30 分钟，最好在下午 3 点以前",
      labels: ["nap", "short"] },
  ];
  const DUR = 12;


  const { clamp, mix, rnd, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0, prevCur = -1, prevLt = 0;
  const TB = Anima.textbook({ W: () => W, H: () => H, time: () => time });
  const { ctx, TAU, rgba, glossy, txt, background, sample, along, ease, LF, SF, IR, topY, nar, mol, receptor, minusSign, noSign, bolt, arrow, flow, bilayer, neuron, tag } = TB;

  // ---------- 本集颜色：分子 / 受体的颜色来自图标词典，这里只加本集特有的结构和曲线 ----------
  const K = Object.assign({}, TB.K, {
    scn: ["#b9eeea", "#27a39c", "#136b66"],      // 视交叉上核（生物钟）
    pin: ["#f8d0bd", "#d9876a", "#9c5038"],      // 松果体
    sOn: "#7a55d6", cLine: "#1f9a93", longNap: "#e0684a",
  });
  ["aden", "caff", "gaba", "orx", "mel", "his"].forEach((k) => { K[k] = TB.MOLECULES[k].color; });
  const S = { feel: 0.15, aden: 0.3, bound: 0.2, caff: 0, sky: 0, mel: 0 };

  function update(dt) {
    if (cur !== lastCur) { prevCur = lastCur; prevLt = lt; lastCur = cur; lt = 0; }
    lt += dt; prevLt += dt;
  }

  // ---------- 图例（每幕一套） ----------
  function legendItems(i) {
    return [
      [["line", K.sOn, "睡眠压力"], ["dash", K.cLine, "生物钟节律"], ["band", "#dfe3f3", "夜间睡眠"]],
      [["mol", "aden", "腺苷"], ["rec", "aden", "腺苷受体"], ["minus", "", "抑制"]],
      [["mol", "aden", "腺苷"], ["mol", "caff", "咖啡因"], ["rec", "aden", "腺苷受体"], ["no", "", "被占住"]],
      [["mol", "mel", "褪黑素"], ["rec", "mel", "褪黑素受体"], ["line", K.blue, "蓝光"]],
      [["mol", "gaba", "GABA"], ["rec", "gaba", "GABA受体"], ["mol", "orx", "食欲素"], ["rec", "orx", "食欲素受体"], ["mol", "his", "组胺"]],
      [["line", K.sOn, "午睡短"], ["dash", K.longNap, "午睡太长"], ["dash", K.cLine, "生物钟节律"]],
    ][i];
  }
  const legendLayout = (i) => TB.legendLayout(legendItems(i));
  const legend = (Lg) => TB.legend(Lg);

  // ---------- 突触剖面 ----------
  function synapse(r, live) {
    const ir = Math.min(IR(), r.w * 0.05, r.h * 0.058), mt = Math.max(7, ir * 0.9);
    const nn = nar();
    const cx = r.x + r.w / 2, yMem = r.y + r.h * (nn ? 0.63 : 0.7);
    const brx = r.w * (nn ? 0.3 : 0.28), bry = r.h * (nn ? 0.15 : 0.19), by = r.y + r.h * (nn ? 0.19 : 0.22), aw = r.w * 0.06;
    const caffOn = S.caff;
    // 突触后神经元
    const n = 5, xs = [];
    for (let i = 0; i < n; i++) xs.push(r.x + r.w * (0.12 + i * 0.19));
    // 先算每个受体上的状态
    const st = xs.map((x, i) => {
      const occC = clamp(caffOn * 1.8 - rnd(i + 40) * 0.8, 0, 1);
      const part = rnd(i + 11) < S.bound * 1.08 ? 1 : 0;
      const P = 5.5 + rnd(i + 3) * 3, ph = (time / P + rnd(i + 5)) % 1;
      let glow = 0;
      if (ph > 0.18 && ph < 0.8) glow = clamp((ph - 0.18) / 0.05, 0, 1) * clamp((0.8 - ph) / 0.05, 0, 1);
      glow *= part * (1 - occC) * clamp(S.bound * 1.5, 0, 1);
      return { x, occC, part, ph, glow };
    });
    const bound = st.reduce((a, s) => a + s.glow, 0) / n;
    const act = clamp(1 - bound * 1.1, 0, 1);
    const postTop = yMem - mt / 2;
    TB.postsynaptic(r.x, postTop, r.w, r.y + r.h - postTop, act);
    bilayer(r.x, r.x + r.w, yMem, mt);
    // 放电记录：清醒时尖峰密，安静时稀
    const ty = r.y + r.h * (nn ? 0.965 : 0.93), amp = r.h * (nn ? 0.055 : 0.07), x0 = r.x + r.w * 0.2, x1 = r.x + r.w * 0.92;
    TB.spikes(x0, x1, ty, amp, act);
    txt("放电", r.x + r.w * 0.1, ty - amp * 0.3, SF(), K.soft, "center", 500);
    bolt(x1 + ir * 0.6, ty - amp * 0.6, ir * 0.75, clamp((act - 0.6) * 2.5, 0, 1) * (0.75 + 0.25 * Math.sin(time * 4)));

    // 突触前末梢
    TB.presynaptic({ cx, top: r.y - 2, by, brx, bry, aw, mt, ir });
    txt("突触前", cx, r.y + r.h * 0.03 + SF() * 0.3, SF(), K.soft, "center", 500);
    if (!nn) txt("突触后神经元", r.x + r.w * 0.5, r.y + r.h * 0.815, SF(), mix("#7d86a0", "#b0703a", act), "center", 500);

    // 受体 + 结合在上面的分子
    const res = { adenBound: null, caffBound: null, free: null, queue: null };
    const relY = by + bry * 1.02;
    st.forEach((s, i) => {
      const occ = s.occC > 0.01 ? ["caff", s.occC] : null;
      const dock = receptor("aden", s.x, yMem, ir, mt, s.glow, 0, occ);
      if (s.occC > 0.5) {
        noSign(s.x + ir * 1.9, dock.y - ir * 0.2, ir * 0.48, clamp((s.occC - 0.5) * 3, 0, 1));
        res.caffBound = { x: s.x, y: dock.y - ir * 0.9 };
      }
      minusSign(s.x, yMem + mt / 2 + ir * 1.25, ir * 0.5, s.glow);
      // 腺苷：从末梢附近出来 → 漂到受体 → 结合 → 离开
      const ra = s.part * (1 - s.occC) * clamp(S.bound * 1.5, 0, 1);
      if (ra > 0.02) {
        const sx = cx + (s.x - cx) * 0.45, ph = s.ph;
        let x, y, a = ra;
        if (ph < 0.18) { const t = ease(ph / 0.18); x = sx + (s.x - sx) * t + Math.sin(ph * 30 + i) * ir * 0.3; y = relY + (dock.y - relY) * t; a *= clamp(ph / 0.04, 0, 1); }
        else if (ph < 0.8) { x = s.x; y = dock.y + Math.sin(time * 2 + i) * 0.6; }
        else { const t = (ph - 0.8) / 0.2; x = s.x + t * ir * 3 * (i % 2 ? 1 : -1); y = dock.y - t * ir * 3; a *= 1 - t; }
        mol("aden", x, y, ir, a);
        if (ph > 0.25 && ph < 0.75) res.adenBound = { x, y: y - ir * 0.9, i };
      }
      // 咖啡因占位时，腺苷在上方徘徊（排队）
      const qa = clamp(s.occC * 1.5 - 0.3, 0, 1) * clamp(S.aden * 1.4, 0, 1);
      if (qa > 0.02) {
        const hop = Math.abs(Math.sin(time * 1.6 + i * 1.3));
        const qx = s.x + Math.sin(time * 0.7 + i) * ir * 0.5, qy = dock.y - ir * 3.1 - hop * ir * 0.9;
        mol("aden", qx, qy, ir, qa);
        if (i === 4) res.queue = { x: qx, y: qy };
      }
    });
    // 间隙两侧游离的腺苷（越积越多）
    const nf = Math.round(S.aden * 8);
    for (let i = 0; i < nf; i++) {
      const left = i % 2 === 0, xa = left ? r.x + ir * 1.4 : cx + brx * 1.05 + ir, xb = left ? cx - brx * 1.05 - ir : r.x + r.w - ir * 1.4;
      const t = (rnd(i + 60) + time * 0.02 * (0.5 + rnd(i + 61))) % 1;
      const x = xa + (xb - xa) * (0.5 + 0.5 * Math.sin(t * TAU));
      const y = r.y + r.h * (0.12 + rnd(i + 80) * (nn ? 0.26 : 0.36)) + Math.sin(time * 0.9 + i * 2) * ir * 0.4;
      const a = clamp(S.aden * 8 - i, 0, 1) * 0.9;
      mol("aden", x, y, ir * 0.9, a);
      // 标注用：宽屏取右侧最上面的一个，窄屏取左侧最上面的一个
      if (a > 0.5 && left === nn && (!res.free || y < res.free.y)) res.free = { x, y };
    }
    return Object.assign(res, { ir, cx, brx, by, bry, yMem, act });
  }

  // 睡眠压力（腺苷）量筒
  function gauge(r, v) {
    const w = r.w, x = r.x, y = r.y, h = r.h, fs = SF();
    txt("睡眠压力", x + w / 2, y + fs * 0.6, fs, K.ink, "center", 700);
    const ty = y + fs * 1.6, th = h - fs * 3.2, tw = Math.min(w * 0.55, fs * 3.2), tx = x + (w - tw) / 2;
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(tx, ty, tw, th, tw * 0.3); ctx.fill();
    ctx.save(); ctx.clip();
    const ly = ty + th * (1 - v);
    const g = ctx.createLinearGradient(0, ly, 0, ty + th);
    g.addColorStop(0, "#c9b5f7"); g.addColorStop(1, K.aden[1]);
    ctx.fillStyle = g; ctx.fillRect(tx, ly, tw, ty + th - ly);
    ctx.globalAlpha *= 0.5;
    for (let i = 0; i < 12; i++) {
      const hy = ty + th - (i + 0.6) * tw * 0.55;
      if (hy < ly + tw * 0.2) break;
      ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1;
      ctx.beginPath(); TB.shapePath("hexagon", tx + tw * (i % 2 ? 0.66 : 0.34), hy, tw * 0.18); ctx.stroke();
    }
    ctx.restore();
    ctx.strokeStyle = "#aab5cc"; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.roundRect(tx, ty, tw, th, tw * 0.3); ctx.stroke();
    ctx.strokeStyle = "#c3cbdc";
    for (let k = 1; k < 5; k++) { const yy = ty + th * k / 5; ctx.beginPath(); ctx.moveTo(tx + tw, yy); ctx.lineTo(tx + tw + tw * 0.25, yy); ctx.stroke(); }
    ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.beginPath(); ctx.roundRect(tx + tw * 0.15, ty + tw * 0.3, tw * 0.12, th * 0.6, tw * 0.06); ctx.fill();
    txt("腺苷", x + w / 2, ty + th + fs * 0.95, fs, K.aden[2], "center", 500);
    return { x: tx + tw / 2, y: ly + 4 };
  }

  function scnNode(p, r, glow) {
    const c = K.scn;
    if (glow > 0.01) {
      const g = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], r * 2.6);
      g.addColorStop(0, rgba(c[1], 0.45 * glow)); g.addColorStop(1, rgba(c[1], 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p[0], p[1], r * 2.6, 0, TAU); ctx.fill();
    }
    ctx.beginPath(); ctx.arc(p[0], p[1], r, 0, TAU); ctx.fillStyle = glossy(p[0], p[1], r, c[0], c[1]); ctx.fill();
    ctx.strokeStyle = c[2]; ctx.lineWidth = Math.max(1, r * 0.1); ctx.stroke();
    // 表盘指针
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = Math.max(1.3, r * 0.16); ctx.lineCap = "round";
    const ha = -Math.PI / 2 + time * 0.2, ma = -Math.PI / 2 + time * 1.2;
    ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(p[0] + Math.cos(ha) * r * 0.45, p[1] + Math.sin(ha) * r * 0.45);
    ctx.moveTo(p[0], p[1]); ctx.lineTo(p[0] + Math.cos(ma) * r * 0.7, p[1] + Math.sin(ma) * r * 0.7); ctx.stroke();
  }
  function pinealGland(p, r, act) {
    const c = K.pin;
    if (act > 0.01) {
      const g = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], r * 2.8);
      g.addColorStop(0, rgba(K.mel[1], 0.45 * act)); g.addColorStop(1, rgba(K.mel[1], 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p[0], p[1], r * 2.8, 0, TAU); ctx.fill();
    }
    ctx.save(); ctx.translate(p[0], p[1]); ctx.rotate(0.5);
    ctx.beginPath(); ctx.moveTo(-r * 1.2, 0); ctx.bezierCurveTo(-r * 0.9, -r * 0.85, r * 0.6, -r * 0.8, r * 1.3, 0); ctx.bezierCurveTo(r * 0.6, r * 0.8, -r * 0.9, r * 0.85, -r * 1.2, 0);
    ctx.fillStyle = glossy(0, 0, r * 1.2, mix(c[0], "#ffffff", 0.2), mix("#c9bfc0", c[1], 0.35 + 0.65 * act)); ctx.fill();
    ctx.strokeStyle = c[2]; ctx.lineWidth = Math.max(1, r * 0.1); ctx.stroke();
    ctx.strokeStyle = rgba(c[2], 0.35);
    ctx.beginPath(); for (let k = -1; k <= 1; k++) { ctx.moveTo(k * r * 0.45 - r * 0.15, -r * 0.45); ctx.lineTo(k * r * 0.45 + r * 0.15, r * 0.45); } ctx.stroke();
    ctx.restore();
  }

  // ---------- 两过程曲线图 ----------
  const TW = 9.2, TSL = 4.6, S0 = 0.15;
  const rise = (s0, dt) => 1 - (1 - s0) * Math.exp(-dt / TW);
  function Sval(t, n0, n1) {
    if (t > 16) return Sval(16, n0, n1) * Math.exp(-(t - 16) / TSL);
    if (n1 && t > n0) {
      const s1 = rise(S0, n0);
      if (t <= n1) return s1 * Math.exp(-(t - n0) / TSL);
      return rise(s1 * Math.exp(-(n1 - n0) / TSL), t - n1);
    }
    return rise(S0, t);
  }
  const Cval = (t) => 0.5 + 0.3 * Math.cos(TAU * (t - 12) / 24);
  function chart(r, mode, reveal) {
    const fs = SF(), span = mode ? 16.6 : 24;
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(r.x, r.y, r.w, r.h, 10); ctx.fill();
    ctx.strokeStyle = "#d6dde9"; ctx.lineWidth = 1; ctx.stroke();
    const px = r.x + fs * 1.3, py = r.y + fs * 1.1, pw = r.w - fs * 2.2, ph = r.h - fs * 3.0;
    const X = (t) => px + t / span * pw, Y = (v) => py + ph * (1 - v * 0.92);
    // 夜间 / 午睡色带
    if (!mode) {
      ctx.fillStyle = "#e6e9f6"; ctx.fillRect(X(16), py, X(24) - X(16), ph);
      txt("睡眠", (X(16) + X(24)) / 2, py + fs * 0.8, fs, "#6f78a8", "center", 500);
    } else {
      ctx.fillStyle = "rgba(224,104,74,0.10)"; ctx.fillRect(X(6.5), py, X(8.5) - X(6.5), ph);
      ctx.fillStyle = "rgba(47,164,101,0.22)"; ctx.fillRect(X(6.5), py, X(7) - X(6.5), ph);
      ctx.strokeStyle = "#8f9ab3"; ctx.setLineDash([3, 3]); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(X(16), py); ctx.lineTo(X(16), py + ph); ctx.stroke(); ctx.setLineDash([]);
      txt("就寝", X(16) - fs * 0.2, py + fs * 0.7, fs, K.soft, "right", 500);
    }
    // 坐标轴
    ctx.strokeStyle = "#8f9ab3"; ctx.lineWidth = 1.3; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(px, py - fs * 0.3); ctx.lineTo(px, py + ph); ctx.lineTo(px + pw + fs * 0.3, py + ph); ctx.stroke();
    ctx.fillStyle = "#8f9ab3"; ctx.beginPath(); ctx.moveTo(px, py - fs * 0.7); ctx.lineTo(px - fs * 0.25, py - fs * 0.2); ctx.lineTo(px + fs * 0.25, py - fs * 0.2); ctx.fill();
    const ticks = mode ? [[0, "7:00"], [8, "15:00"], [16, "23:00"]] : [[0, "7:00"], [8, "15:00"], [16, "23:00"], [24, "7:00"]];
    ticks.forEach((tk) => {
      ctx.beginPath(); ctx.moveTo(X(tk[0]), py + ph); ctx.lineTo(X(tk[0]), py + ph + fs * 0.3); ctx.stroke();
      txt(tk[1], clamp(X(tk[0]), px + fs, px + pw - fs * 0.8), py + ph + fs * 0.95, fs * 0.92, K.soft, "center", 500);
    });
    ctx.save(); ctx.beginPath(); ctx.rect(px, r.y, pw * reveal + 1, r.h); ctx.clip();
    const line = (f, col, dash, w, fill) => {
      ctx.beginPath();
      for (let i = 0; i <= 120; i++) { const t = span * i / 120, x = X(t), y = Y(f(t)); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      if (fill) { ctx.lineTo(X(span), py + ph); ctx.lineTo(px, py + ph); ctx.closePath(); ctx.fillStyle = rgba(col, 0.12); ctx.fill(); return; }
      ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineJoin = "round"; ctx.setLineDash(dash || []); ctx.stroke(); ctx.setLineDash([]);
    };
    const lw = Math.max(2, H * 0.007);
    line(Cval, K.cLine, [lw * 2, lw * 1.6], lw * 0.9);
    if (!mode) { line((t) => Sval(t), K.sOn, null, lw, true); line((t) => Sval(t), K.sOn, null, lw * 1.2); }
    else {
      line((t) => Sval(t, 6.5, 8.5), K.longNap, [lw * 2.2, lw * 1.4], lw);
      line((t) => Sval(t, 6.5, 7), K.sOn, null, lw * 1.2);
    }
    ctx.restore();
    // 游标
    const tc = span * reveal, sv = mode ? Sval(tc, 6.5, 7) : Sval(tc);
    if (reveal < 0.999) { ctx.beginPath(); ctx.arc(X(tc), Y(sv), lw * 1.6, 0, TAU); ctx.fillStyle = K.sOn; ctx.fill(); }
    return { X, Y, px, py, pw, ph };
  }


  // =================== 各幕画面 ===================
  function areaFor(i) {
    const Lg = legendLayout(i);
    const A = nar() ? { x: 8, y: topY(), w: W - 16, h: H - topY() - Lg.h - 10 } : { x: 16, y: topY(), w: W - 32, h: H - topY() - 12 };
    return { A, Lg };
  }

  // 第 1 幕：生物钟（大脑里的视交叉上核）+ 睡眠压力曲线
  function scene0(A, Lg, live, T) {
    const n = nar();
    const br = n ? { x: A.x, y: A.y, w: A.w * 0.5, h: A.h } : { x: A.x, y: A.y, w: A.w * 0.46, h: A.h };
    const cr = n ? { x: A.x + A.w * 0.52, y: A.y + A.h * 0.02, w: A.w * 0.48, h: A.h * 0.96 }
      : { x: A.x + A.w * 0.5, y: A.y + A.h * 0.02, w: A.w * 0.5, h: A.h - Lg.bh - 16 };
    const b = TB.brainBox(br), B = TB.brain(b);
    // 早晨的光进入眼睛 → 视网膜下丘脑束 → 视交叉上核
    const lightA = 0.7 + 0.3 * Math.sin(time * 1.5);
    ctx.save(); ctx.globalAlpha *= 0.55 * lightA;
    const g = ctx.createLinearGradient(b.x - b.w * 0.05, 0, B.eye[0], 0);
    g.addColorStop(0, rgba(K.light, 0)); g.addColorStop(1, rgba(K.light, 0.9));
    ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(b.x - b.w * 0.04, B.eye[1] - B.er * 2.2); ctx.lineTo(B.eye[0] - B.er * 0.9, B.eye[1] - B.er * 0.35); ctx.lineTo(B.eye[0] - B.er * 0.9, B.eye[1] + B.er * 0.35); ctx.lineTo(b.x - b.w * 0.04, B.eye[1] + B.er * 2.2); ctx.fill();
    ctx.restore();
    const sp = arrow([[B.eye[0] + B.er, B.eye[1] - B.er * 0.2], B.P(0.22, 0.75), B.chiasm, [B.scn[0] - B.er * 0.25, B.scn[1] + B.er * 0.5]], K.light, Math.max(3, b.h * 0.018), 1, "go");
    flow(sp, "#d99a00", 3, Math.max(2, b.h * 0.012), 1, 0.35);
    scnNode(B.scn, Math.max(8, b.h * 0.042), 0.6 + 0.4 * Math.sin(time * 2));
    txt("视交叉上核", B.scn[0] + b.h * 0.07, B.scn[1] - b.h * 0.075, SF(), K.scn[2], "left", 700);
    // 曲线
    const reveal = clamp(T / 4.5, 0, 1);
    const C = chart(cr, 0, 0.08 + 0.92 * ease(reveal));
    const labels = CH[0].labels, on = (k) => live && labels.indexOf(k) >= 0;
    const top = C.Y(Sval(16));
    tag("clock", on("clock"), B.scn[0], B.scn[1] + b.h * 0.05, B.scn[0] + b.w * 0.05, b.y + b.h * (n ? 0.98 : 0.97), "生物钟：跟着日照定时间", K.scn[1]);
    tag("glass", on("glass") && reveal > 0.7, C.X(15), C.Y(Sval(15)), C.X(9), C.py + C.ph * 0.05, "睡眠压力：醒得越久越困", K.sOn);
    return { reveal };
  }

  // 第 2、3 幕：突触里的腺苷 / 咖啡因
  function sceneSyn(A, Lg, live, idx) {
    const n = nar();
    const sr = n ? { x: A.x, y: A.y + 2, w: A.w * 0.82, h: A.h - 2 } : { x: A.x + A.w * 0.02, y: A.y + 2, w: A.w * 0.6, h: A.h - 4 };
    const gr = n ? { x: A.x + A.w * 0.83, y: A.y + A.h * 0.03, w: A.w * 0.17, h: A.h * 0.94 } : { x: A.x + A.w * 0.86, y: A.y + A.h * 0.02, w: A.w * 0.12, h: A.h * 0.62 };
    const R = synapse(sr, live);
    gauge(gr, 0.1 + 0.85 * S.aden);
    const on = (k) => live && CH[idx].labels.indexOf(k) >= 0;
    const ir = R.ir;
    // 标注位置：宽屏放在突触右边；窄屏一个放顶上，一个放在突触后神经元里
    const colX = A.x + A.w * 0.745;
    const upY = n ? sr.y + LF() * 0.9 : sr.y + sr.h * 0.14;
    const loY = n ? R.yMem + (sr.y + sr.h - R.yMem) * 0.47 : R.yMem - ir * 1.2;
    const upX = n ? sr.x + sr.w * 0.5 : colX, loX = n ? sr.x + sr.w * 0.5 : colX;
    if (idx === 1) {
      const f = R.free || { x: sr.x + sr.w * 0.85, y: sr.y + sr.h * 0.3 };
      const ab = R.adenBound;
      tag("aden", on("aden"), f.x, f.y, upX, upY, "腺苷：用脑留下的“困意”", K.aden[1]);
      tag("socket", on("socket") && !!ab, ab ? ab.x : 0, ab ? ab.y + ir * 0.9 : 0, loX, loY, "插进困意插座：越来越困", K.aden[1]);
    } else {
      const cb = R.caffBound || { x: sr.x + sr.w * 0.8, y: R.yMem - ir * 2 };
      const q = R.queue;
      tag("queue", on("queue") && !!q, q ? q.x : 0, q ? q.y : 0, upX, upY, "腺苷还在门外排队", K.aden[1]);
      tag("caff", on("caff"), cb.x, cb.y + ir * 0.9, loX, loY, "咖啡因：冒充腺苷占住插座", K.caff[1]);
    }
  }

  // 第 4 幕：褪黑素（松果体）与蓝光
  function scene3(A, Lg, live, T) {
    const n = nar();
    const po = clamp((T - 5.5) / 0.8, 0, 1); // 手机亮起
    const br = n ? { x: A.x, y: A.y, w: A.w * 0.64, h: A.h } : { x: A.x, y: A.y, w: A.w * 0.58, h: A.h };
    const col = n ? { x: A.x + A.w * 0.66, w: A.w * 0.34 } : { x: A.x + A.w * 0.62, w: A.w * 0.38 - Lg.bw - 12 };
    if (!n) col.w = A.w * 0.36;
    const b = TB.brainBox(br), B = TB.brain(b);
    const lwP = Math.max(3, b.h * 0.018);
    // 天色窗口
    const sw = { x: col.x, y: A.y + (n ? 0 : A.h * 0.02), w: col.w, h: n ? A.h * 0.3 : A.h * 0.26 };
    const sky = S.sky;
    const sg = ctx.createLinearGradient(0, sw.y, 0, sw.y + sw.h);
    sg.addColorStop(0, mix("#8ec9f2", "#1d2658", sky)); sg.addColorStop(1, mix("#ffd3a8", "#4a4f8e", sky));
    ctx.save(); ctx.beginPath(); ctx.roundRect(sw.x, sw.y, sw.w, sw.h, 8); ctx.fillStyle = sg; ctx.fill(); ctx.clip();
    for (let i = 0; i < 9; i++) {
      ctx.globalAlpha = clamp((sky - 0.5) * 2.5, 0, 1) * (0.6 + 0.4 * Math.sin(time * 1.4 + i * 2));
      ctx.fillStyle = "#fff8d8"; ctx.beginPath(); ctx.arc(sw.x + rnd(i + 900) * sw.w, sw.y + rnd(i + 930) * sw.h * 0.6, Math.max(1, sw.h * 0.018), 0, TAU); ctx.fill();
    }
    ctx.globalAlpha = 1;
    const mr = sw.h * 0.17, mx = sw.x + sw.w * 0.72, my = sw.y + sw.h * (1.1 - 0.7 * sky);
    ctx.beginPath(); ctx.arc(mx, my, mr, 0, TAU); ctx.fillStyle = "#fff1b8"; ctx.fill();
    ctx.beginPath(); ctx.arc(mx + mr * 0.45, my - mr * 0.25, mr * 0.85, 0, TAU); ctx.fillStyle = mix("#8ec9f2", "#262f68", sky); ctx.fill();
    ctx.fillStyle = mix("#7fb489", "#2a3160", sky);
    ctx.beginPath(); ctx.moveTo(sw.x, sw.y + sw.h); ctx.quadraticCurveTo(sw.x + sw.w * 0.3, sw.y + sw.h * 0.72, sw.x + sw.w * 0.6, sw.y + sw.h * 0.88); ctx.quadraticCurveTo(sw.x + sw.w * 0.8, sw.y + sw.h * 0.78, sw.x + sw.w, sw.y + sw.h * 0.84); ctx.lineTo(sw.x + sw.w, sw.y + sw.h); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = "#b9c3d6"; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(sw.x, sw.y, sw.w, sw.h, 8); ctx.stroke();
    txt("天黑", sw.x + sw.w * 0.2, sw.y + sw.h * 0.2, SF(), "#ffffff", "center", 700);

    // 视网膜 → SCN：平时暗，手机亮起后变成蓝色信号
    const rht = [[B.eye[0] + B.er, B.eye[1] - B.er * 0.2], B.P(0.22, 0.75), B.chiasm, [B.scn[0] - B.er * 0.25, B.scn[1] + B.er * 0.5]];
    arrow(rht, "#c5ccdb", lwP, 1 - po, null);
    const rsp = arrow(rht, K.blue, lwP, po, "go");
    if (rsp) flow(rsp, K.blue, 3, Math.max(2, b.h * 0.012), po, 0.45);
    // SCN → 脊髓 → 松果体（简化的交感通路）
    const path = [B.scn, B.P(0.48, 0.74), B.P(0.6, 0.94), B.P(0.7, 0.9), B.P(0.7, 0.66), [B.pineal[0] + b.w * 0.012, B.pineal[1] + b.h * 0.05]];
    const psp = arrow(path, K.mel[1], lwP * 0.85, 0.9 - po * 0.5, "go");
    flow(psp, K.mel[2], 4, Math.max(2, b.h * 0.011), 1 - po, 0.25);
    if (po > 0.02) {
      const mid = along(psp, 0.55);
      ctx.save(); ctx.translate(mid[0], mid[1]); ctx.rotate(mid[2]); ctx.globalAlpha *= po;
      ctx.strokeStyle = K.red; ctx.lineWidth = lwP * 1.1; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(0, -lwP * 2); ctx.lineTo(0, lwP * 2); ctx.stroke(); ctx.restore();
      minusSign(mid[0] + lwP * 3.2, mid[1], Math.max(6, b.h * 0.028), po);
    }
    scnNode(B.scn, Math.max(8, b.h * 0.042), 0.3 + 0.7 * po);
    const melRate = S.mel * (1 - po);
    pinealGland(B.pineal, Math.max(7, b.h * 0.036), melRate);
    txt("松果体", B.pineal[0] + b.h * 0.07, B.pineal[1] + b.h * 0.02, SF(), K.pin[2], "left", 700);
    txt("视交叉上核", B.scn[0] - b.h * 0.02, B.scn[1] - b.h * 0.07, SF(), K.scn[2], "right", 700);
    // 褪黑素：从松果体放出，飘向视交叉上核
    const ir = Math.min(IR(), b.h * 0.05) * 0.85;
    const msp = sample([B.pineal, B.P(0.6, 0.36), B.P(0.45, 0.4), B.scn], 30);
    let melPick = null;
    for (let i = 0; i < 6; i++) {
      const t = (time * 0.12 + i / 6) % 1, p = along(msp, t * 0.9 + 0.05);
      const born = (time * 0.12 + i / 6) - t; // 每个分子出生的“批次”，停工后新的不再出来
      const a = Math.sin(t * Math.PI) * clamp(melRate * 1.6 - (t < 0.5 ? 0 : 0), 0, 1);
      mol("mel", p[0] + Math.sin(time + i) * ir * 0.3, p[1], ir, a);
      if (t > 0.3 && t < 0.6 && a > 0.4) melPick = { x: p[0], y: p[1] };
    }
    // 右侧：视交叉上核神经元膜上的褪黑素受体
    const ins = n ? { x: col.x, y: sw.y + sw.h + A.h * 0.05, w: col.w, h: A.h - sw.h - A.h * 0.05 } : { x: col.x, y: sw.y + sw.h + A.h * 0.06, w: col.w, h: A.h - sw.h - A.h * 0.1 - Lg.bh };
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(ins.x, ins.y, ins.w, ins.h, 8); ctx.fill(); ctx.strokeStyle = "#d6dde9"; ctx.lineWidth = 1; ctx.stroke();
    txt("视交叉上核神经元", ins.x + ins.w / 2, ins.y + SF() * 0.95, SF() * (n ? 0.9 : 1), K.soft, "center", 500);
    const ir2 = Math.min(IR(), ins.w * 0.075, ins.h * 0.12), mt = Math.max(6, ir2 * 0.8), ym = ins.y + ins.h * 0.72;
    ctx.save(); ctx.beginPath(); ctx.roundRect(ins.x, ins.y, ins.w, ins.h, 8); ctx.clip();
    ctx.fillStyle = mix(K.postOff, "#e6f6f4", melRate); ctx.fillRect(ins.x, ym, ins.w, ins.h);
    bilayer(ins.x, ins.x + ins.w, ym, mt);
    ctx.restore();
    ctx.strokeStyle = "#d6dde9"; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(ins.x, ins.y, ins.w, ins.h, 8); ctx.stroke();
    [0.25, 0.75].forEach((f, i) => {
      const P = 6 + i * 1.7, ph = (time / P + i * 0.4) % 1;
      const on = ph > 0.2 && ph < 0.85 ? clamp((ph - 0.2) / 0.08, 0, 1) * clamp((0.85 - ph) / 0.06, 0, 1) : 0;
      const bindA = clamp(melRate * 1.5 - 0.2, 0, 1);
      const x = ins.x + ins.w * f;
      const d = receptor("mel", x, ym, ir2, mt, on * bindA, 0, null);
      let a = 0, y = d.y;
      if (ph < 0.2) { a = ph / 0.2; y = ins.y + ins.h * 0.25 + (d.y - ins.y - ins.h * 0.25) * ease(ph / 0.2); }
      else if (ph < 0.85) a = 1;
      else { a = 1 - (ph - 0.85) / 0.15; y = d.y - (ph - 0.85) / 0.15 * ir2 * 3; }
      mol("mel", x, y, ir2, a * bindA);
    });
    // 手机
    if (po > 0.01) {
      const ph0 = B.P(0.07, 0.975), pw = b.h * 0.07, phh = b.h * 0.12;
      ctx.save(); ctx.globalAlpha *= po;
      const bg = ctx.createLinearGradient(ph0[0], ph0[1], B.eye[0], B.eye[1]);
      bg.addColorStop(0, rgba(K.blue, 0.5)); bg.addColorStop(1, rgba(K.blue, 0.05));
      ctx.fillStyle = bg; ctx.beginPath(); ctx.moveTo(ph0[0] - pw * 0.45, ph0[1] - phh * 0.4); ctx.lineTo(B.eye[0] - B.er, B.eye[1]); ctx.lineTo(B.eye[0] + B.er * 0.2, B.eye[1] + B.er * 0.6); ctx.lineTo(ph0[0] + pw * 0.45, ph0[1] - phh * 0.4); ctx.fill();
      ctx.translate(ph0[0], ph0[1]); ctx.rotate(-0.12);
      ctx.beginPath(); ctx.roundRect(-pw / 2, -phh / 2, pw, phh, pw * 0.18); ctx.fillStyle = "#3a4560"; ctx.fill();
      ctx.beginPath(); ctx.roundRect(-pw * 0.38, -phh * 0.42, pw * 0.76, phh * 0.8, pw * 0.08);
      ctx.fillStyle = glossy(0, 0, phh * 0.5, "#d4ecff", K.blue); ctx.fill();
      ctx.restore();
    }
    const on = (k) => live && CH[3].labels.indexOf(k) >= 0;
    const mp = melPick || { x: B.P(0.52, 0.38)[0], y: B.P(0.52, 0.38)[1] };
    if (n) {
      tag("mel", on("mel") && po < 0.5, mp.x, mp.y, b.x + b.w * 0.5, b.y + b.h * 0.02, "褪黑素：天黑了，准备睡觉", K.mel[1]);
      tag("blue", on("blue") && po >= 0.5, B.pineal[0], B.pineal[1], b.x + b.w * 0.5, b.y + b.h * 0.02, "屏幕蓝光：松果体停工", K.blue);
    } else {
      tag("mel", on("mel") && po < 0.5, mp.x, mp.y, b.x + b.w * 0.55, b.y - 2, "褪黑素：天黑了，准备睡觉", K.mel[1]);
      tag("blue", on("blue") && po >= 0.5, B.pineal[0], B.pineal[1], b.x + b.w * 0.55, b.y - 2, "屏幕蓝光：松果体停工", K.blue);
    }
  }

  // 第 5 幕：睡眠-觉醒跷跷板（flip-flop）
  function scene4(A, Lg, live, T) {
    const n = nar();
    const fl = ease(clamp((T - 1.6) / 2.4, 0, 1)); // 0 醒 → 1 睡
    const cx = A.x + A.w * (n ? 0.5 : 0.42), fy = A.y + A.h * (n ? 0.74 : 0.76);
    const Lb = n ? A.w * 0.47 : Math.min(A.w * 0.38, A.h * 1.05);
    const ang = (fl * 2 - 1) * 0.1, c = Math.cos(ang), s = Math.sin(ang);
    const BP = (d, up) => [cx + d * c + up * s, fy + d * s - up * c];
    const bt = Math.max(n ? 13 : 9, A.h * 0.05), ir = Math.min(IR(), A.h * 0.06), fs = SF();
    // 支点
    ctx.beginPath(); ctx.moveTo(cx, fy); ctx.lineTo(cx + A.h * 0.09, fy + A.h * 0.18); ctx.lineTo(cx - A.h * 0.09, fy + A.h * 0.18); ctx.closePath();
    ctx.fillStyle = glossy(cx, fy + A.h * 0.08, A.h * 0.12, "#eef1f7", "#b9c2d4"); ctx.fill(); ctx.strokeStyle = "#8f9ab3"; ctx.lineWidth = 1.2; ctx.stroke();
    // 横梁
    ctx.save(); ctx.translate(cx, fy); ctx.rotate(ang);
    const bg = ctx.createLinearGradient(-Lb, 0, Lb, 0);
    bg.addColorStop(0, K.his[1]); bg.addColorStop(0.42, "#e7e9f0"); bg.addColorStop(0.58, "#e7e9f0"); bg.addColorStop(1, K.gaba[1]);
    ctx.beginPath(); ctx.roundRect(-Lb, -bt / 2, Lb * 2, bt, bt / 2); ctx.fillStyle = bg; ctx.fill();
    ctx.strokeStyle = "#8f9ab3"; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.beginPath(); ctx.roundRect(-Lb + bt, -bt * 0.35, Lb * 2 - bt * 2, bt * 0.22, bt * 0.1); ctx.fill();
    txt("醒", -Lb + bt * 1.1, 0.5, bt * 0.78, "#ffffff", "center", 700);
    txt("睡", Lb - bt * 1.1, 0.5, bt * 0.78, "#ffffff", "center", 700);
    ctx.restore();
    ctx.beginPath(); ctx.arc(cx, fy, bt * 0.3, 0, TAU); ctx.fillStyle = "#8f9ab3"; ctx.fill();
    // 神经元的位置（站在横梁上）
    const ns = n ? Math.min(A.h * 0.14, Lb * 0.17) : Math.min(A.h * 0.12, Lb * 0.15), up = bt / 2 + ns * 1.5;
    const wakeA = 1 - 0.85 * fl, sleepA = 0.2 + 0.8 * fl;
    const pO = BP(-Lb * 0.84, up), pT = BP(-Lb * 0.32, up), pV1 = BP(Lb * 0.4, up), pV2 = BP(Lb * 0.76, up);
    const aw = Math.max(3.5, ns * 0.2), rr = ir * 0.8, rm = ir * 0.45;
    // 受体的位置（先算，箭头要指向它们）
    const soma = (p, phi) => { const px = p[0] + Math.cos(phi) * ns * 0.5, py = p[1] + Math.sin(phi) * ns; return [px, py, Math.atan2(Math.cos(phi) / 0.5, -Math.sin(phi))]; };
    const oxR = soma(pT, Math.PI), gaT = soma(pT, 0), gaO = soma(pO, -0.75);
    const out = (R, d) => [R[0] + Math.sin(R[2]) * d, R[1] - Math.cos(R[2]) * d];
    const dockD = rm / 2 + rr * 1.3;
    // 通路
    const e1 = out(oxR, dockD + rr * 1.6), s1 = [pO[0] + ns * 0.55, pO[1]];
    const osp = arrow([s1, [(s1[0] + e1[0]) / 2, (s1[1] + e1[1]) / 2 - ns * 0.15], e1], K.orx[1], aw, 0.25 + 0.75 * wakeA, "go");
    const e2 = out(gaT, dockD + rr * 1.5), s2 = [pV1[0] - ns * 0.55, pV1[1]];
    const gsp = arrow([s2, [(s2[0] + e2[0]) / 2, Math.min(s2[1], e2[1]) - ns * 0.7], e2], K.gaba[1], aw, 0.2 + 0.8 * fl, "stop");
    const e3 = out(gaO, dockD + rr * 1.5), s3 = [pV1[0] - ns * 0.2, pV1[1] - ns * 0.95];
    const gsp2 = arrow([s3, [pT[0] + ns * 0.3, pT[1] - ns * 3.4], e3], K.gaba[1], aw * 0.85, 0.2 + 0.8 * fl, "stop");
    // 神经元
    neuron(pO[0], pO[1], ns, "orx", wakeA);
    neuron(pT[0], pT[1], ns, "his", wakeA);
    neuron(pV2[0], pV2[1], ns * 0.9, "gaba", sleepA);
    neuron(pV1[0], pV1[1], ns, "gaba", sleepA);
    // 受体 + 结合的分子
    const oOcc = clamp(wakeA * 1.6 - 0.5, 0, 1), gOcc = clamp(fl * 1.6 - 0.4, 0, 1);
    receptor("orx", oxR[0], oxR[1], rr, rm, oOcc, oxR[2], ["orx", oOcc]);
    receptor("gaba", gaT[0], gaT[1], rr, rm, gOcc, gaT[2], ["gaba", gOcc]);
    receptor("gaba", gaO[0], gaO[1], rr, rm, gOcc, gaO[2], ["gaba", gOcc]);
    // 名字写在横梁下面
    const nameY = -bt / 2 - fs * 0.95;
    const nO = BP(-Lb * 0.84, nameY), nT = BP(-Lb * 0.32, nameY), nV = BP(Lb * 0.58, nameY);
    txt(n ? "食欲素" : "食欲素神经元", nO[0], nO[1], fs, K.orx[2], "center", 700);
    txt(n ? "组胺" : "组胺神经元", nT[0], nT[1], fs, K.his[2], "center", 700);
    txt("VLPO（GABA）", nV[0], nV[1], fs, K.gaba[2], "center", 700);
    // 分子沿通路走
    for (let i = 0; i < 4; i++) {
      const t = (time * 0.28 + i / 4) % 1, t2 = (t + 0.13) % 1;
      if (gsp) { const p = along(gsp, t); mol("gaba", p[0], p[1], ir * 0.7, fl * Math.sin(t * Math.PI)); }
      if (gsp2) { const p = along(gsp2, t2); mol("gaba", p[0], p[1], ir * 0.7, fl * Math.sin(t2 * Math.PI)); }
      if (osp && i % 2) { const p = along(osp, t); mol("orx", p[0], p[1], ir * 0.65, wakeA * Math.sin(t * Math.PI)); }
    }
    // 组胺：清醒时从组胺神经元放出，向上飘去大脑皮层
    for (let i = 0; i < 3; i++) {
      const t = (time * 0.3 + i / 3) % 1;
      mol("his", pT[0] - ns * 0.25 + Math.sin(t * 5 + i) * ns * 0.12, pT[1] - ns * 1.9 - t * ns * 1.1, ir * 0.6, wakeA * Math.sin(t * Math.PI) * 0.95);
    }
    // 兴奋 / 抑制符号
    minusSign(pT[0] - ns * 0.62, pT[1] + ns * 0.75, ir * 0.5, fl);
    minusSign(pO[0] - ns * 0.62, pO[1] + ns * 0.75, ir * 0.5, fl);
    bolt(pT[0] + ns * 0.02, pT[1] + ns * 0.4, ir * 0.6, (1 - fl) * (0.8 + 0.2 * Math.sin(time * 4)));
    bolt(pO[0] + ns * 0.02, pO[1] + ns * 0.4, ir * 0.6, (1 - fl) * (0.8 + 0.2 * Math.sin(time * 4)));
    bolt(pV1[0] + ns * 0.02, pV1[1] + ns * 0.4, ir * 0.6, fl * (0.8 + 0.2 * Math.sin(time * 4)));
    const on = (k) => live && CH[4].labels.indexOf(k) >= 0;
    const gp = gsp2 ? along(gsp2, 0.3) : [0, 0];
    tag("gaba", on("gaba") && fl > 0.3, gp[0], gp[1], n ? W * 0.68 : cx + Lb * 0.62, A.y + LF() * 0.9, "睡眠中心放出 GABA", K.gaba[1]);
    tag("wake", on("wake") && fl > 0.5, pT[0] - ns * 0.1, pT[1] + ns * 0.75, n ? A.x + A.w * 0.24 : cx - Lb * 0.62, n ? A.y + LF() * 0.9 : A.y + A.h - LF(), "清醒中心安静下来", K.his[1]);
  }

  // 第 6 幕：午睡长短对晚上睡眠压力的影响
  function scene5(A, Lg, live, T) {
    const n = nar();
    const cr = n ? { x: A.x, y: A.y, w: A.w * 0.66, h: A.h } : { x: A.x, y: A.y + A.h * 0.02, w: A.w * 0.62, h: A.h * 0.96 };
    const reveal = clamp(T / 4.5, 0, 1);
    const C = chart(cr, 1, 0.06 + 0.94 * ease(reveal));
    // 右侧：午睡时长表盘
    const col = n ? { x: A.x + A.w * 0.69, y: A.y, w: A.w * 0.31, h: A.h } : { x: A.x + A.w * 0.66, y: A.y + A.h * 0.02, w: A.w * 0.34, h: A.h - Lg.bh - 22 };
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(col.x, col.y, col.w, col.h, 10); ctx.fill(); ctx.strokeStyle = "#d6dde9"; ctx.lineWidth = 1; ctx.stroke();
    const fs = SF();
    txt("午睡时长", col.x + col.w / 2, col.y + fs * 1.1, fs, K.ink, "center", 700);
    const dr = Math.min(col.w * 0.4, (col.h - fs * 6.2) * 0.5), dx = col.x + col.w / 2, dy = col.y + fs * 2.1 + dr + (col.h - fs * 6.2 - dr * 2) * 0.35;
    const Aof = (m) => -Math.PI / 2 + m / 60 * TAU;
    ctx.beginPath(); ctx.arc(dx, dy, dr, 0, TAU); ctx.fillStyle = "#f7f9fc"; ctx.fill(); ctx.strokeStyle = "#aab5cc"; ctx.lineWidth = 1.3; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(dx, dy); ctx.arc(dx, dy, dr * 0.9, Aof(0), Aof(20)); ctx.closePath(); ctx.fillStyle = "rgba(47,164,101,0.25)"; ctx.fill();
    ctx.beginPath(); ctx.moveTo(dx, dy); ctx.arc(dx, dy, dr * 0.9, Aof(20), Aof(30)); ctx.closePath(); ctx.fillStyle = "rgba(47,164,101,0.6)"; ctx.fill();
    ctx.beginPath(); ctx.moveTo(dx, dy); ctx.arc(dx, dy, dr * 0.9, Aof(30), Aof(60)); ctx.closePath(); ctx.fillStyle = "rgba(224,104,74,0.07)"; ctx.fill();
    ctx.strokeStyle = "#8f9ab3"; ctx.lineWidth = 1;
    for (let k = 0; k < 12; k++) { const q = Aof(k * 5); ctx.beginPath(); ctx.moveTo(dx + Math.cos(q) * dr * 0.9, dy + Math.sin(q) * dr * 0.9); ctx.lineTo(dx + Math.cos(q) * dr, dy + Math.sin(q) * dr); ctx.stroke(); }
    const mm = (time * 2.5) % 30, ma = Aof(mm);
    ctx.strokeStyle = K.ink; ctx.lineWidth = Math.max(1.6, dr * 0.05); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(dx, dy); ctx.lineTo(dx + Math.cos(ma) * dr * 0.75, dy + Math.sin(ma) * dr * 0.75); ctx.stroke();
    ctx.beginPath(); ctx.arc(dx, dy, Math.max(2, dr * 0.06), 0, TAU); ctx.fillStyle = K.ink; ctx.fill();
    txt("20～30 分钟", dx, dy + dr + fs * 1.1, fs * 1.05, "#1f7a4c", "center", 700);
    txt("下午 3 点前", dx, dy + dr + fs * 2.45, fs * 1.05, K.ink, "center", 500);
    const on = (k) => live && CH[5].labels.indexOf(k) >= 0;
    const nx = C.X(6.9), ny = C.Y(Sval(6.9, 6.5, 7));
    const lx = C.X(15.7), ly = C.Y(Sval(15.7, 6.5, 8.5));
    tag("nap", on("nap") && reveal > 0.5, nx, ny, C.X(4), C.py + C.ph * 0.05, "午睡：短一点、早一点", K.orx[1]);
    tag("short", on("short") && reveal > 0.95, lx, ly, C.X(10.5), C.py + C.ph * 0.8, "睡太久：晚上不够困", K.longNap);
  }

  function drawScene(i, live, T) {
    const L = areaFor(i), A = L.A, Lg = L.Lg;
    if (i === 0) scene0(A, Lg, live, T);
    else if (i === 1 || i === 2) sceneSyn(A, Lg, live, i);
    else if (i === 3) scene3(A, Lg, live, T);
    else if (i === 4) scene4(A, Lg, live, T);
    else scene5(A, Lg, live, T);
    legend(Lg);
  }

  function hud() {
    const f = S.feel;
    pill(14, 12, "困意", `${Math.round(f * 100)}%`, f < 0.4 ? "#2fa465" : f < 0.75 ? "#d99400" : K.sOn, false);
    const p = CH[cur].pill;
    pill(W - 14, 12, p[0], p[1], p[2] === "ok" ? "#2fa465" : p[2] === "warn" ? "#d99400" : K.red, true);
  }

  function draw() {
    background();
    const f = clamp(lt / 0.7, 0, 1);
    if (f < 1 && prevCur >= 0 && prevCur !== cur) {
      ctx.save(); ctx.globalAlpha = 1 - f; drawScene(prevCur, false, prevLt); ctx.restore();
    }
    ctx.save(); ctx.globalAlpha = prevCur >= 0 ? f : 1; drawScene(cur, true, lt); ctx.restore();
    ctx.globalAlpha = 1;
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#5d63c9",
    titleCard: { lines: ["为什么", "越熬越困？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
