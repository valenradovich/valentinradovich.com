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

export default async function PostPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <header className="mb-6 text-center">
      </header>
      <article className="my-16">
        <h1 className="text-6xl font-normal mb-4 text-center">{post.title}</h1>
        <div className="mb-12 text-base text-center opacity-70">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {!post.published && (
            <span className="ml-3 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
              Draft
            </span>
          )}
        </div>
        <div className="prose-xl mx-auto text-xl">
          <MarkdownRenderer content={post.content} />
        </div>
        <div className="mt-12 text-center">
          <Link href="/posts" className="text-lg underline hover:no-underline">
            ← Back to posts
          </Link>
        </div>
      </article>
    </Layout>
  )
}
