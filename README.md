<h1 align="center">AICUT</h1>

<h3 align="center">The open source AI video agent.</h3>

<p align="center">One HTML file, one function, one real editor.</p>

<p align="center"><b>English</b> · <a href="README.zh-CN.md">简体中文</a></p>

<p align="center">
  <a href="https://autoaiai.com/aicut"><b>Official site</b></a> ·
  <a href="https://autoaiai.com/aicut/help/help-en.html">Help center</a> ·
  <a href="https://github.com/autoaiai/aicut">GitHub</a>
</p>

> This repository ships the AICUT skills only — see [skills/README.md](skills/README.md). Everything below
> introduces the whole product: the CLI, Studio and the desktop app come from the
> [official site](https://autoaiai.com/aicut), not from this checkout.

## About

AICUT lets your coding agent make videos, and lets you edit them.

Ask Codex, Claude Code or any coding agent to make a film. It writes the film as web pages, and Studio, a local
editor that runs in your browser, shows it taking shape. Then change anything you like, by hand or by asking.

- **One HTML file.** `film.html` cuts animated web pages, footage, pictures and sound together on tracks, styled
  with CSS. Nothing new to learn: your agent already knows the web.
- **One function.** Each shot is a web page that draws any moment with `frame(t)`, using anything a browser can
  draw: three.js, WebGL, canvas, SVG, CSS, GSAP, video and more. No framework (like Remotion or HyperFrames): one
  function is enough.
- **One real editor.** Move, scale and rotate any element inside a page, change its text, color and style; place,
  crop and restyle every clip, trim and cut them on the timeline.

<p align="center"><a href="https://autoaiai.com/aicut">See AICUT in motion on the official site →</a></p>

AICUT is [MIT](skills/aicut/LICENSE)-licensed and runs on your machine. A film is a folder of plain files — `film.html`, the pages
it cuts together, your own media — so it goes in git, your agent reads and changes it like any other code, and nothing
is locked into a cloud project. Make launch films, product demos, explainers, animated captions, data stories, shorts
and ads: if a browser can draw it, it can be a shot, and because `frame(t)` is deterministic the same moment always
draws the same picture — at any resolution, in any frame order, on any machine.

The whole film is made and finished locally. Studio changes layers, text, colour and styles in the picture; trims,
crops, speeds and mixes clips on the timeline; edits subtitles and keeps named versions to go back to. It exports MP4,
GIF, transparent video, audio, subtitles, stills, or a timeline Premiere Pro and DaVinci Resolve can open.
`aicut look` draws the frames twice in two shuffled orders and names any that changed, along with broken fonts,
missing sound files and text cut off by the frame. Making, editing and rendering need no account and no network after
the first run; generated voice, music, images and video are optional, brought in with your own keys in Settings →
Providers.

Use the CLI with the coding agent you already have, or the desktop app for macOS and Windows — Studio with a chat
beside it, ffmpeg and a headless browser already inside, so there is no Node, npm or package version to manage. The
[official site](https://autoaiai.com/aicut) has the product overview and downloads, and the
[help center](https://autoaiai.com/aicut/help/help-en.html) walks through Studio.

## Install

Requires Node 22.2+, on macOS, Windows or Linux (git too, for Studio's saved versions); the first run downloads a
headless Chromium and ffmpeg (about 100 MB and 50 MB, once) — nobody installs ffmpeg by hand. The desktop app brings
both in its installer.

```sh
npx skills add autoaiai/aicut        # choose the agents to install into
npx skills add autoaiai/aicut --all  # every agent, no questions; add -g for every project
```

`skills` supports Claude Code, Codex, Cursor, OpenCode, the Gemini CLI and
[80-odd others](https://github.com/vercel-labs/skills/blob/main/docs/agents.md), so whichever one you use already
knows how to make a film — the skill is in [`skills/aicut`](skills/aicut/SKILL.md). Then ask your agent for a film:

> Make a 20-second launch video for my CLI, with music.

It opens the film in Studio and you watch it take shape. If your agent has no skills, tell it: "Run
`npx -y @autoaiai/aicut@latest` and follow the manual it prints."

The CLI is a package of its own — and its name is not the command: the package is `@autoaiai/aicut`, the command it
installs is `aicut`.

```sh
npm i -g @autoaiai/aicut             # then: aicut
```

Or download the desktop app for macOS or Windows from [aicut.dev](https://aicut.dev) or
[Releases](https://github.com/autoaiai/aicut/releases): Studio with a chat beside it for the agents you have. It
comes with ffmpeg and the headless browser, so there is nothing else to install.

Making, editing and rendering films needs no account. For generated voice, music, images and video, connect the
services you use (ElevenLabs, OpenAI, Google, fal and others) with your own keys in Studio's Settings → Providers.

To start from a finished film, open one of the [examples](https://github.com/aicut/examples):

```sh
npx -y @autoaiai/aicut@latest open https://github.com/aicut/examples/tree/main/one-prompt
```

## Commands

Your agent runs them; so can you, with `npx -y @autoaiai/aicut@latest <command>` or `npm i -g @autoaiai/aicut`.
No package is called plain `aicut` — `npm i -g aicut` and `npx aicut` answer 404; `npm i -g aicut@npm:@autoaiai/aicut`
is how npm installs this one under that name.

```sh
aicut                          # the manual: all an agent needs to know
aicut open   [folder | url]    # show a film in Studio: a new one, an existing one, one from GitHub, else this one or the last
aicut look   [what] [t | a-b]  # check the film, a page or a media file: a contact sheet, one frame, or a range
aicut render [a-b]             # the MP4; --4k, --blur (motion blur), --alpha (.webm / .mov)
aicut get    [what]            # voice-over, music, sound effects, transcripts, images, video, from your services
```

`aicut <command> --help` lists a command's options; `aicut get` alone lists what can be made and how to
connect a service in Studio with your own key.

## Studio

Studio runs on your machine, in your browser. Everything in the film can be changed: text and layers in the
picture, clips on the timeline, their place, look, volume and speed, and the subtitles. Your edits are saved to the
film's files, so the agent sees and keeps them, and you can save named versions to go back to. Export a video, a GIF,
the sound or its stems, subtitles, stills, slides, a transparent video, or the timeline itself for Premiere Pro and
DaVinci Resolve.

The desktop app (`apps/desktop`) is Studio with a chat beside it, for Claude Code, Codex and the other
agents, or its own agent with your own key.

## How it works

A film is a folder with a `film.html`: tracks of clips cut together.

```html
<meta name="viewport" content="width=1920, height=1080">
<style>
  .card { object-fit: cover; border-radius: 24px; }
</style>
<section>
  <iframe src="title.html#t=0,4"></iframe>
</section>
<section>
  <video src="assets/footage.mp4#t=12,18" at="4" speed="0.5" class="card" style="left: 160px; top: 90px; width: 1600px; height: 700px"></video>
</section>
<section>
  <audio src="assets/music.mp3" volume="0.6"></audio>
</section>
```

Each `<section>` is a track, in the order the timeline shows them: the first on top. A clip is an element: a page,
a video, a still picture or a sound. Which part of its file plays is a media fragment (`#t=12,18`), where it starts
is `at`, where it sits is its style's `left`, `top`, `width` and `height`, and how it looks is CSS. Every sound is a
clip of its own. `overrides` hold your changes to elements of a page, and agents keep them when they edit.

A page is a web page that draws any moment of itself, and that is the whole contract:

```html
<script type="module">
window.film = {
  frame(t) { /* draw the complete picture at t seconds, with anything */ },
  duration: 4,               // optional: its own length, in seconds
  ready: loadFonts(),        // optional: a Promise for fonts, images, models, data
  width: 480, height: 320,   // optional: a page that is only a part of the picture
};
</script>
```

**The one rule:** the same `t` always draws the same picture, whatever was drawn before. Frames are asked for out of
order, in parallel and between frames (for motion blur), so a page that keeps the rule renders the same at any size,
on any machine. Anything else that makes pictures (Python, Blender, a video model) comes in as video or images.

AICUT spends its effort where models fail: checking the film. `look` draws every frame of its sheet twice, in two
shuffled orders, and names any that changed, along with page errors, fonts that failed to load, missing sound files,
and text cut off by the frame.

`MANUAL.md` is what `aicut` tells your agent; `SPEC.md` is for anyone building a player,
renderer or editor.

## From source

This repository publishes the skills only: there is no source here to build. The CLI, Studio and the desktop app,
with their manuals, are on the [official site](https://autoaiai.com/aicut). The film format is described by
`MANUAL.md` and `SPEC.md` in the AICUT package.

## Community

Questions, ideas and films you made go to [Discussions](https://github.com/autoaiai/aicut/discussions): ask in
Q&A, share your film in Show and tell. Bugs go to [Issues](https://github.com/autoaiai/aicut/issues).

## Contributing

See `CONTRIBUTING.md`. To report a security issue, see `SECURITY.md`.

## License

The format, the CLI, Studio and the desktop app are [MIT](skills/aicut/LICENSE). The AICUT name and logo are
trademarks: see `TRADEMARK.md`.
