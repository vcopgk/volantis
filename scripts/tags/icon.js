'use strict';

function iconfont(args) {
  args = args.join(' ').split(',');
  return `<svg class="iconfont" aria-hidden="true"><use xlink:href="#icon-${args}"></use></svg>`;
}

hexo.extend.tag.register('iconfont', iconfont)