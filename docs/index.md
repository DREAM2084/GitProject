---
layout: home

hero:
  name: 项目四
  text: GitHub Pages + Actions 自动化部署
  tagline: 代码提交 → 自动构建 → 自动发布到 GitHub Pages。零手动部署。
  actions:
    - theme: brand
      text: 开始部署
      link: /guide
    - theme: alt
      text: 工作流详解
      link: /workflow

features:
  - icon: 🚀
    title: 一键自动化
    details: 推送到 main 分支即触发流水线，无需手动 build / push。
  - icon: ⚡
    title: 快速反馈
    details: Actions 状态徽章可实时展示构建是否成功。
  - icon: 🛡️
    title: 权限受控
    details: 使用 GITHUB_TOKEN 最小权限仅向 Pages 写入产物。
---

## 触发方式

```bash
git add .
git commit -m "feat: 更新内容"
git push origin main
# → 自动触发 .github/workflows/deploy.yml
```
