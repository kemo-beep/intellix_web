"use client"

import * as React from "react"
import {
  ArtificialIntelligence01Icon,
  Briefcase01Icon,
  Camera01Icon,
  ComputerIcon,
  Dollar01Icon,
  PaintBoardIcon,
  Presentation01Icon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { ProgramCourseNavCard } from "@/components/marketing/program-course-card"
import { NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import {
  courseDirectoryCategories,
  durationPillForProgramHref,
  type CourseDirectoryCategory,
  type CourseDirectoryIconId,
} from "@/lib/site-content"
import { cn } from "@/lib/utils"

const CATEGORY_ICONS: Record<CourseDirectoryIconId, typeof SourceCodeIcon> = {
  ai: ArtificialIntelligence01Icon,
  development: SourceCodeIcon,
  business: Briefcase01Icon,
  finance: Dollar01Icon,
  it: ComputerIcon,
  office: Presentation01Icon,
  design: PaintBoardIcon,
  photo: Camera01Icon,
}

export function CoursesCatalogMega() {
  const [active, setActive] = React.useState<CourseDirectoryCategory>(courseDirectoryCategories[0]!)

  const copy = active

  return (
    <NavigationMenuContent className="data-[slot=navigation-menu-content]:p-0 w-[min(calc(100vw-1rem),64rem)] overflow-hidden rounded-xl shadow-lg ring-1 ring-foreground/10">
      <div className="bg-primary text-primary-foreground flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm">
        <span className="font-medium">Browse by category</span>
        <span className="opacity-90 max-sm:hidden">
          — Learn AI, Development, Business, Finance, IT, Office, Design, Photo &amp; video.
        </span>
      </div>

      <div className="flex max-h-[min(78vh,560px)] min-h-[300px]">
        <div className="bg-muted/50 border-border max-h-[min(78vh,560px)] w-[9.5rem] shrink-0 overflow-y-auto border-r p-2 sm:w-52">
          {courseDirectoryCategories.map((cat) => {
            const isActive = cat.id === active.id
            const Icon = CATEGORY_ICONS[cat.iconId]
            return (
              <button
                key={cat.id}
                type="button"
                onMouseEnter={() => setActive(cat)}
                onFocus={() => setActive(cat)}
                className={cn(
                  "mb-0.5 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-[0.7rem] transition-colors outline-none sm:px-2.5 sm:py-2.5 sm:text-xs",
                  isActive
                    ? "bg-background text-primary shadow-sm ring-1 ring-foreground/10"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <HugeiconsIcon icon={Icon} strokeWidth={2} className="size-3.5 shrink-0 sm:size-4" aria-hidden />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-0.5 font-semibold leading-tight">
                    {cat.label}
                    <span className="text-muted-foreground text-[0.6rem] font-normal" aria-hidden>
                      ›
                    </span>
                  </span>
                  <span className="text-muted-foreground block text-[0.6rem] font-normal leading-snug sm:text-[0.65rem]">
                    {cat.sub}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="border-border shrink-0 border-b px-4 py-4 sm:px-5">
            <h3 className="font-heading text-foreground text-lg font-bold tracking-tight">{copy.panelTitle}</h3>
            <p className="text-muted-foreground mt-1 max-w-2xl text-xs leading-relaxed sm:text-sm">{copy.panelBody}</p>
            {copy.panelLink ? (
              <NavigationMenuLink
                href={copy.panelLink.href}
                closeOnClick
                className="text-primary mt-2 inline-flex w-fit items-center gap-1 text-xs font-semibold hover:underline sm:text-sm"
              >
                {copy.panelLink.label}
                <span aria-hidden>→</span>
              </NavigationMenuLink>
            ) : null}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {copy.links.map((link) => (
                <ProgramCourseNavCard
                  key={`${copy.id}-${link.title}`}
                  cardId={`nav-dir-${copy.id}-${link.title}`}
                  contextLabel={copy.label}
                  durationPill={durationPillForProgramHref(link.href)}
                  item={{
                    title: link.title,
                    blurb: link.description,
                    href: link.href,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="border-border bg-muted/20 flex shrink-0 justify-center border-t px-4 py-3">
            <NavigationMenuLink
              href={`/courses#${copy.pageAnchor}`}
              closeOnClick
              className="text-primary inline-flex items-center gap-1 text-sm font-semibold hover:underline"
            >
              Open this category on Courses
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
