---
name: hyperdirector
description: "HyperDirector: the method the original skill taught, run as an AICUT film — pages that draw any moment t, cut on tracks. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: Apache-2.0
source: "gloweaseco-leo/hyperdirector"
---

# HyperDirector

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


Hermes video director enhancement pack. HyperFrames is the render engine. HyperDirector is the director workflow layer above it.

**Reference files:**
- Capability rules → `CAPABILITY_BOUNDARY.md`
- Upstream principles → `upstream/hyperframes-principles.md`
- Anti-patterns → `upstream/hyperframes-anti-patterns.md`
- Command patterns → `upstream/hyperframes-command-patterns.md`
- Agent-native rules → `upstream/hyperframes-agent-native-rules.md`
- Headless / offline rendering stability → `rules/headless-rendering-stability.md`
- Image asset rules → `rules/image-assets-basics.md`
- Audio Director rules → `rules/audio-director-rules.md`

---

## Default Workflow

Execute these steps in order. Do not skip steps. Do not jump to HTML generation without brief and storyboard.

```
Step 1 — Capability Judge
  Read CAPABILITY_BOUNDARY.md.
  Classify request: suitable / degraded / reject.
  If degraded: propose downgrade version and wait for user confirmation.
  If reject: output reason and alternatives. Stop.

Step 2 — Brief Generation  (→ brief.json)
  Populate brief.json per schemas/brief.schema.json.
  Infer brief.language from user input if not specified.
  Chinese users default to zh-CN.

Step 3 — Storyboard Generation  (→ storyboard.json + script.md)
  Generate scene structure per schemas/storyboard.schema.json.
  Duration sum must equal brief.duration_seconds.
  Every scene needs: id, duration, purpose, headline, visual, caption, transition.

Step 4 — Visual Design  (→ DESIGN.md)
  Select template from: tiktok-vertical-kit | saas-demo-kit | ai-knowledge-explainer-kit.
  Load brand-kit.json. Apply colors, fonts, motion_language, cta.
  Write DESIGN.md: canvas size, color palette, font stack, per-scene animation intent.

Step 5 — HTML Composition  (→ index.html)
  Generate plain HTML + CSS + GSAP composition.
  Follow rules/hyperframes-core-rules.md, rules/gsap-deterministic-rules.md, rules/headless-rendering-stability.md.
  Every timed element needs class="clip", data-start, data-duration, data-track-index.
  Timeline must be paused. Key must match data-composition-id.

Step 6 — QA Fix Loop  (→ lint output)
  Run: npx hyperframes lint
  Run: npx hyperframes validate  (if lint passes)
  On failure: apply fix from rules/common-errors-fix.md. Retry max 3 times.
  On 3rd failure: halt, output unresolved error to user.

Step 7 — Render (if HyperFrames CLI available)
  Draft: npx hyperframes render --quality draft --output output/<slug>/draft.mp4
  Final (after user confirms draft): npx hyperframes render --quality high --output output/<slug>/final.mp4
  If CLI not available: skip render, note in render-report.md.

Step 8 — Render Report  (→ render-report.md)
  Always output render-report.md even if render was skipped.
  Include: task type, template, lint result, fixes applied, render status.
  Never write "render completed" unless CLI returned exit code 0 and output file exists.
```
```
---
```

## Prohibited Behaviors

- Do not promise or attempt photorealistic video generation (Sora / Runway territory).
- Do not promise or attempt digital human lip-sync (HeyGen Studio / Synthesia territory).
- Do not promise cinema-grade 3D effects or character animation.
- Do not replicate copyrighted brand identities, film styles, or specific influencer templates.
- Do not skip the Capability Judge step before generating anything.
- Do not skip brief.json or storyboard.json and jump directly to HTML.
- Do not skip lint/validate before render.
- Do not write "video generated" or "render completed" without CLI evidence.
- Do not rewrite the entire index.html during warm iteration — patch only affected scenes.
- Do not use Math.random() or infinite repeat in GSAP timelines.
- Do not call video.play() / audio.currentTime in composition scripts.
- Do not animate width/height/top/left directly on <video> elements.

---

## Standard Output

Every completed run produces these files in `output/<project-slug>/`:

```
brief.json              required — structured requirements
storyboard.json         required — scene structure
DESIGN.md               required — visual design spec
index.html              required — HyperFrames composition source
render-report.md        required — QA + render status
script.md               recommended — narration script
brand-used.json         recommended — applied brand values snapshot
edit-instructions.md    on iteration — change log
final.mp4               when render executed
```

# Media Asset Pipeline (optional — activate when project needs visual or audio assets)
asset-manifest.json     optional — image asset declarations (Source Image Pipeline)
audio-manifest.json     optional — audio segment declarations (Audio Director)
caption-timeline.json   optional — subtitle/caption alignment (Audio Director)
```
---
```

## Language Policy

- Engineering files (this file, prompts/, rules/, schemas/) use English.
- User-facing content in generated videos follows `brief.language`.
- If `brief.language` is absent, infer from user input language.
- Chinese users default to `zh-CN`: scripts, captions, CTA, on-screen copy all in Chinese.
- Technical terms (API, GSAP, HyperFrames, CLI) may stay English in Chinese video copy.
- Chinese user docs are in `docs/*.zh-CN.md` and `README.zh-CN.md`.

---

## Warm Iteration Rules

When user requests changes to an existing project:

1. Locate affected scene(s) in storyboard.json by scene id.
2. Locate corresponding HTML elements by id attribute.
3. Apply surgical edits — do not regenerate the entire file.
4. Re-run lint on modified file.
5. Update storyboard.json in sync with any structural HTML changes.
6. Output edit-instructions.md describing what changed and why.

---

## Optional Media Asset Pipeline

Media Asset Pipeline is **optional**. Activate when the project needs visual or audio assets beyond pure HTML/CSS composition.

**Source Image Pipeline** — activate when the project needs:
- Source images, screenshots, logos, product photos
- PPT / PDF visuals, README diagrams, UI screenshots
- Local visual assets bound to specific scenes or slots

→ Produces `asset-manifest.json`. See `rules/image-assets-basics.md`, `docs/source-image-workflow.zh-CN.md`.

**Audio Director** — activate when the project needs:
- Voiceover planning and provider-neutral TTS contracts
- Caption timeline aligned to audio segments
- Audio/video sync QA and authorisation tracking
- Audio manifest for render planning

→ Produces `audio-manifest.json` + `caption-timeline.json`. See `rules/audio-director-rules.md`, `docs/audio-workflow.zh-CN.md`.

Both pipelines are insertable **after Step 3 (Storyboard)** and **before Step 5 (HTML Composition)**. They are not required for every project.

Advisory hazard scan (non-blocking, covers images and audio):
```bash
node hyperdirector/scripts/check-composition-hazards.js output/index.html
```

## Source

Rewritten for AICUT from [`gloweaseco-leo/hyperdirector`](https://github.com/gloweaseco-leo/hyperdirector)
(Apache-2.0), hyperdirector/SKILL.md. The method is that skill's own; the way it runs is AICUT's.
