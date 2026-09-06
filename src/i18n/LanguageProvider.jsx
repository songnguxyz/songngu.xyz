import React, { useEffect, useMemo } from "react";
import { LanguageContext } from "./language-context";
import { strings } from "./strings";
import { readStored, usePersistedState } from "../hooks/usePersistedState";

const STORAGE_KEY = "lang";

function getInitialLang() {
  const saved = readStored(STORAGE_KEY);
  if (saved === "vi" || saved === "en") return saved;
  const userLang = typeof navigator !== "undefined" && navigator.language;
  return userLang && userLang.toLowerCase().startsWith("vi") ? "vi" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = usePersistedState(STORAGE_KEY, getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t: strings[lang],
      toggleLang: () => setLang((current) => (current === "vi" ? "en" : "vi")),
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
