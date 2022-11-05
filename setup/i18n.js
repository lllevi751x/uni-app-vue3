import { createI18n } from 'vue-i18n'import en from "@/locale/en.json"import zhHans from '@/locale/zh-Hans.json'export const messages = {  en,  'zh-Hans': zhHans}const i8nConfig = {  locale: uni.getLocale(),  messages}export const i18n = createI18n(i8nConfig)
console.log('[uni-app] locale', uni.getLocale())
/** * 多语言 * @description 多语言 */export const setupI18n = (app) => {  app.use(i18n)}