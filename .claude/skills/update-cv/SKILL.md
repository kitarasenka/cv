---
name: update-cv
description: Refresh the portfolio site (this repo) from the user's projects in ~/projects — new features, links, screenshots, new or removed bots. Use when the user runs /update-cv or asks "обнови визитку", "обнови сайт-визитку", "update the cv site", or similar. Optional argument narrows the scope, e.g. `/update-cv twig`.
---

Bring the site in line with the current state of the projects. All content is in `app.js`: `CV`, `CONTACTS`, `UI`, `STATS`, `PET_STATS`, `APPS`, `SKILLS`, `STACK`, `EXPERIENCE`, `PRODUCTS`, `BOTS` and `INFRA`. The page leads with commercial work: `APPS` (store apps where the user was team lead, with store links and ratings), `SKILLS` (each skill lists the project ids where it was used) and `EXPERIENCE` (every commercial project, grouped by company). Pet projects come after. For pet-project updates you normally touch only `PRODUCTS`, `BOTS` and `INFRA`, plus `STACK` if a project brings a new technology. Images go in `assets/img/`. Do not touch `index.html` or `styles.css` unless the layout itself has to change.

If an argument was passed (a project name), limit steps 2–4 to that project.

## Where the projects live

All paths are under `~/projects`:

| On the site | Source |
|---|---|
| BatBus | `nodes-managers/modules/bat_bus` (images: `site/public/og.png`, `site/public/logo-192.png`) |
| Twig | `twig` (screenshots `site/assets/shots/*.webp`, icon `build/icon.png`, site `site/`) |
| Сад-призрак / Ghost Garden | `garden` (cover `docs/telegram/miniapp-cover-640x360.png`, `GhostGarden_GDD.md`, `README.md`) |
| Nodex | `nodes-managers` (`README.md`, `CLAUDE.md`) |
| Mafia Club | `nodes-managers/modules/mafia_club` (and `maf/`, `mafhub/`) |
| TripPay | `nodes-managers/modules/trip-pay` |
| All Notificator | `nodes-managers/modules/all_notificator` |
| Captcha | `nodes-managers/modules/captcha` |
| Searcher | `nodes-managers/modules/searcher` |
| Translator | `nodes-managers/modules/translator` |
| tg-dis-connector | `nodes-managers/modules/tg-dis-connector` |
| tg_poster | `nodes-managers/modules/tg_poster` |
| Tuna | `nodes-managers/modules/tuna` |

Every folder in `nodes-managers/modules/` is a candidate for the BOTS block. A folder that is not on the site (for example `cc_bridge`) is a new project, so ask whether to add it.

## Steps

1. **Find what changed since the last update.** Get the date of the last commit that touched `app.js`:
   ```bash
   git -C ~/projects/cv log -1 --format=%cI -- app.js
   ```
   For each source, run `git -C <repo> log --since=<date> --oneline -- <path>` and read the fresh `CHANGELOG.md` / `README.md` entries. `ls nodes-managers/modules` against `BOTS` shows new and removed bots. If the repo has no commits yet, treat everything as changed.

2. **Check facts.** Links (domains, `@handles`) come from the project's code and configs, such as the bot username in the config or `.env.example` and the domain in the site or Caddy config. Never take them from memory. Do not invent features. A user-visible change counts only if it is in the code or the changelog.

3. **Update `app.js`.**
   - Each description stays 1–2 sentences in the tone of the existing ones, and both `ru` and `en` are required. Tags stay short, 2–4 per card.
   - For a new bot, add an object with `emoji`, `name`, `handles` and `text: { ru, en }`. For a product, also add `image`, optionally `icon`, `tags` and `links`.
   - The "own projects" counter in the hero is computed from the length of PRODUCTS + BOTS + INFRA, so do not edit it by hand.

4. **Numbers.** Show only numbers that matter to a hiring manager: users, ratings, installs, languages, platforms. **Never show lines of code or commit counts**, because the user asked for them to be removed. BatBus users, MAU/WAU and 30-day sessions come only from the user (a screenshot of the Users screen in the BatBus admin). Do not read production to get them; ask the user instead. Update `PET_STATS` (BatBus users rounded down to thousands with `K+`) at the same time. Languages are counted from `miniapp/src/i18n/*.json`. The avg launch time (1.1 s) was given by the user. Store ratings and installs in `APPS` come from the public App Store (`https://itunes.apple.com/lookup?id=<id>`) and Google Play pages; update the month in `apps.note` when you refresh them.

5. **Images.** Copy only files that are tracked in the source repo (`git -C <repo> ls-files <file>` is not empty). Untracked screenshots may contain private data. Shrink them:
   ```bash
   sips -s format jpeg -s formatOptions 82 --resampleWidth 960 <src.png> --out assets/img/<name>.jpg
   ```
   Keep `.webp` files as they are. Each file should be at most ~250 KB.

   **SEO copies of the numbers.** The years, commercial/lead counts, Pulsebit installs and BatBus users are also written out in the `<head>` of `index.html` (description, og/twitter tags, JSON-LD), in `UI.*['meta.description']` in `app.js` and on the share image `assets/og.jpg` (1200×630). The static hero text in `index.html` repeats `UI.en['hero.*']` for crawlers without JS. When any of these change, update all copies. Re-render `og.jpg` with headless Chrome (`--window-size=1200,630 --screenshot`) from a page styled like the site, and bump `<lastmod>` in `sitemap.xml`.

6. **Check the result.** Serve the site with `python3 -m http.server 8765` (run in background). Dump the DOM through headless Chrome for `?lang=ru` and `?lang=en`:
   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --virtual-time-budget=3000 --dump-dom "http://localhost:8765/?lang=en"
   ```
   Every card must render and there must be no JS errors. For a visual check, take a screenshot with `--window-size=1280,3300 --force-prefers-reduced-motion --screenshot=<scratchpad>/shot.png`. Shrink it with `sips -Z 1000` to JPEG before viewing, because Read does not open large PNGs. Headless Chrome will not make a window narrower than ~500px. To check mobile, open the page in a 390px `<iframe>` on a temporary page and delete that page afterwards. Stop the server at the end.

7. **New CV (only if the user sent one).** The source `.docx` must never be committed (`*.docx` is in `.gitignore`). Before publishing, read it in full with `textutil -convert txt -stdout`. Clean it by editing the XML inside the docx:
   - remove the employer's letterhead and any confidentiality footer (replace the footer with `kitarasenka.github.io/cv`);
   - change client names to `NDA` and replace internal project code names with neutral wording;
   - spell the name as Kiryl Tarasenka.

   The exact list of what to remove is in Claude's private memory. **Do not write the removed names into any file in this repo**, because the repo is public.

   Convert to PDF through Microsoft Word (AppleScript `save as ... file format format PDF`, working in `~/Library/Containers/com.microsoft.Word/Data/Documents`). Save the result to `cv/Kiryl_Tarasenka_CV_EN.pdf`.

8. **Report.** Give a short list of what changed on the site and which project each change came from. Also list what you skipped and why, and any questions (new modules, links you could not confirm). Commit only if the user asks, using the `commit` / `commit-push` skills.
