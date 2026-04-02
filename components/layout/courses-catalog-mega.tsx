"use client"

import * as React from "react"
import {
  ArtificialIntelligence01Icon,
  Book01Icon,
  LayoutGridIcon,
  Rocket01Icon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { ProgramCourseNavCard } from "@/components/marketing/program-course-card"
import {
  codeLanguages,
  headerCourseLinks,
  learnAiHref,
  learnAiTracks,
  subjectsToPrograms,
} from "@/lib/site-content"
import { cn } from "@/lib/utils"

function durationPillForCourseHref(href: string): string {
  if (href === "/enroll") return "Apply"
  if (href.includes("/codecraft")) return "Per path"
  if (href.includes("#learn-ai")) return "Modules"
  if (href.includes("#extras")) return "Programs"
  return "Per track"
}

const careerCourseNavItems = [
  {
    title: "Creator Lab",
    blurb: "Platforms, calendars, and content strategy.",
    href: "/courses#extras" as const,
  },
  {
    title: "Freelance Pro",
    blurb: "Upwork, Fiverr, proposals, first clients.",
    href: "/courses#extras" as const,
  },
  {
    title: "AI Boost",
    blurb: "LLMs, automation, AI-assisted creative & code.",
    href: "/courses#extras" as const,
  },
  {
    title: "Enroll",
    blurb: "Pick a program and start your cohort.",
    href: "/enroll" as const,
  },
] as const

type CatalogSection = "programs" | "subjects" | "languages" | "ai" | "career"

const sidebar: {
  id: CatalogSection
  label: string
  sub: string
  icon: typeof Book01Icon
}[] = [
  { id: "programs", label: "Programs", sub: "Core tracks", icon: Book01Icon },
  { id: "subjects", label: "Subjects", sub: "Browse by topic", icon: LayoutGridIcon },
  { id: "languages", label: "Languages & code", sub: "CodeCraft stack", icon: SourceCodeIcon },
  { id: "ai", label: "Learn AI", sub: "LLMs & agents", icon: ArtificialIntelligence01Icon },
  { id: "career", label: "Career & creator", sub: "Monetize skills", icon: Rocket01Icon },
]

const subjectGrid = subjectsToPrograms.filter((s) => s.href).slice(0, 12)

function GridCard({ href, title, subtitle }: { href: string; title: string; subtitle?: string }) {
  return (
    <NavigationMenuLink
      href={href}
      closeOnClick
      className="hover:bg-muted/90 border-border bg-card ring-foreground/8 flex min-h-[4.5rem] flex-col justify-center rounded-lg border px-3 py-3 ring-1 transition-colors"
    >
      <span className="text-foreground text-sm font-semibold leading-tight">{title}</span>
      {subtitle ? (
        <span className="text-muted-foreground mt-1 line-clamp-2 text-xs leading-snug">{subtitle}</span>
      ) : null}
    </NavigationMenuLink>
  )
}

export function CoursesCatalogMega() {
  const [section, setSection] = React.useState<CatalogSection>("programs")

  const panelCopy: Record<CatalogSection, { title: string; body: string; link?: { href: string; label: string } }> = {
    programs: {
      title: "Programs",
      body: "Learn by doing — every track ends with real portfolio work you can show clients or employers.",
      link: { href: "/courses", label: "Compare all programs" },
    },
    subjects: {
      title: "Subjects",
      body: "Explore what we teach by topic — from AI and web dev to photo, video, and design.",
      link: { href: "/courses", label: "Full subject list" },
    },
    languages: {
      title: "Languages & technologies",
      body: "What you can learn in CodeCraft — we only list what we run in the lab.",
      link: { href: "/courses/codecraft", label: "CodeCraft paths" },
    },
    ai: {
      title: "Learn AI",
      body: "Fundamentals through workplace, developer, and creative stacks — modular paths you can stack over time.",
      link: { href: learnAiHref, label: "Full Learn AI section" },
    },
    career: {
      title: "Career & creator",
      body: "Turn skills into income — content strategy, freelance platforms, and AI-assisted workflows.",
      link: { href: "/courses#extras", label: "Creator & AI programs" },
    },
  }

  const copy = panelCopy[section]

  return (
    <NavigationMenuContent className="data-[slot=navigation-menu-content]:p-0 w-[min(calc(100vw-1rem),60rem)] overflow-hidden rounded-xl shadow-lg ring-1 ring-foreground/10">
      <div className="bg-primary text-primary-foreground flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm">
        <span className="font-medium">New cohorts open regularly</span>
        <span className="opacity-90 max-sm:hidden">
          — Learn by doing with real projects, not slide-only theory.
        </span>
      </div>

      <div className="flex max-h-[min(72vh,520px)] min-h-[280px]">
        <div className="bg-muted/50 border-border flex w-48 shrink-0 flex-col gap-0.5 border-r p-2 sm:w-52">
          {sidebar.map((item) => {
            const active = section === item.id
            return (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setSection(item.id)}
                onFocus={() => setSection(item.id)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2.5 text-left text-xs transition-colors outline-none sm:text-sm",
                  active
                    ? "bg-background text-primary shadow-sm ring-1 ring-foreground/10"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <HugeiconsIcon icon={item.icon} strokeWidth={2} className="size-4 shrink-0" aria-hidden />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-1 font-semibold">
                    {item.label}
                    <span className="text-muted-foreground text-[0.65rem] font-normal" aria-hidden>
                      ›
                    </span>
                  </span>
                  <span className="text-muted-foreground block text-[0.65rem] font-normal sm:text-xs">{item.sub}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="border-border shrink-0 border-b px-4 py-4 sm:px-5">
            <h3 className="font-heading text-foreground text-lg font-bold tracking-tight">{copy.title}</h3>
            <p className="text-muted-foreground mt-1 max-w-xl text-xs leading-relaxed sm:text-sm">{copy.body}</p>
            {copy.link ? (
              <NavigationMenuLink
                href={copy.link.href}
                closeOnClick
                className="text-primary mt-2 inline-flex w-fit items-center gap-1 text-xs font-semibold hover:underline sm:text-sm"
              >
                {copy.link.label}
                <span aria-hidden>→</span>
              </NavigationMenuLink>
            ) : null}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
            {section === "programs" ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {headerCourseLinks.map((item) => (
                  <ProgramCourseNavCard
                    key={item.href}
                    cardId={`nav-${item.title}`}
                    contextLabel="Core program"
                    durationPill={durationPillForCourseHref(item.href)}
                    item={{
                      title: item.title,
                      blurb: item.description,
                      href: item.href,
                    }}
                  />
                ))}
              </div>
            ) : null}

            {section === "subjects" ? (
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {subjectGrid.map((item) => (
                  <GridCard
                    key={item.subject}
                    href={item.href!}
                    title={item.subject}
                    subtitle={item.program}
                  />
                ))}
              </div>
            ) : null}

            {section === "languages" ? (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {codeLanguages.map((lang) => (
                  <GridCard
                    key={lang.name}
                    href="/courses/codecraft"
                    title={lang.name}
                    subtitle={lang.paths}
                  />
                ))}
              </div>
            ) : null}

            {section === "ai" ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {learnAiTracks.map((track) => (
                  <ProgramCourseNavCard
                    key={track.id}
                    cardId={`nav-learn-ai-${track.id}`}
                    contextLabel="Learn AI"
                    durationPill="Module"
                    item={{
                      title: track.title,
                      blurb: track.blurb,
                      href: learnAiHref,
                    }}
                  />
                ))}
              </div>
            ) : null}

            {section === "career" ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {careerCourseNavItems.map((item) => (
                  <ProgramCourseNavCard
                    key={item.title}
                    cardId={`nav-career-${item.title}`}
                    contextLabel="Creator & career"
                    durationPill={durationPillForCourseHref(item.href)}
                    item={{ title: item.title, blurb: item.blurb, href: item.href }}
                  />
                ))}
              </div>
            ) : null}
          </div>

          <div className="border-border bg-muted/20 flex shrink-0 justify-center border-t px-4 py-3">
            <NavigationMenuLink
              href="/courses"
              closeOnClick
              className="text-primary inline-flex items-center gap-1 text-sm font-semibold hover:underline"
            >
              Explore the full catalog
              <span aria-hidden className="text-base">
                →
              </span>
            </NavigationMenuLink>
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  )
}
