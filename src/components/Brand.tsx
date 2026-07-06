import Logo from "./Logo";

export default function Brand({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo className="h-7 w-7" />
      <span className="text-lg">
        <span className="font-bold text-zinc-900">Fast</span>
        <span className="font-normal text-teal-500">Pay</span>
      </span>
    </div>
  );
}
