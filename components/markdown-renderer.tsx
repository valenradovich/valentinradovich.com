"use client"
import ReactMarkdown from "react-markdown"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl font-normal mb-8 text-center font-instrument-serif" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-normal mt-12 mb-6 text-center font-instrument-serif" {...props} />
        ),
        h3: ({ node, ...props }) => <h3 className="text-xl font-normal mt-8 mb-4 font-instrument-serif" {...props} />,
        p: ({ node, ...props }) => <p className="mb-6 text-lg leading-relaxed font-instrument-serif" {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc pl-8 mb-6 space-y-2 font-instrument-serif" {...props} />,
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-8 mb-6 space-y-2 font-instrument-serif" {...props} />
        ),
        li: ({ node, ...props }) => <li className="mb-2 text-lg font-instrument-serif" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-2 border-current pl-6 italic my-8 text-lg font-instrument-serif" {...props} />
        ),
        a: ({ node, ...props }) => <a className="underline hover:no-underline font-instrument-serif" {...props} />,
        code: ({ node, ...props }) => (
          <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded" {...props} />
        ),
        pre: ({ node, ...props }) => (
          <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-6 rounded overflow-x-auto mb-6 my-8" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
