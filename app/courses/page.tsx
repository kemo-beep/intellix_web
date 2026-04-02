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
import { CoursesFullCatalogGrid, LearnAiTracksGrid } from "@/components/marketing/courses-catalog-sections"
import {
  addOns,
  codeLanguages,
  creativeStack,
  extraProgramTools,
  learnAiIntro,
  learnAiTracks,
  pricingBands,
  subjectsToPrograms,
  whatsappHref,
} from "@/lib/site-content"
export const metadata: Metadata = {
  title: "Courses & programs",
  description:
    "Intellix catalog — design, video, photo, code, and Learn AI (fundamentals, workplace AI, Cursor/Claude Code, generative creative). Creator and freelance add-ons.",
}

export default function CoursesPage() {
  return (
    <PageShell
      title="Courses & programs"
      subtitle="Same program cards as the home page — thumbnail, outcomes, and level. Learn by doing with tools we actually run in the lab (Adobe, DaVinci, CapCut mobile, Cursor, DJI, and more). No pricing on cards; see suggested GMD bands below."
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

      <section className="mt-14 scroll-mt-24" id="learn-ai">
        <h2 className="font-heading text-xl font-semibold">Learn AI</h2>
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-relaxed">{learnAiIntro}</p>
        <div className="mt-8">
          <LearnAiTracksGrid />
        </div>
        <div className="border-border mt-10 space-y-4 rounded-xl border p-4 sm:p-5">
          <h3 className="font-heading text-foreground text-sm font-semibold">Tools & focus by module</h3>
          <ul className="text-muted-foreground space-y-3 text-sm">
            {learnAiTracks.map((t) => (
              <li key={t.id}>
                <strong className="text-foreground">{t.title}:</strong> {t.tools}
              </li>
            ))}
          </ul>
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
