---
name: 036-thermal-camera
description: 'Thermal Camera (热成像) — the Light & Imaging look from the archive of eighty-six. A handheld IR camera frame in ironbow: soft low-res heat field, cold glasses and warm breath, hot coffee and GPU racks, edge-enhanced outlines, sensor noise and the camera’s own HUD with spot meter, box measurement and scale bar. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Thermal Camera, 热成像, 光影与成像.'
license: MIT
---

# Thermal Camera · 热成像

> 中文 · 热成像（光影与成像）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Something only a lens or a sensor could see: night, glass, a scan, a screen in a dark room, an image that is itself
the subject.

适合只有镜头或传感器才看得见的东西：夜色、玻璃、扫描、暗室里的屏幕，以及「影像本身」就是主题的片子。

## What it is made of

A handheld IR camera frame in ironbow: soft low-res heat field, cold glasses and warm breath, hot coffee and GPU
racks, edge-enhanced outlines, sensor noise and the camera’s own HUD with spot meter, box measurement and scale bar.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`rgba(0,0,0,0.5)` · `#7dff8a` · `rgba(255,255,255,0.85)` · `rgba(0,0,0,0.55)` · `#ff3b2a` · `#ff2a1a`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 7% | `#280458` |
| 4% | `#5c067c` |
| 4% | `#640a83` |
| 4% | `#1c0449` |
| 3% | `#75097a` |
| 3% | `#040317` |

The accents, the most saturated fields in it — `#9b1678`, `#350459`, `#67097a`.

## Type

- `Inter`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Camera clicks through its shutter calibration, the auto-gain settles, coffee is hot-poured and steam rises, rack
bands heat up bottom to top while the spot meter glides onto the mug and the readouts tick live.

## How it explains

Everything is filmed through the IR camera: scenes change with the shutter-calibration (NUC) click, heat is activity
and a cold wave is the error signal, while the camera’s own HUD does the explaining with spot-meter arrows,
measurement-box emphasis, tag labels riding on objects and live readouts.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- canvas filters for blur and colour shifts
- dashed rules for measured distances and annotations
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
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
