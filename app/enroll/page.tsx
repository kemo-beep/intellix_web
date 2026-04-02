import type { Metadata } from "next"

import { EnrollForm } from "@/components/forms/enroll-form"
import { PageShell } from "@/components/marketing/page-shell"
import { Button } from "@/components/ui/button"
import { pricingBands } from "@/lib/site-content"
import { siteMeta, whatsappHref } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Enroll",
  description: "Register for Intellix programs — payment plans and student discounts available.",
}

export default function EnrollPage() {
  return (
    <PageShell
      title="Enroll / signup"
      subtitle="Tell us which program fits you. We will follow up with cohort dates, payment options (mobile money, transfer, card where available), and payment plans."
    >
      <div className="mb-10 rounded-lg border border-border bg-muted/30 p-6">
        <h2 className="font-heading text-lg font-semibold">Pricing bands (Gambia)</h2>
        <ul className="text-muted-foreground mt-3 list-disc space-y-1 pl-5 text-sm">
          {pricingBands.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <Button variant="outline" className="mt-4" asChild>
          <a href={whatsappHref("I'd like to discuss payment plans.")} target="_blank" rel="noreferrer">
            Ask about payment plans on WhatsApp
          </a>
        </Button>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading mb-4 text-lg font-semibold">Registration</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Free intro: mention it in your message or{" "}
            <a
              href={whatsappHref("I'd like to join a free intro session.")}
              className="text-primary font-medium hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us
            </a>
            .
          </p>
          <EnrollForm />
        </div>
        <div className="text-muted-foreground space-y-4 text-sm">
          <p>
            <strong className="text-foreground">Prefer chat?</strong> Message {siteMeta.name} on WhatsApp with your
            name, program interest, and phone number.
          </p>
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <a href={whatsappHref(`Hi ${siteMeta.name}, I want to enroll.`)} target="_blank" rel="noreferrer">
              WhatsApp enroll
            </a>
          </Button>
        </div>
      </div>
    </PageShell>
  )
}
