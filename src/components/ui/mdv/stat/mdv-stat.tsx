import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export interface MdvStatProps extends HTMLAttributes<HTMLSpanElement> {
  icon: ReactNode;
  value: string | number;
}

export function MdvStat({ icon, value, className, ...props }: MdvStatProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-1 text-xs text-mdv-neutral-500", className)}
      {...props}
    >
      <span className="flex items-center text-mdv-neutral-400">{icon}</span>
      <span>{value}</span>
    </span>
  );
}

/* ── MdvStatGroup: renders multiple stats separated by dot ── */

export interface MdvStatGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  separator?: string;
}

export function MdvStatGroup({ children, separator = "·", className, ...props }: MdvStatGroupProps) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={cn("flex items-center gap-2 flex-wrap", className)} {...props}>
      {items.map((child, i) => (
        <span key={i} className="inline-flex items-center gap-2">
          {i > 0 && <span className="text-mdv-neutral-300 text-xs">{separator}</span>}
          {child}
        </span>
      ))}
    </div>
  );
}
