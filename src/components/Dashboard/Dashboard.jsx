
import "./Dashboard.scss"
import React from 'react';
import TargetPrice from "./TargetPrice/TargetPrice.jsx";
import TargetCommunityControl from "./TargetCommunityControl/TargetCommunityControl.jsx";
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
            <TargetCommunityControl data={{
                TargetCommunityValue:data.TargetCommunityValue}}/>
            <PumpPool data={{
                PumpPoolSolUrl:data.PumpPoolSolUrl,
                PumpPoolTrxUrl:data.PumpPoolTrxUrl,
            }}/>
            <Charity data={{
                CharitySolUrl:data.CharitySolUrl,
                CharityTrxUrl:data.CharityTrxUrl,
            }}/>
        </div>
    );
};

export default Dashboard;