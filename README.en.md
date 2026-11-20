# Bilibili Screenshot — Video Frame Capture

[简体中文](README.md) | **English**

Capture the current Bilibili video frame in one click, without pausing playback. Chrome / Edge MV3 (the source is also compatible with Safari Web Extensions). One build for every language: the interface follows your browser language (15 languages included: English, 简体中文, 繁體中文, 日本語, 한국어, Español, Français, Deutsch, Русский, Português (Brasil), Italiano, Tiếng Việt, ไทย, Bahasa Indonesia, हिन्दी).

![English settings](setting-en.png)

## Download

Go to **Releases** and download `Bilibili-Screenshot-vX.Y.Z.zip`.

## Install in Edge

Same steps as Chrome: open `edge://extensions`, turn on **Developer mode** (left sidebar), click **Load unpacked** and select the unzipped folder.

## Install in Chrome

1. Unzip the release archive (or clone this repo; the extension is the `extension/` folder).
2. Open `chrome://extensions` and turn on **Developer mode** (top right).
3. Click **Load unpacked** and select the unzipped folder (or `extension/`).
4. Open any Bilibili video: a camera button appears at the bottom right of the player (left of the settings gear). Pinning the extension to the toolbar is recommended.

## Features

- **Three capture entries**, none of which pause playback:
  1. The camera button at the bottom right of the player
  2. A keyboard shortcut, `Ctrl+Shift+S` by default (Mac: `Control+Shift+S`), changeable at `chrome://extensions/shortcuts` (Edge: `edge://extensions/shortcuts`)
  3. The toolbar icon → "Capture current frame"
- **Two capture modes:**
  - *Clean frame* (default): draws the video frame to a canvas at its **native resolution** (a 4K video gives a 4K image), with no player controls, subtitles, danmaku or cursor. If the browser blocks this for a particular video, it falls back to "What you see" automatically.
  - *What you see*: screenshots the viewport and crops it to the video, so **subtitles and danmaku are included**. Resolution is limited by the window size (fullscreen is best).
- **After capture:** preview first (then save or copy), save directly, or copy to the clipboard (if copying fails, the preview opens so the image isn't lost).
- **Formats:** PNG / JPG / WebP with adjustable quality. Clipboard copies are always PNG.
- **Automatic file names:** `video-title_mm-ss_date-time.ext`, e.g. `Some Tutorial_12-34_20261114_145501.png`.
- Works on vertical videos and while paused. Tabs opened before the extension was installed work without a refresh.
- Light and dark theme for the popup and settings page (follows the system).

The extension only runs on video pages at `https://www.bilibili.com/*` — not on live streams (`live.bilibili.com`) or other subdomains.

## Limits

- **DRM content can't be captured.** Bilibili's paid movies and anime are DRM-protected: the browser blacks out the picture in both capture modes, and no extension can get around that. Regular Bilibili videos (including 4K) are unaffected.
- **Subtitles and danmaku** are drawn by the web page over the video and are not part of the picture, so clean frames contain neither (subtitles burned into the video itself do appear). Use "What you see" to include them, and capture in fullscreen for the best quality.
- A clean frame is only as sharp as the quality the video is actually loaded at: pick 1080p in the player to get 1080p, and let it buffer before capturing something important.

## Safari (Mac)

Safari can't install a zip directly. On a Mac with Xcode (free in the App Store), wrap the `extension/` folder with Apple's converter:

1. Run `xcrun safari-web-extension-converter /path/to/extension` (choose Swift and any name).
2. Open the generated Xcode project and click Run (▶) once; this registers the extension with Safari.
3. In Safari, go to Settings → Extensions, enable "Bilibili Screenshot", and allow it to access bilibili.com.

No paid developer account is needed for personal use on your own Mac. In Safari, shortcuts follow Safari's extension settings; if the shortcut doesn't work, use the player button.

## Project layout

```
extension/            the Chrome / Edge extension (load this folder)
  manifest.json       MV3 config — the single place the version number lives
  _locales/           message files for 15 locales (chrome.i18n)
  content.js/.css     player button, frame capture, preview overlay, toasts
  background.js       shortcut forwarding + captureVisibleTab fallback
  popup.*, options.*  toolbar popup and settings page
  i18n.js, lang.js    translation helpers (lang.js is generated from _locales)
  theme.css           shared light/dark theme
scripts/check.mjs     manifest / version / locale / host-pattern checks
.github/workflows/    CI + automated release
CHANGELOG.md          release notes (also used as the GitHub release body)
```

### Adding a language

Copy `extension/_locales/en` to `extension/_locales/<code>` (e.g. `nl`, `uk`), translate the `message` values (keep `$ARG1$`-style placeholders), then run `node scripts/check.mjs`. It fails if a key is missing or a placeholder differs. Note `extension/lang.js` is generated from the `_locales` files (it powers the Settings language override), so regenerate it after adding or editing a locale.

### Releasing

1. Bump `version` in `extension/manifest.json` and add a `## [x.y.z]` section to `CHANGELOG.md`.
2. Commit, then `git tag vx.y.z && git push --tags`.
3. The workflow runs the checks, builds `Bilibili-Screenshot-vx.y.z.zip` and publishes the release. It refuses to release if the tag and the manifest version differ.

## License

MIT — see [LICENSE](LICENSE).
