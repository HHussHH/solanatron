import React from 'react';
import "./BuyButton.scss"
import ExchangeChoice from "../ExchangeChoice/ExchangeChoice.jsx";
import {ReactComponent as Raydium} from "../../assets/icons/RaydiumIcon.svg"
import {ReactComponent as Sunswap} from "../../assets/icons/SunswapIcon.svg"
import {ReactComponent as VsIcon} from "../../assets/icons/VsIcon.svg"

const BuyButton = ({urls}) => {
    const SWHALE = urls.SWHALE || "https://google.com";
    const TWHALE = urls.TWHALE || "https://google.com";
    return (
        <div className="Buy-button">
            <div className="Buy-button__leftSide">
                <a href={SWHALE} rel="noreferrer" target="_blank">
                    <button className="Buy-button__btn Buy-button__btn-solana">SWHALE</button>
                </a>
                <a className="ExchangeChoice__icon" href={SWHALE} rel="noreferrer" target="_blank">
                    <Raydium className={"ExchangeChoice__exchange ExchangeChoice__exchange__left"}/>
                </a>
            </div>

            <div className="Buy-button__center">
            <span className="Buy-button__text">BUY</span>
                <VsIcon className="ExchangeChoice__vs"/>
            </div>

            <div className="Buy-button__rightSide">
            <a href={TWHALE} rel="noreferrer" target="_blank">
                <button className="Buy-button__btn Buy-button__btn-tron">TWHALE</button>
            </a>
                <a className="ExchangeChoice__icon" href={TWHALE} rel="noreferrer" target="_blank">
                    <Sunswap className={"ExchangeChoice__exchange ExchangeChoice__exchange__right"}/>
                </a>
            </div>
        </div>
    );
};

export default BuyButton;