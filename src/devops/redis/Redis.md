---
title: Redis
date: 2024-04-12 17:07:05
order: 1
---

## Redis


### 文件结构

```
redis-server        redis服务器
redis-cli           redis命令行客户端
redis-benchmark     redis性能测试工具
redis-check-aof     aof文件修复工具
redis-check-dump    rdb文件检查工具
```

### 常用命令

``` shell
# 使用默认配置启动redis服务器
redis-server
# 使用指定配置文件启动redis服务器
redis-server ./redis.conf
# 不指定ip和端口默认连接127.0.0.1:6379
redis-cli
redis-cli -h 127.0.0.1 -p 6379
```

### 数据持久化

#### 数据备份

TODO

#### 数据迁移

##### AOF方式

AOF方式依赖于AOF文件，AOF文件记录了所有写命令。

* 将源服务器中的AOF文件复制到目标服务器 

* 目标服务器开启AOF功能

``` bash
config set appendonly yes
```

* 将源服务器AOF文件数据导入目标服务器

```bash
redis-cli --pipe < appendonly.aof
```

   

##### RDB方式

使用 Redis 命令创建当前数据库备份，将在安装目录中创建 `dump.rdb` 文件。

创建 redis 备份文件也可以使用命令 `BGSAVE`，该命令在后台执行。

``` bash
SAVE 
```

关闭目标服务器 redis 服务，关闭目标服务器  AOF 持久化。

 ```bash
 appendonly no
 ```

将源服务器数据库备份文件复制到目标服务器，并替换目标目标服务器的 `dump.rdb` 文件。

重启 Redis 服务，使用 `redis-cli` 执行命令 ` bgrewriteaof ` 生成 AOF 持久化文件，修改配置文件开启AOF持久化，重启Redis服务。



### 主从复制

指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(master/leader)，后者称为从节点(slave/follower) ; 数据的复制是单向的，只能由主节点到从节点。`Master` 以写为主，`Slave` 以读为主。

- 为了避免单点Redis服务器故障，准备多台服务器，互相连通。将数据复制多个副本保存在不同的服务器上，连接在一起，并保证数据是同步的。
- 即使有其中一台服务器宕机，其他服务器依然可以继续提供服务，实现Redis的高可用，同时实现数据冗余备份。

- 主从复制即将master中的数据即时、有效的复制到slave中
- 一个master可以拥有多个slave，一个slave只对应一个master

#### 作用

1. 读写分离：主节点写，从节点读，提高服务器的读写负载能力
2. 数据冗余︰主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。
3. 故障恢复︰当主节点出现问题时，可以由从节点提供服务，实现快速的故障恢复 ; 实际上是一种服务的冗余。
4. 负载均衡︰在主从复制的基础上，配合读写分离，可以由主节点提供写服务，由从节点提供读服务（即写Redis数据时应用连接主节点，读Redis数据时应用连接从节点），分担服务器负载 ; 尤其是在写少读多的场景下，通过多个从节点分担读负载，可以大大提高Redis服务器的并发量。
5. 高可用（集群）基石︰除了上述作用以外，主从复制还是哨兵和集群能够实施的基础，因此说主从复制是Redis高可用的基础。



> Redis 5.0之后，`replicaof` 已经替换 `slaveof`，由于一些种族歧视的奇葩要求，Redis已经对指令进行了兼容升级，目前 `slaveof` 还是可以使用的。

#### 配置

```bash
# 查询主从复制配置
INFO replication
```

##### 修改 redis.conf

``` bash
# 修改从库配置文件，设置主库地址
replicaof 192.168.208.128 6379
```

##### redis-cli

登录从库，执行以下命令，该方式服务重启后失效

``` bash
# 设置主库地址
REPLCONF 192.168.208.128 6379
# 取消主从配置
REPLCONF no one
```



### 哨兵机制

 `Redis` 的主从复制，在一定程度上保证了数据的可用性，但是如果主从复制中的 `master` 节点挂掉，`Redis` 将不再对外提供读写操作。假设当主从复制中的 `master` 节点挂掉后，如果能够从它的 `slave` 节点中重新选举一个节点作为 `master` 节点，那么系统就可以恢复了，因此就有了 `Redis` 的哨兵（sentinel）模式。

Redis Sentinel 在不使用 [Redis 集群](https://redis.io/docs/manual/scaling) 时为 Redis 提供高可用性。

Redis Sentinel 还提供其他附带任务，例如监控、 通知并充当客户端的配置提供程序。

#### 功能

* 监控：`Sentinel` 会不断检查 `Redis` 主从实例是否正常工作；
* 通知：当被监控的 `Redis` 实例出问题时，能通过 API 通知系统管理员或其他程序；

* 自动故障转移：如果主实例没有正常工作，`Sentinel` 将启动故障恢复机制把一个从实例提升为主实例，其他的从实例将会被重新配置到新的主实例，且应用程序会得到一个更换新地址的通知。

* 配置提供程序：因为 `Sentinel` 保存着 `Redis` 主从的信息，所以 `Redis` 可以从 `Sentinel` 那获得所有的配置信息。

#### 配置

在指定 Redis 版本源码包中找到 `sentinel.conf` 配置文件，修改要监控的主服务地址

``` bash
# sentinel monitor <master-name> <ip> <port> <quorum>
sentinel monitor mymaster 192.168.208.128 6379 2
```

告诉 Redis Sentinel 一个名为 *mymaster* 的 master， 即地址 192.168.208.128 端口 6379，仲裁为 2。

`quorum` 是无法访问主节点时，需要 `quorum` 个哨兵监控到主节点下线后，哨兵们会重新投票选举 slave 节点作为 master 节点，恢复系统的读写操作，后续如果老的 主节点恢复工作，则作为从节点提供服务。



#### 运行

默认情况下，哨兵会侦听 TCP 端口 26379 的连接，因此要使 Sentinels 正常工作，服务器 26379 端口必须打开才能接收来自其他 Sentinel 实例的 IP 地址的连接。 否则，哨兵无法交谈，也无法就要执行的操作达成一致，因此永远不会进行故障转移。

可使用以下两种方式运行

```bash
# 方式一
redis-sentinel /path/to/sentinel.conf
# 方式二
redis-server /path/to/sentinel.conf --sentinel
```

至少需要三个 Sentinel 实例才能进行可靠的部署。

三个 sentinel 实例应放置在不同区域不同物理服务器或虚拟机。

