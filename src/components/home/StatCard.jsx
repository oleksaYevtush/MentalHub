export default function StatCard({ number, label, context }) {
  return (
    <div className="p-6 rounded-2xl bg-surface border border-default text-left flex flex-col justify-between shadow-xs">
      <div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight mb-2">
          {number}
        </div>
        <div className="text-xs sm:text-sm font-medium text-default leading-snug">
          {label}
        </div>
      </div>
      {context && (
        <div className="mt-4 pt-3 border-t border-default/70 text-[11px] font-mono text-muted">
          {context}
        </div>
      )}
    </div>
  );
}
