# Bilibili 截屏 — Video Frame Capture

**简体中文** | [English](README.en.md)

一键截取 Bilibili 当前视频帧，不用暂停播放。Chrome / Edge MV3（源码同样兼容 Safari Web Extension）。所有语言共用同一个版本：界面语言跟随浏览器（已内置 15 种语言：英文、简体中文、繁體中文、日本語、한국어、Español、Français、Deutsch、Русский、Português (Brasil)、Italiano、Tiếng Việt、ไทย、Bahasa Indonesia、हिन्दी）。

![中文版设置](setting-zh-CN.png)

## 下载

到 **Releases** 下载 `Bilibili-Screenshot-vX.Y.Z.zip`。

## 在 Edge 里安装

步骤与 Chrome 相同：打开 `edge://extensions`，打开左侧栏的**开发人员模式**，点击**加载解压缩的扩展**并选择解压后的文件夹。

## 在 Chrome 里安装

1. 解压 Release 压缩包（或 clone 本仓库，插件就是 `extension/` 文件夹）。
2. 打开 `chrome://extensions`，打开右上角的**开发者模式**。
3. 点**加载已解压的扩展程序**，选择解压出来的文件夹（或 `extension/`）。
4. 打开任意 Bilibili 视频，播放器右下角（设置齿轮左边）会出现相机按钮。建议把插件固定到工具栏。

## 功能

- **三种截屏入口**，都不暂停播放：
  1. 播放器右下角的相机按钮
  2. 快捷键，默认 `Ctrl+Shift+S`（Mac：`Control+Shift+S`），可在 `chrome://extensions/shortcuts` 修改（Edge：`edge://extensions/shortcuts`）
  3. 点工具栏插件图标 →「截取当前帧」
- **两种画面模式：**
  - *干净帧*（默认）：canvas 直抓视频帧，**原生分辨率**（视频是 4K 就截 4K），无控制条、无字幕、无弹幕、无鼠标。个别视频抓帧被拦截时自动回退到「所见即所得」。
  - *所见即所得*：拍当前视口再按视频位置裁剪，**字幕和弹幕一起截进去**，分辨率受窗口大小限制（全屏截最佳）。
- **截后动作：**先预览（再选保存/复制）、直接保存、或复制到剪贴板（复制失败会自动弹出预览，不丢图）。
- **格式：**PNG / JPG / WebP，质量可调；复制到剪贴板统一用 PNG。
- **文件名自动生成：**`视频标题_时分秒_日期时间.扩展名`，如 `某某教程_12-34_20261114_145501.png`。
- 支持竖屏视频和暂停状态；装插件之前就打开的标签页也能直接截，不用刷新。
- 弹窗和设置页支持浅色/深色主题（跟随系统）。

插件只在 `https://www.bilibili.com/*` 的视频页运行，不支持直播间（`live.bilibili.com`）和其他子域名页面。

## 限制

- **DRM 内容截不了。**Bilibili 的付费电影、番剧带 DRM 保护，两种截屏模式下浏览器都会把画面挡成黑屏，任何插件都绕不过去；普通 Bilibili 视频（含 4K）不受影响。
- **字幕和弹幕**是网页叠在视频上的，不属于视频画面，所以干净帧两者都不带（视频本身烧录的硬字幕属于画面，会截进去）；想连它们一起截请用「所见即所得」，全屏截效果最好。
- 干净帧清晰度取决于视频当前实际加载的分辨率：播放器画质选 1080p 才能截到 1080p；截重要画面前先把画质调好并等它缓冲。

## Safari (Mac)

Safari 不能直接装 zip。在装了 Xcode 的 Mac 上（App Store 免费下载），用苹果官方转换器给 `extension/` 文件夹包一层 App 外壳：

1. 终端运行 `xcrun safari-web-extension-converter /路径/extension`（语言选 Swift，名称随意）。
2. 用 Xcode 打开生成的工程，点 Run（▶）运行一次，扩展就注册进 Safari 了。
3. 打开 Safari → 设置 → 扩展，勾选启用「Bilibili Screenshot」，并允许它访问 bilibili.com。

个人在自己 Mac 上自用不需要付费开发者账号。Safari 里快捷键以 Safari 的扩展设置为准，不生效时用播放器按钮即可。

## 项目结构

```
extension/            Chrome / Edge 扩展本体（加载这个文件夹）
  manifest.json       MV3 配置，版本号只在这里写一次
  _locales/           15 种语言的文案（chrome.i18n）
  content.js/.css     播放器按钮、抓帧、预览浮层、提示
  background.js       快捷键转发 + captureVisibleTab 兜底截图
  popup.*, options.*  工具栏弹窗与设置页
  i18n.js, lang.js    翻译辅助（lang.js 由 _locales 生成）
  theme.css           共用的浅色/深色主题
scripts/check.mjs     manifest / 版本 / 多语言 / 域名匹配检查
.github/workflows/    CI + 自动发布
CHANGELOG.md          更新日志（同时作为 GitHub Release 说明）
```

### 添加语言

把 `extension/_locales/en` 复制为 `extension/_locales/<语言代码>`（如 `nl`、`uk`），翻译 `message` 的内容（保留 `$ARG1$` 这类占位符），然后运行 `node scripts/check.mjs`。缺少 key 或占位符不一致时会报错。注意 `extension/lang.js` 是由 `_locales` 生成的（设置页的语言切换靠它），新增或修改语言后要重新生成。

### 发布新版本

1. 修改 `extension/manifest.json` 里的 `version`，并在 `CHANGELOG.md` 加一节 `## [x.y.z]`。
2. 提交后执行 `git tag vx.y.z && git push --tags`。
3. 工作流会先跑检查，再打包 `Bilibili-Screenshot-vx.y.z.zip` 并发布 Release；tag 与 manifest 版本号不一致时会拒绝发布。

## 许可证

MIT — 见 [LICENSE](LICENSE)。
