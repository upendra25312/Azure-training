import * as React from "react";
import { cn } from "@/lib/utils";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn("flex min-h-[100px] w-full rounded-xl border border-black/20 dark:border-white/20 bg-white/80 dark:bg-white/10 px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", className)} {...props} />
));
Textarea.displayName = "Textarea";
export { Textarea };