import { useState } from "react";
import { motion } from "framer-motion";
import { getSymptoms } from "../../data/symptoms";
import { useLanguage } from "../../context/LanguageContext";
import SymptomModal from "./SymptomModal";

export default function SymptomsSection() {
  const { locale, t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const symptoms = getSymptoms(locale);

  return (
    <>
      <section id="symptoms-section" className="px-4 sm:px-8 py-16 sm:py-24 border-b border-default paper-texture">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-muted uppercase tracking-widest">
              <span className="text-secondary font-bold">{t("symptomsSection.tag")}</span>
              <span>•</span>
              <span>{t("symptomsSection.category")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-default tracking-tight">
              {t("symptomsSection.title")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
              {t("symptomsSection.subtitle")}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {symptoms.map((symptom, i) => (
              <motion.button
                key={symptom.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelected(symptom)}
                className="group text-left p-6 rounded-2xl bg-surface border border-default hover:border-primary/50 transition-all duration-200 cursor-pointer shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-default/70 pb-3 mb-4">
                    <span className="text-xs font-mono text-muted">
                      [ {t("symptomsSection.catalog")} #0{i + 1} ]
                    </span>
                    <span className="text-2xl">{symptom.icon}</span>
                  </div>

                  <h3 className="font-serif font-semibold text-lg sm:text-xl text-default mb-2 group-hover:text-primary transition-colors">
                    {symptom.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                    «{symptom.short}»
                  </p>
                </div>

                <div className="pt-3 border-t border-default/60 flex items-center justify-between text-xs font-mono text-primary group-hover:underline underline-offset-4">
                  <span>{t("symptomsSection.analysis")}</span>
                  <span>→</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <SymptomModal symptom={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
