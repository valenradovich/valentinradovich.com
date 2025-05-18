import Link from "next/link"
import { Layout } from "@/components/layout"
import { getSortedPostsData } from "@/lib/posts"

export default function PostsPage() {
  // Only show published posts
  const posts = getSortedPostsData(false)

  return (
    <Layout>
      <header className="mb-6 text-center">
        <h1 className="text-6xl font-normal leading-tight">
          Posts
        </h1>
      </header>
      {posts.length > 0 ? (
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="mb-12">
              <Link href={`/posts/${post.slug}`}>
                <h2 className="text-2xl font-normal mb-2 hover:underline">{post.title}</h2>
              </Link>
              <div className="text-base">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl">i've to migrate my posts to this new website, check back soon :)</p>
      )}

      <div className="mt-16 text-center">
        <Link href="/" className="text-lg underline hover:no-underline">
          ← Back to home
        </Link>
      </div>
    </Layout>
  )
} 