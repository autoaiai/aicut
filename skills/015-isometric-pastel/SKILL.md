---
name: 015-isometric-pastel
description: 'Isometric Pastel (等距粉彩) — the Dimensional look from the archive of eighty-six. Clean vector isometric illustration: true 30° projection, flat three-tone face shading, soft pastel palette with a single coral accent, tiny people for scale and long soft shadows on a floating tile. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Isometric Pastel, 等距粉彩, 立体空间.'
license: MIT
---

# Isometric Pastel · 等距粉彩

> 中文 · 等距粉彩（立体空间）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that should feel like an object on a table: clay, glass, foam, a model you could pick up — three
dimensions doing the explaining, not decorating it.

适合该像桌上一个东西的题材：陶土、玻璃、泡沫、能拿起来的模型——用立体本身把事讲清，而不是拿立体当装饰。

## What it is made of

Clean vector isometric illustration: true 30° projection, flat three-tone face shading, soft pastel palette with a
single coral accent, tiny people for scale and long soft shadows on a floating tile.

## Palette

The source names its palette in one list — `cols` in `reference/code.js`:

`#4a5488` · `#ff6b5b` · `#7fc8a8`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 21% | `#f1eeeb` |
| 18% | `#eae9f2` |
| 12% | `#e7e6eb` |
| 11% | `#d8d7e7` |
| 9% | `#f1eef3` |
| 5% | `#f3f1f4` |

## Type

- `Inter`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

The floating tile rises into frame, buildings, tanks and racks pop up one by one on springy overshoot, then LEDs
blink, fans spin, data cubes stream up and tiny workers stroll during a slow camera push.

## How it explains

One long isometric factory floor (data shelves → conveyor → glass-top neural machine → monitor → bar chart) that the
camera glides along beat to beat, with white label tags pinned to objects, curved dashed connectors, a counting
billboard and an accuracy tag riding the newest bar.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

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
