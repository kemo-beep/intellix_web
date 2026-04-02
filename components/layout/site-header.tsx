"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { CoursesCatalogMega } from "@/components/layout/courses-catalog-mega"
import { PortfolioCatalogMega } from "@/components/layout/portfolio-catalog-mega"
import { siteMeta, whatsappHref } from "@/lib/site-content"
import { cn } from "@/lib/utils"

const navLinkClass =
  "text-muted-foreground hover:text-foreground rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors"

export function SiteHeader() {
  return (
    <header className="bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 border-b border-border backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl"
        >
          {siteMeta.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/why-intellix" className={navLinkClass}>
            Why Intellix
          </Link>

          <NavigationMenu delay={0} closeDelay={280}>
            <NavigationMenuList className="flex flex-nowrap gap-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground h-auto rounded-md px-2.5 py-1.5 text-sm font-medium">
                  Courses
                </NavigationMenuTrigger>
                <CoursesCatalogMega />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground h-auto rounded-md px-2.5 py-1.5 text-sm font-medium">
                  Portfolio
                </NavigationMenuTrigger>
                <PortfolioCatalogMega />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/enroll" className={navLinkClass}>
            Enroll
          </Link>
          <Link href="/blog" className={navLinkClass}>
            Blog
          </Link>
          <Link href="/contact" className={navLinkClass}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
            <a
              href={whatsappHref(`Hi ${siteMeta.name}, I have a question about courses.`)}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </Button>
          <Button size="sm" className="font-medium" asChild>
            <Link href="/enroll">Enroll</Link>
          </Button>
        </div>
      </div>

      <div className="border-t border-border/60 md:hidden">
        <nav className="scrollbar-none flex max-w-full gap-1 overflow-x-auto px-3 py-2">
          {[
            { href: "/why-intellix", label: "Why Intellix" },
            { href: "/courses", label: "Courses" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/enroll", label: "Enroll" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                navLinkClass,
                "hover:bg-muted shrink-0 rounded-full px-3 py-1 text-xs"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
