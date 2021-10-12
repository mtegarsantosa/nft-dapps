const getNFTs = async () => {
    if (CONNECTED_WALLET) {
        let nfts = await web3api.get(`/nft/${CONTRACT_ADDRESS}/owners`, {
            order: 'token_id.DESC'
        });
        nfts = nfts.result;
        nfts.map((item, index) => {
            nfts[index].metadata = JSON.parse(item.metadata)
        });
        return nfts;
    }
    else return [];
}
export default {
    render: async () => {
        let nfts = await getNFTs()
        let view = /*html*/ `
            <section class="section">
                <h1 class="title"> All NFTs (${nfts.length}) </h1>
                <div class="columns is-multiline is-desktop">
                    ${ nfts.map(nft => 
                        /*html*/ `
                        <div class="column is-one-quarter">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image">
                                    <img src="${nft.metadata ? nft.metadata.image : '/static/image/sync.png'}" alt="NFT Name">
                                </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">${nft.metadata ? nft.metadata.name : '<i>Syncing...</i>'}</p>
                                            <p class="subtitle is-6">
                                                ${nft.metadata ? nft.metadata.description : '<i>Syncing...</i>'}
                                            </p>
                                        </div>
                                    </div>
                                
                                    <div class="content">
                                        <b>Owner:</b> <a href="${EXPLORER}/address/${nft.owner_of}" target="_blank">${nft.owner_of.substr(0, 12)}...</a>
                                        <hr/>
                                        <div>
                                        Token ID: <b>${nft.token_id}</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                        ).join('\n ')
                    }
                </div>
             </section>
        `
        return view
    },
    after_render: async () => {}
}