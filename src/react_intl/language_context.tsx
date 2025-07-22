import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useState, useMemo, useEffect } from "react";

import enGB from "../locales/en-GB.json";

// Define the shape of the translation object
interface Translations {
  [key: string]: string | Translations;
}

// Define the shape of the context value
interface LanguageContextProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  translations: Translations;
  loading: boolean;
}

// Create the context with a default value
export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

// Define the available languages and the default language
const AVAILABLE_LANGUAGES = ["en-GB", "hi-IN", "ne-NP"];
const DEFAULT_LANGUAGE = "en-GB";

// Map translations
const TRANSLATIONS: { [key: string]: Translations } = {
  "en-GB": enGB,
};

// Create the provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState<Translations>(
    TRANSLATIONS[DEFAULT_LANGUAGE]
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadTranslations = () => {
      setLoading(true);
      const langToLoad = AVAILABLE_LANGUAGES.includes(language)
        ? language
        : DEFAULT_LANGUAGE;
      const data = TRANSLATIONS[langToLoad];
      setTranslations(data);
      setLoading(false);
    };

    loadTranslations();
  }, [language]);

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      translations,
      loading,
    }),
    [language, setLanguage, translations, loading]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
