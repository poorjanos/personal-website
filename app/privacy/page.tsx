import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — János Poór",
  description:
    "Privacy notice and impressum for janospoor.com.",
};

export default function Privacy() {
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

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Privacy</h1>
        <p className="text-sm text-zinc-400 mb-12">Last updated: 25 May 2026</p>

        <div className="prose-content">
          <p>
            This website is a personal portfolio and blog operated by János
            Poór. It is informational only — no accounts, no comments, no
            contact forms, no newsletter.
          </p>

          <h2>What this site collects</h2>
          <p>
            The site itself does not set cookies, run trackers, or store any
            personal data about visitors. There is no analytics service active
            at the time of writing. If analytics is added later, it will be a
            cookieless, GDPR-friendly service (such as Plausible or Umami)
            collecting only aggregate, non-identifying metrics.
          </p>

          <h2>Hosting and server logs</h2>
          <p>
            The site is hosted on Cloudflare. As is standard for any web host,
            Cloudflare processes basic request data (IP address, timestamp,
            user agent) for security, abuse prevention, and traffic delivery.
            This processing is governed by{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare&apos;s privacy policy
            </a>
            .
          </p>

          <h2>Email contact</h2>
          <p>
            If you email me, your email address and the contents of the message
            are processed for the sole purpose of replying. Messages are
            retained in my personal inbox; I do not add senders to any list.
          </p>

          <h2>Your rights</h2>
          <p>
            Under the GDPR you may request access to, correction of, or
            deletion of any personal data I hold about you, and you may lodge a
            complaint with a supervisory authority. To exercise these rights,
            email{" "}
            <a href="mailto:poorjanos@gmail.com">poorjanos@gmail.com</a>.
          </p>

          <h2>Impressum</h2>
          <p>
            János Poór · Budapest, Hungary ·{" "}
            <a href="mailto:poorjanos@gmail.com">poorjanos@gmail.com</a>
          </p>
        </div>
      </main>

      <footer className="border-t border-zinc-200">
        <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
          <p className="text-sm text-zinc-400">© 2026 János Poór</p>
          <Link
            href="/privacy"
            className="text-sm text-zinc-400 hover:text-blue-600 transition-colors"
          >
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
