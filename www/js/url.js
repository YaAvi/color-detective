var url = (function () {
    'use strict';
    var image = document.getElementById('camImage');
    
    function checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
    }
    
    function urlHandle() {
        var url = window.prompt("Enter an image URL:");
        if (checkURL(url)) {
            image.src = url;
        } else {
            window.alert("Not an image URL!");
        }
    }
    return {
        urlHandler: urlHandle
    };
}());