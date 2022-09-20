---
title: Markdown备忘
date: 2022-09-15 16:05:00
updated: 2022-9-20 15:20:00
tags: 自用
categories: 自用
description: MD及专有语法备忘。
cover: https://s3.bmp.ovh/imgs/2022/09/20/d67dae6ab4c78b97.jpg
---
><b style="font-size:16px">文章参考：</b>
>{% btn 'https://butterfly.js.org/posts/4aa8abbe/#%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B%EF%BC%88Tag-Plugins%EF%BC%89',Butterfly安装文档,far fa-hand-point-right,pink larger %}
>{% btn 'https://markdown.com.cn',Markdown文档,far fa-hand-point-right,purple larger %}
# Markdown语法

***

## 文本类
### 标题
使用\#表示标题
{% tabs a %}
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
使用"\_"或"\*"表示斜体，"\_\_"或"\*\*"表示粗体，"\~\~"表示删除线
{% note info flat %}
"\_"与"\*"等价。
{% endnote %}
{% tabs a %}
<!-- tab 示例 -->
**这个**和__这个__都是粗体
*这个*和_这个_都是斜体
***这个***和___这个___同时是粗体和斜体
~~这是删除线~~
<!-- endtab -->

<!-- tab Markdown -->
```Markdown
**这个**和__这个__都是粗体
*这个*和_这个_都是斜体
***这个***和___这个___同时是粗体和斜体
~~这是删除线~~
```
<!-- endtab -->
{% endtabs %}

### 引用
{% tabs a %}
<!-- tab 示例 -->
>这是一级引用
>>这是二级引用
>>>- 这是带有部分**粗体**
>>>- 这是带有*斜体*的三级引用
<!-- endtab -->

<!-- tab Markdown -->
```Markdown
>这是一级引用
>>这是二级引用
>>>- 这是带有部分**粗体**
>>>- 这是带有*斜体*的三级引用
```
<!-- endtab -->
{% endtabs %}

### 链接
主要格式`[text](url)`
{% note warning flat %}
引用型链接似乎不能正常使用。
{% endnote %}
{% tabs a %}
<!-- tab 示例 -->
[这是一个链接](https://ichika.cc)
[这是一个带说明的链接](https://ichika.cc "传送至主页")
快速链接<https://ichika.cc> <806708480@qq.com>
[引用型链接][1]
[1]: https://ichika.cc '主页'
*[**`语法嵌套`**](https://ichika.cc)*
<!-- endtab -->

<!-- tab Markdown -->
```Markdown
[这是一个链接](https://ichika.cc)
[这是一个带说明的链接](https://ichika.cc "传送至主页")
快速链接<https://ichika.cc> <806708480@qq.com>
[引用型链接][1]
[1]: https://ichika.cc '主页'
*[**`语法嵌套`**](https://ichika.cc)*
```
<!-- endtab -->
{% endtabs %}

### 其它
使用\\可以进行转义

使用\*\*\*创建分隔符

可以直接插入html代码
{% note info flat %}
Markdown中部分符号会自动转义。
{% endnote %}
{% tabs a %}
<!-- tab 示例 -->
转义\* \[\]

***

分隔符
<div style="padding:10px;text-align:center;font-weight:bold">这是直接使用html的内容</div>
<!-- endtab -->

<!-- tab Markdown -->
```Markdown
转义\* \[\]

***

分隔符
<div style="padding:10px;text-align:center;font-weight:bold">这是直接使用html的内容</div>
```
<!-- endtab -->
{% endtabs %}

## 特殊区块
### 列表
使用"num."的形式可构建有序列表

使用\+、\-、\*可构建无序列表
{% note info flat %}
有序列表格式中的数字不必顺序，但实际会顺序显示。
相同标识符的无序列表被视为同一个列表，不同标识符的无序列表被视为不同列表。可缩进表示子列表。
{% endnote %}

{% tabs a %}
<!-- tab 示例 -->
1. 这是有序列表
3. 这是有序列表
8. 这是有序列表
- 这是无序列表
* 这是无序列表
+ 这是无序列表
  + 这是无序子列表
<!-- endtab -->

<!-- tab Markdown -->
```Markdown
1. 这是有序列表
3. 这是有序列表
8. 这是有序列表
- 这是无序列表
* 这是无序列表
+ 这是无序列表
  + 这是无序子列表
```
<!-- endtab -->
{% endtabs %}

### 代码
使用反单引号 \` 可表示代码，使用三反单引号 \`\`\`表示代码块，代码块起始符后可声明语言

对于有内部有引号的代码，可在标识符中多加几个反单引号。
{% tabs a %}
<!-- tab 示例 -->
+ `这个`是一个普通的代码
+ ``再看看`这个`，这个``是内部带引号的代码
```Test
这就是一个代码块了
```
<!-- endtab -->

<!-- tab Markdown -->
````Markdown
+ `这个`是一个普通的代码
+ ``再看看`这个`，这个``是内部带引号的代码
```Test
这就是一个代码块了
```
````
<!-- endtab -->
{% endtabs %}

### 图片
普通图片格式为`[![text](url "desc")](link)`

带超链接的图片格式为`[![text(url "desc")](link)`
{% tabs a %}
<!-- tab 示例 -->
![这是图片替代文本](https://s3.bmp.ovh/imgs/2022/09/20/50f4a113b3e2eb73.jpg "Project Sekai 1st Anniversary by Rella")
[![这是图片替代文本](https://s3.bmp.ovh/imgs/2022/09/20/50f4a113b3e2eb73.jpg "Project Sekai 1st Anniversary by Rella")](https://ichika.cc)
<!-- endtab -->

<!-- tab Markdown -->
```
![这是图片替代文本](https://s3.bmp.ovh/imgs/2022/09/20/50f4a113b3e2eb73.jpg "Project Sekai 1st Anniversary by Rella")
[![这是图片替代文本](https://s3.bmp.ovh/imgs/2022/09/20/50f4a113b3e2eb73.jpg "Project Sekai 1st Anniversary by Rella")](https://ichika.cc)
```
<!-- endtab -->
{% endtabs %}


# Hexo&Butterfly专用格式

***

{% note info flat %}
这类格式仅在该主题下使用。
{% endnote %}
{% note warning flat %}
仅引用格式时须将%转义。
{% endnote %}
## Note 
### 默认模板
格式为`{\% note [class] [no-icon] [style] %}`
{% label class blue %} <b>可选</b> 可用值default / primary / success / info / warning / danger<br><br>
{% label no-icon blue %} <b>可选</b> 不显示图标<br><br>
{% label class blue %} <b>可选</b> 可用值simple / modern / flat / disabled<br><br>


{% tabs a %}
<!-- tab 示例 -->
{% note success simple %}
这是simple类型
{% endnote %}

{% note info flat %}
这是flat类型
{% endnote %}

{% note primary modern %}
这是modern类型
{% endnote %}

{% note danger no-icon disble %}
这是simple no-icon类型
{% endnote %}
<!-- endtab -->

<!-- tab Markdown -->
```Markdown
{% note success simple %}
这是simple类型
{% endnote %}

{% note info flat %}
这是flat类型
{% endnote %}

{% note primary modern %}
这是modern类型
{% endnote %}

{% note danger no-icon disable %}
这是simple no-icon类型
{% endnote %}
```
<!-- endtab -->
{% endtabs %}

### 自定义模板
格式为`{\% note [color] '[icon]' [style] %}`
{% label color blue %} <b>可选</b> 可用值default / blue / pink / red / purple / orange / green<br><br>
{% label icon blue %} <b>可选</b> 图标来源<a href="https://fontawesome.com/">fontawesome</a><br><br>
{% label style blue %} <b>可选</b> 可用值simple / modern / flat / disabled<br><br>


{% tabs a %}
<!-- tab 示例 -->
{% note default 'fab fa-cc-visa' simple %}
这是simple类型
{% endnote %}

{% note blue 'fas fa-bullhorn' flat %}
这是flat类型
{% endnote %}

{% note pink 'fas fa-car-crash' modern %}
这是modern类型
{% endnote %}
<!-- endtab -->

<!-- tab Markdown -->
```Markdown
{% note default 'fab fa-cc-visa' simple %}
这是simple类型
{% endnote %}

{% note blue 'fas fa-bullhorn' flat %}
这是flat类型
{% endnote %}

{% note pink 'fas fa-car-crash' modern %}
这是modern类型
{% endnote %}
```
<!-- endtab -->
{% endtabs %}

## tag-hide
### inline
点击后可显示隐藏内容，适用少量文本，格式为`{% hideInline [content],[display],[bg],[color] %}`
{% label content red %} 隐藏文本内容<br><br>
{% label display blue %} <b>可选</b> 按钮所显示文字<br><br>
{% label bg blue %} <b>可选</b> 按钮背景颜色<br><br>
{% label color blue %} <b>可选</b> 按钮文字颜色
{% tabs a %}
<!-- tab 示例 -->
{% hideInline 这是默认按钮 %}

{% hideInline 自定义一下,自定义,#33dd33,#dd3333 %}
<!-- endtab -->

<!-- tab Markdown -->
```Markdown
{% hideInline 这是默认按钮 %}

{% hideInline 自定义一下,自定义,#33dd33,#dd3333 %}
```
<!-- endtab -->
{% endtabs %}

### Block
点击后可显示隐藏内容，适用大量各类内容，格式为`{% hideBlock [display],[bg],[color] %}content{% endhideBlock %}`
{% label content red %} 隐藏内容<br><br>
{% label display blue %} <b>可选</b> 按钮所显示文字<br><br>
{% label bg blue %} <b>可选</b> 按钮背景颜色<br><br>
{% label color blue %} <b>可选</b> 按钮文字颜色
{% tabs a %}
<!-- tab 示例 -->
{% hideBlock %}这是默认按钮{% endhideBlock %}

{% hideBlock 自定义,#33dd33,#dd3333 %}![这是图片替代文本](https://s3.bmp.ovh/imgs/2022/09/20/50f4a113b3e2eb73.jpg "Project Sekai 1st Anniversary by Rella"){% endhideBlock %}
<!-- endtab -->

<!-- tab Markdown -->
```Markdown
{% hideBlock %}这是默认按钮{% endhideBlock %}

{% hideBlock 自定义,#33dd33,#dd3333 %}![这是图片替代文本](https://s3.bmp.ovh/imgs/2022/09/20/50f4a113b3e2eb73.jpg "Project Sekai 1st Anniversary by Rella"){% endhideBlock %}

{% endhideBlock %}
```
<!-- endtab -->
{% endtabs %}

### Toggle
可展开显示或隐藏内容，适用大量各类内容，格式为`{% hideToggle [display],[bg],[color] %}content{% endhideToggle %}`
{% label content red %} 隐藏内容<br><br>
{% label display blue %} <b>可选</b> 按钮所显示文字<br><br>
{% label bg blue %} <b>可选</b> 按钮背景颜色<br><br>
{% label color blue %} <b>可选</b> 按钮文字颜色
{% tabs a %}
<!-- tab 示例 -->
{% hideToggle %}这是默认按钮{% endhideToggle %}

{% hideToggle 自定义,#33dd33,#dd3333 %}![这是图片替代文本](https://s3.bmp.ovh/imgs/2022/09/20/50f4a113b3e2eb73.jpg "Project Sekai 1st Anniversary by Rella"){% endhideToggle %}
<!-- endtab -->

<!-- tab Markdown -->
```Markdown
{% hideToggle %}这是默认按钮{% endhideToggle %}

{% hideToggle 自定义,#33dd33,#dd3333 %}![这是图片替代文本](https://s3.bmp.ovh/imgs/2022/09/20/50f4a113b3e2eb73.jpg "Project Sekai 1st Anniversary by Rella"){% endhideToggle %}
```
<!-- endtab -->
{% endtabs %}

## Tabs
可用于制作标签栏，格式：
```Markdown
{% tabs [name],[index] %}
<!-- tab [tabname]-->
content
<!-- endtab -->

<!-- tab [tabname]-->
content
<!-- endtab -->
{% endtabs %}
```
{% label name red %} tab名称<br><br>
{% label index blue %} <b>可选</b> 初始选择子栏序号，-1为全部折叠<br><br>
{% label tabname blue %} <b>可选</b> 子栏名称<br><br>
{% label content blue %} <b>可选</b> 文字内容
{% tabs a %}
<!-- tab 示例-->
{% tabs 演示tabs,2 %}
<!-- tab 自定义名称-->
test
<!-- endtab -->

<!-- tab -->
测试
<!-- endtab -->
{% endtabs %}
<!-- endtab -->

<!-- tab Markdown-->
```Markdown
{% tabs 演示tabs,2 %}
<!-- tab 自定义名称-->
test
<!-- endtab -->

<!-- tab -->
测试
<!-- endtab -->
{% endtabs %}
```
<!-- endtab -->
{% endtabs %}

## Button

按钮，格式为`{% btn '[url]',[text],[icon],[color] [style] [layout] [position] [size] %}`
{% label url red %} 链接<br><br>
{% label text red %} 按钮所显示文字<br><br>
{% label icon blue %} <b>可选</b> 按钮图标<br><br>
{% label color blue %} <b>可选</b> 按钮背景颜色或边框和文字颜色，可用值default / blue / pink / red / purple / orange / green<br><br>
{% label style blue %} <b>可选</b> 按钮样式，默认实心或outline描边<br><br>
{% label layout blue %} <b>可选</b> 按钮布局，默认line或block<br><br>
{% label position blue %} <b>可选</b> 按钮位置，须选择layout为block，默认左边或center / right<br><br>
{% label size blue %} <b>可选</b> 按钮大小，默认或larger<br><br>
{% note warning flat %}
请严格遵守格式，留空须保留逗号，空格符相隔的元素可乱序输入。
{% endnote %}
{% tabs a %}
<!-- tab 示例-->
{% btn  'https://ichika.cc',主页 %}{% btn  'https://ichika.cc',主页,fas fa-home,pink outline %}{% btn  'https://ichika.cc',主页,,orange larger %}{% btn  'https://ichika.cc',主页,fas fa-home,blue larger outline block right %}
<!-- endtab -->

<!-- tab Markdown-->
```Markdown
{% btn  'https://ichika.cc',主页 %}{% btn  'https://ichika.cc',主页,fas fa-home,pink outline %}{% btn  'https://ichika.cc',主页,,orange larger %}{% btn  'https://ichika.cc',主页,fas fa-home,blue larger outline block right %}
```
<!-- endtab -->
{% endtabs %}

## InlineImg
可以在文本中嵌入图片，格式为`{% inlineImg [src] [height] %}`
{% label src red %} 图片链接<br><br>
{% label height blue %} <b>可选</b> 高度限制
{% tabs a %}
<!-- tab 示例-->
~~我老婆~~网站的图标是{% inlineImg img/Page/favicon.png %}，すき！
什么你说你看不清？{% inlineImg img/Page/favicon.png 100px %}，够清楚了嘛！
<!-- endtab -->

<!-- tab Markdown-->
```Markdown
~~我老婆~~网站的图标是{% inlineImg img/Page/favicon.png %}，すき！
什么你说你看不清？{% inlineImg img/Page/favicon.png 100px %}，够清楚了嘛！
```
<!-- endtab -->
{% endtabs %}

## Label
可以在文本中插入标签，格式为`{% label [text] [color] %}`
{% label text red %} 文字内容<br><br>
{% label color blue %} <b>可选</b> 背景颜色，可用值default / blue / pink / red / purple / orange / green
{% note warning flat %}
使用label的段落可能会使Markdown标记失效，请尽量使用html。
{% endnote %}
{% tabs a %}
<!-- tab 示例-->
在这句话当中，{% label 这是默认标签 %}，{% label 这是彩色标签 pink %}，<b>这段是html</b>
<!-- endtab -->

<!-- tab Markdown-->
```Markdown
在这句话当中，{% label 这是默认标签 %}，{% label 这是彩色标签 pink %}，<b>这段是html</b>
```
<!-- endtab -->
{% endtabs %}

## Timeline
以时间轴的方式记录内容，格式：
```Markdown
{% timeline [title],[color] %}
<!-- timeline [title] -->
content
<!-- endtimeline -->
<!-- timeline [title] -->
content
<!-- endtimeline -->
{% endtimeline %}
```
{% label title red %} 标题（时间）<br><br>
{% label color blue %} <b>可选</b> 主题颜色，可用值default / blue / pink / red / purple / orange / green<br><br>
{% tabs a %}
<!-- tab 示例-->
{% timeline 2022,pink %}
<!-- timeline 9.20 -->
今天是2022年9月20日
那么明天就是9月21日了
<!-- endtimeline -->
<!-- timeline 9.21 -->
今天是2022年9月21日
那么昨天就是9月20日了
<!-- endtimeline -->
{% endtimeline %}
<!-- endtab -->

<!-- tab Markdown-->
```Markdown
{% timeline 2022,pink %}
<!-- timeline 9.20 -->
今天是2022年9月20日
那么明天就是9月21日了
<!-- endtimeline -->
<!-- timeline 9.21 -->
今天是2022年9月21日
那么昨天就是9月20日了
<!-- endtimeline -->
{% endtimeline %}
```
<!-- endtab -->
{% endtabs %}

## flink
友情链接模板，在模板前后加入`{% flink %}{% endflink %}`
{% note danger flat %}
由于友链格式要求过于严格，本人尝试多次后只意外成功过一次，其余皆报错，极度不建议使用。
~~更逆天的是官方给的示例代码也报错~~
{% endnote %}
{% tabs a,2%}
<!-- tab 示例-->
你不会觉得真的能示例出来吧？
<!-- endtab -->

<!-- tab Markdown-->
```Markdown
{% flink %}
- class_name: 支持
  class_desc: 
  link_list:
    - name: Hexo
      link: https://hexo.io/zh-cn/
      avatar: /img/Article/Link/hexo.svg
      descr: 框架支持
    - name: Butterfly
      link: https://butterfly.js.org/
      avatar: /img/Article/Link/butterfly.png
      descr: 主题提供
    - name: Github
      link: https://github.com/ichika99/ichika99.github.io/
      avatar: /img/Article/Link/github.png
      descr: 项目托管
    - name: 阿里云
      link: https://cn.aliyun.com/
      avatar: /img/Article/Link/aliCloud.jpg
      descr: 域名提供
    - name: 腾讯云
      link: https://cloud.tencent.com/
      avatar: /img/Article/Link/tecentCloud.png
      descr: 评论系统支持
    - name: Twikoo
      link: https://twikoo.js.org/
      avatar: /img/Article/Link/twikoo.png
      descr: 评论系统支持
    - name: Vercel
      link: https://vercel.com/
      avatar: /img/Article/Link/Vercel.png
      descr: 技术支持
{% endflink %}
```
<!-- endtab -->
{% endtabs %}