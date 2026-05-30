"use client";

import { useState } from "react";
import Link from "next/link";
import { MdvTopBar } from "@/src/components/ui/mdv/top-bar/mdv-top-bar";
import { MdvButton } from "@/src/components/ui/mdv/button/mdv-button";
import { MdvBadge } from "@/src/components/ui/mdv/badge/mdv-badge";
import { MdvMissionCard } from "@/src/components/ui/mdv/mission-card/mdv-mission-card";
import { MdvSearchInput } from "@/src/components/ui/mdv/input/mdv-input";
import { MdvPagination } from "@/src/components/ui/mdv/pagination/mdv-pagination";
import { CalendarIcon } from "@/src/components/ui/mdv/icons/mdv-icons";
import { cn } from "@/src/lib/utils";

/* ── Mock data ───────────────────────────────────────── */

const FILTERS = ["Data Science", "Business Analytics", "UX Design", "Clinical Medicine"];

const PROGRAMS = [
  {
    id: "cs",
    abbr: "CS",
    name: "Computer Science",
    university: "Stanford",
    level: "Master's",
    description: "Foundation in computer systems and AI for tech leadership.",
    category: "Data Science",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "ba",
    abbr: "BA",
    name: "Business Admin",
    university: "Harvard",
    level: "MBA",
    description: "Strategic management and global leadership development.",
    category: "Business Analytics",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "dd",
    abbr: "DD",
    name: "Digital Design",
    university: "MIT",
    level: "Bachelor's",
    description: "Visual communication and user experience design systems.",
    category: "UX Design",
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: "ds",
    abbr: "DS",
    name: "Data Science",
    university: "Berkeley",
    level: "Master's",
    description: "Applied machine learning, statistics, and data engineering at scale.",
    category: "Data Science",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "cm",
    abbr: "CM",
    name: "Clinical Medicine",
    university: "Johns Hopkins",
    level: "M.D.",
    description: "Evidence-based clinical training with focus on diagnostic reasoning.",
    category: "Clinical Medicine",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "ux",
    abbr: "UX",
    name: "UX Research",
    university: "Carnegie Mellon",
    level: "Master's",
    description: "Human-centered design research methods and user testing frameworks.",
    category: "UX Design",
    color: "bg-rose-100 text-rose-700",
  },
];

/* ── Page ────────────────────────────────────────────── */

export default function MissionsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = PROGRAMS.filter((p) => {
    const matchQuery =
      !query ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.university.toLowerCase().includes(query.toLowerCase());
    const matchFilter = !activeFilter || p.category === activeFilter;
    return matchQuery && matchFilter;
  });

  return (
    <>
      <MdvTopBar
        left={
          <span className="text-sm font-semibold text-mdv-neutral-700">
            Mission Workspace
          </span>
        }
        searchPlaceholder="Search missions..."
        userInitials="AR"
      />

      <div className="flex-1 p-8 max-w-5xl mx-auto w-full flex flex-col gap-8">
        {/* ── Page header ─────────────────────────────── */}
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-2xl font-bold text-mdv-neutral-900">Start Your Mission</h1>
          <p className="text-sm text-mdv-neutral-500 mt-2">
            Choose a program or talk to an expert to build your academic roadmap.
          </p>
        </div>

        {/* ── Search ──────────────────────────────────── */}
        <MdvSearchInput
          placeholder="Search for your target program (e.g., Computer Science, MBA)"
          value={query}
          onChange={setQuery}
          onSearch={(v) => setQuery(v)}
          buttonLabel="Search"
          className="max-w-2xl mx-auto w-full"
        />

        {/* ── Filter tags ─────────────────────────────── */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter((prev) => (prev === f ? null : f))}
              className={cn(
                "px-4 py-1.5 rounded-mdv-full text-sm font-medium transition-colors border",
                activeFilter === f
                  ? "bg-mdv-primary-600 text-white border-mdv-primary-600"
                  : "bg-white text-mdv-neutral-600 border-mdv-neutral-200 hover:border-mdv-primary-300 hover:text-mdv-primary-600"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Program cards grid ───────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-3 gap-5">
            {filtered.map((p) => (
              <MdvMissionCard key={p.id}>
                <MdvMissionCard.Icon>
                  <span className={`text-lg font-bold px-2 py-1 rounded-mdv-sm ${p.color}`}>
                    {p.abbr}
                  </span>
                </MdvMissionCard.Icon>

                <MdvMissionCard.Title university={p.university} level={p.level}>
                  {p.name}
                </MdvMissionCard.Title>

                <MdvMissionCard.Description>{p.description}</MdvMissionCard.Description>

                <MdvMissionCard.Action>
                  <Link href={`/mission-room/missions/${p.id}`} className="block w-full">
                    <MdvButton className="w-full" size="sm">
                      Select
                    </MdvButton>
                  </Link>
                </MdvMissionCard.Action>
              </MdvMissionCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-mdv-neutral-400">
            <p className="text-sm">No programs found for &ldquo;{query}&rdquo;</p>
          </div>
        )}

        {/* ── Pagination ───────────────────────────────── */}
        {filtered.length > 0 && (
          <MdvPagination
            page={page}
            totalPages={3}
            onPageChange={setPage}
            showInfo
          />
        )}

        {/* ── Consult banner ───────────────────────────── */}
        <div className="rounded-mdv-lg border border-mdv-neutral-200 bg-mdv-surface shadow-mdv-sm p-5 flex items-center gap-6">
          <div className="flex-1">
            <p className="font-semibold text-mdv-neutral-900">Not sure where to start?</p>
            <p className="text-sm text-mdv-neutral-500 mt-1">
              Talk to an advisor for a free 15-minute consultation and get personalised
              guidance for your academic journey.
            </p>
          </div>
          <Link href="/mission-room/mentors/consultation">
            <MdvButton
              variant="outline"
              size="sm"
              leftIcon={<CalendarIcon size={15} />}
            >
              Book Free Consult
            </MdvButton>
          </Link>
        </div>
      </div>
    </>
  );
}
