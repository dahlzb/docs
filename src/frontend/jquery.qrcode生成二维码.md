---
title: qrcode生成二维码
date: 2024-04-12 17:07:05
---
### jquery.qrcode生成二维码

##### 基本用法

```javascript
$("#output").qrcode("http://www.baidu.com")
```

##### 中文ULR生成方法

```javascript
// 使用encodeURI进行转码
$("#output").qrcode(encodeURI("http://中文中文"));
```

##### 进阶用法

```javascript
$('#qrcode').qrcode({
    text: "http://www.baidu.com", // 设置二维码内容
    render: "canvas", // 也可以替换为table
    width: 100, // 二维码宽度
    height: 100, // 二维码高度
    foreground: "#C00", // 前景色
    background: "#FFF", // 背景色
    typeNumber: -1, // 计算模式    
	correctLevel: 0, // 纠错等级 
});

```

##### canvas转image

手机上``canvas`` 格式的二维码无法触发按下弹出识别二维码选项，需将 ``canvas`` 转为 ``image`` 格式

[canvas.toDataURL()方法说明](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement)

```javascript
// 查找canvas DOM
var canvas = document.getElementById("canvas");
// 返回一个data: URL
var url = canvas.toDataURL();
// 创建一个img元素
var newImg = document.createElement("img");
// 赋值图片地址
newImg.src = url;
// 追加到body中
document.body.appendChild(newImg);
```





