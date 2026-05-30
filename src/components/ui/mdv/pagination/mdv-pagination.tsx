"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@/src/components/ui/mdv/icons/mdv-icons";

export interface MdvPaginationProps extends HTMLAttributes<HTMLDivElement> {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showInfo?: boolean;
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function buildPages(page: number, total: number, siblings: number) {
  const left = Math.max(2, page - siblings);
  const right = Math.min(total - 1, page + siblings);

  const showLeftDot = left > 2;
  const showRightDot = right < total - 1;

  const pages: (number | "...")[] = [1];
  if (showLeftDot) pages.push("...");
  pages.push(...range(left, right));
  if (showRightDot) pages.push("...");
  if (total > 1) pages.push(total);

  return pages;
}

export function MdvPagination({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showInfo = true,
  className,
  ...props
}: MdvPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = buildPages(page, totalPages, siblingCount);

  return (
    <div className={cn("flex items-center justify-between gap-4", className)} {...props}>
      {showInfo && (
        <span className="text-xs text-mdv-neutral-500">
          Page {page} of {totalPages}
        </span>
      )}
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className="h-8 w-8 flex items-center justify-center rounded-mdv-md border border-mdv-neutral-200 text-mdv-neutral-500 hover:bg-mdv-neutral-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeftIcon size={14} />
        </button>

        {pages.map((p, i) =>
          p === "..." ? (
            <span key={`dot-${i}`} className="h-8 w-8 flex items-center justify-center text-xs text-mdv-neutral-400 select-none">
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              aria-label={`Page ${p}`}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "h-8 w-8 flex items-center justify-center rounded-mdv-md text-xs font-medium transition-colors",
                p === page
                  ? "bg-mdv-primary-600 text-white"
                  : "border border-mdv-neutral-200 text-mdv-neutral-600 hover:bg-mdv-neutral-100"
              )}
            >
              {p}
            </button>
          )
        )}

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
          className="h-8 w-8 flex items-center justify-center rounded-mdv-md border border-mdv-neutral-200 text-mdv-neutral-500 hover:bg-mdv-neutral-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
        >
          <ChevronRightIcon size={14} />
        </button>
      </div>
    </div>
  );
}
