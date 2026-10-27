# Third-party notices

The 86 visual styles in `assets/atlas/` — their covers, their descriptions and the reference code — come from
[Futurepedia — AI Style Atlas](https://www.futurepedia.io/resources/ai-style-atlas/view), archived 2026-10-26.

Copyright Futurepedia LLC, as displayed on the source site. They are kept here as reference material for a film's art
direction: the covers are shown to the person choosing a direction, and the code is read, never executed by AICUT.
Bundling them is not a claim of ownership or permission to redistribute.

What this skill adds is this folder's own writing — `SKILL.md`, `references/` and `scripts/atlas.mjs` — and the
conversion of the archive's per-style folders into one look-up table with de-duplicated shared code.

The archive shipped 86 explainer videos and 86 style clips (about 400 MB); they are not here. A style's time is in its
`code.js`, which is a pure function of `t` — a better record than a video, and small enough to travel with the skill.
