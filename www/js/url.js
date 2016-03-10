(function () {
    'use strict';
    var urlButton = document.getElementById('url-button'),
        confirmButton = document.getElementById('url-confirm'),
        urlInput = document.getElementById('url-input'),
        imageUrl = document.getElementById('image-url');
    function checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
    }
    
    function urlHandle() {
        imageUrl.style.bottom = 0;
    }
    function confirmUrl() {
        var url = urlInput.value;
        if (url) {
            if (checkURL(url)) {
                style.changeImgSrc(url);
            } else {
                window.alert("Not an image URL!");
            }
        }
        imageUrl.style.bottom = -70 + 'px';
        
    }
    urlButton.onclick = urlHandle;
    confirmButton.onclick = confirmUrl;
}());