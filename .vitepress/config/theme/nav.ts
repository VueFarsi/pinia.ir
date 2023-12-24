import type { DefaultTheme } from 'vitepress'

const config: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    link: '/core-concepts/',
    activeMatch: '^/core-concepts/',
  },
  { text: 'API', link: '/api/', activeMatch: '^/api/' },
  { text: 'Cookbook', link: '/cookbook/', activeMatch: '^/cookbook/' },
  {
    text: 'Links',
    items: [
      {
        text: 'Discussions',
        link: 'https://github.com/vuejs/pinia/discussions',
      },
      {
        text: 'Changelog',
        link: 'https://github.com/vuejs/pinia/blob/v2/packages/pinia/CHANGELOG.md',
      },
      {
        text: 'Vue.js Certification',
        link: 'https://certification.vuejs.org/?friend=VUEROUTER',
      },
    ],
  },
]

export default config
