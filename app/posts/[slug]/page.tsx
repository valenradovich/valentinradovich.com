import Link from "next/link"
import { notFound } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { MarkdownRenderer } from "@/components/markdown-renderer"

// This would typically come from a database or file system
const posts = [
  {
    id: 1,
    title: "Hello World",
    content: `
# Hello World

This is my first post on this new website. I'm excited to share my thoughts and ideas with you.

## Why I Started This Blog

I've always enjoyed writing and sharing my thoughts with others. This blog is a way for me to do that more consistently.

Some of the topics I plan to cover:

- Design principles and philosophy
- Development techniques and tools
- Personal projects and experiments
- Thoughts on technology and its impact

I hope you find something interesting here!
    `,
    date: "2023-05-15",
    slug: "hello-world",
  },
  {
    id: 2,
    title: "Design Philosophy",
    content: `
# Design Philosophy

Exploring the principles of minimalist design and how it influences my work and creative process.

## Embracing Minimalism

Minimalism isn't just about using fewer elements—it's about being intentional with every choice.

> Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.
> — Antoine de Saint-Exupéry

### Key Principles I Follow:

1. **Clarity of purpose** - Every element should serve a clear function
2. **Reduction of noise** - Remove anything that doesn't contribute to the core message
3. **Thoughtful spacing** - Use whitespace deliberately to create rhythm and focus
4. **Limited palette** - Constrain color and typography choices for cohesion

These principles guide not just my visual design work, but also how I approach problems and build solutions.
    `,
    date: "2023-06-22",
    slug: "design-philosophy",
  },
  {
    id: 3,
    title: "Recent Projects",
    content: `
# Recent Projects

A look at some of my recent projects and the challenges I faced while working on them.

## Project 1: Minimalist Portfolio Template

I created a minimalist portfolio template for designers and developers who want to showcase their work in a clean, distraction-free environment.

### Challenges:

- Balancing minimalism with enough visual interest to engage visitors
- Creating a responsive design that works well on all devices
- Optimizing performance while maintaining visual quality

## Project 2: Typography Exploration

This was a personal project exploring the impact of typography on user experience and readability.

### Key Findings:

- Serif fonts like Instrument Serif can work beautifully for digital interfaces when used at appropriate sizes
- Line height and letter spacing have a significant impact on readability
- Font pairing is an art that requires careful consideration of contrast and harmony

I'll be sharing more detailed case studies of these projects in future posts.
    `,
    date: "2023-07-10",
    slug: "recent-projects",
  },
]

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-8 py-16 max-w-2xl">
      <header className="flex justify-between items-center mb-16">
        <div className="mx-auto flex w-full justify-between items-center">
          <Link href="/" className="text-3xl font-normal hover:underline">
            Valentin Radovich
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <article className="my-16">
        <h1 className="text-3xl font-normal mb-4 text-center">{post.title}</h1>
        <div className="mb-12 text-base text-center">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>

      <div className="mt-16 text-center">
        <Link href="/" className="text-lg underline hover:no-underline">
          ← Back to home
        </Link>
      </div>

      <footer className="mt-20 mb-8 text-center text-base">
        <p>© {new Date().getFullYear()} Valentin Radovich. All rights reserved.</p>
      </footer>
    </div>
  )
}
