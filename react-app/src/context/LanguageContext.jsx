import { createContext, useContext, useState, useEffect } from 'react';
import translations from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'de';
    } catch {
      return 'de';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lang', language);
    } catch { /* ignore */ }
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] ?? translations.de?.[key] ?? key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'ru' : 'de');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
