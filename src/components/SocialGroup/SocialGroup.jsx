import React from 'react';
import "./SocialGroup.scss"
import {ReactComponent as TelegramIcon} from "../../assets/icons/TelegramIcon.svg"
import {ReactComponent as FileIcon} from "../../assets/icons/FileIcon.svg"
import {ReactComponent as TwitterIcon} from "../../assets/icons/TwitterIcon.svg"
import useWindowSize from "../../helpers/useWindowSize.js";

const SocialGroup = ({className,urls,width,mod}) => {
    const docs = urls.docs || "https://google.com"
    const tg = urls.telegram || "https://telegram.com"
    const x = urls.twitter || "https://twitter.com"

    const { currentWidth } = useWindowSize();


    const currentSize = currentWidth > 1439 ? 34 : currentWidth < 480 ? 34 : 34;

    return (
        <div className={`SocialGroup SocialGroup__${className} SocialGroup-${mod}`}>
            <a  target="_blank" href={docs} rel="noreferrer"  className={"SocialGroup__link"}>
                <FileIcon className={"SocialGroup__icon"} width={`${width || currentSize}px`}  />
            </a>
            <a target="_blank" href={x} rel="noreferrer"  className={"SocialGroup__link"}>
            <TwitterIcon  className={"SocialGroup__icon"} width={`${width || currentSize}px`}   />
            </a>
            <a target="_blank" href={tg} rel="noreferrer"  className={"SocialGroup__link"}>
            <TelegramIcon  className={"SocialGroup__icon"} width={`${width || currentSize}px`}   />
            </a>
        </div>
    );
};

export default SocialGroup;