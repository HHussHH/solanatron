export const usePumpPoolBarCalculation = (exchangeSol, exchangeTrx, SOL, TRX) => {


    const SOL_USD = SOL * exchangeSol;
    const TRX_USD = TRX * exchangeTrx;

    const SOL_ProgressBar = Math.max(Math.min(SOL_USD > TRX_USD ? 100 : (SOL_USD / TRX_USD) * 100, 100), 0);
    const TRX_ProgressBar = Math.max(Math.min(TRX_USD > SOL_USD ? 100 : (TRX_USD / SOL_USD) * 100, 100), 0);

    const CentralValue = Math.max(SOL_USD + TRX_USD, 0).toFixed(0);

    const currentSOL = Number.isInteger(SOL) ? Math.max(SOL, 0) : Math.max(SOL, 0).toFixed(2);
    const currentTRX = Number.isInteger(TRX) ? Math.max(TRX, 0) : Math.max(TRX, 0).toFixed(2);

    return {
        SOL: currentSOL,
        TRX: currentTRX,
        SOL_ProgressBar,
        TRX_ProgressBar,
        CentralValue
    };
};