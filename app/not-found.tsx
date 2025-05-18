import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function NotFound() {
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

      <div className="my-20 text-center">
        <h1 className="text-4xl font-normal mb-8">404</h1>
        <p className="text-xl mb-12">The page you're looking for doesn't exist.</p>
        <Link href="/" className="text-lg underline hover:no-underline">
          Return Home
        </Link>
      </div>

      <footer className="mt-20 mb-8 text-center text-base">
        <p>© {new Date().getFullYear()} Valentin Radovich. All rights reserved.</p>
      </footer>
    </div>
  )
}
