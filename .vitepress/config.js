// @ts-check

const pkg = require('../package.json')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: '信成军规',
  lang: 'zh-CN',
  description: '专业方能立信，成功源于创新',
  head: [['link', { rel: 'icon', type: 'img/svg+xml', href: '../img/logo.png' }]],
  themeConfig: {
    logo: '../img/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',

    algolia: {
      apiKey: 'b573aa848fd57fb47d693b531297403c',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:cn']
      }
    },

    carbonAds: {
      carbon: 'CEBIEK3N',
      placement: 'vitejsdev'
    },

    nav: [
      { text: 'UI规范', link: '../guide/ui'},
      { text: '前端规范', link: '../guide/fe' },
      { text: '后端规范', link: '../guide/be' },
      { text: 'ETL规范', link: '../guide/etl' },
      { text: '测试规范', link: '../guide/test' },
      { text: '代码提交规范', link: '../guide/submit-code' },
    ],
    markdown: {
    anchor: {
      renderPermalink: require('./render-perma-link')
    },
    Config: (md) => {
      md.use(require('./markdown-it-custom-anchor'))
    }
    }
  }
}
