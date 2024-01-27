<script setup lang="ts">
import ParticlesBackground from './components/ParticlesBackground.vue'
import LanguageSelector from './components/Header/LanguageSelector.vue'

import Header from './components/Header/index.vue'

import About from './components/Content/About/index.vue'
import Experience from './components/Content/Experience/index.vue'
import Projects from './components/Content/Projects/index.vue'
</script>

<template>
  <ParticlesBackground />
  <LanguageSelector />

  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <div class="lg:flex lg:justify-between lg:gap-4">
      <Header />

      <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: relative;
}
</style>
