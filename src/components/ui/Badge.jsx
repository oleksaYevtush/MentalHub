const colors = {
  low: 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  medium: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400',
  high: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400',
};

export default function Badge({ label, level }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${colors[level] || 'bg-border text-default dark:text-muted'}`}
    >
      {label}
    </span>
  );
}
