import { cx } from "class-variance-authority";
import type { ClassValue } from "class-variance-authority/types";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(cx(inputs));
}

export function RecordKeys<T extends string | number | symbol>(
  record: Record<T, unknown>,
): T[] {
  return Object.keys(record) as T[];
}

export function RecordValues<T>(
  record: Record<string | number | symbol, T>,
): T[] {
  return Object.values(record);
}
