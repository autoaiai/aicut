# Recipes

Copy these, then change the words. Each is a whole file (or a whole `<section>`) and follows the rules in
[film-format.md](film-format.md).

## A title card, editable in Studio

A page with no `width`/`height` is the whole stage. Text lives in DOM elements, so the person can select it in Studio
and retype it — a headline painted into a canvas cannot be edited that way.

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  html, body { margin: 0; height: 100%; background: transparent; }
  .card { position: absolute; inset: 0; display: grid; place-content: center; gap: 28px;
          font-family: system-ui, "Noto Sans SC", sans-serif; color: #fff; text-align: center; }
  h1 { margin: 0; font-size: 132px; letter-spacing: -0.035em; line-height: 1; }
  p  { margin: 0; font-size: 44px; letter-spacing: 0.01em; opacity: 0.72; }
</style>
</head>
<body>
<div class="card">
  <h1>Aura Pods</h1>
  <p>quiet, by design</p>
</div>
<script type="module">
  const card = document.querySelector('.card');
  const clamp01 = (x) => Math.min(1, Math.max(0, x));
  const ease = (x) => 1 - Math.pow(1 - clamp01(x), 3);
  window.film = {
    duration: 4,
    ready: document.fonts.ready,
    frame(t) {
      const inn = ease(t / 0.9);                 // 0 → 1 over the first 0.9 s
      const out = 1 - ease((t - 3.2) / 0.6);     // 1 → 0 over the last 0.8 s
      card.style.opacity = String(Math.min(inn, out));
      card.style.transform = `translateY(${(1 - inn) * 28}px)`;
    },
  };
</script>
</body>
</html>
```

In `film.html`, a page without a `duration` needs `#t=0,length`; this one has `duration: 4`, so `#t=0,4` also works
and says the same thing:

```html
<section>
  <iframe src="title.html" at="0" style="left: 0; top: 0; width: 1920px; height: 1080px"></iframe>
</section>
```

## A canvas shot, driven by t

Canvas is for what DOM cannot draw. Repaint the whole frame every call and let `t` decide everything — no
`Math.random()`, no `x += v`, no loop.

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>html, body { margin: 0; height: 100%; background: #0b0b0f; }
       canvas { display: block; width: 100%; height: 100%; }</style>
</head>
<body>
<canvas id="c"></canvas>
<script type="module">
  const c = document.querySelector('#c');
  const g = c.getContext('2d', { alpha: false });
  const fit = () => {
    const dpr = devicePixelRatio || 1;
    c.width = Math.round(innerWidth * dpr);
    c.height = Math.round(innerHeight * dpr);
  };
  fit();
  addEventListener('resize', fit);
  const ease = (x) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);

  window.film = {
    duration: 5,
    frame(t) {
      const k = ease(t / 1.1);
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.fillStyle = '#0b0b0f';
      g.fillRect(0, 0, c.width, c.height);

      // a ring that draws itself, then breathes — all from t
      const r = Math.min(c.width, c.height) * (0.12 + 0.03 * Math.sin(t * 1.6));
      g.strokeStyle = 'rgba(127, 212, 255, 0.9)';
      g.lineWidth = Math.max(2, c.width * 0.004);
      g.beginPath();
      g.arc(c.width / 2, c.height / 2, r, -Math.PI / 2, -Math.PI / 2 + k * Math.PI * 2);
      g.stroke();
    },
  };
</script>
</body>
</html>
```

## Picture-in-picture, voice-over, a hit, and subtitles

The first track is on top: the title covers the footage while it is opaque, and the footage covers nothing. The
voice-over and the music sit in the last track, on film seconds. This one runs 7.5 s: the title for 4, the reel from
1.5 to 7.5, the music to the end — no clip outlasts the film and nothing is black.

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=1920, height=1080">
<style>
  .round { border-radius: 24px; object-fit: cover; }
</style>
</head>
<body>
<section>
  <iframe src="scenes/title.html" at="0" style="left: 0; top: 0; width: 1920px; height: 1080px"></iframe>
</section>
<section>
  <video id="reel" src="assets/reel.mp4#t=4,10" at="1.5" volume="0.8" class="round"
         style="left: 120px; top: 120px; width: 760px; height: 428px"></video>
</section>
<section>
  <audio id="vo1"  src="assets/vo/1.wav#t=0,6" at="1.5"></audio>
  <audio id="bed"  src="assets/bed.mp3#t=0,7.5" volume="0.28"></audio>
  <audio id="hit"  src="assets/sfx/hit.wav" at="1.5" volume="0.8"></audio>
</section>
</body>
</html>
```

- `assets/vo/1.wav` is a 6-second read; `at="1.5"` puts its first word at film second 1.5, where the reel lands.
- The hit is heard as the reel appears. If it belonged inside a page playing at local time `t = 0.4`, its film second
  would be `1.5 + 0.4 − 0 = 1.9`.
- `speed="0.5"` on the reel would halve its pace and double its length: `(10 − 4) / 0.5 = 12` seconds, so it would run
  to 13.5 — the music would have to run that long too. Change one, check the other.

Words, in the file's own seconds, beside the sound (`assets/vo/1.vtt`):

```vtt
WEBVTT

00:00:00.200 --> 00:00:02.400
A pod that disappears in your ear.

00:00:02.400 --> 00:00:05.200
<00:00:02.400>And <00:00:02.650>nothing <00:00:02.900>else.
```

Studio makes the film's subtitles from those cues. Do not draw them in a page.

## A music bed that fades under the voice

`fade` is the clip's own override entry — no `at`, so no selector:

```html
<section>
  <audio id="bed" src="assets/bed.mp3#t=8,48" at="0" volume="0.3"
         overrides='[{"fade":[1.5,2]}]'></audio>
</section>
```

`1.5` in and `2` out, seconds, ramping the gain (and the picture's opacity, for a clip that has one). Together they
may not be longer than the clip.

## The order to work in

```sh
npx -y aicut@latest open my-film          # prints Studio's address — open it
# write film.html, title.html, scenes/…
npx -y aicut@latest look                  # the whole film, one sheet
npx -y aicut@latest look 1.4-2.2          # the beat where the reel lands
npx -y aicut@latest look assets/vo/1.wav  # what the voice-over sounds like, and how loud
```

Read the sheet: is the headline inside the frame, does the reel sit where you meant, is any stretch black that
should not be, is the loudness roughly level? Fix, then look again.
