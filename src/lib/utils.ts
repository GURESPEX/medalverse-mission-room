import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names, resolving conflicts correctly.
 *
 * Uses clsx for conditional/array syntax, then tailwind-merge to
 * deduplicate conflicting utilities (e.g. px-2 + px-4 → px-4).
 *
 * @example
 * cn("px-2 py-1", condition && "bg-blue-500", "px-4")
 * // → "py-1 bg-blue-500 px-4"
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
