(function themeInit() {
  const tg = window.Telegram.WebApp;

  tg.ready(); // сообщаем Telegram, что приложение готово

  // Сразу устанавливаем чёрный фон и белый текст
  if (tg.setBackgroundColor) tg.setBackgroundColor('#000000');
  if (tg.setHeaderColor) tg.setHeaderColor('#000000');
  if (tg.setHeaderTextColor) tg.setHeaderTextColor('#ffffff');
  document.documentElement.style.backgroundColor = '#000000';
  document.documentElement.style.color = '#ffffff';
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = '#ffffff';

  // Открываем приложение на весь экран
  tg.expand();

  // Включаем подтверждение закрытия (показывает крестик)
  tg.enableClosingConfirmation(true);

  // После полной загрузки страницы можно подстроить цвета, если надо
  window.addEventListener('load', () => {
    const bodyStyles = getComputedStyle(document.body);
    const bgColor = bodyStyles.backgroundColor;
    const textColor = bodyStyles.color;

    // Подстраиваем фон Telegram под body, если нужно
    tg.setBackgroundColor(bgColor);

    // Обновляем цвета текста на странице
    document.body.style.color = textColor;

    // Шапка остаётся чёрной с белым текстом
    tg.setHeaderColor('#000000');
    tg.setHeaderTextColor('#ffffff');
  });
})();
