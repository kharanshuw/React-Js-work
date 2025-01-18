

export const getRandomUser = async () => {

    let url = "https://randomuser.me/api/";

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