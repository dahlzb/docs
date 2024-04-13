(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{368:function(a,s,t){"use strict";t.r(s);var e=t(8),v=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"linx系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linx系统"}},[a._v("#")]),a._v(" Linx系统")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://doc.shiyanlou.com/linux_base/4-1.png",alt:"Linux目录结构"}})]),a._v(" "),s("h3",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出目录文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" /home\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 用较长格式列出文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看所有文件包括隐藏文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看某个目录的完整属性")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("目录名"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示所有文件大小 a-查看目录内所有文件，s-显示文件大小，S-按文件大小排序，")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-asSh")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /home/shiyanlou\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" asd.txt fgh.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建连续的多个文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" love_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("_shiyanlou.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查找文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" *.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装软件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" sysvbanner\n")])])]),s("p",[a._v("Shell 常用通配符：")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("字符")]),a._v(" "),s("th",[a._v("含义")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("*")])]),a._v(" "),s("td",[a._v("匹配 0 或多个字符")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("?")])]),a._v(" "),s("td",[a._v("匹配任意一个字符")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("[list]")])]),a._v(" "),s("td",[a._v("匹配 list 中的任意单一字符")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("[^list]")])]),a._v(" "),s("td",[a._v("匹配 除 list 中的任意单一字符以外的字符")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("[c1-c2]")])]),a._v(" "),s("td",[a._v("匹配 c1-c2 中的任意单一字符 如：[0-9][a-z]")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("{string1,string2,...}")])]),a._v(" "),s("td",[a._v("匹配 string1 或 string2 (或更多)其一字符串")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("{c1..c2}")])]),a._v(" "),s("td",[a._v("匹配 c1-c2 中全部字符 如{1..10}")])])])]),a._v(" "),s("h3",{attrs:{id:"用户及文件权限管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户及文件权限管理"}},[a._v("#")]),a._v(" 用户及文件权限管理")]),a._v(" "),s("h4",{attrs:{id:"二、linux用户管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、linux用户管理"}},[a._v("#")]),a._v(" 二、Linux用户管理")]),a._v(" "),s("h5",{attrs:{id:"查看用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看用户"}},[a._v("#")]),a._v(" 查看用户")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("who")]),a._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[a._v("参数")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("-a")])]),a._v(" "),s("td",[a._v("打印能打印的全部")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-d")])]),a._v(" "),s("td",[a._v("打印死掉的进程")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-m")])]),a._v(" "),s("td",[a._v("同"),s("code",[a._v("am i")]),a._v("，"),s("code",[a._v("mom likes")])])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-q")])]),a._v(" "),s("td",[a._v("打印当前登录用户数及用户名")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-u")])]),a._v(" "),s("td",[a._v("打印当前登录用户登录信息")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-r")])]),a._v(" "),s("td",[a._v("打印运行等级")])])])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 新建用户")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" adduser lilei\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除用户 --remove-home 删除用户的工作目录，否则保存")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" deluser lilei --remove-home\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换登录用户")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" lilei\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 注销")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v(" 或 ctrl + d\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看指定用户(lilei)的用户组")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("groups")]),a._v(" lilei\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将用户(lilei)添加到指定用户组(sudo)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("usermod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-G")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" lilei\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除用户组")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("groupdel")]),a._v(" 组\n")])])]),s("h5",{attrs:{id:"adduser-和-useradd-的区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adduser-和-useradd-的区别是什么"}},[a._v("#")]),a._v(" "),s("code",[a._v("adduser")]),a._v(" 和 "),s("code",[a._v("useradd")]),a._v(" 的区别是什么")]),a._v(" "),s("p",[a._v("答："),s("code",[a._v("useradd")]),a._v(" 只创建用户，不会创建用户密码和工作目录，创建完了需要使用 "),s("code",[a._v("passwd")]),a._v(" 去设置新用户的密码。"),s("code",[a._v("adduser")]),a._v(" 在创建用户的同时，会创建工作目录和密码（提示你设置），做这一系列的操作。其实 "),s("code",[a._v("useradd")]),a._v("、"),s("code",[a._v("userdel")]),a._v(" 这类操作更像是一种命令，执行完了就返回。而 "),s("code",[a._v("adduser")]),a._v(" 更像是一种程序，需要你输入、确定等一系列操作。")]),a._v(" "),s("p",[a._v("Linux 还有一些关于隐藏权限和特殊权限的内容，想全面了解 Linux 权限管理这部分内容的用户可以通过其它方式学习。")]),a._v(" "),s("h4",{attrs:{id:"三、linux文件权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、linux文件权限"}},[a._v("#")]),a._v(" 三、Linux文件权限")]),a._v(" "),s("h5",{attrs:{id:"_3-2-变更文件所有者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-变更文件所有者"}},[a._v("#")]),a._v(" 3.2 变更文件所有者")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 变更文件所有者")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" 所有者名 文件名\n")])])]),s("h5",{attrs:{id:"_3-3-修改文件权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-修改文件权限"}},[a._v("#")]),a._v(" 3.3 修改文件权限")]),a._v(" "),s("p",[a._v("每个文件有三组固定的权限，分别对应拥有者，所属用户组，其他用户，"),s("strong",[a._v("记住这个顺序是固定的")]),a._v("。文件的读写执行对应字母 "),s("code",[a._v("rwx")]),a._v("，以二进制表示就是 "),s("code",[a._v("111")]),a._v("，用十进制表示就是 "),s("code",[a._v("7")])]),a._v(" "),s("p",[a._v("方式一：二进制数字")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),a._v(" iphone11\n")])])]),s("p",[a._v("方式二：加减赋值操作")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 去掉用户组、其它用户、用户的 rwx 权限")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" gou-rwx iphone11\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 给用户组添加 r 权限")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" g+r iphone11\n")])])]),s("p",[s("code",[a._v("g")]),a._v(" 、"),s("code",[a._v("o")]),a._v("  、"),s("code",[a._v("u")]),a._v("  分别表示 group（用户组）、others（其他用户） 和 user（用户），"),s("code",[a._v("+")]),a._v(" 和 "),s("code",[a._v("-")]),a._v(" 分别表示增加和去掉相应的权限。")]),a._v(" "),s("h3",{attrs:{id:"目录结构及文件基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构及文件基本操作"}},[a._v("#")]),a._v(" 目录结构及文件基本操作")]),a._v(" "),s("h4",{attrs:{id:"新建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建"}},[a._v("#")]),a._v(" 新建")]),a._v(" "),s("p",[a._v("新建空白文件")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])])]),s("p",[a._v("新建目录")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("mkdir")]),a._v("（make directories）命令可以创建一个空目录，也可同时指定创建目录的权限属性。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" mydir\n")])])]),s("p",[a._v("使用 "),s("code",[a._v("-p")]),a._v(" 参数，同时创建父目录（如果不存在该父目录），如下我们同时创建一个多级目录（这在安装软件、配置安装路径时非常有用）：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" father/son/grandson \n")])])]),s("p",[a._v("需要注意的是，若当前目录已经创建了一个 test 文件，再使用 "),s("code",[a._v("mkdir test")]),a._v(" 新建同名的文件夹，系统会报错文件已存在。这符合 Linux 一切皆文件的理念。")]),a._v(" "),s("p",[a._v("若当前目录存在一个 test 文件夹，则 "),s("code",[a._v("touch")]),a._v(" 命令，则会更改该文件夹的时间戳而不是新建文件。")]),a._v(" "),s("h4",{attrs:{id:"复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[a._v("#")]),a._v(" 复制")]),a._v(" "),s("p",[a._v("复制文件")]),a._v(" "),s("p",[a._v("将 "),s("code",[a._v("test")]),a._v(" 文件复制到 "),s("code",[a._v("father/son/grandson")]),a._v(" 目录中")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" father/son/grandson\n")])])]),s("p",[a._v("复制目录")]),a._v(" "),s("p",[a._v("要成功复制目录需要加上 "),s("code",[a._v("-r")]),a._v(" 或者 "),s("code",[a._v("-R")]),a._v(" 参数，表示递归复制，就是说有点“株连九族”的意思")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" father family\n")])])]),s("h4",{attrs:{id:"删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[a._v("#")]),a._v(" 删除")]),a._v(" "),s("p",[a._v("删除文件")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("rm")]),a._v("（remove files or directories）命令删除一个文件 :")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])])]),s("p",[a._v("强制删除")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])])]),s("p",[a._v("删除目录")]),a._v(" "),s("p",[a._v("跟复制目录一样，要删除一个目录，也需要加上 "),s("code",[a._v("-r")]),a._v(" 或 "),s("code",[a._v("-R")]),a._v(" 参数：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" family\n")])])]),s("p",[a._v("遇到权限不足删除不了的目录也可以和删除文件一样加上 "),s("code",[a._v("-f")]),a._v(" 参数：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" family\n")])])]),s("h4",{attrs:{id:"移动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动"}},[a._v("#")]),a._v(" 移动")]),a._v(" "),s("p",[a._v("移动文件")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("mv")]),a._v("（move or rename files）命令移动文件（剪切）。命令格式是 "),s("code",[a._v("mv 源目录文件 目的目录")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" file1 Documents\n")])])]),s("p",[a._v("重命名文件")]),a._v(" "),s("p",[s("code",[a._v("mv")]),a._v(" 命令除了能移动文件外，还能给文件重命名。命令格式为 "),s("code",[a._v("mv 旧的文件名 新的文件名")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" file1 myfile\n")])])]),s("h4",{attrs:{id:"批量重命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量重命名"}},[a._v("#")]),a._v(" 批量重命名")]),a._v(" "),s("p",[a._v("使用命令 "),s("code",[a._v("rename")]),a._v(" 来实现，不过它的参数要用 perl 正则表达式。")]),a._v(" "),s("p",[s("code",[a._v("rename")]),a._v(" 不是内置命令， 若提示无该命令可以使用 "),s("code",[a._v("sudo apt-get install rename")]),a._v(" 命令自行安装。")]),a._v(" "),s("p",[s("code",[a._v("rename")]),a._v(" 是先使用第二个参数的通配符匹配所有后缀为 "),s("code",[a._v(".txt")]),a._v(" 的文件，然后使用第一个参数提供的正则表达式将匹配的这些文件的 "),s("code",[a._v(".txt")]),a._v(" 后缀替换为 "),s("code",[a._v(".c")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /home/shiyanlou/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用通配符批量创建 5 个文件:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 批量将这 5 个后缀为 .txt 的文本文件重命名为以 .c 为后缀的文件:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rename")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/\\.txt/\\.c/'")]),a._v(" *.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 批量将这 5 个文件，文件名和后缀改为大写:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rename")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'y/a-z/A-Z/'")]),a._v(" *.c\n")])])]),s("h4",{attrs:{id:"查看文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件"}},[a._v("#")]),a._v(" 查看文件")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("cat")]),a._v("，"),s("code",[a._v("tac")]),a._v(" 和 "),s("code",[a._v("nl")]),a._v(" 命令查看文件")]),a._v(" "),s("p",[a._v("前两个命令都是用来打印文件内容到标准输出（终端），其中 "),s("code",[a._v("cat")]),a._v(" 为正序显示，"),s("code",[a._v("tac")]),a._v(" 为倒序显示。")]),a._v(" "),s("p",[a._v("比如要查看 "),s("code",[a._v("passwd")]),a._v(" 文件")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v("\n")])])]),s("p",[a._v("可以加上 "),s("code",[a._v("-n")]),a._v(" 参数显示行号：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v("\n")])])]),s("h4",{attrs:{id:"使用-more-和-less-命令分页查看文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-more-和-less-命令分页查看文件"}},[a._v("#")]),a._v(" 使用 "),s("code",[a._v("more")]),a._v(" 和 "),s("code",[a._v("less")]),a._v(" 命令分页查看文件")]),a._v(" "),s("p",[a._v("如果说上面的 "),s("code",[a._v("cat")]),a._v(" 是用来快速查看一个文件的内容的，那么这个 "),s("code",[a._v("more")]),a._v(" 和 "),s("code",[a._v("less")]),a._v(' 就是天生用来"阅读"一个文件的内容的，比如说 man 手册内部就是使用的 '),s("code",[a._v("less")]),a._v(" 来显示内容。其中 "),s("code",[a._v("more")]),a._v(" 命令比较简单，只能向一个方向滚动，而 "),s("code",[a._v("less")]),a._v(" 为基于 "),s("code",[a._v("more")]),a._v(" 和 "),s("code",[a._v("vi")]),a._v(" （一个强大的编辑器，我们有单独的课程来让你学习）开发，功能更强大。"),s("code",[a._v("less")]),a._v(" 的使用基本和 "),s("code",[a._v("more")]),a._v(" 一致，具体使用请查看 man 手册，这里只介绍 "),s("code",[a._v("more")]),a._v(" 命令的使用。")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("more")]),a._v(" 命令打开 "),s("code",[a._v("passwd")]),a._v(" 文件：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v("\n")])])]),s("h4",{attrs:{id:"使用-head-和-tail-命令查看文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-head-和-tail-命令查看文件"}},[a._v("#")]),a._v(" 使用 "),s("code",[a._v("head")]),a._v(" 和 "),s("code",[a._v("tail")]),a._v(" 命令查看文件")]),a._v(" "),s("p",[a._v("这两个命令，那些性子比较急的人应该会喜欢，因为它们一个是只查看文件的头几行（默认为 10 行，不足 10 行则显示全部）和尾几行。还是拿 passwd 文件举例，比如当我们想要查看最近新增加的用户，那么我们可以查看这个 "),s("code",[a._v("/etc/passwd")]),a._v(" 文件，不过我们前面也看到了，这个文件里面一大堆乱糟糟的东西，看起来实在费神啊。因为系统新增加一个用户，会将用户的信息添加到 passwd 文件的最后，那么这时候我们就可以使用 "),s("code",[a._v("tail")]),a._v(" 命令了：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" /etc/passwd\n")])])]),s("p",[a._v("甚至更直接的只看一行， 加上 "),s("code",[a._v("-n")]),a._v(" 参数，后面紧跟行数：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" /etc/passwd\n")])])]),s("p",[a._v("关于 "),s("code",[a._v("tail")]),a._v(" 命令，不得不提的还有它一个很牛的参数 "),s("code",[a._v("-f")]),a._v("，这个参数可以实现不停地读取某个文件的内容并显示。这可以让我们动态查看日志，达到实时监视的目的。不过我不会在这门基础课程中介绍它的更多细节，感兴趣的用户可以自己去了解。")]),a._v(" "),s("h4",{attrs:{id:"查看文件类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件类型"}},[a._v("#")]),a._v(" 查看文件类型")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("file")]),a._v(" 命令查看文件的类型：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" /bin/ls\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" shiyanlou.txt\n")])])]),s("p",[a._v("与 Windows 不同的是，如果你新建了一个 shiyanlou.txt 文件，Windows 会自动把它识别为文本文件，而 "),s("code",[a._v("file")]),a._v(" 命令会识别为一个空文件。这个前面我提到过，在 Linux 中文件的类型不是根据文件后缀来判断的。当你在文件里输入内容后才会显示文件类型。")]),a._v(" "),s("h4",{attrs:{id:"编辑文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑文件"}},[a._v("#")]),a._v(" 编辑文件")]),a._v(" "),s("p",[a._v("Vim")]),a._v(" "),s("h3",{attrs:{id:"环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[a._v("#")]),a._v(" 环境变量")]),a._v(" "),s("h4",{attrs:{id:"创建变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建变量"}},[a._v("#")]),a._v(" 创建变量")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("declare")]),a._v(" 命令创建一个变量名为 tmp 的变量：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" tmp\n")])])]),s("p",[a._v("其实也可以不用 declare 预声明一个变量，直接即用即创建")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("=")]),a._v(" 号赋值运算符，将变量 tmp 赋值为 shiyanlou。注意，与其他语言不同的是， Shell 中的赋值操作，"),s("code",[a._v("=")]),a._v(" 两边不可以输入空格，否则会报错。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 正确的赋值")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("tmp")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("shiyanlou\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 错误的赋值")]),a._v("\ntmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" shiyanlou\n")])])]),s("p",[a._v("读取变量的值，使用 "),s("code",[a._v("echo")]),a._v(" 命令和 "),s("code",[a._v("$")]),a._v(" 符号（"),s("strong",[a._v("$ 符号用于表示引用一个变量的值，初学者经常忘记输入")]),a._v("）：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tmp")]),a._v("\n")])])]),s("h4",{attrs:{id:"变量修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量修改"}},[a._v("#")]),a._v(" 变量修改")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("变量设置方式")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("${变量名#匹配字串}")])]),a._v(" "),s("td",[a._v("从头向后开始匹配，删除符合匹配字串的最短数据")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("${变量名##匹配字串}")])]),a._v(" "),s("td",[a._v("从头向后开始匹配，删除符合匹配字串的最长数据")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("${变量名%匹配字串}")])]),a._v(" "),s("td",[a._v("从尾向前开始匹配，删除符合匹配字串的最短数据")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("${变量名%%匹配字串}")])]),a._v(" "),s("td",[a._v("从尾向前开始匹配，删除符合匹配字串的最长数据")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("${变量名/旧的字串/新的字串}")])]),a._v(" "),s("td",[a._v("将符合旧字串的第一个字串替换为新的字串")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("${变量名//旧的字串/新的字串}")])]),a._v(" "),s("td",[a._v("将符合旧字串的全部字串替换为新的字串")])])])]),a._v(" "),s("p",[a._v("从变量值最后开始匹配删除 "),s("code",[a._v("mypath")]),a._v(" 变量中的 "),s("code",[a._v("/home/shiyanlou/mybin")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mypath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${mypath"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("home"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("shiyanlou"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mybin}")]),a._v("\n")])])]),s("h4",{attrs:{id:"删除变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除变量"}},[a._v("#")]),a._v(" 删除变量")]),a._v(" "),s("p",[a._v("可以使用 "),s("code",[a._v("unset")]),a._v(" 命令删除一个环境变量：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" mypath\n")])])]),s("h4",{attrs:{id:"让环境变量生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#让环境变量生效"}},[a._v("#")]),a._v(" 让环境变量生效")]),a._v(" "),s("p",[a._v("前面我们在 Shell 中修改了一个配置脚本文件之后（比如 zsh 的配置文件 home 目录下的 "),s("code",[a._v(".zshrc")]),a._v("），每次都要退出终端重新打开甚至重启主机之后其才能生效，很是麻烦，我们可以使用 "),s("code",[a._v("source")]),a._v(" 命令来让其立即生效，如：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /home/shiyanlou\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" .zshrc\n")])])]),s("p",[s("code",[a._v("source")]),a._v(" 命令还有一个别名就是 "),s("code",[a._v(".")]),a._v("，上面的命令如果替换成 "),s("code",[a._v(".")]),a._v(" 的方式就该是：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" ./.zshrc\n")])])]),s("p",[a._v("在使用 "),s("code",[a._v(".")]),a._v(" 的时候，需要注意与表示当前路径的那个点区分开。")]),a._v(" "),s("h3",{attrs:{id:"文件查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件查找"}},[a._v("#")]),a._v(" 文件查找")]),a._v(" "),s("p",[a._v("与搜索相关的命令常用的有 "),s("code",[a._v("whereis")]),a._v("，"),s("code",[a._v("which")]),a._v("，"),s("code",[a._v("find")]),a._v(" 和 "),s("code",[a._v("locate")]),a._v("。")]),a._v(" "),s("h4",{attrs:{id:"whereis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whereis"}},[a._v("#")]),a._v(" whereis")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查找文件 who 、find")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("whereis")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("who")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("whereis")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v("\n")])])]),s("p",[a._v("使用 "),s("code",[a._v("whereis")]),a._v(" 这个搜索很快，因为它并没有从硬盘中依次查找，而是直接从数据库中查询。")]),a._v(" "),s("p",[s("code",[a._v("whereis")]),a._v(" 只能搜索二进制文件（"),s("code",[a._v("-b")]),a._v("），man 帮助文件（"),s("code",[a._v("-m")]),a._v("）和源代码文件（"),s("code",[a._v("-s")]),a._v("）。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("命令")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("-b")])]),a._v(" "),s("td",[a._v("只搜索二进制文件")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-m")])]),a._v(" "),s("td",[a._v("只搜索man 帮助文件")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-s")])]),a._v(" "),s("td",[a._v("只搜索源代码文件")])])])]),a._v(" "),s("h4",{attrs:{id:"locate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locate"}},[a._v("#")]),a._v(" locate")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("locate")]),a._v(" 命令查找文件也不会遍历硬盘，它通过查询 "),s("code",[a._v("/var/lib/mlocate/mlocate.db")]),a._v(" 数据库来检索信息。不过这个数据库也不是实时更新的，系统会使用定时任务每天自动执行 "),s("code",[a._v("updatedb")]),a._v(" 命令来更新数据库。所以有时候你刚添加的文件，它可能会找不到，需要手动执行一次 "),s("code",[a._v("updatedb")]),a._v(" 命令（在我们的环境中必须先执行一次该命令）。注意这个命令也不是内置的命令，在部分环境中需要手动安装，然后执行更新。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" updatedb\n")])])]),s("p",[a._v("它可以用来查找指定目录下的不同文件类型，如查找 "),s("code",[a._v("/etc")]),a._v(" 下所有以 sh 开头的文件：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" /etc/sh\n")])])]),s("p",[a._v("查找 "),s("code",[a._v("/usr/share/")]),a._v(" 下所有 jpg 文件：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" /usr/share/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("*.jpg\n")])])]),s("table",[s("thead",[s("tr",[s("th",[a._v("命令")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("-b")])]),a._v(" "),s("td",[a._v("只搜索二进制文件")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-m")])]),a._v(" "),s("td",[a._v("只搜索man 帮助文件")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-s")])]),a._v(" "),s("td",[a._v("只搜索源代码文件")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-c")])]),a._v(" "),s("td",[a._v("统计数目")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-i")])]),a._v(" "),s("td",[a._v("忽略大小写进行搜索")])])])]),a._v(" "),s("h4",{attrs:{id:"which小而精"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#which小而精"}},[a._v("#")]),a._v(" which小而精")]),a._v(" "),s("p",[s("code",[a._v("which")]),a._v(" 本身是 Shell 内建的一个命令，我们通常使用 "),s("code",[a._v("which")]),a._v(" 来确定是否安装了某个指定的程序，因为它只从 "),s("code",[a._v("PATH")]),a._v(" 环境变量指定的路径中去搜索命令并且返回第一个搜索到的结果。也就是说，我们可以看到某个系统命令是否存在以及执行的到底是哪一个地方的命令。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("man")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" nginx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v("\n")])])]),s("h4",{attrs:{id:"find精而细"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find精而细"}},[a._v("#")]),a._v(" find精而细")]),a._v(" "),s("p",[s("code",[a._v("find")]),a._v(" 应该是这几个命令中最强大的了，它不但可以通过文件类型、文件名进行查找而且可以根据文件的属性（如文件的时间戳，文件的权限等）进行搜索。")]),a._v(" "),s("p",[a._v("基本命令格式为 "),s("code",[a._v("find [path] [option] [action]")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("参数")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("-atime")])]),a._v(" "),s("td",[a._v("最后访问时间")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-ctime")])]),a._v(" "),s("td",[a._v("最后修改文件内容的时间")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-mtime")])]),a._v(" "),s("td",[a._v("最后修改文件属性的时间")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-name")])]),a._v(" "),s("td",[a._v("按目录或文件名搜索")])])])]),a._v(" "),s("p",[a._v("下面以 "),s("code",[a._v("-mtime")]),a._v(" 参数举例：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("-mtime n")]),a._v("：n 为数字，表示为在 n 天之前的“一天之内”修改过的文件")]),a._v(" "),s("li",[s("code",[a._v("-mtime +n")]),a._v("：列出在 n 天之前（不包含 n 天本身）被修改过的文件")]),a._v(" "),s("li",[s("code",[a._v("-mtime -n")]),a._v("：列出在 n 天之内（包含 n 天本身）被修改过的文件")]),a._v(" "),s("li",[s("code",[a._v("-newer file")]),a._v("：file 为一个已存在的文件，列出比 file 还要新的文件名")])]),a._v(" "),s("p",[a._v("列出 home 目录中，当天（24 小时之内）有改动的文件：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" ~ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-mtime")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),s("p",[a._v("列出用户家目录下比 /etc 目录新的文件：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" ~ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-newer")]),a._v(" /etc\n")])])]),s("p",[a._v("这条命令表示去 "),s("code",[a._v("/etc/")]),a._v(" 目录下面 ，搜索名字叫做 interfaces 的文件或者目录。这是 "),s("code",[a._v("find")]),a._v(" 命令最常见的格式，千万记住 "),s("code",[a._v("find")]),a._v(" 的第一个参数是要搜索的地方。命令前面加上 "),s("code",[a._v("sudo")]),a._v(" 是因为 shiyanlou 只是普通用户，对 "),s("code",[a._v("/etc")]),a._v(" 目录下的很多文件都没有访问的权限，如果是 root 用户则不用使用。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" /etc/ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" interfaces\n")])])]),s("h3",{attrs:{id:"压缩文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩文件"}},[a._v("#")]),a._v(" 压缩文件")]),a._v(" "),s("p",[a._v("使用 zip 打包文件夹")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" shiyanlou_1.zip /home/shiyanlou/Desktop "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-x")]),a._v(" ~/*.zip\n")])])]),s("table",[s("thead",[s("tr",[s("th",[a._v("参数")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("-r")])]),a._v(" "),s("td",[a._v("递归打包包含子目录的全部内容")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-1")])]),a._v(" "),s("td",[a._v("设置压缩级别，1 表示最快压缩但体积大，9 表示体积最小但耗时最久")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-q")])]),a._v(" "),s("td",[a._v("表示为安静模式，即不向屏幕输出信息")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-o")])]),a._v(" "),s("td",[a._v("表示输出文件，需在其后紧跟打包输出文件名")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-x")])]),a._v(" "),s("td",[a._v("排除指定文件，不将指定文件打包进压缩文件，这里只能使用绝对路径，否则不起作用")])])])]),a._v(" "),s("p",[a._v("查看文件信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" *.zip ~ "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[a._v("参数")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("-h")])]),a._v(" "),s("td",[a._v("显示文件大小单位")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("-d 0")])]),a._v(" "),s("td",[a._v("查询文件深度，目录级别")])]),a._v(" "),s("tr",[s("td"),a._v(" "),s("td")]),a._v(" "),s("tr",[s("td"),a._v(" "),s("td")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);