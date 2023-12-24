# Nuxt.js

Using Pinia with [Nuxt](https://nuxt.com/) is easier since Nuxt takes care of a lot of things when it comes to _server side rendering_. For instance, **you don't need to care about serialization nor XSS attacks**. Pinia supports Nuxt Bridge and Nuxt 3. For bare Nuxt 2 support, [see below](#nuxt-2-without-bridge).

## Installation

```bash
yarn add pinia @pinia/nuxt
# or with npm
npm install pinia @pinia/nuxt
```

:::tip
If you're using npm, you might encounter an _ERESOLVE unable to resolve dependency tree_ error. In that case, add the following to your `package.json`:

```js
"overrides": {
  "vue": "latest"
}
```

:::

We supply a _module_ to handle everything for you, you only need to add it to `modules` in your `nuxt.config.js` file:

```js
// nuxt.config.js
export default defineNuxtConfig({
  // ... other options
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})
```

And that's it, use your store as usual!

## Using the store outside of `setup()`

If you want to use a store outside of `setup()`, remember to pass the `pinia` object to `useStore()`. We added it to [the context](https://nuxtjs.org/docs/2.x/internals-glossary/context) so you have access to it in `asyncData()` and `fetch()`:

```js
import { useStore } from '~/stores/myStore'

export default {
  asyncData({ $pinia }) {
    const store = useStore($pinia)
  },
}
```

As with `onServerPrefetch()`, you don't need to do anything special if you want to call a store action within `asyncData()`:

```vue
<script setup>
const store = useStore()
const { data } = await useAsyncData('user', () => store.fetchUser())
</script>
```

## Auto imports

By default `@pinia/nuxt` exposes a few auto imports:

- `usePinia()`, which is similar to `getActivePinia()` but works better with Nuxt. You can add auto imports to make your life easier:
- `defineStore()` to define stores
- `storeToRefs()` when you need to extract individual refs from a store
- `acceptHMRUpdate()` for [hot module replacement](../cookbook/hot-module-replacement.md)

It also automatically imports **all stores** defined within your `stores` folder. It doesn't lookup for nested stores though. You can customize this behavior by setting the `storesDirs` option:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // ... other options
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
})
```

Note the folders are relative to the root of your project. If you change the `srcDir` option, you need to adapt the paths accordingly.

## Nuxt 2 without bridge

Pinia supports Nuxt 2 until `@pinia/nuxt` v0.2.1. Make sure to also install [`@nuxtjs/composition-api`](https://composition-api.nuxtjs.org/) alongside `pinia`:

```bash
yarn add pinia @pinia/nuxt@0.2.1 @nuxtjs/composition-api
# or with npm
npm install pinia @pinia/nuxt@0.2.1 @nuxtjs/composition-api
```

We supply a _module_ to handle everything for you, you only need to add it to `buildModules` in your `nuxt.config.js` file:

```js
// nuxt.config.js
export default {
  // ... other options
  buildModules: [
    // Nuxt 2 only:
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],
}
```

### TypeScript

If you are using Nuxt 2 (`@pinia/nuxt` < 0.3.0) with TypeScript or have a `jsconfig.json`, you should also add the types for `context.pinia`:

```json
{
  "types": [
    // ...
    "@pinia/nuxt"
  ]
}
```

This will also ensure you have autocompletion 😉 .

### Using Pinia alongside Vuex

It is recommended to **avoid using both Pinia and Vuex** but if you need to use both, you need to tell pinia to not disable it:

```js
// nuxt.config.js
export default {
  buildModules: [
    '@nuxtjs/composition-api/module',
    ['@pinia/nuxt', { disableVuex: false }],
  ],
  // ... other options
}
```
