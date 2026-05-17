import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: `${post.title} — János Poór` };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

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
              className="text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors"
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
        <Link
          href="/blog"
          className="text-sm text-zinc-400 hover:text-blue-600 transition-colors mb-10 inline-block"
        >
          ← All posts
        </Link>
        <article>
          <time className="text-sm text-zinc-400">{post.date}</time>
          <h1 className="text-3xl font-bold tracking-tight mt-2 mb-10">
            {post.title}
          </h1>
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </main>
    </div>
  );
}
