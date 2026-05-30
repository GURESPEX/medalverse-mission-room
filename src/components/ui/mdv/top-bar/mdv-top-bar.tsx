"use client";

import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";
import { MdvSearchInput } from "@/src/components/ui/mdv/input/mdv-input";
import { MdvBadge } from "@/src/components/ui/mdv/badge/mdv-badge";
import { MdvAvatar } from "@/src/components/ui/mdv/avatar/mdv-avatar";
import { BellIcon } from "@/src/components/ui/mdv/icons/mdv-icons";

export interface MdvTopBarProps {
  left?: ReactNode;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  credits?: number;
  isPro?: boolean;
  userInitials?: string;
  actions?: ReactNode;
  className?: string;
}

export function MdvTopBar({
  left,
  searchPlaceholder,
  onSearch,
  credits,
  isPro = false,
  userInitials = "U",
  actions,
  className,
}: MdvTopBarProps) {
  return (
    <header
      className={cn(
        "h-14 border-b border-mdv-neutral-200 bg-mdv-surface flex items-center px-6 gap-4 flex-shrink-0 sticky top-0 z-10",
        className
      )}
    >
      {left && <div className="flex items-center gap-2 min-w-0">{left}</div>}

      {searchPlaceholder && (
        <div className="flex-1 max-w-xs">
          <MdvSearchInput placeholder={searchPlaceholder} onSearch={onSearch} />
        </div>
      )}

      <div className="flex items-center gap-2.5 ml-auto flex-shrink-0">
        {credits != null && (
          <MdvBadge variant="neutral">⬡ {credits} Credits</MdvBadge>
        )}
        {isPro && (
          <MdvBadge variant="primary">◎ Pro Member</MdvBadge>
        )}
        {actions}
        <button
          className="h-9 w-9 flex items-center justify-center rounded-mdv-md text-mdv-neutral-400 hover:text-mdv-neutral-700 hover:bg-mdv-neutral-100 transition-colors"
          aria-label="Notifications"
        >
          <BellIcon size={18} />
        </button>
        <MdvAvatar initials={userInitials} size="sm" />
      </div>
    </header>
  );
}
