---
name: 056-soft-3d-clay
description: 'Soft 3D Clay (柔软3D黏土) — the Dimensional look from the archive of eighty-six. Dribbble-style “puffy” 3D icons: pastel matte-clay objects with chunky rounded extrusions, soft core shadows, bright bounce-light rims, glossy specular blobs and blurry contact shadows on a seamless pastel sweep. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Soft 3D Clay, 柔软3D黏土, 立体空间.'
license: MIT
---

# Soft 3D Clay · 柔软3D黏土

> 中文 · 柔软3D黏土（立体空间）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that should feel like an object on a table: clay, glass, foam, a model you could pick up — three
dimensions doing the explaining, not decorating it.

适合该像桌上一个东西的题材：陶土、玻璃、泡沫、能拿起来的模型——用立体本身把事讲清，而不是拿立体当装饰。

## What it is made of

Dribbble-style “puffy” 3D icons: pastel matte-clay objects with chunky rounded extrusions, soft core shadows, bright
bounce-light rims, glossy specular blobs and blurry contact shadows on a seamless pastel sweep.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `face` | `#e6e0ff` · `#b9abff` · `#9a88f5` |
| `side` | `#8f7cf0` · `#5d48c2` |
| `face` | `#fff0e6` · `#ffcfb3` · `#ffad8a` |
| `side` | `#f79d7a` · `#cf6b4f` |
| `face` | `#e6fff6` · `#b3eedb` · `#86d7bf` |
| `side` | `#7fcbb3` · `#4f9f8a` |
| `face` | `#ffffff` · `#f7f3ff` · `#e2d9fb` |
| `side` | `#d4c8f5` · `#9a87de` |
| `face` | `#ffe3ea` · `#ffb1c2` · `#ff8fa8` |
| `side` | `#f57f9b` · `#cc4f72` |
| `face` | `#e3f1ff` · `#b4d6ff` · `#8fbaf5` |
| `side` | `#86b0ee` · `#5a7fc7` |
| `face` | `#ffd9d2` · `#ff8f7e` · `#f2675a` |
| `side` | `#e85d4f` · `#b23a33` |
| `face` | `#fffbe0` · `#ffe58f` · `#f7c45e` |
| `side` | `#f2b955` · `#d98f3a` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 25% | `#ebe5f9` |
| 18% | `#f2ecfb` |
| 11% | `#f7f2fb` |
| 8% | `#e4ddf5` |
| 3% | `#f3ebe9` |
| 2% | `#dad6f6` |

The accents, the most saturated fields in it — `#897aea`, `#eccd87`, `#a999f8`.

## Type

- `Fredoka`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Clay icons drop in one by one on springy squash-and-stretch with their contact shadows growing beneath them, the
bulb flickers on, then the cursor flies in and taps the bubble while everything bobs at different depths.

## How it explains

The camera dollies across one wide pastel set with parallax depth-of-field (cards → clay chip with weight sliders →
answer bubble → clay bar chart → pull back), arrows are puffy clay tubes with blobby heads, labels are squishy pills
that spring onto objects, and numbers count inside butter-yellow clay badges.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- canvas filters for blur and colour shifts
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
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
