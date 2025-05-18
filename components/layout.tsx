"use client"

import { ReactNode } from "react"
import { ThemeToggle } from "./theme-toggle"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen container mx-auto px-8 max-w-2xl">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      {children}
    </main>
  )
} 