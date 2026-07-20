# Project 8: "Sweetheart Story" Website Homepage

Finally, we arrive at the last and most powerful of the frontend trio—**JavaScript (JS)**. While HTML gives a webpage structure and CSS gives it appearance, JS gives it a "soul" and interactive logic. In this project, we will learn programming fundamentals and use them to manipulate web elements, creating a dynamic and interactive "Sweetheart Story" website.

---

## Tasks 8-1 to 8-3: JavaScript Basics

JS is a full-fledged programming language. Learning it requires a bit of logical thinking.

### 1. Ways to Include JS
* **Inline**: Written inside HTML event attributes (e.g., `onclick="alert('Hello')"`).
* **Internal**: Written inside `<script>` tags in the HTML (usually placed just before `</body>`).
* **External**: Written in an independent `.js` file, linked via `<script src="app.js"></script>`.

### 2. Variables and Data Types
Variables are like "little boxes" used to temporarily store data.
```javascript
// Declare variables and assign values
let name = "John Doe"; // String
let age = 18;          // Number
let isStudent = true;  // Boolean
```

### 3. Operators
* **Arithmetic**: `+`, `-`, `*`, `/`, `%` (modulo)
* **Comparison**: `>`, `<`, `==`, `===` (strict equality, recommended)
* **Logical**: `&&` (AND), `||` (OR), `!` (NOT)

---

## Task 8-4: Control Flow Statements

These give your code the ability to make decisions and repeat actions.

### 1. Conditional Statements (`if...else`)
```javascript
let score = 85;
if (score >= 90) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

### 2. Loops (`for`)
Used to repeat a block of code.
```javascript
// Print 0 to 4 in the console
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

## Tasks 8-5 to 8-7: Functions, Objects, and Arrays

These are three powerful tools for organizing and managing complex data.

### 1. Functions
Encapsulate a block of reusable code.
```javascript
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alice")); // Outputs: Hello, Alice
```

### 2. Objects
Used to describe various properties and methods of a specific entity.
```javascript
let dog = {
    name: "Buddy",
    age: 3,
    bark: function() {
        alert("Woof!");
    }
};
console.log(dog.name); // Access a property
dog.bark(); // Call a method
```

### 3. Arrays
Used to store an ordered list of data.
```javascript
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Access the first element. Outputs: Apple
```

---

## Tasks 8-8 & 8-9: DOM and Event Handling

This is the essence of frontend JS: letting code manipulate HTML!

### 1. DOM (Document Object Model)
The browser parses the entire HTML document into a tree-like object model. We can use JS to find and modify these elements:
```javascript
// Get an HTML element by its ID
let myBox = document.getElementById("box");
// Modify the text content
myBox.innerText = "Text has been changed!";
// Modify CSS styles
myBox.style.backgroundColor = "red";
```

### 2. Event Handling
Making the page react to user actions (like clicking or scrolling).
```javascript
let btn = document.getElementById("myButton");
// Bind a click event to the button
btn.addEventListener("click", function() {
    alert("Button was clicked!");
});
```

---

## Tasks 8-10 to 8-15: Practice - "Sweetheart Story" Homepage

In this project, we will use JS to add rich interactive experiences to the "Sweetheart Story" dessert shop website:
1. **Banner Image Carousel**: Use an array to store image paths. Through a timer (`setInterval`) and DOM manipulation, implement an auto-playing image slider.
2. **"Back to Top" Button**: Listen to the browser's scroll event (`window.onscroll`). When the page scrolls down a certain distance, show the button; when clicked, use JS to scroll the page back to the very top.
3. **Tab Switching**: In the "Recommended Desserts" module, implement logic where clicking different category tabs reveals the corresponding dessert list (by toggling the CSS `display` property).

---

## 🤖 AIGC-Assisted Programming: Implementing Web Interactions

Writing JS carousel logic is challenging for beginners, involving timers and index boundary checks.
You can write a prompt for AI like this:
`/* Write a native JavaScript image carousel logic. Given an image container with id 'slider', and 'prev'/'next' buttons by id. Requirements: auto-play (3s interval), and support clicking buttons to switch prev/next. */`
With AI, you can quickly get robust JS code and learn excellent programming patterns from it!