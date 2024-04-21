---
title: Ajax使用
date: 2024-04-12 17:07:05
#permalink: /pages/a6f34e/
---
### 总结jQuery中Ajax的使用



[$.ajaxPrefilter文档地址](https://api.jquery.com/jQuery.ajaxPrefilter/)

```javascript
// 设置AJAX的全局默认选项
$.ajaxSetup({
	type: "POST" , // 默认使用POST方式
    dataType: "JSON", // 默认接收数据为JSON
	headers: { // 添加默认请求头
		"Author": "Author" ,
		"Powered-By": "CodePlayer",
        "content-type": 'application/json', // 内容类型
        "X-Client-Version": "1.0.5.1"
	} ,
    success:function(result,status,xhr){
        console.log("$.ajaxSetup ===== 当前请求成功");
    },
	error:function(xhr,status,error){
        // 提示形如：发送AJAX请求到"/index.html"时出错[404]：Not Found
        console.error(`发送AJAX请求到${this.url}时出错[${xhr.status}]:${error}`);
	}
});

// 指定预处理参数选项的函数
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
	if( options.data == null && options.type == "POST"){
		options.type = "GET"; // 将请求方式改为GET			
	}
    let onBeforeSend = options.beforeSend;
    let onSuccess = options.success;
    let onError = options.error;
    options.beforeSend = function (xhr) {
        if (typeof onBeforeSend === "function") onBeforeSend(xhr);
    }
    options.success = function (data, status, xhr) {
        console.log(`$.ajaxPrefilter ===== ajaxPrefilter中success插入的输出`);
        if (typeof onSuccess === "function") onSuccess(data, status, xhr);
    }
    options.error = function (xhr, status, error) {
        console.error(`$.ajaxPrefilter ===== ajaxPrefilter中error插入的输出`);
        if (typeof onError === "function") onError(xhr, status, error);
    }
});
```

