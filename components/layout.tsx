"use client"

import { ReactNode } from "react"
import { ThemeToggle } from "./theme-toggle"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen w-full max-w-2xl flex-col justify-center px-4 sm:px-8 mx-auto">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      {children}
    </main>
  )
} 