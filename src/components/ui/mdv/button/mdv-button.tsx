"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export type MdvButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";

export type MdvButtonSize = "sm" | "md" | "lg" | "icon-sm" | "icon-md" | "icon-lg";

export interface MdvButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: MdvButtonVariant;
  size?: MdvButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
}

const variantStyles: Record<MdvButtonVariant, string> = {
  primary:
    "bg-mdv-primary-600 text-white hover:bg-mdv-primary-700 active:bg-mdv-primary-800 shadow-mdv-xs",
  secondary:
    "bg-mdv-primary-50 text-mdv-primary-600 hover:bg-mdv-primary-100 active:bg-mdv-primary-200",
  outline:
    "border border-mdv-neutral-200 bg-transparent text-mdv-neutral-700 hover:bg-mdv-neutral-50 active:bg-mdv-neutral-100",
  ghost:
    "bg-transparent text-mdv-primary-600 hover:bg-mdv-primary-50 active:bg-mdv-primary-100",
  destructive:
    "bg-mdv-error text-white hover:bg-red-600 active:bg-red-700 shadow-mdv-xs",
  link: "bg-transparent text-mdv-primary-600 underline-offset-4 hover:underline p-0 h-auto",
};

const sizeStyles: Record<MdvButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-mdv-sm",
  md: "h-10 px-4 text-sm gap-2 rounded-mdv-md",
  lg: "h-12 px-6 text-base gap-2 rounded-mdv-lg",
  "icon-sm": "h-8 w-8 rounded-mdv-sm",
  "icon-md": "h-10 w-10 rounded-mdv-md",
  "icon-lg": "h-12 w-12 rounded-mdv-lg",
};

export function MdvButton({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isLoading,
  className,
  disabled,
  children,
  ...props
}: MdvButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors",
        "focus-visible:outline-2 focus-visible:outline-mdv-primary-600 focus-visible:outline-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0 flex items-center">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0 flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
