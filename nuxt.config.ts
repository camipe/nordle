// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook', '@nuxtjs/supabase', '@nuxt/fonts'],
  runtimeConfig: {
    dbConnectionString: '',
    public: {
      supabaseUrl: '',
      supabaseKey: '',
      baseUrl: '',
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
  supabase: {
    redirectOptions: {
      login: '/logga-in',
      callback: '/confirm',
      exclude: ['/logga-in', '/instruktioner', '/', '/confirm', '/__nuxt_devtools__/client/'],
    },
  },
  fonts: {
    families: [{
      name: 'Bagoss',
      weights: ['300', '400', '500', '600'],
      subsets: ['latin'],
    }],
  },
})
