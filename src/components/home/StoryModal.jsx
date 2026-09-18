import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function StoryModal({ storyItem, onClose }) {
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

  if (!storyItem) return null;

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

        {/* Modal container */}
        <motion.div
          data-lenis-prevent
          className="relative z-10 bg-surface text-default border border-default shadow-xl rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden paper-texture"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
        >
          {/* Header */}
          <div className="relative px-6 sm:px-8 pt-7 pb-6 border-b border-default bg-surfaceSubtle shrink-0">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-block text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-surface border border-default text-muted">
                  {storyItem.tag} • {t("silentStoriesSection.testimony")}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-default tracking-tight leading-snug">
                  {storyItem.story.title}
                </h3>
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

            {/* Pull Quote */}
            <div className="mt-4 p-4 rounded-xl bg-surface border border-default text-default italic font-serif text-base sm:text-lg leading-relaxed">
              «{storyItem.quote}»
            </div>
          </div>

          {/* Scrollable Story Content */}
          <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-6 space-y-4 text-default text-[15px] sm:text-base leading-relaxed">
            {storyItem.story.paragraphs.map((p, index) => (
              <p key={index} className="text-default/90 font-sans">
                {p}
              </p>
            ))}

            {/* Closing thought */}
            {storyItem.story.closing && (
              <div className="mt-6 p-4 rounded-xl bg-surfaceSubtle border border-default text-default text-sm sm:text-base font-serif italic">
                {storyItem.story.closing}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 sm:px-8 py-4 border-t border-default bg-surface flex items-center justify-between shrink-0">
            <span className="text-xs font-mono text-muted">
              {t("common.validFeelings")}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-surfaceSubtle hover:bg-surface text-default border border-default text-xs font-mono font-medium transition-all duration-150 cursor-pointer"
            >
              {t("common.closeRecord")}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
