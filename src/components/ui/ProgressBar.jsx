export default function ProgressBar({ value, max }) {
  const percent = Math.round((value / max) * 100);
  return (
    <div className="w-full bg-border rounded-full h-2 transition-colors duration-200">
      <div
        className="bg-primary h-2 rounded-full transition-all duration-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
