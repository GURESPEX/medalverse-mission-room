"use client";

import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "@/src/lib/utils";
import { MdvButton } from "@/src/components/ui/mdv/button/mdv-button";
import { SearchIcon } from "@/src/components/ui/mdv/icons/mdv-icons";

/* ── Base Input ──────────────────────────────────────── */

export interface MdvInputProps extends InputHTMLAttributes<HTMLInputElement> {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  error?: string;
  label?: string;
}

export const MdvInput = forwardRef<HTMLInputElement, MdvInputProps>(
  ({ leadingIcon, trailingIcon, error, label, className, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-mdv-neutral-700 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leadingIcon && (
            <span className="absolute left-3 text-mdv-neutral-400 flex items-center pointer-events-none">
              {leadingIcon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            className={cn(
              "w-full h-10 rounded-mdv-md border border-mdv-neutral-200 bg-white",
              "text-sm text-mdv-neutral-900 placeholder:text-mdv-neutral-400",
              "px-3 py-2 transition-colors",
              "focus:outline-none focus:border-mdv-primary-500 focus:ring-2 focus:ring-mdv-primary-100",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-mdv-neutral-50",
              error && "border-mdv-error focus:border-mdv-error focus:ring-mdv-error-light",
              !!leadingIcon && "pl-9",
              !!trailingIcon && "pr-9",
              className
            )}
            {...props}
          />
          {trailingIcon && (
            <span className="absolute right-3 text-mdv-neutral-400 flex items-center">
              {trailingIcon}
            </span>
          )}
        </div>
        {error && (
          <p className="mt-1.5 text-xs text-mdv-error">{error}</p>
        )}
      </div>
    );
  }
);

MdvInput.displayName = "MdvInput";

/* ── Search Input with Button ────────────────────────── */

export interface MdvSearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  buttonLabel?: string;
}

export function MdvSearchInput({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  className,
  buttonLabel = "Search",
}: MdvSearchInputProps) {
  return (
    <div className={cn("flex items-center gap-0 rounded-mdv-md border border-mdv-neutral-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-mdv-primary-100 focus-within:border-mdv-primary-500", className)}>
      <span className="pl-3 text-mdv-neutral-400 flex items-center flex-shrink-0">
        <SearchIcon size={16} />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch?.(value ?? "")}
        className="flex-1 h-10 px-3 text-sm text-mdv-neutral-900 placeholder:text-mdv-neutral-400 bg-transparent focus:outline-none"
      />
      {onSearch && (
        <div className="px-1.5 py-1.5 flex-shrink-0">
          <MdvButton
            size="sm"
            onClick={() => onSearch?.(value ?? "")}
            className="rounded-mdv-sm"
          >
            {buttonLabel}
          </MdvButton>
        </div>
      )}
    </div>
  );
}
