---
name: 022-16-bit-pixel-odyssey
description: '16-Bit Pixel Odyssey (16位像素奇旅) — the Retro Digital look from the archive of eighty-six. A SNES-era cutscene: 320x180 hand-placed pixels blown up 4x, a strict ~40-colour palette, banded sky with checkerboard dither transitions, layered parallax and an RPG dialog box. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: 16-Bit Pixel Odyssey, 16位像素奇旅, 复古数字.'
license: MIT
---

# 16-Bit Pixel Odyssey · 16位像素奇旅

> 中文 · 16位像素奇旅（复古数字）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject with a machine in it: a computer, a network, a game, a company that began in a garage — rendered as the
hardware of the period imagined it, limits and all.

适合机器在场的题材：计算机、网络、游戏、车库里起家的公司——按那个年代的硬件所想象的样子来画，包括它当年的限制。

## What it is made of

A SNES-era cutscene: 320x180 hand-placed pixels blown up 4x, a strict ~40-colour palette, banded sky with
checkerboard dither transitions, layered parallax and an RPG dialog box.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `K` | `#0a0618` |
| `H` | `#ff5a8a` |
| `h` | `#b02a6a` |
| `S` | `#ffc8a0` |
| `J` | `#3a6ad8` |
| `j` | `#22408a` |
| `c` | `#ffd27a` |
| `P` | `#3a2a5a` |
| `p` | `#22183a` |
| `B` | `#b8456a` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 5% | `#1b1041` |
| 5% | `#271551` |
| 5% | `#582771` |
| 5% | `#873478` |
| 5% | `#304cb7` |
| 4% | `#120c33` |

The accents, the most saturated fields in it — `#381c63`, `#bb4a76`, `#472758`.

## Type

- `Press Start 2P`
- `Start`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

A SNES cutscene opening: 16-step brightness fade-in, parallax layers rise into place in whole-pixel steps, the hero
walks on with a 2-frame cycle, the drone flies in, hearts pop, the window snaps open and dialog types out.

## How it explains

Tells it as a SNES RPG: the question is a dialog line whose window snaps up into a quest header, a mosaic transition
opens a training hall where labelled CAT/DOG cards ride a chevron conveyor into the MODEL while an EXAMPLES window
counts, a wavy battle-swirl starts a turn-based fight (GUESS/CHECK/ADJUST command menu, MISS! damage pop and screen
flash, red error trail, weight stat bars), and an iris wipe lands on a LEVEL UP accuracy screen.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No linear gradient fills.
- No radial glow.
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
