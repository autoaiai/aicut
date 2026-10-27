---
name: docvideoer
description: "文档转视频技能。用于把文档 URL、网页文章、Markdown 或粘贴文本转换成带中文旁白的 AICUT 讲解视频，包含正文提取、分镜生成、免费 TTS、视频项目搭建和 MP4 渲染。 Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "coding-ax/docvideoer"
---

# docvideoer

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


Use this skill when the user asks to turn a document, article, URL, Markdown
file, or pasted text into a narrated explainer video. Trigger phrases include
`/docvideo`, "把这个文档转成视频", "根据这篇文章生成视频", and similar requests.

## External Skill Dependency

This skill depends on Remotion's official `remotion-best-practices` skill for
Remotion-specific implementation guidance. When creating, debugging, or changing
the Remotion project, scene components, timeline, animation, audio sync,
captions, assets, or rendering flow:

- Use the installed `$remotion-best-practices` skill if it is available.
- If it is not available, tell the user to install it with:
  `npx skills add https://github.com/remotion-dev/skills --skill remotion-best-practices`.

## Output Layout

Create each generated project under:

```text
docvideo-output/<project-name>/
```
Expected files:
```
```text
source.md
storyboard.json
tts-batch.json
audio/
video/
output.mp4
output-with-subtitles.mp4
```
Use a short, filesystem-safe project name derived from the document title or
topic.
```

## Workflow

1. Get document content.
   - For URLs, run `node scripts/fetch-doc.mjs <url> --out docvideo-output/<project-name>/source.md`.
   - For pasted text, write it to `source.md`.
2. Generate `storyboard.json`.
   - Extract the document's core points.
   - Use concise scenes, each focused on one idea.
   - Estimate Chinese narration at about 4 characters per second.
   - Use scene types: `title`, `content`, `bullet`, `image`, `end`.
3. Synthesize TTS.
   - Prefer `npm run docvideoer -- tts --storyboard docvideo-output/<project-name>/storyboard.json --audio-dir docvideo-output/<project-name>/audio`.
   - Default backend is Edge TTS; on macOS, `say` can be used as fallback.
4. Set up the Remotion project.
   - Run `npm run docvideoer -- setup --storyboard docvideo-output/<project-name>/storyboard.json --audio-dir docvideo-output/<project-name>/audio --video-dir docvideo-output/<project-name>/video`.
5. Render the video.
   - Run `npm run docvideoer -- render --video-dir docvideo-output/<project-name>/video --out docvideo-output/<project-name>/output.mp4 --install`.
6. Report the result.
   - Provide the final MP4 path.
   - Provide `storyboard.description`.
   - Mention any optional step that failed, such as subtitle generation.

## Storyboard Contract

Scene IDs must match audio filenames. For example, `scene-1` expects
`audio/scene-1.mp3`.

```json
{
  "title": "视频标题",
  "description": "视频简介",
  "totalDuration": 120,
  "scenes": [
    {
      "id": "scene-1",
      "type": "title",
      "title": "场景标题",
      "narration": "讲解文案",
      "duration": 8,
      "visuals": {
        "type": "title",
        "title": "大标题",
        "subtitle": "副标题"
      }
    }
  ]
}

## Defaults

- Resolution: 1920x1080
- Aspect ratio: 16:9
- FPS: 30
- Codec: H.264
- Remotion composition ID: `DocVideo`
- Default Edge TTS voice: `zh-CN-XiaoxiaoNeural`

## Source

Rewritten for AICUT from [`coding-ax/docvideoer`](https://github.com/coding-ax/docvideoer)
(MIT), SKILL.md. The method is that skill's own; the way it runs is AICUT's.
