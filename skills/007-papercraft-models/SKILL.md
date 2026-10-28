---
name: 007-papercraft-models
description: 'Papercraft Models (纸艺模型) — the Popular Explainer Looks look from the archive of eighty-six. Printed-cardstock kit models: boxy low-poly robots, cats and charts assembled from flat printed faces with dotted fold lines, glue tabs and hairline seam gaps, Lambert-lit by a warm key light on a green self-healing cutting mat with craft tools at the edges. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Papercraft Models, 纸艺模型, 经典讲解.'
license: MIT
---

# Papercraft Models · 纸艺模型

> 中文 · 纸艺模型（经典讲解）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

The explainer that has to land on a phone: one idea on screen, a face or an object that carries it, and a camera
that moves so nobody has to read the frame twice.

给手机上看也能一眼看懂的讲解片：一屏一个意思，让一个角色或物件扛住叙事，镜头替观众把话说完。

## What it is made of

Printed-cardstock kit models: boxy low-poly robots, cats and charts assembled from flat printed faces with dotted
fold lines, glue tabs and hairline seam gaps, Lambert-lit by a warm key light on a green self-healing cutting mat
with craft tools at the edges.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `card` | `#f5f0e4` |
| `back` | `#e8e0cf` |
| `tab` | `#ece5d4` |
| `blue` | `#2f6db3` |
| `blueD` | `#1f4f8a` |
| `orange` | `#ee6b2d` |
| `yellow` | `#f4b630` |
| `red` | `#d83a2e` |
| `green` | `#2e9a57` |
| `ink` | `#22252d` |
| `ginger` | `#ea8a39` |
| `gingerD` | `#b9581a` |
| `tan` | `#d9aa74` |
| `brown` | `#7a4a2a` |
| `cream` | `#f7e6c8` |
| `pink` | `#e9798d` |
| `teal` | `#279c8e` |
| `steel` | `#c3c8cd` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 14% | `#2b553b` |
| 8% | `#366546` |
| 4% | `#9b6d43` |
| 4% | `#476548` |
| 4% | `#385a44` |
| 3% | `#845d37` |

The accents, the most saturated fields in it — `#94673d`, `#34583b`, `#7c5a35`.

## Type

- `Fredoka`
- `Space Grotesk`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Flat printed templates fold themselves up into 3D models on twos with a stop-motion jitter, pieces hop into place
and tags fold into tents, while the camera slides smoothly across the mat.

## How it explains

One long cutting mat: the camera slides from beat to beat while flat printed templates fold themselves up into the
robot, cards, bars and tent labels (on twos); arrows are creased paper strips that unroll along the mat, labels are
tent tags dropped onto what they name, counters are printed tent cards re-posed each step, and the wrong guess gets
a camera push-in and a red flag that pops and later spins to green.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
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
