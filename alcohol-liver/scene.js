Anima.register("alcohol-liver", {
    "title": "酒精进了肝",
    "tag": "肝脏小剧场",
    "headline": "一喝酒就脸红，是【酒量好】吗？",
    "lede": "喝下去的酒，要靠肝脏这座加工厂一点点分解。走进肝细胞看一看：酒精怎样变成有毒的乙醛，为什么一喝就脸红不是酒量好，长期喝酒又怎样一步步伤肝。",
    "summary": "酒精在肝里怎样分解，一喝就脸红意味着什么，酒精性脂肪肝怎样走到肝硬化，以及怎样保护肝脏。",
    "footer": "长期饮酒或体检发现肝功能异常、脂肪肝，请到消化内科或肝病科就诊。",
    "canvasLabel": "卡通肝细胞加工厂分解酒精的动画",
    "disease": "酒精性肝病",
    "organs": ["liver"],
    "categories": ["digestive"],
    "color": "#c45c8e"
  }, () => {
  const CH = [
    { title: "酒精进了肝", alc: 1, ald: 0.3, lazy: 0, pile: 0, blood: 0, flush: 0, fat: 0.05, inflame: 0, fibro: 0, stage: 0, heal: 0,
      left: "ald", pill: ["酒精", "20 克", "warn"],
      text: "喝下去的酒，很快就被吸收进血液，其中绝大部分要靠肝脏来分解。肝细胞就像一座加工厂，第一道工序的工人叫乙醇脱氢酶，它把酒精变成一种叫乙醛的东西。喝得越多，工厂就越忙，酒精本身也会伤害肝细胞。",
      fact: "喝下去的酒精，九成以上要靠肝脏来分解",
      labels: ["alc", "adh", "ald"] },
    { title: "乙醛：脾气很冲的中间产物", alc: 1, ald: 0.3, lazy: 0, pile: 0, blood: 0, flush: 0, fat: 0.05, inflame: 0, fibro: 0, stage: 0, heal: 0,
      left: "ald", pill: ["酒精", "20 克", "warn"],
      text: "乙醛是个脾气很冲的中间产物。它有毒，会伤害肝细胞和遗传物质，也是明确的致癌物。好在第二道工序的工人乙醛脱氢酶，也叫 ALDH2，会尽快把乙醛变成没有毒的乙酸，乙酸最后变成水和二氧化碳，排出体外。",
      fact: "与饮酒相关的乙醛，被世界卫生组织列为一类致癌物",
      labels: ["toxic", "aldh2", "acetic"] },
    { title: "一喝就脸红，不是酒量好", alc: 1, ald: 1, lazy: 1, pile: 1, blood: 1, flush: 1, fat: 0.05, inflame: 0, fibro: 0, stage: 0, heal: 0,
      left: "ald", pill: ["酒精", "20 克", "warn"],
      text: "有的人一喝酒就脸红、心跳加快，往往是天生 ALDH2 活性低，第二道工序干不动，乙醛堆在肝里，又跑进血液，让血管扩张。这不是酒量好，反而说明身体处理乙醛更困难。这样的人长期喝酒，得食管癌等癌症的风险更高。",
      fact: "我国约三分之一的人携带 ALDH2 活性低的基因",
      labels: ["lazy", "pile", "flush"] },
    { title: "酒精性脂肪肝", alc: 1, ald: 0.5, lazy: 0, pile: 0, blood: 0.2, flush: 0, fat: 1, inflame: 0, fibro: 0, stage: 0, heal: 0,
      left: "fat", pill: ["饮酒", "长期大量", "bad"],
      text: "长期喝酒，肝脏把大部分力气都花在处理酒精上，脂肪的加工和运输被打乱，油就在肝细胞里越积越多，形成酒精性脂肪肝。这时大多数人没有什么感觉，常常是体检做 B 超才发现。这个阶段戒酒，肝脏可以明显好转。",
      fact: "饮酒超过 5 年，男性每天酒精≥40 克、女性≥20 克，要警惕酒精性肝病",
      labels: ["oil", "tired"] },
    { title: "越喝越伤：从肝炎到肝硬化", alc: 1, ald: 0.5, lazy: 0, pile: 0, blood: 0.2, flush: 0, fat: 0.7, inflame: 1, fibro: 1, stage: 1, heal: 0,
      left: "fat", pill: ["饮酒", "长期大量", "bad"],
      text: "如果继续喝，受伤的肝细胞会发炎，这就是酒精性肝炎，严重时会出现黄疸。炎症反复发生，肝里长出一道道疤痕纤维，把肝细胞分割成一个个小块，肝脏变硬、变小、表面坑坑洼洼，这就是肝硬化，还可能发展成肝癌。",
      fact: "长期大量饮酒的人，约一到二成会发展成肝硬化",
      labels: ["inflame", "scar"] },
    { title: "能做些什么", alc: 0, ald: 0, lazy: 0, pile: 0, blood: 0, flush: 0, fat: 0.12, inflame: 0, fibro: 0.35, stage: 0, heal: 1,
      left: "fat", pill: ["酒精", "0 克", "ok"],
      text: "对肝脏来说，最好是不喝酒，没有绝对安全的饮酒量。浓茶、解酒药都不能真正解酒，只能靠肝脏慢慢分解。戒酒后，脂肪肝可以明显好转，但肝硬化很难逆转，所以越早戒越好。一喝就脸红的人，更要远离酒精。",
      fact: "膳食指南：成人如饮酒，一天酒精不超过 15 克；孕妇、乳母、儿童不应饮酒",
      labels: ["nodrink", "fatgone", "scarstay"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    vessel: "#ffb3b3", lumen: "#fff4ec", cell: "#ffc4a3", cellScar: "#e9a88f", nucleus: "#f59a7c",
    alc: "#8fd0f5", ald: "#f25f6b", acid: "#9fdc8a", bubble: "#e6f6ff",
    belt: "#c9b6d6", beltDark: "#a58fb5", adh: "#ffd27a", aldh: "#8fd3e8", helmet: "#ffc94d",
    oil: "#fff0a0", oilEdge: "#e8c24a", scar: "#a9826f", skin: "#ffe0cc", flushRed: "#ff8a8a", heartPink: "#ff9fb0",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { alc: 1, ald: 0.3, lazy: 0, pile: 0, blood: 0, flush: 0, fat: 0.05, inflame: 0, fibro: 0, stage: 0, heal: 0 };
  const lerp = (a, b, t) => a + (b - a) * t;

  // ---------- 几何：上面是血管，下面是肝细胞加工厂，里面两条流水线 ----------
  const G = () => {
    const v0 = H * 0.13, v1 = H * 0.27;
    const c0 = H * 0.34, c1 = H * 0.965, cx0 = W * 0.03, cx1 = W * 0.97;
    const by = H * 0.73, bh = H * 0.045, ir = H * 0.03, ws = H * 0.072;
    return {
      v0, v1, vm: (v0 + v1) / 2, c0, c1, cx0, cx1, by, bh, ir, ws,
      xIn: W * 0.09, xA: W * 0.27, xB: W * 0.6, xOut: W * 0.87, xLeak: W * 0.47,
      nuc: { x: W * 0.8, y: H * 0.865 },
    };
  };

  // ---------- 流水线上的小分子 ----------
  const N = 9;
  function items(g) {
    const out = [];
    const n = Math.round(clamp(S.alc, 0, 1) * N);
    for (let i = 0; i < n; i++) {
      const s = (time * 0.065 + i / N) % 1;
      const leak = rnd(i + 50) < S.lazy * 0.6;
      let x, y, type, a = 1;
      if (s < 0.12) { x = g.xIn; y = lerp(g.vm, g.by - g.ir, s / 0.12); type = "alc"; }
      else if (s < 0.85) {
        x = lerp(g.xIn, g.xOut, (s - 0.12) / 0.73); y = g.by - g.ir;
        type = x < g.xA ? "alc" : x < g.xB ? "ald" : "acid";
        if (leak && x > g.xLeak) {
          // ALDH2 干不动：乙醛离开流水线，往上跑进血里
          const sl = 0.12 + 0.73 * (g.xLeak - g.xIn) / (g.xOut - g.xIn), t = (s - sl) / (1 - sl);
          x = g.xLeak + Math.sin(t * 12 + i) * g.ir * 0.6; y = lerp(g.by - g.ir, g.vm, clamp(t * 1.4, 0, 1));
          type = "ald"; a = t > 0.72 ? clamp((1 - t) / 0.28, 0, 1) : 1;
        }
      } else if (leak) {
        const sl = 0.12 + 0.73 * (g.xLeak - g.xIn) / (g.xOut - g.xIn), t = (s - sl) / (1 - sl);
        x = g.xLeak + Math.sin(t * 12 + i) * g.ir * 0.6; y = lerp(g.by - g.ir, g.vm, clamp(t * 1.4, 0, 1));
        type = "ald"; a = t > 0.72 ? clamp((1 - t) / 0.28, 0, 1) : 1;
      } else {
        const t = (s - 0.85) / 0.15;
        x = g.xOut + Math.sin(t * 8 + i) * g.ir * 0.5; y = lerp(g.by - g.ir, g.c0 + H * 0.04, t);
        type = i % 2 ? "h2o" : "co2"; a = 1 - t;
      }
      out.push({ i, x, y, type, a, leak });
    }
    return out;
  }

  function update() {}

  // ---------- 小图标 ----------
  function drop(x, y, r, color, mood) {
    ctx.beginPath();
    ctx.moveTo(x, y - r * 1.35);
    ctx.bezierCurveTo(x + r * 0.5, y - r * 0.7, x + r, y - r * 0.2, x + r, y + r * 0.2);
    ctx.arc(x, y + r * 0.2, r, 0, Math.PI);
    ctx.bezierCurveTo(x - r, y - r * 0.2, x - r * 0.5, y - r * 0.7, x, y - r * 1.35);
    ctx.fillStyle = color; ctx.fill(); outline(Math.max(1.2, r * 0.12)); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.beginPath(); ctx.ellipse(x - r * 0.45, y - r * 0.2, r * 0.14, r * 0.26, 0.4, 0, 6.3); ctx.fill();
    face(x + r * 0.08, y + r * 0.25, r * 0.62, mood, false);
  }
  function spiky(x, y, r) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(time * 5 + x * 0.1) * 0.15);
    ctx.beginPath();
    for (let k = 0; k < 18; k++) {
      const t = k * Math.PI / 9, rr = k % 2 ? r * 0.8 : r * 1.18;
      ctx[k ? "lineTo" : "moveTo"](Math.cos(t) * rr, Math.sin(t) * rr);
    }
    ctx.closePath(); ctx.fillStyle = C.ald; ctx.fill(); outline(Math.max(1.2, r * 0.1)); ctx.stroke();
    // 皱着眉的凶脸
    ctx.fillStyle = C.ink;
    ctx.beginPath(); ctx.arc(-r * 0.28, -r * 0.02, r * 0.09, 0, 6.3); ctx.arc(r * 0.28, -r * 0.02, r * 0.09, 0, 6.3); ctx.fill();
    outline(Math.max(1.1, r * 0.09));
    ctx.beginPath();
    ctx.moveTo(-r * 0.48, -r * 0.34); ctx.lineTo(-r * 0.14, -r * 0.18);
    ctx.moveTo(r * 0.48, -r * 0.34); ctx.lineTo(r * 0.14, -r * 0.18);
    ctx.moveTo(-r * 0.18, r * 0.36); ctx.quadraticCurveTo(0, r * 0.18, r * 0.18, r * 0.36);
    ctx.stroke();
    ctx.restore();
  }
  function bubble(x, y, r, text) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fillStyle = C.bubble; ctx.fill(); outline(1.4); ctx.stroke();
    if (r > 9) {
      ctx.fillStyle = C.soft; ctx.font = `${r * 0.62}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(text, x, y + 1); ctx.textAlign = "left";
    }
  }
  function item(it, r) {
    if (it.a <= 0.01) return;
    ctx.save(); ctx.globalAlpha *= it.a;
    const bob = Math.sin(time * 4 + it.i) * r * 0.08;
    if (it.type === "alc") drop(it.x, it.y + bob, r * 0.85, C.alc, 0.6);
    else if (it.type === "ald") spiky(it.x, it.y + bob, r * 0.9);
    else if (it.type === "acid") drop(it.x, it.y + bob, r * 0.8, C.acid, 1);
    else bubble(it.x, it.y, r * 0.85, it.type === "h2o" ? "H₂O" : "CO₂");
    ctx.restore();
  }
  function oil(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fillStyle = C.oil; ctx.fill();
    ctx.strokeStyle = C.oilEdge; ctx.lineWidth = Math.max(1.2, r * 0.12); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.beginPath(); ctx.arc(x - r * 0.35, y - r * 0.35, r * 0.25, 0, 6.3); ctx.fill();
  }
  function wavy(x1, y1, x2, y2, seed) {
    const n = 10, dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy), nx = -dy / len, ny = dx / len;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const t = i / n, w = Math.sin(t * Math.PI * 3 + seed) * H * 0.012;
      ctx[i ? "lineTo" : "moveTo"](x1 + dx * t + nx * w, y1 + dy * t + ny * w);
    }
    ctx.stroke();
  }

  // 工人：戴安全帽，胸前挂着名牌；sleepy 时打瞌睡
  function worker(x, y, s, color, name, sleepy) {
    const tilt = sleepy * 0.18 * Math.sin(time * 1.2) + sleepy * 0.12;
    const bounce = (1 - sleepy) * Math.abs(Math.sin(time * 4 + x)) * s * 0.06;
    ctx.save(); ctx.translate(x, y - bounce); ctx.rotate(tilt);
    // 手臂伸向传送带
    outline(Math.max(2, s * 0.09));
    const arm = (1 - sleepy) * Math.sin(time * 6 + x) * s * 0.15;
    ctx.beginPath();
    ctx.moveTo(-s * 0.7, s * 0.2); ctx.lineTo(-s * 0.95, s * 0.75 + arm);
    ctx.moveTo(s * 0.7, s * 0.2); ctx.lineTo(s * 0.95, s * 0.75 - arm);
    ctx.stroke();
    ctx.beginPath(); ctx.ellipse(0, 0, s * 0.82, s * 0.95, 0, 0, 6.3); ctx.fillStyle = color; ctx.fill(); outline(2.2); ctx.stroke();
    // 安全帽
    ctx.beginPath(); ctx.arc(0, -s * 0.62, s * 0.62, Math.PI * 1.05, Math.PI * 1.95); ctx.closePath();
    ctx.fillStyle = C.helmet; ctx.fill(); outline(2); ctx.stroke();
    rrect(-s * 0.78, -s * 0.66, s * 1.56, s * 0.14, s * 0.07); ctx.fill(); ctx.stroke();
    // 名牌：举在头顶的小牌子
    const fs = s * 0.36;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(name).width + s * 0.3, ty = -s * 1.72;
    outline(1.6); ctx.beginPath(); ctx.moveTo(0, ty + fs * 1.4); ctx.lineTo(0, -s * 1.1); ctx.stroke();
    rrect(-tw / 2, ty, tw, fs * 1.4, fs * 0.45); ctx.fillStyle = C.paper; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(name, 0, ty + fs * 0.72); ctx.textAlign = "left";
    // 脸
    if (sleepy > 0.5) {
      outline(Math.max(1.4, s * 0.07)); ctx.beginPath();
      ctx.arc(-s * 0.24, -s * 0.12, s * 0.1, 0.15 * Math.PI, 0.85 * Math.PI);
      ctx.moveTo(s * 0.34, -s * 0.12); ctx.arc(s * 0.24, -s * 0.12, s * 0.1, 0.15 * Math.PI, 0.85 * Math.PI);
      ctx.stroke();
      ctx.beginPath(); ctx.arc(0, s * 0.14, s * 0.07, 0, 6.3); ctx.stroke();
    } else face(0, -s * 0.05, s * 0.72, 1);
    ctx.restore();
    if (sleepy > 0.3) {
      ctx.save(); ctx.globalAlpha *= clamp((sleepy - 0.3) * 1.6, 0, 1);
      ctx.fillStyle = C.soft;
      for (let k = 0; k < 2; k++) {
        const t = (time * 0.5 + k * 0.5) % 1;
        ctx.font = `${s * (0.45 + t * 0.3)}px ${Anima.ROUND}`;
        ctx.globalAlpha *= 1;
        ctx.fillText("z", x + s * (1.0 + t * 0.5), y - s * (1.0 + t * 0.9));
      }
      ctx.restore();
    }
  }

  function belt(x0, x1, y, h, dir) {
    rrect(x0, y, x1 - x0, h, h / 2); ctx.fillStyle = C.belt; ctx.fill(); outline(2.2); ctx.stroke();
    ctx.save(); rrect(x0, y, x1 - x0, h, h / 2); ctx.clip();
    ctx.strokeStyle = C.beltDark; ctx.lineWidth = 2;
    const step = h * 0.9, off = (time * H * 0.06 * dir) % step;
    for (let x = x0 - step + off; x < x1 + step; x += step) { ctx.beginPath(); ctx.moveTo(x, y + h * 0.2); ctx.lineTo(x + h * 0.3, y + h * 0.8); ctx.stroke(); }
    ctx.restore();
    for (const x of [x0 + h / 2, x1 - h / 2]) { ctx.beginPath(); ctx.arc(x, y + h / 2, h * 0.28, 0, 6.3); ctx.fillStyle = C.paper; ctx.fill(); outline(1.5); ctx.stroke(); }
  }

  // ---------- 场景 ----------
  function scene() {
    const g = G();
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(20, C.dot);

    // 血管
    ctx.fillStyle = C.vessel; ctx.fillRect(-10, g.v0, W + 20, g.v1 - g.v0);
    const ins = (g.v1 - g.v0) * 0.15;
    ctx.fillStyle = mix(C.lumen, "#ffd6da", S.blood * 0.6); ctx.fillRect(-10, g.v0 + ins, W + 20, g.v1 - g.v0 - ins * 2);
    outline(3); ctx.beginPath(); ctx.moveTo(0, g.v0); ctx.lineTo(W, g.v0); ctx.moveTo(0, g.v1); ctx.lineTo(W, g.v1); ctx.stroke();
    const lh = (g.v1 - g.v0) / 2 - ins;
    for (let i = 0; i < 5; i++) {
      const x = ((i / 5 + rnd(i) * 0.05 + time * 0.05) % 1.1 - 0.05) * W, y = g.vm + (rnd(i + 20) - 0.5) * lh * 0.8, rr = lh * 0.55;
      ctx.beginPath(); ctx.ellipse(x, y, rr, rr * 0.8, 0, 0, 6.3); ctx.fillStyle = C.coral; ctx.fill(); outline(1.8); ctx.stroke();
      face(x, y + rr * 0.05, rr * 0.7, 0.8 - S.flush * 1.2);
    }
    const na = Math.round(clamp(S.alc, 0, 1) * 7);
    for (let i = 0; i < na; i++) {
      const x = ((rnd(i + 300) + time * 0.06) % 1.1 - 0.05) * W, y = g.vm + (rnd(i + 320) - 0.5) * lh * 1.1;
      drop(x, y + Math.sin(time * 3 + i) * 2, g.ir * 0.7, C.alc, 0.6);
    }
    const nb = Math.round(clamp(S.blood, 0, 1) * 7);
    let bloodAld = null;
    for (let i = 0; i < nb; i++) {
      const x = ((rnd(i + 360) + time * 0.06) % 1.1 - 0.05) * W, y = g.vm + (rnd(i + 380) - 0.5) * lh * 1.1;
      spiky(x, y, g.ir * 0.75);
      if (!bloodAld && x > W * 0.15 && x < W * 0.45) bloodAld = { x, y };
    }

    // 肝细胞加工厂
    const cw = g.cx1 - g.cx0, ch = g.c1 - g.c0;
    ctx.fillStyle = C.ink; rrect(g.cx0 + 5, g.c0 + 5, cw, ch, H * 0.07); ctx.fill();
    rrect(g.cx0, g.c0, cw, ch, H * 0.07);
    ctx.fillStyle = mix(C.cell, C.cellScar, S.fibro * 0.6); ctx.fill(); outline(3); ctx.stroke();
    // 入口：酒精从血管流进来
    const dw = g.ir * 2.8;
    ctx.fillStyle = C.lumen; ctx.fillRect(g.xIn - dw / 2, g.v1 - 2, dw, g.c0 - g.v1 + 8);
    outline(2.5); ctx.beginPath();
    ctx.moveTo(g.xIn - dw / 2, g.v1); ctx.lineTo(g.xIn - dw / 2, g.c0);
    ctx.moveTo(g.xIn + dw / 2, g.v1); ctx.lineTo(g.xIn + dw / 2, g.c0); ctx.stroke();

    ctx.save(); rrect(g.cx0, g.c0, cw, ch, H * 0.07); ctx.clip();
    // 炎症光晕
    if (S.inflame > 0.02) {
      const pulse = 0.8 + 0.2 * Math.sin(time * 3.5);
      const rg = ctx.createRadialGradient(W * 0.45, H * 0.65, H * 0.05, W * 0.45, H * 0.65, W * 0.55);
      rg.addColorStop(0, `rgba(255,110,110,${0.5 * S.inflame * pulse})`); rg.addColorStop(1, "rgba(255,110,110,0)");
      ctx.fillStyle = rg; ctx.fillRect(g.cx0, g.c0, cw, ch);
    }
    // 油滴
    const nOil = Math.round(clamp(S.fat, 0, 1) * 26);
    let oilDot = null;
    for (let i = 0; i < nOil; i++) {
      const x = g.cx0 + H * 0.05 + rnd(i + 700) * (cw - H * 0.1), y = g.c0 + H * 0.05 + rnd(i + 730) * (ch - H * 0.1);
      const r = H * (0.018 + 0.03 * rnd(i + 760)) * (0.6 + 0.4 * clamp(S.fat, 0, 1));
      oil(x, y, r);
      if (!oilDot && x > W * 0.25 && x < W * 0.5 && y < g.by - g.ws * 2.4 && y > g.c0 + H * 0.08) oilDot = { x, y };
    }
    // 疤痕纤维：把肝细胞分割成小块
    let scarAt = null, scarX = 0;
    if (S.fibro > 0.02) {
      ctx.save(); ctx.globalAlpha *= clamp(S.fibro * 1.4, 0, 1);
      ctx.strokeStyle = C.scar; ctx.lineWidth = 2 + S.fibro * H * 0.014; ctx.lineCap = "round";
      for (let k = 1; k <= 4; k++) { const x = g.cx0 + cw * k / 5 + (rnd(k + 900) - 0.5) * cw * 0.06; wavy(x, g.c0, x + cw * 0.04, g.c1, k); if (k === 4) scarX = x; }
      wavy(g.cx0, g.c0 + ch * 0.3, g.cx1, g.c0 + ch * 0.26, 7);
      wavy(g.cx0, g.c1 - ch * 0.12, g.cx1, g.c1 - ch * 0.15, 9);
      ctx.restore();
      scarAt = { x: g.cx0 + cw * 0.12, y: g.c1 - ch * 0.1236, x2: scarX + cw * 0.04 * 0.2, y2: g.c0 + ch * 0.2 };
    }
    ctx.restore();

    // 细胞核：加工厂的小脸
    const nx = g.nuc.x, ny = g.nuc.y, ns = H * 0.06;
    ctx.beginPath(); ctx.ellipse(nx, ny, ns * 1.35, ns, 0, 0, 6.3); ctx.fillStyle = C.nucleus; ctx.fill(); outline(2); ctx.stroke();
    const mood = clamp(0.9 - S.ald * 0.7 - S.fat * 0.9 - S.inflame * 0.8 - S.fibro * 0.4 + S.heal * 1.8, -1, 1);
    face(nx, ny + ns * 0.05, ns * 1.05, mood);
    if (mood < -0.3) sweat(nx + ns * 1.2, ny - ns * 1.1, ns * 0.6);

    // 两条流水线和两位工人
    belt(g.xIn - g.bh * 0.8, g.xLeak - W * 0.01, g.by, g.bh, 1);
    belt(g.xLeak + W * 0.01, g.xOut + g.bh * 0.6, g.by, g.bh, 1);
    const wy = g.by - g.ws * 1.15;
    worker(g.xA, wy, g.ws, C.adh, "乙醇脱氢酶", 0);
    worker(g.xB, wy, g.ws, C.aldh, "ALDH2", S.lazy);

    // 堆在 ALDH2 前面的乙醛
    const np = Math.round(clamp(S.pile, 0, 1) * 7);
    const pileAt = [];
    for (let k = 0; k < np; k++) {
      const row = k < 4 ? 0 : 1, col = row ? k - 4 : k;
      const x = g.xB - g.ws * 1.2 - col * g.ir * 1.7 - row * g.ir * 0.85, y = g.by - g.ir - row * g.ir * 1.5;
      spiky(x, y, g.ir * 0.9);
      pileAt.push({ x, y });
    }

    // 流水线上的小分子；工人手边冒出小星星
    const its = items(g);
    for (const it of its) {
      item(it, g.ir);
      for (const [wx, on] of [[g.xA, 1], [g.xB, 1 - S.lazy * 0.8]]) {
        if (it.y > g.by - g.ir * 1.5 && Math.abs(it.x - wx) < g.ir * 1.2 && on > 0.3) {
          ctx.save(); ctx.globalAlpha *= on * (1 - Math.abs(it.x - wx) / (g.ir * 1.2));
          ctx.fillStyle = C.sugar; ctx.translate(wx, g.by - g.ir * 2.4);
          ctx.beginPath();
          for (let k = 0; k < 10; k++) { const r = k % 2 ? g.ir * 0.3 : g.ir * 0.7, t = k * Math.PI / 5; ctx[k ? "lineTo" : "moveTo"](Math.cos(t) * r, Math.sin(t) * r); }
          ctx.closePath(); ctx.fill(); outline(1.3); ctx.stroke();
          ctx.restore();
        }
      }
    }

    let flushCard = null, stageCard = null;
    if (S.flush > 0.02) flushCard = drawFlush();
    if (S.stage > 0.02) stageCard = drawStage();

    if (S.heal > 0.02) {
      for (const [i, h] of [[0, 0.12], [1, 0.36], [2, 0.58], [3, 0.8], [4, 0.94]]) {
        const x = h * W, y = ((rnd(i + 8100) - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + i)), C.heartPink);
        ctx.restore();
      }
    }
    return { g, its, pileAt, bloodAld, oilDot, scarAt, flushCard, stageCard, wy };
  }

  // 脸红小卡片：乙醛跑进血里，脸红、心跳快
  function flushCardBox() { const cw = H * 0.3, ch = H * 0.36; return { x: W - cw - 14, y: H - ch - 14, cw, ch }; }
  function drawFlush() {
    const k = flushCardBox();
    ctx.save(); ctx.globalAlpha *= S.flush;
    ctx.fillStyle = C.ink; rrect(k.x + 5, k.y + 5, k.cw, k.ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(k.x, k.y, k.cw, k.ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const cx = k.x + k.cw * 0.42, cy = k.y + k.ch * 0.42, r = k.ch * 0.26;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, 6.3); ctx.fillStyle = mix(C.skin, C.flushRed, S.flush * (0.75 + 0.15 * Math.sin(time * 2))); ctx.fill(); outline(2.2); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(cx, cy - r * 0.95, r * 0.35, Math.PI, 0); ctx.fill();
    face(cx, cy + r * 0.05, r * 0.7, -0.3, false);
    ctx.fillStyle = "rgba(230,60,80,0.55)";
    ctx.beginPath(); ctx.ellipse(cx - r * 0.5, cy + r * 0.25, r * 0.2, r * 0.12, 0, 0, 6.3); ctx.ellipse(cx + r * 0.5, cy + r * 0.25, r * 0.2, r * 0.12, 0, 0, 6.3); ctx.fill();
    // 冒热气
    ctx.strokeStyle = C.flushRed; ctx.lineWidth = 2;
    for (let j = -1; j <= 1; j++) {
      const t = (time * 0.8 + j * 0.3) % 1;
      ctx.save(); ctx.globalAlpha *= 1 - t;
      ctx.beginPath(); ctx.moveTo(cx + j * r * 0.5, cy - r * 1.15 - t * r * 0.5);
      ctx.quadraticCurveTo(cx + j * r * 0.5 + r * 0.15, cy - r * 1.3 - t * r * 0.5, cx + j * r * 0.5, cy - r * 1.45 - t * r * 0.5); ctx.stroke();
      ctx.restore();
    }
    const beat = 1 + 0.22 * Math.max(0, Math.sin(time * 9));
    heart(k.x + k.cw * 0.8, k.y + k.ch * 0.62, k.ch * 0.08 * beat, C.coral);
    const fs = Math.min(Math.max(11, W / 70) * Anima.UI, k.cw / 6.5);
    ctx.fillStyle = C.ink; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.font = `${fs}px ${Anima.ROUND}`; ctx.fillText("脸红、心跳快", k.x + k.cw / 2, k.y + k.ch - fs * 0.9);
    ctx.textAlign = "left";
    ctx.restore();
    return { k, face: { x: cx - r * 0.7, y: cy } };
  }

  // 进展小卡片：脂肪肝 → 肝纤维化 → 肝硬化
  function stageCardBox() { const cw = Math.min(W * 0.62, H * 0.78), ch = cw * 0.4; return { x: W - cw - 14, y: H * 0.1 + (Anima.UI > 1 ? H * 0.08 : 0), cw, ch }; }
  function liverShape(x, y, s) {
    ctx.beginPath();
    ctx.moveTo(x - s, y - s * 0.3);
    ctx.bezierCurveTo(x - s * 0.6, y - s * 0.8, x + s * 0.6, y - s * 0.75, x + s, y - s * 0.45);
    ctx.bezierCurveTo(x + s * 0.9, y + s * 0.1, x + s * 0.2, y + s * 0.55, x - s * 0.3, y + s * 0.55);
    ctx.bezierCurveTo(x - s * 0.8, y + s * 0.5, x - s * 1.05, y + s * 0.1, x - s, y - s * 0.3);
    ctx.closePath();
  }
  function drawStage() {
    const k = stageCardBox();
    ctx.save(); ctx.globalAlpha *= S.stage;
    ctx.fillStyle = C.ink; rrect(k.x + 5, k.y + 5, k.cw, k.ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(k.x, k.y, k.cw, k.ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const names = ["脂肪肝", "肝纤维化", "肝硬化"], fills = ["#ffd9a0", "#eab092", "#c98a6a"];
    const fs = k.cw / 14, s = k.cw * 0.11, cy = k.y + k.ch * 0.42;
    const hot = Math.floor(time / 1.6) % 3;
    for (let i = 0; i < 3; i++) {
      const cx = k.x + k.cw * (0.18 + i * 0.32), sz = s * (i === 2 ? 0.82 : 1) * (hot === i ? 1.08 : 1);
      liverShape(cx, cy, sz); ctx.fillStyle = fills[i]; ctx.fill(); outline(2); ctx.stroke();
      ctx.save(); liverShape(cx, cy, sz); ctx.clip();
      if (i === 0) for (let j = 0; j < 5; j++) oil(cx + (rnd(j + 40) - 0.5) * sz * 1.3, cy + (rnd(j + 50) - 0.5) * sz * 0.6, sz * 0.12);
      if (i === 1) { ctx.strokeStyle = C.scar; ctx.lineWidth = 2; for (let j = 0; j < 3; j++) { ctx.beginPath(); ctx.moveTo(cx - sz + j * sz * 0.6, cy - sz); ctx.lineTo(cx - sz * 0.6 + j * sz * 0.6, cy + sz); ctx.stroke(); } }
      if (i === 2) for (let j = 0; j < 9; j++) {
        ctx.beginPath(); ctx.arc(cx + ((j % 3) - 1) * sz * 0.55, cy + (Math.floor(j / 3) - 1) * sz * 0.38, sz * 0.24, 0, 6.3);
        ctx.fillStyle = "#dca07f"; ctx.fill(); ctx.strokeStyle = C.scar; ctx.lineWidth = 2; ctx.stroke();
      }
      ctx.restore();
      face(cx + sz * 0.1, cy - sz * 0.02, sz * 0.38, [0.2, -0.4, -0.9][i], false);
      ctx.fillStyle = C.ink; ctx.font = `${fs}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(names[i], cx, k.y + k.ch - fs * 0.95);
      if (i < 2) {
        const ax = cx + k.cw * 0.16;
        outline(2); ctx.beginPath(); ctx.moveTo(ax - s * 0.25, cy); ctx.lineTo(ax + s * 0.25, cy); ctx.lineTo(ax + s * 0.1, cy - s * 0.15); ctx.moveTo(ax + s * 0.25, cy); ctx.lineTo(ax + s * 0.1, cy + s * 0.15); ctx.stroke();
      }
    }
    ctx.textAlign = "left";
    ctx.restore();
    return { k, cirr: { x: k.x + k.cw * 0.82, y: cy + s * 0.4 } };
  }

  function hud() {
    if (CH[cur].left === "fat") {
      const v = 2 + S.fat * 28;
      pill(14, 12, "肝脏脂肪", `${v.toFixed(0)}%`, v < 5.5 ? C.mint : v < 15 ? "#e7a500" : "#f25f6b", false);
    } else {
      const a = S.ald;
      pill(14, 12, "乙醛", a < 0.4 ? "低" : a < 0.75 ? "偏高" : "很高", a < 0.4 ? C.mint : a < 0.75 ? "#e7a500" : "#f25f6b", false);
    }
    const [label, value, st] = CH[cur].pill;
    pill(W - 14, 12, label, value, st === "ok" ? C.mint : st === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const r = scene(), g = r.g;
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const top = g.c0 + H * 0.06, bot = H * 0.975;
    const find = (f) => r.its.find(f);
    callout("alc", on("alc"), g.xIn, (g.v1 + g.c0) / 2, g.xIn + W * 0.1, top, "酒精流进肝细胞");
    callout("adh", on("adh"), g.xA, r.wy + g.ws * 0.5, g.xA + W * 0.04, bot, "第一道工序：乙醇脱氢酶");
    const a0 = find((it) => it.type === "ald" && !it.leak && it.y > g.by - g.ir * 1.5 && it.x > g.xA + W * 0.04);
    callout("ald", on("ald") && !!a0, a0 ? a0.x : 0, a0 ? a0.y - g.ir : 0, W * 0.64, top, "酒精变成了乙醛");
    callout("toxic", on("toxic") && !!a0, a0 ? a0.x : 0, a0 ? a0.y - g.ir : 0, W * 0.24, top, "乙醛：有毒、致癌");
    callout("aldh2", on("aldh2"), g.xB, r.wy + g.ws * 0.5, g.xB - W * 0.1, bot, "第二道工序：ALDH2");
    const c0 = find((it) => it.type === "acid" && it.x < g.xOut - W * 0.03);
    callout("acetic", on("acetic") && !!c0, c0 ? c0.x : 0, c0 ? c0.y - g.ir : 0, W * 0.8, top, "乙酸 → 水和二氧化碳");
    callout("lazy", on("lazy"), g.xB, r.wy + g.ws * 0.5, g.xB - W * 0.18, bot, "ALDH2 活性低，干不动");
    const lk = find((it) => it.leak && it.type === "ald" && it.y < g.by - g.ir * 3 && it.a > 0.8);
    const pk = lk || (r.pileAt[0]);
    callout("pile", on("pile") && !!pk, pk ? pk.x : 0, pk ? pk.y : 0, W * 0.3, top, "乙醛堆积、跑进血里");
    if (r.flushCard) callout("flush", on("flush"), r.flushCard.face.x, r.flushCard.face.y, r.flushCard.k.x + r.flushCard.k.cw * 0.2, r.flushCard.k.y - H * 0.06, "乙醛让血管扩张");
    else callout("flush", false, 0, 0, 0, 0, "");
    callout("oil", on("oil") && !!r.oilDot, r.oilDot ? r.oilDot.x : 0, r.oilDot ? r.oilDot.y : 0, W * 0.34, top, "肝细胞里囤满了油滴");
    callout("tired", on("tired"), g.nuc.x - H * 0.06, g.nuc.y, g.nuc.x - W * 0.3, bot, "加工厂越来越累");
    callout("inflame", on("inflame"), g.nuc.x - H * 0.06, g.nuc.y, g.nuc.x - W * 0.18, bot, "发炎：酒精性肝炎");
    callout("scar", on("scar") && !!r.scarAt, r.scarAt ? r.scarAt.x : 0, r.scarAt ? r.scarAt.y : 0, W * 0.2, bot, "长出疤痕纤维");
    callout("nodrink", on("nodrink"), g.xIn, (g.v1 + g.c0) / 2, g.xIn + W * 0.12, top, "不喝酒，工厂最轻松");
    callout("fatgone", on("fatgone"), g.nuc.x - H * 0.06, g.nuc.y, g.nuc.x - W * 0.3, bot, "戒酒后油滴明显变少");
    callout("scarstay", on("scarstay") && !!r.scarAt, r.scarAt ? r.scarAt.x2 : 0, r.scarAt ? r.scarAt.y2 : 0, W * 0.7, top, "疤痕很难消掉");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#c45c8e",
    titleCard: { lines: ["一喝酒就脸红，", "是酒量好吗？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
