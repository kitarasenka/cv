# kitarasenka / cv

Статический сайт-визитка с проектами, RU/EN. Без сборки — чистые HTML/CSS/JS.

- Тексты, проекты, ссылки — всё в [app.js](app.js) (блоки `UI`, `PRODUCTS`, `BOTS`, `INFRA`).
- Фото: положи `assets/photo.jpg` (квадратное, от 600×600). Пока файла нет, показываются инициалы.
- CV: `cv/Kiryl_Tarasenka_CV_RU.pdf` и `cv/Kiryl_Tarasenka_CV_EN.pdf` — кнопка «Скачать CV» берёт файл по текущему языку.
- Язык: `?lang=en` / `?lang=ru`, иначе запомненный выбор, иначе язык браузера.

Локально: `python3 -m http.server 8080` → http://localhost:8080

Публикация: GitHub → Settings → Pages → Deploy from branch `main`, папка `/ (root)`.
Сайт будет на https://kitarasenka.github.io/cv/
