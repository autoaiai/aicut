---
name: 080-silkscreen-grid
description: 'Silkscreen Grid (丝网印刷网格) — the Print look from the archive of eighty-six. A Warhol-style repeat portrait: the same robot pulled eight times through a grainy black photo screen over loose, hand-cut flat colour plates in garish combinations, each pull misregistered and streaked by the squeegee. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Silkscreen Grid, 丝网印刷网格, 印刷质感.'
license: MIT
---

# Silkscreen Grid · 丝网印刷网格

> 中文 · 丝网印刷网格（印刷质感）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that wants the authority of ink on paper: a magazine spread, a manifesto, a specimen sheet, a report that
should look printed rather than rendered.

适合要有「纸上印出来」那份权威感的题材：杂志跨页、宣言、标本图录、应该像印出来而不是渲染出来的报告。

## What it is made of

A Warhol-style repeat portrait: the same robot pulled eight times through a grainy black photo screen over loose,
hand-cut flat colour plates in garish combinations, each pull misregistered and streaked by the squeegee.

## Palette

The source names its palette in one list — `PAL` in `reference/code.js`:

`#f2559c` · `#ffe14a` · `#22c3c8` · `#e8242b` · `#2b4fc3` · `#ff8a00` · `#ff7a1f` · `#9fdcff` · `#ffe600` · `#e5007e` · `#5b2a86` · `#2ad46b` · `#2fbf63` · `#ffa3cf` · `#1d3fbb` · `#ff5a1f` · `#fff04a` · `#1e2b9c` · `#ff6fae` · `#c8f53a` · `#ffcf00` · `#ffe100` · `#ff6f3c` · `#b8007a` · `#9b4ee0` · `#c9f53c` · `#ff4fa3` · `#ffffff` · `#fff1b0` · `#ff9ec8` · `#00b2c8` · `#ffb000`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 1% | `#4dc3c8` |
| 1% | `#f18ab3` |
| 1% | `#ec83a7` |
| 1% | `#f59c56` |
| 1% | `#e99952` |
| 1% | `#67ca86` |

The accents, the most saturated fields in it — `#6e2800`, `#c1a900`, `#514200`.

## Type

- `Anton`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Panels are printed one after another across the grid — background flood, then the loose colour shapes slap down,
then the squeegee drags the black photo screen across with a wet ink bead — before a slow push-in on the finished
wall.

## How it explains

Each beat is its own silkscreened panel, pulled in order (flood, loose colour shapes, squeegee drags the black
screen) while the camera travels the grid; black arrows are painted across the gutters between panels, counters are
stencil type, emphasis is a colourway flicker, and the final pull-back reveals all six beats as one Warhol grid.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No canvas filter — no blur, no bloom.

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
