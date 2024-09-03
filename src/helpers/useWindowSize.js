import { useEffect, useState } from 'react';

function useWindowSize(currentValue, currentTRX, currentSOL) {
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    const [progressValue, setProgressValue] = useState({
        SOL: 0,
        TRX: 0,
    });

    const progressBarWidth = {
        "1920": 549,
        "1440": 529,
        "1300": 429,
        "868": 250,
        "480": 165,
        "479": 120,
        "450": 120,
        "425": 120,
        "375": 100,
        "320": 100,
    };

    useEffect(() => {
        const handleResize = () => setCurrentWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        const updateProgressValues = () => {
            const fillPercentageSOL = Math.min((currentSOL / currentValue) * 100, 100);
            const fillPercentageTRX = Math.min((currentTRX / currentValue) * 100, 100);

            const newProgressValueSOL = (fillPercentageSOL / 100) * (progressBarWidth[currentWidth] || progressBarWidth["320"]);
            const newProgressValueTRX = (fillPercentageTRX / 100) * (progressBarWidth[currentWidth] || progressBarWidth["320"]);

            setProgressValue({
                SOL: newProgressValueSOL,
                TRX: newProgressValueTRX,
            });
        };

        updateProgressValues();

        return () => window.removeEventListener('resize', handleResize);
    }, [currentWidth, currentValue, currentTRX, currentSOL]);
    return { progressValue, currentWidth };
}

export default useWindowSize;