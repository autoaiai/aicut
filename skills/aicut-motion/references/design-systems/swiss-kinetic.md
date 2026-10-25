# swiss-kinetic

Fits: brand statements, launches, conferences, tech, manifestos. Not for: cosy, handmade, heritage.

## Palette

- Off-white `#F2F0EB`, near-black `#0E0E0E`, one hot accent picked for the brand (default signal red `#FF3B1F`).
- Optional support grey `#9A9A96`.
- Full-frame inversions (black ↔ white) count as scene changes: they are the transition, so do not also wipe.

## Type

- One grotesk: Inter Tight, Space Grotesk or Geist. 800–900 for words at 180–420 px, set tight (−0.03 to −0.05 em),
  often cropped by the frame.
- 500 labels at 22–26 px, tracked 0.08 em, all caps.

## Marks, in a page

- Solid rectangles and rules (2–12 px) snapped to the grid — plain `<rect>`, no filter, no radius.
- Circles only as solid dots.
- Arrows built from rules (a shaft `<rect>` plus two short strokes).
- No outlines on type except one deliberately outlined word (`-webkit-text-stroke: 2px currentColor; color: transparent`).

## Texture

None, or one grain rect at opacity 0.05. Sharpness is the texture.

## Layout

- A 12-column grid: 120 px columns, 40 px gutters, 150 px margins; a 24 px baseline grid.
- Asymmetric: hang type from the top-left column, keep big negative space.
- Numbers (01, 02, 03) mark sections.

## Composition

- Occupancy: type fills 60–100% and may bleed off an edge on purpose.
- Everything else snaps to the grid.
- At least 30% of the frame is empty background in every scene.

## Motion character

- 120–128 BPM. Decisive: `EASE.snap` or `EASE.out`, 0.25–0.45 s moves, no bounce.
- Words slide in on rails along grid lines, letters stagger 0.02–0.04 s (`letters(el, t, beat)` in
  `references/pages.md`).
- A block wipes on, the word appears behind it, then the block wipes off — three beats, one element each.

## Transition grammar

- Hard-edged block wipes along columns: one full-frame rect per column, `revealInset(p, 'bottom')` staggered by
  0.04 s, on the beat.
- Inversion cuts on the beat — the background and the type swap colour in one frame, holding for at least a beat.
- A word scales until the counter of its O becomes the next frame (scale the whole `<svg>` group, then cut).
- A rule extends to become the next scene's baseline (one path, `drawOn`).

## Signature details

Running section numbers; a thin ticker line at the bottom with a time code; the accent used for exactly one thing per
scene.

## Sound

- `kick` on bar 1; `tick` or `hat` on each beat; a short `clap` on word slams; `whoosh` on block wipes.
- No pads, or one very low drone. 120–128 BPM.

## Bans

Gradients, drop shadows, rounded cards, more than one accent, centred-title-over-three-cards, decorative icons.
