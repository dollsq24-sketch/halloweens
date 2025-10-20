document.addEventListener('DOMContentLoaded', () => {
    // Инициализируем API Telegram Web App
    const tg = window.Telegram.WebApp;
    tg.ready(); // Сообщаем Telegram, что приложение готово к отображению

    // Находим наше изображение по его уникальному ID
    const imageElement = document.getElementById('image-changer');

    // --- ВАЖНО: Замените эти URL на прямые ссылки на ваши изображения ---
    const firstImageUrl = 'https://disk.yandex.ru/i/6S1PVwlgCS7utw';
';
    const secondImageUrl = 'https://disk.yandex.ru/d/wWVR7aiTcjU7zA';

    // Устанавливаем начальное изображение (на случай, если в HTML оно не указано)
    imageElement.src = firstImageUrl;

    // Добавляем "слушателя" событий, который будет реагировать на клик
    imageElement.addEventListener('click', () => {
        // Проверяем, какая картинка сейчас отображается
        if (imageElement.src === firstImageUrl) {
            // Если первая, то меняем на вторую
            imageElement.src = secondImageUrl;
        } else {
            // Иначе — меняем обратно на первую
            imageElement.src = firstImageUrl;
        }
    });

    // Раскомментируйте этот блок, если хотите добавить кнопку для закрытия приложения
    /*
    tg.MainButton.setText('Закрыть');
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
        tg.close(); // Метод для закрытия Web App
    });
    */
});

