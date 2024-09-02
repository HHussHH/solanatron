import React from 'react';
import useWindowSize from "../../../helpers/useWindowSize.js";

const TargetComunityControl = ({data}) => {
    const currentValue = data.TargetCommunityValue || 90;
    const currentSOL = data.TargetCommunitySol || 18;
    const currentTRX = data.TargetCommunityTrx || 21;

    const { progressValue } = useWindowSize(currentValue, currentTRX, currentSOL);

    return (
        <div className={"Dashboard"}>
            <span className={"Dashboard__total__text"}>Target Community Control</span>
            <div className={"Dashboard__targetBar"}>
                <div className={"Dashboard__leftBar"}>
                    <span className={"Dashboard__leftBar__currentValue"}>{currentSOL+"%"}</span>
                    <span style={{width: `${progressValue.SOL}px`}} className={"Dashboard__leftBar__progress"}></span>
                </div>
                <div className={"Dashboard__total"}>
                    <span className={"Dashboard__info"}>
                        {currentValue + "%"}
                    </span>
                </div>
                <div className={"Dashboard__rightBar"}>
                    <span className={"Dashboard__rightBar__currentValue"}>{currentTRX+"%"}</span>
                    <span style={{width: `${progressValue.TRX}px`}} className={"Dashboard__rightBar__progress"}></span>
                </div>
            </div>
        </div>
    );
};

export default TargetComunityControl;