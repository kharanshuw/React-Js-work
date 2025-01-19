

export const getCurrency = async (from,to) => {

    let url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_RUWtpIFaMCTdl3NmPqtYws99FCPVTb94S8064IZk&currencies=${to}&base_currency=${from}`;

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
    let url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_RUWtpIFaMCTdl3NmPqtYws99FCPVTb94S8064IZk";

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