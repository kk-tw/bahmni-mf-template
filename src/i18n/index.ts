import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n.use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        load: 'languageOnly',
        ns: ['sample'],
        backend: {
            loadPath: '/bahmni/i18n/{{ns}}/locale_{{lng}}.json',
        },
    });

export default i18n;
