import TipCard from "./TipCard";
import StatCard from "./StatCard";
import { tips } from "../../data/tips";
import { useLanguage } from "../../context/LanguageContext";

export default function TipsSection() {
  const { t } = useLanguage();

  return (
    <section id="tips-section" className="px-4 sm:px-8 py-16 sm:py-24 border-b border-default paper-texture">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-muted uppercase tracking-widest">
            <span className="text-secondary font-bold">{t("tipsSection.tag")}</span>
            <span>•</span>
            <span>{t("tipsSection.category")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-default tracking-tight">
            {t("tipsSection.title")}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
            {t("tipsSection.subtitle")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          <StatCard
            number="70%"
            label={t("stats.anxiety")}
            context={t("stats.anxietyContext")}
          />
          <StatCard
            number="3.5M+"
            label={t("stats.support")}
            context={t("stats.supportContext")}
          />
          <StatCard
            number={t("stats.ptsdNumber")}
            label={t("stats.ptsd")}
            context={t("stats.ptsdContext")}
          />
        </div>

        {/* Tips / Protocols Grid */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-default">
            {t("tips.heading")}
          </h3>
          <span className="text-xs font-mono text-muted">
            {t("tipsSection.basicTools")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <TipCard
              key={tip.id}
              id={tip.id}
              icon={tip.icon}
              title={t(`tips.t${tip.id}.title`)}
              description={t(`tips.t${tip.id}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
