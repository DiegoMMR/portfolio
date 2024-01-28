import { LOCALE_KEY } from '@/constants'
import { createI18n } from 'vue-i18n'
import { en } from './en'
import { es } from './es'

const messages = { en, es }

const localStorageLanguage = localStorage.getItem(LOCALE_KEY)

if (!localStorageLanguage) {
  const browserLanguage = navigator.language.split('-')[0]
  const isValidBrowserLanguage = Object.keys(messages).includes(browserLanguage)

  if (isValidBrowserLanguage) {
    localStorage.setItem(LOCALE_KEY, browserLanguage)
  }
}

const selectedLanguage = localStorageLanguage || 'en'

export default createI18n({
  locale: selectedLanguage,
  fallbackLocale: 'en',
  legacy: false,
  sync: true,
  messages
})
