# 项目8 “甜心物语”网站首页制作

终于来到了前端三剑客的最后一位，也是最强大的一位——**JavaScript (简称 JS)**。HTML 赋予网页结构，CSS 赋予网页外观，而 JS 将赋予网页“灵魂”和交互逻辑。在本项目中，我们将学习编程基础，并用它来控制网页元素，制作一个带动态交互的“甜心物语”网站。

---

## 任务 8-1 至 8-3 JavaScript 基础入门

JS 是一门真正的编程语言，学习它需要一点逻辑思维。

### 1. 引入方式
* **行内**：写在 HTML 标签的事件属性中（如 `onclick="alert('Hello')"`）。
* **内部**：写在 HTML 的 `<script>` 标签内（通常放在 `<body>` 末尾）。
* **外部**：写在独立的 `.js` 文件中，通过 `<script src="app.js"></script>` 引入。

### 2. 变量与数据类型
变量就像是一个个“小盒子”，用来临时存储数据。
```javascript
// 声明变量并赋值
let name = "张三"; // 字符串 (String)
let age = 18;      // 数字 (Number)
let isStudent = true; // 布尔值 (Boolean)
```

### 3. 运算符
* 算术运算符：`+`, `-`, `*`, `/`, `%` (取余)
* 比较运算符：`>`, `<`, `==`, `===` (全等，推荐使用)
* 逻辑运算符：`&&` (与), `||` (或), `!` (非)

---

## 任务 8-4 流程控制语句

让代码拥有判断和重复执行的能力。

### 1. 条件判断 (`if...else`)
```javascript
let score = 85;
if (score >= 90) {
    console.log("优秀");
} else if (score >= 60) {
    console.log("及格");
} else {
    console.log("不及格");
}
```

### 2. 循环 (`for`)
用于重复执行某段代码。
```javascript
// 在控制台打印 0 到 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

## 任务 8-5 至 8-7 函数、对象与数组

这是组织和管理复杂数据的三种利器。

### 1. 函数 (Function)
把一段可以重复使用的代码块封装起来。
```javascript
function greet(name) {
    return "你好，" + name;
}
console.log(greet("李四")); // 输出：你好，李四
```

### 2. 对象 (Object)
用来描述一个具体事物的各种属性和方法。
```javascript
let dog = {
    name: "旺财",
    age: 3,
    bark: function() {
        alert("汪汪汪！");
    }
};
console.log(dog.name); // 访问属性
dog.bark(); // 调用方法
```

### 3. 数组 (Array)
用来存储一组有序的数据。
```javascript
let fruits = ["苹果", "香蕉", "橘子"];
console.log(fruits[0]); // 获取第一个元素，输出：苹果
```

---

## 任务 8-8 和 8-9 DOM 与事件处理

这才是前端 JS 的精髓：让代码操作 HTML！

### 1. DOM (文档对象模型)
浏览器把整个 HTML 文档解析成了一个树状的对象模型。我们可以用 JS 来查找和修改这些元素：
```javascript
// 通过 ID 获取 HTML 元素
let myBox = document.getElementById("box");
// 修改元素的文字内容
myBox.innerText = "文字被修改了！";
// 修改元素的 CSS 样式
myBox.style.backgroundColor = "red";
```

### 2. 事件处理 (Events)
让页面对用户的操作（如点击、滑动）做出反应。
```javascript
let btn = document.getElementById("myButton");
// 给按钮绑定点击事件
btn.addEventListener("click", function() {
    alert("按钮被点击了！");
});
```

---

## 任务 8-10 至 8-15 实战：“甜心物语”首页

在本项目中，我们将利用 JS 为“甜心物语”甜品店网站添加丰富的交互体验：
1. **Banner 轮播图**：利用数组存储图片路径，通过定时器 (`setInterval`) 和 DOM 操作，实现 Banner 图片的自动循环轮播。
2. **返回顶部按钮**：监听浏览器的滚动事件 (`window.onscroll`)，当页面向下滚动一定距离时，显示“返回顶部”按钮；点击按钮时，用 JS 控制页面滚动回最顶端。
3. **Tab 选项卡切换**：在“推荐甜品”模块，实现点击不同的分类标签，下方对应显示该分类的甜品列表（通过修改元素的 `display` 样式隐藏/显示）。

---

## 🤖 AIGC 辅助编程：实现网页交互效果

编写 JS 轮播图逻辑对初学者来说是个挑战，涉及定时器、索引边界判断等。
你可以这样给 AI 写提示词：
`/* 用原生 JavaScript 写一个图片轮播图逻辑。已知图片容器的 id 为 'slider'，有 'prev' 和 'next' 两个按钮的 id。要求：自动播放（间隔3秒），支持点击按钮切换上一张/下一张。 */`
借助 AI，你能迅速拿到健壮的 JS 代码，并从中学到优秀的编程思路！