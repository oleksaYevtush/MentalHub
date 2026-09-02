import MoodCheckIn from "../components/tracker/MoodCheckIn";
import MoodChart from "../components/tracker/MoodChart";
import MoodHistory from "../components/tracker/MoodHistory";

export default function MoodTrackerPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      <MoodCheckIn />
      <MoodChart />
      <MoodHistory />
    </main>
  );
}
