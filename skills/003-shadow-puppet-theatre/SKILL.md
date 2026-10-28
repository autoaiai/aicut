---
name: 003-shadow-puppet-theatre
description: 'Shadow Puppet Theatre (皮影剧场) — the Paper & Craft look from the archive of eighty-six. Black cut-out silhouettes with punched lace-like cut-work, pinned joints and thin control rods, pressed against a backlit cloth screen glowing amber at the lamp and falling to red-brown at the edges, with coloured gels in the openings. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Shadow Puppet Theatre, 皮影剧场, 纸艺与手工.'
license: MIT
---

# Shadow Puppet Theatre · 皮影剧场

> 中文 · 皮影剧场（纸艺与手工）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A world built out of card, fold and cut: real thickness, visible seams, light that casts a shadow because the thing
casting it is a sheet of something.

适合用卡纸、折叠、剪裁搭出来的世界：有厚度、有接缝，光落下就有影子，因为挡光的东西真的是一片材料。

## What it is made of

Black cut-out silhouettes with punched lace-like cut-work, pinned joints and thin control rods, pressed against a
backlit cloth screen glowing amber at the lamp and falling to red-brown at the edges, with coloured gels in the
openings.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 4% | `#693816` |
| 4% | `#682b14` |
| 4% | `#b76925` |
| 4% | `#271508` |
| 3% | `#3a1806` |
| 3% | `#552612` |

The accents, the most saturated fields in it — `#752b0b`, `#65260b`, `#954718`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

The oil lamp sputters alight, puppets slide and hop in on their rods with jointed limbs swinging, hanging cards drop
and sway on their strings, and the flame keeps the screen gently breathing.

## How it explains

Told as a little shadow play: a mechanical owl puppet is fed picture cards on rods, guesses on a hanging tag, a
teacher's hand corrects it and its cut-work gears re-set, then it climbs a ladder toward a filling moon; transitions
are the medium's own (the owl flies at the lamp so its shadow fills the screen, the lamp is turned down and up, lace
curtains close and part), arrows are growing hide vines and labels are punched plaques on strings.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- canvas filters for blur and colour shifts
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- rounded rectangles drawn from arcs
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- pattern fills, tiled from a drawn tile
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No linear gradient fills.

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
