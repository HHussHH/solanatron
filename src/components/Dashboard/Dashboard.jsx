
import "./Dashboard.scss"
import React from 'react';
import TargetPrice from "./TargetPrice/TargetPrice.jsx";
import TargetComunityControl from "./TargetComunityControl/TargetComunityControl.jsx";
import PumpPool from "./PumpPool/PumpPool.jsx";
import Charity from "./Charity/Charity.jsx";
import Contract from "./Contract/Contract.jsx";
const Dashboard = ({data}) => {

    return (
        <div className="Dashboard__container">
            <Contract data={{
                SolCopy:data.TrxCopy,
                TrxCopy:data.SolCopy,
            }}/>
            <TargetPrice data={{
                TargetPriceValue:data.TargetPriceValue}}/>
            <TargetComunityControl data={{
                TargetCommunityValue:data.TargetCommunityValue,
                TargetCommunitySol:data.TargetCommunitySol,
                TargetCommunityTrx:data.TargetCommunityTrx,
            }}/>
            <PumpPool data={{
                PumpPoolValue:data.TargetCommunityValue,
                PumpPoolSolUrl:data.PumpPoolSolUrl,
                PumpPoolTrxUrl:data.PumpPoolTrxUrl,
                PumpPoolSol:data.PumpPoolSol,
                PumpPoolTrx:data.PumpPoolSol,
            }}/>
            <Charity data={{
                CharityValue:data.CharityValue,
                CharitySolUrl:data.CharitySolUrl,
                CharityTrxUrl:data.CharitySolUrl,
            }}/>
        </div>
    );
};

export default Dashboard;