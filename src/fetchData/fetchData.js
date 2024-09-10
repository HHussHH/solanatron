
// const URL = import.meta.env.URL
 const URL = "/baseInfo.json"

export const fetchJSON = async () => {
    const data = await fetch(URL)
        .then(response => response.json())
    return data;
}

export const trxBalance = async (address) =>{
    const data = await fetch(`https://api.vd3.fun/v1/externals/trx-balance?address=${address}`)
        .then(response => response.json())

    return Number(data.value).toFixed(2)
}

export const solBalance = async (address) =>{
    const data = await fetch(`https://api.vd3.fun/v1/externals/sol-balance?address=${address}`)
        .then(response => response.json())
    return Number(data.value).toFixed(2)
}

export const SwhaleCurrency = async () =>{
    const data = await fetch(`https://api.vd3.fun/v1/externals/swhale-currency`)
        .then(response => response.json())

    return Number(data.price).toFixed(6)
}

export const TwhaleCurrency = async () =>{
    const data = await fetch(`https://api.vd3.fun/v1/externals/twhale-currency`)
        .then(response => response.json())

    return Number(data.price).toFixed(6)
}

export const exchangeSOL = async () =>{
    const data = await fetch("https://api.vd3.fun/v1/externals/currency?symbol=SOL&convert=USDT")
        .then(response => response.json())

    return Number(data.price).toFixed(2)
}

export const exchangeTRX = async () =>{
    const data = await fetch("https://api.vd3.fun/v1/externals/currency?symbol=TRX&convert=USDT")
        .then(response => response.json())

    return Number(data.price).toFixed(2)
}

export const tronTokenBalance = async () =>{
    const data = await fetch(`https://api.vd3.fun/v1/externals/tron-token-balance?address=TEk6o9M6JqeJCGcq8zVP6b8dMtxFjGPh51&token=TVx8q2U4QLnXHC3xBvLggMfxGEikrWK8Wh`)
        .then(response => response.json())

    return Number(data.value).toFixed(2)
}

export const SolTokenBalance = async () =>{
    const data = await fetch(`https://api.vd3.fun/v1/externals/sol-token-balance?address=9dn4gewnwesB3sx92V4rwG5dfSTukZ5K1Yst6ogNUzpH&token=6NRNLiswWzp6PW7FhKi6mWBewRmBRzqRhpzs8TeBSxYu
`)
        .then(response => response.json())

    return Number(data.value).toFixed(2)
}

