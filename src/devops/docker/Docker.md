---
title: Docker
date: 2024-04-12 17:07:05
#permalink: /pages/69da9b/
---


``` shell
# 进入容器Shell
docker exec -it a34aff536643 /bin/bash
# 查找软件安装目录
which redis-server
# 查找文件
find / -name *.conf
# 查看文件内容
cat /etc/nginx/nginx.conf
```



#### 开机启动

``` shell
# 开机启动
docker update --restart=always 容器ID
# 取消
docker update --restart=no 容器ID 
```

#### 防火墙

```shell
# 开放防火墙指定端口
firewall-cmd --zone=public --add-port=6379/tcp --permanent
# 重新加载防火墙
firewall-cmd --reload
```
