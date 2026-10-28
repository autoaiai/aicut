---
name: 060-botanical-plate
description: 'Botanical Plate (植物学图谱) — the Illustration look from the archive of eighty-six. A hand-coloured copperplate natural-history plate: swelling engraved hatching that follows every form, loose transparent watercolour tints laid over the print, numbered figures, Latin italic captions and foxed rag paper with a pressed plate mark. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Botanical Plate, 植物学图谱, 插画.'
license: MIT
---

# Botanical Plate · 植物学图谱

> 中文 · 植物学图谱（插画）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject with no photographs of it, or none that would help: a mechanism, a history, a feeling, a made-up animal —
drawn in a flat, poster-like way that holds up at any size.

适合没有实拍素材（或有了也没用）的题材：原理、历史、情绪、一种编出来的动物——用平面海报式的画法，放大也不散。

## What it is made of

A hand-coloured copperplate natural-history plate: swelling engraved hatching that follows every form, loose
transparent watercolour tints laid over the print, numbered figures, Latin italic captions and foxed rag paper with
a pressed plate mark.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 26% | `#d6c8ab` |
| 20% | `#e5dcc3` |
| 11% | `#dcd2b7` |
| 9% | `#d8cdb2` |
| 6% | `#e2d6ba` |
| 6% | `#cdc4aa` |

## Type

- `Cormorant Garamond`
- `Libre Baskerville`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

The circuit-flower sways on its stem while the copper beetle flexes its antennae; tints bleed in a beat after the
engraved lines appear.

## How it explains

Three plates from a naturalist's folio, each pulled fresh under the press roller: engraved specimens of cats and
dogs feed the circuit-lily "model", a life-cycle plate with fletched engraved arrows shows Guess, Check and Adjust,
and a growth-stage plate counts accuracy in an engraved cartouche, with the colourist's red wash ringing the key
moments.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.

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
