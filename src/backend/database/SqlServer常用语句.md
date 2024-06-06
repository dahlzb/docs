---
title: SqlServer常用语句
date: 2024-04-12 17:07:05
---
## SqlServer常用语句



#### 修改字段的部分数据

``` sql
UPDATE TableName SET 字段名 = REPLACE(字段名,'字段中修改前的数据','字段中修改后的数据') WHERE 字段名 like '%字段中修改前的数据%'
```

#### 添加列

``` sql
ALTER TABLE 表名 ADD 列名 数据类型 是否为NULL 默认值
-- 添加列
ALTER TABLE [TableName] ADD [ColumnName] nvarchar(50) NULL
-- 修改列
ALTER TABLE [TableName] ALTER COLUMN [ColumnName] nvarchar(50) NOT NULL
-- 删除列
ALTER TABLE [TableName] DROP COLUMN [ColumnName]
-- 删除表格
DROP TABLE [TableName]
-- 删除视图
DROP VIEW [ViewName]
-- 清空数据表
TRUNCATE TABLE [TableName]
```

#### 定义变量

``` sql
DECLARE @UserId uniqueidentifier
SELECT @UserId = UserId FROM [TableName] WHERE ThirdAccount = '2088012569981173'
DELETE [TableName] WHERE UserId = @UserId
```

#### 存储过程

``` sql
CREATE PROCEDURE [dbo].[Proc_StatisticsScsyyServiceVolume] 
	-- Add the parameters for the stored procedure here
	@BeginTime datetime,
	@EndTime datetime
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	DECLARE @ImgTextInquiryPrescriptionOrderQuantity int
	DECLARE @ImgTextInquiryOrderQuantity int
	
	SET NOCOUNT ON;

	-- 图文问诊可开方
	SELECT @ImgTextInquiryPrescriptionOrderQuantity = COUNT(*) FROM [YJY31.Orders].[dbo].[Orders] AS O
	WHERE O.GoodsOrderState = 20

	-- 图文问诊
	SELECT @ImgTextInquiryOrderQuantity = COUNT(*) FROM [YJY31.Orders].[dbo].[Orders] AS O
	WHERE O.GoodsOrderState = 20 

	SELECT @ImgTextInquiryPrescriptionOrderQuantity as ImgTextInquiryPrescriptionOrderQuantity,
	@ImgTextInquiryOrderQuantity as ImgTextInquiryOrderQuantity
END 
```

#### 游标

``` sql
DECLARE @PaymentSerialNumber varchar(50) 
DECLARE @RefundTime datetime2 
DECLARE @PaymentTime datetime2 
-- 定义游标
-- 查出需要的集合放到游标中
DECLARE My_Cursor CURSOR 
FOR (SELECT PaymentSerialNumber FROM [YJY31.ProxyPay].[dbo].[RefundApply] GROUP BY PaymentSerialNumber) 
-- 打开游标
OPEN My_Cursor; 
-- 读取第一行数据(将MemberAccount表中的UserId放到@UserId变量中)
FETCH NEXT FROM My_Cursor INTO @PaymentSerialNumber; 
WHILE @@FETCH_STATUS = 0
	BEGIN
		-- 打印数据
		PRINT @PaymentSerialNumber; 
		SELECT @PaymentTime FROM [YJY31.Orders].[dbo].[Orders] where [PayOrderNumber] = @PaymentSerialNumber
		if @PaymentTime IS NOT NULL
		BEGIN
			UPDATE [YJY31.ProxyPay].[dbo].[AdvancePaymentOrders] SET PaymentCompleteTime = @PaymentTime WHERE PaymentSerialNumber = @PaymentSerialNumber 
		END
		-- 读取下一行数据
		FETCH NEXT FROM My_Cursor INTO @PaymentSerialNumber; 
	END
-- 关闭游标
CLOSE My_Cursor;
-- 释放游标
DEALLOCATE My_Cursor;
GO
```

