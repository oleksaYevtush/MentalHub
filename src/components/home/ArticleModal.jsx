import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function ArticleModal({ item, onClose }) {
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

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal panel */}
        <motion.div
          data-lenis-prevent
          className="relative z-10 bg-white dark:bg-[#171324] dark:border dark:border-white/10 dark:text-slate-100 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden"
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 24 }}
          transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        >
          {/* Sticky header */}
          <div
            className={`bg-gradient-to-br ${item.headerGradient} px-8 pt-8 pb-6 shrink-0 border-b border-black/5 dark:border-white/10`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  className={`text-3xl w-14 h-14 flex items-center justify-center rounded-2xl shrink-0 ${item.iconBg}`}
                >
                  {item.icon}
                </span>
                <div>
                  <h2 className={`text-2xl font-bold leading-tight ${item.accentColor}`}>
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">{item.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-white transition-colors rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/60 dark:hover:bg-white/10"
                aria-label="Закрити"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Intro */}
            <p
              className={`mt-5 text-sm leading-relaxed font-medium ${item.accentColor} bg-white/60 dark:bg-white/[0.06] rounded-xl px-4 py-3 border border-black/5 dark:border-white/10`}
            >
              {item.article.intro}
            </p>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1 px-8 py-6 space-y-5">
            {item.article.blocks.map((block, i) => (
              <ContentBlock key={i} block={block} badgeColor={item.badgeColor} />
            ))}
          </div>

          {/* Footer */}
          <div className="shrink-0 px-8 py-5 border-t border-gray-100 dark:border-white/10 bg-gray-50/60 dark:bg-white/[0.02]">
            <button
              onClick={onClose}
              className={`w-full py-3 rounded-2xl font-semibold text-sm transition-all ${item.badgeColor} hover:opacity-85`}
            >
              Зрозуміло
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ContentBlock({ block, badgeColor }) {
  const wrapperClass =
    block.type === 'tips'
      ? 'bg-green-50/70 border border-green-100 dark:bg-emerald-950/25 dark:border-emerald-900/40'
      : 'bg-gray-50/80 border border-gray-100 dark:bg-white/[0.04] dark:border-white/[0.08]';

  return (
    <div className={`rounded-2xl p-5 ${wrapperClass}`}>
      {/* Block label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-base">{block.icon}</span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>
          {block.label}
        </span>
      </div>

      {/* Paragraphs */}
      {block.type === 'paragraphs' && (
        <div className="space-y-3">
          {block.content.map((text, i) => (
            <p key={i} className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      )}

      {/* Bullet list */}
      {block.type === 'list' && (
        <ul className="space-y-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm text-gray-700 dark:text-slate-200 leading-relaxed"
            >
              <span className="mt-1 shrink-0 text-gray-300 dark:text-slate-600 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tips with icons */}
      {block.type === 'tips' && (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm text-gray-700 dark:text-slate-200 leading-relaxed"
            >
              <span className="shrink-0 text-lg leading-none mt-0.5">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
