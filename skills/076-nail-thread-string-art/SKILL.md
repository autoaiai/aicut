---
name: 076-nail-thread-string-art
description: 'Nail & Thread String Art (钉线绕线艺术) — the Generative & Type look from the archive of eighty-six. Taut cotton threads strung between brass nails on a stained walnut board; every curve is an envelope of straight chords, with thread translucency, sheen and cast shadows, plus pyrography lettering. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Nail & Thread String Art, 钉线绕线艺术, 生成艺术与字体.'
license: MIT
---

# Nail & Thread String Art · 钉线绕线艺术

> 中文 · 钉线绕线艺术（生成艺术与字体）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that is itself a system: an algorithm, a grammar, a brand built from rules — the film shows the rule
running, and the type carries the argument.

适合本身就是一套系统的题材：算法、语法、由规则搭出来的品牌——片子展示规则在跑，而字承担论点。

## What it is made of

Taut cotton threads strung between brass nails on a stained walnut board; every curve is an envelope of straight
chords, with thread translucency, sheen and cast shadows, plus pyrography lettering.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#ffc93a` · `#efe3c8` · `#c9ccd2` · `#d8322a`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 28% | `#694526` |
| 12% | `#57361c` |
| 10% | `#734d2c` |
| 8% | `#79522e` |
| 7% | `#7b5531` |
| 6% | `#623f22` |

The accents, the most saturated fields in it — `#845a33`, `#5d3c21`, `#623d1f`.

## Type

- `Caveat`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Nails are tapped in around the outline, then thread is wound chord by chord so the glowing envelopes emerge, the
filament and base are laced, the rays snap taut, and the title is burned in with a travelling ember while the camera
slowly pushes in.

## How it explains

The network is literally strung on the board — nails are neurons, a weight is how many wraps of thread a connection
has — and learning is re-winding; the camera travels along one long walnut board between scenes, labels are kraft
tags nailed on, arrows are threads with nail barbs, counters are nail-and-thread 7-segment digits, and emphasis is a
red thread wound round a ring of nails.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
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
