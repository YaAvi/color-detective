(function () {
    'use strict';
    var DATA_URL = 0,
        PHOTOLIBRARY = 0,
        src,
        galleryButton = document.getElementById('gallery-button'),
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
        console.log("Gallery canceled!");
    }

    function loadPhoto() {
        navigator.camera.getPicture(galleryCallback, galleryError, galleryOptions);
    }
    
    galleryButton.onclick = loadPhoto;
}());