"use client"

import { ProgramCourseCard } from "@/components/marketing/program-course-card"
import { courseCatalogRows } from "@/lib/site-content"

/** Full catalog on `/courses` — same card layout as the home page program grid. */
export function CoursesFullCatalogGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
      {courseCatalogRows.map((row) => (
        <ProgramCourseCard
          key={`${row.name}-${row.href}`}
          cardId={`catalog-${row.name}`}
          contextLabel={row.area}
          durationPill={row.duration}
          item={{
            title: row.name,
            blurb: `${row.outcome} · ${row.level}`,
            href: row.href,
          }}
        />
      ))}
    </div>
  )
}
