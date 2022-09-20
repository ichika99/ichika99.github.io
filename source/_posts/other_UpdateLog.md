---
title: 更新日志
date: 2022-09-19 15:35:00
updated: 2022-9-20 16:15:00
tags: 自用
categories: 自用
description: 站点更新日志。
cover: https://s3.bmp.ovh/imgs/2022/09/20/681694c947ce64c1.png
---
{% timeline 2022 green %}
<!-- timeline 9.20 -->
提交日历api换成了自己的域名，现在不需要梯子也可以访问了
部分图片使用图床，优化国内网络加载速度
增加文章密码功能
<!-- endtimeline -->

<!-- timeline 9.19 -->
增加了提交日历界面
评论系统替换成了Twikoo
增加访客地图
增加音乐播放器
<!-- endtimeline -->

<!-- timeline 9.14~9.18 -->
建站
插件列表：
```git
npm install hexo-cli -g
npm install hexo-renderer-pug hexo-renderer-stylus --save
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
npm install hexo-wordcount --save
npm install hexo-filter-gitcalendar --save
npm install hexo-butterfly-artitalk --save
npm install hexo-tag-aplayer --save
npm install hexo-blog-encrypt --save
```
<!-- endtimeline -->
{% endtimeline %}