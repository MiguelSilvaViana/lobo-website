import { createI18nServer } from 'next-international/server';


export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } = createI18nServer({
  de: () => import('./translations/de'),
  en: () => import('./translations/en'),
  es: () => import('./translations/es'),
  pt: () => import('./translations/pt'),
  tr: () => import('./translations/tr'),
  zh: () => import('./translations/zh'),
});


