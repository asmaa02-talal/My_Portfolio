# Asmaa Talal — Portfolio

Responsive React + TypeScript + Vite portfolio, with lightweight canvas animation, interactive architecture, project filters, accessible native case-study dialogs, career timelines, and categorized skills.

## Run

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist` directory to any static host.

## GitHub Pages

The project includes `.github/workflows/deploy.yml`. For the account `asmaa02-talal`:

1. Create a public repository named `Portfolio`.
2. Push the project to its `main` branch, including `.github`, `public`, `src`, and the package lockfile. Exclude `node_modules` and `dist`.
3. In the repository, select **Settings → Pages → Source → GitHub Actions**.
4. In **Actions**, run **Publish portfolio to GitHub Pages** if the initial push happened before Pages was enabled.
5. After deployment succeeds, the site will be available at `https://asmaa02-talal.github.io/Portfolio/`.

Subsequent pushes to `main` automatically rebuild and publish the site. Relative asset paths support both repository subpaths and root hosting.

## Content and assets

The supplied brief is the source of truth. The supplied portrait is included as `public/asmaa-talal.png` and displayed in the About section. No original CV, LinkedIn URL, product screenshots, or measured project results were attached. The CV buttons currently open a clear email-request dialog. Replace that behavior in `src/main.tsx` with a download link when the real PDF is placed in `public/`. The DataVex interface is explicitly an illustrative concept, not an actual screenshot. Case study text distinguishes project objectives from verified results.

Project and skills content is defined in `src/main.tsx`. Styling is in `src/style.css`. Google Fonts has local system sans-serif fallbacks. Animations honor reduced motion; the site does not require a backend. Contact links use the visitor's email and telephone applications.

## Appearance and languages

The header includes a light/dark theme toggle and French/English selectors, including on mobile. Preferences are stored locally when browser storage is available. First-time visitors use their system color preference and browser language (French or English fallback). `public/preferences.js` applies the appearance before the page renders.

French translations live in `src/locales/fr.json`; English copy remains the source text. `src/i18n.tsx` manages preferences, document language and translated metadata. Light theme and selector styles are in `src/themes.css`. Filters, section anchors and project identifiers stay unchanged when switching languages.

DataVex is the PFA project at JAAG Advisory and includes regulatory rules from the EBA taxonomy. The emotion prediction project was completed during the PFI internship at Expertise Data. These details were supplied by the portfolio owner.
