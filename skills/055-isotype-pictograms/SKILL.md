---
name: 055-isotype-pictograms
description: 'ISOTYPE Pictograms (ISOTYPE 图形符号) — the Data & Information look from the archive of eighty-six. Vienna Method pictorial statistics: rows of identical flat pictograms where each symbol is a fixed quantity, partial symbols for remainders, three muted litho inks on a strict grid with geometric sans lettering. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: ISOTYPE Pictograms, ISOTYPE 图形符号, 数据与信息.'
license: MIT
---

# ISOTYPE Pictograms · ISOTYPE 图形符号

> 中文 · ISOTYPE 图形符号（数据与信息）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Numbers that have to be seen before they are read: a trend, a comparison, a model, a budget — the chart is the
scene, and its axes are the grammar.

适合要先看见再读懂的数字化内容：趋势、对比、模型、预算——图表就是场景，坐标轴就是语法。

## What it is made of

Vienna Method pictorial statistics: rows of identical flat pictograms where each symbol is a fixed quantity, partial
symbols for remainders, three muted litho inks on a strict grid with geometric sans lettering.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 52% | `#ebe5d3` |
| 8% | `#dad4c3` |
| 5% | `#e5dcc9` |
| 4% | `#e8e3ce` |
| 4% | `#c5c6b9` |
| 4% | `#e5c9b4` |

The accents, the most saturated fields in it — `#b99d6a`, `#baa16e`, `#bba572`.

## Type

- `Space Grotesk`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Title and key set first, the year column drops in, then symbols are stamped out row by row from the centre in
stepped, rubber-stamp timing, the 2025 row of machines racing ahead; the litho paper breathes in the hold.

## How it explains

A Vienna-Method picture-statistic told across one long chart sheet the camera pans along: symbols are stamped in
stepped 12 fps timing, flat Isotype arrows show flow, numerals are stamped and re-stamped, and accuracy is counted
in rows of tick symbols with partial symbols for fractions.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- compositing modes for overlap, knockout and light
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No linear gradient fills.
- No radial glow.
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
