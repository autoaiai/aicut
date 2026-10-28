---
name: 043-light-painting
description: 'Light Painting (光绘) — the Light & Imaging look from the archive of eighty-six. A 30-second exposure in a dark field: a neural network drawn in the air with an LED wand and a twisting rainbow light-tube ribbon, hand-jittered trails with hot cores and coloured falloff, a ghost of the painter, pinpoint stars, horizon bokeh and colour spill on the grass. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Light Painting, 光绘, 光影与成像.'
license: MIT
---

# Light Painting · 光绘

> 中文 · 光绘（光影与成像）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Something only a lens or a sensor could see: night, glass, a scan, a screen in a dark room, an image that is itself
the subject.

适合只有镜头或传感器才看得见的东西：夜色、玻璃、扫描、暗室里的屏幕，以及「影像本身」就是主题的片子。

## What it is made of

A 30-second exposure in a dark field: a neural network drawn in the air with an LED wand and a twisting rainbow
light-tube ribbon, hand-jittered trails with hot cores and coloured falloff, a ghost of the painter, pinpoint stars,
horizon bokeh and colour spill on the grass.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 26% | `#030509` |
| 13% | `#080914` |
| 8% | `#161319` |
| 4% | `#281725` |
| 3% | `#120e16` |
| 3% | `#181823` |

The accents, the most saturated fields in it — `#151437`, `#472a5b`, `#362844`.

## Type

- `Caveat`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Shot as a live-composite exposure: the wand traces node after node and fans out each layer of connections, the RGB
tube sweeps the twisting ribbon around it, the word is written last, while the ghost painter slowly accumulates and
star trails lengthen.

## How it explains

Each beat is a fresh live long exposure: the wand traces doodles, arrows and handwriting with its glowing tip, orbs
leave arcing light trails into the network, numbers come from an LED pixel-stick, the emphasis is a traced ring with
a spark burst, and between beats the camera whip-pans so every trail smears into streaks.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
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
