// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: ["usebootstrap", "@nuxtjs/i18n"],

  usebootstrap: {
    bootstrap: {
      prefix: ``
    },
    html: {
      prefix: `B`
    },
  },

  css: [
    "bootstrap/scss/bootstrap.scss",
    "~/assets/style.css"
  ],

  compatibilityDate: "2024-07-08",
})