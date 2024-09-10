import React, {useEffect, useState} from 'react';
import useCommunityBarInfo from "./useCommunityBarInfo.js"
import {
    SolTokenBalance,
    tronTokenBalance,
} from "../../../fetchData/fetchData.js";

const TargetCommunityControl = ({data}) => {
    const currentValue = data.TargetCommunityValue || 90;
    const [currentSOL,setCurrentSOL] = useState(0);
    const [currentTRX,setCurrentTRX] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSwhale = async() =>{
            try{
                const data = await SolTokenBalance();
                setCurrentSOL(data)
                setLoading(false)
                localStorage.setItem("TargetCommunitySOL",data)
            }catch (e){
                const data = localStorage.getItem("TargetCommunitySOL");
                setCurrentSOL(data)
                console.error("TRX not found: ", e);
            }
        }
        const fetchTwhale = async() =>{
            try{
                const data = await tronTokenBalance();
                setCurrentTRX(data)
                setLoading(false)
                localStorage.setItem("TargetCommunityTRX",data)
            }catch (e){
                const data = localStorage.getItem("TargetCommunityTRX");
                setCurrentTRX(data)
                console.error("TRX not found: ", e);
            }
        }
        fetchSwhale();
        fetchTwhale();

    }, []);

    const {solanaBarFill,tronBarFill,solanaPercentage,tronPercentage} = useCommunityBarInfo(currentTRX,currentSOL,currentValue)
    return (
        <div className={"Dashboard"}>
            <span className={"Dashboard__total__text"}>Target Community Control</span>
            <div className={"Dashboard__targetBar"}>
                <div className={"Dashboard__leftBar"}>
                    <span className={"Dashboard__leftBar__currentValue"}>{loading ? "loading...": solanaPercentage.toFixed(0)+"%"}</span>
                    <span style={{width: `${solanaBarFill}%`}} className={"Dashboard__leftBar__progress"}></span>
                </div>
                <div className={"Dashboard__total"}>
                    <span className={"Dashboard__info"}>
                        {currentValue + "%"}
                    </span>
                </div>
                <div className={"Dashboard__rightBar"}>
                    <span className={"Dashboard__rightBar__currentValue"}>{loading ? "loading...": tronPercentage.toFixed(0)+"%"}</span>
                    <span style={{width: `${tronBarFill}%`}} className={"Dashboard__rightBar__progress"}></span>
                </div>
            </div>
        </div>
    );
};

export default TargetCommunityControl;