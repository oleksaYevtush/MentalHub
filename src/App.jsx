import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import StressTestPage from "./pages/StressTestPage";
import MoodTrackerPage from "./pages/MoodTrackerPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<StressTestPage />} />
        <Route path="/tracker" element={<MoodTrackerPage />} />
      </Routes>
    </Layout>
  );
}
