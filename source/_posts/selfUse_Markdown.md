---
title: Markdown备忘
date: 2022-09-15 16:05:00
updated: 2022-9-15 16:05:00
tags: 自用
categories: 自用
description: MD及专有语法备忘。
cover: /img/Article/MarkdownCover.jpg
top_img: /img/Page/IndexImg.jpg
---
# Markdown语法

***

## 文本类
### 标题
{% tabs %}
<!-- tab 示例 -->
#### 四级标题
##### 五级标题
###### 六级标题
<!-- endtab -->

<!-- tab Markdown -->
```markdown
# Markdown语法
## 文本类
### 标题
#### 四级标题
##### 五级标题
###### 六级标题
```
<!-- endtab-->
{% endtabs %}

### 强调
使用"\_"或"\*"表示斜体，"\_\_"或"\*\*"表示粗体。
{% note info flat %}
"\_"与"\*"等价。
{% endnote %}
{% tabs %}
<!-- tab 示例 -->
**这个**和__这个__都是粗体
*这个*和_这个_都是斜体
***这个***和___这个___同时是粗体和斜体
<!-- endtab -->

<!-- tab Markdown -->
```
**这个**和__这个__都是粗体
*这个*和_这个_都是斜体
***这个***和___这个___同时是粗体和斜体
```
<!-- endtab -->
{% endtabs %}

### 引用
>这是一级引用
>>这是二级引用
>>>- 这是带有部分**粗体**
>>>- 这是带有*斜体*的三级引用
```
>这是一级引用
>>这是二级引用
>>>- 这是带有部分**粗体**
>>>- 这是带有*斜体*的三级引用
```

### 链接
[这是一个链接](https://ichika.cc)
[这是一个带说明的链接](https://ichika.cc "传送至主页")
快速链接<https://ichika.cc> <806708480@qq.com>
[引用型链接][1]
[1]: https://ichika.cc '主页'
*[**`语法嵌套`**](https://ichika.cc)*
```
[这是一个链接](https://ichika.cc)
[这是一个带说明的链接](https://ichika.cc "传送至主页")
快速链接<https://ichika.cc> <806708480@qq.com>
[引用型链接][1]
[1]: https://ichika.cc '主页'
*[**`语法嵌套`**](https://ichika.cc)*
```

### 其它
转义\* \[\]

***

分隔符
<div style="padding:10px;text-align:center;font-weight:bold">这是直接使用html的内容</div>

```
转义\* \[\]

***

分隔符
<div style="padding:10px;text-align:center;font-weight:bold">这是直接使用html的内容</div>
```

## 特殊区块
### 列表
1. 这是有序列表
3. 这是游戏列表
8. 这是有序列表
- 这是无序列表
* 这是无序列表
+ 这是无序列表
  +这是无序子列表
```
1. 这是有序列表
3. 这是游戏列表
8. 这是有序列表
- 这是无序列表
* 这是无序列表
+ 这是无序列表
  +这是无序子列表
```

### 代码
+ `这个`是一个普通的代码
+ ``再看看`这个`，这个``是内部带引号的代码
```
这就是一个代码块了
```
````
+ `这个`是一个普通的代码
+ ``再看看`这个`，这个``是内部带引号的代码
```
这就是一个代码块了
```
````

### 图片
![这是图片替代文本](/img/Page/IndexImg.jpg "Project Sekai 1st Anniversary by Rella")
[![这是图片替代文本](/img/Page/IndexImg.jpg "Project Sekai 1st Anniversary by Rella")](https://ichika.cc)
```
![这是图片替代文本](/img/Page/IndexImg.jpg "Project Sekai 1st Anniversary by Rella")
[![这是图片替代文本](/img/Page/IndexImg.jpg "Project Sekai 1st Anniversary by Rella")](https://ichika.cc)
```

***

# Hexo&Butterfly专用格式
{% note warning flat %}
仅引用格式时须将%转义。
{% endnote %}
## 提示
### 默认模板
{% note %}
这是一个最普通的提示标签示例
{% endnote %}

{% note info flat %}
标签格式为{\% note \[class\] \[no icon\] \[style\] \%}内容{\% endnote \%}
{% endnote %}

{% note info flat %}
class可选
{% endnote %}