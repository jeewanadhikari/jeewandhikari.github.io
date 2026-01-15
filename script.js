(function () {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle
  const btn = document.getElementById("themeBtn");
  const icon = document.getElementById("themeIcon");
  const key = "theme";

  const saved = localStorage.getItem(key);
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  function setIcon() {
    const t = document.documentElement.getAttribute("data-theme");
    if (icon) icon.textContent = t === "light" ? "☀" : "☾";
  }
  setIcon();

  if (btn) {
    btn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      const next = cur === "light" ? "" : "light"; // "" => dark default
      if (next) document.documentElement.setAttribute("data-theme", next);
      else document.documentElement.removeAttribute("data-theme");

      localStorage.setItem(key, next || "");
      setIcon();
    });
  }
})();
