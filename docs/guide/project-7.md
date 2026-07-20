# 项目7 “视频8”网站首页制作

纯静态的图文网页难免让人觉得死板。在现代网页设计中，动效是提升用户体验的关键。本项目将带你学习如何在网页中插入视频/音频，并利用 CSS3 的强大能力实现各种流畅的过渡、变形和动画效果。

---

## 任务 7-1 在网页中嵌入多媒体

HTML5 原生支持了多媒体播放，告别了过去依赖 Flash 插件的时代。

### 1. 嵌入视频 (`<video>`)
```html
<video src="video.mp4" controls autoplay muted width="600"></video>
```
* `controls`：显示浏览器原生的播放控件。
* `autoplay`：自动播放。
* `muted`：静音（许多浏览器要求静音后才能自动播放）。
* `loop`：循环播放。

### 2. 嵌入音频 (`<audio>`)
```html
<audio src="music.mp3" controls></audio>
```
使用方法与 `<video>` 类似。

---

## 任务 7-2 CSS 过渡效果 (Transition)

过渡用于让元素从**一种样式平滑地过渡到另一种样式**（通常配合 `:hover` 悬停使用）。
如果没有过渡，鼠标悬停颜色会瞬间突变；加上过渡后，变化会变得非常丝滑。

**核心属性 `transition`**:
```css
.box {
    width: 100px;
    background-color: blue;
    /* 监听所有属性的变化，动画持续 0.5秒，速度曲线为 ease */
    transition: all 0.5s ease;
}
.box:hover {
    width: 200px;
    background-color: red;
}
```
* **property**: 要过渡的 CSS 属性（常用 `all`）。
* **duration**: 持续时间（如 `0.3s`）。
* **timing-function**: 运动曲线（如 `ease` 缓动，`linear` 匀速）。
* **delay**: 延迟多久开始。

---

## 任务 7-3 CSS 变形效果 (Transform)

变形可以实现元素的平移、旋转、缩放或倾斜。它通常配合 `transition` 一起使用以产生动效。

### 1. 2D 变形
* `translate(x, y)`：平移。常用于让绝对定位的元素精确居中：`transform: translate(-50%, -50%);`。
* `scale(x, y)`：缩放。`scale(1.2)` 表示放大 1.2 倍。
* `rotate(deg)`：旋转。`rotate(45deg)` 表示顺时针旋转 45 度。

### 2. 3D 变形
配合透视属性 (`perspective`)，可以让元素在三维空间内旋转，实现比如“卡片翻转”的酷炫效果。

---

## 任务 7-4 CSS 动画效果 (Animation)

过渡 (`transition`) 只能定义开始和结束两个状态。如果你想定义一段连贯的、包含多个关键帧的复杂动画，就需要使用 Animation。

### 1. 定义关键帧 (`@keyframes`)
```css
@keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}
```

### 2. 调用动画 (`animation`)
```css
.ball {
    /* 动画名称 持续时间 运动曲线 延迟 循环次数 */
    animation: bounce 1s linear 0s infinite;
}
```
* `infinite` 表示无限次循环播放。

---

## 任务 7-5 至 7-10 实战：“视频8”网站首页制作

我们将运用多媒体和动画特效，打造一个动感十足的视频网站首页：
1. **多媒体 Banner**：使用 `<video>` 作为 Banner 的动态背景，并加上深色遮罩。
2. **卡片悬浮特效**：利用 `transition` 和 `transform: scale()`，实现鼠标悬停在视频卡片上时，卡片微微浮起并放大的效果，增加点击欲望。
3. **加载动画**：利用 `@keyframes` 制作一个数据加载时的骨架屏或旋转 Loading 动画。

---

## 🤖 AIGC 辅助编程：在网页中生成动画

CSS3 动画的语法和参数非常复杂。AI 是生成 CSS 动画的绝对神器。
**向 AI 提问：**
`/* 帮我写一个 CSS 动画：让一个元素像心跳一样，先稍微放大一点，然后迅速收缩，持续循环播放。包含 @keyframes 和对应的 class。*/`
AI 会完美计算出各个百分比节点的 `transform: scale` 值，让你轻松实现复杂动效。