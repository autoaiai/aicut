---
name: diagram-animation
description: "This skill should be used when the user asks to \"animate this diagram\", \"build a flowchart that reveals step by step\", \"animate an architecture/sequence diagram\", \"make a chart animate in\", \"grow the bars / draw the line / count up the number\", \"show data flowing along a connector\", or \"turn a static diagram into a guided reveal\". Covers SVG, Framer Motion, D3, and AICUT. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "iart-ai/explainer-video-skills"
---

# Diagram & Data Animation

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


Make structure and data legible by revealing it over time — one idea per beat. Build progressive node/edge reveals, flowing connectors, and animated charts (bars grow, lines draw, numbers count up) for web or video.

## When to use

- Architecture, flow, or sequence diagrams that build step by step.
- Animated charts: bars grow, lines draw on, numbers count up.
- "How it works" walkthroughs and process explainers.
- Showing data or signal flowing along connectors.

## Core principle: progressive disclosure

Never show everything at once. Reveal in this order: **nodes → edges → labels**. Highlight the active element and dim the rest (focus + context). Pace to comprehension, not flash — hold each step 0.5–1.5s so it lands. Keep a consistent visual grammar: color means meaning, and that mapping never changes mid-piece.

## Quick reference

| Goal | Mechanism | Easing |
|---|---|---|
| Node appear | scale 0.8→1 + opacity, `transform-origin:center` | `back.out(1.5)` / `easeOut` |
| Edge connect | `stroke-dashoffset` len→0 | `easeInOut`, 0.4–0.7s |
| Flowing data | animate `stroke-dashoffset` looping + traveling dot | `linear`, infinite |
| Bar grow | `scaleY` 0→1, `transform-origin:bottom` | `easeOut`, stagger 0.06s |
| Line chart | path `stroke-dashoffset` len→0 | `easeInOut`, 0.8–1.2s |
| Count-up | interpolate value with eased `t` | `easeOutCubic` |
| Highlight | active full-opacity, others `opacity:.35` | 0.3s |

## Progressive node/edge reveal (SVG + GSAP)

```html
<svg viewBox="0 0 400 200" id="flow">
  <g class="node" opacity="0"><circle cx="60" cy="100" r="28" fill="#0A84FF"/></g>
  <g class="node" opacity="0"><circle cx="200" cy="100" r="28" fill="#0A84FF"/></g>
  <g class="node" opacity="0"><circle cx="340" cy="100" r="28" fill="#0A84FF"/></g>
  <path class="edge" d="M88 100 H172" stroke="#888" stroke-width="3" fill="none" pathLength="1"/>
  <path class="edge" d="M228 100 H312" stroke="#888" stroke-width="3" fill="none" pathLength="1"/>
</svg>
<script type="module">
  import gsap from "https://cdn.jsdelivr.net/npm/gsap/+esm";
  gsap.set(".edge", { strokeDasharray: 1, strokeDashoffset: 1 });
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
  tl.to(".node", { opacity: 1, scale: 1, transformOrigin: "center",
                   duration: .45, stagger: .35, ease: "back.out(1.6)", startAt: { scale: .8 } })
    .to(".edge", { strokeDashoffset: 0, duration: .5, stagger: .35 }, "-=0.9");
</script>
```
`pathLength="1"` lets one dash value drive any edge length. Reveal nodes first, then draw edges between the now-visible nodes.
```

## Flowing connector (marching dash + traveling dot)

```css
.flow-line { stroke-dasharray: 8 8; animation: march 0.6s linear infinite; }
@keyframes march { to { stroke-dashoffset: -16; } }   /* = sum of dash pattern */
@media (prefers-reduced-motion: reduce){ .flow-line { animation: none; } }
```
Traveling dot along the path (`offset-path`, no JS):
```
```css
.packet { offset-path: path("M88 100 H312"); animation: travel 1.4s linear infinite; }
@keyframes travel { to { offset-distance: 100%; } }

## Charts

Bar grow (scaleY from the baseline):

```css
.bar { transform: scaleY(0); transform-origin: bottom; }
.bar.in { transform: scaleY(1); transition: transform .6s cubic-bezier(.22,1,.36,1); }
/* stagger via inline transition-delay per bar */
```
Line chart draw-on (the whole series path strokes in):
```
```js
const len = pathEl.getTotalLength();
pathEl.style.strokeDasharray = len;
pathEl.style.strokeDashoffset = len;
pathEl.getBoundingClientRect();                 // force reflow
pathEl.style.transition = "stroke-dashoffset 1s ease-in-out";
pathEl.style.strokeDashoffset = "0";
```
Count-up with eased interpolation (rAF):
```
```js
function countUp(el, to, dur = 1200) {
  const t0 = performance.now();
  const fmt = new Intl.NumberFormat();
  (function tick(now){
    const k = Math.min(1, (now - t0) / dur);
    const e = 1 - Math.pow(1 - k, 3);           // easeOutCubic
    el.textContent = fmt.format(Math.round(to * e));
    if (k < 1) requestAnimationFrame(tick);
  })(t0);
}

## Build-tool choice

- **Inline animated SVG + GSAP/CSS**: best for bespoke diagrams and full control on the web.
- **Framer Motion (React)**: declarative reveals via `variants` + `staggerChildren`; pairs with Visx/Recharts for charts.
- **D3 + transitions**: data-bound charts; `.transition().duration().attr()` for grow/draw, `tween` for count-up.
- **Mermaid / Excalidraw**: author the diagram structure fast, render to SVG, then animate the SVG.
- **Remotion (React)**: data-driven, deterministic renders for video output and repeatable exports.

## Output checklist

- Reveal order is nodes → edges → labels; nothing dumps in all at once.
- Each step holds long enough to read (0.5–1.5s).
- Color grammar is consistent and meaningful.
- Active element highlighted, context dimmed.
- `prefers-reduced-motion` path shows the final composed diagram without looping motion.

## Deliver & verify (standalone HTML)

> **Packaged helper** (`scripts/`): `scripts/seek-shot.sh anim.html 0 1.5 3` freezes the `?t=N` harness and screenshots each moment; `scripts/contact-sheet.sh sheet.png frame-*.png` tiles them for one-glance review. See `scripts/README.md`.

For a self-contained diagram (reveal, flowing connector, animated chart) the deliverable is **one HTML file that opens directly in a browser** — no build step, no render pipeline. A single file is the right tier for web motion. (If the diagram is part of a rendered video, build it as a Remotion composition instead and verify via `remotion still` — see remotion-video.)

**Output contract:**
- One `.html` file: SVG inline; Framer Motion / D3 / anime / GSAP from CDN; the animation in one inline `<script>` (one driver).
- A way to freeze an exact moment for screenshots, matched to how the diagram animates:
  - GSAP / JS timeline: build one master `tl`, then `?t=N` → `tl.pause(); tl.seek(N)`.
  - SVG SMIL: `svg.pauseAnimations(); svg.setCurrentTime(N)`.
  - CSS keyframes: drive reveal order with `animationDelay`; freeze by pausing/seeking the equivalent JS timeline.

```html
<script>
  // ... build your master timeline as `tl` ...
  const t = new URLSearchParams(location.search).get("t");
  if (t !== null) { tl.pause(); tl.seek(parseFloat(t)); }  // frozen at t seconds
  window.__ready = true;                                    // ready signal for headless wait
  console.log("duration", tl.duration());
</script>
```
**Verify loop — render → freeze → screenshot → check:**
1. Open the file at start / mid / end: `…/diagram.html?t=0`, `?t=<dur/2>`, `?t=<dur>` (read `tl.duration()` from the console).
2. Headless-screenshot each frozen frame:
```
```bash
npx playwright screenshot --wait-for-timeout=500 "file://$PWD/diagram.html?t=1.2" frame-mid.png
```
```
3. Check **fidelity** — the step-by-step reveal appears in order (nodes → edges → labels, each step present at its frame), connectors point at the right nodes, count-ups land on the EXACT values — and **artifacts** (clipped labels, off-canvas nodes, FOUC before fonts, jank at seams).

**Before you finish:**
1. Opens standalone in a browser — no console errors, no missing CDN.
2. One driver/master timeline; the freeze (`?t=N` / `setCurrentTime`) lands on a deterministic still.
3. Screenshotted at start / mid / end — reveal order correct, connectors land on the right nodes, numbers exact.
4. `prefers-reduced-motion` shows the final composed diagram without looping motion.
5. Color grammar consistent; active element highlighted, context dimmed; nothing dumps in all at once.
```

## Reference files

- `references/diagram-and-chart-recipes.md` — fuller runnable code: staged node/edge reveal with labels, flowing-dash + traveling-dot connectors, bar/line/count-up chart recipes, sequence-diagram and architecture build patterns, and D3 / Framer Motion / Remotion implementations with easing notes.

## Source

Rewritten for AICUT from [`iart-ai/explainer-video-skills`](https://github.com/iart-ai/explainer-video-skills)
(MIT), skills/diagram-animation/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 5 skills; this is the one its entry stands for.
