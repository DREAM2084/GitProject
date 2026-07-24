# 工作流说明

本项目包含一个 GitHub Actions 工作流：`.github/workflows/deploy.yml`。

## 整体结构

```
push main branch
      ↓
  deploy.yml 触发
      ├── jobs.build    (Node 安装 → 依赖安装 → npm run docs:build → 上传 Pages artifact)
      └── jobs.deploy   (等待 build 完成 → 部署 artifact 到 GitHub Pages)
```

## 关键配置点

### 1. 触发条件
```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:           # 允许在 Actions 页面手动触发
```

### 2. Pages 权限
```yaml
permissions:
  contents: read                # 允许拉取代码
  pages: write                  # 允许写入 Pages 配置
  id-token: write               # 用于部署身份验证
```

### 3. 环境变量
```yaml
env:
  VITE_BASE: /${{ github.event.repository.name }}/
```
自动将仓库名作为 base，匹配 `https://<user>.github.io/<repo>/` 的部署路径。

### 4. Pages 部署环境
```yaml
environment:
  name: github-pages
  url: ${{ steps.deployment.outputs.page_url }}
```

### 5. 构建产物上传
```yaml
- uses: actions/upload-pages-artifact@v3
  with:
    path: ./docs/.vitepress/dist
```

### 6. 实际部署
```yaml
- uses: actions/deploy-pages@v4
  id: deployment
```

## 完整工作流文件

见 `.github/workflows/deploy.yml`。

## 观察与调试

- 每次 push 后，**Actions** 页出现新的 run；
- 点击 run → 可分别查看 **build** 与 **deploy** 阶段的详细日志；
- 失败时在步骤中查看红色错误提示，常见：
  - `base` 路径未正确设置（默认由 `VITE_BASE` 自动注入）；
  - `npm install` 依赖问题 → 本地运行 `npm run docs:build` 复现；
  - Pages 源未设置为 **GitHub Actions** → 仓库 Settings → Pages 修正。
