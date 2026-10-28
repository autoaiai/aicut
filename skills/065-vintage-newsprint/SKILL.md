---
name: 065-vintage-newsprint
description: 'Vintage Newsprint (复古新闻纸) — the Print look from the archive of eighty-six. A 1950s broadsheet front page: blackletter masthead, condensed banner headline, dense justified greeked columns and a coarse halftone wire photo, printed in thin uneven ink on yellowed pulp with show-through from the reverse. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Vintage Newsprint, 复古新闻纸, 印刷质感.'
license: MIT
---

# Vintage Newsprint · 复古新闻纸

> 中文 · 复古新闻纸（印刷质感）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that wants the authority of ink on paper: a magazine spread, a manifesto, a specimen sheet, a report that
should look printed rather than rendered.

适合要有「纸上印出来」那份权威感的题材：杂志跨页、宣言、标本图录、应该像印出来而不是渲染出来的报告。

## What it is made of

A 1950s broadsheet front page: blackletter masthead, condensed banner headline, dense justified greeked columns and
a coarse halftone wire photo, printed in thin uneven ink on yellowed pulp with show-through from the reverse.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#2a2a2a` · `#8a8a8a` · `#5a5a5a` · `#4a4a4a`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 31% | `#c5ba98` |
| 9% | `#d4c8a4` |
| 6% | `#ccc19c` |
| 5% | `#9b9278` |
| 5% | `#948d74` |
| 5% | `#847d67` |

## Type

- `Libre Baskerville`
- `Oswald`
- `Playfair Display`
- `UnifrakturMaguntia`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

The classic spinning-newspaper reveal: the page whirls up out of the dark and slaps flat to fill the frame, then the
camera creeps in on the headline while the console lamps blink and the tape reels turn in the halftone photo.

## How it explains

The viewer reads the paper: the camera tracks from the banner headline down to a By-the-Numbers infographic, the
page physically turns to an inside Science spread whose diagram, chart and pull quote carry the rest; arrows are
crisp newspaper-diagram rules, numbers are set in Oswald, and emphasis is a reader's red grease-pencil ring.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- dashed rules for measured distances and annotations
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
