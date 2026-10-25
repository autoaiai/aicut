# riso-halftone

Fits: indie brands, zines, retro, nostalgia, playful education, small makers. Not for: corporate, luxury.

## Palette

- Two or three spot inks on paper `#F4EFE4`: fluorescent pink `#FF48B0`, blue `#0078BF`, yellow `#FFE800`, or teal
  `#00838A`.
- Overlaps multiply (`mix-blend-mode: multiply`) to make the third colour — that is what the third ink is for, so
  never use it as a flat fill where two others already overlap.

## Type

- Chunky grotesk or rounded at 700–900 (Space Grotesk, Archivo, or ZCOOL KuaiLe for Chinese) at 140–300 px.
- Typewriter-like mono for captions (IBM Plex Mono, 22 px).

## Marks, in a page

- **Halftone fills:** a `<pattern>` of dots 4–10 px in pitch, dot radius scaled per area to fake tone
  (`patternTransform="scale(0.7)"` on lighter areas, 1.3 on darker ones). Two patterns are enough for a whole film.
- **Misregistration:** each ink layer is its own element, offset 2–6 px, drifting with
  `wobble(seed, layer, t, 0.3)` — the offset is what makes it read as printed.
- **Shapes:** simple and blobby, flat fill, drawn as paths — no outlines.

```html
<g style="mix-blend-mode: multiply">
  <circle cx="820" cy="520" r="260" fill="url(#dotsPink)" style="transform: translate(3px, -2px)"/>
  <circle cx="1080" cy="560" r="300" fill="url(#dotsBlue)"  style="transform: translate(-4px, 2px)"/>
</g>
```

## Texture

Paper grain at 0.2, plus a mottled `feTurbulence` mask on large fills so some paper shows through
(`<mask>` with a `feTurbulence` + `feComponentTransfer` alpha ramp). Never a clean vector fill at full opacity.

## Layout

Collage-like, slightly off-grid; elements tilted ±3°; tape and sticker motifs; printed margins.

## Composition

- Occupancy 50–80%, collage-like and slightly off-grid.
- Printed margins: a 120 px paper border; nothing bleeds unless it is a page turn.

## Motion character

- 100–120 BPM, stepped: positions update on twos — `stepped(t, 12)` — which reads as hand-made.
- Mild overshoot allowed (`settle(..., { bounce: 0.2 })`). Layers slide into register on the beat: from a 4–6 px
  offset to 0, in 0.12 s.

## Transition grammar

- A page turn or a new "sheet" sliding in over the old one.
- One ink layer wipes across and the next scene is printed in it.
- A halftone dot grows until it becomes the next background (`revealCircle`, with the dot pattern behind it).

## Signature details

Registration crosses in the corners; a print-run counter ("№ 027 / 300"); colour separations shown briefly before
they combine.

## Sound

- A lo-fi `pluck` figure; `knock` when a layer slides into register; `scratch` for paper slides; `tick` on beats.
- 100–120 BPM.

## Bans

Smooth gradients, glossy effects, perfect vector precision everywhere, more than three inks.
