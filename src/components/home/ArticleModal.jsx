import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ArticleModal({ item, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    window.__lenis?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, []);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal panel */}
        <motion.div
          data-lenis-prevent
          className="relative z-10 bg-surface border border-default text-default rounded-2xl shadow-xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden paper-texture"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
        >
          {/* Header */}
          <div className="bg-surfaceSubtle px-6 sm:px-8 pt-7 pb-6 shrink-0 border-b border-default">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <span className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl bg-surface border border-default shrink-0">
                  {item.icon}
                </span>
                <div>
                  <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                    {t("warEffectsSection.atlas")}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-semibold text-default leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted mt-0.5">{item.subtitle}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="shrink-0 text-muted hover:text-default hover:bg-surface border border-default transition-colors rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer"
                aria-label={t("common.close")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Intro */}
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-default/90 bg-surface rounded-xl p-4 border border-default">
              {item.article.intro}
            </p>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-6 space-y-5">
            {item.article.blocks.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>

          {/* Footer */}
          <div className="shrink-0 px-6 sm:px-8 py-4 border-t border-default bg-surface flex items-center justify-between">
            <span className="text-xs font-mono text-muted">
              {t("common.mentalSupport")}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-surfaceSubtle hover:bg-surface border border-default text-xs font-mono font-medium text-default transition-all cursor-pointer"
            >
              {t("common.close")}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ContentBlock({ block }) {
  const isTips = block.type === "tips";

  return (
    <div className="rounded-xl p-5 bg-surfaceSubtle border border-default space-y-3">
      {/* Block label */}
      <div className="flex items-center gap-2">
        <span className="text-base">{block.icon}</span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-default">
          {block.label}
        </span>
      </div>

      {/* Paragraphs */}
      {block.type === "paragraphs" && (
        <div className="space-y-2.5">
          {block.content.map((text, i) => (
            <p key={i} className="text-sm text-default/90 leading-relaxed font-sans">
              {text}
            </p>
          ))}
        </div>
      )}

      {/* Bullet list */}
      {block.type === "list" && (
        <ul className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-default/90 leading-relaxed font-sans">
              <span className="shrink-0 text-primary font-mono text-xs mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tips */}
      {isTips && (
        <div className="space-y-2">
          {block.items.map((tip, i) => (
            <div key={i} className="flex gap-3 text-sm text-default/90 leading-relaxed font-sans">
              <span className="shrink-0 text-base">{tip.icon}</span>
              <span>{tip.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
