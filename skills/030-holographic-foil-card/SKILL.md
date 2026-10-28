---
name: 030-holographic-foil-card
description: 'Holographic Foil Card (全息箔卡片) — the Light & Imaging look from the archive of eighty-six. A holo-rare trading card and die-cut sticker: cracked-ice foil whose rainbow diffraction shifts with angle and surface normals, embossed robot, sunburst and lettering catching specular glints, printed ink sitting on top, glitter flecks and rainbow spill on the desk. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Holographic Foil Card, 全息箔卡片, 光影与成像.'
license: MIT
---

# Holographic Foil Card · 全息箔卡片

> 中文 · 全息箔卡片（光影与成像）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Something only a lens or a sensor could see: night, glass, a scan, a screen in a dark room, an image that is itself
the subject.

适合只有镜头或传感器才看得见的东西：夜色、玻璃、扫描、暗室里的屏幕，以及「影像本身」就是主题的片子。

## What it is made of

A holo-rare trading card and die-cut sticker: cracked-ice foil whose rainbow diffraction shifts with angle and
surface normals, embossed robot, sunburst and lettering catching specular glints, printed ink sitting on top,
glitter flecks and rainbow spill on the desk.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`rgba(255,255,255,0)` · `#141838` · `rgba(255,255,255,0.35)` · `rgba(12,14,34,0.95)`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 30% | `#121619` |
| 15% | `#0e1115` |
| 7% | `#0b0e11` |
| 4% | `#0a0c0d` |
| 4% | `#1a1c22` |
| 3% | `#282735` |

The accents, the most saturated fields in it — `#45376d`, `#485489`, `#4d3e74`.

## Type

- `Russo`
- `One`
- `Inter`
- `Russo One`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

The card is dealt in and settles onto the desk, the sticker slaps down and holo confetti scatters, then the card
slowly tilts toward the light so the rainbow band and specular glints sweep across the cracked-ice foil and embossed
lettering.

## How it explains

Told with holo trading cards on a desk: examples are dealt as CAT/DOG cards onto a pile, arrows and answers are
die-cut foil stickers slapped down with an overshoot, the model card’s stat bars are its weights, scene changes are
card flips to the stats side and back, and numbers are foil-embossed digits with a glint sweep for emphasis.

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
