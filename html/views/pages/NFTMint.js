export default {
    render: async () => {
        let view = /*html*/ `
            <section class="section">
                <h1 class="title"> NFT Mint </h1>
                <form action="" onsubmit="return false" id="mintNFT">
                    <div class="columns">
                        <div class="column is-two-thirds">
                            <div class="field">
                                <div class="control has-icons-left has-icons-right">
                                    <input required class="input is-large" type="text" autocomplete="off" placeholder="Title">
                                    <span class="icon is-left">
                                    <i class="fas fa-heading fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control has-icons-left has-icons-right">
                                    <textarea required class="input is-large" style="height:300px;" placeholder="Description"></textarea>
                                    <span class="icon is-left">
                                    <i class="fas fa-align-justify fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="file has-name is-fullwidth">
                                <label class="file-label">
                                    <input class="file-input" accept="image/*" type="file" id="inputImage">
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
                            <div class="has-text-center">
                                <figure class="image">
                                    <image id="previewNFT" src=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="has-text-right">
                        <button class="button is-info is-fullwidth is-large">Mint NFT!</button>
                    </div>
                </form>
            </section>
        `
        return view
    },
    after_render: async () => {
        mintNFT.addEventListener("submit", function(){
            console.log("hi");
        });
        mintNFT.addEventListener("change", function(e){
            let file = e.target.files[0];
            nftFileName.innerHTML = file.name;
            previewNFT.src = URL.createObjectURL(file);
        });
    }
}