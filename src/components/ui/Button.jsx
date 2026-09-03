import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        'rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer active:scale-95',
        size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm',
        variant === 'primary' &&
          'bg-primary text-white hover:bg-primary-hover shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35',
        variant === 'outline' &&
          'border border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
