---
name: 3d-asset-generation
description: "Generate, reconstruct, inspect, and route production 3D assets for AICUT worlds using Atlas Cloud, fal.ai, licensed catalogs, and Blender. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "calesthio/OpenMontage"
---

# 3D Asset Generation

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


Use this skill when a production needs real meshes rather than primitive stand-ins.
It complements `threejs-world-generation`: that skill owns semantic world planning;
this skill owns how unique and repeated meshes enter the world with provenance.

## Route by asset role

| Need | Tool | Model/path | Why |
|---|---|---|---|
| Repeated vegetation, rocks, generic props | `threejs_asset_catalog` | CC0 Kenney catalog | Free, coherent, instancing-friendly |
| Unique object described in words | `atlas_3d` | `tripo-h3.1/text-to-3d` | Direct textured/PBR GLB with seeds and face limit |
| Object matching a concept image | `fal_3d` | Hunyuan 3D v3.1 Rapid image-to-3D | Better silhouette/style conditioning from one image |
| Several objects extracted from one regional composition | `fal_3d` | SAM 3D Objects | Individual and combined GLBs plus placement metadata |
| Terrain, composition, lighting, camera, final frames | `blender_world` | Blender 4.5 LTS / Eevee Next | Scene-level control; generated-asset APIs are not world renderers |

Never ask a text-to-3D model to generate a whole cinematic world in one mesh.
Generate hero objects, use licensed catalogs for high-volume scatter, and assemble
everything in Blender from a semantic specification.

## Paid-call discipline

Before every first provider call, state the exact provider, model, operation,
estimated unit cost, and number of requested outputs. Generate one sample before
a batch. As of 2026-08-13:

- Atlas Tripo H3.1: $0.22 untextured; $0.33 standard textures; $0.44 HD
  textures; detailed geometry adds $0.22; quad mesh adds $0.055.
- fal Hunyuan 3D v3.1 Rapid: $0.225 per generation; PBR adds $0.15.
- fal SAM 3D Objects: $0.02 per reconstruction.

Pricing changes. Confirm the provider page before quoting or running a batch.

## Asset prompt contract

Each request describes one isolated object, not a shot:

1. Name the object and silhouette.
2. Specify construction materials and visible wear.
3. Specify the project's art style and color constraints.
4. State scale and orientation.
5. Exclude ground plane, backdrop, extra objects, labels, and lighting rigs.

For image-to-3D, use a simple background and make the object occupy more than
half the frame. Request PBR only for assets close enough to benefit from it.

## Mandatory mesh QA

Do not approve from the provider thumbnail alone. Import the downloaded artifact
into Blender and inspect:

- front, rear, and silhouette;
- geometry holes and floating pieces;
- ground contact, scale, and orientation;
- UV seams and missing texture slots;
- base-color, roughness, metallic, and normal response;
- triangle count and whether the intended camera distance justifies it.

Record provider, model id, prompt, seeds, source page, cost, and output path in
the asset provenance manifest. Failed samples remain failed; do not silently
swap provider or spend on another model.

### Assembly normalization is mandatory

Provider and catalog GLBs rarely share units, origins, or up-axis assumptions.
Never compensate with arbitrary scene-level scale guesses. The Blender assembly
spec declares `target_height`; the renderer measures the imported bounding box,
normalizes to that target, and offsets the bounding-box floor to the sampled
terrain height. Review the resulting real-world scale and ground contact.

Repeated scatter must declare semantic `exclusion_zones` around settlements,
roads, rivers, landmark apertures, and hero camera sightlines. Density that
occludes the subject is not production detail. Waterways and paths must use flat
terrain-following ribbons; beveled 3D curves read as pipes from aerial cameras.

Landmarks whose reveal timing matters declare visibility windows in the scene
spec. Camera occlusion remains preferred for natural reveals, but deterministic
visibility keys are the hard guarantee for approved timing.

## World fidelity budget

A reference-grade region needs three simultaneous density layers:

- macro: authored terrain silhouettes, waterways, paths, settlements;
- meso: hero buildings, bridges, cliffs, canopy clusters, props;
- micro: ground cover, rocks, flowers, debris, material breakup.

The asset gate must show global, regional, and walk-height Blender stills. A
wide aerial alone can hide broken contacts; a walk shot alone can hide an empty
world. Primitive-only previews must be labeled `blockout` and cannot pass as a
production-fidelity review.

For a final animation, render a small bounded frame range first and measure the
per-frame time. Choose the full-render resolution from that measurement rather
than intuition, render a numbered PNG sequence, and call `blender_world` with
`resume: true` after interruption so it starts at the first missing frame.

## Source

Rewritten for AICUT from [`calesthio/OpenMontage`](https://github.com/calesthio/OpenMontage)
(MIT), .agents/skills/3d-asset-generation/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 140 skills; this is the one its entry stands for.
