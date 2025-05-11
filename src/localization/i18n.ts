import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import fr from './translations/fr.json';
import ar from './translations/ar.json';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

const resources = {
    en: {
        translation: en,
    },
    fr: {
        translation: fr,
    },
    ar:{
        translation: ar,
    },
};

i18n.use(initReactI18next).use(RNLanguageDetector).init({
    resources,
    // fallback language is set to english
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;
