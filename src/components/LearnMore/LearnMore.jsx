import React from 'react';
import "./LearnMore.scss"

const LearnMore = ({urlLearnMore}) => {

    const link = urlLearnMore.learnMore || "https://google.com"
    return (
        <div className="SocialMoreInfo">
            <button className="SocialMoreInfo__btn">
                <a  className="SocialMoreInfo__text" href={link} rel="manifest" target="_blank">Learn more</a>
            </button>
        </div>
    );
};

export default LearnMore;