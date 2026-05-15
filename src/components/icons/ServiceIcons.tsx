import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const base = cn("h-7 w-7", className);

  switch (name) {
    case "emergency":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "drain":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
          <path d="M8 14c2 2 6 2 8 0M12 8v8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "heater":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M9 9v6M12 7v10M15 9v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "leak":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3c-4 6-7 8-7 12a7 7 0 1014 0c0-4-3-6-7-12z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "sewer":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 18h16M8 18V10a4 4 0 018 0v8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "home":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
  }

  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 10h18M8 14h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg className={cn("h-4 w-4 fill-accent text-accent", className)} viewBox="0 0 20 20" aria-hidden>
      <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
    </svg>
  );
}
