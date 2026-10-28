---
name: 032-sumi-e-ink-wash
description: 'Sumi-e Ink Wash (水墨晕染) — the Painterly look from the archive of eighty-six. Monochrome Japanese ink painting on fibrous rice paper: dilute grey washes that bleed and fade into mist, a few confident loaded-brush strokes that split into dry bristle tracks, vast negative space, a vertical calligraphy column and a vermilion seal. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Sumi-e Ink Wash, 水墨晕染, 绘画质感.'
license: MIT
---

# Sumi-e Ink Wash · 水墨晕染

> 中文 · 水墨晕染（绘画质感）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that should feel made by a hand and a wet brush: pigment that pools in the paper, an edge that softens
where the water ran out, colour mixed on the sheet rather than picked from a wheel.

适合要有手和湿笔温度的题材：颜料在纸里积成边，水跑尽的地方变软，颜色是在纸上混出来的，不是在色轮上挑的。

## What it is made of

Monochrome Japanese ink painting on fibrous rice paper: dilute grey washes that bleed and fade into mist, a few
confident loaded-brush strokes that split into dry bristle tracks, vast negative space, a vertical calligraphy
column and a vermilion seal.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 38% | `#ece6d5` |
| 8% | `#e2ddca` |
| 6% | `#bab6a6` |
| 6% | `#cac5b5` |
| 5% | `#dbd6c6` |
| 5% | `#e7e1cd` |

## Type

- `Cormorant Garamond`
- `Noto Serif JP`
- `Serif`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Mist drifts sideways across the peaks while each brush stroke is laid down in one sweep, bristles running dry as it
travels; the tiny device on the ledge pulses with light.

## How it explains

Told along a handscroll the camera unrolls, with mist drifting across between scenes; arrows and the chart are
single loaded brush strokes that run dry, labels and numbers are ink-written in place, and vermilion strokes and
seal stamps do the emphasis.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
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
