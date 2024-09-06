import React, {useEffect, useState} from 'react';
import {сopyToClipboard} from "../../../helpers/CopyToClipboard.js";
import {ReactComponent as CompletedIcon} from "../../../assets/icons/CompletedIcon.svg"
import {ReactComponent as CopyIcon} from "../../../assets/icons/copy-gray.svg"
import {shortenString} from "../../../helpers/shortenString.js";
import {usePumpAndCharityData} from "./usePumpAndCharityData.js";
import {exchangeSOL, exchangeTRX, solBalance, trxBalance} from "../../../fetchData/fetchData.js";
const PumpPool = ({data}) => {

    const SolToCopy = data.PumpPoolSolUrl || "76uUWJDUE9YoBPtkb5gi8ZFX7UxLTs2rXTj8tyrmLYw2";
    const TrxToCopy = data.PumpPoolTrxUrl || "TZ8PyDyBVX5FLxJQxskM4ZfxpSgsXQrWZE";
    const [copied, setCopied] = useState({ SOL: false, TRX: false });
    const [currentTRX, setCurrentTRX] = useState(null);
    const [currentSOL, setCurrentSOL] = useState(null);
    const [currentExSOL, setCurrentExSOL] = useState(null);
    const [currentExTRX, setCurrentExTRX] = useState(null);


    useEffect(()=>{
        const fetchTRX = async() =>{
            try{
                const data = await trxBalance(TrxToCopy);
                setCurrentTRX(data)
            }catch (e){
                console.error("TRX not found: ", e);
            }
        }
        const fetchSOL = async() =>{
            try{
                const data = await solBalance(SolToCopy);
                setCurrentSOL(data)
            }catch (e){
                console.error("TRX not found: ", e);
            }
        }
        const fetchExTRX = async() =>{
            try{
                const data = await exchangeTRX();
                setCurrentExTRX(data)
            }catch (e){
                console.error("TRX not found: ", e);
            }
        }
        const fetchExSOL = async() =>{
            try{
                const data = await exchangeSOL();
                setCurrentExSOL(data)
            }catch (e){
                console.error("TRX not found: ", e);
            }
        }
        fetchExTRX();
        fetchExSOL();
        fetchSOL();
        fetchTRX();
    },[])

    const {SOL,TRX,SOL_ProgressBar,
        TRX_ProgressBar,CentralValue} = usePumpAndCharityData(currentExSOL,currentExTRX,currentSOL, currentTRX)



    const updateCopied = (textType) =>{
        setTimeout(() =>{
            setCopied(prev => ({ ...prev, [textType]: false }));
        },2000)
    }
    const copyHandler = (text,textType) => {
        сopyToClipboard(text)
        setCopied(prev => ({ ...prev, [textType]: true }));
        updateCopied(textType)
    }


    return (
        <div className={"Dashboard"}>
            <span className={"Dashboard__total__text"}>Pump Pool</span>
            <div className={"Dashboard__targetBar"}>
                <div className={"Dashboard__leftBar"}>
                    <span className={"Dashboard__leftBar__currentValue"}>{currentSOL === null ? "Loading..." : `${SOL} SOL`}</span>
                    <span style={{width: `${SOL_ProgressBar}%`}} className={"Dashboard__leftBar__progress"}></span>
                    <span onClick={() => copyHandler(SolToCopy,"SOL")} className="Dashboard__copy">{copied.SOL ? <CompletedIcon width={16}/>:<CopyIcon stroke="#6D6170" width={16}/>} {shortenString(SolToCopy,5)}</span>
                </div>
                <div className={"Dashboard__total"}>
                    <span className={"Dashboard__info"}>
                        {"$"+CentralValue}
                    </span>
                </div>
                <div className={"Dashboard__rightBar"}>
                    <span className={"Dashboard__rightBar__currentValue"}>{currentTRX === null ? "Loading..." : `${TRX} TRX`}</span>
                    <span style={{width: `${TRX_ProgressBar}%`}} className={"Dashboard__rightBar__progress"}></span>
                    <span onClick={() => copyHandler(TrxToCopy, "TRX")} className="Dashboard__copy">{shortenString(TrxToCopy,5)} {copied.TRX ? <CompletedIcon width={16}/>:<CopyIcon stroke="#6D6170" width={16}/>}  </span>
                </div>
            </div>
        </div>
    );
};


export default PumpPool;