# Changelog

The version number lives in one place: `extension/manifest.json`. `node scripts/check.mjs` (run by CI) fails if it has no entry below, or if a release tag doesn't match it.

## [1.0]

Initial public release.

### Features
- **Three ways to capture** a frame without pausing playback: the camera button in the player controls (left of the settings gear), a keyboard shortcut (`Ctrl+Shift+S` by default, `Control+Shift+S` on Mac; changeable at `chrome://extensions/shortcuts`), and the toolbar popup.
- **Two capture modes:** *Clean frame* (default) draws the frame at the video's native resolution with no controls, subtitles, danmaku or cursor, and falls back to *What you see* if the browser blocks it. *What you see* crops a viewport screenshot to the video, so subtitles and danmaku are included.
- **After capture:** preview first, save directly, or copy to the clipboard (if copying fails, the preview opens, so the image is never lost).
- **PNG / JPG / WebP** with adjustable quality; clipboard copies are always PNG. File names are generated from the video title, time and date.
- Works on vertical videos and while paused, and on Bilibili tabs that were already open when the extension was installed.
- **Interface language:** 15 languages — English, 简体中文, 繁體中文, 日本語, 한국어, Español, Français, Deutsch, Русский, Português (Brasil), Italiano, Tiếng Việt, ไทย, Bahasa Indonesia and हिन्दी. It follows the browser language by default (regional variants map to the closest shipped locale); Settings has an "Interface language" choice (Follow browser, or any shipped language) that applies immediately to the settings page, the toolbar popup and in-page messages. The extension name and description that Chrome itself displays still follow the browser language.
- Light and dark theme for the popup and settings page (follows the system).
- **Microsoft Edge** (Chromium) is supported with the same package; the shortcuts button opens `edge://extensions/shortcuts` there and the settings/popup text names both browsers ("Chrome / Edge").
- Small footprint: runs only on `https://www.bilibili.com/*`, with the `storage`, `activeTab` and `scripting` permissions.

### Developer
- One codebase for all languages (Chrome `_locales`); adding a language is a copy-and-translate of `extension/_locales/en`.
- GitHub Actions: validates the project on every push and pull request and, on a version tag such as `v1.0`, builds `Bilibili-Screenshot-v1.0.zip` and publishes a GitHub release using this section as the notes.
- `scripts/check.mjs`: manifest, version, locale-parity and host-pattern checks.
