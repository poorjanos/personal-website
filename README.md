# personal-website

Personal portfolio and blog for János Poór. Built with Next.js (App Router, TypeScript, Tailwind CSS v4), exported as a static site for Hostinger.

## Commands

```bash
npm run dev      # dev server at localhost:3000
npm run build    # static export → out/
npm run lint     # ESLint
npx tsc --noEmit # type-check
```

## Project structure

```
app/
  page.tsx              # Home: hero, bio, experience, contact
  blog/
    page.tsx            # Blog index
    [slug]/page.tsx     # Individual post
  layout.tsx            # Root layout, fonts, OG metadata
content/
  posts/                # Blog posts as .md files (YYYYMMDD-slug.md)
lib/
  posts.ts              # Read/parse posts with gray-matter + marked
```

## Writing a post

Add a `.md` file to `content/posts/` with this frontmatter:

```md
---
title: "Post title"
date: "YYYY-MM-DD"
excerpt: "Short teaser shown on the blog index."
---
```

The filename (minus `.md`) becomes the URL slug.

## Deployment

Static output goes to `out/` after `npm run build`. Upload to Hostinger via hPanel/FTP or a GitHub Actions workflow (not yet configured).

### Known gotcha

On this machine, `node_modules/.bin/next` can end up as a file copy instead of a symlink after `npm install`, causing `Cannot find module '../server/require-hook'`. Fix:

```bash
rm node_modules/.bin/next && ln -s ../next/dist/bin/next node_modules/.bin/next
```
