// theme.js
(function syncWebAppColorWithBody() {
  const tg = window.Telegram.WebApp;

  // Ждём полной загрузки страницы
  window.addEventListener('load', () => {
    const bgColor = getComputedStyle(document.body).backgroundColor;
    tg.setBackgroundColor(bgColor);
  });
})();
