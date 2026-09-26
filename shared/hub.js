// 展厅：人体图、按病种列表、器官展签，以及在展厅和小剧场之间切换。
(() => {
  const $ = (id) => document.getElementById(id);
  const SVG = "http://www.w3.org/2000/svg";
  const catalog = window.AnimaCatalog;
  const eps = Anima.episodes();
  const byId = Object.fromEntries(eps.map((e) => [e.id, e]));

  // 人体图旁边的标签：organ 上的锚点 (ax, ay) → 标签位置 (lx, ly)，side 决定标签在左边还是右边
  const LABELS = [
    { organ: "brain", ax: 172, ay: 64, lx: 4, ly: 30, side: "left" },
    { organ: "lungs", ax: 160, ay: 222, lx: 4, ly: 196, side: "left" },
    { organ: "liver", ax: 160, ay: 296, lx: 4, ly: 262, side: "left" },
    { organ: "kidney", ax: 162, ay: 362, lx: 4, ly: 420, side: "left" },
    { organ: "vessels", ax: 84, ay: 322, lx: 4, ly: 476, side: "left" },
    { organ: "joint", ax: 124, ay: 604, lx: 4, ly: 626, side: "left" },
    { organ: "heart", ax: 240, ay: 238, lx: 416, ly: 170, side: "right" },
    { organ: "stomach", ax: 270, ay: 300, lx: 416, ly: 236, side: "right" },
    { organ: "pancreas", ax: 254, ay: 334, lx: 416, ly: 380, side: "right" },
    { organ: "bone", ax: 256, ay: 470, lx: 416, ly: 470, side: "right" },
  ];

  const epsFor = (key, field) => eps.filter((e) => (e[field] || []).includes(key));

  // ---------- 人体图 ----------
  function el(tag, attrs, parent) {
    const n = document.createElementNS(SVG, tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (parent) parent.appendChild(n);
    return n;
  }

  function setupBody() {
    const labels = $("labels");
    for (const L of LABELS) {
      const organ = catalog.organs[L.organ];
      const live = epsFor(L.organ, "organs");
      const on = live.length > 0;
      const group = document.querySelector(`[data-organ="${L.organ}"]`);
      group.classList.add(on ? "on" : "off");
      group.setAttribute("role", "button");
      group.setAttribute("tabindex", "0");
      group.setAttribute("aria-label", `${organ.name}：${on ? `已开演 ${live.length} 集` : "筹备中"}`);

      // 标签：引线 + 圆角框 + 文字
      const g = el("g", { class: `label ${on ? "on" : "off"}`, "data-organ": L.organ, role: "button", tabindex: "0", "aria-label": organ.name }, labels);
      const text = organ.name + (on ? " ▶" : "");
      const w = [...text].reduce((a, ch) => a + (ch.charCodeAt(0) > 255 ? 19 : 10), 0) + 20, h = 32;
      const x = L.side === "left" ? L.lx : L.lx - w;
      const edgeX = L.side === "left" ? x + w : x;
      el("path", { class: "leader", d: `M${L.ax} ${L.ay} L${edgeX} ${L.ly}` }, g);
      el("circle", { class: "pin", cx: L.ax, cy: L.ay, r: 3.5 }, g);
      el("rect", { x, y: L.ly - h / 2, width: w, height: h, rx: h / 2 }, g);
      const t = el("text", { x: x + 10, y: L.ly + 6.5 }, g);
      t.textContent = text;
    }
    for (const n of document.querySelectorAll("[data-organ]")) {
      n.addEventListener("click", () => openSheet(n.dataset.organ, n));
      n.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openSheet(n.dataset.organ, n); }
      });
    }
  }

  // ---------- 展签 ----------
  let lastFocus = null;
  function episodeItem(e) {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button"; b.className = "ep-card";
    b.style.setProperty("--ep", e.color);
    const dot = document.createElement("span"); dot.className = "ep-dot";
    const body = document.createElement("span"); body.className = "ep-body";
    const t = document.createElement("b"); t.textContent = e.title;
    const d = document.createElement("span"); d.textContent = e.summary;
    const go = document.createElement("span"); go.className = "ep-go"; go.textContent = `${e.scenes} 幕 ▶`;
    body.append(t, d);
    b.append(dot, body, go);
    b.addEventListener("click", () => { closeSheet(); location.hash = e.id; });
    li.appendChild(b);
    return li;
  }
  function plannedItem(name) {
    const li = document.createElement("li");
    li.className = "ep-planned";
    const t = document.createElement("b"); t.textContent = name;
    const s = document.createElement("span"); s.textContent = "筹备中";
    li.append(t, s);
    return li;
  }

  function openSheet(key, from) {
    const organ = catalog.organs[key];
    lastFocus = from || null;
    $("sheetTitle").textContent = organ.name;
    $("sheetFact").textContent = organ.fact;
    const list = $("sheetList");
    list.replaceChildren();
    for (const e of epsFor(key, "organs")) list.appendChild(episodeItem(e));
    for (const name of organ.planned) list.appendChild(plannedItem(name));
    $("sheet").hidden = false;
    $("sheetClose").focus();
  }
  function closeSheet() {
    $("sheet").hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $("sheetClose").addEventListener("click", closeSheet);
  $("sheetBackdrop").addEventListener("click", closeSheet);
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("sheet").hidden) closeSheet(); });

  // ---------- 按病种 ----------
  function setupDiseases() {
    const box = $("diseaseList");
    for (const c of catalog.categories) {
      const sec = document.createElement("section");
      sec.className = "disease";
      const h = document.createElement("h2"); h.textContent = c.name;
      const p = document.createElement("p"); p.textContent = c.desc;
      const ul = document.createElement("ul"); ul.className = "ep-list";
      for (const e of epsFor(c.id, "categories")) ul.appendChild(episodeItem(e));
      for (const name of c.planned) ul.appendChild(plannedItem(name));
      sec.append(h, p, ul);
      box.appendChild(sec);
    }
  }

  // ---------- 标签页 ----------
  function selectTab(which) {
    const body = which === "body";
    $("tabBody").setAttribute("aria-selected", body);
    $("tabDisease").setAttribute("aria-selected", !body);
    $("panelBody").hidden = !body;
    $("panelDisease").hidden = body;
  }
  $("tabBody").addEventListener("click", () => selectTab("body"));
  $("tabDisease").addEventListener("click", () => selectTab("disease"));

  // ---------- 展厅 ↔ 小剧场：用网址里的 #id 记录当前在看哪一集，手机返回手势也能回到展厅 ----------
  let fromHome = false; // 是否是从展厅点进来的（直接打开某一集的链接时为 false）
  function route() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (byId[id]) {
      fromHome = !$("home").hidden && fromHome !== null;
      $("home").hidden = true;
      $("episode").hidden = false;
      document.title = byId[id].title + " · 身体小剧场";
      scrollTo(0, 0);
      Anima.play(id);
    } else {
      Anima.stop();
      $("episode").hidden = true;
      $("home").hidden = false;
      document.title = "身体小剧场";
    }
  }
  // 从展厅点进来的就后退一步，这样手机返回手势和按钮的效果一致；直接打开的链接则清掉 #id
  $("back").addEventListener("click", () => { if (fromHome) history.back(); else location.hash = ""; });
  addEventListener("hashchange", route);

  const planned = new Set();
  for (const o of Object.values(catalog.organs)) o.planned.forEach((n) => planned.add(n));
  for (const c of catalog.categories) c.planned.forEach((n) => planned.add(n));
  $("count").textContent = `已开演 ${eps.length} 集 · 筹备中 ${planned.size} 集 · 持续更新`;

  setupBody();
  setupDiseases();
  fromHome = null; // 首次打开时不算“从展厅点进来”
  route();
  fromHome = false;
})();
