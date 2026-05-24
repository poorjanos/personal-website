---
title: "Context engineering starts on your laptop"
date: "2026-05-24"
excerpt: "Before context engineering becomes an enterprise problem, it is a desk-level habit — and the design choices you make for your own AI assistant are the same ones data leaders will face at scale."
---

*Inspired by Joshua Reilly's [How I finally sorted my Claude Code memory](https://www.youngleaders.tech/p/how-i-finally-sorted-my-claude-code-memory), and a follow-up to [last week's post on context engineering](/blog/20260517-blog-context-engineering).*

---

Last week I argued that context engineering — the discipline of dynamically assembling everything an AI model sees on each invocation — has quietly become the most important skill in applied AI, and that data management teams are better positioned for it than they realise. The post pitched it as an enterprise problem.

It is not only an enterprise problem. It starts much smaller. It starts on the laptop in front of you, with the AI assistant you already use every day.

This week I finally sat down to do something about it for myself. My Claude Code setup had become a tangle: the global instruction file was bloated, useful preferences had to be re-explained in every project, and lessons I had taught the assistant in one repo evaporated the moment I opened another. Reilly's piece made the missing idea click — I needed a layered memory architecture, not a longer prompt.

**The takeaway:** working with AI comes with the responsibility to thoughtfully organise and maintain the agent's knowledge about you and your workflows. That responsibility does not wait for an enterprise context platform. It begins on your own machine, and the design choices you make there are the same ones — just smaller — you will eventually face at scale.

## The vendors will absorb part of this. The principles still matter.

The first objection is fair: aren't the big AI companies going to solve this for me?

Yes. Partly. They already are.

Claude dropped its auto-memory feature in February of this year — a per-project store that quietly captures facts, preferences, and corrections without being asked. Hermes, one of the more interesting newer agents, has built its competitive position around exactly this layer, with frozen context snapshots and full chat retrieval as the selling points. By next year every serious assistant will ship some version of this.

But built-in memory only covers one layer: what the assistant learned **inside a single project**. It does not, by default, carry a lesson from repo A across to repo B. It does not separate fast-moving project facts from slow-moving truths about you — your tools, your domain, your way of working. And it does not give you a clean place to deposit knowledge that should outlive any one piece of work.

That is the gap a personal memory architecture fills. And it is the gap that — at a different scale, with different tools — your organisation will be asking you to fill in a couple of years.

## The shape of the setup

I will not go into the mechanics here. What matters is the *shape*. There are essentially three layers.

**A built-in per-project memory**, owned by the assistant. Captures facts as you work. Untouched by anything else.

**A curated global memory** that you own. A small set of files: a cross-project file for who you are and how you like to work, a `tools/` folder for things like your Python conventions or your preferred git workflow, a `domain/` folder for business knowledge that is relevant beyond any single project.

**A maintenance routine** — a single command you run periodically — that promotes globally-relevant facts up from the per-project stores into the curated global memory, with your confirmation before anything is moved.

The key element here is the curated global memory. It does two jobs at once. It keeps the global instruction file lean, because instructions stop being the dumping ground for context and become the rulebook for *how* context is loaded. And it gives cross-project knowledge a permanent home: lessons about tools you use everywhere, and — more importantly — knowledge about the domains you keep returning to.

## The bit that matters for enterprise data leaders

That last layer, the domain layer, is where this stops being a personal-productivity story and starts being a data-management story.

In any large organisation, the single hardest knowledge problem is not the data in the warehouse. It is the **knowledge in people's heads, siloed by division, and almost impossible to propagate across business lines.** Product knows things claims doesn't. Underwriting knows things sales doesn't. The customer team knows things marketing keeps re-discovering. We have spent decades trying to fix this with wikis, glossaries, and Confluence reorganisations, with limited success.

A curated, layered memory system for AI agents is — for the first time — a genuinely promising place to put that knowledge. Not because the storage technology is new (it isn't; it is still just markdown files), but because the *consumer* is new. An AI agent that reads a domain note before every relevant task is a tireless propagation mechanism. It is exactly the missing layer between "we documented it" and "someone actually used the documentation."

That is what data managers taking on context engineering will need most. Not vector databases. Not RAG infrastructure. A disciplined, curated, governed place where cross-divisional domain knowledge lives in a form an agent can use — and a process for keeping it accurate as the business changes.

## Multi-level, layered, beginning at the desk

If there is one reframe I would offer to my fellow data professionals, it is this: **context engineering is a multi-level, layered task, and it begins on your own laptop.**

The personal layer teaches you the disciplines you will need at scale — what to capture, what to throw away, how to keep instructions lean, how to organise domain knowledge so it can be reused. The team layer is the same disciplines applied to a shared agent setup. The enterprise layer is the same disciplines again, applied to the divisional silos that have resisted every previous solution.

Start at the desk. Build the smallest version of the system that gives you cross-project coherence. Pay attention to which parts of your own knowledge keep wanting to be promoted upward. That instinct — *what belongs in the global memory, what belongs in a domain file, what belongs nowhere at all* — is the same instinct you will need when your organisation asks you to do this for a thousand people.

The agents will get smarter. The built-in memory features will get better. The responsibility — to thoughtfully organise and maintain what your agent knows about you, your work, and your domain — is yours, and it does not go away.

---

*If you want to try the setup for yourself: [download the Claude Code global memory template](/downloads/claude-global-memory-management-template.md). Open it in Claude Code, switch to plan mode, and let the assistant walk you through it.*
