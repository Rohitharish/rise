// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  nitro: {
    prerender: {
      routes: ['/invoices/austral-care', '/invoices/austral-care-alt', '/invoices/edenvale-farm']
    }
  },
  app: {
    baseURL: '/'
  }
})
