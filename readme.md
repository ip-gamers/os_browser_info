## Описание
Скрипт "Информация об операционной системе и браузере пользователя" представляет собой небольшой фрагмент кода на JavaScript, предназначенный для определения и отображения информации об операционной системе и веб-браузере пользователя при доступе к веб-странице через браузер. Он предоставляет ценную информацию о настройках системы пользователя, которая может быть полезна веб-разработчикам, аналитикам или при создании улучшенного пользовательского опыта.

## Функциональность:

1. Скрипт содержит две основные функции - getOSName() и getBrowserInfo(), отвечающие за определение операционной системы и информации о браузере соответственно.
2. Функция getOSName() использует свойство navigator.userAgent для доступа к строке User-Agent, которая содержит информацию о браузере и операционной системе пользователя.
3. Затем происходит анализ строки User-Agent для определения операционной системы пользователя, включая популярные, такие как Windows, macOS, Linux, Android и iOS, а также менее распространенные, такие как FreeBSD, OpenBSD, NetBSD, Solaris и другие.
4. В случае операционной системы Windows, функция также пытается определить конкретную версию Windows (например, Windows 10, Windows 8.1, Windows 7 и т.д.).
5. Функция getBrowserInfo() также использует свойство navigator.userAgent для анализа строки User-Agent и определения используемого пользователем веб-браузера.
6. Поддерживаемые браузеры включают Firefox, Opera, Microsoft Edge, Chrome и Safari.
7. После определения информации об операционной системе и браузере, скрипт выводит результаты на веб-страницу с помощью метода document.write().

## Использование:
Для использования скрипта, просто вставьте его внутрь HTML-страницы, предпочтительно в область между тегами <body>.

<script src="os_browser_info.js"></script>

Когда страница загружается в веб-браузере, скрипт автоматически определит операционную систему и браузер пользователя, и затем отобразит соответствующую информацию на странице.

Обратите внимание, что этот скрипт использует строку User-Agent, предоставленную браузером, которая не всегда может быть точной или последовательной в разных браузерах или устройствах. Кроме того, точность определения операционной системы может зависеть от строки User-Agent, отправленной браузером, которая иногда может быть изменена или скрыта расширениями браузера или пользовательскими настройками.

## Пример вывода:

Твоя ОС: Windows 10

Браузер: Chrome

Текущее время: 23 июля 2023 г., 12:34:56

## Примечание:
Этот скрипт предназначен для образовательных и информационных целей. Он может не учитывать все возможные комбинации операционных систем и браузеров, и следует использовать с осознанием потенциальных ограничений интерпретации строки User-Agent.

## Вклад в проект
Ссылка на тему поддержки: https://ip-gamers.net/topic/3222-skript-informacii-ob-operacionnoj-sisteme-i-brauzere-polzovatelja/

## Лицензия
Тип MIT

## Авторы
Основа Ryancoolround:
https://ip-gamers.net/profile/1-ryancoolround/