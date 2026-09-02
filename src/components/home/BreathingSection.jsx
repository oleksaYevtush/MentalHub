import Card from "../ui/Card";
import BreathingExercise from "./BreathingExercise";
import { useLanguage } from "../../context/LanguageContext";

export default function BreathingSection() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-10 max-w-3xl mx-auto">
      <Card className="text-center bg-surface border border-primary/20 shadow-xl shadow-primary/5 p-6 md:p-8 relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-lg mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-2xl mb-3">
            🌬️
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-default mb-2">
            {t("breathingSection.title")}
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
            {t("breathingSection.description")}
          </p>

          <div className="bg-bg/60 backdrop-blur-sm rounded-2xl p-4 border border-border/80 shadow-inner">
            <BreathingExercise />
          </div>
        </div>
      </Card>
    </section>
  );
}
