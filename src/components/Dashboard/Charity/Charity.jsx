import React from 'react';
import {ReactComponent as CopyIcon} from "../../../assets/icons/copy-gray.svg"
import {сopyToClipboard} from "../../../helpers/CopyToClipboard.js";
import {shortenString} from "../../../helpers/shortenString.js";
import useWindowSize from "../../../helpers/useWindowSize.js";

const Charity = ({data}) =>  {
    const currentValue = data.CharityValue
    const currentTRX = 5;
    const currentSOL = 22.05;

    const { progressValue } = useWindowSize(currentValue, currentTRX, currentSOL);


// Расчет заполнения в процентах для левого значения
    const SolToCopy = data.CharitySolUrl || "6NRNLiswWzp6PW7FhKi6mWBehijflKSH34u9q3kL1dEXc1tfYu";
    const TrxToCopy = data.CharityTrxUrl || "6NRNLiswWzp6PW7FhKi6mWBehijflKSH34u9q3kL1dEXc1tfYu";

    return (
        <div className={"Dashboard"}>
            <span className={"Dashboard__total__text"}>Charity</span>
            <div className={"Dashboard__targetBar"}>
                <div className={"Dashboard__leftBar"}>
                    <span className={"Dashboard__leftBar__currentValue"}>{currentSOL + " SOL"}</span>
                    <span style={{width: `${progressValue.SOL}px`}} className={"Dashboard__leftBar__progress"}></span>
                    <span onClick={() => сopyToClipboard(SolToCopy)} className="Dashboard__copy"><CopyIcon width = {16}  stroke="#6D6170"/> {shortenString(SolToCopy,5)}</span>
                </div>
                <div className={"Dashboard__total"}>
                    <span className={"Dashboard__info"}>
                        {"$"+currentValue}
                    </span>
                </div>
                <div className={"Dashboard__rightBar"}>
                    <span className={"Dashboard__rightBar__currentValue"}>{currentTRX + " TRX"}</span>
                    <span style={{width: `${progressValue.TRX}px`}} className={"Dashboard__rightBar__progress"}></span>
                    <span onClick={() => сopyToClipboard(TrxToCopy)} className="Dashboard__copy">{shortenString(TrxToCopy,5)} <CopyIcon width={16} stroke="#6D6170"/> </span>
                </div>
            </div>
        </div>
    )

}

export default Charity;