---
name: 034-cosmic-star-chart
description: 'Cosmic Star Chart (宇宙星图) — the Cosmic & Psychedelic look from the archive of eighty-six. Deep-space illustration crossed with an engraved celestial atlas: fbm nebulae in teal, violet, rose and gold, a lit ringed gas giant with cratered moons, comets and a diffraction-spiked star, overlaid with hairline gold and pale-cyan chart work (dotted orbits with arrowheads, degree rings, ring markers, small-caps serif labels). Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Cosmic Star Chart, 宇宙星图, 宇宙与迷幻.'
license: MIT
---

# Cosmic Star Chart · 宇宙星图

> 中文 · 宇宙星图（宇宙与迷幻）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Scale and sensation over information: a subject that gets better the less it is measured — deep space, a drug, a
mix, a night out.

适合讲尺度与感受而非信息的题材：深空、致幻、混音、一个夜晚——越不去量化它越好看。

## What it is made of

Deep-space illustration crossed with an engraved celestial atlas: fbm nebulae in teal, violet, rose and gold, a lit
ringed gas giant with cratered moons, comets and a diffraction-spiked star, overlaid with hairline gold and
pale-cyan chart work (dotted orbits with arrowheads, degree rings, ring markers, small-caps serif labels).

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`rgba(c,a)` · `rgba(cream,1)` · `rgba(2,3,14,0.95)` · `rgba(2,3,14,0.9)`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 20% | `#080918` |
| 8% | `#170c25` |
| 8% | `#171629` |
| 4% | `#161934` |
| 3% | `#120b1d` |
| 3% | `#26132d` |

The accents, the most saturated fields in it — `#152843`, `#0d0d24`, `#271838`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

The sky fades up star by star while the camera drifts in, the key star flares, the planet lights up, then the chart
engraves itself over it: degree ring sweeping round, orbits dotting on, markers and labels landing, a comet
streaking past.

## How it explains

Told as one celestial chart overlaid on deep space: the model is a ringed planet whose moons are its weights,
cat/dog examples arrive as constellation-headed comets, a warp streak changes scene, the guess is a chart beam to a
labelled star that turns red with a red ring marker, the weights’ orbit visibly tilts, the camera tilts up to an
atlas chart where the accuracy constellation forms and flares at 97%; numbers are big Syne figures over graduated
sextant scales.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- compositing modes for overlap, knockout and light
- dashed rules for measured distances and annotations
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
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
