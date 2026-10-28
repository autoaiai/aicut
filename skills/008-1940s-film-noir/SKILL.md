---
name: 008-1940s-film-noir
description: '1940s Film Noir (1940年代黑色电影) — the Light & Imaging look from the archive of eighty-six. A high-contrast black-and-white still from a forties detective picture: venetian-blind light slicing across a fedora silhouette, a glowing terminal as the only other light, cigarette smoke hanging in the beams, with heavy nitrate grain, gate weave, dust and scratches. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: 1940s Film Noir, 1940年代黑色电影, 光影与成像.'
license: MIT
---

# 1940s Film Noir · 1940年代黑色电影

> 中文 · 1940年代黑色电影（光影与成像）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Something only a lens or a sensor could see: night, glass, a scan, a screen in a dark room, an image that is itself
the subject.

适合只有镜头或传感器才看得见的东西：夜色、玻璃、扫描、暗室里的屏幕，以及「影像本身」就是主题的片子。

## What it is made of

A high-contrast black-and-white still from a forties detective picture: venetian-blind light slicing across a fedora
silhouette, a glowing terminal as the only other light, cigarette smoke hanging in the beams, with heavy nitrate
grain, gate weave, dust and scratches.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `color` | `#000` |
| `bg` | `#fff` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 29% | `#040503` |
| 9% | `#494a47` |
| 8% | `#161715` |
| 7% | `#272826` |
| 7% | `#585955` |
| 6% | `#383936` |

## Type

- `Oswald`
- `Courier Prime`
- `UnifrakturMaguntia`
- `Anton`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Blinds sway and smoke curls in a dark office; the terminal warms up with a CRT flash, its glow rim-lights the
detective, a prompt types out, and the title card dissolves in word by word over projector flicker, weave and dirt.

## How it explains

Told as a 1940s newsreel / B-picture montage: spinning-newspaper headlines, iris, wipe and clock-wipe transitions,
mugshot booking placards as labels, white newsreel arrows and lettering, a rolling mechanical odometer for numbers
and a rubber stamp slammed down as the emphasis, all under heavy grain and gate weave.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
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
