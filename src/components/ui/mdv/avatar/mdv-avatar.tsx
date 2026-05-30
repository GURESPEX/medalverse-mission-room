import { HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

export type MdvAvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface MdvAvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: MdvAvatarSize;
  color?: string;
}

const sizeStyles: Record<MdvAvatarSize, string> = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

const defaultColors = [
  "bg-violet-100 text-violet-700",
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-cyan-100 text-cyan-700",
];

function colorFromInitials(initials: string): string {
  const code = initials.charCodeAt(0) % defaultColors.length;
  return defaultColors[code];
}

export function MdvAvatar({
  src,
  alt = "",
  initials,
  size = "md",
  className,
  ...props
}: MdvAvatarProps) {
  const colorClass = initials ? colorFromInitials(initials) : "bg-mdv-neutral-200 text-mdv-neutral-600";

  return (
    <div
      className={cn(
        "relative flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center font-semibold select-none",
        sizeStyles[size],
        !src && colorClass,
        className
      )}
      {...props}
    >
      {src ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span aria-label={alt}>{initials ?? "?"}</span>
      )}
    </div>
  );
}
