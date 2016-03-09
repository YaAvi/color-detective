(function () {
    'use strict';
    var DATA_URL = 0,
        src,
        cameraButton = document.getElementById('camera-button'),
        cameraOptions = {
            quality: 77,
            destinationType: DATA_URL,
            correctOrientation: true
        };
    
    function cameraCallback(imageData) {
        src = "data:image/jpeg;base64," + imageData;
        style.changeImgSrc(src);
    }

    function cameraError() {
        console.log("Camera canceled!");
    }

    function capturePhoto() {
        navigator.camera.getPicture(cameraCallback, cameraError, cameraOptions);
    }
    
    cameraButton.onclick = capturePhoto;
}());