import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarZh: SidebarConfig = {
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
			collapsible: true,
			children: ["反射"],
		},
		{
			text: "EntityFramework",
			collapsible: true,
			children: ["EntityFramework"],
		},
	],
	"/docker/": ["docker"],
};
