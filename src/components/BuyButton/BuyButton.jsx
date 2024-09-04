import React from 'react';
import "./BuyButton.scss"
import ExchangeChoice from "../ExchangeChoice/ExchangeChoice.jsx";

const BuyButton = ({urls}) => {
    const SWHALE = urls.SWHALE || "https://google.com";
    const TWHALE = urls.TWHALE || "https://google.com";
    return (
        <div className="Buy-button">
            <a href={SWHALE} rel="noreferrer" target="_blank">
                <button className="Buy-button__btn Buy-button__btn-solana">SWHALE</button>
            </a>
            <span className="Buy-button__text">BUY</span>
            <a href={TWHALE} rel="noreferrer" target="_blank">
             <button className="Buy-button__btn Buy-button__btn-tron">TWHALE</button>
            </a>
        </div>
    );
};

export default BuyButton;