import Vue from 'vue'
import VueI18n from 'vue-i18n'
import viMessage from './vi.json'
import enMessage from './en.json'
import { DEFAULT_LANGUAGE } from '@/constants/lang'
import LocalStorage from '@/ultils/local-storage'

Vue.use(VueI18n)

const messages = {
    vi: viMessage,
    en: enMessage,
}

let splitUrl = window.location.href.split('?')
let queryParams = splitUrl.length > 1 ? splitUrl[1] : ''
let params = new URLSearchParams('?' + queryParams)
let storageLanguage = LocalStorage.getItem('lang')
let language = params.get('language') ?? storageLanguage ?? DEFAULT_LANGUAGE
LocalStorage.setItem('lang', language)
let lang = language === 'zh' ? 'cn' : language

const i18n = new VueI18n({
    locale: lang,
    messages,
    fallbackLocale: lang
})

export default i18n
