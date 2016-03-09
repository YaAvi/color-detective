(function () {
    'use strict';
    var urlButton = document.getElementById('url-button');
    function checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
    }
    
    function urlHandle() {
        var url = window.prompt("Enter an image URL:");
        if (url) {
            if (checkURL(url)) {
                style.changeImgSrc(url);
            } else {
                window.alert("Not an image URL!");
            }
        }
    }
    
    urlButton.onclick = urlHandle;
}());