import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

async function getPostData(slug: string) {
  const query = `
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        content
        featuredImage { node { sourceUrl } }
        categories { nodes { name } }
        date
      }
    }
  `;

  const res = await fetch(process.env.WORDPRESS_API_URL || '', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id: slug } }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json.data?.post;
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) return <div className="p-20 text-center">Article Not Found</div>;

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{post.title}</h1>
          <p className="text-slate-400 text-sm">Published on {new Date(post.date).toLocaleDateString()}</p>
        </header>
        
        {post.featuredImage && (
          <img src={post.featuredImage.node.sourceUrl} className="w-full h-auto rounded-3xl mb-10" alt="" />
        )}

        {/* ISI ARTIKEL DARI WORDPRESS */}
        <div 
          className="prose prose-lg max-w-none prose-slate"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>
      <SiteFooter />
    </div>
  );
}
