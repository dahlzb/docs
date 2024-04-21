---
title: Docker
date: 2024-04-12 17:07:05
---


## Docker



### 在CentOS安装

#### 卸载旧版本

``` bash
sudo yum remove docker \
                docker-client \
                docker-client-latest \
                docker-common \
                docker-latest \
                docker-latest-logrotate \
                docker-logrotate \
                docker-engine
```

#### 设置软件包管理器

```bash
sudo yum install -y yum-utils
# 设置docker存储库来源为阿里云
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

#### 安装Docker引擎

安装 `Docker Engine` 、`containerd` 和 `Docker Compose`

##### 安装最新版本

```bash
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

##### 安装指定版本

1、列出当前系统可以使用的存储库，按版本好从高到低对结果进行排序。

```bash
$ yum list docker-ce --showduplicates | sort -r

docker-ce.x86_64  3:18.09.1-3.el7                     docker-ce-stable
docker-ce.x86_64  3:18.09.0-3.el7                     docker-ce-stable
docker-ce.x86_64  18.06.1.ce-3.el7                    docker-ce-stable
docker-ce.x86_64  18.06.0.ce-3.el7                    docker-ce-stable
```

2、通过其完整的软件包名称安装特定版本，例如将 `<VERSION_STRING>` 替换为 `18.09.1` 

```bash
# 将 <VERSION_STRING> 替换为所需版本
sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io docker-buildx-plugin docker-compose-plugin
```

##### 启动docker

``` bash
# 立即启动Docker服务
sudo systemctl start docker
# 设置Docker服务开机启动
sudo systemctl enable docker
```

#### 卸载Docker

```bash
# 删除安装包
yum remove docker-ce
# 删除镜像、容器、配置文件等内容
rm -rf /var/lib/docker
```

### 常用命令

#### 镜像

``` shell
# 查看本地镜像
docker images
# 搜索远程厂库中的镜像
docker search redis
# 拉取远程厂库中的镜像
docker pull redis
```

#### 容器

``` bash
# 正在运行的容器列表
docker container ls
# 进入容器
docker exec -it a34aff536643 /bin/bash
```

#### 开机启动

``` shell
# 设置容器开机启动
docker update --restart=always 容器ID
# 取消容器开机启动
docker update --restart=no 容器ID 
```



### 在Docker中安装Redis

#### 准备Redis配置文件

因为 `Docker` 中安装 `Redis` 没有配置文件，需要我们先到 [Redis官网](https://github.com/redis/redis/blob/7.2.4/redis.conf) 中下载当前安装版本的配置文件 `redis.conf` 。

修改以下配置

```shell
# 注释掉这部分，使redis可以外部访问
bind 127.0.0.1 
# 设置redis设置密码
requirepass 123456
# redis持久化
appendonly yes
# 关闭连接保护模式，开启保护模式后未设置密码其它主机无法连接
protected-mode no
```

在宿主机创建与Docker容器映射的目录，并将 `redis.conf` 文件放在 `conf` 目录

```bash
# conf存放配置文件，data存放持久化数据
mkdir -p /usr/local/docker/redis/conf /usr/local/docker/redis/data
```

#### 启动 Docker Redis容器

```shell
# 拉取redis最新版镜像
docker pull redis
# 运行一个 redis 容器
docker run --name myredis -p 6379:6379 \
           --restart=always \
           -e='TZ=Asia/Shanghai' \
           -v /usr/local/docker/redis/conf:/usr/local/etc/redis/conf \
           -v /usr/local/docker/redis/data:/data \
           -d redis redis-server /usr/local/etc/redis/conf/redis.conf
```

`--name`：设置容器名称

`-p`：宿主机和容器之间的端口映射

`-e='TZ=Asia/Shanghai'` ：设置时区为上海

`-v /usr/local/docker/redis/conf:/usr/local/etc/redis/conf` ：挂载宿主机 `/usr/local/docker/redis/conf` 目录到容器 `usr/local/etc/redis/conf`目录

`redis-server /usr/local/etc/redis/conf/redis.conf` ：指定 `redis` 服务启动使用的配置文件

#### 哨兵

在指定 Redis 版本源码包中找到 `sentinel.conf` 配置文件，修改以下配置

``` bash
sentinel monitor myMaster 192.168.208.128 6379 2
logfile "/usr/local/etc/redis/sentinel/sentinel.log"
```

启动一个哨兵

```bash
docker run --name myRedisSentinel -p 26379:26379 \
           --restart=always \
           -e='TZ=Asia/Shanghai' \
           -v /usr/local/docker/redis/sentinel:/usr/local/etc/redis/sentinel \
           -d redis redis-sentinel /usr/local/etc/redis/sentinel/sentinel.conf
```

#### 防火墙

```shell
# 开放防火墙指定端口
firewall-cmd --zone=public --add-port=6379/tcp --permanent
# 重新加载防火墙
firewall-cmd --reload
```

### 安装SqlServer

[Docker：在 Linux 上安装适用于 SQL Server 的容器 - SQL Server |Microsoft学习](https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&tabs=cli&pivots=cs1-bash)

``` bash
# 拉取redis最新版镜像		   
docker pull mcr.microsoft.com/mssql/server:2022-latest
# 创建docker mssql 数据卷存放目录
mkdir -p /usr/local/docker/mssql
# 赋予数据卷目录读写权限
chmod 777 /usr/local/docker/mssql
# 运行一个容器
docker run --name mssql -p 1433:1433 \
           --restart=always \
           -e='TZ=Asia/Shanghai' \
           -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=sa123456." \
           -e "MSSQL_AGENT_ENABLED=true" \
           -v /usr/local/docker/mssql:/var/opt/mssql \
           -d mcr.microsoft.com/mssql/server:2022-latest
```