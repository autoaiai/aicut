# The page, in code

Everything here is a function of `t`: call it with any second, in any order, and it draws the same picture. That is
the whole contract a page has to keep.

Copy `lib/motion.js` into the film once and import it from every scene. It is style-neutral: it decides *how* things
move, never *what* they look like.

## lib/motion.js

```js
// lib/motion.js — time, easing and geometry for a film's pages. Pure functions of t.

export const clamp = (x) => Math.min(1, Math.max(0, x));
export const mix = (a, b, p) => a + (b - a) * p;

/* exact at both ends: an easing that is 0.0005 at 0 leaks a hidden layer into frame 0 */
export const EASE = {
  out: (p) => (p <= 0 ? 0 : p >= 1 ? 1 : 1 - Math.pow(2, -10 * p)),      // arrivals
  in: (p) => (p <= 0 ? 0 : p >= 1 ? 1 : Math.pow(2, 10 * p - 10)),       // exits, presses
  inOut: (p) => (p <= 0 ? 0 : p >= 1 ? 1 : p < 0.5
    ? Math.pow(2, 20 * p - 10) / 2
    : (2 - Math.pow(2, -20 * p + 10)) / 2),                              // wipes, scans
  smooth: (p) => (p <= 0 ? 0 : p >= 1 ? 1 : p * p * (3 - 2 * p)),
  snap: (p) => (p <= 0 ? 0 : p >= 1 ? 1 : 1 - Math.pow(1 - p, 4)),       // decisive, ui-like
  linear: (p) => clamp(p),                                               // conveyors, clocks
};

/** 0..1 across [start, start + dur] seconds. */
export const prog = (t, start, dur, ease = EASE.smooth) => ease(clamp((t - start) / dur));

/** 0..1 that lands on `landing` seconds, starting `lead` early. bounce: 0 = none, 0.2 = a little. */
export const settle = (t, landing, { lead = 0.05, dur = 0.45, bounce = 0 } = {}) => {
  const p = clamp((t - (landing - lead)) / dur);
  if (!bounce) return p <= 0 ? 0 : p >= 1 ? 1 : 1 - Math.pow(2, -10 * p);
  const s = 1.2 + bounce * 3;                       // back-out: 0 at p=0, 1 at p=1, overshoot between
  return 1 + (s + 1) * Math.pow(p - 1, 3) + s * Math.pow(p - 1, 2);
};

/** The beat grid: at(9) with 120 bpm is 4.5 s; bar(3) is 6 s. */
export const beats = (bpm, perBar = 4) => {
  const len = 60 / bpm;
  return { len, at: (n) => n * len, bar: (n) => n * len * perBar, index: (t) => Math.floor(t / len + 1e-6) };
};

/** Quantise time: stepped(t, 12) updates 12 times a second ("on twos", a hand-made boil). */
export const stepped = (t, perSecond) => Math.floor(t * perSecond) / perSecond;

/* deterministic randomness — Math.random() would break the one rule */
const hash = (seed) => {
  let h = 2166136261;
  for (const ch of String(seed)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return ((h >>> 0) % 100000) / 100000;
};
export const rand = (seed) => hash(seed);
export const wobble = (seed, i, t, speed = 1) => {
  const s = hash(seed) * 100;
  return (Math.sin(t * speed * 1.7 + i * 0.137 + s) + Math.sin(t * speed * 2.9 + i * 0.311 + s * 1.7)) / 2;
};

/* geometry: every shape as an n-point ring, so any two of them morph */
export const ring = (cx, cy, r, n = 96, round = 1) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    const k = round === 1 ? 1 : 1 + (round - 1) * 0.18 * Math.cos(4 * a);   // round > 1: a squarish ring
    return [cx + Math.cos(a) * r * k, cy + Math.sin(a) * r * k];
  });

export const polygon = (cx, cy, r, sides, rot = -Math.PI / 2, n = 96) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    const step = (Math.PI * 2) / sides;
    const corner = ((a + Math.PI / 2 - rot) % step + step) % step;
    const k = Math.cos(Math.PI / sides) / Math.cos(corner - Math.PI / sides);
    return [cx + Math.cos(a) * r * k, cy + Math.sin(a) * r * k];
  });

export const toPath = (pts, closed = true) =>
  pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`).join(' ') + (closed ? ' Z' : '');

/** Two rings of equal length, blended: the whole of a real transformation. */
export const morphPts = (a, b, p) => a.map(([x, y], i) => [mix(x, b[i][0], p), mix(y, b[i][1], p)]);

/** Draw a path on: measures once, then only moves the dash offset. */
export const drawOn = (() => {
  const lengths = new WeakMap();
  return (path, p) => {
    let len = lengths.get(path);
    if (len == null) { len = path.getTotalLength(); lengths.set(path, len); }
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len * (1 - clamp(p))}`;
  };
})();
```

## The page shell

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  html, body { margin: 0; height: 100%; background: transparent; overflow: hidden; }
  svg { display: block; width: 100%; height: 100%; }
</style>
</head>
<body>
<svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
  <path id="ring" fill="none" stroke="#E8FF3A" stroke-width="6"/>
</svg>
<script type="module">
  import { prog, EASE, ring, toPath, morphPts, drawOn, settle } from '../lib/motion.js';

  const path = document.querySelector('#ring');
  const a = ring(960, 540, 200);
  const b = ring(960, 540, 420);

  window.film = {
    duration: 6,
    frame(t) {
      const grow = prog(t, 0, 0.8, EASE.out);          // S04
      path.setAttribute('d', toPath(morphPts(a, b, grow)));
      drawOn(path, prog(t, 0.4, 1.2, EASE.inOut));
      path.style.opacity = String(1 - prog(t, 5, 1, EASE.in));
    },
  };
</script>
</body>
</html>
```

`viewBox` + `preserveAspectRatio` is how an SVG page behaves at any stage: `xMidYMid slice` covers the frame,
`meet` fits inside it.

## Type

Set type in HTML so the person can retype it in Studio. Per-letter motion needs one element per letter:

```js
const letters = (el, t, start, stagger = 0.03, dur = 0.5) => {
  [...el.children].forEach((span, i) => {
    const p = prog(t, start + i * stagger, dur, EASE.out);
    span.style.opacity = String(p);
    span.style.transform = `translateY(${(1 - p) * 0.35}em)`;
  });
};
```

```html
<h1 class="word"><span>A</span><span>U</span><span>R</span><span>A</span></h1>
```

Keep the spaces: a space is `<span>&nbsp;</span>` or a `word-spacing` on the parent, never a bare gap between words
split into letters. Vertical Chinese is `writing-mode: vertical-rl` on the block, one column per line.

## Mask reveals and transitions

A reveal is a clip the page applies to itself; the clip in `film.html` does not know about it.

```js
export const revealInset = (p, from) => {
  const q = (1 - p) * 100;
  return from === 'right' ? `inset(0 0 0 ${q}%)`
    : from === 'top' ? `inset(${q}% 0 0 0)`
    : from === 'bottom' ? `inset(0 0 ${q}% 0)`
    : `inset(0 ${q}% 0 0)`;                          // left
};
export const revealCircle = (p, cx = 50, cy = 50) => `circle(${p * 75}% at ${cx}% ${cy}%)`;
```

```js
const p = prog(t, 2, 0.6, EASE.inOut);
stage.style.clipPath = revealInset(p);              // left → right
```

Between two shots, prefer a page that owns the transition (a wipe, a flood, a scan) as its own clip over the cut —
that is what "a transition is a page" means. Two clips overlapping with a `fade` override is the fallback, not the
plan.

## Materials, from SVG

One filter per material, defined once in the page's `<defs>`:

```html
<filter id="rough" x="-10%" y="-10%" width="120%" height="120%">
  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="7" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/>
</filter>

<filter id="grain">
  <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2"/>
  <feColorMatrix type="saturate" values="0"/>
  <feComponentTransfer><feFuncA type="linear" slope="0.18"/></feComponentTransfer>
</filter>

<pattern id="halftone" width="10" height="10" patternUnits="userSpaceOnUse">
  <circle cx="5" cy="5" r="2.6" fill="#FF48B0"/>
</pattern>
```

- `rough` on a stroke is a pencil or a dry brush: raise `scale` for a coarser edge, and use a different `seed` per
  layer so two strokes never share an edge.
- `halftone` as a `fill` is a printed tone; scale the pattern per element with `patternTransform="scale(0.7)"`
  rather than drawing dots by hand.
- A grain layer is one full-frame `<rect filter="url(#grain)">` with `mix-blend-mode: multiply` (paper) or
  `overlay` (poster). Never on everything — pick the layers that would have it.
- Flicker comes from a filter whose `seed` changes per frame. Keep `seed` fixed, and let `stepped(t, n)` do any
  deliberate boil.

## Numbers that roll

```js
const counter = (el, from, to, p, decimals = 0) => {
  const v = from + (to - from) * p;
  el.textContent = v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
};
counter(valueEl, 0, 384, prog(t, 1.2, 0.9, EASE.smooth));
```

Tabular figures (`font-variant-numeric: tabular-nums`) keep a rolling number from shifting the line.

## A character, without a rig library

There is none: draw the figure as SVG with named pose constants, and interpolate between them.

```js
const POSES = {
  idle: { hip: [960, 700], torso: -2, head: 0, armL: 12, armR: -8, knee: 4 },
  reach: { hip: [960, 700], torso: 4, head: 6, armL: -70, armR: -8, knee: 2 },
};
const poseAt = (t, a, b, start, dur) => {
  const p = settle(t, start + dur, { dur });          // lands on the beat, no bounce unless allowed
  return Object.fromEntries(Object.keys(a).map((k) =>
    [k, Array.isArray(a[k]) ? a[k].map((v, i) => mix(v, b[k][i], p)) : mix(a[k], b[k], p)]));
};
```

Feet on the ground means the ankle's y is the ground line; hands on a held object means the wrist is drawn at the
object's grip point, not near it. Check both at each key pose before animating between them.

## Sound

Sound never lives in a page. In `film.html`:

```html
<section>
  <audio id="bed" src="assets/bed.mp3#t=0,30" volume="0.3" overrides='[{"fade":[1,2]}]'></audio>
</section>
<section>
  <audio id="hit1" src="assets/sfx/impact.wav" at="4.5" volume="0.8"></audio>
  <audio id="hit2" src="assets/sfx/tick.wav" at="6" volume="0.5"></audio>
</section>
```

One clip per hit, on its own track, at the beat's seconds. A hit heard inside a page at local time `t` goes at
`at + t − in` of the film. When the music or the effects do not exist yet, `npx -y @autoaiai/aicut@latest get` makes
them once the person has connected a service — say which service, rather than shipping a film with a silent sound
design.
