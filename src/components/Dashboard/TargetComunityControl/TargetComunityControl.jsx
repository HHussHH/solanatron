import React from 'react';
import useCommunityTokenBarCalculation from "./useCommunityTokenBarCalculation.js"

const TargetComunityControl = ({data}) => {
    const currentValue = data.TargetCommunityValue || 90;
    const currentSOL =  820_000_000;
    const currentTRX = 790_000_000;

    const {solanaBarFill,tronBarFill,solanaPercentage,tronPercentage} = useCommunityTokenBarCalculation(currentTRX,currentSOL,currentValue)
    return (
        <div className={"Dashboard"}>
            <span className={"Dashboard__total__text"}>Target Community Control</span>
            <div className={"Dashboard__targetBar"}>
                <div className={"Dashboard__leftBar"}>
                    <span className={"Dashboard__leftBar__currentValue"}>{solanaPercentage.toFixed(0)+"%"}</span>
                    <span style={{width: `${solanaBarFill}%`}} className={"Dashboard__leftBar__progress"}></span>
                </div>
                <div className={"Dashboard__total"}>
                    <span className={"Dashboard__info"}>
                        {currentValue + "%"}
                    </span>
                </div>
                <div className={"Dashboard__rightBar"}>
                    <span className={"Dashboard__rightBar__currentValue"}>{tronPercentage.toFixed(0)+"%"}</span>
                    <span style={{width: `${tronBarFill}%`}} className={"Dashboard__rightBar__progress"}></span>
                </div>
            </div>
        </div>
    );
};

export default TargetComunityControl;