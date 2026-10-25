# Skills

This repository holds these skills and nothing else: no source, no build, no app. AICUT itself installs what it
needs the first time the skill runs it, and `npx -y aicut@latest` prints the manual the skill works from.

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
- The body is short on purpose: the format and the commands are already printed by `npx -y aicut@latest`, and a
  skill that repeats them goes stale. `references/` holds what is worth having in front of you, read only when it is
  needed.

## Adding or changing one

1. Make `skills/<name>/SKILL.md`, or edit the one that is here.
2. Run `pnpm check:skills` — it checks the frontmatter, that `name` is the folder, and that every relative link
   resolves inside the folder (the install copies that folder and nothing beside it).
3. Try it the way a person would: `npx skills add ./skills --list`, then `npx skills add ./skills -g -a claude-code`
   (or your agent) and ask for the thing the description promises.

Keep a skill self-contained: no symlinks, no build output, no files from elsewhere in the repository. Anything the
agent needs must live under `skills/<name>/`.
