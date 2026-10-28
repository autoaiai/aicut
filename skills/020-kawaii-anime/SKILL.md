---
name: 020-kawaii-anime
description: 'Kawaii Anime (可爱动漫) — the Popular Explainer Looks look from the archive of eighty-six. Flat 2D kawaii anime illustration: chibi characters with big glossy anime eyes and blush marks, chunky rounded shapes in strawberry-milk pink, mint, butter, lavender and sky, soft plum outlines of even weight, one cel-shadow tone and a small highlight, on polka-dot and star patterns. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Kawaii Anime, 可爱动漫, 经典讲解.'
license: MIT
---

# Kawaii Anime · 可爱动漫

> 中文 · 可爱动漫（经典讲解）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

The explainer that has to land on a phone: one idea on screen, a face or an object that carries it, and a camera
that moves so nobody has to read the frame twice.

给手机上看也能一眼看懂的讲解片：一屏一个意思，让一个角色或物件扛住叙事，镜头替观众把话说完。

## What it is made of

Flat 2D kawaii anime illustration: chibi characters with big glossy anime eyes and blush marks, chunky rounded
shapes in strawberry-milk pink, mint, butter, lavender and sky, soft plum outlines of even weight, one cel-shadow
tone and a small highlight, on polka-dot and star patterns.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `plum` | `#5a3659` |
| `dark` | `#3b2342` |
| `pink` | `#ffbfd2` |
| `pinkS` | `#f597b7` |
| `pinkD` | `#ff6f9c` |
| `mint` | `#bff0dc` |
| `mintS` | `#86d6b9` |
| `mintD` | `#3fb98e` |
| `butter` | `#fff0a6` |
| `butterS` | `#f5d06a` |
| `butterD` | `#ffd84d` |
| `lav` | `#ded2ff` |
| `lavS` | `#b7a2f2` |
| `lavD` | `#8f74e6` |
| `sky` | `#c6e7ff` |
| `skyS` | `#8cc6f2` |
| `skyD` | `#5aa9ea` |
| `cream` | `#fffaf4` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 43% | `#fce6eb` |
| 10% | `#fdf5f5` |
| 7% | `#f5dbe3` |
| 7% | `#f8c7d6` |
| 5% | `#f6d3dc` |
| 4% | `#ead7d8` |

The accents, the most saturated fields in it — `#ecdb99`, `#dcd599`.

## Type

- `Fredoka`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Everything pops in on twos with bouncy squash-and-stretch, characters bob and wiggle, sparkles twinkle, and scenes
change through star and heart iris wipes.

## How it explains

A chibi robot mascot acts the lesson out with anime reaction grammar (swirl eyes, sweat drop and "!?" on the wrong
guess, star eyes and confetti at 97%); scenes change through star and heart iris wipes, connectors are dotted candy
arrows, and the counters are bouncing outlined numerals.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- alpha layering — translucency built from repeated passes

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
