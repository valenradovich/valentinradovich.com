import Link from "next/link"
import { Layout } from "@/components/layout"
import { getSortedPostsData } from "@/lib/posts"

export default function Home() {
  // Only show published posts on homepage
  const posts = getSortedPostsData(false).slice(0, 3)

  return (
    <Layout>
      <header className="mb-6 text-center">
        <h1 className="text-6xl font-normal leading-tight">
          Valentin Radovich
        </h1>
      </header>
      <div className="text-left">
        <p className="text-xl mb-4 leading-relaxed">
          i'm a software engineer working on ai and machine learning - born in Argentina, currently living in Buenos Aires.
        </p>
        <p className="text-xl mb-4 leading-relaxed">
          i like to build stuff all the time that transforms raw and complex ideas into simple products.
        </p>
        <p className="text-xl mb-4 leading-relaxed">
            feel free to <Link href="mailto:hi@valentinradovich.com" className="underline hover:no-underline">talk to me</Link> if you have something interesting to share,
            read my <Link href="/posts" className="underline hover:no-underline">posts</Link>, some of my <Link href="https://github.com/valenradovich" className="underline hover:no-underline">code</Link> or thoughts on <Link href="https://x.com/radovichvalen" className="underline hover:no-underline">twitter</Link>.
        </p>
      </div>
    </Layout>
  )
}
