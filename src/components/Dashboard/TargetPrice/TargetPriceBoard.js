import { useState } from 'react';

 function useTargetPriceBar(currentValue, currentTRX, currentSOL) {

    const [progressValue, setProgressValue] = useState({
        SOL: 0,
        TRX: 0,
    });


    const fillPercentageSOL = Math.min((currentSOL / currentValue) * 100, 100);
    const fillPercentageTRX = Math.min((currentTRX/ currentValue) * 100, 100);

            setProgressValue({
                SOL: fillPercentageSOL,
                TRX: fillPercentageTRX,
            });


    return { progressValue };
}

export default useTargetPriceBar
