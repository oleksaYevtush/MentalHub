import clsx from "clsx";

export default function Card({ children, className }) {
  return (
    <div className={clsx("bg-surface rounded-2xl shadow-md shadow-primary/5 border border-default p-6 transition-colors duration-200", className)}>
      {children}
    </div>
  );
}
