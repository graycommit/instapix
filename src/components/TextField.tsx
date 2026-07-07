import type { InputHTMLAttributes, ReactNode } from "react";

export default function TextField({
  id,
  label,
  required,
  icon,
  before,
  after,
  ...inputProps
}: {
  id: string;
  label: string;
  required?: boolean;
  icon?: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <div className="flex items-center gap-2.5 rounded-lg border border-hairline bg-white px-4 py-3 transition-colors focus-within:border-brand">
        {icon && <span className="shrink-0 text-neutral-400">{icon}</span>}
        {before}
        <input
          id={id}
          className="w-full min-w-0 bg-transparent text-ink placeholder:text-neutral-400 outline-none"
          {...inputProps}
        />
        {after}
      </div>
    </div>
  );
}
