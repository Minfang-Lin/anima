Anima.register("gout", {
    "title": "痛风小针",
    "tag": "关节小剧场 · 7 幕",
    "headline": "尿酸变成【小针】，关节为什么这么痛",
    "lede": "走进大脚趾的关节看一看：尿酸从哪里来，怎样变成针一样的结晶，为什么会突然痛得走不了路，又该怎样把它赶走。",
    "summary": "尿酸变成针状结晶，关节为什么会突然红肿剧痛，又该怎样把尿酸降下来。",
    "footer": "痛风发作或尿酸偏高，请到风湿免疫科或内分泌科就诊。",
    "canvasLabel": "卡通大脚趾关节剖面动画",
    "disease": "痛风",
    "organs": [
      "joint",
      "kidney"
    ],
    "categories": [
      "metabolic",
      "bone"
    ],
    "color": "#5aaad8"
  }, () => {
  const CH = [
    { title: "健康的关节", ua: 300, food: 0, kidney: 1, crystals: 0, inflame: 0, tophi: 0, heal: 0,
      text: "这是大脚趾的关节。两块骨头的末端包着光滑的软骨，中间有少量关节液润滑，走起路来又顺又不痛。血液里也有一些尿酸（蓝色小圆点），它是身体代谢的正常产物。",
      fact: "高尿酸血症：非同日两次空腹血尿酸 > 420 μmol/L",
      labels: ["cart", "fluid", "urate"] },
    { title: "尿酸从哪里来", ua: 340, food: 1, kidney: 1, crystals: 0, inflame: 0, tophi: 0, heal: 0,
      text: "尿酸是嘌呤分解后的产物。大约八成嘌呤来自身体细胞自己的新陈代谢，两成来自食物，比如动物内脏、海鲜、浓肉汤和啤酒；含糖饮料里的果糖也会让尿酸升高。大部分尿酸靠肾脏随尿排出去。",
      fact: "约 2/3 的尿酸经肾脏排出，约 1/3 经肠道排出",
      labels: ["food", "kidney"] },
    { title: "尿酸越积越多", ua: 480, food: 1, kidney: 0.3, crystals: 0, inflame: 0, tophi: 0, heal: 0,
      text: "吃进去的多、身体产生的多，或者肾脏排得慢，尿酸就会在血液里越积越多，也慢慢渗进关节液里。这时候大多数人没有任何感觉，只是体检时发现尿酸偏高。",
      fact: "高尿酸血症常常没有症状，要靠抽血检查才能发现",
      labels: ["kidney2", "urate2"] },
    { title: "结晶析出，像一根根小针", ua: 500, food: 0.4, kidney: 0.3, crystals: 1, inflame: 0, tophi: 0, heal: 0,
      text: "体液里能溶解的尿酸有上限。超过上限，尿酸就会析出针一样的尿酸盐结晶，沉积在软骨和关节液里。脚趾离心脏远、温度低，结晶最容易在这里安家。",
      fact: "体温 37℃ 时，尿酸超过约 405 μmol/L（6.8 mg/dL）就可能析出结晶",
      labels: ["crystal", "cold"] },
    { title: "痛风发作：又红又肿又痛", ua: 500, food: 0.2, kidney: 0.3, crystals: 1, inflame: 1, tophi: 0, heal: 0,
      text: "某一天，结晶从软骨上脱落，免疫细胞把它们当成入侵者，一拥而上，放出大量炎症信号。关节突然红、肿、热、痛，常常在夜里发作。这时要休息、冰敷、抬高患脚，尽快就医用药止痛消炎。",
      fact: "急性发作常在 24 小时内痛到顶峰，大脚趾是最常见的部位",
      labels: ["wbc", "swell"] },
    { title: "反复发作，长出痛风石", ua: 520, food: 0, kidney: 0.3, crystals: 1, inflame: 0.4, tophi: 1, heal: 0,
      text: "如果尿酸一直降不下来，发作会越来越频繁，结晶越堆越多，形成白色的痛风石。它会慢慢侵蚀软骨和骨头，让关节变形。尿酸结晶还可能沉积在肾脏里，形成肾结石。",
      fact: "痛风石也常出现在耳廓、手指和肘部",
      labels: ["tophus", "erode"] },
    { title: "把尿酸降下来，结晶会溶解", ua: 330, food: 0, kidney: 1, crystals: 0.3, inflame: 0, tophi: 0.5, heal: 1,
      text: "把尿酸长期控制在目标以下，结晶会慢慢溶解，发作也会越来越少。多喝水，少吃高嘌呤食物，少喝酒和含糖饮料，控制体重，并在医生指导下坚持服用降尿酸药，不要自己随便停药。",
      fact: "治疗目标：血尿酸 < 360 μmol/L；有痛风石时 < 300 μmol/L",
      labels: ["water", "dissolve"] },
  ];
  const DUR = 11; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    vessel: "#ffb3b3", lumen: "#fff4ec", kidney: "#f28b8b", urine: "#ffe58a",
    urate: "#8fd0f5", crystal: "#ffffff", crystalEdge: "#5aaad8",
    bone: "#fff3dc", boneDot: "#f3dfbd", cart: "#bfe6f5", fluid: "#fff6d6", fluidHot: "#ffc9b8",
    synovium: "#f7a8b8", tophus: "#fbfaf2", wbc: "#ffffff", cyto: "#ff9f5a", pain: "#ff5d73",
    water: "#7cc8f5", heartPink: "#ff9fb0",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, bolt, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { ua: 300, food: 0, kidney: 1, crystals: 0, inflame: 0, tophi: 0, heal: 0 };

  // ---------- 几何 ----------
  const G = () => {
    const jx = W * 0.5, jy = H * 0.66, gap = H * 0.07, hr = H * 0.16, bt = H * 0.11, bt2 = H * 0.15;
    const cxL = jx - gap / 2 - hr, R2 = hr + gap;
    const swell = 1 + 0.12 * S.inflame + 0.03 * S.inflame * Math.sin(time * 4);
    const rx = H * 0.3 * swell, ry = H * 0.26 * swell;
    const vy0 = H * 0.13, vy1 = H * 0.29, vmid = (vy0 + vy1) / 2, vh = (vy1 - vy0) / 2;
    const ks = H * 0.1, kx = W - ks * 1.3, vEnd = kx - ks * 0.4;
    return { jx, jy, gap, hr, bt, bt2, cxL, R2, rx, ry, vy0, vy1, vmid, vh, ks, kx, vEnd };
  };
  // 右骨凹面的边缘 x 坐标
  const cupX = (g, y) => g.cxL + Math.sqrt(Math.max(0, g.R2 * g.R2 - (y - g.jy) ** 2));

  // ---------- 粒子 ----------
  const vUrate = Array.from({ length: 60 }, (_, i) => ({ x: rnd(i + 10), yn: rnd(i + 80) * 1.6 - 0.8, ph: rnd(i + 150) * 6 }));
  const rbcs = Array.from({ length: 7 }, (_, i) => ({ x: i / 7 + rnd(i + 300) * 0.05, yn: rnd(i + 320) * 1.0 - 0.5, ph: rnd(i) * 6 }));
  const foods = Array.from({ length: 4 }, (_, i) => ({ x: -0.1 - i * 0.28, kind: i }));
  const drops = Array.from({ length: 6 }, (_, i) => ({ x: i / 6, yn: rnd(i + 360) - 0.5 }));
  // 关节液里的尿酸：落在关节囊上下两个“口袋”里（|v| > 0.62，避开骨头）
  const pocket = (seed) => {
    const u = rnd(seed) * 1.6 - 0.8, sign = rnd(seed + 1) < 0.5 ? -1 : 1;
    const vmax = Math.sqrt(1 - u * u) * 0.92;
    return { u, v: sign * (0.64 + rnd(seed + 2) * Math.max(0, vmax - 0.64)) };
  };
  const jUrate = Array.from({ length: 40 }, (_, i) => ({ ...pocket(i * 7 + 500), ph: rnd(i + 900) * 6 }));
  // 结晶：一部分扎在软骨表面，一部分漂在口袋里
  const crystals = Array.from({ length: 34 }, (_, i) => {
    const r = rnd(i + 1200);
    if (r < 0.35) return { type: "L", a: (rnd(i + 1300) - 0.5) * 2.1, tilt: (rnd(i + 1400) - 0.5) * 0.8 };
    if (r < 0.6) return { type: "R", a: (rnd(i + 1300) - 0.5) * 1.2, tilt: (rnd(i + 1400) - 0.5) * 0.8 };
    return { type: "P", ...pocket(i * 11 + 1500), rot: rnd(i + 1600) * 6 };
  });
  const wbcs = Array.from({ length: 7 }, (_, i) => ({ k: i, ph: rnd(i + 1700) * 6 }));
  const cytos = [], bolts = [], urine = [];
  const hearts = Array.from({ length: 8 }, (_, i) => ({ x: rnd(i + 8000), y: rnd(i + 8100), ph: rnd(i + 8200) * 6 }));

  const nVessel = () => Math.round(clamp((S.ua - 200) / 400, 0, 1) * vUrate.length);
  const nJoint = () => Math.round(clamp((S.ua - 260) / 300, 0, 1) * jUrate.length);
  const nCrystal = () => Math.round(clamp(S.crystals, 0, 1) * crystals.length);

  function crystalPos(g, c) {
    const L = H * 0.045 * (1 - 0.35 * S.heal);
    if (c.type === "L") {
      const r = g.hr + L * 0.35;
      return { x: g.cxL + Math.cos(c.a) * r, y: g.jy + Math.sin(c.a) * r, ang: c.a + c.tilt, L };
    }
    if (c.type === "R") {
      const r = g.R2 - L * 0.35;
      return { x: g.cxL + Math.cos(c.a) * r, y: g.jy + Math.sin(c.a) * r, ang: c.a + Math.PI + c.tilt, L };
    }
    return { x: g.jx + c.u * g.rx + Math.sin(time * 0.5 + c.rot) * 3, y: g.jy + c.v * g.ry, ang: c.rot + time * 0.1, L };
  }

  function update(dt) {
    const g = G();
    const beat = 1 + 0.25 * Math.max(0, Math.sin(time * Math.PI * 2));
    for (const p of vUrate) { p.x += dt * 0.07 * beat; if (p.x > 1) p.x -= 1; }
    for (const p of rbcs) { p.x += dt * 0.07 * beat; if (p.x > 1) p.x -= 1; }
    for (const f of foods) { f.x += dt * 0.07; if (f.x > 0.6) f.x -= 1.12; }
    for (const d of drops) { d.x += dt * 0.08; if (d.x > 1) d.x -= 1; }
    // 肾脏排出的小尿滴
    if (Math.random() < dt * 3 * S.kidney) urine.push({ t: 0, off: Math.random() - 0.5 });
    for (let i = urine.length - 1; i >= 0; i--) { urine[i].t += dt * 0.6; if (urine[i].t > 1) urine.splice(i, 1); }
    // 炎症信号和疼痛闪电
    if (S.inflame > 0.1) {
      if (Math.random() < dt * 14 * S.inflame) {
        const w = wbcs[Math.floor(Math.random() * wbcs.length)];
        const p = wbcPos(g, w);
        if (p) cytos.push({ x: p.x, y: p.y, a: Math.random() * 6.28, life: 1 });
      }
      if (Math.random() < dt * 5 * S.inflame) {
        const a = Math.random() * Math.PI * 2;
        bolts.push({ a, r: 1.08 + Math.random() * 0.2, life: 0.6 });
      }
    }
    for (let i = cytos.length - 1; i >= 0; i--) { const c = cytos[i]; c.life -= dt; c.x += Math.cos(c.a) * dt * 30; c.y += Math.sin(c.a) * dt * 30; if (c.life <= 0) cytos.splice(i, 1); }
    for (let i = bolts.length - 1; i >= 0; i--) { bolts[i].life -= dt; if (bolts[i].life <= 0) bolts.splice(i, 1); }
  }

  function wbcPos(g, w) {
    const n = nCrystal();
    if (!n) return null;
    const c = crystals[(w.k * 5) % n];
    const p = crystalPos(g, c);
    const r = H * 0.035 + Math.sin(time * 2 + w.ph) * H * 0.006;
    const a = time * 0.7 + w.ph;
    return { x: p.x + Math.cos(a) * r, y: p.y + Math.sin(a) * r * 0.7 };
  }

  // ---------- 小图标 ----------
  function food(kind, x, y, s) {
    ctx.save(); ctx.translate(x, y);
    if (kind === 0) { // 啤酒
      rrect(-s * 0.55, -s * 0.5, s * 1.0, s * 1.1, s * 0.15); ctx.fillStyle = "#ffcf5c"; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.beginPath(); ctx.arc(s * 0.55, s * 0.05, s * 0.28, -1.3, 1.3); ctx.stroke();
      ctx.fillStyle = "#ffffff"; ctx.beginPath();
      ctx.arc(-s * 0.35, -s * 0.55, s * 0.24, 0, 6.3); ctx.arc(0, -s * 0.62, s * 0.26, 0, 6.3); ctx.arc(s * 0.3, -s * 0.55, s * 0.22, 0, 6.3);
      ctx.fill(); outline(1.5); ctx.stroke();
    } else if (kind === 1) { // 鸡腿
      ctx.rotate(-0.5);
      rrect(s * 0.2, -s * 0.12, s * 0.75, s * 0.24, s * 0.12); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(-s * 0.15, 0, s * 0.6, s * 0.45, 0, 0, 6.3); ctx.fillStyle = "#d9905a"; ctx.fill(); outline(1.8); ctx.stroke();
    } else if (kind === 2) { // 虾
      ctx.strokeStyle = C.ink; ctx.lineWidth = s * 0.5; ctx.lineCap = "round";
      ctx.beginPath(); ctx.arc(0, 0, s * 0.5, Math.PI * 0.9, Math.PI * 2.2); ctx.stroke();
      ctx.strokeStyle = "#ff9f6e"; ctx.lineWidth = s * 0.5 - 3.5;
      ctx.beginPath(); ctx.arc(0, 0, s * 0.5, Math.PI * 0.9, Math.PI * 2.2); ctx.stroke();
      ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(-s * 0.42, s * 0.05, s * 0.07, 0, 6.3); ctx.fill();
    } else { // 含糖饮料
      ctx.beginPath(); ctx.moveTo(-s * 0.45, -s * 0.45); ctx.lineTo(s * 0.45, -s * 0.45); ctx.lineTo(s * 0.32, s * 0.6); ctx.lineTo(-s * 0.32, s * 0.6); ctx.closePath();
      ctx.fillStyle = "#ff8a8a"; ctx.fill(); outline(1.8); ctx.stroke();
      outline(2); ctx.beginPath(); ctx.moveTo(s * 0.1, -s * 0.45); ctx.lineTo(s * 0.3, -s * 0.9); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.fillRect(-s * 0.3, -s * 0.1, s * 0.6, s * 0.14);
    }
    ctx.restore();
  }
  function urateDot(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fillStyle = C.urate; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.beginPath(); ctx.arc(x - r * 0.35, y - r * 0.35, r * 0.3, 0, 6.3); ctx.fill();
  }
  function needle(x, y, ang, L) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    const w = Math.max(2.5, L * 0.18);
    ctx.beginPath(); ctx.moveTo(-L / 2, 0); ctx.lineTo(-L / 2 + w, -w / 2); ctx.lineTo(L / 2 - w, -w / 2); ctx.lineTo(L / 2, 0);
    ctx.lineTo(L / 2 - w, w / 2); ctx.lineTo(-L / 2 + w, w / 2); ctx.closePath();
    ctx.fillStyle = C.crystal; ctx.fill(); ctx.strokeStyle = C.crystalEdge; ctx.lineWidth = 1.6; ctx.lineJoin = "round"; ctx.stroke();
    ctx.restore();
  }
  function drop(x, y, s, color) {
    ctx.beginPath(); ctx.moveTo(x, y - s);
    ctx.quadraticCurveTo(x + s * 0.8, y + s * 0.1, x, y + s * 0.6);
    ctx.quadraticCurveTo(x - s * 0.8, y + s * 0.1, x, y - s);
    ctx.fillStyle = color; ctx.fill(); outline(1.5); ctx.stroke();
  }
  function lump(x, y, s, seed) {
    // 先画粗描边再盖填充，得到一整块疙瘩的外轮廓
    const path = () => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = i * 1.26 + seed, r = s * (0.55 + rnd(seed + i) * 0.3);
        const cx = x + Math.cos(a) * s * 0.45, cy = y + Math.sin(a) * s * 0.4;
        ctx.moveTo(cx + r, cy); ctx.arc(cx, cy, r, 0, 6.3);
      }
    };
    path(); ctx.strokeStyle = C.ink; ctx.lineWidth = 4; ctx.stroke();
    path(); ctx.fillStyle = C.tophus; ctx.fill();
    ctx.fillStyle = "#e6e2d4";
    for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.arc(x + (rnd(seed + 9 + i) - 0.5) * s, y + (rnd(seed + 19 + i) - 0.5) * s * 0.8, s * 0.09, 0, 6.3); ctx.fill(); }
  }

  const boneMood = () => clamp(1 - 1.9 * S.inflame - 0.5 * S.tophi + 0.7 * S.heal, -1, 1);

  // ---------- 场景 ----------
  function scene() {
    const g = G();
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(34, C.dot);

    // 红肿发热的光晕
    if (S.inflame > 0.02) {
      const pulse = 0.85 + 0.15 * Math.sin(time * 4);
      const rg = ctx.createRadialGradient(g.jx, g.jy, g.ry * 0.3, g.jx, g.jy, g.rx * 1.9);
      rg.addColorStop(0, `rgba(255,110,110,${0.55 * S.inflame * pulse})`);
      rg.addColorStop(1, "rgba(255,110,110,0)");
      ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
    }

    // ---- 血管 + 肾脏 ----
    rrect(-20, g.vy0, g.vEnd + 20, g.vy1 - g.vy0, (g.vy1 - g.vy0) / 2);
    ctx.fillStyle = C.vessel; ctx.fill(); outline(3); ctx.stroke();
    const inset = (g.vy1 - g.vy0) * 0.16;
    rrect(-20, g.vy0 + inset, g.vEnd + 20 - inset, g.vy1 - g.vy0 - inset * 2, (g.vy1 - g.vy0) / 2 - inset);
    ctx.fillStyle = mix(C.lumen, "#e6f4fc", (S.ua - 300) / 250); ctx.fill();
    const lumenH = g.vh - inset;
    ctx.save(); rrect(-20, g.vy0 + inset, g.vEnd + 20 - inset, g.vy1 - g.vy0 - inset * 2, (g.vy1 - g.vy0) / 2 - inset); ctx.clip();
    // 食物（进入血液后分解成尿酸）
    if (S.food > 0.02) {
      for (const f of foods) {
        const x = f.x * W;
        if (x < -40) continue;
        const a = S.food * clamp((0.42 - f.x) / 0.1, 0, 1);
        if (a <= 0.01) continue;
        ctx.save(); ctx.globalAlpha *= a;
        food(f.kind, x, g.vmid, lumenH * 0.75);
        ctx.restore();
      }
    }
    for (const p of rbcs) {
      const x = p.x * g.vEnd, y = g.vmid + p.yn * lumenH * 0.45, r = lumenH * 0.45;
      ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.8, 0, 0, 6.3); ctx.fillStyle = C.coral; ctx.fill(); outline(1.8); ctx.stroke();
      face(x, y + r * 0.05, r * 0.7, 0.8);
    }
    const nv = nVessel();
    for (let i = 0; i < nv; i++) {
      const p = vUrate[i];
      urateDot(p.x * g.vEnd, g.vmid + p.yn * lumenH * 0.85 + Math.sin(time * 2 + p.ph) * 2, Math.max(3.5, H * 0.012));
    }
    if (S.heal > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.heal;
      for (const d of drops) drop(d.x * g.vEnd, g.vmid + d.yn * lumenH * 0.8, lumenH * 0.4, C.water);
      ctx.restore();
    }
    ctx.restore();
    // 肾脏
    ctx.save(); ctx.translate(g.kx, g.vmid);
    ctx.beginPath(); ctx.ellipse(0, 0, g.ks * 0.72, g.ks, 0, 0, 6.3);
    ctx.fillStyle = C.kidney; ctx.fill(); outline(3); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(-g.ks * 0.72, 0, g.ks * 0.26, g.ks * 0.3, 0, 0, 6.3); ctx.fillStyle = C.tissue; ctx.fill();
    ctx.beginPath(); ctx.ellipse(-g.ks * 0.72, 0, g.ks * 0.26, g.ks * 0.3, 0, -1.2, 1.2); outline(3); ctx.stroke();
    const km = clamp(S.kidney * 1.4 - 0.6, -1, 1);
    face(g.ks * 0.08, -g.ks * 0.05, g.ks * 0.45, km);
    if (km < -0.1) sweat(g.ks * 0.55, -g.ks * 0.75, g.ks * 0.35);
    ctx.restore();
    // 排出的小尿滴
    for (const u of urine) {
      const x = g.kx + u.off * g.ks * 0.4, y = g.vmid + g.ks * 0.9 + u.t * H * 0.12;
      ctx.save(); ctx.globalAlpha *= 1 - u.t;
      drop(x, y, H * 0.018, C.urine);
      ctx.restore();
    }

    // ---- 关节囊 + 关节液 ----
    ctx.beginPath(); ctx.ellipse(g.jx, g.jy, g.rx, g.ry, 0, 0, 6.3);
    ctx.fillStyle = mix(C.fluid, C.fluidHot, S.inflame); ctx.fill();
    ctx.strokeStyle = mix(C.synovium, "#ff7f96", S.inflame); ctx.lineWidth = H * 0.028; ctx.stroke();
    outline(2.5); ctx.stroke();
    const nj = nJoint();
    for (let i = 0; i < nj; i++) {
      const p = jUrate[i];
      urateDot(g.jx + p.u * g.rx + Math.sin(time + p.ph) * 3, g.jy + p.v * g.ry + Math.cos(time * 0.8 + p.ph) * 2, Math.max(3, H * 0.01));
    }

    // ---- 骨头：先画粗描边，再盖上填充，得到合并后的外轮廓 ----
    const leftBone = () => {
      rrect(-30, g.jy - g.bt, g.cxL + 30, g.bt * 2, 0);
      ctx.moveTo(g.cxL + g.hr, g.jy); ctx.arc(g.cxL, g.jy, g.hr, 0, 6.3);
    };
    const rightBone = () => {
      ctx.beginPath();
      const yT = g.jy - g.bt2, yB = g.jy + g.bt2;
      ctx.moveTo(cupX(g, yT), yT); ctx.lineTo(W + 30, yT); ctx.lineTo(W + 30, yB); ctx.lineTo(cupX(g, yB), yB);
      for (let y = yB; y >= yT; y -= 3) ctx.lineTo(cupX(g, y), y);
      ctx.closePath();
    };
    for (const shape of [leftBone, rightBone]) {
      shape(); ctx.strokeStyle = C.ink; ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.stroke();
      shape(); ctx.fillStyle = C.bone; ctx.fill();
    }
    // 骨小梁小点
    ctx.fillStyle = C.boneDot;
    for (let i = 0; i < 26; i++) {
      const left = i % 2 === 0;
      const x = left ? rnd(i + 2000) * (g.cxL - 20) + 10 : cupX(g, g.jy) + 25 + rnd(i + 2000) * (W - cupX(g, g.jy) - 30);
      const y = g.jy + (rnd(i + 2100) - 0.5) * g.bt * 1.5;
      ctx.beginPath(); ctx.arc(x, y, 2 + rnd(i + 2200) * 3, 0, 6.3); ctx.fill();
    }
    // 软骨（痛风石侵蚀时会变薄、出现缺口）
    const ct = H * 0.026 * (1 - 0.45 * S.tophi);
    ctx.strokeStyle = C.cart; ctx.lineWidth = ct; ctx.lineCap = "butt";
    if (S.tophi > 0.02) ctx.setLineDash([22, 9 * S.tophi]);
    ctx.beginPath(); ctx.arc(g.cxL, g.jy, g.hr - ct / 2 - 1.5, -1.15, 1.15); ctx.stroke();
    const aCup = Math.asin(g.bt2 / g.R2) * 0.93;
    ctx.beginPath(); ctx.arc(g.cxL, g.jy, g.R2 + ct / 2 + 1.5, -aCup, aCup); ctx.stroke();
    ctx.setLineDash([]); ctx.lineCap = "round";
    // 骨头的表情
    const mood = boneMood(), fsz = H * 0.07;
    for (const [fx, flip] of [[g.cxL * 0.45, false], [(cupX(g, g.jy) + W) / 2 + 10, true]]) {
      face(fx, g.jy, fsz, mood);
      if (mood < -0.25) sweat(fx + (flip ? -1 : 1) * fsz * 0.75, g.jy - fsz * 0.9, fsz * 0.45);
    }

    // ---- 痛风石 + 骨侵蚀 ----
    let bite = null, lumpAt = [];
    if (S.tophi > 0.02) {
      const s = H * 0.075 * S.tophi;
      lumpAt = [
        [g.jx - g.rx * 0.35, g.jy - g.ry * 0.78, 3000],
        [g.jx + g.rx * 0.4, g.jy + g.ry * 0.78, 3100],
      ];
      for (const [x, y, sd] of lumpAt) lump(x, y, s, sd);
      const ba = -0.95;
      bite = { x: g.cxL + Math.cos(ba) * g.hr, y: g.jy + Math.sin(ba) * g.hr };
      lump(bite.x, bite.y, s * 0.8, 3200);
    }

    // ---- 结晶 ----
    const nc = nCrystal();
    for (let i = 0; i < nc; i++) { const p = crystalPos(g, crystals[i]); needle(p.x, p.y, p.ang, p.L); }

    // ---- 免疫细胞 + 炎症信号 ----
    if (S.inflame > 0.03) {
      for (const c of cytos) {
        ctx.save(); ctx.globalAlpha *= clamp(c.life, 0, 1) * S.inflame;
        ctx.beginPath(); ctx.arc(c.x, c.y, 3.2, 0, 6.3); ctx.fillStyle = C.cyto; ctx.fill(); outline(1); ctx.stroke();
        ctx.restore();
      }
      const ws = H * 0.034;
      for (const w of wbcs) {
        const p = wbcPos(g, w);
        if (!p) continue;
        ctx.save(); ctx.globalAlpha *= clamp(S.inflame * 1.5, 0, 1);
        ctx.beginPath(); ctx.arc(p.x, p.y, ws, 0, 6.3); ctx.fillStyle = C.wbc; ctx.fill(); outline(2); ctx.stroke();
        ctx.fillStyle = "#e7dcff"; ctx.beginPath(); ctx.arc(p.x + ws * 0.4, p.y - ws * 0.4, ws * 0.25, 0, 6.3); ctx.fill();
        face(p.x, p.y + ws * 0.05, ws * 0.7, 0.1, false);
        outline(1.6); ctx.beginPath(); // 皱眉
        ctx.moveTo(p.x - ws * 0.45, p.y - ws * 0.42); ctx.lineTo(p.x - ws * 0.12, p.y - ws * 0.28);
        ctx.moveTo(p.x + ws * 0.45, p.y - ws * 0.42); ctx.lineTo(p.x + ws * 0.12, p.y - ws * 0.28); ctx.stroke();
        ctx.restore();
      }
      for (const b of bolts) {
        bolt(g.jx + Math.cos(b.a) * g.rx * b.r, g.jy + Math.sin(b.a) * g.ry * b.r, H * 0.03, clamp(b.life / 0.3, 0, 1) * S.inflame, C.pain);
      }
    }

    // ---- 最后一幕的小爱心 ----
    if (S.heal > 0.02) {
      for (const h of hearts) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), C.heartPink);
        ctx.restore();
      }
    }
    return { g, bite, lumpAt };
  }

  function hud() {
    const ua = Math.round(S.ua / 10) * 10;
    pill(14, 12, "血尿酸", `${ua} μmol/L`, ua > 420 ? "#f25f6b" : ua >= 360 ? "#e7a500" : C.mint, false);
    const pain = Math.round(clamp(S.inflame * 9, 0, 10));
    pill(W - 14, H - 12 - (Math.max(12, W / 60) * Anima.UI * 1.4 + 14), "疼痛", `${pain}/10`, pain >= 5 ? "#f25f6b" : pain > 0 ? "#e7a500" : C.mint, true);
  }

  function draw() {
    const { g, bite, lumpAt } = scene();
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const ca = 0.7;
    callout("cart", on("cart"), g.cxL + Math.cos(ca) * (g.hr - 6), g.jy + Math.sin(ca) * (g.hr - 6), g.jx - g.rx * 0.9, H * 0.97, "软骨：光滑的缓冲垫");
    callout("fluid", on("fluid"), g.jx + g.rx * 0.3, g.jy - g.ry * 0.78, g.jx + g.rx * 1.5, g.jy - g.ry * 0.55, "关节液：润滑剂");
    const nv = nVessel();
    const up = vUrate.slice(0, Math.max(1, nv)).find((p) => p.x > 0.3 && p.x < 0.5);
    const upX = up ? up.x * g.vEnd : 0, upY = up ? g.vmid + up.yn * (g.vh * 0.68) * 0.85 : 0;
    callout("urate", on("urate") && !!up, upX, upY, upX + W * 0.06, g.vy1 + H * 0.06, "尿酸（蓝色小圆点）");
    callout("urate2", on("urate2") && !!up, upX, upY, upX + W * 0.06, g.vy1 + H * 0.06, "血液里的尿酸越来越多");
    const fd = foods.find((f) => f.x > 0.08 && f.x < 0.36);
    callout("food", on("food") && !!fd && S.food > 0.5, fd ? fd.x * W : 0, g.vmid, fd ? fd.x * W + W * 0.05 : 0, g.vy1 + H * 0.06, "高嘌呤食物、酒和甜饮料");
    callout("kidney", on("kidney"), g.kx - g.ks * 0.3, g.vmid + g.ks * 0.7, g.kx - W * 0.1, g.vy1 + H * 0.12, "肾脏：把尿酸排出去");
    callout("kidney2", on("kidney2"), g.kx - g.ks * 0.3, g.vmid + g.ks * 0.7, g.kx - W * 0.1, g.vy1 + H * 0.12, "肾脏排得慢了");
    const nc = nCrystal();
    const cL = crystals.slice(0, nc).find((c) => c.type === "L" && c.a < -0.2);
    if (cL) { const p = crystalPos(g, cL); callout("crystal", on("crystal"), p.x, p.y, g.jx - g.rx * 1.2, g.jy - g.ry * 0.9, "针状的尿酸盐结晶"); }
    else callout("crystal", false, 0, 0, 0, 0, "");
    callout("cold", on("cold"), g.jx + g.rx * 0.2, g.jy + g.ry * 0.8, g.jx - g.rx * 1.3, g.jy + g.ry * 0.95, "脚趾温度低，更容易析出");
    const w0 = wbcPos(g, wbcs[1]);
    callout("wbc", on("wbc") && !!w0, w0 ? w0.x : 0, w0 ? w0.y : 0, g.jx - g.rx * 1.4, g.jy - g.ry * 0.95, "免疫细胞围攻结晶");
    callout("swell", on("swell"), g.jx + g.rx * 0.7, g.jy + g.ry * 0.7, g.jx - g.rx * 1.3, g.jy + g.ry * 0.95, "红、肿、热、痛");
    const t0 = lumpAt[1];
    callout("tophus", on("tophus") && !!t0, t0 ? t0[0] : 0, t0 ? t0[1] : 0, g.jx + g.rx * 1.5, g.jy + g.ry * 0.5, "痛风石");
    callout("erode", on("erode") && !!bite, bite ? bite.x : 0, bite ? bite.y : 0, g.jx - g.rx * 1.3, g.jy - g.ry * 0.95, "骨头和软骨被侵蚀");
    const d0 = drops.find((d) => d.x > 0.25 && d.x < 0.5);
    callout("water", on("water") && !!d0, d0 ? d0.x * g.vEnd : 0, d0 ? g.vmid + d0.yn * g.vh * 0.55 : 0, d0 ? d0.x * g.vEnd + W * 0.06 : 0, g.vy1 + H * 0.06, "多喝水，帮助排出尿酸");
    const cd = crystals.slice(0, nc).find((c) => c.type !== "P");
    if (cd) { const p = crystalPos(g, cd); callout("dissolve", on("dissolve"), p.x, p.y, g.jx - g.rx * 1.3, g.jy + g.ry * 0.95, "结晶慢慢变小、溶解"); }
    else callout("dissolve", false, 0, 0, 0, 0, "");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#5aaad8",
    titleCard: { lines: ["尿酸变成小针，", "关节为什么这么痛"], sub: "关节小剧场 · 7 幕" },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
