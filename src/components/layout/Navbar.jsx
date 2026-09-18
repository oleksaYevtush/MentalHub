import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors px-3.5 py-1.5 rounded-lg ${
      isActive
        ? "text-white font-semibold bg-gradient-to-r from-atlantis to-verbena shadow-xs shadow-atlantis/30"
        : "text-muted hover:text-default hover:bg-periwinkle/15"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-periwinkle/30 px-4 sm:px-8 py-3.5 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setMobileMenuOpen(false)}>
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-atlantis via-periwinkle to-verbena text-white flex items-center justify-center font-serif font-bold text-base shadow-sm shadow-periwinkle/40 group-hover:scale-105 transition-transform">
            М
          </span>
          <div>
            <div className="font-serif font-bold text-lg leading-tight text-default tracking-tight flex items-center gap-1.5">
              <span>{t("navbar.brand")}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-phlox ring-2 ring-verbena/40 animate-pulse" title={t("common.spaceOpen")} />
            </div>
            <p className="text-[11px] font-mono text-muted uppercase tracking-widest hidden sm:block">
              {t("navbar.subtitle")}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-surfaceSubtle/90 p-1 rounded-xl border border-periwinkle/30 shadow-2xs">
          <NavLink to="/" className={linkClass} end>
            {t("navbar.home")}
          </NavLink>
          <NavLink to="/test" className={linkClass}>
            {t("navbar.stressTest")}
          </NavLink>
          <NavLink to="/tracker" className={linkClass}>
            {t("navbar.moodTracker")}
          </NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Emergency Hotline (Desktop) */}
          <a
            href="tel:0800505101"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono text-default hover:text-white px-2.5 py-1 rounded-lg border border-verbena/40 bg-verbena/10 hover:bg-verbena transition-all shadow-2xs"
            title={t("navbar.hotlineTooltip")}
          >
            <span className="text-verbena hover:text-white font-bold">SOS</span>
            <span>0 800 505 101</span>
          </a>

          {/* Language Switcher */}
          <div className="flex items-center bg-surfaceSubtle p-0.5 rounded-lg border border-default">
            {["uk", "en", "de"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`px-2 py-1 text-[11px] font-mono font-bold rounded uppercase transition-all duration-150 cursor-pointer ${
                  locale === lang
                    ? "bg-surface text-primary shadow-xs font-extrabold border border-border"
                    : "text-muted hover:text-default"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surfaceSubtle border border-default hover:border-primary/40 transition-colors cursor-pointer text-muted hover:text-default"
            aria-label={t("common.toggleTheme")}
            title={theme === "light" ? t("common.nightMode") : t("common.dayMode")}
          >
            {theme === "light" ? (
              <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg bg-surfaceSubtle border border-default text-default cursor-pointer"
            aria-label={t("common.menu")}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 border-t border-default mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1">
            <NavLink
              to="/"
              className={linkClass}
              end
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("navbar.home")}
            </NavLink>
            <NavLink
              to="/test"
              className={linkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("navbar.stressTest")}
            </NavLink>
            <NavLink
              to="/tracker"
              className={linkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("navbar.moodTracker")}
            </NavLink>
          </div>

          <div className="pt-3 border-t border-default flex items-center justify-between text-xs text-muted">
            <span>{t("navbar.hotlineLabel")}</span>
            <a href="tel:0800505101" className="font-mono font-bold text-secondary">
              0 800 505 101
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
