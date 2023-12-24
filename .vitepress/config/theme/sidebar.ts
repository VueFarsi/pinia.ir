import type { DefaultTheme } from 'vitepress'

const config: DefaultTheme.Sidebar = {
  '/api/': [
    {
      text: 'packages',
      items: [
        { text: 'pinia', link: '/api/modules/pinia.html' },
        { text: '@pinia/nuxt', link: '/api/modules/pinia_nuxt.html' },
        {
          text: '@pinia/testing',
          link: '/api/modules/pinia_testing.html',
        },
      ],
    },
  ],
  // catch-all fallback
  '/': [
    {
      text: 'Introduction',
      items: [
        {
          text: 'What is Pinia?',
          link: '/introduction.html',
        },
        {
          text: 'Getting Started',
          link: '/getting-started.html',
        },
      ],
    },
    {
      text: 'Core Concepts',
      items: [
        { text: 'Defining a Store', link: '/core-concepts/' },
        { text: 'State', link: '/core-concepts/state.html' },
        { text: 'Getters', link: '/core-concepts/getters.html' },
        { text: 'Actions', link: '/core-concepts/actions.html' },
        { text: 'Plugins', link: '/core-concepts/plugins.html' },
        {
          text: 'Stores outside of components',
          link: '/core-concepts/outside-component-usage.html',
        },
      ],
    },
    {
      text: 'Server-Side Rendering (SSR)',
      items: [
        {
          text: 'Vue and Vite',
          link: '/ssr/',
        },
        {
          text: 'Nuxt.js',
          link: '/ssr/nuxt.html',
        },
      ],
    },
    {
      text: 'Cookbook',
      collapsed: false,
      items: [
        {
          text: 'Index',
          link: '/cookbook/',
        },
        {
          text: 'Migration from Vuex ≤4',
          link: '/cookbook/migration-vuex.html',
        },
        {
          text: 'Hot Module Replacement',
          link: '/cookbook/hot-module-replacement.html',
        },
        {
          text: 'Testing',
          link: '/cookbook/testing.html',
        },
        {
          text: 'Usage without setup()',
          link: '/cookbook/options-api.html',
        },
        {
          text: 'Composing Stores',
          link: '/cookbook/composing-stores.html',
        },
        {
          text: 'VSCode Snippets',
          link: '/cookbook/vscode-snippets.html',
        },
        {
          text: 'Migration from v0/v1 to v2',
          link: '/cookbook/migration-v1-v2.html',
        },
        {
          text: 'Dealing with composables',
          link: '/cookbook/composables.html',
        },
      ],
    },
  ],
}

export default config
