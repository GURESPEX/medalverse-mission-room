"use client";

import { MdvSidebar, useMdvSidebar } from "@/src/components/ui/mdv/sidebar/mdv-sidebar";
import { MdvAvatar } from "@/src/components/ui/mdv/avatar/mdv-avatar";
import {
  TargetIcon,
  DashboardIcon,
  MissionsIcon,
  MentorsIcon,
  SettingsIcon,
  SupportIcon,
  LogOutIcon,
} from "@/src/components/ui/mdv/icons/mdv-icons";

/* ── Panel content (needs sidebar context for collapse) ── */

function MissionPanel() {
  const { toggle } = useMdvSidebar();

  return (
    <>
      {/* User info */}
      <div className="flex items-center gap-3 px-4 pb-4 border-b border-mdv-neutral-200 mb-2">
        <MdvAvatar initials="AR" size="md" />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-mdv-neutral-900 truncate">Alex Rivers</p>
          <p className="text-xs text-mdv-neutral-500 truncate">Academic Mentor</p>
        </div>
      </div>

      <MdvSidebar.PanelHeader
        title="Mission Room"
        subtitle="Your academic workspace"
        onCollapse={() => toggle("mission")}
      />

      <MdvSidebar.PanelItem
        href="/mission-room/dashboard"
        label="Dashboard"
        icon={<DashboardIcon size={16} />}
      />
      <MdvSidebar.PanelItem
        href="/mission-room/missions"
        label="Missions"
        icon={<MissionsIcon size={16} />}
      />
      <MdvSidebar.PanelItem
        href="/mission-room/mentors"
        label="Mentors"
        icon={<MentorsIcon size={16} />}
      />
      <MdvSidebar.PanelItem
        href="/mission-room/settings"
        label="Settings"
        icon={<SettingsIcon size={16} />}
      />

      <MdvSidebar.PanelFooter>
        <MdvSidebar.PanelItem
          href="/mission-room/dashboard"
          label="Support"
          icon={<SupportIcon size={16} />}
        />
        <MdvSidebar.PanelItem
          href="/mission-room/dashboard"
          label="Sign Out"
          icon={<LogOutIcon size={16} />}
        />
      </MdvSidebar.PanelFooter>
    </>
  );
}

/* ── Sidebar ─────────────────────────────────────────── */

export function MissionRoomSidebar() {
  return (
    <MdvSidebar defaultExpanded="mission" className="flex-shrink-0">
      {/* ── Icon Rail ─────────────────────────────── */}
      <MdvSidebar.Rail>
        {/* Brand mark */}
        <div className="mb-3 pb-3 border-b border-mdv-neutral-200 w-full flex justify-center flex-shrink-0">
          <div className="h-9 w-9 rounded-mdv-md bg-mdv-primary-600 flex items-center justify-center shadow-mdv-sm">
            <span className="text-white text-sm font-bold tracking-tight">M</span>
          </div>
        </div>

        {/* Only Mission Room */}
        <MdvSidebar.RailItem
          id="mission"
          icon={<TargetIcon size={18} />}
          label={"Mission\nRoom"}
          hasPanel
        />

        <MdvSidebar.Spacer />
        <MdvSidebar.Divider />

        <MdvSidebar.RailItem
          id="support"
          icon={<SupportIcon size={18} />}
          label="Support"
          href="/mission-room/dashboard"
        />
        <div className="mt-1">
          <MdvAvatar initials="P" size="sm" className="mx-auto cursor-pointer" />
        </div>
      </MdvSidebar.Rail>

      {/* ── Mission Room Panel ─────────────────────── */}
      <MdvSidebar.Panel forItem="mission">
        <MissionPanel />
      </MdvSidebar.Panel>
    </MdvSidebar>
  );
}
