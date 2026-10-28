---
name: 084-flow-field
description: 'Flow Field (流场) — the Data & Information look from the archive of eighty-six. Thousands of hairline streamlines traced through a curl-noise field that parts around an unseen core; additive colour from a refined gradient builds luminous braids on dark paper. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Flow Field, 流场, 数据与信息.'
license: MIT
---

# Flow Field · 流场

> 中文 · 流场（数据与信息）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Numbers that have to be seen before they are read: a trend, a comparison, a model, a budget — the chart is the
scene, and its axes are the grammar.

适合要先看见再读懂的数字化内容：趋势、对比、模型、预算——图表就是场景，坐标轴就是语法。

## What it is made of

Thousands of hairline streamlines traced through a curl-noise field that parts around an unseen core; additive
colour from a refined gradient builds luminous braids on dark paper.

## Palette

The source names its palette in one list — `PAL` in `reference/code.js`:

`#123a4a` · `#1c6f78` · `#5fb3a6` · `#cde3cf` · `#f3e6c8` · `#edbb73` · `#de7a52` · `#a8384e` · `#5a1e44`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 10% | `#251929` |
| 9% | `#171826` |
| 6% | `#162835` |
| 5% | `#0e1b25` |
| 5% | `#382636` |
| 4% | `#14242d` |

The accents, the most saturated fields in it — `#291932`, `#0b141a`, `#351e3b`.

## Type

- `Space Mono`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

The dark core appears first, then particles are released in a wave from left to right and trace their streamlines
outward until the braids glow; in the hold the field slowly breathes while bright sparks ride the currents.

## How it explains

The model is the dark core of a flow field: labelled particles spiral into it as data, the camera pushes in as a new
particle is carried out the wrong exit ("dog?"), a coral counter-current carries the error back, the circulation
re-combs the whole field so the next one exits "cat", and training is shown as the turbulent field combing into
smooth order, all captioned in hairline Space Mono.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
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
