---
name: ai-media-quality-review
description: "Inspect generated images, video and audio before delivery using deterministic metadata, contact-sheet, black-frame and silence checks plus visual and listening review. Use to accept, reject or repair Magic Hour media outputs; it does not generate media or predict audience performance. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "magichourhq/skills"
---

# AI media quality review

## Running it in AICUT

AICUT's film is `film.html`: it cuts pages, footage, pictures and sound together on tracks. A page is a web page that
sets `window.film = { frame(t) }` and draws that moment — no framework, no build step, no composition object, no
`registerRoot`. Five shots are five pages cut together, not one page that changes scene, so each shot stays trimmable
and replaceable in Studio.

```sh
npx -y @autoaiai/aicut@latest          # the manual: the format and the commands, always current
npx -y @autoaiai/aicut@latest open .   # make this folder a film and print Studio's address
npx -y @autoaiai/aicut@latest look     # a contact sheet of the whole film, its sound, and a determinism check
npx -y @autoaiai/aicut@latest look 4.5 # one frame, full size — look at the PNG, not at the code
npx -y @autoaiai/aicut@latest render   # the MP4, beside film.html
```

Run the manual before the first film: it is authoritative for the format, and this skill is about the method above it.

Where the words below name another program's part, it becomes this:

| elsewhere | in AICUT |
|---|---|
| composition, timeline, project file | `film.html`; tracks and clips inside it |
| a scene, a sequence, a slide | a page (`pages/<name>.html`) cut onto a track |
| `useCurrentFrame()`, `interpolate()` | `frame(t)` — the picture depends only on `t`, never on state or `Date.now()` |
| a still, a screengrab | `aicut look <t>` |
| `render` / `build` / `export` | `aicut render` (the person can also export from Studio) |
| a dev server, a preview window | `aicut open` and the Studio address it prints |

Hard rules that hold whatever the method says: the picture depends only on `t`; every value in the person's prompt is
binding; look at the frames `look` writes before saying a film is done.


Review the actual downloaded file against its brief and source media. Resolve `scripts/inspect_media.py` relative to this installed skill's `SKILL.md`, not the user's project directory. Run that absolute script path when FFmpeg and FFprobe are available:

```sh
python3 /absolute/path/to/ai-media-quality-review/scripts/inspect_media.py /absolute/path/to/output.mp4 --output-dir /absolute/path/to/review
```
```
The script creates `probe.json`, `review.json` and a contact sheet, image preview or waveform. For video it also saves `first-frame.jpg` and `last-frame.jpg` from the first and final decoded frames; the contact sheet alone need not include those moments. It reports technical signals; it does not decide whether the creative result is good. A failed rerun clears an earlier `review.json` in a writable output directory before input and dependency checks. Other artifacts may remain from earlier runs; use only the artifacts listed in a newly successful report. Treat a nonzero exit or missing report as unverified, never as a clean result.
```

## Apply the acceptance criteria

Read the original request and list the few required outcomes and protected details. Inspect the generated artifacts at full size and the intended delivery size.

- **Image:** composition, crop, identity, anatomy, hands, geometry, product/character details, required text and logos, unwanted text and visible artifacts.
- **Video:** first and last frames, intended action and camera, identity/object continuity, flicker, warping, abrupt cuts, actual dimensions, frame rate, duration and audio streams.
- **Speech/music:** listen through the full export; check intelligibility, pronunciation, last word or phrase, clipping, silence, mouth timing, cut points and synchronization.

Inspect `first-frame.jpg` and `last-frame.jpg` as well as the contact sheet. A gradual fade can darken a face without crossing the black-frame threshold; an empty `black_segments` list does not rule it out. Review contact-sheet flags in context. Intentional black or silent sections are not defects. A clean diagnostic report cannot prove smooth motion, accurate lip sync, good music or a compelling result. Full-speed viewing and listening remain required for those claims.

Return a compact verdict for each requirement: pass, fail or unverified, with the observed evidence. A successful request, valid file or plausible thumbnail is not a quality pass.

When repair is authorized, identify the smallest failed requirement and return to the last accepted source. Change the relevant reference, prompt, route, interval or deterministic finishing step. Do not regenerate an accepted shot to fix captions, crop or assembly, and do not continue spending beyond the existing limit.

Deliver the accepted file and retain the review folder with it. State any unavailable playback, listening, source comparison or broad-subject validation.

## Source

Rewritten for AICUT from [`magichourhq/skills`](https://github.com/magichourhq/skills)
(MIT), skills/ai-media-quality-review/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 20 skills; this is the one its entry stands for.
