export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Shield with checkmark - matching the brand logo */}
      <svg className="h-8 w-8 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield shape with gradient */}
        <defs>
          <linearGradient id="shield-grad" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="50%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
        </defs>
        <path d="M20 3L6 9.5V18C6 27.27 12.14 35.73 20 37.5C27.86 35.73 34 27.27 34 18V9.5L20 3Z" fill="url(#shield-grad)" />
        {/* White checkmark */}
        <path d="M14 20L18.5 24.5L27 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Wordmark: Cert in dark, Launch in teal */}
      <span className="font-display font-bold text-xl tracking-tight">
        <span className="text-neutral-800">Cert</span>
        <span className="text-teal-600">Launch</span>
      </span>
    </div>
  );
}
