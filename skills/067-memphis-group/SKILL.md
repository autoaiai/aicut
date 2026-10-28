---
name: 067-memphis-group
description: 'Memphis Group (孟菲斯设计) — the Art & Design Movements look from the archive of eighty-six. Early-80s Memphis Milano maximalism: pastel grounds clashing with bold primaries, thick black outlines and hard offset shadows, squiggles, zigzags, dot grids, terrazzo chips and confetti triangles, all orbiting a chunky tilted chat-bubble headline. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Memphis Group, 孟菲斯设计, 艺术与设计流派.'
license: MIT
---

# Memphis Group · 孟菲斯设计

> 中文 · 孟菲斯设计（艺术与设计流派）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that needs a period style as its argument: a design history, a cultural essay, a launch that borrows the
confidence of a movement rather than a trend.

适合把某个时期风格本身当论点的题材：设计史、文化评论、借一场流派（而不是一波潮流）的底气做的发布。

## What it is made of

Early-80s Memphis Milano maximalism: pastel grounds clashing with bold primaries, thick black outlines and hard
offset shadows, squiggles, zigzags, dot grids, terrazzo chips and confetti triangles, all orbiting a chunky tilted
chat-bubble headline.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `pink` | `#f9c3d2` |
| `mint` | `#a9e5d0` |
| `lilac` | `#cbb8f4` |
| `butter` | `#fff0a6` |
| `cream` | `#fff8ec` |
| `magenta` | `#ff4f9b` |
| `blue` | `#2b62ff` |
| `yellow` | `#ffd02e` |
| `teal` | `#00b2a0` |
| `red` | `#ff5a3c` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 8% | `#a5e3cc` |
| 5% | `#f4c1ce` |
| 4% | `#ecbbc8` |
| 3% | `#a7dbc7` |
| 2% | `#f5c3d1` |
| 2% | `#ded592` |

The accents, the most saturated fields in it — `#03a896`, `#e7bd23`, `#1bab99`.

## Type

- `Fredoka`
- `Rubik Mono One`
- `Mono`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Cut-out cel timing on twos: the mint wedge slides in, shapes pop on one by one with springy overshoot, squiggles and
zigzags draw themselves, the chat bubble squash-and-stretches in, the words pop on the beat, confetti bursts out and
the sticker slaps on; then everything bobs off-beat and the typing dots bounce.

## How it explains

Memphis cut-out animation on twos: examples hop into a funnel-topped totem computer, scenes change with a striped
polka-dot band that swipes across, arrows are fat outlined shapes with hard shadows, counters are stickers that pop
on each tick, and the key moments get a spinning starburst.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition

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
