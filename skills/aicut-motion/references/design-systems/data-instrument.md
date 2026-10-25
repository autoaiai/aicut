# data-instrument

Fits: explainers, finance, science, health, SaaS, any film carried by numbers or a process. Not for: pure mood pieces.

## Palette

- Paper white `#F7F7F5` or deep slate `#0F1419`; ink `#1C2430` or `#E6EDF3`.
- One data accent: `#2F6BFF` on light, `#4CC2FF` on dark.
- A second series colour `#F2994A`, only when comparing.
- Grid and axes in ink at 15–25%.

## Type

- Inter or Geist 600–800 for headlines (90–160 px).
- Geist Mono or IBM Plex Mono 400–500 for numbers and labels (20–28 px), `font-variant-numeric: tabular-nums`.

## Marks, in a page

- 1.5–2 px axes and leader lines; 3 px data lines; 8 px dots with a 2 px ring.
- Bars with square ends (`<rect>`, no radius).
- Diagrams from boxes with 8 px corners and 1.5 px strokes.
- Lines draw on with `drawOn`; values roll with `counter()` (`references/pages.md`).

```js
const draw = prog(t, 1.0, 0.9, EASE.out);
line.setAttribute('d', toPath(series.slice(0, Math.ceil(draw * series.length)), false));
dot.setAttribute('cx', String(xAt(draw * (series.length - 1))));   // the dot rides the line's head, not a timer
counter(valueEl, 0, 412, draw);
```

## Texture

None, or one grain rect at 0.04. Precision is the look.

## Layout

- A 12-column grid with 150 px margins.
- One chart or diagram per scene, about 60% of the frame.
- Labels attach to their marks with leader lines, never a legend if avoidable.

## Composition

- Occupancy: one chart or diagram fills about 60% of the frame.
- Labels attached to their marks; 150 px margins; nothing bleeds.

## Motion character

- 100–120 BPM. Axes first, then data, then the annotation, in that order — never all three at once.
- `EASE.out` 0.4–0.7 s; `settle` without bounce. Numbers roll on `EASE.smooth`.

## Transition grammar

- A data point becomes the next scene's origin: zoom into the dot, the dot becomes a ring, the ring becomes a chart.
- A line chart's line unbends into the next scene's timeline (one path, morphing through an intermediate shape).
- A bar grows until it is the full-frame background colour (one `<rect>`, no cut).

## Signature details

- A live time code and a source line in mono at the bottom.
- The key number repeated large at the end.
- Thin crosshairs that track the value being discussed.

## Sound

- A soft pad; `tick` as counters roll and values land; a `bell` when the key number lands; `whoosh` on zoom
  transitions.
- 100–120 BPM.

## Bans

3D charts, pie charts with more than four slices, gradients, glow, invented numbers presented as real, chartjunk.
