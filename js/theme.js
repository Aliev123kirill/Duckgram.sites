/* ============================================================
   DUCKGRAM — ТЕМА: тёмная / светлая (сохраняется в localStorage)
   Отдельный файл: js/theme.js
   Функционал сохранён. Кнопка #theme-toggle закомментирована
   в HTML — при необходимости её можно просто раскомментировать.
   ============================================================ */
(function() {
    const KEY = 'dg-theme';

    function current() {
        return (document.documentElement.getAttribute('data-theme') || 'dark') === 'light' ? 'light' : 'dark';
    }

    function applyTheme(t) {
        document.documentElement.setAttribute('data-theme', t);
        try {
            localStorage.setItem(KEY, t);
        } catch (e) {}
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.setAttribute('aria-label', t === 'light' ? 'Switch to dark theme' : 'Переключить тему');
        }
    }

    let saved = null;
    try {
        saved = localStorage.getItem(KEY);
    } catch (e) {}

    if (saved === 'light' || saved === 'dark') {
        applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme('light');
    }

    document.addEventListener('DOMContentLoaded', function() {
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', function() {
                applyTheme(current() === 'light' ? 'dark' : 'light');
            });
        }
    });
})();