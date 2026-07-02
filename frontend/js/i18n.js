/* ============================================================
   I18N.JS — Shared EN / FR language toggle
   Persists via localStorage ("lang" = "en" | "fr").

   USAGE (scalable — just add attributes, no JS changes needed):
     - Text/inner HTML:  add  data-fr="Texte en français"
                         (the original English markup is captured
                          automatically the first time as data-en)
     - Placeholders:     add  data-fr-placeholder="..."
     - aria-label:       add  data-fr-aria="..."

   Any element on any page can opt in just by adding one of the
   attributes above — nothing else needs to change.
   ============================================================ */
(function () {
  var STORAGE_KEY = "lang";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) === "fr" ? "fr" : "en";
  }

  function translateContent(lang) {
    document.querySelectorAll("[data-fr]").forEach(function (el) {
      if (!el.hasAttribute("data-en")) {
        el.setAttribute("data-en", el.innerHTML);
      }
      el.innerHTML =
        lang === "fr" ? el.getAttribute("data-fr") : el.getAttribute("data-en");
    });
  }

  function translateAttribute(selectorAttr, targetAttr, lang) {
    document.querySelectorAll("[" + selectorAttr + "]").forEach(function (el) {
      var enAttr = "data-en-" + targetAttr;
      if (!el.hasAttribute(enAttr)) {
        el.setAttribute(enAttr, el.getAttribute(targetAttr) || "");
      }
      var frValue = el.getAttribute(selectorAttr);
      var enValue = el.getAttribute(enAttr);
      el.setAttribute(targetAttr, lang === "fr" ? frValue : enValue);
    });
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    translateContent(lang);
    translateAttribute("data-fr-placeholder", "placeholder", lang);
    translateAttribute("data-fr-aria", "aria-label", lang);
    document.dispatchEvent(
      new CustomEvent("languageChanged", { detail: { lang: lang } })
    );
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  function init() {
    applyLanguage(getLang());

    var langBtn = document.getElementById("language-btn");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        setLang(getLang() === "fr" ? "en" : "fr");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.siteI18n = { getLang: getLang, setLang: setLang, applyLanguage: applyLanguage };
})();
