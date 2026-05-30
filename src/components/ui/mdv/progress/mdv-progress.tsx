import { HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

export type MdvProgressVariant = "primary" | "success" | "warning" | "error";
export type MdvProgressSize = "xs" | "sm" | "md";

export interface MdvProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: MdvProgressVariant;
  size?: MdvProgressSize;
  showLabel?: boolean;
  label?: string;
}

const variantFill: Record<MdvProgressVariant, string> = {
  primary: "bg-mdv-primary-600",
  success: "bg-mdv-success",
  warning: "bg-mdv-warning",
  error: "bg-mdv-error",
};

const sizeStyles: Record<MdvProgressSize, string> = {
  xs: "h-1",
  sm: "h-1.5",
  md: "h-2",
};

export function MdvProgress({
  value,
  max = 100,
  variant = "primary",
  size = "sm",
  showLabel = false,
  label,
  className,
  ...props
}: MdvProgressProps) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("w-full", className)} {...props}>
      {(showLabel || label) && (
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-mdv-neutral-500 font-medium">{label ?? "Progress"}</span>
          <span className="text-xs text-mdv-neutral-700 font-semibold">{Math.round(pct)}%</span>
        </div>
      )}
      <div
        className={cn("w-full rounded-mdv-full bg-mdv-neutral-200 overflow-hidden", sizeStyles[size])}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={cn("h-full rounded-mdv-full transition-all duration-300", variantFill[variant])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
