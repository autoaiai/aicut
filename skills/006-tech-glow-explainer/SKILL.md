---
name: 006-tech-glow-explainer
description: 'Tech Glow Explainer (科技辉光讲解) — the Popular Explainer Looks look from the archive of eighty-six. The polished AI / tech YouTube motion-graphics look: deep navy-to-indigo space with drifting electric glows and a perspective grid, gradient-stroked icon tiles wired into node diagrams with light pulses racing along the connectors, dark cards with thin neon borders, gradient headline type and bloom on everything bright. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Tech Glow Explainer, 科技辉光讲解, 经典讲解.'
license: MIT
---

# Tech Glow Explainer · 科技辉光讲解

> 中文 · 科技辉光讲解（经典讲解）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

The explainer that has to land on a phone: one idea on screen, a face or an object that carries it, and a camera
that moves so nobody has to read the frame twice.

给手机上看也能一眼看懂的讲解片：一屏一个意思，让一个角色或物件扛住叙事，镜头替观众把话说完。

## What it is made of

The polished AI / tech YouTube motion-graphics look: deep navy-to-indigo space with drifting electric glows and a
perspective grid, gradient-stroked icon tiles wired into node diagrams with light pulses racing along the
connectors, dark cards with thin neon borders, gradient headline type and bloom on everything bright.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `cyan` | `#3fe3ff` |
| `blue` | `#3d7bff` |
| `violet` | `#8f5bff` |
| `magenta` | `#e04dff` |
| `indigo` | `#4b3bff` |
| `red` | `#ff4f7a` |
| `green` | `#3cf0b4` |
| `white` | `#eef2ff` |
| `muted` | `#9aa3d8` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 8% | `#0a133a` |
| 7% | `#050b29` |
| 6% | `#131647` |
| 6% | `#191966` |
| 5% | `#161758` |
| 4% | `#162559` |

The accents, the most saturated fields in it — `#0d1748`, `#1c2486`, `#1a2666`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

Smooth eased build: glows bloom up, icon tiles pop in with an overshoot and their line icons draw on, connectors
trace out and start carrying light pulses, the headline rises word by word and the stat counts up, all under a slow
camera push and drifting particles.

## How it explains

One continuous camera: the title shrinks to a header while the brain tile flies into place, labelled examples ride
glowing lanes into the model, the camera pushes through the brain into its network (light-speed streaks),
Guess/Check/Adjust chips light up as light pulses run forward and a red error pulse runs back, then the camera pans
to a glowing accuracy chart and pulls back for the takeaway; numbers count up in gradient Space Grotesk with bloom.

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
