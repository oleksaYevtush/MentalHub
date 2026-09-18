import clsx from "clsx";

export default function Button({ children, variant = "primary", size = "md", className, ...props }) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-periwinkle/40 cursor-pointer active:scale-[0.98] select-none whitespace-nowrap",
        size === "sm" && "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
        size === "md" && "px-5 py-2.5 text-sm rounded-xl gap-2",
        size === "lg" && "px-7 py-3.5 text-base rounded-xl gap-2.5 font-semibold",
        variant === "primary" &&
          "bg-gradient-to-r from-atlantis via-atlantis to-verbena hover:from-phthalo hover:via-atlantis hover:to-verbena text-white shadow-md shadow-atlantis/25 border border-white/20 dark:from-atlantis dark:via-periwinkle dark:to-verbena dark:text-white dark:border-white/10",
        variant === "secondary" &&
          "bg-gradient-to-r from-verbena to-phlox text-phthalo font-bold hover:brightness-105 shadow-sm shadow-verbena/25 border border-verbena/30",
        variant === "outline" &&
          "border border-periwinkle/40 bg-surface hover:bg-periwinkle/10 text-default hover:border-atlantis hover:text-atlantis dark:hover:text-phlox dark:border-periwinkle/30 shadow-xs",
        variant === "ghost" &&
          "text-muted hover:text-atlantis dark:hover:text-phlox hover:bg-periwinkle/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
