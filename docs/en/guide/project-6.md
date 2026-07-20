# Project 6: "Shuyu" Registration Page

Webpages are not just for displaying information; they need to interact with users to collect data. Whether it's logging in, registering, or submitting a survey, it all relies on **Forms**. In this project, we will learn how to arrange data using tables and collect user input using forms.

---

## Task 6-1: Table Tags

In the early days of the web, tables were often used for page layout (now replaced by CSS). Today, tables have returned to their true purpose—**displaying tabular data** (like report cards or financial statements).

### 1. Basic Structure of a Table
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John Doe</td>
        <td>18</td>
    </tr>
</table>
```
* `<table>`: Defines the entire table.
* `<tr>` (Table Row): Defines a row in the table.
* `<td>` (Table Data): Defines a standard cell in the row.
* `<th>` (Table Header): Defines a header cell, text is bold and centered by default.

### 2. Merging Cells (Rowspan and Colspan)
* `colspan`: Merges columns. `<td colspan="2">` (merges two cells horizontally).
* `rowspan`: Merges rows. `<td rowspan="2">` (merges two cells vertically).

---

## Task 6-2: CSS Table Styling

Default HTML tables look very plain. We can use CSS to make them look professional:
* `border-collapse: collapse;`: This is the most important rule; it collapses the double borders of adjacent cells into a single border.
* Set `padding` to give the text inside the cells some breathing room.
* Use the `:hover` pseudo-class on `<tr>` to create a "highlight row on hover" effect.

---

## Tasks 6-3 to 6-5: Deep Dive into Forms

Forms are designated areas for collecting user information.

### 1. The Form Container: `<form>`
```html
<form action="/server-endpoint" method="POST">
    <!-- Form controls go here -->
</form>
```

### 2. Basic Form Controls (`<input>`)
`<input>` is the core control. By changing its `type` attribute, it morphs into various input fields:
* `type="text"`: Single-line text field (e.g., username).
* `type="password"`: Password field (input is masked with asterisks/dots).
* `type="radio"`: Radio buttons (Note: radio buttons in the same group must share the same `name` attribute).
* `type="checkbox"`: Checkboxes (allows multiple selections).
* `type="submit"`: Submit button.

### 3. Other Important Controls
* `<textarea>`: Multi-line text input area (used for comments/messages).
* `<select>` and `<option>`: Dropdown menus.

### 4. HTML5 New Form Controls and Attributes
HTML5 greatly enhanced forms, adding basic built-in validation:
* **New Types**: `type="email"`, `number`, `url`, `color`, `date`, etc. (These trigger appropriate keyboards on mobile devices).
* **New Attributes**:
  * `placeholder`: A hint displayed in the input field before the user types.
  * `required`: Makes the field mandatory.
  * `disabled`: Disables the input field.

---

## Task 6-6: CSS Form Styling

Native form controls look different across various browsers and are usually not very pretty.
We need CSS to unify their appearance:
* Clear default borders and outlines (`outline: none;`).
* Set unified `height`, `border-radius`, and `padding`.
* Use the `:focus` pseudo-class to highlight the border color when the input field gains focus (when the cursor is inside).

---

## Tasks 6-7 to 6-10: Practice - "Shuyu" Registration Page

Combining this knowledge, we will develop the registration page for the "Shuyu" reading website:
1. **Layout**: Center a large container box, splitting it into left and right columns. The left shows a branding image, and the right holds the registration form.
2. **Form Development**:
   * Use `<input type="text">` and `placeholder` for the phone number field.
   * Use `<input type="password">` for the password field.
   * Add a "Get verification code" button.
3. **Beautification**: Use CSS to control input spacing, add a shadow effect on focus, and style the bottom "Register Now" button with hover feedback.

---

## 🤖 AIGC-Assisted Programming: Building a Survey Form

There are many form tags. Manually writing a survey with radio buttons, checkboxes, and dropdowns is time-consuming. Ask AI for help:
`<!-- Please generate an HTML survey form about "College Students' Reading Habits", including Name, Gender (radio), Favorite Genres (checkboxes), and Suggestions (textarea) -->`
The AI will instantly output a fully structured form, letting you focus on the CSS styling!