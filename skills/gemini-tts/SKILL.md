---
name: gemini-tts
description: "Generate speech from text using Google Gemini TTS. Use when creating voiceovers, narration, podcasts, or any text-to-speech task. Supports 70+ languages, style/emotion control via natural language prompts, and 30 prebuilt voices. Trigger on \"Gemini TTS\", \"Google TTS\", \"voiceover\", \"narration\", \"text to speech\", \"speech generation\". Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "memex-lab/product-launch-video-skill"
---

# Gemini Text-to-Speech

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


Generate natural, expressive speech from text using Google Gemini TTS. Supports 70+ languages, 30 prebuilt voices, and style control via natural language prompts and audio tags.

> **Requirements:** Node.js 18+, ffmpeg, `@google/genai` npm package, `GEMINI_API_KEY` env var.

## Available Scripts

- **`scripts/generate-tts.mjs`** — All-in-one TTS generator with single-request consistency, silence-based splitting, and automatic trimming.

## Quick Start

### Single text to speech

```bash
GEMINI_API_KEY=your-key node scripts/generate-tts.mjs \
  --text "Hello, welcome to our product!" \
  --output-dir public/vo \
  --voice Kore
```

### Multi-segment voiceover (consistent voice)

Create a `segments.json`:

```json
[
  { "id": "intro", "text": "Welcome to our product launch." },
  { "id": "features", "text": "Here are the three features you will love." },
  { "id": "close", "text": "Get started today at our website." }
]
```
Run:
```
```bash
GEMINI_API_KEY=your-key node scripts/generate-tts.mjs \
  --segments segments.json \
  --output-dir public/vo \
  --voice Kore \
  --director-notes "Tone: Warm, confident, inspiring. Style: Professional narrator with a vocal smile. Accent: Neutral American English. Pacing: Moderate."
```
```
Output (JSON to stdout):
```
```json
{
  "success": true,
  "segments": [
    { "id": "intro", "file": "public/vo/vo-intro.mp3", "duration": 3.25 },
    { "id": "features", "file": "public/vo/vo-features.mp3", "duration": 4.10 },
    { "id": "close", "file": "public/vo/vo-close.mp3", "duration": 2.80 }
  ],
  "totalDuration": 10.15,
  "fullAudioFile": "public/vo/vo-full.wav"
}

### Script Options

| Flag | Default | Description |
|------|---------|-------------|
| `--segments FILE` | — | JSON file with `[{id, text}]` segment definitions |
| `--text TEXT` | — | Single text to generate (alternative to `--segments`) |
| `--output-dir DIR` | — | Output directory for audio files (required) |
| `--voice NAME` | `Kore` | Prebuilt voice name (see Voices table) |
| `--model NAME` | `gemini-3.1-flash-tts-preview` | Gemini TTS model ID |
| `--director-notes TEXT` | — | Performance guidance: style, pacing, accent, breathing, articulation. Does not control gender/age (use `--voice` for that). |
| `--retries N` | `3` | Max retry attempts for API errors |
| `--trim` / `--no-trim` | `--trim` | Trim silence from segment boundaries |
| `--format FORMAT` | `mp3` | Output format: `mp3` or `wav` |

### Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | Missing required arguments or env vars |
| 2 | API error after retries exhausted |
| 3 | ffmpeg not installed or processing failed |
| 4 | File I/O error |

## How It Works (Multi-Segment)

Gemini TTS does NOT guarantee voice consistency across separate API requests. The script solves this by:

1. Combining all segments into ONE prompt with `[3 second pause]` markers between them
2. Generating a single continuous audio file in one API call
3. Detecting silence gaps with ffmpeg `silencedetect` using adaptive thresholds (starts at noise=-35dB, d=1.5s, progressively relaxes). If an exact match is found, uses it directly. If a threshold jump occurs (too few → too many), regenerates audio with faster speech pacing to make inter-segment pauses more distinct, then retries detection.
4. Splitting at silence midpoints into individual segment files
5. Trimming residual silence padding (~1.5s per side) from each segment, keeping 0.15s breathing room

## Models

| Model | Best For |
|-------|----------|
| `gemini-3.1-flash-tts-preview` | Latest, most controllable, 200+ audio tags (default) |
| `gemini-2.5-flash-preview-tts` | Fast, good quality, general use |
| `gemini-2.5-pro-preview-tts` | Highest quality, complex performances |

## Voices

30 prebuilt voices:

| Voice | Gender | Character | Pitch |
|-------|--------|-----------|-------|
| Achernar | Female | Soft | Higher |
| Achird | Male | Friendly | Lower middle |
| Algenib | Male | Gravelly | Lower |
| Algieba | Male | Smooth | Lower |
| Alnilam | Male | Firm | Lower middle |
| Aoede | Female | Breezy | Middle |
| Autonoe | Female | Bright | Middle |
| Callirrhoe | Female | Easy-going | Middle |
| Charon | Male | Informative | Lower |
| Despina | Female | Smooth | Middle |
| Enceladus | Male | Breathy | Lower |
| Erinome | Female | Clear | Middle |
| Fenrir | Male | Excitable | Lower middle |
| Gacrux | Female | Mature | Middle |
| Iapetus | Male | Clear | Lower middle |
| Kore | Female | Firm | Middle |
| Laomedeia | Female | Upbeat | Higher |
| Leda | Female | Youthful | Higher |
| Orus | Male | Firm | Lower middle |
| Puck | Male | Upbeat | Middle |
| Pulcherrima | Male | Forward | Middle |
| Rasalgethi | Male | Informative | Middle |
| Sadachbia | Male | Lively | Lower |
| Sadaltager | Male | Knowledgeable | Middle |
| Schedar | Male | Even | Lower middle |
| Sulafat | Female | Warm | Middle |
| Umbriel | Male | Easy-going | Lower middle |
| Vindemiatrix | Female | Gentle | Middle |
| Zephyr | Female | Bright | Higher |
| Zubenelgenubi | Male | Casual | Lower middle |

## Director's Notes (`--director-notes`)

Performance guidance for the selected voice. Define only what matters — overspecifying limits the model's creativity and can worsen results.

The three most common directions are Style, Pacing, and Accent, but you can include any custom instructions relevant to the performance.

- **Style** — Emotional quality and delivery character. Be descriptive: `"Infectious enthusiasm — the listener should feel part of something exciting"` works better than just `"energetic"`. You can layer characteristics and use voiceover industry terms like "vocal smile".
- **Pacing** — Overall speed and rhythm variation. Can range from `"Speak as fast as possible"` to `"Incredibly slow and liquid, words bleed into each other, zero urgency"`.
- **Accent** — Be specific. `"British English as heard in Croydon, England"` works much better than `"British accent"`.

```bash
--director-notes "Style: Enthusiastic and sassy GenZ beauty YouTuber. Pacing: Extremely fast, rapid delivery like short-form video influencers. Accent: Southern California valley girl from Laguna Beach."
```

## Audio Tags

Inline `[brackets]` in segment text for per-word control. Override director-notes locally.

`[whispers]` `[shouting]` `[excited]` `[serious]` `[short pause]` `[laughs]` `[very fast]` `[very slow]` `[sarcastic]` `[curious]`

Creative tags work too: `[like dracula]`, `[whispering conspiratorially]`

Example: `"[excited] This changes everything! [short pause] Let me show you how."`

## References

- [Prompting Guide](references/prompting-guide.md) — Advanced prompt engineering for style, emotion, and accent

## Source

Rewritten for AICUT from [`memex-lab/product-launch-video-skill`](https://github.com/memex-lab/product-launch-video-skill)
(MIT), skills/gemini-tts/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 2 skills; this is the one its entry stands for.
