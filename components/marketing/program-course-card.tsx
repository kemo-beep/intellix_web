"use client"

import Image from "next/image"
import Link from "next/link"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export type ProgramCourseCardItem = {
  title: string
  blurb: string
  href: string
  badge?: string
  /** Optional 16:9 image in `public/` (e.g. `/thumbs/canva.jpg`). Falls back to gradient. */
  thumbnailSrc?: string
}

/** @deprecated Use ProgramCourseCardItem */
export type TopProgramCourseCardItem = ProgramCourseCardItem

function gradientForKey(key: string): string {
  let h = 0
  for (let i = 0; i < key.length; i++) {
    h = key.charCodeAt(i) + ((h << 5) - h)
  }
  const hue = Math.abs(h) % 360
  const h2 = (hue + 48) % 360
  return `linear-gradient(135deg, hsl(${hue} 42% 38%) 0%, hsl(${h2} 50% 24%) 100%)`
}

function initialsFromTitle(title: string): string {
  const parts = title.split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    return (parts[0]![0]! + parts[1]![0]!).toUpperCase()
  }
  return title.slice(0, 2).toUpperCase()
}

const shellClass =
  "group border-border bg-card text-card-foreground ring-foreground/6 flex flex-col overflow-hidden rounded-xl border shadow-sm ring-1 transition-[box-shadow] hover:shadow-md"

type InnerProps = {
  item: ProgramCourseCardItem
  contextLabel: string
  cardId: string
  compact: boolean
  durationPill: string
  imageSizes: string
}

function ProgramCourseCardInner({ item, contextLabel, cardId, compact, durationPill, imageSizes }: InnerProps) {
  const bg = gradientForKey(cardId)

  return (
    <>
      <div
        className="relative aspect-video w-full shrink-0 overflow-hidden bg-muted"
        style={item.thumbnailSrc ? undefined : { background: bg }}
        aria-hidden
      >
        {item.thumbnailSrc ? (
          <Image
            src={item.thumbnailSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes={imageSizes}
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.2),transparent_55%)]" />
            <span
              className={cn(
                "font-heading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold tracking-tight text-white/90 drop-shadow-md",
                compact ? "text-xl" : "text-3xl sm:text-4xl"
              )}
            >
              {initialsFromTitle(item.title)}
            </span>
          </>
        )}
        <span
          className={cn(
            "bg-background/90 text-foreground absolute right-2 bottom-2 rounded font-medium shadow-sm backdrop-blur-sm",
            compact ? "px-1 py-0.5 text-[0.55rem]" : "px-1.5 py-0.5 text-[0.65rem]"
          )}
        >
          {durationPill}
        </span>
      </div>

      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col",
          compact ? "gap-1 p-2" : "gap-1.5 p-3 sm:p-3.5"
        )}
      >
        <h3
          className={cn(
            "text-foreground group-hover:text-primary line-clamp-2 font-semibold leading-snug",
            compact ? "text-xs" : "text-sm sm:text-[0.95rem]"
          )}
        >
          {item.title}
        </h3>
        <p className={cn("text-muted-foreground line-clamp-1", compact ? "text-[0.65rem]" : "text-xs")}>
          Intellix · {contextLabel}
        </p>
        <p
          className={cn(
            "text-muted-foreground leading-relaxed",
            compact ? "line-clamp-2 text-[0.65rem]" : "line-clamp-2 text-xs"
          )}
        >
          {item.blurb}
        </p>
        <div
          className={cn(
            "mt-auto flex flex-wrap items-center gap-x-2 gap-y-1",
            compact ? "pt-0" : "pt-0.5"
          )}
        >
          {item.badge ? (
            <span
              className={cn(
                "bg-primary/12 text-primary rounded font-semibold",
                compact ? "px-1 py-0.5 text-[0.55rem]" : "px-1.5 py-0.5 text-[0.65rem]"
              )}
            >
              {item.badge}
            </span>
          ) : null}
          {!compact ? (
            <>
              <span className="inline-flex items-center gap-0.5 text-[0.7rem] text-amber-600 dark:text-amber-400">
                <span aria-hidden>★</span>
                <span className="font-medium tabular-nums">4.9</span>
              </span>
              <span className="text-muted-foreground text-[0.65rem]">Hands-on · Portfolio</span>
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}

export type ProgramCourseCardProps = {
  item: ProgramCourseCardItem
  contextLabel: string
  /** Stable id for gradient + keys (e.g. tabId-title or slug) */
  cardId: string
  compact?: boolean
  durationPill?: string
  className?: string
}

/** YouTube-style card for page grids — matches home “Top programs” cards. */
export function ProgramCourseCard({
  item,
  contextLabel,
  cardId,
  compact = false,
  durationPill = "Per track",
  className,
}: ProgramCourseCardProps) {
  const imageSizes = compact
    ? "(max-width: 768px) 50vw, 220px"
    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"

  return (
    <Link href={item.href} className={cn(shellClass, className)}>
      <ProgramCourseCardInner
        item={item}
        contextLabel={contextLabel}
        cardId={cardId}
        compact={compact}
        durationPill={durationPill}
        imageSizes={imageSizes}
      />
    </Link>
  )
}

/** Same visual as ProgramCourseCard, for use inside `NavigationMenuContent`. */
export function ProgramCourseNavCard({
  item,
  contextLabel,
  cardId,
  durationPill = "Per track",
}: Omit<ProgramCourseCardProps, "compact" | "className">) {
  const imageSizes = "(max-width: 768px) 50vw, 220px"

  return (
    <NavigationMenuLink
      href={item.href}
      closeOnClick
      className={cn(
        shellClass,
        "hover:!bg-card focus-visible:!bg-card data-[active]:!bg-card !flex !h-auto !w-full !flex-col !items-stretch !gap-0 !rounded-xl !p-0 hover:!shadow-md focus-visible:ring-2 focus-visible:ring-ring/40"
      )}
    >
      <ProgramCourseCardInner
        item={item}
        contextLabel={contextLabel}
        cardId={cardId}
        compact
        durationPill={durationPill}
        imageSizes={imageSizes}
      />
    </NavigationMenuLink>
  )
}

/** Home page top-program tabs — full-size card with rating row. */
export function TopProgramCourseCard({
  item,
  tabLabel,
  tabId,
}: {
  item: ProgramCourseCardItem
  tabLabel: string
  tabId: string
}) {
  return (
    <ProgramCourseCard item={item} contextLabel={tabLabel} cardId={`${tabId}-${item.title}`} />
  )
}
