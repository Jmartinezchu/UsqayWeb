import colors from 'vuetify/es5/util/colors'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Usqay',
    title: 'Usqay',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/css/style.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/responsive.css',
      },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      // },
      // {rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" },
      // {rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" },
      // {rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" },
    ],
    //   script: [
    //     { type: "text/javascript", src: "https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js" },
    //     { type: "text/javascript", src: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js" },
    // ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['animate.css/animate.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/aos.js', ssr: false },
    // { src: '~/plugins/weetalert2.js' },
    { src: '~/plugins/wow.js', ssr: false },
    // { src: '~/plugins/vuetify.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  loading: '~/components/LoadingBar.vue',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // 'nuxt-sweetalert2',

    'vue-sweetalert2/nuxt',
  ],
  // sweetalert: {
  //   confirmButtonColor: '#41b882',
  //   cancelButtonColor: '#ff7674',
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      useWebmanifestExtension: false,
      icons: [
        {
          purpose: 'any maskable',
          sizes: '512x512',
          src: '/icon.png',
          type: 'image/png',
        },
      ],
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
