# storybook-scene

Fits: short stories, characters, music videos and lyric clips, picture books, emotional moments, mascots acting. Not
for: data, product specs.

## Palette

- One dominant mood colour for sky and air (night `#2B3150`–`#4A4F7A`, dusk `#5B6A8F`, day `#BFD8E6`).
- Darker values of it for ground and silhouettes.
- Two or three accents carry the story: the key object's colour, the light colour (warm lamp `#F2C46D`), skin or
  material tones.
- Characters are told apart by one flat colour each.

## Type

- Title: brush or serif display in a corner, vertical for Chinese (Ma Shan Zheng, Noto Serif SC 700).
- Captions: Noto Serif SC or Noto Sans SC at 40–48 px, warm white or lamp yellow, with an optional word-by-word
  highlight (one `<span>` per word, `color` swapped on the beat — never a fade).

## Marks, in a page

- Flat shapes, one darker shade per object for volume, corners slightly rounded.
- **Characters are drawn for the story, not rigged from a library.** Give each one a silhouette the story suggests,
  a shade side, clothing or material details, and an expressive face (eyes, brows, mouth). Never a stick figure
  unless asked. Interpolate between named poses with the `poseAt` pattern in `references/pages.md`; anything they hold
  is drawn at the hand's grip point.
- Weather as many thin streaks (rain) or drifting dots (snow) across the whole frame, in two depths, each offset by
  `rand(seed + i)` so no two are in step.
- Light as translucent wedge shapes under lamps, lit windows, and reflections as vertical streaks in puddles — no
  blur, no glow.

## Texture

Grain at 0.06, or paper at low strength; a soft `url(#rough)` on ground and foliage for a cut-paper edge when the
story is gentle.

## Composition

- Occupancy: the world fills the frame, characters about 25–40% of its height.
- Wide and locked: horizon on the lower third, characters on a third line, the key object at the focal point.
- Layers back to front: sky or wall, far (skyline, hills, shelves), mid (the main set), ground, foreground (posts,
  plants, puddles, objects).
- Captions in the lower third, never over a face.

## Motion character

- 60–90 BPM, character-led.
- Acting in small readable poses: a hand over, a head turn, a wave, a slump. `settle` with `{ bounce: 0.15 }` for
  gestures only.
- Weather and ambient elements move continuously. The big moves (an arrival, a departure, a gift handed over, a
  reveal) get the most screen time.

## Transition grammar

- One continuous shot: the story changes by action inside the world — something arrives or leaves, lights switch on,
  time of day shifts — not by cuts.
- A slow push-in is allowed only on the emotional beat, and returns to wide for the ending. Push in by scaling the
  world group, holding the characters' scale, so the depth reads.

## Signature details

- A sign, label or object in the world that names the place or the theme.
- A written word inside the world (on fogged glass, a letter, a ticket) that echoes the caption.
- A final title card over the emptied scene.

## Sound

- An ambience bed matching the environment (rain, wind, room) for the whole film, plus event sounds on the story's
  hits: `knock` for doors and objects, `boom` for vehicles or big arrivals, `drop` for water.
- An optional soft pluck or pad motif under the captions.

## Bans

Camera shake, fast cuts, gradients, glow effects (bloom, neon halos), grey captions on a grey sky, characters cropped
by the frame at rest.
