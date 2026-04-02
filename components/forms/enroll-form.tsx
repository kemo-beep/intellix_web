"use client"

import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { enrollProgramOptions, siteMeta } from "@/lib/site-content"

export function EnrollForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const subject = `Intellix enrollment — ${fd.get("program") || "inquiry"}`
    const body = [
      `Name: ${fd.get("name")}`,
      `Phone: ${fd.get("phone")}`,
      `Email: ${fd.get("email")}`,
      `Program: ${fd.get("program")}`,
      `Track / path (optional): ${fd.get("track")}`,
      `Bundle: ${fd.get("bundle")}`,
      `Preferred start: ${fd.get("start")}`,
      `How heard: ${fd.get("heard")}`,
      "",
      String(fd.get("message") || ""),
    ].join("\n")
    const mailto = `mailto:${siteMeta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    toast.success("Opening your email app…", { description: "Send the message to complete your inquiry." })
  }

  return (
    <form onSubmit={onSubmit} className="max-w-lg space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone / WhatsApp</Label>
        <Input id="phone" name="phone" required type="tel" autoComplete="tel" placeholder="+220 …" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="program">Program</Label>
        <NativeSelect id="program" name="program" required defaultValue="" className="w-full">
          {enrollProgramOptions.map((opt) => (
            <NativeSelectOption key={opt.value || "empty"} value={opt.value}>
              {opt.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
      <div className="space-y-2">
        <Label htmlFor="track">Track or path (optional)</Label>
        <Input id="track" name="track" placeholder="e.g. Frontend, Social video, Portrait…" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bundle">Bundle (optional)</Label>
        <Input id="bundle" name="bundle" placeholder="Digital Pro Pack, etc." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="start">Preferred start</Label>
        <Input id="start" name="start" placeholder="Month / flexible" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="heard">How did you hear about us?</Label>
        <Input id="heard" name="heard" placeholder="WhatsApp, friend, flyer…" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea id="message" name="message" rows={4} placeholder="Goals, questions…" />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send inquiry via email
      </Button>
      <p className="text-muted-foreground text-xs">
        Or message us on WhatsApp for faster replies — button below.
      </p>
    </form>
  )
}
