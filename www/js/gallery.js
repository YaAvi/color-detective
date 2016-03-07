var gallery = (function () {
    'use strict';
    var DATA_URL = 0,
        PHOTOLIBRARY = 0,
        image = document.getElementById('camImage'),
        galleryOptions = {
            quality: 77,
            destinationType: DATA_URL,
            sourceType: PHOTOLIBRARY,
            correctOrientation: true
        };
    
    function galleryCallback(imageData) {
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function galleryError() {
        console.log("Camera canceled!");
    }

    function loadPhoto() {
        navigator.camera.getPicture(galleryCallback, galleryError, galleryOptions);
    }
    
    return {
        loadPhoto: loadPhoto
    };
}());