"use client";

import { HTMLAttributes, ReactNode, useState } from "react";
import { cn } from "@/src/lib/utils";
import { HeartIcon } from "@/src/components/ui/mdv/icons/mdv-icons";

/* ── Root ────────────────────────────────────────────── */

interface MdvMissionCardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  selected?: boolean;
}

function MdvMissionCardRoot({ children, selected, className, ...props }: MdvMissionCardRootProps) {
  return (
    <div
      className={cn(
        "relative bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm",
        "flex flex-col gap-3 p-5 transition-all hover:shadow-mdv-md cursor-pointer",
        selected && "border-mdv-primary-400 ring-2 ring-mdv-primary-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Wishlist Button ─────────────────────────────────── */

interface MdvMissionCardWishlistProps {
  defaultSaved?: boolean;
  onToggle?: (saved: boolean) => void;
  className?: string;
}

function MdvMissionCardWishlist({ defaultSaved = false, onToggle, className }: MdvMissionCardWishlistProps) {
  const [saved, setSaved] = useState(defaultSaved);

  const handle = () => {
    const next = !saved;
    setSaved(next);
    onToggle?.(next);
  };

  return (
    <button
      onClick={(e) => { e.stopPropagation(); handle(); }}
      aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
      className={cn(
        "absolute top-4 right-4 p-1.5 rounded-full transition-colors",
        saved
          ? "text-rose-500 hover:bg-rose-50"
          : "text-mdv-neutral-300 hover:text-rose-400 hover:bg-rose-50",
        className
      )}
    >
      <HeartIcon size={16} fill={saved ? "currentColor" : "none"} />
    </button>
  );
}

/* ── Icon ────────────────────────────────────────────── */

interface MdvMissionCardIconProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MdvMissionCardIcon({ children, className, ...props }: MdvMissionCardIconProps) {
  return (
    <div
      className={cn(
        "h-14 w-14 rounded-mdv-lg bg-mdv-neutral-100 flex items-center justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Title ───────────────────────────────────────────── */

interface MdvMissionCardTitleProps {
  children: ReactNode;
  university?: string;
  level?: string;
  className?: string;
}

function MdvMissionCardTitle({ children, university, level, className }: MdvMissionCardTitleProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <h3 className="text-sm font-bold text-mdv-neutral-900 leading-snug">{children}</h3>
      {(university || level) && (
        <p className="text-xs text-mdv-neutral-500 mt-0.5">
          {[university, level].filter(Boolean).join(" · ")}
        </p>
      )}
    </div>
  );
}

/* ── Description ─────────────────────────────────────── */

function MdvMissionCardDescription({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement> & { children: ReactNode }) {
  return (
    <p className={cn("text-xs text-mdv-neutral-500 leading-relaxed line-clamp-2", className)} {...props}>
      {children}
    </p>
  );
}

/* ── Detail row ──────────────────────────────────────── */

interface MdvMissionCardDetailProps {
  icon: ReactNode;
  label: string;
  value: string;
  className?: string;
}

function MdvMissionCardDetail({ icon, label, value, className }: MdvMissionCardDetailProps) {
  return (
    <div className={cn("flex items-center gap-2 text-xs", className)}>
      <span className="text-mdv-neutral-400 w-4 flex-shrink-0">{icon}</span>
      <span className="text-mdv-neutral-500 flex-1">{label}</span>
      <span className="font-semibold text-mdv-neutral-800">{value}</span>
    </div>
  );
}

/* ── Action ──────────────────────────────────────────── */

function MdvMissionCardAction({ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={cn("pt-1 mt-auto", className)} {...props}>
      {children}
    </div>
  );
}

/* ── Compound Export ─────────────────────────────────── */

export const MdvMissionCard = Object.assign(MdvMissionCardRoot, {
  Wishlist: MdvMissionCardWishlist,
  Icon: MdvMissionCardIcon,
  Title: MdvMissionCardTitle,
  Description: MdvMissionCardDescription,
  Detail: MdvMissionCardDetail,
  Action: MdvMissionCardAction,
});
