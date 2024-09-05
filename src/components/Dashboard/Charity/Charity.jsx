import React, {useEffect, useState} from 'react';
import {ReactComponent as CopyIcon} from "../../../assets/icons/copy-gray.svg"
import {ReactComponent as CompletedIcon} from "../../../assets/icons/CompletedIcon.svg"

import {сopyToClipboard} from "../../../helpers/CopyToClipboard.js";
import {shortenString} from "../../../helpers/shortenString.js";
import useWindowSize from "../../../helpers/useWindowSize.js";
import {usePumpPoolBarCalculation} from "../PumpPool/usePumpPoolBarCalculation.js";

const Charity = ({data}) =>  {
    const SolToCopy = data.CharitySolUrl || "6NRNLiswWzp6PW7FhKi6mWBehijflKSH34u9q3kL1dEXc1tfYu";
    const TrxToCopy = data.CharityTrxUrl || "6NRNLiswWzp6PW7FhKi6mWBehijflKSH34u9q3kL1dEXc1tfYu";
    const [copied, setCopied] = useState({ SOL: false, TRX: false });

    const {SOL,TRX,SOL_ProgressBar,
        TRX_ProgressBar,CentralValue} = usePumpPoolBarCalculation(130,0.3,1.045, 725)


    const updateCopied = (textType) =>{
        setTimeout(() =>{
            setCopied(prev => ({ ...prev, [textType]: false }));
        },2000)
    }
    const copyHandler = (text,textType) => {
        сopyToClipboard(text)
        setCopied(prev => ({ ...prev, [textType]: true }));
        updateCopied(textType)
    }



    return (
        <div className={"Dashboard"}>
            <span className={"Dashboard__total__text"}>Charity</span>
            <div className={"Dashboard__targetBar"}>
                <div className={"Dashboard__leftBar"}>
                    <span className={"Dashboard__leftBar__currentValue"}>{SOL + " SOL"}</span>
                    <span style={{width: `${SOL_ProgressBar}%`}} className={"Dashboard__leftBar__progress"}></span>
                    <span onClick={() => copyHandler(SolToCopy,"SOL")} className="Dashboard__copy">{copied.SOL ? <CompletedIcon width={16}/>:<CopyIcon stroke="#6D6170" width={16}/>} {shortenString(SolToCopy,5)}</span>
                </div>
                <div className={"Dashboard__total"}>
                    <span className={"Dashboard__info"}>
                        {"$"+CentralValue}
                    </span>
                </div>
                <div className={"Dashboard__rightBar"}>
                    <span className={"Dashboard__rightBar__currentValue"}>{TRX + " TRX"}</span>
                    <span style={{width: `${TRX_ProgressBar}%`}} className={"Dashboard__rightBar__progress"}></span>
                    <span onClick={() => copyHandler(TrxToCopy,"TRX")} className="Dashboard__copy">{shortenString(TrxToCopy,5)} {copied.TRX ? <CompletedIcon width={16}/>:<CopyIcon stroke="#6D6170" width={16}/>}</span>
                </div>
            </div>
        </div>
    )

}

export default Charity;