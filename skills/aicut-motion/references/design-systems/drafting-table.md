# drafting-table

Fits: designers, creative tools, process, engineering, "how it's made". Not for: luxury, emotional storytelling, food.

## Palette

- PAPER: background `#EDE6D5`, graphite line `#16161A`, accent blue `#1B3ED2`.
- BLUEPRINT: background `#1B3ED2`, lines `#FFFFFF`, accent cyan `#45F0DD`.
- HOLOGRAM: background `#07080A`, lines `#45F0DD`, white core `#FFFFFF`.
- Rule: each material's accent is the next material's main colour — the film's transitions are already argued for.

## Type

Geist only. 900 for big words; 600–800 for labels at 24–28 px, tracked 0.14–0.3 em.

## Marks, in a page

- **Paper:** 4 px strokes with `filter="url(#rough)"` (baseFrequency 0.03, scale 5). Fills are a 45° `<pattern>` of
  2 px blue rules on an 8–9 px pitch; big type is SVG `<text>` with `fill="url(#hatch)"` and a 2 px stroke.
- **Blueprint:** clean 3–4 px white paths, drawn on with `drawOn(path, p)`; hidden edges 2 px dashed
  (`stroke-dasharray: 10 8`); fine 1.2 px hatching as a `<pattern>`.
- **Hologram:** the same path twice — cyan at full width, white at 30% of it on top. Fills are horizontal lines on an
  8 px pitch; thicker means more lit. No blur, no glow.

A material change is the same `d` with new paint, never a new shape:

```js
const d = toPath(morphPts(cube, panel, prog(t, 3.2, 0.5, EASE.inOut)));   // X02
shape.setAttribute('d', d);
shape.setAttribute('class', materialAt(t));   // .paper | .blueprint | .hologram — colour, stroke, filter only
```

## Texture

A grain `<rect>` with `filter="url(#grain)"`, `mix-blend-mode: multiply`, opacity 0.15–0.2, on paper only. A 60 px
grid at 13%, every fifth line at 26%, drawn in the current material's line colour.

## Layout

Locked camera, front-on. Safe area 150 / 90 px. Centred, with ruler-like rails running to the frame edge.

## Composition

- Occupancy: the subject fills 40–70% of the width.
- Centred and symmetric; construction marks extend out from it.
- No bleed except a scan line or a flood mask in transit.

## Motion character

120 BPM, an event on every beat. `settle(t, beat, { lead: 0.05 })` with no overshoot. `EASE.in` for presses and
drops, `EASE.inOut` for scans. Holds ≤ 0.5 s.

## Transition grammar

- A carrier line morphs through shapes (line → circle → polygon → tiles) on equal point counts.
- Paper → blueprint: a shape floods the frame — `revealCircle(p)` on a full-frame rect.
- Blueprint → hologram: one horizontal scan line, `revealInset(p, 'top')` on the new material plus a drawn 4 px line
  travelling with it.
- Cubes unfold into dashboard panels (one path, morphing).

## Signature details

- Corner labels: "FIG. 07 — GEAR" top left, "BEAT 27 / 60" bottom right.
- Pen-tool handles labelled EASE, ruler ticks, dimension lines with live numbers, gears labelled 16T.
- Charts that describe the film itself.
- A small box mascot holding a pencil.

## Sound

- A `scratch` under each line being drawn on; a `tick` on every beat; a `knock` on presses and claps; a `whoosh` on
  floods and scans; a soft pad bed.
- 120 BPM. One `<audio>` clip per hit, placed on the `T` block.

## Bans

Particles, glows, lens flares, camera shake, RGB split, crossfades, gradients, bounce.
