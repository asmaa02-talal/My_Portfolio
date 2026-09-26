// Apply the saved appearance before the first paint to avoid a theme flash.
(() => {
  let theme;
  let language;
  try {
    theme = localStorage.getItem('portfolio-theme');
    language = localStorage.getItem('portfolio-language');
  } catch { /* Storage may be disabled by the visitor. */ }
  document.documentElement.dataset.theme = theme === 'light' || theme === 'dark'
    ? theme : matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  document.documentElement.lang = language === 'fr' || language === 'en'
    ? language : navigator.language.startsWith('fr') ? 'fr' : 'en';
})();
