import clsx from "clsx";

export default function Card({ children, className }) {
  return (
    <div className={clsx("bg-surface rounded-xl border border-default p-6 shadow-xs transition-all duration-200", className)}>
      {children}
    </div>
  );
}
