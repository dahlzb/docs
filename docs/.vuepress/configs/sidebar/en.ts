import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarEn: SidebarConfig = {
	"/database/": [
		{
			text: "SQL Server",
			collapsible: true,
			children: ["SqlServer常用语句"],
		},
	],
	"/dotnet/": [
		{
			text: "起步",
			//collapsible: true,
			children: ["/dotnet/反射.md"],
		},
		{
			text: "EntityFramework",
			//collapsible: true,
			children: ["EntityFramework"],
		},
	],
	"/docker/": ["docker.md"],
};
