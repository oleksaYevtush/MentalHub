import { useLanguage } from "../../context/LanguageContext";

const moods = [
  { value: 1, emoji: "🌑" },
  { value: 2, emoji: "🌧️" },
  { value: 3, emoji: "☁️" },
  { value: 4, emoji: "🌤️" },
  { value: 5, emoji: "☀️" },
];

export default function EmojiScale({ selected, onSelect }) {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
      {moods.map((m) => {
        const isSelected = selected === m.value;
        return (
          <button
            key={m.value}
            type="button"
            onClick={() => onSelect(m.value)}
            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border text-center transition-all cursor-pointer ${
              isSelected
                ? "bg-primary text-white border-primary shadow-xs font-semibold scale-102"
                : "bg-surfaceSubtle hover:bg-border text-muted hover:text-default border-default"
            }`}
          >
            <span className="text-2xl sm:text-3xl mb-1.5">{m.emoji}</span>
            <span className="text-[11px] font-mono leading-tight">
              {t(`tracker.moodScale.${m.value}`)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
