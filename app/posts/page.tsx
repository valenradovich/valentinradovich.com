import Link from "next/link"
import { Layout } from "@/components/layout"
import { getSortedPostsData } from "@/lib/posts"

export default function PostsPage() {
  // Only show published posts
  const posts = getSortedPostsData(false)

  return (
    <Layout>
      <header className="mb-6 text-center">
      </header>
      <article className="my-16 w-full">
        <h1 className="text-6xl font-normal mb-12 text-center">
          Posts
        </h1>
      {posts.length > 0 ? (
        <div className="max-w-2xl mx-auto space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="pb-6 border-b border-background last:border-b-0 last:pb-0">
              <Link href={`/posts/${post.slug}`} className="block group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="text-2xl font-normal group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-base opacity-70 whitespace-nowrap sm:ml-4 flex-shrink-0 mt-1 sm:mt-0">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl">i've to migrate my posts to this new website, check back soon :)</p>
      )}
        <div className="mt-12 text-center">
          <Link href="/" className="text-lg underline hover:no-underline">
            ← Back to home
          </Link>
        </div>
      </article>
    </Layout>
  )
} 