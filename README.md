# kitarasenka / cv

Статический сайт-визитка с проектами, RU/EN. Без сборки — чистые HTML/CSS/JS.

- Тексты, проекты, ссылки — всё в [app.js](app.js) (блоки `UI`, `PRODUCTS`, `BOTS`, `INFRA`).
- Фото: `assets/photo.jpg` (квадратное, 720×720). Если файла нет, показываются инициалы.
- CV: `cv/Kiryl_Tarasenka_CV_EN.pdf` — публичная версия без шапки EPAM, «Confidential» и названий клиентов. Исходник `.docx` в git не попадает (`.gitignore`). Какой файл отдаёт кнопка на каждом языке — в `CV` в `app.js`.
- Язык: `?lang=en` / `?lang=ru`, иначе запомненный выбор, иначе язык браузера.

Локально: `python3 -m http.server 8080` → http://localhost:8080

Публикация: GitHub → Settings → Pages → Deploy from branch `main`, папка `/ (root)`.
Сайт будет на https://kitarasenka.github.io/cv/
