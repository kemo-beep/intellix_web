import type { Metadata } from "next"

import { ContactForm } from "@/components/forms/contact-form"
import { PageShell } from "@/components/marketing/page-shell"
import { Button } from "@/components/ui/button"
import { siteMeta, whatsappHref } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Contact",
  description: "Location, WhatsApp, email — get in touch with Intellix.",
}

export default function ContactPage() {
  return (
    <PageShell
      title="Contact & location"
      subtitle="We respond fastest on WhatsApp. Use the form for email follow-up."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <ul className="space-y-4 text-sm">
            <li>
              <span className="text-muted-foreground block text-xs font-medium uppercase">Address</span>
              <span className="text-foreground">{siteMeta.addressLine}</span>
            </li>
            <li>
              <span className="text-muted-foreground block text-xs font-medium uppercase">Hours</span>
              <span className="text-foreground">{siteMeta.hours}</span>
            </li>
            <li>
              <span className="text-muted-foreground block text-xs font-medium uppercase">Email</span>
              <a href={`mailto:${siteMeta.email}`} className="text-primary font-medium hover:underline">
                {siteMeta.email}
              </a>
            </li>
          </ul>
          <Button className="mt-8" asChild>
            <a href={whatsappHref()} target="_blank" rel="noreferrer">
              Open WhatsApp
            </a>
          </Button>
          <p className="text-muted-foreground mt-6 text-xs">
            Map embed: add Google Maps iframe here when your address is final.
          </p>
        </div>
        <div>
          <h2 className="font-heading mb-4 text-lg font-semibold">Send a message</h2>
          <ContactForm />
        </div>
      </div>
    </PageShell>
  )
}
