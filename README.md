# 项目四：基于 GitHub Pages 的自动化部署

本项目展示如何用 **GitHub Actions** 将 VitePress 静态站点自动构建并发布到 **GitHub Pages**。

- 推送到 `main` 分支 → 自动构建 → 自动部署
- 提供可直接使用的 `.github/workflows/deploy.yml`
- 站点内容为项目三的 VitePress 学习笔记示例

## 📁 目录结构

```
project4_github_pages_deploy/
├── .github/workflows/deploy.yml      # 核心 CI/CD 配置
├── docs/                             # VitePress 文档内容
│   ├── .vitepress/config.mts
│   ├── index.md
│   ├── guide.md
│   ├── workflow.md
│   └── faq.md
├── package.json
├── .gitignore
└── README.md
```

## 🚀 快速开始（使用本仓库）

1. 新建一个 GitHub 仓库，例如 `your-name/training-pages`。
2. 将本目录的文件推送到仓库 `main` 分支：
   ```bash
   git init
   git add .
   git commit -m "feat: 初始化 VitePress + Pages 部署"
   git branch -M main
   git remote add origin https://github.com/<your-name>/training-pages.git
   git push -u origin main
   ```
3. 打开仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。
4. 打开仓库 **Settings → Actions → General → Workflow permissions**：
   选择 **Read and write permissions**，保存。
5. 首次 push 会自动触发 `.github/workflows/deploy.yml`。
6. 等待 Actions 运行（约 1 分钟）→ 在 **Settings → Pages** 可查看站点 URL：
   `https://<your-name>.github.io/training-pages/`。

## 🛠️ 工作流详解

`.github/workflows/deploy.yml` 包含两个 job：

| job | 作用 |
|-----|------|
| **build** | Checkout → 安装 Node.js → `npm ci` → `npm run docs:build` → 上传构建产物为 Pages artifact |
| **deploy** | 等待 build 完成 → 使用 `actions/deploy-pages@v4` 部署 |

关键特性：
- 使用 `VITE_BASE=/<repo-name>/` 自动修正 base 路径；
- `concurrency: pages` 避免并发部署；
- `GITHUB_TOKEN` 最小权限原则（contents read + pages write + id-token write）。

## 💻 本地开发 / 调试

```bash
npm install
npm run docs:dev      # http://localhost:5173
npm run docs:build    # 生成 docs/.vitepress/dist
npm run docs:preview  # 预览构建产物
```

## ⚡ 手动触发工作流

- 仓库 **Actions → Deploy to GitHub Pages → Run workflow** 选择 `main` 分支即可。

## ✅ 验证清单

- [ ] 推送到 `main` 后触发 Actions；
- [ ] Actions 中 `build` 与 `deploy` 两个阶段均为 ✅ green；
- [ ] `https://<user>.github.io/<repo>/` 可正常访问；
- [ ] 修改 `docs/index.md` 提交 → 刷新页面可见改动。

## 📖 参考资料

- [VitePress 官方文档](https://vitepress.dev/)
- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [actions/deploy-pages](https://github.com/actions/deploy-pages)
