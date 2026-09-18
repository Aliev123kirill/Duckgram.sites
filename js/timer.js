/* ============================================================
   DUCKGRAM — таймер работы над проектом

   ВЫБЕРИТЕ ОДИН ИЗ ТРЁХ ВАРИАНТОВ СЧЁТЧИКА.
   Оставьте раскомментированным только нужный вариант,
   остальные — закомментируйте (добавьте // в начале строки).
   Оба варианта работают бесконечно (идут вверх от даты старта).
   ============================================================ */

(function () {
    'use strict';

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ВАРИАНТ 1 — СТАНДАРТНЫЙ СЧЁТЧИК (от заданной даты, вечно)
    // Перед публикацией поменяйте число в строке ниже.
    // Формат: new Date(ГОД, МЕСЯЦ_0_11, ДЕНЬ)  — ноябрь = 10.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var START_DATE = new Date(2026, 11, 25, 0, 0, 0); // 25.11.2025

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ВАРИАНТ 2 — СЧЁТЧИК «РАБОТАЕТ УЖЕ ГОД»
    // Дата старта считается автоматически: ровно год назад.
    // Счётчик всегда показывает «уже ~1 год» и тикает вечно.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // var START_DATE = new Date();
    // START_DATE.setFullYear(START_DATE.getFullYear() - 1);
    // START_DATE.setHours(0, 0, 0, 0);

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ВАРИАНТ 3 — СЧЁТЧИК «НАЧИНАЕТСЯ СЕГОДНЯ»
    // Дата старта — сегодняшний день с 00:00:00.
    // Счётчик обнуляется каждую ночь и идёт вверх в течение дня.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // var START_DATE = new Date();
    // START_DATE.setHours(15, 0, 0, 0);
    // ==============================================================

    function plural(n, one, few, many) {
        var n10 = n % 10;
        var n100 = n % 100;
        if (n10 === 1 && n100 !== 11) return one;
        if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 >= 20)) return few;
        return many;
    }

    var labelsRu = {
        years:  function (n) { return plural(n, 'год', 'года', 'лет'); },
        months: function (n) { return plural(n, 'месяц', 'месяца', 'месяцев'); },
        days:   function (n) { return plural(n, 'день', 'дня', 'дней'); },
        hours:  function (n) { return plural(n, 'час', 'часа', 'часов'); },
        minutes:function (n) { return plural(n, 'минута', 'минуты', 'минут'); },
        seconds:function (n) { return plural(n, 'секунда', 'секунды', 'секунд'); }
    };

    var labelsEn = {
        years:  function () { return 'years'; },
        months: function (n) { return plural(n, 'month', 'months', 'months'); },
        days:   function (n) { return plural(n, 'day', 'days', 'days'); },
        hours:  function (n) { return plural(n, 'hour', 'hours', 'hours'); },
        minutes:function (n) { return plural(n, 'minute', 'minutes', 'minutes'); },
        seconds:function (n) { return plural(n, 'second', 'seconds', 'seconds'); }
    };

    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }

    function diff(a, b) {
        var years = a.getFullYear() - b.getFullYear();
        var months = a.getMonth() - b.getMonth();
        var days = a.getDate() - b.getDate();
        var hours = a.getHours() - b.getHours();
        var minutes = a.getMinutes() - b.getMinutes();
        var seconds = a.getSeconds() - b.getSeconds();

        if (a.getTime() - b.getTime() < 0) {
            return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        var carry = 0;
        if (seconds < 0) { seconds += 60; carry = 1; }
        minutes -= carry; carry = 0;
        if (minutes < 0) { minutes += 60; carry = 1; }
        hours -= carry; carry = 0;
        if (hours < 0) { hours += 24; carry = 1; }
        days -= carry; carry = 0;

        var daysInPrevMonth = new Date(a.getFullYear(), a.getMonth(), 0).getDate();
        if (days < 0) { days += daysInPrevMonth; carry = 1; }
        months -= carry; carry = 0;
        if (months < 0) { months += 12; carry = 1; }
        years -= carry;

        return { years: years, months: months, days: days, hours: hours, minutes: minutes, seconds: seconds };
    }

    function tick() {
        var d = diff(new Date(), START_DATE);
        var ids = { years: 'timer-years', months: 'timer-months', days: 'timer-days',
                    hours: 'timer-hours', minutes: 'timer-minutes', seconds: 'timer-seconds' };
        var labels = { years: 'timer-years', months: 'timer-months', days: 'timer-days',
                       hours: 'timer-hours', minutes: 'timer-minutes', seconds: 'timer-seconds' };

        var lang = 'ru';
        if (window.DuckGramI18n && window.DuckGramI18n.getLang) {
            lang = window.DuckGramI18n.getLang();
        }
        var dict = (lang === 'en') ? labelsEn : labelsRu;

        for (var key in ids) {
            var el = document.getElementById(ids[key]);
            if (el) {
                el.textContent = pad(d[key]);
            }
        }
        for (var lkey in labels) {
            var labelEl = document.querySelector('#about-timer .timer-label[data-unit="' + lkey + '"]');
            if (labelEl && dict[lkey]) {
                labelEl.textContent = dict[lkey](d[lkey]);
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        if (!document.getElementById('about-timer')) return;
        tick();
        setInterval(tick, 1000);
    });
})();