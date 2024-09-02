import React from 'react';
import "./WhaleGroup.scss"

import WhaleDesktop from "../../assets/icons/WhaleDesktop.png"
import WhaleMobile from "../../assets/icons/WhaleMobile.png"
import useWindowSize from "../../helpers/useWindowSize.js";
const WhaleGroup = () => {

    const { currentWidth } = useWindowSize();


    const Whales = currentWidth > 480 ? WhaleDesktop : WhaleMobile;
    return (
       <>
           <div className="WhaleGroup">
            <img src={Whales} alt={"SOLANA_VS_TRON"} className={"WhaleGroup__img"}/>
           </div>
       </>
    );
};

export default WhaleGroup;