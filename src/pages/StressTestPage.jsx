import useTestStore from '../store/useTestStore';
import TestProgress from '../components/test/TestProgress';
import QuestionCard from '../components/test/QuestionCard';
import TestResult from '../components/test/TestResult';

export default function StressTestPage() {
  const { isFinished } = useTestStore();

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <TestProgress />
      {isFinished ? <TestResult /> : <QuestionCard />}
    </main>
  );
}
