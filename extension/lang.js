// Bilibili Screenshot - bundled UI strings + language resolution.
// GENERATED from _locales/*/messages.json -- edit those files, not this one.
//
// Why this exists: chrome.i18n.getMessage() always follows the browser UI
// language; Chrome offers no per-extension override. The Settings page lets
// the user pick Follow browser or any shipped language, so the strings
// ship here and every t() resolves through biliT() with the stored preference.
// _locales is still required: the extension name/description that Chrome
// itself displays (extensions page, toolbar tooltip) come from there.
var BILI_STRINGS = {
 "en": {
  "extName": {
   "message": "Bilibili Screenshot - Video Frame Capture"
  },
  "extDescription": {
   "message": "One-click Bilibili frame capture at native resolution, without pausing. Save as PNG/JPG/WebP or copy to clipboard."
  },
  "actionTitle": {
   "message": "Capture the current Bilibili video frame"
  },
  "btnClose": {
   "message": "✕ Close"
  },
  "btnSave": {
   "message": "💾 Save file"
  },
  "btnCopy": {
   "message": "📋 Copy to clipboard"
  },
  "previewAlt": {
   "message": "screenshot preview"
  },
  "toastSaved": {
   "message": "Saved: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "Copied to clipboard. Paste it into a chat or document."
  },
  "toastCopyDenied": {
   "message": "Copy failed (the browser denied clipboard access). Use \"Save file\" instead."
  },
  "toastNoVideo": {
   "message": "No video found (use this on a Bilibili watch page)."
  },
  "toastNotReady": {
   "message": "The video hasn't loaded a picture yet. Play it for a moment, then try again."
  },
  "metaNative": {
   "message": "native frame"
  },
  "metaSubs": {
   "message": "with subtitles"
  },
  "toastScreenshotSaved": {
   "message": "Screenshot saved: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "Screenshot copied to clipboard ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "Auto-copy failed. Preview opened; click \"Save file\"."
  },
  "toastCaptureFailed": {
   "message": "Capture failed: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "Capture current frame (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "Capture current frame"
  },
  "loading": {
   "message": "Loading…"
  },
  "notSet": {
   "message": "Not set"
  },
  "actPreview": {
   "message": "Preview first"
  },
  "actDownload": {
   "message": "Save directly"
  },
  "actCopy": {
   "message": "Copy to clipboard"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "On a Bilibili watch page, click the button below, press the shortcut, or click the camera button at the bottom right of the player to capture the current frame."
  },
  "popupCapture": {
   "message": "Capture current frame"
  },
  "popupShortcut": {
   "message": "Shortcut"
  },
  "popupFormat": {
   "message": "Image format"
  },
  "popupAfter": {
   "message": "After capture"
  },
  "popupChangeShortcut": {
   "message": "Change shortcut"
  },
  "popupSettings": {
   "message": "Settings"
  },
  "popupNote": {
   "message": "Clean frames are captured at the resolution currently playing, without player controls, subtitles or danmaku. To include subtitles or danmaku, switch the capture mode to \"What you see\" in Settings."
  },
  "popupNotBilibiliOpen": {
   "message": "This is not a Bilibili page. Open a video first."
  },
  "popupCapturing": {
   "message": "Capturing…"
  },
  "popupNotBilibili": {
   "message": "This is not a Bilibili page."
  },
  "popupCaptureFailed": {
   "message": "Capture failed: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "unknown error"
  },
  "popupRequestFailed": {
   "message": "Request failed: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Bilibili Screenshot Settings"
  },
  "optIntro": {
   "message": "All three ways to capture work the same: the camera button at the bottom right of the player, the keyboard shortcut, and the button in the toolbar popup. Capturing does not pause playback; the video keeps playing and the image is the frame at the moment you pressed."
  },
  "optH1": {
   "message": "1. Keyboard shortcut"
  },
  "optCurrentShortcut": {
   "message": "Current shortcut: "
  },
  "optShortcutNotSet": {
   "message": "Not set (set it on Chrome's shortcuts page)"
  },
  "optShortcutHelp": {
   "message": "Chrome doesn't let extensions change shortcuts directly. Change it on Chrome's own page: click the button below → find \"Bilibili Screenshot\" → click the pencil icon → press the new key combination."
  },
  "optOpenShortcuts": {
   "message": "Open Chrome's shortcuts page"
  },
  "optH2": {
   "message": "2. Capture mode"
  },
  "optCleanTitle": {
   "message": "Clean frame (recommended)"
  },
  "optCleanDesc": {
   "message": " — the video's native resolution (1080p/4K stays at its original size), with no player controls, subtitles or mouse cursor. Highest quality."
  },
  "optCleanFallback": {
   "message": "If the browser blocks frame capture for a particular video, it automatically falls back to the \"What you see\" mode."
  },
  "optVisibleTitle": {
   "message": "What you see"
  },
  "optVisibleDesc": {
   "message": " — captures what is actually on screen, so subtitles are included, but resolution is limited by the window size; it works best in fullscreen."
  },
  "optH3": {
   "message": "3. After capturing"
  },
  "optPreviewDesc": {
   "message": " — shows a preview, then choose \"Save file\" or \"Copy to clipboard\". Not happy with it? Close it and capture again, with no wasted files."
  },
  "optDownloadDesc": {
   "message": " — downloads straight to your browser's download folder on each press; good for capturing many frames."
  },
  "optCopyDesc": {
   "message": " — copies on each press so you can paste straight into a chat, document or email (if copying fails it opens the preview instead, so the image isn't lost)."
  },
  "optH4": {
   "message": "4. Image format"
  },
  "optFmtPng": {
   "message": "PNG (lossless, larger files)"
  },
  "optFmtJpeg": {
   "message": "JPG (small, universal)"
  },
  "optFmtWebp": {
   "message": "WebP (smallest)"
  },
  "optQuality": {
   "message": "JPG / WebP quality: "
  },
  "optFileNamesLead": {
   "message": "File names are generated automatically: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", e.g. "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". Copying to the clipboard always uses PNG (a browser clipboard limitation), regardless of the format chosen here."
  },
  "optSave": {
   "message": "Save settings"
  },
  "optSaved": {
   "message": "✓ Saved"
  },
  "optNotesH": {
   "message": "Notes and limits"
  },
  "optDrmTitle": {
   "message": "DRM-protected video can't be captured: "
  },
  "optDrmDesc": {
   "message": "Bilibili's paid movies and anime are DRM-protected — on those pages the browser blacks out the picture in both capture modes. This is an industry-wide restriction that no extension can get around. Regular Bilibili videos are not affected, and clean frames capture at the resolution currently playing, up to 4K."
  },
  "optSubsTitle": {
   "message": "Subtitles and danmaku: "
  },
  "optSubsDesc": {
   "message": "clean frames contain neither subtitles nor danmaku — both are drawn by the web page over the video and are not part of the picture (subtitles burned into the video itself are part of the picture and do appear). To include them, use \"What you see\"; it captures at the size shown on screen, so capture in fullscreen for the best quality."
  },
  "optScopeTitle": {
   "message": "Scope: "
  },
  "optScopeDesc": {
   "message": "this extension works on video pages at www.bilibili.com only — not on live streams (live.bilibili.com) or other subdomains."
  },
  "optVertical": {
   "message": "Vertical videos work too (native vertical resolution)."
  },
  "optPaused": {
   "message": "You can capture while paused; you get the frame that is on screen."
  },
  "optSafari": {
   "message": "Safari: this extension is standard Web Extension source and can be converted with Xcode's safari-web-extension-converter; see the Safari section of the project README."
  },
  "optLangH": {
   "message": "Interface language"
  },
  "optLangAuto": {
   "message": "Follow browser language"
  },
  "optLangDesc": {
   "message": "Applies immediately to the settings page, the toolbar popup and in-page messages. The extension name shown on Chrome's extensions page still follows the browser language (a Chrome limitation)."
  }
 },
 "de": {
  "extName": {
   "message": "Bilibili Screenshot - Video-Frames erfassen"
  },
  "extDescription": {
   "message": "Bilibili-Frames ohne Pause in nativer Auflösung erfassen. Als PNG/JPG/WebP speichern oder kopieren."
  },
  "actionTitle": {
   "message": "Aktuellen Bilibili-Videoframe erfassen"
  },
  "btnClose": {
   "message": "✕ Schließen"
  },
  "btnSave": {
   "message": "💾 Datei speichern"
  },
  "btnCopy": {
   "message": "📋 In Zwischenablage kopieren"
  },
  "previewAlt": {
   "message": "Screenshot-Vorschau"
  },
  "toastSaved": {
   "message": "Gespeichert: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "In die Zwischenablage kopiert. Fügen Sie es in einen Chat oder ein Dokument ein."
  },
  "toastCopyDenied": {
   "message": "Kopieren fehlgeschlagen (der Browser hat den Zugriff auf die Zwischenablage verweigert). Verwenden Sie stattdessen „Datei speichern“."
  },
  "toastNoVideo": {
   "message": "Kein Video gefunden (auf einer Bilibili-Wiedergabeseite verwenden)."
  },
  "toastNotReady": {
   "message": "Das Video hat noch kein Bild geladen. Spielen Sie es kurz ab und versuchen Sie es erneut."
  },
  "metaNative": {
   "message": "nativer Frame"
  },
  "metaSubs": {
   "message": "mit Untertiteln"
  },
  "toastScreenshotSaved": {
   "message": "Screenshot gespeichert: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "Screenshot in die Zwischenablage kopiert ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "Automatisches Kopieren fehlgeschlagen. Die Vorschau wurde geöffnet; klicken Sie auf „Datei speichern“."
  },
  "toastCaptureFailed": {
   "message": "Erfassen fehlgeschlagen: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "Aktuellen Frame erfassen (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "Aktuellen Frame erfassen"
  },
  "loading": {
   "message": "Wird geladen…"
  },
  "notSet": {
   "message": "Nicht festgelegt"
  },
  "actPreview": {
   "message": "Zuerst Vorschau"
  },
  "actDownload": {
   "message": "Direkt speichern"
  },
  "actCopy": {
   "message": "In Zwischenablage kopieren"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "Klicken Sie auf einer Bilibili-Wiedergabeseite auf die Schaltfläche unten, drücken Sie die Tastenkombination oder klicken Sie auf die Kamera-Schaltfläche unten rechts im Player, um den aktuellen Frame zu erfassen."
  },
  "popupCapture": {
   "message": "Aktuellen Frame erfassen"
  },
  "popupShortcut": {
   "message": "Tastenkombination"
  },
  "popupFormat": {
   "message": "Bildformat"
  },
  "popupAfter": {
   "message": "Nach dem Erfassen"
  },
  "popupChangeShortcut": {
   "message": "Tastenkombination ändern"
  },
  "popupSettings": {
   "message": "Einstellungen"
  },
  "popupNote": {
   "message": "Saubere Frames werden in der gerade abgespielten Auflösung erfasst, ohne Player-Steuerung, Untertitel oder Danmaku. Um Untertitel oder Danmaku einzubeziehen, stellen Sie den Erfassungsmodus in den Einstellungen auf „Was Sie sehen“ um."
  },
  "popupNotBilibiliOpen": {
   "message": "Dies ist keine Bilibili-Seite. Öffnen Sie zuerst ein Video."
  },
  "popupCapturing": {
   "message": "Wird erfasst…"
  },
  "popupNotBilibili": {
   "message": "Dies ist keine Bilibili-Seite."
  },
  "popupCaptureFailed": {
   "message": "Erfassen fehlgeschlagen: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "unbekannter Fehler"
  },
  "popupRequestFailed": {
   "message": "Anfrage fehlgeschlagen: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Bilibili Screenshot Einstellungen"
  },
  "optIntro": {
   "message": "Alle drei Erfassungswege funktionieren gleich: die Kamera-Schaltfläche unten rechts im Player, die Tastenkombination und die Schaltfläche im Toolbar-Popup. Das Erfassen pausiert die Wiedergabe nicht; das Video läuft weiter und das Bild ist der Frame aus dem Moment des Drückens."
  },
  "optH1": {
   "message": "1. Tastenkombination"
  },
  "optCurrentShortcut": {
   "message": "Aktuelle Tastenkombination: "
  },
  "optShortcutNotSet": {
   "message": "Nicht festgelegt (auf Chromes Seite für Tastenkombinationen festlegen)"
  },
  "optShortcutHelp": {
   "message": "Chrome erlaubt es Erweiterungen nicht, Tastenkombinationen direkt zu ändern. Ändern Sie sie auf Chromes eigener Seite: Klicken Sie auf die Schaltfläche unten → suchen Sie „Bilibili Screenshot“ → klicken Sie auf das Stiftsymbol → drücken Sie die neue Tastenkombination."
  },
  "optOpenShortcuts": {
   "message": "Chromes Seite für Tastenkombinationen öffnen"
  },
  "optH2": {
   "message": "2. Erfassungsmodus"
  },
  "optCleanTitle": {
   "message": "Sauberer Frame (empfohlen)"
  },
  "optCleanDesc": {
   "message": " — die native Auflösung des Videos (1080p/4K bleibt in Originalgröße), ohne Player-Steuerung, Untertitel oder Mauszeiger. Höchste Qualität."
  },
  "optCleanFallback": {
   "message": "Wenn der Browser die Frame-Erfassung bei einem bestimmten Video blockiert, fällt er automatisch auf den Modus „Was Sie sehen“ zurück."
  },
  "optVisibleTitle": {
   "message": "Was Sie sehen"
  },
  "optVisibleDesc": {
   "message": " — erfasst, was tatsächlich auf dem Bildschirm ist, also inklusive Untertitel, aber die Auflösung ist durch die Fenstergröße begrenzt; am besten im Vollbild."
  },
  "optH3": {
   "message": "3. Nach dem Erfassen"
  },
  "optPreviewDesc": {
   "message": " — zeigt eine Vorschau, dann wählen Sie „Datei speichern“ oder „In Zwischenablage kopieren“. Nicht zufrieden? Schließen Sie sie und erfassen Sie erneut, ganz ohne überflüssige Dateien."
  },
  "optDownloadDesc": {
   "message": " — lädt bei jedem Drücken direkt in den Download-Ordner Ihres Browsers herunter; gut, um viele Frames zu erfassen."
  },
  "optCopyDesc": {
   "message": " — kopiert bei jedem Drücken, sodass Sie direkt in einen Chat, ein Dokument oder eine E-Mail einfügen können (schlägt das Kopieren fehl, öffnet sich stattdessen die Vorschau, damit das Bild nicht verloren geht)."
  },
  "optH4": {
   "message": "4. Bildformat"
  },
  "optFmtPng": {
   "message": "PNG (verlustfrei, größere Dateien)"
  },
  "optFmtJpeg": {
   "message": "JPG (klein, universell)"
  },
  "optFmtWebp": {
   "message": "WebP (am kleinsten)"
  },
  "optQuality": {
   "message": "JPG-/WebP-Qualität: "
  },
  "optFileNamesLead": {
   "message": "Dateinamen werden automatisch erzeugt: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", z. B. "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". Das Kopieren in die Zwischenablage verwendet immer PNG (eine Einschränkung der Browser-Zwischenablage), unabhängig vom hier gewählten Format."
  },
  "optSave": {
   "message": "Einstellungen speichern"
  },
  "optSaved": {
   "message": "✓ Gespeichert"
  },
  "optNotesH": {
   "message": "Hinweise und Grenzen"
  },
  "optDrmTitle": {
   "message": "DRM-geschützte Videos können nicht erfasst werden: "
  },
  "optDrmDesc": {
   "message": "Bezahlte Filme und Anime auf Bilibili sind DRM-geschützt — auf solchen Seiten schwärzt der Browser das Bild in beiden Erfassungsmodi. Das ist eine branchenweite Einschränkung, die keine Erweiterung umgehen kann. Normale Bilibili-Videos sind nicht betroffen; saubere Frames werden in der gerade abgespielten Auflösung bis zu 4K erfasst."
  },
  "optSubsTitle": {
   "message": "Untertitel und Danmaku: "
  },
  "optSubsDesc": {
   "message": "Saubere Frames enthalten weder Untertitel noch Danmaku — beides wird von der Webseite über das Video gelegt und ist kein Teil des Bildes (fest ins Video eingebrannte Untertitel gehören zum Bild und erscheinen). Um sie einzubeziehen, verwenden Sie „Was Sie sehen“; es erfasst in der auf dem Bildschirm angezeigten Größe, also am besten im Vollbild erfassen."
  },
  "optScopeTitle": {
   "message": "Geltungsbereich: "
  },
  "optScopeDesc": {
   "message": "Diese Erweiterung funktioniert nur auf Videoseiten unter www.bilibili.com — nicht bei Livestreams (live.bilibili.com) oder anderen Subdomains."
  },
  "optVertical": {
   "message": "Vertikale Videos funktionieren ebenfalls (native vertikale Auflösung)."
  },
  "optPaused": {
   "message": "Sie können auch pausiert erfassen; Sie erhalten den Frame, der auf dem Bildschirm steht."
  },
  "optSafari": {
   "message": "Safari: Diese Erweiterung ist Standard-Web-Extension-Quellcode und kann mit Xcodes safari-web-extension-converter umgewandelt werden; siehe den Safari-Abschnitt im Projekt-README."
  },
  "optLangH": {
   "message": "Oberflächensprache"
  },
  "optLangAuto": {
   "message": "Browsersprache folgen"
  },
  "optLangDesc": {
   "message": "Wird sofort auf die Einstellungsseite, das Toolbar-Popup und Meldungen auf der Seite angewendet. Der auf Chromes Erweiterungsseite angezeigte Erweiterungsname folgt weiterhin der Browsersprache (eine Einschränkung von Chrome)."
  }
 },
 "es": {
  "extName": {
   "message": "Bilibili Screenshot - Captura de fotogramas"
  },
  "extDescription": {
   "message": "Captura fotogramas de Bilibili con un clic, en resolución nativa y sin pausar. Guarda en PNG/JPG/WebP o copia al portapapeles."
  },
  "actionTitle": {
   "message": "Capturar el fotograma actual de Bilibili"
  },
  "btnClose": {
   "message": "✕ Cerrar"
  },
  "btnSave": {
   "message": "💾 Guardar archivo"
  },
  "btnCopy": {
   "message": "📋 Copiar al portapapeles"
  },
  "previewAlt": {
   "message": "vista previa de la captura"
  },
  "toastSaved": {
   "message": "Guardado: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "Copiado al portapapeles. Pégalo en un chat o documento."
  },
  "toastCopyDenied": {
   "message": "La copia falló (el navegador denegó el acceso al portapapeles). Usa «Guardar archivo» en su lugar."
  },
  "toastNoVideo": {
   "message": "No se encontró ningún vídeo (úsalo en una página de reproducción de Bilibili)."
  },
  "toastNotReady": {
   "message": "El vídeo aún no ha cargado ninguna imagen. Reprodúcelo un momento y vuelve a intentarlo."
  },
  "metaNative": {
   "message": "fotograma nativo"
  },
  "metaSubs": {
   "message": "con subtítulos"
  },
  "toastScreenshotSaved": {
   "message": "Captura guardada: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "Captura copiada al portapapeles ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "La copia automática falló. Se abrió la vista previa; haz clic en «Guardar archivo»."
  },
  "toastCaptureFailed": {
   "message": "La captura falló: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "Capturar el fotograma actual (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "Capturar el fotograma actual"
  },
  "loading": {
   "message": "Cargando…"
  },
  "notSet": {
   "message": "Sin definir"
  },
  "actPreview": {
   "message": "Vista previa primero"
  },
  "actDownload": {
   "message": "Guardar directamente"
  },
  "actCopy": {
   "message": "Copiar al portapapeles"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "En una página de reproducción de Bilibili, haz clic en el botón de abajo, pulsa el atajo o haz clic en el botón de cámara en la esquina inferior derecha del reproductor para capturar el fotograma actual."
  },
  "popupCapture": {
   "message": "Capturar el fotograma actual"
  },
  "popupShortcut": {
   "message": "Atajo"
  },
  "popupFormat": {
   "message": "Formato de imagen"
  },
  "popupAfter": {
   "message": "Después de capturar"
  },
  "popupChangeShortcut": {
   "message": "Cambiar atajo"
  },
  "popupSettings": {
   "message": "Ajustes"
  },
  "popupNote": {
   "message": "Los fotogramas limpios se capturan con la resolución que se está reproduciendo, sin controles del reproductor, subtítulos ni danmaku. Para incluir subtítulos o danmaku, cambia el modo de captura a «Lo que ves» en Ajustes."
  },
  "popupNotBilibiliOpen": {
   "message": "Esto no es una página de Bilibili. Abre primero un vídeo."
  },
  "popupCapturing": {
   "message": "Capturando…"
  },
  "popupNotBilibili": {
   "message": "Esto no es una página de Bilibili."
  },
  "popupCaptureFailed": {
   "message": "La captura falló: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "error desconocido"
  },
  "popupRequestFailed": {
   "message": "La solicitud falló: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Ajustes de Bilibili Screenshot"
  },
  "optIntro": {
   "message": "Las tres formas de capturar funcionan igual: el botón de cámara en la esquina inferior derecha del reproductor, el atajo de teclado y el botón en la ventana emergente de la barra de herramientas. Capturar no pausa la reproducción; el vídeo sigue y la imagen es el fotograma del momento en que pulsaste."
  },
  "optH1": {
   "message": "1. Atajo de teclado"
  },
  "optCurrentShortcut": {
   "message": "Atajo actual: "
  },
  "optShortcutNotSet": {
   "message": "Sin definir (defínelo en la página de atajos de Chrome)"
  },
  "optShortcutHelp": {
   "message": "Chrome no permite que las extensiones cambien los atajos directamente. Cámbialo en la página propia de Chrome: haz clic en el botón de abajo → busca «Bilibili Screenshot» → haz clic en el icono del lápiz → pulsa la nueva combinación de teclas."
  },
  "optOpenShortcuts": {
   "message": "Abrir la página de atajos de Chrome"
  },
  "optH2": {
   "message": "2. Modo de captura"
  },
  "optCleanTitle": {
   "message": "Fotograma limpio (recomendado)"
  },
  "optCleanDesc": {
   "message": " — la resolución nativa del vídeo (1080p/4K conserva su tamaño original), sin controles del reproductor, subtítulos ni cursor del ratón. La máxima calidad."
  },
  "optCleanFallback": {
   "message": "Si el navegador bloquea la captura de fotogramas de un vídeo concreto, pasa automáticamente al modo «Lo que ves»."
  },
  "optVisibleTitle": {
   "message": "Lo que ves"
  },
  "optVisibleDesc": {
   "message": " — captura lo que realmente hay en pantalla, así que incluye los subtítulos, pero la resolución está limitada por el tamaño de la ventana; funciona mejor en pantalla completa."
  },
  "optH3": {
   "message": "3. Después de capturar"
  },
  "optPreviewDesc": {
   "message": " — muestra una vista previa y luego eliges «Guardar archivo» o «Copiar al portapapeles». ¿No te convence? Ciérrala y captura otra vez, sin archivos desperdiciados."
  },
  "optDownloadDesc": {
   "message": " — descarga directamente a la carpeta de descargas de tu navegador con cada pulsación; ideal para capturar muchos fotogramas."
  },
  "optCopyDesc": {
   "message": " — copia con cada pulsación para que puedas pegar directamente en un chat, documento o correo (si la copia falla, abre la vista previa en su lugar, para que la imagen no se pierda)."
  },
  "optH4": {
   "message": "4. Formato de imagen"
  },
  "optFmtPng": {
   "message": "PNG (sin pérdida, archivos más grandes)"
  },
  "optFmtJpeg": {
   "message": "JPG (pequeño, universal)"
  },
  "optFmtWebp": {
   "message": "WebP (el más pequeño)"
  },
  "optQuality": {
   "message": "Calidad JPG / WebP: "
  },
  "optFileNamesLead": {
   "message": "Los nombres de archivo se generan automáticamente: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", p. ej. "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". Copiar al portapapeles siempre usa PNG (una limitación del portapapeles del navegador), sea cual sea el formato elegido aquí."
  },
  "optSave": {
   "message": "Guardar ajustes"
  },
  "optSaved": {
   "message": "✓ Guardado"
  },
  "optNotesH": {
   "message": "Notas y límites"
  },
  "optDrmTitle": {
   "message": "Los vídeos protegidos con DRM no se pueden capturar: "
  },
  "optDrmDesc": {
   "message": "las películas y el anime de pago de Bilibili están protegidos con DRM; en esas páginas el navegador oscurece la imagen en ambos modos de captura. Es una restricción de toda la industria que ninguna extensión puede eludir. Los vídeos normales de Bilibili no se ven afectados, y los fotogramas limpios se capturan con la resolución que se está reproduciendo, hasta 4K."
  },
  "optSubsTitle": {
   "message": "Subtítulos y danmaku: "
  },
  "optSubsDesc": {
   "message": "los fotogramas limpios no contienen subtítulos ni danmaku: ambos los superpone la página web sobre el vídeo y no forman parte de la imagen (los subtítulos grabados en el propio vídeo sí forman parte de la imagen y aparecen). Para incluirlos, usa «Lo que ves»; captura con el tamaño mostrado en pantalla, así que captura en pantalla completa para obtener la mejor calidad."
  },
  "optScopeTitle": {
   "message": "Ámbito: "
  },
  "optScopeDesc": {
   "message": "esta extensión funciona solo en las páginas de vídeo de www.bilibili.com, no en directos (live.bilibili.com) ni en otros subdominios."
  },
  "optVertical": {
   "message": "Los vídeos verticales también funcionan (resolución vertical nativa)."
  },
  "optPaused": {
   "message": "Puedes capturar en pausa; obtienes el fotograma que está en pantalla."
  },
  "optSafari": {
   "message": "Safari: esta extensión es código estándar de Web Extension y se puede convertir con safari-web-extension-converter de Xcode; consulta la sección Safari del README del proyecto."
  },
  "optLangH": {
   "message": "Idioma de la interfaz"
  },
  "optLangAuto": {
   "message": "Seguir el idioma del navegador"
  },
  "optLangDesc": {
   "message": "Se aplica de inmediato a la página de ajustes, la ventana emergente de la barra de herramientas y los mensajes en la página. El nombre de la extensión que se muestra en la página de extensiones de Chrome sigue el idioma del navegador (una limitación de Chrome)."
  }
 },
 "fr": {
  "extName": {
   "message": "Bilibili Screenshot - Capture d'images"
  },
  "extDescription": {
   "message": "Capture d'images Bilibili en un clic, résolution native, sans pause. Enregistrez en PNG/JPG/WebP ou copiez dans le presse-papiers."
  },
  "actionTitle": {
   "message": "Capturer l'image actuelle de la vidéo Bilibili"
  },
  "btnClose": {
   "message": "✕ Fermer"
  },
  "btnSave": {
   "message": "💾 Enregistrer le fichier"
  },
  "btnCopy": {
   "message": "📋 Copier dans le presse-papiers"
  },
  "previewAlt": {
   "message": "aperçu de la capture d'écran"
  },
  "toastSaved": {
   "message": "Enregistré : $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "Copié dans le presse-papiers. Collez-le dans une discussion ou un document."
  },
  "toastCopyDenied": {
   "message": "Échec de la copie (le navigateur a refusé l'accès au presse-papiers). Utilisez plutôt « Enregistrer le fichier »."
  },
  "toastNoVideo": {
   "message": "Aucune vidéo trouvée (à utiliser sur une page de lecture Bilibili)."
  },
  "toastNotReady": {
   "message": "La vidéo n'a pas encore chargé d'image. Lancez-la un instant, puis réessayez."
  },
  "metaNative": {
   "message": "image native"
  },
  "metaSubs": {
   "message": "avec sous-titres"
  },
  "toastScreenshotSaved": {
   "message": "Capture enregistrée : $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "Capture copiée dans le presse-papiers ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "Échec de la copie automatique. L'aperçu est ouvert ; cliquez sur « Enregistrer le fichier »."
  },
  "toastCaptureFailed": {
   "message": "Échec de la capture : $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "Capturer l'image actuelle (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "Capturer l'image actuelle"
  },
  "loading": {
   "message": "Chargement…"
  },
  "notSet": {
   "message": "Non défini"
  },
  "actPreview": {
   "message": "Aperçu d'abord"
  },
  "actDownload": {
   "message": "Enregistrer directement"
  },
  "actCopy": {
   "message": "Copier dans le presse-papiers"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "Sur une page de lecture Bilibili, cliquez sur le bouton ci-dessous, appuyez sur le raccourci ou cliquez sur le bouton appareil photo en bas à droite du lecteur pour capturer l'image actuelle."
  },
  "popupCapture": {
   "message": "Capturer l'image actuelle"
  },
  "popupShortcut": {
   "message": "Raccourci"
  },
  "popupFormat": {
   "message": "Format d'image"
  },
  "popupAfter": {
   "message": "Après la capture"
  },
  "popupChangeShortcut": {
   "message": "Changer le raccourci"
  },
  "popupSettings": {
   "message": "Paramètres"
  },
  "popupNote": {
   "message": "Les images propres sont capturées à la résolution en cours de lecture, sans les commandes du lecteur, ni sous-titres, ni danmaku. Pour inclure les sous-titres ou le danmaku, basculez le mode de capture sur « Ce que vous voyez » dans les Paramètres."
  },
  "popupNotBilibiliOpen": {
   "message": "Ce n'est pas une page Bilibili. Ouvrez d'abord une vidéo."
  },
  "popupCapturing": {
   "message": "Capture en cours…"
  },
  "popupNotBilibili": {
   "message": "Ce n'est pas une page Bilibili."
  },
  "popupCaptureFailed": {
   "message": "Échec de la capture : $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "erreur inconnue"
  },
  "popupRequestFailed": {
   "message": "Échec de la demande : $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Paramètres de Bilibili Screenshot"
  },
  "optIntro": {
   "message": "Les trois façons de capturer fonctionnent de la même manière : le bouton appareil photo en bas à droite du lecteur, le raccourci clavier et le bouton dans la fenêtre contextuelle de la barre d'outils. La capture ne met pas la lecture en pause ; la vidéo continue et l'image est celle du moment où vous avez appuyé."
  },
  "optH1": {
   "message": "1. Raccourci clavier"
  },
  "optCurrentShortcut": {
   "message": "Raccourci actuel : "
  },
  "optShortcutNotSet": {
   "message": "Non défini (définissez-le sur la page des raccourcis de Chrome)"
  },
  "optShortcutHelp": {
   "message": "Chrome ne permet pas aux extensions de modifier directement les raccourcis. Modifiez-le sur la page de Chrome : cliquez sur le bouton ci-dessous → trouvez « Bilibili Screenshot » → cliquez sur l'icône crayon → appuyez sur la nouvelle combinaison de touches."
  },
  "optOpenShortcuts": {
   "message": "Ouvrir la page des raccourcis de Chrome"
  },
  "optH2": {
   "message": "2. Mode de capture"
  },
  "optCleanTitle": {
   "message": "Image propre (recommandé)"
  },
  "optCleanDesc": {
   "message": " — la résolution native de la vidéo (le 1080p/4K garde sa taille d'origine), sans commandes du lecteur, sous-titres ni curseur de souris. Qualité maximale."
  },
  "optCleanFallback": {
   "message": "Si le navigateur bloque la capture d'images pour une vidéo particulière, il bascule automatiquement en mode « Ce que vous voyez »."
  },
  "optVisibleTitle": {
   "message": "Ce que vous voyez"
  },
  "optVisibleDesc": {
   "message": " — capture ce qui est réellement à l'écran, donc les sous-titres sont inclus, mais la résolution est limitée par la taille de la fenêtre ; c'est en plein écran que cela fonctionne le mieux."
  },
  "optH3": {
   "message": "3. Après la capture"
  },
  "optPreviewDesc": {
   "message": " — affiche un aperçu, puis vous choisissez « Enregistrer le fichier » ou « Copier dans le presse-papiers ». Pas satisfait ? Fermez-le et capturez à nouveau, sans fichiers gaspillés."
  },
  "optDownloadDesc": {
   "message": " — télécharge directement dans le dossier de téléchargements de votre navigateur à chaque appui ; idéal pour capturer beaucoup d'images."
  },
  "optCopyDesc": {
   "message": " — copie à chaque appui pour que vous puissiez coller directement dans une discussion, un document ou un e-mail (si la copie échoue, l'aperçu s'ouvre à la place, pour que l'image ne soit pas perdue)."
  },
  "optH4": {
   "message": "4. Format d'image"
  },
  "optFmtPng": {
   "message": "PNG (sans perte, fichiers plus lourds)"
  },
  "optFmtJpeg": {
   "message": "JPG (petit, universel)"
  },
  "optFmtWebp": {
   "message": "WebP (le plus petit)"
  },
  "optQuality": {
   "message": "Qualité JPG / WebP : "
  },
  "optFileNamesLead": {
   "message": "Les noms de fichiers sont générés automatiquement : "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", par ex. "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". La copie dans le presse-papiers utilise toujours le PNG (une limitation du presse-papiers du navigateur), quel que soit le format choisi ici."
  },
  "optSave": {
   "message": "Enregistrer les paramètres"
  },
  "optSaved": {
   "message": "✓ Enregistré"
  },
  "optNotesH": {
   "message": "Remarques et limites"
  },
  "optDrmTitle": {
   "message": "Les vidéos protégées par DRM ne peuvent pas être capturées : "
  },
  "optDrmDesc": {
   "message": "les films et anime payants de Bilibili sont protégés par DRM ; sur ces pages, le navigateur masque l'image en noir dans les deux modes de capture. C'est une restriction commune à tout le secteur qu'aucune extension ne peut contourner. Les vidéos Bilibili ordinaires ne sont pas concernées, et les images propres sont capturées à la résolution en cours de lecture, jusqu'à 4K."
  },
  "optSubsTitle": {
   "message": "Sous-titres et danmaku : "
  },
  "optSubsDesc": {
   "message": "les images propres ne contiennent ni sous-titres ni danmaku — les deux sont superposés par la page web par-dessus la vidéo et ne font pas partie de l'image (les sous-titres incrustés dans la vidéo elle-même en font partie et apparaissent). Pour les inclure, utilisez « Ce que vous voyez » ; la capture se fait à la taille affichée à l'écran, donc capturez en plein écran pour la meilleure qualité."
  },
  "optScopeTitle": {
   "message": "Portée : "
  },
  "optScopeDesc": {
   "message": "cette extension fonctionne uniquement sur les pages vidéo de www.bilibili.com — pas sur les directs (live.bilibili.com) ni sur les autres sous-domaines."
  },
  "optVertical": {
   "message": "Les vidéos verticales fonctionnent aussi (résolution verticale native)."
  },
  "optPaused": {
   "message": "Vous pouvez capturer en pause ; vous obtenez l'image affichée à l'écran."
  },
  "optSafari": {
   "message": "Safari : cette extension est un code Web Extension standard et peut être convertie avec le safari-web-extension-converter de Xcode ; voir la section Safari du README du projet."
  },
  "optLangH": {
   "message": "Langue de l'interface"
  },
  "optLangAuto": {
   "message": "Suivre la langue du navigateur"
  },
  "optLangDesc": {
   "message": "S'applique immédiatement à la page des paramètres, à la fenêtre contextuelle de la barre d'outils et aux messages dans la page. Le nom de l'extension affiché sur la page des extensions de Chrome suit toujours la langue du navigateur (une limitation de Chrome)."
  }
 },
 "hi": {
  "extName": {
   "message": "Bilibili Screenshot - वीडियो फ़्रेम कैप्चर"
  },
  "extDescription": {
   "message": "एक क्लिक में Bilibili फ़्रेम कैप्चर करें, बिना रोके, मूल रिज़ॉल्यूशन में. PNG/JPG/WebP में सहेजें या कॉपी करें."
  },
  "actionTitle": {
   "message": "वर्तमान Bilibili वीडियो फ़्रेम कैप्चर करें"
  },
  "btnClose": {
   "message": "✕ बंद करें"
  },
  "btnSave": {
   "message": "💾 फ़ाइल सहेजें"
  },
  "btnCopy": {
   "message": "📋 क्लिपबोर्ड पर कॉपी करें"
  },
  "previewAlt": {
   "message": "स्क्रीनशॉट पूर्वावलोकन"
  },
  "toastSaved": {
   "message": "सहेजा गया: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "क्लिपबोर्ड पर कॉपी हो गया. इसे चैट या दस्तावेज़ में पेस्ट करें."
  },
  "toastCopyDenied": {
   "message": "कॉपी विफल (ब्राउज़र ने क्लिपबोर्ड एक्सेस से इनकार किया). इसके बजाय \"फ़ाइल सहेजें\" का उपयोग करें."
  },
  "toastNoVideo": {
   "message": "कोई वीडियो नहीं मिला (Bilibili वॉच पेज पर उपयोग करें)."
  },
  "toastNotReady": {
   "message": "वीडियो ने अभी तक कोई तस्वीर लोड नहीं की है. इसे कुछ देर चलाएँ, फिर फिर से प्रयास करें."
  },
  "metaNative": {
   "message": "मूल फ़्रेम"
  },
  "metaSubs": {
   "message": "उपशीर्षकों के साथ"
  },
  "toastScreenshotSaved": {
   "message": "स्क्रीनशॉट सहेजा गया: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "स्क्रीनशॉट क्लिपबोर्ड पर कॉपी हो गया ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "स्वतः-कॉपी विफल. पूर्वावलोकन खुल गया है; \"फ़ाइल सहेजें\" पर क्लिक करें."
  },
  "toastCaptureFailed": {
   "message": "कैप्चर विफल: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "वर्तमान फ़्रेम कैप्चर करें (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "वर्तमान फ़्रेम कैप्चर करें"
  },
  "loading": {
   "message": "लोड हो रहा है…"
  },
  "notSet": {
   "message": "सेट नहीं है"
  },
  "actPreview": {
   "message": "पहले पूर्वावलोकन"
  },
  "actDownload": {
   "message": "सीधे सहेजें"
  },
  "actCopy": {
   "message": "क्लिपबोर्ड पर कॉपी करें"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "Bilibili वॉच पेज पर, वर्तमान फ़्रेम कैप्चर करने के लिए नीचे दिए गए बटन पर क्लिक करें, शॉर्टकट दबाएँ, या प्लेयर के नीचे दाईं ओर स्थित कैमरा बटन पर क्लिक करें."
  },
  "popupCapture": {
   "message": "वर्तमान फ़्रेम कैप्चर करें"
  },
  "popupShortcut": {
   "message": "शॉर्टकट"
  },
  "popupFormat": {
   "message": "छवि प्रारूप"
  },
  "popupAfter": {
   "message": "कैप्चर के बाद"
  },
  "popupChangeShortcut": {
   "message": "शॉर्टकट बदलें"
  },
  "popupSettings": {
   "message": "सेटिंग्स"
  },
  "popupNote": {
   "message": "क्लीन फ़्रेम वर्तमान में चल रहे रिज़ॉल्यूशन पर कैप्चर होते हैं, बिना प्लेयर नियंत्रण, उपशीर्षक या डैनमाकु के। उपशीर्षक या डैनमाकु शामिल करने के लिए, सेटिंग्स में कैप्चर मोड को \"जो आप देखते हैं\" पर बदलें।"
  },
  "popupNotBilibiliOpen": {
   "message": "यह Bilibili पेज नहीं है. पहले कोई वीडियो खोलें."
  },
  "popupCapturing": {
   "message": "कैप्चर हो रहा है…"
  },
  "popupNotBilibili": {
   "message": "यह Bilibili पेज नहीं है."
  },
  "popupCaptureFailed": {
   "message": "कैप्चर विफल: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "अज्ञात त्रुटि"
  },
  "popupRequestFailed": {
   "message": "अनुरोध विफल: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Bilibili Screenshot सेटिंग्स"
  },
  "optIntro": {
   "message": "कैप्चर करने के तीनों तरीके एक समान काम करते हैं: प्लेयर के नीचे दाईं ओर का कैमरा बटन, कीबोर्ड शॉर्टकट, और टूलबार पॉपअप का बटन. कैप्चर करने से प्लेबैक नहीं रुकता; वीडियो चलता रहता है और छवि उस क्षण का फ़्रेम होती है जब आपने दबाया था."
  },
  "optH1": {
   "message": "1. कीबोर्ड शॉर्टकट"
  },
  "optCurrentShortcut": {
   "message": "वर्तमान शॉर्टकट: "
  },
  "optShortcutNotSet": {
   "message": "सेट नहीं है (Chrome के शॉर्टकट पेज पर सेट करें)"
  },
  "optShortcutHelp": {
   "message": "Chrome एक्सटेंशन को सीधे शॉर्टकट बदलने की अनुमति नहीं देता. इसे Chrome के अपने पेज पर बदलें: नीचे दिए गए बटन पर क्लिक करें → \"Bilibili Screenshot\" खोजें → पेंसिल आइकन पर क्लिक करें → नई कुंजी संयोजन दबाएँ."
  },
  "optOpenShortcuts": {
   "message": "Chrome का शॉर्टकट पेज खोलें"
  },
  "optH2": {
   "message": "2. कैप्चर मोड"
  },
  "optCleanTitle": {
   "message": "क्लीन फ़्रेम (अनुशंसित)"
  },
  "optCleanDesc": {
   "message": " — वीडियो का मूल रिज़ॉल्यूशन (1080p/4K अपने मूल आकार पर रहता है), बिना प्लेयर नियंत्रण, उपशीर्षक या माउस कर्सर के. उच्चतम गुणवत्ता."
  },
  "optCleanFallback": {
   "message": "यदि ब्राउज़र किसी विशेष वीडियो के लिए फ़्रेम कैप्चर को रोकता है, तो यह स्वचालित रूप से \"जो आप देखते हैं\" मोड पर चला जाता है."
  },
  "optVisibleTitle": {
   "message": "जो आप देखते हैं"
  },
  "optVisibleDesc": {
   "message": " — जो वास्तव में स्क्रीन पर है उसे कैप्चर करता है, इसलिए उपशीर्षक शामिल होते हैं, लेकिन रिज़ॉल्यूशन विंडो के आकार से सीमित होता है; पूर्ण स्क्रीन में सबसे अच्छा काम करता है."
  },
  "optH3": {
   "message": "3. कैप्चर के बाद"
  },
  "optPreviewDesc": {
   "message": " — एक पूर्वावलोकन दिखाता है, फिर आप \"फ़ाइल सहेजें\" या \"क्लिपबोर्ड पर कॉपी करें\" चुनते हैं. पसंद नहीं आया? इसे बंद करें और फिर से कैप्चर करें, कोई फ़ाइल बर्बाद नहीं होती."
  },
  "optDownloadDesc": {
   "message": " — हर बार दबाने पर सीधे आपके ब्राउज़र के डाउनलोड फ़ोल्डर में डाउनलोड होता है; कई फ़्रेम कैप्चर करने के लिए अच्छा है."
  },
  "optCopyDesc": {
   "message": " — हर बार दबाने पर कॉपी होता है ताकि आप सीधे चैट, दस्तावेज़ या ईमेल में पेस्ट कर सकें (यदि कॉपी विफल हो जाती है, तो इसके बजाय पूर्वावलोकन खुल जाता है, ताकि छवि न खोए)."
  },
  "optH4": {
   "message": "4. छवि प्रारूप"
  },
  "optFmtPng": {
   "message": "PNG (हानिरहित, बड़ी फ़ाइलें)"
  },
  "optFmtJpeg": {
   "message": "JPG (छोटा, सार्वभौमिक)"
  },
  "optFmtWebp": {
   "message": "WebP (सबसे छोटा)"
  },
  "optQuality": {
   "message": "JPG / WebP गुणवत्ता: "
  },
  "optFileNamesLead": {
   "message": "फ़ाइल नाम स्वचालित रूप से बनते हैं: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", जैसे "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". क्लिपबोर्ड पर कॉपी हमेशा PNG का उपयोग करती है (ब्राउज़र क्लिपबोर्ड की एक सीमा), यहाँ चुने गए प्रारूप की परवाह किए बिना."
  },
  "optSave": {
   "message": "सेटिंग्स सहेजें"
  },
  "optSaved": {
   "message": "✓ सहेजा गया"
  },
  "optNotesH": {
   "message": "नोट्स और सीमाएँ"
  },
  "optDrmTitle": {
   "message": "DRM-संरक्षित वीडियो कैप्चर नहीं किए जा सकते: "
  },
  "optDrmDesc": {
   "message": "Bilibili की सशुल्क फ़िल्में और ऐनिमे DRM-संरक्षित हैं; ऐसे पेजों पर ब्राउज़र दोनों कैप्चर मोड में तस्वीर को काला कर देता है। यह पूरे उद्योग पर लागू प्रतिबंध है जिसे कोई भी एक्सटेंशन नहीं हटा सकता। सामान्य Bilibili वीडियो प्रभावित नहीं होते, और क्लीन फ़्रेम वर्तमान में चल रहे रिज़ॉल्यूशन पर, 4K तक, कैप्चर होते हैं।"
  },
  "optSubsTitle": {
   "message": "उपशीर्षक और डैनमाकु: "
  },
  "optSubsDesc": {
   "message": "क्लीन फ़्रेम में न उपशीर्षक होते हैं न डैनमाकु — दोनों को वेब पेज वीडियो के ऊपर लगाता है और वे तस्वीर का हिस्सा नहीं होते (वीडियो में ही जले हुए उपशीर्षक तस्वीर का हिस्सा होते हैं और दिखाई देते हैं)। इन्हें शामिल करने के लिए \"जो आप देखते हैं\" का उपयोग करें; यह स्क्रीन पर दिख रहे आकार में कैप्चर करता है, इसलिए सर्वोत्तम गुणवत्ता के लिए पूर्ण स्क्रीन में कैप्चर करें।"
  },
  "optScopeTitle": {
   "message": "दायरा: "
  },
  "optScopeDesc": {
   "message": "यह एक्सटेंशन केवल www.bilibili.com के वीडियो पेजों पर काम करता है — लाइव स्ट्रीम (live.bilibili.com) या अन्य सबडोमेन पर नहीं।"
  },
  "optVertical": {
   "message": "ऊर्ध्वाधर वीडियो भी काम करते हैं (मूल ऊर्ध्वाधर रिज़ॉल्यूशन)।"
  },
  "optPaused": {
   "message": "रुके हुए होने पर भी कैप्चर कर सकते हैं; आपको स्क्रीन पर मौजूद फ़्रेम मिलता है."
  },
  "optSafari": {
   "message": "Safari: यह एक्सटेंशन मानक Web Extension स्रोत है और इसे Xcode के safari-web-extension-converter से परिवर्तित किया जा सकता है; प्रोजेक्ट README का Safari अनुभाग देखें."
  },
  "optLangH": {
   "message": "इंटरफ़ेस भाषा"
  },
  "optLangAuto": {
   "message": "ब्राउज़र भाषा का पालन करें"
  },
  "optLangDesc": {
   "message": "सेटिंग्स पेज, टूलबार पॉपअप और पेज के अंदर के संदेशों पर तुरंत लागू होता है. Chrome के एक्सटेंशन पेज पर दिखाया गया एक्सटेंशन नाम फिर भी ब्राउज़र भाषा का पालन करता है (Chrome की एक सीमा)."
  }
 },
 "id": {
  "extName": {
   "message": "Bilibili Screenshot - Tangkap Bingkai Video"
  },
  "extDescription": {
   "message": "Tangkap bingkai Bilibili sekali klik, resolusi asli, tanpa jeda. Simpan sebagai PNG/JPG/WebP atau salin ke papan klip."
  },
  "actionTitle": {
   "message": "Tangkap bingkai video Bilibili saat ini"
  },
  "btnClose": {
   "message": "✕ Tutup"
  },
  "btnSave": {
   "message": "💾 Simpan file"
  },
  "btnCopy": {
   "message": "📋 Salin ke papan klip"
  },
  "previewAlt": {
   "message": "pratinjau tangkapan layar"
  },
  "toastSaved": {
   "message": "Tersimpan: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "Disalin ke papan klip. Tempelkan ke obrolan atau dokumen."
  },
  "toastCopyDenied": {
   "message": "Penyalinan gagal (browser menolak akses papan klip). Gunakan \"Simpan file\" sebagai gantinya."
  },
  "toastNoVideo": {
   "message": "Tidak ada video ditemukan (gunakan di halaman tonton Bilibili)."
  },
  "toastNotReady": {
   "message": "Video belum memuat gambar. Putar sebentar, lalu coba lagi."
  },
  "metaNative": {
   "message": "bingkai asli"
  },
  "metaSubs": {
   "message": "dengan subtitel"
  },
  "toastScreenshotSaved": {
   "message": "Tangkapan layar tersimpan: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "Tangkapan layar disalin ke papan klip ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "Penyalinan otomatis gagal. Pratinjau dibuka; klik \"Simpan file\"."
  },
  "toastCaptureFailed": {
   "message": "Penangkapan gagal: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "Tangkap bingkai saat ini (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "Tangkap bingkai saat ini"
  },
  "loading": {
   "message": "Memuat…"
  },
  "notSet": {
   "message": "Belum diatur"
  },
  "actPreview": {
   "message": "Pratinjau dulu"
  },
  "actDownload": {
   "message": "Simpan langsung"
  },
  "actCopy": {
   "message": "Salin ke papan klip"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "Di halaman tonton Bilibili, klik tombol di bawah, tekan pintasan, atau klik tombol kamera di kanan bawah pemutar untuk menangkap bingkai saat ini."
  },
  "popupCapture": {
   "message": "Tangkap bingkai saat ini"
  },
  "popupShortcut": {
   "message": "Pintasan"
  },
  "popupFormat": {
   "message": "Format gambar"
  },
  "popupAfter": {
   "message": "Setelah menangkap"
  },
  "popupChangeShortcut": {
   "message": "Ubah pintasan"
  },
  "popupSettings": {
   "message": "Setelan"
  },
  "popupNote": {
   "message": "Bingkai bersih ditangkap pada resolusi yang sedang diputar, tanpa kontrol pemutar, subtitel, atau danmaku. Untuk menyertakan subtitel atau danmaku, ubah mode penangkapan menjadi \"Yang Anda lihat\" di Setelan."
  },
  "popupNotBilibiliOpen": {
   "message": "Ini bukan halaman Bilibili. Buka video terlebih dahulu."
  },
  "popupCapturing": {
   "message": "Menangkap…"
  },
  "popupNotBilibili": {
   "message": "Ini bukan halaman Bilibili."
  },
  "popupCaptureFailed": {
   "message": "Penangkapan gagal: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "kesalahan tidak dikenal"
  },
  "popupRequestFailed": {
   "message": "Permintaan gagal: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Setelan Bilibili Screenshot"
  },
  "optIntro": {
   "message": "Ketiga cara menangkap bekerja dengan cara yang sama: tombol kamera di kanan bawah pemutar, pintasan keyboard, dan tombol di popup toolbar. Menangkap tidak menjeda pemutaran; video terus berjalan dan gambarnya adalah bingkai pada saat Anda menekan."
  },
  "optH1": {
   "message": "1. Pintasan keyboard"
  },
  "optCurrentShortcut": {
   "message": "Pintasan saat ini: "
  },
  "optShortcutNotSet": {
   "message": "Belum diatur (atur di halaman pintasan Chrome)"
  },
  "optShortcutHelp": {
   "message": "Chrome tidak mengizinkan ekstensi mengubah pintasan secara langsung. Ubahlah di halaman Chrome sendiri: klik tombol di bawah → temukan \"Bilibili Screenshot\" → klik ikon pensil → tekan kombinasi tombol baru."
  },
  "optOpenShortcuts": {
   "message": "Buka halaman pintasan Chrome"
  },
  "optH2": {
   "message": "2. Mode penangkapan"
  },
  "optCleanTitle": {
   "message": "Bingkai bersih (disarankan)"
  },
  "optCleanDesc": {
   "message": " — resolusi asli video (1080p/4K tetap pada ukuran aslinya), tanpa kontrol pemutar, subtitel, atau kursor mouse. Kualitas tertinggi."
  },
  "optCleanFallback": {
   "message": "Jika browser memblokir penangkapan bingkai untuk video tertentu, mode otomatis beralih ke \"Yang Anda lihat\"."
  },
  "optVisibleTitle": {
   "message": "Yang Anda lihat"
  },
  "optVisibleDesc": {
   "message": " — menangkap apa yang benar-benar ada di layar, jadi subtitel disertakan, tetapi resolusi dibatasi oleh ukuran jendela; paling baik dalam layar penuh."
  },
  "optH3": {
   "message": "3. Setelah menangkap"
  },
  "optPreviewDesc": {
   "message": " — menampilkan pratinjau, lalu Anda memilih \"Simpan file\" atau \"Salin ke papan klip\". Tidak puas? Tutup dan tangkap lagi, tanpa file terbuang."
  },
  "optDownloadDesc": {
   "message": " — mengunduh langsung ke folder unduhan browser Anda setiap kali ditekan; cocok untuk menangkap banyak bingkai."
  },
  "optCopyDesc": {
   "message": " — menyalin setiap kali ditekan sehingga Anda dapat menempel langsung ke obrolan, dokumen, atau email (jika penyalinan gagal, pratinjau akan dibuka sebagai gantinya, agar gambar tidak hilang)."
  },
  "optH4": {
   "message": "4. Format gambar"
  },
  "optFmtPng": {
   "message": "PNG (tanpa kehilangan kualitas, file lebih besar)"
  },
  "optFmtJpeg": {
   "message": "JPG (kecil, universal)"
  },
  "optFmtWebp": {
   "message": "WebP (paling kecil)"
  },
  "optQuality": {
   "message": "Kualitas JPG / WebP: "
  },
  "optFileNamesLead": {
   "message": "Nama file dibuat secara otomatis: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", mis. "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". Penyalinan ke papan klip selalu menggunakan PNG (batasan papan klip browser), apa pun format yang dipilih di sini."
  },
  "optSave": {
   "message": "Simpan setelan"
  },
  "optSaved": {
   "message": "✓ Tersimpan"
  },
  "optNotesH": {
   "message": "Catatan dan batasan"
  },
  "optDrmTitle": {
   "message": "Video yang dilindungi DRM tidak dapat ditangkap: "
  },
  "optDrmDesc": {
   "message": "film dan anime berbayar di Bilibili dilindungi DRM; pada halaman tersebut browser menghitamkan gambar di kedua mode tangkapan. Ini adalah pembatasan di seluruh industri yang tidak dapat dilewati ekstensi mana pun. Video Bilibili biasa tidak terpengaruh, dan bingkai bersih ditangkap pada resolusi yang sedang diputar, hingga 4K."
  },
  "optSubsTitle": {
   "message": "Subtitel dan danmaku: "
  },
  "optSubsDesc": {
   "message": "bingkai bersih tidak berisi subtitel maupun danmaku — keduanya ditampilkan oleh halaman web di atas video dan bukan bagian dari gambar (subtitel yang tertanam permanen dalam video itu sendiri adalah bagian dari gambar dan akan muncul). Untuk menyertakannya, gunakan \"Yang Anda lihat\"; mode ini menangkap pada ukuran yang ditampilkan di layar, jadi tangkap dalam layar penuh untuk kualitas terbaik."
  },
  "optScopeTitle": {
   "message": "Cakupan: "
  },
  "optScopeDesc": {
   "message": "ekstensi ini hanya bekerja pada halaman video di www.bilibili.com — bukan pada siaran langsung (live.bilibili.com) atau subdomain lainnya."
  },
  "optVertical": {
   "message": "Video vertikal juga berfungsi (resolusi vertikal asli)."
  },
  "optPaused": {
   "message": "Anda dapat menangkap saat dijeda; Anda mendapatkan bingkai yang ada di layar."
  },
  "optSafari": {
   "message": "Safari: ekstensi ini adalah kode sumber Web Extension standar dan dapat dikonversi dengan safari-web-extension-converter dari Xcode; lihat bagian Safari di README proyek."
  },
  "optLangH": {
   "message": "Bahasa antarmuka"
  },
  "optLangAuto": {
   "message": "Ikuti bahasa browser"
  },
  "optLangDesc": {
   "message": "Berlaku segera pada halaman setelan, popup toolbar, dan pesan di halaman. Nama ekstensi yang ditampilkan di halaman ekstensi Chrome tetap mengikuti bahasa browser (batasan Chrome)."
  }
 },
 "it": {
  "extName": {
   "message": "Bilibili Screenshot - Cattura fotogrammi"
  },
  "extDescription": {
   "message": "Cattura fotogrammi Bilibili con un clic, a risoluzione nativa e senza pausa. Salva in PNG/JPG/WebP o copia negli appunti."
  },
  "actionTitle": {
   "message": "Cattura il fotogramma corrente del video Bilibili"
  },
  "btnClose": {
   "message": "✕ Chiudi"
  },
  "btnSave": {
   "message": "💾 Salva file"
  },
  "btnCopy": {
   "message": "📋 Copia negli appunti"
  },
  "previewAlt": {
   "message": "anteprima dello screenshot"
  },
  "toastSaved": {
   "message": "Salvato: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "Copiato negli appunti. Incollalo in una chat o in un documento."
  },
  "toastCopyDenied": {
   "message": "Copia non riuscita (il browser ha negato l'accesso agli appunti). Usa invece \"Salva file\"."
  },
  "toastNoVideo": {
   "message": "Nessun video trovato (usalo su una pagina di riproduzione Bilibili)."
  },
  "toastNotReady": {
   "message": "Il video non ha ancora caricato un'immagine. Riproducilo per un momento, poi riprova."
  },
  "metaNative": {
   "message": "fotogramma nativo"
  },
  "metaSubs": {
   "message": "con sottotitoli"
  },
  "toastScreenshotSaved": {
   "message": "Screenshot salvato: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "Screenshot copiato negli appunti ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "Copia automatica non riuscita. Anteprima aperta; fai clic su \"Salva file\"."
  },
  "toastCaptureFailed": {
   "message": "Cattura non riuscita: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "Cattura il fotogramma corrente (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "Cattura il fotogramma corrente"
  },
  "loading": {
   "message": "Caricamento…"
  },
  "notSet": {
   "message": "Non impostato"
  },
  "actPreview": {
   "message": "Prima l'anteprima"
  },
  "actDownload": {
   "message": "Salva direttamente"
  },
  "actCopy": {
   "message": "Copia negli appunti"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "Su una pagina di riproduzione Bilibili, fai clic sul pulsante qui sotto, premi la scorciatoia o fai clic sul pulsante fotocamera in basso a destra nel player per catturare il fotogramma corrente."
  },
  "popupCapture": {
   "message": "Cattura il fotogramma corrente"
  },
  "popupShortcut": {
   "message": "Scorciatoia"
  },
  "popupFormat": {
   "message": "Formato immagine"
  },
  "popupAfter": {
   "message": "Dopo la cattura"
  },
  "popupChangeShortcut": {
   "message": "Cambia scorciatoia"
  },
  "popupSettings": {
   "message": "Impostazioni"
  },
  "popupNote": {
   "message": "I fotogrammi puliti vengono catturati alla risoluzione in riproduzione, senza controlli del player, sottotitoli né danmaku. Per includere sottotitoli o danmaku, imposta la modalità di cattura su \"Ciò che vedi\" nelle Impostazioni."
  },
  "popupNotBilibiliOpen": {
   "message": "Questa non è una pagina Bilibili. Apri prima un video."
  },
  "popupCapturing": {
   "message": "Cattura in corso…"
  },
  "popupNotBilibili": {
   "message": "Questa non è una pagina Bilibili."
  },
  "popupCaptureFailed": {
   "message": "Cattura non riuscita: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "errore sconosciuto"
  },
  "popupRequestFailed": {
   "message": "Richiesta non riuscita: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Impostazioni di Bilibili Screenshot"
  },
  "optIntro": {
   "message": "Tutti e tre i modi di catturare funzionano allo stesso modo: il pulsante fotocamera in basso a destra nel player, la scorciatoia da tastiera e il pulsante nel popup della barra degli strumenti. La cattura non mette in pausa la riproduzione; il video continua e l'immagine è il fotogramma del momento in cui hai premuto."
  },
  "optH1": {
   "message": "1. Scorciatoia da tastiera"
  },
  "optCurrentShortcut": {
   "message": "Scorciatoia corrente: "
  },
  "optShortcutNotSet": {
   "message": "Non impostata (impostala nella pagina delle scorciatoie di Chrome)"
  },
  "optShortcutHelp": {
   "message": "Chrome non consente alle estensioni di modificare direttamente le scorciatoie. Modificala nella pagina di Chrome: fai clic sul pulsante qui sotto → trova \"Bilibili Screenshot\" → fai clic sull'icona della matita → premi la nuova combinazione di tasti."
  },
  "optOpenShortcuts": {
   "message": "Apri la pagina delle scorciatoie di Chrome"
  },
  "optH2": {
   "message": "2. Modalità di cattura"
  },
  "optCleanTitle": {
   "message": "Fotogramma pulito (consigliato)"
  },
  "optCleanDesc": {
   "message": " — la risoluzione nativa del video (1080p/4K mantiene la dimensione originale), senza controlli del player, sottotitoli o cursore del mouse. Qualità massima."
  },
  "optCleanFallback": {
   "message": "Se il browser blocca la cattura dei fotogrammi per un video particolare, passa automaticamente alla modalità \"Ciò che vedi\"."
  },
  "optVisibleTitle": {
   "message": "Ciò che vedi"
  },
  "optVisibleDesc": {
   "message": " — cattura ciò che è effettivamente sullo schermo, quindi i sottotitoli sono inclusi, ma la risoluzione è limitata dalla dimensione della finestra; funziona al meglio a schermo intero."
  },
  "optH3": {
   "message": "3. Dopo la cattura"
  },
  "optPreviewDesc": {
   "message": " — mostra un'anteprima, poi scegli \"Salva file\" o \"Copia negli appunti\". Non ti piace? Chiudila e cattura di nuovo, senza file sprecati."
  },
  "optDownloadDesc": {
   "message": " — scarica direttamente nella cartella dei download del browser a ogni pressione; utile per catturare molti fotogrammi."
  },
  "optCopyDesc": {
   "message": " — copia a ogni pressione così puoi incollare direttamente in una chat, un documento o un'e-mail (se la copia non riesce, si apre invece l'anteprima, così l'immagine non va persa)."
  },
  "optH4": {
   "message": "4. Formato immagine"
  },
  "optFmtPng": {
   "message": "PNG (senza perdita, file più grandi)"
  },
  "optFmtJpeg": {
   "message": "JPG (piccolo, universale)"
  },
  "optFmtWebp": {
   "message": "WebP (il più piccolo)"
  },
  "optQuality": {
   "message": "Qualità JPG / WebP: "
  },
  "optFileNamesLead": {
   "message": "I nomi dei file sono generati automaticamente: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", ad es. "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". La copia negli appunti usa sempre PNG (una limitazione degli appunti del browser), indipendentemente dal formato scelto qui."
  },
  "optSave": {
   "message": "Salva impostazioni"
  },
  "optSaved": {
   "message": "✓ Salvato"
  },
  "optNotesH": {
   "message": "Note e limiti"
  },
  "optDrmTitle": {
   "message": "I video protetti da DRM non possono essere catturati: "
  },
  "optDrmDesc": {
   "message": "i film e gli anime a pagamento di Bilibili sono protetti da DRM; in quelle pagine il browser oscura l'immagine in entrambe le modalità di cattura. È una restrizione valida in tutto il settore che nessuna estensione può aggirare. I normali video di Bilibili non sono interessati e i fotogrammi puliti vengono catturati alla risoluzione in riproduzione, fino a 4K."
  },
  "optSubsTitle": {
   "message": "Sottotitoli e danmaku: "
  },
  "optSubsDesc": {
   "message": "i fotogrammi puliti non contengono né sottotitoli né danmaku — entrambi sono sovrapposti dalla pagina web sopra il video e non fanno parte dell'immagine (i sottotitoli impressi nel video stesso fanno parte dell'immagine e compaiono). Per includerli, usa \"Ciò che vedi\"; cattura alle dimensioni mostrate sullo schermo, quindi cattura a schermo intero per la migliore qualità."
  },
  "optScopeTitle": {
   "message": "Ambito: "
  },
  "optScopeDesc": {
   "message": "questa estensione funziona solo sulle pagine video di www.bilibili.com — non sulle dirette (live.bilibili.com) né su altri sottodomini."
  },
  "optVertical": {
   "message": "Anche i video verticali funzionano (risoluzione verticale nativa)."
  },
  "optPaused": {
   "message": "Puoi catturare anche in pausa; ottieni il fotogramma presente sullo schermo."
  },
  "optSafari": {
   "message": "Safari: questa estensione è codice Web Extension standard e può essere convertita con il safari-web-extension-converter di Xcode; vedi la sezione Safari del README del progetto."
  },
  "optLangH": {
   "message": "Lingua dell'interfaccia"
  },
  "optLangAuto": {
   "message": "Segui la lingua del browser"
  },
  "optLangDesc": {
   "message": "Si applica immediatamente alla pagina delle impostazioni, al popup della barra degli strumenti e ai messaggi nella pagina. Il nome dell'estensione mostrato nella pagina delle estensioni di Chrome segue comunque la lingua del browser (una limitazione di Chrome)."
  }
 },
 "ja": {
  "extName": {
   "message": "Bilibili Screenshot - 動画フレーム撮影"
  },
  "extDescription": {
   "message": "Bilibiliのフレームを再生を止めずにワンクリックで撮影、解像度はそのまま。PNG/JPG/WebPで保存、またはクリップボードへコピー。"
  },
  "actionTitle": {
   "message": "現在のBilibiliフレームを撮影"
  },
  "btnClose": {
   "message": "✕ 閉じる"
  },
  "btnSave": {
   "message": "💾 ファイルを保存"
  },
  "btnCopy": {
   "message": "📋 クリップボードにコピー"
  },
  "previewAlt": {
   "message": "スクリーンショットのプレビュー"
  },
  "toastSaved": {
   "message": "保存しました：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "クリップボードにコピーしました。チャットやドキュメントに貼り付けできます。"
  },
  "toastCopyDenied": {
   "message": "コピーに失敗しました（ブラウザがクリップボードへのアクセスを拒否）。「ファイルを保存」を使ってください。"
  },
  "toastNoVideo": {
   "message": "動画が見つかりません（Bilibiliの再生ページで使ってください）。"
  },
  "toastNotReady": {
   "message": "動画の映像がまだ読み込まれていません。少し再生してからもう一度お試しください。"
  },
  "metaNative": {
   "message": "ネイティブフレーム"
  },
  "metaSubs": {
   "message": "字幕付き"
  },
  "toastScreenshotSaved": {
   "message": "スクリーンショットを保存しました：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "スクリーンショットをクリップボードにコピーしました（$ARG1$×$ARG2$）",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "自動コピーに失敗しました。プレビューを開いたので「ファイルを保存」をクリックしてください。"
  },
  "toastCaptureFailed": {
   "message": "撮影に失敗しました：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "現在のフレームを撮影（Bilibili Screenshot）"
  },
  "btnAria": {
   "message": "現在のフレームを撮影"
  },
  "loading": {
   "message": "読み込み中…"
  },
  "notSet": {
   "message": "未設定"
  },
  "actPreview": {
   "message": "まずプレビュー"
  },
  "actDownload": {
   "message": "直接保存"
  },
  "actCopy": {
   "message": "クリップボードにコピー"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "Bilibiliの再生ページで、下のボタンをクリックするか、ショートカットを押すか、プレーヤー右下のカメラボタンをクリックすると、現在のフレームを撮影できます。"
  },
  "popupCapture": {
   "message": "現在のフレームを撮影"
  },
  "popupShortcut": {
   "message": "ショートカット"
  },
  "popupFormat": {
   "message": "画像形式"
  },
  "popupAfter": {
   "message": "撮影後"
  },
  "popupChangeShortcut": {
   "message": "ショートカットを変更"
  },
  "popupSettings": {
   "message": "設定"
  },
  "popupNote": {
   "message": "クリーンフレームは現在再生中の解像度で撮影され、プレーヤーのコントロール、字幕、弾幕は含まれません。字幕や弾幕を含めるには、設定で撮影モードを「見たまま」に切り替えてください。"
  },
  "popupNotBilibiliOpen": {
   "message": "これはBilibiliのページではありません。まず動画を開いてください。"
  },
  "popupCapturing": {
   "message": "撮影中…"
  },
  "popupNotBilibili": {
   "message": "これはBilibiliのページではありません。"
  },
  "popupCaptureFailed": {
   "message": "撮影に失敗しました：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "不明なエラー"
  },
  "popupRequestFailed": {
   "message": "リクエストに失敗しました：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Bilibili Screenshot 設定"
  },
  "optIntro": {
   "message": "3つの撮影方法はどれも同じです：プレーヤー右下のカメラボタン、キーボードショートカット、ツールバーポップアップのボタン。撮影しても再生は止まらず、押した瞬間のフレームが画像になります。"
  },
  "optH1": {
   "message": "1. キーボードショートカット"
  },
  "optCurrentShortcut": {
   "message": "現在のショートカット："
  },
  "optShortcutNotSet": {
   "message": "未設定（Chromeのショートカットページで設定してください）"
  },
  "optShortcutHelp": {
   "message": "Chromeでは拡張機能がショートカットを直接変更できません。Chrome自身のページで変更してください：下のボタンをクリック →「Bilibili Screenshot」を探す → 鉛筆アイコンをクリック → 新しいキー組み合わせを押します。"
  },
  "optOpenShortcuts": {
   "message": "Chromeのショートカットページを開く"
  },
  "optH2": {
   "message": "2. 撮影モード"
  },
  "optCleanTitle": {
   "message": "クリーンフレーム（推奨）"
  },
  "optCleanDesc": {
   "message": " — 動画本来の解像度（1080p/4Kはそのままのサイズ）で、プレーヤーのコントロール、字幕、マウスカーソルは含まれません。最高画質です。"
  },
  "optCleanFallback": {
   "message": "ブラウザが特定の動画のフレーム撮影をブロックした場合は、自動的に「見たまま」モードに切り替わります。"
  },
  "optVisibleTitle": {
   "message": "見たまま"
  },
  "optVisibleDesc": {
   "message": " — 実際に画面に表示されているものを撮影するので字幕も含まれますが、解像度はウィンドウサイズに制限されます。全画面表示で最適です。"
  },
  "optH3": {
   "message": "3. 撮影後"
  },
  "optPreviewDesc": {
   "message": " — プレビューを表示し、「ファイルを保存」か「クリップボードにコピー」を選びます。気に入らなければ閉じて撮り直せます。無駄なファイルはできません。"
  },
  "optDownloadDesc": {
   "message": " — 押すたびにブラウザのダウンロードフォルダへ直接ダウンロードします。たくさん撮影するのに向いています。"
  },
  "optCopyDesc": {
   "message": " — 押すたびにコピーし、チャットやドキュメント、メールへそのまま貼れます（コピーに失敗した場合は代わりにプレビューが開くので、画像が失われることはありません）。"
  },
  "optH4": {
   "message": "4. 画像形式"
  },
  "optFmtPng": {
   "message": "PNG（可逆圧縮、ファイルは大きめ）"
  },
  "optFmtJpeg": {
   "message": "JPG（小さく、汎用的）"
  },
  "optFmtWebp": {
   "message": "WebP（最小）"
  },
  "optQuality": {
   "message": "JPG / WebP の画質："
  },
  "optFileNamesLead": {
   "message": "ファイル名は自動生成されます："
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": "、例："
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": "。クリップボードへのコピーは、ここで選んだ形式に関係なく常にPNGになります（ブラウザのクリップボードの制限）。"
  },
  "optSave": {
   "message": "設定を保存"
  },
  "optSaved": {
   "message": "✓ 保存しました"
  },
  "optNotesH": {
   "message": "注意と制限"
  },
  "optDrmTitle": {
   "message": "DRM保護された動画は撮影できません："
  },
  "optDrmDesc": {
   "message": "Bilibili の有料映画やアニメは DRM で保護されており、そのページではどちらの撮影モードでもブラウザが映像を黒く隠します。これは業界共通の制限で、どの拡張機能でも回避できません。通常の Bilibili 動画は影響を受けず、クリーンフレームは現在再生中の解像度（最大 4K）で撮影されます。"
  },
  "optSubsTitle": {
   "message": "字幕と弾幕："
  },
  "optSubsDesc": {
   "message": "クリーンフレームには字幕も弾幕も含まれません。どちらもウェブページが動画の上に重ねて表示しているもので、映像の一部ではありません（動画自体に焼き込まれた字幕は映像の一部なので写ります）。字幕や弾幕を含めるには「見たまま」を使ってください。画面に表示されているサイズで撮影されるため、全画面で撮影すると最も高画質になります。"
  },
  "optScopeTitle": {
   "message": "対象範囲："
  },
  "optScopeDesc": {
   "message": "この拡張機能は www.bilibili.com の動画ページでのみ動作します。ライブ配信（live.bilibili.com）やその他のサブドメインでは動作しません。"
  },
  "optVertical": {
   "message": "縦向き動画でも撮影できます（縦向きの本来の解像度）。"
  },
  "optPaused": {
   "message": "一時停止中でも撮影でき、止まっているフレームが得られます。"
  },
  "optSafari": {
   "message": "Safari版：この拡張機能は標準のWeb Extensionソースで、Xcodeのsafari-web-extension-converterで変換できます。手順はプロジェクトREADMEのSafariの節をご覧ください。"
  },
  "optLangH": {
   "message": "インターフェース言語"
  },
  "optLangAuto": {
   "message": "ブラウザの言語に従う"
  },
  "optLangDesc": {
   "message": "設定ページ、ツールバーポップアップ、ページ内メッセージにすぐ反映されます。Chromeの拡張機能ページに表示される拡張機能名はブラウザの言語に従います（Chromeの制限）。"
  }
 },
 "ko": {
  "extName": {
   "message": "Bilibili Screenshot - 동영상 프레임 캡처"
  },
  "extDescription": {
   "message": "일시정지 없이 원본 해상도로 Bilibili 프레임을 한 번에 캡처하세요. PNG/JPG/WebP로 저장하거나 클립보드에 복사할 수 있습니다."
  },
  "actionTitle": {
   "message": "현재 Bilibili 동영상 프레임 캡처"
  },
  "btnClose": {
   "message": "✕ 닫기"
  },
  "btnSave": {
   "message": "💾 파일 저장"
  },
  "btnCopy": {
   "message": "📋 클립보드에 복사"
  },
  "previewAlt": {
   "message": "스크린샷 미리보기"
  },
  "toastSaved": {
   "message": "저장됨: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "클립보드에 복사했습니다. 채팅이나 문서에 붙여넣으세요."
  },
  "toastCopyDenied": {
   "message": "복사에 실패했습니다(브라우저가 클립보드 접근을 거부함). 대신 \"파일 저장\"을 사용하세요."
  },
  "toastNoVideo": {
   "message": "동영상을 찾을 수 없습니다(Bilibili 재생 페이지에서 사용하세요)."
  },
  "toastNotReady": {
   "message": "동영상 화면이 아직 로드되지 않았습니다. 잠시 재생한 뒤 다시 시도하세요."
  },
  "metaNative": {
   "message": "원본 프레임"
  },
  "metaSubs": {
   "message": "자막 포함"
  },
  "toastScreenshotSaved": {
   "message": "스크린샷 저장됨: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "스크린샷을 클립보드에 복사했습니다($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "자동 복사에 실패했습니다. 미리보기가 열렸으니 \"파일 저장\"을 클릭하세요."
  },
  "toastCaptureFailed": {
   "message": "캡처 실패: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "현재 프레임 캡처(Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "현재 프레임 캡처"
  },
  "loading": {
   "message": "로딩 중…"
  },
  "notSet": {
   "message": "설정 안 됨"
  },
  "actPreview": {
   "message": "먼저 미리보기"
  },
  "actDownload": {
   "message": "바로 저장"
  },
  "actCopy": {
   "message": "클립보드에 복사"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "Bilibili 재생 페이지에서 아래 버튼을 클릭하거나 단축키를 누르거나 플레이어 오른쪽 아래의 카메라 버튼을 클릭하면 현재 프레임을 캡처할 수 있습니다."
  },
  "popupCapture": {
   "message": "현재 프레임 캡처"
  },
  "popupShortcut": {
   "message": "단축키"
  },
  "popupFormat": {
   "message": "이미지 형식"
  },
  "popupAfter": {
   "message": "캡처 후"
  },
  "popupChangeShortcut": {
   "message": "단축키 변경"
  },
  "popupSettings": {
   "message": "설정"
  },
  "popupNote": {
   "message": "클린 프레임은 플레이어 컨트롤, 자막, 탄막 없이 현재 재생 중인 해상도로 캡처됩니다. 자막이나 탄막을 포함하려면 설정에서 캡처 모드를 \"보이는 그대로\"로 바꾸세요."
  },
  "popupNotBilibiliOpen": {
   "message": "Bilibili 페이지가 아닙니다. 먼저 동영상을 여세요."
  },
  "popupCapturing": {
   "message": "캡처 중…"
  },
  "popupNotBilibili": {
   "message": "Bilibili 페이지가 아닙니다."
  },
  "popupCaptureFailed": {
   "message": "캡처 실패: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "알 수 없는 오류"
  },
  "popupRequestFailed": {
   "message": "요청 실패: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Bilibili Screenshot 설정"
  },
  "optIntro": {
   "message": "세 가지 캡처 방법은 모두 동일하게 작동합니다: 플레이어 오른쪽 아래의 카메라 버튼, 키보드 단축키, 도구 모음 팝업의 버튼. 캡처해도 재생이 멈추지 않으며, 누른 순간의 프레임이 이미지가 됩니다."
  },
  "optH1": {
   "message": "1. 키보드 단축키"
  },
  "optCurrentShortcut": {
   "message": "현재 단축키: "
  },
  "optShortcutNotSet": {
   "message": "설정 안 됨(Chrome 단축키 페이지에서 설정하세요)"
  },
  "optShortcutHelp": {
   "message": "Chrome은 확장 프로그램이 단축키를 직접 변경하는 것을 허용하지 않습니다. Chrome 자체 페이지에서 변경하세요: 아래 버튼 클릭 → \"Bilibili Screenshot\" 찾기 → 연필 아이콘 클릭 → 새 키 조합 누르기."
  },
  "optOpenShortcuts": {
   "message": "Chrome 단축키 페이지 열기"
  },
  "optH2": {
   "message": "2. 캡처 모드"
  },
  "optCleanTitle": {
   "message": "클린 프레임(권장)"
  },
  "optCleanDesc": {
   "message": " — 동영상의 원본 해상도(1080p/4K는 원래 크기 유지)로, 플레이어 컨트롤, 자막, 마우스 커서가 없습니다. 최고 화질입니다."
  },
  "optCleanFallback": {
   "message": "브라우저가 특정 동영상의 프레임 캡처를 차단하면 자동으로 \"보이는 그대로\" 모드로 전환됩니다."
  },
  "optVisibleTitle": {
   "message": "보이는 그대로"
  },
  "optVisibleDesc": {
   "message": " — 화면에 실제로 보이는 것을 캡처하므로 자막이 포함되지만, 해상도는 창 크기에 제한됩니다. 전체 화면에서 가장 좋습니다."
  },
  "optH3": {
   "message": "3. 캡처 후 동작"
  },
  "optPreviewDesc": {
   "message": " — 미리보기를 표시한 뒤 \"파일 저장\" 또는 \"클립보드에 복사\"를 선택합니다. 마음에 들지 않으면 닫고 다시 캡처하면 되며, 불필요한 파일이 생기지 않습니다."
  },
  "optDownloadDesc": {
   "message": " — 누를 때마다 브라우저 다운로드 폴더로 바로 다운로드합니다. 여러 장을 캡처할 때 좋습니다."
  },
  "optCopyDesc": {
   "message": " — 누를 때마다 복사되어 채팅, 문서, 이메일에 바로 붙여넣을 수 있습니다(복사에 실패하면 대신 미리보기가 열려 이미지가 사라지지 않습니다)."
  },
  "optH4": {
   "message": "4. 이미지 형식"
  },
  "optFmtPng": {
   "message": "PNG(무손실, 파일 큼)"
  },
  "optFmtJpeg": {
   "message": "JPG(작고 범용적)"
  },
  "optFmtWebp": {
   "message": "WebP(가장 작음)"
  },
  "optQuality": {
   "message": "JPG / WebP 품질: "
  },
  "optFileNamesLead": {
   "message": "파일 이름은 자동 생성됩니다: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", 예: "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". 클립보드에 복사할 때는 여기서 선택한 형식과 관계없이 항상 PNG를 사용합니다(브라우저 클립보드의 제한)."
  },
  "optSave": {
   "message": "설정 저장"
  },
  "optSaved": {
   "message": "✓ 저장됨"
  },
  "optNotesH": {
   "message": "참고 및 제한 사항"
  },
  "optDrmTitle": {
   "message": "DRM 보호 동영상은 캡처할 수 없습니다: "
  },
  "optDrmDesc": {
   "message": "Bilibili의 유료 영화와 애니메이션은 DRM으로 보호되어, 해당 페이지에서는 두 캡처 모드 모두 브라우저가 화면을 검게 가립니다. 이는 업계 공통 제한으로 어떤 확장 프로그램도 우회할 수 없습니다. 일반 Bilibili 동영상은 영향을 받지 않으며, 클린 프레임은 현재 재생 중인 해상도(최대 4K)로 캡처됩니다."
  },
  "optSubsTitle": {
   "message": "자막과 탄막: "
  },
  "optSubsDesc": {
   "message": "클린 프레임에는 자막도 탄막도 포함되지 않습니다. 둘 다 웹페이지가 동영상 위에 겹쳐 표시하는 것으로 화면의 일부가 아닙니다(동영상 자체에 새겨진 자막은 화면의 일부라서 캡처됩니다). 자막과 탄막을 포함하려면 \"보이는 그대로\"를 사용하세요. 화면에 표시된 크기로 캡처되므로 전체 화면에서 캡처하면 가장 좋은 화질을 얻을 수 있습니다."
  },
  "optScopeTitle": {
   "message": "적용 범위: "
  },
  "optScopeDesc": {
   "message": "이 확장 프로그램은 www.bilibili.com의 동영상 페이지에서만 작동합니다. 라이브 방송(live.bilibili.com)이나 다른 하위 도메인에서는 작동하지 않습니다."
  },
  "optVertical": {
   "message": "세로 영상에서도 캡처할 수 있습니다(세로 원본 해상도)."
  },
  "optPaused": {
   "message": "일시정지 상태에서도 캡처할 수 있으며, 멈춰 있는 프레임이 캡처됩니다."
  },
  "optSafari": {
   "message": "Safari 버전: 이 확장 프로그램은 표준 Web Extension 소스로, Xcode의 safari-web-extension-converter로 변환할 수 있습니다. 단계는 프로젝트 README의 Safari 섹션을 참조하세요."
  },
  "optLangH": {
   "message": "인터페이스 언어"
  },
  "optLangAuto": {
   "message": "브라우저 언어 따르기"
  },
  "optLangDesc": {
   "message": "설정 페이지, 도구 모음 팝업, 페이지 내 메시지에 즉시 적용됩니다. Chrome 확장 프로그램 페이지에 표시되는 확장 프로그램 이름은 브라우저 언어를 따릅니다(Chrome의 제한)."
  }
 },
 "pt_BR": {
  "extName": {
   "message": "Bilibili Screenshot - Captura de quadros"
  },
  "extDescription": {
   "message": "Capture quadros do Bilibili com um clique, sem pausar e na resolução nativa. Salve em PNG/JPG/WebP ou copie."
  },
  "actionTitle": {
   "message": "Capturar o quadro atual do vídeo do Bilibili"
  },
  "btnClose": {
   "message": "✕ Fechar"
  },
  "btnSave": {
   "message": "💾 Salvar arquivo"
  },
  "btnCopy": {
   "message": "📋 Copiar para a área de transferência"
  },
  "previewAlt": {
   "message": "prévia da captura de tela"
  },
  "toastSaved": {
   "message": "Salvo: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "Copiado para a área de transferência. Cole em um chat ou documento."
  },
  "toastCopyDenied": {
   "message": "A cópia falhou (o navegador negou o acesso à área de transferência). Use \"Salvar arquivo\"."
  },
  "toastNoVideo": {
   "message": "Nenhum vídeo encontrado (use em uma página de exibição do Bilibili)."
  },
  "toastNotReady": {
   "message": "O vídeo ainda não carregou nenhuma imagem. Reproduza por um momento e tente de novo."
  },
  "metaNative": {
   "message": "quadro nativo"
  },
  "metaSubs": {
   "message": "com legendas"
  },
  "toastScreenshotSaved": {
   "message": "Captura salva: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "Captura copiada para a área de transferência ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "A cópia automática falhou. A prévia foi aberta; clique em \"Salvar arquivo\"."
  },
  "toastCaptureFailed": {
   "message": "A captura falhou: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "Capturar o quadro atual (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "Capturar o quadro atual"
  },
  "loading": {
   "message": "Carregando…"
  },
  "notSet": {
   "message": "Não definido"
  },
  "actPreview": {
   "message": "Ver prévia primeiro"
  },
  "actDownload": {
   "message": "Salvar diretamente"
  },
  "actCopy": {
   "message": "Copiar para a área de transferência"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "Em uma página de exibição do Bilibili, clique no botão abaixo, pressione o atalho ou clique no botão de câmera no canto inferior direito do player para capturar o quadro atual."
  },
  "popupCapture": {
   "message": "Capturar o quadro atual"
  },
  "popupShortcut": {
   "message": "Atalho"
  },
  "popupFormat": {
   "message": "Formato da imagem"
  },
  "popupAfter": {
   "message": "Após a captura"
  },
  "popupChangeShortcut": {
   "message": "Alterar atalho"
  },
  "popupSettings": {
   "message": "Configurações"
  },
  "popupNote": {
   "message": "Os quadros limpos são capturados na resolução em reprodução no momento, sem controles do player, legendas ou danmaku. Para incluir legendas ou danmaku, mude o modo de captura para \"O que você vê\" nas Configurações."
  },
  "popupNotBilibiliOpen": {
   "message": "Esta não é uma página do Bilibili. Abra um vídeo primeiro."
  },
  "popupCapturing": {
   "message": "Capturando…"
  },
  "popupNotBilibili": {
   "message": "Esta não é uma página do Bilibili."
  },
  "popupCaptureFailed": {
   "message": "A captura falhou: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "erro desconhecido"
  },
  "popupRequestFailed": {
   "message": "A solicitação falhou: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Configurações do Bilibili Screenshot"
  },
  "optIntro": {
   "message": "As três formas de capturar funcionam da mesma maneira: o botão de câmera no canto inferior direito do player, o atalho de teclado e o botão no pop-up da barra de ferramentas. Capturar não pausa a reprodução; o vídeo continua e a imagem é o quadro do momento em que você pressionou."
  },
  "optH1": {
   "message": "1. Atalho de teclado"
  },
  "optCurrentShortcut": {
   "message": "Atalho atual: "
  },
  "optShortcutNotSet": {
   "message": "Não definido (defina na página de atalhos do Chrome)"
  },
  "optShortcutHelp": {
   "message": "O Chrome não permite que extensões alterem atalhos diretamente. Altere na própria página do Chrome: clique no botão abaixo → encontre \"Bilibili Screenshot\" → clique no ícone de lápis → pressione a nova combinação de teclas."
  },
  "optOpenShortcuts": {
   "message": "Abrir a página de atalhos do Chrome"
  },
  "optH2": {
   "message": "2. Modo de captura"
  },
  "optCleanTitle": {
   "message": "Quadro limpo (recomendado)"
  },
  "optCleanDesc": {
   "message": " — a resolução nativa do vídeo (1080p/4K mantém o tamanho original), sem controles do player, legendas ou cursor do mouse. A maior qualidade."
  },
  "optCleanFallback": {
   "message": "Se o navegador bloquear a captura de quadros de um vídeo específico, ele muda automaticamente para o modo \"O que você vê\"."
  },
  "optVisibleTitle": {
   "message": "O que você vê"
  },
  "optVisibleDesc": {
   "message": " — captura o que realmente está na tela, então as legendas são incluídas, mas a resolução é limitada pelo tamanho da janela; funciona melhor em tela cheia."
  },
  "optH3": {
   "message": "3. Após a captura"
  },
  "optPreviewDesc": {
   "message": " — mostra uma prévia e então você escolhe \"Salvar arquivo\" ou \"Copiar para a área de transferência\". Não gostou? Feche e capture de novo, sem arquivos desperdiçados."
  },
  "optDownloadDesc": {
   "message": " — baixa direto para a pasta de downloads do navegador a cada pressionamento; bom para capturar muitos quadros."
  },
  "optCopyDesc": {
   "message": " — copia a cada pressionamento para você colar direto em um chat, documento ou e-mail (se a cópia falhar, a prévia é aberta, para a imagem não se perder)."
  },
  "optH4": {
   "message": "4. Formato da imagem"
  },
  "optFmtPng": {
   "message": "PNG (sem perdas, arquivos maiores)"
  },
  "optFmtJpeg": {
   "message": "JPG (pequeno, universal)"
  },
  "optFmtWebp": {
   "message": "WebP (o menor)"
  },
  "optQuality": {
   "message": "Qualidade JPG / WebP: "
  },
  "optFileNamesLead": {
   "message": "Os nomes de arquivo são gerados automaticamente: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", p. ex. "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". Copiar para a área de transferência sempre usa PNG (uma limitação da área de transferência do navegador), independentemente do formato escolhido aqui."
  },
  "optSave": {
   "message": "Salvar configurações"
  },
  "optSaved": {
   "message": "✓ Salvo"
  },
  "optNotesH": {
   "message": "Observações e limites"
  },
  "optDrmTitle": {
   "message": "Vídeos protegidos por DRM não podem ser capturados: "
  },
  "optDrmDesc": {
   "message": "os filmes e animes pagos da Bilibili são protegidos por DRM; nessas páginas, o navegador escurece a imagem nos dois modos de captura. É uma restrição de todo o setor que nenhuma extensão consegue contornar. Os vídeos comuns da Bilibili não são afetados, e os quadros limpos são capturados na resolução em reprodução no momento, até 4K."
  },
  "optSubsTitle": {
   "message": "Legendas e danmaku: "
  },
  "optSubsDesc": {
   "message": "os quadros limpos não contêm legendas nem danmaku — ambos são sobrepostos pela página da web sobre o vídeo e não fazem parte da imagem (legendas gravadas no próprio vídeo fazem parte da imagem e aparecem). Para incluí-los, use \"O que você vê\"; ele captura no tamanho exibido na tela, então capture em tela cheia para obter a melhor qualidade."
  },
  "optScopeTitle": {
   "message": "Escopo: "
  },
  "optScopeDesc": {
   "message": "esta extensão funciona apenas nas páginas de vídeo de www.bilibili.com — não em transmissões ao vivo (live.bilibili.com) nem em outros subdomínios."
  },
  "optVertical": {
   "message": "Vídeos verticais também funcionam (resolução vertical nativa)."
  },
  "optPaused": {
   "message": "Você pode capturar com o vídeo pausado; o quadro obtido é o que está na tela."
  },
  "optSafari": {
   "message": "Safari: esta extensão é um código Web Extension padrão e pode ser convertida com o safari-web-extension-converter do Xcode; veja a seção Safari do README do projeto."
  },
  "optLangH": {
   "message": "Idioma da interface"
  },
  "optLangAuto": {
   "message": "Seguir o idioma do navegador"
  },
  "optLangDesc": {
   "message": "Aplica-se imediatamente à página de configurações, ao pop-up da barra de ferramentas e às mensagens na página. O nome da extensão exibido na página de extensões do Chrome continua seguindo o idioma do navegador (uma limitação do Chrome)."
  }
 },
 "ru": {
  "extName": {
   "message": "Bilibili Screenshot - Захват кадров видео"
  },
  "extDescription": {
   "message": "Кадры Bilibili в один клик: исходное разрешение, без паузы. Сохранение в PNG/JPG/WebP или копирование в буфер."
  },
  "actionTitle": {
   "message": "Захватить текущий кадр видео Bilibili"
  },
  "btnClose": {
   "message": "✕ Закрыть"
  },
  "btnSave": {
   "message": "💾 Сохранить файл"
  },
  "btnCopy": {
   "message": "📋 Копировать в буфер обмена"
  },
  "previewAlt": {
   "message": "предпросмотр скриншота"
  },
  "toastSaved": {
   "message": "Сохранено: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "Скопировано в буфер обмена. Вставьте в чат или документ."
  },
  "toastCopyDenied": {
   "message": "Не удалось скопировать (браузер запретил доступ к буферу обмена). Используйте «Сохранить файл»."
  },
  "toastNoVideo": {
   "message": "Видео не найдено (используйте на странице просмотра Bilibili)."
  },
  "toastNotReady": {
   "message": "Видео ещё не загрузило картинку. Включите воспроизведение на мгновение и попробуйте снова."
  },
  "metaNative": {
   "message": "исходный кадр"
  },
  "metaSubs": {
   "message": "с субтитрами"
  },
  "toastScreenshotSaved": {
   "message": "Скриншот сохранён: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "Скриншот скопирован в буфер обмена ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "Автокопирование не удалось. Открыт предпросмотр; нажмите «Сохранить файл»."
  },
  "toastCaptureFailed": {
   "message": "Не удалось захватить: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "Захватить текущий кадр (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "Захватить текущий кадр"
  },
  "loading": {
   "message": "Загрузка…"
  },
  "notSet": {
   "message": "Не задано"
  },
  "actPreview": {
   "message": "Сначала предпросмотр"
  },
  "actDownload": {
   "message": "Сохранять сразу"
  },
  "actCopy": {
   "message": "Копировать в буфер обмена"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "На странице просмотра Bilibili нажмите кнопку ниже, используйте сочетание клавиш или нажмите кнопку камеры в правом нижнем углу плеера, чтобы захватить текущий кадр."
  },
  "popupCapture": {
   "message": "Захватить текущий кадр"
  },
  "popupShortcut": {
   "message": "Сочетание клавиш"
  },
  "popupFormat": {
   "message": "Формат изображения"
  },
  "popupAfter": {
   "message": "После захвата"
  },
  "popupChangeShortcut": {
   "message": "Изменить сочетание"
  },
  "popupSettings": {
   "message": "Настройки"
  },
  "popupNote": {
   "message": "Чистые кадры захватываются в текущем разрешении воспроизведения, без элементов управления плеера, субтитров и данмаку. Чтобы включить субтитры или данмаку, переключите режим захвата на «Что вы видите» в Настройках."
  },
  "popupNotBilibiliOpen": {
   "message": "Это не страница Bilibili. Сначала откройте видео."
  },
  "popupCapturing": {
   "message": "Захват…"
  },
  "popupNotBilibili": {
   "message": "Это не страница Bilibili."
  },
  "popupCaptureFailed": {
   "message": "Не удалось захватить: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "неизвестная ошибка"
  },
  "popupRequestFailed": {
   "message": "Запрос не удался: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Настройки Bilibili Screenshot"
  },
  "optIntro": {
   "message": "Все три способа захвата работают одинаково: кнопка камеры в правом нижнем углу плеера, сочетание клавиш и кнопка во всплывающем окне панели инструментов. Захват не ставит воспроизведение на паузу; видео продолжает играть, а изображение — это кадр в момент нажатия."
  },
  "optH1": {
   "message": "1. Сочетание клавиш"
  },
  "optCurrentShortcut": {
   "message": "Текущее сочетание: "
  },
  "optShortcutNotSet": {
   "message": "Не задано (задайте на странице сочетаний клавиш Chrome)"
  },
  "optShortcutHelp": {
   "message": "Chrome не позволяет расширениям напрямую менять сочетания клавиш. Измените его на собственной странице Chrome: нажмите кнопку ниже → найдите «Bilibili Screenshot» → нажмите значок карандаша → нажмите новое сочетание клавиш."
  },
  "optOpenShortcuts": {
   "message": "Открыть страницу сочетаний клавиш Chrome"
  },
  "optH2": {
   "message": "2. Режим захвата"
  },
  "optCleanTitle": {
   "message": "Чистый кадр (рекомендуется)"
  },
  "optCleanDesc": {
   "message": " — исходное разрешение видео (1080p/4K сохраняет исходный размер), без элементов управления плеера, субтитров и курсора мыши. Наивысшее качество."
  },
  "optCleanFallback": {
   "message": "Если браузер блокирует захват кадров для конкретного видео, автоматически включается режим «Что вы видите»."
  },
  "optVisibleTitle": {
   "message": "Что вы видите"
  },
  "optVisibleDesc": {
   "message": " — захватывает то, что действительно на экране, поэтому субтитры включены, но разрешение ограничено размером окна; лучше всего работает в полноэкранном режиме."
  },
  "optH3": {
   "message": "3. После захвата"
  },
  "optPreviewDesc": {
   "message": " — показывает предпросмотр, затем вы выбираете «Сохранить файл» или «Копировать в буфер обмена». Не нравится? Закройте и захватите снова, без лишних файлов."
  },
  "optDownloadDesc": {
   "message": " — при каждом нажатии сразу скачивает в папку загрузок браузера; удобно для захвата множества кадров."
  },
  "optCopyDesc": {
   "message": " — копирует при каждом нажатии, чтобы можно было вставить прямо в чат, документ или письмо (если копирование не удалось, вместо этого открывается предпросмотр, чтобы изображение не потерялось)."
  },
  "optH4": {
   "message": "4. Формат изображения"
  },
  "optFmtPng": {
   "message": "PNG (без потерь, файлы больше)"
  },
  "optFmtJpeg": {
   "message": "JPG (маленький, универсальный)"
  },
  "optFmtWebp": {
   "message": "WebP (самый маленький)"
  },
  "optQuality": {
   "message": "Качество JPG / WebP: "
  },
  "optFileNamesLead": {
   "message": "Имена файлов создаются автоматически: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", например "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". Копирование в буфер обмена всегда использует PNG (ограничение буфера обмена браузера), независимо от выбранного здесь формата."
  },
  "optSave": {
   "message": "Сохранить настройки"
  },
  "optSaved": {
   "message": "✓ Сохранено"
  },
  "optNotesH": {
   "message": "Примечания и ограничения"
  },
  "optDrmTitle": {
   "message": "Видео, защищённое DRM, захватить нельзя: "
  },
  "optDrmDesc": {
   "message": "платные фильмы и аниме на Bilibili защищены DRM; на таких страницах браузер затемняет изображение в обоих режимах захвата. Это отраслевое ограничение, которое не может обойти ни одно расширение. Обычные видео Bilibili не затрагиваются, а чистые кадры захватываются в текущем разрешении воспроизведения, вплоть до 4K."
  },
  "optSubsTitle": {
   "message": "Субтитры и данмаку: "
  },
  "optSubsDesc": {
   "message": "чистые кадры не содержат ни субтитров, ни данмаку — и то и другое веб-страница накладывает поверх видео, и они не являются частью изображения (субтитры, встроенные в само видео, являются частью изображения и отображаются). Чтобы включить их, используйте «Что вы видите»; захват выполняется в размере, показанном на экране, поэтому для лучшего качества захватывайте в полноэкранном режиме."
  },
  "optScopeTitle": {
   "message": "Область действия: "
  },
  "optScopeDesc": {
   "message": "это расширение работает только на страницах видео на www.bilibili.com — не на прямых трансляциях (live.bilibili.com) и не на других поддоменах."
  },
  "optVertical": {
   "message": "Вертикальные видео тоже поддерживаются (исходное вертикальное разрешение)."
  },
  "optPaused": {
   "message": "Можно захватывать на паузе; вы получите кадр, который на экране."
  },
  "optSafari": {
   "message": "Safari: это расширение — стандартный исходный код Web Extension, его можно преобразовать с помощью safari-web-extension-converter из Xcode; см. раздел Safari в README проекта."
  },
  "optLangH": {
   "message": "Язык интерфейса"
  },
  "optLangAuto": {
   "message": "Следовать языку браузера"
  },
  "optLangDesc": {
   "message": "Применяется сразу к странице настроек, всплывающему окну панели инструментов и сообщениям на странице. Название расширения, показанное на странице расширений Chrome, по-прежнему следует языку браузера (ограничение Chrome)."
  }
 },
 "th": {
  "extName": {
   "message": "Bilibili Screenshot - จับภาพเฟรมวิดีโอ"
  },
  "extDescription": {
   "message": "จับภาพเฟรม Bilibili ในคลิกเดียว ความละเอียดต้นฉบับ ไม่ต้องหยุดเล่น บันทึก PNG/JPG/WebP หรือคัดลอกได้"
  },
  "actionTitle": {
   "message": "จับภาพเฟรมปัจจุบันของวิดีโอ Bilibili"
  },
  "btnClose": {
   "message": "✕ ปิด"
  },
  "btnSave": {
   "message": "💾 บันทึกไฟล์"
  },
  "btnCopy": {
   "message": "📋 คัดลอกไปยังคลิปบอร์ด"
  },
  "previewAlt": {
   "message": "ตัวอย่างภาพหน้าจอ"
  },
  "toastSaved": {
   "message": "บันทึกแล้ว: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "คัดลอกไปยังคลิปบอร์ดแล้ว วางลงในแชทหรือเอกสารได้เลย"
  },
  "toastCopyDenied": {
   "message": "คัดลอกไม่สำเร็จ (เบราว์เซอร์ปฏิเสธการเข้าถึงคลิปบอร์ด) โปรดใช้ \"บันทึกไฟล์\" แทน"
  },
  "toastNoVideo": {
   "message": "ไม่พบวิดีโอ (ใช้บนหน้าเล่นวิดีโอของ Bilibili)"
  },
  "toastNotReady": {
   "message": "วิดีโอยังโหลดภาพไม่เสร็จ เล่นสักครู่แล้วลองอีกครั้ง"
  },
  "metaNative": {
   "message": "เฟรมต้นฉบับ"
  },
  "metaSubs": {
   "message": "พร้อมคำบรรยาย"
  },
  "toastScreenshotSaved": {
   "message": "บันทึกภาพหน้าจอแล้ว: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "คัดลอกภาพหน้าจอไปยังคลิปบอร์ดแล้ว ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "คัดลอกอัตโนมัติไม่สำเร็จ เปิดตัวอย่างให้แล้ว คลิก \"บันทึกไฟล์\""
  },
  "toastCaptureFailed": {
   "message": "จับภาพไม่สำเร็จ: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "จับภาพเฟรมปัจจุบัน (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "จับภาพเฟรมปัจจุบัน"
  },
  "loading": {
   "message": "กำลังโหลด…"
  },
  "notSet": {
   "message": "ยังไม่ได้ตั้ง"
  },
  "actPreview": {
   "message": "ดูตัวอย่างก่อน"
  },
  "actDownload": {
   "message": "บันทึกโดยตรง"
  },
  "actCopy": {
   "message": "คัดลอกไปยังคลิปบอร์ด"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "บนหน้าเล่นวิดีโอของ Bilibili คลิกปุ่มด้านล่าง กดปุ่มลัด หรือคลิกปุ่มกล้องที่มุมขวาล่างของเครื่องเล่น เพื่อจับภาพเฟรมปัจจุบัน"
  },
  "popupCapture": {
   "message": "จับภาพเฟรมปัจจุบัน"
  },
  "popupShortcut": {
   "message": "ปุ่มลัด"
  },
  "popupFormat": {
   "message": "รูปแบบภาพ"
  },
  "popupAfter": {
   "message": "หลังจับภาพ"
  },
  "popupChangeShortcut": {
   "message": "เปลี่ยนปุ่มลัด"
  },
  "popupSettings": {
   "message": "การตั้งค่า"
  },
  "popupNote": {
   "message": "เฟรมแบบคลีนจะจับภาพที่ความละเอียดที่กำลังเล่นอยู่ ไม่มีปุ่มควบคุมของเครื่องเล่น คำบรรยาย หรือแดนมากุ หากต้องการรวมคำบรรยายหรือแดนมากุ ให้เปลี่ยนโหมดการจับภาพเป็น \"สิ่งที่คุณเห็น\" ในการตั้งค่า"
  },
  "popupNotBilibiliOpen": {
   "message": "นี่ไม่ใช่หน้า Bilibili โปรดเปิดวิดีโอก่อน"
  },
  "popupCapturing": {
   "message": "กำลังจับภาพ…"
  },
  "popupNotBilibili": {
   "message": "นี่ไม่ใช่หน้า Bilibili"
  },
  "popupCaptureFailed": {
   "message": "จับภาพไม่สำเร็จ: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "ข้อผิดพลาดที่ไม่ทราบสาเหตุ"
  },
  "popupRequestFailed": {
   "message": "คำขอไม่สำเร็จ: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "การตั้งค่า Bilibili Screenshot"
  },
  "optIntro": {
   "message": "วิธีจับภาพทั้งสามแบบทำงานเหมือนกัน: ปุ่มกล้องที่มุมขวาล่างของเครื่องเล่น ปุ่มลัดบนแป้นพิมพ์ และปุ่มในป๊อปอัปของแถบเครื่องมือ การจับภาพไม่หยุดการเล่น วิดีโอจะเล่นต่อไป และภาพคือเฟรม ณ วินาทีที่คุณกด"
  },
  "optH1": {
   "message": "1. ปุ่มลัดบนแป้นพิมพ์"
  },
  "optCurrentShortcut": {
   "message": "ปุ่มลัดปัจจุบัน: "
  },
  "optShortcutNotSet": {
   "message": "ยังไม่ได้ตั้ง (ตั้งได้ในหน้าปุ่มลัดของ Chrome)"
  },
  "optShortcutHelp": {
   "message": "Chrome ไม่อนุญาตให้ส่วนขยายเปลี่ยนปุ่มลัดโดยตรง เปลี่ยนได้ในหน้าของ Chrome เอง: คลิกปุ่มด้านล่าง → ค้นหา \"Bilibili Screenshot\" → คลิกไอคอนดินสอ → กดชุดปุ่มใหม่"
  },
  "optOpenShortcuts": {
   "message": "เปิดหน้าปุ่มลัดของ Chrome"
  },
  "optH2": {
   "message": "2. โหมดการจับภาพ"
  },
  "optCleanTitle": {
   "message": "เฟรมแบบคลีน (แนะนำ)"
  },
  "optCleanDesc": {
   "message": " — ความละเอียดต้นฉบับของวิดีโอ (1080p/4K คงขนาดเดิม) ไม่มีปุ่มควบคุมของเครื่องเล่น คำบรรยาย หรือเคอร์เซอร์เมาส์ คุณภาพสูงสุด"
  },
  "optCleanFallback": {
   "message": "หากเบราว์เซอร์บล็อกการจับภาพเฟรมของวิดีโอบางรายการ จะเปลี่ยนไปใช้โหมด \"สิ่งที่คุณเห็น\" โดยอัตโนมัติ"
  },
  "optVisibleTitle": {
   "message": "สิ่งที่คุณเห็น"
  },
  "optVisibleDesc": {
   "message": " — จับภาพสิ่งที่อยู่บนหน้าจอจริง จึงรวมคำบรรยายด้วย แต่ความละเอียดถูกจำกัดด้วยขนาดหน้าต่าง ใช้ได้ดีที่สุดในโหมดเต็มจอ"
  },
  "optH3": {
   "message": "3. หลังการจับภาพ"
  },
  "optPreviewDesc": {
   "message": " — แสดงตัวอย่างก่อน แล้วเลือก \"บันทึกไฟล์\" หรือ \"คัดลอกไปยังคลิปบอร์ด\" ไม่พอใจก็ปิดแล้วจับใหม่ได้ ไม่เสียไฟล์"
  },
  "optDownloadDesc": {
   "message": " — ดาวน์โหลดตรงไปยังโฟลเดอร์ดาวน์โหลดของเบราว์เซอร์ทุกครั้งที่กด เหมาะกับการจับภาพจำนวนมาก"
  },
  "optCopyDesc": {
   "message": " — คัดลอกทุกครั้งที่กด เพื่อให้วางลงในแชท เอกสาร หรืออีเมลได้ทันที (หากคัดลอกไม่สำเร็จ จะเปิดตัวอย่างแทน เพื่อไม่ให้ภาพหาย)"
  },
  "optH4": {
   "message": "4. รูปแบบภาพ"
  },
  "optFmtPng": {
   "message": "PNG (ไม่สูญเสียคุณภาพ ไฟล์ใหญ่กว่า)"
  },
  "optFmtJpeg": {
   "message": "JPG (เล็ก ใช้ได้ทั่วไป)"
  },
  "optFmtWebp": {
   "message": "WebP (เล็กที่สุด)"
  },
  "optQuality": {
   "message": "คุณภาพ JPG / WebP: "
  },
  "optFileNamesLead": {
   "message": "ชื่อไฟล์ถูกสร้างโดยอัตโนมัติ: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": " เช่น "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": " การคัดลอกไปยังคลิปบอร์ดจะใช้ PNG เสมอ (ข้อจำกัดของคลิปบอร์ดเบราว์เซอร์) ไม่ว่าจะเลือกรูปแบบใดที่นี่"
  },
  "optSave": {
   "message": "บันทึกการตั้งค่า"
  },
  "optSaved": {
   "message": "✓ บันทึกแล้ว"
  },
  "optNotesH": {
   "message": "หมายเหตุและข้อจำกัด"
  },
  "optDrmTitle": {
   "message": "วิดีโอที่ป้องกันด้วย DRM จับภาพไม่ได้: "
  },
  "optDrmDesc": {
   "message": "ภาพยนตร์และอนิเมะแบบเสียเงินของ Bilibili มีการป้องกัน DRM ในหน้าเหล่านั้น เบราว์เซอร์จะปิดภาพเป็นสีดำทั้งสองโหมดการจับภาพ นี่เป็นข้อจำกัดทั้งอุตสาหกรรมที่ไม่มีส่วนขยายใดหลีกเลี่ยงได้ วิดีโอ Bilibili ทั่วไปไม่ได้รับผลกระทบ และเฟรมแบบคลีนจะจับภาพที่ความละเอียดที่กำลังเล่นอยู่ สูงสุด 4K"
  },
  "optSubsTitle": {
   "message": "คำบรรยายและแดนมากุ: "
  },
  "optSubsDesc": {
   "message": "เฟรมแบบคลีนไม่มีคำบรรยายและไม่มีแดนมากุ — ทั้งสองอย่างถูกซ้อนทับโดยหน้าเว็บเหนือวิดีโอและไม่ใช่ส่วนหนึ่งของภาพ (คำบรรยายที่ฝังอยู่ในตัววิดีโอเองเป็นส่วนหนึ่งของภาพและจะปรากฏ) หากต้องการรวมทั้งสองอย่าง ให้ใช้ \"สิ่งที่คุณเห็น\" ซึ่งจะจับภาพตามขนาดที่แสดงบนหน้าจอ ดังนั้นให้จับภาพในโหมดเต็มจอเพื่อคุณภาพที่ดีที่สุด"
  },
  "optScopeTitle": {
   "message": "ขอบเขต: "
  },
  "optScopeDesc": {
   "message": "ส่วนขยายนี้ทำงานเฉพาะบนหน้าวิดีโอของ www.bilibili.com เท่านั้น ไม่ทำงานบนการถ่ายทอดสด (live.bilibili.com) หรือซับโดเมนอื่น"
  },
  "optVertical": {
   "message": "วิดีโอแนวตั้งก็ใช้ได้เช่นกัน (ความละเอียดแนวตั้งต้นฉบับ)"
  },
  "optPaused": {
   "message": "จับภาพขณะหยุดชั่วคราวได้ คุณจะได้เฟรมที่อยู่บนหน้าจอ"
  },
  "optSafari": {
   "message": "Safari: ส่วนขยายนี้เป็นซอร์สโค้ด Web Extension มาตรฐาน และแปลงได้ด้วย safari-web-extension-converter ของ Xcode ดูขั้นตอนในส่วน Safari ของ README โครงการ"
  },
  "optLangH": {
   "message": "ภาษาของอินเทอร์เฟซ"
  },
  "optLangAuto": {
   "message": "ตามภาษาของเบราว์เซอร์"
  },
  "optLangDesc": {
   "message": "มีผลทันทีกับหน้าการตั้งค่า ป๊อปอัปของแถบเครื่องมือ และข้อความในหน้า ชื่อส่วนขยายที่แสดงในหน้าส่วนขยายของ Chrome ยังคงตามภาษาของเบราว์เซอร์ (ข้อจำกัดของ Chrome)"
  }
 },
 "vi": {
  "extName": {
   "message": "Bilibili Screenshot - Chụp khung hình video"
  },
  "extDescription": {
   "message": "Chụp khung hình Bilibili chỉ với một cú nhấp, độ phân giải gốc, không cần tạm dừng. Lưu PNG/JPG/WebP hoặc sao chép."
  },
  "actionTitle": {
   "message": "Chụp khung hình hiện tại của video Bilibili"
  },
  "btnClose": {
   "message": "✕ Đóng"
  },
  "btnSave": {
   "message": "💾 Lưu tệp"
  },
  "btnCopy": {
   "message": "📋 Sao chép vào bộ nhớ tạm"
  },
  "previewAlt": {
   "message": "xem trước ảnh chụp"
  },
  "toastSaved": {
   "message": "Đã lưu: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "Đã sao chép vào bộ nhớ tạm. Dán vào cuộc trò chuyện hoặc tài liệu."
  },
  "toastCopyDenied": {
   "message": "Sao chép thất bại (trình duyệt từ chối quyền truy cập bộ nhớ tạm). Hãy dùng \"Lưu tệp\" thay thế."
  },
  "toastNoVideo": {
   "message": "Không tìm thấy video (hãy dùng trên trang xem Bilibili)."
  },
  "toastNotReady": {
   "message": "Video chưa tải được hình ảnh. Hãy phát một lúc rồi thử lại."
  },
  "metaNative": {
   "message": "khung hình gốc"
  },
  "metaSubs": {
   "message": "có phụ đề"
  },
  "toastScreenshotSaved": {
   "message": "Đã lưu ảnh chụp: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "Đã sao chép ảnh chụp vào bộ nhớ tạm ($ARG1$×$ARG2$)",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "Tự động sao chép thất bại. Đã mở bản xem trước; hãy nhấp \"Lưu tệp\"."
  },
  "toastCaptureFailed": {
   "message": "Chụp thất bại: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "Chụp khung hình hiện tại (Bilibili Screenshot)"
  },
  "btnAria": {
   "message": "Chụp khung hình hiện tại"
  },
  "loading": {
   "message": "Đang tải…"
  },
  "notSet": {
   "message": "Chưa đặt"
  },
  "actPreview": {
   "message": "Xem trước trước"
  },
  "actDownload": {
   "message": "Lưu trực tiếp"
  },
  "actCopy": {
   "message": "Sao chép vào bộ nhớ tạm"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "Trên trang xem Bilibili, nhấp nút bên dưới, nhấn phím tắt hoặc nhấp nút máy ảnh ở góc dưới bên phải của trình phát để chụp khung hình hiện tại."
  },
  "popupCapture": {
   "message": "Chụp khung hình hiện tại"
  },
  "popupShortcut": {
   "message": "Phím tắt"
  },
  "popupFormat": {
   "message": "Định dạng ảnh"
  },
  "popupAfter": {
   "message": "Sau khi chụp"
  },
  "popupChangeShortcut": {
   "message": "Đổi phím tắt"
  },
  "popupSettings": {
   "message": "Cài đặt"
  },
  "popupNote": {
   "message": "Khung hình sạch được chụp ở độ phân giải đang phát, không có điều khiển của trình phát, phụ đề hay danmaku. Để có cả phụ đề hoặc danmaku, hãy chuyển chế độ chụp sang \"Những gì bạn thấy\" trong Cài đặt."
  },
  "popupNotBilibiliOpen": {
   "message": "Đây không phải trang Bilibili. Hãy mở một video trước."
  },
  "popupCapturing": {
   "message": "Đang chụp…"
  },
  "popupNotBilibili": {
   "message": "Đây không phải trang Bilibili."
  },
  "popupCaptureFailed": {
   "message": "Chụp thất bại: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "lỗi không xác định"
  },
  "popupRequestFailed": {
   "message": "Yêu cầu thất bại: $ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Cài đặt Bilibili Screenshot"
  },
  "optIntro": {
   "message": "Cả ba cách chụp đều hoạt động giống nhau: nút máy ảnh ở góc dưới bên phải của trình phát, phím tắt bàn phím và nút trong cửa sổ bật lên trên thanh công cụ. Chụp không làm dừng phát; video vẫn phát tiếp và ảnh là khung hình tại thời điểm bạn nhấn."
  },
  "optH1": {
   "message": "1. Phím tắt bàn phím"
  },
  "optCurrentShortcut": {
   "message": "Phím tắt hiện tại: "
  },
  "optShortcutNotSet": {
   "message": "Chưa đặt (đặt trên trang phím tắt của Chrome)"
  },
  "optShortcutHelp": {
   "message": "Chrome không cho phép tiện ích thay đổi phím tắt trực tiếp. Hãy thay đổi trên trang của Chrome: nhấp nút bên dưới → tìm \"Bilibili Screenshot\" → nhấp biểu tượng bút chì → nhấn tổ hợp phím mới."
  },
  "optOpenShortcuts": {
   "message": "Mở trang phím tắt của Chrome"
  },
  "optH2": {
   "message": "2. Chế độ chụp"
  },
  "optCleanTitle": {
   "message": "Khung hình sạch (khuyên dùng)"
  },
  "optCleanDesc": {
   "message": " — độ phân giải gốc của video (1080p/4K giữ nguyên kích thước gốc), không có điều khiển của trình phát, phụ đề hay con trỏ chuột. Chất lượng cao nhất."
  },
  "optCleanFallback": {
   "message": "Nếu trình duyệt chặn việc chụp khung hình đối với một video cụ thể, nó sẽ tự động chuyển sang chế độ \"Những gì bạn thấy\"."
  },
  "optVisibleTitle": {
   "message": "Những gì bạn thấy"
  },
  "optVisibleDesc": {
   "message": " — chụp những gì thực sự có trên màn hình, nên có cả phụ đề, nhưng độ phân giải bị giới hạn bởi kích thước cửa sổ; hoạt động tốt nhất ở chế độ toàn màn hình."
  },
  "optH3": {
   "message": "3. Sau khi chụp"
  },
  "optPreviewDesc": {
   "message": " — hiển thị bản xem trước, rồi bạn chọn \"Lưu tệp\" hoặc \"Sao chép vào bộ nhớ tạm\". Không ưng ý? Đóng lại và chụp lần nữa, không tốn tệp rác."
  },
  "optDownloadDesc": {
   "message": " — mỗi lần nhấn sẽ tải thẳng xuống thư mục tải xuống của trình duyệt; phù hợp để chụp nhiều khung hình."
  },
  "optCopyDesc": {
   "message": " — mỗi lần nhấn sẽ sao chép để bạn dán thẳng vào cuộc trò chuyện, tài liệu hoặc email (nếu sao chép thất bại, bản xem trước sẽ mở ra thay thế, để ảnh không bị mất)."
  },
  "optH4": {
   "message": "4. Định dạng ảnh"
  },
  "optFmtPng": {
   "message": "PNG (không mất dữ liệu, tệp lớn hơn)"
  },
  "optFmtJpeg": {
   "message": "JPG (nhỏ, phổ biến)"
  },
  "optFmtWebp": {
   "message": "WebP (nhỏ nhất)"
  },
  "optQuality": {
   "message": "Chất lượng JPG / WebP: "
  },
  "optFileNamesLead": {
   "message": "Tên tệp được tạo tự động: "
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": ", ví dụ "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": ". Sao chép vào bộ nhớ tạm luôn dùng PNG (giới hạn của bộ nhớ tạm của trình duyệt), bất kể định dạng đã chọn ở đây."
  },
  "optSave": {
   "message": "Lưu cài đặt"
  },
  "optSaved": {
   "message": "✓ Đã lưu"
  },
  "optNotesH": {
   "message": "Lưu ý và giới hạn"
  },
  "optDrmTitle": {
   "message": "Không thể chụp video được bảo vệ bởi DRM: "
  },
  "optDrmDesc": {
   "message": "phim và anime trả phí trên Bilibili được bảo vệ bằng DRM; trên các trang đó, trình duyệt sẽ che đen hình ảnh ở cả hai chế độ chụp. Đây là giới hạn chung của toàn ngành mà không tiện ích mở rộng nào vượt qua được. Video Bilibili thông thường không bị ảnh hưởng, và khung hình sạch được chụp ở độ phân giải đang phát, tối đa 4K."
  },
  "optSubsTitle": {
   "message": "Phụ đề và danmaku: "
  },
  "optSubsDesc": {
   "message": "khung hình sạch không chứa phụ đề cũng không chứa danmaku — cả hai đều do trang web chồng lên trên video và không phải một phần của hình ảnh (phụ đề được ghi cứng vào chính video thì là một phần của hình ảnh và sẽ xuất hiện). Để chụp cả hai, hãy dùng \"Những gì bạn thấy\"; chế độ này chụp theo kích thước hiển thị trên màn hình, nên hãy chụp ở chế độ toàn màn hình để có chất lượng tốt nhất."
  },
  "optScopeTitle": {
   "message": "Phạm vi: "
  },
  "optScopeDesc": {
   "message": "tiện ích này chỉ hoạt động trên các trang video tại www.bilibili.com — không hoạt động trên phát trực tiếp (live.bilibili.com) hay các tên miền phụ khác."
  },
  "optVertical": {
   "message": "Video dọc cũng dùng được (độ phân giải dọc gốc)."
  },
  "optPaused": {
   "message": "Bạn có thể chụp khi đang tạm dừng; bạn sẽ nhận được khung hình đang hiển thị trên màn hình."
  },
  "optSafari": {
   "message": "Safari: tiện ích này là mã nguồn Web Extension chuẩn và có thể chuyển đổi bằng safari-web-extension-converter của Xcode; xem mục Safari trong README của dự án."
  },
  "optLangH": {
   "message": "Ngôn ngữ giao diện"
  },
  "optLangAuto": {
   "message": "Theo ngôn ngữ của trình duyệt"
  },
  "optLangDesc": {
   "message": "Áp dụng ngay cho trang cài đặt, cửa sổ bật lên trên thanh công cụ và thông báo trong trang. Tên tiện ích hiển thị trên trang tiện ích của Chrome vẫn theo ngôn ngữ của trình duyệt (giới hạn của Chrome)."
  }
 },
 "zh_CN": {
  "extName": {
   "message": "Bilibili 截屏 - Video Screenshot"
  },
  "extDescription": {
   "message": "一键截取 Bilibili 当前视频帧，原生分辨率、不暂停播放；可保存为 PNG/JPG/WebP 或复制到剪贴板。"
  },
  "actionTitle": {
   "message": "截取当前 Bilibili 视频帧"
  },
  "btnClose": {
   "message": "✕ 关闭"
  },
  "btnSave": {
   "message": "💾 保存文件"
  },
  "btnCopy": {
   "message": "📋 复制到剪贴板"
  },
  "previewAlt": {
   "message": "截图预览"
  },
  "toastSaved": {
   "message": "已保存：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "已复制到剪贴板，去聊天/文档里粘贴即可"
  },
  "toastCopyDenied": {
   "message": "复制失败（浏览器没给剪贴板权限），请用「保存文件」"
  },
  "toastNoVideo": {
   "message": "没找到视频（请在 Bilibili 播放页使用）"
  },
  "toastNotReady": {
   "message": "视频还没加载出画面，先播放一下再截"
  },
  "metaNative": {
   "message": "原生帧"
  },
  "metaSubs": {
   "message": "含字幕画面"
  },
  "toastScreenshotSaved": {
   "message": "已保存截图：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "截图已复制到剪贴板（$ARG1$×$ARG2$）",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "自动复制失败，已打开预览，请点「保存文件」"
  },
  "toastCaptureFailed": {
   "message": "截屏失败：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "截取当前帧（Bilibili 截屏）"
  },
  "btnAria": {
   "message": "截取当前帧"
  },
  "loading": {
   "message": "读取中…"
  },
  "notSet": {
   "message": "未绑定"
  },
  "actPreview": {
   "message": "先预览"
  },
  "actDownload": {
   "message": "直接保存"
  },
  "actCopy": {
   "message": "复制到剪贴板"
  },
  "popupTitle": {
   "message": "Bilibili 截屏"
  },
  "popupSub": {
   "message": "在 Bilibili 播放页点下面按钮、按快捷键，或点播放器右下角的相机按钮，都能截下当前帧。"
  },
  "popupCapture": {
   "message": "截取当前帧"
  },
  "popupShortcut": {
   "message": "全局快捷键"
  },
  "popupFormat": {
   "message": "截图格式"
  },
  "popupAfter": {
   "message": "截后动作"
  },
  "popupChangeShortcut": {
   "message": "修改快捷键"
  },
  "popupSettings": {
   "message": "设置"
  },
  "popupNote": {
   "message": "干净帧按当前播放的清晰度截，不带控制条、字幕和弹幕；想连字幕或弹幕一起截，在设置里把画面模式改成「所见即所得」。"
  },
  "popupNotBilibiliOpen": {
   "message": "当前不是 Bilibili 页面，先打开一个视频再截。"
  },
  "popupCapturing": {
   "message": "正在截屏…"
  },
  "popupNotBilibili": {
   "message": "当前不是 Bilibili 页面。"
  },
  "popupCaptureFailed": {
   "message": "截屏没成功：$ARG1$（视频页上也会有提示）",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "未知错误"
  },
  "popupRequestFailed": {
   "message": "调用失败：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Bilibili 截屏 设置"
  },
  "optIntro": {
   "message": "三种截屏入口效果相同：播放器右下角的相机按钮、全局快捷键、点插件图标弹窗里的按钮。截屏不暂停播放，视频继续放，画面定格在按键那一刻。"
  },
  "optH1": {
   "message": "1. 快捷键"
  },
  "optCurrentShortcut": {
   "message": "当前绑定："
  },
  "optShortcutNotSet": {
   "message": "未绑定（请去设置页绑定）"
  },
  "optShortcutHelp": {
   "message": "Chrome 不允许插件直接改快捷键，要在 Chrome 自己的页面改：点下面按钮 → 找到「Bilibili 截屏」→ 点笔形图标 → 按下新组合键。"
  },
  "optOpenShortcuts": {
   "message": "打开 Chrome 快捷键设置页"
  },
  "optH2": {
   "message": "2. 画面模式"
  },
  "optCleanTitle": {
   "message": "干净帧（推荐）"
  },
  "optCleanDesc": {
   "message": " — 视频原生分辨率（如 1080p/4K 就是原尺寸），没有控制条、没有字幕、没有鼠标。清晰度最高。"
  },
  "optCleanFallback": {
   "message": "若个别视频抓帧被浏览器拦截，会自动回退到所见即所得模式。"
  },
  "optVisibleTitle": {
   "message": "所见即所得"
  },
  "optVisibleDesc": {
   "message": " — 按屏幕上实际看到的画面截，字幕会一起截进去，但分辨率受窗口大小限制，全屏时截效果最好。"
  },
  "optH3": {
   "message": "3. 截后动作"
  },
  "optPreviewDesc": {
   "message": " — 弹出预览图，再选「保存文件」或「复制到剪贴板」，不满意关掉重截，不浪费文件。"
  },
  "optDownloadDesc": {
   "message": " — 一按就下载到浏览器下载目录，适合连截多张。"
  },
  "optCopyDesc": {
   "message": " — 一按就复制，直接去微信/文档/邮件里粘贴（复制失败时会自动改弹预览，不丢图）。"
  },
  "optH4": {
   "message": "4. 图片格式"
  },
  "optFmtPng": {
   "message": "PNG（无损，体积大）"
  },
  "optFmtJpeg": {
   "message": "JPG（体积小，通用）"
  },
  "optFmtWebp": {
   "message": "WebP（体积最小）"
  },
  "optQuality": {
   "message": "JPG / WebP 质量："
  },
  "optFileNamesLead": {
   "message": "文件名自动生成："
  },
  "optFilenamePattern": {
   "message": "视频标题_时分秒_日期时间.扩展名"
  },
  "optFileNamesEg": {
   "message": "，例："
  },
  "optFilenameExample": {
   "message": "某某教程_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": "。复制到剪贴板时统一用 PNG（浏览器剪贴板限制），不受这里格式影响。"
  },
  "optSave": {
   "message": "保存设置"
  },
  "optSaved": {
   "message": "✓ 已保存"
  },
  "optNotesH": {
   "message": "说明与边界"
  },
  "optDrmTitle": {
   "message": "受 DRM 保护的视频截不了："
  },
  "optDrmDesc": {
   "message": "Bilibili 的付费电影、番剧带 DRM 保护，这类页面上浏览器会把画面挡成黑屏，两种截屏模式都一样；这是行业统一限制，任何插件都绕不过去。普通 Bilibili 视频不受影响，干净帧按当前播放的清晰度截、最高 4K。"
  },
  "optSubsTitle": {
   "message": "字幕和弹幕："
  },
  "optSubsDesc": {
   "message": "干净帧里不含字幕、也不含弹幕——两者都是网页叠在视频上面的，不是画面的一部分（视频本身烧录的硬字幕属于画面，会截进去）。想连字幕、弹幕一起截请用「所见即所得」；它按屏幕上显示的大小截，全屏时截效果最好。"
  },
  "optScopeTitle": {
   "message": "适用范围："
  },
  "optScopeDesc": {
   "message": "本插件只在 www.bilibili.com 的视频页工作，不支持直播间（live.bilibili.com）和其他子域名页面。"
  },
  "optVertical": {
   "message": "竖屏视频同样能截（竖屏原生分辨率）。"
  },
  "optPaused": {
   "message": "暂停状态也能截，截的就是停住的那一帧。"
  },
  "optSafari": {
   "message": "Safari 版：本插件是标准 Web Extension 源码，可用 Xcode 的 safari-web-extension-converter 转换，步骤见项目 README 的 Safari 一节。"
  },
  "optLangH": {
   "message": "界面语言"
  },
  "optLangAuto": {
   "message": "跟随浏览器语言"
  },
  "optLangDesc": {
   "message": "立即生效，设置页、工具栏弹窗和页面内的文字都会切换。Chrome 扩展管理页里显示的扩展名称仍跟随浏览器语言（这是 Chrome 的限制）。"
  }
 },
 "zh_TW": {
  "extName": {
   "message": "Bilibili Screenshot - 影片截圖"
  },
  "extDescription": {
   "message": "一鍵擷取 Bilibili 影格，原始解析度、不需暫停。可存成 PNG/JPG/WebP 或複製到剪貼簿。"
  },
  "actionTitle": {
   "message": "擷取目前的 Bilibili 影格"
  },
  "btnClose": {
   "message": "✕ 關閉"
  },
  "btnSave": {
   "message": "💾 儲存檔案"
  },
  "btnCopy": {
   "message": "📋 複製到剪貼簿"
  },
  "previewAlt": {
   "message": "截圖預覽"
  },
  "toastSaved": {
   "message": "已儲存：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastCopied": {
   "message": "已複製到剪貼簿，可貼到聊天或文件中。"
  },
  "toastCopyDenied": {
   "message": "複製失敗（瀏覽器拒絕了剪貼簿存取），請改用「儲存檔案」。"
  },
  "toastNoVideo": {
   "message": "找不到影片（請在 Bilibili 播放頁面使用）。"
  },
  "toastNotReady": {
   "message": "影片還沒載入畫面，先播放一下再試。"
  },
  "metaNative": {
   "message": "原始影格"
  },
  "metaSubs": {
   "message": "含字幕"
  },
  "toastScreenshotSaved": {
   "message": "截圖已儲存：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "toastScreenshotCopied": {
   "message": "截圖已複製到剪貼簿（$ARG1$×$ARG2$）",
   "placeholders": {
    "arg1": {
     "content": "$1"
    },
    "arg2": {
     "content": "$2"
    }
   }
  },
  "toastAutoCopyFailed": {
   "message": "自動複製失敗，已開啟預覽，請點「儲存檔案」。"
  },
  "toastCaptureFailed": {
   "message": "擷取失敗：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "btnTitle": {
   "message": "擷取目前影格（Bilibili Screenshot）"
  },
  "btnAria": {
   "message": "擷取目前影格"
  },
  "loading": {
   "message": "載入中…"
  },
  "notSet": {
   "message": "未設定"
  },
  "actPreview": {
   "message": "先預覽"
  },
  "actDownload": {
   "message": "直接儲存"
  },
  "actCopy": {
   "message": "複製到剪貼簿"
  },
  "popupTitle": {
   "message": "Bilibili Screenshot"
  },
  "popupSub": {
   "message": "在 Bilibili 播放頁面，點下方按鈕、按快捷鍵，或點播放器右下角的相機按鈕，即可擷取目前影格。"
  },
  "popupCapture": {
   "message": "擷取目前影格"
  },
  "popupShortcut": {
   "message": "快捷鍵"
  },
  "popupFormat": {
   "message": "圖片格式"
  },
  "popupAfter": {
   "message": "擷取後"
  },
  "popupChangeShortcut": {
   "message": "更改快捷鍵"
  },
  "popupSettings": {
   "message": "設定"
  },
  "popupNote": {
   "message": "乾淨影格按目前播放的畫質擷取，不含播放器控制項、字幕和彈幕；想連字幕或彈幕一起截，請到設定裡把擷取模式改成「所見即所得」。"
  },
  "popupNotBilibiliOpen": {
   "message": "這不是 Bilibili 頁面，請先打開一個影片。"
  },
  "popupCapturing": {
   "message": "擷取中…"
  },
  "popupNotBilibili": {
   "message": "這不是 Bilibili 頁面。"
  },
  "popupCaptureFailed": {
   "message": "擷取失敗：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "popupUnknownError": {
   "message": "未知錯誤"
  },
  "popupRequestFailed": {
   "message": "請求失敗：$ARG1$",
   "placeholders": {
    "arg1": {
     "content": "$1"
    }
   }
  },
  "optPageTitle": {
   "message": "Bilibili Screenshot 設定"
  },
  "optIntro": {
   "message": "三種擷取方式效果相同：播放器右下角的相機按鈕、鍵盤快捷鍵、工具列彈窗裡的按鈕。擷取不會暫停播放，影片照常播放，擷取的是你按下那一刻的影格。"
  },
  "optH1": {
   "message": "1. 鍵盤快捷鍵"
  },
  "optCurrentShortcut": {
   "message": "目前快捷鍵："
  },
  "optShortcutNotSet": {
   "message": "未設定（請到 Chrome 的快捷鍵頁面設定）"
  },
  "optShortcutHelp": {
   "message": "Chrome 不允許擴充功能直接更改快捷鍵，請在 Chrome 自己的頁面更改：點下方按鈕 → 找到「Bilibili Screenshot」→ 點鉛筆圖示 → 按下新的組合鍵。"
  },
  "optOpenShortcuts": {
   "message": "打開 Chrome 的快捷鍵頁面"
  },
  "optH2": {
   "message": "2. 擷取模式"
  },
  "optCleanTitle": {
   "message": "乾淨影格（推薦）"
  },
  "optCleanDesc": {
   "message": " — 影片的原始解析度（1080p/4K 保持原尺寸），不含播放器控制項、字幕和滑鼠游標，畫質最高。"
  },
  "optCleanFallback": {
   "message": "如果瀏覽器擋住了某個影片的影格擷取，會自動改用「所見即所得」模式。"
  },
  "optVisibleTitle": {
   "message": "所見即所得"
  },
  "optVisibleDesc": {
   "message": " — 擷取螢幕上實際看到的畫面，包含字幕，但解析度受視窗大小限制，全屏時效果最好。"
  },
  "optH3": {
   "message": "3. 擷取之後"
  },
  "optPreviewDesc": {
   "message": " — 先顯示預覽，再選「儲存檔案」或「複製到剪貼簿」。不滿意就關掉重截，不會產生廢檔。"
  },
  "optDownloadDesc": {
   "message": " — 每次按下就直接下載到瀏覽器的下載資料夾，適合連續截很多張。"
  },
  "optCopyDesc": {
   "message": " — 每次按下就複製，可直接貼到聊天、文件或郵件（複製失敗時會改開預覽，圖片不會丟）。"
  },
  "optH4": {
   "message": "4. 圖片格式"
  },
  "optFmtPng": {
   "message": "PNG（無損，檔案較大）"
  },
  "optFmtJpeg": {
   "message": "JPG（檔案小，通用）"
  },
  "optFmtWebp": {
   "message": "WebP（最小）"
  },
  "optQuality": {
   "message": "JPG / WebP 畫質："
  },
  "optFileNamesLead": {
   "message": "檔名自動產生："
  },
  "optFilenamePattern": {
   "message": "video-title_mm-ss_date-time.ext"
  },
  "optFileNamesEg": {
   "message": "，例如 "
  },
  "optFilenameExample": {
   "message": "Some Tutorial_12-34_20261114_145501.png"
  },
  "optFileNamesTail": {
   "message": "。複製到剪貼簿時一律使用 PNG（瀏覽器剪貼簿的限制），與這裡選的格式無關。"
  },
  "optSave": {
   "message": "儲存設定"
  },
  "optSaved": {
   "message": "✓ 已儲存"
  },
  "optNotesH": {
   "message": "注意事項與限制"
  },
  "optDrmTitle": {
   "message": "受 DRM 保護的影片無法擷取："
  },
  "optDrmDesc": {
   "message": "Bilibili 的付費電影、番劇帶 DRM 保護，這類頁面上瀏覽器會把畫面擋成黑屏，兩種擷取模式都一樣；這是行業統一限制，任何擴充功能都繞不過去。普通 Bilibili 影片不受影響，乾淨影格按目前播放的畫質擷取、最高 4K。"
  },
  "optSubsTitle": {
   "message": "字幕和彈幕："
  },
  "optSubsDesc": {
   "message": "乾淨影格裡不含字幕、也不含彈幕——兩者都是網頁疊在影片上面的，不是畫面的一部分（影片本身燒錄的硬字幕屬於畫面，會截進去）。想連字幕、彈幕一起截請用「所見即所得」；它按螢幕上顯示的大小擷取，全屏時效果最好。"
  },
  "optScopeTitle": {
   "message": "適用範圍："
  },
  "optScopeDesc": {
   "message": "本擴充功能只在 www.bilibili.com 的影片頁面運作，不支援直播間（live.bilibili.com）和其他子網域頁面。"
  },
  "optVertical": {
   "message": "直向影片同樣能截（直向原始解析度）。"
  },
  "optPaused": {
   "message": "暫停狀態也能截，截的就是停住的那一幀。"
  },
  "optSafari": {
   "message": "Safari 版：本插件是標準 Web Extension 原始碼，可用 Xcode 的 safari-web-extension-converter 轉換，步驟見專案 README 的 Safari 一節。"
  },
  "optLangH": {
   "message": "介面語言"
  },
  "optLangAuto": {
   "message": "跟隨瀏覽器語言"
  },
  "optLangDesc": {
   "message": "立即生效，設定頁、工具欄彈窗和頁面內的文字都會切換。Chrome 擴充管理頁裡顯示的擴充名稱仍跟隨瀏覽器語言（這是 Chrome 的限制）。"
  }
 }
};

// pref: "auto" or a shipped locale code such as "en", "zh_CN", "pt_BR"
// (anything else behaves as "auto"). For "auto", the browser UI language
// is mapped to the closest shipped locale: zh-TW/HK/MO get Traditional
// Chinese, any Portuguese gets pt_BR, the legacy code "in" gets id; a
// language that isn't shipped falls back to English, exactly like
// Chrome's own locale fallback.
function biliResolveLang(pref) {
  if (pref && pref !== "auto" && BILI_STRINGS[pref]) return pref;
  try {
    const ui = String(chrome.i18n.getUILanguage() || "en").toLowerCase();
    if (ui.indexOf("zh") === 0) {
      return /^(zh-tw|zh-hk|zh-mo)/.test(ui) || ui.indexOf("hant") >= 0 ? "zh_TW" : "zh_CN";
    }
    if (ui.indexOf("pt") === 0) return "pt_BR";
    if (ui === "in" || ui.indexOf("in-") === 0) return "id";
    const primary = ui.split("-")[0];
    for (const code of Object.keys(BILI_STRINGS)) {
      if (code.toLowerCase() === primary) return code;
    }
  } catch (e) {}
  return "en";
}

// Look up key in lang (falling back to English), substituting $ARGn$
// placeholders the same way chrome.i18n does. Returns "" for unknown keys.
function biliT(lang, key, subs) {
  const table = BILI_STRINGS[lang] || BILI_STRINGS.en;
  const entry = (table && table[key]) || BILI_STRINGS.en[key];
  if (!entry || typeof entry.message !== "string") return "";
  const ph = entry.placeholders || {};
  return entry.message.replace(/\$([A-Za-z0-9_]+)\$/g, (m, name) => {
    const p = ph[name] || ph[name.toLowerCase()];
    if (!p) return m;
    const mm = /^\$(\d+)$/.exec(p.content || "");
    if (!mm) return m;
    const v = subs[Number(mm[1]) - 1];
    return v != null ? String(v) : m;
  });
}
