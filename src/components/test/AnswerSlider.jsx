import { useState } from "react";
import useTestStore from "../../store/useTestStore";
import { useLanguage } from "../../context/LanguageContext";

const labelsKeys = ["never", "rarely", "sometimes", "often", "always"];

export default function AnswerSlider({ onAnswer }) {
  const { t } = useLanguage();
  const [value, setValue] = useState(null);
  const { nextQuestion } = useTestStore();

  const handleSelect = (idx) => {
    setValue(idx);
  };

  const handleNext = () => {
    if (value === null || value === undefined) return;
    onAnswer(value);
    nextQuestion();
  };

  return (
    <div className="space-y-6">
      {/* Tactile Choice Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
        {labelsKeys.map((k, idx) => {
          const isSelected = value === idx;
          return (
            <button
              key={k}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`p-3 rounded-xl border text-center text-xs font-mono transition-all cursor-pointer ${
                isSelected
                  ? "bg-primary text-white border-primary font-bold shadow-xs scale-102"
                  : "bg-surfaceSubtle hover:bg-border text-muted hover:text-default border-default"
              }`}
            >
              <div className="text-[10px] opacity-70 mb-1">{idx}</div>
              <div className="font-sans font-medium">{t(`test.labels.${k}`)}</div>
            </button>
          );
        })}
      </div>

      {/* Slider Indicator */}
      <div className="pt-2">
        <input
          type="range"
          min={0}
          max={4}
          value={value ?? 2}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-primary cursor-pointer"
        />
        <div className="flex justify-between text-[11px] font-mono text-muted mt-1">
          <span>{t("test.sliderNever")}</span>
          <span>{t("test.sliderAlways")}</span>
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={value === null || value === undefined}
        className={`w-full py-3.5 px-6 rounded-xl font-mono font-semibold text-sm transition-colors shadow-xs ${
          value === null || value === undefined
            ? "bg-surfaceSubtle text-muted border border-default cursor-not-allowed opacity-60"
            : "bg-primary hover:bg-primary-hover text-white cursor-pointer"
        }`}
      >
        {t("test.next")} →
      </button>
    </div>
  );
}
