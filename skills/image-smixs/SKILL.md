---
name: image-smixs
description: "Image Prompting — Nano Banana & GPT Image 2.5: the method the original skill taught, run as an AICUT film — pages that draw any moment t, cut on tracks. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "smixs/visual-skills"
---

# Image Prompting — Nano Banana & GPT Image 2.5

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


This skill writes image prompts. It does not generate images. The output is: model name + quality / size / aspect ratio + the prompt itself.

The body of this SKILL.md is intentionally thin so you cannot fake a result by reading it alone. The actual rules — what the models reward, what they punish, how to phrase a 5-slot template, when to add `quality: high`, when to use image grounding — live only in the reference files.

## Route first — is this actually an image-prompt task?

- **Motion, clips, montage** (Seedance, Kling, Veo, any image-to-video): use the sibling `video` skill. This skill's storyboard and keyframe outputs feed it.
- **No idea or script yet** (user wants a concept or an ad scenario, not a picture): if the `creative-director` skill is installed, start there — it develops ideas and scripts for commercials and beyond ([github.com/smixs/creative-director-skill](https://github.com/smixs/creative-director-skill)).
- **A concrete image is needed** — this skill. Continue below.

---

# Mandatory reading order — DO NOT WRITE A PROMPT WITHOUT THIS

Past attempts to write prompts directly from this skill body produced lazy, generic results. Each model has its own physics; common rules collapse into mush when applied without model-specific syntax. Read in this order before producing any prompt:

### Step 1 — always read first → [models.md](references/models.md)

Decide: Nano Banana (NB2 or NBP) or GPT Image 2.5 (Flare for speed, Sunburst for precision edits). The choice changes the prompt syntax fundamentally — natural-language paragraphs vs. labeled 5-slot template, quality settings, which features exist (image grounding only on NB, EXACT TEXT discipline only on GPT Image, etc.).

If the user named a model — confirm and proceed. If not — pick using the table in `models.md`, then state your choice in the output header.

### Step 2 — read **one** model file (the one you picked)

- **Nano Banana** → [nano-banana.md](references/nano-banana.md)
  Image grounding for real locations. Extreme aspect ratios (1:8, 8:1, 4:1). Thinking mode. JSON for 5+ elements. Up to 14 reference images. Why you must NOT write `50mm / f-stop / ISO` numbers.

- **GPT Image 2.5** → [gpt-image.md](references/gpt-image.md)
  5-slot template (Scene / Subject / Important Details / Use Case / Constraints). Anti-slop banned-words list. `quality: low / medium / high / xhigh / max` as a deliberate fidelity lever. Size constraints (multiples of 16, max 3:1, up to 4K 3840×2160). Two-column edit logic (Change / Preserve / Constraints). Up to 16 reference images with explicit roles.

The model file is non-negotiable. Skipping it is the single biggest cause of weak prompts.

### Step 3 — always read after the model file → [golden-rules.md](references/golden-rules.md)

Universal rules that apply to both models: start with a verb, positive framing, hex colors, quote text, edit don't re-roll, one change per iteration, reference images.

### Step 4 — task-shaped reading (load only what matches the request)

Pick zero or more, depending on what the user asked for:

- Text in image, infographic, diagram, multilingual rendering → [text-rendering.md`text-rendering.md`
- Edit existing image (object removal, lighting swap, colorization, restoration, localization) → [editing.md](references/editing.md)
- Character continuity across multiple images / panels → [characters.md](references/characters.md)
- **The image must pass as a real photograph** (portrait, reportage, UGC, casting, product-in-hand) — or the user says the result "looks AI", "too glossy", "not like the reference" → [de-slop.md](references/de-slop.md). Model default priors, banned booster words, capture pipeline instead of adjectives, located imperfections.
- Presentation slides → [slides.md`slides.md`
- Sequential narrative (storyboard, comic, panel sequence) → [storyboards.md`storyboards.md`
- Sketch → final, wireframes, structural input → [structural.md`structural.md`
- 2D → 3D, floor plans, isometric → [dimensional.md](references/dimensional.md)
- **Vision analysis / image-to-prompt / style transfer from a reference image** → [vision-decomposer.md`vision-decomposer.md`. Load this whenever the user attaches an image and asks to recreate, match, decompose, or transfer its style.
- **Multi-panel compositions** (grids, collages, storyboard sheets in ONE image) → [multi-panel.md](references/multi-panel.md). 9-cell TVC grids, 2x2 portrait grids, 3-panel campaign collages, 4x3 borderless grids, 6-frame cinematic sequences, before/after splits, 12-panel storyboard posters.
- **Industry pattern libraries** — proven prompt templates by vertical. Load the matching file:
  - E-commerce product shots → [patterns/ecommerce.md](references/patterns/ecommerce.md)
  - Fashion editorial campaigns → [patterns/fashion-editorial.md`fashion-editorial.md`
  - Food & beverage advertising → [patterns/food-beverage.md`food-beverage.md`
  - Cinematic portraits → [patterns/portrait-cinema.md`portrait-cinema.md`
  - Posters & illustration → [patterns/poster-illustration.md`poster-illustration.md`. Also holds the Style DNA + Reject Checklist method — how to fix a strong visual style in four lines before generating and how to judge the returned image against it. Usable with any pattern in this list, not only posters.
  - Character design (turnarounds, expression sheets, outfit grids) → [patterns/character-design.md](references/patterns/character-design.md)
  - UI mockups & social media formats → [patterns/ui-social.md`ui-social.md`

### Step 5 — read for production language → [creative-direction.md](references/creative-direction.md)

Studio-quality vocabulary for lighting design, camera and hardware, color grading and film stock, materiality and texture. Read when you need precise terms beyond what `golden-rules.md` covers.

### Step 6 — read if structuring a complex prompt → [prompt-framework.md`prompt-framework.md`

Universal element checklist (subject, context, action, environment, camera, lighting, mood, materials, palette, format), detail modes (concise / standard / verbose / cinematic verbose), parameterized templates, output structure with parameters and exclusions.

---

# Output format

When you return the prompt, structure it like this:

```
Model: <nano-banana-2 | nano-banana-pro | gpt-image-2.5-flare | gpt-image-2.5-sunburst>
Quality: <low | medium | high | xhigh | max>   (only for gpt-image-2.5)
Size / Ratio: <e.g. 1536×1024 or 16:9>

Prompt:
<the prompt text, ready to copy>

Notes:
- <anything you inferred or assumed because the user did not specify>
```
```
For edits, also include an explicit preserve-list (mandatory for gpt-image-2.5, recommended for nano-banana):
```
```
Change: <one concrete thing>
Preserve: <face, pose, lighting, framing, geometry, ...>
Constraints: <no extra objects, no drift, ...>
```
```
---
```

# Final response style

Prefer: ready-to-copy prompts, hex colors, concrete materials, named compositions, model-specific syntax (5-slot for GPT Image, natural prose for Nano Banana).

Avoid: tag soup ("cool, modern, 4k"), vague praise ("stunning, epic, masterpiece" — actively hurts GPT Image 2.5), negative framing ("no people, no cars" — invert to positive), external comparisons ("like Apple ad" — describe the visual properties instead), numerical lens parameters in Nano Banana prompts (it ignores them).

---

*Author: Serge Shima ([t.me/aimastersme](https://t.me/aimastersme) · [sergeshima.com](https://sergeshima.com) · [aimasters.me](https://aimasters.me)) · License: CC BY 4.0 — attribution required · Source: [smixs/visual-skills](https://github.com/smixs/visual-skills)*

## Source

Rewritten for AICUT from [`smixs/visual-skills`](https://github.com/smixs/visual-skills)
(MIT), image/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 2 skills; this is the one its entry stands for.
