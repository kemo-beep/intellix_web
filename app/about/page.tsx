import type { Metadata } from "next"

import { PageShell } from "@/components/marketing/page-shell"

export const metadata: Metadata = {
  title: "About us",
  description: "Mission, vision, and approach — Intellix digital skills academy in The Gambia.",
}

export default function AboutPage() {
  return (
    <PageShell
      title="About us"
      subtitle="Trust, mission, and local roots — honest about what we offer and how we teach."
    >
      <div className="max-w-3xl space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="font-heading text-foreground text-lg font-semibold">Mission</h2>
          <p className="text-muted-foreground mt-2">
            Empower people with practical digital skills for employment and self-employment.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-foreground text-lg font-semibold">Vision</h2>
          <p className="text-muted-foreground mt-2">
            Anyone can turn creativity and tech skills into a sustainable livelihood.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-foreground text-lg font-semibold">Where we are</h2>
          <p className="text-muted-foreground mt-2">
            The Gambia — accessible location with easy transport (details on our Contact page when finalized).
          </p>
        </section>
        <section>
          <h2 className="font-heading text-foreground text-lg font-semibold">Approach</h2>
          <p className="text-muted-foreground mt-2">
            Learning by doing, portfolio-first, freelancing guidance; corporate training and online options as we
            scale.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-foreground text-lg font-semibold">Certificates</h2>
          <p className="text-muted-foreground mt-2">
            If you pursue an education license and recognized assessment, we will state how certificates align with
            regulatory requirements. Until then, we emphasize portfolio and demonstrable skills.
          </p>
        </section>
      </div>
    </PageShell>
  )
}
