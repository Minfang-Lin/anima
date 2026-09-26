Anima.register("hypertension", {
    "title": "血管里的压力",
    "tag": "血压小剧场",
    "headline": "血压高一点，【要紧】吗？",
    "lede": "心脏像水泵，血管像水管。压力长期偏高，水管会受伤，水泵也会累坏。跟着红细胞小伙伴，看看高血压是怎样悄悄伤害身体的。",
    "summary": "血压是什么、为什么会升高，长期高压怎样伤害血管、心脏、大脑、肾脏和眼睛，以及怎样把血压管好。",
    "footer": "血压偏高或已确诊高血压，可到心内科或高血压门诊就诊。",
    "canvasLabel": "卡通心脏泵血和血管纵切面动画",
    "disease": "高血压",
    "organs": ["vessels", "heart"],
    "categories": ["cardio"],
    "color": "#3aa99f"
  }, () => {
  const CH = [
    { title: "血压是什么", sys: 118, dia: 76, press: 0.15, thick: 0, crack: 0, plaque: 0, lvh: 0, tired: 0, salt: 0, crowd: 0, arrows: 1, card: 0, organs: 0, med: 0, heal: 0,
      pill: ["心脏", "轻松", "ok"],
      text: "心脏像一个不知疲倦的水泵，每跳一下，就把血液推进血管。血液流动时推着血管壁，这股力量就是血压。心脏收缩、把血挤出去的那一刻压力最高，叫收缩压，也就是“高压”；心脏放松时压力最低，叫舒张压，也就是“低压”。",
      fact: "血压写成“收缩压/舒张压”，例如 118/76 mmHg",
      labels: ["pump", "push", "gauge"] },
    { title: "血压为什么会升高", sys: 128, dia: 82, press: 0.45, thick: 0.1, crack: 0, plaque: 0, lvh: 0, tired: 0.3, salt: 1, crowd: 1, arrows: 0.6, card: 1, organs: 0, med: 0, heal: 0,
      pill: ["心脏", "费劲", "warn"],
      text: "血压为什么会升高？吃得太咸，盐里的钠会把水分留在血管里，管子里的血多了，压力自然变大。超重、喝酒、长期紧张熬夜，也会让血压往上走。年纪大了血管弹性变差，再加上家族遗传，血压就更容易升高。",
      fact: "我国成人高血压患病率约 27%，大约每 4 个成年人就有 1 个",
      labels: ["salt", "crowd"] },
    { title: "血管被撑伤了", sys: 152, dia: 96, press: 0.85, thick: 0.65, crack: 1, plaque: 0.55, lvh: 0.3, tired: 0.55, salt: 0, crowd: 0.5, arrows: 1, card: 0, organs: 0, med: 0, heal: 0,
      pill: ["心脏", "吃力", "warn"],
      text: "血压长期偏高，血管壁天天被用力撑着，内壁会被撑出一道道小伤口。为了扛住压力，管壁越长越厚、越来越硬，小动脉的通道也跟着变窄。受伤的地方还容易让胆固醇钻进去，慢慢长出斑块。",
      fact: "诊室血压 ≥ 140/90 mmHg（非同日测量三次），可诊断高血压",
      labels: ["crack", "thick", "plaque"] },
    { title: "心脏越来越累", sys: 160, dia: 100, press: 0.95, thick: 0.85, crack: 0.6, plaque: 0.7, lvh: 1, tired: 1, salt: 0, crowd: 0.5, arrows: 0.5, card: 0, organs: 0, med: 0, heal: 0,
      pill: ["心脏", "很累", "bad"],
      text: "血管又硬又窄，心脏每跳一下都要使出更大的力气，才能把血推出去。就像天天举重的胳膊会变粗，心肌也会越练越厚，医学上叫左心室肥厚。可变厚的心肌并不更强壮，时间久了，心脏会累得泵不动血，发展成心力衰竭。",
      fact: "左心室肥厚可以通过心电图或心脏超声发现",
      labels: ["lvh", "hard"] },
    { title: "连累全身，却常常没感觉", sys: 165, dia: 102, press: 1, thick: 0.9, crack: 0.6, plaque: 0.75, lvh: 1, tired: 1, salt: 0, crowd: 0.5, arrows: 0.3, card: 0, organs: 1, med: 0, heal: 0,
      pill: ["心脏", "很累", "bad"],
      text: "全身的器官都靠血管供血，所以高血压会连累全身：脑血管破裂或堵塞，会引起中风；肾脏里的小血管受损，肾功能会慢慢下降；眼底血管也会出血、渗出。麻烦的是，很多人一直没有任何感觉，所以高血压又被叫作“沉默的杀手”。",
      fact: "家庭自测血压 ≥ 135/85 mmHg 就算偏高，要找医生看看",
      labels: ["silent"] },
    { title: "把血压管起来", sys: 128, dia: 80, press: 0.25, thick: 0.55, crack: 0, plaque: 0.5, lvh: 0.6, tired: 0, salt: 0, crowd: 0, arrows: 0.4, card: 0, organs: 0, med: 1, heal: 1,
      pill: ["心脏", "轻松", "ok"],
      text: "好消息是，高血压完全可以管好。家里备个血压计，定期量一量；少吃盐和咸菜，控制体重，规律运动，少喝酒、不吸烟，保证睡眠。需要吃药时，在医生指导下长期规律服用，血压降下来了也不要自己停药。",
      fact: "每天食盐不超过 5 克；多数人血压控制目标 < 130/80 mmHg",
      labels: ["measure", "life", "med"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    wall: "#ffb3b3", wallHot: "#ff7a7a", wallStiff: "#e9b7a6", adv: "#ffcdc4", lumen: "#fff4ec", endo: "#ffe0e6",
    rbc: "#ff7b7b", heartRed: "#ff6f86", heartHot: "#f2506a", chamber: "#ffd3db",
    salt: "#ffffff", water: "#9fd8ff", plaque: "#ffe29a", core: "#ffd166", tear: "#e0435a",
    fiber: "#f7dcc8", capsule: "#3aa99f", heartPink: "#ff9fb0", brain: "#ffb8c8", kidney: "#d9776b",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { sys: 118, dia: 76, press: 0.15, thick: 0, crack: 0, plaque: 0, lvh: 0, tired: 0, salt: 0, crowd: 0, arrows: 1, card: 0, organs: 0, med: 0, heal: 0 };
  let phase = 0; // 心跳相位（在 update 里累加，心率变化时不会跳）

  // ---------- 心跳与血管几何 ----------
  // 一次心跳里前 30% 是收缩期
  const beatAt = (ph) => { ph = ((ph % 1) + 1) % 1; return ph < 0.3 ? Math.sin(ph / 0.3 * Math.PI) : 0; };
  const G = () => {
    const cy = H * 0.47, R0 = H * 0.15, wall0 = H * 0.08;
    const R = R0 * (1 - 0.3 * S.thick);                // 管壁往里长厚，管腔变窄
    const amp = H * 0.014 * (0.6 + S.press) * (1 - 0.6 * S.thick);
    const hx = Math.max(H * 0.2, W * 0.1), hs = H * 0.19 * (1 + 0.12 * S.lvh);
    const px = W * 0.58, sig = W * 0.09;
    return { cy, R0, wall0, R, amp, hx, hs, px, sig };
  };
  const wave = (x) => beatAt(phase - (x / W) * 0.35);  // 压力波从心脏往右传
  const bump = (g, x) => Math.exp(-(((x - g.px) / g.sig) ** 2));
  const topE = (g, x) => g.cy - g.R - g.amp * wave(x);
  const botE = (g, x) => g.cy + g.R + g.amp * wave(x) - S.plaque * g.R * 0.45 * bump(g, x);
  const outT = (g, x) => g.cy - g.R0 - g.wall0 - g.amp * wave(x);
  const outB = (g, x) => g.cy + g.R0 + g.wall0 + g.amp * wave(x);

  // ---------- 粒子 ----------
  const rbcs = Array.from({ length: 28 }, (_, i) => ({ x: rnd(i + 5) * 1.2, yn: rnd(i + 55) * 1.5 - 0.75, ph: rnd(i + 95) * 6 }));
  const salts = Array.from({ length: 9 }, (_, i) => ({ x: rnd(i + 300) * 1.2, yn: rnd(i + 330) * 1.2 - 0.6, ph: rnd(i + 360) * 6 }));
  const caps = Array.from({ length: 3 }, (_, i) => ({ x: i / 3 + rnd(i + 400) * 0.1, yn: rnd(i + 420) * 1 - 0.5, ph: rnd(i + 440) * 6 }));
  const hearts = Array.from({ length: 8 }, (_, i) => ({ x: rnd(i + 8000), y: rnd(i + 8100), ph: rnd(i + 8200) * 6 }));

  const nRbc = () => Math.round(16 + 10 * S.crowd + 2 * S.press);

  function update(dt) {
    const rate = (68 + 18 * S.tired) / 60;
    phase += dt * rate;
    const g = G();
    const sp = dt * 0.075 * (1 + 0.5 * beatAt(phase)) * (1 - 0.2 * S.thick);
    for (const a of [rbcs, salts, caps]) for (const p of a) {
      const x = p.x * W, h = Math.max((botE(g, x) - topE(g, x)) / 2, 4);
      p.x += sp * clamp(g.R / h, 0.7, 1.8);
      if (p.x > 1.1) p.x -= 1.2;
    }
  }

  // ---------- 小画笔 ----------
  function heartPath(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * 0.95);
    ctx.bezierCurveTo(-s * 1.3, s * 0.1, -s * 0.8, -s * 1.0, 0, -s * 0.45);
    ctx.bezierCurveTo(s * 0.8, -s * 1.0, s * 1.3, s * 0.1, 0, s * 0.95);
    ctx.closePath();
  }
  function drawHeart(g) {
    const sq = beatAt(phase);
    const s = g.hs * (1 - 0.07 * sq), x = g.hx, y = g.cy;
    const moodH = clamp(1 - 1.9 * S.tired + 0.4 * S.heal, -1, 1);
    // 大动脉：从心脏上方接到血管
    ctx.save(); ctx.translate(x, y); ctx.rotate(-0.12 + 0.03 * sq);
    heartPath(s); ctx.fillStyle = mix(C.heartRed, C.heartHot, S.tired * 0.8); ctx.fill(); outline(3); ctx.stroke();
    // 剖开一小块看左心室：心肌越厚，腔越小
    const k = 1 - 0.45 * S.lvh;
    ctx.beginPath(); ctx.ellipse(-s * 0.05, s * 0.35, s * 0.36 * k, s * 0.28 * k, 0.2, 0, 6.3);
    ctx.fillStyle = C.chamber; ctx.fill(); outline(2); ctx.setLineDash([5, 4]); ctx.stroke(); ctx.setLineDash([]);
    // 高光
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.beginPath(); ctx.ellipse(-s * 0.5, -s * 0.45, s * 0.16, s * 0.09, -0.6, 0, 6.3); ctx.fill();
    face(s * 0.02, -s * 0.12, s * 0.42, moodH);
    ctx.restore();
    // 累了：满头大汗
    if (S.tired > 0.4) {
      ctx.save(); ctx.globalAlpha *= clamp((S.tired - 0.4) * 2, 0, 1);
      const t = (time * 0.8) % 1;
      sweat(x + s * 0.55, y - s * 0.75 + t * s * 0.3, s * 0.22);
      sweat(x - s * 0.75, y - s * 0.5 + ((t + 0.5) % 1) * s * 0.3, s * 0.18);
      ctx.restore();
    }
    return { x, y, s };
  }

  function rbc(x, y, r, mood, squash) {
    ctx.save(); ctx.translate(x, y); ctx.scale(1 - 0.12 * squash, 1 + 0.08 * squash);
    ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.82, 0, 0, 6.3); ctx.fillStyle = C.rbc; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.beginPath(); ctx.ellipse(-r * 0.45, -r * 0.42, r * 0.22, r * 0.13, -0.5, 0, 6.3); ctx.fill();
    face(0, r * 0.05, r * 0.7, mood);
    if (mood < -0.2) sweat(r * 0.72, -r * 0.8, r * 0.45);
    ctx.restore();
  }
  function saltCube(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    rrect(-s, -s, s * 2, s * 2, s * 0.35); ctx.fillStyle = C.salt; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.fillStyle = C.soft; ctx.font = `${s * 1.1}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("钠", 0, 1); ctx.textAlign = "left";
    ctx.restore();
    // 身边拉着几滴水
    for (let k = 0; k < 3; k++) {
      const a = time * 1.2 + k * 2.1, d = s * 2.1;
      const wx = x + Math.cos(a) * d, wy = y + Math.sin(a) * d * 0.8;
      ctx.beginPath(); ctx.moveTo(wx, wy - s * 0.7); ctx.quadraticCurveTo(wx + s * 0.55, wy + s * 0.1, wx, wy + s * 0.45);
      ctx.quadraticCurveTo(wx - s * 0.55, wy + s * 0.1, wx, wy - s * 0.7); ctx.fillStyle = C.water; ctx.fill(); outline(1.2); ctx.stroke();
    }
  }
  function capsule(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    rrect(-s, -s * 0.45, s * 2, s * 0.9, s * 0.45); ctx.fillStyle = C.paper; ctx.fill();
    ctx.save(); ctx.clip(); ctx.fillStyle = C.capsule; ctx.fillRect(0, -s, s * 1.2, s * 2); ctx.restore();
    rrect(-s, -s * 0.45, s * 2, s * 0.9, s * 0.45); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -s * 0.45); ctx.lineTo(0, s * 0.45); ctx.stroke();
    ctx.restore();
  }
  // 箭头：从 (x, y) 指向 dir（-1 向上，1 向下）
  function arrow(x, y, len, dir, a) {
    if (len < 3) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.strokeStyle = C.ink; ctx.lineWidth = 5; ctx.lineCap = "round";
    const y2 = y + dir * len, hw = Math.max(5, len * 0.35);
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y2); ctx.moveTo(x - hw, y2 - dir * hw); ctx.lineTo(x, y2); ctx.lineTo(x + hw, y2 - dir * hw); ctx.stroke();
    ctx.strokeStyle = "#ff9a3c"; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y2); ctx.moveTo(x - hw, y2 - dir * hw); ctx.lineTo(x, y2); ctx.lineTo(x + hw, y2 - dir * hw); ctx.stroke();
    ctx.restore();
  }

  // 血压表：刻度 60–200 mmHg，指针随心跳在舒张压和收缩压之间摆动
  function gauge(g, a) {
    const gx = W * 0.8, gy = H * 0.855, r = H * 0.095;
    const A0 = Math.PI * 0.8, A1 = Math.PI * 2.2, ang = (v) => A0 + (clamp(v, 60, 200) - 60) / 140 * (A1 - A0);
    ctx.save(); ctx.globalAlpha *= a;
    // 连着血管的小管子
    ctx.fillStyle = C.adv; rrect(gx - r * 0.18, outB(g, gx) - 6, r * 0.36, gy - r - outB(g, gx) + 10, 4); ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.arc(gx, gy, r, 0, 6.3); ctx.fillStyle = C.paper; ctx.fill(); outline(3); ctx.stroke();
    ctx.lineCap = "butt"; ctx.lineWidth = r * 0.16;
    for (const [v0, v1, col] of [[60, 130, C.mint], [130, 140, "#ffc94d"], [140, 200, "#f25f6b"]]) {
      ctx.strokeStyle = col; ctx.beginPath(); ctx.arc(gx, gy, r * 0.74, ang(v0), ang(v1)); ctx.stroke();
    }
    ctx.fillStyle = C.soft; ctx.font = `${r * 0.24}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("mmHg", gx, gy + r * 0.55);
    const v = S.dia + (S.sys - S.dia) * wave(gx);
    const na = ang(v);
    outline(3); ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx + Math.cos(na) * r * 0.66, gy + Math.sin(na) * r * 0.66); ctx.stroke();
    ctx.beginPath(); ctx.arc(gx, gy, r * 0.1, 0, 6.3); ctx.fillStyle = C.ink; ctx.fill();
    ctx.textAlign = "left";
    ctx.restore();
    return { x: gx, y: gy, r };
  }

  function card(title, a, rows) {
    const cw = Math.min(W * 0.55, H * 0.8), fs = Math.min(cw / 13.5, H * 0.05), ch = fs * rows, x = W - cw - 14, y = H - ch - 14;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, cw, ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(x, y, cw, ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.font = `${fs * 1.05}px ${Anima.ROUND}`; ctx.textBaseline = "middle";
    ctx.fillText(title, x + fs * 0.8, y + fs * 1.2);
    ctx.restore();
    return { x, y, cw, ch, fs };
  }

  function causesCard() {
    const c = card("血压为什么会升高", S.card, 7.3);
    ctx.save(); ctx.globalAlpha *= S.card;
    const items = [["吃得太咸", "#9fd8ff"], ["超重", "#ffc94d"], ["饮酒", "#c9a0ff"], ["紧张熬夜", "#8b7cf6"], ["年龄增长", "#e9b7a6"], ["家族遗传", "#6cc9ae"]];
    ctx.font = `${c.fs}px ${Anima.ROUND}`; ctx.textBaseline = "middle";
    items.forEach(([t, col], i) => {
      const cx = c.x + c.fs * 0.9 + (i % 2) * c.cw * 0.5, cy = c.y + c.fs * 2.9 + Math.floor(i / 2) * c.fs * 1.6;
      ctx.beginPath(); ctx.arc(cx + c.fs * 0.35, cy, c.fs * 0.38, 0, 6.3); ctx.fillStyle = col; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.fillStyle = C.ink; ctx.fillText(t, cx + c.fs * 1.05, cy + 1);
    });
    ctx.restore();
    return c;
  }

  function organsCard() {
    const c = card("长期高压，连累全身", S.organs, 7.6);
    ctx.save(); ctx.globalAlpha *= S.organs;
    const s = Math.min(c.cw / 9, c.fs * 1.35), cy = c.y + c.fs * 3.9;
    const xs = [0.18, 0.5, 0.82].map((f) => c.x + c.cw * f);
    // 大脑
    let x = xs[0];
    ctx.beginPath();
    for (let k = 0; k < 7; k++) { const a = Math.PI + k * Math.PI / 6; ctx.arc(x + Math.cos(a) * s * 0.75, cy + Math.sin(a) * s * 0.55, s * 0.38, 0, 6.3); }
    ctx.ellipse(x, cy + s * 0.05, s * 1.05, s * 0.72, 0, 0, 6.3);
    ctx.fillStyle = C.brain; ctx.fill();
    ctx.beginPath(); ctx.ellipse(x, cy, s * 1.05, s * 0.8, 0, 0, 6.3); ctx.fill(); outline(2); ctx.stroke();
    outline(1.4); ctx.beginPath(); ctx.moveTo(x, cy - s * 0.78); ctx.quadraticCurveTo(x + s * 0.15, cy - s * 0.3, x, cy + s * 0.1);
    ctx.moveTo(x - s * 0.75, cy - s * 0.2); ctx.quadraticCurveTo(x - s * 0.45, cy - s * 0.45, x - s * 0.3, cy - s * 0.2);
    ctx.moveTo(x + s * 0.75, cy - s * 0.2); ctx.quadraticCurveTo(x + s * 0.45, cy - s * 0.45, x + s * 0.3, cy - s * 0.2); ctx.stroke();
    face(x, cy + s * 0.2, s * 0.5, -0.8, false);
    // 肾脏：蚕豆形
    x = xs[1];
    ctx.beginPath();
    ctx.moveTo(x + s * 0.2, cy - s * 0.85);
    ctx.bezierCurveTo(x - s * 1.2, cy - s * 1.0, x - s * 1.2, cy + s * 1.0, x + s * 0.2, cy + s * 0.85);
    ctx.bezierCurveTo(x + s * 0.8, cy + s * 0.7, x + s * 0.25, cy + s * 0.25, x + s * 0.35, cy);
    ctx.bezierCurveTo(x + s * 0.25, cy - s * 0.25, x + s * 0.8, cy - s * 0.7, x + s * 0.2, cy - s * 0.85);
    ctx.fillStyle = C.kidney; ctx.fill(); outline(2); ctx.stroke();
    face(x - s * 0.3, cy, s * 0.45, -0.8, false);
    // 眼睛：眼底血管
    x = xs[2];
    ctx.beginPath(); ctx.ellipse(x, cy, s * 1.0, s * 0.62, 0, 0, 6.3); ctx.fillStyle = C.paper; ctx.fill(); outline(2); ctx.stroke();
    ctx.strokeStyle = "#e0435a"; ctx.lineWidth = 1.4;
    for (const [dx, dy] of [[-0.85, -0.2], [-0.75, 0.3], [0.8, -0.25], [0.85, 0.2]]) {
      ctx.beginPath(); ctx.moveTo(x + dx * s, cy + dy * s); ctx.quadraticCurveTo(x + dx * s * 0.7, cy + dy * s * 1.6, x + dx * s * 0.5, cy + dy * s * 0.5); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(x, cy, s * 0.38, 0, 6.3); ctx.fillStyle = "#8a6a5a"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, cy, s * 0.17, 0, 6.3); ctx.fillStyle = C.ink; ctx.fill();
    ctx.fillStyle = C.paper; ctx.beginPath(); ctx.arc(x - s * 0.12, cy - s * 0.12, s * 0.07, 0, 6.3); ctx.fill();
    // 名字
    ctx.fillStyle = C.ink; ctx.font = `${c.fs * 0.9}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ["中风", "肾脏受损", "眼底病变"].forEach((t, i) => ctx.fillText(t, xs[i], c.y + c.ch - c.fs * 0.95));
    ctx.textAlign = "left";
    ctx.restore();
    return c;
  }

  // mix() 返回 rgb(...)，再混一次色要先转回 #rrggbb
  const toHex = (rgb) => "#" + rgb.match(/\d+/g).map((v) => (+v).toString(16).padStart(2, "0")).join("");

  // ---------- 场景 ----------
  function scene() {
    const g = G(), step = Math.max(4, W / 160);
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(24, C.dot);

    // 外膜 + 中膜（中膜随压力变红、随变硬发黄发灰）
    ctx.beginPath();
    for (let x = -step; x <= W + step; x += step) ctx.lineTo(x, outT(g, x));
    for (let x = W + step; x >= -step; x -= step) ctx.lineTo(x, outB(g, x));
    ctx.closePath(); ctx.fillStyle = C.adv; ctx.fill();
    const wallCol = mix(C.wall, C.wallHot, S.press * 0.8 * (1 - S.heal * 0.7));
    ctx.fillStyle = mix(toHex(wallCol), C.wallStiff, S.thick * 0.6);
    ctx.beginPath();
    for (let x = -step; x <= W + step; x += step) ctx.lineTo(x, outT(g, x) + g.wall0 * 0.3);
    for (let x = W + step; x >= -step; x -= step) ctx.lineTo(x, outB(g, x) - g.wall0 * 0.3);
    ctx.closePath(); ctx.fill();
    // 变硬的管壁：一层层纤维
    if (S.thick > 0.05) {
      ctx.strokeStyle = C.fiber; ctx.lineWidth = 2; ctx.globalAlpha = clamp(S.thick * 1.5, 0, 1);
      for (const side of [-1, 1]) for (let f = 0; f < 3; f++) {
        ctx.beginPath();
        for (let x = 0; x <= W; x += step) {
          const yy = side < 0 ? outT(g, x) + g.wall0 * 0.45 + f * ((g.R0 - g.R) + g.wall0 * 0.2) / 3 : outB(g, x) - g.wall0 * 0.45 - f * ((g.R0 - g.R) + g.wall0 * 0.2) / 3;
          ctx[x ? "lineTo" : "moveTo"](x, yy);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    outline(3); ctx.beginPath();
    for (let x = -step; x <= W + step; x += step) ctx.lineTo(x, outT(g, x));
    ctx.stroke(); ctx.beginPath();
    for (let x = -step; x <= W + step; x += step) ctx.lineTo(x, outB(g, x));
    ctx.stroke();

    // 管腔
    ctx.fillStyle = C.lumen; ctx.beginPath();
    for (let x = -step; x <= W + step; x += step) ctx.lineTo(x, topE(g, x));
    for (let x = W + step; x >= -step; x -= step) ctx.lineTo(x, botE(g, x));
    ctx.closePath(); ctx.fill();

    // 斑块
    if (S.plaque > 0.02) {
      ctx.beginPath();
      for (let x = g.px - g.sig * 2.2; x <= g.px + g.sig * 2.2; x += step) ctx.lineTo(x, botE(g, x));
      for (let x = g.px + g.sig * 2.2; x >= g.px - g.sig * 2.2; x -= step) ctx.lineTo(x, g.cy + g.R + g.amp * wave(x) + S.plaque * g.R * 0.2 * bump(g, x));
      ctx.closePath();
      ctx.fillStyle = C.plaque; ctx.fill();
      const coreH = S.plaque * g.R * 0.28;
      ctx.beginPath(); ctx.ellipse(g.px, g.cy + g.R - coreH * 0.4, g.sig * 0.6 * S.plaque + 2, coreH * 0.5 + 1, 0, 0, 6.3);
      ctx.fillStyle = C.core; ctx.fill(); outline(1.8); ctx.setLineDash([5, 5]); ctx.stroke(); ctx.setLineDash([]);
      outline(3); ctx.beginPath();
      for (let x = g.px - g.sig * 1.8; x <= g.px + g.sig * 1.8; x += step) ctx.lineTo(x, botE(g, x));
      ctx.stroke();
    }

    // 内皮细胞
    const cellL = Math.max(22, W / 30);
    const tears = [];
    for (const side of [-1, 1]) {
      for (let i = 0, x = cellL / 2; x < W + cellL; i++, x += cellL) {
        const y = (side < 0 ? topE(g, x) : botE(g, x)) - side * 4;
        const ang = side > 0 ? Math.atan2(botE(g, x + 1) - botE(g, x - 1), 2) : Math.atan2(topE(g, x + 1) - topE(g, x - 1), 2);
        ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
        rrect(-cellL * 0.44, -4.5, cellL * 0.88, 9, 4.5); ctx.fillStyle = mix(C.endo, "#ffc0c8", S.press * 0.5); ctx.fill(); outline(1.6); ctx.stroke();
        ctx.restore();
      }
    }
    // 被撑出的小伤口
    if (S.crack > 0.02) {
      for (const [f, side] of [[0.4, -1], [0.72, -1], [0.3, 1]]) {
        const x = f * W, y0 = side < 0 ? topE(g, x) : botE(g, x);
        const d = (g.R0 - g.R + g.wall0 * 0.5) * 0.9 + H * 0.02;
        ctx.save(); ctx.globalAlpha *= S.crack * (0.75 + 0.25 * Math.sin(time * 3 + f * 9));
        ctx.strokeStyle = C.tear; ctx.lineWidth = 3.2; ctx.lineJoin = "miter";
        ctx.beginPath(); ctx.moveTo(x - H * 0.012, y0);
        for (let j = 1; j <= 4; j++) ctx.lineTo(x + (j % 2 ? H * 0.012 : -H * 0.012), y0 + side * d * j / 4);
        ctx.stroke();
        ctx.restore();
        tears.push({ x, y: y0 + side * d * 0.3 });
      }
    }

    // 撑着管壁的箭头（就是血压）
    if (S.arrows > 0.02) {
      for (const f of [0.34, 0.5, 0.66]) {
        const x = f * W, w = wave(x), room = (botE(g, x) - topE(g, x)) * 0.3;
        const len = Math.min(room, H * (0.02 + 0.05 * (0.3 + S.press) * (0.35 + 0.65 * w)));
        arrow(x, topE(g, x) + len + H * 0.015, len, -1, S.arrows);
        arrow(x, botE(g, x) - len - H * 0.015, len, 1, S.arrows);
      }
    }

    // 盐和水
    const rr = Math.max(9, H * 0.036);
    const yIn = (x, yn, r) => { const t = topE(g, x) + r + 6, b = botE(g, x) - r - 6; return clamp(g.cy + yn * g.R * 0.8, t, Math.max(t, b)); };
    let salt0 = null;
    const nSalt = Math.round(S.salt * salts.length);
    for (let i = 0; i < nSalt; i++) {
      const p = salts[i], x = p.x * W, y = yIn(x, p.yn, rr) + Math.sin(time * 1.5 + p.ph) * 2;
      saltCube(x, y, rr * 0.62, Math.sin(time + p.ph) * 0.3);
      if (!salt0 && x > W * 0.5 && x < W * 0.8) salt0 = { x, y };
    }
    // 红细胞
    const mood = clamp(1 - 1.8 * S.press + 0.5 * S.heal, -1, 1);
    const rbcPos = [];
    for (let i = 0; i < nRbc(); i++) {
      const p = rbcs[i], x = p.x * W;
      const y = yIn(x, p.yn * (1 - 0.3 * S.crowd), rr) + Math.sin(time * 1.6 + p.ph) * 2;
      rbc(x, y, rr, mood, S.press * 0.8 + 0.3 * S.thick);
      rbcPos.push({ x, y });
    }
    // 降压药小胶囊
    let cap0 = null;
    if (S.med > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.med;
      for (const p of caps) {
        const x = p.x * W, y = yIn(x, p.yn, rr) + Math.sin(time * 1.2 + p.ph) * 3;
        capsule(x, y, rr * 0.8, Math.sin(time * 0.8 + p.ph) * 0.4);
        if (!cap0 || Math.abs(x - W * 0.6) < Math.abs(cap0.x - W * 0.6)) cap0 = { x, y };
      }
      ctx.restore();
    }

    const hrt = drawHeart(g);
    const gz = gauge(g, clamp(1 - S.card - S.organs, 0, 1));
    const cc = S.card > 0.02 ? causesCard() : null;
    const oc = S.organs > 0.02 ? organsCard() : null;

    if (S.heal > 0.02) {
      for (const h of hearts) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.9;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), C.heartPink);
        ctx.restore();
      }
    }
    return { g, hrt, gz, cc, oc, salt0, rbcPos, tears, cap0 };
  }

  function hud() {
    const sys = Math.round(S.sys), dia = Math.round(S.dia);
    const col = sys >= 140 || dia >= 90 ? "#f25f6b" : sys >= 130 || dia >= 80 ? "#e7a500" : C.mint;
    pill(14, 12, "血压", `${sys}/${dia} mmHg`, col, false);
    const [label, value, st] = CH[cur].pill;
    pill(W - 14, 12, label, value, st === "ok" ? C.mint : st === "warn" ? "#e7a500" : "#f25f6b", true);
  }

  function draw() {
    const r = scene(), g = r.g;
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const above = g.cy - g.R0 - g.wall0 * 0.6, below = g.cy + g.R0 + g.wall0 * 0.8;
    const { hrt } = r;
    const near = (fx) => r.rbcPos.reduce((b, p) => (!b || Math.abs(p.x - fx * W) < Math.abs(b.x - fx * W) ? p : b), null) || { x: fx * W, y: g.cy };

    callout("pump", on("pump"), hrt.x + hrt.s * 0.1, hrt.y - hrt.s * 0.6, hrt.x + W * 0.03, above - H * 0.04, "心脏像水泵");
    const ax = W * 0.5;
    callout("push", on("push"), ax, topE(g, ax) + H * 0.01, W * 0.66, above - H * 0.04, "这股推力就是血压");
    callout("gauge", on("gauge"), r.gz.x - r.gz.r * 0.7, r.gz.y, W * 0.42, H * 0.86, "收缩时高压，放松时低压");

    const s0 = r.salt0;
    callout("salt", on("salt") && !!s0, s0 ? s0.x : 0, s0 ? s0.y : 0, W * 0.7, above - H * 0.04, "盐把水留在血管里");
    const c0 = near(0.4);
    callout("crowd", on("crowd"), c0.x, c0.y, W * 0.26, above - H * 0.04, "血多了，挤一挤");

    const t0 = r.tears[1] || { x: 0, y: 0 };
    callout("crack", on("crack") && r.tears.length > 1, t0.x, t0.y, W * 0.66, above - H * 0.04, "管壁被撑出小伤口");
    const tx = W * 0.2;
    callout("thick", on("thick"), tx, topE(g, tx) - (g.R0 - g.R) * 0.5 - g.wall0 * 0.3, W * 0.24, above - H * 0.04, "管壁变厚变硬");
    callout("plaque", on("plaque"), g.px, botE(g, g.px) + 6, W * 0.45, H * 0.86, "伤口处容易长斑块");

    callout("lvh", on("lvh"), hrt.x - hrt.s * 0.05, hrt.y + hrt.s * 0.35, hrt.x + W * 0.12, H * 0.86, "心肌越练越厚");
    const hx2 = W * 0.62;
    callout("hard", on("hard"), hx2, topE(g, hx2), W * 0.6, above - H * 0.04, "血管又硬又窄，推不动");

    const m0 = near(0.45);
    callout("silent", on("silent"), m0.x, m0.y, W * 0.5, above - H * 0.04, "常常没感觉：沉默的杀手");

    callout("measure", on("measure"), r.gz.x - r.gz.r * 0.7, r.gz.y, W * 0.42, H * 0.86, "定期量一量血压");
    const l0 = near(0.28);
    callout("life", on("life"), l0.x, l0.y, W * 0.24, above - H * 0.04, "少盐多动睡好觉");
    const cp = r.cap0;
    callout("med", on("med") && !!cp, cp ? cp.x : 0, cp ? cp.y : 0, W * 0.72, above - H * 0.04, "遵医嘱，别停药");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#3aa99f",
    titleCard: { lines: ["血压高一点，", "要紧吗？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
