export default function Brand({ className = "" }: { className?: string }) {
  return (
    <span className={`text-lg font-semibold tracking-tight text-ink ${className}`}>
      FastPay
    </span>
  );
}
