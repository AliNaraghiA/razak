export default {
  ssr: true,
  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: "Razak",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  loading: "~/components/Loading.vue",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/splide.client", mode: "client" },
    { src: "~/plugins/aos", mode: "client" },
    { src: "~/plugins/apolloClient", mode: "client" },
/*      '~/plugins/apolloClient', 
 */  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/apollo",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://wprazak.ravakdemo.ir/graphql',
/*         httpLinkOptions: {
          headers: {
            Authorization: `Bearer ${process.env.JWT_AUTH_TOKEN}`,
          },
        }, */
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias["node-fetch-native"] = require.resolve("node-fetch");
    },
  },
};
