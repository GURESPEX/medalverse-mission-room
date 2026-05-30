"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  HTMLAttributes,
} from "react";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import { ChevronDownIcon } from "@/src/components/ui/mdv/icons/mdv-icons";

/* ── Context ─────────────────────────────────────────── */

interface SidebarContextValue {
  expanded: string | null;
  toggle: (id: string) => void;
  isExpanded: (id: string) => boolean;
}

const SidebarContext = createContext<SidebarContextValue>({
  expanded: null,
  toggle: () => {},
  isExpanded: () => false,
});

/* ── Root ────────────────────────────────────────────── */

interface MdvSidebarRootProps extends HTMLAttributes<HTMLElement> {
  defaultExpanded?: string;
  children: ReactNode;
}

function MdvSidebarRoot({ children, defaultExpanded, className, ...props }: MdvSidebarRootProps) {
  const [expanded, setExpanded] = useState<string | null>(defaultExpanded ?? null);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  const isExpanded = (id: string) => expanded === id;

  return (
    <SidebarContext.Provider value={{ expanded, toggle, isExpanded }}>
      <nav
        className={cn("flex h-full", className)}
        {...props}
      >
        {children}
      </nav>
    </SidebarContext.Provider>
  );
}

/* ── Icon Rail ───────────────────────────────────────── */

interface MdvSidebarRailProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MdvSidebarRail({ children, className, ...props }: MdvSidebarRailProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-[68px] h-full bg-mdv-surface border-r border-mdv-neutral-200 py-4 gap-1 flex-shrink-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Rail Item ───────────────────────────────────────── */

interface MdvSidebarRailItemProps {
  id: string;
  icon: ReactNode;
  label: string;
  href?: string;
  hasPanel?: boolean;
  className?: string;
}

function MdvSidebarRailItem({
  id,
  icon,
  label,
  href,
  hasPanel = false,
  className,
}: MdvSidebarRailItemProps) {
  const pathname = usePathname();
  const { toggle, isExpanded } = useContext(SidebarContext);

  const active = href ? pathname.startsWith(href) : isExpanded(id);

  const content = (
    <span
      className={cn(
        "flex flex-col items-center gap-1 w-12 py-2 px-1 rounded-mdv-md transition-colors cursor-pointer",
        active
          ? "text-mdv-primary-600 bg-mdv-primary-50"
          : "text-mdv-neutral-400 hover:text-mdv-neutral-700 hover:bg-mdv-neutral-100"
      )}
    >
      <span className="flex items-center justify-center w-5 h-5">{icon}</span>
      <span className="text-[10px] font-medium leading-tight text-center whitespace-pre-line">
        {label}
      </span>
    </span>
  );

  if (hasPanel) {
    return (
      <button onClick={() => toggle(id)} className={cn("w-full flex justify-center", className)}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href as Route} className={cn("w-full flex justify-center", className)}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={() => toggle(id)} className={cn("w-full flex justify-center", className)}>
      {content}
    </button>
  );
}

/* ── Rail Spacer ─────────────────────────────────────── */

function MdvSidebarSpacer() {
  return <div className="flex-1" />;
}

/* ── Rail Divider ────────────────────────────────────── */

function MdvSidebarDivider() {
  return <hr className="w-8 border-mdv-neutral-200 my-1" />;
}

/* ── Panel ───────────────────────────────────────────── */

interface MdvSidebarPanelProps extends HTMLAttributes<HTMLDivElement> {
  forItem: string;
  children: ReactNode;
  width?: number;
}

function MdvSidebarPanel({
  forItem,
  children,
  width = 220,
  className,
  ...props
}: MdvSidebarPanelProps) {
  const { isExpanded } = useContext(SidebarContext);

  if (!isExpanded(forItem)) return null;

  return (
    <div
      className={cn(
        "h-full border-r border-mdv-neutral-200 bg-mdv-surface flex flex-col py-4 overflow-y-auto flex-shrink-0",
        className
      )}
      style={{ width }}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Panel Header ────────────────────────────────────── */

interface MdvSidebarPanelHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

function MdvSidebarPanelHeader({ title, subtitle, className, ...props }: MdvSidebarPanelHeaderProps) {
  return (
    <div className={cn("px-4 mb-3", className)} {...props}>
      <h2 className="text-sm font-semibold text-mdv-neutral-900 truncate">{title}</h2>
      {subtitle && (
        <p className="text-xs text-mdv-neutral-500 mt-0.5 leading-snug">{subtitle}</p>
      )}
    </div>
  );
}

/* ── Panel Nav Item ──────────────────────────────────── */

interface MdvSidebarPanelItemProps {
  href: string;
  label: string;
  icon?: ReactNode;
  badge?: ReactNode;
  className?: string;
}

function MdvSidebarPanelItem({ href, label, icon, badge, className }: MdvSidebarPanelItemProps) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href as Route}
      className={cn(
        "flex items-center gap-2.5 mx-2 px-3 py-2 rounded-mdv-md text-sm font-medium transition-colors",
        active
          ? "bg-mdv-primary-50 text-mdv-primary-700"
          : "text-mdv-neutral-600 hover:bg-mdv-neutral-100 hover:text-mdv-neutral-900",
        className
      )}
    >
      {icon && (
        <span className={cn("flex-shrink-0", active ? "text-mdv-primary-600" : "text-mdv-neutral-400")}>
          {icon}
        </span>
      )}
      <span className="truncate flex-1">{label}</span>
      {badge}
    </Link>
  );
}

/* ── Panel Collapsible Section ───────────────────────── */

interface MdvSidebarPanelSectionProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

function MdvSidebarPanelSection({
  label,
  children,
  defaultOpen = true,
  className,
  ...props
}: MdvSidebarPanelSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn("mt-2", className)} {...props}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-mdv-neutral-400 hover:text-mdv-neutral-600 transition-colors"
      >
        {label}
        <ChevronDownIcon
          size={12}
          className={cn("transition-transform", open ? "rotate-0" : "-rotate-90")}
        />
      </button>
      {open && <div className="mt-1">{children}</div>}
    </div>
  );
}

/* ── Panel Footer ────────────────────────────────────── */

function MdvSidebarPanelFooter({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-auto pt-4 border-t border-mdv-neutral-200 px-2", className)} {...props}>
      {children}
    </div>
  );
}

/* ── Compound Export ─────────────────────────────────── */

export const MdvSidebar = Object.assign(MdvSidebarRoot, {
  Rail: MdvSidebarRail,
  RailItem: MdvSidebarRailItem,
  Spacer: MdvSidebarSpacer,
  Divider: MdvSidebarDivider,
  Panel: MdvSidebarPanel,
  PanelHeader: MdvSidebarPanelHeader,
  PanelItem: MdvSidebarPanelItem,
  PanelSection: MdvSidebarPanelSection,
  PanelFooter: MdvSidebarPanelFooter,
});
