import Link from "next/link"
import { Layout } from "@/components/layout"
import { getSortedPostsData } from "@/lib/posts"

export default function PostsPage() {
  // Only show published posts
  const posts = getSortedPostsData(false)

  return (
    <Layout>
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-normal leading-tight">
          Posts
        </h1>
      </header>
      {posts.length > 0 ? (
        <div className="max-w-2xl mx-auto space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0">
              <Link href={`/posts/${post.slug}`} className="block group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="text-2xl font-normal group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-base text-gray-500 dark:text-gray-400 whitespace-nowrap sm:ml-4 flex-shrink-0 mt-1 sm:mt-0">
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

      <div className="mt-20 text-center">
        <Link href="/" className="text-lg underline hover:no-underline">
          ← Back to home
        </Link>
      </div>
      <footer className="mt-20 mb-8 text-center text-base">
      </footer>
    </Layout>
  )
} 