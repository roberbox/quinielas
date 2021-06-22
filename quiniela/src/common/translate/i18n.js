import i18n from "i18next";
import { initReactI18next, t } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      es: {
        translations: {
          welcome: "hola <br/> <strong>World</strong>"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
