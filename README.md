# Frontend Design & Development Curriculum

> **[Switch to Chinese Version](./README.zh-CN.md)**

A comprehensive, project-based learning guide for the **Frontend Design & Development** course, built with [VitePress](https://vitepress.dev/) and deployed on GitHub Pages.

This curriculum is designed for first-year vocational college students and is based on the textbook *"Web Design & Development Project Course (HTML5+CSS3+JavaScript) (3rd Edition)"*.

## Live Site

Visit the deployed site: [https://gxsdxy.github.io/gemini-3.1-pro-html-css-js-guide/](https://gxsdxy.github.io/gemini-3.1-pro-html-css-js-guide/)

## Features

- **Project-Based Learning** — 8 hands-on projects that progressively cover HTML5, CSS3, and JavaScript fundamentals.
- **AI-Assisted Learning** — Incorporates AIGC tools like CodeGeeX to boost programming efficiency and introduce modern AI-powered development workflows.
- **Bilingual Support** — Full English and Chinese content via VitePress internationalization (i18n). Switch languages directly on the live site.
- **Auto Deployment** — GitHub Actions CI/CD pipeline for automatic build and deploy to GitHub Pages on every push.

## Projects Overview

| # | Project Name | Key Topics |
|---|---|---|
| 1 | Web Design Basics | HTML structure, tags, attributes |
| 2 | "Travel Diary" Page | Text formatting, images, links |
| 3 | "Online Florist" Topic Page | CSS styling, box model, layout |
| 4 | "Love Home" Corporate Site | Flexbox, responsive design |
| 5 | "Boxuegu" Website | Advanced CSS, positioning |
| 6 | "Shuyu" Registration Page | Forms, input validation |
| 7 | "Video 8" Website | Multimedia, CSS animations |
| 8 | "Sweetheart Story" Website | JavaScript fundamentals, DOM manipulation |

## Tech Stack

- **Static Site Generator**: [VitePress](https://vitepress.dev/) (v1.6+)
- **Framework**: [Vue.js](https://vuejs.org/) 3
- **Runtime**: Node.js 20+
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or higher
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/gxsdxy/gemini-3.1-pro-html-css-js-guide.git
cd gemini-3.1-pro-html-css-js-guide

# Install dependencies
npm install
```

### Development

```bash
# Start the local dev server with hot reload
npm run docs:dev
```

### Production Build

```bash
# Build the static site
npm run docs:build

# Preview the production build locally
npm run docs:preview
```

## Project Structure

```
html-css-js-guide/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts        # VitePress configuration & i18n
│   ├── en/                    # English content
│   │   ├── guide/
│   │   │   ├── project-1.md ~ project-8.md
│   │   │   └── index.md
│   │   └── index.md
│   ├── guide/                 # Chinese content (default locale)
│   │   ├── project-1.md ~ project-8.md
│   │   └── index.md
│   └── index.md               # Chinese home page
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions deployment
├── package.json
├── README.md                  # English README (this file)
└── README.zh-CN.md            # Chinese README
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` or `master` branch. The CI/CD pipeline is defined in `.github/workflows/deploy.yml`.

## License

ISC
