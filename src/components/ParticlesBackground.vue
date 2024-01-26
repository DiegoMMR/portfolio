<template>
  <vue-particles class="particles-background" id="tsparticles" :options="options" />
</template>

<script setup lang="ts">
import { options } from '../constants/particles'
</script>

<style scoped>
.particles-background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  z-index: -1;
}
</style>
