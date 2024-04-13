(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{364:function(e,t,a){"use strict";a.r(t);var n=a(8),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"entityframework"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entityframework"}},[e._v("#")]),e._v(" EntityFramework")]),e._v(" "),t("h3",{attrs:{id:"sql中like关键字结合sqlparameter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql中like关键字结合sqlparameter"}},[e._v("#")]),e._v(" SQL中like关键字结合SqlParameter")]),e._v(" "),t("div",{staticClass:"language-c# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sql += \"and  t1.CarNum like '%'+@CarNum+'%' \";\n")])])]),t("h3",{attrs:{id:"另一个-sqlparametercollection-中已包含-sqlparameter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#另一个-sqlparametercollection-中已包含-sqlparameter"}},[e._v("#")]),e._v(" 另一个 SqlParameterCollection 中已包含 SqlParameter")]),e._v(" "),t("div",{staticClass:"language-c# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var logRecordListSqlParameter = new List<SqlParameter>();\nstring tableName = "";\nStringBuilder condition = new StringBuilder();\ncondition.Append(" 1=1 ");\n\nif (!string.IsNullOrEmpty(param.TableName)) tableName = param.TableName;\nelse tableName = "OperationRecords_" + DateTime.Now.ToString("yyyyMMdd");\n\nif (!string.IsNullOrEmpty(param.AccountName))\n{\n    condition.AppendFormat(@" and AccountName like \'%\' + @AccountName + \'%\'");\n    logRecordListSqlParameter.Add(new SqlParameter("@AccountName", param.AccountName));\n}\nif (param.BeginTime != null && param.BeginTime != DateTime.MinValue)\n{\n    condition.AppendFormat(@" and CreateTime>=@BeginTime ");\n    logRecordListSqlParameter.Add(new SqlParameter("@BeginTime", param.BeginTime));\n}\nif (param.EndTime != null && param.EndTime != DateTime.MinValue)\n{\n    condition.AppendFormat(@" and CreateTime <= @EndTime ");\n    logRecordListSqlParameter.Add(new SqlParameter("@EndTime", param.EndTime));\n}\n\nlogRecordListSqlParameter.Add(new SqlParameter("@pageIndex", param.PageNumber));\nlogRecordListSqlParameter.Add(new SqlParameter("@pageSize", param.PageSize));\n\nusing (LogDatabaseEntities db = new LogDatabaseEntities(this._ConnectionString))\n{\n    string countSql = string.Format(@"select count(*) TotalCount from {0} where {1}", tableName, condition.ToString());\n    var logRecordListSql = string.Format(@"WITH temp_row AS (select ROW_NUMBER() over(order by CreateTime desc) as RowNumber, * from {0} WHERE {1}) SELECT OperationRecordId,ApiSysCode,ApiMethodName,ResultCode,LogRecordId,GroupIndex,RemoteIp,SrcSysCode,AccountId,AccountName,CreateTime FROM temp_row WHERE RowNumber > ((@pageIndex - 1) * @pageSize) AND RowNumber <= (@pageIndex * @pageSize)", tableName, condition.ToString());\n\n    db.Database.CommandTimeout = 120;\n    // 总数\n    var totalCount = db.Database.SqlQuery<int>(countSql, logRecordListSqlParameter.Select(x => ((ICloneable)x).Clone()).ToArray()).FirstOrDefault();\n    var recordList = db.Database.SqlQuery<OperationRecordDto>(logRecordListSql, logRecordListSqlParameter.Select(x => ((ICloneable)x).Clone()).ToArray()).ToList();\n}\n')])])]),t("h3",{attrs:{id:"entityframework-dbcontext-如何实例化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entityframework-dbcontext-如何实例化"}},[e._v("#")]),e._v(" EntityFramework dbContext 如何实例化")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.programminghunter.com/article/46411814576/",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考地址"),t("OutboundLink")],1)]),e._v(" "),t("ol",[t("li",[e._v("DbContext怎么在Asp.mvc中使如何实例化")])]),e._v(" "),t("div",{staticClass:"language-c# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class Repository\n{\n    //实例化EF容器:有弊端。一个线程里可能会创建多个DbContext\n    //DbContext db = new DbContext();\n\n    //改造：保证一个请求线程中只有一份EF容器（你要明白：一个url请求到服务器，IIS就开一个线程去处理）\n    protected DbContext GetDbContext\n    {\n        get\n        {\n            //向线程缓存中查询，如果返回的是null，则创建，同时存入到这个线程缓存中\n            //注意的是线程缓存CallContext，而不是我们熟悉的HttpRuntime.cache。意味着这个DbContext对象在这个线程内能被其他方法共享。\n            object efDbContext = CallContext.GetData("DbContext");\n            if (efDbContext == null)\n            {\n                efDbContext = new DbContext();\n                //存入到这个线程缓存中\n                CallContext.SetData("DbContext", efDbContext);\n            }\n            return efDbContext as DbContext;\n        }\n    }\n}\n')])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("为什么你要using 或dispose掉DbContext")]),e._v(" "),t("p",[e._v("是担心数据库连接没有释放？还是担心DbContext占用过多资源呢？\n首先担心数据库连接没有释放肯定是多余的，因为DbContext在SaveChanges完成后会释放掉打开的数据库连接。\n可以反编译一下SaveChages的源码。\n担心DbContext占用过多资源也是多余的，有GC回收。")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);