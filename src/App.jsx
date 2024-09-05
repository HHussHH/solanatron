import {useEffect, useState} from 'react'

import './App.css'
import SocialGroup from "./components/SocialGroup/SocialGroup.jsx";
import WhaleGroup from "./components/WhaleGroup/WhaleGroup.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import CurrencyOmparison from "./components/CurrencyСomparison/CurrencyСomparison.jsx";
import About from "./components/About/About.jsx";
import LearnMore from "./components/LearnMore/LearnMore.jsx";
import {fetchJSON} from "./fetchData/fetchData.js";


function App() {
    const [jsonData, setJsonData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchJSON()
            .then((fetchedData) => {
                setJsonData(fetchedData);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

      <div className="App">
          <WhaleGroup/>
          <SocialGroup urls={{
              twitter: jsonData.TWITTER_URL,
              telegram:jsonData.TELEGRAM_URL,
              docs:jsonData.DOCS_URL
          }}/>
          <Dashboard data={{
              SolCopy:jsonData.SOL_CONTRACT_COPY_TEXT,
              TrxCopy:jsonData.TRX_CONTRACT_COPY_TEXT,
              TargetPriceValue:jsonData.TARGET_PRICE_VALUE,
              TargetCommunityValue:jsonData.TARGET_COMMUNITY_CONTROL_VALUE,
              PumpPoolSolUrl:jsonData.PUMP_POOL_SOL_URL,
              PumpPoolTrxUrl:jsonData.PUMP_POOL_TRX_URL,
              CharitySolUrl:jsonData.CHARITY_SOL_URL,
              CharityTrxUrl:jsonData.CHARITY_TRX_URL
          }}/>
          <CurrencyOmparison urls={{
              SWHALE: jsonData.SWHALE_SITE,
              TWHALE:jsonData.TWHALE_SITE,
              RAYDIUM: jsonData.RAYDIUM_SITE,
              SUNSWAP:jsonData.SUNSWAP_SITE
          }}/>
          <About/>
          <LearnMore urlLearnMore={{learnMore: jsonData.LEARN_MORE_SITE}} urls={{
              twitter: jsonData.TWITTER_URL,
              telegram:jsonData.TELEGRAM_URL,
              docs:jsonData.Docs_URL,
          }}/>
          <SocialGroup
              mod={"end"}
              urls={{
              twitter: jsonData.TWITTER_URL,
              telegram:jsonData.TELEGRAM_URL,
              docs:jsonData.DOCS_URL
          }}/>
      </div>

  )
}

export default App
