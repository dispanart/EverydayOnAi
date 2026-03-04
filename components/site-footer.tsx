"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  explore: [
    { label: "Business AI", href: "/business-ai" },
    { label: "AI Tools", href: "/ai-tools" },
    { label: "Ideas & Creativity", href: "/ideas-creativity" },
    { label: "Lifestyle", href: "/lifestyle" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Contact", href: "/contact" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <span className="text-xl font-bold tracking-tight">
                Everyday<span className="text-primary">On</span>AI
              </span>
            </Link>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-background/70">
              EverydayOnAI is your trusted source for understanding how artificial intelligence is
              reshaping business, creativity, and everyday life. We review tools, share ideas, and
              help you stay ahead of the AI curve.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 rounded-xl border border-background/10 bg-background/5 p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="mb-1 text-lg font-semibold text-background">
                Stay ahead with AI insights
              </h3>
              <p className="text-sm text-background/60">
                Get the best AI articles delivered to your inbox weekly. No spam, ever.
              </p>
            </div>
            <form className="flex w-full gap-2 md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full min-w-0 rounded-lg border border-background/20 bg-background/10 px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary md:w-64"
                aria-label="Email address"
              />
              <Button size="default" className="shrink-0">
                Subscribe
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/50">
            {new Date().getFullYear()} EverydayOnAI. All rights reserved.
          </p>
          <p className="text-xs text-background/50">
            Designed for readers who live and breathe AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
