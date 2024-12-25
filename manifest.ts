// https://www.figma.com/plugin-docs/manifest/

export default {
  name: "Piano",
  id: "1453662299129904150",
  api: "1.0.0",
  editorType: ["figma", "figjam"],
  main: "./canvas.js",
  ui: "./plugin.html",
  documentAccess: "dynamic-page",
  networkAccess: {
    allowedDomains: ["https://d1pzp51pvbm36p.cloudfront.net"],
  },
};
