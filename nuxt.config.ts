import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ["nuxt-particles", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    vueI18n: "./config.ts",
  },
});
