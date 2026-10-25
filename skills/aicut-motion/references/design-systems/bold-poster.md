# bold-poster

Fits: music, sport, youth brands, fashion, festivals, campaigns. Not for: finance, heritage, calm topics.

## Palette

- Three or four saturated flat colours with roles, e.g. electric blue `#2346FF`, hot pink `#FF4FA3`, acid yellow
  `#E8FF3A`, black `#0B0B0B` or white `#FFFFFF`.
- Every scene takes a different background from that set — the change of background is the scene change.

## Type

- Ultra-heavy condensed or wide display at 900, 300–700 px, cropped by the frame: Anton, Archivo Black or Bebas Neue
  for Latin; ZCOOL QingKe HuangYou or Noto Sans SC 900 for Chinese.
- Stacked lines, tight leading (0.85): one `<span>` per line, `line-height: 0.85`.

## Marks, in a page

- Flat cut-out shapes — stars, circles, arrows — drawn as plain `<path>` with a flat fill and no stroke.
- Photo-free collage of colour blocks.
- Stickers: a shape with a 6 px white outline (`stroke="#fff" stroke-width="12"` behind it, or `paint-order: stroke`).

## Texture

One grain rect at 0.08 with `mix-blend-mode: overlay`; flat otherwise.

## Layout

- Edge to edge. Type bleeds off the frame. Diagonals at 8–15°.
- Elements overlap; a big shape behind a big word.

## Composition

- Occupancy 80–100%; type and shapes bleed off edges on purpose.
- One giant element per scene; diagonals at 8–15°.

## Motion character

- 128–140 BPM. Punchy: `settle` with `{ bounce: 0.3–0.6 }`, dur 0.2–0.35 s.
- Squash and stretch on landing: `scale(1 + 0.08 * (1 - p), 1 - 0.08 * (1 - p))` during the last 0.1 s.
- Repeated words strobe in colour on beats (swap `color` at `beats.index(t)`, not a fade).
- Shapes spin at fixed beat steps: `rotate(${stepped(t, bpm / 60 * 2) * 90}deg)`.

## Transition grammar

- A colour block slams in from a side and becomes the next background (one full-frame rect, `left` from ±100%).
- Type scales up until it fills the frame, and its colour becomes the next scene's background.
- A shape iris-opens on the beat: `revealCircle(p)` at the shape's centre.

## Signature details

A repeating word or chant that changes colour each beat; stickers with numbers or dates; a final lock-up that shakes
once on the last beat (scale the lock-up, never the camera).

## Sound

- `kick` on every beat, `clap` on 2 and 4, `hat` on eighths; `boom` on the final lock-up; `whoosh` on colour slams.
- 128–140 BPM.

## Bans

Muted palettes, thin type, long holds, crossfades, realistic shadows, generic gradients.
