import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function SymptomModal({ symptom, onClose }) {
  // Закриття по Escape
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Блокуємо скрол фону
  useEffect(() => {
    window.__lenis?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, []);

  if (!symptom) return null;

  return (
    <AnimatePresence>
      {/* Overlay */}
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

        {/* Modal */}
        <motion.div
          data-lenis-prevent
          className="relative z-10 bg-white dark:bg-[#171324] dark:border dark:border-white/10 dark:text-slate-100 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${symptom.color.split(" border")[0]} rounded-t-3xl px-8 pt-8 pb-6 border-b border-black/5 dark:border-white/10`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <span className={`text-4xl w-16 h-16 flex items-center justify-center rounded-2xl ${symptom.iconBg}`}>
                  {symptom.icon}
                </span>
                <div>
                  <h2 className={`text-2xl font-bold ${symptom.accentColor}`}>
                    {symptom.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-slate-400 mt-1 max-w-sm">
                    {symptom.short}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-white transition-colors rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/60 dark:hover:bg-white/10"
                aria-label="Закрити"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content blocks */}
          <div className="px-8 py-6 space-y-6">
            {/* Блок 1: Що це може означати */}
            <Block
              icon="🔍"
              title={symptom.meaning.title}
              badgeColor={symptom.badgeColor}
            >
              <ul className="space-y-3">
                {symptom.meaning.content.map((text, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 dark:text-slate-200 leading-relaxed text-sm">
                    <span className="mt-1 shrink-0 text-gray-300 dark:text-slate-600">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </Block>

            {/* Блок 2: Що можна зробити */}
            <Block
              icon="✅"
              title={symptom.actions.title}
              badgeColor={symptom.badgeColor}
            >
              <ul className="space-y-3">
                {symptom.actions.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 dark:text-slate-200 text-sm leading-relaxed">
                    <span className="shrink-0 text-lg leading-none mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </Block>

            {/* Блок 3: Коли звертатися */}
            <Block
              icon="🆘"
              title={symptom.help.title}
              badgeColor="bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"
              accent
            >
              <ul className="space-y-2">
                {symptom.help.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 dark:text-slate-200 text-sm leading-relaxed">
                    <span className="mt-1 shrink-0 text-red-400 dark:text-red-400">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-100 dark:border-red-900/40 text-sm text-red-700 dark:text-red-300 font-medium">
                📞 Гаряча лінія психологічної підтримки:{" "}
                <a href="tel:0800505101" className="underline hover:no-underline font-bold">
                  0 800 505 101
                </a>{" "}
                (безкоштовно)
              </div>
            </Block>
          </div>

          {/* Footer */}
          <div className="px-8 pb-8">
            <button
              onClick={onClose}
              className={`w-full py-3 rounded-2xl font-semibold transition-all text-sm ${symptom.badgeColor} hover:opacity-85`}
            >
              Зрозуміло, дякую
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Block({ icon, title, badgeColor, accent = false, children }) {
  return (
    <div className={`rounded-2xl p-5 ${accent ? "bg-red-50/50 border border-red-100 dark:bg-red-950/20 dark:border-red-900/30" : "bg-gray-50/80 border border-gray-100 dark:bg-white/[0.04] dark:border-white/[0.08]"}`}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{icon}</span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
