# 常见问题 FAQ

### 1. 构建成功但页面 404

检查 `base` 是否设置为 `/<repo>/`。本工作流会自动注入环境变量，因此无需手动改代码。

### 2. 本地 build 成功，线上失败

检查 Node 版本：本地 ≥ 18；workflow 中指定 `node-version: '20'`。可在 `package.json` 添加 `engines` 锁定。

### 3. 静态资源路径错误（CSS/JS 404）

几乎都是 `base` 不正确。可在浏览器控制台查看实际请求路径，并核对 `.vitepress/config.mts`。

### 4. Actions 如何手动触发

- 访问仓库 **Actions → Deploy to GitHub Pages → Run workflow → main 分支**。

### 5. 如何自定义构建命令

修改 `deploy.yml` 的 build 步骤：
```yaml
- name: Build
  run: |
    npm run docs:build
```

### 6. 希望用不同分支触发

将 `on.push.branches` 中的 `main` 改为目标分支即可。

### 7. 为什么需要 workflow permissions

GitHub 新仓库默认仅对 GITHUB_TOKEN 授予只读权限。需要在仓库设置中开启 **Read and write permissions** 以允许向 Pages 写入。
