import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
.use(HttpBackend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  // debug: true,
  fallbackLng: "en-GB",
  
  ns: ["common", "games"],
  defaultNS: "common",

  supportedLngs: ["en-GB","it-IT"],
  
  backend: {
    loadPath: './locales/{{lng}}/{{ns}}.json',
  }
})

// Add a listener to update the <html> lang attribute
i18next.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18next;