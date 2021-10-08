const burgerNav = () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
}
const connected = async () => {
    Moralis.enable();
    connectMetamaskBtn.style.display = 'none';
    metamaskBtn.style.display = 'inherit';
    metamaskBtn.innerHTML = ethereum.selectedAddress.substr(0,10) + '...';
    setCookie("CONNECTED_WALLET", true, 30);
}
const connect = async () => {
    connectMetamaskBtn.classList.add("is-loading");
    var user = await Moralis.Web3.authenticate();
    connectMetamaskBtn.classList.remove("is-loading");
    if (user) {
        connected();
    }
}
const disconnect = async () => {
    removeCookie("CONNECTED_WALLET");
    location.reload();
}
export default {
    render: async () => {
        let view =  /*html*/`
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            <img src="https://thenewfork.com/wp-content/uploads/2020/02/cropped-TheNewFork-landscape-1.jpg" width="112" height="28">
                        </a>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu" aria-expanded="false">
                        <div class="navbar-start">
                            <a class="navbar-item" href="/#/">
                                Home
                            </a>
                            <a class="navbar-item" href="/#/mint">
                                Mint NFT
                            </a>
                            <a class="navbar-item" href="/#/transfer">
                                Transfer NFT
                            </a>
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-warning" target="_blank" id="explorerBtn" href="#">
                                        <strong>${CONTRACT_ADDRESS}</strong>
                                    </a>
                                    <button class="button" id="connectMetamaskBtn" type="button">
                                        <strong>Connect to Metamask</strong>
                                    </button>
                                </div>
                            </div>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a id="metamaskBtn" class="navbar-link">asd</a>
                                <div class="navbar-dropdown">
                                    <a target="_blank" href="${EXPLORER}/address/${ethereum.selectedAddress}" class="navbar-item">
                                        Explorer
                                    </a>
                                    <hr class="navbar-divider">
                                    <a id="disconnectMetamaskBtn" class="navbar-item">
                                        Disconnect
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `
        return view
    },
    after_render: async () => {
        burgerNav();
        metamaskBtn.style.display = 'none';
        explorerBtn.href = `${EXPLORER}/address/${CONTRACT_ADDRESS}`;
        
        connectMetamaskBtn.addEventListener("click", function() {
            connect();
        });
        disconnectMetamaskBtn.addEventListener("click", function() {
            disconnect();
        });
        if (ethereum.isConnected() && CONNECTED_WALLET) {
            connected();
        }
    }
}