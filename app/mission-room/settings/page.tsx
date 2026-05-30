import { MdvTopBar } from "@/src/components/ui/mdv/top-bar/mdv-top-bar";
import { MdvButton } from "@/src/components/ui/mdv/button/mdv-button";
import { MdvAvatar } from "@/src/components/ui/mdv/avatar/mdv-avatar";
import { MdvBadge } from "@/src/components/ui/mdv/badge/mdv-badge";
import { MdvInput } from "@/src/components/ui/mdv/input/mdv-input";

/* ── Page ────────────────────────────────────────────── */

export default function SettingsPage() {
  return (
    <>
      <MdvTopBar
        left={<span className="text-sm font-semibold text-mdv-neutral-700">Settings</span>}
        userInitials="AR"
      />

      <div className="flex-1 p-8 max-w-2xl mx-auto w-full flex flex-col gap-8">
        <h1 className="text-xl font-bold text-mdv-neutral-900">Account Settings</h1>

        {/* Profile section */}
        <section className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm p-6 flex flex-col gap-5">
          <p className="text-sm font-semibold text-mdv-neutral-900 border-b border-mdv-neutral-100 pb-3">
            Profile
          </p>
          <div className="flex items-center gap-4">
            <MdvAvatar initials="AR" size="xl" />
            <div className="flex flex-col gap-1.5">
              <MdvButton variant="outline" size="sm">Change Photo</MdvButton>
              <p className="text-xs text-mdv-neutral-400">JPG, PNG or GIF · Max 2MB</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MdvInput label="First Name" defaultValue="Alex" id="firstName" />
            <MdvInput label="Last Name" defaultValue="Rivers" id="lastName" />
            <MdvInput label="Email" defaultValue="alex.rivers@example.com" id="email" type="email" className="col-span-2" />
            <MdvInput label="Role / Title" defaultValue="Academic Mentor" id="role" className="col-span-2" />
          </div>
          <div className="flex justify-end">
            <MdvButton size="sm">Save Changes</MdvButton>
          </div>
        </section>

        {/* Subscription section */}
        <section className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm p-6 flex flex-col gap-4">
          <p className="text-sm font-semibold text-mdv-neutral-900 border-b border-mdv-neutral-100 pb-3">
            Subscription
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MdvBadge variant="primary">◎ Pro Member</MdvBadge>
              <span className="text-sm text-mdv-neutral-700">Renews December 31, 2024</span>
            </div>
            <MdvButton variant="outline" size="sm">Manage Plan</MdvButton>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-mdv-neutral-600">Credits Balance</span>
            <span className="font-semibold text-mdv-neutral-900">⬡ 125 Credits</span>
          </div>
        </section>

        {/* Notifications section */}
        <section className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm p-6 flex flex-col gap-4">
          <p className="text-sm font-semibold text-mdv-neutral-900 border-b border-mdv-neutral-100 pb-3">
            Notifications
          </p>
          {[
            { label: "Session reminders", desc: "Get notified 30 min before sessions" },
            { label: "Mission updates", desc: "Progress milestones and due dates" },
            { label: "Mentor messages", desc: "Direct messages from your mentors" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-mdv-neutral-800">{item.label}</p>
                <p className="text-xs text-mdv-neutral-500">{item.desc}</p>
              </div>
              {/* Toggle placeholder */}
              <div className="h-5 w-9 rounded-full bg-mdv-primary-600 relative cursor-pointer flex-shrink-0">
                <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-mdv-xs" />
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
