---
name: 010-illuminated-manuscript
description: 'Illuminated Manuscript (彩饰手抄本) — the Illustration look from the archive of eighty-six. A Book of Hours folio: mottled vellum with ruling and pricking, textura in iron-gall ink with vermilion rubrics, a historiated initial on raised burnished gold, lapis, rose and malachite with white-lead filigree, ivy-leaf rinceaux with gold bezants, and drolleries in the margins. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Illuminated Manuscript, 彩饰手抄本, 插画.'
license: MIT
---

# Illuminated Manuscript · 彩饰手抄本

> 中文 · 彩饰手抄本（插画）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject with no photographs of it, or none that would help: a mechanism, a history, a feeling, a made-up animal —
drawn in a flat, poster-like way that holds up at any size.

适合没有实拍素材（或有了也没用）的题材：原理、历史、情绪、一种编出来的动物——用平面海报式的画法，放大也不散。

## What it is made of

A Book of Hours folio: mottled vellum with ruling and pricking, textura in iron-gall ink with vermilion rubrics, a
historiated initial on raised burnished gold, lapis, rose and malachite with white-lead filigree, ivy-leaf rinceaux
with gold bezants, and drolleries in the margins.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `ink` | `#2b1a0f` |
| `inkWet` | `#100906` |
| `verm` | `#c63b1c` |
| `vermD` | `#8c2210` |
| `lapis` | `#233f8f` |
| `lapisD` | `#14265c` |
| `lapisL` | `#4d6fc2` |
| `rose` | `#b45a6c` |
| `roseD` | `#7a2c3e` |
| `mal` | `#2f7d55` |
| `malD` | `#1b4f35` |
| `malL` | `#5ea67a` |
| `ochre` | `#c8994f` |
| `ochreD` | `#8e6230` |
| `cream` | `#efe3c6` |
| `white` | `#f8f1e2` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 15% | `#c7b895` |
| 10% | `#b9aa87` |
| 10% | `#d9c9a5` |
| 9% | `#c5b389` |
| 8% | `#b6a57b` |
| 5% | `#a99976` |

The accents, the most saturated fields in it — `#c5ad87`, `#a89569`, `#b59659`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

The scribe works the page: gold leaf is laid square by square and burnished to a travelling glint, pigments flood
into the pen outlines, and the quill writes the text line by line.

## How it explains

Three folios of a manuscript, the leaf turning between them: champ initials bloom in gold, the examples are bestiary
roundels flowing along a penwork arrow into a Brazen Head, the learning loop is a wheel of Guess, Check and Adjust
where a marginal beast points out the error and the scribe corrects it in red, and accuracy rises as gilded bars
until 97% turns to burnished gold.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
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
