---
name: 085-macpaint-1984
description: 'MacPaint 1984 (MacPaint 1984 画板) — the Retro Digital look from the archive of eighty-six. Pure 1-bit black & white at the original 72-dpi grain: real Atkinson-dithered grayscale (blown-out highlights, crunchy shadows), 8x8 fill patterns, striped title bars, marching ants and bitmap type. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: MacPaint 1984, MacPaint 1984 画板, 复古数字.'
license: MIT
---

# MacPaint 1984 · MacPaint 1984 画板

> 中文 · MacPaint 1984 画板（复古数字）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject with a machine in it: a computer, a network, a game, a company that began in a garage — rendered as the
hardware of the period imagined it, limits and all.

适合机器在场的题材：计算机、网络、游戏、车库里起家的公司——按那个年代的硬件所想象的样子来画，包括它当年的限制。

## What it is made of

Pure 1-bit black & white at the original 72-dpi grain: real Atkinson-dithered grayscale (blown-out highlights,
crunchy shadows), 8x8 fill patterns, striped title bars, marching ants and bitmap type.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 17% | `#a6a6a6` |
| 15% | `#b7b7b7` |
| 12% | `#d6d6d6` |
| 11% | `#9b9b9b` |
| 10% | `#c6c6c6` |
| 9% | `#7c7c7c` |

## Type

- `Inter`
- `Libre Baskerville`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Built the way a 1984 user would: the dithered image scans in row by row, then pencil, line, bucket, rectangle and
text tools each switch on in the palette and lay down their marks in snappy, unanimated 1-bit steps, ending on
crawling marching ants.

## How it explains

Explains with the 1984 desktop itself: an alert asks the question and, once OK is clicked, zoom-rects turn it into
the window title; labelled Finder icons are dragged into a Model icon while the item count climbs; a Model window
cycles Guess/Check/Adjust buttons with a stop alert and menu-bar beep flash, dashed error arrow and Control-Panel
weight sliders; a pattern-filled chart climbs to 97% inside marching ants.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition

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
