import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-dim via-accent to-accent-bright text-white shadow-glow hover:shadow-glow-lg",
  secondary:
    "metal-panel text-ink-fg hover:border-accent/50",
  ghost: "text-ink-muted hover:bg-white/70 hover:text-ink-fg",
  outline:
    "border border-accent/35 bg-white/86 text-accent hover:bg-accent/8 hover:border-accent",
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
    const {
      href,
      variant: ignoredVariant,
      className: ignoredClassName,
      children: ignoredChildren,
      ...linkProps
    } = props;
    void ignoredVariant;
    void ignoredClassName;
    void ignoredChildren;
    return (
      <Link href={href} className={base} {...linkProps}>
        {children}
      </Link>
    );
  }

  const {
    variant: ignoredVariant,
    className: ignoredClassName,
    children: ignoredChildren,
    ...buttonProps
  } =
    props as NativeButtonProps;
  void ignoredVariant;
  void ignoredClassName;
  void ignoredChildren;

  return (
    <button className={base} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
