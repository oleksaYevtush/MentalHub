import useTestStore from "../store/useTestStore";
import TestProgress from "../components/test/TestProgress";
import QuestionCard from "../components/test/QuestionCard";
import TestResult from "../components/test/TestResult";
import { useLanguage } from "../context/LanguageContext";

export default function StressTestPage() {
  const { t } = useLanguage();
  const { isFinished } = useTestStore();

  return (
    <main className="min-h-screen px-4 sm:px-8 py-12 sm:py-16 paper-texture">
      <div className="max-w-2xl mx-auto">
        {/* Intro banner */}
        {!isFinished && (
          <div className="mb-8 pb-6 border-b border-default">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-muted uppercase tracking-widest">
              <span className="text-secondary font-bold">{t("test.tag")}</span>
              <span>•</span>
              <span>{t("test.distressScreening")}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-default tracking-tight">
              {t("test.title")}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed font-sans">
              {t("test.subtitle")}
            </p>
          </div>
        )}

        <TestProgress />
        {isFinished ? <TestResult /> : <QuestionCard />}
      </div>
    </main>
  );
}
