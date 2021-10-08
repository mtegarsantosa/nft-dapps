const transfer = async () => {
    let txid = await Moralis.transfer({
        type: 'erc721',
        receiver: receipentAddressNFT.value,
        contract_address: CONTRACT_ADDRESS,
        token_id: inputFindNFT.value
    });
    console.log(txid);
}
export default {
    render: async () => {
        let view = /*html*/ `
            <section class="section">
                <h1 class="title"> NFT Transfer </h1>
                <form action="" onsubmit="return false" id="transferNFT">
                    <div class="columns">
                        <div class="column is-two-thirds">
                            <div class="field">
                                <div class="control has-icons-left has-icons-right">
                                    <input id="receipentAddressNFT" required class="input is-large" type="text" autocomplete="off" placeholder="Receipent Address">
                                    <span class="icon is-left">
                                        <i class="fas fa-id-card fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-four-fifths">
                                    <div class="field">
                                        <div class="control has-icons-left has-icons-right">
                                            <input required class="input is-large" type="number" id="inputFindNFT" autocomplete="off" placeholder="NFT ID">
                                            <span class="icon is-left">
                                                <i class="fas fa-images fa-sm"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <button class="button is-primary is-large" id="findNFT" type="button">Find NFT</button>
                                </div>
                            </div>
                        </div>
                        <div class="column view-nft" id="viewNFT">
                            <div>
                                <p>
                                    <b>Name:</b>
                                </p>
                                <p id="nftName"></p>
                            </div>
                            <div>
                                <p>
                                    <b>Description:</b>
                                </p>
                                <p id="nftDescription"></p>
                            </div>
                            <div>
                                <p>
                                    <b>Image:</b>
                                </p>
                                <p>
                                    <figure class="image">
                                        <image id="nftImage" src=""/>
                                    </figure>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="has-text-right">
                        <button id="transferNFTBtn" class="button is-info is-fullwidth is-large">Transfer NFT!</button>
                    </div>
                </form>
            </section>
        `
        return view
    },
    after_render: async () => {
        transferNFT.addEventListener("submit", function(){
            console.log("hi");
        });
        findNFT.addEventListener("click", async function() {
            findNFT.classList.add("is-loading")
            let tokenURI = await instance.methods.tokenURI(inputFindNFT.value).call();
            let nft = await (await fetch(tokenURI)).json();
            findNFT.classList.remove("is-loading");
            nftName.innerHTML = nft.name;
            nftDescription.innerHTML = nft.description;
            nftImage.src = nft.image;
            viewNFT.style.display = 'block';
        });
        transferNFTBtn.addEventListener("click", async function() {
            transfer();
        });
    }
}