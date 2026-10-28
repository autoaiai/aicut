# Design systems

Use one only when the prompt does not state its own style (SKILL.md stage 2).

Each file is a base contract: adapt the palette, the copy and the details to the idea, and keep the mechanisms. When
none fits, write a new contract in the same sections — that is often the right answer.

| File | Fits |
| --- | --- |
| `drafting-table.md` | Designers, tools, process, engineering, "how it's made" |
| `swiss-kinetic.md` | Brands, launches, statements, events, tech |
| `editorial-ink.md` | Culture, food, books, craft, heritage, Chinese themes |
| `data-instrument.md` | Explainers, finance, science, products with numbers |
| `bold-poster.md` | Music, sport, youth, fashion, campaigns |
| `riso-halftone.md` | Indie, zines, retro, nostalgia, playful brands |
| `storybook-scene.md` | Stories, characters, music videos and lyric clips, picture books |

Every seed uses the same functions, all in `../pages.md`: `prog`, `EASE`, `settle`, `beats`, `stepped`, `wobble`,
`rand`, `ring`, `polygon`, `toPath`, `morphPts`, `drawOn`, `revealInset`, `revealCircle`, `counter`, `poseAt`. Copy
`lib/motion.js` from there into the film once; do not paste helpers into a scene.

The sound lines name instruments (`kick`, `pluck`, `scratch`, …). AICUT has no synthesiser: those are descriptions
of the effects to fetch with `npx -y @autoaiai/aicut@latest get` or to bring as files under `assets/`, one `<audio>`
clip per hit on the `T` block. Write the cue list down even when the files are not there yet, so the film can be
finished later without re-deciding the rhythm.
