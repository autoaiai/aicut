---
name: 064-sticky-note-wall
description: 'Sticky-Note Wall (便利贴墙) — the Illustration look from the archive of eighty-six. A brainstorming cork board: curling Post-its with adhesive bands and lifted-corner shadows, marker handwriting and doodles, a taped index card, push pins and red yarn connecting the ideas. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Sticky-Note Wall, 便利贴墙, 插画.'
license: MIT
---

# Sticky-Note Wall · 便利贴墙

> 中文 · 便利贴墙（插画）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject with no photographs of it, or none that would help: a mechanism, a history, a feeling, a made-up animal —
drawn in a flat, poster-like way that holds up at any size.

适合没有实拍素材（或有了也没用）的题材：原理、历史、情绪、一种编出来的动物——用平面海报式的画法，放大也不散。

## What it is made of

A brainstorming cork board: curling Post-its with adhesive bands and lifted-corner shadows, marker handwriting and
doodles, a taped index card, push pins and red yarn connecting the ideas.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#d22b2b` · `#2a62c9` · `#fbfaf3` · `#f2f2ee` · `rgba(40,20,5,0.4)`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 10% | `#a98556` |
| 8% | `#89663b` |
| 7% | `#987649` |
| 6% | `#b68a57` |
| 4% | `#b69859` |
| 3% | `#b89864` |

The accents, the most saturated fields in it — `#a5874c`, `#ab9757`, `#7c5c34`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

Notes slap onto the board one by one with a tiny bounce, then red yarn unspools from pin to pin linking the ideas.

## How it explains

A detective-board camera move across one big cork wall: notes slap in on cue, marker arrows and red yarn draw the
flow, numbers are crossed out and rewritten by hand, and red marker circles the key moments.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
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
