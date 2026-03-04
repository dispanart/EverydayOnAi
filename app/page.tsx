import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { BusinessSilo, ToolsSilo, CreativitySilo, LifestyleSilo } from "@/components/category-silos"
import { AdSlot } from "@/components/ad-slot"
import { Sidebar } from "@/components/sidebar"

// FUNGSI FETCH DATA DARI WORDPRESS
async function getWordPressData() {
  const query = `
    query GetHomepageData {
      businessPosts: posts(where: {categoryName: "AI for Business"}, first: 4) {
        nodes { title, slug, featuredImage { node { sourceUrl } } }
      }
      toolsPosts: posts(where: {categoryName: "AI Tools Review & Comparison"}, first: 3) {
        nodes { title, slug, featuredImage { node { sourceUrl } } }
      }
      creativityPosts: posts(where: {categoryName: "AI for Ideas & Creativity"}, first: 4) {
        nodes { title, slug, featuredImage { node { sourceUrl } } }
      }
      lifestylePosts: posts(where: {categoryName: "Everyday AI / Lifestyle"}, first: 4) {
        nodes { title, slug, featuredImage { node { sourceUrl } } }
      }
    }
  `;

  const res = await fetch(process.env.WORDPRESS_API_URL || '', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 }, 
  });

  const json = await res.json();
  return json.data;
}

export default async function HomePage() {
  const data = await getWordPressData();

  // Mapping data agar cocok dengan komponen kamu
  const featuredPost = data?.businessPosts?.nodes[0];
  const businessPosts = data?.businessPosts?.nodes || [];
  const toolsPosts = data?.toolsPosts?.nodes || [];
  const creativityPosts = data?.creativityPosts?.nodes || [];
  const lifestylePosts = data?.lifestylePosts?.nodes || [];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero mengambil artikel terbaru */}
        <HeroSection post={featuredPost} />

        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="min-w-0 flex-1">
              
              {/* Menggunakan data asli dari WordPress */}
              <BusinessSilo posts={businessPosts} />
              
              <AdSlot type="leaderboard" />

              <ToolsSilo posts={toolsPosts} />

              <CreativitySilo posts={creativityPosts} />

              <AdSlot type="native-in-feed" />

              <LifestyleSilo posts={lifestylePosts} />
            </div>

            {/* Sidebar (bisa diisi trending topics manual atau dinamis nanti) */}
            <Sidebar topics={[]} />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
