import { Poppins, Rajdhani } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { siteMeta } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${siteMeta.name} — ${siteMeta.tagline}`,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(poppins.variable, rajdhani.variable)}>
      <body className="min-h-svh flex flex-col font-sans antialiased">
        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
