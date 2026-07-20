# Project 3: "Online Florist" Topic Page

After the previous project, you are now capable of building the "skeleton" of a web page. However, a pure HTML page without styling looks like an unfurnished house. In this project, we will introduce the second of the frontend trio—**CSS (Cascading Style Sheets)**, to dress up our "Online Florist" page beautifully.

---

## Task 3-1: CSS Core Fundamentals

The invention of CSS allowed the separation of content and style in web pages.

### 1. Separation of Structure and Presentation
The benefits of separating HTML (Structure) and CSS (Presentation) are:
* **Cleaner Code**: The HTML file only contains tags, without cluttered styling code.
* **Easier Maintenance**: Modifying a single CSS file can change the style of the entire website without having to edit individual HTML pages.

### 2. CSS Style Rules
A CSS rule consists of two main parts: a **Selector** and a **Declaration Block**.
```css
h1 {
    color: red;
    font-size: 24px;
}
```
* `h1` is the selector, meaning it targets all `<h1>` tags on the page.
* `{ ... }` is the declaration block, containing specific style properties and values (separated by a colon, ending with a semicolon).

### 3. Ways to Include CSS
There are three ways to include CSS into HTML:
* **Inline Styles**: Written directly within a tag's `style` attribute (not recommended, violates the separation principle).
  `<p style="color: blue;">Blue Text</p>`
* **Internal Stylesheet**: Written within a `<style>` tag inside the HTML `<head>`.
* **External Stylesheet (Highly Recommended)**: Written in an independent `.css` file, then linked in HTML using the `<link>` tag.
  `<link rel="stylesheet" href="style.css">`

### 4. Basic CSS Selectors
The three most common basic selectors are:
* **Tag Selector**: Selects all tags with the specified name, e.g., `p { ... }` targets all paragraphs.
* **Class Selector**: Starts with `.`, selecting all elements with a specific `class` attribute.
  * HTML: `<div class="box"></div>`
  * CSS: `.box { ... }`
* **ID Selector**: Starts with `#`, selecting a unique element with a specific `id` attribute (IDs must be unique within a page).
  * HTML: `<div id="header"></div>`
  * CSS: `#header { ... }`

---

## Task 3-2: CSS Text Style Properties

Just like formatting a Word document, CSS can finely control text display.

### 1. CSS Font Style Properties
* `font-family`: Sets the font family (e.g., "Microsoft YaHei", Arial).
* `font-size`: Sets the font size (common unit: px).
* `font-weight`: Sets font thickness (e.g., bold, 400, 700).
* `font-style`: Sets font slant (e.g., italic).

### 2. CSS Text Appearance Properties
* `color`: Text color.
* `text-align`: Text alignment (left, center, right).
* `text-decoration`: Text decoration lines (underline, none - useful for removing default link underlines).
* `line-height`: Line height, often used to vertically center a single line of text within its container.
* `text-indent`: Indentation of the first line (common unit: em; `2em` means indenting by two character widths).

---

## Task 3-3: Advanced CSS Features

As pages become more complex, you need more flexible ways to select elements.

### 1. Compound CSS Selectors
* **Descendant Selector (Space)**: `.nav li { ... }` selects all `li` tags inside any element with the class `nav`.
* **Child Selector (>)**: `.nav > li { ... }` selects only the direct `li` children, excluding grandchildren.
* **Grouping Selector (Comma)**: `h1, h2, h3 { ... }` targets h1, h2, and h3, applying the same styles to all of them.

### 2. CSS Cascading and Inheritance
* **Inheritance**: Child elements automatically inherit certain text styling properties from their parent (like `color`, `font-size`). Note that box model properties (like width, borders) are generally not inherited.
* **Cascading**: If the same element is targeted with the same property multiple times, the later style rule will overwrite (cascade over) the earlier one.

### 3. CSS Specificity (Priority)
When different selectors target the same element, which one wins?
`!important` > Inline Styles > ID Selectors > Class Selectors > Tag Selectors > Inherited Styles.

---

## Tasks 3-4 to 3-8: Practice - Building the "Online Florist" Topic Page

In this practical project, we will use the CSS we've learned to decorate our "Online Florist" page.

### Page Construction Preparation
First, create `flower.html` and its corresponding `style.css`, and link the CSS file in the HTML. We will clear the browser's default margins and padding and define base font styles.

The entire page is divided into the following modules, which we will beautify step by step:
1. **Title Module**: Set a large font size for the main title, center align it, and adjust the color.
2. **Category Module**: Use grouping selectors to add unified styles to the flower category list and remove the default list bullet points.
3. **Hot-Selling Module**: Utilize descendant selectors to precisely control the color and boldness of the product names and prices below each flower image.
4. **Footer Module**: Set a smaller font size with gray text, and use `text-align: center;` to center the copyright information.

---

## 💡 Project Summary

Through the "Online Florist" project, you have mastered the basic syntax of CSS and its core philosophy (separation of structure and presentation). You've learned how to precisely find elements you want to beautify using various "selectors," and you've used text properties to adjust the webpage typography, bringing a previously dull webpage to life!

---

## 🤖 AIGC-Assisted Programming: Adding CSS Styles

Writing CSS can sometimes be tedious, especially when tweaking colors and layouts. Let AI help you!

**Practical Tryout**:
In VS Code, when you have written some HTML (e.g., a button `<button class="btn">Submit</button>`), you can ask CodeGeeX using a comment:
`/* Help me write a beautiful CSS class .btn with a gradient blue background, rounded corners, and a darker color on hover */`
Press Enter and watch what kind of exquisite CSS code the AI generates for you!