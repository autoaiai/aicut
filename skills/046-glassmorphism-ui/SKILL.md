---
name: 046-glassmorphism-ui
description: 'Glassmorphism UI (毛玻璃界面) — the Dimensional look from the archive of eighty-six. Frosted-glass UI: translucent panels that genuinely blur the vivid gradient blobs and orbs behind them, with 1px light borders, a diagonal specular sheen, fine frost grain and crisp Inter type. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Glassmorphism UI, 毛玻璃界面, 立体空间.'
license: MIT
---

# Glassmorphism UI · 毛玻璃界面

> 中文 · 毛玻璃界面（立体空间）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that should feel like an object on a table: clay, glass, foam, a model you could pick up — three
dimensions doing the explaining, not decorating it.

适合该像桌上一个东西的题材：陶土、玻璃、泡沫、能拿起来的模型——用立体本身把事讲清，而不是拿立体当装饰。

## What it is made of

Frosted-glass UI: translucent panels that genuinely blur the vivid gradient blobs and orbs behind them, with 1px
light borders, a diagonal specular sheen, fine frost grain and crisp Inter type.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#4dffa6` · `#ff7a1a` · `#ff4fc1` · `#ff3b5c` · `#7a2bff` · `rgba(255,255,255,0.12)`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 3% | `#2a1364` |
| 2% | `#241754` |
| 2% | `#341876` |
| 2% | `#451b98` |
| 2% | `#1a1137` |
| 2% | `#055677` |

The accents, the most saturated fields in it — `#086689`, `#033455`, `#37084c`.

## Type

- `Inter`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Color blobs bloom up under the glass, the frosted card rises in, then the chat plays out (user bubble pops, the AI
reply types itself line by line) while stat chips float in glass-over-glass and their ring and sparkline draw on;
blobs keep drifting so the frost shimmers.

## How it explains

The camera glides and zooms across one big frosted dashboard (data feed → network card → output chat → accuracy
chart → pull back) while the live colour blobs drift behind, so every panel re-frosts as it moves; connectors are
glowing gradient lines with travelling light dots, labels are glass pills, numbers count in big Inter 800.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- canvas filters for blur and colour shifts
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- pattern fills, tiled from a drawn tile
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
