// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  css: [
    '~/assets/css/theme.css',
    '~/assets/css/language-colors.css',
  ],
  googleFonts: {
    families: {
      SUSE: [400, 600, 700]
    }
  }
})
