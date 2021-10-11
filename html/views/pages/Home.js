const getNFTs = async () => {
    if (CONNECTED_WALLET) {
        let nfts = await web3api.get(`/nft/${CONTRACT_ADDRESS}`);
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
                                    <img src="${nft.metadata.image}" alt="NFT Name">
                                </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">${nft.metadata.name}</p>
                                            <p class="subtitle is-6">
                                                ${nft.metadata.description}
                                            </p>
                                        </div>
                                    </div>
                                
                                    <div class="content">
                                        <a href="${nft.token_uri}" target="_blank">See Token URI</a>
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