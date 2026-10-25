# editorial-ink

Fits: culture, food and tea, books, craft, heritage, Chinese and East Asian themes, slow luxury. Not for: tech
launches, sport.

## Palette

- Rice paper `#F3EEE3`, ink black `#1A1814`.
- Washes of ink at 8–40% opacity.
- Seal red `#B8322A` as the only accent.
- Optional tea or ochre `#A7774A`.

## Type

- Serif with character. Latin: Fraunces 300–600, or Noto Serif SC for Chinese, at 120–260 px.
- Captions: Noto Sans SC or Inter 400, 22–26 px, tracked 0.1 em.
- Vertical Chinese titles are welcome: `writing-mode: vertical-rl` on the block, one column per line, right to left
  across the frame.

## Marks, in a page

- **Brush strokes:** a `<path>` stroked 10–40 px, round caps, drawn on with `drawOn(path, p)`. Dry edges come from
  `filter="url(#rough)"` with `baseFrequency` 0.02–0.04 and `scale` 4–10: crisper and denser for small or near
  marks, softer and fainter for large or far ones.
- **Washes and mountains:** layered shapes far to near, 15–40% opacity far and 80–90% near, each layer with its own
  filter `seed`. A wash spreads by morphing outward from a drop (`morphPts` from a small ring to the wash's
  outline) — never by scaling, which reads as a zoom.
- **Mist:** thin horizontal strokes 10–25 px tall at 10–15% opacity, drifting with `wobble(seed, i, t, 0.15)`. Never
  blurred blobs.
- **Seals:** a red rounded square with knocked-out characters (`<rect>` plus white `<text>`).

```js
const spread = prog(t, 1.2, 1.4, EASE.out);          // a wash arriving
wash.setAttribute('d', toPath(morphPts(dropRing, washRing, spread)));
wash.style.opacity = String(0.15 + 0.5 * spread);    // opacity is part of the same move
```

## Texture

Paper is the background: a full-frame rect of `#F3EEE3` under one grain rect (multiply, 0.2). Ink carries its own
grain through `url(#rough)`. Keep the two textures separate — never one noise layer over everything.

## Layout

Generous negative space; asymmetric, the subject on a third. Columns of vertical text; a seal near a corner of the
title.

## Composition

- Occupancy: the subject within about 60% of the width.
- At least 50% of the frame is empty paper; nothing bleeds.
- Mist and washes stay inside the safe area.
- Title on the right or left third, never centred over the subject.

## Motion character

- 60–80 BPM; breathing, never snappy. `EASE.smooth` over 0.8–1.6 s.
- Ink spreads on `EASE.out`. Holds of 1–2 s are allowed for reading.
- No overshoot, no bounce.

## Transition grammar

- A wash spreads until it fills the frame, then thins into the next scene's paper — one full-frame rect whose
  `clip-path` grows, then fades.
- A brush stroke sweeps across as a wipe (`revealInset(p, 'left')` clipped to the stroke's path).
- A shape (a leaf, a mountain) dissolves into wash and re-forms as the next shape: one path, two morphs, wash in
  between.

## Signature details

- A seal that stamps on beat 1 of the title (scale down onto the frame with `settle`, no bounce).
- Small vertical captions with dates or places.
- One slow drifting element: steam, a petal, mist.

## Sound

- A low drone on the root; a `pluck` on a pentatonic scale (for example D E F# A B) once per bar.
- `drop` for ink and water; `knock` for seals and stamps; a light `scratch` under brush strokes.
- 60–80 BPM, long reverb.

## Bans

Neon, gradients, glossy 3D, fast cuts, sans-serif titles, emoji, more than one red element per scene.
