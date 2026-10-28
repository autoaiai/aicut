---
name: aicut
description: Make, edit, check and render videos with AICUT, where a film is a web page that draws any moment t. Use when the user asks for a video, launch film, explainer, motion graphics, animation, title sequence, music video or subtitles; to cut footage, pictures, voice-over, music and sound effects together; or to open AICUT Studio. Also for 做视频, 剪辑, 渲染, 动效, 字幕.
license: MIT
---

# AICUT

A film is `film.html`: it cuts animated web pages, footage, pictures and sound together on tracks. A page is a web
page that sets `window.film = { frame(t) }` and draws that moment. Nothing else — no framework, no build step: an
agent that knows the web already knows how to make one.

## Read the manual first

`aicut` prints its own manual: the format and the commands, about a thousand words, always the current version.

```sh
npx -y @autoaiai/aicut@latest
```

Run it before writing a film; `npx -y @autoaiai/aicut@latest <command> --help` has one command's options. That manual
is authoritative — what follows is the workflow around it.

## The loop

1. **Open.** `npx -y @autoaiai/aicut@latest open <folder>` makes the folder a film (1920×1080, no tracks), opens it
   in the person's browser, and prints Studio's address. That page is the one the person watches every change land
   on and edits too: leave it alone, and open the address only if you have a browser of your own
   (`AICUT_NO_BROWSER=1` opens none — the address is yours then). A machine without the AICUT app installed is not
   broken — the browser is the whole editor; only when the person asks for the desktop app, offer
   `npx -y @autoaiai/aicut@latest app --download` and run it after they say yes.
2. **Write.** `film.html` for the cut, one page per shot.
3. **Check.** `npx -y @autoaiai/aicut@latest look` draws a contact sheet of the whole film, its sound and loudness, and
   checks that the same `t` draws the same picture. `look 4.5` is one frame at full size, `look 3-6` a stretch,
   `look assets/a.mp4` a media file. Look at the PNGs it writes; do not judge from the code.
4. **Fix, repeat.** `render` only when the person asks for the file — they export from Studio themselves.

Five shots are five pages cut together, not one page that changes scene: the person can then trim, reorder and
replace each shot in Studio.

## Hard rules

- **The picture depends only on `t`.** Same `t`, same picture: no `Math.random()`, no `Date.now()`, no state carried
  between calls, no animation loop, no autoplay. A page never animates by itself; the host calls `frame(t)`.
- **Subtitles are never drawn in a page.** A sound or a video gets a WebVTT beside it with the same name
  (`vo/1.wav` → `vo/1.vtt`); Studio makes the film's subtitles from those.
- **Never cut, crop or re-encode media into new files.** A long recording is trimmed with `#t=in,out` on every clip
  of it; CSS crops and scales.
- **Sounds live in `film.html`, as clips.** A page has no sound. To place a hit heard at page time `t` inside a clip
  that starts at `at` with in-point `in`: put it at `at + t - in` seconds of the film.
- **The person is editing too.** Read `film.html` right before changing it, change only what you mean to, keep every
  `overrides` as it is, and leave whatever the tools own (`.film/`, `.git/`, any dot directory) alone. Change nothing
  on a track marked `locked`.
- **Make what the person may change a DOM element.** Studio edits elements, not pixels: a headline belongs in an
  `<h1>`, not painted into a canvas. A WebGL context needs `preserveDrawingBuffer: true`.
- **Only what the film can use stays in `assets/`.** Delete the pieces you made the media from.

## What is where

- `references/film-format.md` — `film.html` and page rules on one page, when you want them in front of you.
- `references/commands.md` — the five commands, their options, where output goes, what an exit code means.
- `references/recipes.md` — snippets to copy: a title card, a canvas shot, picture-in-picture with voice-over and
  subtitles, a music bed with a hit.
- `references/troubleshooting.md` — a blank frame, a picture that changes on its own, a missing encoder.

## Before you say it is done

- `look` the whole film and read the sheet: framing, text fitting its box, nothing black where a picture should be.
- The film plays the length the person asked for, with sound where they asked for it.
- Say which files you made and what is in them; ask before rendering, unless they already asked for the MP4.
