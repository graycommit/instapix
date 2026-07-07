export default function SignalBadge() {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-teal-200 bg-white shadow-sm">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-200 opacity-40" />
      <svg viewBox="0 0 24 24" fill="none" className="relative h-6 w-6 text-teal-600">
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        <path
          d="M8.8 9.6a3.2 3.2 0 000 4.8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M6.4 7.2a6.4 6.4 0 000 9.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M15.2 9.6a3.2 3.2 0 010 4.8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M17.6 7.2a6.4 6.4 0 010 9.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
