import useMoodStore from "../../store/useMoodStore";
import { formatDate } from "../../utils/formatDate";
import { useLanguage } from "../../context/LanguageContext";

const moodEmojis = {
  1: "🌑",
  2: "🌧️",
  3: "☁️",
  4: "🌤️",
  5: "☀️",
};

export default function MoodHistory() {
  const { locale, t } = useLanguage();
  const { entries } = useMoodStore();
  const recent = [...entries].reverse().slice(0, 8);

  if (recent.length === 0) return null;

  return (
    <div className="bg-surface border border-default rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex items-center justify-between border-b border-default/70 pb-3 mb-6">
        <span className="text-xs font-mono text-muted uppercase">
          {t("tracker.archiveTag")}
        </span>
        <span className="text-xs font-mono text-muted">
          {t("tracker.totalEntries", { count: entries.length })}
        </span>
      </div>

      <h2 className="text-lg sm:text-xl font-serif font-semibold text-default mb-4">
        {t("tracker.historyTitle")}
      </h2>

      <div className="space-y-3">
        {recent.map((e, i) => {
          const emoji = moodEmojis[e.mood] || "📝";
          const label = t(`tracker.moodLabels.${e.mood}`) || t("tracker.moodLabels.default");
          return (
            <div
              key={i}
              className="p-4 rounded-xl bg-surfaceSubtle border border-default flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-lg bg-surface border border-default flex items-center justify-center text-xl shrink-0">
                {emoji}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-default">
                    {label}
                  </span>
                  <span className="text-[11px] font-mono text-muted">
                    {formatDate(e.date, locale)}
                  </span>
                </div>
                {e.note && (
                  <p className="text-xs sm:text-sm text-default/90 font-sans leading-relaxed break-words">
                    {e.note}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
