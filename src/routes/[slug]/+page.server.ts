export async function load({params}) {
    let query = params.slug;
    const url = `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=${query}`;
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
            data:result
        }
    } catch (error) {
        console.error(error);
    }
}