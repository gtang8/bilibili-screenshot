// Bilibili Screenshot - i18n helper for the popup and options pages.
// Strings come from lang.js (generated from _locales/*/messages.json) so the
// Settings language override applies here too; elements marked with a
// data-i18n attribute get their text filled in from there.
let biliPref = "auto";
let biliLang = biliResolveLang("auto");

// Strings that name the browser say "Chrome / Edge" (same engine, same pages:
// chrome://extensions/shortcuts or edge://extensions/shortcuts).
function t(key, ...subs) {
  const s = biliT(biliLang, key, subs) || key;
  return s.replace(/Chrome(?! \/ Edge)/g, "Chrome / Edge");
}

function localizePage() {
  document.documentElement.lang = biliLang.replace("_", "-");
  for (const el of document.querySelectorAll("[data-i18n]")) {
    el.textContent = t(el.dataset.i18n);
  }
}

// Used for the initial preference load below, and by the options page when
// the user picks a different language (applies immediately, no reload).
window.biliSetLang = function (pref) {
  biliPref = pref || "auto";
  biliLang = biliResolveLang(biliPref);
  localizePage();
};

localizePage(); // first pass in the browser language; corrected below if a preference is stored
try {
  chrome.storage.local
    .get("uiLanguage")
    .then((d) => {
      if (d && d.uiLanguage && d.uiLanguage !== "auto") window.biliSetLang(d.uiLanguage);
    })
    .catch(() => {});
} catch (e) {}
