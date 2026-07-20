# Project 2: "Travel Diary" Page

In this project, we will actually start writing HTML code. By building a simple "Travel Diary" page, you will master basic HTML syntax, text formatting, image application, and basic modular page development.

---

## Task 2-1: Understanding HTML

HTML (HyperText Markup Language) is the foundation of web pages. It uses various **Tags** to describe the content of a web page.

### 1. Basic Format of an HTML Document
A standard HTML5 document looks like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
</head>
<body>
    Content goes here...
</body>
</html>
```
* `<!DOCTYPE html>`: Declares the document type as HTML5.
* `<html>`: The root tag wrapping the entire webpage.
* `<head>`: Header information (invisible to the user), containing encoding, title, etc.
* `<body>`: Main content (visible), everything you see on the webpage goes here.

### 2. HTML Tags and Attributes
Tags usually come in pairs, such as `<p>Paragraph</p>`. Some are self-closing (void) tags, such as `<img>`.
Tags can have **Attributes** that provide more information:
```html
<a href="https://www.example.com" target="_blank">Click to Visit</a>
```
* `href` and `target` are attributes of the `<a>` tag.

### 3. Relationships Between HTML Tags
* **Nesting (Parent-Child)**: A tag contained within another tag (e.g., `<html>` contains `<head>` and `<body>`).
* **Sibling**: Tags at the same hierarchical level (e.g., `<head>` and `<body>` are siblings).

---

## Task 2-2: HTML Text Formatting Tags

Text is the primary carrier of information on a webpage, and HTML provides rich tags to format it.

### 1. Page Formatting Tags
* `<h1>` to `<h6>`: Heading tags, with `<h1>` being the largest and `<h6>` the smallest.
* `<p>`: Paragraph tag, used to wrap a block of text.
* `<br>`: Line break tag (self-closing).
* `<hr>`: Horizontal rule/line tag (self-closing).

### 2. Text Formatting Tags
* `<strong>` or `<b>`: **Bold**. It is recommended to use `<strong>` as it carries semantic emphasis.
* `<em>` or `<i>`: *Italic*. It is recommended to use `<em>`.
* `<del>` or `<s>`: ~~Strikethrough~~.
* `<ins>` or `<u>`: <u>Underline</u>.

### 3. Special Characters
Some characters have special meanings in HTML (like `<` and `>`). If you want to display them on a webpage, you need to use character entities:
* Space: `&nbsp;`
* Less than `<`: `&lt;`
* Greater than `>`: `&gt;`
* Copyright ©: `&copy;`

---

## Task 2-3: HTML Image Application

"A picture is worth a thousand words"—webpages cannot exist without images.

### 1. Common Image Formats
* `.jpg` / `.jpeg`: Suitable for colorful photographs.
* `.png`: Supports transparent backgrounds, suitable for icons and line art.
* `.gif`: Supports simple animations.
* `.svg`: Vector graphics, scale without losing quality.

### 2. The Image Tag `<img>`
```html
<img src="path/to/image.jpg" alt="Alternative text if image fails to load" width="300" height="200">
```

### 3. Absolute vs. Relative Paths
* **Absolute Path**: The full path on a hard drive or a complete URL (e.g., `https://example.com/logo.png`).
* **Relative Path**: The position relative to the current HTML file.
  * `./`: Current directory (usually can be omitted).
  * `../`: Parent directory (one level up).

---

## Tasks 2-4 to 2-7: Practice - Building the "Travel Diary" Page

Now, we will combine the knowledge learned above to create a simple "Travel Diary" page.

### Page Construction Preparation
The page is mainly divided into three modules:
1. **Header Module**: Contains the website Logo and main title of the diary.
2. **Main Content Module**: Contains text descriptions of the trip and scenery images.
3. **Footer Module**: Contains copyright information.

> [!TIP] Hands-on Exercise
> Create a new `travel.html` in your VS Code, and try to build these three modules using `<h1>`, `<p>`, and `<img>` tags based on the structure above!

---

## 💡 Project Summary

This project truly brought you into the world of HTML. You mastered the basic skeleton of HTML, learned to use various tags to format text and insert images, and understood the concept of relative paths. Meanwhile, through the small "Travel Diary" case study, you got your first taste of "modular" thinking in web development.

---

## 🤖 AIGC-Assisted Programming: Quick Learning with CodeGeeX

What do you do when you encounter an HTML tag you don't recognize?
Don't dig through old search engine results! Summon CodeGeeX directly in VS Code:

1. Select the code you don't understand, right-click, and choose **"Explain Code"**.
2. You can ask it directly in the chat box: "What is the `<div>` tag used for in HTML?"
3. It will not only give you the most easy-to-understand explanation but also attach code examples. It's your most attentive 24-hour tutor.