const colors = {
  low: "bg-periwinkle/20 text-atlantis-dark border border-periwinkle/40 dark:bg-periwinkle/20 dark:text-periwinkle dark:border-periwinkle/30",
  medium: "bg-verbena/20 text-verbena-dark border border-verbena/40 dark:bg-verbena/20 dark:text-phlox dark:border-verbena/40",
  high: "bg-phthalo/10 text-phthalo border border-phthalo/30 dark:bg-phlox/25 dark:text-phlox dark:border-phlox/50 font-bold",
};

export default function Badge({ label, level }) {
  return (
    <span className={`px-3.5 py-1 rounded-full text-xs font-mono tracking-wide ${colors[level] || "bg-surfaceSubtle text-default border border-default"}`}>
      {label}
    </span>
  );
}
