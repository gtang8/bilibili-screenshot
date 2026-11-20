// Bilibili Screenshot - popup (strings come from i18n.js / _locales)
const ACT_KEYS = { preview: "actPreview", download: "actDownload", copy: "actCopy" };

// Keep in sync with host_permissions in manifest.json
function isSupportedUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === "https:" && (u.hostname === "www.bilibili.com");
  } catch (e) {
    return false;
  }
}

// Show a status line; uses textContent only, never innerHTML
function setMsg(text, cls) {
  const msg = document.getElementById("msg");
  msg.textContent = "";
  if (!cls) {
    msg.textContent = text;
    return;
  }
  const span = document.createElement("span");
  span.className = cls;
  span.textContent = text;
  msg.appendChild(span);
}

async function refresh() {
  try {
    const res = await chrome.runtime.sendMessage({ type: "bili-get-shortcut" });
    document.getElementById("shortcut").textContent =
      res && res.shortcut ? res.shortcut : t("notSet");
  } catch (e) {
    document.getElementById("shortcut").textContent = "—";
  }
  const data = await chrome.storage.local.get("settings");
  const s = data.settings || {};
  document.getElementById("fmt").textContent = (s.format || "png").toUpperCase();
  document.getElementById("act").textContent = t(
    ACT_KEYS[s.afterCapture || "preview"] || "actPreview"
  );

  // Disable the button and explain when not on a Bilibili page
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !isSupportedUrl(tab.url || "")) {
    document.getElementById("captureBtn").disabled = true;
    setMsg(t("popupNotBilibiliOpen"), "err");
  }
}

document.getElementById("captureBtn").addEventListener("click", async () => {
  setMsg(t("popupCapturing"));
  try {
    // delay: let the popup close and focus return to the page before capturing,
    // otherwise "copy to clipboard" is rejected because the page isn't focused
    const res = await chrome.runtime.sendMessage({ type: "bili-capture-active", delay: 200 });
    if (res && res.ok) {
      // The result (preview / saved / copied) is shown by the in-page message,
      // so just close the popup
      window.close();
    } else if (res && res.error === "not-bilibili") {
      setMsg(t("popupNotBilibili"), "err");
    } else {
      setMsg(t("popupCaptureFailed", (res && res.error) || t("popupUnknownError")), "err");
    }
  } catch (e) {
    setMsg(t("popupRequestFailed", e.message), "err");
  }
});

document.getElementById("openShortcuts").addEventListener("click", () => {
  chrome.tabs.create({ url: (/\bEdg\//.test(navigator.userAgent) ? "edge" : "chrome") + "://extensions/shortcuts" });
});
document.getElementById("openOptions").addEventListener("click", () => {
  chrome.runtime.openOptionsPage();
});

refresh();
