---
name: 081-guilloch-security-print
description: 'Guilloché Security Print (玑镂防伪纹样) — the Generative & Type look from the archive of eighty-six. Banknote-grade lathe work: hairline hypotrochoid rosettes and woven sine-ring meshes in split-fountain iris inks on fibred security paper, with engraved serif lettering, microtext and red serials. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Guilloché Security Print, 玑镂防伪纹样, 生成艺术与字体.'
license: MIT
---

# Guilloché Security Print · 玑镂防伪纹样

> 中文 · 玑镂防伪纹样（生成艺术与字体）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that is itself a system: an algorithm, a grammar, a brand built from rules — the film shows the rule
running, and the type carries the argument.

适合本身就是一套系统的题材：算法、语法、由规则搭出来的品牌——片子展示规则在跑，而字承担论点。

## What it is made of

Banknote-grade lathe work: hairline hypotrochoid rosettes and woven sine-ring meshes in split-fountain iris inks on
fibred security paper, with engraved serif lettering, microtext and red serials.

## Palette

The source computes its colours instead of listing them: there is no palette constant to copy. Take them from the
cover below and from the draw calls in `reference/code.js` — each field, each accent and each shadow is built there,
not picked from a wheel.

The fixed values it calls for most, which are the ones to keep:

`#173e38` · `#ebe6cf` · `#1d5a48` · `#2f4f8f` · `#2c4f7c` · `#6b2f4f`

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 27% | `#c7c9b6` |
| 12% | `#b7b9a6` |
| 10% | `#c4baa9` |
| 10% | `#d8d5c3` |
| 8% | `#bac3ad` |
| 7% | `#d2ccb9` |

## Type

- `Courier Prime`
- `Inter`
- `Libre Baskerville`
- `Cormorant Garamond`

Set the same families in the film where the page can load them; where it cannot, keep the weight, the width and the
tracking, which is what the look is actually made of.

## How it moves

Like a geometric lathe plotting the plate: the underprint waves and border ropes trace on, each rosette band is
drawn pen-pass by pen-pass, the engraved title is wiped in, the red serials are stamped digit by digit; then the
meshes slowly counter-rotate into shimmering moiré and a light glint crosses the note.

## How it explains

A sheet of five security-printed notes the camera pans across; the model is a lathe rosette whose passes start out
of register and are brought into register by each correction, with engraved double-rule arrows, red
numbering-machine counters and rubber cancellation stamps for WRONG / VERIFIED / CERTIFIED.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- linear gradients, banded by hand rather than blurred
- compositing modes for overlap, knockout and light
- dashed rules for measured distances and annotations
- clipped regions to keep a mark inside its shape
- hand-set bezier curves — nothing is a stock shape
- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition
- alpha layering — translucency built from repeated passes

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No radial glow.
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
