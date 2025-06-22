(function syncWebAppTheme() {
  const tg = window.Telegram.WebApp;

  // Сразу ставим чёрный фон и белый цвет шапки без ожидания загрузки
  if (tg.setBackgroundColor) tg.setBackgroundColor('#000000');
  if (tg.setHeaderColor) tg.setHeaderColor('#000000');
  if (tg.setHeaderTextColor) tg.setHeaderTextColor('#ffffff');
  document.documentElement.style.backgroundColor = '#000000';
  document.documentElement.style.color = '#ffffff';
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = '#ffffff';

  // Также, когда страница загрузится, подстраиваем фон под body (если нужно)
  window.addEventListener('load', () => {
    const bodyStyles = getComputedStyle(document.body);
    const bgColor = bodyStyles.backgroundColor;
    const textColor = bodyStyles.color;

    // Если хочешь, чтобы фон Telegram совпадал с body после загрузки:
    tg.setBackgroundColor(bgColor);

    // Устанавливаем цвет текста на странице
    document.body.style.color = textColor;

    // Шапка всё равно фиксируем чёрной с белым текстом
    tg.setHeaderColor("#000000");
    tg.setHeaderTextColor("#ffffff");
  });
})();
