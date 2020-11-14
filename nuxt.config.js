import colors from "vuetify/lib/util/colors";

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "weather-app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/axios-accessor.ts"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-i18n",
    "vue-geolocation-api/nuxt"
  ],
  geolocation: {
    watch: true
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  env: {
    appTitle: "Weather App"
  },

  i18n: {
    locales: [
      { code: "pl", iso: "pl-PL", file: "pl.json" },
      { code: "en", iso: "en-US", file: "en.json" }
    ],
    langDir: "lang/",
    defaultLocale: "pl",
    lazy: true
  },

  vuetify: {
    theme: {
      dark: true,
      themes: {
        options: {
          customProperties: true
        },
        light: {
          primary: colors.purple,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3
        },
        dark: {
          primary: colors.blue.lighten3,
          background: "#7cadb2"
        }
      }
    }
    // theme: {
    //   // default theme is light mode
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue,
    //       secondary: colors.teal.darken4,
    //       accent: colors.teal.accent4,

    //       error: colors.deepOrange.accent2,
    //       info: colors.grey.darken3,
    //       success: colors.green.accent3,
    //       warning: colors.amber.base,
    //     },
    //     light: {
    //       primary: '#1976D2',
    //       secondary: colors.teal.lighten3,
    //       accent: colors.teal.accent4,

    //       error: '#FF5252',
    //       info: '#2196F3',
    //       success: '#4CAF50',
    //       warning: '#FFC107',
    //     }
    //   }
    // }
  }
};
