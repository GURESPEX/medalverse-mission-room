"use client";

import { useRouter } from "next/navigation";
import { MdvTopBar } from "@/src/components/ui/mdv/top-bar/mdv-top-bar";
import { MdvStepper, type MdvStep } from "@/src/components/ui/mdv/stepper/mdv-stepper";
import { MdvButton } from "@/src/components/ui/mdv/button/mdv-button";
import { MdvProgress } from "@/src/components/ui/mdv/progress/mdv-progress";
import {
  TargetIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClipboardIcon,
  BookOpenIcon,
} from "@/src/components/ui/mdv/icons/mdv-icons";

/* ── Mock data ───────────────────────────────────────── */

const STEPS: MdvStep[] = [
  { id: "details", label: "Mission Details", status: "completed" },
  { id: "curriculum", label: "Curriculum Selection", status: "completed" },
  { id: "timeline", label: "Timeline & Setup", status: "active" },
  { id: "review", label: "Review & Launch", status: "pending" },
];

const CURRICULUM = [
  {
    id: "eng",
    icon: <BookOpenIcon size={16} />,
    title: "Structural Engineering Basics",
    description: "Core principles of architectural stability and design.",
    startDate: "01/09/2024",
    endDate: "15/10/2024",
    lessons: 3,
  },
  {
    id: "calc",
    icon: <ClipboardIcon size={16} />,
    title: "Advanced Calculus II",
    description: "Integration techniques and differential equations.",
    startDate: "10/09/2024",
    endDate: "20/10/2024",
    lessons: 2,
  },
  {
    id: "mat",
    icon: <BookOpenIcon size={16} />,
    title: "Material Science Lab",
    description: "Practical analysis of composite materials.",
    startDate: "16/10/2024",
    endDate: "30/12/2024",
    lessons: 1,
  },
];

/* ── Page ────────────────────────────────────────────── */

export default function PlanTimelinePage() {
  const router = useRouter();

  return (
    <>
      <MdvTopBar
        left={
          <span className="flex items-center gap-2 text-sm font-semibold text-mdv-neutral-900">
            <TargetIcon size={16} className="text-mdv-primary-600" />
            Plan Your Timeline
          </span>
        }
        credits={450}
        isPro
        userInitials="AR"
      />

      <div className="flex-1 p-6 flex flex-col gap-6">
        {/* ── Stepper ─────────────────────────────────── */}
        <div className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm px-6 py-5">
          <MdvStepper steps={STEPS} />
        </div>

        <div className="flex gap-6 flex-1">
          {/* ── Curriculum list ──────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-mdv-neutral-900">
                Requirements Breakdown
              </h2>
              <span className="text-xs text-mdv-neutral-500">
                {CURRICULUM.length} Active Items
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {CURRICULUM.map((item) => (
                <div
                  key={item.id}
                  className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-xs p-4 flex flex-col gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-mdv-md bg-mdv-neutral-100 flex items-center justify-center text-mdv-neutral-500 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-mdv-neutral-900">{item.title}</p>
                      <p className="text-xs text-mdv-neutral-500 mt-0.5">{item.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-[11px] text-mdv-neutral-400 mb-1">Start Date</p>
                      <div className="flex items-center gap-1.5 text-xs text-mdv-neutral-700 border border-mdv-neutral-200 rounded-mdv-sm px-2 py-1.5">
                        <CalendarIcon size={12} className="text-mdv-neutral-400" />
                        {item.startDate}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] text-mdv-neutral-400 mb-1">End Date</p>
                      <div className="flex items-center gap-1.5 text-xs text-mdv-neutral-700 border border-mdv-neutral-200 rounded-mdv-sm px-2 py-1.5">
                        <CalendarIcon size={12} className="text-mdv-neutral-400" />
                        {item.endDate}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] text-mdv-neutral-400 mb-1">Lessons / Week</p>
                      <div className="flex items-center gap-1.5 text-xs text-mdv-neutral-700 border border-mdv-neutral-200 rounded-mdv-sm px-2 py-1.5">
                        <span className="text-mdv-neutral-400">–</span>
                        {item.lessons}
                        <span className="text-mdv-neutral-400">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Mission overview sidebar ─────────────── */}
          <div className="w-72 flex-shrink-0 flex flex-col gap-4">
            {/* Overview card */}
            <div className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm p-5 flex flex-col gap-3">
              <p className="text-sm font-semibold text-mdv-neutral-900">Mission Overview</p>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {[
                  { label: "Total Duration", value: "18 Weeks" },
                  { label: "Weekly Load", value: "12 Lessons" },
                  { label: "Est. Completion", value: "Dec 22, 2024" },
                  { label: "Active Items", value: `${CURRICULUM.length} Courses` },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[11px] text-mdv-neutral-400">{label}</p>
                    <p className="text-sm font-semibold text-mdv-neutral-800 mt-0.5">{value}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-mdv-neutral-100">
                <MdvProgress value={75} showLabel label="Setup Progress" />
              </div>
            </div>

            {/* Mini calendar placeholder */}
            <div className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-mdv-neutral-900">September 2024</p>
                <div className="flex gap-1">
                  <button className="h-6 w-6 rounded text-mdv-neutral-400 hover:bg-mdv-neutral-100 flex items-center justify-center text-xs">‹</button>
                  <button className="h-6 w-6 rounded text-mdv-neutral-400 hover:bg-mdv-neutral-100 flex items-center justify-center text-xs">›</button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-0.5 text-center">
                {["S","M","T","W","T","F","S"].map((d, i) => (
                  <span key={i} className="text-[10px] text-mdv-neutral-400 py-1">{d}</span>
                ))}
                {/* First week offset (Sep 1 = Sunday) */}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i + 1;
                  const isToday = day === 6;
                  const isHighlight = day === 1 || day === 10;
                  return day <= 30 ? (
                    <button
                      key={i}
                      className={`text-[11px] py-1 rounded transition-colors ${
                        isToday
                          ? "bg-mdv-primary-600 text-white font-semibold"
                          : isHighlight
                          ? "bg-mdv-primary-100 text-mdv-primary-700 font-medium"
                          : "text-mdv-neutral-600 hover:bg-mdv-neutral-100"
                      }`}
                    >
                      {day}
                    </button>
                  ) : (
                    <span key={i} />
                  );
                })}
              </div>
              <div className="mt-3 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[11px] text-mdv-neutral-600">
                  <span className="h-2 w-2 rounded-full bg-mdv-primary-600 flex-shrink-0" />
                  Engineering Start
                </div>
                <div className="flex items-center gap-2 text-[11px] text-mdv-neutral-600">
                  <span className="h-2 w-2 rounded-full bg-mdv-primary-300 flex-shrink-0" />
                  Calculus Classes
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer actions ───────────────────────────── */}
        <div className="flex justify-end pt-2 border-t border-mdv-neutral-200">
          <MdvButton
            size="md"
            rightIcon={<ArrowRightIcon size={16} />}
            onClick={() => router.push("/mission-room/dashboard")}
          >
            Generate Final Plan
          </MdvButton>
        </div>
      </div>
    </>
  );
}
