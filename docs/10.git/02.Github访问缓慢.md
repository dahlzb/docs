---
title: Github访问缓慢
date: 2024-04-12 17:07:05
permalink: /pages/6deef9/
---
## 完美解决Github访问缓慢问题

#### 克隆速度慢

此方法需要使用代理工具且已经打开SS代理，然后获取 ``socks5`` 的代理地址，然后通过 ``git bash`` 命令行工具设置代理地址。
```
git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080
```

也可以直接修改配置文件 ``sudo vi ~/.gitconfig`` 摁 `i` 进入编辑模式，在最下面添加一段配置代码，按`Esc`退出编辑模式，输入:wq保存并退出。

``windows`` 配置文件地址 ``C:\Users\Administrator\.gitconfig`` 。

```
[http]
	proxy = socks5://127.0.0.1:1080
[https]
	proxy = socks5://127.0.0.1:1080
```

#### 访问速度慢

1. 修改本地hosts文件

   windows系统的hosts文件的位置如下：`C:\Windows\System32\drivers\etc\hosts`

   mac/linux系统的hosts文件的位置如下：`/etc/hosts`

2. 获取Github相关网站IP地址

   访问 [ipaddress](https://www.ipaddress.com) ，分别输入 `github.global.ssl.fastly.net` 和 `github.com`，查询ip地址。
   
   在 `hosts` 文件中增加 `github.global.ssl.fastly.net` 和 `github.com` 的IP映射

```
199.232.5.194 github.global.ssl.fastly.net
140.82.113.4  github.com
```

##### 参考文件

1. [完美解决github访问速度慢](https://www.cnblogs.com/knuzy/p/9415243.html)
2. [通过代理工具提高Github Clone速度](https://github.com/jaywcjlove/handbook/blob/master/other/%E9%80%9A%E8%BF%87%E4%BB%A3%E7%90%86%E5%B7%A5%E5%85%B7%E6%8F%90%E9%AB%98Github%20Clone%E9%80%9F%E5%BA%A6.md)

