const getMyNFTs = async () => {
    if (CONNECTED_WALLET) {
        let myNFTs = await web3api.get(`/${ethereum.selectedAddress}/nft/${CONTRACT_ADDRESS}`, {
            order: 'token_id.DESC'
        });
        myNFTs = myNFTs.result;
        myNFTs.map(item => {
            item.metadata = JSON.parse(item.metadata)
        })
        return myNFTs;
    }
    else return [];
}
export default {
    render: async () => {
        let myNFTs = await getMyNFTs();
        let view = /*html*/ `
            <section class="section">
                <h1 class="title"> My NFTs (${myNFTs.length})</h1>
                <div class="columns is-multiline is-desktop">
                    ${ myNFTs.map(myNFT => 
                        /*html*/ `
                        <div class="column is-one-quarter">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image">
                                    <img src="${myNFT.metadata ? myNFT.metadata.image : '/static/image/sync.png'}" alt="NFT Name">
                                </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">${myNFT.metadata ? myNFT.metadata.name : '<i>Syncing...</i>'}</p>
                                        </div>
                                    </div>
                                
                                    <div class="content">
                                        ${myNFT.metadata ? myNFT.metadata.description : '<i>Syncing...</i>'}
                                        <hr/>
                                        <div>
                                        Token ID: <b>${myNFT.token_id}</b></a>
                                        </div>
                                        <br/>
                                        <div class="has-text-right">
                                            <a href="/#/transfer/${myNFT.token_id}" class="button is-success">Transfer</a>
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