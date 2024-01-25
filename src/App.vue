<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Name from './components/Name.vue'
import ColorRain from './components/ColorRain.vue'
</script>

<template>
  <header class="header inset-x-0 top-0 z-50">
    <ColorRain />
    <Navbar />
    <Name />
  </header>

  <main>algoadsa dsa dadasdas</main>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  overflow: hidden;
}
</style>
