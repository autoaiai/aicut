---
name: 048-transit-map
description: 'Transit Map (公共交通线路图) — the Data & Information look from the archive of eighty-six. A Beck-style metro diagram of an AI pipeline: fat coloured lines locked to 0/45/90 degrees with rounded bends, line-colour station ticks, black-ringed interchanges, a river and a boxed legend, all in clean sans lettering. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Transit Map, 公共交通线路图, 数据与信息.'
license: MIT
---

# Transit Map · 公共交通线路图

> 中文 · 公共交通线路图（数据与信息）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Numbers that have to be seen before they are read: a trend, a comparison, a model, a budget — the chart is the
scene, and its axes are the grammar.

适合要先看见再读懂的数字化内容：趋势、对比、模型、预算——图表就是场景，坐标轴就是语法。

## What it is made of

A Beck-style metro diagram of an AI pipeline: fat coloured lines locked to 0/45/90 degrees with rounded bends,
line-colour station ticks, black-ringed interchanges, a river and a boxed legend, all in clean sans lettering.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#f39419` · `#0a6cb8` · `#dc2a26` · `#00894a` · `#c9cce0`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 44% | `#f4f4eb` |
| 9% | `#eaebe6` |
| 5% | `#d7e7e8` |
| 4% | `#ecf2ea` |
| 2% | `#dbdad8` |
| 2% | `#c6c7c3` |

## Type

- `Libre Baskerville`
- `Inter`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Title and key settle, then each line draws out from its terminus in turn with stations ticking on and interchanges
popping as the line passes; once the network is complete, small trains glide along every route.

## How it explains

The lesson is a journey on the network: the camera rides along a Data Line into the Model interchange, round a
Training Loop line (Guess, Check, Adjust stations) and out along an Accuracy Line, while an amber dot-matrix
departure board counts examples and accuracy and finally flips to the takeaway.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- pattern fills, tiled from a drawn tile
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.

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
