function iconClassName(className) {
  return `fill-none stroke-current ${className}`.trim();
}

export function BedIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.8">
      <path d="M3 12h18" />
      <path d="M4 12V8h7a3 3 0 0 1 3 3v1" />
      <path d="M14 12V9h4a3 3 0 0 1 3 3" />
      <path d="M5 12v5" />
      <path d="M19 12v5" />
    </svg>
  );
}

export function CrownIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.8">
      <path d="m4 18 2-10 6 5 6-5 2 10Z" />
      <path d="M8 18h8" />
      <path d="M6 8a1 1 0 1 0 0-.01" />
      <path d="M12 13a1 1 0 1 0 0-.01" />
      <path d="M18 8a1 1 0 1 0 0-.01" />
    </svg>
  );
}

export function GemIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.8">
      <path d="M7 4h10l4 5-9 11L3 9Z" />
      <path d="M7 4 5 9h14l-2-5" />
      <path d="m10 4 2 5 2-5" />
      <path d="m12 9-1 11" />
    </svg>
  );
}

export function WifiIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.6">
      <path d="M3 9a15 15 0 0 1 18 0" />
      <path d="M6 13a10 10 0 0 1 12 0" />
      <path d="M9.5 16.5a5 5 0 0 1 5 0" />
      <path d="M12 20h.01" />
    </svg>
  );
}

export function LotusIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.6">
      <path d="M12 20c-3.5 0-6-2.8-6-6.5 2.5 0 4.5 1 6 3.2 1.5-2.2 3.5-3.2 6-3.2 0 3.7-2.5 6.5-6 6.5Z" />
      <path d="M12 16c-2.5-2-3.6-4.8-3.3-8.5 2.2.8 3.3 2.7 3.3 5.7 0-3 1.1-4.9 3.3-5.7.3 3.7-.8 6.5-3.3 8.5Z" />
      <path d="M4 16c2.7 0 4.8.8 6.3 2.5" />
      <path d="M20 16c-2.7 0-4.8.8-6.3 2.5" />
    </svg>
  );
}

export function PoolIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.6">
      <path d="M8 10a4 4 0 1 1 8 0v3" />
      <path d="M12 6v10" />
      <path d="M4 18c1 .9 2 .9 3 0s2-.9 3 0 2 .9 3 0 2-.9 3 0 2 .9 4 0" />
      <path d="M4 14c1 .9 2 .9 3 0s2-.9 3 0 2 .9 3 0 2-.9 3 0 2 .9 4 0" />
    </svg>
  );
}

export function DumbbellIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.6">
      <path d="M4 9v6" />
      <path d="M7 7v10" />
      <path d="M17 7v10" />
      <path d="M20 9v6" />
      <path d="M7 12h10" />
      <path d="M2 10h2v4H2z" />
      <path d="M20 10h2v4h-2z" />
    </svg>
  );
}

export function SnowIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M12 2v20" />
      <path d="m4.93 6 14.14 12" />
      <path d="M4.93 18 19.07 6" />
      <path d="m8 4 4 2 4-2" />
      <path d="m8 20 4-2 4 2" />
    </svg>
  );
}

export function MiniBarIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M7 4h10v16H7z" />
      <path d="M7 10h10" />
      <path d="M10 7h4" />
    </svg>
  );
}

export function WorkspaceIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M4 6h16v9H4z" />
      <path d="M8 20h8" />
      <path d="M12 15v5" />
    </svg>
  );
}

export function BathIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M4 12h16v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z" />
      <path d="M8 12V8a2 2 0 0 1 4 0v4" />
      <path d="M7 18v2" />
      <path d="M17 18v2" />
    </svg>
  );
}

export function BellhopIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M5 15h14" />
      <path d="M7 15a5 5 0 0 1 10 0" />
      <path d="M12 5h.01" />
      <path d="M4 19h16" />
    </svg>
  );
}

export function BalconyIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M3 21h18" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

export function ViewIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M2 17 12 7l10 10" />
      <path d="M4 17h16" />
      <path d="M7 12h10" />
    </svg>
  );
}

export function PianoIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M4 5h16v14H4z" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M16 5v14" />
    </svg>
  );
}

export function ButlerIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M12 12a4 4 0 1 0-4-4" />
      <path d="M8 12h8" />
      <path d="M6 20a6 6 0 0 1 12 0" />
    </svg>
  );
}

export function PatioIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M4 11h16" />
      <path d="M6 11V6h12v5" />
      <path d="M7 22v-6" />
      <path d="M17 22v-6" />
      <path d="M4 16h16" />
    </svg>
  );
}

export function ShowerIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M7 6a5 5 0 0 1 10 0v2" />
      <path d="M5 8h14" />
      <path d="M8 12v1" />
      <path d="M12 12v2" />
      <path d="M16 12v1" />
      <path d="M10 16v1" />
      <path d="M14 16v2" />
    </svg>
  );
}

export function GardenIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M12 20v-8" />
      <path d="M12 12c-2.5 0-4.5-2-4.5-4.5C10 7.5 12 9 12 12Z" />
      <path d="M12 12c2.5 0 4.5-2 4.5-4.5C14 7.5 12 9 12 12Z" />
      <path d="M8 20h8" />
    </svg>
  );
}

export function DiningIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M6 3v8" />
      <path d="M4 3v4" />
      <path d="M8 3v4" />
      <path d="M6 11v10" />
      <path d="M16 3v18" />
      <path d="M16 3c2 0 4 2 4 5h-4" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M12 3 5 6v6c0 4.5 2.9 7.9 7 9 4.1-1.1 7-4.5 7-9V6Z" />
      <path d="M9.5 12.5 11 14l3.5-3.5" />
    </svg>
  );
}

export function CocktailIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M5 5h14l-7 8Z" />
      <path d="M12 13v6" />
      <path d="M9 21h6" />
    </svg>
  );
}

export function ServiceBellIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M4 15h16" />
      <path d="M7 15a5 5 0 0 1 10 0" />
      <path d="M12 5h.01" />
    </svg>
  );
}

export function CutleryIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M7 3v9" />
      <path d="M5 3v4" />
      <path d="M9 3v4" />
      <path d="M7 12v9" />
      <path d="M16 3v18" />
      <path d="M16 3c2 0 4 2 4 5h-4" />
    </svg>
  );
}

export function ScreenIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M4 5h16v10H4z" />
      <path d="M9 19h6" />
      <path d="M12 15v4" />
    </svg>
  );
}

export function LinenIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M4 10h16" />
      <path d="M5 10V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
      <path d="M5 10v8" />
      <path d="M19 10v8" />
      <path d="M5 14h14" />
    </svg>
  );
}

export function ConciergeIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={iconClassName(className)} strokeWidth="1.7">
      <path d="M5 15h14" />
      <path d="M7 15a5 5 0 0 1 10 0" />
      <path d="M12 5h.01" />
      <path d="M4 19h16" />
    </svg>
  );
}
