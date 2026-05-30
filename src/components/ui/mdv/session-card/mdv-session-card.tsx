import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";
import { MdvAvatar } from "@/src/components/ui/mdv/avatar/mdv-avatar";

/* ── Root ────────────────────────────────────────────── */

interface MdvSessionCardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  compact?: boolean;
}

function MdvSessionCardRoot({ children, compact, className, ...props }: MdvSessionCardRootProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-mdv-md bg-mdv-surface",
        compact ? "py-2.5 px-0" : "p-3 border border-mdv-neutral-200 shadow-mdv-xs",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Avatar slot ─────────────────────────────────────── */

interface MdvSessionCardAvatarProps {
  src?: string;
  initials?: string;
  alt?: string;
  className?: string;
}

function MdvSessionCardAvatar({ src, initials, alt, className }: MdvSessionCardAvatarProps) {
  return (
    <MdvAvatar src={src} initials={initials} alt={alt} size="md" className={cn("flex-shrink-0", className)} />
  );
}

/* ── Info ────────────────────────────────────────────── */

interface MdvSessionCardInfoProps {
  title: string;
  meta?: string;
  className?: string;
}

function MdvSessionCardInfo({ title, meta, className }: MdvSessionCardInfoProps) {
  return (
    <div className={cn("flex-1 min-w-0", className)}>
      <p className="text-sm font-semibold text-mdv-neutral-900 leading-snug truncate">{title}</p>
      {meta && <p className="text-xs text-mdv-neutral-500 mt-0.5 truncate">{meta}</p>}
    </div>
  );
}

/* ── Action slot ─────────────────────────────────────── */

function MdvSessionCardAction({ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={cn("flex-shrink-0", className)} {...props}>
      {children}
    </div>
  );
}

/* ── Compound Export ─────────────────────────────────── */

export const MdvSessionCard = Object.assign(MdvSessionCardRoot, {
  Avatar: MdvSessionCardAvatar,
  Info: MdvSessionCardInfo,
  Action: MdvSessionCardAction,
});
