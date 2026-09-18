import BreathingExercise from "./BreathingExercise";
import { useLanguage } from "../../context/LanguageContext";

export default function BreathingSection() {
  const { t } = useLanguage();

  return (
    <section id="breathing-section" className="px-4 sm:px-8 py-16 sm:py-24 border-b border-default paper-texture">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-3 text-xs font-mono text-muted uppercase tracking-widest">
            <span className="text-secondary font-bold">{t("breathingSection.tag")}</span>
            <span>•</span>
            <span>{t("breathingSection.neuroregulation")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-default tracking-tight">
            {t("breathingSection.title")}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed font-sans">
            {t("breathingSection.description")}
          </p>
        </div>

        {/* Breathing Exercise Core Container */}
        <div className="bg-surface rounded-2xl border border-default p-6 sm:p-10 shadow-xs">
          <BreathingExercise />
        </div>
      </div>
    </section>
  );
}
