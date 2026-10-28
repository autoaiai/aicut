---
name: 042-wood-type-letterpress
description: 'Wood Type Letterpress (木活字凸版印刷) — the Print look from the archive of eighty-six. A two-ink wood-type broadside on cream stock: mixed display faces set block by block, each letter inked a little differently, wood grain and worn edges in the solids, ink squeezed to the rims and the whole forme bitten into the paper. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Wood Type Letterpress, 木活字凸版印刷, 印刷质感.'
license: MIT
---

# Wood Type Letterpress · 木活字凸版印刷

> 中文 · 木活字凸版印刷（印刷质感）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that wants the authority of ink on paper: a magazine spread, a manifesto, a specimen sheet, a report that
should look printed rather than rendered.

适合要有「纸上印出来」那份权威感的题材：杂志跨页、宣言、标本图录、应该像印出来而不是渲染出来的报告。

## What it is made of

A two-ink wood-type broadside on cream stock: mixed display faces set block by block, each letter inked a little
differently, wood grain and worn edges in the solids, ink squeezed to the rims and the whole forme bitten into the
paper.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 21% | `#e4d8b8` |
| 12% | `#b7a48b` |
| 7% | `#d5c8ab` |
| 7% | `#ded2b4` |
| 3% | `#d6a68a` |
| 3% | `#9c9684` |

The accents, the most saturated fields in it — `#3b3626`, `#c58367`, `#2b2519`.

## Type

- `Rubik Mono One`
- `Mono`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

The forme is proofed block by block — rules first, then each wood letter lands with a heavy kiss of the platen, red
and black alternating down the sheet — and the gears keep turning as the impression deepens.

## How it explains

Every beat is a new proof: the finished sheet is lifted off the press and a fresh one is laid down, then wood type,
stock cuts of a cat and a dog, and arrows set from short rule pieces lock up block by block with a kiss of the
platen; counters are re-set and re-stamped six times a second, and the wrong guess gets a red rubber-stamp WRONG.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No linear gradient fills.

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
