---
name: 057-cross-stitch-sampler
description: 'Cross-Stitch Sampler (十字绣样本) — the Paper & Craft look from the archive of eighty-six. Pixel art worked as real counted cross-stitch on cream aida: every cell is an X of two-strand floss with sheen and twist, top legs all leaning the same way, dark backstitch outlines, all stretched in a wooden hoop. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Cross-Stitch Sampler, 十字绣样本, 纸艺与手工.'
license: MIT
---

# Cross-Stitch Sampler · 十字绣样本

> 中文 · 十字绣样本（纸艺与手工）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A world built out of card, fold and cut: real thickness, visible seams, light that casts a shadow because the thing
casting it is a sheet of something.

适合用卡纸、折叠、剪裁搭出来的世界：有厚度、有接缝，光落下就有影子，因为挡光的东西真的是一片材料。

## What it is made of

Pixel art worked as real counted cross-stitch on cream aida: every cell is an X of two-strand floss with sheen and
twist, top legs all leaning the same way, dark backstitch outlines, all stretched in a wooden hoop.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `R` | `#c43a46` |
| `N` | `#2e3760` |
| `T` | `#5fb3a9` |
| `t` | `#3f8c86` |
| `Y` | `#f2c14e` |
| `O` | `#ef8a3c` |
| `B` | `#a8673c` |
| `D` | `#5e3a22` |
| `K` | `#2a2433` |
| `P` | `#e98aa0` |
| `p` | `#c4566f` |
| `G` | `#4f9a52` |
| `W` | `#dfe3e8` |
| `g` | `#9aa0a8` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 13% | `#c3baa6` |
| 10% | `#c9c3ac` |
| 7% | `#95856a` |
| 6% | `#cdc6b2` |
| 5% | `#d4cab7` |
| 5% | `#b8ad99` |

The accents, the most saturated fields in it — `#88785d`, `#5b8a83`, `#bd8b83`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

The design fills in stitch by stitch in chart order, the needle hopping row to row trailing its floss, while the
hoop drifts gently.

## How it explains

One long sampler slides through the hoop from motif to motif; everything is stitched cell by cell with the needle
chasing the newest stitch, arrows and outlines are backstitch laid one hole at a time, numbers are re-stitched in a
3x5 sampler font, and the wrong guess gets a red running-stitch ring.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
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
