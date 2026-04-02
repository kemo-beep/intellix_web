import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { ProgramDetail as ProgramDetailType } from "@/lib/site-content"

import { PageShell } from "./page-shell"

export function ProgramDetailView({ program }: { program: ProgramDetailType }) {
  return (
    <PageShell
      title={program.title}
      subtitle={`${program.tagline} · ${program.durationLabel} · ${program.level}. ${program.intro}`}
    >
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/enroll">Enroll</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/courses">All courses</Link>
        </Button>
      </div>

      <div className="mt-10 overflow-x-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[140px]">Track / path</TableHead>
              <TableHead>Focus</TableHead>
              <TableHead>Outcomes</TableHead>
              <TableHead className="min-w-[200px]">Tools</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {program.rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell className="text-muted-foreground">{row.focus}</TableCell>
                <TableCell className="text-muted-foreground">{row.deliverables}</TableCell>
                <TableCell className="text-muted-foreground text-xs">{row.tools}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {program.footnotes?.length ? (
        <ul className="text-muted-foreground mt-8 list-disc space-y-2 pl-5 text-sm">
          {program.footnotes.map((note) => (
            <li key={note.slice(0, 40)}>{note}</li>
          ))}
        </ul>
      ) : null}
    </PageShell>
  )
}
