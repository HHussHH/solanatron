import React, {useEffect, useState} from 'react';
import useTargetInfo from "./useTargetInfo.js";
import {SwhaleCurrency, TwhaleCurrency} from "../../../fetchData/fetchData.js";

const TargetPrice = ({data}) => {

    const currentValue = data.TargetPriceValue || 0.05
    const [currentSOL,setCurrentSOL] = useState(0);
    const [currentTRX,setCurrentTRX] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSwhale = async() =>{
            try{
                const data = await SwhaleCurrency();
                setCurrentSOL(data)
                setLoading(false)
            }catch (e){
                console.error("TRX not found: ", e);
            }
        }
        const fetchTwhale = async() =>{
            try{
                const data = await TwhaleCurrency();
                setCurrentTRX(data)
                setLoading(false)
            }catch (e){
                console.error("TRX not found: ", e);
            }
        }
        fetchSwhale();
        fetchTwhale();

    }, []);

    const { progressValue } = useTargetInfo(currentValue, currentTRX, currentSOL);



    return (
        <div className={"Dashboard"}>
            <span className={"Dashboard__total__text"}>TargetPrice</span>
            <div className={"Dashboard__targetBar"}>
                <div className={"Dashboard__leftBar"}>
                    <span className={"Dashboard__leftBar__currentValue"}>{loading ? "loading...":"$" + currentSOL}</span>
                    <span style={{width: `${progressValue.SOL}%`}} className={"Dashboard__leftBar__progress"}></span>
                </div>
                <div className={"Dashboard__total"}>
                    <span className={"Dashboard__info Dashboard__info-liner"}>
                        {"$" + currentValue}
                    </span>
                </div>
                <div className={"Dashboard__rightBar"}>
                    <span className={"Dashboard__rightBar__currentValue"}>{loading ? "loading...":"$" + currentTRX}</span>
                    <span style={{width: `${progressValue.TRX}%`}} className={"Dashboard__rightBar__progress"}></span>
                </div>
            </div>
        </div>
    );
};

export default TargetPrice;