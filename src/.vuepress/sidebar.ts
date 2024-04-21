import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "":[
    ""
  ],
  "/frontend/": "structure",
  "/backend/database/": [{
    text: "数据库",
    children: "structure",
  }], 
  "/backend/dotnet/": [{
    text: ".NET",
    children: "structure",
  }], 
  "/devops/": "structure"
});
