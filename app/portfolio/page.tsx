import type { Metadata } from "next"

import { PageShell } from "@/components/marketing/page-shell"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Student work by category — graphic, photo, video, software, and more.",
}

const placeholders = [
  {
    id: "graphic",
    cat: "Graphic",
    title: "Campaign board — sample brand",
    desc: "Placeholder until student work is published.",
  },
  {
    id: "photo",
    cat: "Photo",
    title: "Portrait series",
    desc: "LensLab graduate work coming soon.",
  },
  {
    id: "video-edit",
    cat: "Video edit",
    title: "Commercial spec cut",
    desc: "EditPro project placeholder.",
  },
  {
    id: "videography",
    cat: "Videography",
    title: "Corporate B-roll package",
    desc: "SceneCraft footage sample.",
  },
  {
    id: "software",
    cat: "Software",
    title: "Full-stack app",
    desc: "CodeCraft portfolio deploy.",
  },
  {
    id: "content",
    cat: "Content",
    title: "Creator Lab calendar",
    desc: "Social content strategy sample.",
  },
] as const

export default function PortfolioPage() {
  return (
    <PageShell
      title="Portfolio / student work"
      subtitle="Proof of outcomes — filters and real projects will grow as cohorts graduate."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((p) => (
          <Card key={p.id} id={p.id} className="border-dashed scroll-mt-24">
            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                {p.cat}
              </Badge>
              <CardTitle className="pt-2 text-base">{p.title}</CardTitle>
              <CardDescription>{p.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
