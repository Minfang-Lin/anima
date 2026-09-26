// 教科书画风工具包（机制类集共用）：Anima.textbook(env) 返回一套画笔。
// 必须在 shared/engine.js 之后加载。只用 ES2017（要兼容安卓 8.1 的 Chrome 61）。
//
// ==================== 什么时候用这个画风 ====================
// “机制类”的集：讲神经递质、受体、分子、药物怎么起作用的（例如睡意从哪来、抗抑郁药、胰岛素受体……）。
// 画面参考精神药理学教科书（Stahl）那种示意图：干净的白底、有光泽的彩色分子和受体、细描边、
// 细引线标注、角落里的图例。讲器官、生活方式、疾病过程的集仍然用卡通绘本风（engine.js 的 outline/face）。
// 用这个画风的集：meta 里写 "look": "textbook"（引擎会把胶囊、片头、竖版视频外框换成配套样式），
// index.html 在 engine.js 之后多加载一行 textbook.js。
//
// ==================== 配色原则 ====================
// - 背景：近白到浅冷灰的竖向渐变（K.bg0 → K.bg1），不要圆点、不要粉色。
// - 文字和线条：深蓝灰 K.ink；次要文字 K.soft；标注引线 K.leader。描边都要细（约图标半径的 1/10）。
// - 每种分子一个固定颜色，用 [亮, 中, 深] 三个色阶：亮色做高光、中色做主体、深色做描边。
//   它的受体用同一色系、更浅（受体是“插座”，分子是“插头”）。
// - 红色 K.red 只留给“抑制 / 被阻断”（⊖、⊘、⊣）；橙黄闪电 = 兴奋 / 放电。
// - 不画卡通脸、不加粗深紫描边；靠光泽渐变（glossy）体现立体感。
//
// ==================== 图标词典（全系列统一，同一种分子必须用同一个图标）====================
//   key    名字      形状           颜色
//   aden   腺苷      六边形         紫  #8f6ee0
//   caff   咖啡因    六边形 + 堵头  棕  #bf7433   （腺苷受体的阻断剂：和腺苷同形，顶上多一条堵头）
//   gaba   GABA      圆球           蓝  #3f7ddb
//   orx    食欲素    菱形           绿  #2fa465
//   mel    褪黑素    圆角方块       金  #e2a318
//   his    组胺      三角形         橙  #ee7a36
// 受体（嵌在细胞膜里、顶上有和分子同形的槽口）：
//   aden 腺苷受体（浅紫）、gaba GABA 受体（浅蓝）、orx 食欲素受体（浅绿）、mel 褪黑素受体（浅金）、his 组胺受体（浅橙）
// 可用但还没分配给分子的形状：pentagon 五边形、star 五角星、capsule 胶囊（药物常用）、Y（抗体 / 胰岛素受体一类）。
// 新分子：在下面的 MOLECULES 表里加一行 { shape, color: [亮, 中, 深] 或一个中色, label }，
// 或者在集里调用 Anima.textbook.register("key", { shape: "pentagon", color: "#d0457a", label: "血清素" })。
// 登记之后请把它补进上面这张词典，后面的集就照着用。
// 阻断剂 / 拮抗剂：和它所阻断的天然分子用同一个形状，再加 plug: true（顶上一条比槽口宽的堵头）。
//
// ==================== 用法 ====================
//   const T = Anima.textbook({ W: () => W, H: () => H, time: () => time });
//   const { ctx, K, rgba, glossy, txt, mol, receptor, tag, legend, legendLayout } = T;
//   T.background(); T.mol("aden", x, y, T.IR(), 1); T.receptor("aden", x, yMem, r, mt, glow, 0, ["aden", 1]);
// 主要函数（尺寸都按 H 算，文字字号按 W 算，并乘以 Anima.UI）：
//   基础：rgba(hex,a)  shade(hex,to,t)  glossy(x,y,r,c0,c1)  font(fs,w)  txt(t,x,y,fs,col,align,w)
//         smoothPath(pts,closed)  sample(pts,N)  along(sp,t)  ease(t)  LF() SF() IR()  topY()  nar()  panel(r,rad)
//   背景：background()
//   分子：mol(type,x,y,r,a,rot)  shapePath(shape,x,y,r)
//   受体：receptor(type,x,y,r,mt,glow,rot,occ) → 槽口位置 {x,y}；receptorLocal(type,r,mt,glow)
//   符号：minusSign(x,y,r,a) 抑制 ⊖；noSign(x,y,r,a) 禁止 ⊘；bolt(x,y,s,a) 兴奋闪电
//   箭头：arrow(pts,col,w,a,kind)  kind = "go" 兴奋箭头 / "stop" 红色 ⊣ / null 只有线；返回采样后的路径
//   流动：flow(sp,col,n,r,a,speed) 沿路径流动的小白点
//   结构：bilayer(x0,x1,y,mt) 细胞膜；neuron(x,y,s,col,act) 神经元；presynaptic({...}) 突触前末梢；
//         spikes(x0,x1,y,amp,act) 放电记录；brainBox(r) + brain(b) 矢状面大脑（返回各结构位置）
//   标注：tag(key,on,tx,ty,bx,by,text,col) 细引线 + 白底圆角小框（淡入淡出、自动避开顶部胶囊）
//   图例：legendLayout(items) → Lg（Lg.h 是占用高度）；legend(Lg)。
//         items：[["mol","aden","腺苷"], ["rec","aden","腺苷受体"], ["minus","","抑制"], ["no","","被占住"],
//                 ["bolt","","兴奋"], ["line",col,"…"], ["dash",col,"…"], ["band",col,"…"]]
//         宽屏在右下角一个小框，窄屏在底部一条（Lg.h 要从画面可用高度里扣掉）。
(() => {
  const TAU = Math.PI * 2;

  // ---------- 颜色 ----------
  const toRGB = (hex) => { const n = parseInt(hex.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  const rgba = (hex, a) => { const c = toRGB(hex); return `rgba(${c[0]},${c[1]},${c[2]},${a})`; };
  // 两个 #rrggbb 之间取色，结果仍是 #rrggbb（可以继续传给 rgba）
  const shade = (hex, to, t) => {
    const a = toRGB(hex), b = toRGB(to);
    return "#" + a.map((v, i) => Math.round(v + (b[i] - v) * t).toString(16)).map((s) => (s.length < 2 ? "0" + s : s)).join("");
  };
  // 一个中色 → [亮, 中, 深]
  const tones = (c) => (Array.isArray(c) ? c : [shade(c, "#ffffff", 0.62), c, shade(c, "#000000", 0.4)]);

  // 通用配色
  const K = {
    ink: "#2f3a55", soft: "#6c7893", faint: "#c9d2e3", leader: "#7d89a6",
    bg0: "#fbfcfe", bg1: "#eef2f8",
    line: "#8f9ab3", card: "#d6dde9",
    pre: ["#fff6e8", "#f7dfbe", "#c99a62"],          // 突触前末梢
    memHead: "#f1cf9f", memEdge: "#cf9f62", memTail: "#fbefdc",
    postOn: "#fde6cf", postOff: "#e1e6f1",
    red: "#e0443e", fire: "#f29a1f", light: "#ffc83a", blue: "#3d9df2",
  };

  // ---------- 形状：path 在原点画出分子轮廓；notch 在受体顶边画出同形的槽口（从左到右、向 +y 凹） ----------
  const poly = (pts) => (ctx, r) => { pts.forEach((p, k) => { if (k) ctx.lineTo(p[0] * r, p[1] * r); else ctx.moveTo(p[0] * r, p[1] * r); }); ctx.closePath(); };
  const ngon = (n, rad, a0) => { const o = []; for (let k = 0; k < n; k++) { const a = a0 + k * TAU / n; o.push([Math.cos(a) * rad, Math.sin(a) * rad]); } return o; };
  const starPts = (() => { const o = []; for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, rad = k % 2 ? 0.48 : 1.05; o.push([Math.cos(a) * rad, Math.sin(a) * rad]); } return o; })();
  const Y_PTS = [[-0.2, 1], [0.2, 1], [0.2, 0.1], [0.85, -0.6], [0.55, -0.92], [0, -0.28], [-0.55, -0.92], [-0.85, -0.6], [-0.2, 0.1]];
  // 多边形在 y ≥ 0 的那一半（从左交点经底部到右交点），拿来做通用槽口
  function lowerHalf(pts) {
    const n = pts.length, cr = [];
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      if ((a[1] < 0) !== (b[1] < 0)) { const t = -a[1] / (b[1] - a[1]); cr.push({ i, x: a[0] + (b[0] - a[0]) * t, down: b[1] >= 0 }); }
    }
    const s = cr.find((c) => c.down), e = cr.find((c) => !c.down);
    if (!s || !e) return [[-1, 0], [1, 0]];
    const out = [[s.x, 0]];
    for (let k = s.i + 1; ; k++) { const idx = k % n; out.push(pts[idx]); if (idx === e.i) break; }
    out.push([e.x, 0]);
    if (out[0][0] > out[out.length - 1][0]) out.reverse();
    return out;
  }
  const polyNotch = (pts, k) => { const h = lowerHalf(pts); return (ctx, r) => h.forEach((p) => ctx.lineTo(p[0] * r * k, p[1] * r * k)); };
  const HEX = ngon(6, 1, 0), TRI = [[0, -1], [0.95, 0.72], [-0.95, 0.72]], PENT = ngon(5, 0.98, -Math.PI / 2);

  const SHAPES = {
    hexagon: {
      path: poly(HEX),
      notch(ctx, r) { const s = r * 1.08; ctx.lineTo(-s, 0); ctx.lineTo(-s / 2, s * 0.87); ctx.lineTo(s / 2, s * 0.87); ctx.lineTo(s, 0); },
    },
    circle: {
      path(ctx, r) { ctx.arc(0, 0, r * 0.9, 0, TAU); },
      notch(ctx, r) { const s = r * 0.98; ctx.lineTo(-s, 0); ctx.arc(0, 0, s, Math.PI, 0, true); },
    },
    diamond: {
      path: poly([[0, -1.05], [0.85, 0], [0, 1.05], [-0.85, 0]]),
      notch(ctx, r) { const s = r; ctx.lineTo(-s * 0.95, 0); ctx.lineTo(0, s * 1.16); ctx.lineTo(s * 0.95, 0); },
    },
    roundSquare: {
      path(ctx, r) { ctx.roundRect(-r * 0.8, -r * 0.8, r * 1.6, r * 1.6, r * 0.28); },
      notch(ctx, r) { const s = r * 0.9; ctx.lineTo(-s, 0); ctx.lineTo(-s, s * 0.95); ctx.lineTo(s, s * 0.95); ctx.lineTo(s, 0); },
    },
    triangle: { path: poly(TRI), notch: polyNotch(TRI, 1.08) },
    pentagon: { path: poly(PENT), notch: polyNotch(PENT, 1.08) },
    star: { path: poly(starPts), notch: polyNotch(starPts, 1.1) },
    capsule: {
      path(ctx, r) { ctx.roundRect(-r * 1.05, -r * 0.55, r * 2.1, r * 1.1, r * 0.55); },
      notch(ctx, r) {
        const a = r * 1.12, R = r * 0.6;
        ctx.lineTo(-a, 0); ctx.arc(-a + R, 0, R, Math.PI, Math.PI / 2, true);
        ctx.lineTo(a - R, R); ctx.arc(a - R, 0, R, Math.PI / 2, 0, true);
      },
    },
    Y: { path: poly(Y_PTS), notch: polyNotch(Y_PTS, 1.12) },
  };
  function registerShape(name, def) { SHAPES[name] = def; }

  // ---------- 图标词典：分子 ----------
  // shape：上面 SHAPES 里的名字；color：[亮, 中, 深]；plug：阻断剂的堵头
  const MOLECULES = {
    aden: { shape: "hexagon", color: ["#d9c9ff", "#8f6ee0", "#5b3fa6"], label: "腺苷" },
    caff: { shape: "hexagon", color: ["#f2c08e", "#bf7433", "#7a4418"], label: "咖啡因", plug: true, blocks: "aden" },
    gaba: { shape: "circle", color: ["#bcd4ff", "#3f7ddb", "#1f4d9e"], label: "GABA" },
    orx: { shape: "diamond", color: ["#b6ecc8", "#2fa465", "#1a6e41"], label: "食欲素" },
    mel: { shape: "roundSquare", color: ["#ffe7a3", "#e2a318", "#9a6a06"], label: "褪黑素" },
    his: { shape: "triangle", color: ["#ffcaa8", "#ee7a36", "#a9481a"], label: "组胺" },
  };
  // 受体：和天然分子同一个 key；没登记的会用分子的形状和更浅的颜色自动生成
  const RECEPTORS = {
    aden: { color: ["#efe8ff", "#b9a3ee", "#6f55b8"], label: "腺苷受体" },
    gaba: { color: ["#e3edff", "#8fb0ea", "#3d64ad"], label: "GABA受体" },
    orx: { color: ["#dff6e7", "#86cfa1", "#2d8052"], label: "食欲素受体" },
    mel: { color: ["#fff4d4", "#ecc863", "#a17a14"], label: "褪黑素受体" },
    his: { color: ["#fff0e5", "#f5ad84", "#b0582a"], label: "组胺受体" },
  };
  // 登记新分子（可带 receptor: { color, label }）
  function register(key, def) {
    MOLECULES[key] = { shape: def.shape || "circle", color: tones(def.color || "#8f9ab3"), label: def.label || key, plug: !!def.plug, blocks: def.blocks };
    if (def.receptor) RECEPTORS[key] = { color: tones(def.receptor.color || MOLECULES[key].color[1]), label: def.receptor.label || (MOLECULES[key].label + "受体"), shape: def.receptor.shape };
    return MOLECULES[key];
  }
  const molDef = (type) => MOLECULES[type] || { shape: "circle", color: tones("#8f9ab3"), label: type };
  // 阻断剂落在它所阻断的那个受体上
  function recDef(type) {
    const m = molDef(type), key = RECEPTORS[type] ? type : (m.blocks || type), rd = RECEPTORS[key];
    const nm = molDef(key);
    if (rd) return { shape: rd.shape || nm.shape, color: rd.color, label: rd.label };
    const c = nm.color;
    return { shape: nm.shape, color: [shade(c[0], "#ffffff", 0.55), shade(c[1], "#ffffff", 0.45), shade(c[2], "#ffffff", 0.1)], label: nm.label + "受体" };
  }

  // ======================= 工具包 =======================
  function textbook(env) {
    const A = window.Anima;
    const ctx = A.ctx, clamp = A.clamp, mix = A.mix, SANS = A.SANS;
    const W = env.W, H = env.H, time = env.time;

    const nar = () => W() / H() < 1.5;
    const UI = () => A.UI;
    const LF = () => Math.max(10.5, W() / 72) * UI();      // 标注字号
    const SF = () => LF() * 0.86;                           // 图中小字
    const IR = () => clamp(H() * 0.036, 9.5, 24);           // 分子图标半径
    const topY = () => 12 + Math.max(12, W() / 60) * UI() * 1.4 + 14 + 8; // 顶部胶囊下方
    const ease = (t) => t * t * (3 - 2 * t);
    function glossy(x, y, r, c0, c1) {
      const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.08, x, y, r * 1.2);
      g.addColorStop(0, c0); g.addColorStop(1, c1); return g;
    }
    function font(fs, w) { ctx.font = `${w || 500} ${fs}px ${SANS}`; }
    function txt(t, x, y, fs, col, align, w) {
      font(fs, w); ctx.fillStyle = col || K.ink; ctx.textAlign = align || "center"; ctx.textBaseline = "middle";
      ctx.fillText(t, x, y); ctx.textAlign = "left";
    }
    // 白底圆角卡片
    function panel(r, rad) {
      ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(r.x, r.y, r.w, r.h, rad || 8); ctx.fill();
      ctx.strokeStyle = K.card; ctx.lineWidth = 1; ctx.stroke();
    }
    // 经过各点中点的平滑曲线
    function smoothPath(pts, closed) {
      const n = pts.length, m = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      ctx.beginPath();
      if (closed) {
        const s = m(pts[n - 1], pts[0]); ctx.moveTo(s[0], s[1]);
        for (let i = 0; i < n; i++) { const q = m(pts[i], pts[(i + 1) % n]); ctx.quadraticCurveTo(pts[i][0], pts[i][1], q[0], q[1]); }
        ctx.closePath();
      } else {
        ctx.moveTo(pts[0][0], pts[0][1]);
        for (let i = 1; i < n - 1; i++) { const q = m(pts[i], pts[i + 1]); ctx.quadraticCurveTo(pts[i][0], pts[i][1], q[0], q[1]); }
        ctx.lineTo(pts[n - 1][0], pts[n - 1][1]);
      }
    }
    // 把平滑曲线采样成折线，给沿路走的小分子用
    function sample(pts, N) {
      const out = [], m = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      const segs = [];
      let p0 = pts[0];
      for (let i = 1; i < pts.length - 1; i++) { const q = m(pts[i], pts[i + 1]); segs.push([p0, pts[i], i === pts.length - 2 ? pts[pts.length - 1] : q]); p0 = q; }
      if (pts.length === 2) segs.push([pts[0], m(pts[0], pts[1]), pts[1]]);
      const per = Math.max(2, Math.round(N / segs.length));
      segs.forEach((s, k) => {
        for (let j = k ? 1 : 0; j <= per; j++) {
          const t = j / per, a = (1 - t) * (1 - t), b = 2 * t * (1 - t), c = t * t;
          out.push([a * s[0][0] + b * s[1][0] + c * s[2][0], a * s[0][1] + b * s[1][1] + c * s[2][1]]);
        }
      });
      return out;
    }
    // 路径上 t（0～1）处的 [x, y, 方向角]
    function along(sp, t) {
      const f = clamp(t, 0, 1) * (sp.length - 1), i = Math.min(sp.length - 2, Math.floor(f)), u = f - i;
      return [sp[i][0] + (sp[i + 1][0] - sp[i][0]) * u, sp[i][1] + (sp[i + 1][1] - sp[i][1]) * u, Math.atan2(sp[i + 1][1] - sp[i][1], sp[i + 1][0] - sp[i][0])];
    }

    // ---------- 背景 ----------
    function background() {
      const g = ctx.createLinearGradient(0, 0, 0, H());
      g.addColorStop(0, K.bg0); g.addColorStop(1, K.bg1);
      ctx.fillStyle = g; ctx.fillRect(0, 0, W(), H());
    }

    // ---------- 分子图标 ----------
    function shapePath(shape, x, y, r) {
      const sh = SHAPES[shape] || SHAPES.circle;
      ctx.save(); ctx.translate(x, y); sh.path(ctx, r); ctx.restore();
    }
    // type：MOLECULES 里的 key；a：透明度；rot：旋转
    function mol(type, x, y, r, a, rot) {
      if (a <= 0.01) return;
      const m = molDef(type), c = m.color;
      ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); if (rot) ctx.rotate(rot);
      ctx.lineWidth = Math.max(1, r * 0.1); ctx.strokeStyle = c[2]; ctx.lineJoin = "round";
      ctx.beginPath();
      (SHAPES[m.shape] || SHAPES.circle).path(ctx, r);
      ctx.fillStyle = glossy(0, 0, r, c[0], c[1]); ctx.fill(); ctx.stroke();
      if (m.shape === "capsule") { // 胶囊：中缝
        ctx.strokeStyle = rgba(c[2], 0.45); ctx.beginPath(); ctx.moveTo(0, -r * 0.55); ctx.lineTo(0, r * 0.55); ctx.stroke();
      }
      if (m.plug) { // 堵头：比槽口宽，插进去就把口子封住
        ctx.strokeStyle = c[2];
        ctx.beginPath(); ctx.roundRect(-r * 1.32, -r * 1.2, r * 2.64, r * 0.55, r * 0.25);
        ctx.fillStyle = glossy(0, -r * 0.95, r * 1.3, c[1], c[2]); ctx.fill(); ctx.stroke();
      }
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.beginPath(); ctx.ellipse(-r * 0.28, m.plug ? r * 0.1 : -r * 0.3, r * 0.26, r * 0.14, -0.5, 0, TAU); ctx.fill();
      ctx.restore();
    }

    // ---------- 受体：嵌在膜里的彩色蛋白，顶上有和分子形状对应的槽口 ----------
    // 在局部坐标里画：膜中线在 y=0，槽口朝上（-y）。返回槽口位置的局部 y
    function receptorLocal(type, r, mt, glow) {
      const d = recDef(type), c = d.color;
      const yt = -mt / 2 - r * 1.3, yb = mt / 2 + r * 0.55, bw = r * 3.1, cr = r * 0.6;
      if (glow > 0.01) {
        const g = ctx.createRadialGradient(0, yt + r * 0.3, 0, 0, yt + r * 0.3, r * 3.2);
        g.addColorStop(0, rgba(c[1], 0.55 * glow)); g.addColorStop(1, rgba(c[1], 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, yt + r * 0.3, r * 3.2, 0, TAU); ctx.fill();
      }
      const L = -bw / 2, R = bw / 2;
      ctx.beginPath(); ctx.moveTo(L + cr, yt);
      // 槽口：平移到顶边再描
      ctx.translate(0, yt); (SHAPES[d.shape] || SHAPES.circle).notch(ctx, r); ctx.translate(0, -yt);
      ctx.lineTo(R - cr, yt); ctx.arcTo(R, yt, R, yt + cr, cr);
      ctx.lineTo(R, yb - cr); ctx.arcTo(R, yb, R - cr, yb, cr);
      ctx.lineTo(L + cr, yb); ctx.arcTo(L, yb, L, yb - cr, cr);
      ctx.lineTo(L, yt + cr); ctx.arcTo(L, yt, L + cr, yt, cr);
      ctx.closePath();
      const g = ctx.createLinearGradient(L, 0, R, 0);
      const hi = glow > 0.01 ? mix(c[0], "#ffffff", glow * 0.6) : c[0];
      g.addColorStop(0, c[1]); g.addColorStop(0.38, hi); g.addColorStop(1, c[1]);
      ctx.fillStyle = g; ctx.fill();
      ctx.strokeStyle = c[2]; ctx.lineWidth = Math.max(1, r * 0.09); ctx.lineJoin = "round"; ctx.stroke();
      // 跨膜螺旋的暗纹
      ctx.strokeStyle = rgba(c[2], 0.22); ctx.lineWidth = Math.max(1, r * 0.12); ctx.lineCap = "round";
      ctx.beginPath();
      for (const dx of [-0.3, 0.3]) { ctx.moveTo(dx * bw, yt + r * 1.25); ctx.lineTo(dx * bw, yb - r * 0.3); }
      ctx.stroke();
      return yt;
    }
    // 在世界坐标 (x,y) 画受体（y 是膜中线），rot 为朝向（0 = 槽口朝上）。occ: [分子类型, 结合程度 0～1]
    // 返回槽口（结合位点）的世界坐标
    function receptor(type, x, y, r, mt, glow, rot, occ) {
      ctx.save(); ctx.translate(x, y); if (rot) ctx.rotate(rot);
      const yt = receptorLocal(type, r, mt, glow);
      if (occ && occ[1] > 0.01) mol(occ[0], 0, yt - (1 - occ[1]) * r * 2.2, r, Math.min(1, occ[1] * 1.5));
      ctx.restore();
      const c = Math.cos(rot || 0), s = Math.sin(rot || 0);
      return { x: x - yt * s, y: y + yt * c };
    }

    // ---------- 抑制 ⊖、禁止 ⊘、兴奋闪电 ----------
    function minusSign(x, y, r, a) {
      if (a < 0.02) return;
      ctx.save(); ctx.globalAlpha *= a;
      ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill();
      ctx.strokeStyle = K.red; ctx.lineWidth = Math.max(1.4, r * 0.2); ctx.stroke();
      ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(x - r * 0.5, y); ctx.lineTo(x + r * 0.5, y); ctx.stroke();
      ctx.restore();
    }
    function noSign(x, y, r, a) {
      if (a < 0.02) return;
      ctx.save(); ctx.globalAlpha *= a;
      ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.fill();
      ctx.strokeStyle = K.red; ctx.lineWidth = Math.max(1.4, r * 0.22); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - r * 0.7, y + r * 0.7); ctx.lineTo(x + r * 0.7, y - r * 0.7); ctx.stroke();
      ctx.restore();
    }
    function bolt(x, y, s, a) {
      if (a < 0.02) return;
      ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(-s * 0.15, -s); ctx.lineTo(s * 0.5, -s * 0.1); ctx.lineTo(s * 0.05, -s * 0.02);
      ctx.lineTo(s * 0.25, s); ctx.lineTo(-s * 0.5, s * 0.05); ctx.lineTo(-s * 0.05, -s * 0.02); ctx.closePath();
      ctx.fillStyle = glossy(0, 0, s, "#ffe38a", K.fire); ctx.fill();
      ctx.strokeStyle = "#b86a00"; ctx.lineWidth = Math.max(1, s * 0.08); ctx.lineJoin = "round"; ctx.stroke();
      ctx.restore();
    }

    // ---------- 粗圆头彩色箭头 ----------
    // kind: "go" 箭头（兴奋 / 促进）；"stop" 红色 ⊣（抑制）；其他只画线。返回采样后的路径（给 flow / along 用）
    function arrow(pts, col, w, a, kind) {
      if (a < 0.02) return null;
      const sp = sample(pts, 40), n = sp.length;
      const e = sp[n - 1], ang = Math.atan2(e[1] - sp[n - 3][1], e[0] - sp[n - 3][0]);
      ctx.save(); ctx.globalAlpha *= a;
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      const cut = kind === "go" ? w * 1.4 : 0;
      ctx.beginPath(); ctx.moveTo(sp[0][0], sp[0][1]);
      for (let i = 1; i < n; i++) ctx.lineTo(sp[i][0] - (i === n - 1 ? Math.cos(ang) * cut : 0), sp[i][1] - (i === n - 1 ? Math.sin(ang) * cut : 0));
      ctx.strokeStyle = rgba(col, 0.85); ctx.lineWidth = w; ctx.stroke();
      ctx.translate(e[0], e[1]); ctx.rotate(ang);
      if (kind === "go") {
        ctx.beginPath(); ctx.moveTo(w * 0.6, 0); ctx.lineTo(-w * 1.6, -w * 1.25); ctx.lineTo(-w * 1.6, w * 1.25); ctx.closePath();
        ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = w * 0.5; ctx.fill(); ctx.stroke();
      } else if (kind === "stop") {
        ctx.strokeStyle = K.red; ctx.lineWidth = w * 0.9;
        ctx.beginPath(); ctx.moveTo(0, -w * 1.5); ctx.lineTo(0, w * 1.5); ctx.stroke();
      }
      ctx.restore();
      return sp;
    }
    // 沿路径流动的信号点
    function flow(sp, col, n, r, a, speed) {
      if (!sp || a < 0.02) return;
      for (let i = 0; i < n; i++) {
        const t = (time() * (speed || 0.3) + i / n) % 1, p = along(sp, t);
        ctx.save(); ctx.globalAlpha *= a * Math.sin(t * Math.PI);
        ctx.beginPath(); ctx.arc(p[0], p[1], r, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill();
        ctx.strokeStyle = col; ctx.lineWidth = Math.max(1, r * 0.5); ctx.stroke();
        ctx.restore();
      }
    }

    // ---------- 细胞膜（磷脂双分子层），y 是膜中线，mt 是膜厚 ----------
    function bilayer(x0, x1, y, mt) {
      ctx.fillStyle = K.memTail; ctx.fillRect(x0, y - mt / 2, x1 - x0, mt);
      const hr = mt * 0.2, step = hr * 2.15;
      ctx.fillStyle = K.memHead; ctx.strokeStyle = K.memEdge; ctx.lineWidth = Math.max(0.6, hr * 0.25);
      for (const yy of [y - mt / 2 + hr, y + mt / 2 - hr]) {
        ctx.beginPath();
        for (let x = x0 + hr; x < x1; x += step) { ctx.moveTo(x + hr, yy); ctx.arc(x, yy, hr, 0, TAU); }
        ctx.fill(); ctx.stroke();
      }
    }

    // ---------- 突触 ----------
    // 突触前末梢（从上方伸下来的膨大，内有线粒体和装着递质的囊泡）
    // o: { cx, top, by, brx, bry, aw, mt, ir, dot }  top 轴突上端，by/brx/bry 膨大中心和半径，aw 轴突半宽，dot 囊泡里小点的颜色
    function presynaptic(o) {
      const cx = o.cx, by = o.by, brx = o.brx, bry = o.bry, aw = o.aw, mt = o.mt, ir = o.ir, tm = time();
      ctx.beginPath();
      ctx.moveTo(cx - aw, o.top); ctx.lineTo(cx - aw, by - bry * 0.85);
      ctx.bezierCurveTo(cx - brx * 0.9, by - bry * 0.9, cx - brx * 1.05, by + bry * 0.2, cx - brx * 0.7, by + bry * 0.75);
      ctx.bezierCurveTo(cx - brx * 0.4, by + bry * 1.08, cx + brx * 0.4, by + bry * 1.08, cx + brx * 0.7, by + bry * 0.75);
      ctx.bezierCurveTo(cx + brx * 1.05, by + bry * 0.2, cx + brx * 0.9, by - bry * 0.9, cx + aw, by - bry * 0.85);
      ctx.lineTo(cx + aw, o.top);
      ctx.fillStyle = glossy(cx - brx * 0.2, by - bry * 0.1, brx * 1.1, K.pre[0], K.pre[1]); ctx.fill();
      ctx.strokeStyle = K.memHead; ctx.lineWidth = mt * 0.7; ctx.stroke();
      ctx.strokeStyle = K.memEdge; ctx.lineWidth = Math.max(1, mt * 0.12); ctx.stroke();
      // 线粒体
      ctx.save(); ctx.translate(cx + brx * 0.45, by - bry * 0.35); ctx.rotate(-0.5);
      ctx.beginPath(); ctx.ellipse(0, 0, brx * 0.2, bry * 0.16, 0, 0, TAU);
      ctx.fillStyle = glossy(0, 0, brx * 0.2, "#ffd9cf", "#f0a898"); ctx.fill(); ctx.strokeStyle = "#c46f60"; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath();
      for (let k = -2; k <= 2; k++) { ctx.moveTo(k * brx * 0.065, -bry * 0.1); ctx.lineTo(k * brx * 0.065 + brx * 0.02, bry * 0.1); }
      ctx.stroke(); ctx.restore();
      // 囊泡
      const VES = [[-0.5, 0.05], [-0.18, -0.25], [0.12, 0.2], [-0.3, 0.45], [0.35, 0.4], [0.02, -0.55]];
      VES.forEach((v, k) => {
        const vx = cx + v[0] * brx + Math.sin(tm * 0.9 + k) * 1.2, vy = by + v[1] * bry + Math.cos(tm * 0.8 + k) * 1.2, vr = ir * 0.95;
        ctx.beginPath(); ctx.arc(vx, vy, vr, 0, TAU); ctx.fillStyle = "rgba(255,255,255,0.75)"; ctx.fill();
        ctx.strokeStyle = K.memEdge; ctx.lineWidth = Math.max(1, vr * 0.16); ctx.stroke();
        ctx.fillStyle = o.dot || K.pre[2];
        for (let j = 0; j < 3; j++) { ctx.beginPath(); ctx.arc(vx + Math.cos(j * 2.1 + k) * vr * 0.42, vy + Math.sin(j * 2.1 + k) * vr * 0.42, vr * 0.16, 0, TAU); ctx.fill(); }
      });
    }
    // 突触后细胞：act 1 = 兴奋（暖色），0 = 安静（冷灰）
    function postsynaptic(x, y, w, h, act) {
      const g = ctx.createLinearGradient(0, y, 0, y + h);
      g.addColorStop(0, mix(K.postOff, K.postOn, act)); g.addColorStop(1, mix(K.postOff, "#fff4e8", act));
      ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
    }
    // 放电记录：act 越高尖峰越密，返回颜色
    function spikes(x0, x1, ty, amp, act) {
      const tm = time();
      ctx.strokeStyle = mix("#8f9ab3", K.fire, act); ctx.lineWidth = Math.max(1.2, H() * 0.004); ctx.lineJoin = "round";
      ctx.beginPath();
      for (let x = x0; x <= x1; x += 1.5) {
        const u = (x - x0) / (x1 - x0) * 10 - tm * 1.1, k = Math.floor(u), f = u - k;
        const on = A.rnd(k * 7 + 3) < 0.25 + 0.75 * act;
        const y = ty - (on && f < 0.12 ? Math.sin(f / 0.12 * Math.PI) * amp : 0);
        if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // ---------- 神经元：长条胞体 + 树突 + 轴突 ----------
    // col：分子 key（用它的颜色）或 [亮, 中, 深]；act：0 安静（变灰）～ 1 活跃（带光晕）
    // 返回 at(phi)：胞体边缘上某角度的 [x, y, 外法线朝向]，给 receptor 当位置和 rot 用
    function neuron(x, y, s, col, act) {
      const c = Array.isArray(col) ? col : molDef(col).color, dim = 0.55 * (1 - act);
      const c0 = mix(c[0], "#eef0f5", dim), c1 = mix(c[1], "#b9c0cf", dim), c2 = mix(c[2], "#8e97aa", dim);
      const tm = time();
      if (act > 0.05) {
        const g = ctx.createRadialGradient(x, y, 0, x, y, s * 1.8);
        g.addColorStop(0, rgba(c[1], 0.38 * act)); g.addColorStop(1, rgba(c[1], 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, s * 1.8, 0, TAU); ctx.fill();
      }
      ctx.strokeStyle = c1; ctx.lineCap = "round";
      // 树突
      [-0.55, -0.05, 0.5].forEach((a0, k) => {
        const a = -Math.PI / 2 + a0 + Math.sin(tm * 0.7 + k + x * 0.01) * 0.04;
        const x1 = x + Math.cos(a) * s * 1.15, y1 = y + Math.sin(a) * s * 1.15 - s * 0.3;
        ctx.lineWidth = s * 0.17; ctx.beginPath(); ctx.moveTo(x + Math.cos(a) * s * 0.3, y - s * 0.7); ctx.lineTo(x1, y1); ctx.stroke();
        ctx.lineWidth = s * 0.08;
        for (const d of [-0.45, 0.45]) { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 + Math.cos(a + d) * s * 0.38, y1 + Math.sin(a + d) * s * 0.38); ctx.stroke(); }
      });
      // 轴突
      ctx.lineWidth = s * 0.13; ctx.beginPath(); ctx.moveTo(x, y + s * 0.9); ctx.lineTo(x, y + s * 1.55); ctx.stroke();
      // 胞体
      ctx.beginPath(); ctx.ellipse(x, y, s * 0.5, s, 0, 0, TAU);
      ctx.fillStyle = glossy(x, y, s, c0, c1); ctx.fill(); ctx.strokeStyle = c2; ctx.lineWidth = Math.max(1, s * 0.05); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x, y + s * 0.1, s * 0.22, s * 0.28, 0, 0, TAU); ctx.fillStyle = "rgba(0,0,0,0.35)"; ctx.fill(); // 细胞核（样片认可的深色）
      ctx.beginPath(); ctx.arc(x + s * 0.04, y + s * 0.06, s * 0.07, 0, TAU); ctx.fillStyle = "rgba(0,0,0,0.6)"; ctx.fill();
      return { x, y, s, at: (phi) => {
        const px = x + Math.cos(phi) * s * 0.5, py = y + Math.sin(phi) * s;
        return [px, py, Math.atan2(Math.cos(phi) / 0.5, -Math.sin(phi))];
      } };
    }

    // ---------- 简化的矢状面大脑（面向左） ----------
    // brainBox(r)：在矩形 r 里按 1.25:1 居中；brain(b)：画出来并返回各结构位置
    function brainBox(r) {
      const asp = 1.25, bw = Math.min(r.w, r.h * asp), bh = bw / asp;
      return { x: r.x + (r.w - bw) / 2, y: r.y + (r.h - bh) / 2, w: bw, h: bh };
    }
    function brain(b) {
      const P = (u, v) => [b.x + u * b.w, b.y + v * b.h];
      const lw = Math.max(1, b.h * 0.004);
      // 脑干
      smoothPath([[0.49, 0.6], [0.6, 0.6], [0.655, 0.74], [0.66, 0.99], [0.575, 1.0], [0.555, 0.8], [0.5, 0.7]].map((p) => P(p[0], p[1])), true);
      ctx.fillStyle = glossy(P(0.58, 0.75)[0], P(0.58, 0.75)[1], b.h * 0.2, "#f3f0f7", "#dcd7e6"); ctx.fill();
      ctx.strokeStyle = "#a9a3bf"; ctx.lineWidth = lw; ctx.stroke();
      // 小脑
      const cb = P(0.8, 0.75);
      ctx.beginPath(); ctx.ellipse(cb[0], cb[1], b.w * 0.14, b.h * 0.115, -0.15, 0, TAU);
      ctx.fillStyle = glossy(cb[0], cb[1], b.w * 0.14, "#f1ecf6", "#d9d0e6"); ctx.fill(); ctx.strokeStyle = "#a9a3bf"; ctx.stroke();
      ctx.strokeStyle = "#cbc1dc"; ctx.lineWidth = lw;
      for (let k = 1; k <= 3; k++) { ctx.beginPath(); ctx.ellipse(cb[0] + b.w * 0.02, cb[1], b.w * 0.14 * (1 - k * 0.22), b.h * 0.115 * (1 - k * 0.22), -0.15, -1.9, 1.9); ctx.stroke(); }
      // 大脑半球
      const OUT = [[0.14, 0.6], [0.085, 0.44], [0.12, 0.25], [0.24, 0.1], [0.42, 0.03], [0.62, 0.04], [0.8, 0.12], [0.93, 0.28], [0.975, 0.46], [0.92, 0.6], [0.78, 0.63], [0.63, 0.62], [0.53, 0.69], [0.41, 0.71], [0.3, 0.75], [0.21, 0.7]];
      smoothPath(OUT.map((p) => P(p[0], p[1])), true);
      const c0 = P(0.45, 0.3);
      ctx.fillStyle = glossy(c0[0], c0[1], b.w * 0.5, "#f7f8fc", "#e1e6f1"); ctx.fill();
      ctx.save(); ctx.clip();
      // 脑回：从边缘向内的沟
      ctx.strokeStyle = "#d3d9e8"; ctx.lineWidth = lw * 1.6; ctx.lineCap = "round";
      const cc = [0.53, 0.37];
      for (let k = 0; k < 13; k++) {
        const a = Math.PI * (0.98 + k * 0.085);
        const p1 = P(cc[0] + Math.cos(a) * 0.47, cc[1] + Math.sin(a) * 0.36), p2 = P(cc[0] + Math.cos(a + 0.05) * 0.33, cc[1] + Math.sin(a + 0.05) * 0.24);
        const pm = P(cc[0] + Math.cos(a - 0.06) * 0.4, cc[1] + Math.sin(a - 0.06) * 0.3);
        ctx.beginPath(); ctx.moveTo(p1[0], p1[1]); ctx.quadraticCurveTo(pm[0], pm[1], p2[0], p2[1]); ctx.stroke();
      }
      // 扣带沟
      ctx.beginPath(); const q0 = P(0.24, 0.42), q1 = P(0.5, 0.12), q2 = P(0.77, 0.4);
      ctx.moveTo(q0[0], q0[1]); ctx.quadraticCurveTo(q1[0], q1[1], q2[0], q2[1]); ctx.stroke();
      ctx.restore();
      smoothPath(OUT.map((p) => P(p[0], p[1])), true);
      ctx.strokeStyle = "#9eaacb"; ctx.lineWidth = lw * 1.3; ctx.stroke();
      // 胼胝体
      const a0 = P(0.3, 0.45), a1 = P(0.5, 0.22), a2 = P(0.72, 0.43);
      ctx.lineCap = "round";
      for (const [w, col] of [[b.h * 0.055, "#c5cde0"], [b.h * 0.042, "#eef1f8"]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(a0[0], a0[1]); ctx.quadraticCurveTo(a1[0], a1[1], a2[0], a2[1]); ctx.stroke();
      }
      // 丘脑
      const th = P(0.545, 0.5);
      ctx.beginPath(); ctx.ellipse(th[0], th[1], b.w * 0.075, b.h * 0.06, -0.1, 0, TAU);
      ctx.fillStyle = glossy(th[0], th[1], b.w * 0.075, "#f2eff8", "#dcd6ea"); ctx.fill(); ctx.strokeStyle = "#b8b1cd"; ctx.lineWidth = lw; ctx.stroke();
      // 下丘脑区域（淡色）
      const hy = P(0.42, 0.62);
      ctx.beginPath(); ctx.ellipse(hy[0], hy[1], b.w * 0.075, b.h * 0.05, 0.3, 0, TAU); ctx.fillStyle = "rgba(210,220,238,0.7)"; ctx.fill();
      // 眼睛 + 视神经
      const eye = P(0.075, 0.8), er = b.h * 0.055, ch = P(0.35, 0.675);
      ctx.strokeStyle = "#e3d6b5"; ctx.lineWidth = er * 0.38; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(eye[0] + er * 0.8, eye[1] - er * 0.1); ctx.quadraticCurveTo(P(0.22, 0.76)[0], P(0.22, 0.76)[1], ch[0], ch[1]); ctx.stroke();
      ctx.beginPath(); ctx.arc(eye[0], eye[1], er, 0, TAU); ctx.fillStyle = glossy(eye[0], eye[1], er, "#ffffff", "#e6ebf3"); ctx.fill();
      ctx.strokeStyle = "#9eaacb"; ctx.lineWidth = lw; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(eye[0] - er * 0.82, eye[1], er * 0.2, er * 0.5, 0, 0, TAU); ctx.fillStyle = glossy(eye[0] - er * 0.82, eye[1], er * 0.5, "#6d9ad6", "#2c4f86"); ctx.fill();
      return {
        P, eye, er, chiasm: ch, hypothalamus: hy, thal: th, cerebellum: cb,
        scn: P(0.375, 0.64), pineal: P(0.655, 0.53), brainstem: P(0.6, 0.82),
      };
    }

    // ---------- 标注：细引线 + 白底圆角小框 ----------
    // key 记住淡入淡出；(tx,ty) 指向的点；(bx,by) 小框中心（会被夹在画面内、顶部胶囊以下）；col 左侧色条
    const LA = {};
    function tag(key, on, tx, ty, bx, by, text, col) {
      const a = LA[key] = (LA[key] || 0) + ((on ? 1 : 0) - (LA[key] || 0)) * 0.08;
      if (a < 0.02) return;
      const fs = LF();
      font(fs, 500);
      const w = ctx.measureText(text).width + fs * 1.3, h = fs * 1.8;
      const x = clamp(bx - w / 2, 6, W() - w - 6), y = clamp(by - h / 2, topY(), H() - h - 6);
      const nx = clamp(tx, x + 6, x + w - 6), ny = clamp(ty, y, y + h);
      ctx.save(); ctx.globalAlpha *= a;
      ctx.strokeStyle = K.leader; ctx.lineWidth = Math.max(1, fs * 0.075); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(nx, ny); ctx.stroke();
      ctx.beginPath(); ctx.arc(tx, ty, Math.max(2.2, fs * 0.2), 0, TAU); ctx.fillStyle = K.ink; ctx.fill();
      ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.2; ctx.stroke();
      ctx.fillStyle = "rgba(40,55,90,0.10)"; ctx.beginPath(); ctx.roundRect(x + 1, y + 2, w, h, h * 0.28); ctx.fill();
      ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.roundRect(x, y, w, h, h * 0.28); ctx.fill();
      ctx.strokeStyle = "#cdd5e4"; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = col || K.soft; ctx.beginPath(); ctx.roundRect(x + fs * 0.35, y + h * 0.25, Math.max(2.5, fs * 0.18), h * 0.5, 2); ctx.fill();
      ctx.fillStyle = K.ink; ctx.textBaseline = "middle"; ctx.textAlign = "left";
      ctx.fillText(text, x + fs * 0.8, y + h / 2 + 0.5);
      ctx.restore();
    }

    // ---------- 图例 ----------
    function legendIcon(it, x, y, s) {
      const k = it[0];
      if (k === "mol") mol(it[1], x, y + (molDef(it[1]).plug ? s * 0.12 : 0), s * 0.42, 1);
      else if (k === "rec") { ctx.save(); ctx.translate(x, y + s * 0.2); ctx.scale(0.5, 0.5); receptorLocal(it[1], s * 0.62, s * 0.3, 0); ctx.restore(); }
      else if (k === "minus") minusSign(x, y, s * 0.36, 1);
      else if (k === "no") noSign(x, y, s * 0.36, 1);
      else if (k === "bolt") bolt(x, y, s * 0.4, 1);
      else if (k === "band") { ctx.fillStyle = it[1]; ctx.fillRect(x - s * 0.45, y - s * 0.3, s * 0.9, s * 0.6); }
      else {
        ctx.strokeStyle = it[1]; ctx.lineWidth = Math.max(2, s * 0.14); ctx.lineCap = "round";
        if (k === "dash") ctx.setLineDash([s * 0.18, s * 0.2]);
        ctx.beginPath(); ctx.moveTo(x - s * 0.45, y); ctx.lineTo(x + s * 0.45, y); ctx.stroke(); ctx.setLineDash([]);
      }
    }
    // 先算布局：返回的 h 是占用高度（窄屏在底部一条；宽屏在右下角一个小框，bw/bh 是框的大小）
    function legendLayout(items) {
      const fs = Math.max(10, W() / 84) * UI(), s = fs * 1.5;
      font(fs, 500);
      const ws = items.map((it) => s + fs * 0.35 + ctx.measureText(it[2]).width);
      if (nar()) {
        const gap = fs * 0.9, maxW = W() - 16, rows = [[]];
        let rw = 0;
        items.forEach((it, k) => { if (rw + ws[k] > maxW && rows[rows.length - 1].length) { rows.push([]); rw = 0; } rows[rows.length - 1].push(k); rw += ws[k] + gap; });
        return { items, fs, s, ws, rows, gap, h: rows.length * s * 1.1 + 6, w: W(), bw: 0, bh: 0 };
      }
      const bw = Math.max.apply(null, ws) + fs * 1.4, bh = items.length * s * 1.08 + fs * 2.2;
      return { items, fs, s, ws, bw, bh, h: bh, w: bw };
    }
    function legend(Lg, title) {
      const items = Lg.items, fs = Lg.fs, s = Lg.s, ws = Lg.ws, w = W(), h = H();
      const put = (it, x, y) => { legendIcon(it, x + s / 2, y, s); txt(it[2], x + s + fs * 0.35, y + 0.5, fs, K.ink, "left", 500); };
      if (nar()) {
        const y0 = h - Lg.h - 2;
        ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fillRect(0, y0 - 2, w, Lg.h + 4);
        ctx.strokeStyle = "#dde3ee"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, y0 - 2); ctx.lineTo(w, y0 - 2); ctx.stroke();
        Lg.rows.forEach((row, r) => {
          const tw = row.reduce((a, k) => a + ws[k], 0) + Lg.gap * (row.length - 1);
          let x = (w - tw) / 2; const y = y0 + s * 0.55 + r * s * 1.1 + 2;
          row.forEach((k) => { put(items[k], x, y); x += ws[k] + Lg.gap; });
        });
        return;
      }
      const x0 = w - Lg.bw - 12, y0 = h - Lg.bh - 12;
      ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.beginPath(); ctx.roundRect(x0, y0, Lg.bw, Lg.bh, 8); ctx.fill();
      ctx.strokeStyle = "#d3dae7"; ctx.lineWidth = 1; ctx.stroke();
      txt(title || "图例", x0 + fs * 0.7, y0 + fs * 0.95, fs * 0.9, K.soft, "left", 700);
      items.forEach((it, k) => put(it, x0 + fs * 0.6, y0 + fs * 1.9 + s * 0.5 + k * s * 1.08));
    }

    return {
      ctx, K, TAU, MOLECULES, RECEPTORS, SHAPES,
      rgba, shade, tones, glossy, font, txt, panel, smoothPath, sample, along, ease,
      LF, SF, IR, topY, nar,
      background, shapePath, mol, receptorLocal, receptor,
      minusSign, noSign, bolt, arrow, flow,
      bilayer, presynaptic, postsynaptic, spikes, neuron, brainBox, brain,
      tag, legendLayout, legend, legendIcon,
      register, molecule: molDef,
    };
  }

  textbook.K = K;
  textbook.MOLECULES = MOLECULES;
  textbook.RECEPTORS = RECEPTORS;
  textbook.SHAPES = SHAPES;
  textbook.register = register;
  textbook.registerShape = registerShape;
  textbook.rgba = rgba;
  textbook.shade = shade;
  window.Anima.textbook = textbook;
})();
