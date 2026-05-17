import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — János Poór",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div className="bg-white text-zinc-900">
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
              className="text-sm font-medium text-blue-600"
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

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-12">Blog</h1>
        {posts.length === 0 ? (
          <p className="text-zinc-500">No posts yet.</p>
        ) : (
          <ul className="space-y-10">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <time className="text-sm text-zinc-400">{post.date}</time>
                  <h2 className="text-xl font-semibold mt-1 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-zinc-600 mt-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
