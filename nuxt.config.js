export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    titleTemplate: "Tanvir | %s",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

    // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/app.scss"],


  props:{
    layout:'default'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/slick-slider",
      ssr: false
    },
    {
      src: "~/plugins/star-rating",
      ssr: false
    },


  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    { path: '~/components/layouts', extensions: ['vue'] },
    { path: '~/components/icons', extensions: ['vue'] },
    { path: '~/components/forms', extensions: ['vue'] }
  ],


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
