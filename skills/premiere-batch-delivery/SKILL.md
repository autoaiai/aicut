---
name: premiere-batch-delivery
description: "Validate, export, and inspect multiple Adobe Premiere Pro deliverables with explicit pending and unverified states. Use for YouTube, social, web, mobile, archive, audio-only, versioned export, delivery QA, caption validation, direct export, AME submission, or repeatable batch output through the Premiere Pro MCP server. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "ayushozha/AdobePremiereProMCP"
---

# Premiere Batch Delivery

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


Define a delivery matrix first. Treat a queued job as pending, not as a successful export.

## Required server profile

Start or restart the MCP server with `MCP_TOOL_PROFILE=delivery` to load the focused export, caption-check, and media-probe surface used by this skill.

## Workflow

1. List every target with its unique sequence index and ID, aspect ratio, resolution, frame rate, codec/preset, audio spec, captions, destination, and filename. Resolve the index/ID pair from a fresh `premiere_get_sequence_list` response; do not select by name alone.
2. Check project integrity, delivery specs, captions, and frame accuracy. Before every active-sequence-only caption check or sidecar export, call `premiere_set_active_sequence` for that target index, require `verified: true` with the exact target ID, and re-read `premiere_get_sequence_list`; stop unless `activeSequenceID` still matches. Pass the same ID as `sequence_id` to `premiere_export_captions`. Treat host-only loudness or color summaries as advisory unless a decoded-media analyzer or visual review verifies them. Stop on unresolved errors.
3. Call `premiere_list_export_presets_disk` to find real `.epr` files in known Premiere/AME directories, or use an explicitly supplied preset path. Confirm destination directories and collision policy. Create versioned filenames; never overwrite unless explicitly authorized.
4. Prefer one-at-a-time `premiere_export_direct` calls with a confirmed preset; the call blocks, which bounds concurrency and makes failures attributable. Use `premiere_export_via_ame` only when asynchronous queueing is required, and record its returned job identifier.
5. The CEP bridge cannot poll individual AME jobs to a trustworthy terminal state. Keep AME jobs pending until an external filesystem check observes a stable, non-empty output; if that check is unavailable, leave the job unverified rather than guessing.
6. Call `premiere_probe_media` for every completed output and compare duration, dimensions, frame rate, and audio/video streams with the delivery matrix. Produce a concise delivery report.

## Guardrails

- Do not equate `queued` or `started` with `completed`.
- Do not use the legacy platform compound exporters or `premiere_batch_export_sequences` as proof of completion; their CEP responses do not provide per-output completion readback.
- Keep archive masters separate from distribution encodes.
- Validate sidecar caption paths and names alongside the video deliverable.
- Never reuse a prior active-sequence assumption across delivery-matrix rows; activate and verify each target immediately before its caption sidecar.
- Report successful, failed, skipped, and unverified outputs separately.

## Source

Rewritten for AICUT from [`ayushozha/AdobePremiereProMCP`](https://github.com/ayushozha/AdobePremiereProMCP)
(MIT), skills/premiere-batch-delivery/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 7 skills; this is the one its entry stands for.
