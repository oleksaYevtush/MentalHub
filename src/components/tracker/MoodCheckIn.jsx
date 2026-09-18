import { useState } from "react";
import EmojiScale from "./EmojiScale";
import useMoodStore from "../../store/useMoodStore";
import { useLanguage } from "../../context/LanguageContext";

const TAG_KEYS = [
  "siren",
  "insomnia",
  "talk",
  "rage",
  "brainFog",
  "faith",
  "blackout",
  "joy",
];

export default function MoodCheckIn() {
  const { locale, t } = useLanguage();
  const [mood, setMood] = useState(null);
  const [note, setNote] = useState("");
  const [selectedTagKeys, setSelectedTagKeys] = useState([]);
  const [isSavedRecently, setIsSavedRecently] = useState(false);
  const { addEntry } = useMoodStore();

  const toggleTag = (key) => {
    setSelectedTagKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSave = () => {
    if (!mood) return;
    const localizedTags = selectedTagKeys.map((k) => t(`tracker.tags.${k}`));
    const finalNote = localizedTags.length > 0
      ? `${localizedTags.join(" • ")}${note ? ` — ${note}` : ""}`
      : note;

    addEntry({ mood, note: finalNote, date: new Date().toISOString() });
    setMood(null);
    setNote("");
    setSelectedTagKeys([]);
    setIsSavedRecently(true);
    setTimeout(() => setIsSavedRecently(false), 3000);
  };

  const dateLocaleString = locale === "uk" ? "uk-UA" : locale === "de" ? "de-DE" : "en-US";

  return (
    <div className="bg-surface border border-default rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex items-center justify-between border-b border-default/70 pb-3 mb-5">
        <span className="text-xs font-mono text-muted uppercase">
          {t("tracker.newEntry")}
        </span>
        <span className="text-xs font-mono text-primary">
          {new Date().toLocaleDateString(dateLocaleString, { weekday: "short", day: "numeric", month: "short" })}
        </span>
      </div>

      <h2 className="text-lg sm:text-xl font-serif font-semibold text-default mb-4">
        {t("tracker.title")}
      </h2>

      {/* Emoji Scale */}
      <EmojiScale selected={mood} onSelect={setMood} />

      {/* Quick context tags */}
      <div className="mt-5">
        <div className="text-[11px] font-mono text-muted uppercase mb-2">
          {t("tracker.contextTitle")}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {TAG_KEYS.map((key) => {
            const isSelected = selectedTagKeys.includes(key);
            return (
              <button
                key={key}
                type="button"
                onClick={() => toggleTag(key)}
                className={`px-2.5 py-1 rounded-lg text-xs font-sans transition-all cursor-pointer ${
                  isSelected
                    ? "bg-primary/15 text-primary border border-primary/30 font-medium"
                    : "bg-surfaceSubtle hover:bg-border text-muted border border-default"
                }`}
              >
                {t(`tracker.tags.${key}`)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Note input */}
      <div className="mt-4">
        <textarea
          className="w-full border border-default rounded-xl p-3.5 text-sm text-default bg-surfaceSubtle resize-none placeholder:text-muted focus:outline-none focus:border-primary transition-colors font-sans"
          rows={3}
          placeholder={t("tracker.placeholder")}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      {/* Save Button */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          onClick={handleSave}
          disabled={!mood}
          className={`flex-1 py-3 px-6 rounded-xl font-mono font-semibold text-sm transition-all cursor-pointer ${
            mood
              ? "bg-primary hover:bg-primary-hover text-white shadow-xs"
              : "bg-surfaceSubtle text-muted border border-default cursor-not-allowed opacity-60"
          }`}
        >
          {t("tracker.save")}
        </button>

        {isSavedRecently && (
          <span className="text-xs font-mono text-primary animate-pulse">
            ✓ {t("tracker.saved")}
          </span>
        )}
      </div>
    </div>
  );
}
