(function () {
    'use strict';
    var imageUrl = document.getElementById('image-url');
    // Handle the back button
    function onBackKeyDown() {
        imageUrl.style.bottom = -70 + 'px';
    }
    // device APIs are available
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener('backbutton', onBackKeyDown, false);
    }
    
    document.addEventListener('deviceready', onDeviceReady, false);
}());