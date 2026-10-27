---
name: video-scrub
description: "video-scrub: the method the original skill taught, run as an AICUT film — pages that draw any moment t, cut on tracks. Runs in AICUT: the film is film.html, a page per shot, drawn by `aicut look` and `aicut render`."
license: Apache-2.0
source: "eternityspring/reelbench-skills"
---

# video-scrub

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


## video-scrub

把一条视频重建成干净文件：**画面和声音带过去，元数据一个字节都不带。**

`{baseDir}` = 本文件所在目录。脚本 `{baseDir}/scripts/video-scrub.mjs`，零依赖，`node` 直接跑。

### 原理：白名单，不是黑名单

清元数据有两种思路，差别是死活：

| | 怎么做 | 问题 |
| --- | --- | --- |
| 黑名单 | 列出要删的字段逐个删（exiftool 那种） | **删不完你不知道的东西**——厂商私有的 udta、GoPro 的遥测轨、码流里的 SEI，漏一个就漏了 |
| **白名单** | 不说删什么，只说**带什么过去**：画面一条流、声音一条流，别的一律不要 | —— |

走白名单，源片的元数据**没有任何通道**能进来。它不是「被删掉了」，是从来没被搬运。

但 ffmpeg 默认会背叛这个结构两次，必须摁住:

1. **它默认把源片的容器 tag 搬到输出** → `-map_metadata -1`
2. **它默认自动挑流**，会把 GoPro 的 `gpmd` 遥测轨一起带走 → `-map 0:v:0 -map 0:a:0?`

第 2 条是 GoPro / DJI 这类源片的唯一防线：**它们的 GPS 不在 tag 里，在一条独立的定时元数据轨上。**
清 tag 清不掉，只有「只挑两条流」挡得住。

### 真正的难点：看不见的那几层

摁住上面两条，tag 层就干净了，`ffprobe` 一片安静。**但文件里还躺着三处身份串**：

| 藏在哪 | 内容 | ffprobe 看得见 |
| --- | --- | --- |
| H.264 的 **SEI** | x264 完整参数串 `cabac=1 ref=3 … crf=23.0` | ✗ |
| AAC 码流的 **DSE** | `Lavc62.28.102` | ✗ |
| avc1 的 **compressorname** | `Lavc libx264` | ✗ |

五个藏身处和各自的堵法见 `{baseDir}/references/residue-map.md`——**每一条都有实测记录，
包括几个「看着该管用其实没用」的坑**（`-flags:v +bitexact` 和 `-x264-params info=0` 都拦不住 SEI）。

### 两种模式

| 模式 | 画面 | 音频 | 速度 | 多杀掉什么 |
| --- | --- | --- | --- | --- |
| **`copy`**（默认） | **逐字节照搬** | 重编 | 53 秒的片子 1.3 秒 | —— |
| `encode` | 重编码 | 重编 | 慢得多 | 码流域水印、脆弱隐写 |

音频**两种模式都重编**——AAC 的版本号写在 DSE 里，那是码流内部，`-c:a copy` 抹不掉它。
重编一遍很便宜，换来音轨干净。画面则在 copy 模式下**真的一个比特都没动**（`cmp` 验证过，
除了被摘掉的 SEI）。

**关于水印**：`encode` 比 `copy` 多杀的是码流域水印和脆弱隐写，这两类在实际素材里少见。
真正要命的**鲁棒像素水印**（SynthID、影视取证水印）设计目标就是扛住重编码，**两种模式都杀不掉**。
所以选模式按画质和速度选，别指望重编码能洗掉水印。

### 四个 profile

擦白之后往回写的那一层：

| profile | 写什么 |
| --- | --- |
| **`obs`**（默认） | OBS Studio 的长相。OBS 本来就是用 ffmpeg 封装的，所以这档不是伪造，是保持同类工具的正常外观 |
| `quicktime` | macOS QuickTime 录屏：`Core Media Video` / `Core Media Audio` |
| `screencapture` | ScreenCaptureKit 录屏 |
| `bare` | 什么都不写。**隐私强度最高**——不留任何可被证伪的声明 |

有一件事做不到，写在这里省得再试：容器的 `encoder` 字段由 muxer 自己占着，
`-metadata encoder=Lavf60.16.100` **盖不过去**，置空也清不掉（实测）。只有
`-fflags +bitexact` 能让它整个消失。所以 `obs` 档不伪造版本号，它就让 ffmpeg 写自己的真版本号。

---

### Step 0 — 先看源片带了什么

```bash
node {baseDir}/scripts/video-scrub.mjs inspect <video>
```
```
一屏列全：容器 tag、每条流的 tag 与 side data、章节，**以及码流里那几处 `ffprobe` 看不见的身份串**。
末尾会告诉你验收时要拿几根针去扫，以及 SEI 这刀动不动。

**先看这一屏再动手。** 尤其注意两件事：

- 有没有 `data` / `timecode` 流——有就说明源片可能带遥测轨（GoPro、DJI）
- 是不是 **HDR**——是的话 SEI 一律不删（下面说为什么）
```

### Step 1 — 清

```bash
node {baseDir}/scripts/video-scrub.mjs scrub <video> -o out.mp4
```
```
默认 `--mode copy --profile obs`。常用参数：
```
```bash
--mode encode          # 完整重编码
--profile bare         # 什么都不写，隐私强度最高
--crf 18               # 只在 encode 模式有意义
--date 2026-01-01T00:00:00Z   # 指定创建时间，不给就用当前时间
```

### Step 2 — 验收 ⛔ 不能跳

```bash
node {baseDir}/scripts/video-scrub.mjs verify <源> <输出>
```
```
或者一条龙（**日常就用这个**）：
```
```bash
node {baseDir}/scripts/video-scrub.mjs run <video> -o out.mp4
```
```
验收的核心是一句话：**前面全是「我调了正确的参数」，属于声称；这一步是「我扫了，真没了」，属于证明。**

做法是把源片所有元数据字符串抓出来当「针」——tag 的键和值、handler 名、章节标题——
在输出文件里做**字节级扫描**，扎到一根就红。

两条实现上的讲究：

- **针要 ≥5 字节**。更短的串会在压缩数据里随机撞出假阳性，跳过的针会在提示里列出来。
- **通用串不当针**。`VideoHandler` 满世界都是，信息量为零；`Lavf58.45.100` 钉死了一个版本，
  是指纹。分界线是「能不能把范围缩小到某个人、某台设备、某次导出」。
```

### 12 道门

| 门 | 拦什么 |
| --- | --- |
| 字节级残留 | 源片的元数据串扎中了输出 |
| tag 层残留 | 输出的 tag 值来自源片 |
| 位置信息 | 任何 GPS / location 字段 |
| 设备与软件标识 | make / model / software / artist / comment 之类 |
| 源片时间戳 | 输出的 creation_time 等于源片的 |
| 旋转矩阵 | encode 模式下旋转没烘进画面（copy 模式跳过——删了画面就是歪的） |
| 流构成 | 混进了 data / timecode / 附件流 |
| 章节 | 章节跟过来了 |
| 码流身份串 | SEI / DSE / compressorname 里还有编码器名字 |
| profile 相符 | 剩下的 tag 和声明的 profile 对不上 |
| 时长 | 输出被偷偷截断 |
| 可解码 | 产出了打不开的坏文件 |

### HDR 与内嵌字幕：SEI 这刀什么时候不许动

ffmpeg 只给得起 **NAL 级**的粒度——`filter_units` 按 NAL 类型删，
`h264_metadata` 也没有「只删某个 SEI payload」的选项。所以 `remove_types=6` 是
**全部 SEI 一起删**。而 SEI 里除了 x264 那串垃圾，还住着：

- **HDR 静态元数据**（mastering display / content light level）——删了会掉色，tone mapping 崩
- **CEA-608/708 内嵌字幕**——删了字幕没了

所以脚本的策略是：**只在真查到身份串时才动刀，HDR 源片一律不动**（会明说没动，
以及为什么）。这个判断由 `seiPlan()` 做，不需要你操心，但你该知道它在那儿。

### 边界（不做的事）

不去除水印（鲁棒像素水印重编码也杀不掉，别指望）、不改画面内容（不裁剪不缩放不旋转）、
不伪造设备型号和 GPS（profile 只写工具类信息，不编造拍摄设备和位置）、
不做批量目录扫描（一次一条片子）、不处理非 mp4/mov 之外的容器。

### 自测

```bash
node {baseDir}/scripts/selftest.mjs
```
```
117 项断言，不碰 ffmpeg、不碰真文件。**12 道门每道都有击穿用例**——证明它真的会拦。
改完脚本先跑这个。
```

## Source

Rewritten for AICUT from [`eternityspring/reelbench-skills`](https://github.com/eternityspring/reelbench-skills)
(Apache-2.0), skills/video-scrub/SKILL.md. The method is that skill's own; the way it runs is AICUT's.

The repository holds 3 skills; this is the one its entry stands for.
