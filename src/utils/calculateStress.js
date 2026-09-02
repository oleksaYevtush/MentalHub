export function calculateStressLevel(answers) {
  const total = answers.reduce((sum, a) => sum + a, 0);
  const max = answers.length * 4;
  const percent = (total / max) * 100;

  if (percent < 33) {
    return {
      level: "low",
      labelKey: "test.stressLevels.low.label",
      adviceKey: "test.stressLevels.low.advice",
    };
  } else if (percent < 66) {
    return {
      level: "medium",
      labelKey: "test.stressLevels.medium.label",
      adviceKey: "test.stressLevels.medium.advice",
    };
  } else {
    return {
      level: "high",
      labelKey: "test.stressLevels.high.label",
      adviceKey: "test.stressLevels.high.advice",
    };
  }
}
