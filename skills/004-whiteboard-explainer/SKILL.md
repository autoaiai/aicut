---
name: 004-whiteboard-explainer
description: 'Whiteboard Explainer (白板讲解) — the Hand-Drawn look from the archive of eighty-six. Dry-erase marker on a glossy whiteboard: streaky chisel-tip strokes with pooled edges, wobbly double-traced boxes and arrows, a ghost of the last erased lesson, and a soft ceiling-light sheen. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Whiteboard Explainer, 白板讲解, 手绘.'
license: MIT
---

# Whiteboard Explainer · 白板讲解

> 中文 · 白板讲解（手绘）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Line as the argument: a pen that thinks out loud, a diagram drawn while it is explained, mistakes that stay on the
page because a hand made them.

适合拿线当论述的题材：一支会边想边画的笔，边讲边画出的图解，手留下的错也不擦掉。

## What it is made of

Dry-erase marker on a glossy whiteboard: streaky chisel-tip strokes with pooled edges, wobbly double-traced boxes
and arrows, a ghost of the last erased lesson, and a soft ceiling-light sheen.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `ink` | `#1d1f26` |
| `acc1` | `#1f4fc2` |
| `acc2` | `#d4262f` |
| `acc3` | `#16884a` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 20% | `#d5dad8` |
| 20% | `#e5eae8` |
| 10% | `#dce4e6` |
| 7% | `#b4b9bb` |
| 5% | `#bbc5c3` |
| 4% | `#cbd5d3` |

## Type

- `Permanent Marker`
- `Kalam`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Each stroke draws on in sequence like a hand drawing it live, with labels written letter by letter and the sheen
drifting slightly as the camera breathes.

## How it explains

A marker in hand draws the diagram while the camera follows it across one big board; the felt eraser wipes the loop
away (leaving ghost residue) to make room for the accuracy chart, and numbers are re-scrawled in marker.

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
