import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const linkClass = ({ isActive }) =>
    isActive ? 'text-primary font-medium' : 'text-muted hover:text-primary';

  return (
    <nav className="sticky top-0 z-40 bg-surface border-b border-default px-6 py-4 flex items-center justify-between transition-colors duration-200 shadow-sm">
      <Link to="/" className="font-semibold text-default">MentalHub</Link>
      <div className="flex items-center gap-6">
        <div className="flex gap-6">
          <NavLink to="/" className={linkClass} end>
            {t('navbar.home')}
          </NavLink>
          <NavLink to="/test" className={linkClass}>
            {t('navbar.stressTest')}
          </NavLink>
          <NavLink to="/tracker" className={linkClass}>
            {t('navbar.moodTracker')}
          </NavLink>
        </div>
        <div className="flex items-center gap-1 bg-bg p-1 rounded-xl border border-default">
          {['uk', 'en', 'de'].map((lang) => (
            <button
              key={lang}
              onClick={() => setLocale(lang)}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg uppercase transition-all duration-200 cursor-pointer ${
                locale === lang
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-primary'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-bg hover:bg-border transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
