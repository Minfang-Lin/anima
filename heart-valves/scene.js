Anima.register("heart-valves", {
    "title": "心脏里的四扇门",
    "tag": "心脏小剧场",
    "headline": "心脏里的【门】坏了怎么办？",
    "lede": "心脏里有四扇只朝一个方向开的门，叫瓣膜。门打不开、关不严，心脏都会越干越累。看看瓣膜病是怎么回事、怎样发现，以及门坏了怎么修、怎么换。",
    "summary": "心脏四个瓣膜的作用，瓣膜狭窄和关闭不全，常见原因、症状和心脏超声，以及修瓣、换瓣和经导管换瓣。",
    "footer": "活动后气短、胸闷、晕厥，或听诊发现杂音，请到心内科或心外科就诊。",
    "canvasLabel": "卡通心脏四个腔室和瓣膜开关的动画",
    "disease": "心脏瓣膜病",
    "organs": ["heart"],
    "categories": ["cardio"],
    "color": "#1fa2bf"
  }, () => {
  const CH = [
    { title: "心脏里的四扇门", aS: 0, mR: 0, mS: 0, thick: 0, dil: 0, load: 0, snd: 1, names: 1, tav: 0, ring: 0, heal: 0, k1: 1, k2: 0, k3: 0, k4: 0, k5: 0, k6: 0,
      text: "心脏有四个房间：上面两个心房，下面两个心室。房间之间和心室出口，各有一扇门，就是瓣膜：右边是三尖瓣和肺动脉瓣，左边是二尖瓣和主动脉瓣。它们只朝一个方向开，让血液只往前走。心跳的“扑通”声，就是门关上的声音。",
      fact: "四扇门跟着心跳开开关关，一天大约 10 万次",
      labels: ["door", "sound"] },
    { title: "门打不开：瓣膜狭窄", aS: 1, mR: 0, mS: 0, thick: 1, dil: 0, load: 0.7, snd: 0, names: 0, tav: 0, ring: 0, heal: 0, k1: 0, k2: 1, k3: 0, k4: 0, k5: 0, k6: 0,
      pill: ["瓣口", "<1 cm²", "bad"],
      text: "瓣膜狭窄，就是门打不开。瓣叶变硬、长了钙化，或者边缘粘在一起，门缝越来越小。心脏只好使出更大的力气，才能把血挤过去。就像天天举重，心肌慢慢变厚、变僵，时间长了也会累坏。老年人最常见的是主动脉瓣狭窄。",
      fact: "正常主动脉瓣口约 3～4 cm²，小于 1 cm² 属于重度狭窄",
      labels: ["stuck", "thick"] },
    { title: "门关不严：血往回漏", aS: 0, mR: 1, mS: 0, thick: 0, dil: 1, load: 0.6, snd: 0, names: 0, tav: 0, ring: 0, heal: 0, k1: 0, k2: 0, k3: 1, k4: 0, k5: 0, k6: 0,
      pill: ["听诊", "有杂音", "warn"],
      text: "瓣膜关闭不全，就是门关不严。心脏一收缩，本该往前走的血，有一部分从门缝漏了回去，下一次还得重新搬运。心脏的活越干越多，心房、心室慢慢被撑大。医生用听诊器，常能在正常的“扑通”之间，听到“呼呼”的杂音。",
      fact: "听到心脏杂音不必慌，下一步通常是做心脏超声看看门",
      labels: ["leak", "big"] },
    { title: "门为什么会坏", aS: 0.7, mR: 0.5, mS: 0.5, thick: 0.5, dil: 0.4, load: 0.5, snd: 0, names: 0, tav: 0, ring: 0, heal: 0, k1: 0, k2: 0, k3: 0, k4: 1, k5: 0, k6: 0,
      text: "老年人最常见的是主动脉瓣退行性钙化，和年龄、高血压、高血脂有关，血脂那一集说过的 Lp(a) 偏高也和它有关。风湿性心脏病过去在我国常见，源于小时候链球菌感染后的风湿热，多伤二尖瓣。还有天生的二叶式主动脉瓣，和细菌引起的感染性心内膜炎。",
      fact: "约 1%～2% 的人天生是二叶式主动脉瓣，更容易提早钙化",
      labels: ["calc", "rheum"] },
    { title: "身体发出的信号", aS: 1, mR: 0.7, mS: 0.3, thick: 1, dil: 0.7, load: 1, snd: 0, names: 0, tav: 0, ring: 0, heal: 0, k1: 0, k2: 0, k3: 0, k4: 0, k5: 1, k6: 0,
      pill: ["首选", "心脏超声", "ok"],
      text: "瓣膜病早期常常没什么感觉，心脏在悄悄硬撑。等撑不住了，会出现活动后气短、乏力，胸闷胸痛，头晕甚至晕倒，脚踝浮肿。确诊最重要的检查是心脏超声，也叫超声心动图，它不疼、没有辐射，能看清门开得够不够、漏了多少。",
      fact: "重度瓣膜病一旦出现症状，要尽快请医生评估是否手术",
      labels: ["tired", "echo"] },
    { title: "门坏了，可以修、可以换", aS: 0, mR: 0, mS: 0, thick: 0.3, dil: 0.2, load: 0, snd: 0, names: 0, tav: 1, ring: 1, heal: 1, k1: 0, k2: 0, k3: 0, k4: 0, k5: 0, k6: 1,
      pill: ["瓣膜", "换新了", "ok"],
      text: "轻度瓣膜病，定期复查心脏超声就好。严重的可以修，也可以换：外科手术修补瓣膜，或换上机械瓣、生物瓣；年纪大的，还可以从大腿根的血管送进导管换瓣，叫 TAVR 或 TAVI，不用开胸。管好血压血脂，看好牙、防感染，心里的门能用得更久。",
      fact: "机械瓣很耐用但要终身抗凝；生物瓣一般不用终身抗凝，但会慢慢老化",
      labels: ["tav", "ring"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    muscle: "#ff9d9d", wallL: "#f5838c", wallR: "#f79aa2", rLumen: "#dfe0ff", lLumen: "#ffd9d9",
    rVessel: "#9ea8f0", lVessel: "#ff8a8a", rCell: "#8f8ff0", lCell: "#ff6b6b",
    leaf: "#fff3cf", leafCalc: "#d9cdb0", calc: "#f8f6ef", newLeaf: "#fffaf0",
    teal: "#1fa2bf", tealLt: "#c8f0f6", stent: "#8fa3b8", heartPink: "#ff9fb0",
    skin: "#ffe0cc", shirt: "#8fd0dc", screen: "#3d3448", strep: "#b59ae8", germ: "#8fd18a",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, dots, callout, pill } = Anima;
  const ROUND = Anima.ROUND;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { aS: 0, mR: 0, mS: 0, thick: 0, dil: 0, load: 0, snd: 1, names: 1, tav: 0, ring: 0, heal: 0, k1: 1, k2: 0, k3: 0, k4: 0, k5: 0, k6: 0 };

  // ---------- 心跳节律：收缩期（0～0.36）动脉瓣开；舒张期（0.42～0.97）房室瓣开 ----------
  let ph = 0;
  const sysOpen = (p) => (p < 0.36 ? Math.pow(Math.sin(p / 0.36 * Math.PI), 0.6) : 0);
  const avOpen = (p) => (p > 0.42 && p < 0.97 ? Math.pow(Math.sin((p - 0.42) / 0.55 * Math.PI), 0.6) : 0);
  const squeeze = (p) => (p < 0.36 ? Math.sin(p / 0.36 * Math.PI) : 0);

  // ---------- 几何：心脏四腔切面，单位 u，原点在心脏中心 ----------
  const G = () => {
    const cw = Math.min(W * 0.4, H * 0.5), chh = cw * 0.95;
    const u = Math.min(W * 0.44, H * 0.64);
    const hx = Math.max(u * 0.58 + 4, (W - cw - 14) * 0.42);
    const hy = H * 0.97 - u * 0.62;
    return { u, hx, hy, cw, chh };
  };
  let g = { u: 1, hx: 0, hy: 0, cw: 1, chh: 1 };
  const P = (x, y) => [g.hx + x * g.u, g.hy + y * g.u];

  // 血流路线：右心（腔静脉→右房→三尖瓣→右室→肺动脉瓣→肺），左心左右对称
  const RP = [[-0.95, -0.22], [-0.29, -0.22], [-0.29, -0.02], [-0.27, 0.17], [-0.1, 0.17], [-0.1, -0.42], [-0.1, -0.58], [-0.22, -0.66], [-0.8, -0.66]];
  const LP = RP.map((q) => [-q[0], q[1]]);
  function mkPath(pts, vi) {
    const L = [0];
    for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const T = L[L.length - 1];
    return { pts, L: L.map((v) => v / T), valves: vi.map((i) => L[i] / T) };
  }
  const paths = [mkPath(RP, [2, 5]), mkPath(LP, [2, 5])];
  function at(pa, s) {
    let i = 1;
    while (i < pa.L.length - 1 && pa.L[i] < s) i++;
    const a = pa.pts[i - 1], b = pa.pts[i];
    const t = (s - pa.L[i - 1]) / ((pa.L[i] - pa.L[i - 1]) || 1);
    const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1;
    return { x: a[0] + dx * t, y: a[1] + dy * t, nx: -dy / d, ny: dx / d };
  }
  const parts = [];
  for (let side = 0; side < 2; side++) for (let i = 0; i < 20; i++) {
    parts.push({ side, s: (i + rnd(i + side * 50) * 0.6) / 20, j: rnd(i * 3 + side * 70 + 5) - 0.5, q: rnd(i + side * 90 + 11) });
  }
  const hearts = Array.from({ length: 8 }, (_, i) => ({ x: rnd(i + 8000), y: rnd(i + 8100), ph: rnd(i + 8200) * 6 }));

  function update(dt) {
    ph = (ph + dt * 0.85 * (1 + 0.2 * S.load)) % 1;
    const opens = [avOpen(ph), sysOpen(ph)];
    for (const p of parts) {
      const pa = paths[p.side], sT = pa.valves[0], sA = pa.valves[1];
      const stA = p.side ? S.aS * (1 - S.tav) : 0, stM = p.side ? S.mS : 0;
      let v = dt * 0.16;
      if (p.s > sA - 0.07 && p.s < sA) v *= 1 - 0.7 * stA;
      if (p.s > sT - 0.07 && p.s < sT) v *= 1 - 0.6 * stM;
      if (p.s > sA && p.s < sA + 0.1) v *= 1 + 1.2 * stA;
      let ns = p.s + v;
      pa.valves.forEach((sv, k) => {
        const stop = sv - 0.012 - p.q * 0.035;
        if (p.s <= sv && ns > stop && opens[k] < 0.3) ns = Math.max(p.s, Math.min(ns, stop));
      });
      if (ns >= 1) ns -= 1;
      p.s = ns;
    }
  }

  // ---------- 小画笔 ----------
  function seg(a, b) { ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); }
  function box(r) { const a = P(r[0], r[2]); rrect(a[0], a[1], (r[1] - r[0]) * g.u, (r[3] - r[2]) * g.u, Math.min(0.07 * g.u, (r[1] - r[0]) * g.u / 2, (r[3] - r[2]) * g.u / 2)); }
  function tube(pts, w, wall, lumen) {
    ctx.lineJoin = "round"; ctx.lineCap = "butt";
    for (const [lw, col] of [[w * g.u + 5, C.ink], [w * g.u, wall], [(w - 0.06) * g.u, lumen]]) {
      ctx.strokeStyle = col; ctx.lineWidth = lw;
      ctx.beginPath();
      pts.forEach((q, i) => { const a = P(q[0], q[1]); if (i) ctx.lineTo(a[0], a[1]); else ctx.moveTo(a[0], a[1]); });
      ctx.stroke();
    }
    ctx.lineCap = "round";
  }
  function heartOuter() {
    const d = S.dil, xr = 0.54 + 0.06 * d, yb = 0.62 + 0.04 * d;
    const m = (x, y) => P(x, y);
    ctx.beginPath();
    let a = m(-0.3, -0.44); ctx.moveTo(a[0], a[1]);
    a = m(0.3, -0.44); ctx.lineTo(a[0], a[1]);
    let c1 = m(xr, -0.44), b = m(xr, -0.18); ctx.quadraticCurveTo(c1[0], c1[1], b[0], b[1]);
    c1 = m(xr + 0.04, 0.3); let c2 = m(0.42, yb - 0.1); b = m(0.06, yb); ctx.bezierCurveTo(c1[0], c1[1], c2[0], c2[1], b[0], b[1]);
    c1 = m(-0.36, yb - 0.12); c2 = m(-0.56, 0.26); b = m(-0.52, -0.18); ctx.bezierCurveTo(c1[0], c1[1], c2[0], c2[1], b[0], b[1]);
    c1 = m(-0.52, -0.44); b = m(-0.3, -0.44); ctx.quadraticCurveTo(c1[0], c1[1], b[0], b[1]);
    ctx.closePath();
  }
  // 房间：[x0, x1, y0, y1]
  function rooms() {
    const d = S.dil, t = S.thick, sq = squeeze(ph);
    const RA = [-0.46, -0.2, -0.36, -0.06], LA = [0.2, 0.46 + 0.05 * d, -0.36 - 0.03 * d, -0.06];
    const RV = [-0.38 + 0.02 * sq, -0.05, 0.02, 0.3 - 0.03 * sq];
    const LV = [0.05 + 0.035 * t, 0.4 + 0.06 * d - 0.05 * t - 0.025 * sq, 0.02, 0.33 + 0.06 * d - 0.05 * t - 0.03 * sq];
    return {
      R: [RA, [-0.38, -0.2, -0.1, 0.06], RV, [-0.17, -0.03, -0.47, 0.08], [-0.58, -0.4, -0.29, -0.15]],
      L: [LA, [0.2, 0.38, -0.1, 0.06], LV, [0.03, 0.17, -0.47, 0.08], [0.4, 0.58 + 0.06 * d, -0.29, -0.15]],
      RA, LA, RV, LV,
    };
  }

  // 瓣膜：两片瓣叶，铰链在两边墙上；dir 为血流方向（1 向下，-1 向上）
  function valve(cx, cy, w, dir, open, o) {
    const st = o.st || 0, rg = o.rg || 0, th = o.thick || 0, calc = o.calc || 0;
    const L = w / 2 * (1 - 0.24 * rg);
    const a = open * 1.25 * (1 - 0.75 * st) - (1 - open) * 0.4 * rg;
    const lw = Math.max(2.5, g.u * 0.024) * (1 + 0.6 * th);
    const col = o.fresh ? C.newLeaf : mix(C.leaf, C.leafCalc, calc);
    for (const sgn of [1, -1]) {
      const hx0 = cx - sgn * w / 2;
      const A = P(hx0, cy), B = P(hx0 + sgn * L * Math.cos(a), cy + dir * L * Math.sin(a));
      ctx.lineCap = "round";
      ctx.strokeStyle = C.ink; ctx.lineWidth = lw + 4; seg(A, B);
      ctx.strokeStyle = col; ctx.lineWidth = lw; seg(A, B);
      if (calc > 0.05) {
        for (const f of [0.45, 0.82]) {
          ctx.beginPath(); ctx.arc(A[0] + (B[0] - A[0]) * f, A[1] + (B[1] - A[1]) * f - lw * 0.2, lw * 0.32 * calc + 1.5, 0, 6.3);
          ctx.fillStyle = C.calc; ctx.fill(); outline(1.4); ctx.stroke();
        }
      }
    }
  }
  function rbc(x, y, r, col) {
    ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.85, 0, 0, 6.3); ctx.fillStyle = col; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.beginPath(); ctx.ellipse(x - r * 0.35, y - r * 0.35, r * 0.25, r * 0.15, -0.5, 0, 6.3); ctx.fill();
  }
  function badge(n, x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fillStyle = C.teal; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = C.paper; ctx.font = `${r * 1.35}px ${ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(String(n), x, y + r * 0.08);
    ctx.textAlign = "left";
  }
  function label(t, x, y, fs, col) {
    ctx.font = `${fs}px ${ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillStyle = col || C.ink; ctx.fillText(t, x, y);
    ctx.textAlign = "left";
  }

  // ---------- 场景 ----------
  function scene() {
    g = G();
    const u = g.u, sq = squeeze(ph), aS = S.aS * (1 - S.tav);
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(24, C.dot);

    // 心肌
    heartOuter(); ctx.fillStyle = C.muscle; ctx.fill(); outline(3); ctx.stroke();
    const R = rooms();
    // 心室壁：左室壁更厚，心肌肥厚时再变厚
    const lvw = 0.045 + 0.06 * S.thick;
    ctx.fillStyle = C.wallL; box([R.LV[0] - 0.02, R.LV[1] + lvw, R.LV[2], R.LV[3] + lvw]); ctx.fill();
    ctx.fillStyle = C.wallR; box([R.RV[0] - 0.03, R.RV[1], R.RV[2], R.RV[3] + 0.03]); ctx.fill();
    // 房间：先描边，再填色，内部的边线就被盖住了
    for (const [list, col] of [[R.R, C.rLumen], [R.L, C.lLumen]]) {
      ctx.strokeStyle = C.ink; ctx.lineWidth = 5;
      for (const r of list) { box(r); ctx.stroke(); }
      ctx.fillStyle = col;
      for (const r of list) { box(r); ctx.fill(); }
    }
    // 血管：腔静脉、肺静脉进来；肺动脉、主动脉出去
    const dx = 0.06 * S.dil;
    tube([[-1.2, -0.22], [-0.5, -0.22]], 0.2, C.rVessel, C.rLumen);
    tube([[1.2, -0.22], [0.5 + dx, -0.22]], 0.2, C.lVessel, C.lLumen);
    tube([[-0.1, -0.47], [-0.1, -0.58], [-0.22, -0.66], [-0.85, -0.66]], 0.2, C.rVessel, C.rLumen);
    tube([[0.1, -0.47], [0.1, -0.58], [0.22, -0.66], [0.85, -0.66]], 0.2, C.lVessel, C.lLumen);

    // 红细胞
    const rr = Math.max(3.5, u * 0.022);
    for (const p of parts) {
      const pa = paths[p.side], o = at(pa, p.s);
      let lat = p.j * 0.09;
      if (p.side) lat *= 1 - 0.85 * aS * Math.exp(-Math.pow((p.s - pa.valves[1]) / 0.035, 2));
      const q = P(o.x + o.nx * lat, o.y + o.ny * lat);
      const a = clamp(Math.min(p.s / 0.04, (1 - p.s) / 0.04), 0, 1);
      if (a < 0.05) continue;
      ctx.save(); ctx.globalAlpha *= a;
      rbc(q[0], q[1], rr, p.side ? C.lCell : C.rCell);
      ctx.restore();
    }

    // 反流：收缩期从二尖瓣门缝喷回左心房
    if (S.mR > 0.03 && ph < 0.4) {
      const env = Math.pow(Math.sin(ph / 0.4 * Math.PI), 0.5) * S.mR;
      const a0 = P(0.26, -0.02), a1 = P(0.32, -0.02), b0 = P(0.2, -0.3), b1 = P(0.42, -0.3);
      ctx.fillStyle = `rgba(255,107,107,${(0.3 * env).toFixed(3)})`;
      ctx.beginPath(); ctx.moveTo(a0[0], a0[1]); ctx.lineTo(b0[0], b0[1]); ctx.lineTo(b1[0], b1[1]); ctx.lineTo(a1[0], a1[1]); ctx.closePath(); ctx.fill();
      for (let k = 0; k < 6; k++) {
        const pr = (ph / 0.4 * 1.3 + k / 6) % 1;
        const q = P(0.29 + (rnd(k + 300) - 0.5) * 0.16 * pr, -0.03 - 0.27 * pr);
        ctx.save(); ctx.globalAlpha *= env * Math.sin(Math.PI * pr);
        rbc(q[0], q[1], rr * 0.9, C.lCell);
        ctx.restore();
      }
    }
    // 狭窄：挤过窄缝的血流又细又急
    if (aS > 0.1 && sq > 0.05) {
      ctx.save(); ctx.globalAlpha *= aS * sq;
      ctx.strokeStyle = C.paper; ctx.lineWidth = Math.max(2, u * 0.01);
      for (let k = 0; k < 3; k++) {
        const t = (time * 2.2 + k / 3) % 1;
        const x = 0.1 + (k - 1) * 0.028, y0 = -0.47 - t * 0.12;
        seg(P(x, y0), P(x, y0 - 0.05));
      }
      ctx.restore();
    }

    // 经导管送进来的新瓣膜：支架撑在主动脉根部
    if (S.tav > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.tav;
      const x0 = 0.035, x1 = 0.165, y0 = -0.52, y1 = -0.36, n = 3;
      ctx.lineCap = "round";
      for (const [lw, col] of [[Math.max(1.5, u * 0.006) + 2.5, C.ink], [Math.max(1.5, u * 0.006), C.stent]]) {
        ctx.strokeStyle = col; ctx.lineWidth = lw;
        ctx.beginPath();
        for (let k = 0; k < n; k++) {
          const ya = y0 + (y1 - y0) * k / n, yb = y0 + (y1 - y0) * (k + 1) / n;
          let a = P(x0, ya), b = P(x1, yb); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
          a = P(x1, ya); b = P(x0, yb); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
        }
        let a = P(x0, y0), b = P(x0, y1); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
        a = P(x1, y0); b = P(x1, y1); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
        ctx.stroke();
      }
      ctx.restore();
    }

    // 四扇门
    const oAV = avOpen(ph), oSL = sysOpen(ph);
    valve(-0.29, -0.02, 0.18, 1, oAV, {});
    valve(-0.1, -0.42, 0.14, -1, oSL, {});
    valve(0.29, -0.02, 0.18, 1, oAV, { st: S.mS * 0.6, rg: S.mR, thick: S.mS * 1.2, calc: S.mS * 0.7 });
    valve(0.1, -0.42, 0.14, -1, oSL, { st: aS, thick: aS, calc: aS, fresh: S.tav > 0.5 });

    // 修好的二尖瓣：一圈成形环
    if (S.ring > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.ring;
      const c = P(0.29, -0.02);
      ctx.beginPath(); ctx.ellipse(c[0], c[1], 0.1 * u, 0.03 * u, 0, 0, 6.3);
      ctx.strokeStyle = C.ink; ctx.lineWidth = u * 0.022 + 4; ctx.stroke();
      ctx.strokeStyle = C.teal; ctx.lineWidth = u * 0.022; ctx.stroke();
      ctx.restore();
    }
    // 第一幕：房间名字和门的编号
    if (S.names > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.names;
      const fs = Math.max(10, u * 0.05);
      const cen = (r) => P((r[0] + r[1]) / 2, (r[2] + r[3]) / 2);
      let c = cen(R.RA); label("右心房", c[0], c[1] - u * 0.07, fs, "#5a5aa8");
      c = cen(R.LA); label("左心房", c[0], c[1] - u * 0.07, fs, "#b8465a");
      c = cen(R.RV); label("右心室", c[0] - u * 0.06, c[1] + u * 0.06, fs, "#5a5aa8");
      c = cen(R.LV); label("左心室", c[0] + u * 0.06, c[1] + u * 0.06, fs, "#b8465a");
      const br = Math.max(8, u * 0.042);
      let q = P(-0.53, 0.04); badge(1, q[0], q[1], br);
      q = P(-0.25, -0.52); badge(2, q[0], q[1], br);
      q = P(0.55, 0.04); badge(3, q[0], q[1], br);
      q = P(0.25, -0.52); badge(4, q[0], q[1], br);
      ctx.restore();
    }

    // 心脏的小脸
    const fc = P(0.03, 0.47), fsz = u * 0.1;
    face(fc[0], fc[1], fsz, clamp(0.9 - 1.9 * S.load, -1, 1));
    if (S.load > 0.45) sweat(fc[0] + fsz * 0.9, fc[1] - fsz * 0.6 + ((time * 0.7) % 1) * fsz * 0.3, fsz * 0.45);

    // “扑通”：房室瓣关门是“扑”，动脉瓣关门是“通”
    if (S.snd > 0.02) {
      const fs = Math.max(16, u * 0.1);
      const say = (t, x, y, k) => {
        if (k <= 0) return;
        ctx.save(); ctx.globalAlpha *= S.snd * k;
        ctx.font = `${fs * (1.25 - 0.25 * k)}px ${ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.lineWidth = 5; ctx.strokeStyle = C.paper; ctx.lineJoin = "round"; ctx.strokeText(t, x, y);
        ctx.fillStyle = C.teal; ctx.fillText(t, x, y);
        ctx.restore();
      };
      let q = P(0.64, 0.2);
      say("扑！", Math.min(q[0], W - g.cw - 14 - fs), q[1], ph < 0.25 ? 1 - ph / 0.25 : 0);
      q = P(0, -0.8);
      say("通！", q[0], q[1], ph > 0.36 && ph < 0.61 ? 1 - (ph - 0.36) / 0.25 : 0);
    }

    const card = drawCard();

    if (S.heal > 0.02) {
      for (const h of hearts) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), C.heartPink);
        ctx.restore();
      }
    }
    return { R, card, fc };
  }

  // ---------- 右下角的小卡片 ----------
  function drawCard() {
    const cw = g.cw, ch = g.chh, x = W - cw - 14, y = H - ch - 14;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, cw, ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(x, y, cw, ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const b = { x, y, cw, ch };
    const out = { x, y, cw, ch };
    const cards = [[S.k1, card1], [S.k2, card2], [S.k3, card3], [S.k4, card4], [S.k5, card5], [S.k6, card6]];
    for (const [a, fn] of cards) {
      if (a < 0.02) continue;
      ctx.save(); ctx.globalAlpha *= a;
      const r = fn(b);
      ctx.restore();
      if (r && a > 0.5) Object.assign(out, r);
    }
    return out;
  }

  // 1. 四扇门的名字
  function card1(b) {
    const { x, y, cw, ch } = b;
    label("四扇单向门", x + cw / 2, y + ch * 0.13, cw / 10);
    const names = ["三尖瓣", "肺动脉瓣", "二尖瓣", "主动脉瓣"];
    names.forEach((n, i) => {
      const ry = y + ch * (0.32 + i * 0.165);
      badge(i + 1, x + cw * 0.14, ry, cw * 0.055);
      ctx.font = `${cw / 11}px ${ROUND}`; ctx.fillStyle = C.ink; ctx.textBaseline = "middle"; ctx.textAlign = "left";
      ctx.fillText(n, x + cw * 0.25, ry + 1);
      const side = i < 2;
      rrect(x + cw * 0.72, ry - cw * 0.05, cw * 0.2, cw * 0.1, cw * 0.05);
      ctx.fillStyle = side ? C.rLumen : C.lLumen; ctx.fill(); outline(1.5); ctx.stroke();
      label(side ? "右心" : "左心", x + cw * 0.82, ry + 1, cw / 15, side ? "#5a5aa8" : "#b8465a");
    });
    return null;
  }

  // 2. 从上往下看主动脉瓣：三片瓣叶，钙化后开口变小
  function card2(b) {
    const { x, y, cw, ch } = b;
    const aS = S.aS * (1 - S.tav);
    label(aS > 0.5 ? "门缝变小了" : "主动脉瓣", x + cw / 2, y + ch * 0.12, cw / 10.5);
    const cx = x + cw / 2, cy = y + ch * 0.5, r = cw * 0.27;
    ctx.beginPath(); ctx.arc(cx, cy, r * 1.16, 0, 6.3); ctx.fillStyle = C.lVessel; ctx.fill(); outline(2.5); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, 6.3); ctx.fillStyle = mix(C.leaf, C.leafCalc, aS); ctx.fill(); outline(2); ctx.stroke();
    const op = sysOpen(ph) * (1 - 0.8 * aS) + 0.02, ro = r * 0.9 * op;
    const ang = (k) => -Math.PI / 2 + k * Math.PI * 2 / 3;
    ctx.beginPath();
    for (let k = 0; k < 3; k++) {
      const a0 = ang(k), a1 = ang(k + 1), am = (a0 + a1) / 2;
      if (!k) ctx.moveTo(cx + Math.cos(a0) * ro, cy + Math.sin(a0) * ro);
      ctx.quadraticCurveTo(cx + Math.cos(am) * ro * 0.95, cy + Math.sin(am) * ro * 0.95, cx + Math.cos(a1) * ro, cy + Math.sin(a1) * ro);
    }
    ctx.closePath(); ctx.fillStyle = "#e8566a"; ctx.fill(); outline(2); ctx.stroke();
    outline(2);
    for (let k = 0; k < 3; k++) {
      const a = ang(k);
      seg([cx + Math.cos(a) * ro, cy + Math.sin(a) * ro], [cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
    if (aS > 0.05) {
      for (let k = 0; k < 3; k++) {
        const am = ang(k) + Math.PI / 3;
        for (const f of [0.5, 0.78]) {
          ctx.beginPath(); ctx.arc(cx + Math.cos(am + (f - 0.6) * 0.8) * r * f, cy + Math.sin(am + (f - 0.6) * 0.8) * r * f, r * 0.11 * aS + 1, 0, 6.3);
          ctx.fillStyle = C.calc; ctx.fill(); outline(1.5); ctx.stroke();
        }
      }
    }
    label("俯视主动脉瓣开口", x + cw / 2, y + ch * 0.89, cw / 12.5, C.soft);
    return { valve: { x: cx, y: cy - r } };
  }

  // 3. 听诊：正常“扑通”之间多了“呼呼”的杂音
  function card3(b) {
    const { x, y, cw, ch } = b;
    label("听诊器里的声音", x + cw / 2, y + ch * 0.12, cw / 11);
    // 听诊器
    const px = x + cw * 0.22, py = y + ch * 0.38;
    ctx.lineCap = "round";
    for (const [lw, col] of [[cw * 0.035 + 4, C.ink], [cw * 0.035, "#6f7a8a"]]) {
      ctx.strokeStyle = col; ctx.lineWidth = lw;
      ctx.beginPath(); ctx.moveTo(px + cw * 0.06, py); ctx.bezierCurveTo(x + cw * 0.5, py + ch * 0.06, x + cw * 0.5, y + ch * 0.22, x + cw * 0.64, y + ch * 0.3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + cw * 0.64, y + ch * 0.3); ctx.lineTo(x + cw * 0.78, y + ch * 0.24); ctx.moveTo(x + cw * 0.64, y + ch * 0.3); ctx.lineTo(x + cw * 0.8, y + ch * 0.36); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(px, py, cw * 0.075, 0, 6.3); ctx.fillStyle = C.teal; ctx.fill(); outline(2.5); ctx.stroke();
    ctx.beginPath(); ctx.arc(px, py, cw * 0.04, 0, 6.3); ctx.fillStyle = C.tealLt; ctx.fill(); outline(1.5); ctx.stroke();
    // 心音波形：一次心跳
    const x0 = x + cw * 0.08, x1 = x + cw * 0.92, yb = y + ch * 0.66, amp = ch * 0.11;
    const f = (t) => {
      const sp = (c, w) => Math.exp(-Math.pow((t - c) / w, 2));
      let v = Math.sin(t * 260) * (sp(0.08, 0.02) + 0.8 * sp(0.46, 0.02));
      if (t > 0.11 && t < 0.42) v += S.mR * 0.45 * Math.sin(t * 900 + Math.sin(t * 77) * 3) * Math.sin((t - 0.11) / 0.31 * Math.PI);
      return v;
    };
    outline(2);
    ctx.beginPath();
    for (let i = 0; i <= 160; i++) { const t = i / 160; const xx = x0 + (x1 - x0) * t; if (i) ctx.lineTo(xx, yb - f(t) * amp); else ctx.moveTo(xx, yb - f(t) * amp); }
    ctx.stroke();
    // 播放指针
    const hx = x0 + (x1 - x0) * ((ph + 0.08) % 1);
    ctx.strokeStyle = C.teal; ctx.lineWidth = 2; seg([hx, yb - amp * 1.2], [hx, yb + amp * 1.2]);
    const fs = cw / 11;
    label("扑", x0 + (x1 - x0) * 0.08, yb + amp * 1.55, fs);
    label("通", x0 + (x1 - x0) * 0.46, yb + amp * 1.55, fs);
    if (S.mR > 0.3) label("呼～", x0 + (x1 - x0) * 0.27, yb + amp * 1.55, fs, "#e8566a");
    return null;
  }

  // 4. 门为什么会坏
  function card4(b) {
    const { x, y, cw, ch } = b;
    label("门为什么会坏", x + cw / 2, y + ch * 0.12, cw / 10.5);
    const items = ["年龄、钙化", "风湿热", "天生二叶瓣", "心内膜炎"];
    const hi = Math.floor(time / 2.4) % 4;
    items.forEach((t, i) => {
      const ry = y + ch * (0.3 + i * 0.175), s = ch * 0.065;
      if (i === hi) { ctx.fillStyle = C.tealLt; rrect(x + cw * 0.05, ry - ch * 0.075, cw * 0.9, ch * 0.15, ch * 0.075); ctx.fill(); }
      const ix = x + cw * 0.16, bob = Math.sin(time * 2 + i) * s * 0.08;
      if (i === 0) {
        for (const [dx, dy, k] of [[-0.7, 0.3, 0.8], [0.1, -0.2, 1], [0.8, 0.35, 0.7]]) {
          const cx = ix + dx * s, cy = ry + dy * s + bob, r = s * 0.55 * k;
          ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx + r * 0.75, cy); ctx.lineTo(cx, cy + r); ctx.lineTo(cx - r * 0.75, cy); ctx.closePath();
          ctx.fillStyle = C.calc; ctx.fill(); outline(1.6); ctx.stroke();
        }
      } else if (i === 1) {
        for (let k = 0; k < 4; k++) {
          ctx.beginPath(); ctx.arc(ix + (k - 1.5) * s * 0.55, ry + Math.sin(k * 1.4 + time * 2) * s * 0.25, s * 0.3, 0, 6.3);
          ctx.fillStyle = C.strep; ctx.fill(); outline(1.5); ctx.stroke();
        }
      } else if (i === 2) {
        ctx.beginPath(); ctx.arc(ix, ry + bob, s * 0.95, 0, 6.3); ctx.fillStyle = C.leaf; ctx.fill(); outline(1.8); ctx.stroke();
        seg([ix - s * 0.95, ry + bob], [ix + s * 0.95, ry + bob]);
      } else {
        const cx = ix, cy = ry + bob;
        outline(1.5);
        for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4 + time * 0.5; seg([cx + Math.cos(a) * s * 0.7, cy + Math.sin(a) * s * 0.7], [cx + Math.cos(a) * s * 1.05, cy + Math.sin(a) * s * 1.05]); }
        ctx.beginPath(); ctx.arc(cx, cy, s * 0.78, 0, 6.3); ctx.fillStyle = C.germ; ctx.fill(); outline(1.6); ctx.stroke();
        face(cx, cy, s * 0.75, -0.6, false);
      }
      ctx.font = `${cw / 11.5}px ${ROUND}`; ctx.fillStyle = C.ink; ctx.textBaseline = "middle"; ctx.textAlign = "left";
      ctx.fillText(t, x + cw * 0.32, ry + 1);
    });
    return null;
  }

  // 5. 身体的信号 + 心脏超声
  function card5(b) {
    const { x, y, cw, ch } = b;
    const u = ch / 10;
    // 小人：喘气、出汗、头晕
    const px = x + cw * 0.27, top = y + u * 1.4;
    ctx.fillStyle = C.shirt; rrect(px - u * 1.5, top + u * 3.1, u * 3, u * 3.6, u * 1.1); ctx.fill(); outline(2.2); ctx.stroke();
    const hx = px + Math.sin(time * 1.6) * u * 0.08, hy = top + u * 1.8;
    ctx.beginPath(); ctx.arc(hx, hy, u * 1.3, 0, 6.3); ctx.fillStyle = C.skin; ctx.fill(); outline(2.2); ctx.stroke();
    ctx.fillStyle = "#e8e2dc"; ctx.beginPath(); ctx.arc(hx, hy - u * 0.5, u * 1.3, Math.PI * 1.05, Math.PI * 1.95); ctx.fill(); outline(2); ctx.stroke();
    face(hx, hy + u * 0.2, u * 0.8, -0.8);
    sweat(hx + u * 1.05, hy - u * 0.6 + ((time * 0.8) % 1) * u * 0.35, u * 0.45);
    // 头晕的小星星
    for (let k = 0; k < 3; k++) {
      const a = time * 2 + k * 2.1, sx = hx + Math.cos(a) * u * 1.1, sy = hy - u * 1.7 + Math.sin(a) * u * 0.3;
      ctx.fillStyle = C.sugar; ctx.beginPath();
      for (let m = 0; m < 10; m++) { const r = m % 2 ? u * 0.13 : u * 0.3, t = m * Math.PI / 5 - Math.PI / 2; ctx.lineTo(sx + Math.cos(t) * r, sy + Math.sin(t) * r); }
      ctx.closePath(); ctx.fill(); outline(1.2); ctx.stroke();
    }
    // 喘气
    outline(2);
    for (let k = 0; k < 2; k++) {
      const t = (time * 1.2 + k * 0.5) % 1, bx = hx - u * 1.5 - t * u * 0.8, by = hy + u * 0.35 + k * u * 0.4;
      ctx.save(); ctx.globalAlpha *= 1 - t;
      ctx.beginPath(); ctx.moveTo(bx, by); ctx.quadraticCurveTo(bx - u * 0.25, by - u * 0.25, bx - u * 0.5, by); ctx.stroke();
      ctx.restore();
    }
    label("气短 乏力", px, y + ch - u * 0.8, cw / 12);
    // 超声仪
    const mx = x + cw * 0.56, my = y + u * 1.4, mw = cw * 0.38, mh = u * 3.8;
    ctx.fillStyle = "#cfd8e3"; rrect(mx - u * 0.2, my - u * 0.2, mw + u * 0.4, mh + u * 0.4, u * 0.5); ctx.fill(); outline(2.2); ctx.stroke();
    ctx.fillStyle = C.screen; rrect(mx, my, mw, mh, u * 0.3); ctx.fill();
    const fx = mx + mw / 2, fy = my + u * 0.35;
    ctx.fillStyle = "#6c6478"; ctx.beginPath(); ctx.moveTo(fx, fy); ctx.arc(fx, fy, mh * 0.85, Math.PI * 0.3, Math.PI * 0.7); ctx.closePath(); ctx.fill();
    const k = 1 + 0.08 * squeeze(ph), hs = u * 0.75 * k;
    ctx.save(); ctx.translate(fx, fy + mh * 0.5);
    ctx.strokeStyle = "#f2f0f5"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(0, 0, hs, hs * 1.15, 0, 0, 6.3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -hs * 1.1); ctx.lineTo(0, hs * 1.1); ctx.moveTo(-hs, -hs * 0.05); ctx.lineTo(hs, -hs * 0.05); ctx.stroke();
    ctx.restore();
    // 探头
    const qx = mx + mw * 0.5, qy = my + mh + u * 1.6;
    ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(qx, qy - u * 0.5); ctx.quadraticCurveTo(qx + u * 1.2, qy - u * 1.2, mx + mw, my + mh + u * 0.2); ctx.stroke();
    ctx.fillStyle = C.teal; rrect(qx - u * 0.35, qy - u * 0.6, u * 0.7, u * 1.2, u * 0.3); ctx.fill(); outline(2); ctx.stroke();
    label("心脏超声", mx + mw / 2, y + ch - u * 0.8, cw / 12);
    return { monitor: { x: mx + mw * 0.5, y: my } };
  }

  // 6. 经导管换瓣：从大腿根送进导管，不用开胸
  function card6(b) {
    const { x, y, cw, ch } = b;
    const u = ch / 10;
    const px = x + cw * 0.3, top = y + u * 0.5;
    ctx.fillStyle = C.skin;
    ctx.beginPath(); ctx.arc(px, top + u * 1.1, u * 0.9, 0, 6.3); ctx.fill(); outline(2); ctx.stroke();
    face(px, top + u * 1.2, u * 0.58, 0.9);
    ctx.fillStyle = C.shirt; rrect(px - u * 1.2, top + u * 2.1, u * 2.4, u * 3, u * 0.9); ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = "#b9c7e8";
    rrect(px - u * 1.0, top + u * 4.9, u * 0.9, u * 2.6, u * 0.45); ctx.fill(); outline(2); ctx.stroke();
    rrect(px + u * 0.1, top + u * 4.9, u * 0.9, u * 2.6, u * 0.45); ctx.fill(); outline(2); ctx.stroke();
    heart(px + u * 0.25, top + u * 3.0, u * 0.5, C.heartPink);
    // 导管：从大腿根沿血管往上走到心脏
    const gx = px + u * 0.55, gy = top + u * 5.4;
    ctx.strokeStyle = C.teal; ctx.lineWidth = 3; ctx.setLineDash([6, 5]); ctx.lineDashOffset = -time * 20;
    ctx.beginPath(); ctx.moveTo(gx, gy); ctx.quadraticCurveTo(px + u * 0.95, top + u * 4.1, px + u * 0.35, top + u * 3.2); ctx.stroke();
    ctx.setLineDash([]); ctx.lineDashOffset = 0;
    ctx.beginPath(); ctx.arc(gx, gy, u * 0.22, 0, 6.3); ctx.fillStyle = C.teal; ctx.fill(); outline(1.5); ctx.stroke();
    // 支架瓣膜放大图
    const vx = x + cw * 0.74, vy = y + ch * 0.38, vw = cw * 0.2, vh = ch * 0.34;
    ctx.fillStyle = "rgba(143,163,184,0.18)"; rrect(vx - vw / 2, vy - vh / 2, vw, vh, u * 0.3); ctx.fill();
    for (const [lw, col] of [[4, C.ink], [2, C.stent]]) {
      ctx.strokeStyle = col; ctx.lineWidth = lw;
      ctx.beginPath();
      for (let k = 0; k < 4; k++) {
        const ya = vy - vh / 2 + vh * k / 4, yb = ya + vh / 4;
        ctx.moveTo(vx - vw / 2, ya); ctx.lineTo(vx + vw / 2, yb); ctx.moveTo(vx + vw / 2, ya); ctx.lineTo(vx - vw / 2, yb);
      }
      ctx.moveTo(vx - vw / 2, vy - vh / 2); ctx.lineTo(vx - vw / 2, vy + vh / 2);
      ctx.moveTo(vx + vw / 2, vy - vh / 2); ctx.lineTo(vx + vw / 2, vy + vh / 2);
      ctx.stroke();
    }
    const op = sysOpen(ph);
    for (const sgn of [1, -1]) {
      const a = [vx - sgn * vw / 2, vy + vh * 0.1], L = vw / 2, an = op * 1.2;
      const bb = [a[0] + sgn * L * Math.cos(an), a[1] - L * Math.sin(an)];
      ctx.strokeStyle = C.ink; ctx.lineWidth = 7; seg(a, bb);
      ctx.strokeStyle = C.newLeaf; ctx.lineWidth = 4; seg(a, bb);
    }
    label("新瓣膜", vx, vy + vh / 2 + u * 0.8, cw / 13);
    label("经导管换瓣，不开胸", x + cw / 2, y + ch - u * 0.55, cw / 12.5, C.soft);
    return null;
  }

  function hud() {
    const l = S.load;
    const word = l < 0.2 ? "轻松" : l < 0.55 ? "加重" : l < 0.85 ? "吃力" : "很累";
    pill(14, 12, "心脏负担", word, l < 0.2 ? C.mint : l < 0.55 ? "#e7a500" : l < 0.85 ? "#f08a3c" : "#f25f6b", false);
    const p = CH[cur].pill;
    if (p) pill(W - 14, 12, p[0], p[1], p[2] === "ok" ? C.mint : p[2] === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const r = scene(), u = g.u;
    const L = CH[cur].labels, on = (k) => L.indexOf(k) >= 0;
    const UI = Anima.UI, fs = Math.max(12, W / 56) * UI, bh = fs + 14;
    const ptop = Math.max(12, W / 60) * UI * 1.4 + 32;
    const yA = ptop + bh + 2, yB = yA + bh + 10, lx = W * 0.76;
    const mit = P(0.33, -0.02), aor = P(0.13, -0.42);

    callout("door", on("door"), mit[0], mit[1], lx, yB, "瓣膜：只朝前开的门");
    callout("sound", on("sound"), aor[0], aor[1], lx, yA, "门关上：扑通扑通");

    callout("stuck", on("stuck"), aor[0], aor[1], lx, yA, "瓣叶钙化，门打不开");
    const lvw = P(r.R.LV[1] + 0.03 + 0.03 * S.thick, 0.2);
    callout("thick", on("thick"), lvw[0], lvw[1], lx, yB, "心肌越练越厚");

    const jet = P(0.3, -0.2);
    callout("leak", on("leak"), jet[0], jet[1], lx, yA, "关不严，血往回漏");
    const la = P(r.R.LA[1], -0.3);
    callout("big", on("big"), la[0], la[1], lx, yB, "心房心室被撑大");

    callout("calc", on("calc"), aor[0], aor[1], lx, yA, "主动脉瓣：钙化最常见");
    callout("rheum", on("rheum"), mit[0], mit[1], lx, yB, "风湿热多伤二尖瓣");

    callout("tired", on("tired"), r.fc[0] + u * 0.08, r.fc[1], lx, yA, "心脏硬撑，累坏了");
    const mo = r.card.monitor;
    callout("echo", on("echo") && !!mo, mo ? mo.x : 0, mo ? mo.y : 0, lx, yB, "超声看门最清楚");

    callout("tav", on("tav"), aor[0], aor[1], lx, yA, "新瓣膜撑在老位置");
    callout("ring", on("ring"), mit[0], mit[1], lx, yB, "修补二尖瓣");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#1fa2bf",
    titleCard: { lines: ["心脏里的门", "坏了怎么办？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
