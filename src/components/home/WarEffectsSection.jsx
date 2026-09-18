import { useState } from "react";
import { motion } from "framer-motion";
import { getWarEffects } from "../../data/warEffects";
import { useLanguage } from "../../context/LanguageContext";
import ArticleModal from "./ArticleModal";

const CARD_THEMES = [
  {
    name: "Phlox",
    colorDot: "#CAA9F3",
    border: "border-phlox/40 hover:border-phlox",
    badge: "bg-phlox/25 text-phlox-dark dark:text-phlox border border-phlox/50",
    textHover: "group-hover:text-verbena dark:group-hover:text-phlox",
    linkText: "text-verbena dark:text-phlox",
  },
  {
    name: "Verbena",
    colorDot: "#B37AD4",
    border: "border-verbena/40 hover:border-verbena",
    badge: "bg-verbena/20 text-verbena-dark dark:text-phlox border border-verbena/50",
    textHover: "group-hover:text-verbena dark:group-hover:text-phlox",
    linkText: "text-verbena dark:text-verbena",
  },
  {
    name: "Periwinkle",
    colorDot: "#7997E6",
    border: "border-periwinkle/40 hover:border-periwinkle",
    badge: "bg-periwinkle/20 text-periwinkle-dark dark:text-periwinkle border border-periwinkle/50",
    textHover: "group-hover:text-atlantis dark:group-hover:text-periwinkle",
    linkText: "text-atlantis dark:text-periwinkle",
  },
  {
    name: "Atlantis",
    colorDot: "#206ABC",
    border: "border-atlantis/40 hover:border-atlantis",
    badge: "bg-atlantis/20 text-atlantis-dark dark:text-atlantis border border-atlantis/50",
    textHover: "group-hover:text-atlantis dark:group-hover:text-atlantis",
    linkText: "text-atlantis dark:text-atlantis",
  },
  {
    name: "Phthalo",
    colorDot: "#0E155E",
    border: "border-phthalo/30 dark:border-periwinkle/40 hover:border-atlantis",
    badge: "bg-phthalo/10 dark:bg-phlox/20 text-phthalo dark:text-phlox border border-phthalo/30 dark:border-phlox/40",
    textHover: "group-hover:text-atlantis dark:group-hover:text-phlox",
    linkText: "text-atlantis dark:text-periwinkle",
  },
  {
    name: "Bioluminescent",
    colorDot: "#CAA9F3",
    border: "border-verbena/40 hover:border-phlox",
    badge: "bg-gradient-to-r from-atlantis/20 via-verbena/20 to-phlox/20 text-verbena-dark dark:text-phlox border border-verbena/40",
    textHover: "group-hover:text-verbena dark:group-hover:text-phlox",
    linkText: "text-verbena dark:text-phlox",
  },
];

export default function WarEffectsSection() {
  const { locale, t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const effects = getWarEffects(locale);

  return (
    <>
      <section id="war-effects" className="px-4 sm:px-8 py-16 sm:py-24 border-b border-periwinkle/30 bg-surfaceSubtle/70 transition-colors duration-200 paper-texture">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-muted uppercase tracking-widest">
              <span className="text-verbena font-bold">{t("warEffectsSection.tag")}</span>
              <span>•</span>
              <span className="text-atlantis font-medium">{t("warEffectsSection.biochem")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-default tracking-tight">
              {t("warEffectsSection.title")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
              {t("warEffectsSection.subtitle")}
            </p>
          </div>

          {/* Atlas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {effects.map((item, i) => {
              const theme = CARD_THEMES[i % CARD_THEMES.length];
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelected(item)}
                  className={`group text-left p-6 rounded-2xl bg-surface border ${theme.border} transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-periwinkle/30 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: theme.colorDot }}
                        />
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${theme.badge}`}>
                          № 0{i + 1}
                        </span>
                      </div>
                      <span className="text-2xl">{item.icon}</span>
                    </div>

                    <h3 className={`font-serif font-semibold text-lg sm:text-xl text-default mb-2 ${theme.textHover} transition-colors`}>
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className={`pt-3 border-t border-periwinkle/30 flex items-center justify-between text-xs font-mono font-semibold ${theme.linkText} group-hover:underline underline-offset-4`}>
                    <span>{t("warEffectsSection.explore")}</span>
                    <span>→</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Informational Callout */}
          <div className="mt-10 p-5 rounded-xl bg-surface border border-periwinkle/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩺</span>
              <p className="text-xs sm:text-sm text-muted">
                <strong className="text-default font-semibold">{t("warEffectsSection.reminderTitle")}:</strong>{" "}
                {t("warEffectsSection.reminderText")}
              </p>
            </div>
            <a
              href="tel:0800505101"
              className="whitespace-nowrap px-4 py-2 rounded-lg bg-gradient-to-r from-atlantis to-verbena hover:opacity-90 text-xs font-mono font-bold text-white shadow-xs transition-all"
            >
              {t("warEffectsSection.consultation")}
            </a>
          </div>
        </div>
      </section>

      {/* Article modal */}
      {selected && (
        <ArticleModal item={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
