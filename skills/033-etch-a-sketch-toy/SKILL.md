---
name: 033-etch-a-sketch-toy
description: 'Etch A Sketch Toy (旋钮绘图玩具) — the Hand-Drawn look from the archive of eighty-six. The classic red line-drawing toy: glossy rounded red plastic with hard specular streaks, two white knurled knobs, and a grainy silver aluminium-powder screen where everything is one thin dark line that never lifts: crisp horizontals and verticals, stair-stepped diagonals and curves, and visible travel lines joining every letter and shape. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Etch A Sketch Toy, 旋钮绘图玩具, 手绘.'
license: MIT
---

# Etch A Sketch Toy · 旋钮绘图玩具

> 中文 · 旋钮绘图玩具（手绘）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

Line as the argument: a pen that thinks out loud, a diagram drawn while it is explained, mistakes that stay on the
page because a hand made them.

适合拿线当论述的题材：一支会边想边画的笔，边讲边画出的图解，手留下的错也不擦掉。

## What it is made of

The classic red line-drawing toy: glossy rounded red plastic with hard specular streaks, two white knurled knobs,
and a grainy silver aluminium-powder screen where everything is one thin dark line that never lifts: crisp
horizontals and verticals, stair-stepped diagonals and curves, and visible travel lines joining every letter and
shape.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 14% | `#c9cac3` |
| 12% | `#babab4` |
| 11% | `#acaca5` |
| 10% | `#b4b3ad` |
| 7% | `#c2c3bc` |
| 6% | `#bb4645` |

The accents, the most saturated fields in it — `#a62529`, `#ab171b`, `#d45758`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

A shake clears the last doodle in patchy streaks, then the single line crawls out at time-lapse speed while the left
knob turns with every horizontal move and the right knob with every vertical one.

## How it explains

Every word and picture is one continuous stylus line with the knobs turning to match; the scene transition is
shaking the toy so the drawing fades in streaks (leaving a faint ghost), arrows and labels are part of the same line
(labels ride arrows and bubble edges), and numbers grow as they are written: 1,000,000 gains a zero at a time and
the accuracy staircase writes 61%, 70%, 77%, 90% on its treads before a double-traced, boxed 97%.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- soft shadows cast by the canvas shadow properties
- clipped regions to keep a mark inside its shape
- rounded rectangles drawn from arcs
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No canvas filter — no blur, no bloom.
- No freehand curve — every edge is a straight rule, an arc or an exact rectangle.

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
