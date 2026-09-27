Anima.register("hypoglycemia", {
    "title": "糖太少也危险：低血糖",
    "tag": "血糖小剧场",
    "headline": "血糖太【低】，大脑最先饿",
    "lede": "大家常担心血糖高，其实血糖太低也很危险。大脑几乎全靠血里的葡萄糖吃饭，糖一少，它最先“饿晕”。看看低血糖怎么认、为什么会发生、怎么急救、怎么预防。",
    "summary": "大脑为什么怕缺糖，低血糖的标准和表现，常见原因，“15-15 法则”急救和日常预防。",
    "footer": "反复低血糖或出现意识改变，请及时就医；糖尿病患者请到内分泌科调整方案。",
    "canvasLabel": "卡通大脑通过血管吃葡萄糖小方块的动画",
    "disease": "低血糖",
    "organs": ["pancreas", "brain"],
    "categories": ["metabolic"],
    "color": "#e8792c"
  }, () => {
  // glu：左上角血糖值（mmol/L）；alarm 报警铃；drain 糖被用掉太快；feed 补糖；heal 飘爱心
  // k1～k6：右边小卡片的六种内容
  const CH = [
    { title: "大脑最爱吃糖", glu: 5.5, alarm: 0, drain: 0, feed: 0, heal: 0, k1: 1, k2: 0, k3: 0, k4: 0, k5: 0, k6: 0,
      pill: ["大脑", "吃得饱", "ok"],
      text: "大脑是全身最爱吃糖的器官。它几乎全靠血液送来的葡萄糖发电，自己却差不多不存粮，不像肝脏和肌肉，能把糖存成糖原备用。所以血糖一往下掉，最先“饿肚子”的就是大脑，人会没精神、反应变慢。",
      fact: "大脑只占体重约 2%，却要用掉全身约 20% 的能量",
      labels: ["brain", "glu"] },
    { title: "血糖多低算低", glu: 3.6, alarm: 0, drain: 0, feed: 0, heal: 0, k1: 0, k2: 1, k3: 0, k4: 0, k5: 0, k6: 0,
      pill: ["低血糖线", "3.9", "warn"],
      text: "血糖多低才算低？有糖尿病的人，只要低于 3.9 mmol/L，就算低血糖，要赶紧处理；没有糖尿病的人，一般低于 2.8 mmol/L 才算。如果低于 3.0 mmol/L，就属于明显的低血糖，不管有没有感觉，都要马上处理。",
      fact: "单位 mmol/L：糖尿病 <3.9，非糖尿病 <2.8，<3.0 属明显低血糖",
      labels: ["hungry", "few"] },
    { title: "身体拉响警报", glu: 2.7, alarm: 1, drain: 0, feed: 0, heal: 0, k1: 0, k2: 0, k3: 1, k4: 0, k5: 0, k6: 0,
      pill: ["大脑", "饿晕了", "bad"],
      text: "血糖一低，身体先拉响警报：心慌、手抖、出冷汗、特别饿、头晕乏力。再低下去，大脑缺糖，会注意力不集中、说话含糊、行为反常，严重时抽搐、昏迷。老人和糖尿病多年的人，可能没有警报就直接糊涂；夜里低血糖，可能表现为做噩梦、出汗、早上头痛。",
      fact: "有人“没感觉”；夜里低血糖可表现为噩梦、出汗、晨起头痛",
      labels: ["alarm", "dizzy"] },
    { title: "为什么会低", glu: 3.3, alarm: 0, drain: 1, feed: 0, heal: 0, k1: 0, k2: 0, k3: 0, k4: 1, k5: 0, k6: 0,
      pill: ["大脑", "饿肚子", "warn"],
      text: "为什么会低？最常见的是用了胰岛素，或者磺脲类等促进胰岛素分泌的药以后，没按时吃饭、吃得太少。运动量突然加大，糖被肌肉用掉很多；空腹喝酒，肝脏忙着处理酒精，顾不上往血里放糖；药量不合适，也会把血糖降过头。",
      fact: "用胰岛素或促泌剂（如磺脲类）的人，更要留心低血糖",
      labels: ["drain", "late"] },
    { title: "急救：15-15 法则", glu: 5.0, alarm: 0, drain: 0, feed: 1, heal: 0, k1: 0, k2: 0, k3: 0, k4: 0, k5: 1, k6: 0,
      pill: ["急救", "15-15", "ok"],
      text: "人还清醒时，用“15-15 法则”：马上吃约 15 克升糖快的东西，比如葡萄糖片，或半杯到一杯果汁、含糖饮料，约 3～4 块方糖。15 分钟后再测，还低就再吃一次；好转后离下顿饭还远，再吃点主食。巧克力、坚果升糖慢，不适合急救。人已经迷糊了，别硬喂，马上打 120。",
      fact: "意识不清时不要喂食，以免呛噎，立即拨打 120",
      labels: ["feed", "back"] },
    { title: "低血糖，可以预防", glu: 6.0, alarm: 0, drain: 0, feed: 0, heal: 1, k1: 0, k2: 0, k3: 0, k4: 0, k5: 0, k6: 1,
      pill: ["大脑", "吃饱啦", "ok"],
      text: "预防低血糖，记住几件小事：随身带几块糖和病情卡；按时按量吃饭；运动前后测测血糖，必要时加餐；不空腹喝酒。如果反复低血糖，别自己硬扛，请医生调整治疗方案。再教会家里人认出低血糖、知道怎么帮忙，大脑就能天天吃饱饭啦。",
      fact: "随身带糖和病情卡；反复低血糖，请医生调整方案",
      labels: ["happy", "flow"] },
  ];
  const DUR = 12;

  const C = Object.assign({}, Anima.C, {
    wall: "#ff9d9d", lumen: "#ffe3dc", brain: "#ffb3c8", brainLo: "#d8c7d2", gyr: "#e98aa7",
    bell: "#ffcf4d", orange: "#e8792c", red: "#f25f6b", warn: "#e7a500", juice: "#ffa94d",
    cup: "#bfe6ff", skin: "#ffe0cc", card: "#fff6da", heartPink: "#ff9fb0", green: "#8fd18a",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, dots, callout, pill } = Anima;
  const ROUND = Anima.ROUND;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { glu: 5.5, alarm: 0, drain: 0, feed: 0, heal: 0, k1: 1, k2: 0, k3: 0, k4: 0, k5: 0, k6: 0 };

  // ---------- 布局 ----------
  // 右边是小卡片，左边是大脑 + 血管；窄屏卡片占一半宽
  function L() {
    const narrow = W < 600;
    const cw = narrow ? W * 0.5 : Math.min(W * 0.42, H * 0.8);
    const ch = narrow ? H * 0.7 : H * 0.72;
    const cx = W - cw - 12, cy = H - ch - 12;
    const lw = cx - 12;
    const bx = 6 + lw * 0.52, by = H * 0.43;
    const br = Math.min(lw * 0.3, H * 0.2), ry = br * 0.8;
    const vy = H * 0.85, vr = H * 0.055;
    return { narrow, cw, ch, cx, cy, lw, bx, by, br, ry, vy, vr };
  }
  const low = () => clamp((3.9 - S.glu) / 1.1, 0, 1);         // 越低越接近 1
  const feedK = () => clamp((S.glu - 2) / 4, 0.08, 1);          // 血里的糖多少

  // ---------- 粒子 ----------
  const cubes = Array.from({ length: 46 }, (_, i) => ({ x: rnd(i + 11), yn: rnd(i + 70) * 1.6 - 0.8, ph: rnd(i + 130) * 6 }));
  const sinks = [];
  const pours = [];
  const hearts = Array.from({ length: 8 }, (_, i) => ({ x: rnd(i + 900), y: rnd(i + 950), ph: rnd(i + 990) * 6 }));
  let pourT = 0, lastCur = -1, chT = 0;

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; chT = 0; }
    chT += dt;
    const g = L();
    const k = feedK();
    for (const p of cubes) { p.x += dt * (0.05 + 0.03 * k); if (p.x > 1.03) p.x -= 1.06; }
    // 第 4 幕：糖从血管里被拉走
    if (S.drain > 0.4 && Math.random() < dt * 3.5 * S.drain) sinks.push({ x: (0.05 + Math.random() * 0.9) * g.lw, d: 0, life: 1.6 });
    for (let i = sinks.length - 1; i >= 0; i--) { const s = sinks[i]; s.d += dt; s.life -= dt; if (s.life <= 0) sinks.splice(i, 1); }
    // 第 5 幕：果汁里的糖倒进血管
    pourT += dt;
    if (S.feed > 0.4 && pourT > 0.28) { pourT = 0; pours.push({ t: 0, off: Math.random() }); }
    for (let i = pours.length - 1; i >= 0; i--) { pours[i].t += dt * 0.8; if (pours[i].t >= 1) pours.splice(i, 1); }
  }

  // ---------- 小画笔 ----------
  function sugarCube(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(rot) * 0.4);
    rrect(-s, -s, s * 2, s * 2, s * 0.5);
    ctx.fillStyle = C.sugar; ctx.fill(); outline(Math.max(1.2, s * 0.3)); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath(); ctx.arc(-s * 0.35, -s * 0.35, s * 0.28, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  function txt(t, x, y, fs, col, align) {
    ctx.font = `${fs}px ${ROUND}`; ctx.fillStyle = col || C.ink; ctx.textBaseline = "middle"; ctx.textAlign = align || "center";
    ctx.fillText(t, x, y + 1); ctx.textAlign = "left";
  }
  function fitTxt(t, x, y, fs, maxW, col, align) {
    ctx.font = `${fs}px ${ROUND}`;
    while (fs > 8 && ctx.measureText(t).width > maxW) { fs -= 0.5; ctx.font = `${fs}px ${ROUND}`; }
    txt(t, x, y, fs, col, align);
  }
  function starShape(x, y, r, col) {
    ctx.beginPath();
    for (let m = 0; m < 10; m++) { const rr = m % 2 ? r * 0.45 : r, t = m * Math.PI / 5 - Math.PI / 2; ctx.lineTo(x + Math.cos(t) * rr, y + Math.sin(t) * rr); }
    ctx.closePath(); ctx.fillStyle = col; ctx.fill(); outline(1.2); ctx.stroke();
  }

  // 卡通大脑：波浪边的胖团子，中间一道沟，里面几条脑回
  function brainPath(x, y, rx, ry) {
    ctx.beginPath();
    for (let i = 0; i <= 72; i++) {
      const a = i / 72 * Math.PI * 2;
      const bump = 1 + 0.055 * Math.sin(a * 9) + 0.02 * Math.sin(a * 4 + 1);
      const flat = Math.sin(a) > 0 ? 0.86 : 1; // 下面平一点
      ctx.lineTo(x + Math.cos(a) * rx * bump, y + Math.sin(a) * ry * bump * flat);
    }
    ctx.closePath();
  }
  function drawBrain(g) {
    const lo = low();
    const eat = Math.sin(time * 3) * 0.02 * (1 - lo);
    const shake = Math.sin(time * 23) * g.br * 0.012 * lo;
    const x = g.bx + shake, y = g.by + Math.sin(time * 1.4) * g.br * 0.03;
    const rx = g.br * (1 + eat), ry = g.ry * (1 - eat);
    // 饱饱时的暖光
    const glow = 1 - lo;
    if (glow > 0.05) {
      const gr = ctx.createRadialGradient(x, y, rx * 0.5, x, y, rx * 1.5);
      gr.addColorStop(0, `rgba(255,214,90,${0.35 * glow})`); gr.addColorStop(1, "rgba(255,214,90,0)");
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(x, y, rx * 1.5, 0, Math.PI * 2); ctx.fill();
    }
    brainPath(x, y, rx, ry);
    ctx.fillStyle = mix(C.brain, C.brainLo, lo); ctx.fill(); outline(Math.max(2, g.br * 0.035)); ctx.stroke();
    // 脑回
    ctx.save(); brainPath(x, y, rx * 0.97, ry * 0.97); ctx.clip();
    ctx.strokeStyle = mix(C.gyr, "#b9a4b2", lo); ctx.lineWidth = Math.max(1.5, g.br * 0.035); ctx.lineCap = "round";
    const curls = [[-0.55, -0.45, 0.3], [-0.2, -0.62, 0.25], [0.3, -0.58, 0.28], [0.62, -0.25, 0.25], [-0.7, 0.05, 0.22], [0.72, 0.18, 0.2]];
    for (const [cx, cy, r] of curls) {
      ctx.beginPath();
      for (let t = 0; t <= 1; t += 0.05) {
        const a = t * Math.PI * 1.5 + cx * 3;
        ctx.lineTo(x + (cx + Math.cos(a) * r * (0.4 + 0.6 * t)) * rx, y + (cy + Math.sin(a) * r * (0.4 + 0.6 * t)) * ry);
      }
      ctx.stroke();
    }
    ctx.restore();
    // 中间的沟
    outline(Math.max(1.5, g.br * 0.03));
    ctx.beginPath(); ctx.moveTo(x, y - ry * 0.95); ctx.quadraticCurveTo(x + rx * 0.06, y - ry * 0.6, x - rx * 0.02, y - ry * 0.35); ctx.stroke();
    // 小脸
    const mood = clamp((S.glu - 3.9) / 1.1, -1, 1);
    face(x, y + ry * 0.25, g.br * 0.42, mood, lo < 0.6);
    // 缺糖：汗珠 + 转圈的小星星
    if (lo > 0.15) {
      ctx.save(); ctx.globalAlpha *= clamp((lo - 0.15) * 2, 0, 1);
      sweat(x + rx * 0.8, y - ry * 0.55 + ((time * 0.7) % 1) * ry * 0.3, g.br * 0.2);
      sweat(x - rx * 0.88, y - ry * 0.2 + ((time * 0.7 + 0.5) % 1) * ry * 0.3, g.br * 0.15);
      for (let k = 0; k < 3; k++) {
        const a = time * 1.8 + k * 2.1;
        starShape(x + Math.cos(a) * rx * 0.55, y - ry * 1.08 + Math.sin(a) * ry * 0.12, g.br * 0.09, C.sugar);
      }
      ctx.restore();
    }
    return { x, y, rx, ry };
  }

  // 报警铃
  function drawBell(x, y, s) {
    const sw = Math.sin(time * 9) * 0.35;
    ctx.save(); ctx.translate(x, y); ctx.rotate(sw);
    ctx.beginPath();
    ctx.moveTo(-s * 0.75, s * 0.55);
    ctx.quadraticCurveTo(-s * 0.7, -s * 0.8, 0, -s * 0.85);
    ctx.quadraticCurveTo(s * 0.7, -s * 0.8, s * 0.75, s * 0.55);
    ctx.closePath(); ctx.fillStyle = C.bell; ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, s * 0.68, s * 0.18, 0, Math.PI * 2); ctx.fillStyle = C.orange; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, -s * 0.95, s * 0.12, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.restore();
    outline(2);
    for (const sg of [-1, 1]) for (let k = 1; k <= 2; k++) {
      ctx.save(); ctx.globalAlpha *= 0.5 + 0.5 * Math.sin(time * 9 + k);
      ctx.beginPath(); ctx.arc(x, y, s * (0.9 + k * 0.35), sg < 0 ? Math.PI * 0.8 : -Math.PI * 0.2, sg < 0 ? Math.PI * 1.2 : Math.PI * 0.2); ctx.stroke();
      ctx.restore();
    }
  }

  // 果汁杯（带吸管）
  function drawJuice(x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(0.35 + Math.sin(time * 2) * 0.05);
    ctx.strokeStyle = C.ink; ctx.lineWidth = s * 0.14 + 3; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(s * 0.2, -s * 0.9); ctx.lineTo(s * 0.45, -s * 1.5); ctx.stroke();
    ctx.strokeStyle = "#ff7b9c"; ctx.lineWidth = s * 0.14;
    ctx.beginPath(); ctx.moveTo(s * 0.2, -s * 0.9); ctx.lineTo(s * 0.45, -s * 1.5); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-s * 0.6, -s * 0.9); ctx.lineTo(s * 0.6, -s * 0.9); ctx.lineTo(s * 0.45, s * 0.9); ctx.lineTo(-s * 0.45, s * 0.9); ctx.closePath();
    ctx.fillStyle = C.cup; ctx.fill();
    ctx.save(); ctx.clip(); ctx.fillStyle = C.juice; ctx.fillRect(-s, -s * 0.45, s * 2, s * 1.5); ctx.restore();
    outline(2); ctx.stroke();
    face(0, s * 0.25, s * 0.55, 1);
    ctx.restore();
  }

  function scene(g) {
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(26, C.dot);
    const k = feedK();

    // 主血管（横在下面）
    ctx.fillStyle = C.wall; ctx.fillRect(-4, g.vy - g.vr - g.vr * 0.35, W + 8, (g.vr + g.vr * 0.35) * 2);
    ctx.fillStyle = C.lumen; ctx.fillRect(-4, g.vy - g.vr, W + 8, g.vr * 2);
    outline(2.5);
    ctx.beginPath(); ctx.moveTo(0, g.vy - g.vr * 1.35); ctx.lineTo(W, g.vy - g.vr * 1.35); ctx.moveTo(0, g.vy + g.vr * 1.35); ctx.lineTo(W, g.vy + g.vr * 1.35); ctx.stroke();

    // 通往大脑的小血管
    const top = g.by + g.ry * 0.6, bot = g.vy - g.vr;
    const bw = Math.max(8, g.br * 0.3);
    ctx.fillStyle = C.wall; rrect(g.bx - bw * 0.75, top, bw * 1.5, bot - top + 2, bw * 0.3); ctx.fill(); outline(2.5); ctx.stroke();
    ctx.fillStyle = C.lumen; ctx.fillRect(g.bx - bw * 0.45, top, bw * 0.9, bot - top + g.vr * 0.4);
    // 管壁接口处盖住描边
    ctx.fillStyle = C.lumen; ctx.fillRect(g.bx - bw * 0.45, g.vy - g.vr * 1.4, bw * 0.9, g.vr * 0.8);

    const cs = Math.max(3.5, H * 0.013);
    // 血管里的小方糖：糖越少越稀
    const n = Math.round(k * cubes.length);
    for (let i = 0; i < n; i++) {
      const p = cubes[i];
      sugarCube(p.x * W, g.vy + p.yn * g.vr * 0.75 + Math.sin(time * 2 + p.ph) * 2, cs, p.ph + time);
    }
    // 沿小血管往上送进大脑
    const m = Math.round(k * 5 + 0.4);
    const up = [];
    for (let i = 0; i < 5; i++) {
      if (i >= m) continue;
      const t = (time * (0.12 + 0.12 * k) + i / 5) % 1;
      const y = bot + g.vr * 0.3 - t * (bot + g.vr * 0.3 - top - g.ry * 0.15);
      const a = t > 0.85 ? (1 - t) / 0.15 : 1;
      ctx.save(); ctx.globalAlpha *= a;
      sugarCube(g.bx + Math.sin(time * 3 + i) * bw * 0.1, y, cs, i + time);
      ctx.restore();
      up.push({ x: g.bx, y, t });
    }

    // 第 4 幕：被拉走的糖
    for (const s of sinks) {
      ctx.save(); ctx.globalAlpha *= clamp(s.life / 0.6, 0, 1) * S.drain;
      sugarCube(s.x, g.vy + g.vr * 0.4 + s.d * H * 0.12, cs, s.x);
      ctx.restore();
    }
    if (S.drain > 0.05) {
      ctx.save(); ctx.globalAlpha *= S.drain;
      for (let i = 0; i < 3; i++) {
        const ax = g.lw * (0.18 + i * 0.32), ay = g.vy + g.vr * 1.55 + ((time * 0.8 + i * 0.3) % 1) * H * 0.03;
        ctx.fillStyle = C.orange; ctx.beginPath();
        ctx.moveTo(ax - H * 0.018, ay); ctx.lineTo(ax + H * 0.018, ay); ctx.lineTo(ax, ay + H * 0.025); ctx.closePath(); ctx.fill(); outline(1.5); ctx.stroke();
      }
      ctx.restore();
    }

    // 最后一幕：飘起的小爱心（画在卡片下面）
    if (S.heal > 0.02) {
      for (const [i, h] of hearts.entries()) {
        const x = h.x * g.lw, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.85;
        heart(x, y, Math.max(6, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), i % 2 ? C.heartPink : C.sugar);
        ctx.restore();
      }
    }
    const b = drawBrain(g);

    // 第 3 幕：报警铃
    let bell = null;
    if (S.alarm > 0.03) {
      const s = g.br * 0.3, x = g.bx - g.br * 1.15, y = g.by - g.ry * 0.75;
      ctx.save(); ctx.globalAlpha *= S.alarm;
      drawBell(Math.max(s * 1.2 + 4, x), y, s);
      ctx.restore();
      bell = { x: Math.max(s * 1.2 + 4, x), y: y + s * 0.6, s };
    }

    // 第 5 幕：果汁倒进血管
    let juice = null;
    if (S.feed > 0.03) {
      const s = Math.max(11, g.br * 0.34);
      const jx = Math.max(s * 1.1, g.bx - g.br * 1.25), jy = g.vy - g.vr * 1.35 - s * 1.6;
      ctx.save(); ctx.globalAlpha *= S.feed;
      for (const p of pours) {
        const t = p.t, x = jx + s * 0.6 + t * (g.br * 0.9 + p.off * g.br * 0.4), y = jy + s * 0.2 + t * t * (g.vy - jy - s * 0.2);
        ctx.save(); ctx.globalAlpha *= t > 0.85 ? (1 - t) / 0.15 : 1;
        sugarCube(x, y, cs, p.off * 6 + t * 4);
        ctx.restore();
      }
      drawJuice(jx, jy, s);
      ctx.restore();
      juice = { x: jx, y: jy, s };
    }

    return { b, bell, juice, up, cs };
  }

  // ---------- 右边的小卡片 ----------
  function drawCard(g) {
    const x = g.cx, y = g.cy, cw = g.cw, ch = g.ch;
    ctx.fillStyle = C.ink; rrect(x + 5, y + 5, cw, ch, 18); ctx.fill();
    ctx.fillStyle = C.paper; rrect(x, y, cw, ch, 18); ctx.fill(); outline(2.5); ctx.stroke();
    const f = Math.min(cw / 11, ch / 12.5);
    const b = { x, y, cw, ch, f };
    const cards = [[S.k1, card1], [S.k2, card2], [S.k3, card3], [S.k4, card4], [S.k5, card5], [S.k6, card6]];
    for (const [a, fn] of cards) {
      if (a < 0.02) continue;
      ctx.save(); ctx.globalAlpha *= a;
      ctx.beginPath(); ctx.rect(x, y, cw, ch); ctx.clip();
      fn(b);
      ctx.restore();
    }
  }
  const title = (b, t) => fitTxt(t, b.x + b.cw / 2, b.y + b.f * 1.25, b.f * 1.15, b.cw - b.f * 1.2);

  // 1. 大脑的饭量
  function card1(b) {
    const { x, y, cw, ch, f } = b;
    title(b, "大脑的饭量");
    const rows = [["占体重", 0.1, "约 2%", "#f5b3c7"], ["用能量", 1, "约 20%", C.orange]];
    const lx = x + f * 0.7, bx0 = x + f * 4.3, bwMax = cw - f * 5.2;
    rows.forEach(([lab, v, val, col], i) => {
      const ry = y + ch * (0.27 + i * 0.2);
      txt(lab, lx, ry, f * 0.9, C.ink, "left");
      rrect(bx0, ry - f * 0.42, bwMax, f * 0.84, f * 0.42); ctx.fillStyle = "#f4ece8"; ctx.fill();
      const grow = clamp((S.k1 - 0.3) / 0.7, 0, 1);
      rrect(bx0, ry - f * 0.42, Math.max(f * 0.84, bwMax * v * grow), f * 0.84, f * 0.42); ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
      txt(val, i ? bx0 + bwMax - f * 0.2 : bx0 + f * 1.3, ry + f * 0.95, f * 0.8, C.soft, i ? "right" : "left");
    });
    // 存粮：肝脏有仓库，大脑几乎没有
    const ry = y + ch * 0.66;
    txt("存粮", lx, ry, f * 0.9, C.ink, "left");
    fitTxt("大脑几乎不存，肝脏存着糖原", x + cw / 2, y + ch - f * 0.7, f * 0.72, cw - f, C.soft);
    const s = f * 0.9;
    // 大脑的小碗：空空的
    const cx1 = bx0 + bwMax * 0.25, cx2 = bx0 + bwMax * 0.75;
    ctx.beginPath(); ctx.moveTo(cx1 - s, ry - s * 0.2); ctx.quadraticCurveTo(cx1, ry + s * 1.2, cx1 + s, ry - s * 0.2); ctx.closePath();
    ctx.fillStyle = "#fff"; ctx.fill(); outline(1.8); ctx.stroke();
    sugarCube(cx1 + s * 0.3, ry + s * 0.15, s * 0.16, 0);
    fitTxt("大脑", cx1, ry + s * 1.35, f * 0.8, bwMax * 0.48, C.soft);
    // 肝脏的仓库：一堆糖原
    ctx.beginPath(); ctx.moveTo(cx2 - s, ry - s * 0.2); ctx.quadraticCurveTo(cx2, ry + s * 1.2, cx2 + s, ry - s * 0.2); ctx.closePath();
    ctx.fillStyle = "#fff"; ctx.fill(); outline(1.8); ctx.stroke();
    for (let k = 0; k < 5; k++) sugarCube(cx2 + (k % 3 - 1) * s * 0.42 + (k > 2 ? s * 0.21 : 0), ry - s * 0.05 - (k > 2 ? s * 0.38 : 0), s * 0.17, k);
    fitTxt("肝脏", cx2, ry + s * 1.35, f * 0.8, bwMax * 0.48, C.soft);
  }

  // 2. 血糖尺子
  function card2(b) {
    const { x, y, cw, ch, f } = b;
    title(b, "多低算低？");
    txt("单位：mmol/L", x + cw / 2, y + f * 2.5, f * 0.72, C.soft);
    const lo = 2.0, hi = 6.5;
    const top = y + f * 3.6, bot = y + ch - f * 1.1;
    const Y = (v) => bot - (v - lo) / (hi - lo) * (bot - top);
    const rx = x + cw * 0.25, rw = f * 1.1;
    const seg = (a, c, col) => { ctx.fillStyle = col; ctx.fillRect(rx - rw / 2, Y(c), rw, Y(a) - Y(c)); };
    seg(lo, 3.0, "#f7a0a6"); seg(3.0, 3.9, "#ffd98a"); seg(3.9, hi, "#b9ead8");
    rrect(rx - rw / 2, top, rw, bot - top, f * 0.3); outline(2); ctx.stroke();
    // 刻度线和说明
    const marks = [[3.9, "3.9 糖尿病患者的线", C.warn, 0], [3.0, "3.0 明显低，快处理", C.red, -0.5], [2.8, "2.8 非糖尿病者的线", "#b0476b", 0.62]];
    for (const [v, t, col, off] of marks) {
      const yy = Y(v), ly = yy + off * f;
      outline(2); ctx.beginPath(); ctx.moveTo(rx - rw * 0.7, yy); ctx.lineTo(rx + rw * 0.7, yy); ctx.stroke();
      ctx.strokeStyle = col; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(rx + rw * 0.7, yy); ctx.lineTo(rx + rw * 1.1, ly); ctx.stroke();
      fitTxt(t, rx + rw * 1.2, ly, f * 0.78, x + cw - (rx + rw * 1.2) - f * 0.3, col, "left");
    }
    fitTxt("正常", rx + rw * 1.2, Y(5.4), f * 0.8, cw, "#3f9f7f", "left");
    // 当前血糖的小箭头
    const v = clamp(S.glu, lo, hi), yy = Y(v), ax = rx - rw * 0.7;
    ctx.beginPath(); ctx.moveTo(ax, yy); ctx.lineTo(ax - f * 0.7, yy - f * 0.45); ctx.lineTo(ax - f * 0.7, yy + f * 0.45); ctx.closePath();
    ctx.fillStyle = C.orange; ctx.fill(); outline(1.6); ctx.stroke();
  }

  // 3. 身体的报警
  function card3(b) {
    const { x, y, cw, ch, f } = b;
    title(b, "身体的警报");
    const y0 = y + f * 2.3, u = (y + ch - f * 0.35 - y0) / 9;
    const fs = Math.min(f * 0.78, u * 0.62, cw / 16.5);
    const chip = (t, cx, cy, col) => {
      ctx.font = `${fs}px ${ROUND}`;
      const w = ctx.measureText(t).width + fs * 0.7, h = fs * 1.4;
      rrect(cx - w / 2, cy - h / 2, w, h, h / 2); ctx.fillStyle = col; ctx.fill(); outline(1.5); ctx.stroke();
      txt(t, cx, cy, fs, C.ink);
    };
    const sec = (hd, col, bg, items, yy, on) => {
      ctx.save(); ctx.globalAlpha *= 0.5 + 0.5 * on;
      fitTxt(hd, x + f * 0.5, yy, fs * 1.05, cw - f, col, "left");
      items.forEach((t, i) => chip(t, x + cw * (0.18 + (i % 3) * 0.32), yy + u * (1.05 + Math.floor(i / 3)), bg));
      ctx.restore();
    };
    const ph = (time % 6) / 6;
    sec("① 先报警：交感神经", C.orange, "#ffe6cf", ["心慌", "手抖", "出冷汗", "饥饿", "头晕", "乏力"], y0 + u * 0.5, ph < 0.5 ? 1 : 0.55);
    sec("② 再缺糖：大脑受累", "#a0508f", "#f3dcef", ["注意力差", "说话含糊", "行为反常", "抽搐", "昏迷"], y0 + u * 3.6, ph >= 0.5 ? 1 : 0.55);
    // 夜里 + 没感觉
    const by0 = y0 + u * 6.75;
    ctx.fillStyle = "#f4f0ff"; rrect(x + f * 0.35, by0 - u * 0.1, cw - f * 0.7, u * 2.3, u * 0.45); ctx.fill();
    const l1 = by0 + u * 0.55, l2 = by0 + u * 1.55;
    const mx = x + f * 1.0, mr = fs * 0.5;
    ctx.beginPath(); ctx.arc(mx, l1, mr, 0, Math.PI * 2); ctx.fillStyle = C.sugar; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.beginPath(); ctx.arc(mx + mr * 0.5, l1 - mr * 0.3, mr * 0.8, 0, Math.PI * 2); ctx.fillStyle = "#f4f0ff"; ctx.fill();
    fitTxt("夜里：噩梦、出汗、晨起头痛", mx + mr * 1.4, l1, fs, x + cw - f * 0.6 - (mx + mr * 1.4), C.ink, "left");
    fitTxt("有人“没感觉”，直接意识不清", x + f * 0.65, l2, fs, cw - f * 1.3, "#b0476b", "left");
  }

  // 4. 为什么会低
  function card4(b) {
    const { x, y, cw, ch, f } = b;
    title(b, "为什么会低？");
    const rows = ["用药后没按时吃饭", "运动量突然加大", "空腹喝酒", "药量不合适"];
    const hi = Math.floor(time / 2.5) % 4;
    const u = (ch - f * 4.2) / 4;
    rows.forEach((t, i) => {
      const ry = y + f * 2.8 + u * (i + 0.5), s = Math.min(u * 0.34, f * 0.8);
      if (i === hi) { ctx.fillStyle = "#ffe6cf"; rrect(x + f * 0.3, ry - u * 0.45, cw - f * 0.6, u * 0.9, u * 0.3); ctx.fill(); }
      const ix = x + f * 1.4, bob = Math.sin(time * 2 + i) * s * 0.08;
      if (i === 0) { // 空碗 + 钟
        ctx.beginPath(); ctx.moveTo(ix - s, ry - s * 0.1 + bob); ctx.quadraticCurveTo(ix, ry + s * 1.2 + bob, ix + s, ry - s * 0.1 + bob); ctx.closePath();
        ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
        ctx.strokeStyle = C.ink; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(ix - s * 0.2, ry - s * 0.4); ctx.lineTo(ix + s * 0.1, ry - s * 1.0); ctx.moveTo(ix + s * 0.3, ry - s * 0.4); ctx.lineTo(ix + s * 0.55, ry - s * 1.0); ctx.stroke();
      } else if (i === 1) { // 跑鞋
        ctx.beginPath(); ctx.moveTo(ix - s, ry + s * 0.5 + bob); ctx.lineTo(ix - s * 0.9, ry - s * 0.4 + bob); ctx.quadraticCurveTo(ix - s * 0.2, ry - s * 0.5 + bob, ix + s * 0.1, ry + bob);
        ctx.quadraticCurveTo(ix + s, ry + s * 0.05 + bob, ix + s, ry + s * 0.5 + bob); ctx.closePath();
        ctx.fillStyle = "#8fc9ff"; ctx.fill(); outline(1.6); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.fillRect(ix - s, ry + s * 0.35 + bob, s * 2, s * 0.15);
        outline(1.4); for (let k = 0; k < 2; k++) { ctx.beginPath(); ctx.moveTo(ix - s * 1.15, ry - s * 0.2 + k * s * 0.4); ctx.lineTo(ix - s * 1.45, ry - s * 0.2 + k * s * 0.4); ctx.stroke(); }
      } else if (i === 2) { // 酒杯
        ctx.beginPath(); ctx.moveTo(ix - s * 0.6, ry - s * 0.9); ctx.lineTo(ix + s * 0.6, ry - s * 0.9); ctx.quadraticCurveTo(ix + s * 0.6, ry + s * 0.1, ix, ry + s * 0.15); ctx.quadraticCurveTo(ix - s * 0.6, ry + s * 0.1, ix - s * 0.6, ry - s * 0.9);
        ctx.fillStyle = "#e7c3ea"; ctx.fill(); outline(1.6); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ix, ry + s * 0.15); ctx.lineTo(ix, ry + s * 0.8); ctx.moveTo(ix - s * 0.45, ry + s * 0.85); ctx.lineTo(ix + s * 0.45, ry + s * 0.85); ctx.stroke();
      } else { // 药丸
        ctx.save(); ctx.translate(ix, ry + bob); ctx.rotate(-0.5);
        rrect(-s, -s * 0.42, s * 2, s * 0.84, s * 0.42); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, -s * 0.42); ctx.lineTo(0, s * 0.42); ctx.stroke();
        ctx.fillStyle = C.orange; rrect(-s, -s * 0.42, s, s * 0.84, s * 0.42); ctx.fill(); ctx.stroke();
        ctx.restore();
      }
      fitTxt(t, x + f * 2.7, ry, f * 0.9, cw - f * 3.1, C.ink, "left");
    });
    fitTxt("胰岛素、磺脲类等促泌剂最常见", x + cw / 2, y + ch - f * 0.85, f * 0.72, cw - f * 0.8, C.soft);
  }

  // 5. 15-15 法则
  function card5(b) {
    const { x, y, cw, ch, f } = b;
    title(b, "15-15 法则");
    const y0 = y + f * 2.2, u = (y + ch - f * 0.2 - y0) / 7.4;
    const badgeN = (n, cx, cy, r) => {
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = C.orange; ctx.fill(); outline(1.6); ctx.stroke();
      txt(n, cx, cy, r * 1.3, C.paper);
    };
    const fs = Math.min(f * 0.85, u * 0.58);
    const tx = x + f * 1.75, tw = cw - f * 2.1;
    const step = Math.floor(time / 2) % 4;
    const rows = [["吃约 15 克升糖快的", 0.5], ["等 15 分钟，再测", 2.75], ["仍低，再吃一次", 3.75], ["好转后，饭还远就加点主食", 4.75]];
    rows.forEach(([t, k], i) => {
      const ry = y0 + u * k;
      if (i === step) { ctx.fillStyle = "#ffe6cf"; rrect(x + f * 0.3, ry - u * 0.44, cw - f * 0.6, (i ? u * 0.88 : u * 2.0), u * 0.3); ctx.fill(); }
      badgeN(String(i + 1), x + f * 0.95, ry, Math.min(u * 0.32, f * 0.5));
      fitTxt(t, tx, ry, fs, tw, C.ink, "left");
    });
    // 第一步下面画出 15 克长什么样：葡萄糖片 / 半杯到一杯果汁 / 约 3～4 块方糖
    const iy = y0 + u * 1.3, s = Math.min(u * 0.26, f * 0.5), ly = y0 + u * 1.95, lfs = Math.min(fs * 0.78, u * 0.44);
    const xs = [x + cw * 0.2, x + cw * 0.5, x + cw * 0.8];
    for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(xs[0] - s * 1.1 + k * s * 1.1, iy, s * 0.5, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(xs[1] - s * 0.55, iy - s * 0.7); ctx.lineTo(xs[1] + s * 0.55, iy - s * 0.7); ctx.lineTo(xs[1] + s * 0.42, iy + s * 0.7); ctx.lineTo(xs[1] - s * 0.42, iy + s * 0.7); ctx.closePath();
    ctx.fillStyle = C.cup; ctx.fill(); ctx.save(); ctx.clip(); ctx.fillStyle = C.juice; ctx.fillRect(xs[1] - s, iy - s * 0.05, s * 2, s); ctx.restore(); outline(1.3); ctx.stroke();
    for (let k = 0; k < 4; k++) sugarCube(xs[2] - s * 1.2 + k * s * 0.8, iy, s * 0.3, k);
    const labs = cw < 260 ? ["糖片", "果汁", "方糖"] : ["葡萄糖片", "果汁", "方糖 3～4 块"];
    labs.forEach((t, k) => fitTxt(t, xs[k], ly, Math.max(lfs, fs * 0.8), cw * 0.3, C.soft));
    // 注意事项
    const ny = y0 + u * 5.95;
    ctx.fillStyle = "#ffe3e5"; rrect(x + f * 0.3, ny - u * 0.45, cw - f * 0.6, u * 0.9, u * 0.3); ctx.fill(); outline(1.5); ctx.stroke();
    fitTxt("人迷糊了：别硬喂，马上打 120", x + cw / 2, ny, fs, cw - f * 0.9, "#c23a4a");
    fitTxt("巧克力、坚果升糖慢，不适合急救", x + cw / 2, y0 + u * 6.9, fs * 0.85, cw - f * 0.8, C.soft);
  }

  // 6. 这样防低血糖
  function card6(b) {
    const { x, y, cw, ch, f } = b;
    title(b, "这样防低血糖");
    const rows = ["随身带糖和病情卡", "按时按量吃饭", "运动前后测血糖", "不空腹喝酒", "反复低血糖找医生", "教会家人来帮忙"];
    const u = (ch - f * 2.8) / 6;
    const shown = Math.min(6, Math.floor(chT * 0.9) + 1);
    rows.forEach((t, i) => {
      const ry = y + f * 2.6 + u * (i + 0.5), r = Math.min(u * 0.3, f * 0.48), cx = x + f * 1.0;
      ctx.beginPath(); ctx.arc(cx, ry, r, 0, Math.PI * 2); ctx.fillStyle = i < shown ? C.mint : "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
      if (i < shown) {
        ctx.strokeStyle = "#fff"; ctx.lineWidth = Math.max(2, r * 0.3); ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(cx - r * 0.45, ry); ctx.lineTo(cx - r * 0.1, ry + r * 0.4); ctx.lineTo(cx + r * 0.5, ry - r * 0.35); ctx.stroke();
      }
      fitTxt(t, x + f * 1.9, ry, Math.min(f * 0.88, u * 0.6), cw - f * 2.3, C.ink, "left");
    });
  }

  function hud() {
    const v = S.glu;
    pill(14, 12, "血糖", v.toFixed(1), v < 3.0 ? C.red : v < 3.9 ? C.warn : C.mint, false);
    const p = CH[cur].pill;
    if (p) pill(W - 14, 12, p[0], p[1], p[2] === "ok" ? C.mint : p[2] === "warn" ? C.warn : C.red, true);
  }

  function draw() {
    const g = L();
    const r = scene(g);
    drawCard(g);
    const Lb = CH[cur].labels, on = (k) => Lb.indexOf(k) >= 0;
    const b = r.b;
    const fs = Math.max(12, W / 56) * Anima.UI, bh = fs + 14;
    // 两个标注位置：A 在大脑上方，B 在大脑和血管之间
    const aTop = b.y - b.ry * 1.05 - (S.alarm > 0.3 || low() > 0.2 ? b.ry * 0.25 : 0) - bh;
    const bTopY = Math.min(g.vy - g.vr * 1.35 - bh - 4, b.y + b.ry * 0.95 + (g.vy - g.vr * 1.35 - b.y - b.ry) * 0.25);
    // 气泡固定放在这两条带子里：目标在带子下面就把 ly 设成带子底边
    const band = (top) => (ty) => (ty > top + bh ? top + bh : top);
    const aYf = band(aTop), bYf = band(bTopY);
    // 气泡横向只在左边区域里放，不压到卡片
    const co = (key, v, tx, ty, lx, bf, t) => {
      ctx.font = `${fs}px ${ROUND}`;
      const w = ctx.measureText(t).width + 22;
      callout(key, v, tx, ty, clamp(lx, w / 2 + 6, g.cx - 8 - w / 2), bf(ty), t);
    };
    const ax = g.bx + g.lw * 0.05, bxx = g.bx + g.lw * 0.12;
    const ptB = r.up.filter((p) => p.t > 0.15 && p.t < 0.7)[0];
    const bTop = { x: b.x + b.rx * 0.25, y: b.y - b.ry * 0.8 };

    co("brain", on("brain"), bTop.x, bTop.y, ax, aYf, "大脑：最爱吃糖");
    co("glu", on("glu") && !!ptB, ptB ? ptB.x + r.cs : 0, ptB ? ptB.y : 0, bxx, bYf, "葡萄糖小方块");

    co("hungry", on("hungry"), bTop.x, bTop.y, ax, aYf, "糖一少，先饿大脑");
    const vx = g.lw * 0.2;
    co("few", on("few"), vx, g.vy, bxx, bYf, "血里的糖变少了");

    const bell = r.bell;
    co("alarm", on("alarm") && !!bell, bell ? bell.x + bell.s * 0.6 : 0, bell ? bell.y - bell.s : 0, ax, aYf, "身体拉响警报");
    co("dizzy", on("dizzy"), b.x + b.rx * 0.5, b.y + b.ry * 0.3, bxx, bYf, "大脑缺糖，晕乎乎");

    co("late", on("late"), bTop.x, bTop.y, ax, aYf, "补给跟不上了");
    co("drain", on("drain"), g.lw * 0.5, g.vy + g.vr * 1.35, bxx, bYf, "糖被用掉太快");

    co("back", on("back"), bTop.x, bTop.y, ax, aYf, "大脑缓过来了");
    const j = r.juice;
    co("feed", on("feed") && !!j, j ? j.x + j.s * 0.3 : 0, j ? j.y - j.s * 0.6 : 0, bxx, bYf, "快速补糖");

    co("happy", on("happy"), bTop.x, bTop.y, ax, aYf, "大脑天天吃饱饭");
    co("flow", on("flow"), vx, g.vy, bxx, bYf, "血糖稳稳的");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e8792c",
    titleCard: { lines: ["糖太少也危险：", "低血糖"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
