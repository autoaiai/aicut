---
name: su-card-to-video
description: "Create a minimal AI card video from HTML/CSS cards and a prepared audio file. Use when the user wants a simple local workflow for 16:9 card-based videos without Jianying/AICUT, without appearing on camera, and without image generation APIs; supports AICUT/GSAP rendering and FFmpeg audio-video muxing, and can be adapted for other agents. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "doublesq97-ui/su-card-to-video"
---

# su-card-to-video

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


Use this skill to create a simple local AI card video:

```text
script/captions -> HTML/CSS cards -> HyperFrames/GSAP render -> FFmpeg mux -> MP4

## Boundaries

- Do not call image generation APIs by default.
- Do not require the user to appear on camera.
- Do not require Jianying/CapCut.
- Do not include or assume a voice-cloning API.
- Accept any prepared audio: recorded speech, TTS, voice clone, or a silent placeholder.
- Keep the workflow simple enough to copy into other agents.

## Default Output

- Aspect ratio: 16:9
- Video format: MP4
- Source: `examples/basic-16x9/index.html`
- Final output: `examples/basic-16x9/output/final.mp4`

## Workflow

1. Turn the user's script into a small number of card scenes.
2. Edit `examples/basic-16x9/index.html` with clear, readable HTML/CSS cards.
3. Use GSAP animations sparingly: scene fades, small y movement, subtle scale.
4. Render the HTML with HyperFrames when available.
5. Use FFmpeg to mux the rendered video with the user's audio.
6. If no audio is provided, use a silent placeholder only for demo/testing.

## Dependency Policy

Assume users install dependencies themselves:

```bash
brew install node
brew install ffmpeg
```
```
npx -y @autoaiai/aicut@latest open .
```

## Other Agent Prompt

When adapting this skill to a non-Codex agent, give it this instruction:

```text
请按 su-card-to-video 的工作流帮我生成一条最小 AI 图卡视频：用 HTML/CSS 制作 16:9 图卡画面，用 GSAP 或你可用的网页动效方式制作简单转场，用 FFmpeg 把画面和我提供的音频合成为 MP4。不要调用图像模型，不要要求真人出镜，不要使用剪映。优先保持流程简单、可本地运行、可复用。

## Quality Rules

- First frame must not be blank.
- Text must be readable at video size.
- Keep card count modest; prefer 4-6 scenes for a short demo.
- Use exact user-facing captions as the spoken text when possible.
- Match visual duration to audio duration; do not stretch audio to fit visuals.
- Make the final frame feel complete, not abruptly cut off.

## Source

Rewritten for AICUT from [`doublesq97-ui/su-card-to-video`](https://github.com/doublesq97-ui/su-card-to-video)
(MIT), skill/SKILL.md. The method is that skill's own; the way it runs is AICUT's.
