<p align="center">
  <a href='https://volantis.js.org'><img src='https://i.loli.net/2020/07/22/2OYbPxZjhdFce3L.png' height='120px'></a>
  <br>
  <a href="https://volantis.js.org" target="_blank"><img src="https://i.loli.net/2020/07/23/OQljs865Ba3WiIt.png" width='100px'></a> <a href="https://volantis.js.org/examples/" target="_blank"><img src="https://i.loli.net/2020/07/23/lAB1GiNXr7ST2Q6.png" width='100px'></a> <a href="https://github.com/volantis-x/forum/issues" target="_blank"><img src="https://i.loli.net/2020/07/23/B4s1fDESC3pVdwv.png" width='100px'></a>
</p>

> 自用仓库、依赖仓库~

*A Wonderful Theme for Hexo*

------

#### 一、主题覆盖配置

<details><summary>_config.yml</summary>

```yml
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
      theme: '#2196f3'
      link: '#2196f3'
  cover:
    scheme: blog
    layout: featured   # search (搜索), dock (坞), featured (精选), focus (焦点)
    logo: 
    title: 'SZYINK'
    subtitle: '繁星永存，记忆亘古不变 <i class="fal fa-spider-black-widow"></i>'
    display:
      home: true
      archive: true
      others: false
    search: '想找些什么~'
    features:
      - name: Github
        icon: fal fa-code-branch
        url: https://github.com/inkss  
        rel: external nofollow noopener noreferrer
      - name: Steam
        icon: fal fa-ghost
        url: https://steamcommunity.com/id/szyink/
        rel: external nofollow noopener noreferrer
      - name: Email
        icon: fal fa-envelope
        url: mailto:me@szyink.com
      - name: Blog
        icon: fal fa-blog
        url: https://szyink.com/
        rel: external nofollow noopener noreferrer
        target: _blank
      - name: Info
        icon: fal fa-paper-plane
        url: https://info.inkss.cn/
  navbar:
    logo:
      img: 
      title: <i class="fal fa-dragon"></i> INKSS
    search: 想找些什么~
  meta:
    author:
      avatar: https://cdn.jsdelivr.net/gh/inkss/common@1.4.2/hexo/img/static/avatar.jpg              # CDN √
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
      - icon: fal fa-paper-plane
        url: https://info.inkss.cn/
        rel: external nofollow noopener noreferrer
  comments:
    service: valine
    valine:
      appId: gqkw9h3C8yXm4WsJ3S5vBonP-gzGzoHsz
      appKey: 2nwrlSMxijhI9x0v8JETCO9D
      placeholder: 人生在世，错别字在所难免，无需纠正。
      recordIP: true
      js: https://cdn.jsdelivr.net/npm/valine@1/dist/Valine.min.js
    gitalk:
      clientID: 587a00d69c1e5ccf7c71
      clientSecret: 972a5d43d5d29dd0522c5f0cd79e46f8c4b985a3
      repo: test
      owner: inkss
      admin: inkss
  search:
    enable: true
    service: hexo
    js: https://cdn.jsdelivr.net/gh/inkss/common@1.4.2/hexo/js/search.min.js                       # CDN √
  info:
    cdn:
      js: https://cdn.jsdelivr.net/gh/inkss/common@1.4.2/hexo/js/app.min.js                        # CDN √
      css: https://cdn.jsdelivr.net/gh/inkss/common@1.4.2/hexo/css/style.min.css                   # CDN √
  plugins:
    comment_typing: https://cdn.jsdelivr.net/gh/inkss/common@1.4.2/static/js/commentTyping.js      # CDN √
    message: https://cdn.jsdelivr.net/gh/inkss/common@1.4.2/hexo/js/message.min.js                 # CDN √
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
    darkmodejs:
      enable: false
import:
  meta:
  link:
    - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/inkss/common@1.4.2/static/font/fontawesome/css/all.min.css">  # CDN √
  script: 
    - <script src="https://cdn.jsdelivr.net/gh/inkss/common@1.4.2/hexo/js/cookie.min.js"></script>                           # CDN √
  script_head:
```

</details>


#### 二、插件配置

<details><summary>_config.yml</summary>

```yml
# 第三方插件配置
# 一、压缩 npm i hexo-html-minifier --save
html_minifier:  
  collapseBooleanAttributes: false
  collapseWhitespace: true
  ignoreCustomComments: [ !!js/regexp /^\s*more/]
  removeComments: true
  removeEmptyAttributes: true
  removeScriptTypeAttributes: true
  removeStyleLinkTypeAttributes: true
  minifyJS: true
  minifyCSS: true

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
lazyload:
  enable: true
  onlypost: false
  loadingImg: https://cdn.jsdelivr.net/gh/inkss/common@master/static/img/loading.gif
  isSPA: true # optional

# 五、SEO 优化 npm install hexo-autonofollow --save
nofollow:
  enable: true
  exclude: szyink.com

# 六、SEO 优化二网站地图 npm install hexo-generator-seo-friendly-sitemap --save
sitemap:
  path: sitemap.xml
  tag: true
  category: true

# 七、RSS npm install hexo-generator-feed --save
feed:
  type: atom
  path: atom.xml
  limit: false
  content: true
  order_by: -date
  icon: favicon.png
  autodiscovery: false
```  

</details>
