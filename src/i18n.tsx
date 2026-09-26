import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import fr from './locales/fr.json';

type Language = 'en' | 'fr';
type Theme = 'dark' | 'light';
const dictionary: Record<string, string> = fr;
function saved(key: string) {
  try { return localStorage.getItem(key); } catch { return null; }
}
const Preferences = createContext<{
  language: Language; theme: Theme;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
  t: (text?: string) => string;
} | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const value = saved('portfolio-language');
    return value === 'fr' || value === 'en' ? value : navigator.language.startsWith('fr') ? 'fr' : 'en';
  });
  const [theme, setTheme] = useState<Theme>(() => {
    const value = saved('portfolio-theme');
    return value === 'light' || value === 'dark' ? value : matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  const t = (text = '') => language === 'fr'
    ? text.replace(/\S[\s\S]*\S|\S/, value => dictionary[value] ?? value)
    : text;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'fr'
      ? 'Asmaa Talal | Future ingénieure en Systèmes d’Information & Big Data'
      : 'Asmaa Talal | Future Engineer in Information Systems & Big Data';
    const description = language === 'fr'
      ? 'Asmaa Talal — Étudiante ingénieure en Systèmes d’Information & Big Data. Projets en ingénierie des données, intelligence artificielle, apprentissage automatique et qualité des données.'
      : 'Asmaa Talal — Engineering student in Information Systems & Big Data, specializing in Data Engineering, Artificial Intelligence, Big Data, Machine Learning and Data Quality.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    try { localStorage.setItem('portfolio-language', language); } catch { /* Preferences work without storage. */ }
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f5f7fb' : '#080d16');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Preferences work without storage. */ }
  }, [theme]);

  return <Preferences.Provider value={{ language, theme, setLanguage, setTheme, t }}>{children}</Preferences.Provider>;
}

export function usePreferences() {
  const preferences = useContext(Preferences);
  if (!preferences) throw new Error('PreferencesProvider is required');
  return preferences;
}
