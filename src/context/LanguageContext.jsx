import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(
    localStorage.getItem("locale") || "uk"
  );

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = (path, params = {}) => {
    const keys = path.split(".");
    let value = translations[locale];
    
    for (const key of keys) {
      if (value && value[key] !== undefined) {
        value = value[key];
      } else {
        // Fallback to uk translation if current locale lacks the key
        let fallbackValue = translations["uk"];
        for (const fk of keys) {
          if (fallbackValue && fallbackValue[fk] !== undefined) {
            fallbackValue = fallbackValue[fk];
          } else {
            fallbackValue = null;
            break;
          }
        }
        value = fallbackValue || path;
        break;
      }
    }

    if (typeof value === "string") {
      // Replace params like {num} or {total}
      let result = value;
      Object.entries(params).forEach(([k, v]) => {
        result = result.replace(new RegExp(`{${k}}`, "g"), v);
      });
      return result;
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
