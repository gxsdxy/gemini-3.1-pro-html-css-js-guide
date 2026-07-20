# Project 7: "Video 8" Website Homepage

A purely static text-and-image webpage can feel rigid. In modern web design, animations and interactions are key to improving user experience. This project will teach you how to embed videos/audio in your pages and utilize the powerful capabilities of CSS3 to create smooth transitions, transforms, and animations.

---

## Task 7-1: Embedding Multimedia

HTML5 natively supports multimedia playback, saying goodbye to the era of relying on third-party plugins like Flash.

### 1. Embedding Video (`<video>`)
```html
<video src="video.mp4" controls autoplay muted width="600"></video>
```
* `controls`: Displays the browser's native playback controls.
* `autoplay`: Starts playing automatically.
* `muted`: Mutes the video (many browsers require videos to be muted for autoplay to work).
* `loop`: Loops the playback indefinitely.

### 2. Embedding Audio (`<audio>`)
```html
<audio src="music.mp3" controls></audio>
```
The usage is very similar to the `<video>` tag.

---

## Task 7-2: CSS Transitions

Transitions allow an element to change values smoothly over a specified duration (usually used in conjunction with the `:hover` state).
Without transitions, changing a color on hover happens instantly. With transitions, it morphs smoothly.

**The core property `transition`**:
```css
.box {
    width: 100px;
    background-color: blue;
    /* Listen to 'all' properties, duration 0.5s, easing curve */
    transition: all 0.5s ease; 
}
.box:hover {
    width: 200px;
    background-color: red;
}
```
* **property**: The CSS property to transition (often `all`).
* **duration**: How long it takes (e.g., `0.3s`).
* **timing-function**: The speed curve (e.g., `ease`, `linear`).
* **delay**: How long to wait before starting.

---

## Task 7-3: CSS Transforms

Transforms allow you to translate, rotate, scale, or skew elements. They are usually paired with `transition` to create dynamic effects.

### 1. 2D Transforms
* `translate(x, y)`: Moves the element. Often used for precise centering of absolute positioned elements: `transform: translate(-50%, -50%);`.
* `scale(x, y)`: Resizes the element. `scale(1.2)` means scaling up to 1.2x size.
* `rotate(deg)`: Rotates the element. `rotate(45deg)` rotates 45 degrees clockwise.

### 2. 3D Transforms
When combined with the `perspective` property on a parent, elements can be rotated in 3D space, achieving cool effects like "card flipping."

---

## Task 7-4: CSS Animations

Transitions can only go from State A to State B. If you want a complex, continuous animation with multiple keyframes, you need CSS Animations.

### 1. Defining Keyframes (`@keyframes`)
```css
@keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}
```

### 2. Calling the Animation (`animation`)
```css
.ball {
    /* Name | Duration | Timing Func | Delay | Iteration Count */
    animation: bounce 1s linear 0s infinite;
}
```
* `infinite` means it will loop forever.

---

## Tasks 7-5 to 7-10: Practice - "Video 8" Homepage

We will use multimedia and animation effects to build a highly dynamic video website homepage:
1. **Multimedia Banner**: Use a `<video>` as a dynamic, looping background for the hero section, overlaying it with a dark mask.
2. **Card Hover Effects**: Utilize `transition` and `transform: scale()` so that when users hover over video thumbnails, the cards gently float up and enlarge, encouraging clicks.
3. **Loading Animation**: Use `@keyframes` to create a spinning loading indicator or a skeleton screen for when data is "loading."

---

## 🤖 AIGC-Assisted Programming: Generating CSS Animations

CSS3 animation syntax and calculations can be tedious. AI is an absolute godsend for generating CSS animations.
**Ask the AI:**
`/* Please write a CSS animation: Make an element act like a beating heart—scaling up slightly, then shrinking quickly, looping continuously. Provide the @keyframes and the corresponding class. */`
The AI will calculate the precise `transform: scale` values for different percentage marks, making complex effects effortless for you.