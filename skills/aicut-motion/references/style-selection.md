# Three covers, one card

The first turn is a decision about direction. Everything here is about making that decision easy to take: three
pictures the person can actually see, three names, one click.

## Choosing the three

Read `references/style-index.json` — all 86 rows — before choosing, and open the poster and `style.json` of each
candidate. Three that are near each other in family are three ways of saying the same thing; three that differ in
**how they explain** are a real choice:

- one whose mechanism is drawing (whiteboard, Manim, isotype, blueprint, transit map);
- one whose mechanism is material or craft (watercolour, paper cut, clay, felt, cross-stitch, mosaic);
- one whose mechanism is graphic or photographic (halftone, risograph, editorial chart, blueprint negative, neon).

A topic about a process usually wants the first. A topic about a feeling or a person wants the second. A topic about
numbers wants the third. Say why each fits *this* topic in one sentence — not what the style is, but what it would do
for this film.

## Getting the covers into the project

The card draws pictures from the project's own folder, so copy the three covers in first. From the project folder:

```sh
node .pi/skills/aicut-motion/scripts/atlas.mjs --pick 32,26,2
```

It prints the three with the path each will be given as `picture` (`assets/style-pick/032-sumi-e-ink-wash.jpg` and so
on). Ids may be numbers, folders (`032-sumi-e-ink-wash`) or a unique part of a name; a number that names nothing stops
with an error rather than picking a neighbour. `--into pictures/picks` copies them elsewhere and prints those paths.

If the project has no copy of this skill under `.pi/skills` — the skill was read from the app's own folder — run the
same script by that path; what matters is where the covers land, not where the script is.

## The ask

One question, two to five options, the recommended one first, the three labels short enough to read on a card:

```js
ask({ questions: [{
  question: '这次片子想用哪一种视觉风格？选定后我先做一段约 20 秒的样片。',
  header: '视觉方向',
  options: [
    { label: 'A · 报刊数据图表 Editorial Chart', description: '为什么它适合这个选题', picture: 'assets/style-pick/026-editorial-chart.jpg' },
    { label: 'B · 水墨晕染 Sumi-e Ink Wash', description: '…', picture: 'assets/style-pick/032-sumi-e-ink-wash.jpg' },
    { label: 'C · 水彩晕染 Watercolor Wash', description: '…', picture: 'assets/style-pick/002-watercolor-wash.jpg' },
  ],
}]})
```

- Label, `description` and `picture` must describe **the same style** — a card whose picture and name disagree is
  worse than no card.
- `picture` is a path inside the project, forward slashes, no leading `/`, no `file://`, no CDN.
- The card is the answer; do not also ask the same question in words in the same turn.

Before the card, one or two lines are enough: what the person should understand by the end, and that the pictures are
the styles' own covers — the subject in them is not their topic, and the sample will be.

## After the card

The answer comes back as the picked label (or the person's own words). Record the style id with it. Then go straight to
the sample: no second card, no second shortlist, no generated images.

If the person names a style that was not among the three — from an earlier message, or by name — take it. Match by
`nameZh`, `name`, id or folder; when two match, ask which, in words.

## Without the picture card

Some hosts' question tools take text only. Then the three covers still have to be seen: give each option's real path
in the reply (`assets/style-pick/026-editorial-chart.jpg`) beside its name, and ask in words. Never say “above” or
“如图” about a picture the person cannot see, and never describe a cover you did not open.
