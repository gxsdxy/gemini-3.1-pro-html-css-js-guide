# Project 5: "Boxuegu" Website Homepage

Web pages contain a lot of data with clear parallel or hierarchical relationships, such as navigation menus or news lists. In this project, we will focus on HTML list tags and hyperlink tags, combining them to build the highly structured "Boxuegu" educational website homepage.

---

## Task 5-1: List Tags

In HTML, lists are divided into three main types, each with its specific use case.

### 1. Unordered List (`<ul>` and `<li>`)
The most common list, where list items are marked with bullet points by default.
```html
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
</ul>
```
*Commonly used for navigation menus and product categories.*

### 2. Ordered List (`<ol>` and `<li>`)
List items are marked with numbers sequentially (1, 2, 3...).
```html
<ol>
    <li>Step 1: Register</li>
    <li>Step 2: Login</li>
    <li>Step 3: Learn</li>
</ol>
```
*Commonly used for rankings or step-by-step instructions.*

### 3. Definition List (`<dl>`, `<dt>`, `<dd>`)
Used for dictionaries, or associating terms with descriptions.
* `<dl>`: Root tag of the definition list.
* `<dt>`: Defines the term/name.
* `<dd>`: Explains/describes the term.
*Commonly used for Help Center links in footers, or glossaries.*

### 4. Nested Lists
Lists can contain other lists, for example, when building multi-level dropdown menus:
```html
<ul>
    <li>Frontend
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
        </ul>
    </li>
</ul>
```

---

## Task 5-2: CSS List Styles

Lists come with default bullets/numbers and built-in indentation (padding/margin). We use CSS to customize them.

### 1. Removing Default Styles
In actual development, we almost always need to remove the black dots from unordered lists and clear default margins:
```css
ul {
    list-style: none; /* Removes bullets */
    margin: 0;
    padding: 0;
}
```

### 2. Using Background Images as Bullets
Sometimes for aesthetics, we use custom icons instead of default dots:
* Set `list-style: none;`
* Add left padding to the `<li>`: `padding-left: 20px;`
* Set a background icon on the `<li>`: `background: url(icon.png) no-repeat left center;`

---

## Task 5-3: Hyperlink Tags

The essence of the internet is a web of links. The hyperlink `<a>` is the most critical tag for this.

### 1. Creating Hyperlinks
```html
<a href="URL" target="_blank">Link Text or Image</a>
```
* `target="_blank"`: Opens the link in a new browser tab.

### 2. Anchor Links
Clicking these allows users to quickly jump to a specified location on the current page (e.g., "Back to Top" or jump to a chapter).
1. Set an ID at the destination: `<h2 id="chapter2">Chapter 2</h2>`
2. Point the link to that ID: `<a href="#chapter2">Jump to Chapter 2</a>`

### 3. Link Pseudo-classes (Controlling States)
Hyperlinks can have different styles under different interaction states via CSS pseudo-classes:
* `a:link`: Unvisited link.
* `a:visited`: Visited link.
* `a:hover`: When the mouse hovers over the link (Most commonly used!).
* `a:active`: While the mouse is clicking down.
> [!IMPORTANT] The "LoVe HAte" Rule
> If you are setting all four states, you must write them strictly in the `L-V-H-A` order, or they might fail. In modern development, we usually just set base styles on `a { ... }` and hover styles on `a:hover { ... }`.

---

## Tasks 5-4 to 5-8: Practice - "Boxuegu" Homepage

Combining lists and hyperlinks, we will develop the homepage for the "Boxuegu" online learning platform:
1. **Navigation Module**: Use a `<ul>` list to create the top navbar, float the items to make them horizontal, and use `a:hover` to add an interactive underline effect on hover.
2. **Course Category Module**: Build the left sidebar category menu using nested lists.
3. **Hot Courses Module**: Display course cards in a grid using a list.
4. **Copyright Module**: Utilize `<dl>` definition lists to lay out the "About Us" and "Help Center" grid in the footer.

---

## 🤖 AIGC-Assisted Programming: Mocking Contact Lists

When building a news list or a contact book page, manually typing dummy data is a waste of time. Utilize AI for this:
`<!-- Please generate a ul list containing 5 mock contact entries, including Name, Phone, and Job Title -->`
The AI will output perfectly structured HTML dummy data in a second, greatly accelerating your layout testing process.