function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function removeCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const CONTRACT_ADDRESS = getCookie("CONTRACT_ADDRESS");
const MORALIS_APP_ID = getCookie("MORALIS_APP_ID");
const MORALIS_SERVER_URL = getCookie("MORALIS_SERVER_URL");
const MORALIS_API_KEY = getCookie("MORALIS_API_KEY");
const MORALIS_API_URL = getCookie("MORALIS_API_URL");
const NODE = getCookie("NODE");
const EXPLORER = getCookie("EXPLORER");
const CONNECTED_WALLET = getCookie("CONNECTED_WALLET");