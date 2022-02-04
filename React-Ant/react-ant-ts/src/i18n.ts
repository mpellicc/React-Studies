import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import it from "locale/it"
import en from 'locale/en';

const resources = {
    en,
    it,
}

i18n
.use(initReactI18next)
.init({
    resources,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;