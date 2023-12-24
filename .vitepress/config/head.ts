import type { HeadConfig } from 'vitepress'

const META_URL = 'https://pinia.vuejs.org'
const META_TITLE = 'Pinia 🍍'
const META_DESCRIPTION =
  'Intuitive, type safe, light and flexible Store for Vue'
const META_IMAGE = 'https://pinia.vuejs.org/social.png'

const config: HeadConfig[] = [
  ['meta', { property: 'og:url', content: META_URL }],
  ['meta', { property: 'og:description', content: META_DESCRIPTION }],
  ['meta', { property: 'twitter:url', content: META_URL }],
  ['meta', { property: 'twitter:title', content: META_TITLE }],
  ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],

  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],

  [
    'meta',
    { name: 'wwads-cn-verify', content: '5878a7ab84fb43402106c575658472fa' },
  ],

  [
    'meta',
    {
      property: 'og:type',
      content: 'website',
    },
  ],

  [
    'meta',
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
  [
    'meta',
    {
      property: 'twitter:image',
      content: META_IMAGE,
    },
  ],

  [
    'script',
    {
      src: 'https://cdn.usefathom.com/script.js',
      'data-site': 'KFPPRRIS',
      'data-spa': 'auto',
      defer: '',
    },
  ],

  // Vue School Top banner
  [
    'script',
    {
      src: 'https://vueschool.io/banner.js?affiliate=vuerouter&type=top',
      // @ts-expect-error: vitepress bug
      async: true,
      type: 'text/javascript',
    },
  ],
]

export default config
