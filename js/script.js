/* ============================================================
   DUCKGRAM — скрипты
   ============================================================ */

(function() {
    // Если какая-то картинка не загрузилась, onerror сработает и покажет placeholder.
    // Но если изображение уже загружено, всё ок.
    // Также можно принудительно проверить все img после загрузки страницы.
    document.addEventListener('DOMContentLoaded', function() {
        const imgs = document.querySelectorAll('img');
        imgs.forEach(img => {
            // Если картинка не загрузилась (naturalWidth === 0), то показать placeholder
            if (!img.complete || img.naturalWidth === 0) {
                img.style.display = 'none';
                const placeholder = img.nextElementSibling;
                if (placeholder && placeholder.classList.contains('img-placeholder')) {
                    placeholder.style.display = 'flex';
                }
            }
        });

        // Фоновая анимация — плавающие частицы
        initBackgroundAnimation();

        // Аккордеоны: FAQ + карточки «Наши особенности»
        initAccordions();

        // Лайтбокс: увеличение изображений по клику
        initLightbox();

        // Плавное появление блоков при прокрутке
        initReveal();
    });
})();

/* Плавное появление блоков при прокрутке (IntersectionObserver) */
function initReveal() {
    if (!('IntersectionObserver' in window)) {
        // старые браузеры — контент просто показывается как есть
        return;
    }
    const targets = document.querySelectorAll(
        '.content-block, .block-title.centered, .download-sub, .dl-card, .privacy-card, .faq-item, .achievement-item'
    );
    targets.forEach(function(el) {
        el.classList.add('reveal');
        const group = el.closest('.download-grid, .achievement-grid, .privacy-page, .faq-list');
        if (group && group.classList.contains('download-grid')) {
            const idx = Array.prototype.indexOf.call(group.children, el);
            el.style.transitionDelay = ((idx % 5) * 0.07).toFixed(2) + 's';
        }
    });
    const io = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function(el) {
        io.observe(el);
    });
}

/* Тема (тёмная/светлая) вынесена в отдельный файл: js/theme.js */

/* Лайтбокс (увеличение изображений класса .zoomable) */
function initLightbox() {
    const zooms = document.querySelectorAll('.zoomable');
    if (!zooms.length || document.getElementById('dg-lightbox')) return;

    const box = document.createElement('div');
    box.className = 'lightbox';
    box.id = 'dg-lightbox';

    const img = document.createElement('img');
    img.alt = '';

    const close = document.createElement('button');
    close.className = 'lightbox-close';
    close.type = 'button';
    close.setAttribute('aria-label', 'Close');
    close.innerHTML = '&times;';

    box.appendChild(img);
    box.appendChild(close);
    document.body.appendChild(box);

    function open(src) {
        img.src = src;
        box.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeBox() {
        box.classList.remove('open');
        document.body.style.overflow = '';
    }

    zooms.forEach(z => z.addEventListener('click', function () {
        open(z.src);
    }));

    close.addEventListener('click', closeBox);
    box.addEventListener('click', function (e) {
        if (e.target === box) closeBox();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeBox();
    });
}

/* Аккордеоны (сворачиваемые блоки) */
function initAccordions() {
    // FAQ — клик по вопросу раскрывает ответ (+ стрелка)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const q = item.querySelector('.faq-q');
        if (!q) return;
        q.addEventListener('click', function() {
            item.classList.toggle('open');
        });
    });

    // Карточки «Наши особенности» — клик по кнопке «Подробнее» раскрывает текст
    const toggles = document.querySelectorAll('.achievement-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const card = toggle.closest('.achievement-item');
            if (!card) return;
            card.classList.toggle('open');
            card.querySelectorAll('.accordion-body').forEach(body => {
                body.classList.toggle('open');
            });
        });
    });
}

/* Создаёт анимированные частицы на фоне */
function initBackgroundAnimation() {
    const container = document.getElementById('bg-animation');
    if (!container) return;

    const count = window.innerWidth < 768 ? 18 : 35;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = 2 + Math.random() * 5;
        const duration = 12 + Math.random() * 18;
        const delay = -Math.random() * duration;
        const left = Math.random() * 100;
        const drift = (Math.random() - 0.5) * 60;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        particle.style.setProperty('--drift', drift + 'px');

        container.appendChild(particle);
    }
}



  (async () => {
    const url = 'https://tallywire.cronpulse.workers.dev/hit/my-awesome-site/visits';
    try {
      const res = await fetch(url);
      const data = await res.json();
      document.getElementById('visitor-counter').textContent =
        `Вы посетитель №${data.value}`;
    } catch (e) {
      document.getElementById('visitor-counter').textContent = 'Счётчик недоступен';
    }
  })();
