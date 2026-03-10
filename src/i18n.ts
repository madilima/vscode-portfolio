import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/common.json'
import pt from './locales/pt/common.json'

const savedLanguage = localStorage.getItem('lang')
const browserLanguage = navigator.language.toLowerCase().startsWith('pt')
  ? 'pt'
  : 'en'

void i18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
    pt: { common: pt }
  },
  defaultNS: 'common',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  lng: savedLanguage ?? browserLanguage
})

i18n.on('languageChanged', language => {
  localStorage.setItem('lang', language)
})

export default i18n
