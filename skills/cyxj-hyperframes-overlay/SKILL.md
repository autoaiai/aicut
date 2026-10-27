---
name: cyxj-hyperframes-overlay
description: "XCYJ AICUT 专属 overlay。用户用 AICUT、HF、HTML+GSAP、website-to-video、catalog block、npx hyperframes、XCYJ 教程视频时使用。必须叠加官方 AICUT skills，不替代官方 skill。 Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "chenyuxiaojin/cyxj-hyperframes"
---

# cyxj-AICUT-overlay

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


这是 XCYJ 的 HyperFrames 私有规则层。先按官方 HyperFrames skill（入口 `hyperframes`，按路由到 core / animation / creative / cli / registry / media）做正确实现，再套 XCYJ 视觉和生产纪律。

## 必读顺序

1. 官方 HyperFrames skill（GitHub 直连，16 个，`npx skills` 管理）：入口 `hyperframes`（READ FIRST，会路由到具体 workflow）→ 按任务加载 `hyperframes-core`（HTML 结构契约）、`hyperframes-animation`（动画 / GSAP / 七适配器 / 镜头蓝图）、`hyperframes-creative`（设计 / 排版 / 节奏 / 旁白）、`hyperframes-cli`（dev loop）、`hyperframes-registry`（catalog 零件）、`hyperframes-media`（TTS / 转写 / 抠像）；成片配方按需用 `website-to-video` / `motion-graphics` / `embedded-captions` / `graphic-overlays` 等。
2. `../../notes/MY_VISUAL_DNA.md`
3. `../../notes/MY_MOTION_NOTES.md`
4. `../../rules/hyperframes/hyperframes-rules.md`
5. `../../rules/hyperframes/effects-catalog.md`

## 资产和模板（路径从仓库根 `hyperframes/` 起）

```text
资源库/logos/                         # 33 个 AI 厂商 / 工具 SVG（产品引用用真 logo）
组件库/COMPONENTS.json  # ⭐ 组件注册表（可复用零件单源 = Remotion 镜头库，写前必查）
组件库/README.md        # 组件库人读索引 + 登记仪式
参考/catalog.json                # 官方 HeyGen catalog 零件（另一套，勿混）

# 当前无内置起步模板：起新片从空白起步（npx hyperframes init --example blank）
```
复用零件先查 `组件库/COMPONENTS.json`，写前按 [BLOCKING-REUSE] 4 处扫描（本工程 / 注册表 / 历史 `视频项目/已发布/` / 官方 catalog）。组件**单一真源在 `组件库/`**（`cyxj/templates/` 为待废弃镜像，勿在那边加）。使用模板后，把需要长期渲染的素材复制到具体工程自己的 `assets/`。
```

## 关键纪律

- 不在顶层 `视频制作台/` 跑 CLI。
- 不手改官方 skill。
- 写 composition 前做复用扫描。
- Remotion 代码不进入 HyperFrames 工程。

## Source

Rewritten for AICUT from [`chenyuxiaojin/cyxj-hyperframes`](https://github.com/chenyuxiaojin/cyxj-hyperframes)
(MIT), 制作规范/skills/cyxj-hyperframes-overlay/SKILL.md. The method is that skill's own; the way it runs is AICUT's.
