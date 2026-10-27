---
name: aicut-motion
description: 'Design motion films that look authored rather than generated — brand films, showreels, kinetic typography, explainers, data stories, product and UI promos, character stories, music videos, abstract loops, title sequences. Use when a film needs art direction — a style, a palette and type system, real transformations, a plan laid out on beats, and a critique of its own frames. Works on AICUT films (film.html and pages with window.film).'
license: MIT
---

# Motion films with a direction

AICUT already knows how to make a film — `film.html` cutting pages, footage, pictures and sound. This is about
making one that looks designed: the same prompt, given to a strong model and to a weaker one, should give films that
look, move and sound almost the same.

The gap is rarely taste. It is behaviour:

- honour every value in a long prompt;
- turn vague words into concrete design decisions;
- design every element properly instead of settling for a placeholder;
- plan the whole timeline before writing a frame;
- build one shared system, so everything stays consistent;
- look at the output and fix it.

Read `npx -y aicut@latest` once before the first film: it is the format and the tools, and it is authoritative. This
skill is how to decide what to draw.

## Priority order

When rules compete, keep this order:

1. **The prompt's own words**: every value, beat, copy line and ban.
2. **Look and craft at the style's level**: composition, palette, type, and every element designed properly.
3. **Continuity**: real transformations, persistent identity, plausible physics.
4. **Rhythm and sound.**
5. **Bookkeeping**: ledgers, tables, checks. They serve 1–4 and never replace them.

**Helpers are mechanics, not style.** A page's easing function decides how something moves; it never decides what it
looks like. Never ship a plain box or a default figure as the design, and never carry one film's palette into
another. Every film gets its own designed look.

## When a request comes in

- Any request for a motion piece runs the pipeline. Ask nothing: resolve gaps in stage 1 and say so in 解读.
- **Each new prompt is a new film**, built in a new folder, even in a conversation that already made one. Reuse
  earlier work only when the person says to change it (修改, 改一下, 在上一版基础上, fix this).
- **Modes.** The default builds. 只要提示词 / 扩写 / "prompt only" stops after stage 2 and prints the brief.
- If the message has no idea in it, reply only: “请给我一句话的创意或一段完整的提示词。”

## Stage 0 — read the prompt like a director

Three ledgers, before any file is written.

- **Spec ledger** `S01…` — one row per value or instruction, quoted exactly: durations, sizes, colours, fonts,
  weights, copy, counts, angles, positions, timings, easing, bans, the loop or ending, characters, every storyboard
  beat. The film's `viewport` and its length come from these rows; a placeholder value from a template must never
  survive. A truncated prompt is completed in the voice and density of its last full section, those rows marked
  `S##*`.
- **Transformation ledger** `X01…` — every becoming verb (becomes, turns into, gathers, dissolves, unfolds, grows
  into, 变成, 化成, 收拢, 汇聚, 展开) as `source → target · mechanism · start–end s · what is conserved`.
- **Element ledger** `E01…` — every thing drawn or typed, with its playbook (type, object, character, environment,
  data, UI, transition, texture-light, sound), listing three or more structural features, size and coordinates, how
  it moves, and — for characters — the design sheet and named poses.

Each scene also gets its back-to-front layer list.

Every value is binding: never round, rename, recolour, re-time or drop one. The last third of a long prompt counts as
much as the first. If two rows conflict, keep the more specific one and say so in 解读.

In the files: constants live at the top of the page that uses them, tagged `// S07`; each builder is tagged `// E03`;
each beat inside `frame` is tagged `// S31 X02`.

## Stage 1 — fill gaps the way a director does

Only where the prompt is silent; never override a ledger row.

| Gap | Default |
| --- | --- |
| Format | 1920 × 1080 (the film's `<meta name="viewport">`); a stated format is binding |
| Duration | 15 s for an idea, 30 s for a showreel or brand film; state it as the last clip's end |
| Ending | A seamless loop for reels and idents (the `t = D` frame equals frame 0, all motion at rest); a resolved final image or end card for stories and promos |
| Rhythm | Calm 60–90 BPM, brand 110–128, energetic 128–140. Dense pieces have an event on every beat, calm ones on every bar. Holds ≤ 0.5 s when dense, as long as the copy needs when calm |
| Narrative | One motif or carrier connects the film; each scene grows out of the one before; no unrelated title cards |
| Camera | Locked and front-on unless the prompt implies movement |
| Composition | From the style's occupancy and whitespace. Nothing at rest within 150 px of the sides, 90 px of the top and bottom |
| Typography | One family with character; the payoff word or number in the heaviest weight at the largest size. Latin: Inter, Geist, Space Grotesk, Fraunces. Chinese: Noto Sans SC, Noto Serif SC |
| Palette | 3–5 colours with roles; the accent foreshadows what comes next |
| Texture and light | Material per element, scaled to its size; light from a motivated source |
| Detail | Three recurring micro-details that make the film feel authored (labels, ticks, legends, timecodes, signage) — no new claims, numbers or copy |
| Captions | On-screen speech, lyrics or subtitles: ≥ 40 px at 1080p, high contrast, lower third, whole line held for its reading window (≈ 0.25 s per Chinese character, ≈ 3 Latin words per second) |
| Sound | A track that fits the mood, or ambience for an environment-led scene; silent only if asked |

## Stage 2 — the design contract

**Where the style comes from:**

1. **The prompt states it** — palette, materials, type, references. The contract comes from the ledger alone.
2. **The prompt names a feeling, medium or reference** ("like a newspaper", 水墨, "terminal", "Swiss poster") —
   start from the closest seed in `references/design-systems/` and adapt it.
3. **The prompt is a bare idea** — synthesise a contract with the method below. Seeds are starting points, not
   defaults.

**Synthesis method:**

1. **Subject → world.** What material world does this subject live in: paper, ink, glass, metal, fabric, screens,
   nature, a city, a lab. Pick one, plus at most one contrasting world to transform into.
2. **Audience and mood → energy.** Calm or punchy, warm or precise, playful or serious. Sets tempo, easing,
   overshoot, density.
3. **Make it concrete.** Write values, not adjectives: palette hexes with roles; type family, weights, sizes,
   tracking; how lines, fills and shapes are drawn; texture and light per element; occupancy and the edge rule;
   easing per move type; which mechanism changes which scene; signature details; sound palette; bans.
4. **Check against slop.** Every choice must be traceable to the subject or the prompt. Generic gradients, glows and
   template layouts are exactly what the contract exists to replace.

Seeds: `drafting-table` (process, tools, engineering) · `swiss-kinetic` (brands, launches, statements) ·
`editorial-ink` (culture, craft, heritage, East Asian) · `data-instrument` (explainers, finance, science) ·
`bold-poster` (music, sport, youth) · `riso-halftone` (indie, retro, playful) · `storybook-scene` (characters,
stories, MVs).

**Short prompts:** write the full brief first, at that density — a direction paragraph, the contract, the structure
(tempo, named scenes, scene changes), characters if any, and a scene-by-scene storyboard with timestamps and
numbers. That brief becomes the ledgers. In prompt-only mode, output it and stop.

## Stage 3 — the timeline before the code

1. One row per scene: `start–end s · name · what the viewer learns · carried element in → out · transition out (X##)`.
2. Every event: `t · element (E##) · action · numbers · ids`.
3. The key times as a `T` block.
4. The sound cues, derived from the same events — this is where each `<audio>` clip goes in `film.html`.

Checks before going on:

- beats fall on multiples of `60 / BPM`;
- each scene's exit state is the next scene's entry state (same element, same slot, same colour);
- no two actions drive one property at once;
- everything finishes before the end;
- for a loop, the `t = D` frame equals frame 0 with all motion at rest.

## Stage 4 — design before motion

1. Build each element's geometry from its structural features, at module level, once.
2. For characters, draw a **character sheet** first: one still with every character in every named pose, holding its
   props.
3. Fix the key compositions as exact pixel layouts: frame 0, the first full frame of each scene or material, the last
   frame. Check each against the contract's occupancy and whitespace.
4. Code those static states before the motion between them. A weak still is never rescued by motion. Look at them
   with `look` before going on.

## Element playbooks

| Element | Build it | Move it | The usual failure |
| --- | --- | --- | --- |
| **Type** | One family; hierarchy by weight and size; tracking set per size; big words on one line, fitted to their stated width; split words keep their spaces; CJK may run vertical | Arrive on `EASE.out`; stagger 0.02–0.06 s; slot clips, slides on rails, scale reveals; readable hold before exit | Words run together, orphan lines, captions too small or low contrast, the payoff not the heaviest type |
| **Object** | Three or more structural features of the real thing; one shade side for volume; consistent outline policy; built once as a function | Motion from its nature: paper bends at a fold, liquid ripples, metal turns on an axis, light switches | A symbol instead of the thing, floating parts, inconsistent scale between shots |
| **Character** | A design sheet: silhouette, proportions, colours, face, marks, and named poses — never a stick figure unless asked | Interpolate between named poses, small readable acting beats; feet on the ground, hands on what they hold | The look drifting between shots, hands off held props, limbs through the head, feet off the ground |
| **Environment** | Layers back to front: sky or wall, far, mid, ground, foreground. Motivated light sources and their light shapes. Weather across the frame in two depths | Ambient life that never stops (weather, lights, small loops); the camera stays still unless asked | A flat backdrop, weather passing through solid objects, missing light logic, edge-to-edge clutter |
| **Data** | Axes and units first, values exact from the ledger, labels attached to marks, one chart per scene | Axes, then data, then annotation; counters roll with their mark; charts morph through shared slots | Wrong numbers, unlabelled axes, decoration over data, labels ignoring the prompt's wording |
| **UI / product** | Real screens or faithful reconstructions: crisp rectangles, true proportions, real hierarchy | Cursor-driven or state-driven changes; zoom into the region that changes | Stretched screenshots, fake interface noise, unreadable small text |
| **Transition** | A physical mechanism: morph, merge, mask or wipe, material change, unfold, match on a shared shape | Hard edges, planned on a beat, the source gone as the target forms | Crossfades, cuts the prompt didn't ask for, things popping in, identity lost across a material change |
| **Texture and light** | Paper and grain as separate layers (`feTurbulence` + `feDisplacementMap`); halftone and hatching as `<pattern>`; light as shapes (cones, lit windows, reflections) | Seeded and stable, or boiling at a fixed step rate (`stepped`) | One texture on everything, decorative glow, flicker from unseeded noise |
| **Sound** | A bed (music or ambience) plus one clip per visual hit, placed on the `T` block in `film.html` | Synced to the beats; a loop's tail folds into its start | Silence by omission, noise used as music, hits out of sync |

## Rules that hold in every film

1. **Becoming is real.** Every X row morphs the same object point by point — equal point counts, one path
   interpolated to the other. The source is gone when the target forms, and the target is fully reached: "becomes a
   bar chart" ends as bars. Parts are born at their source and travel. Merges and splits conserve quantity. Never
   fake a transformation with an overlay, a crossfade, or by scaling the whole frame.
2. **Identity persists.** An element keeps its colour, its shape and its slot through every scene and material
   change unless the prompt says otherwise. Elements that turn into one another share a slot constant — a lane, a
   baseline, an anchor.
3. **Physics and depth are explicit.** Each scene has a back-to-front layer list. Weather respects occluders; things
   behind glass are tinted; reflections mirror their source; shadows share one light direction. Contacts are
   computed, not eyeballed.
4. **Space words are coordinates.** On 1920 × 1080: centre (960, 540); the thirds at x ≈ 640 and x ≈ 1280; upper
   y ≈ 360; lower y ≈ 760. Scale for other formats.
5. **Energy is even.** On-screen change follows the tempo. Spikes are planned hits; no dead seconds unless the hold
   is planned.
6. **Sound by default**, on its own track, never drawn in a page.
7. **Finish and check.** Write every scene completely, run the jury, fix until every juror scores 8 or more.

## Stage 5 — build in AICUT

```
my-film/
  film.html                 the cut: viewport, tracks, every clip and every sound
  scenes/SceneNN.html       one page per shot: window.film = { frame(t), duration, ready }
  lib/…                     a page's own shared code (easing, geometry), loaded by relative path
  assets/                   media, including the sound
```

**Rules:**

- **Time.** `frame(t)` only. Time is the page's own seconds from 0. No CSS animations, no `requestAnimationFrame`
  loop, no `Date`, no `Math.random()` (seed by hand if you need variation), no state carried between frames.
- **One page per shot.** A five-shot film is five pages cut together in `film.html`, so the person can reorder or
  replace one. Anything the pages share goes in `lib/`.
- **Placement is `film.html`'s.** `left`, `top`, `width`, `height`, `rotate` on the clip's `style`. Never position the
  page itself from inside, and never animate the clip's box — that is the cut, not the motion.
- **Easing.** Write it once in `lib/motion.js` and import it everywhere: a `prog(t, start, dur, ease)` clamped to
  0..1, the four curves below, and a spring that lands on a beat. `references/pages.md` has the file.
- **Type.** HTML for set type (so the person can edit the words), per-letter spans for per-letter motion, SVG
  `<text>` for pattern fills, outlines and clips. `writing-mode: vertical-rl` for vertical CJK.
- **Fonts.** System stacks, or a font in `assets/` with `document.fonts.load('700 64px …')` awaited in `ready`.
  Never a font that may not arrive.
- **Sound.** A music or ambience `<audio>` clip, plus one clip per hit on its own track, all in `film.html`. Generated
  music and effects come from `npx -y aicut@latest get`, once the person has connected a service.
- **Completeness.** No TODOs. If space runs out, stop at the end of a file with `// CONTINUE FROM <path>`.

## Stage 6 — the jury

Five jurors score 1–10. Each names its worst moment with a timestamp.

1. **SPEC.** Every S, X and E row is implemented with its exact value. Missing or changed ids listed. This score caps
   the total.
2. **CONTINUITY.** Every X row is a real transformation that reaches its target, parts born at their source. Identity
   and slots persist through scenes and materials. Physics and depth are correct.
3. **RHYTHM & SOUND.** Events land on beats; easing matches the contract; energy is even with no unplanned spikes or
   dead seconds; every hit has its sound; the loop seam is clean.
4. **DESIGN.** Hero frames match their layouts; occupancy and whitespace match the contract; every element passes its
   playbook check (look at stills zoomed in on type, faces, hands, props, data labels); the look is designed for this
   film, not a default and not an example's.
5. **CRAFT.** Texture and light are per element; the film is deterministic; nothing from the ban list — unrequested
   gradients, glow (bloom, neon halos, lens flares), generic fade-ins, bounce where forbidden, particle bursts,
   camera shake, RGB split, centred-title-over-cards, stock icons and emoji, placeholder copy, anything that reads as
   a template. Motivated light drawn as shapes is allowed.

Fix everything below 8, worst first, up to three rounds.

**How to look:**

```sh
npx -y aicut@latest look            # the whole film: contact sheet, sound, loudness, same-t check
npx -y aicut@latest look 4.5        # one frame at full size
npx -y aicut@latest look 3-6        # a stretch, densely
TIMES are worth naming: the first frame, each scene's first full frame, the loop seam
```

Read the PNGs it writes. Trust the stills over the code: a format mismatch, a leftover placeholder, missing audio, a
flash of the wrong colour at `t = 0`, a bad loop seam.

## Stage 7 — hand it over

Reply in this order:

1. **解读** (the person's language, ≤ 6 lines): the style source, the assumptions, the conflicts, the inferred
   `S##*` rows.
2. **Ledgers and timeline** in one fenced block, kept for later rounds.
3. **Files**, each headed by its path: `film.html`, every `scenes/*.html`, `lib/*.js`.
4. **Parity table**: `X## · source → target · mechanism · file`; `E## · playbook · features drawn · file · identity
   kept across materials`; `format · W×H · duration · S##`. Any X row done by overlay, crossfade or whole-frame
   scaling is a failure — fix it before replying.
5. **Jury**: five scores, and the three things you are least sure of.
6. **运行方法**: `npx -y aicut@latest open <folder>` and open the address it prints; `look` to check; `render` for
   the MP4 when the person wants the file.

**Follow-ups.** 继续 → only the remaining files. 评审修复 → run stage 6 on new stills, then output only the changed
files, in full.
