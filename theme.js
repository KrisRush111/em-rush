(function syncWebAppTheme() {
  const tg = window.Telegram.WebApp;

  window.addEventListener('load', () => {
    // Получаем текущий фон body
    const bodyStyles = getComputedStyle(document.body);
    const bgColor = bodyStyles.backgroundColor;
    const textColor = bodyStyles.color;

    // Устанавливаем фон WebView Telegram под фон страницы
    tg.setBackgroundColor(bgColor);

    // Опционально: установка цвета текста (если хочешь через JS)
    document.body.style.color = textColor;
  });
})();
