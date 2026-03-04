import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { BusinessSilo, ToolsSilo, CreativitySilo, LifestyleSilo } from "@/components/category-silos"
import { AdSlot } from "@/components/ad-slot"
import { Sidebar } from "@/components/sidebar"

async function getWordPressData() {
  const query = `
    query GetHomepageData {
      businessPosts: posts(where: {categoryName: "AI for Business"}, first: 4) {
        nodes { 
          title, slug, excerpt,
          featuredImage { node { sourceUrl } },
          categories { nodes { name, slug } }
        }
      }
      toolsPosts: posts(where: {categoryName: "AI Tools Review & Comparison"}, first: 3) {
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
    return {};
  }
}

export default async function HomePage() {
  const data = await getWordPressData();

  // FUNGSI TRANSFORMASI DATA YANG LEBIH AGRESIF
  const mapPosts = (posts: any) => {
    return (posts || []).map((post: any) => ({
      id: post?.slug || Math.random().toString(),
      title: post?.title || "Untitled Post",
      slug: post?.slug || "#",
      excerpt: post?.excerpt || "",
      image: post?.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      categoryName: post?.categories?.nodes?.[0]?.name || "AI News",
      categorySlug: post?.categories?.nodes?.[0]?.slug || "ai-news", // Memaksa nilai agar tidak undefined
      date: "March 2026",
      author: "Dispan"
    }));
  };

  const business = mapPosts(data?.businessPosts?.nodes);
  const tools = mapPosts(data?.toolsPosts?.nodes);
  const creativity = mapPosts(data?.creativityPosts?.nodes);
  const lifestyle = mapPosts(data?.lifestylePosts?.nodes);
  const featured = business[0] || tools[0] || null;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* Hanya tampilkan Hero jika data ada */}
        {featured ? <HeroSection post={featured} /> : <div className="h-20" />}
        
        <div className="mx-auto max-w-7xl px-4 lg:px-8 mt-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="min-w-0 flex-1">
              
              {/* Gunakan pengecekan length agar komponen tidak memproses array kosong */}
              {business.length > 0 && <BusinessSilo posts={business} />}
              <AdSlot type="leaderboard" />
              
              {tools.length > 0 && <ToolsSilo posts={tools} />}
              {creativity.length > 0 && <CreativitySilo posts={creativity} />}
              
              <AdSlot type="native-in-feed" />
              
              {lifestyle.length > 0 && <LifestyleSilo posts={lifestyle} />}
            </div>
            <Sidebar topics={[]} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
