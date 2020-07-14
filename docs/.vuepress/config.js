module.exports = {
  base: '/',
  title: '前端规范',
  theme: '@vuepress/theme-default',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
  ],  

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        title: '工作流',
        collapsable: false,
        children: [
          ['/work-process/version', '版本规范'],
          ['/work-process/git', 'Git使用规范'],
          ['/work-process/cooperation', '前后端协作规范']
        ]
      },
      {
        title: '编码规范',
        collapsable: false,
        children: [
          ['/coding-standards/html', 'Html规范'],
          ['/coding-standards/css', 'CSS规范'],
          ['/coding-standards/javascript', 'JavaScript']
        ]
      },
      {
        title: '框架规范',
        collapsable: false,
        children: [
          ['/frame-standards/vue', 'VUE规范']
        ]
      },
      {
        title: '工具',
        collapsable: false,
        children: [
          ['/tools/vscode', 'Vscode'],
          ['/tools/eslint', 'Eslint']
        ]
      },
    ],

    sidebarDepth: 4,
    lastUpdated: '上次更新',
    smoothScroll: true
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/docs/assets/images'
      }
    }
  },

  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/nprogress'
  ]
}