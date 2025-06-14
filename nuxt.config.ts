// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-14',
  devtools: { enabled: true },
  modules: [],
  css: ['@/app/global.css'],

  imports: {
    dirs: [
      'shared/utils',
      'shared/types'
      // You can specify here any folder from which you want to auto-import
    ]
  },

  components: [
    {
      path: 'shared',
      extensions: ['.vue'],
      prefix: 'Shared'
    },
    {
      path: 'features',
      extensions: ['.vue'],
      prefix: 'Feature'
    },
    {
      path: 'widgets',
      extensions: ['.vue'],
      prefix: 'Widget'
    },
    {
      path: 'entities',
      extensions: ['.vue'],
      prefix: 'Entity'
    }
  ]
});
