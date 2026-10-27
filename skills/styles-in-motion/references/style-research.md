# Reading a style

Once the person has picked, the style has to become decisions: what is drawn, in what order, in what material, and
how each thing changes. Read it in four layers — cover, words, code, timing — and write down what you took from each.

## 1. The cover

Open `assets/atlas/styles/<folder>/poster.jpg` and look at it. Write down, in your own words: the palette (three to
five real colours, not “warm”), the composition (where the eye lands, what is behind what), the type (is the title
drawn, set, lettered, cut out?), the material (paper, glass, ink, pixels), the line (edge, weight, wobble), and the
light (flat, raking, glowing). These are the style's invariants: the film keeps them whatever its subject.

## 2. The words

`style.json` says the style twice — `description` for the look, `motionNotes` for how it moves, `explainerNotes` for
how it explains. Read all three. `explainerNotes` is the most useful: it names the moves that carry an argument in
this style (a camera pull that turns examples into a galaxy, a wipe that is a planet crossing, a counter that counts).

## 3. The code

`code.js` is the reference animation: `registerStyle({ draw(ctx, W, H, t) })`, a pure function of time. Read it for
mechanism, in this order:

1. **What is drawn once and kept** — the background, the paper texture, the finishing pass (`putImageData`,
   `globalCompositeOperation`, a grain overlay). That is the look's body.
2. **What is a function of `t`** — positions, scales, opacities, `smoothstep(e0, e1, t)`, phases, `Math.sin(t * k)`.
   Each of those is a beat, and the numbers are its start and end.
3. **The objects** — how a shape is built (`deform`, `circlePts`, a grid, a path) and what its parameters mean. This
   is what makes a watercolour wash different from a flat shape with a soft edge.
4. **The helpers** — `lib/harness.js` (seeded `rng`, `makeNoise`, `ease`, canvas helpers) and `lib/sound.js`. They are
   shared by all 86; read each once. Seeded randomness is why the same frame looks the same twice: keep that, it is
   what lets a film be looked at and fixed.

Long files: read in pieces. Never claim you read a file that a tool cut in half.

Do **not** execute the archive's files. Read them. The one thing to port is the technique.

## 4. Timing, from the code rather than a video

No reference video is archived here; the time is in the code, which is the better record anyway. For the two or three
moves that carry the explanation, write the beat as a line:

```
X: 0.0–1.2 s   washes flood in from the pencil outline, edges darken as they dry
X: 1.2–2.6 s   the camera pans along one long sheet; the counter brushes itself in
```

If a move's timing cannot be told from the code, it cannot be claimed in the film either — decide it yourself, and say
you did.

## Then the style constraints

Write five lines before any page is written:

- **3–5 invariants** — the things whose absence makes it another style (paper edge darkening; claret-only highlight;
  hairline grid; small-caps source line).
- **2–3 motion rules** — how things enter and leave, what eases, what stays still (a newspaper page scrolls, it does
  not zoom).
- **Type** — the hierarchy and whether the letters are drawn, set or lettered; for Chinese, a face with real Chinese
  glyphs, never a Latin-only face asked to fake them.
- **What carries the argument** — the one mechanism that will explain the topic (a line drawing itself; a wash
  flooding a shape; a counter).
- **What not to bring** — the reference's subject. A watercolour cover of a lightbulb does not mean the film gets a
  lightbulb; the person's topic decides every object.

## Porting to an AICUT page

- The page is `frame(t)`, the archive is `draw(ctx, W, H, t)`; the same clock, so beats move over unchanged.
- AICUT pages draw with DOM, SVG, CSS and canvas as you prefer. Canvas work (noise, texture, granulation) ports most
  directly; type is better set as DOM text so it stays crisp and editable.
- The film's stage is fixed; the archive's `W, H` become the stage's size. Keep the composition's proportions.
- Sound: the archive's `sound.js` is a kit, not a soundtrack. Make the film's sound from its own beats.
- Keep the credit: the style came from the archive; say so once, in the film's own notes or the reply, not on screen.
