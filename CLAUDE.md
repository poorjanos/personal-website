# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project overview

Personal portfolio website for János Poór — a public professional presence combined with a regularly updated blog. Target audience: headhunters, hiring managers, and data peers.

Stack: **Next.js + TypeScript + Tailwind CSS**, deployed as a **static export** to Hostinger.

## Commands

```bash
npm run dev          # start dev server (localhost:3000)
npm run build        # build static site → out/
npm run lint         # ESLint
npx tsc --noEmit     # type-check only
```

After `npm run build`, the `out/` directory is the deployable static site (upload to Hostinger via hPanel/FTP or Git integration).

## Architecture

### Static export

`next.config.ts` must set `output: 'export'`. This constrains the project: no server-side rendering, no API routes, no `next/headers` or other server-only APIs. All data must be available at build time.

### Content layer

Blog posts live as `.mdx` files in `/content/blog/`. Each file has frontmatter:

```md
---
title: "Post title"
date: "YYYY-MM-DD"
excerpt: "Short teaser shown on the blog index."
---
```

Blog posts are read at build time via Node `fs` APIs (no CMS, no external fetch). A shared utility in `lib/posts.ts` handles reading, parsing frontmatter, and sorting by date. Post pages are generated with `generateStaticParams`.

### Routing (App Router)

```
app/
  page.tsx           # Home: hero, bio, themes, latest posts, contact
  blog/
    page.tsx         # Blog index: reverse-chronological list
    [slug]/
      page.tsx       # Individual post, rendered from MDX
  privacy/
    page.tsx         # Privacy notice / impressum
  not-found.tsx      # Custom 404
```

### SEO & meta

Each page exports a `generateMetadata` function. Shared defaults (title template, OG image, Twitter card) live in `app/layout.tsx`. Sitemap and RSS feed are generated as static files — either via `app/sitemap.ts` and `app/feed.xml/route.ts`, or as build-time scripts.

### Analytics

Plausible or Umami — injected as a `<Script>` in `app/layout.tsx`. GDPR-friendly; no cookie banner needed.

## Key constraints

- **No dynamic features in v1**: no tags, no search, no comments, no contact form.
- **Lighthouse targets**: 95+ on Performance, Accessibility, Best Practices, SEO.
- **Accessibility**: WCAG AA contrast; semantic HTML; keyboard-navigable.
- **Open Graph / Twitter Card** meta tags required on every page for clean LinkedIn share previews.
- **RSS feed** required at `/feed.xml`.
