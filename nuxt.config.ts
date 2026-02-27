import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify'],
  },
  plugins: ['~/plugins/fontawesome.ts'],
  modules: ['@nuxt/ui'],
  app: {
    head: {
      title: 'TechBook',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      htmlAttrs: {
        lang: 'ru',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    plugins: [
      // @ts-expect-error
      vuetify({ autoImport: true }),
      ,
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/_mixins.scss" as *;
          `,
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
