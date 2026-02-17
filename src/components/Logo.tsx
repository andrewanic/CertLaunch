import Image from 'next/image';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Shield with checkmark - matching Andrew's brand logo */}
      <svg className="h-9 w-9 flex-shrink-0" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shield-main" x1="8" y1="4" x2="36" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="40%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
          <linearGradient id="shield-highlight" x1="10" y1="6" x2="22" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0.25" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Main shield */}
        <path d="M22 3L7 10V19C7 29.5 13.5 38.5 22 40.5C30.5 38.5 37 29.5 37 19V10L22 3Z" fill="url(#shield-main)" />
        {/* Light highlight on left face */}
        <path d="M22 3L7 10V19C7 29.5 13.5 38.5 22 40.5V3Z" fill="url(#shield-highlight)" />
        {/* Checkmark */}
        <path d="M15 22L20 27L30 17" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Wordmark: Cert in dark navy, Launch in teal */}
      <span className="font-display font-bold text-[1.35rem] tracking-tight leading-none">
        <span className="text-[#1e293b]">Cert</span>
        <span className="text-[#0d9488]">Launch</span>
      </span>
    </div>
  );
}
