---
name: 079-teletext-page
description: 'Teletext Page (图文电视页) — the Retro UI & Neon look from the archive of eighty-six. A broadcast teletext page: strict 40x25 character grid, eight saturated colours, 2x3 sextant mosaic graphics with one colour per cell, double-height headlines and Fastext links, seen through a CRT. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Teletext Page, 图文电视页, 复古界面与霓虹.'
license: MIT
---

# Teletext Page · 图文电视页

> 中文 · 图文电视页（复古界面与霓虹）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that lives on a screen at night: software, a game, a club, a broadcast — phosphor, scanlines, chrome type
and a city that never turns the lights off.

适合夜里发光屏幕上的题材：软件、游戏、夜店、广播——荧光、扫描线、镀铬字，和一座不关灯的城市。

## What it is made of

A broadcast teletext page: strict 40x25 character grid, eight saturated colours, 2x3 sextant mosaic graphics with
one colour per cell, double-height headlines and Fastext links, seen through a CRT.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `k` | `#000000` |
| `r` | `#ff0000` |
| `g` | `#00ff00` |
| `y` | `#ffff00` |
| `b` | `#0000ff` |
| `m` | `#ff00ff` |
| `c` | `#00ffff` |
| `w` | `#ffffff` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 9% | `#070908` |
| 5% | `#363a39` |
| 5% | `#051716` |
| 4% | `#082a29` |
| 3% | `#192828` |
| 2% | `#151619` |

The accents, the most saturated fields in it — `#045a75`, `#153939`, `#022603`.

## Type

- `VT323`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Only the header shows while the page counter rolls in green, then the page lands top-down two rows at a time; mosaic
bars step up a sub-block at a time, LATEST and the robot eyes flash, the ticker hops whole characters and the clock
ticks.

## How it explains

Each beat is a new teletext page (P100-P104): the header searches in green while the old page lingers, then the new
page overwrites it two rows at a time; arrows, pictures and bar charts are sextant mosaics, numbers count in
double-height digits and the key moments use the Flash attribute.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- pattern fills, tiled from a drawn tile
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

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
