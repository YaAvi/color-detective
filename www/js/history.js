var colorHistory = (function () {
    'use strict';
    var historyButton = document.getElementById('history-button'),
        history = document.getElementById('history'),
        delOneSample = document.getElementById('del-one'),
        delAllSamples = document.getElementById('del-all'),
        wrapper = document.getElementById('wrapper'),
        mainColor = document.getElementById('color'),
        clicked = false,
        historyStoreage = [];
    
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    
    // Hex to RGB
    function hexToR(h) {return parseInt(h.substring(1, 3), 16); } // R
    function hexToG(h) {return parseInt(h.substring(3, 5), 16); } // G
    function hexToB(h) {return parseInt(h.substring(5, 7), 16); } // B
    
    function createColorElement(name, hex) {
        var colorSample = document.createElement('div'),
            colorName = document.createElement('div'),
            red = hexToR(hex),
            green = hexToG(hex),
            blue = hexToB(hex),
            colorHex = document.createElement('div');
        colorSample.className = 'color-sample';
        colorName.className = 'color-name';
        colorHex.className = 'color-hex';
        colorName.innerHTML = name;
        colorHex.innerHTML = hex;
        colorHex.onclick = function rgbOrHex() {
            if (colorHex.innerHTML === hex) {
                colorHex.innerHTML = '(' + red + ', ' + green + ', ' + blue + ')';
            } else {
                colorHex.innerHTML = hex;
            }
        };
        colorSample.appendChild(colorName);
        colorSample.appendChild(colorHex);
        colorSample.style.backgroundColor = hex;
        colorSample.style.color = wrapper.style.color;
        colorSample.onclick = function toMainColor() {
            mainColor.innerHTML = name;
            style.changeColor(red, green, blue);
        };
        return colorSample;
    }
    
    function appendToHistory() {
        var colorSample = createColorElement(
            historyStoreage[0].name,
            rgbToHex(
                historyStoreage[0].r,
                historyStoreage[0].g,
                historyStoreage[0].b
            )
        );
        history.insertBefore(colorSample, history.childNodes[2]);
        window.setTimeout(function () {
            colorSample.style.left = 0;
        }, 100);
    }
    
    function addColor(name, r, g, b) {
        var clr = {
            name: name,
            r: r,
            g: g,
            b: b
        };
        historyStoreage.unshift(clr);
        appendToHistory();
    }
    
    function buttonHandle() {
        if (!clicked) {
            history.style.left = 0;
            clicked = true;
        } else {
            history.style.left = -190 + 'px';
            clicked = false;
        }
    }
    function removeSample(element) {
        history.removeChild(element);
    }
    function removeOne() {
        var colorSamples = document.getElementsByClassName('color-sample'),
            clrSamplesLength = colorSamples.length;
        
        if (historyStoreage.length > 0) {
            removeSample(colorSamples[0]);
            historyStoreage.pop();
        }
    }
    
    function removeAll() {
        var colorSamples = document.getElementsByClassName('color-sample'),
            clrSamplesLength = colorSamples.length;
        
        if (historyStoreage.length > 0) {
            for (var i = 0; i < clrSamplesLength; i++) {
                removeSample(colorSamples[0]);
                historyStoreage.pop();
            }
        }
    }
    
    historyButton.onclick = buttonHandle;
    delOneSample.onclick = removeOne;
    delAllSamples.onclick = removeAll;
    return {
        addColor: addColor,
        close: function () {
            history.style.left = -190 + 'px';
            clicked = false;
        }
    };
}());