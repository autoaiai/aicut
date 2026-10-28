---
name: 051-art-deco-foil
description: 'Art Deco Foil (装饰艺术烫箔) — the Art & Design Movements look from the archive of eighty-six. A 1920s Art Deco poster in black lacquer and stamped gold foil: a symmetrical stepped ziggurat skyscraper built from server racks, sunburst fans radiating behind it, a stepped geometric border, and Limelight / Poiret One lettering with cream accents. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Art Deco Foil, 装饰艺术烫箔, 艺术与设计流派.'
license: MIT
---

# Art Deco Foil · 装饰艺术烫箔

> 中文 · 装饰艺术烫箔（艺术与设计流派）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that needs a period style as its argument: a design history, a cultural essay, a launch that borrows the
confidence of a movement rather than a trend.

适合把某个时期风格本身当论点的题材：设计史、文化评论、借一场流派（而不是一波潮流）的底气做的发布。

## What it is made of

A 1920s Art Deco poster in black lacquer and stamped gold foil: a symmetrical stepped ziggurat skyscraper built from
server racks, sunburst fans radiating behind it, a stepped geometric border, and Limelight / Poiret One lettering
with cream accents.

## Palette

The source names its palette in one list — `stops` in `reference/code.js`:

`#6b4a16` · `#c99a3e` · `#f6e2a0` · `#fff6d2` · `#d6a948` · `#7d5719` · `#b8863a` · `#f3d98c` · `#fff3c8` · `#c08f36` · `#6e4c16`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 28% | `#18150a` |
| 11% | `#292518` |
| 9% | `#0a0903` |
| 9% | `#241c0b` |
| 6% | `#443c26` |
| 4% | `#554c34` |

The accents, the most saturated fields in it — `#342b17`, `#110e05`, `#3b3625`.

## Type

- `Poiret`
- `One`
- `Limelight`
- `Poiret One`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Like a gilded title sequence: the stepped border inscribes itself, the server ziggurat rises floor by floor with its
LEDs waking, halo arcs close symmetrically and the sunburst fans open, the spire extends and its beacon ignites, the
title is foil-stamped letter by letter, then one slow glint sweeps across the gold.

## How it explains

A gilded picture-palace sequence: scenes change behind closing and opening gold elevator doors, cameos glide on a
gold rail with cream name plaques, arrows are stepped chevron arrows, numbers roll on an odometer and fill a
sunburst gauge, and the key moments get a spotlight ring or a beacon glint.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- dashed rules for measured distances and annotations
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
