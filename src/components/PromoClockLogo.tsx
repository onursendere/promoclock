export default function PromoClockLogo({ size = 32, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Olive/green small circle top-right */}
        <circle cx="78" cy="18" r="8" fill="#8B9A6B" />
        {/* Main beige/tan circle */}
        <circle cx="46" cy="50" r="42" fill="#D4C5A9" />
        {/* Chevron arrow ">" */}
        <path
          d="M34 30 L58 50 L34 70"
          stroke="#4A4458"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {showText && (
        <span className="text-lg font-semibold tracking-tight">
          <span className="text-primary">Promo</span>
          <span className="text-foreground">Clock</span>
        </span>
      )}
    </span>
  );
}
