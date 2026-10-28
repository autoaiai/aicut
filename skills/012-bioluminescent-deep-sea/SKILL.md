---
name: 012-bioluminescent-deep-sea
description: 'Bioluminescent Deep Sea (深海生物荧光) — the Light & Imaging look from the archive of eighty-six. The midnight zone: near-black water with parallax marine snow, and nothing lit but living light — a jellyfish whose nerve net glows like a neural network, a siphonophore chain, a rainbow-rippling comb jelly and an anglerfish lure. Additive cyan, teal and electric-blue glow with magenta and amber accents; type is bioluminescent. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Bioluminescent Deep Sea, 深海生物荧光, 光影与成像.'
license: MIT
---

# Bioluminescent Deep Sea · 深海生物荧光

> 中文 · 深海生物荧光（光影与成像）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Something only a lens or a sensor could see: night, glass, a scan, a screen in a dark room, an image that is itself
the subject.

适合只有镜头或传感器才看得见的东西：夜色、玻璃、扫描、暗室里的屏幕，以及「影像本身」就是主题的片子。

## What it is made of

The midnight zone: near-black water with parallax marine snow, and nothing lit but living light — a jellyfish whose
nerve net glows like a neural network, a siphonophore chain, a rainbow-rippling comb jelly and an anglerfish lure.
Additive cyan, teal and electric-blue glow with magenta and amber accents; type is bioluminescent.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`rgba(rgb,0)` · `rgba(col,0)` · `rgba(col,0.1*on)` · `rgba(0,0,0,1)`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 19% | `#010c15` |
| 19% | `#020609` |
| 18% | `#041727` |
| 8% | `#05121c` |
| 6% | `#0a2236` |
| 3% | `#071d31` |

The accents, the most saturated fields in it — `#16374a`, `#142939`, `#265967`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

The camera sinks (marine snow streams upward) as animals switch on one by one: bell rims pulse, nerve-net nodes
flicker alight, the siphonophore lights segment by segment, the lure blinks on, and the words form out of gathering
plankton.

## How it explains

A descent through the midnight zone: the question forms from gathering plankton, cat and dog swarms ride a glowing
current into a jellyfish model whose nerve net is its weights, the error ripples back through the net in magenta,
accuracy climbs a siphonophore chain to a plankton bloom-burst, and transitions are a descent, a sweeping plankton
bloom and an anglerfish lure lighting new water.

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
