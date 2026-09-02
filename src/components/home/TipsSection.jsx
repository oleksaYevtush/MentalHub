import TipCard from "./TipCard";
import StatCard from "./StatCard";
import { tips } from "../../data/tips";
import { useLanguage } from "../../context/LanguageContext";

export default function TipsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-[#F3EEFA] to-[#F7F5FA] dark:from-[#140F22] dark:to-[#191428] transition-colors duration-200">
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-16">
          <StatCard number="70%" label={t("stats.anxiety")} />
          <StatCard number="3.5M" label={t("stats.support")} />
          <StatCard number={t("stats.ptsdNumber")} label={t("stats.ptsd")} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{t("tips.heading")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
