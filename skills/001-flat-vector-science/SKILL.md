---
name: 001-flat-vector-science
description: 'Flat-Vector Science (扁平矢量科普) — the Popular Explainer Looks look from the archive of eighty-six. Flat-vector science-explainer illustration: deep navy-to-violet space gradients, chunky outline-free shapes with rich multi-stop gradients, flat crescent shadows and rim highlights, soft radial glows, sparkly star fields, banded ringed planets and cute big-eyed round characters. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Flat-Vector Science, 扁平矢量科普, 经典讲解.'
license: MIT
---

# Flat-Vector Science · 扁平矢量科普

> 中文 · 扁平矢量科普（经典讲解）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

The explainer that has to land on a phone: one idea on screen, a face or an object that carries it, and a camera
that moves so nobody has to read the frame twice.

给手机上看也能一眼看懂的讲解片：一屏一个意思，让一个角色或物件扛住叙事，镜头替观众把话说完。

## What it is made of

Flat-vector science-explainer illustration: deep navy-to-violet space gradients, chunky outline-free shapes with
rich multi-stop gradients, flat crescent shadows and rim highlights, soft radial glows, sparkly star fields, banded
ringed planets and cute big-eyed round characters.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `sky0` | `#090b2c` |
| `sky1` | `#18134f` |
| `sky2` | `#3a1a6c` |
| `ink` | `#141846` |
| `visor` | `#10164a` |
| `teal` | `#a4fbef` · `#3ccbdc` · `#1d64b0` |
| `orange` | `#ffcc7a` · `#ff8d3f` · `#d24a2a` |
| `tan` | `#ffe9be` · `#ecb676` · `#b4723c` |
| `yellow` | `#ffd23f` |
| `pink` | `#ff5d8f` |
| `red` | `#ff3b5c` |
| `green` | `#38e08e` |
| `cyan` | `#56e8ff` |
| `violet` | `#8b5cff` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 8% | `#2a1c67` |
| 7% | `#1a1856` |
| 4% | `#18154a` |
| 4% | `#3a1e73` |
| 4% | `#431e77` |
| 3% | `#22195c` |

The accents, the most saturated fields in it — `#472379`, `#331d6d`, `#282476`.

## Type

- `Nunito`
- `Fredoka`
- `sans-serif`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Smooth eased motion with gentle overshoot: the camera pulls back through scales, planets drift with parallax,
characters bob and pop in, glows pulse.

## How it explains

Big smooth camera moves through scale: the model pulls back until a million examples become a spiral galaxy, a
foreground planet sweeps across as the wipe, and the camera dives into the glowing brain dome to emerge at a planet
whose ring is the accuracy bar; arrows are chunky dotted rounded curves, numbers are big rounded Nunito.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- dashed rules for measured distances and annotations
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
