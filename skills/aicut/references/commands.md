# The commands

There are five: `open`, `app`, `look`, `render`, `get`. Run them in the film's folder.
`npx -y @autoaiai/aicut@latest` alone prints the manual; `--help` after a command
prints that command's options; `--version` prints the version. Exit status: **0** done, **1** the film or the command
failed (the output says why), **2** not a project or a wrong command.

Use `npx -y @autoaiai/aicut@latest` rather than a bare `aicut` unless something put one on your PATH: it is the
newest, and `npx` otherwise keeps the first version it ever fetched.

## open

```sh
npx -y @autoaiai/aicut@latest open                    # the project around this folder, else the last one, else Studio's list
npx -y @autoaiai/aicut@latest open launch-video       # a new film; the folder is made if missing
npx -y @autoaiai/aicut@latest open .                  # this folder becomes the film
npx -y @autoaiai/aicut@latest open https://github.com/aicut/examples/tree/main/one-prompt
```

- A folder that is not a project gets an empty `film.html`, 1920 × 1080 (its viewport `<meta>`), no tracks. A code
  repository (`package.json`, `Cargo.toml`, `go.mod`, `pyproject.toml`…) gets a film folder of its own inside it.
- A GitHub or GitLab address — a repository, or a folder in one (`…/tree/main/<folder>`) — is copied into the
  projects library without its git history, then opened.
- Starts Studio if it is not running, prints its address, and **opens that address in the person's browser**: an agent
  has none of its own, which is why `open` does it. There is nothing for you to open (`AICUT_NO_BROWSER=1`: nothing
  opens, the address is yours). A page already open in a browser switches to the project.
- If the machine has no AICUT app installed, `open` says so in one line. Do nothing about it unprompted: the browser
  is the whole editor. When the person wants the desktop app, ask which is their wish and then run
  `npx -y @autoaiai/aicut@latest app --download` (it fetches the installer; the person runs it).

## app

```sh
npx -y @autoaiai/aicut@latest app               # is the app installed, and what is the newest release
npx -y @autoaiai/aicut@latest app --download    # fetch the installer into ~/.aicut/download/ for the person to run
```

The app is AiCut the window — Studio with a chat beside it and its own ffmpeg and browser. It is optional: the package
you run is the whole editor, and the person does not need the app. `app` says whether it is on this machine; never run
`--download` without the person's yes — it is about 300 MB of their bandwidth and disk, and they install it themselves
(the installer asks for a folder). A machine without a build for its platform (macOS today) is told where the download
page is instead.

## look

```sh
npx -y @autoaiai/aicut@latest look               # the whole film: contact sheet, sound, loudness, same-t check
npx -y @autoaiai/aicut@latest look 4.5           # one frame, full size
npx -y @autoaiai/aicut@latest look 3-6           # a stretch, densely
npx -y @autoaiai/aicut@latest look assets/a.mp4  # a media file; also any .html page
```

Writes PNGs under `.film/cache/look/` and prints their paths. `--count <n>`: frames in a sheet (12). A project Studio
has not shown yet is opened in Studio first, so the person watches it.

## render

```sh
npx -y @autoaiai/aicut@latest render             # the whole film → <project>/<folder name>.mp4, beside film.html
npx -y @autoaiai/aicut@latest render 12-20       # a range → .film/cache/render/
```

| Option | Meaning |
| --- | --- |
| `--out <file>` | Another path; `.webm` or `.mov` with `--alpha` |
| `--fps <n>` | Frame rate (30) |
| `--4k` | 3840 px wide |
| `--scale <n>` | Any device pixel ratio |
| `--blur` | Motion blur (8 samples); `--samples <n>`, `--shutter <0..1>` |
| `--alpha` | Transparent background |
| `--workers <n>` | Parallel browsers |

Only when the person asks for the file: you check with `look`, and they export from Studio.

## get

```sh
npx -y @autoaiai/aicut@latest get                # what works right now, and which service makes the rest
npx -y @autoaiai/aicut@latest get voice-over "A calm, low voice, 20 seconds"
npx -y @autoaiai/aicut@latest get music "warm analog synth, 90 bpm"
```

Kinds: voice-over, music, sound effects, transcripts, images, image search, video, web search. Each works only once
the person has connected a service that makes it, with their own key, in Studio → Settings → Providers (subtitle
translation too). When a kind is not connected, tell the person which services make it and where to connect one
rather than trying again. A video clip costs a lot: the person confirms it in Studio first.

Save what you get under `assets/`. A generated sound or video gets its WebVTT beside it — that is where its words
come from, not a page.
