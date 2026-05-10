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

## Deployment

**GitHub**: repo is live at `https://github.com/poorjanos/personal-website` (public). Remote uses HTTPS; credentials handled via `gh auth setup-git` (OAuth token, no SSH key needed).

**Hostinger**: static hosting — it cannot run `npm run build` itself. When ready to connect Hostinger, a GitHub Actions workflow is needed that:
1. Runs `npm run build` to produce `out/`
2. Pushes `out/` to a `dist` branch (or uses Hostinger's Git integration directly)

This workflow is **not yet set up**.

## Known gotcha: node_modules/.bin/next

On this machine, `node_modules/.bin/next` can end up as a file copy instead of a symlink after `npm install`, which causes `Cannot find module '../server/require-hook'` on build. Fix with:

```bash
rm node_modules/.bin/next && ln -s ../next/dist/bin/next node_modules/.bin/next
```

## Status (as of 2026-05-10)

Done:
- Next.js scaffold (TypeScript, Tailwind v4, App Router, ESLint)
- CLAUDE.md + AGENTS.md documented
- `.gitignore` excludes `out/`, `resources/`, `.claude/`
- GitHub repo created and `main` pushed
- `output: 'export'` set in `next.config.ts`
- Home page (`app/page.tsx`) — Hero, About, Themes, Experience (CV), Contact, Footer
- `app/layout.tsx` — Geist font, full OG + Twitter Card metadata
- `app/globals.css` — Tailwind v4 syntax, smooth scroll, no dark mode
- Build verified clean; dev server confirmed rendering

Pending:
- Blog pages: `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`
- Set up `content/blog/` directory and MDX pipeline (`lib/posts.ts`)
- `app/privacy/page.tsx` — Privacy notice / impressum
- `app/not-found.tsx` — Custom 404
- SEO: `generateMetadata` per page, `app/sitemap.ts`, RSS feed at `/feed.xml`
- Analytics: add Plausible or Umami `<Script>` in `app/layout.tsx`
- GitHub Actions deployment workflow for Hostinger
