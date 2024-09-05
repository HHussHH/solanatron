import { useEffect, useState } from 'react';

function useTargetInfo(currentValue, currentTRX, currentSOL) {
    const [progressValue, setProgressValue] = useState({
        SOL: 0,
        TRX: 0,
    });
    useEffect(() => {
        const updateProgressValues = () => {
            const fillPercentageSOL = Math.min((currentSOL / currentValue) * 100, 100);
            const fillPercentageTRX = Math.min((currentTRX / currentValue) * 100, 100);

            setProgressValue({
                SOL: fillPercentageSOL,
                TRX: fillPercentageTRX,
            });
        };
        updateProgressValues();
        }, [currentValue, currentTRX, currentSOL]);

    return { progressValue };
}

export default useTargetInfo
