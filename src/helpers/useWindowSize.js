import { useEffect, useState } from 'react';

// Создаем кастомный хук useWindowSize
function useWindowSize(currentValue, currentTRX, currentSOL) {
    // Инициализируем состояние для текущей ширины окна
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    // Инициализируем состояние для значений прогресса
    const [progressValue, setProgressValue] = useState({
        SOL: 0,
        TRX: 0,
    });

    // Определяем ширину прогресс-бара для разных размеров экрана
    const progressBarWidth = {
        "1920": 529,
        "1440": 529,
        "1300": 429,
        "868": 250,
        "480": 149,
        "450": 120,
        "425": 120,
        "375": 100,
        "320": 100,
    };

    useEffect(() => {
        // Функция-обработчик изменения размера окна
        const handleResize = () => setCurrentWidth(window.innerWidth);

        // Добавляем слушатель события изменения размера окна
        window.addEventListener('resize', handleResize);

        // Функция для обновления значений прогресса
        const updateProgressValues = () => {
            // Рассчитываем проценты заполнения для SOL и TRX
            const fillPercentageSOL = Math.min((currentSOL / currentValue) * 100, 100);
            const fillPercentageTRX = Math.min((currentTRX / currentValue) * 100, 100);

            // Рассчитываем новые значения ширины прогресс-бара для SOL и TRX
            const newProgressValueSOL = (fillPercentageSOL / 100) * (progressBarWidth[currentWidth] || progressBarWidth["320"]);
            const newProgressValueTRX = (fillPercentageTRX / 100) * (progressBarWidth[currentWidth] || progressBarWidth["320"]);

            // Устанавливаем новое состояние для progressValue
            setProgressValue({
                SOL: newProgressValueSOL,
                TRX: newProgressValueTRX,
            });
        };

        // Вызываем функцию обновления значений прогресса при монтировании компонента и при изменении ширины окна
        updateProgressValues();

        // Убираем слушатель при размонтировании компонента
        return () => window.removeEventListener('resize', handleResize);
    }, [currentWidth, currentValue, currentTRX, currentSOL]); // Добавляем зависимости, чтобы эффект срабатывал при изменении этих значений

    // Возвращаем значения прогресса и текущую ширину окна
    return { progressValue, currentWidth };
}

export default useWindowSize;