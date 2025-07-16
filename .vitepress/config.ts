import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme, type HeadConfig, type Plugin } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'


import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

const nav = [
  {
    text: '线上环境',
    items: [
      { text: '商城官网', link: 'https://1s.design' },
      { text: 'API', link: 'https://1s.design:1520/api/hello' },
      { text: '管理平台', link: 'http://49.232.186.238:1521' },
      { text: '设计工具', link: 'http://49.232.186.238:1522' },
      { text: '文档', link: 'http://49.232.186.238:1523' },
      { text: '客户端(github)', link: 'https://github.com/chan-max/yishe-client/releases/latest' },
      { text: '客户端下载', link: 'http://49.232.186.238:1525' }
    ]
  },
  {
    text: '开发环境',
    items: [
      { text: '开发官网', link: 'http://dev.1s.design' },
      { text: '开发 API', link: 'http://dev.1s.design:1520/api' }
    ]
  },
  {
    text: '文档',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: '深度指南', link: '/guide/introduction' },
      { text: '互动教程', link: '/tutorial/' },
      { text: '示例', link: '/examples/' },
      { text: '快速上手', link: '/guide/quick-start' },
      // { text: '风格指南', link: '/style-guide/' },
      { text: '术语表', link: '/glossary/' },
      { text: '错误码参照表', link: '/error-reference/' },
      {
        text: 'Vue 2 文档',
        link: 'https://v2.cn.vuejs.org'
      },
      {
        text: '从 Vue 2 迁移',
        link: 'https://v3-migration.vuejs.org/'
      }
    ]
  },
  {
    text: 'API',
    activeMatch: `^/api/`,
    link: '/api/'
  },
  {
    text: '演练场',
    link: 'https://play.vuejs.org'
  },
  {
    text: '生态系统',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: '资源',
        items: [
          { text: '合作伙伴', link: '/partners/' },
          { text: '开发者', link: '/developers/' },
          { text: '主题', link: '/ecosystem/themes' },
          { text: 'UI 组件', link: 'https://ui-libs.vercel.app/' },
          {
            text: '证书',
            link: 'https://certificates.dev/vuejs/?ref=vuejs-nav'
          },
          { text: '找工作', link: 'https://vuejobs.com/?ref=vuejs' },
          { text: 'T-Shirt 商店', link: 'https://vue.threadless.com/' }
        ]
      },
      {
        text: '官方库',
        items: [
          { text: 'Vue Router', link: 'https://router.vuejs.org/zh/' },
          { text: 'Pinia', link: 'https://pinia.vuejs.org/zh/' },
          { text: '工具链指南', link: '/guide/scaling-up/tooling.html' }
        ]
      },
      {
        text: '视频课程',
        items: [
          {
            text: 'Vue Mastery',
            link: 'https://www.vuemastery.com/courses/'
          },
          {
            text: 'Vue School',
            link: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown'
          }
        ]
      },
      {
        text: '帮助',
        items: [
          {
            text: 'Discord 聊天室',
            link: 'https://discord.com/invite/HBherRA'
          },
          {
            text: 'GitHub 论坛',
            link: 'https://github.com/vuejs/core/discussions'
          },
          { text: 'DEV Community', link: 'https://dev.to/t/vue' }
        ]
      },
      {
        text: '动态',
        items: [
          { text: '博客', link: 'https://blog.vuejs.org/' },
          { text: 'Twitter', link: 'https://twitter.com/vuejs' },
          { text: '活动', link: 'https://events.vuejs.org/' },
          { text: '新闻简报', link: '/ecosystem/newsletters' }
        ]
      }
    ]
  },
  {
    text: '关于',
    activeMatch: `^/about/`,
    items: [
      { text: '常见问题', link: '/about/faq' },
      { text: '团队', link: '/about/team' },
      { text: '版本发布', link: '/about/releases' },
      {
        text: '社区指南',
        link: '/about/community-guide'
      },
      { text: '行为规范', link: '/about/coc' },
      { text: '隐私政策', link: '/about/privacy' },
      {
        text: '纪录片',
        link: 'https://www.youtube.com/watch?v=OrxmtDw4pVI'
      }
    ]
  },
  {
    text: '赞助',
    link: '/sponsor/'
  },
  {
    text: '专家',
    badge: { text: '新' },
    activeMatch: `^/(partners|developers)/`,
    items: [
      { text: '合作伙伴', link: '/partners/' },
      { text: '开发者', link: '/developers/', badge: { text: '新' } }
    ]
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: '开始了解',
      items: [
        { text: '简介', link: '/guide/introduction' },
        {
          text: '快速上手',
          link: '/guide/quick-start'
        },
        {
          text: '常用链接',
          link: '/guide/common-links'
        }
      ]
    },
    {
      text: '资源收集',
      items: [
        { text: '图片资源网站', link: '/guide/assets/common-image-sites' },
      ]
    },
  ],
}

const i18n: ThemeConfig['i18n'] = {
  search: '搜索',
  menu: '菜单',
  toc: '本页目录',
  returnToTop: '返回顶部',
  appearance: '外观',
  previous: '前一篇',
  next: '下一篇',
  pageNotFound: '页面未找到',
  deadLink: {
    before: '你打开了一个不存在的链接：',
    after: '。'
  },
  deadLinkReport: {
    before: '不介意的话请提交到',
    link: '这里',
    after: '，我们会跟进修复。'
  },
  footerLicense: {
    before: '',
    after: ''
  },
  ariaAnnouncer: {
    before: '',
    after: '已经加载完毕'
  },
  ariaDarkMode: '切换深色模式',
  ariaSkipToContent: '直接跳到内容',
  ariaToC: '当前页面的目录',
  ariaMainNav: '主导航',
  ariaMobileNav: '移动版导航',
  ariaSidebarNav: '侧边栏导航'
}

function inlineScript(file: string): HeadConfig {
  return [
    'script',
    {},
    fs.readFileSync(
      path.resolve(__dirname, `./inlined-scripts/${file}`),
      'utf-8'
    )
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: {
    
  },

  sitemap: {
    hostname: 'https://cn.vuejs.org'
  },

  lang: 'zh-CN',
  title: '衣设开发平台',
  description: '衣设开发平台文档中心',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  // outDir: 'dist',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }],
    ['meta', { property: 'og:url', content: 'https://cn.vuejs.org/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '衣设开发平台' }],
    ['meta', { property: 'og:description', content: '衣设开发平台文档中心' }],
    ['meta', { property: 'og:image', content: 'https://cn.vuejs.org/images/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:title', content: '衣设开发平台' }],
    ['meta', { name: 'twitter:description', content: '衣设开发平台文档中心' }],
    ['meta', { name: 'twitter:image', content: 'https://cn.vuejs.org/images/logo.png' }],
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'XNOLWPLB', 'data-spa': 'auto', defer: '' }],
    ['script', { src: 'https://vueschool.io/banners/main.js', defer: '' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3c8772' }],
    inlineScript('restorePreference.js'),
    inlineScript('uwu.js'),
    inlineScript('perfops.js')
  ],

  themeConfig: {
    // logo: '/images/logo.png',
    // siteTitle: '衣设开发平台',
    nav,
    sidebar,
    i18n,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chan-max' },
    ],


    footer: {
      license: {
        text: '衣设开发文档',
        link: ''
      },
      copyright:
        ' Presented by Jackie Chan (chen zheng)  - creator of  1s '
    }
  },

  markdown: {
    theme: 'github-dark',
    config(md) {
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: '0.0.0.0',
      port: 1523,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    },
    plugins: [
      llmstxt({
        ignoreFiles: [
          'about/team/**/*',
          'about/team.md',
          'about/privacy.md',
          'about/coc.md',
          'developers/**/*',
          'ecosystem/themes.md',
          'examples/**/*',
          'partners/**/*',
          'sponsor/**/*',
          'index.md'
        ],
      }) as Plugin
    ]
  }
})
