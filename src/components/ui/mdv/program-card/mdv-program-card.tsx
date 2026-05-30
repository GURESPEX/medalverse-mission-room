import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";
import { MdvProgress } from "@/src/components/ui/mdv/progress/mdv-progress";

/* ── Root ────────────────────────────────────────────── */

interface MdvProgramCardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  selected?: boolean;
}

function MdvProgramCardRoot({ children, selected, className, ...props }: MdvProgramCardRootProps) {
  return (
    <div
      className={cn(
        "bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm",
        "flex flex-col gap-3 p-4 transition-shadow hover:shadow-mdv-md",
        selected && "border-mdv-primary-300 ring-2 ring-mdv-primary-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Icon / Crest area ───────────────────────────────── */

interface MdvProgramCardIconProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MdvProgramCardIcon({ children, className, ...props }: MdvProgramCardIconProps) {
  return (
    <div
      className={cn(
        "h-12 w-12 rounded-mdv-md bg-mdv-neutral-100 flex items-center justify-center flex-shrink-0 overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Title ───────────────────────────────────────────── */

interface MdvProgramCardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  subtitle?: string;
}

function MdvProgramCardTitle({ children, subtitle, className, ...props }: MdvProgramCardTitleProps) {
  return (
    <div className={cn("flex-1 min-w-0", className)}>
      <h3 className="text-sm font-semibold text-mdv-neutral-900 leading-snug truncate" {...props}>
        {children}
      </h3>
      {subtitle && (
        <p className="text-xs text-mdv-neutral-500 mt-0.5 leading-snug line-clamp-2">{subtitle}</p>
      )}
    </div>
  );
}

/* ── Progress ────────────────────────────────────────── */

interface MdvProgramCardProgressProps {
  value: number;
  label?: string;
  className?: string;
}

function MdvProgramCardProgress({ value, label = "Progress", className }: MdvProgramCardProgressProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] text-mdv-neutral-500">{label}</span>
        <span className="text-[11px] font-semibold text-mdv-neutral-700">{value}%</span>
      </div>
      <MdvProgress value={value} size="xs" />
    </div>
  );
}

/* ── Stats (sessions · tasks) ────────────────────────── */

interface MdvProgramCardStatsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MdvProgramCardStats({ children, className, ...props }: MdvProgramCardStatsProps) {
  return (
    <div className={cn("flex items-center gap-3 flex-wrap", className)} {...props}>
      {children}
    </div>
  );
}

/* ── Header row (icon + title + optional action) ─────── */

interface MdvProgramCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MdvProgramCardHeader({ children, className, ...props }: MdvProgramCardHeaderProps) {
  return (
    <div className={cn("flex items-start gap-3", className)} {...props}>
      {children}
    </div>
  );
}

/* ── Action slot ─────────────────────────────────────── */

interface MdvProgramCardActionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MdvProgramCardAction({ children, className, ...props }: MdvProgramCardActionProps) {
  return (
    <div className={cn("mt-auto pt-1", className)} {...props}>
      {children}
    </div>
  );
}

/* ── Detail rows (duration, location, salary…) ───────── */

interface MdvProgramCardDetailProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  label: string;
  value: string;
}

function MdvProgramCardDetail({ icon, label, value, className, ...props }: MdvProgramCardDetailProps) {
  return (
    <div className={cn("flex items-center gap-2 text-xs", className)} {...props}>
      <span className="text-mdv-neutral-400 flex-shrink-0">{icon}</span>
      <span className="text-mdv-neutral-500">{label}</span>
      <span className="font-medium text-mdv-neutral-700 ml-auto">{value}</span>
    </div>
  );
}

/* ── Compound Export ─────────────────────────────────── */

export const MdvProgramCard = Object.assign(MdvProgramCardRoot, {
  Header: MdvProgramCardHeader,
  Icon: MdvProgramCardIcon,
  Title: MdvProgramCardTitle,
  Progress: MdvProgramCardProgress,
  Stats: MdvProgramCardStats,
  Action: MdvProgramCardAction,
  Detail: MdvProgramCardDetail,
});
