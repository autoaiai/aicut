---
name: explainer-video
description: "Explainer Video Skill: the method the original skill taught, run as an AICUT film — pages that draw any moment t, cut on tracks. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "Mng-dev-ai/explainer-video"
---

# Explainer Video Skill

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


End-to-end pipeline: **topic → custom HTML page (you write) → MP4**.

Each video gets its own visual language designed around its topic. A CRISPR video shouldn't look like a quantum computing video shouldn't look like a supply chain video. Design something fresh every time; the skill handles the plumbing.

## Pipeline

```
1. Claude writes the narration script
2. Claude writes a complete custom HTML page (with GSAP animations)
3. Pipeline generates voiceover via Edge TTS (free, no API key)
4. Pipeline measures audio duration and injects it into the page
5. Page reads window.__AUDIO_DURATION and scales scene timing
6. Pipeline records the page playback via headless Chromium
7. Pipeline merges the recorded video + voiceover MP3 into final MP4
```

## How Claude should invoke this skill

### Step 1 — Clarify

Briefly ask the user for: topic, length (60-90s default), voice (`brian` default), and any tone notes. Don't over-ask — sensible defaults are fine.

### Step 2 — Write the script

150–220 words for 60–90s. TTS-friendly:
- Numbers as words ("three hundred", not "300")
- Em dashes (—) and ellipses (...) for natural pauses
- Short sentences; vocal variety
- Save it to `<workdir>/script.txt`

### Step 3 — Write a custom HTML page

Save to `<workdir>/page.html`. The HTML must satisfy this **contract**:

1. **Viewport: 1280×720.** Set html/body width/height explicitly.
2. **Load GSAP:** `<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>`
3. **Read `window.__AUDIO_DURATION`** (seconds, float) — the pipeline injects this before the page runs. Use it to scale your animation timing so visuals stay synced to the voiceover.
4. **Set `window.__done = true`** when your animation finishes. The pipeline waits for this flag.
5. **No external network requests** other than the jsdelivr GSAP CDN — pipeline runs headless and won't have arbitrary network.

Everything else is up to you: design language, animation style, scene structure, palette, typography, illustrations, motion. Build what fits the topic.

See `examples/quantum.html` for one reference implementation. Don't copy it — design something fresh for the new topic.

### Step 4 — Run the pipeline

From this skill's directory:

```bash
node lib/pipeline.js \
  --html /path/to/page.html \
  --script /path/to/script.txt \
  --voice brian \
  --out /path/to/output.mp4
```
```
Or with a single config JSON:
```
```json
{
  "title": "My Explainer",
  "voice": "brian",
  "script": "Full narration...",
  "html": "/abs/path/to/page.html"
}
```
Run with `--config /path/to/config.json --out output.mp4`.

**Audio caching.** Voiceover MP3s are cached by `sha256(voice + script)` at `~/.cache/explainer-video/voice/<hash>.mp3`. Re-running with the same script + voice reuses the cached MP3 (faster startup). Iterate freely on visuals.

To reuse a specific audio file (e.g. one you generated externally), pass `--audio path/to.mp3` and TTS is skipped entirely.
```

### Step 5 — Report

Give the user the output path. Offer to iterate on script, voice, or visual design.

## Voices

Friendly names map to Azure neural voices via Edge TTS:

`brian` (calm documentary) · `adam` (deep authoritative) · `rachel` (warm friendly) · `sarah` (confident modern) · `antoni` (younger energetic) · `emma` · `ryan` (British) · `sonia` (British)

You can also pass any Azure neural voice ID directly (e.g. `en-GB-RyanNeural`, `en-AU-NatashaNeural`, `es-ES-ElviraNeural`).

## Design tips for the HTML you write

- **Match the topic's emotional register.** Quantum → cosmic, mysterious. CRISPR → biological, precise. History → editorial, restrained. Climate → urgent, grounded.
- **Use GSAP timelines** to coordinate entrance/exit/hold for each scene.
- **Kinetic typography** (word-by-word stagger, character splits) reads well at 1280×720.
- **Time the animation to AUDIO_DURATION.** If you have 5 scenes, distribute proportionally to script segments — not equal slices.
- **Avoid arbitrary stock-feel motion.** Make every animation reinforce a specific idea from the narration.
- **Flat colors render well.** Heavy gradients/glows can flash during the headless capture.
- **Keep CSS animations smooth** — Playwright records at ~25fps.

## Gotchas

- The pipeline injects `<script>window.__AUDIO_DURATION=…</script>` just before `</head>`. Make sure your page has a `</head>` tag.
- If your animation never sets `window.__done = true`, the pipeline will timeout after `audioDur + 30s`.
- Render time ≈ realtime (60s of video takes ~60s to record).

## Source

Rewritten for AICUT from [`Mng-dev-ai/explainer-video`](https://github.com/Mng-dev-ai/explainer-video)
(MIT), SKILL.md. The method is that skill's own; the way it runs is AICUT's.
