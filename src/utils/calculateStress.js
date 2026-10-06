export function calculateStressLevel(answers = []) {
  // Validate input
  if (!Array.isArray(answers) || answers.length === 0) {
    return {
      level: "low",
      labelKey: "test.stressLevels.low.label",
      adviceKey: "test.stressLevels.low.advice",
    };
  }

  // Filter valid numeric answers
  const validAnswers = answers.filter((value) => Number.isFinite(value));
  if (validAnswers.length === 0) {
    return {
      level: "low",
      labelKey: "test.stressLevels.low.label",
      adviceKey: "test.stressLevels.low.advice",
    };
  }

  // Calculate stress percentage
  const total = validAnswers.reduce((sum, a) => sum + Number(a), 0);
  const max = validAnswers.length * 4;
  const percent = max > 0 ? (total / max) * 100 : 0;

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
