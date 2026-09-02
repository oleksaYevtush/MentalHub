import Card from "../ui/Card";
import AnswerSlider from "./AnswerSlider";
import useTestStore from "../../store/useTestStore";
import { questions } from "../../data/questions";
import { useLanguage } from "../../context/LanguageContext";

export default function QuestionCard() {
  const { t } = useLanguage();
  const { currentQuestion, setAnswer } = useTestStore();
  const question = questions[currentQuestion];

  return (
    <Card>
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">{t(`test.questions.q${question.id}`)}</h2>
      <AnswerSlider onAnswer={(val) => setAnswer(currentQuestion, val)} />
    </Card>
  );
}
