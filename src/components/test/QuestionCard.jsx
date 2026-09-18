import AnswerSlider from "./AnswerSlider";
import useTestStore from "../../store/useTestStore";
import { questions } from "../../data/questions";
import { useLanguage } from "../../context/LanguageContext";

export default function QuestionCard() {
  const { t } = useLanguage();
  const { currentQuestion, setAnswer } = useTestStore();
  const question = questions[currentQuestion];

  return (
    <div className="bg-surface border border-default rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex items-center justify-between border-b border-default/70 pb-3 mb-6">
        <span className="text-xs font-mono text-muted">
          {t("test.questionMeta", { current: currentQuestion + 1, total: questions.length })}
        </span>
        <span className="text-xs font-mono text-primary font-semibold">
          {t("test.assessment")}
        </span>
      </div>

      <h2 className="text-lg sm:text-xl font-serif font-semibold text-default leading-relaxed mb-8">
        {t(`test.questions.q${question.id}`)}
      </h2>

      <AnswerSlider onAnswer={(val) => setAnswer(currentQuestion, val)} />
    </div>
  );
}
