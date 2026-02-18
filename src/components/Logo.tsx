export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg className={`h-9 w-auto ${className}`} viewBox="0 0 220 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield */}
      <defs>
        <linearGradient id="shield-g1" x1="6" y1="2" x2="38" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6DD8BE" />
          <stop offset="50%" stopColor="#3BBFA0" />
          <stop offset="100%" stopColor="#1A8A7A" />
        </linearGradient>
        <linearGradient id="shield-g2" x1="6" y1="4" x2="22" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Shield body */}
      <path d="M22 2L6 10V20C6 30.5 13 38.5 22 41C31 38.5 38 30.5 38 20V10L22 2Z" fill="url(#shield-g1)" />
      {/* Left highlight */}
      <path d="M22 2L6 10V20C6 30.5 13 38.5 22 41V2Z" fill="url(#shield-g2)" />
      {/* Checkmark */}
      <path d="M14 22L20 28L31 16" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* "Cert" in dark navy */}
      <text x="46" y="30" fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" fontWeight="700" fontSize="26" fill="#172554">Cert</text>
      {/* "Launch" in teal */}
      <text x="102" y="30" fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" fontWeight="700" fontSize="26" fill="#0D9488">Launch</text>
    </svg>
  );
}
