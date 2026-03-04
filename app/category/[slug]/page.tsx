import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AdSlot } from "@/components/ad-slot"
import Link from "next/link"

async function getCategoryPosts(slug: string) {
  const query = `
    query GetCategoryPosts($slug: ID!) {
      category(id: $slug, idType: SLUG) {
        name
        posts(first: 20) {
          nodes {
            title
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(process.env.WORDPRESS_API_URL || '', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      query,
      variables: { slug } 
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json.data?.category;
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategoryPosts(params.slug);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center font-bold">Category Not Found</main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Header Kategori */}
        <header className="mb-12 border-b pb-8">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm text-pretty">Category</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 capitalize italic">
            {category.name.replace(/-/g, ' ')}
          </h1>
          <p className="text-slate-500 mt-4 italic">Exploring the latest in {category.name} for EverydayOnAI.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-12 text-pretty">
            {category.posts.nodes.map((post: any) => (
              <article key={post.slug} className="group flex flex-col md:flex-row gap-6 items-start border-b pb-8 border-slate-100">
                <div className="w-full md:w-64 h-44 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1677442136019-21780ecad995"} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 text-pretty">
                  <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors leading-tight mb-3">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <div 
                    className="text-slate-500 text-sm line-clamp-3 mb-4"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 font-bold text-sm uppercase tracking-wider hover:underline">
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar Area */}
          <aside className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold mb-4">Advertisement</h3>
              <AdSlot type="rectangle" />
            </div>
            
            <div className="sticky top-24">
               <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-200">
                  <h3 className="text-xl font-bold mb-2">Subscribe to AI Insights</h3>
                  <p className="text-blue-100 text-sm mb-6">Get the latest AI tools and business strategies delivered to your inbox.</p>
                  <input type="email" placeholder="Email address" className="w-full p-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50 text-white mb-3 focus:outline-none focus:ring-2 focus:ring-white/50" />
                  <button className="w-full bg-white text-blue-600 font-bold p-3 rounded-xl hover:bg-blue-50 transition-colors">Join Now</button>
               </div>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
