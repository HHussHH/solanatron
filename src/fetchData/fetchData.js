
// const URL = import.meta.env.URL
 const URL = "/MockJSON.json"

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

