import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { BusinessSilo, ToolsSilo, CreativitySilo, LifestyleSilo } from "@/components/category-silos"
import { AdSlot } from "@/components/ad-slot"
import { Sidebar } from "@/components/sidebar"
import {
  featuredPost,
  businessPosts,
  toolsPosts,
  creativityPosts,
  lifestylePosts,
  trendingTopics,
} from "@/lib/dummy-data"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* EverydayOnAI Homepage */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection post={featuredPost} />

        {/* Content + Sidebar Layout */}
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex gap-8">
            {/* Main Content */}
            <div className="min-w-0 flex-1">
              {/* Silo 1: Business AI */}
              <BusinessSilo posts={businessPosts} />

              {/* Ad Slot 1: Leaderboard Banner */}
              <AdSlot type="leaderboard" />

              {/* Silo 2: AI Tools Review */}
              <ToolsSilo posts={toolsPosts} />

              {/* Silo 3: Ideas & Creativity */}
              <CreativitySilo posts={creativityPosts} />

              {/* Ad Slot 2: Native In-Feed */}
              <AdSlot type="native-in-feed" />

              {/* Silo 4: Everyday AI / Lifestyle */}
              <LifestyleSilo posts={lifestylePosts} />
            </div>

            {/* Sidebar */}
            <Sidebar topics={trendingTopics} />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
