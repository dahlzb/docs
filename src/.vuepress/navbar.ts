import { navbar } from "vuepress-theme-hope";

export default navbar([
	"/",
	{
		text: "前端",
		link: "/front/",
	},
	{
		text: "后端",
		link: "/backend/",
		children: [{
      text: ".NET",
      link: "/dotnet/",
    },{
      text: "数据库",
		  link: "/database/",
    }],
	},
	{
		text: "运维",
		link: "/devops/",
    children: [{
      text: "Linux",
      link: "/linux/",
    },{
      text: "Docker",
		  link: "/docker/",
    }],
	}
]);
