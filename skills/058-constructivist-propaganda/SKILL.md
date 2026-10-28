---
name: 058-constructivist-propaganda
description: 'Constructivist Propaganda (构成主义宣传画) — the Art & Design Movements look from the archive of eighty-six. A 1920s Rodchenko / El Lissitzky agitprop poster: red, black and cream only, a halftone photomontage robot bellowing through a megaphone, beams radiating from its voice, a red disc and hard diagonal bars, and heavy condensed lettering set on the slant — litho ink mottle on cheap paper. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Constructivist Propaganda, 构成主义宣传画, 艺术与设计流派.'
license: MIT
---

# Constructivist Propaganda · 构成主义宣传画

> 中文 · 构成主义宣传画（艺术与设计流派）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that needs a period style as its argument: a design history, a cultural essay, a launch that borrows the
confidence of a movement rather than a trend.

适合把某个时期风格本身当论点的题材：设计史、文化评论、借一场流派（而不是一波潮流）的底气做的发布。

## What it is made of

A 1920s Rodchenko / El Lissitzky agitprop poster: red, black and cream only, a halftone photomontage robot bellowing
through a megaphone, beams radiating from its voice, a red disc and hard diagonal bars, and heavy condensed
lettering set on the slant — litho ink mottle on cheap paper.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 11% | `#c9b995` |
| 7% | `#bbaa86` |
| 7% | `#e5d9b7` |
| 4% | `#484436` |
| 3% | `#d8cba9` |
| 3% | `#3b362a` |

The accents, the most saturated fields in it — `#781f11`, `#972a17`, `#8b2a19`.

## Type

- `Anton`
- `Russo One`
- `Oswald`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Agitprop staccato: the red disc rolls in, the halftone robot slides up the diagonal, beams punch out of the
megaphone two frames at a time, the slogan bars shoot across and the words slam down on the beat; in the hold the
beam fan pulses with each shout.

## How it explains

Agitprop sequence: Lissitzky's red wedge drives across the sheet between scenes, slogans and labels slam onto
slanted bars on twos, arrows are heavy bars with wedge heads, the counter is stencil-tall Anton, and the key moments
get a stamped red cross or a burst of beams.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- radial gradients for glow — a colour fading to zero alpha, never a blurred sprite
- compositing modes for overlap, knockout and light
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
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
