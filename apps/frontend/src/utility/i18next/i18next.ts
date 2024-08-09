import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// const apiKey = "hv1KQnCWBHgIGsCIJTx8gg";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
.use(HttpBackend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  debug: true,
  fallbackLng: "en-GB",
  
  ns: ["common", "games"],
  defaultNS: "common",

  supportedLngs: ["en-GB","it-IT"],
  
  backend: {
    loadPath: './locales/{{lng}}/{{ns}}.json',
  }
})

export default i18next;
console.log(`🧊 ~ i18next: `, i18next);