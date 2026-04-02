import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { ProgramDetailView } from "@/components/marketing/program-detail"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { codeLanguages, type ProgramSlug, programs } from "@/lib/site-content"

const slugs = Object.keys(programs) as ProgramSlug[]

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const p = programs[slug as ProgramSlug]
    if (!p) return { title: "Program" }
    return {
      title: p.title,
      description: p.intro,
    }
  })
}

export default async function CourseProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = programs[slug as ProgramSlug]
  if (!program) notFound()

  return (
    <>
      <ProgramDetailView program={program} />
      {slug === "codecraft" ? (
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="font-heading text-xl font-semibold">Languages & technologies</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Same catalog strip as the{" "}
            <Link href="/courses" className="text-primary hover:underline">
              main courses page
            </Link>
            . Teach only what you run in lab.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Language / tech</TableHead>
                  <TableHead>Primary path(s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {codeLanguages.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{row.paths}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : null}
    </>
  )
}
