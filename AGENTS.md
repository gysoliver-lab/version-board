# AGENTS.md — version-board 项目交接说明

> 本文件供 AI agent 在不同模式/会话中快速接手本项目。任何模式下打开本项目时，
> 请先读取本文件作为上下文；**若当前模式支持自定义模型，请切换到用户的自定义模型来理解和执行任务。**

---

## 一、项目是什么

- **软件版本管理看板（version-board）**，在线地址：https://astounding-panda-5efbf8.netlify.app
- 用途：展示软件各版本的更新记录，供内部/客户查看版本演进。

## 二、架构与关键文件

| 文件 | 作用 |
|------|------|
| `index.html` | 页面 UI + 渲染逻辑（左侧版本列表、右侧更新趋势图、右下最新版本大字报） |
| `data.js` | **版本数据本体**，核心是一个 `VERSION_DATA` 数组 |
| （Netlify） | 部署平台，监听 GitHub `main` 分支，推送即自动部署 |

- `data.js` 中每条记录结构：`{ version, date, content, isLatest }`
- `VERSION_DATA` 数组顺序为 **「新 → 旧」**（最新一条在数组最前面）。
- `isLatest: true` 只能有一条，标记当前最新版本。

## 三、如何新增一个版本（标准操作流程，agent 执行）

1. 编辑 `data.js`，在 `VERSION_DATA = [` 之后的**第一行**插入新记录：
   ```js
   {
       version: "vXXXX",
       date: "YYYY-MM-DD",
       content: "更新说明，多行用 \\n 连接",
       isLatest: true
   },
   ```
2. 把**上一条**记录的 `isLatest` 改为 `false`（保证只有一条最新）。
3. 提交并推送到 `main`：
   ```bash
   git add data.js
   git commit -m "版本更新：vXXXX"
   git push origin main
   ```
4. Netlify 自动部署，无需其它操作。常规版本更新**只需改 `data.js`**。

> 用户每次只需提供三样：版本号、日期、更新内容（任意格式均可，agent 负责格式化进 `content`）。

## 四、已完成的定制（已部署上线）

- **左侧版本列表改为「新 → 旧、最新置顶」**：渲染数据源由 `getAllVersions()`（内部 `.reverse()`）改为直接用 `VERSION_DATA.forEach`。
- **右侧趋势图改为显示「最近 10 个（最新）」**：由 `VERSION_DATA.slice(-10)` 改为 `VERSION_DATA.slice(0, 10)`。

## 五、推送所需的凭证

- 需要 GitHub **写入权限**：fine-grained PAT，仅授权仓库 `gysoliver-lab/version-board`，权限 `Contents: Read and write`。
- 当前沙箱已把凭证存入 `/root/.git_creds`（仅本沙箱、权限 600），agent 可直接 `git push`。
- **⚠️ 重要**：切换到「另一种模式 / 另一个沙箱」时，该凭证**不保证携带**。新模式下若无法 push，需要用户重新提供 PAT，或配置 Deploy Key（SSH 公钥）写入仓库。

## 六、用户偏好（重要）

- 用户希望**用他自己的自定义模型**来运行本项目。
- 自定义模型入口在「返修邮件自动化」等模式中可见，但本项目当前的 agent 模式**没有**该入口。
- 解决方式：在**支持自定义模型的模式**下打开本项目、加载本 `AGENTS.md` 作为上下文，并切换到用户的自定义模型执行任务。
- 本项目所有操作（改 `data.js` / `index.html`、推 GitHub、Netlify 部署）与底层用哪个模型**无关**，模型只决定「谁在理解指令」。

## 七、其它背景

- 用户本机访问 GitHub 有时不稳定（网络/连通性），因此采用「agent 代为 push」比用户手动 push 更可靠。
- 线上看板（Netlify）与 GitHub 是两套系统，GitHub 打不开不影响看板展示，只影响提交更新。
- 本地预览方法（可选）：在沙箱用 `python3 -m http.server` 起静态服务，加载 `index.html` + `data.js`，再用无头浏览器截图核对效果后再推送。

## 八、仓库信息

- GitHub 仓库：`gysoliver-lab/version-board`（默认分支 `main`）
- Netlify 站点：`astounding-panda-5efbf8`
- 在线看板：https://astounding-panda-5efbf8.netlify.app
