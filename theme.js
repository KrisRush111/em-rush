(function themeInit() {
  const tg = window.Telegram.WebApp;

  // Сообщаем Telegram, что приложение готово
  tg.ready();

  // ⚠️ НЕ вызываем tg.expand(), чтобы сохранить видимость хедера

  // Включаем подтверждение закрытия
  tg.enableClosingConfirmation(true);

  // Автоматически подстраиваем цвета хедера под текущую тему страницы
  window.addEventListener('load', () => {
    const bodyStyles = getComputedStyle(document.body);
    const bgColor = bodyStyles.background;
    const textColor = bodyStyles.color;

    if (tg.setHeaderColor) tg.setHeaderColor(bgColor);
    if (tg.setHeaderTextColor) tg.setHeaderTextColor(textColor);
  });
})();
