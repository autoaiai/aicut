---
name: video-assemble
description: "video-assemble: the method the original skill taught, run as an AICUT film — pages that draw any moment t, cut on tracks. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "ops120/video-recap-skills-plus"
---

# video-assemble

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


## What this does

1. Mixes the narration audio segments onto the source video at their placed times.
2. **Ducks** the original audio under narration (fixed / sidechain / zone modes).
3. Renders **subtitles** from the narration placement → `subtitles.srt` (+ `subtitles.ass`
   when burning, which is **on by default**; `--no-burn-subtitles` to disable).
4. Optional final **loudness normalization** to a target LUFS.

## Input contract

- `<video>` — the source video (the original, or `edited_source.mp4` in cut mode).
- `work_dir/tts_meta.json` — `{segments: [...]}` from **video-voiceover** (each segment carries
  `audio_path`, timing, `pause_after_ms`, and `overlaps_speech`/placement used for ducking + subtitles).

> **Running the scripts below** — the `scripts/…` paths are relative to this skill's own directory (the folder containing this `SKILL.md`). Claude Code runs commands from there, so they work as written. If your harness runs commands from the project root instead (opencode / Codex / OpenClaw commonly do), prefix this skill's absolute directory — e.g. `<skill-dir>/scripts/…`, using the directory your harness reports when it loads the skill. The scripts self-locate from their own path, so once started by the correct path they resolve their sibling skills and assets regardless of the working directory.

## Run

```bash
python3 scripts/assemble.py <video> --work-dir <work_dir> \
  [--recap-stem <name>] [--output-dir <dir>] [--no-burn-subtitles]
  [--source-video <orig.mp4>] [--export-jianying [--jianying-out <dir>]]
```

## Output contract

- `recap_<stem>.mp4` — the final recap video (written to `--output-dir` or `work_dir`'s parent). It is the stable output alias, overwritten in place on every run so iterating on the narration refreshes the same file.
- `work_dir/output.mp4` — the in-place render.
- `subtitles.srt` — narration subtitles; `subtitles.ass` when burning subtitles (on by default).
- `timeline.json` — backend-neutral multi-track model (video / original-audio / narration / BGM / subtitle tracks with ducking automation). Always written.
- `assembly_manifest.json` — a slim render record: the input/source paths, the cut-mode source fingerprint (proving a stale ambient `SOURCE_VIDEO` did not leak into a full-mode export), the render settings, and the final output path.
- 剪映 draft folder (`recap_<stem>/draft_content.json` + `draft_info.json` + `draft_meta_info.json`) — only with `--export-jianying`.

## Notes
- Audio is mixed as tracks (like a cut-software timeline): the original audio, an optional BGM bed, and the narration.
- Optional 剪映/JianYing export: `--export-jianying` (or `EXPORT_JIANYING=1`) turns `timeline.json` into an editable 剪映 draft — original clips, separate audio tracks, and volume keyframes for the ducking. Fully decoupled and lazy-imported: the ffmpeg render never depends on it, and 剪映 need not be installed. In cut mode pass `--source-video <orig>` so the draft references the real clips. Point `--jianying-out` at 剪映's drafts root to open it in-app. If a draft folder with the same name already has files, export writes a numbered sibling instead of overwriting it. Media is bundled into the draft folder by default (`--jianying-no-bundle-media` to reference in place) — this is **required on macOS**, where 剪映 is sandboxed and cannot read external paths. Note: the draft references the un-burned original, so the source's hardcoded subtitles are visible there (mask them in 剪映 if needed).
- Subtitle look: `SUBTITLE_FONT_SIZE`, `SUBTITLE_MARGIN_V`, `SUBTITLE_MAX_CHARS`, etc.
- Ducking / loudness: the original swells to `IDLE_ORIG_VOLUME` in the gaps and ducks to `SPEECH_DUCKING_VOLUME` under narration (`DUCK_FADE_SECONDS` smooths the transition); also `DUCKING_MODE`, `ZONE_DUCKING_VOLUME`, `FINAL_LOUDNORM`, `TARGET_LUFS`.
- BGM (optional): set `BGM_PATH` to any audio file; it loops to length and ducks under narration (`BGM_VOLUME` / `BGM_DUCKING_VOLUME`).
- Burning subtitles requires an ffmpeg with `subtitles`/libass support; assemble (and the
  recap orchestrator) preflight this and fail fast with a clear message if it is missing.
- During original-audio blocks (the narration gaps), the original dialogue is also burned as
  subtitles so the band is never blank while the original speaks — wrapped in `「」` to set it apart
  from narration (`SUBTITLE_ORIGINAL_IN_GAPS`, default on). Preferred source is the agent-calibrated
  `original_subtitles.json` (OUTPUT-time `[{start,end,text}]`); without it, a conservative auto-ASR
  mapping is used (cut mode remaps ASR source→output via the clip plan, assigns each line to the one
  gap it lands in, and skips lines too dense to read).

## What this skill does NOT do
- Does NOT generate narration or synthesize TTS.
- Does NOT re-transcribe or alter timing decisions — it consumes placement from tts_meta.json.
- Burning subtitles is **on by default** (`--no-burn-subtitles` to turn it off); when on, it
  re-encodes the video to draw the subtitle band.

## Source

Rewritten for AICUT from [`ops120/video-recap-skills-plus`](https://github.com/ops120/video-recap-skills-plus)
(MIT), skills/video-assemble/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 6 skills; this is the one its entry stands for.
