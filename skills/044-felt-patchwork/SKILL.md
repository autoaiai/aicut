---
name: 044-felt-patchwork
description: 'Felt & Patchwork (毛毡与拼布) — the Paper & Craft look from the archive of eighty-six. A cosy patchwork quilt of cotton prints with puffy quilted squares, topped with fuzzy felt appliqué edged in blanket stitch, button "nodes" sewn on and joined by running-stitch thread, plus an embroidered label. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Felt & Patchwork, 毛毡与拼布, 纸艺与手工.'
license: MIT
---

# Felt & Patchwork · 毛毡与拼布

> 中文 · 毛毡与拼布（纸艺与手工）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A world built out of card, fold and cut: real thickness, visible seams, light that casts a shadow because the thing
casting it is a sheet of something.

适合用卡纸、折叠、剪裁搭出来的世界：有厚度、有接缝，光落下就有影子，因为挡光的东西真的是一片材料。

## What it is made of

A cosy patchwork quilt of cotton prints with puffy quilted squares, topped with fuzzy felt appliqué edged in blanket
stitch, button "nodes" sewn on and joined by running-stitch thread, plus an embroidered label.

## Palette

The source names its palette in one list — `PRINTS` in `reference/code.js`:

`#c9634d` · `#f3eadb` · `#e2b24a` · `#f7efdc` · `#8fae84` · `#eee4cf` · `#d98f86` · `#f6d9cf` · `#fff5e6` · `#5f7ea3` · `#8aa3c2` · `#e9dcc2` · `#d8c8aa` · `#6f9a8a` · `#f1ecdf` · `#b9563f` · `#f1d4bf`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 4% | `#886956` |
| 4% | `#897967` |
| 4% | `#877559` |
| 4% | `#998c76` |
| 4% | `#a78776` |
| 3% | `#787464` |

The accents, the most saturated fields in it — `#967658`, `#865944`, `#926b57`.

## Type

- `Fredoka`
- `PXpx`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Thread draws itself stitch by stitch between the buttons, felt pieces drop on with a soft squash, and the quilt
breathes with a slow puff of the padding.

## How it explains

The camera pans along one long patchwork quilt; felt pieces drop on with a lifted shadow and soft squash, arrows and
emphasis rings are thread sewn on stitch by stitch, labels are woven tags stitched onto what they name, the counter
is cut felt digits swapped as it climbs, and the model's weights are buttons whose thread-X turns when it adjusts.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
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
