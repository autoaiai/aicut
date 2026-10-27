---
name: lemo-opuscar
description: "Direct and produce a short film made entirely in code, in one of the styles of the Lemo-Opuscar library (e.g. Impasto Oil Painting 油画厚涂, Watercolor Brush 水彩笔刷, Ukiyo-e 浮世绘, Satellite Briefing 卫星简报, Exploded Teardown 产品拆解). Use when the user asks for a video, film, short, promo, explainer or animation (视频、短片、动画、宣传片) in a named style, including explainers built from real material such as satellite imagery, laser scans, CAD files or archive scans (数据解说、科普、产品拆解), and new films cut from real archive footage and documents (剪辑与纪实, e.g. 用档案影像剪一支新闻片); when they want a film about their own topic and haven't chosen a style (help them choose); when they want to change a style into their own, make their own style from a blank page, or use a style they saved (改风格、从空白开始、我的风格); when they start the skill without saying what they want; or when they ask which film styles there are. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "lemomo-ai/lemo-opuscar"
---

# Lemo-Opuscar

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


The styles, guides and tools ship with this plugin, in `library/` next to this file. Nothing is downloaded to tell you what to do.

1. **Get the library ready.** Run `sh "<skill base directory>/scripts/setup.sh"`. It copies the bundled library to its working folder (default `~/.lemo-opuscar`, so installed packages survive plugin updates) and prints `LIB=<path>` on its last line.
2. **Install the core tools early.** Start `sh "<skill base directory>/scripts/setup.sh" deps` right away, in the background if you can: it takes a few minutes the first time. Add `deps voice` or `deps music` later, only if the film needs them (`$LIB/TECHNIQUE.md` §1). Report missing system tools (Node, ffmpeg, Python) in your one round of questions; don't install system software yourself. Packages a style needs (its `STYLE.md` lists them) you install yourself, into the project folder.
3. **Follow the library.** Read `$LIB/AGENTS.md` and do what it says, starting with **Start** (the user's own styles in `~/lemo-my-styles/`; when they started the skill without writing anything, the language question first, then the ways in): finding the style or making their own, the one round of questions, the treatment, production and delivery.

What changes in skill mode:

| | |
|---|---|
| Project folder | `<name>/` in the folder the user started from (lowercase letters, digits, hyphens; avoid `#` and `?` in the path). Wherever the guides say `films/<name>/`, read this folder |
| Running tools | from `$LIB`, with the project's absolute path: `cd "$LIB" && node core/render/still.mjs "<project>" 1.5 3`. `sh tools/setup.sh` and `sh tools/fetch.sh` also run from `$LIB` |
| Library files in pages | absolute URLs: `/core/lib.js`, `/node_modules/three/…` (the project is served at `/@film/`) |
| Library files in scripts and `build.sh` | `$LIB/…`, with `LIB=<path>` at the top of `build.sh`; never `../..` |
| Demo films | not in this edition: no `demo/` source and no `poster.jpg`. Each style's `DEMO.md` (how its demo was made) is there; read it only after your `TREATMENT.md` is written, as the guides say. An Edit & Documentary style needs its material before the treatment: find and log it yourself, as its `STYLE.md` describes (the `demo/tools/` it names aren't in this edition). The films are on the gallery, https://lemomo-ai.github.io/lemo-opuscar/, if the user wants to watch one |
| Chinese narration | Kokoro's Chinese voices (offline) by default. edge-tts (`core/tts/tts_zh.py`) sounds better but sends the narration text to Microsoft's speech service: offer it in your one round of questions and use it only if the user agrees |
| Big downloads | only what the film needs, from the sources `$LIB/TECHNIQUE.md` §1 lists (npm, PyPI, Playwright's browser, this library's GitHub Releases, Hugging Face for the speech check). Name them in your one round of questions the first time |

Deliver what `$LIB/DIRECTOR.md` §11 lists, in the project folder, and tell the user where it is.

## Source

Rewritten for AICUT from [`lemomo-ai/lemo-opuscar`](https://github.com/lemomo-ai/lemo-opuscar)
(MIT), tools/directory/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 2 skills; this is the one its entry stands for.
