import { useContext } from "react";
import { LanguageContext } from "../i18n/language-context";

// Trả về { lang, t, toggleLang }.
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage phải được dùng bên trong <LanguageProvider>");
  }
  return context;
}
