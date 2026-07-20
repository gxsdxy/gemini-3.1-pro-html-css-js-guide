# Project 4: "Love Home" Corporate Site Homepage

Web typography is not just about text and colors; it's heavily about arranging elements. This project dives into the core mechanism of web layout—the **Box Model**—and teaches you floating and positioning techniques to complete a complex corporate website homepage.

---

## Task 4-1: Understanding the Box Model

In CSS, all HTML elements can be considered rectangular boxes. Understanding the box model is the key to mastering web layout.

A complete box model consists of four parts, from inside out:
1. **Content**: What is inside the box (text, images, etc.).
2. **Padding**: The distance between the content and the border (like bubble wrap inside a shipping box).
3. **Border**: The edge of the box (like the cardboard of the shipping box).
4. **Margin**: The distance between this box and other surrounding boxes.

---

## Task 4-2: Basic Box Model Properties

Let's look at how to set each part of the box in detail:

### 1. Border
* `border-width`: Thickness of the border.
* `border-style`: Style (`solid`, `dashed`, `dotted`).
* `border-color`: Color of the border.
* **Shorthand**: `border: 1px solid #ccc;`

### 2. Padding
* `padding: 10px;` (10px on all four sides)
* `padding: 10px 20px;` (Top/Bottom 10px, Left/Right 20px)
* `padding: 10px 20px 30px 40px;` (Top, Right, Bottom, Left - clockwise)

### 3. Margin
Usage is similar to padding.
> [!TIP] Pro Tip
> Using `margin: 0 auto;` on a block-level element with a specified width will **horizontally center** it within its parent element.

### 4. Width and Height
* These properties set the dimensions of the **Content** area, not the entire box.
* Actual Total Width = width + left/right padding + left/right border + left/right margin.

### 5. Background Properties
* `background-color`: Background color.
* `background-image`: Background image.
* `background-repeat`: Whether the image tiles (`no-repeat` prevents tiling).
* `background-position`: Position of the background image.

---

## Task 4-3: New Box Model Properties (CSS3)

CSS3 brought some beautiful visual effects to the box model.

### 1. Border Radius (`border-radius`)
Rounds the sharp corners of a box.
* `border-radius: 10px;`
* If a box is perfectly square, `border-radius: 50%;` turns it into a circle.

### 2. Box Shadow (`box-shadow`)
`box-shadow: 5px 5px 10px rgba(0,0,0,0.3);` (Horizontal offset, vertical offset, blur radius, color).

### 3. Gradients
You can set linear (`linear-gradient`) or radial gradients for backgrounds.

### 4. Opacity
Sets the transparency of an element, ranging from `0` (completely transparent) to `1` (completely opaque).

---

## Task 4-4: Element Types and Conversion

HTML elements mainly fall into two categories:
* **Block-level**: e.g., `<div>`, `<p>`, `<h1>`. They occupy a full line and can have width/height set.
* **Inline**: e.g., `<span>`, `<a>`. They do not occupy a full line; setting width/height has no effect.
* **Inline-block**: e.g., `<img>`. Does not occupy a full line, but can have width/height set.

**Conversion**: Use the `display` property.
* `display: block;`
* `display: inline-block;`

---

## Task 4-5: Floating Elements (`float`)

To make multiple block-level elements sit side-by-side (like menu items in a navbar), the classic method is floating.
* `float: left;`
* `float: right;`

**Clearing Floats**: Floated elements are taken out of normal document flow, which can cause parent elements to collapse to zero height. Common fixes:
1. Extra tag method: `<div style="clear: both;"></div>`.
2. Set parent `overflow: hidden;`.
3. **Best Practice**: Use the `:after` pseudo-element to clear floats (`.clearfix`).

---

## Task 4-6: Element Positioning (`position`)

When we need to pin an element to a corner of the screen or overlap elements, we use positioning.
* **static**: Default, normal document flow.
* **relative**: Moves relative to its normal position. Original space is preserved.
* **absolute**: Moves relative to its closest **positioned** ancestor. Removed from normal flow.
* **fixed**: Positioned relative to the browser window. It stays in place when scrolling.

> [!IMPORTANT] Core Rule
> **"Absolute Child, Relative Parent"**: Use absolute positioning on the child element, and relative positioning on the parent element. This is the most frequently used positioning combination in web development!

---

## Tasks 4-7 to 4-11: Practice - "Love Home" Homepage

Combining floats and positioning, we will build the "Love Home" corporate site:
1. **Nav and Banner**: Use floats for horizontal navigation. Use relative positioning for the Banner wrapper.
2. **Hot Recommendations**: Use floats to align multiple product cards horizontally, adding `box-shadow` for depth.
3. **Floating Widget**: Use `fixed` positioning to create an "Online Customer Service" button pinned to the right side of the screen.

---

## 🤖 AIGC-Assisted Programming: Generating Float Styles

The CSS code to clear floats using pseudo-elements can be long and hard to memorize.
Ask AI to write it for you:
`/* Please provide a classic clearfix CSS snippet for clearing floats */`
Drop the generated `.clearfix` code into your global CSS file and use it everywhere!