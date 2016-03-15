var style = (function () {
    'use strict';
    var head = document.getElementById('head'),
        image = document.getElementById('camImage'),
        color = document.getElementById('color'),
        cameraButton = document.getElementById('camera-button'),
        galleryButton = document.getElementById('gallery-button'),
        urlButton = document.getElementById('url-button'),
        confirmButton = document.getElementById('url-confirm'),
        wrapper = document.getElementById('wrapper'),
        imageUrl = document.getElementById('image-url');
    
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    
    function changeBackgroundColor(element, r, g, b) {
        element.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
        
    function bodyColor(clr) {
        return ((clr + 30) > 255) ? 255 : (clr + 30);
    }
    function buttonColor(clr, offset) {
        return ((clr - offset) < 0) ? 0 : (clr - offset);
    }
        
    function changeStyleColor(r, g, b) {
        StatusBar.backgroundColorByHexString(rgbToHex(buttonColor(r, 30), buttonColor(g, 30), buttonColor(b, 30)));
        changeBackgroundColor(cameraButton, buttonColor(r, 15), buttonColor(g, 15), buttonColor(b, 15));
        changeBackgroundColor(galleryButton, buttonColor(r, 30), buttonColor(g, 30), buttonColor(b, 30));
        changeBackgroundColor(urlButton, buttonColor(r, 30), buttonColor(g, 30), buttonColor(b, 30));
        changeBackgroundColor(imageUrl, buttonColor(r, 30), buttonColor(g, 30), buttonColor(b, 30));
        changeBackgroundColor(confirmButton, buttonColor(r, 15), buttonColor(g, 15), buttonColor(b, 15));
        changeBackgroundColor(head, buttonColor(r, 15), buttonColor(g, 15), buttonColor(b, 15));
        changeBackgroundColor(color, r, g, b);
        changeBackgroundColor(document.body, bodyColor(r), bodyColor(g), bodyColor(b));
        // brightness check
        if ((((r * 299) + (g * 587) + (b * 114)) / 1000) > 220) {
            head.style.color = 'rgb(40,40,40)';
            wrapper.style.color = 'rgb(40,40,40)';
        } else {
            head.style.color = 'floralwhite';
            wrapper.style.color = 'floralwhite';
        }
    }
    
    function applyClass() {
        if (screen.orientation.type === "portrait-primary" && image.height < image.width) {
            image.className = "portrait";
        } else {
            image.className = "landscape";
        }
    }
    
    function changeImgSrc(src) {
        image.src = src;
    }
    
    image.onload = applyClass;
    
    return {
        changeColor: changeStyleColor,
        changeImgSrc: changeImgSrc
    };
}());