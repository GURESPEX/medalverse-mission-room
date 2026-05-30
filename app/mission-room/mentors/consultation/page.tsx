"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdvTopBar } from "@/src/components/ui/mdv/top-bar/mdv-top-bar";
import { MdvButton } from "@/src/components/ui/mdv/button/mdv-button";
import { MdvAvatar } from "@/src/components/ui/mdv/avatar/mdv-avatar";
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from "@/src/components/ui/mdv/icons/mdv-icons";
import { cn } from "@/src/lib/utils";

/* ── Helpers ─────────────────────────────────────────── */

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

const TIME_SLOTS = [
  "09:00 AM", "09:30 AM",
  "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM",
  "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM",
];

const SESSION_HIGHLIGHTS = [
  { label: "15-min discovery" },
  { label: "Roadmap review" },
  { label: "Expert Q&A" },
];

const POST_STEPS = [
  { num: 1, title: "Needs Assessment", desc: "Define academic hurdles" },
  { num: 2, title: "Goal Mapping", desc: "Set 90-day targets" },
  { num: 3, title: "Expert Pairing", desc: "Curate your team" },
];

/* ── Page ────────────────────────────────────────────── */

export default function ConsultationPage() {
  const router = useRouter();

  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());
  const [selectedTime, setSelectedTime] = useState<string | null>("10:00 AM");
  const [confirmed, setConfirmed] = useState(false);

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = Array.from({ length: firstDayOfWeek + daysInMonth });

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => router.push("/mission-room/dashboard"), 1500);
  };

  if (confirmed) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className="h-16 w-16 rounded-full bg-mdv-success-light flex items-center justify-center">
          <CheckIcon size={32} className="text-mdv-success" />
        </div>
        <p className="text-lg font-semibold text-mdv-neutral-900">Booking Confirmed!</p>
        <p className="text-sm text-mdv-neutral-500">Redirecting to your dashboard…</p>
      </div>
    );
  }

  return (
    <>
      <MdvTopBar
        left={
          <nav className="flex items-center gap-1.5 text-xs text-mdv-neutral-500">
            <span>Mentors</span>
            <span>›</span>
            <span className="text-mdv-neutral-900 font-medium">Consultation</span>
          </nav>
        }
        userInitials="AR"
      />

      <div className="flex-1 p-8 max-w-4xl mx-auto w-full flex flex-col gap-8">
        {/* ── Header ──────────────────────────────────── */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-mdv-neutral-900">
            Book Your Free Consultation
          </h1>
          <p className="text-sm text-mdv-neutral-500 mt-2 max-w-md mx-auto">
            Connect with a dedicated academic advisor to map out your educational trajectory.
            Our 15-minute high-impact sessions are designed to clarify goals and identify
            immediate growth opportunities.
          </p>
        </div>

        {/* ── Online indicator ─────────────────────────── */}
        <div className="flex items-center justify-between bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm px-5 py-3">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-mdv-success animate-pulse flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-mdv-neutral-900">Advisors are online now</p>
              <p className="text-xs text-mdv-neutral-500">Average wait time &lt; 2 minutes. Need instant guidance?</p>
            </div>
          </div>
          <MdvButton variant="outline" size="sm">
            Join Live Queue
          </MdvButton>
        </div>

        {/* ── Calendar + Time slots ─────────────────────── */}
        <div className="flex gap-6">
          {/* Calendar */}
          <div className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm p-5 flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-mdv-neutral-900">
                1. Select Date
              </p>
            </div>

            {/* Month nav */}
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-mdv-neutral-800">
                {MONTH_NAMES[month]} {year}
              </p>
              <div className="flex gap-1">
                <button
                  onClick={prevMonth}
                  className="h-7 w-7 flex items-center justify-center rounded-mdv-sm text-mdv-neutral-400 hover:bg-mdv-neutral-100 transition-colors"
                >
                  <ChevronLeftIcon size={14} />
                </button>
                <button
                  onClick={nextMonth}
                  className="h-7 w-7 flex items-center justify-center rounded-mdv-sm text-mdv-neutral-400 hover:bg-mdv-neutral-100 transition-colors"
                >
                  <ChevronRightIcon size={14} />
                </button>
              </div>
            </div>

            {/* Day grid */}
            <div className="grid grid-cols-7 gap-1">
              {DAY_LABELS.map((d, i) => (
                <span key={i} className="text-[11px] text-mdv-neutral-400 text-center py-1">
                  {d}
                </span>
              ))}
              {cells.map((_, i) => {
                const day = i - firstDayOfWeek + 1;
                if (day < 1) return <span key={i} />;
                const isSelected = day === selectedDay;
                const isPast = day < today.getDate() && month === today.getMonth() && year === today.getFullYear();
                return (
                  <button
                    key={i}
                    disabled={isPast}
                    onClick={() => setSelectedDay(day)}
                    className={cn(
                      "h-8 w-8 mx-auto rounded-full text-xs transition-colors",
                      isSelected
                        ? "bg-mdv-primary-600 text-white font-semibold"
                        : isPast
                        ? "text-mdv-neutral-300 cursor-not-allowed"
                        : "text-mdv-neutral-700 hover:bg-mdv-primary-50 hover:text-mdv-primary-700"
                    )}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time slots */}
          <div className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm p-5 flex-1">
            <p className="text-sm font-semibold text-mdv-neutral-900 mb-4">
              2. Select Time
            </p>
            <div className="grid grid-cols-2 gap-2">
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={cn(
                    "px-3 py-2.5 rounded-mdv-md text-sm font-medium transition-colors border",
                    selectedTime === t
                      ? "bg-mdv-primary-600 text-white border-mdv-primary-600"
                      : "bg-white text-mdv-neutral-700 border-mdv-neutral-200 hover:border-mdv-primary-300 hover:text-mdv-primary-600"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-mdv-neutral-400 mt-3">
              ◷ Timezone: Pacific Daylight Time (UTC-7)
            </p>
          </div>
        </div>

        {/* ── Session summary + Confirm ─────────────────── */}
        <div className="flex items-center gap-6 bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm p-5">
          {/* Highlights */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-mdv-neutral-400 mb-3">
              Session Highlights
            </p>
            <div className="flex gap-4 flex-wrap">
              {SESSION_HIGHLIGHTS.map((h) => (
                <span key={h.label} className="flex items-center gap-1.5 text-sm text-mdv-neutral-700">
                  <span className="h-4 w-4 rounded-full bg-mdv-primary-100 flex items-center justify-center">
                    <CheckIcon size={9} className="text-mdv-primary-600" />
                  </span>
                  {h.label}
                </span>
              ))}
            </div>
          </div>

          {/* Booking summary */}
          {selectedDay && selectedTime && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <MdvAvatar initials="SR" size="md" />
                <div>
                  <p className="text-xs text-mdv-neutral-500">
                    {MONTH_NAMES[month].slice(0, 3)} {selectedDay}, {year}
                  </p>
                  <p className="text-sm font-semibold text-mdv-neutral-900">
                    {selectedTime}
                  </p>
                </div>
              </div>
              <MdvButton size="sm" onClick={handleConfirm}>
                Confirm Booking
              </MdvButton>
            </div>
          )}
        </div>

        {/* ── Post-session roadmap ──────────────────────── */}
        <div className="bg-mdv-surface rounded-mdv-lg border border-mdv-neutral-200 shadow-mdv-sm p-5">
          <p className="text-xs font-semibold text-mdv-primary-600 mb-4">
            ✦ POST-SESSION ROADMAP PREVIEW
          </p>
          <div className="grid grid-cols-3 gap-4">
            {POST_STEPS.map((s) => (
              <div key={s.num} className="flex flex-col gap-1.5">
                <div className="h-8 w-8 rounded-full border-2 border-mdv-primary-200 bg-mdv-primary-50 flex items-center justify-center text-xs font-bold text-mdv-primary-600">
                  {s.num}
                </div>
                <p className="text-sm font-semibold text-mdv-neutral-900">{s.title}</p>
                <p className="text-xs text-mdv-neutral-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
