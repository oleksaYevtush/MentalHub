import { useState } from 'react';
import Button from '../ui/Button';
import useTestStore from '../../store/useTestStore';
import { useLanguage } from '../../context/LanguageContext';

const labelsKeys = ['never', 'rarely', 'sometimes', 'often', 'always'];

export default function AnswerSlider({ onAnswer }) {
  const { t } = useLanguage();
  const [value, setValue] = useState(2);
  const { nextQuestion } = useTestStore();

  const handleNext = () => {
    onAnswer(value);
    nextQuestion();
  };

  return (
    <div>
      <input
        type="range"
        min={0}
        max={4}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-primary mb-3"
      />
      <div className="flex justify-between text-xs text-muted mb-6">
        {labelsKeys.map((k) => (
          <span key={k}>{t(`test.labels.${k}`)}</span>
        ))}
      </div>
      <div className="text-center text-primary font-medium mb-6">
        {t(`test.labels.${labelsKeys[value]}`)}
      </div>
      <Button onClick={handleNext} className="w-full">
        {t('test.next')}
      </Button>
    </div>
  );
}
