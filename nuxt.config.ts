import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: { enabled: true },

  modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss", "@nuxt/eslint"],

  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "system",
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
  },

  tailwindcss: {
    config: "tailwind.config.js",
  },

  eslint: {},

  pages: true,
});
