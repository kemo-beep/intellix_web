import Link from "next/link"

import { TopProgramsTabs } from "@/components/marketing/top-programs-tabs"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { courseCatalogRows, siteMeta, whatsappHref } from "@/lib/site-content"

const skillLinks = courseCatalogRows.map((row) => ({
  title: row.name,
  area: row.area,
  href: row.href,
  blurb: row.outcome,
}))

export default function HomePage() {
  return (
    <>
      <section className="from-primary/5 via-background to-accent/5 relative overflow-hidden bg-gradient-to-b">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <p className="text-primary font-semibold tracking-wide uppercase">{siteMeta.name}</p>
          <h1 className="font-heading mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteMeta.tagline}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
            Learn modern skills for jobs and freelancing in The Gambia — with{" "}
            <strong className="text-foreground">real projects</strong> and a{" "}
            <strong className="text-foreground">portfolio</strong> you can show clients or employers.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/enroll">Join free intro</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">View courses</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href={whatsappHref(`Hi ${siteMeta.name}!`)} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <TopProgramsTabs />

      <section className="border-t border-border bg-muted/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">What you learn</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl text-sm">
            Full catalog — every program links to details, tracks, and tools.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillLinks.map((s) => (
              <Link key={s.title} href={s.href} className="block transition-opacity hover:opacity-90">
                <Card className="h-full">
                  <CardHeader>
                    <p className="text-muted-foreground text-xs font-medium uppercase">{s.area}</p>
                    <CardTitle className="text-base">{s.title}</CardTitle>
                    <CardDescription>{s.blurb}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 text-sm">
            Add-ons: <Link href="/courses#extras" className="text-primary font-medium hover:underline">Digital marketing</Link>
            {" · "}
            <Link href="/courses#extras" className="text-primary font-medium hover:underline">Essential computer skills</Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">Why Intellix</h2>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed">
          <li className="flex gap-2">
            <span className="text-primary font-bold">·</span>
            <span>
              <strong className="text-foreground">Project-based learning</strong> — portfolio + freelancing support.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">·</span>
            <span>
              <strong className="text-foreground">Modern stack</strong> — design, photo & video production, editing,
              software paths, AI tools.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">·</span>
            <span>
              Built for <strong className="text-foreground">The Gambia</strong> — practical outcomes, not theory-only.
            </span>
          </li>
        </ul>
        <Button variant="link" className="mt-4 h-auto p-0" asChild>
          <Link href="/why-intellix">Read more about our approach →</Link>
        </Button>
      </section>

      <section className="bg-primary text-primary-foreground py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="font-heading text-lg font-semibold sm:text-xl">Outcomes that matter</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm opacity-90">
            Portfolio work · Freelancing setup (Upwork / Fiverr) · Optional placement as partnerships grow
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-bold tracking-tight">Learner stories</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Quotes and project snapshots coming soon — see{" "}
          <Link href="/portfolio" className="text-primary font-medium hover:underline">
            Portfolio
          </Link>{" "}
          for student work.
        </p>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">Start learning today</h2>
          <p className="text-muted-foreground mx-auto mt-2 max-w-lg text-sm">
            Build your first real project with Intellix.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/enroll">Enroll</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={whatsappHref()} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
