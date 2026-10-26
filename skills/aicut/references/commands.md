# The commands

Run them in the film's folder. `npx -y @autoaiai/aicut@latest` alone prints the manual; `--help` after a command prints that
command's options; `--version` prints the version. Exit status: **0** done, **1** the film or the command failed (the
output says why), **2** not a project or a wrong command.

Use `npx -y @autoaiai/aicut@latest` rather than a bare `aicut` unless something put one on your PATH: it is the newest, and
`npx` otherwise keeps the first version it ever fetched.

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
- Starts Studio if it is not running and prints its address. **Open that address in your browser before writing
  anything** and keep it open: the person watches every change land. A page already open switches to the project; if
  no page connects within 15 s, Studio opens the person's own browser (`AICUT_NO_BROWSER=1`: never).

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
