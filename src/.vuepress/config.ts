import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",

  lang: "zh-CN",
  title: "DahlZb小站",
  description: "DahlZb小站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
