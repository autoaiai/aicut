---
name: 059-pocket-monochrome
description: 'Pocket Monochrome (掌机单色像素) — the Retro Digital look from the archive of eighty-six. An original DMG handheld frame: 160x144 pixels in exactly four pea-soup greens, a visible LCD pixel grid with each pixel casting a faint shadow on the reflective backing, motion ghosting, and the purple-grey bezel with its striped DOT MATRIX label. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Pocket Monochrome, 掌机单色像素, 复古数字.'
license: MIT
---

# Pocket Monochrome · 掌机单色像素

> 中文 · 掌机单色像素（复古数字）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject with a machine in it: a computer, a network, a game, a company that began in a garage — rendered as the
hardware of the period imagined it, limits and all.

适合机器在场的题材：计算机、网络、游戏、车库里起家的公司——按那个年代的硬件所想象的样子来画，包括它当年的限制。

## What it is made of

An original DMG handheld frame: 160x144 pixels in exactly four pea-soup greens, a visible LCD pixel grid with each
pixel casting a faint shadow on the reflective backing, motion ghosting, and the purple-grey bezel with its striped
DOT MATRIX label.

## Palette

The source names its palette in one list — `SHADES` in `reference/code.js`:

`#a4ba30` · `#7f9c22` · `#3e6a2c` · `#14381a`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 11% | `#799527` |
| 7% | `#d6d4ca` |
| 6% | `#b8b4aa` |
| 4% | `#797988` |
| 4% | `#696976` |
| 4% | `#73737a` |

The accents, the most saturated fields in it — `#839c28`, `#88a229`, `#6c8a25`.

## Type

- `Inter`
- `Press Start 2P`
- `Start`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

A handheld boot: the logo scrolls down one LCD pixel per frame and smears, the palette steps to white, the overworld
steps back in through the 4 shades, the hero walks on 1 px per frame with a 2-frame cycle, and the window pops up
and prints text.

## How it explains

Explains as a handheld monster-battle RPG in four LCD shades: the question text box slides up the window layer into
a header, palette fades act as door transitions, labelled cards march an arrow-tile path into CHIP the model, a
flash-and-stripes battle intro starts a GUESS/CHECK/ADJUST fight (hit flash, dotted error trail, weight bars), and a
LEVEL UP stats screen counts accuracy to an inverted 97%.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

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
