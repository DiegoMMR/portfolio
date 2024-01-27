import { createI18n } from 'vue-i18n'
import { en } from './en'
import { es } from './es'

const messages = {
  en,
  es
}

export default createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  legacy: false,
  sync: true,
  messages
})
