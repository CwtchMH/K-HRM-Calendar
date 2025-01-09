
const url = process.env.NEXT_PUBLIC_URL_ME;
const bearer_token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export async function fetchUserData() {

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': bearer_token
            }
        });
        const data = await response.json();
        console.log(data);
        return data

    }
    catch (error) {
        console.error(error);
    }
}