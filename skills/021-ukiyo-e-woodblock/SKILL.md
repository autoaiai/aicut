---
name: 021-ukiyo-e-woodblock
description: 'Ukiyo-e Woodblock (浮世绘木版画) — the Art & Design Movements look from the archive of eighty-six. An Edo-period woodblock print in the manner of Hokusai: Prussian-blue bokashi gradients, a towering wave with claw-like foam whose spray breaks into data cubes, a cargo ship stacked with server racks in the trough, flat colour blocks with carved keyblock outlines, wood grain and washi fibre, a vertical-text cartouche and vermilion seal. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Ukiyo-e Woodblock, 浮世绘木版画, 艺术与设计流派.'
license: MIT
---

# Ukiyo-e Woodblock · 浮世绘木版画

> 中文 · 浮世绘木版画（艺术与设计流派）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that needs a period style as its argument: a design history, a cultural essay, a launch that borrows the
confidence of a movement rather than a trend.

适合把某个时期风格本身当论点的题材：设计史、文化评论、借一场流派（而不是一波潮流）的底气做的发布。

## What it is made of

An Edo-period woodblock print in the manner of Hokusai: Prussian-blue bokashi gradients, a towering wave with
claw-like foam whose spray breaks into data cubes, a cargo ship stacked with server racks in the trough, flat colour
blocks with carved keyblock outlines, wood grain and washi fibre, a vertical-text cartouche and vermilion seal.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `paper` | `#ecdfc2` |
| `key` | `#1b2236` |
| `prussD` | `#16304f` |
| `pruss` | `#24507e` |
| `mid` | `#4d7ca6` |
| `light` | `#93b4cc` |
| `pale` | `#c9d6d6` |
| `foam` | `#f1e8d2` |
| `sky` | `#e3d2ab` |
| `fuji` | `#6d84a0` |
| `hull` | `#7d3f2c` |
| `ochre` | `#d2a75c` |
| `grey` | `#9aa8b0` |
| `red` | `#c4432d` |
| `green` | `#7a9a6a` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 12% | `#162839` |
| 7% | `#565b5b` |
| 6% | `#dbc797` |
| 4% | `#858577` |
| 4% | `#c9ba94` |
| 4% | `#2b4458` |

The accents, the most saturated fields in it — `#253d52`, `#24394a`, `#d2bc8d`.

## Type

- `Noto Serif JP`
- `Serif`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Printed like a real woodblock: the black keyblock lands first, then each colour block is pressed in turn (sky ochre,
pale blue, mid blue, vermilion, Prussian) and the bokashi sky is wiped on last, while the wave swells, its claws
lean and data-cube spray tumbles onto the rolling ship.

## How it explains

An emaki handscroll unrolled right-to-left: golden kasumi clouds divide the scenes, a river of labelled prints
floats to an Edo karakuri automaton, flow is drawn as currents with claw-foam heads, the learning loop is a Naruto
whirlpool, numbers sit in paper cartouches and every judgement is a vermilion seal stamp.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
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
