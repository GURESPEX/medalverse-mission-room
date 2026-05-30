import Link from "next/link";
import { MdvTopBar } from "@/src/components/ui/mdv/top-bar/mdv-top-bar";
import { MdvButton } from "@/src/components/ui/mdv/button/mdv-button";
import { MdvAvatar } from "@/src/components/ui/mdv/avatar/mdv-avatar";
import { MdvBadge } from "@/src/components/ui/mdv/badge/mdv-badge";
import { CalendarIcon, StarIcon } from "@/src/components/ui/mdv/icons/mdv-icons";

/* ── Mock data ───────────────────────────────────────── */

const MENTORS = [
  {
    id: "sarah",
    initials: "SR",
    name: "Sarah Robinson",
    role: "Academic Advisor",
    specialty: "Computer Science · AI/ML",
    rating: 4.9,
    sessions: 128,
    available: true,
  },
  {
    id: "david",
    initials: "DK",
    name: "David Kim",
    role: "Career Coach",
    specialty: "Business · Strategy",
    rating: 4.8,
    sessions: 94,
    available: true,
  },
  {
    id: "maya",
    initials: "ML",
    name: "Maya Larsen",
    role: "UX Mentor",
    specialty: "Design · Research",
    rating: 4.7,
    sessions: 76,
    available: false,
  },
];

/* ── Page ────────────────────────────────────────────── */

export default function MentorsPage() {
  return (
    <>
      <MdvTopBar
        left={
          <span className="text-sm font-semibold text-mdv-neutral-700">
            Mentors
          </span>
        }
        searchPlaceholder="Search mentors..."
        userInitials="AR"
      />

      <div className="flex-1 p-8 max-w-4xl mx-auto w-full flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-mdv-neutral-900">Your Mentors</h1>
            <p className="text-sm text-mdv-neutral-500 mt-1">
              Connect with expert advisors for personalised guidance.
            </p>
          </div>
          <Link href="/mission-room/mentors/consultation">
            <MdvButton leftIcon={<CalendarIcon size={15} />} size="sm">
              Book Free Consult
            </MdvButton>
          </Link>
        </div>

        {/* Mentor cards */}
        <div className="grid grid-cols-3 gap-4">
          {MENTORS.map((m) => (
            <div
              key={m.id}
              className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm p-5 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <MdvAvatar initials={m.initials} size="lg" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-mdv-neutral-900 truncate">{m.name}</p>
                  <p className="text-xs text-mdv-neutral-500 truncate">{m.role}</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <MdvBadge variant="neutral" size="sm">{m.specialty}</MdvBadge>
                <div className="flex items-center gap-3 text-xs text-mdv-neutral-500 mt-1">
                  <span className="flex items-center gap-1">
                    <StarIcon size={12} className="text-amber-400" />
                    {m.rating}
                  </span>
                  <span>{m.sessions} sessions</span>
                  <MdvBadge
                    variant={m.available ? "success" : "neutral"}
                    size="sm"
                  >
                    {m.available ? "Available" : "Busy"}
                  </MdvBadge>
                </div>
              </div>

              <Link href="/mission-room/mentors/consultation" className="mt-auto">
                <MdvButton variant="outline" size="sm" className="w-full">
                  Book Session
                </MdvButton>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
