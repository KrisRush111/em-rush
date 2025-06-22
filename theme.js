(function syncWebAppTheme() {
  const tg = window.Telegram.WebApp;

  window.addEventListener('load', () => {
    // Получаем текущий фон body
    const bodyStyles = getComputedStyle(document.body);
    const textColor = bodyStyles.color;

      const bgColor = getComputedStyle(document.body).backgroundColor;
    tg.setBackgroundColor(bgColor);

    // Фиксируем шапку чёрной с белым текстом
    tg.setHeaderColor("#000000");
    tg.setHeaderTextColor("#ffffff");

    // Устанавливаем фон WebView Telegram под фон страницы
    tg.setBackgroundColor(bgColor);

    // Опционально: установка цвета текста (если хочешь через JS)
    document.body.style.color = textColor;
  });
})();

