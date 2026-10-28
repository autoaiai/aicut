---
name: 018-claymation-set
description: 'Claymation Set (黏土定格布景) — the Paper & Craft look from the archive of eighty-six. A plasticine stop-motion still: chunky hand-squished characters and props with soft waxy subsurface shading, thumbprints, tool marks and lumpy silhouettes on a sculpted clay set, shot with shallow depth of field. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Claymation Set, 黏土定格布景, 纸艺与手工.'
license: MIT
---

# Claymation Set · 黏土定格布景

> 中文 · 黏土定格布景（纸艺与手工）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A world built out of card, fold and cut: real thickness, visible seams, light that casts a shadow because the thing
casting it is a sheet of something.

适合用卡纸、折叠、剪裁搭出来的世界：有厚度、有接缝，光落下就有影子，因为挡光的东西真的是一片材料。

## What it is made of

A plasticine stop-motion still: chunky hand-squished characters and props with soft waxy subsurface shading,
thumbprints, tool marks and lumpy silhouettes on a sculpted clay set, shot with shallow depth of field.

## Palette

The source names its palette in one list — `PAL` in `reference/code.js`:

`#f2c14e` · `#f07b5a` · `#f6efe3` · `#ef8fb0` · `#a8dd8a` · `#7fd0e0`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 5% | `#355758` |
| 4% | `#5b7b76` |
| 4% | `#6b938c` |
| 4% | `#a85a32` |
| 4% | `#854526` |
| 3% | `#48655c` |

The accents, the most saturated fields in it — `#486866`, `#783b1d`, `#6b361e`.

## Type

- `Fredoka`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Animated on twos: the character boils subtly between frames, fingerprints shift, the waving arm snaps pose-to-pose
and the chat-bubble dots pop like little clay balls.

## How it explains

Animated on twos on one clay set: every piece is a baked plasticine lump that the "animator" pops on with
squash-and-stretch, slides along the table or knocks off so it falls out of frame; arrows are rolled clay coils,
labels and the counter are pressed clay letters re-sculpted each time the number changes, and the wrong guess gets a
red clay X slapped on with a shake.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
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
