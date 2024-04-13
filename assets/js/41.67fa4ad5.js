(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{370:function(t,s,e){"use strict";e.r(s);var a=e(8),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"浏览器cookie和samesite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器cookie和samesite"}},[t._v("#")]),t._v(" 浏览器Cookie和SameSite")]),t._v(" "),s("h4",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("近期第三方网站通过iframe嵌套公司业务页面，出现页面Cookie丢失问题。")]),t._v(" "),s("p",[t._v("经深入排查，发现新版本的Chrome浏览器（80版本之后）对Cookie的校验更加严格，Cookie的 "),s("code",[t._v("SameSite")]),t._v(" 属性默认由 "),s("code",[t._v("None")]),t._v(" 变为了 "),s("code",[t._v("Lax")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("主要原理就是要在页面请求的 "),s("code",[t._v("Response Header")]),t._v(" 的属性 "),s("code",[t._v("Set-Cookie")]),t._v(" 后带上 "),s("code",[t._v("Secure;SameSite=None")])]),t._v(" "),s("h5",{attrs:{id:"一、修改服务器配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、修改服务器配置"}},[t._v("#")]),t._v(" 一、修改服务器配置")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推荐该方案，已测试")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl http2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" www.cat73.org")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v(" /etc/letsencrypt/live/cat73.org/fullchain.pem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v(" /etc/letsencrypt/live/cat73.org/privkey.pem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_trusted_certificate")]),t._v(" /etc/letsencrypt/live/cat73.org/chain.pem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X-XSS-Protection "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1; mode=block"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X-Frame-Options SAMEORIGIN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Strict-Transport-Security "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max-age=15768000"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /var/www/html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /api")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Real-IP "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Forwarded-For "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在这里设置")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_cookie_path")]),t._v(" / "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/; httponly; secure; SameSite=None"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/157#",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器系列之 Cookie 和 SameSite 属性"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/aa80ca97f877",target:"_blank",rel:"noopener noreferrer"}},[t._v("新版本chrome浏览器带来的跨域请求cookie丢失问题"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/aspnet/samesite/system-web-samesite",target:"_blank",rel:"noopener noreferrer"}},[t._v("Work with SameSite cookies in ASP.NET"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);