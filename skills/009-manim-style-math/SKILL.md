---
name: 009-manim-style-math
description: 'Manim-Style Math (Manim 数学动画) — the Popular Explainer Looks look from the archive of eighty-six. The math-explainer look of Manim, the open-source library behind 3Blue1Brown: pure black, crisp anti-aliased vector lines, a restrained palette of Manim blue, teal, yellow, red and green, LaTeX-like serif math with italic variables, axes with tick marks, curves, arrows, braces and surrounding rectangles. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Manim-Style Math, Manim 数学动画, 经典讲解.'
license: MIT
---

# Manim-Style Math · Manim 数学动画

> 中文 · Manim 数学动画（经典讲解）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

The explainer that has to land on a phone: one idea on screen, a face or an object that carries it, and a camera
that moves so nobody has to read the frame twice.

给手机上看也能一眼看懂的讲解片：一屏一个意思，让一个角色或物件扛住叙事，镜头替观众把话说完。

## What it is made of

The math-explainer look of Manim, the open-source library behind 3Blue1Brown: pure black, crisp anti-aliased vector
lines, a restrained palette of Manim blue, teal, yellow, red and green, LaTeX-like serif math with italic variables,
axes with tick marks, curves, arrows, braces and surrounding rectangles.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `bg` | `#000000` |
| `blue` | `#58c4dd` |
| `blueE` | `#236b8e` |
| `teal` | `#5cd0b3` |
| `yellow` | `#ffff00` |
| `gold` | `#f7d96f` |
| `red` | `#fc6255` |
| `green` | `#83c167` |
| `white` | `#ffffff` |
| `grey` | `#888888` |
| `greyL` | `#bbbbbb` |
| `greyD` | `#444444` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 85% | `#020202` |
| 6% | `#161918` |
| 1% | `#3b3b3b` |
| 1% | `#2b2b2b` |
| 1% | `#0c1313` |
| 1% | `#272905` |

The accents, the most saturated fields in it — `#15190c`, `#23281a`, `#0d110b`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

Manim's own vocabulary on a smooth sigmoid ease: equations Write on (glyph outlines trace, then fill), axes and
curves Create, a dot slides down the graph in gradient-descent hops, then a SurroundingRectangle draws round the key
term and it Indicates with a yellow pulse.

## How it explains

One MovingCameraScene: the question Writes on and Transforms into the header, a neural net Creates (edges blue/red
by weight sign), pixel pictures fly into the input neurons as a counter climbs, a forward pass runs as
ShowPassingFlash, the wrong "dog?" gets a red SurroundingRectangle, the camera pans to a loss curve where a dot
descends while edges re-colour, then the axes relabel to accuracy, the curve climbs and the number Transforms into a
97% that Indicates.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- dashed rules for measured distances and annotations
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No linear gradient fills.
- No radial glow.
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
