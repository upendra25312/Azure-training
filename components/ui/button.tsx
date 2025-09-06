import React from "react";
import { cn } from "@/lib/utils";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" | "ghost" };
export const Button = React.forwardRef<HTMLButtonElement, Props>(({ className, variant = "primary", ...props }, ref) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variants: Record<string,string> = {
    primary: "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
    secondary: "bg-black/80 text-white hover:bg-black focus-visible:ring-black dark:bg-white/20 dark:hover:bg-white/30",
    outline: "border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10",
    ghost: "hover:bg-black/5 dark:hover:bg-white/10"
  };
  return <button ref={ref} className={cn(base, variants[variant], className)} {...props} />;
});
Button.displayName = "Button";