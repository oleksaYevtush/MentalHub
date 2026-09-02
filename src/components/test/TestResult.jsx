import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import useTestStore from "../../store/useTestStore";
import { calculateStressLevel } from "../../utils/calculateStress";
import { useLanguage } from "../../context/LanguageContext";

export default function TestResult() {
  const { t } = useLanguage();
  const { answers, reset } = useTestStore();
  const { level, labelKey, adviceKey } = calculateStressLevel(answers);

  return (
    <Card className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t("test.resultTitle")}</h2>
      <Badge label={t(labelKey)} level={level} />
      <p className="text-gray-600 dark:text-gray-400 mt-6 mb-8 leading-relaxed">{t(adviceKey)}</p>
      <Button variant="outline" onClick={reset}>{t("test.retake")}</Button>
    </Card>
  );
}
