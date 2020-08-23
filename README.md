<p align="center">
  <a href='https://volantis.js.org'><img src='https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/Logo-Cover@3x.png' height='120px'></a>
</p>

> 自用仓库、依赖仓库~

*A Wonderful Theme for Hexo*

------

#### 一、主题覆盖配置

<details><summary>_config.yml</summary>

```yml
# 覆盖主题内配置
theme_config:
  article:
    body:
      footer_widget:
        copyright:
          enable: false
  info:
    cdn:
      js: /js/app.min.js
      css: /css/style.css
  rightmenu:
    enable: true
    layout: [copy, navigation, hr, info, foreverblog, friends, text, about, hr, music]
    copy:
      name: 复制选中内容
      icon: fal fa-copy
      id: menu-copy-text
      onclick: menuCopy()
    foreverblog:
      name: 十年之约
      icon: fal fa-glass-cheers
      url: /foreverblog/index.html
    friends:
      name: 我的朋友们
      icon: fal fa-flower-daffodil
      url: /friends/index.html
    info:
      name: 留言版
      icon: fal fa-fish
      url: /info/index.html
    text:
      name: 文章归档
      icon: fal fa-globe-asia
      url: /archives/
    about:
      name: 关于我
      icon: fal fa-gingerbread-man
      url: /about/
  style:
    fontfamily:
      logofont:
        url: /fonts/VarelaRound-Regular.ttf
      bodyfont:
        fontfamily: '-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei'
      codefont:
        fontfamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier'
      iconfont:
        fontfamily: 'Font Awesome 5 Pro'
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
      theme: '#2196f3'
      link: '#2196f3'
  cover:
    use_for: blog
    scheme: featured   # search (搜索), dock (坞), featured (精选), focus (焦点)
    logo: /img/logo.png
    title:
    display:
      home: true
      archive: true
      others: false
    search: '想找些什么~'
    features:
      - name: Github
        icon: fad fa-code-branch
        url: https://github.com/inkss  
        rel: external nofollow noopener noreferrer
        color: 20c997
      - name: Steam
        icon: fad fa-ghost
        url: https://steamcommunity.com/id/szyink/
        rel: external nofollow noopener noreferrer
        color: 2196f3
      - name: Email
        icon: fad fa-envelope
        url: mailto:me@szyink.com
        color: E91E63
      - name: Blog
        icon: fad fa-blog
        url: https://szyink.com/
        rel: external nofollow noopener noreferrer
        target: _blank
        color: ff9800
      - name: About
        icon: fad fa-gingerbread-man
        url: /about/
        color: 734ae6
  navbar:
    logo:
      img: 
      title: <i class="fad fa-cannabis logoColor"></i> INKSS
    search: 想找些什么~
  meta:
    author:
      avatar: https://img.inkss.cn/inkss_cn/static/img/avatar.jpg
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
    icp: '<div class="fixuse">辽 ICP 备 <a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow" style="cursor:wait;">16006560</a> 号 | 辽公网安备 <a href="https://www.beian.gov.cn/" rel="nofollow" target="_blank" style="cursor:wait;">21021702000331</a> 号</div>'
    cpy: '<div class="fixuse">Copyright 2018 - 2020 szyink. All Rights Reserved</div>'
    me: '<a href="/">枋柚梓的猫会发光 <i class="fal fa-spider-black-widow"></i></a> '
    icon: '<i class="fad fa-cannabis footStyle"></i>'
    social:
      - icon: fal fa-code-branch
        url: https://github.com/inkss
        rel: external nofollow noopener noreferrer
      - icon: fal fa-ghost
        url: https://steamcommunity.com/id/szyink/
        rel: external nofollow noopener noreferrer
      - icon: fal fa-envelope
        url: mailto:me@szyink.com
      - icon: fal fa-blog
        url: https://szyink.com/
        rel: external nofollow noopener noreferrer
      - icon: fal fa-gingerbread-man
        url: /about/
  comments:
    service: valine
    disqus:
      shortname: inkss
    valine:
      appId: gqkw9h3C8yXm4WsJ3S5vBonP-gzGzoHsz
      appKey: 2nwrlSMxijhI9x0v8JETCO9D
      placeholder: 人生在世，错别字在所难免，无需纠正。
      js: https://cdn.jsdelivr.net/npm/valine@1.4/dist/Valine.min.js
  search:
    enable: true
    service: hexo
    js: /js/search.min.js
  plugins:
    fontawesome: /fontawesome/css/all.min.css
    fontawesomeanimation:
    wordcount: true
    aplayer:
      server: tencent   # netease, tencent, kugou, xiami, baidu
      type: playlist    # song, playlist, album, search, artist
      id: 4215247501    # song id / playlist id / album id / search keyword
      autoplay: true
    backstretch:
      enable: true
      position: fixed   # cover: sticky on the cover.   fixed: Fixed as background for the site.
      images:
        - /img/bkg/bkg.png
    Artitalk:
      appID: 7VOM4jBwPrtyjKQsCgvpjad7-gzGzoHsz
      appKEY: VrwcfwPaNIzOVDshSBKY9UDq
      severurl: https://artitalk.inkss.cn
      per: 10

```

</details>

#### 二、插件配置

<details><summary>_config.yml</summary>

```yml
# 第三方插件配置
# 一、压缩 npm i hexo-html-minifier --save
# html_minifier:  
#   collapseBooleanAttributes: false
#   collapseWhitespace: true
#   ignoreCustomComments: [ !!js/regexp /^\s*more/]
#   removeComments: true
#   removeEmptyAttributes: true
#   removeScriptTypeAttributes: true
#   removeStyleLinkTypeAttributes: true
#   minifyJS: true
#   minifyCSS: true

# 二、离线增强 npm i hexo-offline --save
# offline:
#  maximumFileSizeToCacheInBytes: 5242880
#  staticFileGlobs:
#    - public/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}
#  stripPrefix: public
#  verbose: true

# 三、文章永久链接 npm install hexo-abbrlink --save
# 需要同步修改永久链接格式：permalink: article/:category/:abbrlink.html
abbrlink:
  alg: crc32
  rep: hex

# 四、图片懒加载 npm install hexo-fs hexo-lazyload-image --save
# lazyload:
#   enable: true
#   onlypost: false
#   loadingImg: https://cdn.jsdelivr.net/gh/inkss/common@master/static/img/loading.gif
#   isSPA: true # optional

# 五、SEO 优化 npm install hexo-autonofollow --save
nofollow:
  enable: true
  exclude: szyink.com

# 六、SEO 优化二网站地图 npm install hexo-generator-seo-friendly-sitemap --save
sitemap:
  path: sitemap.xml
  tag: false
  category: false

# 七、RSS npm install hexo-generator-feed --save
feed:
  type: atom
  path: atom.xml
  limit: false
  content: true
  order_by: -date
  icon: favicon.png
  autodiscovery: false

# 八、npm install hexo-neat --save
neat_enable: true
neat_html:
  enable: true
  logger: false
  exclude:
neat_css:
  enable: true
  logger: false
  exclude:
    - '*.min.css'
neat_js:
  enable: true
  mangle: true
  logger: false
  output:
  compress:
  exclude:
    - '*.min.js'
```  

</details>
