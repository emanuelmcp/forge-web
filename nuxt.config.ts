// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles.css'],
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/content', '@nuxt/ui', "@nuxt/image"],
  content: {
    markdown: {
      anchorLinks: {
        depth: 2
      }
    }   
  },
  ui: {
    icons: ["simple-icons"],
  },
  colorMode: {
    preference: 'light'
  }
})