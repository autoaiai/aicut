---
name: 066-hidden-line-wireframe
description: 'Hidden-Line Wireframe (隐藏线框图) — the Dimensional look from the archive of eighty-six. Vector-display 3D: a perspective wire-mesh landscape with true hidden-line removal (back-to-front quads filled with the night before stroking), a wireframe moon, phosphor-cyan lines with bloom on deep navy, and HUD coordinate labels. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Hidden-Line Wireframe, 隐藏线框图, 立体空间.'
license: MIT
---

# Hidden-Line Wireframe · 隐藏线框图

> 中文 · 隐藏线框图（立体空间）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that should feel like an object on a table: clay, glass, foam, a model you could pick up — three
dimensions doing the explaining, not decorating it.

适合该像桌上一个东西的题材：陶土、玻璃、泡沫、能拿起来的模型——用立体本身把事讲清，而不是拿立体当装饰。

## What it is made of

Vector-display 3D: a perspective wire-mesh landscape with true hidden-line removal (back-to-front quads filled with
the night before stroking), a wireframe moon, phosphor-cyan lines with bloom on deep navy, and HUD coordinate
labels.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#e8fbff` · `rgba(127,234,255,0.8)` · `#ffd36b` · `#7feaff` · `rgba(127,234,255,0.7)`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 26% | `#091839` |
| 8% | `#091b47` |
| 8% | `#0b2246` |
| 7% | `#030b26` |
| 7% | `#07132c` |
| 6% | `#0c2656` |

The accents, the most saturated fields in it — `#122b66`, `#01071d`, `#122756`.

## Type

- `IBM Plex Mono`
- `Plex`
- `Space Mono`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

HUD brackets snap on, the wireframe moon traces itself, then the hidden-line mesh is scanned in row by row from the
camera to the horizon behind a bright scan front; markers lock on and labels type out while the camera glides
forward and the scan keeps sweeping.

## How it explains

Learning is shown as descent over the hidden-line “loss landscape”: the camera flies the mesh from a data-feed HUD
streaming into the wireframe-sphere model, down to an amber “model weights” marker whose error becomes a dashed
downhill vector, then follows it into the glowing basin; labels are bracketed HUD tags that type on, numbers are big
Space Mono readouts.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
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
