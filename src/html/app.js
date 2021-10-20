"use strict";
import Utils from './services/Utils.js'

import Navbar from './views/components/Navbar.js'
import Footer from './views/components/Footer.js'

import Home from './views/pages/Home.js'
import Error404 from './views/pages/Error404.js'
import NFTMint from './views/pages/NFTMint.js'
import NFTTransfer from './views/pages/NFTTransfer.js'
import MyNFTs from './views/pages/MyNFTs.js'
const routes = {
    '/': Home,
    '/mint': NFTMint,
    '/my-nfts': MyNFTs,
    '/transfer/:id': NFTTransfer,
};

const init = async () => {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Footer.render();
    await Footer.after_render();
}
const router = async () => {
    NProgress.start();
    const content = null || document.getElementById('page');
    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
    NProgress.done();
}
init();
window.addEventListener('hashchange', router);
window.addEventListener('load', router);