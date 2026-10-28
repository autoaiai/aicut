# Skills

This repository holds these skills and nothing else: no source, no build, no app. AICUT itself installs what it
needs the first time the skill runs it, and `npx -y @autoaiai/aicut@latest` prints the manual the skill works from.

Two skills, one job each: `aicut` is the film format and the four commands, `aicut-motion` is the art direction
(priority order, the design contract, the timeline, the seven design systems) **and the archive of eighty-six looks** —
a real cover, `style.json` and the canvas source of each — with the three-card pick that turns one line of a topic into
a chosen style.

The archive is also here as eighty-six skills of its own — `001-flat-vector-science` … `086-multi-scale-truchet`, one
folder per look, written from the archive by `node scripts/build-style-skills.mjs`. Each carries its own `poster.jpg`
(the target), `reference/code.js` (how it moves), `reference/style.json` and a `skill.json` row, so one look can be
handed to an agent on its own: "make the film in exactly this look". Nothing in one of them is invented — the palette
is read out of its source, the cover's colours are sampled from its own picture, and the words are the archive's.
Edit the archive, then run the script; never edit one of the eighty-six by hand.

Both are written here. The archive inside `aicut-motion` came from an open-source agent skill
([the catalogue](https://asaipm.com/#skill)) — Futurepedia's AI Style Atlas — and was rewritten so the way it runs is
AICUT's: `film.html` and the four commands. `THIRD_PARTY_NOTICES.md` inside the skill says where it came from and under
which licence it travels.

`npx skills add autoaiai/aicut` reads this folder and copies each skill into whichever agent the person picks —
Claude Code, Codex, Cursor, OpenCode, Gemini CLI, and the rest of the
[80-odd supported agents](https://github.com/vercel-labs/skills/blob/main/docs/agents.md).

```sh
npx skills add autoaiai/aicut            # choose the skill and the agents, project by project
npx skills add autoaiai/aicut -g         # the same, for every project on this machine
npx skills add autoaiai/aicut --all      # every skill, every agent, no prompts
npx skills add autoaiai/aicut --list     # what is in here, without installing
```

## What a skill is

A folder with a `SKILL.md`:

```markdown
---
name: aicut
description: What it does, and when an agent should read it.
---

# AICUT

What to do, in what order, and what never to do.
```

- `name` is the folder's name: lowercase letters, digits and hyphens.
- `description` is the whole of what the agent sees before it decides to read the skill. It names the tasks and the
  words a person would use ("launch video", "做个视频"), because that is what has to match.
- The body is short on purpose: the format and the commands are already printed by `npx -y @autoaiai/aicut@latest`, and a
  skill that repeats them goes stale. `references/` holds what is worth having in front of you, read only when it is
  needed.

## Adding or changing one

1. Make `skills/<name>/SKILL.md`, or edit the one that is here.
2. If it is one the app ships with (`aicut-motion`), run `pnpm build:skills`: the desktop app carries a copy of it,
   written into each agent's folder at start-up, and `pnpm check:skills` fails while that copy is out of date. The same
   run writes every skill here into `packages/AiCut/skills/`, the copy Studio offers when a project is made ("New
   project" → Skills) — edit a skill here, never that copy.
3. Run `pnpm check:skills` — the frontmatter, the `name`, and every relative link resolving inside the folder (the
   install copies that folder and nothing beside it). A `description` with an unquoted `": "` in it is caught here
   too: YAML reads it as a nested mapping and the loader drops the whole skill.
4. Try it the way a person would: `npx skills add ./skills --list`, then `npx skills add ./skills -g -a claude-code`
   (or your agent) and ask for the thing the description promises.

Keep a skill self-contained: no symlinks, no build output, no files from elsewhere in the repository. Anything the
agent needs must live under `skills/<name>/`.
