---
name: 075-bitmap-paint-doodle
description: 'Bitmap Paint Doodle (位图画板涂鸦) — the Retro UI & Neon look from the archive of eighty-six. A proudly crude early-2000s bitmap painting: aliased pencil lines, real flood fills that leak through gaps, airbrush speckle, double-drawn rectangles and an opaque text-tool box, all inside a grey paint-program window. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Bitmap Paint Doodle, 位图画板涂鸦, 复古界面与霓虹.'
license: MIT
---

# Bitmap Paint Doodle · 位图画板涂鸦

> 中文 · 位图画板涂鸦（复古界面与霓虹）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that lives on a screen at night: software, a game, a club, a broadcast — phosphor, scanlines, chrome type
and a city that never turns the lights off.

适合夜里发光屏幕上的题材：软件、游戏、夜店、广播——荧光、扫描线、镀铬字，和一座不关灯的城市。

## What it is made of

A proudly crude early-2000s bitmap painting: aliased pencil lines, real flood fills that leak through gaps, airbrush
speckle, double-drawn rectangles and an opaque text-tool box, all inside a grey paint-program window.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `K` | `#000000` |
| `Y` | `#ffff00` |
| `GRN` | `#008000` |
| `LIME` | `#00ff00` |
| `RED` | `#ff0000` |
| `ORG` | `#ff8040` |
| `BRN` | `#804000` |
| `PNK` | `#ff80c0` |
| `MAG` | `#ff00ff` |
| `WHT` | `#ffffff` |
| `NAVY` | `#000080` |
| `BLU` | `#0000ff` |
| `DG` | `#808080` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 14% | `#00027d` |
| 13% | `#bababa` |
| 5% | `#686b99` |
| 5% | `#02f903` |
| 4% | `#85b985` |
| 3% | `#a8a8a7` |

The accents, the most saturated fields in it — `#02036d`, `#030683`, `#1b0057`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

Strokes appear as if dragged by a mouse in real time, the bucket floods regions in one instant pop (and leaks), the
airbrush speckles accumulate while held, and the text cursor blinks.

## How it explains

Someone paints the explanation live on one wide bitmap: the camera move is the canvas scrolling (scrollbar thumb
sliding), arrows are line/curve-tool strokes, examples pile up via Ctrl+V pastes, numbers are retyped in a text box,
and emphasis is a fat red brush X and an ellipse-tool circle.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- clipped regions to keep a mark inside its shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No radial glow.
- No canvas filter — no blur, no bloom.
- No freehand curve — every edge is a straight rule, an arc or an exact rectangle.

## Working in AICUT

AICUT's film is `film.html`: it cuts pages, footage, pictures and sound onto tracks. A page is a web page that sets
`window.film = { frame(t) }` and draws that moment — no framework, no build step. Everything is a function of `t`:
no `Math.random()`, no `Date.now()`, no CSS animation, no state carried between frames.

`reference/code.js` is `draw(ctx, W, H, t)` written against the archive's own harness. Port the technique into a
page's `frame(t)` — the geometry, the palette, the easing, the order of the layers — and leave the harness behind.

```sh
npx -y @autoaiai/aicut@latest            # the format and the commands, always current
npx -y @autoaiai/aicut@latest open .     # this folder as a film, and the Studio address
npx -y @autoaiai/aicut@latest look       # contact sheet, sound, determinism
npx -y @autoaiai/aicut@latest look 4.5   # one frame, full size — read the PNG
npx -y @autoaiai/aicut@latest render     # the MP4, beside film.html
```

Match the cover before adding motion: build the still, look at it, put it beside `poster.webp`, and fix what is
different — the palette, the weight of the lines, where the light falls, how much of the frame is left empty.

## Files

- `poster.webp` — the style's own cover, 800 × 450. The target.
- `reference/code.js` — the canvas source that drew it, a pure function of time.
- `reference/style.json` — the catalogue's description, motion notes and explainer notes, verbatim.
- `skill.json` — the same style as one row (number, both names, family, palette). For a page, not for the agent.

## Source

The eighty-six looks are Futurepedia's AI Style Atlas (https://www.futurepedia.io/resources/ai-style-atlas/view);
this skill is one of them, kept as reference and rewritten to AICUT's shape. What this folder adds is the writing in
this file. The full notice travels in `skills/aicut-motion/THIRD_PARTY_NOTICES.md`.
