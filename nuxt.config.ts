// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook', '@nuxt/fonts'],
  runtimeConfig: {
    dbConnectionString: '',
    public: {
      supabaseUrl: '',
      supabaseKey: '',
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ['jsdoc-type-pratt-parser'],
    },
  },
  nitro: {
    experimental: {
      tasks: true,
    },
  },
})