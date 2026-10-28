---
name: 086-multi-scale-truchet
description: 'Multi-scale Truchet (多尺度特鲁歇拼砖) — the Generative & Type look from the archive of eighty-six. Bold two-ink multi-scale Truchet tiling of winged quarter-circle tiles whose paths flow continuously across three scales; a third ink fills only the closed regions that fall inside the letters "AI", so the word surfaces from the maze. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Multi-scale Truchet, 多尺度特鲁歇拼砖, 生成艺术与字体.'
license: MIT
---

# Multi-scale Truchet · 多尺度特鲁歇拼砖

> 中文 · 多尺度特鲁歇拼砖（生成艺术与字体）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that is itself a system: an algorithm, a grammar, a brand built from rules — the film shows the rule
running, and the type carries the argument.

适合本身就是一套系统的题材：算法、语法、由规则搭出来的品牌——片子展示规则在跑，而字承担论点。

## What it is made of

Bold two-ink multi-scale Truchet tiling of winged quarter-circle tiles whose paths flow continuously across three
scales; a third ink fills only the closed regions that fall inside the letters "AI", so the word surfaces from the
maze.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 12% | `#878988` |
| 10% | `#77787a` |
| 8% | `#979896` |
| 7% | `#864a3c` |
| 4% | `#636668` |
| 4% | `#595d62` |

The accents, the most saturated fields in it — `#7c493d`, `#885145`, `#7b4d43`.

## Type

- `Rubik Mono One`
- `Mono`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Big tiles are laid in a diagonal sweep, then each scale subdivides in turn (paths re-routing as detail arrives);
then the accent screen is pulled across and slides into register, revealing AI.

## How it explains

The model is a Truchet maze whose tiles are its weights: an input band routes to the wrong output, the error runs
back along the path and two tiles quarter-turn to re-route it; scenes change by re-laying the tiles in a diagonal
sweep, labels are printed blocks with misregistered accent, and the accuracy chart is built from stacked tiles.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- compositing modes for overlap, knockout and light
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
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
