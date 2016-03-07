(function () {
    'use strict';
    var image = document.getElementById('camImage');
    if (screen.orientation.type === "portrait-primary") {
        image.src = "file:///android_asset/www/img/portrait.jpg";
        image.className = "portrait";
    } else {
        image.src = "file:///android_asset/www/img/landscape.jpg";
        image.className = "landscape";
    }
    window.addEventListener("orientationchange", function () {
        if (image.src === "file:///android_asset/www/img/portrait.jpg") {
            image.src = "file:///android_asset/www/img/landscape.jpg";
        } else if (image.src === "file:///android_asset/www/img/landscape.jpg") {
            image.src = "file:///android_asset/www/img/portrait.jpg";
        }
        
        if (screen.orientation.type === "portrait-primary") {
            image.className = "portrait";
        } else {
            image.className = "landscape";
        }
    });
}());