import clsx from "clsx";

export default function TechBadge({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "px-3 py-1 text-xs font-mono font-medium rounded-full",
        "bg-[rgba(212,160,23,0.08)] text-gold-500 border border-[rgba(212,160,23,0.3)]",
        "hover:bg-[rgba(212,160,23,0.2)] hover:-translate-y-[2px] transition-all duration-300",
        className,
      )}
    >
      {name}
    </span>
  );
}
