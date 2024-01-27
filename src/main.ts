import './assets/main.css'

import type { Engine } from '@tsparticles/engine'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'
import i18n from './i18n'

import App from './App.vue'

const app = createApp(App)

const particles = {
  init: async (engine: Engine) => {
    await loadFull(engine)
  }
}

app.use(createPinia())
app.use(i18n)
app.use(Particles, particles)

app.mount('#app')
