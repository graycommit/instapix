export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
      </defs>
      <path
        d="M16 1 L27 10 L16 31 L5 10 Z"
        fill="url(#logo-gradient)"
      />
      <path
        d="M16 1 L27 10 L16 16 L5 10 Z"
        fill="white"
        fillOpacity="0.35"
      />
    </svg>
  );
}
