// Bilibili Screenshot - options
const DEFAULT_SETTINGS = {
  format: "png",
  quality: 0.92,
  afterCapture: "preview",
  captureMode: "clean"
};

async function load() {
  const data = await chrome.storage.local.get(["settings", "uiLanguage"]);
  const s = { ...DEFAULT_SETTINGS, ...(data.settings || {}) };

  const langEl = document.querySelector(
    'input[name="lang"][value="' + (data.uiLanguage || "auto") + '"]'
  );
  if (langEl) langEl.checked = true;

  const modeEl = document.querySelector(
    'input[name="mode"][value="' + s.captureMode + '"]'
  );
  if (modeEl) modeEl.checked = true;
  const actEl = document.querySelector(
    'input[name="act"][value="' + s.afterCapture + '"]'
  );
  if (actEl) actEl.checked = true;
  document.getElementById("format").value = s.format;
  const q = Math.round((s.quality || 0.92) * 100);
  document.getElementById("quality").value = q;
  document.getElementById("qVal").textContent = q + "%";

  try {
    const res = await chrome.runtime.sendMessage({ type: "bili-get-shortcut" });
    document.getElementById("shortcut").textContent =
      res && res.shortcut ? res.shortcut : t("optShortcutNotSet");
  } catch (e) {
    document.getElementById("shortcut").textContent = "—";
  }
}

// Language applies immediately (it is a view preference, not a capture
// setting, so it does not wait for the Save button below)
document.querySelectorAll('input[name="lang"]').forEach((r) => {
  r.addEventListener("change", async () => {
    const v =
      document.querySelector('input[name="lang"]:checked')?.value || "auto";
    await chrome.storage.local.set({ uiLanguage: v });
    if (window.biliSetLang) window.biliSetLang(v);
  });
});

document.getElementById("quality").addEventListener("input", (e) => {
  document.getElementById("qVal").textContent = e.target.value + "%";
});

document.getElementById("openShortcuts").addEventListener("click", () => {
  chrome.tabs.create({ url: (/\bEdg\//.test(navigator.userAgent) ? "edge" : "chrome") + "://extensions/shortcuts" });
});

document.getElementById("save").addEventListener("click", async () => {
  const mode =
    document.querySelector('input[name="mode"]:checked')?.value || "clean";
  const act =
    document.querySelector('input[name="act"]:checked')?.value || "preview";
  const settings = {
    captureMode: mode,
    afterCapture: act,
    format: document.getElementById("format").value,
    quality: Number(document.getElementById("quality").value) / 100
  };
  await chrome.storage.local.set({ settings });
  const saved = document.getElementById("saved");
  saved.style.opacity = "1";
  setTimeout(() => (saved.style.opacity = "0"), 1600);
});

load();
