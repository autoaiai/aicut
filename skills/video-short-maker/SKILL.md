---
name: video-short-maker
description: "Create short clips from local video files using ffmpeg, with optional local Whisper subtitles. Use when Codex is asked to turn a long local video into a short, trim boring pauses, remove dead air, cut silence, create a 30-60 second clip, export a vertical 9:16 MP4, generate captions/subtitles, burn subtitles into a video, or generate a simple edit report. Base editing is ffmpeg-based; subtitles use local whisper.cpp and do not require an API key. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "Kappaemme-git/codex-video-short-maker-skill"
---

# Video Short Maker

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


## Overview

Use this skill to turn a local video into a shorter MP4 by detecting silence and keeping the strongest non-silent parts. The base workflow depends only on `ffmpeg` and `ffprobe`. Captions are optional and use local `whisper.cpp`.

## Workflow

1. Identify the input video path and output goal.
   - Default target duration: `45s`.
   - Default format: landscape/same aspect ratio.
   - Default quality: `high` for crisp text in screen recordings.
   - Use vertical 9:16 only when the user asks for TikTok/Reels/Shorts/vertical.
   - Use captions only when the user asks for subtitles/captions.

2. Run the bundled script:

```bash
python3 /Users/francescomistero/.codex/skills/video-short-maker/scripts/make_short.py INPUT_VIDEO --duration 45
```
```
For vertical output:
```
```bash
python3 /Users/francescomistero/.codex/skills/video-short-maker/scripts/make_short.py INPUT_VIDEO --duration 45 --vertical
```
```
For a custom output path:
```
```bash
python3 /Users/francescomistero/.codex/skills/video-short-maker/scripts/make_short.py INPUT_VIDEO --duration 45 --output ./short.mp4
```
```
For smaller files:
```
```bash
python3 /Users/francescomistero/.codex/skills/video-short-maker/scripts/make_short.py INPUT_VIDEO --duration 45 --quality small
```
```
For local captions:
```
```bash
python3 /Users/francescomistero/.codex/skills/video-short-maker/scripts/make_short.py INPUT_VIDEO --duration 45 --vertical --captions
```
```
3. Report the result succinctly:
   - output file path
   - duration target
   - number of segments kept
   - report path
   - whether vertical crop was applied
   - quality preset
   - subtitle and captioned video paths when captions were used
```

## Quality Presets

- `high`: CRF 18, slower encode, sharper text, larger file. Default.
- `balanced`: CRF 20, faster encode, good quality/size balance.
- `small`: CRF 24, smaller file, visibly more compression.

## Captions

Captions are optional and local. They do not require an API key.

When the user asks for subtitles/captions:

1. Check whether `whisper-cli` or `whisper-cpp` exists.
2. If missing, run or suggest:

```bash
python3 /Users/francescomistero/.codex/skills/video-short-maker/scripts/setup_captions.py
```
```
3. Run `make_short.py` with `--captions`.

Caption outputs:

- `*.srt`: generated subtitle file
- `*.captioned.mp4`: final video with burned-in subtitles

Burned-in captions are rendered with Python/Pillow so they work even when the local ffmpeg build does not include the `subtitles` filter.

Default caption model: `tiny.en`.

For Italian or non-English speech, use the multilingual model and language:
```
```bash
python3 /Users/francescomistero/.codex/skills/video-short-maker/scripts/setup_captions.py --model base
python3 /Users/francescomistero/.codex/skills/video-short-maker/scripts/make_short.py INPUT_VIDEO --captions --caption-model ~/.cache/video-short-maker/models/ggml-base.bin --caption-language it
```

## Editing Behavior

The script:

- detects silent ranges with ffmpeg `silencedetect`
- converts them into non-silent candidate segments
- supports `--cut-style light|normal|aggressive`
- keeps `0.5s` of silence on both sides of each cut by default in `normal`, so speech feels less abrupt
- drops very short fragments
- keeps earlier non-silent segments until the target duration is reached
- concatenates selected segments
- optionally crops/scales to 9:16
- exports H.264 MP4 with AAC audio
- optionally extracts audio, transcribes with local Whisper, writes SRT, and burns captions
- writes an edit report JSON next to the output

This is not content-aware yet. It removes dead air and compresses the video, but it does not understand the spoken content.

## Output Guidance

Keep responses short. Do not paste full ffmpeg logs unless the command fails.

Use this format:

```markdown
Created short:
`/path/to/output.short.mp4`

- Target: 45s
- Kept segments: 6
- Vertical: yes/no
- Quality: high/balanced/small
- Report: `/path/to/output.report.json`
- Subtitles: `/path/to/output.srt` if used
- Captioned video: `/path/to/output.captioned.mp4` if used
```
If the result is rough, say so plainly and suggest the next useful option:

- use `--cut-style aggressive` if it barely cut anything
- use `--cut-style light` if cuts feel too jumpy
- increase `--keep-silence` to make cuts feel softer
- increase `--duration` if context is missing
- use `--vertical` for Shorts/Reels/TikTok
- use `--quality balanced` or `--quality small` if the file is too large
- use `--captions` when subtitles are needed
```

## Source

Rewritten for AICUT from [`Kappaemme-git/codex-video-short-maker-skill`](https://github.com/Kappaemme-git/codex-video-short-maker-skill)
(MIT), video-short-maker/SKILL.md. The method is that skill's own; the way it runs is AICUT's.
