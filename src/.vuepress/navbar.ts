import { navbar } from "vuepress-theme-hope";

export default navbar([
	"/",
	{
		text: "前端",
		link: "/frontend/",
	},
	{
		text: "后端",
		//icon: "pen-to-square",
    prefix:"/backend/",
		children: [{
      text: ".NET",
      link: "dotnet/",
    },{
      text: "数据库",
		  link: "database/",
    }],
	},
	{
		text: "运维",
		prefix: "/devops/",
    children: [{
      text: "Linux",
      link: "linux/",
    },{
      text: "Docker",
		  link: "docker/",
    }],
	}
]);
