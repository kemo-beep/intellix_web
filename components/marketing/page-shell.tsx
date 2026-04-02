import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function PageShell({
  title,
  subtitle,
  children,
  className,
}: {
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16", className)}>
      <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
      {subtitle ? <p className="text-muted-foreground mt-3 max-w-3xl text-base leading-relaxed">{subtitle}</p> : null}
      <div className="mt-10">{children}</div>
    </div>
  )
}
