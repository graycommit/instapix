export default function Brand({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`aspect-[471/101] overflow-hidden ${className}`}>
      <img
        src="/logo.png"
        alt="FastPay"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
