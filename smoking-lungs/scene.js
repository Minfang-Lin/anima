Anima.register("smoking-lungs", {
    "title": "肺里的烟",
    "tag": "肺部小剧场",
    "headline": "一支烟，在肺里【做了】什么？",
    "lede": "气道里有一群勤快的纤毛“扫地工”，深处是一串串葡萄似的肺泡。烟一口口吸进去，扫地工被熏倒，肺泡被破坏，细胞的基因也会受伤。好在戒烟以后，身体会慢慢修复。",
    "summary": "吸烟怎样伤害肺：纤毛倒伏和吸烟咳、慢阻肺和肺气肿、肺癌风险，以及戒烟后身体的修复。",
    "footer": "想戒烟可以到医院的戒烟门诊寻求帮助；咳嗽气短请到呼吸科就诊。",
    "canvasLabel": "卡通气道纤毛和肺泡的动画",
    "disease": "慢阻肺、肺癌",
    "organs": ["lungs"],
    "categories": ["respiratory"],
    "color": "#3fb3a4"
  }, () => {
  // cilia：左上角“纤毛”状态；age：右上角“烟龄”
  const CH = [
    { title: "健康的肺", smoke: 0, flat: 0, mucus: 0, tar: 0, emph: 0, tumor: 0, heal: 0, co: 0,
      cilia: ["摆动中", "ok"], pill: ["烟龄", "不吸烟", "ok"],
      text: "气道内壁住着一排纤毛细胞，头顶长满细细的纤毛，像一群勤快的扫地工，有节奏地摆动，把粘在黏液上的灰尘和细菌一点点往外扫。再往深处，是一串串葡萄似的肺泡，在这里把氧气交给路过的红细胞。",
      fact: "成人两肺约有 3 亿到 5 亿个肺泡",
      labels: ["cilia", "alv", "o2"] },
    { title: "一口烟里有什么", smoke: 1, flat: 0.12, mucus: 0.2, tar: 0.35, emph: 0, tumor: 0, heal: 0, co: 1,
      cilia: ["摆动中", "ok"], pill: ["烟龄", "第 1 支", "warn"],
      text: "点上一支烟，吸进去的烟雾里有七千多种化学物质，其中几十种能致癌。还有一氧化碳，它抢着和红细胞结合，把氧气挤走；焦油则像黏糊糊的柏油，一层层粘在气道和肺泡上，颜色越积越深。",
      fact: "烟草烟雾里有七千多种化学物质，其中几十种是致癌物",
      labels: ["co", "tar"] },
    { title: "扫地工被熏倒了", smoke: 1, flat: 1, mucus: 1, tar: 0.7, emph: 0, tumor: 0, heal: 0, co: 0.7,
      cilia: ["倒下了", "bad"], pill: ["烟龄", "10 年", "warn"],
      text: "烟雾天天熏，纤毛先是摆得越来越慢，后来干脆倒伏、不动了。气道为了自保，分泌的黏液越来越多、越来越黏，扫不出去的痰只好靠咳嗽往外咳。这就是很多吸烟的人早上起来总要咳几声、吐口痰的原因。",
      fact: "咳嗽咳痰老不好，是气道在报警，不是“正常现象”",
      labels: ["flat", "mucus"] },
    { title: "肺泡被破坏了", smoke: 0.6, flat: 1, mucus: 0.9, tar: 0.8, emph: 1, tumor: 0, heal: 0, co: 0.7,
      cilia: ["倒下了", "bad"], pill: ["烟龄", "20 年", "bad"],
      text: "烟雾还会引来炎症，一点点破坏肺泡之间的薄壁。几个小肺泡破成一个大泡，能交换氧气的面积变小了；肺也像用久的气球，弹性变差，气吸得进、呼不干净，走几步就喘。这就是慢阻肺，肺气肿是它的一种表现。",
      fact: "肺功能检查是诊断慢阻肺的关键，40 岁以上吸烟者建议定期查",
      labels: ["bulla", "lessO2"] },
    { title: "细胞的基因受伤了", smoke: 0.8, flat: 1, mucus: 0.9, tar: 0.9, emph: 1, tumor: 1, heal: 0, co: 0.7,
      cilia: ["倒下了", "bad"], pill: ["烟龄", "30 年", "bad"],
      text: "烟里的致癌物会损伤细胞的基因。大多数损伤能被修好，可年复一年，个别细胞修不好，就可能不受控制地越长越多，变成肿瘤。吸烟者得肺癌的风险是不吸烟者的十几到二十几倍。二手烟里同样有致癌物，也会伤害家人。",
      fact: "吸烟者患肺癌的风险约为不吸烟者的十几到二十几倍",
      labels: ["tumor", "second"] },
    { title: "戒烟后，身体在修复", smoke: 0, flat: 0.3, mucus: 0.3, tar: 0.25, emph: 1, tumor: 0, heal: 1, co: 0,
      cilia: ["恢复中", "ok"], pill: ["烟龄", "已戒烟", "ok"],
      text: "身体一直在等你戒烟。戒烟 20 分钟，心率就开始下降；几天后，血里的一氧化碳恢复正常；几周到几个月，咳嗽减少，纤毛慢慢重新摆动起来。已经破掉的肺泡回不来了，但戒烟能让它不再继续变坏。",
      fact: "戒烟约 10 年，肺癌风险大约降低一半；什么时候戒都不晚",
      labels: ["recover", "bullaStay"] },
  ];
  const DUR = 12;

  const C = Object.assign({}, Anima.C, {
    lumen: "#fff6f2", cell: "#ffd3da", cellDeep: "#ffc0cb", cilium: "#ff8fa6", ciliumDead: "#b7a6ac",
    mucus: "#fff0a8", mucusTar: "#c9a46a", dust: "#b8a49a", tar: "#6b4a35", bug: "#9fd88a",
    alv: "#ffc4cf", alvWall: "#ffb0bf", cap: "#ff9a9a", rbc: "#f0525e", o2: "#6ab4ff", coGas: "#9a9aa5",
    smoke: "140,135,145", tumor: "#9d8fb0", tumorHi: "#b8adc8", heartPink: "#ff9fb0", accent: "#3fb3a4",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, bolt, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { smoke: 0, flat: 0, mucus: 0, tar: 0, emph: 0, tumor: 0, heal: 0, co: 0 };

  // ---------- 几何 ----------
  const G = () => {
    const yT = H * 0.39, yB = H * 0.51, L = H * 0.075;       // 纤毛细胞的上下边、纤毛长度
    const mTop = yT - L * 0.55 - H * (0.035 + 0.05 * S.mucus); // 黏液层上沿
    const r = H * 0.05, cy = H * 0.73, capY = H * 0.94;
    const k = Math.max(3, Math.round(W / (H * 0.5)));
    return { yT, yB, L, mTop, r, cy, capY, k };
  };
  // 一串肺泡：7 颗葡萄
  const OFF = [[0, -2], [-1.75, -1], [1.75, -1], [0, 0], [-1.75, 1], [1.75, 1], [0, 2]];
  const MERGE = [0, 1, 2, 3];
  const hurt = (j, k) => j === 1 || (k >= 4 && j === 3);

  // ---------- 粒子 ----------
  const dust = Array.from({ length: 14 }, (_, i) => ({ x: rnd(i + 30), y: rnd(i + 60), kind: i % 5 === 0 ? "bug" : "dust" }));
  const wisps = Array.from({ length: 6 }, (_, i) => ({ x: rnd(i + 300), y: rnd(i + 330), ph: rnd(i + 360) * 6 }));
  const rbcs = Array.from({ length: 12 }, (_, i) => ({ x: i / 12 + rnd(i + 400) * 0.04, co: rnd(i + 430) }));
  const hearts = Array.from({ length: 6 }, (_, i) => ({ x: 0.06 + i * 0.17 + rnd(i + 900) * 0.05, y: rnd(i + 950) }));
  let sweep = 0;

  function update(dt) {
    sweep += dt * 0.05 * (1 - S.flat * 0.95);
    for (const p of rbcs) { p.x += dt * 0.06; if (p.x > 1.05) p.x -= 1.1; }
  }

  // ---------- 画笔 ----------
  function cilia(g, x0, w, seed, sick) {
    const f = S.flat;
    for (let i = 0; i < 5; i++) {
      const x = x0 + w * (0.15 + i * 0.175);
      const beat = Math.sin(time * 5.5 - x * 0.035);
      const ang = -Math.PI / 2 + (1 - f) * beat * 0.5 - f * 1.25 - (sick ? 0.2 : 0);
      const L = g.L * (1 - 0.05 * f);
      const bend = (1 - f) * beat * 0.35 + f * -0.6;
      const tx = x + Math.cos(ang) * L, ty = g.yT + Math.sin(ang) * L;
      const mx = x + Math.cos(ang - bend) * L * 0.55, my = g.yT + Math.sin(ang - bend) * L * 0.55;
      ctx.strokeStyle = C.ink; ctx.lineWidth = Math.max(3, H * 0.011) + 2.5; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(x, g.yT); ctx.quadraticCurveTo(mx, my, tx, ty); ctx.stroke();
      ctx.strokeStyle = mix(C.cilium, C.ciliumDead, f); ctx.lineWidth = Math.max(3, H * 0.011);
      ctx.beginPath(); ctx.moveTo(x, g.yT); ctx.quadraticCurveTo(mx, my, tx, ty); ctx.stroke();
      if (seed === 0 && i === 2) ciliaTip = { x: tx, y: ty };
    }
  }
  let ciliaTip = null;

  function airway(g) {
    // 气道腔和烟雾
    ctx.fillStyle = C.lumen; ctx.fillRect(0, 0, W, g.yT);
    dots(10, "#ffe6e0", 70);
    if (S.smoke > 0.02) {
      for (const [i, p] of wisps.entries()) {
        const x = ((p.x + time * 0.05) % 1.3 - 0.15) * W, y = H * (0.13 + p.y * 0.12);
        ctx.save(); ctx.globalAlpha *= S.smoke * 0.55;
        ctx.strokeStyle = `rgb(${C.smoke})`; ctx.lineWidth = H * 0.018; ctx.lineCap = "round";
        ctx.beginPath();
        for (let t = 0; t <= 1; t += 0.1) ctx.lineTo(x + t * H * 0.3, y + Math.sin(t * 7 + time * 2 + p.ph) * H * 0.02);
        ctx.stroke();
        ctx.restore();
        // 烟里的小颗粒
        for (let k = 0; k < 3; k++) {
          const px = x + (k + 0.5) * H * 0.1, py = y + Math.sin(k * 2 + time * 2 + i) * H * 0.03;
          ctx.save(); ctx.globalAlpha *= S.smoke * 0.8;
          ctx.beginPath(); ctx.arc(px, py, H * 0.008, 0, 6.3); ctx.fillStyle = "#8a8490"; ctx.fill();
          ctx.restore();
        }
      }
    }
    // 黏液层
    const top = (x) => g.mTop + Math.sin(x / (H * 0.12) + time * 0.8) * H * 0.006;
    ctx.beginPath(); ctx.moveTo(-5, g.yT - g.L * 0.35);
    for (let x = -5; x <= W + 5; x += 10) ctx.lineTo(x, top(x));
    ctx.lineTo(W + 5, g.yT - g.L * 0.35); ctx.closePath();
    ctx.save(); ctx.globalAlpha *= 0.85; ctx.fillStyle = mix(C.mucus, C.mucusTar, S.tar * 0.8); ctx.fill(); ctx.restore();
    outline(2); ctx.beginPath(); for (let x = -5; x <= W + 5; x += 10) ctx.lineTo(x, top(x)); ctx.stroke();

    // 纤毛细胞
    const cw = H * 0.1, n = Math.ceil(W / cw) + 1;
    const tIdx = Math.round((W * 0.72) / cw);
    let cellFace = null, tumorCell = null;
    for (let i = 0; i < n; i++) {
      const x = i * cw - cw * 0.3;
      const isT = i === tIdx && S.tumor > 0.02;
      rrect(x + 1.5, g.yT, cw - 3, g.yB - g.yT, cw * 0.25);
      ctx.fillStyle = isT ? mix(C.cell, C.tumor, S.tumor) : i % 2 ? C.cell : C.cellDeep; ctx.fill(); outline(2.2); ctx.stroke();
      // 细胞核
      ctx.beginPath(); ctx.ellipse(x + cw / 2, g.yB - (g.yB - g.yT) * 0.28, cw * 0.16, cw * 0.12, 0, 0, 6.3);
      ctx.fillStyle = isT ? "#7d6f92" : "#f59fb3"; ctx.fill();
      cilia(g, x, cw, i === Math.round(W * 0.3 / cw) ? 0 : 1, false);
      const fy = g.yT + (g.yB - g.yT) * 0.42, fx = x + cw / 2 + Math.sin(time * 1.6 + i) * 1;
      if (isT) { tumorCell = { x: x + cw / 2, y: fy }; continue; }
      face(fx, fy, cw * 0.28, 1 - 1.7 * S.flat * (1 - S.heal * 0.8), true);
      if (S.flat > 0.6 && S.heal < 0.5 && i % 3 === 1) sweat(fx + cw * 0.28, fy - cw * 0.35, cw * 0.18);
      if (i === Math.round(W * 0.45 / cw)) cellFace = { x: fx, y: fy };
    }

    // 黏液上的灰尘、细菌和焦油，被纤毛往左扫
    let dustAt = null, tarAt = null;
    const band = (yy) => g.mTop + (g.yT - g.L * 0.4 - g.mTop) * (0.25 + yy * 0.5);
    for (const [i, p] of dust.entries()) {
      const x = (((p.x - sweep) % 1) + 1) % 1 * (W + 40) - 20, y = band(p.y);
      if (p.kind === "bug") {
        ctx.save(); ctx.translate(x, y); ctx.rotate(0.4 + i);
        rrect(-H * 0.018, -H * 0.009, H * 0.036, H * 0.018, H * 0.009); ctx.fillStyle = C.bug; ctx.fill(); outline(1.4); ctx.stroke();
        ctx.restore();
      } else {
        ctx.beginPath(); ctx.arc(x, y, H * 0.009 + rnd(i) * H * 0.006, 0, 6.3); ctx.fillStyle = C.dust; ctx.fill(); outline(1.2); ctx.stroke();
        if (!dustAt && x > W * 0.15 && x < W * 0.35) dustAt = { x, y };
      }
    }
    const nTar = Math.round(S.tar * 16);
    for (let i = 0; i < nTar; i++) {
      const x = (((rnd(i + 500) - sweep * 0.6) % 1) + 1) % 1 * W, y = band(rnd(i + 530));
      ctx.beginPath(); ctx.ellipse(x, y, H * 0.016, H * 0.01, rnd(i) * 3, 0, 6.3); ctx.fillStyle = C.tar; ctx.fill(); outline(1.2); ctx.stroke();
      if (!tarAt && x > W * 0.52 && x < W * 0.68) tarAt = { x, y };
    }
    // 咳咳：黏液太多，只好咳出去
    if (S.mucus > 0.6 && S.heal < 0.5) {
      const a = clamp((S.mucus - 0.6) * 3, 0, 1) * (0.6 + 0.4 * Math.abs(Math.sin(time * 3)));
      ctx.save(); ctx.globalAlpha *= a;
      ctx.fillStyle = C.ink; ctx.font = `${H * 0.05}px ${Anima.ROUND}`; ctx.textBaseline = "middle";
      ctx.fillText("咳咳！", H * 0.04, g.mTop - H * 0.05 + Math.sin(time * 6) * 2);
      ctx.restore();
    }
    return { cellFace, dustAt, tarAt, tumorCell, cw };
  }

  function alveoli(g) {
    // 气道下面的组织
    ctx.fillStyle = C.tissue; ctx.fillRect(0, g.yB, W, H - g.yB);
    dots(18, C.dot);
    // 毛细血管
    const capR = H * 0.022;
    ctx.lineCap = "round";
    for (const [w, col] of [[capR * 2 + 5, C.ink], [capR * 2, C.cap]]) {
      ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath();
      for (let x = -10; x <= W + 10; x += 10) ctx.lineTo(x, g.capY + Math.sin(x / (H * 0.2)) * H * 0.008);
      ctx.stroke();
    }
    const out = { clusters: [] };
    for (let j = 0; j < g.k; j++) {
      const cx = (j + 0.5) * W / g.k, cy = g.cy;
      const e = hurt(j, g.k) ? S.emph : 0;
      // 细支气管
      for (const [w, col] of [[g.r * 0.7 + 5, C.ink], [g.r * 0.7, C.alvWall]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(cx, g.yB - 4); ctx.quadraticCurveTo(cx + g.r * 0.6, (g.yB + cy) / 2, cx, cy - g.r * 2); ctx.stroke();
      }
      const breathe = 1 + 0.07 * Math.sin(time * 1.3 + j * 0.4);
      const smokeSad = S.smoke * 0.6 + S.tar * 0.4;
      const pos = OFF.map(([dx, dy], i) => ({ i, x: cx + dx * g.r * breathe, y: cy + dy * g.r * breathe }));
      // 合并成大泡的那几颗
      const mc = { x: 0, y: 0 };
      for (const m of MERGE) { mc.x += pos[m].x / MERGE.length; mc.y += pos[m].y / MERGE.length; }
      const bigR = g.r * 2.25 * (1 + 0.02 * Math.sin(time * 1.3 + j * 0.4));
      if (e > 0.02) {
        ctx.save(); ctx.globalAlpha *= e;
        ctx.beginPath(); ctx.ellipse(mc.x, mc.y - g.r * 0.1, bigR * 1.05, bigR * 0.92, 0, 0, 6.3);
        ctx.fillStyle = mix(C.alv, "#e8d0d4", 0.4 + 0.3 * (1 - S.heal)); ctx.fill(); outline(2.5); ctx.stroke();
        // 残留的破壁
        outline(2);
        for (const [a, l] of [[0.6, 0.35], [2.2, 0.3], [4.0, 0.3]]) {
          ctx.beginPath(); ctx.moveTo(mc.x + Math.cos(a) * bigR * 0.95, mc.y + Math.sin(a) * bigR * 0.85);
          ctx.lineTo(mc.x + Math.cos(a) * bigR * (0.95 - l), mc.y + Math.sin(a) * bigR * (0.85 - l)); ctx.stroke();
        }
        ctx.restore();
      }
      const order = [6, 4, 5, 3, 1, 2, 0];
      for (const i of order) {
        const p = pos[i], merged = MERGE.includes(i);
        const a = merged ? 1 - e : 1;
        if (a < 0.02) continue;
        ctx.save(); ctx.globalAlpha *= a;
        ctx.beginPath(); ctx.arc(p.x, p.y, g.r * 1.08, 0, 6.3);
        ctx.fillStyle = mix(C.alv, "#d9c3c8", smokeSad * 0.5 * (1 - S.heal * 0.6)); ctx.fill(); outline(2.2); ctx.stroke();
        // 焦油小斑点
        const nt = Math.round(S.tar * 3);
        for (let t = 0; t < nt; t++) {
          ctx.beginPath(); ctx.arc(p.x + (rnd(i * 7 + t + j * 31) - 0.5) * g.r * 1.2, p.y + (rnd(i * 5 + t + j * 17) - 0.5) * g.r * 1.2 + g.r * 0.4, g.r * 0.12, 0, 6.3);
          ctx.fillStyle = "rgba(107,74,53,0.7)"; ctx.fill();
        }
        if (i === 3 || i === 5 || i === 4) face(p.x, p.y, g.r * 0.5, clamp(1 - 1.6 * smokeSad, -1, 1) * (1 - S.heal) + S.heal, true);
        ctx.restore();
      }
      if (e > 0.3) {
        ctx.save(); ctx.globalAlpha *= e;
        const mood = S.heal > 0.5 ? 0.1 : -0.9;
        face(mc.x, mc.y, g.r * 0.7, mood, false);
        if (S.heal < 0.5) sweat(mc.x + g.r * 0.9, mc.y - g.r * 0.9, g.r * 0.45);
        ctx.restore();
      }
      // 氧气从肺泡进入毛细血管
      const flow = (1 - 0.6 * e) * (1 - 0.3 * S.co);
      const bottom = pos[6];
      for (let q = 0; q < 3; q++) {
        const t = (time * 0.45 + q / 3 + j * 0.21) % 1;
        const x = bottom.x + (q - 1) * g.r * 0.5, y = bottom.y + g.r * 0.6 + t * (g.capY - bottom.y - g.r * 0.6);
        ctx.save(); ctx.globalAlpha *= flow * Math.sin(t * Math.PI);
        ctx.beginPath(); ctx.arc(x, y, H * 0.01, 0, 6.3); ctx.fillStyle = C.o2; ctx.fill(); outline(1.2); ctx.stroke();
        ctx.restore();
      }
      out.clusters.push({ cx, cy, pos, e, mc, bigR, bottom });
    }
    // 红细胞：有的带氧气（蓝），吸烟时有的被一氧化碳占了（灰）
    let coAt = null, o2At = null;
    for (const p of rbcs) {
      const x = p.x * W, y = g.capY + Math.sin(x / (H * 0.2)) * H * 0.008;
      ctx.beginPath(); ctx.ellipse(x, y, capR * 1.25, capR * 0.85, 0, 0, 6.3); ctx.fillStyle = C.rbc; ctx.fill(); outline(1.6); ctx.stroke();
      const isCO = p.co < S.co * 0.5;
      ctx.beginPath(); ctx.arc(x + capR * 0.5, y - capR * 0.55, capR * 0.5, 0, 6.3);
      ctx.fillStyle = isCO ? C.coGas : C.o2; ctx.fill(); outline(1.2); ctx.stroke();
      if (isCO && !coAt && x > W * 0.08 && x < W * 0.35) coAt = { x: x + capR * 0.5, y: y - capR * 0.55 };
      if (!isCO && !o2At && x > W * 0.55 && x < W * 0.85) o2At = { x: x + capR * 0.5, y: y - capR * 0.55 };
    }
    out.coAt = coAt; out.o2At = o2At;
    return out;
  }

  // 基因受伤的细胞长成一团
  function tumor(g, at) {
    if (!at || S.tumor < 0.02) return null;
    const s = g.L * 0.68 * S.tumor;
    const lumps = [[0, -1.2, 1.1], [-0.9, -0.6, 0.8], [0.9, -0.7, 0.85], [-0.3, -2.1, 0.75], [0.6, -1.9, 0.7]];
    const bx = at.x, by = g.yT;
    ctx.save();
    for (const [dx, dy, r] of lumps) {
      ctx.beginPath(); ctx.arc(bx + dx * s, by + dy * s + Math.sin(time * 1.2 + dx) * 1.2, r * s, 0, 6.3);
      ctx.fillStyle = C.tumor; ctx.fill(); outline(2.2); ctx.stroke();
    }
    for (const [dx, dy, r] of lumps) {
      ctx.beginPath(); ctx.arc(bx + dx * s - r * s * 0.3, by + dy * s - r * s * 0.35, r * s * 0.25, 0, 6.3); ctx.fillStyle = C.tumorHi; ctx.fill();
    }
    face(bx, by - s * 1.2, s * 0.6, 0, false);
    // 一段断开的 DNA
    const dx = bx + s * 2.6, dy = by - s * 2.1, L = s * 1.6;
    ctx.save(); ctx.globalAlpha *= S.tumor;
    ctx.lineWidth = 2.5;
    for (const ph of [0, Math.PI]) {
      ctx.strokeStyle = ph ? "#8b7cf6" : "#ff7b7b";
      ctx.beginPath();
      for (let t = 0; t <= 1; t += 0.05) { if (t > 0.45 && t < 0.58) { ctx.stroke(); ctx.beginPath(); continue; } ctx.lineTo(dx + Math.sin(t * 9 + ph) * s * 0.3, dy - L / 2 + t * L); }
      ctx.stroke();
    }
    ctx.restore();
    bolt(dx + s * 0.6, dy, s * 0.4, S.tumor * (0.6 + 0.4 * Math.sin(time * 3)), "#ffc94d");
    ctx.restore();
    return { x: bx, y: by - s * 1.2, dna: { x: dx, y: dy } };
  }

  function hud() {
    const [cv, cs] = CH[cur].cilia;
    pill(14, 12, "纤毛", cv, cs === "ok" ? C.mint : cs === "warn" ? "#e7a500" : "#f25f6b", false);
    const [label, value, st] = CH[cur].pill;
    pill(W - 14, 12, label, value, st === "ok" ? C.mint : st === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const g = G();
    ciliaTip = null;
    const al = alveoli(g);
    const aw = airway(g);
    const tm = tumor(g, aw.tumorCell);
    if (S.heal > 0.02) {
      for (const [i, h] of hearts.entries()) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.85;
        heart(x, y, Math.max(7, H * 0.02), i % 2 ? C.heartPink : C.sugar);
        ctx.restore();
      }
    }
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const tipY = g.mTop;
    const c0 = al.clusters[0], c1 = al.clusters[1];
    const ct = ciliaTip || { x: W * 0.3, y: g.yT - g.L };
    callout("cilia", on("cilia"), ct.x, ct.y, ct.x + W * 0.08, H * 0.2, "纤毛扫地工：把脏东西往外扫");
    callout("recover", on("recover"), ct.x, ct.y, ct.x + W * 0.08, H * 0.2, "纤毛慢慢重新摆动");
    const cA = al.clusters[al.clusters.length - 1];
    callout("alv", on("alv"), cA.pos[2].x, cA.pos[2].y - H * 0.02, cA.pos[2].x - W * 0.1, H * 0.57, "肺泡：一串串小葡萄");
    const o2 = al.o2At;
    callout("o2", on("o2") && !!o2, o2 ? o2.x : 0, o2 ? o2.y : 0, o2 ? o2.x - W * 0.3 : 0, H * 0.99, "红细胞带走氧气");
    const co = al.coAt;
    callout("co", on("co") && !!co, co ? co.x : 0, co ? co.y : 0, co ? co.x + W * 0.35 : 0, H * 0.99, "一氧化碳抢了氧气的位置");
    const ta = aw.tarAt;
    callout("tar", on("tar") && !!ta, ta ? ta.x : 0, ta ? ta.y : 0, ta ? ta.x + W * 0.05 : 0, H * 0.2, "焦油粘在黏液上");
    callout("flat", on("flat"), ct.x, ct.y, ct.x + W * 0.1, H * 0.57, "纤毛倒下了，不再摆动");
    callout("mucus", on("mucus"), W * 0.62, tipY + H * 0.02, W * 0.7, H * 0.2, "黏液又多又黏，只好咳出来");
    callout("bulla", on("bulla"), c1.mc.x + c1.bigR * 0.6, c1.mc.y - c1.bigR * 0.5, c1.mc.x + W * 0.16, H * 0.57, "几个肺泡破成一个大泡");
    callout("lessO2", on("lessO2"), c1.bottom.x, c1.bottom.y + g.r * 1.3, c1.bottom.x + W * 0.14, H * 0.99, "换进血里的氧气变少了");
    callout("tumor", on("tumor") && !!tm, tm ? tm.x - H * 0.03 : 0, tm ? tm.y : 0, tm ? tm.x - W * 0.2 : 0, H * 0.2, "基因受伤的细胞长成一团");
    callout("second", on("second"), W * 0.14, g.mTop - H * 0.015, W * 0.22, H * 0.57, "二手烟也会伤害家人");
    callout("bullaStay", on("bullaStay"), c1.mc.x + c1.bigR * 0.6, c1.mc.y - c1.bigR * 0.5, c1.mc.x + W * 0.16, H * 0.99, "大泡还在，但不再继续变大");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#3fb3a4",
    titleCard: { lines: ["一支烟，", "在肺里做了什么？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
