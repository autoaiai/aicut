---
name: manim-composer
description: "[Video Title]: the method the original skill taught, run as an AICUT film — pages that draw any moment t, cut on tracks. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "adithya-s-k/manim_skill"
---

# [Video Title]

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


## Workflow

### Phase 1: Understand the Concept

1. **Research the topic** deeply before asking questions
   - Use web search to understand the core concepts
   - Identify the key insights that make this topic interesting
   - Find the "aha moment" - what makes this click for learners
   - Note common misconceptions to address

2. **Identify the narrative hook**
   - What question does this video answer?
   - Why should the viewer care?
   - What's the surprising or counterintuitive element?

### Phase 2: Clarify with User

Ask targeted questions (not all at once - adapt based on responses):

**Audience & Scope**
- What math/science background should I assume? (e.g., "knows calculus" or "high school algebra")
- Target video length? (short: 5-10min, medium: 15-20min, long: 30min+)
- Should this be self-contained or part of a series?

**Focus & Depth**
- Any specific aspects to emphasize or skip?
- Proof-heavy or intuition-focused?
- Real-world applications to include?

**Style Preferences**
- Color scheme preferences?
- Narration style? (casual, formal, playful)
- Any specific visual metaphors you have in mind?

### Phase 3: Create scenes.md

Output a comprehensive `scenes.md` file with this structure:

```markdown

# [Video Title]

## Overview
- **Topic**: [Core concept]
- **Hook**: [Opening question/mystery]
- **Target Audience**: [Prerequisites]
- **Estimated Length**: [X minutes]
- **Key Insight**: [The "aha moment"]

## Narrative Arc
[2-3 sentences describing the journey from confusion to understanding]

---

## Scene 1: [Scene Name]
**Duration**: ~X seconds
**Purpose**: [What this scene accomplishes]

### Visual Elements
- [List of mobjects needed]
- [Animations to use]
- [Camera movements]

### Content
[Detailed description of what happens, what's shown, what's explained]

### Narration Notes
[Key points to convey, tone, pacing notes]

### Technical Notes
- [Specific Manim classes/methods to use]
- [Any tricky implementations to note]

---

## Scene 2: [Scene Name]
...

---

## Transitions & Flow
[Notes on how scenes connect, recurring visual motifs]

## Color Palette
- Primary: [color] - used for [purpose]
- Secondary: [color] - used for [purpose]
- Accent: [color] - used for [purpose]
- Background: [color]

## Mathematical Content
[List of equations, formulas, or mathematical objects that need to be rendered]

## Implementation Order
[Suggested order for implementing scenes, noting dependencies]

## 3b1b Style Principles

Apply these principles when composing scenes:

### Visual Storytelling
- **Show, don't just tell** - Every concept needs a visual representation
- **Progressive revelation** - Build complexity gradually, don't show everything at once
- **Visual continuity** - Transform objects rather than replacing them when possible

### Pacing & Rhythm
- **Pause for insight** - Give viewers time to absorb key moments
- **Vary the pace** - Mix quick sequences with slower explanations
- **End scenes with resolution** - Each scene should feel complete

### Mathematical Beauty
- **Emphasize elegance** - Highlight when math is surprisingly simple or beautiful
- **Connect representations** - Show the same concept multiple ways (algebraic, geometric, intuitive)
- **Embrace abstraction gradually** - Start concrete, then generalize

### Engagement Techniques
- **Pose questions** - Make viewers curious before revealing answers
- **Acknowledge difficulty** - "This might seem confusing at first..."
- **Celebrate insight** - Make the "aha moment" feel earned

## References

- [references/narrative-patterns.md](references/narrative-patterns.md) - Common 3b1b narrative structures
- [references/visual-techniques.md](references/visual-techniques.md) - Effective visualization patterns
- [references/scene-examples.md](references/scene-examples.md) - Example scenes.md excerpts

## Templates

- [templates/scenes-template.md](templates/scenes-template.md) - Blank scenes.md template

## Source

Rewritten for AICUT from [`adithya-s-k/manim_skill`](https://github.com/adithya-s-k/manim_skill)
(MIT), skills/manim-composer/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 3 skills; this is the one its entry stands for.
