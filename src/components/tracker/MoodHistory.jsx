import Card from "../ui/Card";
import useMoodStore from "../../store/useMoodStore";
import { formatDate } from "../../utils/formatDate";
import { useLanguage } from "../../context/LanguageContext";

const emojis = { 1: "😔", 2: "😕", 3: "😐", 4: "🙂", 5: "😊" };

export default function MoodHistory() {
  const { locale, t } = useLanguage();
  const { entries } = useMoodStore();
  const recent = [...entries].reverse().slice(0, 5);

  if (recent.length === 0) return null;

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t("tracker.historyTitle")}</h2>
      <div className="space-y-3">
        {recent.map((e, i) => (
          <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
            <span className="text-2xl">{emojis[e.mood]}</span>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{formatDate(e.date, locale)}</div>
              {e.note && <div className="text-sm text-gray-700 dark:text-gray-300">{e.note}</div>}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
