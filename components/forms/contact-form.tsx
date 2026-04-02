"use client"

import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteMeta } from "@/lib/site-content"

export function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const subject = `Intellix contact — ${fd.get("name")}`
    const body = [`From: ${fd.get("name")}`, `Email: ${fd.get("email")}`, `Phone: ${fd.get("phone")}`, "", String(fd.get("message") || "")].join(
      "\n"
    )
    window.location.href = `mailto:${siteMeta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    toast.success("Opening your email app…")
  }

  return (
    <form onSubmit={onSubmit} className="max-w-lg space-y-5">
      <div className="space-y-2">
        <Label htmlFor="c-name">Name</Label>
        <Input id="c-name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="c-email">Email</Label>
        <Input id="c-email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="c-phone">Phone (optional)</Label>
        <Input id="c-phone" name="phone" type="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="c-message">Message</Label>
        <Textarea id="c-message" name="message" required rows={5} />
      </div>
      <Button type="submit">Send via email</Button>
    </form>
  )
}
