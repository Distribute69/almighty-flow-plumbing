import { PhoneIcon } from "@/components/icons/ServiceIcons";
import { site } from "@/lib/site";

export function FloatingCall() {
  return (
    <a
      href={`tel:${site.phoneHref}`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-gradient-to-br from-accent-dim to-accent-bright text-white shadow-glow-lg transition-transform hover:scale-105 sm:hidden"
      aria-label={`Call ${site.name}`}
    >
      <PhoneIcon className="h-6 w-6" />
    </a>
  );
}
