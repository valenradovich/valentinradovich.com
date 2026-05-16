import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen container mx-auto px-8 max-w-2xl">
      {children}
    </main>
  )
}
