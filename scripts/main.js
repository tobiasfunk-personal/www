// Hostname SSI fallback + UX niceties
(function () {
  function setHostFallback(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var content = (el.textContent || '').trim();
    if (!content) {
      try {
        el.textContent = window.location.hostname || 'unknown-host';
      } catch (_) {
        el.textContent = 'unknown-host';
      }
    }
  }

  function mountThemeToggle() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var storageKey = 'prefers-theme';
    function apply(theme) {
      document.documentElement.dataset.theme = theme;
      btn.setAttribute('aria-pressed', theme === 'dark');
    }
    function current() {
      return document.documentElement.dataset.theme ||
             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    var saved = localStorage.getItem(storageKey);
    if (saved) apply(saved);
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      localStorage.setItem(storageKey, next);
      apply(next);
    });
  }

  function updateYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', function () {
    setHostFallback('host-name');
    setHostFallback('host-name-footer');
    updateYear();
    mountThemeToggle();
  });
})();

