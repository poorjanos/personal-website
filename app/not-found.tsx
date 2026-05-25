import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found — János Poór",
};

export default function NotFound() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen flex flex-col">
      <header className="border-b border-zinc-200">
        <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold hover:text-blue-600 transition-colors"
          >
            János Poór
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-zinc-500 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <a
              href="mailto:poorjanos@gmail.com"
              className="text-sm text-zinc-500 hover:text-blue-600 transition-colors"
            >
              poorjanos@gmail.com
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto px-6 py-24 w-full">
        <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">
          404
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-zinc-600 leading-relaxed mb-8">
          The page you were looking for isn&apos;t here. It may have been
          moved, renamed, or never existed.
        </p>
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            ← Back to home
          </Link>
          <Link
            href="/blog"
            className="text-zinc-500 hover:text-blue-600 transition-colors"
          >
            Read the blog
          </Link>
        </div>
      </main>
    </div>
  );
}
