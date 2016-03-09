var publicAPI = (function () {
    'use strict';
    var colorData,
        clsColor,
        image = document.getElementById('camImage'),
        color = document.getElementById('color');
    
    // Hex to RGB
    function hexToR(h) {return parseInt(h.substring(0, 2), 16); } // R
    function hexToG(h) {return parseInt(h.substring(2, 4), 16); } // G
    function hexToB(h) {return parseInt(h.substring(4, 6), 16); } // B
    
    function colorName(R, G, B) {
        var minSum = 7777, sum, red, green, blue;
        for (var clr = 0; clr < colorData.length; clr++) { 
            red = hexToR(colorData[clr][0]);
            green = hexToG(colorData[clr][0]);
            blue = hexToB(colorData[clr][0]);
            sum = Math.pow((R - red), 2) + Math.pow((G - green), 2) + Math.pow((B - blue), 2);
            if (sum < minSum) {
                minSum = sum;
                clsColor = clr;
            }
        }
        color.children[0].innerHTML = colorData[clsColor][1];
    }
    
    function loadColorData(clrData){
        colorData = clrData;
    }
    return {
        loadColorData: loadColorData,
        colorName: colorName
    };
}());