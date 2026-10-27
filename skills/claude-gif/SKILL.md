---
name: claude-gif
description: "claude-gif -- The Ultimate GIF Creator: the method the original skill taught, run as an AICUT film — pages that draw any moment t, cut on tracks. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "AgriciDaniel/claude-gif"
---

# claude-gif -- The Ultimate GIF Creator

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


Orchestrates five sub-skills to create, generate, convert, optimize, and edit GIFs.
Every path from concept to final optimized GIF runs through this skill.

## Quick Reference

| Command | Description | Sub-Skill |
|---------|-------------|-----------|
| `/gif create <idea>` | Programmatic animation via Remotion (text, spinners, memes, motion graphics) | claude-gif-create |
| `/gif generate <prompt>` | AI video generation via Veo 3.1, then convert to GIF | claude-gif-generate |
| `/gif convert <path>` | Convert video, image sequence, or animated SVG to GIF | claude-gif-convert |
| `/gif optimize <path>` | Reduce GIF file size for a target platform | claude-gif-optimize |
| `/gif edit <path>` | Modify an existing GIF (speed, reverse, crop, text, trim) | claude-gif-edit |
| `/gif setup` | Install/verify all dependencies | (setup.sh) |
| `/gif <idea>` | Auto-detect best approach from description | (orchestrator routes) |

## Orchestration Logic

When the user invokes `/gif`, determine intent and route to the correct sub-skill.

### Intent Detection

1. **Has a file path to a video/image/SVG?** --> `/gif convert`
2. **Has a file path to an existing GIF?**
   - Mentions size, compress, platform fit --> `/gif optimize`
   - Mentions speed, reverse, crop, text, trim --> `/gif edit`
3. **Describes a text animation, spinner, counter, meme, logo animation, progress bar?** --> `/gif create`
4. **Describes realistic/cinematic motion, product demo, abstract art, nature scene?** --> `/gif generate`
5. **Ambiguous description of something to animate?**
   - If it involves text, geometric shapes, UI elements --> `/gif create` (Remotion)
   - If it involves photorealistic subjects, complex motion --> `/gif generate` (Veo)
6. **Mentions "optimize", "compress", "reduce", "fit", platform name?** --> `/gif optimize`
7. **Mentions "edit", "speed", "reverse", "crop", "text overlay"?** --> `/gif edit`
8. **Says "setup" or "install"?** --> Run `bash ~/.claude/skills/claude-gif/scripts/setup.sh`

### Routing Commands

```
/gif create "bouncing hello world text"      --> claude-gif-create
/gif generate "campfire flickering at night"  --> claude-gif-generate
/gif convert ~/Videos/clip.mp4               --> claude-gif-convert
/gif convert ~/Design/logo.svg               --> claude-gif-convert (Mode D: SVG)
/gif optimize ~/Documents/gif_output/big.gif --> claude-gif-optimize
/gif edit ~/Documents/gif_output/clip.gif    --> claude-gif-edit
/gif setup                                   --> scripts/setup.sh
```

### Bare `/gif <description>` Routing

When no explicit sub-command is given, analyze the description:
- Keywords "text", "spinner", "loading", "counter", "meme", "typewriter", "logo reveal", "progress" --> create
- Keywords "realistic", "cinematic", "product", "nature", "abstract", "person", "animal" --> generate
- A file path to .mp4/.webm/.mov/.avi/.mkv/.svg --> convert
- A file path to .gif + size/platform keywords --> optimize
- A file path to .gif + edit keywords --> edit

## Quality Presets

| Preset | Width | FPS | Colors | Dither | Max Size | Best For |
|--------|-------|-----|--------|--------|----------|----------|
| `discord` | 320px | 10 | 128 | bayer:3 | 256 KB | Discord inline embeds |
| `slack` | 400px | 12 | 192 | floyd_steinberg | 500 KB | Slack messages |
| `twitter` | 480px | 15 | 256 | floyd_steinberg | 15 MB | Twitter/X posts |
| `web` | 480px | 15 | 256 | floyd_steinberg | 2 MB | General web usage |
| `hq` | 640px | 20 | 256 | sierra2 | 10 MB | High-quality display |

## Safety Rules

1. **No-overwrite**: Always pass `-n` to FFmpeg (skip if output exists). Only pass `-y` when user explicitly says overwrite.
2. **Source protection**: NEVER write output to the same path as input. Preflight catches this.
3. **Cost confirmation**: Veo generation costs money. Always confirm with user before calling generate.py.
4. **Temp isolation**: All intermediate files go in `/tmp/claude-gif/`. Clean up on completion.
5. **Output directory**: Final GIFs go to `~/Documents/gif_output/` unless user specifies a different path.
6. **Preflight check**: Run `bash ~/.claude/skills/claude-gif/scripts/preflight.sh <input> <output>` before any file write.

## Multi-Step Pipelines

Complex requests may chain sub-skills:

```
generate --> convert --> optimize
  (Veo)    (to GIF)   (for Discord)

create --> optimize
(Remotion)  (shrink)

convert --> edit --> optimize
(video)   (trim)   (platform)

convert (SVG) --> optimize
  (Playwright)    (for web)
```
```
Always plan the full pipeline before starting. Tell the user the steps.
```

## Pre-Flight

Before ANY write operation:
```bash
bash ~/.claude/skills/claude-gif/scripts/preflight.sh <input_file> <output_file>
```
```
On `/gif setup` or first use:
```
```bash
bash ~/.claude/skills/claude-gif/scripts/check_deps.sh
```
```
If dependencies are missing:
```
```bash
bash ~/.claude/skills/claude-gif/scripts/setup.sh
```

## Reference Files

Load on demand -- only read the reference relevant to the current task:

| Reference | Path | When to Load |
|-----------|------|-------------|
| GIF Optimization | `~/.claude/skills/claude-gif/references/gif-optimization.md` | Before optimize, or choosing palette/dither settings |
| Platform Specs | `~/.claude/skills/claude-gif/references/platform-specs.md` | When targeting a specific platform |
| Remotion Patterns | `~/.claude/skills/claude-gif/references/remotion-gif.md` | Before writing Remotion components |
| Prompt Engineering | `~/.claude/skills/claude-gif/references/prompt-engineering.md` | Before constructing Veo prompts |
| Perfect Loops | `~/.claude/skills/claude-gif/references/perfect-loops.md` | When making seamless loops |

## Scripts

| Script | Path | Purpose |
|--------|------|---------|
| `setup.sh` | `scripts/setup.sh` | Install and verify all dependencies |
| `check_deps.sh` | `scripts/check_deps.sh` | Check dependency status (JSON, no installs) |
| `preflight.sh` | `scripts/preflight.sh` | Safety check before writes (input/output validation) |
| `gif_convert.sh` | `scripts/gif_convert.sh` | FFmpeg two-pass palette video-to-GIF conversion |
| `gif_optimize.py` | `scripts/gif_optimize.py` | Multi-strategy GIF size optimizer (Python) |
| `gif_loop.py` | `scripts/gif_loop.py` | Perfect loop creator: crossfade, ping-pong, freeze blend (Python) |
| `gif_frames.py` | `scripts/gif_frames.py` | Assemble PNG/JPEG frames into optimized GIF (Python) |

All scripts are in `~/.claude/skills/claude-gif/scripts/`.
Python scripts use `~/.video-skill/bin/python3` (venv with Pillow, numpy).

## Sub-Skills

| Sub-Skill | When to Use |
|-----------|-------------|
| `claude-gif-create` | Programmatic animations: text, spinners, counters, memes, logos, progress bars, motion graphics. Uses Remotion (React + Node.js). |
| `claude-gif-generate` | AI-generated motion: cinematic loops, product demos, abstract art, realistic subjects. Uses Veo 3.1 (costs money). |
| `claude-gif-convert` | File conversion: video to GIF, image sequence to GIF, AI image sequence to GIF, animated SVG to transparent GIF. |
| `claude-gif-optimize` | Size reduction: platform auto-fit, lossy compression, color/dimension/frame reduction, dither tuning. |
| `claude-gif-edit` | Modify existing GIFs: speed change, reverse, ping-pong, crop, resize, text overlay, frame extraction, loop control, trim. |

## Workflow Example

User: "Make me a Discord-sized GIF of a cozy campfire loop"

1. Route to `claude-gif-generate` (realistic motion = Veo)
2. Read `references/prompt-engineering.md` for loop-friendly prompt patterns
3. Confirm cost with user (~$0.60 for 4s Veo Fast)
4. Generate 4s campfire video via Veo
5. Convert to GIF: `gif_convert.sh --input campfire.mp4 --preset discord`
6. Perfect loop: `gif_loop.py --input campfire.gif --method crossfade --frames 5`
7. Verify size < 256KB. If over, route through `claude-gif-optimize`
8. Deliver to `~/Documents/gif_output/campfire_discord.gif`

## Source

Rewritten for AICUT from [`AgriciDaniel/claude-gif`](https://github.com/AgriciDaniel/claude-gif)
(MIT), skills/claude-gif/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 6 skills; this is the one its entry stands for.
