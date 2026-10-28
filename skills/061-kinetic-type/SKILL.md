---
name: 061-kinetic-type
description: 'Kinetic Type (动态字体) — the Generative & Type look from the archive of eighty-six. A typographic music-video frame: condensed words cropped edge to edge with zero leading, filled vs outlined, strobe echoes, a slice glitch and one word stretched and filled with a halftone dreamscape — strictly two colours. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Kinetic Type, 动态字体, 生成艺术与字体.'
license: MIT
---

# Kinetic Type · 动态字体

> 中文 · 动态字体（生成艺术与字体）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that is itself a system: an algorithm, a grammar, a brand built from rules — the film shows the rule
running, and the type carries the argument.

适合本身就是一套系统的题材：算法、语法、由规则搭出来的品牌——片子展示规则在跑，而字承担论点。

## What it is made of

A typographic music-video frame: condensed words cropped edge to edge with zero leading, filled vs outlined, strobe
echoes, a slice glitch and one word stretched and filled with a halftone dreamscape — strictly two colours.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 9% | `#252a0a` |
| 5% | `#4b5319` |
| 5% | `#353b09` |
| 4% | `#2b3502` |
| 4% | `#535b1b` |
| 4% | `#1c2404` |

The accents, the most saturated fields in it — `#6a7b00`, `#444b18`, `#262b11`.

## Type

- `Anton`
- `Space Mono`
- `Inter`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

One word per beat at 120 bpm: THE punches in, MACHINES whips in from the right trailing outline echoes, LEARNED
slams up with a one-frame inverted flash, the TO tab wipes up, DREAM springs open and its halftone moon develops;
then the slice glitch and echoes pulse on every beat.

## How it explains

Words slam in on the beat and do the explaining; scenes change with a slice-glitch tear and a whip-pan, arrows are
heavy rules with chevrons, labels are inverted mono tags that drop onto their targets, and the counters are huge
Anton numerals with a strobe-flash on the key hits.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- compositing modes for overlap, knockout and light
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
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
