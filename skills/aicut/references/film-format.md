# The format, on one page

The summary below is for having the rules in front of you. When it disagrees with `npx -y @autoaiai/aicut@latest` (the manual)
or `packages/AiCut/SPEC.md` (the protocol, version 0.1), those are right.

## The project

| Path | What it is |
| --- | --- |
| `film.html` | The film: which clip plays when and where. The person edits it; read it before changing it. |
| `*.html` | Pages: one per shot, each loading what it needs by relative path. |
| `compound-<id>.html` | A packed page: clips the person packed into one, a film of its own. Text in `#film-source` (see below). |
| `assets/` | Media (video, pictures, sound). Only what the film can use. |
| `.film/`, `.git/`, dot files | The tools' own. Leave them alone. |

A project made from a template starts with its pages written (`pages/*.html`) and placed in film.html; a design-style
template also brings the `aicut-motion` skill into `.pi/skills/` — read it before adding motion.

## film.html

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=1920, height=1080">
<style>.card { object-fit: cover; border-radius: 24px; }</style>
</head>
<body>
<section>
  <iframe src="title.html" style="left: 0; top: 0; width: 1920px; height: 1080px"></iframe>
</section>
<section>
  <video src="assets/a.mp4#t=2,8" at="2" speed="0.5" volume="0.8" class="card"
         style="left: 160px; top: 90px; width: 1600px; height: 700px"></video>
</section>
<section>
  <audio src="assets/bed.mp3#t=0,14" volume="0.5"></audio>
</section>
</body>
</html>
```

- The stage is the viewport's size in CSS pixels; without a `<meta name="viewport">`, 1920 × 1080. The head holds
  styles and fonts and **no script**.
- Each `<section>` is a track. The first is on top (titles before the footage they cover, background last). A track
  has no kind; any clip goes on any track. Clips on one track never overlap — overlapping pictures go on different
  tracks.
- A track may be `hidden` (no picture, no sound), `muted` (no sound) or `locked` (the person's: change nothing on it).
- A clip is one element and holds nothing: `<iframe>` a page, `<video>`, `<img>` a still, `<audio>` a sound.

| Attribute | On | Meaning |
| --- | --- | --- |
| `src` | all | The file, relative to `film.html`. `#t=in,out` in the file's own seconds; `#t=in` to its end; nothing, all of it. A still, or a page without `duration`, **must** have `#t=0,length`. |
| `id` | all | Unique in the film; without one, the file's name. |
| `at` | all | The film second it starts at (default 0). |
| `speed` | video, sound | 0.25–4, pitch kept. The clip lasts `(out − in) / speed`. |
| `volume` | video, sound | Linear gain, 1 = the file's own level; `muted` = 0. |
| `size` | page | `size="1920x1080"`: the pixels a page without its own `width`/`height` is laid out at (default: the stage). An editor writes it when the frame changes shape; keep it. |
| `overrides` | all | The person's Studio changes, JSON. Keep as it is. |

- **Placement is only** `left`, `top`, `width`, `height` (stage px) and `rotate` (degrees, clockwise about the center),
  in the clip's `style`. `position`, `transform`, `margin` and the like on a clip are an error — the host places the
  clip itself.
- With only one of `width`/`height`, the other follows the picture's proportions. A video or still fills its box as
  its CSS says (`object-fit: contain` unless the film says otherwise); without a box it is the stage. A page is
  fitted whole inside its box, centered; without a box it is its own size, centered.
- Look is CSS: `class`, the rest of `style` (`border-radius`, `clip-path`, `mask`, `filter`, `opacity`,
  `mix-blend-mode`), and the film's `<style>`. **The film's CSS has no time** — what moves is a page.
- `overrides` entries: `at` (a CSS selector, page clips only) with optional `n` (which match, from 1), `t` (translate
  px), `s` (scale), `r` (rotate degrees), `style` (CSS, applied with priority), `text` (replaces the element's text),
  `lock` (true: not selectable or movable; changes no pixels). One entry without `at`, on any clip, is the clip's own:
  `{"fade": [in, out]}` in seconds — the picture's opacity and the sound's gain ramp 0→1 and 1→0.
- Times are seconds to the millisecond; a host rounds each to three decimals. Read strictly: a misspelled attribute
  is reported, not ignored.
- A page clip is drawn at the page's local time `in + (t − at)`; past the page's `duration` it holds its last frame.

## A compound page

The person can select picture clips and pack them into one (Studio's 新建复合片段). Studio writes
`compound-<id>.html` beside film.html: a film of its own, held by film.html as a single page clip.

- **Read it through `#film-source`**: a JSON *string* holding the film text — parse the string, then read that text as
  film.html. The body's `<script type="module" src="__film/timeline.mjs">` plays it and is not part of the film; the
  body is not readable as film.html.
- **Its time is its own.** Inside the compound `at` starts at 0; the clip in film.html says when it plays and for how
  long. Trim, move and scale it there.
- **Packing and unpacking are the person's.** Studio puts the clips back on the film's tracks. Never split a compound
  by hand unless asked, and never delete one — an undo may want it.

## A page

```js
window.film = {
  frame(t) { /* draw the whole picture at t seconds; may return a Promise */ },
  duration: 12,                 // optional: its own length; without it, like a still
  ready: loadEverything(),      // optional: Promise (or a function returning one) — frame is called after it
  width: 480, height: 320,      // optional: a page that is part of the picture; without them, the stage
};
```

- Set `window.film` before `load` (a module script does that).
- **One rule: the picture depends only on `t`.** Repaint everything each call; never accumulate (`x += v`) across
  calls. History (a trail, a physics run) is computed from `t` or precomputed during `ready`.
- The host holds the page's clocks at `t` while it draws: `performance.now()`, `requestAnimationFrame` timestamps,
  `Date`, CSS/Web Animations the page left running, and `Math.random` (seeded from `t`) all agree with it. Timers and
  history do not — do not use them.
- Libraries that run their own clock are driven by `t`: `timeline.seek(t)`, `animation.currentTime = t * 1000`,
  `p5.redraw()`, `renderer.render(scene, camera)`.
- Tweens that capture their start value the first time they run (GSAP `to`/`from`) depend on draw order: use
  explicit start and end values (`fromTo`).
- Lay the page out for `innerWidth × innerHeight`. A canvas should allocate
  `innerWidth * devicePixelRatio` pixels.
- WebGL: create the context with `preserveDrawingBuffer: true`.
- Load web fonts per face (`document.fonts.load('700 64px …')`), not just `document.fonts.ready`.
- A page opened as a plain web page has no `window.filmHost` and should play itself:
  `if (!window.filmHost) { … requestAnimationFrame loop … }`. Optional, and it makes every film a page that just works.

## Sound

- A page has **no sound**. Every sound is a clip: an `<audio>`, or a `<video>`'s own sound.
- A sound that belongs to a shot is placed at the film second the shot plays it. A hit heard at page time `t` in a
  clip that starts at `at` with in-point `in` goes at **`at + t − in`**. Moving the page clip does not move it —
  move them together.
- The clip is silent when its `volume` is 0, or its track is `muted` or `hidden`.
- Beat, onset and word timings are data, not API: precompute them into files the page reads during `ready`.

## Words

- What a sound or video says is a WebVTT beside it with the same name: `assets/vo/1.wav` → `assets/vo/1.vtt`, in the
  file's own seconds. One cue per subtitle line; timestamp tags inside a cue time its words.
- Translations sit beside it as `1.<language>.vtt`, the same lines at the same times.
- A file starting with `NOTE Each cue is one subtitle, as cut by hand in AICUT Studio.` keeps its cues exactly as
  they are.
- **Never draw subtitles in a page.** Studio draws the film's subtitles from the clips that can be heard, placed by
  their `at`, `#t=` and `speed`.
