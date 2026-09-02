import { create } from "zustand";
import { questions } from "../data/questions";

const useTestStore = create((set, get) => ({
  currentQuestion: 0,
  answers: [],
  isFinished: false,

  setAnswer: (index, value) => {
    const answers = [...get().answers];
    answers[index] = value;
    set({ answers });
  },

  nextQuestion: () => {
    const next = get().currentQuestion + 1;
    if (next >= questions.length) {
      set({ isFinished: true });
    } else {
      set({ currentQuestion: next });
    }
  },

  reset: () => set({ currentQuestion: 0, answers: [], isFinished: false }),
}));

export default useTestStore;
