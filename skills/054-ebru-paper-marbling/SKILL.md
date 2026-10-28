---
name: 054-ebru-paper-marbling
description: 'Ebru Paper Marbling (土耳其水拓画) — the Generative & Type look from the archive of eighty-six. Turkish ebru on laid paper: a battal stone ground of floated pigments raked into gel-git chevrons and combed, then suminagashi ring-drops pulled by a stylus into tulips — built with the exact drop and tine transforms. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Ebru Paper Marbling, 土耳其水拓画, 生成艺术与字体.'
license: MIT
---

# Ebru Paper Marbling · 土耳其水拓画

> 中文 · 土耳其水拓画（生成艺术与字体）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that is itself a system: an algorithm, a grammar, a brand built from rules — the film shows the rule
running, and the type carries the argument.

适合本身就是一套系统的题材：算法、语法、由规则搭出来的品牌——片子展示规则在跑，而字承担论点。

## What it is made of

Turkish ebru on laid paper: a battal stone ground of floated pigments raked into gel-git chevrons and combed, then
suminagashi ring-drops pulled by a stylus into tulips — built with the exact drop and tine transforms.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `indigo` | `#1d2a5e` |
| `red` | `#a6252b` |
| `ochre` | `#d89c2c` |
| `teal` | `#21807c` |
| `cream` | `#efe3c4` |
| `ink` | `#1b1d27` |
| `slate` | `#3f5470` |
| `rose` | `#cf6f5e` |
| `sky` | `#7ea6c4` |
| `sand` | `#d9bf86` |
| `green` | `#4f6b3a` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 3% | `#979b97` |
| 3% | `#b6a886` |
| 2% | `#344764` |
| 2% | `#575757` |
| 2% | `#7d8687` |
| 2% | `#283758` |

The accents, the most saturated fields in it — `#b88e39`, `#1a274c`, `#c6b486`.

## Type

- `Libre Baskerville`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Colour drops rain onto the size and bloom, shoving earlier drops into veins; the rake drags the stone into gel-git
flames; ring after ring is dropped at one point; then the stylus pulls the rings into a tulip, and a wet sheen
glides over the finished bath.

## How it explains

The bath is the model: examples land as colour drops, a new picture is a red probe drop that the flow drags toward
its guess, the error is a stylus counter-stroke and the adjustment a comb pass that puts the pattern in order;
scenes change by lifting the printed sheet off the bath, labels are bookbinder paper labels and arrows are inked
stylus strokes.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- pattern fills, tiled from a drawn tile
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No radial glow.

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
