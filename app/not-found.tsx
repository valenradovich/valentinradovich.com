import Link from "next/link"
import { Layout } from "@/components/layout"

export default function NotFound() {
  return (
    <Layout>
      <header className="mb-6 text-center">
        <h1 className="text-6xl font-normal leading-tight">
          404
        </h1>
      </header>
      <p className="text-xl mb-12">i don't know what you're looking for, but it's not here.</p>
      <Link href="/" className="text-lg underline hover:no-underline">
        ← Back to home
      </Link>
    </Layout>
  )
}
