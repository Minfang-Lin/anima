Anima.register("insulin", {
    "title": "糖的钥匙",
    "tag": "胰腺小剧场",
    "headline": "血糖为什么会【升高】？",
    "lede": "胰岛素像一把钥匙，帮葡萄糖打开细胞的门。锁生锈了、钥匙不够了，糖就只好留在血里，一步步走向 2 型糖尿病。",
    "summary": "胰岛素怎样帮糖进细胞：胰岛素抵抗、糖尿病前期、2 型糖尿病的诊断，以及运动和减重的作用。",
    "footer": "血糖偏高或想做糖尿病筛查，可到内分泌科就诊。",
    "canvasLabel": "卡通胰岛素钥匙打开细胞门锁的动画",
    "disease": "2 型糖尿病",
    "organs": ["pancreas"],
    "categories": ["metabolic"],
    "color": "#e0b23a"
  }, () => {
  const CH = [
    { title: "吃饭后，血糖升高", glu: 7.6, keys: 1, rust: 0, open: 0.5, work: 0, tired: 0, fat: 0, ex: 0, heal: 0, harm: 0, meal: 1,
      gl: "饭后血糖", gs: "ok", pill: ["胰岛素", "开始分泌", "ok"],
      text: "吃完一碗米饭，淀粉被消化成葡萄糖，就像一块块小方糖，跑进血液里，血糖就升高了。胰腺里有一群胰岛β细胞，像一座小工厂，一发现糖多了，就赶紧做出一把把“钥匙”，这把钥匙就是胰岛素。",
      fact: "胰岛只占胰腺的 1%～2%，却管着全身的血糖",
      labels: ["sugar", "factory", "key"] },
    { title: "钥匙打开细胞的门", glu: 5.6, keys: 1, rust: 0, open: 1, work: 0, tired: 0, fat: 0, ex: 0, heal: 0, harm: 0, meal: 0,
      gl: "血糖", gs: "ok", pill: ["胰岛素", "正常", "ok"],
      text: "肌肉、肝脏和脂肪细胞，就像一座座带门锁的小房子。胰岛素这把钥匙插进锁里一拧，门就开了，血里的葡萄糖走进细胞，变成干活的能量，多的还能存起来。糖进了细胞，血糖也就慢慢回落了。",
      fact: "正常：空腹血糖 < 6.1 mmol/L，糖负荷后 2 小时 < 7.8 mmol/L",
      labels: ["lock", "enter", "energy"] },
    { title: "锁生锈了：胰岛素抵抗", glu: 5.8, keys: 2, rust: 1, open: 0.75, work: 1, tired: 0, fat: 1, ex: 0, heal: 0, harm: 0, meal: 0,
      gl: "空腹血糖", gs: "ok", pill: ["胰岛素", "加班分泌", "warn"],
      text: "肚子上的脂肪越来越多，又常常久坐不动，细胞的锁就像生了锈，钥匙插进去要拧好几下才打得开，这叫胰岛素抵抗。β细胞只好加班，做出更多钥匙。辛苦是辛苦，这时血糖往往还能保持正常。",
      fact: "腰围男性 ≥ 90 cm、女性 ≥ 85 cm，属于中心性肥胖",
      labels: ["rust", "work", "fat"] },
    { title: "糖尿病前期：工厂累了", glu: 6.6, keys: 0.7, rust: 1, open: 0.45, work: 0.5, tired: 0.6, fat: 1, ex: 0, heal: 0, harm: 0, meal: 0,
      gl: "空腹血糖", gs: "warn", pill: ["胰岛素", "有点不够", "warn"],
      text: "β细胞长年加班，渐渐累了，做出的钥匙跟不上需要。能打开的门变少，糖在血里待得更久，血糖开始偏高，但还没到糖尿病，这就是糖尿病前期。它一般没有感觉，抽血查了才知道，是身体亮起的黄灯。",
      fact: "空腹 6.1～7.0 或糖负荷后 2 小时 7.8～11.1 mmol/L：糖尿病前期",
      labels: ["tired", "nokey"] },
    { title: "2 型糖尿病：糖堆在血里", glu: 9.5, keys: 0.45, rust: 1, open: 0.25, work: 0, tired: 1, fat: 1, ex: 0, heal: 0, harm: 1, meal: 0,
      gl: "空腹血糖", gs: "bad", pill: ["胰岛素", "不够用", "bad"],
      text: "钥匙越来越少，锁又不灵，葡萄糖进不了细胞，只好堆在血液里，这就是 2 型糖尿病。有人会口渴、尿多、没力气，也有很多人毫无感觉。确诊要抽血，通常还要复查一次。血糖长期偏高，会慢慢伤害全身的血管。",
      fact: "空腹 ≥ 7.0、糖负荷后 2 小时 ≥ 11.1 mmol/L 或糖化血红蛋白 ≥ 6.5%",
      labels: ["pile", "vessel"] },
    { title: "擦掉锈，给工厂减负", glu: 5.9, keys: 1, rust: 0.35, open: 0.85, work: 0, tired: 0.2, fat: 0.3, ex: 1, heal: 1, harm: 0.4, meal: 0,
      gl: "空腹血糖", gs: "ok", pill: ["胰岛素", "负担减轻", "ok"],
      text: "锁上的锈是可以擦掉的。运动时肌肉一收缩，自己就能把糖拉进细胞，不全靠胰岛素；体重减掉 5%～10%，锁会灵活很多。吃饭七八分饱，少喝甜饮料。糖尿病前期积极干预，可以推迟甚至避免糖尿病；需要时在医生指导下用药。",
      fact: "我国成人糖尿病患病率约 12%，糖尿病前期约 38%",
      labels: ["exercise", "lighter"] },
  ];
  const DUR = 12; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    wall: "#ffb3b3", adv: "#ffcdc4", lumen: "#fff4ec", lumenSweet: "#fff0c2", endo: "#ffe0e6", endoHurt: "#dcc9cf",
    rbc: "#ff7b7b", key: "#8fc6ff", keyDark: "#5f9fe0", lock: "#dfe3ee", rust: "#c46a3a",
    beta: "#b9e3a8", betaRoof: "#86c47a", betaTired: "#cfd8c4", pipe: "#e9f6e3",
    muscle: "#ff9c8a", liver: "#e39a78", fatCell: "#ffe08a", inside: "#fff3c4", heartPink: "#ff9fb0",
  });
  const { ctx, rnd, clamp, mix, outline, rrect, face, sweat, heart, bolt, dots, callout, pill } = Anima;
  let W = 0, H = 0, time = 0, cur = 0;

  const S = { glu: 7.6, keys: 1, rust: 0, open: 0.5, work: 0, tired: 0, fat: 0, ex: 0, heal: 0, harm: 0, meal: 1 };

  const sm = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

  // ---------- 几何：上方一条血管，左下是 β 细胞小工厂，右下是三座带门锁的小房子 ----------
  const G = () => {
    // 手机等接近方形的舞台：顶部胶囊会叠成两行，血管往下挪一点
    const narrow = W / H < 1.4;
    const vt = H * (narrow ? 0.3 : 0.17), vb = H * (narrow ? 0.47 : 0.41), wall = H * (narrow ? 0.035 : 0.045);
    const base = H * 0.95;
    const fw = Math.min(H * 0.36, W * 0.25), fx = W * 0.025, fh = H * 0.3;
    const hw0 = Math.min(H * 0.27, W * 0.18);
    return { vt, vb, wall, base, fw, fx, fh, hw0, narrow };
  };
  const HOUSES = [
    { name: "肌肉", col: "muscle", fx: 0.42 },
    { name: "肝脏", col: "liver", fx: 0.64 },
    { name: "脂肪", col: "fatCell", fx: 0.86 },
  ];
  function house(g, i) {
    const h = HOUSES[i];
    const grow = i === 2 ? 1 + 0.28 * S.fat : 1;
    const hw = g.hw0 * grow, bh = H * 0.24 * (i === 2 ? 1 + 0.08 * S.fat : 1), rh = H * 0.08;
    const bounce = i === 0 ? S.ex * Math.abs(Math.sin(time * 3)) * H * 0.015 : 0;
    const x = Math.min(W * h.fx, W - hw / 2 - 8), top = g.base - bh - bounce;
    const dw = hw * 0.32, dh = bh * 0.62, dx = x - hw * 0.2, dy = g.base - dh;
    return { ...h, i, x, hw, bh, rh, top, dx, dy, dw, dh, lockX: dx + dw * 0.32, lockY: dy + dh * 0.5 };
  }

  // ---------- 粒子 ----------
  const cubes = Array.from({ length: 44 }, (_, i) => ({ x: rnd(i + 10) * 1.1, yn: rnd(i + 60) * 1.6 - 0.8, rot: rnd(i + 110) * 6 }));
  const keysV = Array.from({ length: 16 }, (_, i) => ({ x: rnd(i + 200) * 1.1, yn: rnd(i + 230) * 1.4 - 0.7, ph: rnd(i + 260) * 6 }));
  const rbcs = Array.from({ length: 5 }, (_, i) => ({ x: i / 5 + rnd(i + 300) * 0.1, yn: rnd(i + 320) * 1.2 - 0.6, ph: rnd(i + 340) * 6 }));
  const hearts = Array.from({ length: 7 }, (_, i) => ({ x: rnd(i + 8000), y: rnd(i + 8100), ph: rnd(i + 8200) * 6 }));
  const nCube = () => Math.round(clamp((S.glu - 4) * 6.5 + S.meal * 6, 5, cubes.length));
  const nKey = () => Math.round(clamp(S.keys * 6, 0, keysV.length));

  function update(dt) {
    const sp = dt * 0.055;
    for (const p of cubes) { p.x += sp; p.rot += dt * 0.8; if (p.x > 1.1) p.x -= 1.2; }
    for (const p of keysV) { p.x += sp * 1.1; if (p.x > 1.1) p.x -= 1.2; }
    for (const p of rbcs) { p.x += sp * 0.9; if (p.x > 1.1) p.x -= 1.2; }
  }

  // ---------- 小零件 ----------
  function sugarCube(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(rot) * 0.4);
    rrect(-s, -s, s * 2, s * 2, s * 0.5);
    ctx.fillStyle = C.sugar; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath(); ctx.arc(-s * 0.35, -s * 0.35, s * 0.28, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  // 钥匙：s 是钥匙头的半径，钥匙朝右
  function key(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.28); ctx.lineTo(s * 2.4, -s * 0.28); ctx.lineTo(s * 2.4, s * 0.28);
    ctx.lineTo(s * 2.2, s * 0.28); ctx.lineTo(s * 2.2, s * 0.8); ctx.lineTo(s * 1.85, s * 0.8); ctx.lineTo(s * 1.85, s * 0.28);
    ctx.lineTo(s * 1.6, s * 0.28); ctx.lineTo(s * 1.6, s * 0.62); ctx.lineTo(s * 1.3, s * 0.62); ctx.lineTo(s * 1.3, s * 0.28);
    ctx.lineTo(0, s * 0.28); ctx.closePath();
    ctx.fillStyle = C.key; ctx.fill(); outline(Math.max(1.2, s * 0.18)); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, s, 0, 6.3); ctx.fillStyle = C.key; ctx.fill(); ctx.stroke();
    if (s > 7) face(0, s * 0.05, s * 0.62, 0.8, false);
    else { ctx.beginPath(); ctx.arc(0, 0, s * 0.35, 0, 6.3); ctx.fillStyle = C.keyDark; ctx.fill(); }
    ctx.restore();
  }
  function lockAt(x, y, s, rust) {
    // 挂锁：锁梁 + 锁身 + 锁孔，生锈时变成铁锈色并长出锈斑
    ctx.save();
    outline(Math.max(2, s * 0.22));
    ctx.beginPath(); ctx.arc(x, y - s * 0.35, s * 0.42, Math.PI, 0); ctx.stroke();
    rrect(x - s * 0.62, y - s * 0.4, s * 1.24, s * 1.0, s * 0.22);
    ctx.fillStyle = mix(C.lock, C.rust, rust * 0.55); ctx.fill(); outline(1.8); ctx.stroke();
    ctx.fillStyle = C.ink;
    ctx.beginPath(); ctx.arc(x, y - s * 0.02, s * 0.14, 0, 6.3); ctx.fill();
    ctx.fillRect(x - s * 0.05, y, s * 0.1, s * 0.3);
    if (rust > 0.05) {
      ctx.globalAlpha *= rust;
      ctx.fillStyle = "#9c4a24";
      for (let k = 0; k < 4; k++) {
        ctx.beginPath(); ctx.ellipse(x + (rnd(k + 70) - 0.5) * s * 1.0, y - s * 0.25 + rnd(k + 80) * s * 0.75, s * 0.13, s * 0.09, k, 0, 6.3); ctx.fill();
      }
    }
    ctx.restore();
  }

  // ---------- 场景 ----------
  function vessel(g) {
    ctx.fillStyle = C.adv; ctx.fillRect(0, g.vt - g.wall, W, g.vb - g.vt + g.wall * 2);
    ctx.fillStyle = mix(C.wall, "#d9a0a8", S.harm * 0.6); ctx.fillRect(0, g.vt - g.wall * 0.7, W, g.vb - g.vt + g.wall * 1.4);
    outline(3); ctx.beginPath(); ctx.moveTo(0, g.vt - g.wall); ctx.lineTo(W, g.vt - g.wall); ctx.moveTo(0, g.vb + g.wall); ctx.lineTo(W, g.vb + g.wall); ctx.stroke();
    ctx.fillStyle = mix(C.lumen, C.lumenSweet, clamp((S.glu - 5.5) / 4, 0, 1)); ctx.fillRect(0, g.vt, W, g.vb - g.vt);
    // 内皮细胞：血糖长期高时变灰、出现缝隙
    const cl = Math.max(22, W / 30);
    for (const [y, side] of [[g.vt, -1], [g.vb, 1]]) {
      for (let i = 0, x = cl / 2; x < W + cl; i++, x += cl) {
        const hurt = rnd(i + (side < 0 ? 400 : 500)) < S.harm * 0.45;
        rrect(x - cl * 0.44, y - (side < 0 ? 0 : 9), cl * 0.88, 9, 4.5);
        ctx.fillStyle = hurt ? C.endoHurt : C.endo; ctx.fill(); outline(1.5); ctx.stroke();
      }
    }
  }

  function factory(g) {
    const x = g.fx, w = g.fw, h = g.fh, y = g.base - h;
    const px = x + w * 0.74, pw = Math.max(12, w * 0.2);
    // 送钥匙的管道：从工厂屋顶通到血管
    rrect(px - pw / 2, g.vb + g.wall - 4, pw, y - g.vb - g.wall + 10, pw * 0.3);
    ctx.fillStyle = C.pipe; ctx.fill(); outline(2.2); ctx.stroke();
    const rate = 0.4 + 0.5 * S.keys, nk = Math.max(1, Math.round(1 + S.keys * 2));
    const ks = Math.max(4, pw * 0.26);
    for (let k = 0; k < nk; k++) {
      const t = (time * rate * 0.5 + k / nk) % 1;
      const ky = y + 4 - t * (y - g.vb - g.wall + 8);
      ctx.save(); ctx.globalAlpha *= t > 0.85 ? (1 - t) / 0.15 : 1;
      key(px - ks * 1.1, ky, ks, -Math.PI / 2 + 0.2 * Math.sin(time * 3 + k));
      ctx.restore();
    }
    // 烟囱和冒出的蒸汽（加班时冒得更快）
    const cx = x + w * 0.22, cw = w * 0.16;
    rrect(cx - cw / 2, y - h * 0.22, cw, h * 0.3, 4); ctx.fillStyle = C.betaRoof; ctx.fill(); outline(2.2); ctx.stroke();
    for (let k = 0; k < 3; k++) {
      const t = (time * (0.35 + 0.5 * S.work) + k / 3) % 1;
      ctx.save(); ctx.globalAlpha *= (1 - t) * 0.9;
      ctx.beginPath(); ctx.arc(cx + Math.sin(t * 5 + k) * cw * 0.4, y - h * 0.26 - t * h * 0.35, cw * (0.35 + t * 0.4), 0, 6.3);
      ctx.fillStyle = C.paper; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.restore();
    }
    // 身体
    const wob = Math.sin(time * (1.5 + 4 * S.work)) * (1 + 2 * S.work);
    ctx.save(); ctx.translate(x + w / 2, g.base); ctx.rotate(wob * 0.006);
    rrect(-w / 2, -h, w, h, h * 0.22);
    ctx.fillStyle = mix(C.beta, C.betaTired, S.tired); ctx.fill(); outline(3); ctx.stroke();
    // 招牌
    const fs = Math.max(10, w * 0.14);
    ctx.font = `${fs}px ${Anima.ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    const sw = ctx.measureText("β 细胞").width + fs;
    rrect(-sw / 2, -h + h * 0.08, sw, fs * 1.4, fs * 0.5); ctx.fillStyle = C.paper; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.fillText("β 细胞", 0, -h + h * 0.08 + fs * 0.72);
    ctx.textAlign = "left";
    const fsz = h * 0.2, mood = clamp(0.9 - 0.8 * S.work - 1.6 * S.tired, -1, 1);
    face(0, -h * 0.4, fsz, mood);
    if (S.work > 0.3 || S.tired > 0.3) {
      const t = (time * 0.8) % 1;
      sweat(w * 0.3, -h * 0.72 + t * h * 0.12, fsz * 0.45);
      if (S.work > 0.5) sweat(-w * 0.33, -h * 0.66 + ((t + 0.5) % 1) * h * 0.12, fsz * 0.38);
    }
    // 小传送带上的钥匙：加班时更多
    const beltY = -h * 0.14;
    outline(2); ctx.beginPath(); ctx.moveTo(-w * 0.36, beltY); ctx.lineTo(w * 0.36, beltY); ctx.stroke();
    const nb = Math.round(1 + 2 * S.keys);
    for (let k = 0; k < nb; k++) {
      const t = (time * 0.25 * (0.6 + S.keys) + k / nb) % 1;
      key(-w * 0.3 + t * w * 0.55, beltY - ks * 1.05, ks * 0.8, 0);
    }
    ctx.restore();
    return { x: x + w / 2, top: y, pipeX: px, faceY: y + h * 0.6 };
  }

  function drawHouse(g, hs) {
    const { x, hw, bh, rh, top, dx, dy, dw, dh, i } = hs;
    const base = C[hs.col];
    // 这一家的开门节奏：钥匙落下来 → 插进锁里拧 → 门开 → 方糖走进去 → 关门
    const P = 4.2, ph = ((time + i * 1.35) / P) % 1;
    const hasKey = S.keys * 3 - i > 0.5 || (i === 0 && S.ex > 0.5);
    const turnEnd = 0.32 + 0.22 * S.rust;
    let open = hasKey ? sm(turnEnd, turnEnd + 0.08, ph) * (1 - sm(0.86, 0.95, ph)) * S.open : 0;
    if (i === 0) open = Math.max(open, S.ex * (0.75 + 0.1 * Math.sin(time * 3)));

    // 屋顶和墙
    ctx.beginPath(); ctx.moveTo(x - hw / 2 - hw * 0.06, top + 2); ctx.lineTo(x, top - rh); ctx.lineTo(x + hw / 2 + hw * 0.06, top + 2); ctx.closePath();
    ctx.fillStyle = mix(base, C.ink, 0.25); ctx.fill(); outline(2.5); ctx.stroke();
    rrect(x - hw / 2, top, hw, g.base - top, hw * 0.12); ctx.fillStyle = base; ctx.fill(); outline(2.5); ctx.stroke();
    // 招牌
    const fs = Math.max(10, hw * 0.15);
    ctx.font = `${fs}px ${Anima.ROUND}`; ctx.fillStyle = C.ink; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(hs.name, x, top - rh * 0.3);
    ctx.textAlign = "left";
    // 门：门里亮着能量的光
    rrect(dx - dw / 2, dy, dw, dh, [dw * 0.45, dw * 0.45, 0, 0]);
    ctx.fillStyle = C.inside; ctx.fill(); outline(2); ctx.stroke();
    if (open > 0.05) {
      ctx.save(); ctx.globalAlpha *= open;
      bolt(dx, dy + dh * 0.55, Math.min(dw * 0.3, dh * 0.2), 0.6 + 0.4 * Math.sin(time * 6 + i), C.sugar);
      ctx.restore();
    }
    const pw = dw * (1 - 0.85 * open);
    rrect(dx - dw / 2, dy, pw, dh, [dw * 0.45 * (pw / dw), dw * 0.45 * (pw / dw), 0, 0]);
    ctx.fillStyle = mix(base, C.rust, 0.3 + S.rust * 0.25); ctx.fill(); outline(2); ctx.stroke();
    if (S.rust > 0.05 && pw > dw * 0.3) {
      ctx.save(); ctx.globalAlpha *= S.rust * 0.8; ctx.fillStyle = "#9c4a24";
      for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(dx - dw / 2 + pw * (0.25 + 0.25 * k), dy + dh * (0.25 + rnd(k + i * 5) * 0.6), dw * 0.06, 0, 6.3); ctx.fill(); }
      ctx.restore();
    }
    const ls = Math.max(5, dw * 0.28);
    const lockX = dx - dw / 2 + pw * 0.62, lockY = hs.lockY;
    if (pw > dw * 0.3) lockAt(lockX, lockY, ls, S.rust);

    // 脸：糖进来了就开心，门打不开就发愁
    const fsz = Math.min(hw * 0.2, bh * 0.22);
    const mood = clamp(0.3 + open * 0.9 - S.rust * 0.3 - (1 - S.open) * 0.6, -1, 1);
    face(x + hw * 0.24, top + bh * 0.35, fsz, mood);
    if (i === 2 && S.fat > 0.3) {
      // 脂肪细胞里的油滴
      ctx.save(); ctx.globalAlpha *= S.fat;
      for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(x + hw * (0.1 + k * 0.12), top + bh * 0.72 + (k % 2) * bh * 0.1, hw * 0.05, 0, 6.3); ctx.fillStyle = "#fff8d6"; ctx.fill(); outline(1.2); ctx.stroke(); }
      ctx.restore();
    }

    // 钥匙：从血管里落下来，插进锁里拧；锁生锈时要来回拧好几下
    const ks = Math.max(4, ls * 0.55);
    let keyPos = null;
    if (hasKey && pw > dw * 0.3 || hasKey && ph < turnEnd + 0.1) {
      const fromY = g.vb + g.wall + ks, fx = lockX - ks * 3.3;
      const fall = sm(0, 0.2, ph);
      const ky = fromY + (lockY - fromY) * fall, kx = fx + (lockX - ks * 2.3 - fx) * fall;
      let rot = 0;
      if (ph > 0.2 && ph < turnEnd) {
        const u = (ph - 0.2) / (turnEnd - 0.2);
        rot = S.rust > 0.3 ? Math.sin(u * Math.PI * 5) * 0.5 : u * 0.9;
      } else if (ph >= turnEnd) rot = 0.9;
      const fade = 1 - sm(0.8, 0.9, ph);
      if (fade > 0.02) {
        ctx.save(); ctx.globalAlpha *= fade;
        ctx.save(); ctx.translate(kx, ky); ctx.scale(1, Math.cos(rot)); key(0, 0, ks, 0); ctx.restore();
        ctx.restore();
        keyPos = { x: kx, y: ky };
      }
      // 锁锈了：旁边还排着几把钥匙在等
      if (S.rust > 0.3 && S.keys > 1.2) {
        ctx.save(); ctx.globalAlpha *= clamp((S.keys - 1.2) * 2, 0, 1) * S.rust;
        for (let k = 0; k < 2; k++) key(lockX - ks * (4.2 + k * 0.4), lockY - ks * (2.6 + k * 2.2) + Math.sin(time * 2 + k) * 2, ks * 0.9, 0.3);
        ctx.restore();
      }
      if (S.rust > 0.5 && ph > 0.2 && ph < turnEnd) {
        // 拧不动的时候冒出来的小“费劲”线
        outline(1.6);
        for (let k = 0; k < 3; k++) {
          const a = -0.9 + k * 0.5;
          ctx.beginPath(); ctx.moveTo(lockX + Math.cos(a) * ls * 1.0, lockY + Math.sin(a) * ls * 1.0); ctx.lineTo(lockX + Math.cos(a) * ls * 1.5, lockY + Math.sin(a) * ls * 1.5); ctx.stroke();
        }
      }
    }

    // 方糖从血管里走进门
    if (open > 0.1) {
      const n = Math.round(1 + 2 * clamp(open, 0, 1));
      for (let k = 0; k < n; k++) {
        const u = ((time * 0.5 + k / n + i * 0.3) % 1);
        const sx = dx + (k - 1) * dw * 0.2, sy = g.vb + g.wall;
        const cy = sy + (dy + dh * 0.5 - sy) * u;
        ctx.save(); ctx.globalAlpha *= open * (u > 0.85 ? (1 - u) / 0.15 : 1);
        sugarCube(sx + Math.sin(u * 6 + k) * dw * 0.08, cy, Math.max(3.5, H * 0.013) * (1 - 0.3 * u), u * 3 + k);
        ctx.restore();
      }
    }
    return { ...hs, open, hasKey, lockX, lockY, keyPos, faceX: x + hw * 0.24, faceY: top + bh * 0.35 };
  }

  // 运动的肌肉：头顶举着小哑铃
  function dumbbell(hs) {
    if (S.ex < 0.05) return null;
    const up = Math.abs(Math.sin(time * 3));
    const x = hs.x, y = hs.top - hs.rh - H * 0.03 - up * H * 0.03, s = hs.hw * 0.42;
    ctx.save(); ctx.globalAlpha *= S.ex;
    outline(3); ctx.beginPath(); ctx.moveTo(x - s, y); ctx.lineTo(x + s, y); ctx.stroke();
    for (const sx of [-1, 1]) {
      rrect(x + sx * s - s * 0.14, y - s * 0.28, s * 0.28, s * 0.56, s * 0.08); ctx.fillStyle = "#8b7cf6"; ctx.fill(); outline(2); ctx.stroke();
    }
    // 两条小胳膊
    outline(2.5); ctx.beginPath();
    ctx.moveTo(hs.x - hs.hw * 0.35, hs.top + hs.bh * 0.2); ctx.quadraticCurveTo(hs.x - s * 1.1, hs.top - hs.rh * 0.3, x - s * 0.6, y);
    ctx.moveTo(hs.x + hs.hw * 0.35, hs.top + hs.bh * 0.2); ctx.quadraticCurveTo(hs.x + s * 1.1, hs.top - hs.rh * 0.3, x + s * 0.6, y);
    ctx.stroke();
    ctx.restore();
    return { x, y };
  }

  function scene() {
    const g = G();
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    dots(26, C.dot);
    vessel(g);

    // 血管里的方糖、钥匙和红细胞
    const yIn = (yn, r) => (g.vt + g.vb) / 2 + yn * ((g.vb - g.vt) / 2 - r - 3);
    const cs = Math.max(4, H * 0.016);
    for (let i = 0; i < nCube(); i++) { const p = cubes[i]; sugarCube(p.x * W, yIn(p.yn, cs) + Math.sin(time + i) * 1.5, cs, p.rot); }
    const rr = Math.max(9, H * 0.034);
    for (const p of rbcs) {
      const x = p.x * W, y = yIn(p.yn, rr) + Math.sin(time * 1.6 + p.ph) * 2;
      ctx.beginPath(); ctx.ellipse(x, y, rr, rr * 0.8, 0, 0, 6.3); ctx.fillStyle = C.rbc; ctx.fill(); outline(2); ctx.stroke();
      face(x, y + rr * 0.05, rr * 0.62, S.glu > 8 ? -0.3 : 0.8);
    }
    const ks = Math.max(4.5, H * 0.017);
    for (let i = 0; i < nKey(); i++) { const p = keysV[i]; key(p.x * W, yIn(p.yn, ks * 1.2) + Math.sin(time * 1.3 + p.ph) * 2, ks, Math.sin(time + p.ph) * 0.3); }

    const f = factory(g);
    const hs = HOUSES.map((_, i) => drawHouse(g, house(g, i)));
    const db = dumbbell(hs[0]);

    if (S.heal > 0.02) {
      for (const h of hearts) {
        const x = h.x * W, y = ((h.y - time * 0.04) % 1 + 1) % 1 * H;
        ctx.save(); ctx.globalAlpha *= S.heal * 0.85;
        heart(x, y, Math.max(7, H * 0.02) * (1 + 0.1 * Math.sin(time * 3 + h.ph)), C.heartPink);
        ctx.restore();
      }
    }
    return { g, f, hs, db, yIn, cs, ks };
  }

  function hud() {
    const v = S.glu, st = CH[cur].gs;
    const col = (s) => s === "ok" ? C.mint : s === "warn" ? "#e7a500" : "#f25f6b";
    pill(14, 12, CH[cur].gl, `${v.toFixed(1)} mmol/L`, col(st), false);
    const [label, value, s2] = CH[cur].pill;
    pill(W - 14, 12, label, value, col(s2), true);
  }

  function draw() {
    const { g, f, hs, db, yIn, cs, ks } = scene();
    const L = CH[cur].labels, on = (k) => L.includes(k);
    const gap = g.vb + g.wall + H * 0.05; // 血管和房子之间那一排
    const pick = (arr, n, a, b) => arr.slice(0, n).find((p) => p.x > a && p.x < b);
    // 两排标注：A 排在血管下面，B 排在画面最下面；每排左右各放一个
    const A = gap, B = H * 0.99, lx = W * 0.27, rx = W * 0.74;
    const c0 = pick(cubes, nCube(), 0.25, 0.45);
    callout("sugar", on("sugar") && !!c0, c0 ? c0.x * W : 0, c0 ? yIn(c0.yn, cs) : 0, lx + W * 0.06, A, "饭后，糖进入血液");
    const k0 = pick(keysV, nKey(), 0.6, 0.9);
    callout("key", on("key") && !!k0, k0 ? k0.x * W : 0, k0 ? yIn(k0.yn, ks * 1.2) : 0, rx, A, "钥匙 = 胰岛素");
    callout("factory", on("factory"), f.x, f.faceY - g.fh * 0.25, lx, B, "胰岛 β 细胞：钥匙工厂");
    const h0 = hs[0], h1 = hs[1], h2 = hs[2];
    callout("lock", on("lock"), h0.lockX, h0.lockY, lx, A, "钥匙一拧，门开了");
    callout("enter", on("enter"), h1.dx, h1.dy + h1.dh * 0.3, rx, A, "糖走进细胞");
    callout("energy", on("energy"), h2.dx, h2.dy + h2.dh * 0.55, rx, B, "变成能量，多的存起来");
    callout("rust", on("rust"), h1.lockX, h1.lockY, W * 0.58, A, "锁生锈，要拧好几下");
    callout("work", on("work"), f.x, f.faceY - g.fh * 0.25, lx, B, "β 细胞加班做钥匙");
    callout("fat", on("fat"), h2.x + h2.hw * 0.2, h2.top + h2.bh * 0.7, rx + W * 0.05, B, "脂肪细胞撑大了");
    callout("tired", on("tired"), f.x, f.faceY - g.fh * 0.25, lx, A, "工厂累了，钥匙变少");
    callout("nokey", on("nokey"), h2.lockX, h2.lockY, rx, B, "等不到钥匙，门不开");
    const c1 = pick(cubes, nCube(), 0.3, 0.5);
    callout("pile", on("pile") && !!c1, c1 ? c1.x * W : 0, c1 ? yIn(c1.yn, cs) : 0, lx + W * 0.04, A, "糖进不去，堆在血里");
    callout("vessel", on("vessel"), W * 0.84, g.vb + g.wall * 0.5, rx + W * 0.06, A, "血管也跟着受伤");
    callout("exercise", on("exercise") && !!db, db ? db.x + h0.hw * 0.3 : 0, db ? db.y : 0, lx + W * 0.06, A, "运动的肌肉自己开门");
    callout("lighter", on("lighter"), h2.lockX, h2.lockY, rx, B, "减重后，锁灵活多了");
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e0b23a",
    titleCard: { lines: ["血糖为什么", "会升高？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
