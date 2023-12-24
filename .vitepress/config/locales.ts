import type { DefaultTheme, LocaleConfig } from 'vitepress'

const config: LocaleConfig<DefaultTheme.Config> = {
  root: {
    label: 'فارسی',
    lang: 'fa-IR',
    link: '/',
  },
  en: { label: 'English', lang: 'en-US', link: 'https://pinia.vuejs.org' },
  zh: { label: '简体中文', lang: 'zh-CN', link: 'https://pinia.vuejs.org/zh' },
  es: {
    label: 'Español',
    lang: 'es-ES',
    link: 'https://es-pinia.vercel.app',
  },
  ko: {
    label: '한국어',
    lang: 'ko-KR',
    link: 'https://pinia.vuejs.kr',
  },
  pt: {
    label: 'Português',
    lang: 'pt-PT',
    link: 'https://pinia-docs-pt.netlify.app',
  },
  uk: {
    label: 'Українська',
    lang: 'uk-UA',
    link: 'https://pinia-ua.netlify.app',
  },
  ru: {
    label: 'Русский',
    lang: 'ru-RU',
    link: 'https://pinia-ru.netlify.app',
  },
}

export default config
