---
name: easyedit
description: "Make a movie fan edit with easyedit - the film's best speech with animated word-by-word captions, then a beat-cut montage and a black-and-white title shot. Use when the user says \"/easyedit <movie>\", \"make an edit of <movie>\", \"fan edit\", \"movie edit\", or wants another easyedit video. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "blixvip/easyedit"
---

# easyedit

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


easyedit is installed at `{{ROOT}}`. Run it with `{{PY}}`.
Read `{{ROOT}}/AGENTS.md` before your first edit in a session. It has the whole workflow, and it's short.

## Make an edit

1. `cd {{ROOT}}` and run `{{PY}} -m easyedit.doctor`. Fix anything marked XX.
2. Build without rendering: `{{PY}} -m easyedit "<Movie>" --no-render`.
3. Check it before you spend ~10 minutes on the render, as described in AGENTS.md:
   - Run `{{PY}} -m easyedit.sheet "<Movie>"` and read `qa/report.txt` (text, cheap) - it covers the quote and
     every shot with flags, plus a ready-made draft at `qa/suggest-curate.json`. If `source: heuristic`, the AI
     writer was unavailable, so choose the quote yourself.
   - Look at `qa/candidates.jpg` and `qa/footage.jpg` only when the text leaves doubt. Exclude text cards,
     repeats and badly cropped shots. Pin a sequence that builds, and pick the hero shot in `curate.json`
     (start from the suggested draft).
4. Render: `{{PY}} -m easyedit "<Movie>"` (same flags as the build), then `{{PY}} -m easyedit.sheet "<Movie>" --final`
   and look at the stills.
5. Give the user the path `jobs/<slug>/<slug>.mp4`.

If the easyedit web UI is running (`http://127.0.0.1:4331`), you can also start jobs with
`POST /api/new {"movie": "..."}` and watch `GET /api/jobs`.

## Source

Rewritten for AICUT from [`blixvip/easyedit`](https://github.com/blixvip/easyedit)
(MIT), skills/easyedit/SKILL.md. The method is that skill's own; the way it runs is AICUT's.
