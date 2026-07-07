export default function PrimaryButton({
  children,
  disabled,
  onClick,
  icon,
  type = "button",
  className = "",
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-brand-light py-3.5 font-semibold text-white shadow-sm transition-opacity disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
