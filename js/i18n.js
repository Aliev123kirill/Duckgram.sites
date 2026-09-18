/* ============================================================
   DUCKGRAM — мультиязычность (RU / EN)
   Использование: data-i18n="ключ" на элементах с текстом
   ============================================================ */

(function () {
    'use strict';

    var translations = {
        ru: {
            // Навигация
            'nav.home': 'Главное',
            'nav.about': 'О нас',
            'nav.faq': 'Вопросы и ответы',
            'nav.privacy': 'Политика',
            'nav.download': 'Скачать',
            'nav.license': 'Лицензионное соглашение',
            'lang.switch': 'EN',

            // Главная — блок 1
            'home.idea.title': 'Основная идея',
            'home.about.p1': 'DuckGram — это современная, лёгкая и быстрая десктопная платформа для общения, созданная на основе Telegram, но полностью переосмысленная. Мы убрали всё лишнее, усилили важное и добавили собственные технологии обхода блокировок, чтобы вы всегда оставались на связи.',
            'home.about.p2': 'DuckGram — это не просто клиент Telegram. Это символ свободы общения, скорости и минимализма. Каждая деталь интерфейса продумана так, чтобы не отвлекать — только чистая коммуникация и стабильная работа даже на слабых устройствах.',

            // Главная — блок 2
            'home.comfort.p1': 'Ваше удобство — наша забота.',
            'home.comfort.p2': 'Мы стремимся обходить замедления и блокировки уникальными методами, разработанными самостоятельно.',
            'home.comfort.p3': 'Наша команда не стоит на месте и постоянно развивается,',
            'home.comfort.p4': 'чтобы ваш Телеграм работал как часы,',
            'home.comfort.p5': 'летал как самолёт и был неубиваем, как ракета.',

            // Главная — особенности
            'home.features.title': 'Наши особенности',
            'home.features.item': 'Каковы ваши главные особенности?',
            'home.features.more': 'Подробнее',
            'home.features.btn3': 'О нас',
            'home.features.note': 'Проект <strong>не зарабатывает</strong> и держится на бесплатных решениях — сайт может работать некорректно. Мы стараемся работать над безопасностью и стабильностью в основном приложении.',
            'home.features.notewhy': '* Именно поэтому мы не стали делать веб-решение: пришлось бы арендовать сервер и обеспечивать стабильную работу и защиту от DDoS, а это всё стоит денег. Поэтому мы выбрали desktop-решение.',
            'home.features.btnMore': 'Подробнее',
            'home.features.btnGithub': 'GitHub',
            'home.features.card2.toggle': 'Открыть канал',
            'home.features.card2.p1': 'Наш Telegram-канал, где мы публикуем новости Telegram и интернета в целом, а также рассказываем о нашем развитии.',
            'home.features.card2.link': 'Подписаться',
            'home.features.card1.p1': 'Уникальность нашей технологии — в локальном подходе к обходу: когда стандартный DNS отдаёт недоступный адрес, DuckGram Fix находит рабочий IP из официального пула Telegram и применяет его прямо на устройстве. Никаких прокси, VPN и арендованных серверов. Сейчас механизм работает на Windows, и мы ищем способ расширить его на другие системы.',
            'home.features.card4.note': 'Мы соблюдаем и уважаем правила Telegram, поэтому у нас есть собственный GitHub.',
            'home.img.unavailable': 'Изображение недоступно',

            // Политика
            'privacy.title': 'Политика конфиденциальности',
            'privacy.section1': '1. Основные понятия',
            'privacy.section2': '2. Общие положения',
            'privacy.section3': '3. Сбор, обработка и защита персональных данных',
            'privacy.section4': '4. Политика использования Cookie',
            'privacy.section5': '5. Передача данных третьим лицам',
            'privacy.section6': '6. Безопасность и бесплатность Приложения',
            'privacy.section7': '7. Дополнительные положения',
            'privacy.section8': 'Контактная информация',
            'privacy.resources.title': 'Наши ресурсы',
            'privacy.resources.intro': 'Следите за обновлениями и присоединяйтесь к нашему сообществу:',
            'privacy.resources.github': 'GitHub — исходный код',
            'privacy.resources.telegram': 'Telegram — канал',
            'privacy.contact.other': 'По вопросам, связанным с аккаунтом Telegram, необходимо обращаться в официальную службу поддержки Telegram.',
            'privacy.contact.intro': 'По всем вопросам, связанным с Приложением, вы можете обратиться к нам через:',
            'policy.1.1': '<strong>Приложение</strong> — неофициальный десктопный клиент для мессенджера Telegram.',
            'policy.1.2': '<strong>Пользователь</strong> — лицо, имеющее доступ к Приложению посредством сети Интернет.',
            'policy.1.3': '<strong>Оператор</strong> — администратор или разработчик Приложения.',
            'policy.2.1': 'Настоящая Политика конфиденциальности (далее — Политика) разработана в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных» и действует в отношении персональных данных в понимании применимого законодательства и определяет порядок сбора, обработки и защиты информации о физических лицах, использующих Приложение.',
            'policy.2.2': 'Целью настоящей Политики является обеспечение защиты прав и свобод человека (Пользователя) и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну, от несанкционированного доступа и разглашения.',
            'policy.2.3': 'Использование Приложения осуществляется в полном соответствии с официальными правилами мессенджера Telegram. Пользователь обязуется ознакомиться с <a href="https://telegram.org/tos">Официальными условиями использования Telegram</a> и <a href="https://telegram.org/privacy">Политикой конфиденциальности Telegram</a>, которые являются неотъемлемой частью регулирования отношений между Пользователем и Telegram Messenger Inc. Настоящее Приложение является неофициальным клиентом и не аффилировано с Telegram Messenger Inc.',
            'policy.3.1': 'Оператор не имеет доступа к данным Пользователя и не осуществляет сбор, обработку, хранение или использование персональных данных.',
            'policy.3.2': 'Данные, которые используются при работе Приложения, зашифрованы и безопасно передаются по защищенному протоколу напрямую в Telegram Messenger через официальное <a href="https://core.telegram.org/api">Telegram API</a>.',
            'policy.3.3': 'Оператор не контролирует данные, переданные через Telegram API, и любые другие данные Пользователя при использовании Приложения.',
            'policy.3.4': 'Используя Приложение, Пользователь соглашается с настоящей Политикой, а также со всеми официальными правилами мессенджера Telegram, которому передает данные, включая <a href="https://core.telegram.org/api/terms">Условия использования Telegram API</a>.',
            'policy.4.1': 'Cookie — это небольшие текстовые файлы, размещаемые на компьютере Пользователя. Они широко используются для того, чтобы Приложение и сторонние сервисы могли работать эффективнее.',
            'policy.4.2': 'Приложение или сторонние сервисы, указанные в п. 5.2 настоящей Политики, могут использовать cookie-файлы.',
            'policy.4.3': 'Пользователь выражает свое согласие с обработкой cookie-файлов и положениями настоящей Политики во время использования Приложения.',
            'policy.4.4': 'Данные cookie-файлов могут храниться столько времени, сколько это необходимо для работы Приложения или сторонних сервисов, указанных в п. 5.2 настоящей Политики.',
            'policy.4.5': 'Пользователь может самостоятельно настроить приём или блокировку cookie-файлов. Невозможность принимать cookie-файлы может частично или полностью ограничить некоторые функции Приложения или сторонних сервисов, указанных в п. 5.2 настоящей Политики.',
            'policy.5.1': 'Оператор не собирает и не передает персональные данные пользователей третьим лицам (подробнее см. пункт 3 настоящей Политики).',
            'policy.5.2': 'Сторонние сервисы, которые Оператор использует для работы Приложения, могут самостоятельно собирать и обрабатывать обезличенную статистическую информацию. Такие сервисы перечислены далее: <ul style="list-style: disc; padding-left: 24px; margin-top: 8px;"><li><a href="https://www.cloudflare.com">Cloudflare</a> — DNS сервис для улучшения безопасности;</li><li><a href="https://yandex.ru/adv">Рекламная Сеть Яндекса</a> — сервис для показа рекламы.</li></ul>',
            'policy.5.3': '<strong>Финансовые операции и покупки.</strong> Приложение предоставляет доступ к функциям Telegram, включая возможность приобретения продуктов и услуг (в том числе Telegram Premium, Telegram Stars и иных цифровых товаров), предлагаемых непосредственно Telegram Messenger Inc. или сторонними поставщиками через платформу Telegram.',
            'policy.5.4': 'Оператор не получает никаких денежных средств от Пользователей при совершении каких-либо покупок через Приложение. Все финансовые транзакции осуществляются исключительно между Пользователем и Telegram Messenger Inc. либо соответствующим сторонним поставщиком товаров или услуг.',
            'policy.5.5': 'Оператор не несет ответственности за качество, доступность, соответствие, безопасность или любые иные аспекты товаров и услуг, приобретаемых Пользователем через Приложение, включая, но не ограничиваясь: Telegram Premium, Telegram Stars, подписки, цифровые товары, внутренние покупки в мини-приложениях и ботах, а также любые иные платные функции экосистемы Telegram.',
            'policy.5.6': 'Любые споры, связанные с оплатой, возвратом средств, неисполнением или ненадлежащим исполнением обязательств по предоставлению товаров и услуг, подлежат разрешению между Пользователем и соответствующей стороной (Telegram Messenger Inc. или третьим лицом). Оператор не является стороной таких правоотношений.',
            'policy.6.1': 'Оператор заявляет, что настоящее Приложение является полностью бесплатным для использования. Оператор не взимает плату за доступ к Приложению, его функциональность или использование.',
            'policy.6.2': 'Приложение является безопасным в части обработки данных Пользователя: все соединения осуществляются по защищенному протоколу, а передаваемые данные шифруются в соответствии со стандартами безопасности Telegram.',
            'policy.6.3': 'Приложение опирается на базовые правила и стандарты основного мессенджера Telegram (Duckgram), включая требования к конфиденциальности, безопасности и функциональности, установленные официальными документами Telegram: <a href="https://telegram.org/tos">Terms of Service</a>, <a href="https://telegram.org/privacy">Privacy Policy</a> и <a href="https://core.telegram.org/api/terms">API Terms of Service</a>.',
            'policy.6.4': 'При использовании настоящего Приложения вся ответственность за его работу ложится на Пользователя. Разработчики DuckGram не принимают на себя ответственность за компьютер или устройство Пользователя в случаях, когда Приложение, включая функцию DuckGram Fix, не работает или работает некорректно.',
            'policy.7.1': 'В настоящую Политику могут быть внесены изменения. Оператор имеет право вносить изменения по своему усмотрению и без предварительного уведомления Пользователей.',
            'policy.7.2': 'Вопросы и предложения, касающиеся исполнения или изменения настоящей Политики, Пользователь вправе направить Оператору любым доступным способом, указанным в п. 8 «Контактная информация».',
            'policy.7.3': 'Действующая редакция настоящей Политики доступна в Приложении в разделе «Политика конфиденциальности».',
            'policy.contact.tg': '<a href="https://t.me/DuckgramforTG" target="_blank">Telegram-канал DuckGram</a>',
            'policy.contact.gh': '<a href="https://github.com/Aliev123kirill/Duckgram" target="_blank">GitHub-репозиторий</a>',

            // FAQ
            'faq.title': 'Часто задаваемые вопросы',
            'faq.q1': '1. Что такое DuckGram?',
            'faq.q2': '2. DuckGram — это веб-версия Telegram?',
            'faq.q3': '3. Почему DuckGram основан на веб-технологиях?',
            'faq.q4': '4. DuckGram использует Telegram Web?',
            'faq.q5': '5. Что делает DuckGram Fix?',
            'faq.q6': '6. Можно ли включить DuckGram Fix для других программ?',
            'faq.q7': '7. DuckGram заменяет VPN?',
            'faq.q8': '8. Почему нет мобильной версии?',
            'faq.q9': '9. Будет ли DuckGram на Linux?',
            'faq.q10': '10. Почему DuckGram долго запускается?',
            'faq.q11': '11. DuckGram безопасен?',
            'faq.q12': '12. DuckGram хранит сообщения?',
            'faq.q13': '13. Можно ли пользоваться DuckGram без DuckGram Fix?',
            'faq.q14': '14. Поддерживает ли DuckGram прокси?',
            'faq.q15': '15. Можно ли отключить DuckGram Fix вручную?',
            'faq.q16': '16. DuckGram работает на слабых ПК?',
            'faq.q17': '17. Будет ли DuckGram на macOS?',
            'faq.q18': '18. DuckGram использует WebRTC?',
            'faq.q19': '19. DuckGram поддерживает темы?',
            'faq.q20': '20. Можно ли менять иконки DuckGram?',
            'faq.q21': '21. DuckGram обновляется автоматически?',
            'faq.q22': '22. DuckGram работает без установки?',
            'faq.q23': '23. DuckGram использует кэш?',
            'faq.q24': '24. DuckGram может работать офлайн?',
            'faq.q25': '25. DuckGram поддерживает несколько аккаунтов?',
            'faq.q26': '26. DuckGram использует WebAssembly?',
            'faq.q27': '27. Можно ли подключить свои модули?',
            'faq.q28': '28. DuckGram имеет собственный API?',
            'faq.q29': '29. DuckGram собирает статистику?',
            'faq.q30': '30. Когда выйдет версия на Rust?',

            // Общее
            'back.home': 'Вернуться на главную',
            // Лицензионное соглашение и архивные версии (тексты страниц — замените на свои)
            'license.title': 'Лицензионное соглашение',
            'license.text': 'Здесь будет размещён текст лицензионного соглашения DuckGram Messenger. Этот раздел временный и будет заполнен позже.',
            'archive.title': 'Архивные версии',
            'archive.text': 'Тут будут архивные версии DuckGram Messenger (предыдущих версий). Раздел находится в разработке — старые сборки появятся здесь в ближайшее время.',
            'about.title': 'О нас',
            'banner.title': 'Обратите внимание',
            'banner.text': 'Данный проект <strong>никак не зарабатывает</strong> и держится на бесплатных решениях, поэтому сайт может работать некорректно и имеет такой странный домен. При этом мы стараемся работать над безопасностью и стабильностью в основном приложении.',
            'banner.note': '* Именно поэтому мы не стали делать веб-решение: пришлось бы арендовать сервер и обеспечивать стабильную работу и защиту от DDoS, а это всё стоит денег. Поэтому мы выбрали desktop-решение.',
            'fix.title': 'Как работает DuckGram Fix',
            'fix.zoom.hint': 'Нажмите, чтобы увеличить',
            'fix.intro': 'DuckGram Fix — локальная утилита для Windows, которая помогает Telegram работать, когда стандартный DNS отдаёт недоступный адрес. Всё выполняется на вашем компьютере: без аренды сервера, без VPN и без прокси.',
            'fix.why': 'Почему Telegram может не открываться',
            'fix.whyP': 'Иногда DNS возвращает IP-адрес Telegram, к которому по порту 443 соединение не устанавливается — провайдер режет именно этот адрес. Утилита умеет найти в пуле Telegram другой рабочий адрес и прописать его локально.',
            'fix.find': 'Как утилита ищет рабочий IP',
            'fix.findP': 'Сначала обновляется список кандидатов из официальных подсетей Telegram (cidr.txt с core.telegram.org; при недоступности — зеркала GitHub/jsDelivr или локальная копия в списках проекта). Затем утилита строит очередь из IP из файла и адресов, полученных через DNS и DNS-over-HTTPS, и параллельно проверяет порт 443. Найденный адрес принимается только после успешного TLS-рукопожатия — проверка сертификата выполняется так же, как при обычном HTTPS-соединении, для web.telegram.org и kws2.web.telegram.org. Рабочий IP сохраняется в файл telegram-web-ip.cfg, а неудачные кандидаты кэшируются, чтобы не проверять их повторно.',
            'fix.apply': 'Как fix записывается и отключается',
            'fix.applyP': 'При включении утилита делает резервную копию файла hosts (в папке backup/), удаляет свой старый блок и добавляет строки «IP домен» с маркером # telegram-web-fix для фиксированного списка доменов: web.telegram.org, webk и weba, WebSocket-хосты (kws*, zws*) и медиа-хосты (venus, pluto, aurora, vesta, flora). Сразу после этого сбрасывается DNS-кэш (ipconfig /flushdns). Отключение убирает только наш блок — остальные записи hosts не затрагиваются. После перезагрузки компьютера fix остаётся, пока не выключен.',
            'fix.sec': 'Безопасность',
            'fix.secP': 'Утилита меняет только локальный файл hosts на вашем ПК. Она не поднимает прокси и VPN, не подменяет сертификаты, не имеет своего сервера и не расшифровывает переписку: вы направляете известные домены Telegram на другой IP из официального пула Telegram. Данные берутся только из официальных подсетей, а валидность соединения подтверждается TLS-проверкой. По сути это открытые текстовые скрипты (.bat и .ps1), которые запускает штатный powershell.exe — без установки дополнительных программ.',
            'fix.limits': 'Ограничения (честно)',
            'fix.limitsP': 'Честно о границах: fix стабильно работает в большинстве случаев, но не является 100% гарантией. На результат могут влиять особенности вашего провайдера, нестабильность соединения и ограничения, действующие в вашей сети (например, белые списки). В таких ситуациях доступ к Telegram может оставаться нестабильным — это не магия и не «абсолютная защита», а наш механизм, который мы постоянно улучшаем.',
            'fix.advanced': 'Расширенная версия',
            'fix.advancedP': 'Тем, кому необходим полный доступ к контролю и не устраивают стандартные настройки, доступна расширенная утилита. Скачать её можно на странице загрузки.',
            'fix.advancedBtn': 'Перейти к загрузке',
            'fix.linux': 'Планы на будущее',
            'fix.linuxP': 'Несмотря на специфику обхода, в дальнейшем планируется выход версии утилиты для Linux, а затем — полноценного Telegram-клиента.',
            'about.story.title': 'Наша история',
            'about.story.p1': 'DuckGram начинался с простой идеи: общение не должно зависеть от прихотей блокировок и замедлений. Мы — два разработчика-энтузиаста, которые каждый день сталкивались с одной и той же проблемой — нестабильной связью там, где она нужна больше всего.',
            'about.story.p2': 'Вместо того чтобы ждать, пока всё «починится само», мы решили разобраться, как это работает. Так родился DuckGram Fix — наша технология обхода: она подбирает рабочий адрес из официального пула Telegram и применяет его прямо на устройстве. Без сторонних сервисов и сомнительных прокси.',
            'about.story.p3': 'Мы верим, что приватность и свобода общения — базовые права каждого. Поэтому DuckGram лёгкий, быстрый и открытый для идей: мы не спим над архитектурой по ночам, если после этого ваш мессенджер будет летать.',
            'about.story.p4': 'Сегодня мы продолжаем развиваться: улучшаем обход, ускоряем работу на слабых устройствах и слушаем каждого пользователя. DuckGram — это не просто клиент, это маленький бунт за честную и стабильную связь. И мы только начинаем.',
            'about.goal.title': 'Наша цель',
            'about.goal.p1': 'Дать каждому возможность общаться без барьеров. Чтобы телефон не лежал в столе, когда нужна связь, чтобы сообщение доходило мгновенно, а не «когда-нибудь». Мы строим DuckGram таким, каким хотели бы видеть его сами — надёжным, минималистичным и свободным.',
            'timer.caption': 'Мы с вами уже',
            'timer.sub': 'работаем над проектом в реальном времени',
            'footer.visitor': 'Вы посетитель №',

            // Страница загрузки
            'download.title': 'Скачать',
            'download.sub': 'Выберите удобный способ: портативная версия, классический установщик, расширенная утилита для самостоятельной настройки или резервный ZIP-архив. При первом запуске всё устанавливается автоматически, а после настройки fix работает даже после перезагрузки компьютера.',
            'download.zip.title': 'ZIP-архив (резервный)',
            'download.zip.desc': 'Если по каким-либо причинам не получается установить программу — скачайте ZIP-архив и распакуйте его в любую папку. У архива нет задержек запуска.',
            'download.zip.btn': 'Скачать ZIP',
            'download.portable.title': 'Портативная версия',
            'download.portable.desc': 'Один скачиваемый файл (.exe): запускается без установки и сразу готов к работе.',
            'download.portable.note': 'Из-за своей специфики portable-версия не устанавливается, а распаковывает свои данные во временную папку при каждом запуске, поэтому работает медленнее: первый запуск занимает до 10 минут, а после настройки fix — до 5 минут.',
            'download.portable.btn': 'Скачать portable',
            'download.exe.title': 'Классический установщик (EXE)',
            'download.exe.desc': 'EXE-инсталлятор для Windows: при первом запуске установит всё и сразу настроит. Далее fix работает автоматически, даже после перезагрузки компьютера — перенастраивать его не нужно.',
            'download.exe.btn': 'Скачать установщик',
            'download.fix.title': 'Расширенная утилита — DuckGram Fix',
            'download.fix.desc': 'Расширенная версия утилиты для тех, кто хочет всё настроить сам: включать и выключать fix, переписывать его параметры и использовать как угодно.',
            'download.fix.btn': 'Скачать утилиту',
            'download.icon.placeholder': 'Здесь будет иконка',

            'download.x86.title': 'Установщик для x86',
            'download.x86.desc': 'Отдельная сборка DuckGram для 32-битных систем (x86) — лёгкая и стабильная работа даже на старых компьютерах.',
            'download.x86.btn': 'Скачать x86',

            'download.archive.title': 'Архивные версии',
            'download.archive.desc': 'Все старые сборки DuckGram Messenger (предыдущих версий) — в одном месте.',
            'download.archive.btn': 'Перейти в архив'
        },
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.faq': 'FAQ',
            'nav.privacy': 'Privacy',
            'nav.download': 'Download',
            'nav.license': 'License Agreement',
            'lang.switch': 'RU',

            'home.idea.title': 'The Main Idea',
            'home.about.p1': 'DuckGram is a modern, lightweight and fast desktop communication platform, built on top of Telegram but completely reimagined. We removed everything unnecessary, strengthened what matters and added our own technologies to bypass blocks, so you always stay connected.',
            'home.about.p2': 'DuckGram is not just a Telegram client. It is a symbol of freedom of communication, speed and minimalism. Every interface detail is designed not to distract — only pure communication and stable work even on weak devices.',

            'home.comfort.p1': 'Your comfort is our concern.',
            'home.comfort.p2': 'We strive to bypass slowdowns and blocks with unique methods developed by ourselves.',
            'home.comfort.p3': 'Our team never stands still and constantly develops,',
            'home.comfort.p4': 'so your Telegram works like clockwork,',
            'home.comfort.p5': 'flies like a plane and is as tough as a rocket.',

            'home.features.title': 'Our Features',
            'home.features.item': 'What are our main features?',
            'home.features.more': 'Details',
            'home.features.btn3': 'About us',
            'home.features.note': 'The project <strong>does not earn money</strong> and relies on free solutions — the site may work incorrectly. We are trying to work on security and stability in the main application.',
            'home.features.notewhy': '* That is exactly why we didn\'t build a web solution: we would have to rent a server and ensure stable operation and DDoS protection, all of which costs money. That\'s why we chose a desktop solution.',
            'home.features.btnMore': 'Details',
            'home.features.btnGithub': 'GitHub',
            'home.features.card2.toggle': 'Open channel',
            'home.features.card2.p1': 'Our Telegram channel, where we publish news about Telegram and the internet in general, and also talk about our development.',
            'home.features.card2.link': 'Subscribe',
            'home.features.card1.p1': 'The uniqueness of our technology lies in the local approach to bypassing: when standard DNS returns an unreachable address, DuckGram Fix finds a working IP from Telegram\'s official pool and applies it right on the device. No proxies, no VPN and no rented servers. Right now the mechanism works on Windows, and we are looking for a way to extend it to other systems.',
            'home.features.card4.note': 'We comply with and respect the Telegram rules, which is why we have our own GitHub.',
            'home.img.unavailable': 'Image unavailable',

            'privacy.title': 'Privacy Policy',
            'privacy.section1': '1. Basic Terms',
            'privacy.section2': '2. General Provisions',
            'privacy.section3': '3. Collection, Processing and Protection of Personal Data',
            'privacy.section4': '4. Cookie Policy',
            'privacy.section5': '5. Transfer of Data to Third Parties',
            'privacy.section6': '6. Security and Free Nature of the Application',
            'privacy.section7': '7. Additional Provisions',
            'privacy.section8': 'Contact Information',
            'privacy.resources.title': 'Our Resources',
            'privacy.resources.intro': 'Stay updated and join our community:',
            'privacy.resources.github': 'GitHub — source code',
            'privacy.resources.telegram': 'Telegram — channel',
            'privacy.contact.other': 'For questions related to your Telegram account, please contact the official Telegram support service.',
            'privacy.contact.intro': 'For any questions related to the Application, you can contact us through:',
            'policy.1.1': '<strong>Application</strong> — an unofficial desktop client for the Telegram messenger.',
            'policy.1.2': '<strong>User</strong> — a person who has access to the Application via the Internet.',
            'policy.1.3': '<strong>Operator</strong> — the administrator or developer of the Application.',
            'policy.2.1': 'This Privacy Policy (hereinafter — the Policy) has been developed in accordance with the Federal Law of 27.07.2006 No. 152-FZ "On Personal Data" and applies to personal data as understood by applicable legislation. It defines the procedure for collecting, processing and protecting information about individuals using the Application.',
            'policy.2.2': 'The purpose of this Policy is to ensure the protection of the rights and freedoms of a person (the User) and a citizen during the processing of their personal data, including the protection of the rights to privacy, personal and family secrets, from unauthorized access and disclosure.',
            'policy.2.3': 'The use of the Application is carried out in full compliance with the official rules of the Telegram messenger. The User undertakes to review the <a href="https://telegram.org/tos">Official Terms of Service of Telegram</a> and the <a href="https://telegram.org/privacy">Telegram Privacy Policy</a>, which are an integral part of regulating the relationship between the User and Telegram Messenger Inc. This Application is an unofficial client and is not affiliated with Telegram Messenger Inc.',
            'policy.3.1': 'The Operator has no access to the User data and does not collect, process, store or use personal data.',
            'policy.3.2': 'The data used during the operation of the Application is encrypted and securely transmitted over a protected protocol directly to Telegram Messenger through the official <a href="https://core.telegram.org/api">Telegram API</a>.',
            'policy.3.3': 'The Operator does not control the data transmitted through the Telegram API or any other User data when using the Application.',
            'policy.3.4': 'By using the Application, the User agrees to this Policy, as well as to all official rules of the Telegram messenger to which the data is transferred, including the <a href="https://core.telegram.org/api/terms">Telegram API Terms of Use</a>.',
            'policy.4.1': 'Cookies are small text files placed on the User computer. They are widely used so that the Application and third-party services can work more efficiently.',
            'policy.4.2': 'The Application or third-party services specified in item 5.2 of this Policy may use cookies.',
            'policy.4.3': 'The User expresses their consent to the processing of cookies and the provisions of this Policy while using the Application.',
            'policy.4.4': 'Cookie data may be stored for as long as necessary for the operation of the Application or the third-party services specified in item 5.2 of this Policy.',
            'policy.4.5': 'The User can configure the acceptance or blocking of cookies on their own. The inability to accept cookies may partially or fully limit some functions of the Application or the third-party services specified in item 5.2 of this Policy.',
            'policy.5.1': 'The Operator does not collect or transfer the personal data of users to third parties (see item 3 of this Policy for details).',
            'policy.5.2': 'Third-party services that the Operator uses to run the Application may independently collect and process anonymized statistical information. Such services are listed below: <ul style="list-style: disc; padding-left: 24px; margin-top: 8px;"><li><a href="https://www.cloudflare.com">Cloudflare</a> — DNS service to improve security;</li><li><a href="https://yandex.ru/adv">Yandex Advertising Network</a> — service for showing ads.</li></ul>',
            'policy.5.3': '<strong>Financial transactions and purchases.</strong> The Application provides access to Telegram features, including the ability to purchase products and services (including Telegram Premium, Telegram Stars and other digital goods) offered directly by Telegram Messenger Inc. or third-party providers through the Telegram platform.',
            'policy.5.4': 'The Operator does not receive any money from Users when making any purchases through the Application. All financial transactions are carried out exclusively between the User and Telegram Messenger Inc. or the relevant third-party provider of goods or services.',
            'policy.5.5': 'The Operator is not responsible for the quality, availability, compliance, security or any other aspects of goods and services purchased by the User through the Application, including but not limited to: Telegram Premium, Telegram Stars, subscriptions, digital goods, in-app purchases in mini-apps and bots, as well as any other paid features of the Telegram ecosystem.',
            'policy.5.6': 'Any disputes related to payment, refunds, non-fulfillment or improper fulfillment of obligations to provide goods and services are to be resolved between the User and the relevant party (Telegram Messenger Inc. or a third party). The Operator is not a party to such legal relations.',
            'policy.6.1': 'The Operator declares that this Application is completely free to use. The Operator does not charge any fees for access to the Application, its functionality or use.',
            'policy.6.2': 'The Application is safe with regard to the processing of User data: all connections are made over a protected protocol, and the transmitted data is encrypted in accordance with Telegram security standards.',
            'policy.6.3': 'The Application relies on the basic rules and standards of the main Telegram messenger (Duckgram), including the confidentiality, security and functionality requirements established by official Telegram documents: <a href="https://telegram.org/tos">Terms of Service</a>, <a href="https://telegram.org/privacy">Privacy Policy</a> and <a href="https://core.telegram.org/api/terms">API Terms of Service</a>.',
            'policy.6.4': 'When using this Application, the User bears full responsibility for its operation. The DuckGram developers do not accept responsibility for the User\'s computer or device in cases where the Application, including the DuckGram Fix feature, does not work or works incorrectly.',
            'policy.7.1': 'Changes may be made to this Policy. The Operator has the right to make changes at its own discretion and without prior notice to Users.',
            'policy.7.2': 'Questions and suggestions regarding the implementation or amendment of this Policy may be sent by the User to the Operator by any available means specified in item 8 "Contact Information".',
            'policy.7.3': 'The current version of this Policy is available in the Application in the "Privacy Policy" section.',
            'policy.contact.tg': '<a href="https://t.me/DuckgramforTG" target="_blank">DuckGram Telegram channel</a>',
            'policy.contact.gh': '<a href="https://github.com/Aliev123kirill/Duckgram" target="_blank">GitHub repository</a>',

            'faq.title': 'Frequently Asked Questions',
            'faq.q1': '1. What is DuckGram?',
            'faq.q2': '2. Is DuckGram a web version of Telegram?',
            'faq.q3': '3. Why is DuckGram based on web technologies?',
            'faq.q4': '4. Does DuckGram use Telegram Web?',
            'faq.q5': '5. What does DuckGram Fix do?',
            'faq.q6': '6. Can DuckGram Fix be enabled for other programs?',
            'faq.q7': '7. Does DuckGram replace a VPN?',
            'faq.q8': '8. Why is there no mobile version?',
            'faq.q9': '9. Will DuckGram be available on Linux?',
            'faq.q10': '10. Why does DuckGram start slowly?',
            'faq.q11': '11. Is DuckGram secure?',
            'faq.q12': '12. Does DuckGram store messages?',
            'faq.q13': '13. Can DuckGram be used without DuckGram Fix?',
            'faq.q14': '14. Does DuckGram support proxies?',
            'faq.q15': '15. Can DuckGram Fix be turned off manually?',
            'faq.q16': '16. Does DuckGram work on weak PCs?',
            'faq.q17': '17. Will DuckGram be available on macOS?',
            'faq.q18': '18. Does DuckGram use WebRTC?',
            'faq.q19': '19. Does DuckGram support themes?',
            'faq.q20': '20. Can DuckGram icons be changed?',
            'faq.q21': '21. Does DuckGram update automatically?',
            'faq.q22': '22. Does DuckGram work without installation?',
            'faq.q23': '23. Does DuckGram use a cache?',
            'faq.q24': '24. Can DuckGram work offline?',
            'faq.q25': '25. Does DuckGram support multiple accounts?',
            'faq.q26': '26. Does DuckGram use WebAssembly?',
            'faq.q27': '27. Can I connect my own modules?',
            'faq.q28': '28. Does DuckGram have its own API?',
            'faq.q29': '29. Does DuckGram collect statistics?',
            'faq.q30': '30. When will the Rust version come out?',

            'back.home': 'Back to home',
            'back.download': 'Back to download page',
            'license.title': 'License Agreement',
            'license.text': 'The license agreement text for DuckGram Messenger will be here. This section is temporary and will be filled later.',
            'archive.title': 'Archive versions',
            'archive.text': 'Archive versions of DuckGram Messenger (previous versions) will be here. The section is under development — old builds will appear soon.',
            'about.title': 'About Us',
            'banner.title': 'Please note',
            'banner.text': 'This project <strong>does not earn any money</strong> and relies on free solutions, so the site may work incorrectly and has such a strange domain. At the same time, we are trying to work on security and stability in the main application.',
            'banner.note': '* That is exactly why we didn\'t build a web solution: we would have to rent a server and ensure stable operation and DDoS protection, all of which costs money. That\'s why we chose a desktop solution.',
            'fix.title': 'How DuckGram Fix works',
            'fix.zoom.hint': 'Click to enlarge',
            'fix.intro': 'DuckGram Fix is a local Windows utility that helps Telegram keep working when standard DNS returns an unreachable address. Everything runs on your computer: no rented server, no VPN and no proxies.',
            'fix.why': 'Why Telegram may fail to open',
            'fix.whyP': 'Sometimes DNS returns a Telegram IP address that cannot be reached over port 443 — the provider blocks that exact address. The utility finds another working address from Telegram\'s own pool and writes it locally.',
            'fix.find': 'How the utility finds a working IP',
            'fix.findP': 'First, the candidate list is refreshed from Telegram\'s official subnets (cidr.txt from core.telegram.org; when unavailable, GitHub/jsDelivr mirrors or a bundled local copy in the project lists). Then the utility builds a queue from the file\'s IPs plus addresses obtained via DNS and DNS-over-HTTPS, and checks port 443 in parallel. An address is accepted only after a successful TLS handshake — the certificate is verified just like in a normal HTTPS connection — for web.telegram.org and kws2.web.telegram.org. The working IP is saved to telegram-web-ip.cfg and failed candidates are cached so they are not re-checked.',
            'fix.apply': 'How the fix is applied and disabled',
            'fix.applyP': 'When enabled, the utility backs up the hosts file (into the backup/ folder), removes its old block and adds \'IP domain\' lines with the # telegram-web-fix marker for a fixed domain list: web.telegram.org, webk and weba, WebSocket hosts (kws*, zws*) and media hosts (venus, pluto, aurora, vesta, flora). The DNS cache is flushed right after (ipconfig /flushdns). Disabling removes only our block — the rest of the hosts file is untouched. The fix survives computer restarts until disabled.',
            'fix.sec': 'Security',
            'fix.secP': 'The utility only modifies the local hosts file on your PC. It does not start a proxy or VPN, does not replace certificates, has no server of its own and does not decrypt anything: you simply point known Telegram domains to another IP from Telegram\'s official pool. Data comes only from official subnets and the connection is validated by a TLS check. It is essentially open text scripts (.bat and .ps1) run by the stock powershell.exe — nothing extra to install.',
            'fix.limits': 'Limitations (honestly)',
            'fix.limitsP': 'To be honest about the limits: the fix works reliably in most cases, but it is not a 100% guarantee. Your provider\'s specific policies, an unstable connection and restrictions applied in your network (such as whitelists) can affect the result. In such situations Telegram access may remain unstable — this is not magic and not \'absolute protection\', just our mechanism, which we keep improving.',
            'fix.advanced': 'Extended version',
            'fix.advancedP': 'For those who need full control and aren\'t satisfied with the standard settings, an extended utility is available. You can download it on the download page.',
            'fix.advancedBtn': 'Go to download',
            'fix.linux': 'Plans for the future',
            'fix.linuxP': 'Despite the specificity of the bypass, a Linux version of the utility is planned in the future, and later a full Telegram client.',
            'about.story.title': 'Our Story',
            'about.story.p1': 'DuckGram started with a simple idea: communication should not depend on the whims of blocks and slowdowns. We are two passionate developers who faced the same problem every day — unstable connection where it is needed most.',
            'about.story.p2': 'Instead of waiting for everything to "fix itself", we decided to figure out how it works. That is how DuckGram Fix was born — our bypass technology: it picks a working address from Telegram\'s official pool and applies it right on the device. No third-party services and no shady proxies.',
            'about.story.p3': 'We believe that privacy and freedom of communication are the basic rights of everyone. That is why DuckGram is light, fast and open to ideas: we do not lose sleep over the architecture if it makes your messenger fly afterwards.',
            'about.story.p4': 'Today we keep growing: we improve the bypass, speed up work on weak devices and listen to every user. DuckGram is not just a client — it is a small rebellion for honest and stable connection. And we are just getting started.',
            'about.goal.title': 'Our Goal',
            'about.goal.p1': 'To give everyone the ability to communicate without barriers. So that the phone does not stay in the drawer when you need connection, so that the message arrives instantly, not "someday". We build DuckGram the way we would like it to be ourselves — reliable, minimalist and free.',
            'timer.caption': 'We have been with you for',
            'timer.sub': 'working on the project in real time',
            'footer.visitor': 'You are visitor #',

            // Download page
            'download.title': 'Download',
            'download.sub': 'Pick the option that suits you: a portable version, a classic installer, the extended utility for manual setup or a fallback ZIP archive. Everything installs automatically on the first launch, and once configured the fix keeps working even after a PC restart.',
            'download.zip.title': 'ZIP archive (fallback)',
            'download.zip.desc': 'If for some reason you cannot install the program, download the ZIP archive and unpack it to any folder. The archive has no startup delays.',
            'download.zip.btn': 'Download ZIP',
            'download.portable.title': 'Portable version',
            'download.portable.desc': 'A single downloadable file (.exe): runs without installation and is ready to use right away.',
            'download.portable.note': 'Due to its specifics the portable version does not get installed but unpacks its data into the temp folder on every launch, so it runs slower: the first launch takes up to 10 minutes, and after the fix is configured up to 5 minutes.',
            'download.portable.btn': 'Download portable',
            'download.exe.title': 'Classic installer (EXE)',
            'download.exe.desc': 'An EXE installer for Windows: on the first run it installs and configures everything at once. After that the fix works automatically, even after a PC restart — no need to reconfigure.',
            'download.exe.btn': 'Download installer',
            'download.fix.title': 'Extended utility — DuckGram Fix',
            'download.fix.desc': 'The extended utility for those who want to configure everything themselves: enable and disable the fix, rewrite its settings and use it as you see fit.',
            'download.fix.btn': 'Download utility',
            'download.icon.placeholder': 'Icon will be here',

            'download.x86.title': 'x86 installer',
            'download.x86.desc': 'A separate DuckGram build for 32-bit (x86) systems — lightweight and stable even on old computers.',
            'download.x86.btn': 'Download x86',

            'download.archive.title': 'Archive versions',
            'download.archive.desc': 'All old DuckGram Messenger builds (previous versions) in one place.',
            'download.archive.btn': 'Open archive'
        }
    };

    var lang = localStorage.getItem('duckgram-lang') || 'ru';

    function setLang(l) {
        if (!translations[l]) l = 'ru';
        lang = l;
        localStorage.setItem('duckgram-lang', lang);
        document.documentElement.lang = (lang === 'en') ? 'en' : 'ru';
        apply();
    }

    function apply() {
        var dict = translations[lang];
        var nodes = document.querySelectorAll('[data-i18n], [data-i18n-html]');
        for (var i = 0; i < nodes.length; i++) {
            var el = nodes[i];
            var key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
            var useHtml = el.hasAttribute('data-i18n-html');
            if (dict[key] === undefined) continue;
            if (useHtml) {
                // Замена всего внутреннего HTML (поддержка <a>, <strong> и т.д.)
                if (el.innerHTML !== dict[key]) {
                    el.innerHTML = dict[key];
                }
                continue;
            }
            // Замена только прямыми текстовыми узлами (сохраняем вложенные <a>/<strong>)
            var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
                var node = walker.currentNode;
                if (node.nodeValue.trim()) {
                    node.nodeValue = dict[key];
                    break;
                }
            }
        }
        // Кнопка переключения
        var btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Russian' : 'Switch to English');
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Кнопка переключения языка
        var btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                setLang(lang === 'ru' ? 'en' : 'ru');
            });
        }
        setLang(lang);
    });

    window.DuckGramI18n = {
        setLang: setLang,
        getLang: function () { return lang; }
    };
})();
