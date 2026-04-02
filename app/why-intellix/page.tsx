import type { Metadata } from "next"

import { PageShell } from "@/components/marketing/page-shell"
import { whyPillars } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Why Intellix",
  description: "Project-based digital skills training in The Gambia — practical, modern, career-focused.",
}

export default function WhyIntellixPage() {
  return (
    <PageShell
      title="Why Intellix"
      subtitle="We are not generic computer classes — we are a practical, job-focused academy. Here is what sets us apart."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {whyPillars.map((p) => (
          <div key={p.title} className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">{p.title}</h2>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
