// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [],
  css: ['@/app/global.css'],

  imports: {
    dirs: [
      'shared/composables',
      'shared/utils'
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
