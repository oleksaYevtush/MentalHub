import { useLanguage } from '../../context/LanguageContext';

const moods = [
  { value: 1, emoji: '😔', key: 'bad' },
  { value: 2, emoji: '😕', key: 'anxious' },
  { value: 3, emoji: '😐', key: 'normal' },
  { value: 4, emoji: '🙂', key: 'good' },
  { value: 5, emoji: '😊', key: 'great' },
];

export default function EmojiScale({ selected, onSelect }) {
  const { t } = useLanguage();

  return (
    <div className="flex justify-between gap-2">
      {moods.map((m) => (
        <button
          key={m.value}
          onClick={() => onSelect(m.value)}
          className={`flex flex-col items-center p-3 rounded-xl transition-all ${
            selected === m.value
              ? 'bg-primary/15 dark:bg-primary/25 scale-110'
              : 'hover:bg-border/50'
          }`}
        >
          <span className="text-3xl">{m.emoji}</span>
          <span className="text-xs text-muted mt-1">{t(`tracker.moods.${m.key}`)}</span>
        </button>
      ))}
    </div>
  );
}
