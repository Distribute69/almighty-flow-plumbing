import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-dim via-accent to-accent-bright text-white shadow-glow hover:shadow-glow-lg",
  secondary:
    "metal-panel text-ink-fg hover:border-accent/50",
  ghost: "text-ink-muted hover:bg-white/5 hover:text-ink-fg",
  outline:
    "border border-accent/55 bg-accent/5 text-accent-bright hover:bg-accent/12 hover:border-accent-bright",
};

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = BaseProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;

type NativeButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", className, children } = props;

  const base = cn(
    "bevel-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variants[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, variant: _v, className: _c, children: _ch, ...linkProps } = props;
    return (
      <Link href={href} className={base} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...buttonProps } =
    props as NativeButtonProps;

  return (
    <button className={base} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
