const useCommunityBarInfo= (tron, solana, currentValue) => {
    const totalTokens = 1_000_000_000; // 1 миллиард

    const calculatePercentage = (tokens) => {
        const audienceControl = totalTokens - tokens;
        const percentage = (audienceControl / totalTokens) * 100;
        return Math.max(percentage, 0);
    };

    const calculateBarFill = (tokenPercentage, currentValue) => {
        const fill =  (tokenPercentage / currentValue) * 100;
        return Math.max(Math.min(fill, 100),0);
    };

    const tronPercentage = calculatePercentage(tron);
    const solanaPercentage = calculatePercentage(solana);

    const tronBarFill = calculateBarFill(tronPercentage, currentValue);
    const solanaBarFill = calculateBarFill(solanaPercentage, currentValue);

    return {
        tronPercentage,
        solanaPercentage,
        tronBarFill,
        solanaBarFill
    };
};

export default useCommunityBarInfo;