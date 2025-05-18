import Link from "next/link"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
}

interface PostPreviewProps {
  post: Post
}

export function PostPreview({ post }: PostPreviewProps) {
  return (
    <article className="text-center">
      <Link href={`/posts/${post.slug}`} className="block hover:opacity-90 transition-opacity">
        <h3 className="text-2xl font-normal mb-4">{post.title}</h3>
        <div className="text-base mb-4">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <p className="mb-4 text-lg">{post.excerpt}</p>
        <div className="text-base underline">Read more</div>
      </Link>
    </article>
  )
}
