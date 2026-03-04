import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { BusinessSilo, ToolsSilo, CreativitySilo, LifestyleSilo } from "@/components/category-silos"
import { AdSlot } from "@/components/ad-slot"
import { Sidebar } from "@/components/sidebar"

async function getWordPressData() {
  const query = `
    query GetHomepageData {
      businessPosts: posts(where: {categoryName: "AI for Business"}, first: 5) {
        nodes { 
          title, slug, excerpt,
          featuredImage { node { sourceUrl } },
          categories { nodes { name, slug } }
        }
      }
      toolsPosts: posts(where: {categoryName: "AI Tools Review & Comparison"}, first: 4) {
        nodes { 
          title, slug, excerpt,
          featuredImage { node { sourceUrl } },
          categories { nodes { name, slug } }
        }
      }
      creativityPosts: posts(where: {categoryName: "AI for Ideas & Creativity"}, first: 4) {
        nodes { 
          title, slug,
          featuredImage { node { sourceUrl } },
          categories { nodes { name, slug } }
        }
      }
      lifestylePosts: posts(where: {categoryName: "Everyday AI / Lifestyle"}, first: 4) {
        nodes { 
          title, slug,
          featuredImage { node { sourceUrl } },
          categories { nodes { name, slug } }
        }
      }
    }
  `;

  try {
    const res = await fetch(process.env.WORDPRESS_API_URL || '', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 }, 
    });

    const json = await res.json();
    return json.data || {};
  } catch (error) {
    console.error("WordPress Fetch Error:", error);
    return {};
  }
}

export default async function HomePage() {
  const data = await getWordPressData();

  // Helper untuk membersihkan data dari WordPress agar cocok dengan UI v0
  const mapPosts = (posts: any) => {
    return (posts || []).map((post: any) => ({
      id: post?.slug || Math.random().toString(),
      title: post?.title || "Untitled Post",
      slug: post?.slug || "#",
      excerpt: post?.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 100) + "..." || "",
      image: post?.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      categoryName: post?.categories?.nodes?.[0]?.name || "AI News",
      categorySlug: post?.categories?.nodes?.[0]?.slug || "ai-news",
      date: "March 2026",
      author: "Dispan"
    }));
  };

  const business = mapPosts(data?.businessPosts?.nodes);
  const tools = mapPosts(data?.toolsPosts?.nodes);
  const creativity = mapPosts(data?.creativityPosts?.nodes);
  const lifestyle = mapPosts(data?.lifestylePosts?.nodes);
  
  // Ambil artikel pertama Business untuk Hero, sisanya untuk Silo
  const featured = business[0] || null;
  const businessDisplay = business.slice(1); 

  // Data untuk Sidebar (diambil dari semua kategori)
  const trending = [...business, ...tools].slice(0, 5);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header otomatis menggunakan navigasi yang kita bahas */}
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        {featured ? (
          <HeroSection post={featured} />
        ) : (
          <div className="h-40 flex items-center justify-center bg-slate-50 text-slate-400">
            Post an article in WordPress to see the Hero section.
          </div>
        )}
        
        <div className="mx-auto max-w-7xl px-4 lg:px-8 mt-10">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Area */}
            <div className="min-w-0 flex-1 space-y-16">
              
              {/* Silo 1: Business */}
              <section>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">Business AI</h2>
                  <a href="/category/ai-for-business" className="text-sm font-semibold text-blue-600 hover:underline">View All</a>
                </div>
                {businessDisplay.length > 0 ? (
                  <BusinessSilo posts={businessDisplay} />
                ) : (
                  <p className="text-slate-400 italic">No business articles found.</p>
                )}
              </section>

              <AdSlot type="leaderboard" />
              
              {/* Silo 2: Tools */}
              <section>
                 <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">AI Tools Review</h2>
                  <a href="/category/ai-tools-review-comparison" className="text-sm font-semibold text-blue-600 hover:underline">View All</a>
                </div>
                <ToolsSilo posts={tools} />
              </section>

              {/* Silo 3: Creativity */}
              <section>
                 <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">Ideas & Creativity</h2>
                  <a href="/category/ai-for-ideas-creativity" className="text-sm font-semibold text-blue-600 hover:underline">View All</a>
                </div>
                <CreativitySilo posts={creativity} />
              </section>

              <AdSlot type="native-in-feed" />
              
              {/* Silo 4: Lifestyle */}
              <section>
                 <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">Everyday AI</h2>
                  <a href="/category/everyday-ai-lifestyle" className="text-sm font-semibold text-blue-600 hover:underline">View All</a>
                </div>
                <LifestyleSilo posts={lifestyle} />
              </section>
            </div>

            {/* Sidebar with dynamic trending topics */}
            <aside className="lg:w-80">
               <Sidebar topics={trending} />
               <div className="sticky top-24 mt-8">
                 <AdSlot type="rectangle" />
               </div>
            </aside>
            
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
