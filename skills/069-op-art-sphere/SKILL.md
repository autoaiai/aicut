---
name: 069-op-art-sphere
description: 'Op Art Sphere (欧普艺术球体) — the Generative & Type look from the archive of eighty-six. Hard-edged black/ivory checkerboard that swells into a lens-like sphere and ripples at the margins — Vasarely and Riley optical vibration, flat acrylic on primed canvas. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Op Art Sphere, 欧普艺术球体, 生成艺术与字体.'
license: MIT
---

# Op Art Sphere · 欧普艺术球体

> 中文 · 欧普艺术球体（生成艺术与字体）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that is itself a system: an algorithm, a grammar, a brand built from rules — the film shows the rule
running, and the type carries the argument.

适合本身就是一套系统的题材：算法、语法、由规则搭出来的品牌——片子展示规则在跑，而字承担论点。

## What it is made of

Hard-edged black/ivory checkerboard that swells into a lens-like sphere and ripples at the margins — Vasarely and
Riley optical vibration, flat acrylic on primed canvas.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 26% | `#75746c` |
| 21% | `#7b7b73` |
| 13% | `#6c6b64` |
| 9% | `#85847b` |
| 3% | `#64645d` |
| 3% | `#716f69` |

The accents, the most saturated fields in it — `#791a17`, `#85211d`, `#5a1815`.

## Type

- `Archivo Black`
- `Space Grotesk`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

A flat checkerboard first ripples into Riley folds, then swells into a lens-sphere that pops past its size and
settles; red squares flip in cell by cell from the centre, then the field breathes and the folds drift.

## How it explains

The model is the Vasarely lens: untrained its grid is melted noise, the error travels back as an optical ripple
through the checkerboard and each adjustment combs the sphere toward perfect order; scenes change with a Riley fold
that crushes the picture into crowded columns, labels are hard-edged black and red slabs, and the numbers are
Archivo Black on ivory bands.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No linear gradient fills.
- No radial glow.
- No canvas filter — no blur, no bloom.
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
