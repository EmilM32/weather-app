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

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/axios-accessor.ts"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv"
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

  env: {
    API_KEY: process.env.API_KEY
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: true
  },

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
        dark: {
          primary: colors.blue.lighten3,
          background: "#7cadb2"
        }
      }
    }
  }
};
