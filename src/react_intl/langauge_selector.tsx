import { useContext } from "react";
import { Languages } from "lucide-react";
import { useTranslation } from "./user_translation";
import { LanguageContext } from "./language_context";

export function LanguageSelector() {
  const context = useContext(LanguageContext);
  const { t } = useTranslation();

  if (!context) {
    throw new Error("LanguageSelector must be used within a LanguageProvider");
  }

  const { language, setLanguage } = context;

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2">
      {/* <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger
          id="language-select"
          className="w-16 bg-background-primary text-foreground focus:ring-accent"
        >
          <Languages className="w-4 h-4 text-foreground-primary" />
        </SelectTrigger>
        <SelectContent className="bg-white text-foreground border-accent">
          <SelectItem
            value="en-GB"
            className="focus:bg-accent focus:text-accent-foreground"
          >
            {t("language.english")}
          </SelectItem>
          <SelectItem
            value="hi-IN"
            className="focus:bg-accent focus:text-accent-foreground"
          >
            {t("language.hindi")}
          </SelectItem>
          <SelectItem
            value="ne-NP"
            className="focus:bg-accent focus:text-accent-foreground"
          >
            {t("language.nepali")}
          </SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
}