import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export const SUPPORTED_LANGUAGES = ["uk", "en", "de"];

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    if (typeof window === "undefined") return "uk";
    
    // 1. Check URL search param (?lang=en or ?locale=en)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get("lang") || urlParams.get("locale") || urlParams.get("lng");
      if (urlLang && SUPPORTED_LANGUAGES.includes(urlLang.toLowerCase())) {
        return urlLang.toLowerCase();
      }
    } catch {
      // Ignore URL parsing errors
    }

    // 2. Check localStorage
    const saved = window.localStorage.getItem("locale");
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }

    // 3. Fallback to default
    return "uk";
  });

  // Method to change language across the app, sync storage, URL, and document
  const changeLanguage = (newLocale) => {
    const target = (newLocale || "").toLowerCase();
    if (!SUPPORTED_LANGUAGES.includes(target)) {
      console.warn(`[LanguageContext] Unsupported locale: ${newLocale}`);
      return;
    }

    setLocale(target);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", target);
      document.documentElement.lang = target;

      // Update URL query parameter without full reload
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", target);
        window.history.replaceState({}, "", url.toString());
      } catch {
        // Ignore URL update errors
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

  // Listen to popstate for back/forward navigation affecting ?lang=
  useEffect(() => {
    const handleLocationChange = () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get("lang") || urlParams.get("locale") || urlParams.get("lng");
        if (urlLang && SUPPORTED_LANGUAGES.includes(urlLang.toLowerCase()) && urlLang.toLowerCase() !== locale) {
          setLocale(urlLang.toLowerCase());
        }
      } catch {
        // Ignore errors
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
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

  // i18n compatibility wrapper (conforming to standard i18next patterns like i18n.changeLanguage)
  const i18n = {
    language: locale,
    locale,
    languages: SUPPORTED_LANGUAGES,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        language: locale,
        setLocale,
        changeLanguage,
        setLanguage: changeLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
        i18n,
        t,
      }}
    >
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
