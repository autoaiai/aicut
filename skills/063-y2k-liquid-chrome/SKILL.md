---
name: 063-y2k-liquid-chrome
description: 'Y2K Liquid Chrome (Y2K 液态铬) — the Retro UI & Neon look from the archive of eighty-six. Millennium-futurist liquid chrome: environment-mapped metaball blobs and inflated chrome bubble letters with thin-film iridescence, soap bubbles, starburst glints and frosted pill UI in silver, ice-blue and lilac. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Y2K Liquid Chrome, Y2K 液态铬, 复古界面与霓虹.'
license: MIT
---

# Y2K Liquid Chrome · Y2K 液态铬

> 中文 · Y2K 液态铬（复古界面与霓虹）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that lives on a screen at night: software, a game, a club, a broadcast — phosphor, scanlines, chrome type
and a city that never turns the lights off.

适合夜里发光屏幕上的题材：软件、游戏、夜店、广播——荧光、扫描线、镀铬字，和一座不关灯的城市。

## What it is made of

Millennium-futurist liquid chrome: environment-mapped metaball blobs and inflated chrome bubble letters with
thin-film iridescence, soap bubbles, starburst glints and frosted pill UI in silver, ice-blue and lilac.

## Palette

The source names its palette in one list — `IRI` in `reference/code.js`:

`#7ff3ff` · `#c9a6ff` · `#ff9ee6` · `#b8f7ff`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 18% | `#d6d9f8` |
| 16% | `#c9c6f6` |
| 11% | `#cbd8f9` |
| 10% | `#d7e6fb` |
| 10% | `#c5b8f3` |
| 5% | `#c4baed` |

The accents, the most saturated fields in it — `#8d86c5`.

## Type

- `Space Grotesk`
- `Orbitron`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Mercury droplets fly in, overshoot and merge into one blob, chrome letters inflate one by one with a springy pop,
frosted pills glide up, and reflections, bubbles and glints keep sliding and twinkling.

## How it explains

A glossy millennium interface explains it: the model is a living mercury blob that liquid-morphs to a new spot at
every scene change while frosted-glass panels swoosh in and out, arrows are iridescent ribbons, labels are glossy
pills, and the counter and 97% are inflated chrome bubble digits.

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
