import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AdSlot } from "@/components/ad-slot"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"

async function getPostData(slug: string) {
  const query = `
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        content
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
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
      variables: { id: slug } 
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json.data?.post;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-bold">
        Article Not Found
      </div>
    );
  }

  const publishDate = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      
      <article className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <header className="mb-10">
              <Link href={`/category/${post.categories.nodes[0].slug}`} className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-4 block hover:underline">
                {post.categories.nodes[0].name}
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-slate-500 text-sm border-y py-4 border-slate-100">
                <span className="font-bold text-slate-900 italic">By {post.author.node.name}</span>
                <span>•</span>
                <span>{publishDate}</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-blue-100/50">
              <img 
                src={post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1677442136019-21780ecad995"} 
                className="w-full h-auto object-cover max-h-[500px]"
                alt={post.title}
              />
            </div>

            {/* Ad Slot - Top of Article */}
            <AdSlot type="in-article-top" />

            {/* Content Body */}
            <div 
              className="prose prose-lg max-w-none prose-slate prose-headings:font-black prose-headings:text-slate-900 prose-a:text-blue-600 prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Ad Slot - Bottom of Article */}
            <div className="mt-12 pt-8 border-t border-slate-100">
               <AdSlot type="native-in-feed" />
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-10">
            <div className="sticky top-24">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Advertisement</h4>
                <AdSlot type="rectangle" />
              </div>
              
              <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-200">
                <h3 className="text-xl font-bold mb-2">Subscribe to EverydayOnAI</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">Jangan lewatkan update AI tools terbaru yang bisa mempercepat kerjamu.</p>
                <button className="w-full bg-white text-blue-600 font-bold p-3 rounded-xl hover:shadow-lg transition-all">Join Now</button>
              </div>
            </div>
          </aside>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
