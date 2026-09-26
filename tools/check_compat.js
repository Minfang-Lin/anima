// 检查要打包进小红书小工具的 JS / CSS 是否兼容 Chrome 61（安卓 8.1 自带 WebView）。
// 用法：node tools/check_compat.js <文件...>   有问题时退出码为 1，并逐条列出。
//
// JS：用 acorn 按 ES2017 解析，能发现 ?.、??、对象展开 {...x} 等更新的语法；
//     再按名单查 Chrome 61 之后才有的 API（replaceChildren、Object.fromEntries 等）。
// CSS：查 Chrome 61 不支持的写法：inset、min()/max()/clamp()、:is()/:where()/:has()，
//     以及在弹性布局里用 gap（Chrome 84 才支持）。网格布局要同时写 grid-gap。
const fs = require("fs");
const acorn = require("acorn");

const JS_APIS = [
  [/\.replaceChildren\s*\(/, "Element.replaceChildren（Chrome 86）"],
  [/Object\.fromEntries/, "Object.fromEntries（Chrome 73）"],
  [/\.trimStart\s*\(|\.trimEnd\s*\(/, "String.trimStart/trimEnd（Chrome 66）"],
  [/\.replaceAll\s*\(/, "String.replaceAll（Chrome 85）"],
  [/\.flatMap\s*\(|\.flat\s*\(/, "Array.flat/flatMap（Chrome 69）"],
  [/\.at\s*\(\s*-?\d/, "Array/String.at（Chrome 92）"],
  [/\.matchAll\s*\(/, "String.matchAll（Chrome 73）"],
  [/Promise\.(allSettled|any)/, "Promise.allSettled/any（Chrome 76+）"],
  [/\bglobalThis\b/, "globalThis（Chrome 71）"],
  [/\bstructuredClone\b/, "structuredClone（Chrome 98）"],
  [/\.toggleAttribute\s*\(/, "Element.toggleAttribute（Chrome 69）"],
  [/\bResizeObserver\b/, "ResizeObserver（Chrome 64）"],
  [/\bqueueMicrotask\b/, "queueMicrotask（Chrome 71）"],
];
const CSS_RULES = [
  [/(^|[;{\s])inset\s*:/, "inset（Chrome 87），请写 top/right/bottom/left"],
  [/:\s*[^;{}]*\b(min|max|clamp)\(/, "CSS 的 min()/max()/clamp()（Chrome 79）"],
  [/:(is|where|has)\(/, ":is()/:where()/:has() 选择器"],
  // 旧浏览器遇到不认识的伪类会丢掉整条规则，:focus-visible 必须单独写一条
  [/,[^{};]*:focus-visible[^{};]*\{|:focus-visible[^{};]*,[^{};]*\{/, ":focus-visible（Chrome 86）和其他选择器写在一起，旧浏览器会丢掉整条规则"],
];

const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:"'\\])\/\/[^\n]*/g, "$1");
const problems = [];

for (const file of process.argv.slice(2)) {
  const text = fs.readFileSync(file, "utf8");
  if (file.endsWith(".js")) {
    try {
      acorn.parse(text, { ecmaVersion: 2017, sourceType: "script" });
    } catch (e) {
      problems.push(`${file}:${e.loc ? e.loc.line : "?"}  用了 ES2017 之后的语法：${e.message}`);
    }
    const code = stripComments(text);
    code.split("\n").forEach((line, i) => {
      for (const [re, why] of JS_APIS) if (re.test(line)) problems.push(`${file}:${i + 1}  ${why}`);
    });
  } else if (file.endsWith(".css")) {
    const css = stripComments(text);
    const lineOf = (idx) => css.slice(0, idx).split("\n").length;
    for (const [re, why] of CSS_RULES) {
      const g = new RegExp(re.source, "g");
      let m;
      while ((m = g.exec(css))) problems.push(`${file}:${lineOf(m.index)}  ${why}`);
    }
    // gap 只允许出现在同时写了 grid-gap 的网格规则里
    const ruleRe = /([^{}]+)\{([^{}]*)\}/g;
    let r;
    while ((r = ruleRe.exec(css))) {
      const body = r[2];
      if (/(^|[;\s])gap\s*:/.test(body) && !/grid-gap\s*:/.test(body)) {
        problems.push(`${file}:${lineOf(r.index)}  「${r[1].trim()}」里的 gap 没有 grid-gap；弹性布局请改用 margin`);
      }
    }
  }
}

if (problems.length) {
  console.error("不兼容 Chrome 61 的地方：\n  " + problems.join("\n  "));
  process.exit(1);
}
console.log(`兼容性检查通过（${process.argv.length - 2} 个文件，Chrome 61 / ES2017）`);
