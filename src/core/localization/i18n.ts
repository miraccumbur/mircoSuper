import i18n, { Module } from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './locales/en.json';
import tr from './locales/tr.json';

class AsyncStorageLanguageDetector implements Module {
  type = 'languageDetector' as const;
  async = true;

  detect(callback: (lng: string) => void) {
    AsyncStorage.getItem('user-language')
      .then((lng) => {
        if (lng) {
          callback(lng);
        } else {
          callback('en'); // varsayılan dil
        }
      })
      .catch(() => {
        callback('en'); // varsayılan dil
      });
  }

  init() {}

  cacheUserLanguage(lng: string) {
    AsyncStorage.setItem('user-language', lng);
  }
}

const languageDetector = new AsyncStorageLanguageDetector();

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en
      },
      tr: {
        translation: tr
      }
    },
    ns: ['translation'],
    defaultNS: 'translation',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
