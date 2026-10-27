---
name: openchatcut
description: "Connect an MCP-capable coding agent to AICUT and edit local video projects. Use when the user asks to install, connect, or set up AICUT; inspect or edit an AICUT project; work with its timeline, transcript, captions, media, generation, motion graphics, audio, color, or export tools; or recover from an AICUT MCP error. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "0xsline/OpenChatCut"
---

# AICUT

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


OpenChatCut is a local-first, agent-native video editor. This skill is the
single external entry point; specialized editing guidance remains inside the
running editor and is loaded on demand with `load_skill`.

## Route the task

- Install, connect, or diagnose the MCP server: read
  `references/getting-started.md`.
- Inspect or modify a project: read `references/editing-workflow.md`.
- Recover from a failed tool call, stale session, or missing editor:
  read `references/known-errors.md`.

## Essentials

1. Start OpenChatCut before connecting. The default MCP endpoint is
   `http://localhost:5199/api/external-mcp/mcp`.
2. Call `openchatcut_status`, then `list_projects`. Select a project only when
   the user names it or the current context identifies it.
3. Call `load_skill` before specialized work. It is read-only and requires
   neither `begin_edit_session` nor `editSessionId`; available names and support
   files come from the live MCP tool description.
   With progressive exposure enabled, this call reveals the skill's referenced
   tools and emits `tools/list_changed`; refresh the list before continuing.
4. Before project reads or edits, call `begin_edit_session`. Keep its
   `editSessionId` and pass it to every draft-safe editor tool.
5. Set `reuseExisting: true` on `begin_edit_session` to reuse your active draft
   or adopt an unchanged orphan. Existing operations and approval mode are kept.
   If reuse is rejected, call `list_edit_sessions`. Use `recover_edit_session`
   only with a listed `recoveryActions` value; another online owner must finish
   or discard its own session.
6. Use `approvalMode: "manual"` unless the user explicitly asks for unattended
   application. In manual mode, the user approves the complete proposal in
   OpenChatCut. In auto mode, `review_edit_session` applies the complete draft.
7. Finish with `review_edit_session`. Report success only after
   `get_edit_session` returns `applied`.

## Skill version

`2026-09-04.1`

The OpenChatCut MCP server announces its required skill baseline. If the server
baseline is newer, run:

```bash
npx skills update openchatcut
```
```
Fallback command:
```
```bash
npx skills add 0xsline/OpenChatCut --skill openchatcut
```

## Source

Rewritten for AICUT from [`0xsline/OpenChatCut`](https://github.com/0xsline/OpenChatCut)
(MIT), skills/openchatcut/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 31 skills; this is the one its entry stands for.
