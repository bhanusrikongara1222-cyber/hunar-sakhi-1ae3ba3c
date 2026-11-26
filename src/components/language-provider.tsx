import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export const languages = ['en', 'te', 'hi'] as const;
export type Language = typeof languages[number];
export type LocalText = Record<Language, string>;
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({ language: 'en', setLanguage: () => {} });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  return { ...context, text: (en: string, te: string, hi: string) => ({ en, te, hi })[context.language] };
}
