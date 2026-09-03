import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SmoothScroll from './components/common/SmoothScroll';
import HomePage from './pages/HomePage';
import StressTestPage from './pages/StressTestPage';
import MoodTrackerPage from './pages/MoodTrackerPage';

export default function App() {
  return (
    <Layout>
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<StressTestPage />} />
        <Route path="/tracker" element={<MoodTrackerPage />} />
      </Routes>
    </Layout>
  );
}
