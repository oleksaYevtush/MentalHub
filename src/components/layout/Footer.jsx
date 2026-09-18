import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface border-t border-default px-6 sm:px-12 py-16 text-default transition-colors duration-200 paper-texture">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand Colophon */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="font-serif font-bold text-xl tracking-tight">MentalHub</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surfaceSubtle border border-default text-muted">
              ARCHIVE & CARE
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans max-w-sm">
            {t("footer.tagline")}
          </p>
          <div className="pt-2 text-[11px] font-mono text-muted">
            {t("footer.privacyNote")}
          </div>
        </div>

        {/* Emergency Hotlines */}
        <div className="md:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-muted font-bold">
            {t("footer.hotlinesTitle")}
          </div>
          <ul className="space-y-2.5 text-xs font-mono">
            <li className="p-2.5 rounded-lg bg-surfaceSubtle border border-default flex items-center justify-between">
              <span className="text-muted">{t("footer.psychologicalHelp")}:</span>
              <a href="tel:0800505101" className="font-bold text-primary hover:underline">
                0 800 505 101
              </a>
            </li>
            <li className="p-2.5 rounded-lg bg-surfaceSubtle border border-default flex items-center justify-between">
              <span className="text-muted">{t("footer.lifeline")}:</span>
              <a href="tel:7333" className="font-bold text-secondary hover:underline">
                7333
              </a>
            </li>
            <li className="p-2.5 rounded-lg bg-surfaceSubtle border border-default flex items-center justify-between">
              <span className="text-muted">{t("footer.veteransSupport")}:</span>
              <a href="tel:0800505217" className="font-bold text-default hover:underline">
                0 800 505 217
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation & Colophon meta */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-muted font-bold">
            {t("footer.sectionsTitle")}
          </div>
          <ul className="space-y-2 text-xs font-sans text-muted">
            <li>
              <a href="/#silent-stories" className="hover:text-primary transition-colors">
                • {t("footer.silentStories")}
              </a>
            </li>
            <li>
              <a href="/#war-effects" className="hover:text-primary transition-colors">
                • {t("footer.psychosomaticAtlas")}
              </a>
            </li>
            <li>
              <a href="/#breathing-section" className="hover:text-primary transition-colors">
                • {t("footer.breathingSanctuary")}
              </a>
            </li>
            <li>
              <a href="/#symptoms-section" className="hover:text-primary transition-colors">
                • {t("footer.psychologicalStates")}
              </a>
            </li>
            <li>
              <a href="/#tips-section" className="hover:text-primary transition-colors">
                • {t("footer.barometer")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-default flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted">
        <div>{t("footer.copyright")}</div>
        <div className="flex items-center gap-4">
          <span>{t("footer.glory")}</span>
          <span>•</span>
          <span>{t("footer.stayStrong")}</span>
        </div>
      </div>
    </footer>
  );
}
