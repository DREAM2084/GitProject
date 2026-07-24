import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Project 4 - GitHub Pages 自动化部署',
  description: '基于 GitHub Actions 的 VitePress 静态站点自动发布示例',
  lang: 'zh-CN',
  lastUpdated: true,
  // 部署到 https://<username>.github.io/<repo>/ 时 base 需要与项目名匹配
  base: process.env.VITE_BASE || '/',

  themeConfig: {
    siteTitle: 'CI/CD 示例',
    nav: [
      { text: '首页', link: '/' },
      { text: '部署指南', link: '/guide' },
      { text: '工作流说明', link: '/workflow' },
      { text: '常见问题', link: '/faq' }
    ],
    sidebar: {
      '/': [
        { text: '概述', items: [{ text: '项目介绍', link: '/' }] },
        { text: '教程', items: [
          { text: '部署指南', link: '/guide' },
          { text: '工作流说明', link: '/workflow' },
          { text: '常见问题', link: '/faq' }
        ]}
      ]
    },
    footer: {
      message: '发布于 GitHub Pages · 由 GitHub Actions 自动构建',
      copyright: '© 2025 Trainee'
    }
  }
})
