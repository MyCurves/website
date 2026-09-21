import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { cn } from "@/lib/utils";

const markdownComponents: Components = {
  a: ({ href, children }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="text-primary hover:underline">
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },
};

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div className={cn("prose prose-gray max-w-none text-gray-700 leading-relaxed", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
