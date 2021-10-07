"use strict";
import Home from './views/pages/Home.js'
// import About from './views/pages/About.js'
import Error404 from './views/pages/Error404.js'
// import PostShow from './views/pages/PostShow.js'
import Register from './views/pages/Register.js'

import NFTMint from './views/pages/NFTMint.js'
import NFTTransfer from './views/pages/NFTTransfer.js'

import Navbar from './views/components/Navbar.js'
import Footer from './views/components/Footer.js'

import Utils from './services/Utils.js'
const routes = {
    '/': Home,
    '/mint': NFTMint,
    '/transfer': NFTTransfer,
    
    
    '/register': Register,
};


const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('page');
    const footer = null || document.getElementById('footer');
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Footer.render();
    await Footer.after_render();
    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();

}
window.addEventListener('hashchange', router);
window.addEventListener('load', router);