var web3api = {
    get: async function (endpoint, params={}) {
        let request = await axios.get(`${MORALIS_API_URL}/${endpoint}`, {
            headers: {
                'accept': 'application/json',
                'X-API-Key': MORALIS_API_KEY
            },
            params: {
                chain: MORALIS_API_PARAMS_CHAIN,
                ...params
            }
        });
        return request.data;
    },
    post: async function (endpoint, body={}) {
        let request = await axios.get(`${MORALIS_API_URL}/${endpoint}`, body, {
            headers: {
                'accept': 'application/json',
                'X-API-Key': MORALIS_API_KEY
            }
        });
        return request.data;
    }
}