var camera = (function () {
    'use strict';
    var DATA_URL = 0,
        image = document.getElementById('camImage'),
        cameraOptions = {
            quality: 77,
            destinationType: DATA_URL,
            correctOrientation: true
        };
    
    function cameraCallback(imageData) {
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function cameraError() {
        console.log("Camera canceled!");
    }

    function capturePhoto() {
        navigator.camera.getPicture(cameraCallback, cameraError, cameraOptions);
    }
    
    return {
        capturePhoto: capturePhoto
    };
}());