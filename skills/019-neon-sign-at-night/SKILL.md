---
name: 019-neon-sign-at-night
description: 'Neon Sign at Night (夜色霓虹招牌) — the Light & Imaging look from the archive of eighty-six. Hand-bent glass neon on an old brick wall after rain: white-hot tube cores, saturated colour halos, painted-out blockout tube, clips and electrodes, light spilling across the brickwork and smearing in the wet pavement. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Neon Sign at Night, 夜色霓虹招牌, 光影与成像.'
license: MIT
---

# Neon Sign at Night · 夜色霓虹招牌

> 中文 · 夜色霓虹招牌（光影与成像）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Something only a lens or a sensor could see: night, glass, a scan, a screen in a dark room, an image that is itself
the subject.

适合只有镜头或传感器才看得见的东西：夜色、玻璃、扫描、暗室里的屏幕，以及「影像本身」就是主题的片子。

## What it is made of

Hand-bent glass neon on an old brick wall after rain: white-hot tube cores, saturated colour halos, painted-out
blockout tube, clips and electrodes, light spilling across the brickwork and smearing in the wet pavement.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 22% | `#090506` |
| 10% | `#150909` |
| 4% | `#171516` |
| 3% | `#0d1216` |
| 2% | `#492617` |
| 2% | `#280a0a` |

The accents, the most saturated fields in it — `#47131a`, `#182937`, `#17222c`.

## Type

- `Gloria Hallelujah`
- `Poiret One`
- `monospace`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Tubes buzz on letter by letter with a stutter, one failing letter keeps flickering, and the puddle reflection
shivers as drops land.

## How it explains

One long brick wall the camera whip-pans along: every beat is a new neon sign that buzzes on tube by tube, arrows
are segmented chase-light tubes that ignite toward their target, numbers are neon digits re-lit as they change, and
the emphasis is a blinking red tube with a ring.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
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
