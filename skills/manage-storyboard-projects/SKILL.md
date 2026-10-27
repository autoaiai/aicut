---
name: manage-storyboard-projects
description: "Create, find, inspect, update, or delete Agent Storyboard projects directly through MCP. Use when the user asks the agent (Codex or Claude Code) to write a new video script or storyboard into the local storyboard app, add or revise shots, rename a project, change its aspect ratio, find an existing project, or delete one without browser automation. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "Yuuhann1999/codex-storyboard"
---

# Manage Storyboard Projects

## Running it in AICUT

AICUT's film is `film.html`: it cuts pages, footage, pictures and sound together on tracks. A page is a web page that
sets `window.film = { frame(t) }` and draws that moment — no framework, no build step, no composition object, no
`registerRoot`. Five shots are five pages cut together, not one page that changes scene, so each shot stays trimmable
and replaceable in Studio.

```sh
npx -y @autoaiai/aicut@latest          # the manual: the format and the commands, always current
npx -y @autoaiai/aicut@latest open .   # make this folder a film and print Studio's address
npx -y @autoaiai/aicut@latest look     # a contact sheet of the whole film, its sound, and a determinism check
npx -y @autoaiai/aicut@latest look 4.5 # one frame, full size — look at the PNG, not at the code
npx -y @autoaiai/aicut@latest render   # the MP4, beside film.html
```

Run the manual before the first film: it is authoritative for the format, and this skill is about the method above it.

Where the words below name another program's part, it becomes this:

| elsewhere | in AICUT |
|---|---|
| composition, timeline, project file | `film.html`; tracks and clips inside it |
| a scene, a sequence, a slide | a page (`pages/<name>.html`) cut onto a track |
| `useCurrentFrame()`, `interpolate()` | `frame(t)` — the picture depends only on `t`, never on state or `Date.now()` |
| a still, a screengrab | `aicut look <t>` |
| `render` / `build` / `export` | `aicut render` (the person can also export from Studio) |
| a dev server, a preview window | `aicut open` and the Studio address it prints |

Hard rules that hold whatever the method says: the picture depends only on `t`; every value in the person's prompt is
binding; look at the frames `look` writes before saying a film is done.


Use the Agent Storyboard MCP project tools. Never control the browser, never run `npm start` manually during normal use, and never edit data files directly.

If the current agent session does not expose Storyboard MCP tools such as `create_storyboard_project`, `list_storyboard_projects`, or `open_storyboard`: in Codex, use `tool_search` to search for `agent storyboard` and load the deferred tools; in Claude Code, check that the `agent-storyboard` MCP server is connected (`/mcp`). Only if they still cannot be found, tell the user to start a new conversation or restart the agent so plugin tools are reloaded. Do not silently fall back to editing local data files directly.

## Open the storyboard

If the user asks to open, start, launch, or show Agent Storyboard:

1. Call `open_storyboard`.
2. Return the local URL as a clickable link.
3. Tell the user to open the link in the agent's side panel or in a browser.
4. Do not launch Chrome, shell `open`, Computer Use, or Browser automation just to open the page.

The plugin starts the bundled local app automatically. Project data is stored outside the plugin cache by default.

## Create a project

1. Turn the user's request into a complete shot list before calling the tool.
2. Call `create_storyboard_project` once with the project title, aspect ratio, all shots, and optional absolute `designPath`.
3. Do not create shots one at a time.
4. Return the created project ID and the project URL from the tool result. Tell the user to open that URL or refresh the storyboard if it is already open.
5. If any shot uses `remotion` or `hyperframes`, mention that generation requires the corresponding plugin or local toolchain before processing assets.

Each shot should include:

- `rollType`: `A-ROLL` for primary presentation or spoken footage; `B-ROLL` for supporting visuals.
- `mediaType`: `image` or `video`.
- `duration`: seconds.
- `dialogue`: spoken line for the shot.
- `visualPrompt`: concrete visual description used for asset generation.
- `generator`: `manual`, `image-gen`, `hyperframes`, or `remotion`.
- `notes`: editing, pacing, transition, or production notes.

Choose `generator` deliberately:

- `manual`: recorded presenter footage, screen recordings, or existing local material.
- `image-gen`: a static generated visual.
- `hyperframes`: designed motion graphics or interface animation.
- `remotion`: programmatic React-based video composition.

## Find and inspect

- Use `list_storyboard_projects` first when the project ID is unknown. Pass `query` when the user gives a title.
- Use `get_storyboard_project` only when complete shot content is needed.
- Do not fetch every full project merely to find one title.

## Update

Use one `update_storyboard_project` call:

- `title` or `aspectRatio` for project metadata.
- `appendShots` for new shots.
- `shotUpdates` for specific existing shots.
- `deleteShotIds` for removed shots.
- `designPath` to import or replace DESIGN.md.
- `removeDesign: true` to remove it.

Fetch the complete project first only when shot IDs or existing content are required.

## Apply copied visual-arrangement prompts

When a copied prompt contains a target project ID and asks to generate a director-style visual arrangement, treat it as an execution request that must write back to the storyboard page. Do not answer with a Markdown table only.

1. Call `get_storyboard_project` with the provided project ID.
2. Build the complete shot list internally, preserving the original dialogue and mapping the arrangement into `visualPrompt` and `notes`.
3. Call `update_storyboard_project` once to apply `shotUpdates`, `appendShots`, and only necessary `deleteShotIds`; never delete the project or its media for this workflow.
4. Do not enqueue image, video, HyperFrames, or Remotion generation during the arrangement step.
5. After the write, return a concise summary of the number of shots written, full-check conclusions, unresolved material decisions, and the project URL. Do not repeat the full table in chat.

If no completed aligned voice timeline is provided, do not invent timestamps. Use `duration: 0` and record `时长待录音后确定` in `notes`; when an aligned timeline exists, derive seconds from its exact millisecond phrase boundaries.

## Delete

Project deletion permanently removes the project and its local media. Ask for explicit confirmation immediately before calling `delete_storyboard_project`.

## Token discipline

- Create the complete project with one MCP call.
- Prefer project summaries over full project reads.
- Return concise results instead of repeating the full script after it has been written.

## Source

Rewritten for AICUT from [`Yuuhann1999/codex-storyboard`](https://github.com/Yuuhann1999/codex-storyboard)
(MIT), plugins/agent-storyboard/skills/manage-storyboard-projects/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 2 skills; this is the one its entry stands for.
