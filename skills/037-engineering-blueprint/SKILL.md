---
name: 037-engineering-blueprint
description: 'Engineering Blueprint (工程蓝图) — the Hand-Drawn look from the archive of eighty-six. A drafted cyanotype: white line-work bleeding slightly into mottled, sun-faded Prussian-blue paper, orthographic front/side views with a hatched section, dimension chains, a zoned border, title block and worn fold creases. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Engineering Blueprint, 工程蓝图, 手绘.'
license: MIT
---

# Engineering Blueprint · 工程蓝图

> 中文 · 工程蓝图（手绘）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Line as the argument: a pen that thinks out loud, a diagram drawn while it is explained, mistakes that stay on the
page because a hand made them.

适合拿线当论述的题材：一支会边想边画的笔，边讲边画出的图解，手留下的错也不擦掉。

## What it is made of

A drafted cyanotype: white line-work bleeding slightly into mottled, sun-faded Prussian-blue paper, orthographic
front/side views with a hatched section, dimension chains, a zoned border, title block and worn fold creases.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#eef4ff` · `rgba(200,220,255,0.10)` · `rgba(200,220,255,0.045)`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 19% | `#193a67` |
| 17% | `#254879` |
| 10% | `#1c4378` |
| 9% | `#18345a` |
| 8% | `#345789` |
| 7% | `#213e64` |

The accents, the most saturated fields in it — `#1a3e72`, `#244c84`, `#2c5286`.

## Type

- `IBM Plex Mono`
- `Plex`
- `Space Mono`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Construction and projection lines sweep across first, object lines ink in view by view, then dimensions and
lettering pop in as the camera slowly pans along the sheet.

## How it explains

One large drafting sheet: a plotter head inks crisp white line-work and stencilled lettering while the camera tracks
across and then down the sheet to the chart detail; the model is a gear-and-knob mechanism whose dials turn, arrows
are drafted leaders, and numbers tick over in mono lettering inside dimension-style callouts.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- dashed rules for measured distances and annotations
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- pattern fills, tiled from a drawn tile
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
