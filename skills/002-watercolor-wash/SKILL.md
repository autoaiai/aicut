---
name: 002-watercolor-wash
description: 'Watercolor Wash (水彩晕染) — the Painterly look from the archive of eighty-six. Transparent pigment glazed in dozens of ragged low-opacity layers on cold-press paper: dark pooled edges, wet-in-wet bleeds, cauliflower blooms, granulation and untouched white paper for the lights, over a faint pencil sketch. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Watercolor Wash, 水彩晕染, 绘画质感.'
license: MIT
---

# Watercolor Wash · 水彩晕染

> 中文 · 水彩晕染（绘画质感）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that should feel made by a hand and a wet brush: pigment that pools in the paper, an edge that softens
where the water ran out, colour mixed on the sheet rather than picked from a wheel.

适合要有手和湿笔温度的题材：颜料在纸里积成边，水跑尽的地方变软，颜色是在纸上混出来的，不是在色轮上挑的。

## What it is made of

Transparent pigment glazed in dozens of ragged low-opacity layers on cold-press paper: dark pooled edges, wet-in-wet
bleeds, cauliflower blooms, granulation and untouched white paper for the lights, over a faint pencil sketch.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 11% | `#f3ecda` |
| 9% | `#e7d9b7` |
| 8% | `#f7f3e7` |
| 6% | `#ece3c7` |
| 4% | `#a8b8c7` |
| 4% | `#ece8d7` |

The accents, the most saturated fields in it — `#c4b96d`, `#c5bc74`, `#edca8d`.

## Type

- `Caveat`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Each wash floods in from its pencil outline, edges darken as the water dries and blooms creep outward; the title is
brushed in stroke by stroke.

## How it explains

One long sketchbook sheet the camera pans along; arrows are loaded round-brush strokes with pooled edges, labels and
the counter are brush-lettered and re-written as they change, and red alizarin circles do the emphasis.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
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
