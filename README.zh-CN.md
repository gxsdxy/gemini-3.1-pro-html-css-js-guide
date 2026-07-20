# 前端设计与开发课程指南

> **[切换到英文版](./README.md)**

基于 [VitePress](https://vitepress.dev/) 构建、部署在 GitHub Pages 上的**前端设计与开发**课程项目式学习指南。

本课程专为大专院校一年级新生量身定制，内容基于教材《网页设计与制作项目教程（HTML5+CSS3+JavaScript）（AI助学）（第3版）》。

## 在线访问

访问已部署的网站：[https://gxsdxy.github.io/gemini-3.1-pro-html-css-js-guide/](https://gxsdxy.github.io/gemini-3.1-pro-html-css-js-guide/)

## 特色亮点

- **项目驱动学习** — 8个实战项目，循序渐进地覆盖 HTML5、CSS3 和 JavaScript 核心知识点。
- **AI辅助学习** — 引入 CodeGeeX 等 AIGC 工具，帮助学生掌握前沿的 AI 辅助编程工作流，提升开发效率。
- **双语支持** — 基于 VitePress 国际化功能，提供完整的中英文双语文档。在网站上可直接切换语言。
- **自动部署** — 配套 GitHub Actions 持续集成/持续部署流水线，每次推送代码后自动构建并发布到 GitHub Pages。

## 项目概览

| 编号 | 项目名称 | 核心知识点 |
|------|---------|-----------|
| 1 | 网页制作基础知识 | HTML 结构、标签、属性 |
| 2 | "旅行游记"页面制作 | 文本格式化、图片、链接 |
| 3 | "网上花店"专题页制作 | CSS 样式、盒模型、布局 |
| 4 | "爱家居"企业网站首页制作 | 弹性盒子、响应式设计 |
| 5 | "博学谷"网站首页制作 | 高级 CSS、定位 |
| 6 | "书隅"网站注册页面制作 | 表单、输入验证 |
| 7 | "视频8"网站首页制作 | 多媒体、CSS 动画 |
| 8 | "甜心物语"网站首页制作 | JavaScript 基础、DOM 操作 |

## 技术栈

- **静态站点生成器**：[VitePress](https://vitepress.dev/)（v1.6+）
- **前端框架**：[Vue.js](https://vuejs.org/) 3
- **运行环境**：Node.js 20+
- **部署平台**：通过 GitHub Actions 部署到 GitHub Pages

## 快速开始

### 前置要求

- [Node.js](https://nodejs.org/) 20 或更高版本
- npm（随 Node.js 一同安装）

### 安装

```bash
# 克隆仓库
git clone https://github.com/gxsdxy/gemini-3.1-pro-html-css-js-guide.git
cd gemini-3.1-pro-html-css-js-guide

# 安装依赖
npm install
```

### 开发调试

```bash
# 启动本地开发服务器（支持热更新）
npm run docs:dev
```

### 生产构建

```bash
# 构建静态站点
npm run docs:build

# 在本地预览生产版本
npm run docs:preview
```

## 项目结构

```
html-css-js-guide/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts        # VitePress 配置与国际化设置
│   ├── en/                    # 英文内容
│   │   ├── guide/
│   │   │   ├── project-1.md ~ project-8.md
│   │   │   └── index.md
│   │   └── index.md
│   ├── guide/                 # 中文内容（默认语言）
│   │   ├── project-1.md ~ project-8.md
│   │   └── index.md
│   └── index.md               # 中文首页
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions 部署配置
├── package.json
├── README.md                  # 英文说明文档
└── README.zh-CN.md            # 中文说明文档（本文件）
```

## 部署说明

当代码推送到 `main` 或 `master` 分支时，网站会自动部署到 GitHub Pages。持续集成/持续部署流水线定义在 `.github/workflows/deploy.yml` 中。

## 许可证

ISC
