module.exports = {
  title: '前端规范',
  theme: '@vuepress/theme-default',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    // sidebar: 'auto',
    sidebar: {
      '/guide/work-process/': [
        {
          title: '工作流',
          collapsable: false,
          children: [
            '',
            'version',
            'git',
            'cooeration'
          ]
        }
      ],

      '/guide/coding-standards/': [
        {
          title: '编码规范',
          collapsable: false,
          children: [
            '',
            'html',
            'css',
            'javascript'
          ]
        }
      ],

      '/guide/tools/': [
        {
          title: '工具',
          collapsable: false,
          children: [
            '',
            'vscode',
            'eslint'
          ]
        }
      ]
    },
    // sidebar: [
    //   {
    //     title: '工作流程',
    //     path: '/guide/work-process',
    //     sidebarDepth: 3,
    //     collapsable: false,
    //     children: [
    //       '',
    //       'version',
    //       'git',
    //       'cooperation'
    //     ]
    //   },
    //   {
    //     title: '编码规范',
    //     path: '/guide/coding-standards',
    //     collapsable: false,
    //     sidebarDepth: 3,
    //     children: [
    //       '/',
    //       '/html',
    //       '/css',
    //       '/javascript',
    //     ]
    //   },
    //   {
    //     title: '工具',
    //     path: '/guide/tools',
    //     sidebarDepth: 3,
    //     collapsable: false,
    //     children: [
    //       '/',
    //       '/vscode',
    //       '/eslint',
    //     ]
    //   },
    //   // {
    //   //   title: '推荐',
    //   //   path: '/guide/tools',
    //   //   collapsable: false,
    //   //   children: [
    //   //     '/',
    //   //     '/vscode',
    //   //     '/eslint',
    //   //   ]
    //   // }
    // ],

    sidebarDepth: 4,
    lastUpdated: 'Last Updated',
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