import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Post } from "@/lib/dummy-data"

interface HeroSectionProps {
  post: Post
}

export function HeroSection({ post }: HeroSectionProps) {
  return (
    <section className="py-8 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* Left: Content */}
          <div className="flex flex-1 flex-col justify-center">
            <Link
              href={`/${post.categorySlug}`}
              className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              {post.category}
            </Link>
            <h1 className="mb-4 text-pretty text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mb-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              {post.excerpt}
            </p>
            <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{post.author}</span>
              <span aria-hidden="true">{"/"}</span>
              <time>{post.date}</time>
              <span aria-hidden="true">{"/"}</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/${post.categorySlug}/${post.slug}`}>
              <Button size="lg">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Right: Featured Image */}
          <div className="flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
