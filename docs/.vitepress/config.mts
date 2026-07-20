import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Frontend Design & Development",
  description: "A comprehensive guide to HTML5, CSS3, and JavaScript based on practical projects.",
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "前端设计与开发",
      description: "基于项目的HTML5、CSS3和JavaScript全面指南。",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '课程指南', link: '/guide/' }
        ],
        sidebar: [
          {
            text: '课程指南',
            items: [
              { text: '项目1 网页制作基础知识', link: '/guide/project-1' },
              { text: '项目2 “旅行游记”页面制作', link: '/guide/project-2' },
              { text: '项目3 “网上花店”专题页制作', link: '/guide/project-3' },
              { text: '项目4 “爱家居”企业网站首页制作', link: '/guide/project-4' },
              { text: '项目5 “博学谷”网站首页制作', link: '/guide/project-5' },
              { text: '项目6 “书隅”网站注册页面制作', link: '/guide/project-6' },
              { text: '项目7 “视频8”网站首页制作', link: '/guide/project-7' },
              { text: '项目8 “甜心物语”网站首页制作', link: '/guide/project-8' }
            ]
          }
        ],
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Project 1: Web Design Basics', link: '/en/guide/project-1' },
              { text: 'Project 2: "Travel Diary" Page', link: '/en/guide/project-2' },
              { text: 'Project 3: "Online Florist" Topic Page', link: '/en/guide/project-3' },
              { text: 'Project 4: "Love Home" Corporate Site', link: '/en/guide/project-4' },
              { text: 'Project 5: "Boxuegu" Website', link: '/en/guide/project-5' },
              { text: 'Project 6: "Shuyu" Registration Page', link: '/en/guide/project-6' },
              { text: 'Project 7: "Video 8" Website', link: '/en/guide/project-7' },
              { text: 'Project 8: "Sweetheart Story" Website', link: '/en/guide/project-8' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gxsdxy/gemini-3.1-pro-html-css-js-guide' }
    ]
  }
})
