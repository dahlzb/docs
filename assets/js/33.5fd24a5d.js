(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{365:function(a,s,t){"use strict";t.r(s);var e=t(8),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入容器Shell")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" a34aff536643 /bin/bash\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查找软件安装目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" redis-server\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查找文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" / "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" *.conf\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看文件内容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/nginx/nginx.conf\n")])])]),s("h4",{attrs:{id:"开机启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开机启动"}},[a._v("#")]),a._v(" 开机启动")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开机启动")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always 容器ID\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 取消")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("no 容器ID \n")])])]),s("h4",{attrs:{id:"防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[a._v("#")]),a._v(" 防火墙")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开放防火墙指定端口")]),a._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6379")]),a._v("/tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重新加载防火墙")]),a._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);