import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { PostPreview } from "@/components/post-preview"

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Hello World",
      excerpt: "This is my first post on this new website. I'm excited to share my thoughts and ideas with you.",
      date: "2023-05-15",
      slug: "hello-world",
    },
    {
      id: 2,
      title: "Design Philosophy",
      excerpt: "Exploring the principles of minimalist design and how it influences my work and creative process.",
      date: "2023-06-22",
      slug: "design-philosophy",
    },
    {
      id: 3,
      title: "Recent Projects",
      excerpt: "A look at some of my recent projects and the challenges I faced while working on them.",
      date: "2023-07-10",
      slug: "recent-projects",
    },
  ]

  return (
    <main className="container mx-auto px-8 py-16 max-w-2xl">
      <header className="flex justify-between items-center mb-20 text-center">
        <div className="mx-auto flex w-full justify-between items-center">
          <h1 className="text-4xl font-normal">Valentin Radovich</h1>
          <ThemeToggle />
        </div>
      </header>

      <section className="my-20 text-center">
        <p className="text-xl mb-8 leading-relaxed">
          Hello, I'm Valentin. I'm a designer and developer focused on creating clean, functional, and aesthetically
          pleasing digital experiences.
        </p>
        <p className="text-xl leading-relaxed">
          This website embraces minimalism and focuses on content. Feel free to explore my thoughts and projects.
        </p>
      </section>

      <section className="my-20">
        <h2 className="text-2xl font-normal mb-12 text-center">Recent Posts</h2>
        <div className="space-y-16">
          {posts.map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="my-20 text-center">
        <h2 className="text-2xl font-normal mb-8">Contact</h2>
        <p className="mb-8 text-xl">I'm always open to interesting conversations and collaborations.</p>
        <div className="flex gap-8 justify-center">
          <Link href="mailto:hello@valentinradovich.com" className="text-lg underline hover:no-underline">
            Email
          </Link>
          <Link href="https://twitter.com/vradovich" className="text-lg underline hover:no-underline">
            Twitter
          </Link>
          <Link href="https://github.com/vradovich" className="text-lg underline hover:no-underline">
            GitHub
          </Link>
        </div>
      </section>

      <footer className="mt-20 mb-8 text-center text-base">
        <p>© {new Date().getFullYear()} Valentin Radovich. All rights reserved.</p>
      </footer>
    </main>
  )
}
