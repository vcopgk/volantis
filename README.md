# Volantis

Forked from xaoxuu/hexo-theme-volantis

> 自用仓库、依赖仓库~

------

我的主题覆盖配置：

```yml
# 主题 特定的主题配置
theme: material
use_cdn: false                                                 # Info 字段的 CDN 开关：影响 app.js && style.css
baidu_analytics_key: 64341e907532327289e9de37759e2a21
google_analytics_key: UA-126183911-1
avatar:  https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/static/avatar.jpg               # CDN √ 
favicon: https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/static/favicon.png              # CDN √ 

# 覆盖主题内配置
theme_config:
  style:
    fontfamily:
      bodyfont:
        fontfamily: '-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei'
      codefont:
        fontfamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier'
    sidebar:
      effect: [shadow, floatable]
    body:
      effect: [shadow, floatable]
      highlight:
        language: true
        copy_btn: true
    color:
      inlinecode: '#e8f9ff' # 内联代码颜色
      codeblock: '#f4fafe'  # 代码块颜色
  cover:
    scheme: blog
    title: 'SZYINK'
    subtitle: '繁星永存，记忆亘古不变 <i class="fal fa-spider-black-widow"></i>'
    display:
      home: true
      archive: true
      others: false
    search: '想找些什么~'
    features:
  navbar:
    logo:
      title: <i class="fal fa-dragon"></i> INKSS
    search: 想找些什么~
  meta:
    author:
      avatar: https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/static/avatar.jpg              # CDN √ 
      name: 枋柚梓
      url: https://inkss.cn
  widget:
    category:
      header:
        url: /categories/
    tagcloud:
      display: [desktop]
      min_font: 14
      max_font: 22
      header:
        url: /tags/
  footer:
    layout: [social, license, info, icp, cpy, me]
    icp: '<div class="fixuse">辽 ICP 备 <a href="https://beian.miit.gov.cn/" target="_blank" style="cursor:wait;">16006560</a> 号 | 辽公网安备 <a href="https://www.beian.gov.cn/" target="_blank" style="cursor:wait;">21021702000331</a> 号</div>'
    cpy: '<div class="fixuse">Copyright 2018 - 2020 szyink. All Rights Reserved</div>'
    me: '<a href="/">枋柚梓的猫会发光</a> 🐾'
    social:
      - icon: fal fa-code-branch
        url: https://github.com/inkss  
      - icon: fal fa-ghost
        url: https://steamcommunity.com/id/szyink/
      - icon: fal fa-envelope
        url: mailto:me@szyink.com 
      - icon: fal fa-blog
        url: https://szyink.com/
      - icon: fal fa-paper-plane
        url: https://info.inkss.cn/
  comments:
    valine:
      appId: gqkw9h3C8yXm4WsJ3S5vBonP-gzGzoHsz
      appKey: 2nwrlSMxijhI9x0v8JETCO9D
      placeholder: 人生在世，错别字在所难免，无需纠正。
      js: https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/js/valine.min.js                      # CDN √ 
  search:
    enable: true
    service: hexo
    js: https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/js/search.min.js                        # CDN √ 
  info:
    cdn: 
      js: https://cdn.jsdelivr.net/gh/inkss/common@master/hexo/js/app.min.js                      # CDN √ 
      css: https://cdn.jsdelivr.net/gh/inkss/common@master/hexo/css/style.min.css                 # CDN √ 
  plugins:
    comment_typing:  https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/static/js/commentTyping.js      # CDN √ 
    message: https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/js/message.min.js                  # CDN √ 
    wordcount: true
    aplayer:
      server: tencent   # netease, tencent, kugou, xiami, baidu
      type: playlist    # song, playlist, album, search, artist
      id: 4215247501    # song id / playlist id / album id / search keyword
    backstretch:
      enable: true
      images:
        - https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/bkg/w2evelg.png
        # - https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/bkg/bkg_1.jpg
        # - https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/bkg/bkg_2.jpg
        # - https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/bkg/bkg_3.jpg
        # - https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/bkg/bkg_4.jpg
        # - https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/bkg/bkg_5.jpg
        # - https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/bkg/bkg_6.jpg
        # - https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/bkg/bkg_7.jpg
        # - https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/bkg/bkg_8.jpg
        # - https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/hexo/img/bkg/bkg_9.jpg
import:
  link:
    - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/inkss/common@1.4.1/static/font/fontawesome/css/all.min.css">  # CDN √ 
    # - <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.css">
  script_head:
    # - <script src="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js"></script>

```