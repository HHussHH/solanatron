import React, {useEffect, useState} from 'react';
import useWindowSize from "../../../helpers/useWindowSize.js";

const TargetPrice = ({data}) => {

    const currentValue = data.TargetPriceValue || 0.05
    const [currentSOL,setCurrentSOL] = useState(0);
    const [currentTRX,setCurrentTRX] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.vd3.fun/v1/externals/swhale-currency')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCurrentSOL(Number(data.price).toFixed(6));
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

        fetch('https://api.vd3.fun/v1/externals/twhale-currency')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCurrentTRX(Number(data.price).toFixed(6));
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const { progressValue } = useWindowSize(currentValue, currentTRX, currentSOL);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div className={"Dashboard"}>
            <span className={"Dashboard__total__text"}>TargetPrice</span>
            <div className={"Dashboard__targetBar"}>
                <div className={"Dashboard__leftBar"}>
                    <span className={"Dashboard__leftBar__currentValue"}>{"$" + currentSOL}</span>
                    <span style={{width: `${progressValue.SOL}%`}} className={"Dashboard__leftBar__progress"}></span>
                </div>
                <div className={"Dashboard__total"}>
                    <span className={"Dashboard__info Dashboard__info-liner"}>
                        {"$" + currentValue}
                    </span>
                </div>
                <div className={"Dashboard__rightBar"}>
                    <span className={"Dashboard__rightBar__currentValue"}>{"$" + currentTRX}</span>
                    <span style={{width: `${progressValue.TRX}%`}} className={"Dashboard__rightBar__progress"}></span>
                </div>
            </div>
        </div>
    );
};

export default TargetPrice;