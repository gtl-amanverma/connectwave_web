import { useContext } from "react";
import { LanguageContext } from "./language_context";

// Helper function to safely access nested values
function getNestedValue(obj: any, path: string): any {
  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }

  return current;
}

export function useTranslation() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }

  const { translations, loading, language } = context;

  // The translation function `t`
  const t = (key: string): string => {
    if (loading) {
      return `${key}...`; // optional loading placeholder
    }

    const value = getNestedValue(translations, key);

    if (typeof value === 'string') {
      return value;
    }

    // fallback: return key if not found or not a string
    return key;
  };

  return { t, tloading: loading, currentLanguage: language };
}