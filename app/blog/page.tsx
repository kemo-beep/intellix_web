import Link from "next/link"
import type { Metadata } from "next"

import { PageShell } from "@/components/marketing/page-shell"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Blog & resources",
  description: "Articles, cheatsheets, and guides for design, video, code, and freelancing.",
}

const resources = [
  { type: "Articles", title: "Poster vs social sizing", desc: "Cheat sheet for beginners — coming soon." },
  { type: "Cheatsheets", title: "Premiere shortcuts", desc: "Edit faster on your timeline." },
  { type: "Projects", title: "From brief to portfolio", desc: "How we structure real client-style work." },
  { type: "Videos", title: "Gear on a budget", desc: "Photo and video setup for students." },
  { type: "Articles", title: "First Fiverr / Upwork gig", desc: "Freelance Pro companion read." },
  { type: "Articles", title: "AI tools in 2026", desc: "Productivity and creative workflows." },
]

export default function BlogPage() {
  return (
    <PageShell
      title="Blog & resources"
      subtitle="SEO-friendly hub for tutorials and downloads — share links on WhatsApp and social."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <Card key={r.title}>
            <CardHeader>
              <p className="text-primary text-xs font-semibold uppercase">{r.type}</p>
              <CardTitle className="text-base">{r.title}</CardTitle>
              <CardDescription>{r.desc}</CardDescription>
              <Link href="#" className="text-muted-foreground text-xs hover:underline">
                Coming soon
              </Link>
            </CardHeader>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
