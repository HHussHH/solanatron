import React from 'react';
import "./LearnMore.scss"
import SocialGroup from "../SocialGroup/SocialGroup.jsx";

const LearnMore = ({urlLearnMore,urls}) => {

    const link = urlLearnMore.learnMore || "https://google.com"
    return (
        <div className="SocialMoreInfo">
            <button className="SocialMoreInfo__btn">
                <a  className="SocialMoreInfo__btn__text" href={link} rel="manifest" target="_blank">Learn more</a>
            </button>
        </div>
    );
};

export default LearnMore;