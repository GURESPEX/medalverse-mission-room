import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export type MdvBadgeVariant =
  | "primary"
  | "neutral"
  | "success"
  | "warning"
  | "error"
  | "outline";

export type MdvBadgeSize = "sm" | "md";

export interface MdvBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: MdvBadgeVariant;
  size?: MdvBadgeSize;
  children: ReactNode;
}

const variantStyles: Record<MdvBadgeVariant, string> = {
  primary: "bg-mdv-primary-100 text-mdv-primary-700",
  neutral: "bg-mdv-neutral-100 text-mdv-neutral-600",
  success: "bg-mdv-success-light text-mdv-success",
  warning: "bg-mdv-warning-light text-mdv-warning",
  error: "bg-mdv-error-light text-mdv-error",
  outline: "border border-mdv-neutral-200 bg-transparent text-mdv-neutral-600",
};

const sizeStyles: Record<MdvBadgeSize, string> = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-2.5 py-1 text-xs",
};

export function MdvBadge({
  variant = "neutral",
  size = "md",
  className,
  children,
  ...props
}: MdvBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-mdv-full",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
