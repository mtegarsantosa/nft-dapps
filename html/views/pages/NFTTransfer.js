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
                                    <input required class="input is-large" type="text" autocomplete="off" placeholder="NFT ID">
                                    <span class="icon is-left">
                                        <i class="fas fa-images fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control has-icons-left has-icons-right">
                                    <input required class="input is-large" type="text" autocomplete="off" placeholder="Address">
                                    <span class="icon is-left">
                                        <i class="fas fa-id-card fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            NFT Image
                        </div>
                    </div>
                    <hr/>
                    <div class="has-text-right">
                        <button class="button is-info is-fullwidth is-large">Transfer NFT!</button>
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
    }
}