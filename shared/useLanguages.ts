import { useI18n, } from 'vue-i18n';
import { ref } from 'vue';
import {availableLocales} from '@/i18n/index';
import { useStorage } from '@vueuse/core'

/**
 *Composible функция по работе с языками
 *
 * @export useLanguages
 * @return {switchLocale} : фукция смены локали 
 * @return {localesList} : список поддерживаемых локалей 
 * @return {currentLocale} : текущий выбранный язык 
 */
export default function useLanguages() {

   const { setLocale, locale } = useI18n()

   //список поддерживаемых локалей 
   const localesList = ref(availableLocales);

   //смена локали на портале
   const switchLocale = function (code: string) {
      setLocale(code);
      useStorage
   }

   //текущий выбранный язык
   const currentLocale = computed(()=>locale.value) 


   return { switchLocale, localesList ,currentLocale}
}