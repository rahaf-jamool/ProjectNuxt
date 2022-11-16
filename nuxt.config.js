export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "kimox",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      },
      { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
      {
        rel: "stylesheet",
        href: "~/public/assets/slick-1.8.1/slick/slick.css",
      },
    ],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      },
      { src: "https://unpkg.com/aos@2.3.1/dist/aos.js" },
      { src: "~/public/assets/slick-1.8.1/slick/slick.min.js" },
      { src: "~/public/assets/js/main.js" },
    ],
  },

  ssr: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/vue-awesome-swiper", mode: "client" },
    { src: "~/plugins/v-video-embed", mode: "client" },
    { src: "~/plugins/words", mode: "client" },
    { src: "~/plugins/router", mode: "client" },
    { src: "~/plugins/main" },
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/public/assets/scss/main.scss",
    "~/public/assets/swiper/css/swiper.css",
    "~/public/assets/slick-1.8.1/slick/slick.css",
  ],

  js: [
    "~/public/assets/slick-1.8.1/slick/slick.min.js",
    "~/public/assets/js/main.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  //fontawesome start
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    // component: 'fa',
    icons: {
      // solid: ['faSearch','faAnalytics'],
      // brands: ['faTwitter','faFacebook','faPinterestP','faInstagram']
      solid: true,
      regular: true,
      brands: true,
    },
  },
  //fontawesome end

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
  ],
  router: {
    // Run the middleware/user-agent.js on every page
    //middleware: 'check-token'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
