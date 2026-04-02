"use client"

import * as React from "react"
import {
  Album01Icon,
  Award01Icon,
  Image01Icon,
  LaptopIcon,
  LayoutGridIcon,
  Video01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { headerPortfolioLinks } from "@/lib/site-content"
import { cn } from "@/lib/utils"

type PortfolioSection = "all" | "creative" | "motion" | "digital" | "spotlight"

const creativeHrefs = new Set(["/portfolio#graphic", "/portfolio#photo"])
const motionHrefs = new Set(["/portfolio#video-edit", "/portfolio#videography"])
const digitalHrefs = new Set(["/portfolio#software", "/portfolio#content"])

const sidebar: {
  id: PortfolioSection
  label: string
  sub: string
  icon: typeof LayoutGridIcon
}[] = [
  { id: "all", label: "All categories", sub: "Browse the wall", icon: LayoutGridIcon },
  { id: "creative", label: "Creative", sub: "Design & photo", icon: Image01Icon },
  { id: "motion", label: "Motion", sub: "Edit & production", icon: Video01Icon },
  { id: "digital", label: "Digital", sub: "Code & content", icon: LaptopIcon },
  { id: "spotlight", label: "Spotlight", sub: "Stories & submit", icon: Award01Icon },
]

function filterLinks(section: PortfolioSection) {
  if (section === "all") return [...headerPortfolioLinks]
  const set =
    section === "creative"
      ? creativeHrefs
      : section === "motion"
        ? motionHrefs
        : section === "digital"
          ? digitalHrefs
          : null
  if (!set) return []
  return headerPortfolioLinks.filter((l) => set.has(l.href))
}

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

export function PortfolioCatalogMega() {
  const [section, setSection] = React.useState<PortfolioSection>("all")

  const panelCopy: Record<
    PortfolioSection,
    { title: string; body: string; link?: { href: string; label: string } }
  > = {
    all: {
      title: "Student work",
      body: "Real projects from Intellix learners — organized by discipline. More pieces go live as cohorts graduate.",
      link: { href: "/portfolio", label: "How we showcase work" },
    },
    creative: {
      title: "Creative portfolio",
      body: "Graphic design, branding, and photography — Graphic Design and LensLab outcomes.",
      link: { href: "/courses/graphic-design", label: "Graphic Design" },
    },
    motion: {
      title: "Motion portfolio",
      body: "Edited pieces and on-set production — EditPro and SceneCraft student work.",
      link: { href: "/courses/editpro", label: "EditPro" },
    },
    digital: {
      title: "Digital portfolio",
      body: "Apps, sites, and creator campaigns — CodeCraft and Creator Lab highlights.",
      link: { href: "/courses/codecraft", label: "CodeCraft" },
    },
    spotlight: {
      title: "Spotlight",
      body: "Learner stories and featured case studies will appear here. Want your work featured after you graduate?",
      link: { href: "/contact", label: "Contact us" },
    },
  }

  const copy = panelCopy[section]
  const links = filterLinks(section)

  return (
    <NavigationMenuContent className="data-[slot=navigation-menu-content]:p-0 w-[min(calc(100vw-1rem),52rem)] overflow-hidden rounded-xl shadow-lg ring-1 ring-foreground/10">
      <div className="bg-accent text-accent-foreground flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm">
        <HugeiconsIcon icon={Album01Icon} strokeWidth={2} className="size-4 shrink-0 opacity-90" aria-hidden />
        <span className="font-medium">Proof that learn-by-doing works</span>
        <span className="opacity-90 max-sm:hidden">— explore projects by category.</span>
      </div>

      <div className="flex max-h-[min(72vh,500px)] min-h-[260px]">
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
            {section !== "spotlight" ? (
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {links.map((item) => (
                  <GridCard key={item.href} href={item.href} title={item.title} subtitle={item.description} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <GridCard
                  href="/portfolio"
                  title="Full gallery"
                  subtitle="Scroll every category on one page — graphic, photo, video, code, and more."
                />
                <GridCard
                  href="/why-intellix"
                  title="Why portfolio matters"
                  subtitle="How we build work you can show employers and clients."
                />
                <GridCard
                  href="/enroll"
                  title="Start your portfolio"
                  subtitle="Join a cohort and ship real projects from week one."
                />
                <GridCard
                  href="/contact"
                  title="Feature your story"
                  subtitle="Alumni: ask about learner spotlights and referrals."
                />
              </div>
            )}
          </div>

          <div className="border-border bg-muted/20 flex shrink-0 justify-center border-t px-4 py-3">
            <NavigationMenuLink
              href="/portfolio"
              closeOnClick
              className="text-primary inline-flex items-center gap-1 text-sm font-semibold hover:underline"
            >
              Explore the full portfolio
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
