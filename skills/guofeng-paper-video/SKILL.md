---
name: guofeng-paper-video
description: "用一套可复用的「国风纸片动画」风格资产 + AICUT，把一首诗 / 一个成语 / 一则寓言做成一条带配音的国风短片。给 Claude Code / Codex 读，它照着这套风格和流程搭新片。 Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: MIT
source: "AllenAI2014/remotion-guofeng-starter"
---

# 国风纸片动画 · 制作流程 Skill

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


这个仓库有两半：

- **风格资产**（`style/` + `src/components`、`src/style`、`src/lib`）——跟具体故事解耦的国风视觉 DNA、色卡、纸片规范、图层运动预设、提示词模板。这是"可复用"的部分。
- **这份 SKILL.md**——教 AI 用上面那套风格，从零搭一条**新**片的流程。

`src/examples/` 里的《守株待兔》是用这套风格做出来的**演示**，不是"产品本体"。你不是来拿走这一条片，是来用这套风格做你自己的片。

## 何时用

用户给你一首诗 / 一个成语 / 一则寓言 / 一个要讲的小概念，想做成一条"国风纸片拼贴"风格的短视频，且**不想剪辑**（全程代码渲染，不进剪映）。

## 前置

- Node 18+（建议 20+）、`npm install` 过。
- 中文字体：宋体 / 楷体 / 苹方（macOS 自带；Windows / 云端要装，否则中文走形）。
- 先读 [`style/design.md`](style/design.md) 和 [`style/palette.md`](style/palette.md) 把风格吃进去——**这一步别跳**，后面所有决定都以它为准。

## 可复用件清单（搭片时直接用，别重写）

| 件 | 位置 | 干嘛 |
|---|---|---|
| `PaperCollageLayer` | `src/components/PaperCollageLayer.tsx` | ★核心：一张纸片的入场回弹 + 呼吸浮动 + 纸投影，你只填 spec |
| `FieldPlate` | `src/components/FieldPlate.tsx` | 背景大图层 + 推镜 + 干/暖色调 |
| `PaperTag` | `src/components/PaperTag.tsx` | 撕边纸标签（宋体大标题 + 小注） |
| `StoryCaption` | `src/components/StoryCaption.tsx` | 底部四向描边字幕 |
| `guofeng` / `C` | `src/style/palette.ts` | 国风色卡 token |
| `clamp` | `src/lib/anim.ts` | interpolate 两端钳住的简写 |

---

## 模式 A · 先跑通示例（10 分钟摸到门道）

啥也别改，先出片感受这套风格。两条案例分别展示成语叙事和古诗意境：

```
npm run render                # → 《守株待兔》（带声，25.5 秒）
npm run render:jiang-xue      # → 《江雪》（带声，88 秒）
npm run studio                # 打开可视化预览，逐帧查看两条 composition
```
```
做成语、寓言时，优先参考 `src/examples/IdiomShouZhuDaiTu.tsx` 的分镜结构；做古诗意境和人物入画时，参考 `src/examples/PoemJiangXue.tsx` 的长时间轴、雪景氛围和纵向诗句。两条片共享的是风格与分层方法，不是换几个参数就自动套出的同一条模板。摸熟了再进模式 B。

---
```

## 模式 B · 给一首诗 / 一个成语，出一条新片

六步。每步都给"可以直接对 Claude Code / Codex 说的话"。

### 1. 读风格
```
读 style/design.md 和 style/palette.md，用一段话复述这套国风风格的视觉和运动规则，确认你理解了再往下。
```

### 2. 分镜
用 [`style/prompts/01-分镜表.md`](style/prompts/01-分镜表.md) 的模板，产出**分镜表 + 纸片清单**。确认分镜再往下——分镜错了，后面全白做。

### 3. 生成纸片
用 [`style/prompts/02-生成纸片.md`](style/prompts/02-生成纸片.md) 的图像提示词，一张张出白描透明纸片 + 一张背景大图，抠边，按 [`style/纸片素材规范.md`](style/纸片素材规范.md) 命名放进 `public/style/{新slug}/`。
> 生图工具看你用谁：**Codex** 能直接生图（自带图像生成），最省事；**Claude Code** 自己不出图，得另接一个图片生成 API，或用即梦 / Lovart / MJ 生完再放进来。抠透明底这步都得你手动过一下工具（remove.bg / 即梦去背 / PS），Agent 代跑不了。

### 4. 搭 composition
```
根据内容类型参照 src/examples/IdiomShouZhuDaiTu.tsx 或 src/examples/PoemJiangXue.tsx，在 src/examples/ 新建 {新slug}.tsx。
按分镜表，每镜一个 Sequence（120 帧/4 秒起）：
- 背景用 FieldPlate（src 指向新片的 field-plate）
- 每张纸片用 PaperCollageLayer，按 style/分镜与图层规范.md 填 spec：
  主角给 role='primary'、远景给 'tertiary'，delay 错开入场
- 每镜配一句 StoryCaption 旁白，需要说明的地方加 PaperTag
颜色只用 src/style/palette.ts 里的 token。总时长常量 = 帧数（秒×30）。
```
```
细则见 [`style/分镜与图层规范.md`](style/分镜与图层规范.md)。**只搭画面，音频下一步。**
```

### 5. 配音 + 音效
用 [`style/prompts/03-配音脚本.md`](style/prompts/03-配音脚本.md)：整理配音脚本 → **MiniMax** 合成 `vo-0x.wav` → 放 `public/audio/{新slug}/` → 在新片里写一个 `StoryAudio`（ambient 打底 + 每句 vo 卡镜 + 转场/撞击音效）。

### 6. 注册 + 预览 + 出片
```
在 src/Root.tsx 里给新片加一个 <Composition />（id、component、durationInFrames、fps=30、1920×1080）。
然后 npm run studio 预览逐帧调，npm run render 出片。
```
```
预览里不对就回上一步改一句需求，重渲染。**你改的是"需求"，不是一帧帧 K 帧。**

---
```

## 模式 C · 从一部参考片提炼新风格（进阶，可选）

想把这套"纸片拼贴"的做法迁到**另一种画风**（比如敦煌、水墨、剪纸）：不要照抄参考片的角色和剧情，只提炼**可复用的视觉语法**——

```
看这几张参考图 / 这条参考片，只提炼可复用的东西，别抄具体内容：
1. 一份色卡（HEX + 用途），覆盖 src/style/palette.ts
2. 构图 / 镜头 / 材质规则，更新 style/design.md
3. 纸片该长什么样，更新 style/纸片素材规范.md 和生图提示词
把参考片里的角色、剧情、专有元素列进一份「不要照搬」清单。
```
```
产出的是新的 `style/`，`src/components` 那套运动件不动，照样复用。

---
```

## 坑（都是踩过的）

- **字体**：非 macOS 环境中文会 fallback 走形，先装宋体 / 楷体 / 苹方，或改 `fontFamily`。
- **音频别漏**：换素材时容易只顾换图、漏掉音频目录，`render` 会报"找不到文件"。音频目录整个带上。
- **纸片别带字**：中文交给代码渲染（零错字）；纸片图上写字 = 把这个优势丢了。
- **别一个 role 到底**：所有纸片同 role，画面会整体平移、没纵深。主角 primary、远景 tertiary。
- **这不是一键生成器**：分镜、拆纸片、节奏是创意活，AI 帮你落地、替你决定不了。它给的是一套能复用的风格 + 一条能照抄的流程。

## Source

Rewritten for AICUT from [`AllenAI2014/remotion-guofeng-starter`](https://github.com/AllenAI2014/remotion-guofeng-starter)
(MIT), SKILL.md. The method is that skill's own; the way it runs is AICUT's.
