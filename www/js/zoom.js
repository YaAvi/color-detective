(function () {
    'use strict';
    var zoomIn = document.getElementById('zoom-in-button'),
        zoomOut = document.getElementById('zoom-out-button'),
        image = document.getElementById('camImage'),
        zoomLevel = 100,
        zoomOffset = 25;
    
    function zoomInHandle() {
        if (zoomLevel < 250) {
            zoomLevel += zoomOffset;
            image.style.width = zoomLevel + "%";
        }
    }
    function zoomOutHandle() {
        if (zoomLevel > 50) {
            zoomLevel -= zoomOffset;
            image.style.width = zoomLevel + "%";
        }
    }
    zoomIn.onclick = zoomInHandle;
    zoomOut.onclick = zoomOutHandle;
}());