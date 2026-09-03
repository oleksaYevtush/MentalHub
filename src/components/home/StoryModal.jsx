import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function StoryModal({ storyItem, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    window.__lenis?.stop();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
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
          className="absolute inset-0 bg-black/50 dark:bg-black/75 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal container */}
        <motion.div
          data-lenis-prevent
          className="relative z-10 bg-white text-default border border-purple-100/80 dark:bg-[#171424] dark:text-slate-100 dark:border-white/10 shadow-2xl rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        >
          {/* Header */}
          <div className="relative px-8 pt-8 pb-6 border-b border-purple-100/80 dark:border-white/10 bg-gradient-to-b from-purple-50/70 to-transparent dark:from-white/[0.05] dark:to-transparent shrink-0">
            {/* Ambient decorative quote mark */}
            <span className="absolute right-6 top-3 text-7xl font-serif text-primary/10 dark:text-white/5 select-none pointer-events-none">
              “
            </span>

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${storyItem.tagColor}`}
                >
                  {storyItem.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-default dark:text-white tracking-tight leading-snug">
                  {storyItem.story.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="shrink-0 text-muted hover:text-default hover:bg-black/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
                aria-label="Закрити"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Quote banner */}
            <div className="mt-4 p-4 rounded-2xl bg-purple-50/60 border border-purple-100/80 text-purple-900/90 dark:bg-white/[0.04] dark:border-white/10 dark:text-amber-200/90 italic text-base leading-relaxed">
              {storyItem.quote}
            </div>
          </div>

          {/* Scrollable Story Content */}
          <div className="overflow-y-auto flex-1 px-8 py-6 space-y-4 text-gray-700 dark:text-slate-300 text-[15px] sm:text-base leading-relaxed font-normal">
            {storyItem.story.paragraphs.map((p, index) => (
              <p key={index} className="text-gray-700 dark:text-slate-300/95">
                {p}
              </p>
            ))}

            {/* Closing thought */}
            {storyItem.story.closing && (
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50/50 to-transparent border-l-4 border-primary text-default font-medium dark:from-violet-950/40 dark:via-purple-950/30 dark:to-transparent dark:border-violet-400 dark:text-white text-base">
                ✨ {storyItem.story.closing}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-8 py-5 border-t border-purple-100/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.02] flex items-center justify-between shrink-0">
            <span className="text-xs text-muted dark:text-slate-400">
              Ти не один у своїх думках.
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary dark:bg-white/10 dark:hover:bg-white/20 dark:text-white text-sm font-semibold transition-all duration-200 cursor-pointer"
            >
              Закрити
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
