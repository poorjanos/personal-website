# Claude Code — Global Memory Management Setup

A runnable template. Open this file in Claude Code, switch to **plan mode**, have Claude
present the plan, approve it, then let Claude execute.

It sets up a structured, persistent **global memory** that layers cleanly on top of
Claude Code's built-in per-project auto-memory — without disrupting it.

## How to run

1. Open this file in Claude Code and enter plan mode.
2. Ask Claude to read this file and present a plan based on the actual current state of
   your machine (which files/directories already exist).
3. Approve the plan, then let Claude execute the three steps.

## Before starting

Create a task for each of the three steps below using TaskCreate. Mark each task
`in_progress` before starting it and `completed` when done.

**Safety rule:** If any file that already exists would be modified or removed, show its
current content and the proposed change, and get explicit confirmation before writing.
Never overwrite or restructure an existing file blind.

---

## Background — two memory layers

Claude Code already has a **built-in auto-memory** feature. It automatically saves facts
it learns to:

```
~/.claude/projects/{mapped-project-path}/memory/
```

Each fact is its own small Markdown file (with frontmatter), and `MEMORY.md` in that
folder is an auto-maintained index of one-line pointers to those fact files. **The
harness owns this format.**

This template adds a second layer — a **global memory** at `~/.claude/memory/` — plus a
rule set so the two layers cooperate:

- The harness auto-memory keeps capturing facts per project (left untouched).
- The global memory holds cross-project knowledge in one place that every session reads.
- A maintenance command, `"reorganize memory"`, periodically promotes globally-relevant
  facts up from the per-project auto-memory stores into the global memory.

**Critical constraint:** never write this template's own section templates or stub files
into a harness-managed `MEMORY.md`. The harness owns that file's format; mixing formats
corrupts the auto-memory feature. The *only* thing this template adds to a project
`MEMORY.md` is a single pointer line.

---

## Step 1 — Create the global memory tree

Create `~/.claude/memory/` if it does not already exist. This directory is owned entirely
by this scheme and is separate from the harness auto-memory path, so creating it is safe.

Create `~/.claude/memory/memory.md` — the index file:

```
# Memory Index

Read this file at session start. Load specific topic files only when relevant.

| File | Description | Last updated |
|------|-------------|--------------|
| `general.md` | Cross-project conventions, preferences, and user context | {today} |

## Cross-Memory Sync Rule

At session start, after reading this file:
1. Note the Last updated dates in the table above
2. If a project's harness auto-memory (~/.claude/projects/*/memory/) holds facts with
   global relevance, flag them for promotion (see "reorganize memory" in ~/.claude/CLAUDE.md)
3. Update the Last updated date on this file after any changes

## Domain Knowledge Lifecycle

1. Staging — knowledge accumulates in domain/{name}/
2. Promotion — enough knowledge exists to package as a plugin/skill
3. Pointer — after promotion, the memory file becomes a pointer to the plugin
```

Create `~/.claude/memory/general.md` — the cross-project file:

```
# General - Cross-Project Conventions

## User Context

(Populate as you go — facts about who you are: role, expertise, what you use Claude Code for)

## Writing & Naming Conventions

(Populate as you go — preferred date formats, naming patterns, style preferences)

## Workflow Preferences

(Populate as you go — how you like work reviewed, planning expectations, commit style)
```

Also create empty directories `~/.claude/memory/domain/` and `~/.claude/memory/tools/` if
they do not exist. They fill up over time as you work.

Replace `{today}` with the current date in `YYYY-MM-DD` format. Leave every other
`{placeholder}` literal — they are part of the rule text.

---

## Step 2 — Add memory sections to `~/.claude/CLAUDE.md`

If `~/.claude/CLAUDE.md` does not exist, create it as an empty file first.

For each of the five sections below, check whether a section with that exact header
already exists in the file. If it does, leave it alone. If it does not, add it:
- New or empty file: add the sections at the top.
- File with existing content: add the sections after the last existing section. Do not
  modify any existing content.

**Section: Memory Management**

```
## Memory Management

Maintain a structured memory system rooted at ~/.claude/memory/

### Structure

- memory.md — index of all memory files, updated whenever you create or modify one
- general.md — cross-project facts, preferences, environment setup
- domain/{topic}.md — domain-specific knowledge (one file per topic)
- tools/{tool}.md — tool configs, CLI patterns, workarounds

### Rules

1. When you learn something worth remembering, write it to the right file immediately
2. Keep memory.md as a current index with one-line descriptions
3. Entries: date, what, why — nothing more
4. Read memory.md at session start. Load other files only when relevant
5. If a file doesn't exist yet, create it
6. Before removing or modifying any existing memory entry, use AskUserQuestion to confirm
   with the user — show the current content and the proposed change

### Maintenance

When I say "reorganize memory":
1. Read all global memory files under ~/.claude/memory/
2. Scan every project's harness auto-memory: ~/.claude/projects/*/memory/MEMORY.md and
   its linked fact files
3. Identify facts with cross-project / global relevance — typically harness type
   `user` or `feedback`, plus any `reference`/domain knowledge not tied to one project
4. Promote each such fact into the right global file: general.md for conventions and
   preferences, domain/{topic}.md for domain knowledge, tools/{tool}.md for tooling;
   then update the memory.md index
5. For each promoted fact, use AskUserQuestion to confirm before removing it from the
   project store; on confirmation delete the fact file and its MEMORY.md pointer line.
   Leave genuinely project-specific facts in place
6. Within the global files: remove duplicates and outdated entries, merge entries that
   belong together, split files that cover too many topics, re-sort entries by date
7. Update the memory.md index and its Last updated dates
8. Show me a summary of what changed
```

**Section: Global Memory**

```
## Global Memory

Read ~/.claude/memory/memory.md at session start. Load specific topic files only when relevant.

Topic files:
- ~/.claude/memory/general.md — cross-project conventions and preferences
```

**Section: Global Memory Reference Rule**

```
## Global Memory Reference Rule

Project-level memory lives in the harness-managed auto-memory store
(~/.claude/projects/{mapped-path}/memory/). The harness owns that store's format — do
NOT inject section templates into its MEMORY.md or restructure its fact files.

The only permitted addition to a project MEMORY.md is a single global-memory pointer
note as the first line (below the H1, if the file has one):

> **Global memory:** read `~/.claude/memory/memory.md` at session start. See `~/.claude/CLAUDE.md` for memory rules.

Never copy the topic file list into a project MEMORY.md. That list lives only in the
## Global Memory section of this file (single source of truth).
```

**Section: Repo Memory Auto-Init**

```
## Repo Memory Auto-Init

The harness auto-memory feature creates and maintains each project's MEMORY.md. Do not
pre-create project MEMORY.md files, and do not write stub templates into them.

At session start in any project, if ~/.claude/projects/{mapped-path}/memory/MEMORY.md
exists and does not already begin with the global-memory pointer note (see Global Memory
Reference Rule), insert that note at the top — below the H1 if one exists. Make no other
changes to the file or to the harness fact files.
```

**Section: Domain Knowledge Lifecycle**

```
## Domain Knowledge Lifecycle

1. Staging — knowledge accumulates in ~/.claude/memory/domain/{name}/
2. Promotion — enough knowledge exists to package as a plugin/skill
3. Pointer — after promotion, the memory file becomes a pointer to the plugin;
   content lives in the plugin

When an update is needed to a promoted domain, note it in the memory file so an issue
can be created on the plugin repo.
```

---

## Step 3 — Add the global-memory pointer note to existing project MEMORY.md files

Scan `~/.claude/projects/` for project directories. For each one that has a
`memory/MEMORY.md` file:

- If it already begins with the global-memory pointer note → leave it alone.
- Otherwise → insert the note as the first content line, placed below the H1 if the file
  has one. Make no other change — do not touch the harness pointer lines or the fact
  files.

The note (identical everywhere):

```
> **Global memory:** read `~/.claude/memory/memory.md` at session start. See `~/.claude/CLAUDE.md` for memory rules.
```

Do **not** create `MEMORY.md` in projects that don't have one. The harness creates those
itself; the "Repo Memory Auto-Init" rule added in Step 2 inserts the note automatically
the first time the harness creates the file.

---

## After setup

Once the three steps are done, run `"reorganize memory"` once. This exercises the
maintenance routine: it scans the per-project auto-memory stores and promotes any
cross-project facts (your role, preferences, recurring conventions) up into
`~/.claude/memory/general.md`, with confirmation before anything is removed from a
project store. From then on, run `"reorganize memory"` whenever you want to consolidate
the facts the harness has accumulated.
