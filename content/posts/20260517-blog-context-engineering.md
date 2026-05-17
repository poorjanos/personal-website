---
title: "Stop arguing about RAG, start engineering context!"
date: "2026-05-17"
excerpt: "How ownership of context becomes the number one data management priority"
---

*Why the most important AI skill in 2026 isn't writing prompts — and why data management teams are better positioned for it than anyone realises.*

---

A few weeks ago I sat in a meeting where two smart colleagues spent forty minutes arguing whether we should "fine-tune a model" or "just use RAG." Both of them had read enough to be dangerous. Neither of them, I realised halfway through, was asking the right question.

The right question wasn't *which technique*. It was: **what does the model actually need to see to make a sound decision on this claim, where does that information live today, and who is going to keep it clean?**

That question has a name now. It's called context engineering, and over the last twelve months it has quietly become the most important discipline in applied AI. If you lead a data team, this is your problem whether you've signed up for it or not. The good news — and the reason I'm writing this — is that you are already partly equipped for it. You probably just don't know it yet.

## The shift nobody announced

For about three years, the loudest skill in enterprise AI was *prompt engineering*. Companies hired prompt engineers, ran prompt-engineering workshops, and stitched "good at prompts" into job descriptions. By the start of 2026, that conversation has cooled, and a different one has taken its place.

The reason is simple. Prompt engineering treats the model like a clever stranger you brief once. Context engineering treats the model like a contractor you hire every morning — and accepts that the real work isn't writing today's briefing, it's running the office around the contractor so that the right files, the right notes from yesterday, and the right house rules are on the desk before they walk in.

Here is the cleanest way I've found to think about it. Three concepts, sitting at different levels:

**Prompt engineering** is the instruction you write for the model on a single call. A skill of phrasing. Scope: a string of text.

**Agent memory** is the persistent layer that lets a model retain anything across turns and sessions — short-term working memory inside a conversation, long-term storage of preferences, facts, and corrections that survives across days. Scope: state across time.

**Context engineering** is the umbrella discipline of dynamically assembling everything the model sees on each invocation — the prompt, retrieved data, memory, tool outputs, policy rules — inside the token budget. Scope: the full information system around the model.

The first two are artifacts. The third is the engineering work that produces and assembles them. That's the move, and once you see it you can't unsee it: **the prompt is no longer the unit of work. The context bundle is.**

Which means, for data people, that the context bundle is now the artifact you need to govern.

## What about fine-tuning?

Quick aside, because this is what eats most enterprise AI meetings: fine-tuning is not the same thing, and it doesn't sit on the same axis. Fine-tuning updates the model's weights by training it on examples — it bakes in a tone, a format, a reasoning pattern. Context engineering changes what the model *sees* on each call without touching the weights.

## The stack everyone is converging on

The most useful idea I picked up while researching this is that context isn't one bag of stuff handed to the model. It's a small stack of distinct layers, each with its own rate of change, its own storage technology, and its own reason to exist. Information that the model needs comes in four shapes:

**Context (the frame).** Who we are, what we do, how we do it. Voice, customer profile, processes. Changes slowly. Stored as markdown in a repo. This is the layer everyone starts with.

**State (the current situation).** What's happening right now. Open claims, pipeline status, today's tasks. Changes fast. Stored in an operational database — Oracle, Postgres, Snowflake, whatever your system of record already is.

**Memory (what the AI learns and keeps).** Preferences, corrections, rules the AI has discovered over time. Written by the system itself. Stored as small, atomic, retrievable notes.

**RAG (the external vault).** Thousands of documents queryable by semantic similarity. Stored in a vector database. Rare — most use cases genuinely don't need it.

The first three are the default trio. RAG is the exception, not the rule.

And here is the part that ought to make every data leader sit up: the stack is supposed to be built **constraint-driven, not hype-driven.** You add the foundation context on day one. You add a database layer when the data has real shape — entities, relationships, status. You add memory when the AI keeps forgetting the same lessons. You add RAG only when humans need to read source documents, or when the volume of documents truly justifies it. Skip these gates and you end up with brittle, expensive infrastructure that doesn't solve the problem you started with — usually a vector database the size of a small country, indexing PDFs the model never actually needed.

The depth of the stack also scales with the workflow. Simple chat? Context alone is enough. A deterministic workflow with clear steps? Add state. An agentic workflow where the AI is making real decisions at non-deterministic steps? You almost certainly need the default trio. And for those of us in regulated industries, this is the design question that matters: **how do you build context that lets the AI make sound decisions at the non-deterministic moments?** Agentic systems in insurance, banking, or healthcare don't fail because the model is too small. They fail because the right context wasn't assembled at the right moment.

## Why my data team owns more of this than I realised

For decades, data management has governed *data at rest*. Schemas. Lineage. Quality rules. Access controls. The thing in the warehouse, the thing in the catalog.

Context engineering shifts the spotlight to *data in motion to a model*. What got retrieved. In what order. With what metadata. Under what policy. For which user. On whose behalf. The artifacts are new — embeddings, chunks, retrieved passages, memory entries, retrieval logs — but the disciplines around them are uncannily familiar. They need cataloguing. They need lineage. They need quality control. They need access governance.

Two signals I'm watching closely in my own organisation:

The **semantic layer** is becoming load-bearing. AI systems perform dramatically better when they reason over a curated business model — what we mean by "customer," "policy," "active claim" — rather than raw tables. Whoever owns the semantic layer in your company is increasingly the person who owns AI quality, whether their job title reflects that or not.

**Retrieval pipelines are the new ETL.** They need monitoring. They need versioning. They need SLAs. When the wrong document gets retrieved for a regulated decision, that's a data quality incident, not a "model issue." It belongs on a data management runbook.

The implication, sitting here in 2026, is that the bottleneck in enterprise AI has quietly moved. Model quality is converging across vendors — Claude, GPT, Gemini, the open-weight contenders — and the differentiator is no longer which model you picked. The differentiator is whether the right enterprise data reaches the model with the right metadata, governed properly, fast enough to be useful. **That is data plumbing. That is our work.**

## Skills shift, not skills replacement

I'll close with the most reassuring observation I've taken from this research, because I think a lot of data managers are quietly worried.

Context engineering is **closer to data engineering than to data science.** It's pipelines, retrieval, semantic structure, access control, lineage. Data engineers, data stewards, and information architects are well-positioned for this work. The new layer adds retrieval design, evaluation, and context governance — but the foundation is the same foundation you've been building careers on.

The trap I'd watch for is the opposite mistake: assuming that because the tools are new, the discipline is new. It isn't. The discipline is data management, applied to a new artifact — the context bundle — that happens to flow toward a language model instead of a dashboard. Same questions: who owns it, how do we know it's correct, who can see it, what happens when it changes.

If I had to give one piece of advice to a peer running a data function right now, it would be this: don't wait for the AI team to come and ask for "the data." They will, and you'll get a vector database project dropped on you with no governance attached. Get in front of it. Frame the context bundle as the new governed artifact. Audit your semantic layer. Ask whose name is on the retrieval pipeline. The vocabulary may be unfamiliar — chunks, embeddings, agents, memory — but the underlying job is the one you've already been doing. It just got more interesting.

---

*Some of the sources I found most useful while writing this, if you want to go deeper:*

- [What Is Context Engineering? — IBM](https://www.ibm.com/think/topics/context-engineering)
- [Context Engineering Framework for Enterprise AI in 2026 — Atlan](https://atlan.com/know/context-engineering-framework/)
- [Why AI Teams Are Moving From Prompt Engineering to Context Engineering — Neo4j](https://neo4j.com/blog/agentic-ai/context-engineering-vs-prompt-engineering/)
- [State of AI Agent Memory 2026 — Mem0](https://mem0.ai/blog/state-of-ai-agent-memory-2026)
- [RAG vs Fine-Tuning for LLMs (2026): Production Guide — Umesh Malik](https://umesh-malik.com/blog/rag-vs-fine-tuning-llms-2026)
