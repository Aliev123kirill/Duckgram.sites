/* ============================================================
   DUCKGRAM — перехват ссылок «никуда» → 404.html
   Подключается на всех основных страницах (кроме 404.html).
   ============================================================ */

(function () {
    'use strict';

    var REDIRECT = '404.html';

    // Список реально существующих страниц (обновляйте при добавлении новых)
    var KNOWN = [
        '404.html',
        'about.html',
        'download.html',
        'faq.html',
        'fix.html',
        'index.html',
        'license.html',
        'privacy.html'
    ];

    function isDeadHref(href) {
        if (typeof href !== 'string') return true;
        var h = href.trim();
        if (!h) return true;
        if (h === '#' || h === '.#' || /^javascript\s*:/i.test(h) || /^about\s*:/i.test(h)) {
            return true;
        }

        // Внешние протоколы и протокольные ссылки — не трогаем
        if (/^(https?:|mailto:|tel:|ftp:|data:|blob:)/i.test(h)) return false;
        if (h.slice(0, 2) === '//') return false;

        // Путь к файлу + якорь / query
        var path = h.split('#')[0].split('?')[0];
        if (!path) return false;

        // Если ссылка ведёт на .html-файл — проверяем, существует ли
        if (/\.(html?|shtml)$/i.test(path)) {
            var file = path.split('/').pop().toLowerCase();
            return KNOWN.indexOf(file) === -1;
        }

        // Всё прочее (папки, внешние ресурсы) — оставляем как есть
        return false;
    }

    // Используем capture: true, чтобы сработать раньше обработчиков script.js
    document.addEventListener('click', function (e) {
        if (e.button && e.button !== 0 && e.button !== 1) return;

        var anchor = e.target && e.target.closest
            ? e.target.closest('a[href]')
            : null;
        if (!anchor) return;

        if (isDeadHref(anchor.getAttribute('href'))) {
            e.preventDefault();
            window.location.href = REDIRECT;
        }
    }, true);
})();