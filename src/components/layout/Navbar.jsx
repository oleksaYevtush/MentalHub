import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);

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
      <Link to="/" className="font-semibold text-default">
        MentalHub
      </Link>
      <div className="flex items-center gap-6">
        {/* Desktop links */}
        <div className="hidden sm:flex gap-6">
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

        {/* Mobile burger */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="p-2 rounded-md bg-bg hover:bg-border transition-colors"
            aria-label="Open menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop language & theme */}
        <div className="hidden sm:flex items-center gap-1 bg-bg p-1 rounded-xl border border-default">
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
        <div className="hidden sm:block">
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
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-16 right-4 w-56 bg-surface rounded-lg p-4 shadow-lg">
            <nav className="flex flex-col gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-medium' : 'text-default'
                }
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.home')}
              </NavLink>
              <NavLink
                to="/test"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-medium' : 'text-default'
                }
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.stressTest')}
              </NavLink>
              <NavLink
                to="/tracker"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-medium' : 'text-default'
                }
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.moodTracker')}
              </NavLink>
            </nav>
            <div className="mt-3 border-t pt-3 flex items-center justify-between">
              <div className="flex gap-2">
                {['uk', 'en', 'de'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLocale(lang);
                      setMenuOpen(false);
                    }}
                    className={`px-2 py-1 text-xs font-bold rounded-lg uppercase transition-all duration-200 ${locale === lang ? 'bg-primary text-white' : 'text-muted'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                className="p-2 rounded-md bg-bg hover:bg-border"
              >
                {theme === 'light' ? (
                  <svg
                    className="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
