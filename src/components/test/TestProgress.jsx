import ProgressBar from "../ui/ProgressBar";
import useTestStore from "../../store/useTestStore";
import { questions } from "../../data/questions";
import { useLanguage } from "../../context/LanguageContext";

export default function TestProgress() {
  const { t } = useLanguage();
  const { currentQuestion, isFinished } = useTestStore();

  if (isFinished) return null;

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-200">
        <span>{t("test.progress", { num: currentQuestion + 1, total: questions.length })}</span>
        <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
      </div>
      <ProgressBar value={currentQuestion} max={questions.length} />
    </div>
  );
}
