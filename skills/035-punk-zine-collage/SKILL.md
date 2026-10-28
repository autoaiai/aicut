---
name: 035-punk-zine-collage
description: 'Punk Zine Collage (朋克拼贴小志) — the Paper & Craft look from the archive of eighty-six. A photocopied cut-and-paste zine spread: torn halftone scraps, ransom-note letters cut from mismatched magazines, masking tape and staples, crushed to high-contrast black toner with one fluoro-pink spot ink overprinted off-register. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Punk Zine Collage, 朋克拼贴小志, 纸艺与手工.'
license: MIT
---

# Punk Zine Collage · 朋克拼贴小志

> 中文 · 朋克拼贴小志（纸艺与手工）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A world built out of card, fold and cut: real thickness, visible seams, light that casts a shadow because the thing
casting it is a sheet of something.

适合用卡纸、折叠、剪裁搭出来的世界：有厚度、有接缝，光落下就有影子，因为挡光的东西真的是一片材料。

## What it is made of

A photocopied cut-and-paste zine spread: torn halftone scraps, ransom-note letters cut from mismatched magazines,
masking tape and staples, crushed to high-contrast black toner with one fluoro-pink spot ink overprinted
off-register.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#111` · `#f4f2ec` · `#f6f4ee` · `#eee` · `#151515`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 24% | `#f3f3ee` |
| 7% | `#181817` |
| 6% | `#e9eae5` |
| 5% | `#383736` |
| 4% | `#dadad5` |
| 2% | `#2a2a29` |

The accents, the most saturated fields in it — `#f55a84`, `#ea4a75`, `#ea547c`.

## Type

- `Special Elite`
- `Permanent Marker`
- `Black Ops One`
- `Ops`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Scraps slam onto the page one per beat with a copier-flash flicker, ransom letters jitter in stop-motion, toner
noise boils every frame.

## How it explains

Shot on 8 fps steps, each beat is a new photocopied sheet slapped down over the last (copier flash on impact);
arrows are marker scrawls, labels are typed strips and ransom letters pasted onto the thing they name, the counter
is re-cut from magazine letters every time it ticks, and the wrong guess gets slashed with the pink spot ink.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- pattern fills, tiled from a drawn tile
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
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
