import 'react-i18next';
import en from './locales/en.json';
import tr from './locales/tr.json';

interface I18nNamespaces {
  translation: typeof en & typeof tr;
}

declare module 'react-i18next' {
  interface Resources extends I18nNamespaces {}
}
