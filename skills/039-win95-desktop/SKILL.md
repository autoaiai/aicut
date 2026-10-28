---
name: 039-win95-desktop
description: 'Win95 Desktop (Windows 95 桌面) — the Retro UI & Neon look from the archive of eighty-six. A mid-90s beige-box desktop at 2x pixel scale: teal wallpaper, 2-pixel bevelled grey chrome, navy title bars, aliased system text and a trail of frozen error dialogs. Read it when a film must look exactly like this one — poster.webp is the target, reference/code.js is how it moves. Keywords: Win95 Desktop, Windows 95 桌面, 复古界面与霓虹.'
license: MIT
---

# Win95 Desktop · Windows 95 桌面

> 中文 · Windows 95 桌面（复古界面与霓虹）：`poster.webp` 是目标，`reference/code.js` 是它怎么动。

One of the eighty-six archived looks, kept as its own skill so a film can be given exactly one look. `poster.webp`
is the target — the picture this skill exists to reproduce. `reference/code.js` drew that cover;
`reference/style.json` is the catalogue's own note on it. Look at the picture first, then read the code, and port
the decisions rather than the file.

## When to use it

A subject that lives on a screen at night: software, a game, a club, a broadcast — phosphor, scanlines, chrome type
and a city that never turns the lights off.

适合夜里发光屏幕上的题材：软件、游戏、夜店、广播——荧光、扫描线、镀铬字，和一座不关灯的城市。

## What it is made of

A mid-90s beige-box desktop at 2x pixel scale: teal wallpaper, 2-pixel bevelled grey chrome, navy title bars,
aliased system text and a trail of frozen error dialogs.

## Palette

The source declares its colours by role — the object in `reference/code.js` that holds them. These are its own
values:

| role | colour |
| --- | --- |
| `X` | `#000` |
| `O` | `#ff9a30` |
| `K` | `#000` |
| `P` | `#ff6090` |
| `X` | `#000` |
| `O` | `#e8c890` |
| `B` | `#805020` |
| `K` | `#000` |
| `R` | `#ff4060` |
| `X` | `#ff40a0` |
| `O` | `#ffa0d0` |
| `P` | `#c03080` |

## The cover's colours

Sampled from `poster.webp` itself — the six largest fields, by the share of the frame they cover. When the code's
palette and the cover disagree, the cover wins.

| share | colour |
| --- | --- |
| 16% | `#b9baba` |
| 14% | `#a6a7a6` |
| 7% | `#00817d` |
| 4% | `#698b8a` |
| 4% | `#999999` |
| 3% | `#147876` |

The accents, the most saturated fields in it — `#047f85`, `#047c7d`, `#078583`.

## Type

The source sets no type of its own: what it says, it draws. Do the same, and where the film needs words, keep them
in a face of the same period and weight as the drawing rather than a default sans.

## How it moves

Icons pop onto the desktop, windows open with outline-zoom rectangles, the install bar ticks in blocks then freezes,
and the hung error box is dragged, smearing a stair of copies.

## How it explains

An "AI Trainer" app explains it: the question dialog zooms into the title bar, beats are property-sheet tabs clicked
by the cursor, dotted pixel arrows carry examples and the error signal, trackbar "weights" slide, counters live in
status bars and group boxes, and the payoff is a classic message box.

## Drawing it

Read out of `reference/code.js` — the moves that make the look:

- type drawn in the canvas, outlined or filled
- seeded noise: the same grain at the same `t`, every run
- bitmaps placed in the composition

## What it never does

The source is as clear about what it refuses. Keep the refusal — it is half of why the cover looks like itself.

- No drop shadow — depth comes from the drawing, not from a blur under it.
- No linear gradient fills.
- No radial glow.
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
