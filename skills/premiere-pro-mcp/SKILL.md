---
name: premiere-pro-mcp
description: "Install, verify, troubleshoot, and operate the Adobe Premiere Pro MCP server. Use when a user wants an agent to set up Premiere MCP, connect Claude Code/Codex/Claude Desktop, control Premiere, import media, build sequences, edit timelines, apply effects, or diagnose bridge issues. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "hetpatel-11/Adobe_Premiere_Pro_MCP"
---

# Adobe Premiere Pro MCP

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


Use this skill when working with the Adobe Premiere Pro MCP server from `hetpatel-11/Adobe_Premiere_Pro_MCP`.

## Core Rules

- Use the MCP tools for Premiere operations; do not invent ExtendScript unless the MCP tool surface is missing the needed operation.
- Default MCP `tools/list` is a small always-on set. Call `search_tools` (BM25 query or regex pattern), then `invoke_tool` with the exact name. `PREMIERE_MCP_TOOLSET=full` lists every tool.
- Prefer read-only discovery first: `get_project_info`, `list_sequences`, `list_project_items`, `get_active_sequence`, and relevant resource reads.
- Use real imported media. If the user asks to edit with assets, verify file paths exist, import them with `import_media`, then place the imported project item IDs on a sequence.
- Keep the temp directory consistent across the MCP server and CEP panel: `/tmp/premiere-mcp-bridge` unless the user explicitly configured another path.
- Ask before destructive or externally visible actions: deleting clips/media, overwriting exports, closing projects, saving over important project files, or sending files elsewhere.
- For generated/demo edits, prefer creating a new clearly named sequence instead of modifying the user's active sequence.
- If a tool returns `success: false`, report the exact error and run diagnostics before retrying blindly.

## Install Workflow

If the user asks you to install or set up the MCP:

1. Check the OS. The automated installer is macOS-focused.
2. Clone or open the repo:

```bash
git clone https://github.com/hetpatel-11/Adobe_Premiere_Pro_MCP.git
cd Adobe_Premiere_Pro_MCP
```
```
3. On macOS, run:
```
```bash
npm run setup:mac
```
```
4. For non-macOS or manual client setup, run:
```
```bash
npm run build
```
```
5. Register the MCP server in the user's client with:
```
```text
command: node /absolute/path/to/Adobe_Premiere_Pro_MCP/dist/index.js
env: PREMIERE_TEMP_DIR=/tmp/premiere-mcp-bridge
```
For Codex, prefer:
```
```bash
codex mcp add premiere_pro --env PREMIERE_TEMP_DIR=/tmp/premiere-mcp-bridge -- node /absolute/path/to/Adobe_Premiere_Pro_MCP/dist/index.js
```

## Premiere Bridge Startup

After installing:

1. Restart the MCP client if it reads config only at startup.
2. Restart Premiere Pro.
3. Open `Window > Extensions > MCP Bridge (CEP)`.
4. Set `Temp Directory` to `/tmp/premiere-mcp-bridge`.
5. Click `Save Configuration`.
6. Click `Start Bridge`.
7. Confirm the bridge panel says Premiere is ready before running editing tools.

If Premiere is not running, you can install/build/register the MCP, but tell the user live tool verification requires Premiere and the CEP bridge panel.

## Verification

Run local checks:

```bash
npm run setup:doctor
```
```
If Premiere is running and the bridge is started, verify with safe read-only calls:

- `get_project_info`
- `list_sequences`
- `list_project_items`

For deeper validation in a disposable project, create a test sequence with `create_sequence_from_clips` or `create_sequence` plus a real `.sqpreset` path, then call `list_sequences` and confirm it exists. Do not call blank sequence creation without a preset because newer Premiere versions can open a native dialog that blocks CEP.
```

## Editing Strategy

- Start by understanding the project: project info, active sequence, existing media, tracks, markers, and selected sequence.
- Build a plan in concrete Premiere operations before changing anything.
- For rough cuts, import media first, then use `create_sequence_from_clips` so Premiere derives settings without a native dialog. Use `create_sequence` only with a real `.sqpreset`; use `duplicate_sequence` with `clearContents=true` when an existing sequence defines the intended settings.
- For product or brand spots, prefer `assemble_product_spot` or `build_brand_spot_from_mogrt_and_assets` when the user's request fits those workflows.
- For black-and-white looks, use `apply_effect` with `Black & White` rather than generic saturation-only changes.
- For timeline cuts, prefer sequence-aware tools and include `sequenceId` when available.
- Export only after confirming output path, format/preset, and overwrite behavior.

## Troubleshooting

If commands time out or report bridge errors:

1. Confirm Premiere is open.
2. Confirm `Window > Extensions > MCP Bridge (CEP)` is open and bridge is started.
3. Confirm both sides use the same temp directory.
4. Run:

```bash
npm run setup:doctor
```
```
5. Ask the user to click `Run Diagnostics` in the CEP panel.
6. Read `/tmp/premiere-mcp-bridge/premiere-mcp-diagnostics-latest.json` if it exists.
7. Remove stale command/response files only if they are clearly old and the bridge is stopped or idle.

Common fixes:

- `ENOENT` on temp directory: create `/tmp/premiere-mcp-bridge`, save config again, restart bridge.
- Tool succeeds in Premiere but reports failure: run `list_sequences` or the relevant list tool to confirm state before retrying.
- Empty or malformed temp directory config: set the field to the path only, not JSON or an env assignment.
```

## Source

Rewritten for AICUT from [`hetpatel-11/Adobe_Premiere_Pro_MCP`](https://github.com/hetpatel-11/Adobe_Premiere_Pro_MCP)
(MIT), skills/premiere-pro-mcp/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 3 skills; this is the one its entry stands for.
