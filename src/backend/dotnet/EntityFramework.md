---
title: EntityFramework
date: 2024-04-12 17:07:05
permalink: /pages/d27b57/
---
# EntityFramework



### SQL中like关键字结合SqlParameter

``` C#
sql += "and  t1.CarNum like '%'+@CarNum+'%' ";
```

```bash
vim practice_1.txt
```

``` stylus
//***vdoing主题-CSS变量***//

// 颜色
$bannerTextColor = #fff // 首页banner区(博客标题区)的文本颜色
$accentColor = #11A8CD
$activeColor = #ff5722
$arrowBgColor = #ccc

// 布局
$navbarHeight = 3.6rem
$sidebarWidth = 18rem
$contentWidth = 860px
```

### 另一个 SqlParameterCollection 中已包含 SqlParameter

``` csharp
var logRecordListSqlParameter = new List<SqlParameter>();
string tableName = "";
StringBuilder condition = new StringBuilder();
condition.Append(" 1=1 ");

if (!string.IsNullOrEmpty(param.TableName)) tableName = param.TableName;
else tableName = "OperationRecords_" + DateTime.Now.ToString("yyyyMMdd");

if (!string.IsNullOrEmpty(param.AccountName))
{
    condition.AppendFormat(@" and AccountName like '%' + @AccountName + '%'");
    logRecordListSqlParameter.Add(new SqlParameter("@AccountName", param.AccountName));
}
if (param.BeginTime != null && param.BeginTime != DateTime.MinValue)
{
    condition.AppendFormat(@" and CreateTime>=@BeginTime ");
    logRecordListSqlParameter.Add(new SqlParameter("@BeginTime", param.BeginTime));
}
if (param.EndTime != null && param.EndTime != DateTime.MinValue)
{
    condition.AppendFormat(@" and CreateTime <= @EndTime ");
    logRecordListSqlParameter.Add(new SqlParameter("@EndTime", param.EndTime));
}

logRecordListSqlParameter.Add(new SqlParameter("@pageIndex", param.PageNumber));
logRecordListSqlParameter.Add(new SqlParameter("@pageSize", param.PageSize));

using (LogDatabaseEntities db = new LogDatabaseEntities(this._ConnectionString))
{
    string countSql = string.Format(@"select count(*) TotalCount from {0} where {1}", tableName, condition.ToString());
    var logRecordListSql = string.Format(@"WITH temp_row AS (select ROW_NUMBER() over(order by CreateTime desc) as RowNumber, * from {0} WHERE {1}) SELECT OperationRecordId,ApiSysCode,ApiMethodName,ResultCode,LogRecordId,GroupIndex,RemoteIp,SrcSysCode,AccountId,AccountName,CreateTime FROM temp_row WHERE RowNumber > ((@pageIndex - 1) * @pageSize) AND RowNumber <= (@pageIndex * @pageSize)", tableName, condition.ToString());

    db.Database.CommandTimeout = 120;
    // 总数
    var totalCount = db.Database.SqlQuery<int>(countSql, logRecordListSqlParameter.Select(x => ((ICloneable)x).Clone()).ToArray()).FirstOrDefault();
    var recordList = db.Database.SqlQuery<OperationRecordDto>(logRecordListSql, logRecordListSqlParameter.Select(x => ((ICloneable)x).Clone()).ToArray()).ToList();
}
```



### EntityFramework dbContext 如何实例化

[参考地址](https://www.programminghunter.com/article/46411814576/)

1. DbContext怎么在Asp.mvc中使如何实例化

``` C#
public class Repository
{
    //实例化EF容器:有弊端。一个线程里可能会创建多个DbContext
    //DbContext db = new DbContext();

    //改造：保证一个请求线程中只有一份EF容器（你要明白：一个url请求到服务器，IIS就开一个线程去处理）
    protected DbContext GetDbContext
    {
        get
        {
            //向线程缓存中查询，如果返回的是null，则创建，同时存入到这个线程缓存中
            //注意的是线程缓存CallContext，而不是我们熟悉的HttpRuntime.cache。意味着这个DbContext对象在这个线程内能被其他方法共享。
            object efDbContext = CallContext.GetData("DbContext");
            if (efDbContext == null)
            {
                efDbContext = new DbContext();
                //存入到这个线程缓存中
                CallContext.SetData("DbContext", efDbContext);
            }
            return efDbContext as DbContext;
        }
    }
}
```

2. 为什么你要using 或dispose掉DbContext

   是担心数据库连接没有释放？还是担心DbContext占用过多资源呢？
   首先担心数据库连接没有释放肯定是多余的，因为DbContext在SaveChanges完成后会释放掉打开的数据库连接。
   可以反编译一下SaveChages的源码。
   担心DbContext占用过多资源也是多余的，有GC回收。

