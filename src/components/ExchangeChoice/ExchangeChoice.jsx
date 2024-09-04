import React from 'react';
import "./ExchangeChoice.scss";

import {ReactComponent as Raydium} from "../../assets/icons/RaydiumIcon.svg"
import {ReactComponent as Sunswap} from "../../assets/icons/SunswapIcon.svg"
import {ReactComponent as VsIcon} from "../../assets/icons/VsIcon.svg"

const ExchangeChoice = ({urls}) => {
    const RaydiumLink = urls.RAYDIUM || "https://google.com";
    const SunswapLink = urls.SUNSWAP || "https://google.com";
    return (
        <div className="ExchangeChoice">
            <a className="ExchangeChoice__icon" href={RaydiumLink} rel="noreferrer" target="_blank">
             <Raydium className={"ExchangeChoice__exchange ExchangeChoice__exchange__left"}/>
            </a>
                <VsIcon className="ExchangeChoice__vs"/>
            <a className="ExchangeChoice__icon" href={SunswapLink} rel="noreferrer" target="_blank">
             <Sunswap className={"ExchangeChoice__exchange ExchangeChoice__exchange__right"}/>
            </a>
        </div>
    );
};

export default ExchangeChoice;