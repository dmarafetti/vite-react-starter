import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import resources from './locales.json';

/**
 * @author diego
 * @since 1.0.0
 */
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            useSuspense: false
        },
    });

export default i18n;


