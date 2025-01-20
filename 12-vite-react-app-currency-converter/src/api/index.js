

export const getCurrency = async (from,to) => {

//use your own key from freecurrencyapi
    let url = `https://api.freecurrencyapi.com/v1/latest?apikey=${key}&currencies=${to}&base_currency=${from}`;

    const response = await fetch(url,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    
    return response.json();
}



export const getCurrencyList = async () => {
    let url = "https://api.freecurrencyapi.com/v1/latest?apikey=${key}";

    const response = await fetch(url,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );


    return response.json();
}