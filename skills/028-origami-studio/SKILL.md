---
name: 028-origami-studio
description: 'Origami Studio (折纸工作室) — the Paper & Craft look from the archive of eighty-six. Folded-paper models shot on a seamless studio sweep: every form is flat facets with consistent fold shading, crisp crease lines, two-tone paper and soft table shadows. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Origami Studio, 折纸工作室, 纸艺与手工.'
license: MIT
---

# Origami Studio · 折纸工作室

> 中文 · 折纸工作室（纸艺与手工）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A world built out of card, fold and cut: real thickness, visible seams, light that casts a shadow because the thing
casting it is a sheet of something.

适合用卡纸、折叠、剪裁搭出来的世界：有厚度、有接缝，光落下就有影子，因为挡光的东西真的是一片材料。

## What it is made of

Folded-paper models shot on a seamless studio sweep: every form is flat facets with consistent fold shading, crisp
crease lines, two-tone paper and soft table shadows.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#e45a3e` · `rgba(f.rgb.map((v)` · `#2b2033`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 8% | `#c6cbc3` |
| 8% | `#d7dcd3` |
| 8% | `#d5d5c9` |
| 7% | `#ccd3cb` |
| 7% | `#c4c4b9` |
| 6% | `#b7bdb4` |

The accents, the most saturated fields in it — `#b7685a`, `#ab6355`, `#d67e6b`.

## Type

- `Space Grotesk`
- `Space Mono`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Models unfold into place crease by crease, the paper crane-drone bobs on spinning paper rotors while the key light
slowly orbits the table.

## How it explains

The camera dollies along one long studio table: every prop folds up from flat paper, arrows are creased paper arrows
lying on the table with the label printed on them, numbers are printed on tent cards that refold, and the wrong
guess gets a camera push-in and a key-light flare.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- clipped regions to keep a mark inside its shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- pattern fills, tiled from a drawn tile
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
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
