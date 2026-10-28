---
name: 050-napkin-sketch
description: 'Napkin Sketch (餐巾纸草图) — the Hand-Drawn look from the archive of eighty-six. A back-of-the-napkin startup pitch in black Sharpie: ink feathering into soft tissue fibers, an embossed napkin border, quarter-fold creases and crumples, a coffee ring, all lying on a warm wooden cafe table. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Napkin Sketch, 餐巾纸草图, 手绘.'
license: MIT
---

# Napkin Sketch · 餐巾纸草图

> 中文 · 餐巾纸草图（手绘）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Line as the argument: a pen that thinks out loud, a diagram drawn while it is explained, mistakes that stay on the
page because a hand made them.

适合拿线当论述的题材：一支会边想边画的笔，边讲边画出的图解，手留下的错也不擦掉。

## What it is made of

A back-of-the-napkin startup pitch in black Sharpie: ink feathering into soft tissue fibers, an embossed napkin
border, quarter-fold creases and crumples, a coffee ring, all lying on a warm wooden cafe table.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`rgba(0,0,0,1)` · `rgba(255,255,255,0.35)` · `rgb(22,20,28)` · `#5a5a62` · `#2a2a30` · `#0c0c10`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 18% | `#6a4829` |
| 10% | `#744d2d` |
| 6% | `#d8d8d4` |
| 5% | `#c9c9c5` |
| 5% | `#54361c` |
| 4% | `#76502e` |

The accents, the most saturated fields in it — `#5b3c22`, `#755334`, `#482c15`.

## Type

- `Permanent Marker`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

The marker scrawls each box and arrow in quick confident strokes while ink slowly feathers outward; the napkin
breathes slightly as if just set down.

## How it explains

A cafe-table pitch: the camera starts tight on the scrawled question then pulls back to the napkin; when a napkin is
full a fresh one is slapped down on top of the pile (with a red Sharpie for the wrong guess and the 97%), arrows and
numbers are fast Sharpie scrawls that feather into the tissue.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
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
