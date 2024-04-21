---
title: 使用PicGo+Github+CDN搭建图床
date: 2024-04-12 17:07:05
#permalink: /pages/de57da/
---
## 使用PicGo+Github+CDN搭建图床

[PicGo](https://github.com/Molunerfinn/PicGo) 是一个开源项目，可以用来快捷上传图片到图床。

PicGo 可以让你通过粘贴、拖拽等方式将图片上传到你的图床，并将上传后图片的链接地址放在剪切板，支持多种链接格式，直接粘贴就可以引用该图片了。

![](https://cdn.jsdelivr.net/gh/DahlZb/FigureBed/img/20191206155619.png)

下载对应系统的安装文件，进行安装

![](https://cdn.jsdelivr.net/gh/DahlZb/FigureBed/img/20191206155753.png)

本教程使用Github厂库来搭建一个免费的图床，所以我们需要先建立一个Github厂库来存放我们上传的图片。
#### 安装 `github-plus` 插件

该插件可以让我们对上传后的文件进行同步删除，即 `PicGo` 相册中删除后，`Github` 中的图片也会被删除。

打开 `PicGo` 点击左侧 `插件设置`，搜索插件 **[picgo-plugin-github-plus](https://github.com/zWingz/picgo-plugin-github-plus)** ，点击安装。

接下来我们对 `github-plus` 进行配置，依次点击左侧 `图床设置` 、`githubPlus` ，可以看到我们需要 `repo` `token` 两个必填值。

![](https://cdn.jsdelivr.net/gh/DahlZb/FigureBed/img/20191206155831.png)

#### 获取token值

首先登陆Github，创建一个新的厂库。

repo的值等于{Owner}/{Repository name}

![](https://cdn.jsdelivr.net/gh/DahlZb/FigureBed/img/20191206155901.png)

#### 获取token值

访问 [https://github.com/settings/tokens](https://github.com/settings/tokens)，点击 `Generate new token` ,进行以下配置后点击底部 `Generate token`

![](https://cdn.jsdelivr.net/gh/DahlZb/FigureBed/img/20191206155942.png)

复制生成的token，token在创建后只显示一次，注意备份保存。
![](https://cdn.jsdelivr.net/gh/DahlZb/FigureBed/img/20191206160009.png)

设置好后点击确定并设为默认图床

![](https://cdn.jsdelivr.net/gh/DahlZb/FigureBed/img/20191206160026.png)

切换到上传区，进行测试。如上传失败请查看右下角提示和查看配置。

#### 使用 jsDelivr 优化图片访问速度

因放在Github上的资源在国内加载速度比较慢，因此需要使用CDN加速来优化网站打开速度，jsDelivr + Github便是免费且好用的CDN，非常适合博客网站使用。

使用方法：https://cdn.jsdelivr.net/gh/你的用户名/你的仓库名@分支名/文件路径

例如：

>// 完全省略该版本以获取最新版本，默认分支中的文件
>https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js
>
>// 使用指定分支中的文件
>https://cdn.jsdelivr.net/gh/jquery/jquery@3.2/dist/jquery.min.js
>https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js

配置 `githubPlus` `customUrl` https://cdn.jsdelivr.net/gh/DahlZb/FigureBed