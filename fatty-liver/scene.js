(() => {
  const CH = [
    { title: "健康的肝脏", fat: 0.05, sugar: 0.2, trucks: 1, lean: 0, inflame: 0, fibro: 0, heal: 0,
      text: "肝脏是身体的化工厂，由一个个肝细胞组成。它们把吃进来的糖和脂肪加工、储存，再用“小货车”把多余的脂肪运出去。健康的肝细胞里只有很少一点脂肪。",
      fact: "正常肝脏里的脂肪不到 5%",
      labels: ["cell", "truck"] },
    { title: "肝里的油从哪里来", fat: 0.35, sugar: 1, trucks: 1, lean: 0, inflame: 0, fibro: 0, heal: 0,
      text: "肝里的脂肪有三个来源：肚子里的脂肪分解后流进肝脏，吃进去的油脂，还有吃多了的糖。特别是含糖饮料里的果糖，会在肝脏里直接变成脂肪。进来的多、运出去的少，油就在肝细胞里堆起来了。",
      fact: "果糖几乎全部在肝脏里代谢，常喝甜饮料是脂肪肝的重要推手",
      labels: ["soda", "bellyfat", "droplet"] },
    { title: "瘦人为什么也会得", fat: 0.55, sugar: 1, trucks: 0.35, lean: 1, inflame: 0, fibro: 0, heal: 0,
      text: "体重正常不等于肝脏没事。经常喝甜饮料、久坐不动、肌肉少、脂肪藏在肚子里，都会让瘦人得脂肪肝。过度节食、蛋白质吃不够，运脂肪的小货车反而变少，油更运不出去。还有些人天生就更容易在肝里囤油。",
      fact: "约五分之一的脂肪肝患者体重正常，被称为“瘦人脂肪肝”",
      labels: ["lean", "fewtruck"] },
    { title: "油滴塞满了肝细胞", fat: 1, sugar: 0.8, trucks: 0.5, lean: 0, inflame: 0, fibro: 0, heal: 0,
      text: "油越积越多，小油滴汇成大油滴，把肝细胞塞得满满的，细胞核都被挤到了角落。肝脏里的脂肪超过 5%，就是脂肪肝。它最常在体检做 B 超时被发现，这时大多数人没有任何不舒服。",
      fact: "我国成年人脂肪肝的患病率接近三成",
      labels: ["big"] },
    { title: "发炎了：脂肪性肝炎", fat: 1, sugar: 0.8, trucks: 0.5, lean: 0, inflame: 1, fibro: 0.1, heal: 0,
      text: "塞满油的肝细胞压力越来越大，开始肿胀、受伤。免疫细胞赶来，引起炎症，这就是脂肪性肝炎。抽血时转氨酶可能会升高，但很多人依然没有感觉。",
      fact: "转氨酶正常，也不能完全排除脂肪性肝炎",
      labels: ["balloon", "immune"] },
    { title: "长出疤痕，肝脏变硬", fat: 0.8, sugar: 0.8, trucks: 0.5, lean: 0, inflame: 0.5, fibro: 1, heal: 0,
      text: "炎症反复发生，星状细胞就像补墙一样织出疤痕纤维，肝脏越来越硬，这就是肝纤维化。继续发展会变成肝硬化，甚至肝癌。肝脏里面没有痛觉神经，不痛不代表没事。",
      fact: "肝脏弹性检查（FibroScan）能无创地测出肝脏有多硬",
      labels: ["scar", "stellate"] },
    { title: "脂肪肝可以逆转", fat: 0.12, sugar: 0.2, trucks: 1, lean: 0, inflame: 0, fibro: 0.3, heal: 1,
      text: "好消息是，脂肪肝可以逆转，早期的纤维化也有机会减轻。少喝含糖饮料，少吃精米白面和油炸食物，吃够蛋白质，每周运动 150 分钟以上。超重的人减掉体重的 5% 到 10%，瘦人减掉 3% 到 5% 或者多运动，肝里的油就会明显减少。",
      fact: "建议每年体检查肝功能和 B 超，必要时做肝脏弹性检查",
      labels: ["shrink"] },
  ];
  const DUR = 11; // 每幕秒数

  const C = Object.assign(Anima.C, {
    vessel: "#ffb3b3", lumen: "#fff4ec", sinus: "#f9c4c4",
    cell: "#ffc4a3", cellPale: "#ffe6d6", cellScar: "#e9a88f", nucleus: "#f59a7c",
    oil: "#fff0a0", oilEdge: "#e8c24a", truck: "#8fd3b6", scar: "#a9826f", stellate: "#b89cf0",
    immune: "#ffffff", soda: "#ff8a8a", heartPink: "#ff9fb0",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { fat: 0.05, sugar: 0.2, trucks: 1, lean: 0, inflame: 0, fibro: 0, heal: 0 };

  // ---------- 几何 ----------
  const V = () => ({ y0: H * 0.105, y1: H * 0.285, mid: H * 0.195, h: H * 0.09 });
  const P = () => H * 0.215;                 // 肝细胞间距
  const gridTop = () => H * 0.315;
  function cellAt(r, c) {
    const p = P();
    const x = (c + 0.5 + (r % 2) * 0.5) * p * 1.04 - p * 0.35;
    const y = gridTop() + (r + 0.5) * p;
    const id = r * 100 + c;
    const ballooned = rnd(id + 11) < 0.45;
    const bal = S.inflame * (ballooned ? 1 : 0.15);
    const f = clamp(S.fat * (0.55 + rnd(id + 7) * 0.9), 0, 1);
    const h = p * 0.45 * (1 + 0.14 * bal - 0.12 * S.fibro);
    return { x, y, h, id, f, bal, ballooned, rot: (rnd(id + 3) - 0.5) * 0.25 };
  }
  const cols = () => Math.ceil(W / (P() * 1.04)) + 1;

  // ---------- 粒子 ----------
  const rbcs = Array.from({ length: 6 }, (_, i) => ({ x: i / 6 + rnd(i) * 0.05, yn: rnd(i + 20) - 0.5 }));
  const cubes = Array.from({ length: 22 }, (_, i) => ({ x: rnd(i + 40), yn: rnd(i + 70) * 1.6 - 0.8, ph: rnd(i + 90) * 6 }));
  const fats = Array.from({ length: 10 }, (_, i) => ({ x: rnd(i + 120), yn: rnd(i + 140) * 1.4 - 0.7 }));
  const sodas = Array.from({ length: 2 }, (_, i) => ({ x: i * 0.5 + 0.1 }));
  const trucks = Array.from({ length: 4 }, (_, i) => ({ x: i / 4 + 0.05 }));
  const immunes = Array.from({ length: 5 }, (_, i) => ({ k: i, ph: rnd(i + 170) * 6 }));
  const hearts = Array.from({ length: 8 }, (_, i) => ({ x: rnd(i + 8000), y: rnd(i + 8100), ph: rnd(i + 8200) * 6 }));

  function update(dt) {
    const sp = dt * 0.07 * (1 + 0.2 * Math.max(0, Math.sin(time * Math.PI * 2)));
    for (const a of [rbcs, cubes, fats, sodas]) for (const p of a) { p.x += sp; if (p.x > 1.05) p.x -= 1.1; }
    for (const t of trucks) { t.x += sp * 0.8; if (t.x > 1.05) t.x -= 1.1; }
  }

  // ---------- 小图标 ----------
  function sugarCube(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(rot) * 0.4);
    rrect(-s, -s, s * 2, s * 2, s * 0.5); ctx.fillStyle = C.sugar; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.beginPath(); ctx.arc(-s * 0.35, -s * 0.35, s * 0.28, 0, 6.3); ctx.fill();
    ctx.restore();
  }
  function oil(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fillStyle = C.oil; ctx.fill();
    ctx.strokeStyle = C.oilEdge; ctx.lineWidth = Math.max(1.2, r * 0.12); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.beginPath(); ctx.arc(x - r * 0.35, y - r * 0.35, r * 0.25, 0, 6.3); ctx.fill();
  }
  function soda(x, y, s) {
    ctx.save(); ctx.translate(x, y);
    ctx.beginPath(); ctx.moveTo(-s * 0.45, -s * 0.45); ctx.lineTo(s * 0.45, -s * 0.45); ctx.lineTo(s * 0.32, s * 0.6); ctx.lineTo(-s * 0.32, s * 0.6); ctx.closePath();
    ctx.fillStyle = C.soda; ctx.fill(); outline(1.8); ctx.stroke();
    outline(2); ctx.beginPath(); ctx.moveTo(s * 0.1, -s * 0.45); ctx.lineTo(s * 0.3, -s * 0.9); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.fillRect(-s * 0.3, -s * 0.1, s * 0.6, s * 0.14);
    ctx.restore();
  }
  function truck(x, y, s) {
    ctx.save(); ctx.translate(x, y);
    rrect(-s, -s * 0.45, s * 1.35, s * 0.8, s * 0.2); ctx.fillStyle = C.truck; ctx.fill(); outline(1.8); ctx.stroke();
    rrect(s * 0.35, -s * 0.2, s * 0.6, s * 0.55, s * 0.15); ctx.fillStyle = C.truck; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.fillStyle = "#e6fbff"; rrect(s * 0.55, -s * 0.1, s * 0.3, s * 0.22, s * 0.06); ctx.fill();
    oil(-s * 0.35, -s * 0.05, s * 0.3);
    for (const wx of [-s * 0.6, s * 0.6]) { ctx.beginPath(); ctx.arc(wx, s * 0.4, s * 0.18, 0, 6.3); ctx.fillStyle = C.ink; ctx.fill(); }
    ctx.restore();
  }
  function star(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(time * 0.3);
    ctx.beginPath();
    for (let i = 0; i < 10; i++) { const r = i % 2 ? s * 0.45 : s; const t = i * Math.PI / 5; ctx[i ? "lineTo" : "moveTo"](Math.cos(t) * r, Math.sin(t) * r); }
    ctx.closePath(); ctx.fillStyle = C.stellate; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.rotate(-time * 0.3); face(0, 0, s * 0.55, 0.2, false);
    ctx.restore();
  }

  // ---------- 场景 ----------
  function scene() {
    const v = V(), p = P();
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(20, C.dot);

    // 肝血窦（肝细胞之间的小血流）
    ctx.fillStyle = C.sinus; ctx.fillRect(0, gridTop() - 6, W, H);
    // 炎症光晕
    if (S.inflame > 0.02) {
      const pulse = 0.8 + 0.2 * Math.sin(time * 3.5);
      const rg = ctx.createRadialGradient(W * 0.5, H * 0.65, H * 0.05, W * 0.5, H * 0.65, W * 0.6);
      rg.addColorStop(0, `rgba(255,110,110,${0.45 * S.inflame * pulse})`); rg.addColorStop(1, "rgba(255,110,110,0)");
      ctx.fillStyle = rg; ctx.fillRect(0, gridTop() - 6, W, H);
    }

    // ---- 门静脉：血液带着糖、油和甜饮料流进肝脏 ----
    rrect(-20, v.y0, W + 40, v.y1 - v.y0, 0); ctx.fillStyle = C.vessel; ctx.fill();
    outline(3); ctx.beginPath(); ctx.moveTo(0, v.y0); ctx.lineTo(W, v.y0); ctx.moveTo(0, v.y1); ctx.lineTo(W, v.y1); ctx.stroke();
    const ins = (v.y1 - v.y0) * 0.15;
    ctx.fillStyle = mix(C.lumen, "#fff3c8", S.sugar * 0.7); ctx.fillRect(0, v.y0 + ins, W, v.y1 - v.y0 - ins * 2);
    const lh = v.h - ins;
    for (const r of rbcs) {
      const x = r.x * W, y = v.mid + r.yn * lh * 0.8, rr = lh * 0.42;
      ctx.beginPath(); ctx.ellipse(x, y, rr, rr * 0.8, 0, 0, 6.3); ctx.fillStyle = C.coral; ctx.fill(); outline(1.8); ctx.stroke();
      face(x, y + rr * 0.05, rr * 0.7, 0.8);
    }
    const nc = Math.round(clamp(S.sugar, 0, 1) * cubes.length);
    for (let i = 0; i < nc; i++) { const c = cubes[i]; sugarCube(c.x * W, v.mid + c.yn * lh * 0.85, Math.max(3.5, H * 0.011), time + c.ph); }
    const nf = Math.round(clamp(S.sugar, 0, 1) * fats.length);
    for (let i = 0; i < nf; i++) { const f = fats[i]; oil(f.x * W, v.mid + f.yn * lh * 0.8, Math.max(4, H * 0.014)); }
    if (S.sugar > 0.5) {
      ctx.save(); ctx.globalAlpha *= clamp((S.sugar - 0.5) * 2, 0, 1);
      for (const s of sodas) soda(s.x * W, v.mid, lh * 0.75);
      ctx.restore();
    }
    const nt = Math.max(1, Math.round(clamp(S.trucks, 0, 1) * trucks.length));
    for (let i = 0; i < nt; i++) truck(trucks[i].x * W, v.mid + lh * 0.3, lh * 0.55);

    // ---- 肝细胞 ----
    const nC = cols();
    for (let r = 0; r < 3; r++) for (let c = -1; c < nC; c++) drawCell(cellAt(r, c));

    // ---- 疤痕纤维 + 星状细胞 ----
    if (S.fibro > 0.02) {
      ctx.strokeStyle = C.scar; ctx.lineCap = "round";
      ctx.lineWidth = 2 + S.fibro * 5;
      for (let r = 0; r < 3; r++) for (let c = -1; c < nC; c++) {
        const a = cellAt(r, c);
        if (rnd(a.id + 400) < S.fibro) wavy(a.x + p * 0.52, a.y - p * 0.42, a.x + p * 0.52, a.y + p * 0.42, a.id);
        if (r < 2 && rnd(a.id + 500) < S.fibro) wavy(a.x - p * 0.3, a.y + p * 0.5, a.x + p * 0.55, a.y + p * 0.5, a.id + 1);
      }
      for (let i = 0; i < 4; i++) {
        const a = cellAt(i % 2, 1 + i * 2);
        star(a.x + p * 0.52, a.y + p * 0.5, p * 0.2, clamp(S.fibro * 1.6, 0, 1));
      }
    }

    // ---- 免疫细胞 ----
    if (S.inflame > 0.03) {
      const is = p * 0.14;
      for (const m of immunes) {
        const q = immunePos(m);
        ctx.save(); ctx.globalAlpha *= clamp(S.inflame * 1.5, 0, 1);
        ctx.beginPath(); ctx.arc(q.x, q.y, is, 0, 6.3); ctx.fillStyle = C.immune; ctx.fill(); outline(2); ctx.stroke();
        ctx.fillStyle = "#e7dcff"; ctx.beginPath(); ctx.arc(q.x + is * 0.4, q.y - is * 0.4, is * 0.25, 0, 6.3); ctx.fill();
        face(q.x, q.y + is * 0.05, is * 0.7, 0.1, false);
        outline(1.5); ctx.beginPath();
        ctx.moveTo(q.x - is * 0.45, q.y - is * 0.42); ctx.lineTo(q.x - is * 0.12, q.y - is * 0.28);
        ctx.moveTo(q.x + is * 0.45, q.y - is * 0.42); ctx.lineTo(q.x + is * 0.12, q.y - is * 0.28); ctx.stroke();
        ctx.restore();
      }
    }

    // ---- 瘦人小卡片：看着瘦，肚子里有油 ----
    if (S.lean > 0.02) drawLeanCard();

    // ---- 最后一幕的小爱心 ----
    if (S.heal > 0.02) {
      for (const h of hearts) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), C.heartPink);
        ctx.restore();
      }
    }
  }

  function wavy(x1, y1, x2, y2, seed) {
    const n = 8, dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy), nx = -dy / len, ny = dx / len;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const t = i / n, w = Math.sin(t * Math.PI * 3 + seed) * 3;
      ctx[i ? "lineTo" : "moveTo"](x1 + dx * t + nx * w, y1 + dy * t + ny * w);
    }
    ctx.stroke();
  }

  function drawCell(a) {
    const { x, y, h, f, bal } = a;
    ctx.save(); ctx.translate(x, y); ctx.rotate(a.rot);
    rrect(-h, -h * 0.92, h * 2, h * 1.84, h * 0.45);
    // 肿胀的细胞发白，纤维化时其余细胞颜色变暗
    ctx.fillStyle = bal > 0.3 ? mix(C.cell, C.cellPale, bal * 0.8) : mix(C.cell, C.cellScar, S.fibro * 0.5 * (1 - S.heal)); ctx.fill(); outline(2); ctx.stroke();
    // 小油滴 → 大油滴
    const big = h * 0.72 * clamp((f - 0.3) / 0.7, 0, 1);
    const smallA = clamp(1 - (f - 0.45) / 0.3, 0, 1);
    if (f > 0.03 && smallA > 0) {
      ctx.save(); ctx.globalAlpha *= smallA;
      const n = Math.min(6, Math.ceil(f * 12));
      for (let k = 0; k < n; k++) {
        const ax = (rnd(a.id * 7 + k) - 0.5) * h * 1.3, ay = (rnd(a.id * 9 + k) - 0.5) * h * 1.2;
        if (Math.hypot(ax, ay) < h * 0.4) continue;
        oil(ax, ay, h * (0.09 + 0.06 * rnd(a.id + k)));
      }
      ctx.restore();
    }
    if (big > 1) oil(h * 0.12, -h * 0.05, big);
    // 细胞核（小脸）：被大油滴挤到角落
    const push = big / (h * 0.72);
    const fx = -h * 0.45 * push, fy = h * 0.4 * push;
    const ns = h * 0.36 * (1 - 0.3 * push);
    ctx.beginPath(); ctx.ellipse(fx, fy, ns * (1 - 0.25 * push), ns, 0, 0, 6.3); ctx.fillStyle = C.nucleus; ctx.fill(); outline(1.5); ctx.stroke();
    const mood = clamp(1 - f * 0.9 - bal * 1.3 - S.fibro * 0.7 + S.heal * 0.9, -1, 1);
    face(fx, fy + ns * 0.05, ns * 0.9, mood, true);
    if (mood < -0.3) sweat(fx + ns * 0.9, fy - ns * 1.1, ns * 0.6);
    ctx.restore();
  }

  function immunePos(m) {
    const a = cellAt(1 + (m.k % 2), 1 + m.k * 2);
    const r = a.h * 1.08, t = time * 0.6 + m.ph;
    return { x: a.x + Math.cos(t) * r, y: a.y + Math.sin(t) * r * 0.85 };
  }

  function leanCard() {
    const cw = H * 0.24, ch = H * 0.36;
    return { x: W - cw - 14, y: H - ch - 14, cw, ch };
  }
  function drawLeanCard() {
    const k = leanCard(), a = S.lean;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.fillStyle = C.ink; rrect(k.x + 5, k.y + 5, k.cw, k.ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(k.x, k.y, k.cw, k.ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const cx = k.x + k.cw / 2, top = k.y + k.ch * 0.1, u = k.ch;
    // 细细的小人
    outline(3.5);
    ctx.beginPath();
    ctx.moveTo(cx - u * 0.05, top + u * 0.5); ctx.lineTo(cx - u * 0.07, top + u * 0.68);
    ctx.moveTo(cx + u * 0.05, top + u * 0.5); ctx.lineTo(cx + u * 0.07, top + u * 0.68);
    ctx.moveTo(cx - u * 0.08, top + u * 0.24); ctx.lineTo(cx - u * 0.17, top + u * 0.4);
    ctx.moveTo(cx + u * 0.08, top + u * 0.24); ctx.lineTo(cx + u * 0.17, top + u * 0.4);
    ctx.stroke();
    rrect(cx - u * 0.09, top + u * 0.18, u * 0.18, u * 0.34, u * 0.08); ctx.fillStyle = "#9fd8ff"; ctx.fill(); outline(2); ctx.stroke();
    // 肚子里的脂肪 + 肝
    oil(cx - u * 0.02, top + u * 0.4, u * 0.045 * (0.6 + 0.4 * Math.sin(time * 2) ** 2));
    ctx.beginPath(); ctx.ellipse(cx + u * 0.035, top + u * 0.29, u * 0.04, u * 0.028, 0, 0, 6.3); ctx.fillStyle = "#f59a7c"; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, top + u * 0.1, u * 0.075, 0, 6.3); ctx.fillStyle = "#ffe0cc"; ctx.fill(); outline(2); ctx.stroke();
    face(cx, top + u * 0.11, u * 0.06, 0.6);
    const fs = Math.min(Math.max(11, W / 70) * Anima.UI, k.cw / 9.5);
    ctx.fillStyle = C.ink; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.font = `${fs}px ${Anima.ROUND}`; ctx.fillText("BMI 21 · 体重正常", cx, k.y + k.ch - fs * 0.9);
    ctx.textAlign = "left";
    ctx.restore();
    return { bx: cx - u * 0.02, by: top + u * 0.4 };
  }

  function hud() {
    const fatPct = 1 + S.fat * 29;
    pill(14, 12, "肝脏脂肪", `${fatPct.toFixed(0)}%`, fatPct < 5 ? C.mint : fatPct < 15 ? "#e7a500" : "#f25f6b", false);
    const kpa = 4.5 + S.fibro * 13 + S.inflame * 1.5;
    pill(W - 14, 12, "肝脏硬度", `${kpa.toFixed(1)} kPa`, kpa < 7 ? C.mint : kpa < 12.5 ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    scene();
    const v = V(), p = P();
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const c0 = cellAt(0, 2);
    callout("cell", on("cell"), c0.x, c0.y, c0.x + W * 0.14, H * 0.5, "肝细胞：身体的化工厂");
    const nt = Math.max(1, Math.round(clamp(S.trucks, 0, 1) * trucks.length));
    const tk = trucks.slice(0, nt).find((t) => t.x > 0.2 && t.x < 0.75);
    const tx = tk ? tk.x * W : 0, ty = v.mid + v.h * 0.3;
    callout("truck", on("truck") && !!tk, tx, ty, tx + W * 0.1, gridTop() + p * 0.3, "运脂肪出肝的小货车");
    callout("fewtruck", on("fewtruck") && !!tk, tx, ty, tx - W * 0.05, gridTop() + p * 0.3, "蛋白质不够，小货车变少");
    const sd = sodas.find((s) => s.x > 0.1 && s.x < 0.6);
    callout("soda", on("soda") && !!sd && S.sugar > 0.6, sd ? sd.x * W : 0, v.mid, sd ? sd.x * W + W * 0.06 : 0, gridTop() + p * 0.25, "甜饮料里的果糖");
    const nf = Math.round(clamp(S.sugar, 0, 1) * fats.length);
    const fd = fats.slice(0, nf).find((f) => f.x > 0.62 && f.x < 0.85);
    callout("bellyfat", on("bellyfat") && !!fd, fd ? fd.x * W : 0, fd ? v.mid + fd.yn * v.h * 0.68 : 0, fd ? fd.x * W - W * 0.02 : 0, gridTop() + p * 1.2, "肚子里的脂肪流进来");
    const cd = cellAt(2, 2);
    callout("droplet", on("droplet"), cd.x + cd.h * 0.5, cd.y - cd.h * 0.4, cd.x + W * 0.2, H * 0.97, "肝细胞里的小油滴");
    if (S.lean > 0.02) {
      const k = leanCard();
      const u = k.ch, bx = k.x + k.cw / 2 - u * 0.02, by = k.y + k.ch * 0.1 + u * 0.4;
      callout("lean", on("lean"), bx, by, k.x - W * 0.13, k.y + k.ch * 0.45, "看着瘦，肚子里藏着油");
    } else callout("lean", false, 0, 0, 0, 0, "");
    const cb = cellAt(1, 3);
    callout("big", on("big"), cb.x + cb.h * 0.2, cb.y - cb.h * 0.1, cb.x + W * 0.16, gridTop() + p * 0.25, "大油滴把细胞核挤到角落");
    let bc = null;
    for (let c = 2; c < cols() && !bc; c++) { const a = cellAt(1, c); if (a.ballooned && a.x > W * 0.3) bc = a; }
    callout("balloon", on("balloon") && !!bc, bc ? bc.x : 0, bc ? bc.y + bc.h * 0.6 : 0, bc ? bc.x + W * 0.12 : 0, H * 0.97, "肝细胞肿胀、受伤");
    const im = immunePos(immunes[2]);
    callout("immune", on("immune"), im.x, im.y, im.x - W * 0.12, gridTop() + p * 0.2, "免疫细胞引起炎症");
    const sc = cellAt(1, 2);
    callout("scar", on("scar"), sc.x + p * 0.52, sc.y, sc.x + W * 0.16, H * 0.97, "疤痕纤维：肝脏变硬");
    const st = cellAt(1, 3);
    callout("stellate", on("stellate"), st.x + p * 0.52, st.y + p * 0.5, st.x + W * 0.06, gridTop() + p * 0.2, "星状细胞在“补墙”");
    const sh = cellAt(1, 3);
    callout("shrink", on("shrink"), sh.x, sh.y, sh.x + W * 0.16, gridTop() + p * 0.25, "油滴变小，细胞又笑了");
    hud();
  }

  Anima.start({
    chapters: CH, state: S, dur: DUR, accent: "#f0945a",
    titleCard: { lines: ["瘦人也会得", "脂肪肝？"], sub: "肝脏小剧场 · 7 幕" },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  });
})();
