"use client"

import Link from "next/link"

import { TopProgramCourseCard } from "@/components/marketing/program-course-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { topProgramTabs, whatsappHref } from "@/lib/site-content"

export function TopProgramsTabs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-primary text-sm font-semibold tracking-wide uppercase">Top programs</p>
      <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Build skills that stand out
      </h2>
      <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-relaxed">
        <strong className="text-foreground">Learn by doing</strong> — graphic design, photo (mobile shooting & editing,
        Lightroom, events and commercial stills), motion/video (including phone-only edit), mobile videography, on-set work,
        CodeCraft (frontend through DevOps), and Learn AI (LLMs, agents, workplace copilots, Cursor/Claude Code, generative
        creative) all end in real portfolio work.
      </p>
      <p className="text-muted-foreground mt-2 text-sm">
        Hands-on from week one · Same tracks as the full course pages — tap a card for details
      </p>

      <Tabs defaultValue="design" className="mt-10">
        <TabsList
          variant="line"
          className="border-border mb-8 h-auto w-full min-w-0 flex-nowrap justify-start gap-0 overflow-x-auto overscroll-x-contain border-b bg-transparent p-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {topProgramTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="text-muted-foreground shrink-0 rounded-none px-3 py-2.5 text-xs font-medium sm:px-4 sm:text-sm"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {topProgramTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="text-base">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {tab.items.map((item) => (
                <TopProgramCourseCard key={`${tab.id}-${item.title}`} item={item} tabLabel={tab.label} tabId={tab.id} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/courses">View all programs</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href={whatsappHref("Which program fits my goals?")} target="_blank" rel="noreferrer">
            Ask on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
