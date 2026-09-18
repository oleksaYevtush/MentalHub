import Badge from "../ui/Badge";
import useTestStore from "../../store/useTestStore";
import { calculateStressLevel } from "../../utils/calculateStress";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

export default function TestResult() {
  const { t } = useLanguage();
  const { answers, reset } = useTestStore();
  const { level, labelKey, adviceKey } = calculateStressLevel(answers);

  return (
    <div className="bg-surface border border-default rounded-2xl p-6 sm:p-10 shadow-xs text-left">
      <div className="flex items-center justify-between border-b border-default/70 pb-4 mb-6">
        <span className="text-xs font-mono text-muted uppercase">
          {t("test.resultTag")}
        </span>
        <span className="text-xs font-mono text-muted">
          {t("test.localAnalysis")}
        </span>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-default mb-3">
          {t("test.resultTitle")}
        </h2>
        <div className="inline-block">
          <Badge label={t(labelKey)} level={level} />
        </div>
      </div>

      <div className="p-5 rounded-xl bg-surfaceSubtle border border-default mb-8">
        <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-2">
          {t("test.interpretationTitle")}
        </h3>
        <p className="text-sm sm:text-base text-default/90 leading-relaxed font-sans">
          {t(adviceKey)}
        </p>
      </div>

      {/* Suggested Steps */}
      <div className="space-y-4 mb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-muted font-bold">
          {t("test.nextStepsTitle")}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
          <Link
            to="/#breathing-section"
            className="p-3.5 rounded-xl bg-surface hover:bg-surfaceSubtle border border-default transition-colors block"
          >
            <div className="font-semibold text-default mb-1">{t("test.stepBreathingTitle")}</div>
            <div className="text-muted">{t("test.stepBreathingDesc")}</div>
          </Link>
          <Link
            to="/tracker"
            className="p-3.5 rounded-xl bg-surface hover:bg-surfaceSubtle border border-default transition-colors block"
          >
            <div className="font-semibold text-default mb-1">{t("test.stepTrackerTitle")}</div>
            <div className="text-muted">{t("test.stepTrackerDesc")}</div>
          </Link>
        </div>
      </div>

      {/* Emergency reminder if high */}
      {level === "high" && (
        <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/30 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="font-semibold text-xs sm:text-sm text-secondary">
              {t("test.highLevelWarning")}
            </div>
            <div className="text-xs text-muted">
              {t("test.highLevelText")}
            </div>
          </div>
          <a
            href="tel:0800505101"
            className="px-3.5 py-2 rounded-lg bg-secondary text-white font-mono text-xs font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            0 800 505 101
          </a>
        </div>
      )}

      {/* Actions */}
      <div className="pt-4 border-t border-default flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={reset}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surfaceSubtle hover:bg-border text-default border border-default text-xs font-mono font-medium transition-colors cursor-pointer"
        >
          {t("test.retake")}
        </button>
        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-mono font-semibold transition-colors text-center"
        >
          {t("test.backHome")}
        </Link>
      </div>
    </div>
  );
}
