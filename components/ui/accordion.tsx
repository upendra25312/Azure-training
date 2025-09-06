"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
export function AccordionItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10 dark:border-white/10">
      <button onClick={() => setOpen(o=>!o)} className="w-full py-4 flex items-center justify-between text-left">
        <span className="font-medium">{q}</span>
        <ChevronDown className={cn("size-5 transition", open && "rotate-180")} />
      </button>
      {open && <div className="pb-4 text-black/80 dark:text-white/80">{a}</div>}
    </div>
  );
}