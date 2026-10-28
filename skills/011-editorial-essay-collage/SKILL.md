---
name: 011-editorial-essay-collage
description: 'Editorial Essay Collage (社论拼贴) — the Popular Explainer Looks look from the archive of eighty-six. The editorial "animated essay" collage: warm grainy paper, archival halftone prints with torn white borders and soft shadows, newspaper clippings in serif type with a translucent yellow highlighter sweep, masking tape, flat colour blocks and big cut-out condensed headlines. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Editorial Essay Collage, 社论拼贴, 经典讲解.'
license: MIT
---

# Editorial Essay Collage · 社论拼贴

> 中文 · 社论拼贴（经典讲解）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

The explainer that has to land on a phone: one idea on screen, a face or an object that carries it, and a camera
that moves so nobody has to read the frame twice.

给手机上看也能一眼看懂的讲解片：一屏一个意思，让一个角色或物件扛住叙事，镜头替观众把话说完。

## What it is made of

The editorial "animated essay" collage: warm grainy paper, archival halftone prints with torn white borders and soft
shadows, newspaper clippings in serif type with a translucent yellow highlighter sweep, masking tape, flat colour
blocks and big cut-out condensed headlines.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 5% | `#bbb49b` |
| 5% | `#d3ccb9` |
| 4% | `#dcd6c3` |
| 3% | `#c3bca4` |
| 3% | `#c3b89d` |
| 3% | `#b4ab96` |

The accents, the most saturated fields in it — `#925243`, `#974d3b`, `#aa4736`.

## Type

- `Libre Baskerville`
- `Oswald`
- `Anton`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Cutouts drop and slide in on 12 fps hand-animated steps while the camera pushes smoothly through parallax layers;
the highlighter sweeps left to right and a red marker rings the key detail.

## How it explains

Scenes are joined by fast blurred camera whips that hide the cut, plus a new paper sheet slid up on steps; arrows
are thin ink route lines and red marker, numbers are re-cut condensed numerals on paper strips, and the emphasis is
the yellow highlighter sweep (plus a red marker ring and cross on the wrong guess).

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
