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
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-600">
        {label} {required && <span className="text-teal-600">*</span>}
      </label>
      <div className="flex items-center gap-2.5 rounded-2xl bg-slate-100 px-4 py-3.5 transition-shadow focus-within:ring-2 focus-within:ring-teal-300/60">
        {icon && <span className="shrink-0 text-slate-400">{icon}</span>}
        {before}
        <input
          id={id}
          className="w-full min-w-0 bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
          {...inputProps}
        />
        {after}
      </div>
    </div>
  );
}
