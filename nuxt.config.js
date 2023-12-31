/* eslint-disable max-len */
export default {
  debug: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Образовательный маркетплейс',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { name: 'theme-color', content: '#fff' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'facebook-domain-verification', content: 'atdvtw6d85otyx0d40jrqjmjjr1iq3' },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon" type="image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon" type="image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'msapplication-TileColor', content: '#ffffff' },
      { rel: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { rel: 'theme-color', content: '#ffffff' },
      { rel: 'preconnect', href: 'https://mp.synergy.ru' },
      { rel: 'preconnect', href: 'https://connect.facebook.net' },
    ],
    // script: [
    //   {
    //     type: 'text/javascript',
    //     // eslint-disable-next-line quotes
    //     innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start": new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","GTM-WPTVBRG");`,
    //   },
    // ],
    // __dangerouslyDisableSanitizers: ['script'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/styles/main.scss',
    '@cwespb/synergyui/lib/synergyui.css',
    'swiper/css/swiper.min.css',
    'vue-tel-input/dist/vue-tel-input.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/lander.js', mode: 'client' },
    { src: '@/plugins/gtm.js', mode: 'client' },
  ],

  redirect: [
    {
      from: '^(\\/[^\\?]*[^\\/])(\\?.*)?$',
      to: '$1/$2',
    },
  ],

  router: {
    middleware: 'trailingSlashRedirect',
    trailingSlash: true,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-compress',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://github.com/nuxt-community/gtm-module
    // '@nuxtjs/gtm',
    // https://www.npmjs.com/package/nuxt-facebook-pixel-module
    // 'nuxt-facebook-pixel-module',
    '@nuxtjs/redirect-module',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  axios: {
    debug: true,
  },

  loading: '~/components/s_loader/s_loader',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    NUXT_ENV_S3BACKET: process.env.NUXT_ENV_S3BACKET,
    SITE_FB_PIXEL: process.env.SITE_FB_PIXEL,
    SITE_GTM: process.env.SITE_GTM,
  },

  publicRuntimeConfig: {
    SITE_URL: process.env.SITE_URL,
  },

  // robots.txt
  robots: {
    UserAgent: '*',
    Disallow: '/',
  },

  // GTM
  // gtm: {
  //   id: process.env.SITE_GTM,
  //   pageTracking: true,
  // },

  // Facebook pixel
  // facebook: {
  //   /* module options */
  //   track: 'PageView',
  //   pixelId: process.env.SITE_FB_PIXEL,
  //   autoPageView: true,
  //   disabled: false,
  // },
};
