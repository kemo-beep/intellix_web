import Link from "next/link"

import { footerColumns, siteMeta, whatsappHref } from "@/lib/site-content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-heading text-lg font-semibold">{siteMeta.name}</p>
            <p className="text-muted-foreground mt-2 max-w-xs text-sm leading-relaxed">
              {siteMeta.description}
            </p>
            <a
              href={whatsappHref()}
              className="text-primary mt-4 inline-block text-sm font-medium hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="font-heading text-foreground text-sm font-semibold">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-muted-foreground mt-10 flex flex-col gap-2 border-t border-border pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteMeta.name}. {siteMeta.addressLine}
          </p>
          <p>{siteMeta.email}</p>
        </div>
      </div>
    </footer>
  )
}
