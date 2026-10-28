---
name: 005-psychedelic-poster
description: 'Psychedelic Poster (迷幻海报) — the Cosmic & Psychedelic look from the archive of eighty-six. 1960s San Francisco concert-poster psychedelia: full-strength inks in vibrating complementary pairs, liquid churning ring bands, sunbursts and a mirror-symmetric eye-flower, with bulbous melting Shrikhand lettering on worn poster stock. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Psychedelic Poster, 迷幻海报, 宇宙与迷幻.'
license: MIT
---

# Psychedelic Poster · 迷幻海报

> 中文 · 迷幻海报（宇宙与迷幻）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Scale and sensation over information: a subject that gets better the less it is measured — deep space, a drug, a
mix, a night out.

适合讲尺度与感受而非信息的题材：深空、致幻、混音、一个夜晚——越不去量化它越好看。

## What it is made of

1960s San Francisco concert-poster psychedelia: full-strength inks in vibrating complementary pairs, liquid churning
ring bands, sunbursts and a mirror-symmetric eye-flower, with bulbous melting Shrikhand lettering on worn poster
stock.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `mag` | `#ff1a8c` |
| `acid` | `#a4f01a` |
| `orange` | `#ff6a00` |
| `blue` | `#1b3dff` |
| `purple` | `#6d17c8` |
| `yellow` | `#ffe11a` |
| `ink` | `#22072b` |
| `cream` | `#fbefd2` |
| `red` | `#ec1c24` |
| `pink` | `#ff9ad5` |
| `white` | `#fffaf0` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 4% | `#a76759` |
| 3% | `#9b5443` |
| 3% | `#a97747` |
| 3% | `#9b4945` |
| 3% | `#b96a65` |
| 3% | `#b67759` |

The accents, the most saturated fields in it — `#b8595a`, `#b77929`, `#ab4451`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

Colour ripples out from the centre, petals unfurl and the eye opens, then the lettering melts into place while the
liquid bands keep slowly churning.

## How it explains

The model is a giant eye-flower whose petals are its weights: examples ride striped ribbons into it, the wrong guess
makes the inks clash and jitter, the correction folds the swirl into a symmetric mandala, 97% bursts into a
kaleidoscope sunburst; scenes change by kaleidoscope rotation, a liquid melt and an iris ripple.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- compositing modes for overlap, knockout and light
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No radial glow.
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
