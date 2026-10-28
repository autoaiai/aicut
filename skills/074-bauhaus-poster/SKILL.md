---
name: 074-bauhaus-poster
description: 'Bauhaus Poster (包豪斯海报) — the Art & Design Movements look from the archive of eighty-six. A 1920s Bauhaus exhibition poster: primary red, yellow and blue plus black on aged cream stock, a robot face built only from circles, squares, semicircles and triangles on a strict grid, with constructed geometric lettering and lithographic ink mottle. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Bauhaus Poster, 包豪斯海报, 艺术与设计流派.'
license: MIT
---

# Bauhaus Poster · 包豪斯海报

> 中文 · 包豪斯海报（艺术与设计流派）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that needs a period style as its argument: a design history, a cultural essay, a launch that borrows the
confidence of a movement rather than a trend.

适合把某个时期风格本身当论点的题材：设计史、文化评论、借一场流派（而不是一波潮流）的底气做的发布。

## What it is made of

A 1920s Bauhaus exhibition poster: primary red, yellow and blue plus black on aged cream stock, a robot face built
only from circles, squares, semicircles and triangles on a strict grid, with constructed geometric lettering and
lithographic ink mottle.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `cream` | `#ece2c9` |
| `red` | `#cf3a2a` |
| `yellow` | `#efb526` |
| `blue` | `#1f4f9b` |
| `black` | `#1c1a18` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 17% | `#d5c8a8` |
| 6% | `#ddd2b6` |
| 5% | `#c9bc9b` |
| 5% | `#ccc2a6` |
| 5% | `#d8cdb1` |
| 4% | `#e2d7ba` |

The accents, the most saturated fields in it — `#953b29`, `#daa11d`, `#dba425`.

## Type

- `Space Grotesk`
- `Syne`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Built like a workshop paste-up: grid rules draw out, the halo and head drop in and snap with a little overshoot,
features stamp on one by one, then the constructed letters are set block by block and the type follows; in the hold
the pupils swivel and the antenna waves pulse.

## How it explains

Told as one long Bayer-style info-design sheet the camera tracks along and finally pulls back from, with thick
bar-and-triangle arrows, tags that drop onto what they name, stamped Space Grotesk counters and a red ring drawn
round the key moment.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- clipped regions to keep a mark inside its shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No canvas filter — no blur, no bloom.
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
