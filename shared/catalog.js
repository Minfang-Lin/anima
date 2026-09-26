// 展厅目录：人体图上的器官、按病种的分组，以及还在筹备中的小剧场。
// 已上线的小剧场不用写在这里：每一集的 scene.js 在 meta 里写了 organs 和 categories，展厅会自动把它挂到对应的器官和病种下。
// 新做好一集后，把它从下面的 planned 里删掉即可。
window.AnimaCatalog = {
  organs: {
    brain: { name: "大脑", fact: "大脑只占体重的 2% 左右，却要用掉全身约 20% 的氧气。", planned: ["中风的黄金时间"] },
    lungs: { name: "肺", fact: "肺里有 3 亿到 5 亿个肺泡，全部展开约 70 平方米，差不多一个羽毛球场那么大。", planned: ["吸烟怎样伤害肺"] },
    heart: { name: "心脏", fact: "心脏每天跳动约 10 万次，一辈子都不休息。", planned: ["心梗是怎么发生的"] },
    liver: { name: "肝脏", fact: "肝脏是身体里最大的“化工厂”，切掉一部分还能慢慢长回来。", planned: ["喝酒与肝"] },
    stomach: { name: "胃", fact: "胃黏膜大约每 3 到 5 天就更新一遍，所以胃酸不会把胃自己消化掉。", planned: ["幽门螺杆菌与胃"] },
    pancreas: { name: "胰腺", fact: "胰腺里的胰岛只占胰腺的 1% 到 2%，却管着全身的血糖。", planned: ["胰岛素与 2 型糖尿病"] },
    kidney: { name: "肾脏", fact: "两个肾脏每天要过滤约 180 升血液，最后只留下 1 到 2 升尿。", planned: ["慢性肾病"] },
    vessels: { name: "血管", fact: "全身的血管连起来将近 10 万公里，能绕地球两圈多。", planned: ["高血压"] },
    bone: { name: "骨骼", fact: "成年人有 206 块骨头，骨头一直在悄悄更新，大约 10 年全身骨骼就换一遍。", planned: [] },
    joint: { name: "脚趾关节", fact: "大脚趾关节离心脏最远、温度偏低，是痛风最常找上门的地方。", planned: [] },
  },
  categories: [
    { id: "metabolic", name: "代谢病", desc: "血糖、血脂、尿酸这些“身体账本”出了问题", planned: ["胰岛素与 2 型糖尿病"] },
    { id: "cardio", name: "心脑血管", desc: "血管和心脏的故事", planned: ["高血压", "心梗是怎么发生的", "中风的黄金时间"] },
    { id: "digestive", name: "消化系统", desc: "肝、胃、肠道里的事", planned: ["喝酒与肝", "幽门螺杆菌与胃"] },
    { id: "respiratory", name: "呼吸系统", desc: "每一次呼吸背后的事", planned: ["吸烟怎样伤害肺"] },
    { id: "kidney", name: "肾脏", desc: "身体的净水厂", planned: ["慢性肾病"] },
    { id: "bone", name: "骨骼关节", desc: "撑起身体的骨头和关节", planned: [] },
  ],
};
