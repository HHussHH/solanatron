import React, {useEffect, useState} from 'react';
import useWindowSize from "../../../helpers/useWindowSize.js";

const TargetPrice = ({data}) => {

    const currentValue = data.TargetPriceValue || 0.05
    const currentTRX = 0.05;
    const currentSOL = 0.03;

    const { progressValue } = useWindowSize(currentValue, currentTRX, currentSOL);

    return (
        <div className={"Dashboard"}>
            <span className={"Dashboard__total__text"}>TargetPrice</span>
            <div className={"Dashboard__targetBar"}>
                <div className={"Dashboard__leftBar"}>
                    <span className={"Dashboard__leftBar__currentValue"}>{"$" + currentSOL}</span>
                    <span style={{width: `${progressValue.SOL}px`}} className={"Dashboard__leftBar__progress"}></span>
                </div>
                <div className={"Dashboard__total"}>
                    <span className={"Dashboard__info Dashboard__info-liner"}>
                        {"$" + currentValue}
                    </span>
                </div>
                <div className={"Dashboard__rightBar"}>
                    <span className={"Dashboard__rightBar__currentValue"}>{"$" + currentTRX}</span>
                    <span style={{width: `${progressValue.TRX}px`}} className={"Dashboard__rightBar__progress"}></span>
                </div>
            </div>
        </div>
    );
};

export default TargetPrice;