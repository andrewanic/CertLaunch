export default function Logo({ className = 'h-8' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Shield icon */}
      <svg className="h-8 w-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L4 7.5V15C4 22.18 9.12 28.82 16 30.5C22.88 28.82 28 22.18 28 15V7.5L16 2Z" fill="#0D9488" />
        <path d="M13 16.5L15 18.5L20 13.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Wordmark */}
      <span className="font-display font-semibold text-xl tracking-tight">
        <span className="text-neutral-800">Cert</span>
        <span className="text-brand-600">Launch</span>
      </span>
    </div>
  );
}
