// Dummy data for the EverydayOnAI homepage.
// Replace these with your WordPress GraphQL API queries.

export interface Post {
  id: string
  title: string
  excerpt: string
  slug: string
  category: string
  categorySlug: string
  image: string
  author: string
  date: string
  readTime: string
  rating?: number
}

export const featuredPost: Post = {
  id: "featured-1",
  title: "How GPT-5 Is Redefining What AI Can Do for Your Business in 2026",
  excerpt:
    "The latest generation of large language models is not just an incremental upgrade. It is a paradigm shift that is transforming how companies approach strategy, customer engagement, and innovation at scale.",
  slug: "gpt-5-redefining-ai-business-2026",
  category: "Business AI",
  categorySlug: "business-ai",
  image: "/images/hero-featured.jpg",
  author: "Sarah Chen",
  date: "Mar 4, 2026",
  readTime: "8 min read",
}

export const businessPosts: Post[] = [
  {
    id: "biz-1",
    title: "AI-Powered CRM: Why Salesforce and HubSpot Are Going All-In",
    excerpt: "How AI is transforming customer relationship management and what it means for your sales pipeline.",
    slug: "ai-powered-crm-salesforce-hubspot",
    category: "Business AI",
    categorySlug: "business-ai",
    image: "/images/business-1.jpg",
    author: "James Rivera",
    date: "Mar 3, 2026",
    readTime: "6 min read",
  },
  {
    id: "biz-2",
    title: "AI Supply Chain Optimization Is Saving Companies Millions",
    excerpt: "From demand forecasting to warehouse automation, AI is revolutionizing logistics.",
    slug: "ai-supply-chain-optimization",
    category: "Business AI",
    categorySlug: "business-ai",
    image: "/images/business-2.jpg",
    author: "Priya Patel",
    date: "Mar 2, 2026",
    readTime: "5 min read",
  },
  {
    id: "biz-3",
    title: "Building an AI-First Startup: Lessons from 10 Founders",
    excerpt: "What successful AI founders wish they knew before starting their company.",
    slug: "ai-first-startup-lessons",
    category: "Business AI",
    categorySlug: "business-ai",
    image: "/images/business-3.jpg",
    author: "Mark Okafor",
    date: "Mar 1, 2026",
    readTime: "7 min read",
  },
  {
    id: "biz-4",
    title: "The CFO's Guide to Budgeting for AI Transformation",
    excerpt: "A practical framework for finance leaders navigating AI investments and ROI.",
    slug: "cfo-guide-ai-budgeting",
    category: "Business AI",
    categorySlug: "business-ai",
    image: "/images/business-4.jpg",
    author: "Lisa Thompson",
    date: "Feb 28, 2026",
    readTime: "6 min read",
  },
]

export const toolsPosts: Post[] = [
  {
    id: "tool-1",
    title: "Claude 4 vs GPT-5: The Ultimate AI Assistant Showdown",
    excerpt: "We tested both extensively across writing, coding, research, and creative tasks. Here is the clear winner.",
    slug: "claude-4-vs-gpt-5-comparison",
    category: "AI Tools",
    categorySlug: "ai-tools",
    image: "/images/tools-1.jpg",
    author: "David Kim",
    date: "Mar 4, 2026",
    readTime: "10 min read",
    rating: 9.2,
  },
  {
    id: "tool-2",
    title: "Midjourney V7 Review: Is It Still the Best AI Image Generator?",
    excerpt: "The latest version brings stunning new features, but competitors are catching up fast.",
    slug: "midjourney-v7-review",
    category: "AI Tools",
    categorySlug: "ai-tools",
    image: "/images/tools-2.jpg",
    author: "Emma Rodriguez",
    date: "Mar 3, 2026",
    readTime: "8 min read",
    rating: 8.8,
  },
  {
    id: "tool-3",
    title: "GitHub Copilot X Review: The AI Coding Partner You Need",
    excerpt: "After 3 months of daily use, here is our honest take on GitHub's AI-powered code assistant.",
    slug: "github-copilot-x-review",
    category: "AI Tools",
    categorySlug: "ai-tools",
    image: "/images/tools-3.jpg",
    author: "Alex Chen",
    date: "Mar 1, 2026",
    readTime: "9 min read",
    rating: 9.0,
  },
]

export const creativityPosts: Post[] = [
  {
    id: "create-1",
    title: "10 Mind-Blowing AI Art Prompts That Will Inspire Your Next Project",
    excerpt: "Unlock your creative potential with these carefully crafted prompts.",
    slug: "ai-art-prompts-inspiration",
    category: "Ideas & Creativity",
    categorySlug: "ideas-creativity",
    image: "/images/creativity-1.jpg",
    author: "Mia Zhang",
    date: "Mar 4, 2026",
    readTime: "5 min read",
  },
  {
    id: "create-2",
    title: "How AI Is Revolutionizing Music Production in 2026",
    excerpt: "From beat generation to mastering, AI tools are democratizing music creation.",
    slug: "ai-music-production-2026",
    category: "Ideas & Creativity",
    categorySlug: "ideas-creativity",
    image: "/images/creativity-2.jpg",
    author: "Jordan Blake",
    date: "Mar 3, 2026",
    readTime: "7 min read",
  },
  {
    id: "create-3",
    title: "AI Film-Making: Creating Short Films Without a Camera",
    excerpt: "The new wave of AI-generated cinema is redefining independent filmmaking.",
    slug: "ai-filmmaking-short-films",
    category: "Ideas & Creativity",
    categorySlug: "ideas-creativity",
    image: "/images/creativity-3.jpg",
    author: "Kai Nakamura",
    date: "Mar 2, 2026",
    readTime: "6 min read",
  },
  {
    id: "create-4",
    title: "AI-Powered Logo Design: From Concept to Brand Identity",
    excerpt: "Can AI really replace a graphic designer? We put the latest tools to the test.",
    slug: "ai-logo-design-brand-identity",
    category: "Ideas & Creativity",
    categorySlug: "ideas-creativity",
    image: "/images/creativity-4.jpg",
    author: "Sofia Morales",
    date: "Mar 1, 2026",
    readTime: "5 min read",
  },
  {
    id: "create-5",
    title: "Writing Your First Novel with AI: A Practical Guide",
    excerpt: "Step-by-step guide to using AI as your creative writing co-pilot.",
    slug: "writing-novel-with-ai-guide",
    category: "Ideas & Creativity",
    categorySlug: "ideas-creativity",
    image: "/images/creativity-5.jpg",
    author: "Rachel Park",
    date: "Feb 28, 2026",
    readTime: "8 min read",
  },
]

export const lifestylePosts: Post[] = [
  {
    id: "life-1",
    title: "AI Health Apps That Are Actually Worth Your Time in 2026",
    excerpt: "We tested 20 AI-powered health and wellness apps. These 5 stood out from the rest.",
    slug: "ai-health-apps-worth-time-2026",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    image: "/images/lifestyle-1.jpg",
    author: "Dr. Amy Foster",
    date: "Mar 4, 2026",
    readTime: "7 min read",
  },
  {
    id: "life-2",
    title: "How to Build the Ultimate AI-Powered Smart Home",
    excerpt: "From lighting to security, here is a complete guide to automating your living space with AI.",
    slug: "ai-smart-home-ultimate-guide",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    image: "/images/lifestyle-2.jpg",
    author: "Tom Bradley",
    date: "Mar 2, 2026",
    readTime: "6 min read",
  },
  {
    id: "life-3",
    title: "AI in the Kitchen: 5 Apps That Make Meal Planning Effortless",
    excerpt: "Never wonder what to cook again. These AI apps plan your meals based on your fridge contents.",
    slug: "ai-kitchen-meal-planning-apps",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    image: "/images/lifestyle-3.jpg",
    author: "Hannah Lee",
    date: "Feb 28, 2026",
    readTime: "5 min read",
  },
  {
    id: "life-4",
    title: "AI Travel Planners That Create Perfect Itineraries",
    excerpt: "Planning a trip? These AI tools will build your dream vacation itinerary in minutes.",
    slug: "ai-travel-planners-perfect-itineraries",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    image: "/images/lifestyle-4.jpg",
    author: "Carlos Vega",
    date: "Feb 26, 2026",
    readTime: "6 min read",
  },
]

export const trendingTopics = [
  { label: "GPT-5 Launch", href: "/tag/gpt-5", count: 24 },
  { label: "AI Regulation", href: "/tag/ai-regulation", count: 18 },
  { label: "Prompt Engineering", href: "/tag/prompt-engineering", count: 15 },
  { label: "AI Image Generation", href: "/tag/ai-image-generation", count: 12 },
  { label: "AI Startups", href: "/tag/ai-startups", count: 11 },
  { label: "Machine Learning", href: "/tag/machine-learning", count: 9 },
  { label: "AI Ethics", href: "/tag/ai-ethics", count: 8 },
  { label: "Open Source AI", href: "/tag/open-source-ai", count: 7 },
]
