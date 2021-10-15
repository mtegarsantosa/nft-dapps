const mintToken = async (_uri) => {
    const encodedFunction = web3.eth.abi.encodeFunctionCall({
        name: "mintToken",
        type: "function",
        inputs: [{
            type: 'string',
            name: 'tokenURI'
        }]
    }, [_uri]);

    const transactionParameters = {
        to: CONTRACT_ADDRESS,
        from: ethereum.selectedAddress,
        data: encodedFunction
    };
    const txt = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters]
    });
    return txt
}
const upload = async () => {
    const data = nftImage.files[0];
    const imageFile = new Moralis.File(data.name, data);
    mintNFTBtn.classList.add("is-loading");
    await imageFile.saveIPFS();
    const imageURI = imageFile.ipfs();
    const metadata = {
        "name": nftName.value,
        "description": nftDescription.value,
        "image": imageURI
    }
    const metadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
    await metadataFile.saveIPFS();
    const metadataURI = metadataFile.ipfs();
    const txt = await mintToken(metadataURI).then(notify)
    mintNFTBtn.classList.remove("is-loading");
}
const notify = (_txt) => {
    notifMint.querySelector("#notifMessage").innerHTML = "NFT Minted! Transaction ID: "
    notifMint.querySelector("#notifInfo a").innerHTML = _txt
    notifMint.querySelector("#notifInfo a").href = `${EXPLORER}/tx/${_txt}`
}
export default {
    render: async () => {
        if (!CONNECTED_WALLET || !ethereum.selectedAddress) {
            return `
                <section class="section">
                    Please connect your Metamask wallet!
                </section>
            `
        }
        let view = /*html*/ `
            <section class="section">
                <h1 class="title"> NFT Mint </h1>
                <form action="" onsubmit="return false" id="mintNFT">
                    <div class="columns">
                        <div class="column is-two-thirds">
                            <div class="field">
                                <div class="control has-icons-left has-icons-right">
                                    <input required id="nftName" class="input is-large" type="text" autocomplete="off" placeholder="Name">
                                    <span class="icon is-left">
                                     <i class="fas fa-heading fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control has-icons-left has-icons-right">
                                    <textarea required id="nftDescription" class="input is-large" style="height:300px;" placeholder="Description"></textarea>
                                    <span class="icon is-left">
                                     <i class="fas fa-align-justify fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="file has-name is-fullwidth">
                                <label class="file-label">
                                    <input class="file-input" accept="image/*" type="file" id="nftImage">
                                    <span class="file-cta is-fullwidth">
                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">
                                            Choose a file…
                                        </span>
                                    </span>
                                    <span id="nftFileName" class="file-name">
                                        your_nft_image.png
                                    </span>
                                </label>
                            </div>
                            <br/>
                            <figure>
                                <image id="previewNFT" src=""/>
                            </figure>
                        </div>
                    </div>
                    <div class="notification">
                        <div id="notifMint" class="columns">
                            <div id="notifMessage" class="column is-one-third"></div>
                            <div id="notifInfo" class="column">
                                <b><a target="_blank" href="#"></a></b>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="has-text-right">
                        <button id="mintNFTBtn" class="button is-info is-fullwidth is-large">Mint NFT!</button>
                    </div>
                </form>
            </section>
        `
        return view
    },
    after_render: async () => {
        if (ethereum.selectedAddress && CONNECTED_WALLET) {
            mintNFT.addEventListener("submit", function(){
                upload();
            });
            nftImage.addEventListener("change", function(e){
                let file = e.target.files[0];
                nftFileName.innerHTML = file.name;
                previewNFT.src = URL.createObjectURL(file);
            });
        }
    }
}