import Link from "next/link"
import { TrendingUp } from "lucide-react"
import { AdSlot } from "@/components/ad-slot"

interface TrendingTopic {
  label: string
  href: string
  count: number
}

interface SidebarProps {
  topics: TrendingTopic[]
}

export function Sidebar({ topics }: SidebarProps) {
  return (
    <aside className="hidden w-72 shrink-0 lg:block xl:w-80" aria-label="Sidebar">
      <div className="sticky top-24 flex flex-col gap-8">
        {/* Trending Topics */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Trending Topics
            </h3>
          </div>
          <ul className="flex flex-col gap-1">
            {topics.map((topic, index) => (
              <li key={topic.href}>
                <Link
                  href={topic.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-muted text-xs font-semibold text-muted-foreground">
                      {index + 1}
                    </span>
                    <span className="font-medium text-card-foreground">{topic.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {topic.count} articles
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* AdSense Placeholder */}
        <AdSlot type="sidebar-square" />
      </div>
    </aside>
  )
}
