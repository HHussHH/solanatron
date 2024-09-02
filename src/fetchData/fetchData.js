
// const URL = import.meta.env.URL
 const URL = "/MockJSON.json"


export const fetchData = async () => {
    const data = await fetch(URL)
        .then(response => response.json())

    return data;
}


