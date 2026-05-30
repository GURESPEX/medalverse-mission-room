import Link from "next/link";
import { MdvTopBar } from "@/src/components/ui/mdv/top-bar/mdv-top-bar";
import { MdvButton } from "@/src/components/ui/mdv/button/mdv-button";
import { MdvProgramCard } from "@/src/components/ui/mdv/program-card/mdv-program-card";
import { MdvSessionCard } from "@/src/components/ui/mdv/session-card/mdv-session-card";
import { MdvStat, MdvStatGroup } from "@/src/components/ui/mdv/stat/mdv-stat";
import {
  PlusIcon,
  ArrowRightIcon,
  TargetIcon,
  ClockIcon,
  ClipboardIcon,
  FlameIcon,
  BookOpenIcon,
} from "@/src/components/ui/mdv/icons/mdv-icons";

/* ── Mock data ───────────────────────────────────────── */

const PROGRAMS = [
  {
    id: "cs",
    abbr: "CS",
    name: "Computer Science (CS)",
    specialty: "Bachelor of Science • Specializing in AI & Systems",
    progress: 65,
    sessions: 6,
    tasks: 12,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "dd",
    abbr: "DD",
    name: "Digital Design (DD)",
    specialty: "Bachelor of Arts • UX & Visual Communication",
    progress: 30,
    sessions: 4,
    tasks: 8,
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: "ba",
    abbr: "BA",
    name: "Business Admin (BA)",
    specialty: "Bachelor of Business • Corporate Strategy",
    progress: 10,
    sessions: 2,
    tasks: 5,
    color: "bg-amber-100 text-amber-700",
  },
];

const SESSIONS = [
  { id: "1", initials: "S", title: "Interview Prep", meta: "with Sarah · 2:00 PM Today" },
  { id: "2", initials: "D", title: "Portfolio Review", meta: "with David · Tomorrow, 10:00 AM" },
];

/* ── Page ────────────────────────────────────────────── */

export default function DashboardPage() {
  return (
    <>
      <MdvTopBar
        left={
          <span className="flex items-center gap-2 text-sm font-semibold text-mdv-neutral-900">
            <TargetIcon size={18} className="text-mdv-primary-600" />
            Mission Digital Mentor
          </span>
        }
        searchPlaceholder="Search your missions..."
        credits={125}
        isPro
        userInitials="AR"
      />

      <div className="flex-1 p-6 flex gap-6">
        {/* ── Left: workspace ─────────────────────────── */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-mdv-neutral-900">Your Mission Workspace</h1>
              <p className="text-sm text-mdv-neutral-500 mt-1">
                Track your academic progress and upcoming milestones.
              </p>
            </div>
            <Link href="/mission-room/missions">
              <MdvButton leftIcon={<PlusIcon size={16} />} size="sm">
                Create New Mission
              </MdvButton>
            </Link>
          </div>

          {/* Program cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {PROGRAMS.map((p) => (
              <MdvProgramCard key={p.id}>
                <MdvProgramCard.Header>
                  <MdvProgramCard.Icon>
                    <span className={`text-base font-bold rounded-mdv-sm px-1.5 py-0.5 ${p.color}`}>
                      {p.abbr}
                    </span>
                  </MdvProgramCard.Icon>
                  <MdvProgramCard.Title subtitle={p.specialty}>
                    {p.name}
                  </MdvProgramCard.Title>
                </MdvProgramCard.Header>

                <MdvProgramCard.Progress value={p.progress} label="Current Progress" />

                <MdvProgramCard.Action>
                  <Link href={`/mission-room/missions/${p.id}`}>
                    <MdvButton
                      variant="ghost"
                      size="sm"
                      rightIcon={<ArrowRightIcon size={14} />}
                      className="px-0 text-mdv-primary-600"
                    >
                      Mission Room
                    </MdvButton>
                  </Link>
                </MdvProgramCard.Action>
              </MdvProgramCard>
            ))}

            {/* Learning Streak card */}
            <MdvProgramCard className="flex-col items-center text-center justify-center bg-gradient-to-br from-mdv-primary-50 to-white">
              <div className="flex flex-col items-center gap-2 py-2">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <FlameIcon size={24} className="text-amber-500" />
                </div>
                <p className="text-sm font-semibold text-mdv-neutral-700">Learning Streak</p>
                <p className="text-4xl font-bold text-mdv-neutral-900">14 Days</p>
                <p className="text-xs text-mdv-neutral-500 max-w-[160px]">
                  You&apos;re in the top 5% of active learners this month!
                </p>
              </div>
            </MdvProgramCard>
          </div>
        </div>

        {/* ── Right: upcoming sessions ─────────────────── */}
        <div className="w-72 flex-shrink-0 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-mdv-neutral-900">Upcoming Sessions</h2>
            <button className="text-xs text-mdv-primary-600 hover:underline font-medium">
              View All
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {SESSIONS.map((s) => (
              <MdvSessionCard key={s.id}>
                <MdvSessionCard.Avatar initials={s.initials} />
                <MdvSessionCard.Info title={s.title} meta={s.meta} />
                <MdvSessionCard.Action>
                  <MdvButton size="icon-sm" variant="secondary">
                    <BookOpenIcon size={14} />
                  </MdvButton>
                </MdvSessionCard.Action>
              </MdvSessionCard>
            ))}
          </div>

          {/* Stats summary */}
          <div className="mt-2 p-4 bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm">
            <p className="text-xs font-semibold text-mdv-neutral-700 mb-3">
              Overall Progress
            </p>
            <MdvStatGroup className="flex-col items-start gap-2">
              <MdvStat
                icon={<ClockIcon size={14} />}
                value="12 Sessions completed"
              />
              <MdvStat
                icon={<ClipboardIcon size={14} />}
                value="25 Tasks finished"
              />
              <MdvStat
                icon={<FlameIcon size={14} />}
                value="14-day streak active"
              />
            </MdvStatGroup>
          </div>
        </div>
      </div>
    </>
  );
}
