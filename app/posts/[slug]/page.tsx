import Link from "next/link"
import { notFound } from "next/navigation"
import { Layout } from "@/components/layout"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { getAllPostSlugs, getPostData } from "@/lib/posts"

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <header className="mb-6 text-center">
        <h1 className="text-6xl font-normal leading-tight">
          {post.title}
        </h1>
      </header>
      <article className="my-16">
        <h1 className="text-3xl font-normal mb-4 text-center">{post.title}</h1>
        <div className="mb-12 text-base text-center">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {!post.published && (
            <span className="ml-3 px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">
              Draft
            </span>
          )}
        </div>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>

      <div className="mt-16 text-center">
        <Link href="/posts" className="text-lg underline hover:no-underline">
          ← Back to posts
        </Link>
      </div>

      <footer className="mt-20 mb-8 text-center text-base">
        <p>© {new Date().getFullYear()} Valentin Radovich. All rights reserved.</p>
      </footer>
    </Layout>
  )
}
