import React, {useEffect, useState} from 'react';
import {сopyToClipboard} from "../../../helpers/CopyToClipboard.js";
import "./Contract.scss"
import {ReactComponent as CopyIcon} from "../../../assets/icons/CopyIcon.svg"
import {ReactComponent as CompletedIcon} from "../../../assets/icons/CompletedIcon.svg"
import {shortenString} from "../../../helpers/shortenString.js";
import useWindowSize from "../../../helpers/useWindowSize.js";

const Contract = ({data}) => {
    const SOLtextToCopy = data.SolCopy || "6NRNLiswWzp6PW7FhKi6mWBehijflKSH34u9q3kL1dEXc1tfYu";
    const TRXtextToCopy = data.TrxCopy || "6NRNLiswWzp6PW7FhKi6mWBehijflKSH34u9q3kL1dEXc1tfYu";
    const { currentWidth } = useWindowSize();
    const [copied, setCopied] = useState({ SOL: false, TRX: false });


    const copyHandler = (text,textType) => {
        сopyToClipboard(text)
        setCopied(prev => ({ ...prev, [textType]: true }));
    }
    useEffect(() => {
        if(copied.SOL || copied.TRX) {
            setTimeout(() =>{
                setCopied({SOL:false,TRX:false});
            },2000)
        }
    }, [copied]);

    const currentLen = currentWidth > 1300 ? 28 : currentWidth > 768 ? 14 : 6;
    return (
            <div className="Contract__links">
                <div onClick={() => copyHandler(SOLtextToCopy,"SOL") } className={"Contract__link Contract__link__left"}>
                            <span className={"Contract__links__text"}>{shortenString(SOLtextToCopy, currentLen)}</span>
                    {copied.SOL ? <CompletedIcon width="17" /> : <CopyIcon width="17" />}
                </div>
                <span className={"Contract__info"}>
                    Contract
                </span>
                <div onClick={() => copyHandler(TRXtextToCopy,"TRX") } className={"Contract__link Contract__link__right"}>
                            <span className={"Contract__links__text"}>{shortenString(TRXtextToCopy, currentLen)}</span>
                    {copied.TRX ? <CompletedIcon width="17" /> : <CopyIcon width="17" />}
                </div>
            </div>
    );
};

export default Contract;