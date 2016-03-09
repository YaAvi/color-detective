var style = (function () {
    'use strict';
    var color = document.getElementById('color'),
        cameraButton = document.getElementById('camera-button'),
        galleryButton = document.getElementById('gallery-button'),
        urlButton = document.getElementById('url-button');
    
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    
    function changeStyleColor(r, g, b) {
        
        function bodyColor(clr) {
            return ((clr + 30) > 255) ? 255 : (clr + 30);
        }
        function buttonColor(clr, offset) {
            return ((clr - offset) < 0) ? 0 : (clr - offset);
        }
        
        StatusBar.backgroundColorByHexString(rgbToHex(buttonColor(r, 30), buttonColor(g, 30), buttonColor(b, 30)));
        cameraButton.style.backgroundColor = 'rgb(' + buttonColor(r, 15) + ', ' + buttonColor(g, 15) + ', ' + buttonColor(b, 15) + ')';
        galleryButton.style.backgroundColor = 'rgb(' + buttonColor(r, 30) + ', ' + buttonColor(g, 30) + ', ' + buttonColor(b, 30) + ')';
        urlButton.style.backgroundColor = 'rgb(' + buttonColor(r, 30) + ', ' + buttonColor(g, 30) + ', ' + buttonColor(b, 30) + ')';
        color.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        document.body.style.backgroundColor = 'rgb(' + bodyColor(r) + ', ' + bodyColor(g) + ', ' + bodyColor(b) + ')';
        
        if ((r + g + b) < (150 * 3)) {
            color.style.color = 'floralwhite';
            cameraButton.style.color = 'floralwhite';
            galleryButton.style.color = 'floralwhite';
            urlButton.style.color = 'floralwhite';
        } else {
            color.style.color = 'rgb(16,16,16)';
            cameraButton.style.color = 'rgb(16,16,16)';
            galleryButton.style.color = 'rgb(16,16,16)';
            urlButton.style.color = 'rgb(16,16,16)';
        }
    }
    
    return {
        changeColor: changeStyleColor
    };
}());