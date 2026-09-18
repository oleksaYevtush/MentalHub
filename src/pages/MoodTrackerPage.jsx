import MoodCheckIn from "../components/tracker/MoodCheckIn";
import MoodChart from "../components/tracker/MoodChart";
import MoodHistory from "../components/tracker/MoodHistory";
import { useLanguage } from "../context/LanguageContext";

export default function MoodTrackerPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen px-4 sm:px-8 py-12 sm:py-16 paper-texture">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Intro */}
        <div className="pb-6 border-b border-default">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-muted uppercase tracking-widest">
            <span className="text-secondary font-bold">{t("tracker.tag")}</span>
            <span>•</span>
            <span>{t("tracker.contactWithSelf")}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-default tracking-tight">
            {t("tracker.heading")}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed font-sans">
            {t("tracker.description")}
          </p>
          <div className="mt-3 text-[11px] font-mono text-muted">
            {t("tracker.confidentiality")}
          </div>
        </div>

        <MoodCheckIn />
        <MoodChart />
        <MoodHistory />
      </div>
    </main>
  );
}
