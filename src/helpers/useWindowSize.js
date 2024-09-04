import { useEffect, useState } from 'react';

function useWindowSize(currentValue, currentTRX, currentSOL) {
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    const [progressValue, setProgressValue] = useState({
        SOL: 0,
        TRX: 0,
    });

    useEffect(() => {
        const handleResize = () => setCurrentWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        const updateProgressValues = () => {
            const fillPercentageSOL = Math.min((currentSOL / currentValue) * 100, 100);
            const fillPercentageTRX = Math.min((currentTRX / currentValue) * 100, 100);

            setProgressValue({
                SOL: fillPercentageSOL,
                TRX: fillPercentageTRX,
            });
        };

        updateProgressValues();

        return () => window.removeEventListener('resize', handleResize);
    }, [currentWidth, currentValue, currentTRX, currentSOL]);

    return { progressValue, currentWidth };
}

export default useWindowSize
