---
name: 053-vaporwave
description: 'Vaporwave (蒸汽波) — the Retro UI & Neon look from the archive of eighty-six. Pastel-neon dreamscape: sliced sunset sun, glowing grid floor, a glitching marble bust on a checkerboard plinth, palm silhouettes, katakana, and a chewed-up VHS tape finish. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Vaporwave, 蒸汽波, 复古界面与霓虹.'
license: MIT
---

# Vaporwave · 蒸汽波

> 中文 · 蒸汽波（复古界面与霓虹）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that lives on a screen at night: software, a game, a club, a broadcast — phosphor, scanlines, chrome type
and a city that never turns the lights off.

适合夜里发光屏幕上的题材：软件、游戏、夜店、广播——荧光、扫描线、镀铬字，和一座不关灯的城市。

## What it is made of

Pastel-neon dreamscape: sliced sunset sun, glowing grid floor, a glitching marble bust on a checkerboard plinth,
palm silhouettes, katakana, and a chewed-up VHS tape finish.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#2a0b4c` · `#fff4fb` · `#ff2bd6` · `#1a0634` · `#00f0ff` · `#7ff8ff`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 10% | `#1c0c38` |
| 4% | `#24163a` |
| 4% | `#270c45` |
| 3% | `#381554` |
| 2% | `#2a1348` |
| 2% | `#3c2659` |

The accents, the most saturated fields in it — `#2d1253`, `#572667`, `#462b65`.

## Type

- `VT323`
- `Noto Serif JP`
- `Serif`
- `Inter`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Tape starts on a blue VCR screen and rolls into lock, the striped sun rises, palms slide in, the bust glitches into
existence slice by slice, katakana stamps on with chroma split and a tracking band crawls down.

## How it explains

Told on a worn VHS tape: scenes change with a tape cut (VCR blue screen, fast-forward, vertical roll), the header
lives on as the VCR on-screen menu, the counter is tape-counter digits, labelled polaroids slide along the neon
floor into the marble-bust "model", a pastel guess.exe pop-up does the guessing and the chart is drawn in neon
across the sky.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
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
