---
name: 045-phosphor-terminal
description: 'Phosphor Terminal (荧光终端) — the Retro Digital look from the archive of eighty-six. A green P1-phosphor CRT: VT323 boot log with bloom and halation, curved scanlines, true per-pixel barrel distortion with RGB fringing at the edges, tube vignette, hum bar, and a glass face catching the room light inside a plastic bezel. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Phosphor Terminal, 荧光终端, 复古数字.'
license: MIT
---

# Phosphor Terminal · 荧光终端

> 中文 · 荧光终端（复古数字）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject with a machine in it: a computer, a network, a game, a company that began in a garage — rendered as the
hardware of the period imagined it, limits and all.

适合机器在场的题材：计算机、网络、游戏、车库里起家的公司——按那个年代的硬件所想象的样子来画，包括它当年的限制。

## What it is made of

A green P1-phosphor CRT: VT323 boot log with bloom and halation, curved scanlines, true per-pixel barrel distortion
with RGB fringing at the edges, tube vignette, hum bar, and a glass face catching the room light inside a plastic
bezel.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 15% | `#081609` |
| 12% | `#181a15` |
| 10% | `#030a04` |
| 7% | `#21221d` |
| 7% | `#282a23` |
| 7% | `#07250b` |

The accents, the most saturated fields in it — `#152716`, `#0c2611`, `#1b6629`.

## Type

- `Space Mono`
- `VT323`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

The tube powers on (dot, then a bright line that snaps open into a flashing raster that settles as the phosphor
warms), then the boot log types at terminal speed, the trace sweeps, the greeting prints and the cursor blinks while
a hum bar rolls.

## How it explains

Explains as a live terminal session: the typed question scrolls away and lives on in the inverse-video status line,
a labelled data log streams into a box-drawn MODEL, V-hold rolls carry us between screens, arrows and the error path
are phosphor line-drawings, and counters are big VT323 numerals that flip in inverse video for emphasis.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

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
