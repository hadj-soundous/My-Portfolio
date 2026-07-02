/* ============================================================
   THEME.JS — Shared light/dark theme toggle
   Persists via localStorage ("theme" = "light" | "dark").
   The actual anti-flash class application happens via a tiny
   inline snippet at the very top of <body> in each page (so the
   correct theme is applied before first paint). This file only
   wires up the click handler + notifies theme-aware scenes
   (Three.js backgrounds) that the theme changed.
   ============================================================ */
(function () {
  var STORAGE_KEY = "theme";

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
  }

  function setTheme(theme) {
    var isLight = theme === "light";
    document.body.classList.toggle("light-mode", isLight);
    localStorage.setItem(STORAGE_KEY, isLight ? "light" : "dark");
    document.dispatchEvent(
      new CustomEvent("themeChanged", { detail: { light: isLight } })
    );
  }

  function init() {
    var themeBtn = document.getElementById("theme-btn");
    if (!themeBtn) return;

    themeBtn.addEventListener("click", function () {
      var next = getTheme() === "light" ? "dark" : "light";
      setTheme(next);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.siteTheme = { getTheme: getTheme, setTheme: setTheme };
})();
