import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGlobe, FiCheck } from 'react-icons/fi';
import { LANGUAGES } from '../i18n/translations';
import { useLanguage } from '../i18n/useLanguage';

export default function LanguageSwitcher({ darkMode }: { darkMode: boolean }) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  // Fecha ao clicar fora ou apertar Esc
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t.language.label}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-1.5 h-9 px-3 rounded-full text-sm font-medium shadow-lg transition-colors ${
          darkMode
            ? 'bg-gray-800 text-purple-300 hover:bg-gray-700 border border-purple-900/40'
            : 'bg-white text-purple-700 hover:bg-purple-50 border border-purple-200'
        }`}
      >
        <FiGlobe size={16} />
        <span>{current.short}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className={`absolute right-0 mt-2 w-44 overflow-hidden rounded-xl shadow-2xl border ${
              darkMode ? 'bg-gray-900 border-purple-900/50' : 'bg-white border-purple-100'
            }`}
          >
            {LANGUAGES.map((l) => {
              const active = l.code === lang;
              return (
                <li key={l.code} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => {
                      setLang(l.code);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                      active
                        ? darkMode
                          ? 'bg-purple-900/40 text-purple-200'
                          : 'bg-purple-50 text-purple-700'
                        : darkMode
                          ? 'text-gray-300 hover:bg-gray-800'
                          : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg leading-none">{l.flag}</span>
                    <span className="flex-1 text-left">{l.label}</span>
                    {active && <FiCheck size={16} />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
