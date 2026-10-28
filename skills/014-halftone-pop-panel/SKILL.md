---
name: 014-halftone-pop-panel
description: 'Halftone Pop Panel (半色调波普) — the Print look from the archive of eighty-six. A Lichtenstein-style blown-up comic panel: fat tapering black brush outlines, mechanical Ben-Day dot fields in red and blue, flat primary yellow, a tearful close-up and hand-lettered balloon. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Halftone Pop Panel, 半色调波普, 印刷质感.'
license: MIT
---

# Halftone Pop Panel · 半色调波普

> 中文 · 半色调波普（印刷质感）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that wants the authority of ink on paper: a magazine spread, a manifesto, a specimen sheet, a report that
should look printed rather than rendered.

适合要有「纸上印出来」那份权威感的题材：杂志跨页、宣言、标本图录、应该像印出来而不是渲染出来的报告。

## What it is made of

A Lichtenstein-style blown-up comic panel: fat tapering black brush outlines, mechanical Ben-Day dot fields in red
and blue, flat primary yellow, a tearful close-up and hand-lettered balloon.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `red` | `#e2231a` |
| `blue` | `#1f5fbf` |
| `yellow` | `#ffd51f` |
| `black` | `#141210` |
| `white` | `#fbf6ea` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 5% | `#98a4a9` |
| 5% | `#a7bbcb` |
| 4% | `#9bb4cc` |
| 4% | `#6a89ac` |
| 4% | `#eaa796` |
| 3% | `#7493b6` |

The accents, the most saturated fields in it — `#957606`, `#d6b41c`, `#a58b17`.

## Type

- `Bangers`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Blue dots pop on in a wave, the robot head springs up into frame, red skin dots wash down the face, caption and
balloon slam in word by word, then a single tear wells up and rolls down during a slow push-in.

## How it explains

Told as a comic strip the camera reads panel by panel (pulling back to the gutters on each move), with fat yellow
comic arrows, captions and balloons, Bangers counters bursting out of explosion balloons, and a WRONG! burst with
shake as the emphasis.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- compositing modes for overlap, knockout and light
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
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
