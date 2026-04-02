"use client"

import Link from "next/link"

import { ProgramCourseCard } from "@/components/marketing/program-course-card"
import { cn } from "@/lib/utils"
import {
  courseDirectoryCategories,
  durationPillForProgramHref,
  learnAiIntro,
  learnAiTracks,
} from "@/lib/site-content"

/** Full category directory on `/courses` — mirrors header mega menu structure. */
export function CoursesCategoryBrowse() {
  return (
    <div>
      <nav
        aria-label="Course categories"
        className="border-border flex flex-wrap gap-2 border-b pb-5"
      >
        {courseDirectoryCategories.map((c) => (
          <Link
            key={c.id}
            href={`#${c.pageAnchor}`}
            className="bg-muted/60 text-foreground hover:bg-muted ring-foreground/8 rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-colors sm:text-sm"
          >
            {c.label}
          </Link>
        ))}
      </nav>

      {courseDirectoryCategories.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.pageAnchor}
          className={cn("scroll-mt-24", i === 0 ? "mt-8" : "mt-14")}
        >
          <h2 className="font-heading text-xl font-semibold">{cat.panelTitle}</h2>
          <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-relaxed">{cat.panelBody}</p>
          {cat.panelLink ? (
            <p className="mt-2">
              <Link href={cat.panelLink.href} className="text-primary text-sm font-medium hover:underline">
                {cat.panelLink.label} →
              </Link>
            </p>
          ) : null}
          <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {cat.links.map((link) => (
              <ProgramCourseCard
                key={`${cat.id}-${link.title}`}
                cardId={`browse-${cat.id}-${link.title}`}
                contextLabel={cat.label}
                durationPill={durationPillForProgramHref(link.href)}
                item={{
                  title: link.title,
                  blurb: link.description,
                  href: link.href,
                }}
              />
            ))}
          </div>
          {cat.id === "learn-ai" ? (
            <div className="border-border mt-10 space-y-4 rounded-xl border p-4 sm:p-5">
              <p className="text-muted-foreground text-sm leading-relaxed">{learnAiIntro}</p>
              <h3 className="font-heading text-foreground text-sm font-semibold">Tools & focus by module</h3>
              <ul className="text-muted-foreground space-y-3 text-sm">
                {learnAiTracks.map((t) => (
                  <li key={t.id}>
                    <strong className="text-foreground">{t.title}:</strong> {t.tools}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ))}
    </div>
  )
}
