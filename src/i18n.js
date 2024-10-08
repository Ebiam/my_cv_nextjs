import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr'],
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
});

export default NextI18NextInstance;
export const { appWithTranslation, withTranslation, i18n } = NextI18NextInstance;
