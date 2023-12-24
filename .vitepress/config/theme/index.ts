import type { DefaultTheme } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

const themeConfig: DefaultTheme.Config = {
  logo: '/logo.svg',
  outline: [2, 3],

  nav,
  sidebar,
  socialLinks: [
    { icon: 'x', link: 'https://twitter.com/posva' },
    {
      icon: 'github',
      link: 'https://github.com/vuejs/pinia',
    },
    {
      icon: 'discord',
      link: 'https://chat.vuejs.org',
    },
  ],

  footer: {
    copyright: 'Copyright © 2019-present Eduardo San Martin Morote',
    message: 'Released under the MIT License.',
  },

  editLink: {
    pattern: 'https://github.com/vuejs/pinia/edit/v2/packages/docs/:path',
    text: 'Suggest changes to this page',
  },

  algolia: {
    appId: '69Y3N7LHI2',
    apiKey: '45441f4b65a2f80329fd45c7cb371fea',
    indexName: 'pinia',
  },

  carbonAds: {
    code: 'CEBICK3I',
    // custom: 'CEBICK3M',
    placement: 'routervuejsorg',
  },
}

export default themeConfig
