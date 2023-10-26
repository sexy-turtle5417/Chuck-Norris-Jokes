import { error } from "@sveltejs/kit";

export async function load(){
    const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': 'd82563508amshf420392033620dap15193fjsn9812683e7799',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return {
            categories: result
        }
    } catch (err) {
        throw error(500, "INTERNAL SERVER ERROR");
    }
}