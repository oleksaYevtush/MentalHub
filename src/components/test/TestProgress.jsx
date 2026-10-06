import ProgressBar from "../ui/ProgressBar";
import useTestStore from "../../store/useTestStore";
import { questions } from "../../data/questions";
import { useLanguage } from "../../context/LanguageContext";

export default function TestProgress() {
  const { t } = useLanguage();
  const { currentQuestion, isFinished } = useTestStore();

  if (isFinished) return null;

  // Calculate progress: show 1-based question number and percentage
  const answeredCount = Math.min(currentQuestion + 1, questions.length);
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-200">
        <span>{t("test.progress", { num: answeredCount, total: questions.length })}</span>
        <span>{progressPercent}%</span>
      </div>
      <ProgressBar value={answeredCount} max={questions.length} />
    </div>
  );
}
