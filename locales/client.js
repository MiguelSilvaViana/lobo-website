import { createI18nClient } from 'next-international/client';

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale,
  useCurrentLocale } = createI18nClient({
    de: () => import('./translations/de'),
    en: () => import('./translations/en'),
    es: () => import('./translations/es'),
    pt: () => import('./translations/pt'),
    tr: () => import('./translations/tr'),
    zh: () => import('./translations/zh'),
  });