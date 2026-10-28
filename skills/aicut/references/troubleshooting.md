# When it does not work

Look first, guess second: `npx -y @autoaiai/aicut@latest look <page.html>` and `look <file>` draw what the host
actually sees, and a page's uncaught errors are reported there.

## The frame is black, or the page is blank

| What you see | What it usually is | Do |
| --- | --- | --- |
| Nothing at all, no error | `window.film` never set | Set it from a `<script type="module">`, before `load`. A syntax error in the module does this silently. |
| Half the picture | `frame` throws on some `t` | Draw without try/catch once; the host reports the throw with its line. |
| Black from a WebGL page | The buffer was cleared before capture | Create the context with `preserveDrawingBuffer: true`. |
| Text invisible | A web font that never arrived | `ready: document.fonts.load('700 64px Inter')` per face, not just `document.fonts.ready`. |
| Black where a clip should be | The clip runs past its file | A still or a page without `duration` needs `#t=0,length`; a video's `#t=in,out` must be inside its own length. |
| A track shows nothing | The track is `hidden` | Only the person changes that. Say so rather than editing it. |

## The picture changes on its own

The same `t` must draw the same picture — `look` checks it. Causes, in the order they bite:

- `Math.random()`, `Date.now()`, `performance.now()` used as a clock (the host pins them, but only while drawing).
- Accumulation across calls (`x += v`, a particle array mutated per frame). Compute from `t`, or precompute in
  `ready` and look it up.
- A CSS animation, transition or WAAPI animation left running: its progress is history.
- GSAP `to`/`from` (they record start values the first time they run): use `fromTo` with explicit ends.
- A `<video>` seeked without awaiting `seeked`, so the captured frame is the previous one.
- A library's own clock: drive it — `timeline.seek(t)`, `animation.currentTime = t * 1000`, `p5.redraw()`.

## Sound and subtitles are off

- **A hit lands early or late.** A page has no sound: the sound is a clip in `film.html`. A hit heard at page time
  `t` goes at `at + t − in` film seconds. `speed` changes the length, not the start.
- **A clip is silent.** `volume="0"`, `muted`, or its track is `muted`/`hidden`. The film's sound is its sound clips
  plus its video clips' own sound.
- **Subtitles do not appear.** The `.vtt` must sit beside the media with the same name (`assets/vo/1.wav` →
  `assets/vo/1.vtt`), in the file's own seconds, one cue per line. `1.<language>.vtt` is a translation of it.
- **Subtitles drift after a trim.** They follow the clip's `#t=in,out` and `speed`; do not retime the `.vtt` yourself.
- **Subtitles are drawn twice.** A page is drawing them. Remove that: Studio draws the film's subtitles.

## Commands

- **Exit 2, "not a project".** Run the command inside the film's folder, or name it: `open <folder>`. `look` and
  `render` work on the project around the current folder.
- **Exit 1 from `render`.** The output says why. Usually no usable `ffmpeg` on `PATH` (install one, or use the
  desktop app, which brings its own), or the film is enormous — lower `--workers`, or render a range to find it.
- **The first run hangs.** It is downloading a headless Chromium (about 100 MB). Behind a proxy, set `HTTPS_PROXY`
  for that download, or use the desktop app.
- **An old version keeps answering.** `npx` remembers the first version it fetched for a name: always run
  `npx -y @autoaiai/aicut@latest`, and `--version` to see which one answered.
- **Studio does not open.** `open` prints the address even when no browser opened by itself; open it by hand.
  `AICUT_NO_BROWSER=1` stops it from ever opening one.

## Editing a film someone else is editing

Studio writes `film.html` while the person works. Read it immediately before each change, write back only the part
you mean to change, keep every `overrides` exactly as it is, and never rewrite the whole file from memory — that
reverts what they did in the meantime.
