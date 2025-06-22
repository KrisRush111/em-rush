(function themeInit() {
  const tg = window.Telegram.WebApp;

  // Сообщаем Telegram, что Web App готов
  tg.ready();

  // Разворачиваем Web App на весь экран
  tg.expand();

  // Устанавливаем фон и текстовые цвета (можно изменить)
  if (tg.setBackgroundColor) tg.setBackgroundColor('#000000');
  if (tg.setHeaderColor) tg.setHeaderColor('#000000');
  if (tg.setHeaderTextColor) tg.setHeaderTextColor('#ffffff');

  // Устанавливаем стили для HTML-документа
  document.documentElement.style.backgroundColor = '#000000';
  document.documentElement.style.color = '#ffffff';
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = '#ffffff';

  // Включаем предупреждение при закрытии
  tg.enableClosingConfirmation(true);

  // При полной загрузке страницы — проверим стили и адаптируем цвета Telegram
  window.addEventListener('load', () => {
    const bodyStyles = getComputedStyle(document.body);
    const bgColor = bodyStyles.backgroundColor;
    const textColor = bodyStyles.color;

    // Установим текущий фон и цвет текста Telegram WebApp
    if (tg.setBackgroundColor) tg.setBackgroundColor(bgColor);
    if (tg.setHeaderTextColor) tg.setHeaderTextColor(textColor);
  });
})();
