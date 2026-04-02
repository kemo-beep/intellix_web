import Link from "next/link"
import type { Metadata } from "next"

import { PageShell } from "@/components/marketing/page-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CoursesCategoryBrowse } from "@/components/marketing/courses-category-browse"
import { CoursesFullCatalogGrid } from "@/components/marketing/courses-catalog-sections"
import {
  addOns,
  codeLanguages,
  creativeStack,
  extraProgramTools,
  pricingBands,
  subjectsToPrograms,
  whatsappHref,
} from "@/lib/site-content"
export const metadata: Metadata = {
  title: "Courses & programs",
  description:
    "Intellix by category — Learn AI, Development, Business, Finance, IT, Office Productivity, Design, Photography & Video. Plus creator add-ons and CodeCraft paths.",
}

export default function CoursesPage() {
  return (
    <PageShell
      title="Courses & programs"
      subtitle="Browse by category below (same structure as the header Courses menu), then the full program grid. Learn by doing — tools we run in lab. No pricing on cards; see suggested GMD bands at the bottom."
    >
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/enroll">Enroll</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href={whatsappHref("Help me pick a course.")} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </Button>
      </div>

      <section className="mt-14">
        <h2 className="font-heading text-xl font-semibold">Plans</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          For individuals · For students (discounts on Enroll) · For business / corporate training —{" "}
          <Link href="/contact" className="text-primary font-medium hover:underline">
            Contact
          </Link>
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-xl font-semibold">Career building</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          <Link href="/portfolio" className="text-primary font-medium hover:underline">
            Portfolio
          </Link>
          {" · "}
          <Link href="#extras" className="text-primary font-medium hover:underline">
            Freelance Pro
          </Link>
          {" · "}
          <Link href="/enroll" className="text-primary font-medium hover:underline">
            Enroll
          </Link>
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-xl font-semibold">Browse by category</h2>
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm">
          Eight areas — Learn AI, Development, Business, Finance &amp; Accounting, IT &amp; Software, Office Productivity
          (ChatGPT, Claude, Gemini for everyday work), Design, and Photography &amp; Video — each opens into topic cards that
          link to the right program or intake.
        </p>
        <div className="mt-8">
          <CoursesCategoryBrowse />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-xl font-semibold">Subjects → programs</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Program</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjectsToPrograms.map((row) => (
                <TableRow key={row.subject}>
                  <TableCell className="font-medium">{row.subject}</TableCell>
                  <TableCell>
                    {row.href ? (
                      <Link href={row.href} className="text-primary hover:underline">
                        {row.program}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">{row.program}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-xl font-semibold">Languages & technologies (CodeCraft)</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {codeLanguages.map((lang) => (
            <Link key={lang.name} href="/courses/codecraft">
              <Badge variant="outline" className="cursor-pointer px-3 py-1 text-xs font-normal hover:bg-muted">
                {lang.name}
              </Badge>
            </Link>
          ))}
        </div>
        <p className="text-muted-foreground mt-4 text-sm">
          <strong className="text-foreground">Creative stack:</strong> {creativeStack}
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-xl font-semibold">All programs</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl text-sm">
          Tap a card for the full track list and tools on each program page — layout matches the home &quot;Top programs&quot;
          grid (4 columns on large desktops).
        </p>
        <div className="mt-8">
          <CoursesFullCatalogGrid />
        </div>
      </section>

      <section className="mt-14" id="extras">
        <h2 className="font-heading text-xl font-semibold">Creator Lab, Freelance Pro, AI Boost — tools</h2>
        <div className="mt-4 space-y-4">
          {extraProgramTools.map((ex) => (
            <div key={ex.name} className="rounded-lg border border-border p-4">
              <h3 className="font-heading font-semibold">{ex.name}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{ex.tools}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-xl font-semibold">Suggested pricing (GMD)</h2>
        <ul className="text-muted-foreground mt-3 list-disc space-y-1 pl-5 text-sm">
          {pricingBands.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-xl font-semibold">Add-ons & bundles</h2>
        <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 text-sm">
          {addOns.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

    </PageShell>
  )
}
