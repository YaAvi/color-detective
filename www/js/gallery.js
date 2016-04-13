(function () {
    'use strict';
    var DATA_URL = 0,
        PHOTOLIBRARY = 0,
        src,
        galleryButton = document.getElementById('gallery-button'),
        image = document.getElementById('camImage'),
        galleryOptions = {
            quality: 77,
            destinationType: DATA_URL,
            sourceType: PHOTOLIBRARY,
            correctOrientation: true
        };
    
    function galleryCallback(imageData) {
        src = "data:image/jpeg;base64," + imageData;
        style.changeImgSrc(src);
    }

    function galleryError() {
        image.style.visibility = "visible";
        console.log("Gallery canceled!");
    }

    function loadPhoto() {
        image.style.visibility = "hidden";
        navigator.camera.getPicture(galleryCallback, galleryError, galleryOptions);
    }
    
    galleryButton.onclick = loadPhoto;
}());