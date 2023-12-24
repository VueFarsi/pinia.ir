import { defineConfig } from 'vitepress'
import locales from './locales'
import markdown from './markdown'
import head from './head'
import themeConfig from './theme'

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',

  title: 'Pinia',
  description: 'Intuitive, type safe, light and flexible Store for Vue',
  appearance: 'dark',
  
  themeConfig,
  locales,
  markdown,
  head,
})
