(function () {
    'use strict';
    var imageUrl = document.getElementById('image-url'),
        history = document.getElementById('history');
    // Handle the back button
    function onBackKeyDown() {
        imageUrl.style.bottom = -70 + 'px';
        colorHistory.close();
    }
    // device APIs are available
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener('backbutton', onBackKeyDown, false);
    }
    
    document.addEventListener('deviceready', onDeviceReady, false);
}());