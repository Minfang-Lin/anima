// 糖化血红蛋白：教科书示意图画风（机制类集），通用画法见 shared/textbook.js。
// 每一幕一张图，切换时淡入淡出：
//   0 一天的血糖曲线（指尖血糖 = 快照）+ 三个月账本；1 红细胞与放大的血红蛋白四聚体，葡萄糖自己粘上；
//   2 红细胞传送带：约 120 天的寿命与各时段的分量；3 刻度尺：6%、6.5%、7% 和 100 个血红蛋白；
//   4 血管壁的蛋白也被糖化（小调）；5 账本也会记错：寿命变化、平均数藏住的波动；6 每 3 个月对一次账。
Anima.register("hba1c", {
    "title": "糖化血红蛋白：血糖的三个月账本",
    "tag": "血糖小剧场",
    "headline": "血糖的【三个月】账本",
    "lede": "指尖血糖只拍下一瞬间，糖化血红蛋白却记着近两三个月的平均账：葡萄糖会自己粘上红细胞里的血红蛋白，粘上就不掉，红细胞又能活约 120 天。",
    "summary": "糖化血红蛋白是怎么来的、为什么能反映近 2～3 个月的平均血糖、数字怎么看、哪些情况会让它不准，以及多久查一次。",
    "footer": "血糖或糖化血红蛋白偏高，请到内分泌科就诊。",
    "canvasLabel": "红细胞、血红蛋白与葡萄糖示意图：糖化血红蛋白如何记录近几个月的平均血糖",
    "disease": "糖尿病",
    "organs": ["vessels"],
    "categories": ["metabolic"],
    "color": "#b15a3c",
    "look": "textbook"
  }, () => {
  const CH = [
    { title: "指尖血糖：只是一张快照", a1c: 6.8, gl: 0.5, harm: 0,
      as: "warn", pill: ["指尖血糖", "", "ok"],
      text: "扎一下手指测的血糖，就像给血糖拍了一张照片，只反映扎针的那一刻。刚吃完饭、刚运动完、心里一紧张，数字都会差不少。想知道这几个月血糖控制得怎么样，一张照片不够，得翻一翻账本，这本账就是糖化血红蛋白。",
      fact: "指尖血糖看“这一刻”，糖化血红蛋白（HbA1c）看“这几个月”",
      labels: ["snap", "ledger"] },
    { title: "糖会自己粘上血红蛋白", a1c: 7.4, gl: 1, harm: 0,
      as: "warn", pill: ["粘上以后", "不会掉", "warn"],
      text: "红细胞里装满了血红蛋白，它由四条链抱成一团，负责运送氧气。血里的葡萄糖会进到红细胞里，不用任何酶帮忙，自己慢慢粘到血红蛋白上。刚挨上时还能松开，时间一长就粘牢了，再也掉不下来。血糖越高，粘上的就越多。",
      fact: "糖化血红蛋白 = 粘了糖的血红蛋白，占全部血红蛋白的百分比",
      labels: ["hb", "stick", "firm"] },
    { title: "红细胞活约 120 天", a1c: 7.2, gl: 0.6, harm: 0,
      as: "warn", pill: ["红细胞寿命", "约 120 天", "ok"],
      text: "一个红细胞大约能活120天。它在骨髓里出生，在血管里一圈圈地转，身上粘的糖越攒越多，老了就被脾脏回收。血里新老红细胞同时都有，所以糖化血红蛋白反映的是近两三个月的平均血糖，其中最近一个月的分量最重。",
      fact: "最近约 1 个月的血糖，大约占了结果的一半",
      labels: ["born", "weight"] },
    { title: "数字怎么看", a1c: 6.5, gl: 0.5, harm: 0,
      as: "warn", pill: ["控制目标", "多数 < 7%", "ok"],
      text: "糖化血红蛋白用百分比表示。没有糖尿病的人，一般低于约6%。达到6.5%或以上，可以作为诊断糖尿病的标准之一，但要在标准化的实验室检测。多数成年糖尿病患者的控制目标是低于7%；老人、容易低血糖的人可以适当放宽，具体听医生的。",
      fact: "我国 2020 版指南已把 HbA1c ≥ 6.5% 纳入糖尿病诊断标准",
      labels: ["norm", "dx", "goal"] },
    { title: "长期偏高：糖也粘在血管上", a1c: 8.8, gl: 1, harm: 1,
      as: "bad", pill: ["并发症风险", "升高", "bad"],
      text: "糖不只粘在血红蛋白上。血管壁、眼睛、肾脏和神经里的蛋白，也会被慢慢糖化，变硬变脆，还会堆出糖化终产物。糖化血红蛋白长期偏高，说明全身都泡在高糖里，眼底、肾脏和神经里的小血管往往最先受累，心脑血管的风险也会升高。",
      fact: "把糖化血红蛋白降下来，并发症的风险也会跟着下降",
      labels: ["wall", "age", "organ"] },
    { title: "账本也会记错", a1c: 7.0, gl: 0.6, harm: 0,
      as: "warn", pill: ["结果", "可能不准", "warn"],
      text: "有些情况会让这本账不准：贫血、失血、输血、怀孕、某些血红蛋白病和肾病，都可能让结果偏高或偏低。它只看平均数，看不出血糖忽高忽低，也看不出有没有低血糖。所以还要配合指尖血糖或动态血糖监测，看看一天里有多少时间在目标范围内。",
      fact: "目标范围内时间（TIR）：多数人目标 > 70%，具体以医生建议为准",
      labels: ["same", "low", "life"] },
    { title: "按时对账，慢慢降下来", a1c: 6.8, gl: 0.4, harm: 0,
      as: "ok", pill: ["复查", "约每 3 个月", "ok"],
      text: "糖尿病患者一般每三个月查一次糖化血红蛋白，达标又稳定以后，可以半年查一次。吃饭定时定量、坚持运动、按时用药，数字会一点一点降下来。不过它不是全部，血压、血脂和体重也要一起管好，定期找医生对一对账。",
      fact: "一般每 3 个月查一次；达标且稳定后，可每 6 个月查一次",
      labels: ["every3", "half", "more"] },
  ];
  const DUR = 12;

  const { clamp, mix, rnd, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0, prevCur = -1, prevLt = 0;
  const TB = Anima.textbook({ W: () => W, H: () => H, time: () => time });
  const { ctx, TAU, rgba, glossy, txt, sample, along, ease, LF, SF, IR, nar, mol, arrow, flow, tag } = TB;

  // ---------- 本集新登记的图标 ----------
  // 血红蛋白：四个相连的小球（2 条 α 链 + 2 条 β 链抱成的四聚体），砖红色
  const REG = Anima.textbook;
  REG.registerShape("hbTetramer", {
    path(c, r) {
      [[-0.44, -0.42], [0.44, -0.42], [-0.44, 0.44], [0.44, 0.44]].forEach((p) => {
        c.moveTo(p[0] * r + r * 0.56, p[1] * r); c.arc(p[0] * r, p[1] * r, r * 0.56, 0, TAU);
      });
    },
    notch: REG.SHAPES.circle.notch,
  });
  // 糖化终产物（AGEs）：几团不规则地粘在一起的褐色疙瘩
  REG.registerShape("ageClump", {
    path(c, r) {
      [[-0.38, 0.15, 0.52], [0.3, 0.25, 0.46], [0.02, -0.38, 0.5], [0.52, -0.3, 0.3]].forEach((p) => {
        c.moveTo(p[0] * r + p[2] * r, p[1] * r); c.arc(p[0] * r, p[1] * r, p[2] * r, 0, TAU);
      });
    },
    notch: REG.SHAPES.circle.notch,
  });
  if (!REG.MOLECULES.hb) REG.register("hb", { shape: "hbTetramer", color: ["#f6c7bb", "#c4553f", "#7e2f20"], label: "血红蛋白" });
  if (!REG.MOLECULES.age) REG.register("age", { shape: "ageClump", color: ["#e3c8a6", "#94623a", "#5a3a1f"], label: "糖化终产物" });

  // ---------- 本集结构用色 ----------
  const K = Object.assign({}, TB.K, {
    glu: TB.MOLECULES.glu.color, hb: TB.MOLECULES.hb.color, age: TB.MOLECULES.age.color,
    alpha: ["#fbd6cb", "#e08a72", "#9c4a36"], beta: ["#f4bfb1", "#c4553f", "#7e2f20"], heme: "#7c1f1a",
    rbc: ["#f8bcbc", "#e27575", "#b04848"],
    lumen0: "#fff8f6", lumen1: "#fbe8e7",
    endo: ["#fdeef2", "#efc4cf", "#c38a9b"], endoHurt: ["#f1f1f4", "#cfd1da", "#9b9cad"],
    wall: "#f3e2cf", fiber: "#d9b48c",
    day: "#1ea5b8", avg: "#5a4fb0", snap: "#f29a1f", weight: "#c4553f",
    steady: "#2f9b8f", swing: "#e0833a", band: "#d8f0e3", low: "#3d7fd6",
    ok: "#2fa465", warn: "#d99400",
  });
  const S = { a1c: 6.8, gl: 0.5, harm: 0 };

  function update(dt) {
    if (cur !== lastCur) { prevCur = lastCur; prevLt = lt; lastCur = cur; lt = 0; }
    lt += dt; prevLt += dt;
  }

  // =================== 小零件 ===================
  // 血红蛋白小图标 + 粘上的糖（ng 个，最多 2 个，粘在上面两条 β 链的链头）
  function hbIcon(x, y, r, a, ng, rot) {
    if (a < 0.02) return;
    mol("hb", x, y, r, a, rot || 0);
    for (let k = 0; k < Math.min(2, ng); k++) {
      const d = k ? 1 : -1;
      mol("glu", x + d * r * 0.78, y - r * 0.98, r * 0.42, a * clamp(ng - k, 0, 1), 0);
    }
  }
  // 红细胞正面（双凹圆盘：中间浅）
  function rbcFace(x, y, R, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, R, 0, TAU);
    ctx.fillStyle = glossy(x, y, R, K.rbc[0], K.rbc[1]); ctx.fill();
    const g = ctx.createRadialGradient(x, y, 0, x, y, R * 0.62);
    g.addColorStop(0, "rgba(255,240,238,0.75)"); g.addColorStop(1, "rgba(255,240,238,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, R * 0.62, 0, TAU); ctx.fill();
    ctx.strokeStyle = K.rbc[2]; ctx.lineWidth = Math.max(1, R * 0.03); ctx.beginPath(); ctx.arc(x, y, R, 0, TAU); ctx.stroke();
    ctx.restore();
  }
  // 红细胞侧面（在血管里流动时）
  function rbcSide(x, y, rr, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.ellipse(x, y, rr * 1.15, rr * 0.62, 0, 0, TAU);
    ctx.fillStyle = glossy(x, y, rr, K.rbc[0], K.rbc[1]); ctx.fill();
    ctx.strokeStyle = rgba(K.rbc[2], 0.75); ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x, y, rr * 0.5, rr * 0.2, 0, 0, TAU); ctx.fillStyle = rgba(K.rbc[2], 0.18); ctx.fill();
    ctx.restore();
  }
  // 白底图表框：返回坐标换算
  function frame(r, o) {
    const fs = SF() * 0.9;
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(r.x, r.y, r.w, r.h, 10); ctx.fill();
    ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.stroke();
    const padL = o.padL != null ? o.padL : fs * 2.6, padT = o.title ? fs * 2.9 : fs * 0.9;
    const px = r.x + padL, py = r.y + padT, pw = r.w - padL - fs * 0.9, ph = r.h - padT - fs * 2.1;
    const X = (v) => px + (v - o.x0) / (o.x1 - o.x0) * pw, Y = (v) => py + ph * (1 - (v - o.y0) / (o.y1 - o.y0));
    if (o.title) txt(o.title, r.x + fs * 0.8, r.y + fs * 1.1, fs * 1.05, K.ink, "left", 700);
    ctx.lineWidth = 1;
    (o.yt || []).forEach((t) => {
      ctx.strokeStyle = "#e8edf5"; ctx.beginPath(); ctx.moveTo(px, Y(t[0])); ctx.lineTo(px + pw, Y(t[0])); ctx.stroke();
      if (t[1]) txt(t[1], px - fs * 0.35, Y(t[0]), fs, K.soft, "right", 500);
    });
    ctx.strokeStyle = K.line; ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py + ph); ctx.lineTo(px + pw, py + ph); ctx.stroke();
    (o.xt || []).forEach((t) => {
      ctx.beginPath(); ctx.moveTo(X(t[0]), py + ph); ctx.lineTo(X(t[0]), py + ph + fs * 0.3); ctx.stroke();
      const al = t[2] || "center";
      txt(t[1], X(t[0]), py + ph + fs * 1.0, fs, K.soft, al, 500);
    });
    return { X, Y, px, py, pw, ph, fs };
  }
  function plot(C, f, x0, x1, col, w, dash, N) {
    ctx.beginPath();
    const n = N || 160;
    for (let i = 0; i <= n; i++) { const v = x0 + (x1 - x0) * i / n, x = C.X(v), y = C.Y(f(v)); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineJoin = "round"; ctx.lineCap = "round";
    ctx.setLineDash(dash || []); ctx.stroke(); ctx.setLineDash([]);
  }

  // ---------- 图例：多两种本集图标（粘了糖的血红蛋白、红细胞） ----------
  function legendItems(i) {
    const n = nar();
    const L = [
      [["line", K.day, "一天的血糖"], ["band", rgba(K.snap, 0.45), "指尖血糖：这一刻"], ["dash", K.avg, "近 3 个月的平均"]],
      [["rbc", "", "红细胞"], ["mol", "hb", "血红蛋白"], ["mol", "glu", "葡萄糖"], ["hbg", "", "粘了糖的血红蛋白"]],
      [["rbc", "", "红细胞"], ["mol", "glu", "粘上的糖"], ["band", rgba(K.weight, 0.35), "对结果的分量"]],
      [["mol", "hb", "血红蛋白"], ["hbg", "", "粘了糖的"], ["line", K.ink, "6.5% 诊断线"], ["dash", K.ok, "7% 控制目标"]],
      [["mol", "glu", "葡萄糖"], ["mol", "age", "糖化终产物"], ["band", K.endoHurt[1], "受损的血管内皮"]],
      [["band", K.band, "目标范围"], ["line", K.steady, "平稳"], ["line", K.swing, "忽高忽低"]],
      [["line", K.hb[1], "糖化血红蛋白"], ["dash", K.ok, "目标 < 7%"], ["band", "#e9eef7", "达标后半年一查"]],
    ][i];
    if (!n) return L;
    return [
      [L[0], ["band", rgba(K.snap, 0.45), "这一刻"], ["dash", K.avg, "3 个月平均"]],
      [L[0], L[1], L[2], ["hbg", "", "粘了糖的"]],
      L,
      [L[0], L[1], ["line", K.ink, "诊断线"], ["dash", K.ok, "目标"]],
      [L[0], L[1], ["band", K.endoHurt[1], "受损内皮"]],
      L,
      [L[0], L[1]],
    ][i];
  }
  function legendIcon(it, x, y, s) {
    if (it[0] === "hbg") hbIcon(x, y + s * 0.12, s * 0.36, 1, 1, 0);
    else if (it[0] === "rbc") rbcFace(x, y, s * 0.4, 1);
    else TB.legendIcon(it, x, y, s);
  }
  // 照 TB.legend 的排法画，只是图标换成上面的 legendIcon
  function legend(Lg) {
    const items = Lg.items, fs = Lg.fs, s = Lg.s, ws = Lg.ws;
    const put = (it, x, y) => { legendIcon(it, x + s / 2, y, s); txt(it[2], x + s + fs * 0.35, y + 0.5, fs, K.ink, "left", 500); };
    if (nar()) {
      const y0 = H - Lg.h - 2;
      ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fillRect(0, y0 - 2, W, Lg.h + 4);
      ctx.strokeStyle = "#dde3ee"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, y0 - 2); ctx.lineTo(W, y0 - 2); ctx.stroke();
      Lg.rows.forEach((row, r) => {
        const tw = row.reduce((a, k) => a + ws[k], 0) + Lg.gap * (row.length - 1);
        let x = (W - tw) / 2; const y = y0 + s * 0.55 + r * s * 1.1 + 2;
        row.forEach((k) => { put(items[k], x, y); x += ws[k] + Lg.gap; });
      });
      return;
    }
    const x0 = W - Lg.bw - 12, y0 = H - Lg.bh - 12;
    ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.beginPath(); ctx.roundRect(x0, y0, Lg.bw, Lg.bh, 8); ctx.fill();
    ctx.strokeStyle = "#d3dae7"; ctx.lineWidth = 1; ctx.stroke();
    txt("图例", x0 + fs * 0.7, y0 + fs * 0.95, fs * 0.9, K.soft, "left", 700);
    items.forEach((it, k) => put(it, x0 + fs * 0.6, y0 + fs * 1.9 + s * 0.5 + k * s * 1.08));
  }

  // ---------- 顶部胶囊 ----------
  // 第 1 幕：指尖血糖在一天里的几次“快照”
  const dayG = (h) => {
    const meal = (t0, a) => { const x = (h - t0) / 1.0; return x > 0 ? a * x * x * Math.exp(2 - 2 * x) : 0; };
    const gs = (t0, a, w) => a * Math.exp(-((h - t0) * (h - t0)) / (2 * w * w));
    return 5.9 + 0.25 * Math.sin((h - 5) / 24 * TAU) + meal(7.2, 3.4) + meal(12.1, 3.9) + meal(18.3, 3.5) + gs(10.2, 1.1, 0.45) - gs(16.2, 1.0, 0.5);
  };
  const SNAPS = [[6.6, "空腹"], [8.2, "饭后"], [10.2, "紧张"], [13.1, "饭后"], [16.2, "运动后"], [22, "睡前"]];
  const snapNow = (T) => SNAPS[Math.floor(Math.max(0, T - 0.4) / 1.8) % SNAPS.length];
  // 第 4 幕：刻度尺上的游标
  const pointer = (T) => 6.4 - 1.1 * Math.cos(T * 0.55);
  function a1cCol(v) { return v < 6.5 ? K.ok : v < 7 ? K.warn : v < 8 ? "#e0773a" : K.red; }
  function pills() {
    const c = CH[cur], p = c.pill;
    const st = (s) => (s === "ok" ? K.ok : s === "warn" ? K.warn : K.red);
    let v = S.a1c, lc = st(c.as), rv = p[1], rc = st(p[2]);
    if (cur === 3) { v = pointer(lt); lc = a1cCol(v); }
    if (cur === 0) { const sn = snapNow(lt), g = dayG(sn[0]); rv = g.toFixed(1) + " mmol/L"; rc = g > 7.8 ? K.warn : K.ok; }
    return { lv: v.toFixed(1) + "%", lc, rl: p[0], rv, rc };
  }
  function contentTop() {
    const fs = Math.max(12, W / 60) * Anima.UI, h = fs * 1.4 + 14, P = pills();
    TB.font(fs, 500); const a1 = ctx.measureText("糖化血红蛋白").width, b1 = ctx.measureText(P.rl).width;
    TB.font(fs * 1.4, 700); const a2 = ctx.measureText(P.lv).width, b2 = ctx.measureText(P.rv).width;
    const two = W - 14 - (b1 + b2 + 34) < 14 + (a1 + a2 + 34) + 8;
    return 12 + (two ? h * 2 + 8 : h) + 8;
  }
  function hud() {
    const P = pills();
    pill(14, 12, "糖化血红蛋白", P.lv, P.lc, false);
    pill(W - 14, 12, P.rl, P.rv, P.rc, true);
  }

  // 标注：小框夹在可用区域内
  function put(g, key, on, tx, ty, bx, by, text, col) {
    const h = LF() * 1.8;
    tag(key, on, tx, ty, bx, clamp(by, g.A.y + h / 2 + 2, g.A.y + g.A.h - h / 2), text, col);
  }

  // =================== 各幕画面 ===================
  function area(i) {
    const Lg = TB.legendLayout(legendItems(i)), top = contentTop(), n = nar();
    const A = n ? { x: 8, y: top, w: W - 16, h: H - top - Lg.h - 10 } : { x: 16, y: top, w: W - 32, h: H - top - 14 };
    return { A, Lg, n };
  }

  // ---- 第 1 幕：一天的血糖 + 三个月账本 ----
  function scene0(g, live, T) {
    const { A, Lg, n } = g;
    const r1 = n ? { x: A.x, y: A.y, w: A.w, h: A.h * 0.56 } : { x: A.x, y: A.y + A.h * 0.04, w: A.w * 0.56, h: A.h * 0.9 };
    const r2 = n ? { x: A.x, y: A.y + A.h * 0.6, w: A.w, h: A.h * 0.4 } : { x: A.x + A.w * 0.6, y: A.y + A.h * 0.04, w: A.w * 0.4, h: A.h * 0.94 - Lg.bh - 14 };
    const C = frame(r1, { x0: 0, x1: 24, y0: 3, y1: 12.5, title: n ? "" : "一天的血糖（mmol/L）",
      yt: [[4, "4"], [6, "6"], [8, "8"], [10, "10"], [12, "12"]],
      xt: [[0, "0点", "left"], [6, "6点"], [12, "12点"], [18, "18点"], [24, "24点", "right"]] });
    const lw = Math.max(2, H * 0.0065);
    // 曲线下方淡淡的面积
    ctx.beginPath(); ctx.moveTo(C.X(0), C.Y(3));
    for (let i = 0; i <= 160; i++) { const h = 24 * i / 160; ctx.lineTo(C.X(h), C.Y(dayG(h))); }
    ctx.lineTo(C.X(24), C.Y(3)); ctx.closePath(); ctx.fillStyle = rgba(K.day, 0.08); ctx.fill();
    plot(C, dayG, 0, 24, K.day, lw);
    // 曲线上的小字：饭后、运动后、紧张
    const fs = C.fs * 0.95;
    [[8.2, "早饭"], [13.1, "午饭"], [19.3, "晚饭"]].forEach((m) => txt(m[1], C.X(m[0]), C.Y(dayG(m[0])) - fs * 1.4, fs, K.soft, "center", 500));
    txt("紧张", C.X(10.2), C.Y(dayG(10.2)) - fs * 1.1, fs, K.soft, "center", 500);
    txt("运动", C.X(16.2), C.Y(dayG(16.2)) + fs * 1.2, fs, K.soft, "center", 500);
    // 快照：竖着的一条亮光 + 闪光点 + 读数
    const sn = snapNow(T), sh = sn[0], sv = dayG(sh), sx = C.X(sh), sy = C.Y(sv);
    const ph = (Math.max(0, T - 0.4) / 1.8) % 1, flash = clamp(1 - ph * 3, 0, 1);
    ctx.fillStyle = rgba(K.snap, 0.18 + 0.25 * flash); ctx.fillRect(sx - lw * 2.2, C.py, lw * 4.4, C.ph);
    const gg = ctx.createRadialGradient(sx, sy, 0, sx, sy, lw * 9);
    gg.addColorStop(0, rgba("#ffffff", 0.9 * flash)); gg.addColorStop(0.4, rgba(K.snap, 0.5 * flash)); gg.addColorStop(1, rgba(K.snap, 0));
    ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(sx, sy, lw * 9, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(sx, sy, lw * 2.2, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill();
    ctx.strokeStyle = K.snap; ctx.lineWidth = lw * 1.1; ctx.stroke();
    // 读数小牌
    TB.font(fs * 1.05, 700);
    const rs = sv.toFixed(1) + "（" + sn[1] + "）", rw = ctx.measureText(rs).width + fs;
    const rx = clamp(sx - rw / 2, C.px + 2, C.px + C.pw - rw - 2), ry = C.py + C.ph - fs * 2.0;
    ctx.fillStyle = rgba("#ffffff", 0.94); ctx.beginPath(); ctx.roundRect(rx, ry, rw, fs * 1.6, fs * 0.5); ctx.fill();
    ctx.strokeStyle = K.snap; ctx.lineWidth = 1.2; ctx.stroke();
    txt(rs, rx + rw / 2, ry + fs * 0.82, fs * 1.05, "#a35f00", "center", 700);

    // 账本：近 3 个月每天的血糖范围 + 平均线
    const C2 = frame(r2, { x0: -90, x1: 0, y0: 3, y1: 12.5, title: n ? "" : "账本：近 3 个月的每一天",
      yt: [[4, n ? "" : "4"], [8, n ? "" : "8"], [12, n ? "" : "12"]], padL: n ? SF() * 0.9 : null,
      xt: [[-90, "3 个月前", "left"], [0, "今天", "right"]] });
    const reveal = clamp(T / 3, 0, 1);
    const dayW = C2.pw / 90;
    for (let d = -89; d <= 0; d++) {
      if ((d + 90) / 90 > reveal + 0.02) break;
      const m = 8.2 + 0.5 * Math.sin(d * 0.21) + (rnd(d + 500) - 0.5) * 0.9, lo = m - 1.8 - rnd(d + 600) * 0.8, hi = m + 2.2 + rnd(d + 700) * 1.6;
      const x = C2.X(d);
      ctx.strokeStyle = rgba(K.day, 0.35); ctx.lineWidth = Math.max(1, dayW * 0.6);
      ctx.beginPath(); ctx.moveTo(x, C2.Y(lo)); ctx.lineTo(x, C2.Y(hi)); ctx.stroke();
      ctx.fillStyle = rgba(K.day, 0.85); ctx.beginPath(); ctx.arc(x, C2.Y(m), Math.max(1, dayW * 0.45), 0, TAU); ctx.fill();
    }
    const avgA = clamp((T - 2.6) / 0.8, 0, 1);
    ctx.save(); ctx.globalAlpha *= avgA;
    plot(C2, () => 8.2, -90, 0, K.avg, lw * 1.1, [lw * 2.2, lw * 1.4], 2);
    TB.font(C2.fs, 700);
    const aw = ctx.measureText("平均").width + C2.fs * 0.6, ax = C2.X(-45) - aw / 2, ay = C2.Y(8.2) - C2.fs * 0.8;
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(ax, ay, aw, C2.fs * 1.6, C2.fs * 0.4); ctx.fill();
    ctx.strokeStyle = K.avg; ctx.lineWidth = 1; ctx.stroke();
    txt("平均", ax + aw / 2, ay + C2.fs * 0.82, C2.fs, K.avg, "center", 700);
    ctx.restore();
    const on = (k) => live && T > 0.6 && CH[0].labels.indexOf(k) >= 0;
    put(g, "snap", on("snap"), sx, sy - lw * 2.4, n ? A.x + A.w * 0.5 : C.X(12), C.py + C.fs * 0.6, "指尖血糖：只拍下这一刻", "#d98200");
    put(g, "ledger", on("ledger") && avgA > 0.5, C2.X(-20), C2.Y(8.2), n ? A.x + A.w * 0.5 : C2.X(-45), n ? C2.py + C2.fs * 0.2 : C2.Y(11.6), "糖化血红蛋白：看近几个月的平均", K.avg);
  }

  // ---- 第 2 幕：红细胞里的血红蛋白，葡萄糖自己粘上 ----
  const RBC_HB = [[0, 0], [-0.46, -0.22], [0.46, -0.22], [-0.46, 0.3], [0.46, 0.3], [0, -0.52], [0, 0.55]];
  function scene1(g, live, T) {
    const { A, Lg, n } = g;
    const Rr = n ? Math.min(A.w * 0.19, A.h * 0.38) : Math.min(A.w * 0.17, A.h * 0.4);
    const rc = { x: A.x + (n ? Rr + 4 : A.w * 0.18), y: A.y + A.h * (n ? 0.46 : 0.5) };
    const Rz = n ? Math.min(A.w * 0.29, A.h * 0.47) : Math.min(A.w * 0.21, A.h * 0.44);
    const zc = { x: n ? A.x + A.w - Rz - 6 : A.x + A.w * 0.6, y: A.y + A.h * 0.5 };
    // 红细胞：里面装满了血红蛋白
    rbcFace(rc.x, rc.y, Rr, 1);
    const hr = Rr * 0.15, pick = 2;
    const nG = Math.round(1 + 2 * S.gl);
    RBC_HB.forEach((p, k) => {
      const x = rc.x + p[0] * Rr + Math.sin(time * 0.9 + k) * 1.2, y = rc.y + p[1] * Rr + Math.cos(time * 0.8 + k * 2) * 1.2;
      hbIcon(x, y, hr, 0.95, k >= 1 && k <= nG ? (k === 3 && S.gl > 0.8 ? 2 : 1) : 0, Math.sin(time * 0.5 + k) * 0.25);
    });
    const pk = { x: rc.x + RBC_HB[pick][0] * Rr, y: rc.y + RBC_HB[pick][1] * Rr };
    txt("红细胞", rc.x, rc.y + Rr + SF() * 0.95, SF(), K.rbc[2], "center", 700);
    // 放大镜：从小血红蛋白连到右边的大圆
    const pr = hr * 1.6;
    ctx.strokeStyle = K.leader; ctx.lineWidth = 1; ctx.setLineDash([4, 3]);
    const ang = Math.atan2(zc.y - pk.y, zc.x - pk.x);
    [-1, 1].forEach((d) => {
      const a1 = ang + d * Math.PI / 2;
      ctx.beginPath(); ctx.moveTo(pk.x + Math.cos(a1) * pr, pk.y + Math.sin(a1) * pr); ctx.lineTo(zc.x + Math.cos(a1) * Rz, zc.y + Math.sin(a1) * Rz); ctx.stroke();
    });
    ctx.setLineDash([]);
    ctx.beginPath(); ctx.arc(pk.x, pk.y, pr, 0, TAU); ctx.strokeStyle = K.ink; ctx.lineWidth = 1.4; ctx.stroke();
    // 放大圆
    ctx.beginPath(); ctx.arc(zc.x, zc.y, Rz, 0, TAU);
    const zg = ctx.createRadialGradient(zc.x, zc.y, Rz * 0.2, zc.x, zc.y, Rz);
    zg.addColorStop(0, "#fff7f5"); zg.addColorStop(1, "#fde6e2");
    ctx.fillStyle = zg; ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = 1.4; ctx.stroke();
    ctx.save(); ctx.beginPath(); ctx.arc(zc.x, zc.y, Rz - 1, 0, TAU); ctx.clip();
    // 四聚体：上面两条 β 链、下面两条 α 链，每条链里一个血红素
    const Rb = Rz * 0.5, sub = Rb * 0.56, wob = Math.sin(time * 0.9) * 0.03;
    const cx = zc.x, cy = zc.y + Rz * 0.08;
    const SUB = [[-0.44, -0.42, "β", K.beta], [0.44, -0.42, "β", K.beta], [-0.44, 0.44, "α", K.alpha], [0.44, 0.44, "α", K.alpha]];
    SUB.forEach((s, k) => {
      const x = cx + s[0] * Rb * (1 + wob), y = cy + s[1] * Rb * (1 + wob), c = s[3];
      ctx.beginPath(); ctx.arc(x, y, sub, 0, TAU);
      ctx.fillStyle = glossy(x, y, sub, c[0], c[1]); ctx.fill();
      ctx.strokeStyle = c[2]; ctx.lineWidth = Math.max(1, sub * 0.06); ctx.stroke();
      // 血红素（运氧的铁环）
      const hx = x + (s[0] > 0 ? -1 : 1) * sub * 0.1, hy = y + sub * 0.22;
      ctx.save(); ctx.translate(hx, hy); ctx.rotate(0.5 * (s[0] > 0 ? 1 : -1));
      ctx.beginPath(); ctx.moveTo(-sub * 0.32, 0); ctx.lineTo(0, -sub * 0.16); ctx.lineTo(sub * 0.32, 0); ctx.lineTo(0, sub * 0.16); ctx.closePath();
      ctx.fillStyle = K.heme; ctx.fill();
      ctx.beginPath(); ctx.arc(0, 0, sub * 0.06, 0, TAU); ctx.fillStyle = "#f3b24a"; ctx.fill();
      ctx.restore();
      txt(s[2], x + (s[0] > 0 ? 1 : -1) * sub * 0.3, y - sub * 0.3, Math.max(10, sub * 0.42), rgba("#ffffff", 0.95), "center", 700);
    });
    // β 链的链头（糖粘上的位置）
    const site = [-1, 1].map((d) => {
      const bx = cx + d * 0.44 * Rb, by = cy - 0.42 * Rb;
      const a = -Math.PI / 2 + d * 0.75, ex = bx + Math.cos(a) * sub * 1.28, ey = by + Math.sin(a) * sub * 1.28;
      ctx.strokeStyle = K.beta[2]; ctx.lineWidth = Math.max(1.5, sub * 0.09); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(bx + Math.cos(a) * sub * 0.95, by + Math.sin(a) * sub * 0.95); ctx.lineTo(ex, ey); ctx.stroke();
      ctx.beginPath(); ctx.arc(ex, ey, sub * 0.1, 0, TAU); ctx.fillStyle = K.beta[1]; ctx.fill();
      return { x: ex, y: ey, a };
    });
    // 游离的葡萄糖（血糖越高越多）
    const rg = Math.max(5, sub * 0.28), nf = Math.round(3 + 6 * S.gl);
    for (let i = 0; i < nf; i++) {
      // 均匀分布在一圈上（避开上方两个结合位点的方向），慢慢转
      const a0 = 0.35 + (i + 0.5) / 9 * (TAU - 0.7) - Math.PI / 2 + (rnd(i + 40) - 0.5) * 0.3 + time * 0.03, rr = Rz * (0.8 + 0.07 * Math.sin(time * 0.7 + i));
      mol("glu", zc.x + Math.cos(a0) * rr, zc.y + Math.sin(a0) * rr, rg, clamp(S.gl * 9 - i, 0, 1) * 0.85, time * 0.3 + i);
    }
    // 两个葡萄糖先后游过来：挨上（虚线，还能松开）→ 粘牢（实线）
    const res = [];
    site.forEach((s, j) => {
      const t0 = 1.0 + j * 3.6, tA = 1.6, tFirm = 2.4;
      const u = ease(clamp((T - t0) / tA, 0, 1)), firm = clamp((T - t0 - tA - tFirm) / 0.5, 0, 1);
      const bx = s.x + Math.cos(s.a) * rg * 1.35, by = s.y + Math.sin(s.a) * rg * 1.35;
      const st = { x: zc.x + Math.cos(s.a) * Rz * 0.95, y: zc.y + Math.sin(s.a) * Rz * 0.95 };
      const x = st.x + (bx - st.x) * u + (1 - u) * Math.sin(time * 2 + j) * rg * 0.4, y = st.y + (by - st.y) * u;
      const a = clamp((T - t0 + 0.3) / 0.4, 0, 1);
      if (u > 0.98) {
        ctx.strokeStyle = firm > 0.5 ? K.glu[2] : K.glu[1]; ctx.lineWidth = Math.max(1.5, rg * (0.12 + 0.12 * firm));
        ctx.setLineDash(firm > 0.5 ? [] : [3, 3]);
        const wig = firm > 0.5 ? 0 : Math.sin(time * 7 + j) * rg * 0.12;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(x + wig, y); ctx.stroke(); ctx.setLineDash([]);
      }
      const wig2 = u > 0.98 && firm < 0.5 ? Math.sin(time * 7 + j) * rg * 0.12 : 0;
      mol("glu", x + wig2, y, rg, a, 0);
      if (firm > 0.02) {
        const gl = ctx.createRadialGradient(x, y, 0, x, y, rg * 2.2);
        gl.addColorStop(0, rgba(K.glu[1], 0.3 * firm * (0.7 + 0.3 * Math.sin(time * 3)))); gl.addColorStop(1, rgba(K.glu[1], 0));
        ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(x, y, rg * 2.2, 0, TAU); ctx.fill();
      }
      res.push({ x, y, u, firm });
    });
    ctx.restore();
    txt("放大：一个血红蛋白", zc.x, zc.y + Rz + SF() * 0.95, SF(), K.soft, "center", 500);
    const on = (k) => live && T > 0.6 && CH[1].labels.indexOf(k) >= 0;
    const R0 = res[0], R1 = res[1];
    put(g, "hb", on("hb"), pk.x - pr * 0.7, pk.y - pr * 0.7, n ? A.x + A.w * 0.26 : rc.x, n ? A.y : rc.y - Rr - LF() * 1.4, n ? "装满血红蛋白" : "红细胞里装满血红蛋白", K.hb[1]);
    const lx = n ? A.x + A.w * 0.72 : Math.min(zc.x + Rz + A.w * 0.12, W - Lg.bw - 40);
    put(g, "stick", on("stick") && R0.u > 0.9, R0.x, R0.y, n ? A.x + A.w * 0.72 : lx, n ? A.y : zc.y - Rz * 0.62, "不用酶，糖自己粘上", K.glu[1]);
    put(g, "firm", on("firm") && R0.firm > 0.5, R1.u > 0.9 ? R1.x : R0.x, R1.u > 0.9 ? R1.y : R0.y, n ? A.x + A.w * 0.5 : lx, n ? A.y + A.h : zc.y - Rz * 0.1, "粘牢了，就不再掉下来", K.glu[2]);
  }

  // ---- 第 3 幕：红细胞传送带（约 120 天）+ 各时段的分量 ----
  function scene2(g, live, T) {
    const { A, Lg, n } = g;
    const x0 = A.x + A.w * (n ? 0.06 : 0.07), x1 = A.x + A.w * (n ? 0.94 : 0.76), span = x1 - x0;
    const X = (d) => x1 - d / 120 * span;
    const yC = A.y + A.h * (n ? 0.24 : 0.25), yAx = A.y + A.h * (n ? 0.47 : 0.46), yB = A.y + A.h * (n ? 0.97 : 0.95);
    const rr = Math.min(span / 16, A.h * 0.1, IR() * 1.4);
    // 血流的淡色带
    const bg = ctx.createLinearGradient(0, yC - rr * 2.4, 0, yC + rr * 2.4);
    bg.addColorStop(0, K.lumen0); bg.addColorStop(0.5, K.lumen1); bg.addColorStop(1, K.lumen0);
    ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(x0 - rr * 1.6, yC - rr * 2.2, span + rr * 3.2, rr * 4.4, rr * 1.2); ctx.fill();
    // 血里的糖
    for (let i = 0; i < 9; i++) {
      const u = (rnd(i + 900) + time * 0.03) % 1, x = x1 - u * span, y = yC + (rnd(i + 910) > 0.5 ? -1 : 1) * rr * (1.35 + 0.35 * rnd(i + 920));
      mol("glu", x, y + Math.sin(time + i) * 1.5, rr * 0.3, 0.5 * Math.sin(u * Math.PI), time * 0.4 + i);
    }
    // 红细胞：从右边（今天，骨髓里刚出生）往左走，越老粘的糖越多，到约 120 天被回收
    const N = 8, speed = 7;
    let young = null, old = null;
    for (let i = 0; i < N; i++) {
      const age = (i * 120 / N + T * speed + 6) % 120, x = X(age), y = yC + Math.sin(time * 1.2 + i) * rr * 0.1;
      const a = clamp(age / 6, 0, 1) * clamp((120 - age) / 8, 0, 1);
      rbcSide(x, y, rr, a);
      const ng = Math.floor(age / 120 * 6.5);
      for (let k = 0; k < ng; k++) {
        const ax = x + (k - (ng - 1) / 2) * rr * 0.38, ay = y - rr * 0.62 - rr * 0.18 - (k % 2) * rr * 0.16;
        mol("glu", ax, ay, rr * 0.2, a, 0);
      }
      if (age < 35 && age > 8 && (!young || age < young.age)) young = { x, y, age };
      if (age > 70 && age < 110 && (!old || age > old.age)) old = { x, y, age };
    }
    const fs = SF();
    txt("骨髓：新生", x1 + rr * (n ? -0.2 : 1.9), yC - rr * 2.2 - fs * 0.7, fs, K.soft, n ? "right" : "left", 500);
    txt("约 120 天：被脾脏回收", x0 - rr * (n ? 0.5 : 1.2), yC + rr * 2.2 + fs * 0.8, fs, K.soft, "left", 500);
    if (!n) {
      // 右侧骨髓的小图：出生点
      const bx = x1 + rr * 2.8, gg = ctx.createRadialGradient(bx, yC, 0, bx, yC, rr * 1.4);
      gg.addColorStop(0, rgba(K.rbc[1], 0.35)); gg.addColorStop(1, rgba(K.rbc[1], 0));
      ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(bx, yC, rr * 1.4, 0, TAU); ctx.fill();
    }
    // 时间轴
    ctx.strokeStyle = K.line; ctx.lineWidth = 1.3;
    ctx.beginPath(); ctx.moveTo(x0, yAx); ctx.lineTo(x1, yAx); ctx.stroke();
    [[0, "今天"], [30, "1 个月前"], [60, "2 个月前"], [90, "3 个月前"], [120, "120 天"]].forEach((tk, k) => {
      ctx.beginPath(); ctx.moveTo(X(tk[0]), yAx - 3); ctx.lineTo(X(tk[0]), yAx + 3); ctx.stroke();
      if (!(n && (k === 1 || k === 3))) txt(tk[1], X(tk[0]), yAx + fs * 0.95, fs * 0.92, K.soft, k === 0 ? "right" : k === 4 ? "left" : "center", 500);
    });
    // 分量：越近的血糖分量越大（大致按指数下降，近 30 天约占一半）
    // 分量图：底线在 yB，越往上分量越大
    const wy0 = yAx + fs * 2.4, wh = yB - wy0, tau = 45;
    const wv = (d) => Math.exp(-d / tau);
    const grow = ease(clamp((T - 1.5) / 2, 0, 1));
    const WY = (d) => yB - wh * wv(d) * grow;
    ctx.strokeStyle = K.line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, yB); ctx.lineTo(x1, yB); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(X(0), yB);
    for (let d = 0; d <= 120; d += 2) ctx.lineTo(X(d), WY(d));
    ctx.lineTo(X(120), yB); ctx.closePath();
    ctx.fillStyle = rgba(K.weight, 0.14); ctx.fill();
    ctx.beginPath(); ctx.moveTo(X(0), yB);
    for (let d = 0; d <= 30; d += 1) ctx.lineTo(X(d), WY(d));
    ctx.lineTo(X(30), yB); ctx.closePath();
    ctx.fillStyle = rgba(K.weight, 0.36); ctx.fill();
    ctx.strokeStyle = K.weight; ctx.lineWidth = Math.max(1.5, H * 0.004);
    ctx.beginPath(); for (let d = 0; d <= 120; d += 2) { const x = X(d), y = WY(d); if (d) ctx.lineTo(x, y); else ctx.moveTo(x, y); } ctx.stroke();
    ctx.strokeStyle = rgba(K.weight, 0.6); ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(X(30), yB); ctx.lineTo(X(30), WY(30)); ctx.stroke(); ctx.setLineDash([]);
    txt("对结果的分量", x0, wy0 - fs * 0.2, fs, K.ink, "left", 700);
    if (grow > 0.5) {
      ctx.save(); ctx.globalAlpha *= (grow - 0.5) * 2;
      txt("约一半", (X(0) + X(30)) / 2, yB - wh * 0.28, fs * 1.05, "#8a3624", "center", 700);
      ctx.restore();
    }
    const on = (k) => live && T > 0.6 && CH[2].labels.indexOf(k) >= 0;
    const yp = young || { x: X(20), y: yC };
    put(g, "born", on("born"), (old || yp).x, (old || yp).y - rr * 0.9, n ? A.x + A.w * 0.4 : X(80), A.y, "越老的红细胞，粘的糖越多", K.rbc[2]);
    put(g, "weight", on("weight") && grow > 0.8, X(8), WY(8) + wh * 0.1, n ? A.x + A.w * 0.4 : X(72), yB - wh * 0.45, "越近的血糖，分量越重", K.weight);
  }

  // ---- 第 4 幕：刻度尺 + 100 个血红蛋白 ----
  function scene3(g, live, T) {
    const { A, Lg, n } = g;
    const v = pointer(T);
    const sx0 = A.x + A.w * (n ? 0.05 : 0.05), sx1 = A.x + A.w * (n ? 0.95 : 0.95);
    const X = (p) => sx0 + (p - 4) / 6 * (sx1 - sx0);
    const bh = Math.max(12, A.h * 0.075), by = A.y + A.h * (n ? 0.2 : 0.24), fs = SF();
    // 彩色刻度条
    const gr = ctx.createLinearGradient(sx0, 0, sx1, 0);
    [[4, "#9fdcb4"], [5.8, "#9fdcb4"], [6.5, "#f5d06a"], [7.2, "#f3a95a"], [8.5, "#e9804a"], [10, "#d8623e"]].forEach((s) => gr.addColorStop((s[0] - 4) / 6, s[1]));
    ctx.fillStyle = gr; ctx.beginPath(); ctx.roundRect(sx0, by, sx1 - sx0, bh, bh / 2); ctx.fill();
    ctx.strokeStyle = "#b9c3d6"; ctx.lineWidth = 1; ctx.stroke();
    // 刻度与估算平均血糖（ADAG 研究的换算：mg/dL = 28.7×HbA1c − 46.7，再除以 18 换成 mmol/L）
    for (let p = 4; p <= 10; p++) {
      ctx.strokeStyle = K.line; ctx.beginPath(); ctx.moveTo(X(p), by + bh); ctx.lineTo(X(p), by + bh + 4); ctx.stroke();
      txt(p + "%", X(p), by + bh + fs * 1.05, fs, K.ink, p === 4 ? "left" : p === 10 ? "right" : "center", 700);
      if (p >= 5 && p <= 9) txt("≈" + ((28.7 * p - 46.7) / 18).toFixed(1), X(p), by + bh + fs * 2.4, fs * 0.88, K.soft, "center", 500);
    }
    txt(n ? "≈平均血糖" : "≈ 平均血糖 mmol/L", X(4), by + bh + fs * 2.4, fs * 0.88, K.soft, "left", 500);
    // 6%、6.5%、7% 三条线
    const lw = Math.max(1.5, H * 0.004);
    ctx.setLineDash([2, 3]); ctx.strokeStyle = K.soft; ctx.lineWidth = lw * 0.8;
    ctx.beginPath(); ctx.moveTo(X(6), by - bh * 0.5); ctx.lineTo(X(6), by + bh * 1.5); ctx.stroke();
    ctx.setLineDash([]); ctx.strokeStyle = K.ink; ctx.lineWidth = lw * 1.3;
    ctx.beginPath(); ctx.moveTo(X(6.5), by - bh * 0.7); ctx.lineTo(X(6.5), by + bh * 1.5); ctx.stroke();
    ctx.setLineDash([lw * 2.4, lw * 1.6]); ctx.strokeStyle = K.ok; ctx.lineWidth = lw * 1.3;
    ctx.beginPath(); ctx.moveTo(X(7), by - bh * 0.7); ctx.lineTo(X(7), by + bh * 1.5); ctx.stroke(); ctx.setLineDash([]);
    // 可放宽：从 7% 往右的虚线箭头
    const ay = by + bh + fs * 3.7;
    arrow([[X(7), ay], [X(7.5), ay], [X(8), ay]], K.ok, Math.max(2, lw), 0.75, "go");
    txt(n ? "个体化，可放宽" : "老人、易低血糖者：可适当放宽", X(8) + fs * 0.6, ay, fs * 0.9, "#23784a", "left", 500);
    // 游标
    const px = X(v), py = by - bh * 0.15;
    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - bh * 0.5, py - bh * 0.8); ctx.lineTo(px + bh * 0.5, py - bh * 0.8); ctx.closePath();
    ctx.fillStyle = a1cCol(v); ctx.fill(); ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.2; ctx.stroke();
    // 100 个血红蛋白里，有几个粘了糖
    const gy0 = ay + fs * 1.6, gh = A.y + A.h - gy0 - fs * 1.6;
    const cols = n ? 10 : 20, rows = 100 / cols;
    const cell = Math.min((gh - fs * 1.8) / rows, (n ? A.w * 0.5 : A.w * 0.46) / cols), gx0 = n ? A.x + A.w * 0.04 : A.x + A.w * 0.05;
    const kGly = Math.round(v);
    txt("100 个血红蛋白里，约 " + kGly + " 个粘了糖", gx0, gy0 + fs * 0.4, fs, K.ink, "left", 700);
    const gy1 = gy0 + fs * 1.4;
    for (let k = 0; k < 100; k++) {
      const col = k % cols, row = Math.floor(k / cols), x = gx0 + col * cell + cell / 2, y = gy1 + row * cell + cell / 2;
      if (k < kGly) {
        const hg = ctx.createRadialGradient(x, y, 0, x, y, cell * 0.6);
        hg.addColorStop(0, rgba(K.glu[1], 0.35)); hg.addColorStop(1, rgba(K.glu[1], 0));
        ctx.fillStyle = hg; ctx.beginPath(); ctx.arc(x, y, cell * 0.6, 0, TAU); ctx.fill();
      }
      hbIcon(x, y + cell * 0.08, cell * 0.34, k < kGly ? 1 : 0.8, k < kGly ? 1 : 0, 0);
    }
    const on = (k) => live && T > 0.6 && CH[3].labels.indexOf(k) >= 0;
    const tyU = by - bh * 0.8 - LF() * 1.6;
    put(g, "norm", on("norm"), X(5.2), by + bh * 0.5, n ? A.x + A.w * 0.24 : X(5.0), tyU, n ? "一般人：约 6% 以下" : "没有糖尿病：一般低于约 6%", "#3d9a60");
    put(g, "dx", on("dx"), X(6.5), by - bh * 0.7, n ? A.x + A.w * 0.72 : X(7.6), tyU, n ? "≥ 6.5%：诊断标准之一" : "≥ 6.5%：可作诊断糖尿病的标准之一", K.ink);
    const gx = n ? A.x + A.w * 0.76 : A.x + A.w * 0.6;
    put(g, "goal", on("goal"), X(7), by + bh * 1.5, gx, gy0 + gh * (n ? 0.45 : 0.3), n ? "多数糖友目标 < 7%" : "多数成年糖友目标 < 7%，因人而异", K.ok);
  }

  // ---- 第 5 幕：血管壁的蛋白也被糖化 ----
  function scene4(g, live, T) {
    const { A, Lg, n } = g;
    const vT = A.y + (n ? 0 : A.h * 0.02), vH = A.h * (n ? 0.4 : 0.42), vB = vT + vH, ew = Math.max(5, vH * 0.1);
    const wallH = vH * 0.36, wB = vB + wallH;
    const ir = Math.min(IR(), vH * 0.14);
    // 管腔
    const lg = ctx.createLinearGradient(0, vT, 0, vB);
    lg.addColorStop(0, K.lumen0); lg.addColorStop(1, K.lumen1);
    ctx.fillStyle = lg; ctx.fillRect(0, vT, W, vH);
    // 管壁（胶原纤维）
    ctx.fillStyle = K.wall; ctx.fillRect(0, vB, W, wallH);
    ctx.strokeStyle = K.fiber; ctx.lineWidth = Math.max(1.5, wallH * 0.06);
    for (let r = 0; r < 3; r++) {
      const y = vB + wallH * (0.25 + r * 0.25);
      ctx.beginPath();
      for (let x = 0; x <= W; x += 6) { const yy = y + Math.sin(x * 0.045 + r * 1.7) * wallH * 0.06; if (x) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); }
      ctx.stroke();
    }
    // 内皮（受损：变灰、出现缝隙）
    const L = Math.max(34, W / 13);
    [[vT, 0], [vB - ew, 1]].forEach((row) => {
      const y = row[0], side = row[1];
      for (let i = 0, x = -L * 0.3 * side; x < W + L; i++, x += L) {
        const hurt = rnd(i * 3 + side * 50 + 400) < S.harm * 0.6;
        const c = hurt ? K.endoHurt : K.endo, sh = hurt ? L * 0.08 * S.harm : 0;
        const xx = x + 1 + sh, w = L - 2 - sh * 2;
        ctx.beginPath(); ctx.roundRect(xx, y, w, ew, ew / 2);
        ctx.fillStyle = glossy(xx + w * 0.4, y + ew * 0.3, w * 0.6, c[0], c[1]); ctx.fill();
        ctx.strokeStyle = c[2]; ctx.lineWidth = 1; ctx.stroke();
      }
    });
    // 血里的红细胞（粘满了糖）和葡萄糖
    const yIn = (f) => vT + ew + (vH - ew * 2) * f;
    for (let i = 0; i < 5; i++) {
      const x = ((rnd(i + 30) + time * 0.03) % 1.2 - 0.1) * W, y = yIn(0.3 + 0.4 * rnd(i + 31));
      rbcSide(x, y, ir * 1.05, 0.9);
      for (let k = 0; k < 4; k++) mol("glu", x + (k - 1.5) * ir * 0.42, y - ir * 0.8 - (k % 2) * ir * 0.18, ir * 0.22, 0.9, 0);
    }
    for (let i = 0; i < 16; i++) {
      const x = ((rnd(i + 60) + time * 0.035 * (0.8 + rnd(i + 61) * 0.4)) % 1.2 - 0.1) * W, y = yIn(0.12 + 0.76 * rnd(i + 62));
      mol("glu", x, y, ir * 0.42, 0.85, time * 0.4 + i);
    }
    // 管壁蛋白上：糖慢慢粘上，再变成褐色的糖化终产物
    let ageP = null, wallP = null;
    for (let i = 0; i < 13; i++) {
      const x = (i + 0.35 + rnd(i + 80) * 0.3) * W / 13, y = vB + wallH * (0.25 + (i % 3) * 0.25) + Math.sin(x * 0.045 + (i % 3) * 1.7) * wallH * 0.06;
      const t = clamp((T - rnd(i + 81) * 4) / 1.2, 0, 1), turn = clamp((T - 4 - rnd(i + 82) * 4) / 1.5, 0, 1) * (i % 2);
      mol("glu", x, y, ir * 0.5, t * (1 - turn) * S.harm, 0);
      mol("age", x, y, ir * 0.62, turn * S.harm, rnd(i) * 3);
      if (turn > 0.8 && (!ageP || Math.abs(x - W * 0.5) < Math.abs(ageP.x - W * 0.5))) ageP = { x, y };
      if (!turn && t > 0.8 && x > W * 0.12 && x < W * 0.4 && !wallP) wallP = { x, y };
    }
    if (!n) txt("血管壁", A.x + SF() * 1.8, vB + wallH * 0.5, SF(), "#9a6f45", "center", 700);
    // 下方：受累的器官
    const oy0 = wB + A.h * 0.05, oh = A.y + A.h - oy0, ox0 = A.x, ow = n ? A.w : A.w - Lg.bw - 18;
    const cw = ow / 3, org = [];
    ["眼底", "肾脏", "神经"].forEach((nm, k) => {
      const x = ox0 + cw * k + cw / 2, y = oy0 + oh * 0.45, s = Math.min(cw * 0.26, oh * 0.32);
      const warn = 0.5 + 0.5 * Math.sin(time * 1.6 + k);
      const gl = ctx.createRadialGradient(x, y, 0, x, y, s * 1.9);
      gl.addColorStop(0, rgba(K.fire, 0.18 + 0.12 * warn)); gl.addColorStop(1, rgba(K.fire, 0));
      ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(x, y, s * 1.9, 0, TAU); ctx.fill();
      if (k === 0) fundus(x, y, s);
      else if (k === 1) kidney(x, y, s);
      else nerve(x, y, s);
      txt(nm, x, y + s * 1.25 + SF() * 0.5, SF(), K.ink, "center", 700);
      org.push({ x, y, s });
    });
    const on = (k) => live && T > 0.6 && CH[4].labels.indexOf(k) >= 0;
    const wp = wallP || { x: W * 0.25, y: vB + wallH * 0.5 };
    put(g, "wall", on("wall"), wp.x, wp.y, n ? A.x + A.w * 0.3 : wp.x + A.w * 0.02, vT + vH * 0.5, "血管壁的蛋白也被糖化", K.glu[2]);
    const ap = ageP || { x: W * 0.6, y: vB + wallH * 0.5 };
    put(g, "age", on("age") && !!ageP, ap.x, ap.y, n ? A.x + A.w * 0.7 : ap.x + A.w * 0.08, n ? vT + vH * 0.5 : vT + vH * 0.3, "粘久了，变成糖化终产物", K.age[1]);
    const o1 = org[1];
    put(g, "organ", on("organ"), o1.x + o1.s * 0.8, o1.y - o1.s * 0.6, n ? A.x + A.w * 0.5 : o1.x + cw * 0.55, oy0 + LF() * 0.2, "小血管最先受累", "#d98200");
  }
  function fundus(x, y, s) {
    ctx.beginPath(); ctx.arc(x, y, s, 0, TAU);
    ctx.fillStyle = glossy(x, y, s, "#f7b98a", "#d9704a"); ctx.fill();
    ctx.strokeStyle = "#a44a2c"; ctx.lineWidth = 1; ctx.stroke();
    const dx = x + s * 0.35, dy = y - s * 0.05;
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, s * 0.97, 0, TAU); ctx.clip();
    ctx.strokeStyle = "#9c2f22"; ctx.lineCap = "round";
    [[-2.6, 1.1], [-3.4, 1.0], [2.4, 0.9], [-1.9, 0.8], [3.0, 0.8]].forEach((b, k) => {
      ctx.lineWidth = Math.max(1, s * 0.05);
      ctx.beginPath(); ctx.moveTo(dx, dy);
      const ex = dx + Math.cos(b[0]) * s * 1.4 * b[1], ey = dy + Math.sin(b[0]) * s * 1.4 * b[1];
      ctx.quadraticCurveTo(dx + Math.cos(b[0] + 0.3) * s * 0.6, dy + Math.sin(b[0] + 0.3) * s * 0.6, ex, ey); ctx.stroke();
    });
    // 小出血点
    ctx.fillStyle = "#8a1f18";
    for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.arc(x - s * 0.4 + rnd(k + 5) * s * 0.6, y - s * 0.4 + rnd(k + 9) * s * 0.9, s * 0.05, 0, TAU); ctx.fill(); }
    ctx.restore();
    ctx.beginPath(); ctx.arc(dx, dy, s * 0.2, 0, TAU); ctx.fillStyle = glossy(dx, dy, s * 0.2, "#fff4d8", "#f3d08c"); ctx.fill();
  }
  function kidney(x, y, s) {
    ctx.save(); ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(s * 0.1, -s * 0.95);
    ctx.bezierCurveTo(s * 0.85, -s * 1.0, s * 0.95, s * 0.95, s * 0.1, s * 0.95);
    ctx.bezierCurveTo(-s * 0.5, s * 0.95, -s * 0.6, s * 0.45, -s * 0.25, s * 0.2);
    ctx.bezierCurveTo(-s * 0.05, s * 0.05, -s * 0.05, -s * 0.15, -s * 0.25, -s * 0.25);
    ctx.bezierCurveTo(-s * 0.65, -s * 0.5, -s * 0.5, -s * 0.95, s * 0.1, -s * 0.95);
    ctx.closePath();
    ctx.fillStyle = glossy(s * 0.2, -s * 0.2, s, "#f3b3a6", "#c0604e"); ctx.fill();
    ctx.strokeStyle = "#86392b"; ctx.lineWidth = 1; ctx.stroke();
    // 肾小球（小血管团）
    ctx.fillStyle = "rgba(134,57,43,0.45)";
    for (let k = 0; k < 6; k++) { const a = -1.2 + k * 0.48; ctx.beginPath(); ctx.arc(s * 0.3 + Math.cos(a) * s * 0.28, Math.sin(a) * s * 0.55, s * 0.07, 0, TAU); ctx.fill(); }
    ctx.restore();
  }
  function nerve(x, y, s) {
    // 神经纤维：一段有髓鞘的轴突
    ctx.save(); ctx.translate(x, y); ctx.rotate(-0.35);
    ctx.strokeStyle = "#b4895e"; ctx.lineWidth = Math.max(1.5, s * 0.08); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(-s * 1.2, 0); ctx.lineTo(s * 1.2, 0); ctx.stroke();
    for (let k = -2; k <= 1; k++) {
      const cx = k * s * 0.55 + s * 0.28;
      ctx.beginPath(); ctx.roundRect(cx - s * 0.23, -s * 0.2, s * 0.46, s * 0.4, s * 0.18);
      ctx.fillStyle = glossy(cx, -s * 0.05, s * 0.3, "#fff4dc", "#e9c98f"); ctx.fill();
      ctx.strokeStyle = "#a47d44"; ctx.lineWidth = 1; ctx.stroke();
    }
    ctx.strokeStyle = "#b4895e"; ctx.lineWidth = Math.max(1.2, s * 0.06);
    [[-1.2, -1], [-1.2, 1], [1.2, -1], [1.2, 1]].forEach((p) => { ctx.beginPath(); ctx.moveTo(p[0] * s, 0); ctx.lineTo(p[0] * s + Math.sign(p[0]) * s * 0.25, p[1] * s * 0.3); ctx.stroke(); });
    ctx.restore();
  }

  // ---- 第 6 幕：平均数一样，波动不一样；红细胞寿命变了，账也会记错 ----
  // 两条一天的血糖：三餐后的峰一样多，一条平稳，一条峰高、夜里和傍晚掉到 3.9 以下；平移到平均数相同
  const bump = (h, t0, a, w) => { const x = (h - t0) / w; return x > 0 ? a * x * x * Math.exp(2 - 2 * x) : 0; };
  const gss = (h, t0, a, w) => a * Math.exp(-((h - t0) * (h - t0)) / (2 * w * w));
  const steady0 = (h) => 6.6 + bump(h, 7.2, 1.9, 1.2) + bump(h, 12.1, 2.1, 1.2) + bump(h, 18.3, 2.0, 1.2);
  const swing0 = (h) => 5.6 + bump(h, 7.2, 6.4, 1.1) + bump(h, 12.1, 6.8, 1.1) + bump(h, 18.3, 6.2, 1.1) - gss(h, 3.2, 3.2, 1.1) - gss(h, 16.6, 3.0, 0.55) - gss(h, 24.5, 1.5, 1.2);
  const meanOf = (f) => { let a = 0; for (let i = 0; i < 480; i++) a += f(i / 20); return a / 480; };
  const MEAN = meanOf(steady0), SHIFT = MEAN - meanOf(swing0);
  const steadyG = steady0, swingG = (h) => swing0(h) + SHIFT;
  function scene5(g, live, T) {
    const { A, Lg, n } = g;
    const r1 = n ? { x: A.x, y: A.y, w: A.w, h: A.h * 0.58 } : { x: A.x, y: A.y + A.h * 0.02, w: A.w * 0.56, h: A.h * 0.96 };
    const r2 = n ? { x: A.x, y: A.y + A.h * 0.62, w: A.w, h: A.h * 0.38 } : { x: A.x + A.w * 0.6, y: A.y + A.h * 0.02, w: A.w * 0.4, h: A.h * 0.96 - Lg.bh - 14 - LF() * 2.6 };
    const C = frame(r1, { x0: 0, x1: 24, y0: 1.5, y1: 15, title: n ? "" : "同样的平均数，两种一天",
      yt: [[3.9, "3.9"], [10, "10.0"]], xt: [[0, "0点", "left"], [12, "12点"], [24, "24点", "right"]] });
    // 目标范围 3.9～10.0 mmol/L
    ctx.fillStyle = K.band; ctx.fillRect(C.px, C.Y(10), C.pw, C.Y(3.9) - C.Y(10));
    txt("目标范围", C.px + C.pw - C.fs * 0.4, C.Y(10) + C.fs * 0.85, C.fs, "#3f8a62", "right", 700);
    const reveal = clamp(T / 3.5, 0, 1), lw = Math.max(2, H * 0.006);
    ctx.save(); ctx.beginPath(); ctx.rect(C.px, C.py - lw * 3, C.pw * reveal + 1, C.ph + lw * 6); ctx.clip();
    // 低于 3.9 的那一截标蓝
    plot(C, swingG, 0, 24, K.swing, lw * 1.1);
    ctx.save(); ctx.beginPath(); ctx.rect(C.px, C.Y(3.9), C.pw, C.Y(2) - C.Y(3.9)); ctx.clip();
    plot(C, swingG, 0, 24, K.low, lw * 1.5); ctx.restore();
    plot(C, steadyG, 0, 24, K.steady, lw * 1.1);
    ctx.restore();
    // 平均线
    const avA = clamp((T - 3.4) / 0.8, 0, 1);
    ctx.save(); ctx.globalAlpha *= avA;
    plot(C, () => MEAN, 0, 24, K.avg, lw, [lw * 2, lw * 1.4], 2);
    TB.font(C.fs, 700);
    const aw = ctx.measureText("平均一样").width + C.fs * 0.6, ax = C.X(22.4) - aw, ay = C.Y(MEAN) - C.fs * 0.8;
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(ax, ay, aw, C.fs * 1.6, C.fs * 0.4); ctx.fill();
    ctx.strokeStyle = K.avg; ctx.lineWidth = 1; ctx.stroke();
    txt("平均一样", ax + aw / 2, ay + C.fs * 0.82, C.fs, K.avg, "center", 700);
    ctx.restore();
    // 低血糖点：找曲线最低处
    let lowH = 0, lowV = 99;
    for (let h = 0; h <= 24; h += 0.1) { const v = swingG(h); if (v < lowV) { lowV = v; lowH = h; } }
    // 右：红细胞寿命改变，结果跟着偏
    const fs = SF(), lx = r2.x + fs * 0.6, lwid = r2.w - fs * 1.2;
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(r2.x, r2.y, r2.w, r2.h, 10); ctx.fill();
    ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.stroke();
    const rows = [["寿命正常 约 120 天", 1, "结果可靠", K.soft], ["寿命变短", 0.55, "可能偏低", K.low], ["寿命变长", 1.3, "可能偏高", K.swing]];
    const top = r2.y + (n ? fs * 0.9 : fs * 2.4), rh = (r2.h - (top - r2.y) - fs * (n ? 2.6 : 3.4)) / 3;
    if (!n) txt("红细胞活多久，账就记多久", r2.x + fs * 0.8, r2.y + fs * 1.2, fs * 0.95, K.ink, "left", 700);
    const barX = lx + (n ? lwid * 0.3 : lwid * 0.02), full = (n ? lwid * 0.36 : lwid * 0.62) / 1.3;
    let lifeP = null;
    rows.forEach((rw, k) => {
      const y = top + rh * k + rh * 0.5, rr = Math.min(rh * 0.2, fs * 0.8);
      if (n) txt(rw[0].replace(" 约 120 天", ""), lx, y, fs * 0.9, K.ink, "left", 500);
      else txt(rw[0], barX, y - rh * 0.28, fs * 0.9, K.ink, "left", 500);
      const by = n ? y : y + rh * 0.12, bw = full * rw[1] * ease(clamp((T - 0.8 - k * 0.5) / 1, 0, 1));
      ctx.fillStyle = rgba(K.rbc[1], 0.22); ctx.beginPath(); ctx.roundRect(barX, by - rr * 0.6, Math.max(rr, bw), rr * 1.2, rr * 0.6); ctx.fill();
      rbcSide(barX + Math.max(rr, bw), by, rr, 1);
      txt(rw[2], barX + full * 1.3 + rr * 2.4, by, fs * 0.92, rw[3], "left", 700);
      if (k === 1) lifeP = { x: barX + bw * 0.5, y: by };
    });
    txt(n ? "贫血、失血、输血、怀孕、血红蛋白病、肾病等" : "贫血 · 失血 · 输血 · 怀孕 · 血红蛋白病 · 肾病……", r2.x + r2.w / 2, r2.y + r2.h - fs * (n ? 1.0 : 1.3), fs * (n ? 0.85 : 0.88), K.soft, "center", 500);
    const on = (k) => live && T > 0.6 && CH[5].labels.indexOf(k) >= 0;
    put(g, "same", on("same") && avA > 0.5, C.X(9), C.Y(swingG(9)), n ? A.x + A.w * 0.3 : C.X(6.5), C.py + C.fs * 0.3, "一个平稳，一个忽高忽低", K.swing);
    put(g, "low", on("low") && reveal > 0.95, C.X(lowH), C.Y(lowV), n ? A.x + A.w * 0.72 : C.X(lowH) + A.w * 0.03, C.Y(3.9) + C.fs * 2.6, "低血糖也藏在平均数里", K.low);
    const cy = r2.y + r2.h - fs * (n ? 1.0 : 1.3);
    put(g, "life", on("life"), r2.x + r2.w * (n ? 0.3 : 0.4), cy + fs * 0.5, n ? A.x + A.w * 0.5 : r2.x + r2.w * 0.36, n ? r2.y - LF() * 0.2 : r2.y + r2.h + LF() * 1.5, "这些情况会让账不准", K.soft);
  }

  // ---- 第 7 幕：每 3 个月对一次账 ----
  const PTS = [[0, 8.4], [3, 7.7], [6, 7.2], [9, 6.9], [12, 6.8], [18, 6.7]];
  function scene6(g, live, T) {
    const { A, Lg, n } = g;
    const r1 = n ? { x: A.x, y: A.y, w: A.w, h: A.h * 0.64 } : { x: A.x, y: A.y + A.h * 0.02, w: A.w * 0.62, h: A.h * 0.96 };
    const C = frame(r1, { x0: 0, x1: 18.8, y0: 6, y1: 9, title: n ? "" : "每次复查的糖化血红蛋白（%）",
      yt: [[6, "6"], [7, "7"], [8, "8"], [9, ""]],
      xt: [[0, "开始", "left"], [3, "3 月"], [6, "6 月"], [9, "9 月"], [12, "1 年"], [18, "1 年半"]] });
    const lw = Math.max(2, H * 0.006);
    // 达标后：半年一查的色带
    ctx.fillStyle = "#e9eef7"; ctx.fillRect(C.X(12), C.py, C.X(18.8) - C.X(12), C.ph);
    txt(n ? "半年一查" : "达标后：半年一查", (C.X(12) + C.X(18.8)) / 2, C.py + C.fs * 0.9, C.fs, K.soft, "center", 500);
    // 目标线 7%
    const gg = ctx.createLinearGradient(0, C.Y(7), 0, C.Y(6));
    gg.addColorStop(0, rgba(K.ok, 0.16)); gg.addColorStop(1, rgba(K.ok, 0.02));
    ctx.fillStyle = gg; ctx.fillRect(C.px, C.Y(7), C.pw, C.Y(6) - C.Y(7));
    plot(C, () => 7, 0, 18.8, K.ok, lw, [lw * 2.4, lw * 1.6], 2);
    txt("目标 < 7%", C.px + C.pw - C.fs * 0.3, C.Y(7) - C.fs * 0.8, C.fs, "#23784a", "right", 700);
    // 一次次复查的点，依次出现
    const shown = clamp(T / 1.3, 0, PTS.length);
    ctx.strokeStyle = K.hb[1]; ctx.lineWidth = lw; ctx.lineJoin = "round";
    ctx.beginPath();
    for (let i = 0; i < PTS.length; i++) {
      const f = clamp(shown - i, 0, 1); if (f <= 0) break;
      const x = C.X(PTS[i][0]), y = C.Y(PTS[i][1]);
      if (!i) ctx.moveTo(x, y);
      else { const px = C.X(PTS[i - 1][0]), py = C.Y(PTS[i - 1][1]); ctx.lineTo(px + (x - px) * f, py + (y - py) * f); }
    }
    ctx.stroke();
    let last = null;
    PTS.forEach((p, i) => {
      const a = clamp(shown - i, 0, 1); if (a <= 0.02) return;
      const x = C.X(p[0]), y = C.Y(p[1]), rr = Math.max(4, lw * 2.2);
      ctx.save(); ctx.globalAlpha *= a;
      ctx.beginPath(); ctx.arc(x, y, rr, 0, TAU); ctx.fillStyle = p[1] < 7 ? K.ok : K.hb[1]; ctx.fill();
      ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.5; ctx.stroke();
      txt(p[1].toFixed(1), x, y - rr - C.fs * 0.8, C.fs, K.ink, "center", 700);
      ctx.restore();
      last = { x, y, i };
    });
    // 右：能做什么，还要看什么
    const r2 = n ? { x: A.x, y: A.y + A.h * 0.68, w: A.w, h: A.h * 0.32 } : { x: A.x + A.w * 0.66, y: A.y + A.h * 0.02, w: A.w * 0.34, h: A.h * 0.96 - Lg.bh - 14 };
    const fs = SF();
    const DO = [["定时定量吃饭", "bowl"], ["坚持运动", "shoe"], ["按时用药", "clock"]], MORE = ["血压", "血脂", "体重"];
    const tiles = [];
    if (n) {
      const cw = r2.w / 3;
      DO.forEach((d, k) => {
        const x = r2.x + cw * k + cw / 2, y = r2.y + r2.h * 0.34, s = Math.min(cw * 0.2, r2.h * 0.24);
        badge(d[1], x, y, s, k, T);
        txt(d[0], x, y + s * 1.25 + fs * 0.5, fs * 0.9, K.ink, "center", 500);
        tiles.push({ x, y, s });
      });
    } else {
      ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(r2.x, r2.y, r2.w, r2.h, 10); ctx.fill();
      ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.stroke();
      txt("让数字降下来", r2.x + fs * 0.8, r2.y + fs * 1.2, fs * 0.95, K.ink, "left", 700);
      const rh = (r2.h * 0.64 - fs * 2.2) / 3;
      DO.forEach((d, k) => {
        const y = r2.y + fs * 2.2 + rh * k + rh / 2, s = Math.min(rh * 0.34, r2.w * 0.1), x = r2.x + fs * 0.8 + s * 1.2;
        badge(d[1], x, y, s, k, T);
        txt(d[0], x + s * 1.6, y, fs, K.ink, "left", 500);
        tiles.push({ x, y, s });
      });
      const my = r2.y + r2.h * 0.68;
      ctx.strokeStyle = "#e3e8f1"; ctx.beginPath(); ctx.moveTo(r2.x + fs * 0.8, my); ctx.lineTo(r2.x + r2.w - fs * 0.8, my); ctx.stroke();
      txt("还要一起管好", r2.x + fs * 0.8, my + fs * 1.1, fs * 0.95, K.ink, "left", 700);
      const cw = (r2.w - fs * 1.6) / 3;
      MORE.forEach((m, k) => {
        const x = r2.x + fs * 0.8 + cw * k + cw / 2, y = my + fs * 1.8 + (r2.y + r2.h - my - fs * 1.8) * 0.5;
        ctx.fillStyle = "#f1f5fb"; ctx.beginPath(); ctx.roundRect(x - cw * 0.42, y - fs * 0.85, cw * 0.84, fs * 1.7, fs * 0.85); ctx.fill();
        ctx.strokeStyle = "#c9d3e4"; ctx.stroke();
        txt(m, x, y + 0.5, fs, K.ink, "center", 500);
      });
    }
    const on = (k) => live && T > 0.6 && CH[6].labels.indexOf(k) >= 0;
    const p3 = { x: C.X(3), y: C.Y(7.7) };
    put(g, "every3", on("every3") && shown > 2, p3.x, p3.y, n ? A.x + A.w * 0.3 : C.X(5.2), C.py + C.fs * 0.4, "约每 3 个月查一次", K.hb[1]);
    put(g, "half", on("half") && shown > 5.5, C.X(15.5), C.Y(6.25), n ? A.x + A.w * 0.72 : C.X(14), C.Y(8.4), "达标稳定后：半年一次", K.ok);
    // 宽屏右边的卡片里已经写了“还要一起管好”，只在窄屏用标注补上
    if (n) put(g, "more", on("more"), tiles[1].x, tiles[1].y - tiles[1].s, A.x + A.w * 0.5, r2.y - LF() * 0.3, "血压、血脂、体重也要管好", K.soft);
  }
  // 小圆徽章里的简笔图标
  function badge(kind, x, y, s, k, T) {
    const pop = ease(clamp((T - 0.5 - k * 0.4) / 0.6, 0, 1));
    const gl = ctx.createRadialGradient(x, y, 0, x, y, s * 1.6);
    gl.addColorStop(0, rgba(K.ok, 0.22 * pop * (0.8 + 0.2 * Math.sin(time * 2 + k)))); gl.addColorStop(1, rgba(K.ok, 0));
    ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(x, y, s * 1.6, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(x, y, s, 0, TAU); ctx.fillStyle = glossy(x, y, s, "#ffffff", "#e3f3ea"); ctx.fill();
    ctx.strokeStyle = "#7fbf98"; ctx.lineWidth = Math.max(1, s * 0.07); ctx.stroke();
    const ink = "#2f6f4e";
    ctx.save(); ctx.translate(x, y); ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = Math.max(1.2, s * 0.09); ctx.lineCap = "round"; ctx.lineJoin = "round";
    if (kind === "bowl") {
      ctx.beginPath(); ctx.arc(0, -s * 0.05, s * 0.55, 0, Math.PI); ctx.closePath(); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(0, -s * 0.05, s * 0.5, Math.PI, 0); ctx.fillStyle = "#f6f1e4"; ctx.fill();
      ctx.beginPath(); ctx.moveTo(-s * 0.2, s * 0.5); ctx.lineTo(s * 0.2, s * 0.5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(s * 0.15, -s * 0.7); ctx.lineTo(s * 0.55, -s * 0.2); ctx.moveTo(s * 0.3, -s * 0.72); ctx.lineTo(s * 0.62, -s * 0.3); ctx.stroke();
    } else if (kind === "shoe") {
      ctx.beginPath();
      ctx.moveTo(-s * 0.6, s * 0.3); ctx.lineTo(-s * 0.6, -s * 0.35); ctx.lineTo(-s * 0.2, -s * 0.35); ctx.lineTo(-s * 0.05, -s * 0.05);
      ctx.quadraticCurveTo(s * 0.55, s * 0.0, s * 0.62, s * 0.3); ctx.closePath();
      ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s * 0.66, s * 0.42); ctx.lineTo(s * 0.66, s * 0.42); ctx.stroke();
      const run = Math.sin(time * 5) * s * 0.04;
      ctx.beginPath(); ctx.moveTo(-s * 0.95, -s * 0.2 + run); ctx.lineTo(-s * 0.75, -s * 0.2 + run); ctx.moveTo(-s * 0.95, s * 0.05 - run); ctx.lineTo(-s * 0.72, s * 0.05 - run); ctx.stroke();
    } else {
      ctx.beginPath(); ctx.arc(0, 0, s * 0.58, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.stroke();
      const a = time * 0.8;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * s * 0.42, Math.sin(a) * s * 0.42); ctx.moveTo(0, 0); ctx.lineTo(0, -s * 0.3); ctx.stroke();
    }
    ctx.restore();
  }

  function drawScene(i, live, T) {
    const g = area(i);
    [scene0, scene1, scene2, scene3, scene4, scene5, scene6][i](g, live, T);
    legend(g.Lg);
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
    chapters: CH, state: S, dur: DUR, accent: "#b15a3c",
    titleCard: { lines: ["血糖的", "三个月账本"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
