---
title: 浏览器Cookie和SameSite
date: 2024-04-12 17:07:05
#permalink: /pages/f9e38d/
---
## 浏览器Cookie和SameSite

#### 前言

近期第三方网站通过iframe嵌套公司业务页面，出现页面Cookie丢失问题。

经深入排查，发现新版本的Chrome浏览器（80版本之后）对Cookie的校验更加严格，Cookie的 ``SameSite`` 属性默认由 ``None`` 变为了 ``Lax``。

#### 解决方案

主要原理就是要在页面请求的 ``Response Header`` 的属性 ``Set-Cookie`` 后带上 ``Secure;SameSite=None`` 

##### 一、修改服务器配置

```nginx
# 推荐该方案，已测试
server {
    listen 443 ssl http2;
    server_name www.cat73.org;

    ssl_certificate /etc/letsencrypt/live/cat73.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/cat73.org/privkey.pem;

    ssl_trusted_certificate /etc/letsencrypt/live/cat73.org/chain.pem;

    add_header X-XSS-Protection "1; mode=block";
    add_header X-Frame-Options SAMEORIGIN;
    add_header Strict-Transport-Security "max-age=15768000";

    location / {
        root /var/www/html;
    }

    location /api {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # 在这里设置
        proxy_cookie_path / "/; httponly; secure; SameSite=None";
    }
}
```



#### 参考

1. [浏览器系列之 Cookie 和 SameSite 属性](https://github.com/mqyqingfeng/Blog/issues/157#)
2. [新版本chrome浏览器带来的跨域请求cookie丢失问题](https://www.jianshu.com/p/aa80ca97f877)
3. [Work with SameSite cookies in ASP.NET](https://docs.microsoft.com/zh-cn/aspnet/samesite/system-web-samesite)

