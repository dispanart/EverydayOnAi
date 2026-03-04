import Image from "next/image"
import Link from "next/link"
import type { Post } from "@/lib/dummy-data"

interface SectionHeaderProps {
  title: string
  href: string
}

export function SectionHeader({ title, href }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      <Link
        href={href}
        className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        View All
      </Link>
    </div>
  )
}

/* ─── Silo 1: Business AI ─── 4-column grid of professional cards ─── */
export function BusinessSilo({ posts }: { posts: Post[] }) {
  return (
    <section className="py-10">
      <SectionHeader title="AI for Business" href="/business-ai" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/${post.categorySlug}/${post.slug}`}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-4">
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <h3 className="mb-2 line-clamp-2 text-sm font-semibold leading-snug text-card-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-card-foreground">{post.author}</span>
                <span aria-hidden="true">{"/"}</span>
                <time>{post.date}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

/* ─── Silo 2: AI Tools Review ─── 3-column grid with rating badges ─── */
export function ToolsSilo({ posts }: { posts: Post[] }) {
  return (
    <section className="py-10">
      <SectionHeader title="AI Tools Review & Comparison" href="/ai-tools" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/${post.categorySlug}/${post.slug}`}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {post.rating && (
                <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground shadow-md">
                  <span className="text-sm">{post.rating}</span>
                </div>
              )}
            </div>
            <div className="p-5">
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <h3 className="mb-2 text-base font-semibold leading-snug text-card-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-card-foreground">{post.author}</span>
                <span aria-hidden="true">{"/"}</span>
                <time>{post.date}</time>
                <span aria-hidden="true">{"/"}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

/* ─── Silo 3: Ideas & Creativity ─── Masonry-style grid ─── */
export function CreativitySilo({ posts }: { posts: Post[] }) {
  return (
    <section className="py-10">
      <SectionHeader title="AI for Ideas & Creativity" href="/ideas-creativity" />
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {posts.map((post, index) => {
          const isLarge = index === 0 || index === 3
          return (
            <Link
              key={post.id}
              href={`/${post.categorySlug}/${post.slug}`}
              className="group mb-6 block break-inside-avoid overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`relative overflow-hidden ${isLarge ? "aspect-[4/5]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="mb-2 inline-block rounded-full bg-primary/90 px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                    {post.category}
                  </span>
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-background">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

/* ─── Silo 4: Everyday AI / Lifestyle ─── 2-column horizontal cards ─── */
export function LifestyleSilo({ posts }: { posts: Post[] }) {
  return (
    <section className="py-10">
      <SectionHeader title="Everyday AI / Lifestyle" href="/lifestyle" />
      <div className="grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/${post.categorySlug}/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg sm:flex-row"
          >
            <div className="relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:w-48 md:w-56">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 224px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-4 md:p-5">
              <span className="mb-1.5 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <h3 className="mb-1.5 line-clamp-2 text-sm font-semibold leading-snug text-card-foreground transition-colors group-hover:text-primary md:text-base">
                {post.title}
              </h3>
              <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-card-foreground">{post.author}</span>
                <span aria-hidden="true">{"/"}</span>
                <time>{post.date}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
