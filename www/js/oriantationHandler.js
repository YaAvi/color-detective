(function () {
    'use strict';
    var image = document.getElementById('camImage');

    window.addEventListener("orientationchange", function () {
        if (screen.orientation.type === "portrait-primary" && image.height < image.width) {
            image.className = "portrait";
        } else {
            image.className = "landscape";
        }
    });
}());