import { languages, availableLocales } from "./i18n"

export default defineI18nConfig(() => ({
    locales:availableLocales,
    composition: true,
    locale: 'ru',
    messages: {
      en: languages.en,
      ru: languages.ru
    }
  }))