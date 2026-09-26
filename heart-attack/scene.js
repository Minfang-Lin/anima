Anima.register("heart-attack", {
    "title": "心脏的血管堵了",
    "tag": "心脏小剧场",
    "headline": "心梗为什么来得这么【突然】？",
    "lede": "心脏自己也要“吃饭”。给它送饭的冠状动脉一旦被血栓堵死，下游的心肌就会缺氧坏死。看看心梗是怎么发生的、怎样认出它，以及为什么要分秒必争。",
    "summary": "冠状动脉斑块、心绞痛、斑块破裂和血栓，怎样认出心梗、为什么要尽快开通血管。",
    "footer": "胸痛持续不缓解，请立即拨打 120；平时有胸闷、胸痛，可到心内科就诊。",
    "canvasLabel": "卡通冠状动脉和心肌细胞动画",
    "disease": "心肌梗死",
    "organs": ["heart"],
    "categories": ["cardio"],
    "color": "#d4507a"
  }, () => {
  const CH = [
    { title: "心脏也要吃饭", plaque: 0, rupture: 0, clot: 0, plate: 0, exert: 0, isch: 0, necro: 0, stent: 0, crown: 1, person: 0, heal: 0, flow: 100,
      text: "心脏一刻不停地跳，自己也需要大量的氧气和营养。给心脏送“饭”的，是趴在心脏表面的冠状动脉，它们像一顶王冠戴在心脏上，再分出许多小支钻进心肌。心肌细胞吃饱了氧气，才能有力地收缩。",
      fact: "冠状动脉分左右两支，从主动脉根部发出，包绕着心脏",
      labels: ["artery", "cell", "crown"] },
    { title: "斑块慢慢长大", plaque: 0.55, rupture: 0, clot: 0, plate: 0, exert: 1, isch: 0, necro: 0, stent: 0, crown: 0, person: 0, heal: 0, flow: 60,
      text: "如果血脂、血压、血糖长期偏高，或者吸烟，冠状动脉里会慢慢长出斑块，通道越来越窄。安静时还够用，可一爬楼、快走或者生气激动，心肌需要更多氧气，血却送不过来，胸口就会发闷发紧，这叫心绞痛，休息几分钟往往能缓解。",
      fact: "心绞痛多在活动或激动时出现，一般持续几分钟，休息后缓解",
      labels: ["plaque", "angina"] },
    { title: "斑块突然破裂", plaque: 0.5, rupture: 1, clot: 0.55, plate: 1, exert: 0, isch: 0.5, necro: 0, stent: 0, crown: 0, person: 0, heal: 0, flow: 30,
      pill: ["发病时间", "0 分钟", "warn"],
      text: "斑块外面盖着一层纤维帽。有一天，它可能突然裂开，里面的脂质露了出来。血小板以为血管破了，赶紧跑来“补洞”，纤维蛋白丝再缠成一张网，把红细胞也兜住，结果补成了一个大血栓。很多心梗，就发生在原本并不太窄的血管上。",
      fact: "斑块稳不稳定，往往比斑块大小更要紧",
      labels: ["cap", "platelet"] },
    { title: "血管被堵死了", plaque: 0.5, rupture: 1, clot: 1, plate: 1, exert: 0, isch: 1, necro: 0.55, stent: 0, crown: 0, person: 0, heal: 0, flow: 0,
      pill: ["发病时间", "30 分钟", "bad"],
      text: "血栓一旦把血管完全堵死，下游的心肌就断了“粮”。缺血二三十分钟后，心肌细胞就开始坏死，而且时间越长，坏死的范围越大。坏死的心肌不能再长回来，心脏的泵血能力会因此变弱，还可能出现危险的心律失常。",
      fact: "时间就是心肌：堵得越久，坏死越多",
      labels: ["clot", "dead"] },
    { title: "认出心梗，马上打 120", plaque: 0.5, rupture: 1, clot: 1, plate: 1, exert: 0, isch: 1, necro: 0.8, stent: 0, crown: 0, person: 1, heal: 0, flow: 0,
      pill: ["发病时间", "90 分钟", "bad"],
      text: "心梗最典型的表现，是胸口正中压榨样的疼痛或憋闷，超过 15 分钟也不缓解，可能放射到左臂、下巴或后背，常伴大汗、恶心。老人、女性和糖尿病患者的症状可能不典型。一旦怀疑，立刻拨打 120，不要自己开车，也不要硬扛。",
      fact: "胸痛超过 15 分钟不缓解，立即拨打 120；用药听从急救人员或医生指导",
      labels: ["chest", "call"] },
    { title: "开通血管，越早越好", plaque: 0.5, rupture: 0, clot: 0, plate: 0, exert: 0, isch: 0, necro: 0.3, stent: 1, crown: 0, person: 0, heal: 1, flow: 95,
      pill: ["发病时间", "已开通", "ok"],
      text: "到了有胸痛中心的医院，医生会尽快把堵住的血管打通：可以用溶栓药把血栓溶开，也可以通过导管放入支架把血管撑开。开通得越早，救回的心肌越多。平时管好血压、血脂和血糖，不吸烟、多运动，让斑块少长、别破。",
      fact: "从发病到开通血管，最好在 2 小时内完成：时间就是心肌",
      labels: ["stent", "saved", "scar"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    wall: "#ffb3b3", adv: "#ffcdc4", lumen: "#fff4ec", endo: "#ffe0e6", rbc: "#ff7b7b",
    plaque: "#ffe29a", core: "#ffd166", cap: "#fff6e0", clot: "#c94a5e", fibrin: "#fff1b0", platelet: "#d9c6ff",
    myoBg: "#ffc9c4", muscle: "#ff8f8f", stripe: "#ffb4b0", isch: "#d7a3bd", dead: "#b9adb3", scar: "#d8cfd3",
    o2: "#9fd8ff", stent: "#8fa3b8", heartRed: "#ff6f86", crown: "#ffc94d", heartPink: "#ff9fb0",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, bolt, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { plaque: 0, rupture: 0, clot: 0, plate: 0, exert: 0, isch: 0, necro: 0, stent: 0, crown: 1, person: 0, heal: 0, flow: 100 };
  let phase = 0;
  const beatAt = (ph) => { ph = ((ph % 1) + 1) % 1; return ph < 0.3 ? Math.sin(ph / 0.3 * Math.PI) : 0; };

  // ---------- 几何：上面是冠状动脉纵切面，下面是它供血的心肌 ----------
  const G = () => {
    const cy = H * 0.31, R = H * 0.105, wallT = H * 0.06, px = W * 0.36, sig = Math.max(W * 0.07, H * 0.11);
    const myoTop = H * 0.55;
    return { cy, R, wallT, px, sig, myoTop };
  };
  const bump = (g, x, k = 1) => Math.exp(-(((x - g.px) / (g.sig * k)) ** 2));
  const plaqueAmt = () => S.plaque * (1 - 0.75 * S.stent);
  const topE = (g) => g.cy - g.R;
  const plaqueTop = (g, x) => g.cy + g.R - plaqueAmt() * g.R * 1.1 * bump(g, x);
  // 血栓长在斑块上，往上把管腔填满
  const clotTop = (g, x) => { const b = plaqueTop(g, x); return b - S.clot * (b - topE(g) + 3) * bump(g, x, 0.55); };
  const botE = (g, x) => clotTop(g, x);

  // ---------- 粒子 ----------
  const rbcs = Array.from({ length: 22 }, (_, i) => ({ x: rnd(i + 7) * 1.2, yn: rnd(i + 57) * 1.4 - 0.7, ph: rnd(i + 97) * 6 }));
  const plates = Array.from({ length: 14 }, (_, i) => ({ a: rnd(i + 500) * 6.3, d: rnd(i + 520), ph: rnd(i + 540) * 6 }));
  const hearts = Array.from({ length: 8 }, (_, i) => ({ x: rnd(i + 8000), y: rnd(i + 8100), ph: rnd(i + 8200) * 6 }));

  function update(dt) {
    phase += dt * (1.15 + 0.45 * S.exert * (0.5 + 0.5 * Math.sin(time * 0.8)));
    const g = G(), px = g.px / W, block = S.clot > 0.8;
    const sp = dt * 0.07 * (0.6 + 0.6 * beatAt(phase)) * clamp(S.flow / 100, 0.05, 1);
    for (const p of rbcs) {
      const x = p.x * W, h = Math.max((botE(g, x) - topE(g)) / 2, 3);
      let v = sp * clamp(g.R / h, 0.7, 2);
      // 堵死以后：上游的红细胞挤在血栓前面，下游的慢慢流走
      if (block && p.x < px && p.x > px - 0.12) v *= 0.05;
      p.x += v;
      if (p.x > 1.1) p.x -= 1.2;
      if (block && p.x > px - 0.06 && p.x < px) p.x = px - 0.06 - rnd(p.ph) * 0.05;
    }
  }

  // ---------- 小画笔 ----------
  function rbc(x, y, r, mood) {
    ctx.save(); ctx.translate(x, y);
    ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.82, 0, 0, 6.3); ctx.fillStyle = C.rbc; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.beginPath(); ctx.ellipse(-r * 0.45, -r * 0.42, r * 0.22, r * 0.13, -0.5, 0, 6.3); ctx.fill();
    face(0, r * 0.05, r * 0.7, mood);
    ctx.restore();
  }
  function platelet(x, y, s, a) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(a);
    ctx.beginPath(); ctx.ellipse(0, 0, s, s * 0.6, 0, 0, 6.3); ctx.fillStyle = C.platelet; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.fillStyle = "#a88ee0";
    ctx.beginPath(); ctx.arc(-s * 0.3, 0, s * 0.14, 0, 6.3); ctx.arc(s * 0.3, s * 0.1, s * 0.12, 0, 6.3); ctx.fill();
    ctx.restore();
  }
  function heartPath(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * 0.95);
    ctx.bezierCurveTo(-s * 1.3, s * 0.1, -s * 0.8, -s * 1.0, 0, -s * 0.45);
    ctx.bezierCurveTo(s * 0.8, -s * 1.0, s * 1.3, s * 0.1, 0, s * 0.95);
    ctx.closePath();
  }

  // 心肌细胞：一排排带小脸的肌肉块
  function cells(g) {
    const ch = H * 0.19, cw = H * 0.27, gap = H * 0.025, sq = beatAt(phase);
    const list = [];
    for (let row = 0; row < 2; row++) {
      const y = g.myoTop + H * 0.03 + row * (ch + gap);
      const off = row % 2 ? cw * 0.5 : 0;
      for (let i = -1, x = -off; x < W + cw; i++, x += cw + gap) {
        const id = row * 50 + i + 1;
        const cx = x + cw / 2, down = cx > g.px + g.sig * 0.3;
        // 下游：缺血变紫、坏死变灰；坏死按编号先后蔓延
        const order = 0.15 + rnd(id + 70) * 0.75;
        const dead = down ? clamp((S.necro - order) * 5, 0, 1) : 0;
        const demand = S.exert * clamp(Math.sin(time * 0.8) * 1.4, 0, 1);
        const isch = down ? clamp(Math.max(S.isch, demand * 0.7) - dead, 0, 1) : 0;
        list.push({ x, y, cw, ch, cx, cy: y + ch / 2, down, dead, isch, id });
      }
    }
    for (const c of list) {
      const w = c.cw * (1 - 0.05 * sq * (1 - c.dead)), x = c.cx - w / 2;
      let col = mix(C.muscle, C.isch, c.isch);
      if (c.dead > 0) col = mix(C.muscle, S.heal > 0.5 ? C.scar : C.dead, c.dead);
      rrect(x, c.y, w, c.ch, c.ch * 0.3); ctx.fillStyle = col; ctx.fill(); outline(2.5); ctx.stroke();
      // 横纹
      ctx.strokeStyle = c.dead > 0.5 ? "rgba(255,255,255,0.35)" : C.stripe; ctx.lineWidth = 2;
      for (const f of [0.14, 0.24, 0.76, 0.86]) { ctx.beginPath(); ctx.moveTo(x + w * f, c.y + c.ch * 0.18); ctx.lineTo(x + w * f, c.y + c.ch * 0.82); ctx.stroke(); }
      const mood = c.dead > 0.5 ? (S.heal > 0.5 ? 0 : -1) : clamp(0.9 - 1.9 * c.isch + 0.2 * S.heal, -1, 1);
      if (c.dead > 0.5 && S.heal < 0.5) {
        // 坏死：眼睛变成小叉
        outline(Math.max(1.5, c.ch * 0.035));
        for (const dx of [-1, 1]) {
          const ex = c.cx + dx * c.ch * 0.16, ey = c.cy - c.ch * 0.05, e = c.ch * 0.05;
          ctx.beginPath(); ctx.moveTo(ex - e, ey - e); ctx.lineTo(ex + e, ey + e); ctx.moveTo(ex + e, ey - e); ctx.lineTo(ex - e, ey + e); ctx.stroke();
        }
        ctx.beginPath(); ctx.moveTo(c.cx - c.ch * 0.08, c.cy + c.ch * 0.14); ctx.quadraticCurveTo(c.cx, c.cy + c.ch * 0.08, c.cx + c.ch * 0.08, c.cy + c.ch * 0.14); ctx.stroke();
      } else face(c.cx, c.cy, c.ch * 0.5, mood);
      if (c.isch > 0.35 && c.dead < 0.5) sweat(c.cx + c.ch * 0.42, c.y + c.ch * 0.1 + ((time * 0.7 + c.id * 0.3) % 1) * c.ch * 0.15, c.ch * 0.16);
    }
    return list;
  }

  // ---------- 场景 ----------
  function scene() {
    const g = G(), step = Math.max(4, W / 160);
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(24, C.dot);

    // 心肌层底色
    ctx.fillStyle = C.myoBg; rrect(-20, g.myoTop, W + 40, H - g.myoTop + 20, H * 0.05); ctx.fill(); outline(3); ctx.stroke();

    // 分支小血管：把氧气送进心肌
    const branchX = [];
    for (let x = W * 0.12; x < W; x += Math.max(W / 6, H * 0.28)) branchX.push(x);
    const flowDown = (x) => (x > g.px + g.sig * 0.3 ? clamp(1 - S.clot * 1.1, 0, 1) : 1) * (0.4 + 0.6 * clamp(S.flow / 100 + 0.4, 0, 1));
    for (const bx of branchX) {
      const y0 = g.cy + g.R + g.wallT - 4, y1 = g.myoTop + H * 0.05, bw = H * 0.03;
      ctx.fillStyle = C.wall; rrect(bx - bw / 2, y0, bw, y1 - y0, bw / 2); ctx.fill(); outline(2); ctx.stroke();
      const f = flowDown(bx);
      if (f > 0.05) {
        ctx.save(); ctx.globalAlpha *= f;
        for (let k = 0; k < 3; k++) {
          const t = (time * 0.6 + k / 3 + bx * 0.001) % 1;
          ctx.beginPath(); ctx.arc(bx, y0 + (y1 - y0 + H * 0.04) * t, bw * 0.28, 0, 6.3); ctx.fillStyle = C.o2; ctx.fill(); outline(1.2); ctx.stroke();
        }
        ctx.restore();
      }
    }
    const cl = cells(g);

    // 冠状动脉：外膜、中膜、管腔
    const wt = g.cy - g.R - g.wallT, wb = g.cy + g.R + g.wallT;
    ctx.fillStyle = C.adv; ctx.fillRect(0, wt, W, wb - wt);
    ctx.fillStyle = C.wall; ctx.fillRect(0, wt + g.wallT * 0.3, W, wb - wt - g.wallT * 0.6);
    outline(3); ctx.beginPath(); ctx.moveTo(0, wt); ctx.lineTo(W, wt); ctx.moveTo(0, wb); ctx.lineTo(W, wb); ctx.stroke();
    ctx.fillStyle = C.lumen; ctx.beginPath();
    for (let x = -step; x <= W + step; x += step) ctx.lineTo(x, topE(g));
    for (let x = W + step; x >= -step; x -= step) ctx.lineTo(x, g.cy + g.R);
    ctx.closePath(); ctx.fill();

    // 斑块：脂质核心 + 纤维帽
    const pa = plaqueAmt();
    let capCrack = null;
    if (pa > 0.02) {
      ctx.beginPath();
      for (let x = g.px - g.sig * 2.2; x <= g.px + g.sig * 2.2; x += step) ctx.lineTo(x, plaqueTop(g, x));
      for (let x = g.px + g.sig * 2.2; x >= g.px - g.sig * 2.2; x -= step) ctx.lineTo(x, g.cy + g.R + pa * g.R * 0.25 * bump(g, x));
      ctx.closePath(); ctx.fillStyle = C.plaque; ctx.fill();
      const coreH = pa * g.R * 0.55;
      ctx.beginPath(); ctx.ellipse(g.px, g.cy + g.R - coreH * 0.5, g.sig * 0.75 * Math.min(1, pa * 1.6) + 2, coreH * 0.55 + 1, 0, 0, 6.3);
      ctx.fillStyle = C.core; ctx.fill(); outline(1.8); ctx.setLineDash([5, 5]); ctx.stroke(); ctx.setLineDash([]);
      // 纤维帽：斑块表面一层厚厚的浅色带；破裂时中间裂开
      const gapW = S.rupture * g.sig * 0.28, capL = g.sig * 1.25;
      ctx.lineCap = "round";
      const capW = H * 0.022 * Math.min(1, pa * 2);
      for (const [w, col] of [[capW + 5, C.ink], [capW, C.cap]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w;
        ctx.beginPath();
        for (let x = g.px - capL; x <= g.px - gapW; x += step) ctx.lineTo(x, plaqueTop(g, x) + H * 0.012);
        ctx.stroke(); ctx.beginPath();
        for (let x = g.px + gapW; x <= g.px + capL; x += step) ctx.lineTo(x, plaqueTop(g, x) + H * 0.012);
        ctx.stroke();
      }
      if (S.rupture > 0.05) {
        capCrack = { x: g.px, y: plaqueTop(g, g.px) + H * 0.01 };
        // 露出来的脂质往外冒
        ctx.save(); ctx.globalAlpha *= S.rupture * (1 - S.clot * 0.6);
        for (let k = 0; k < 4; k++) {
          const t = (time * 0.5 + k / 4) % 1;
          ctx.beginPath(); ctx.arc(g.px + Math.sin(k * 2 + time) * gapW, capCrack.y - t * g.R * 0.6, H * 0.01 * (1 - t * 0.5), 0, 6.3);
          ctx.fillStyle = C.core; ctx.fill(); outline(1.2); ctx.stroke();
        }
        ctx.restore();
      }
    }

    // 血栓：暗红色一团，纤维蛋白丝缠成网
    let clotPt = null;
    if (S.clot > 0.02) {
      ctx.beginPath();
      for (let x = g.px - g.sig * 1.3; x <= g.px + g.sig * 1.3; x += step) ctx.lineTo(x, clotTop(g, x));
      for (let x = g.px + g.sig * 1.3; x >= g.px - g.sig * 1.3; x -= step) ctx.lineTo(x, plaqueTop(g, x) + H * 0.005);
      ctx.closePath(); ctx.fillStyle = C.clot; ctx.fill(); outline(2.5); ctx.stroke();
      ctx.save(); ctx.clip();
      // 兜住的红细胞
      for (let k = 0; k < 7; k++) {
        const x = g.px + (rnd(k + 600) - 0.5) * g.sig * 1.4, y = plaqueTop(g, x) - (0.15 + rnd(k + 620) * 0.8) * (plaqueTop(g, x) - clotTop(g, x));
        ctx.beginPath(); ctx.ellipse(x, y, H * 0.022, H * 0.018, rnd(k) * 3, 0, 6.3); ctx.fillStyle = "#e86b7a"; ctx.fill(); outline(1.2); ctx.stroke();
      }
      ctx.strokeStyle = C.fibrin; ctx.lineWidth = 2;
      for (let k = 0; k < 10; k++) {
        const x0 = g.px - g.sig * 1.2 + rnd(k + 700) * g.sig * 2.4, x1 = g.px - g.sig * 1.2 + rnd(k + 720) * g.sig * 2.4;
        ctx.beginPath(); ctx.moveTo(x0, clotTop(g, x0) + 2); ctx.lineTo(x1, plaqueTop(g, x1)); ctx.stroke();
      }
      ctx.restore();
      clotPt = { x: g.px, y: (clotTop(g, g.px) + plaqueTop(g, g.px)) / 2 };
    }

    // 内皮细胞（上壁）
    const cellL = Math.max(22, W / 30);
    for (let x = cellL / 2; x < W + cellL; x += cellL) {
      rrect(x - cellL * 0.44, topE(g) - 4.5, cellL * 0.88, 9, 4.5); ctx.fillStyle = C.endo; ctx.fill(); outline(1.6); ctx.stroke();
    }
    // 下壁没有斑块的地方
    for (let x = cellL / 2; x < W + cellL; x += cellL) {
      if (pa > 0.02 && Math.abs(x - g.px) < g.sig * 1.25) continue;
      rrect(x - cellL * 0.44, g.cy + g.R - 4.5, cellL * 0.88, 9, 4.5); ctx.fillStyle = C.endo; ctx.fill(); outline(1.6); ctx.stroke();
    }

    // 血小板：赶来“补洞”
    let plate0 = null;
    if (S.plate > 0.02) {
      const n = Math.round(S.plate * plates.length), s = H * 0.02;
      for (let i = 0; i < n; i++) {
        const p = plates[i];
        const x = g.px + (p.d - 0.5) * g.sig * 2.2 + Math.sin(time * 2 + p.ph) * 2;
        const y = clotTop(g, x) - s * 0.5 - Math.abs(Math.sin(time * 1.5 + p.ph)) * s * 0.8;
        platelet(x, Math.max(y, topE(g) + s), s, p.a + Math.sin(time + p.ph) * 0.3);
        if (!plate0 || Math.abs(x - g.px + g.sig) < Math.abs(plate0.x - g.px + g.sig)) plate0 = { x, y: Math.max(y, topE(g) + s) };
      }
    }

    // 红细胞
    const rr = Math.max(8, H * 0.034), px = g.px / W;
    const rbcPos = [];
    for (const p of rbcs) {
      const x = p.x * W;
      const t = topE(g) + rr + 6, b = botE(g, x) - rr - 6;
      if (b < t && S.clot > 0.8 && Math.abs(x - g.px) < g.sig * 0.6) continue;
      const y = clamp(g.cy + p.yn * g.R * 0.75, t, Math.max(t, b)) + Math.sin(time * 1.6 + p.ph) * 1.5;
      let a = 1;
      if (S.clot > 0.5 && p.x > px) a = clamp(1 - (S.clot - 0.5) * 1.8, 0.1, 1);
      ctx.save(); ctx.globalAlpha *= a;
      rbc(x, y, rr, S.clot > 0.6 && p.x < px && p.x > px - 0.15 ? -0.8 : 0.8 - S.isch * 0.6);
      ctx.restore();
      rbcPos.push({ x, y });
    }

    // 支架：撑开血管的小网
    let stentPt = null;
    if (S.stent > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.stent;
      const x0 = g.px - g.sig * 1.5, x1 = g.px + g.sig * 1.5, yT = topE(g) + 3, n = 8;
      const yB = (x) => plaqueTop(g, x) - 2;
      ctx.strokeStyle = C.stent; ctx.lineWidth = 3;
      ctx.beginPath();
      for (let k = 0; k < n; k++) {
        const xa = x0 + (x1 - x0) * k / n, xb = x0 + (x1 - x0) * (k + 1) / n;
        ctx.moveTo(xa, yT); ctx.lineTo(xb, yB(xb)); ctx.moveTo(xa, yB(xa)); ctx.lineTo(xb, yT);
      }
      ctx.stroke();
      outline(2); ctx.beginPath(); ctx.moveTo(x0, yT); ctx.lineTo(x1, yT); ctx.stroke();
      ctx.beginPath(); for (let x = x0; x <= x1; x += step) ctx.lineTo(x, yB(x)); ctx.stroke();
      ctx.restore();
      stentPt = { x: g.px + g.sig * 0.55, y: yT + 2 };
    }

    const crown = S.crown > 0.02 ? crownCard() : null;
    const person = S.person > 0.02 ? personCard() : null;

    if (S.heal > 0.02) {
      for (const h of hearts) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), C.heartPink);
        ctx.restore();
      }
    }
    return { g, cl, capCrack, clotPt, plate0, rbcPos, stentPt, crown, person };
  }

  function cardBox(cw, ch, a) {
    const x = W - cw - 14, y = H - ch - 14;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, cw, ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(x, y, cw, ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    return { x, y, cw, ch };
  }

  // 小卡片：冠状动脉像一顶王冠
  function crownCard() {
    const cw = Math.min(W * 0.42, H * 0.5), ch = cw * 0.92;
    ctx.save(); ctx.globalAlpha *= S.crown;
    const b = cardBox(cw, ch);
    const s = cw * 0.26, hx = b.x + cw / 2, hy = b.y + ch * 0.55, sq = beatAt(phase);
    // 主动脉
    ctx.fillStyle = C.heartRed; rrect(hx - s * 0.2, hy - s * 1.05, s * 0.4, s * 0.7, s * 0.15); ctx.fill(); outline(2.2); ctx.stroke();
    ctx.save(); ctx.translate(hx, hy); ctx.scale(1 - 0.05 * sq, 1 - 0.05 * sq);
    heartPath(s); ctx.fillStyle = C.heartRed; ctx.fill(); outline(2.5); ctx.stroke();
    // 冠状动脉：从主动脉根部左右分出，绕着心脏上缘
    ctx.lineCap = "round";
    for (const [w, col] of [[s * 0.09 + 4, C.ink], [s * 0.09, C.crown]]) {
      ctx.strokeStyle = col; ctx.lineWidth = w;
      ctx.beginPath();
      // 左右两支沿着心脏上缘绕过去，再往下分出小支
      ctx.moveTo(-s * 0.05, -s * 0.36); ctx.quadraticCurveTo(-s * 0.55, -s * 0.5, -s * 0.72, s * 0.05);
      ctx.moveTo(s * 0.05, -s * 0.36); ctx.quadraticCurveTo(s * 0.55, -s * 0.5, s * 0.72, s * 0.05);
      ctx.moveTo(-s * 0.3, -s * 0.36); ctx.quadraticCurveTo(-s * 0.2, s * 0.25, 0, s * 0.72);
      ctx.moveTo(s * 0.42, -s * 0.33); ctx.quadraticCurveTo(s * 0.38, s * 0.05, s * 0.3, s * 0.4);
      ctx.stroke();
    }
    face(s * 0.1, s * 0.08, s * 0.34, 0.9);
    ctx.restore();
    // 小王冠
    const cx = hx, cyy = hy - s * 1.3 - Math.sin(time * 2) * 2, k = s * 0.32;
    ctx.beginPath();
    ctx.moveTo(cx - k, cyy + k * 0.5); ctx.lineTo(cx - k, cyy - k * 0.3); ctx.lineTo(cx - k * 0.5, cyy + k * 0.05);
    ctx.lineTo(cx, cyy - k * 0.55); ctx.lineTo(cx + k * 0.5, cyy + k * 0.05); ctx.lineTo(cx + k, cyy - k * 0.3); ctx.lineTo(cx + k, cyy + k * 0.5); ctx.closePath();
    ctx.fillStyle = C.crown; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.font = `${cw / 11}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("冠状动脉", hx, b.y + ch - cw / 11);
    ctx.textAlign = "left";
    ctx.restore();
    return Object.assign({}, b, { heart: { x: hx - s * 0.62, y: hy - s * 0.22 } });
  }

  // 小卡片：心梗的样子
  function personCard() {
    const cw = Math.min(W * 0.46, H * 0.62), ch = Math.min(H * 0.8, cw * 1.05);
    ctx.save(); ctx.globalAlpha *= S.person;
    const b = cardBox(cw, ch);
    const u = ch / 10, px = b.x + cw * 0.5, top = b.y + u * 1.2;
    const sway = Math.sin(time * 2) * u * 0.05;
    // 身体
    ctx.fillStyle = "#8fc9e8"; rrect(px - u * 2, top + u * 3.1, u * 4, u * 4.6, u * 1.4); ctx.fill(); outline(2.5); ctx.stroke();
    // 头
    const hx = px + sway, hy = top + u * 1.6;
    ctx.beginPath(); ctx.arc(hx, hy, u * 1.45, 0, 6.3); ctx.fillStyle = "#ffe0cc"; ctx.fill(); outline(2.5); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(hx, hy - u * 0.6, u * 1.45, Math.PI * 1.05, Math.PI * 1.95); ctx.fill();
    face(hx, hy + u * 0.15, u * 0.9, -0.9);
    sweat(hx + u * 1.1, hy - u * 0.9 + ((time * 0.8) % 1) * u * 0.4, u * 0.5);
    sweat(hx - u * 1.3, hy - u * 0.4 + ((time * 0.8 + 0.5) % 1) * u * 0.4, u * 0.4);
    // 胸口的疼痛：一圈圈红色
    const chx = px - u * 0.2, chy = top + u * 4.4;
    for (let k = 0; k < 3; k++) {
      const t = (time * 0.7 + k / 3) % 1;
      ctx.save(); ctx.globalAlpha *= (1 - t) * 0.8;
      ctx.strokeStyle = "#f25f6b"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(chx, chy, u * (0.4 + t * 1.3), 0, 6.3); ctx.stroke();
      ctx.restore();
    }
    ctx.beginPath(); ctx.arc(chx, chy, u * 0.45, 0, 6.3); ctx.fillStyle = "#f25f6b"; ctx.fill(); outline(2); ctx.stroke();
    // 捂着胸口的手臂
    ctx.strokeStyle = C.ink; ctx.lineWidth = u * 0.75 + 5; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(px - u * 1.7, top + u * 3.6); ctx.quadraticCurveTo(px - u * 2.3, chy + u * 0.8, chx - u * 0.5, chy + u * 0.3); ctx.stroke();
    ctx.strokeStyle = "#8fc9e8"; ctx.lineWidth = u * 0.75;
    ctx.stroke();
    ctx.beginPath(); ctx.arc(chx - u * 0.45, chy + u * 0.3, u * 0.42, 0, 6.3); ctx.fillStyle = "#ffe0cc"; ctx.fill(); outline(2); ctx.stroke();
    // 放射到左臂、下巴：小闪电
    const armX = px + u * 2.35, armY = top + u * 5;
    bolt(armX + u * 0.5, armY, u * 0.55, 0.6 + 0.4 * Math.sin(time * 5), "#ffc94d");
    bolt(hx + u * 1.0, hy + u * 1.35, u * 0.45, 0.6 + 0.4 * Math.sin(time * 5 + 2), "#ffc94d");
    // 120 电话
    const phx = b.x + u * 1.3, phy = b.y + u * 1.8, pw = u * 1.6, ph = u * 2.6;
    ctx.save(); ctx.translate(phx, phy); ctx.rotate(Math.sin(time * 6) * 0.08);
    ctx.fillStyle = "#6cc9ae"; rrect(-pw / 2, -ph / 2, pw, ph, u * 0.35); ctx.fill(); outline(2.2); ctx.stroke();
    ctx.fillStyle = C.paper; rrect(-pw * 0.36, -ph * 0.36, pw * 0.72, ph * 0.5, u * 0.15); ctx.fill();
    ctx.fillStyle = "#f25f6b"; ctx.font = `${u * 0.62}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("120", 0, -ph * 0.1);
    ctx.restore();
    // 疼痛会跑到哪里
    ctx.fillStyle = C.ink; ctx.font = `${u * 0.62}px ${Anima.ROUND}`; ctx.textAlign = "center";
    ctx.fillText("左臂", armX + u * 0.5, armY + u * 1.1);
    ctx.fillText("下巴", hx + u * 1.9, hy + u * 1.1);
    ctx.fillText("持续 > 15 分钟", px, b.y + ch - u * 0.7);
    ctx.textAlign = "left";
    ctx.restore();
    return Object.assign({}, b, { chest: { x: px - u * 2, y: chy }, arm: { x: armX + u * 0.5, y: armY }, phone: { x: phx - pw / 2, y: phy } });
  }

  function hud() {
    const f = S.flow;
    const word = f > 85 ? "通畅" : f > 45 ? "变窄" : f > 10 ? "快堵了" : "堵塞";
    pill(14, 12, "血流", word, f > 85 ? C.mint : f > 45 ? "#e7a500" : "#f25f6b", false);
    const p = CH[cur].pill;
    if (p) pill(W - 14, 12, p[0], p[1], p[2] === "ok" ? C.mint : p[2] === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const r = scene(), g = r.g;
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const above = g.cy - g.R - g.wallT * 0.5, midY = (g.cy + g.R + g.wallT + g.myoTop) / 2 + H * 0.01;
    const downCells = r.cl.filter((c) => c.down && c.cx < W * 0.85 && c.cx > g.px + g.sig);
    const upCell = r.cl.find((c) => !c.down && c.cx > W * 0.08 && c.y > g.myoTop + H * 0.1) || r.cl[0];

    const ax = W * 0.14;
    callout("artery", on("artery"), ax, g.cy - g.R * 0.3, W * 0.2, above - H * 0.02, "冠状动脉：给心肌送氧");
    callout("cell", on("cell"), upCell.cx, upCell.cy + upCell.ch * 0.3, W * 0.2, H * 0.93, "心肌细胞");
    const cr = r.crown;
    callout("crown", on("crown") && !!cr, cr ? cr.heart.x : 0, cr ? cr.heart.y : 0, cr ? cr.x - W * 0.1 : 0, midY, "像王冠一样包着心脏");

    callout("plaque", on("plaque"), g.px, plaqueTop(g, g.px) + H * 0.02, g.px + W * 0.12, above - H * 0.02, "斑块让血管变窄");
    const d0 = downCells[1] || downCells[0];
    callout("angina", on("angina") && !!d0, d0 ? d0.cx : 0, d0 ? d0.cy : 0, W * 0.7, midY, "活动时心肌缺氧：胸闷");

    const cc = r.capCrack;
    callout("cap", on("cap") && !!cc, cc ? cc.x + g.sig * 0.3 : 0, cc ? cc.y : 0, W * 0.72, midY, "纤维帽裂开了");
    const p0 = r.plate0;
    callout("platelet", on("platelet") && !!p0, p0 ? p0.x : 0, p0 ? p0.y : 0, W * 0.2, midY, "血小板赶来“补洞”");

    const cp = r.clotPt;
    callout("clot", on("clot") && !!cp, cp ? cp.x : 0, cp ? cp.y : 0, W * 0.2, midY, "血栓把血管堵死了");
    const dd = downCells.find((c) => c.dead > 0.5) || downCells[0];
    callout("dead", on("dead") && !!dd, dd ? dd.cx : 0, dd ? dd.cy - dd.ch * 0.2 : 0, W * 0.72, midY, "下游心肌缺氧、坏死");

    const pc = r.person;
    const lx = pc ? pc.x / 2 : 0;
    callout("call", on("call") && !!pc, pc ? pc.phone.x : 0, pc ? pc.phone.y : 0, lx, pc ? pc.phone.y - 1 : 0, "马上拨打 120");
    callout("chest", on("chest") && !!pc, pc ? pc.chest.x : 0, pc ? pc.chest.y : 0, lx, pc ? pc.chest.y + H * 0.02 : 0, "胸口压榨样疼痛");

    const sp = r.stentPt;
    callout("stent", on("stent") && !!sp, sp ? sp.x : 0, sp ? sp.y : 0, g.px + W * 0.2, above - H * 0.02, "支架把血管撑开");
    const top = downCells.filter((c) => c.y < g.myoTop + H * 0.1 && c.dead < 0.5);
    const sv = top[top.length - 1];
    callout("saved", on("saved") && !!sv, sv ? sv.cx : 0, sv ? sv.cy : 0, W * 0.72, midY, "血流回来，心肌得救");
    const sc = downCells.filter((c) => c.dead > 0.5).sort((a, b) => b.y - a.y || a.cx - b.cx)[0];
    callout("scar", on("scar") && !!sc, sc ? sc.cx : 0, sc ? sc.cy + sc.ch * 0.25 : 0, W * 0.3, H * 0.97, "已坏死的长不回来");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#d4507a",
    titleCard: { lines: ["心梗为什么", "来得这么突然？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
