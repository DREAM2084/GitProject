# 部署指南

## 1. 准备 GitHub 仓库

1. 在 GitHub 新建仓库，例如 `your-name/training-pages`；
2. 把本目录的内容推送到仓库 `main` 分支；
3. 仓库 **Settings → Pages**：
   - Source 选择 **GitHub Actions**。

## 2. 配置仓库权限

- 仓库 **Settings → Actions → General**：
  - Workflow permissions → 选择 **Read and write permissions**；
  - 勾选 **Allow GitHub Actions to create and approve pull requests**（可选）。

## 3. 修改 base 路径（重要）

部署到 `https://<user>.github.io/<repo>/` 时，必须将 `.vitepress/config.mts` 的 `base` 改为 `"/<repo>/"`，例如：

```ts
base: '/training-pages/',
```

也可以通过环境变量 `VITE_BASE=/training-pages/` 注入（在 workflow 中已经设置）。

## 4. 推送代码

```bash
git init
git add .
git commit -m "feat: 初始化站点"
git branch -M main
git remote add origin https://github.com/<your-name>/<repo>.git
git push -u origin main
```

## 5. 查看 Actions

- 打开仓库 **Actions** 页；
- 能看到名为 "Deploy to GitHub Pages" 的工作流正在运行；
- 构建成功后，页面下方 **deploy** 阶段会显示 "Pages build and deployment successful"。

## 6. 访问站点

部署完成后访问 `https://<your-name>.github.io/<repo>/` 即可。

## 7. 本地预览

```bash
npm install
npm run docs:dev      # http://localhost:5173
npm run docs:build    # 构建到 docs/.vitepress/dist
npm run docs:preview  # 预览构建产物
```
