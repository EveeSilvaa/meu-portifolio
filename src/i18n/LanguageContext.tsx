import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { LANGUAGES, translations, type Lang } from './translations';
import { LanguageContext, type LanguageContextValue } from './context';

const STORAGE_KEY = 'lang';

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'pt' || saved === 'es') return saved;
  } catch {
    /* localStorage indisponível */
  }
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('pt')) return 'pt';
  if (nav.startsWith('es')) return 'es';
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    const meta = LANGUAGES.find((l) => l.code === lang);
    document.documentElement.lang = meta?.htmlLang ?? lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang: setLangState, t: translations[lang] }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
