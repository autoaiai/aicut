---
name: 072-vector-arcade-1980
description: 'Vector Arcade 1980 (1980年代矢量街机) — the Retro Digital look from the archive of eighty-six. An XY vector monitor cabinet game: hair-thin phosphor beams on pure black, additive bloom, brighter dwell dots where the beam pauses at vertices, dimmer long strokes, wireframe 3D in perspective and a hand-built stroke font. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Vector Arcade 1980, 1980年代矢量街机, 复古数字.'
license: MIT
---

# Vector Arcade 1980 · 1980年代矢量街机

> 中文 · 1980年代矢量街机（复古数字）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject with a machine in it: a computer, a network, a game, a company that began in a garage — rendered as the
hardware of the period imagined it, limits and all.

适合机器在场的题材：计算机、网络、游戏、车库里起家的公司——按那个年代的硬件所想象的样子来画，包括它当年的限制。

## What it is made of

An XY vector monitor cabinet game: hair-thin phosphor beams on pure black, additive bloom, brighter dwell dots where
the beam pauses at vertices, dimmer long strokes, wireframe 3D in perspective and a hand-built stroke font.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 37% | `#020804` |
| 14% | `#07130b` |
| 5% | `#152919` |
| 3% | `#18351c` |
| 3% | `#1d3822` |
| 3% | `#25462b` |

The accents, the most saturated fields in it — `#0d1b11`, `#28512e`, `#281a14`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

Attract-mode build: the beam traces the horizon and mountains, wireframes draw on edge by edge, the AI core flies in
from the distance spinning, the saucer slides in with phosphor trails, then the radar, score and title are stroked
in letter by letter while everything flickers with beam load.

## How it explains

Told as a vector-cabinet HUD: the question shrinks into a red corner readout, labelled wireframe cards stream into a
spinning icosahedron core, a hyperspace-style zoom carries us into a lock-on loop (GUESS > CHECK > ADJUST with
brackets, red error beam, turning weight dials), and the stroked accuracy graph climbs to a flashing 97%.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- rounded rectangles drawn from arcs
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
