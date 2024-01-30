// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-particles", "@nuxtjs/i18n"],
  tailwindcss: {
    cssPath: ["@/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: { level: 2 },
    config: {},
    viewer: true,
  },
  i18n: {
    vueI18n: "./i18n/config.ts",
  },
});
