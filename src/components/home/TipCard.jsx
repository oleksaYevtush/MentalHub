import { useLanguage } from "../../context/LanguageContext";

export default function TipCard({ id, title, description, icon }) {
  const { t } = useLanguage();

  return (
    <div className="p-6 rounded-2xl bg-surface border border-default flex flex-col justify-between h-full shadow-xs hover:border-primary/50 transition-all duration-200">
      <div>
        <div className="flex items-center justify-between border-b border-default/70 pb-3 mb-4">
          <span className="text-xs font-mono text-muted">
            [ {t("tipsSection.protocol")} #{id} ]
          </span>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="font-serif font-semibold text-lg sm:text-xl text-default mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-default/60 flex items-center gap-2 text-xs font-mono text-primary">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span>{t("tipsSection.practice")}</span>
      </div>
    </div>
  );
}
