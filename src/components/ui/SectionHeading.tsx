import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-gold-soft">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-black tracking-wide text-ink-fg sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
