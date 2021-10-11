const transfer = async () => {
    await Moralis.transfer({
        type: 'erc721',
        receiver: receipentAddressNFT.value,
        contract_address: CONTRACT_ADDRESS,
        token_id: inputCheckNFT.value
    }).then(notify);
}
const notify = (_txt) => {
    if (_txt.status) {
        notifTransfer.querySelector("#notifMessage").innerHTML = "NFT Transfered! Transaction ID: "
        notifTransfer.querySelector("#notifInfo a").innerHTML = _txt.transactionHash
        notifTransfer.querySelector("#notifInfo a").href = `${EXPLORER}/tx/${_txt.transactionHash}`
    }
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
                                            <input required class="input is-large" type="text" disabled id="inputCheckNFT" autocomplete="off" placeholder="NFT ID">
                                            <span class="icon is-left">
                                                <i class="fas fa-images fa-sm"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <button class="button is-primary is-large" id="checkNFT" type="button">Check NFT</button>
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
                    <div class="notification">
                        <div id="notifTransfer" class="columns">
                            <div id="notifMessage" class="column is-one-third"></div>
                            <div id="notifInfo" class="column">
                                <b><a target="_blank" href="#"></a></b>
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
        let token_id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        inputCheckNFT.value = token_id;
        transferNFT.addEventListener("submit", function(){
            transfer();
        });
        checkNFT.addEventListener("click", async function() {
            checkNFT.classList.add("is-loading")
            let nft = await web3api.get(`/nft/${CONTRACT_ADDRESS}/${inputCheckNFT.value}`);
            nft.metadata = JSON.parse(nft.metadata)
            checkNFT.classList.remove("is-loading");
            nftName.innerHTML = nft.metadata.name;
            nftDescription.innerHTML = nft.metadata.description;
            nftImage.src = nft.metadata.image;
            viewNFT.style.display = 'block';
        });
    }
}