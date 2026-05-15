import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-glow hover:bg-accent-bright hover:shadow-glow-lg",
  secondary:
    "bg-ink-800 text-ink-fg border border-ink-700 hover:border-accent/50 hover:bg-ink-900",
  ghost: "text-ink-muted hover:bg-ink-900 hover:text-ink-fg",
  outline:
    "border border-accent/60 text-accent hover:bg-accent/10 hover:border-accent",
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
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
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
