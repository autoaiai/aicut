---
name: 049-gouache-travel-poster
description: 'Gouache Travel Poster (水粉旅行海报) — the Painterly look from the archive of eighty-six. Mid-century travel poster hand-painted in gouache: six flat, opaque, matte colours stacked in receding layers, dry-brush streaks where the paint thins at each edge, and a bold hand-lettered block. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Gouache Travel Poster, 水粉旅行海报, 绘画质感.'
license: MIT
---

# Gouache Travel Poster · 水粉旅行海报

> 中文 · 水粉旅行海报（绘画质感）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that should feel made by a hand and a wet brush: pigment that pools in the paper, an edge that softens
where the water ran out, colour mixed on the sheet rather than picked from a wheel.

适合要有手和湿笔温度的题材：颜料在纸里积成边，水跑尽的地方变软，颜色是在纸上混出来的，不是在色轮上挑的。

## What it is made of

Mid-century travel poster hand-painted in gouache: six flat, opaque, matte colours stacked in receding layers,
dry-brush streaks where the paint thins at each edge, and a bold hand-lettered block.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 8% | `#e5a688` |
| 6% | `#eac4a6` |
| 4% | `#e9bda1` |
| 4% | `#364a52` |
| 3% | `#e8bb9e` |
| 3% | `#a7a89a` |

The accents, the most saturated fields in it — `#385256`, `#39686a`, `#de6129`.

## Type

- `Bebas`
- `Neue`
- `Bebas Neue`
- `Oswald`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Layers slide in parallax like stacked paper cut-outs, the sun rises behind the ridges, steam puffs bob from the
cooling towers and server windows blink on in rows.

## How it explains

A run of hand-painted posters: each scene change is a fresh coat of cream swept across the board before the next
poster is painted flat colour by flat colour; arrows are flat poster arrow shapes, numbers are repainted in the
lettering band, and an orange starburst stamps the key moments.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- canvas filters for blur and colour shifts
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
