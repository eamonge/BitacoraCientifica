function myFun() {
    var loginPanel = document.getElementById('LoginDiv');
    var content = document.getElementById('PaginaPrincipDiv');
    var ramcientif = document.getElementById('RamCientif');
    var contentclass = document.getElementsByClassName('contentrows');

    loginPanel.style.opacity = "0";
    loginPanel.style.zIndex= -1;
    loginPanel.style.transition = "all 300ms";

    ramcientif.style.display = "none";


    content.style.opacity = "1";
    content.style.zIndex = "3";

    // for (var i = 0; i < contentclass.length; i++) {
    //     contentclass[i].style= display = "none";
    // }
}

function HideMenu() {
    var landing = document.getElementById('Landing');
    landing.style.display = "none";
}