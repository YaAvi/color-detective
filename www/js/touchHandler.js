(function () {
    'use strict';
    var image = document.getElementById('camImage'),
        touchMoved = false,
        headSize = 50;
    
    function touchHandler(colorName, changeColor) {
        image.addEventListener('touchend', function (e) {
            var pColor,
                imageBounds = image.getBoundingClientRect(),
                touchobj = e.changedTouches[0], // reference first touch point (ie: first finger)
                xCord = parseInt(touchobj.clientX, 10), // get x position of touch point relative to left edge (decimal)
                yCord = parseInt(touchobj.clientY, 10), // get y position of touch point relative to top edge (decimal)
                canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height + imageBounds.top; // for when the image is not overflowing 

            ctx.drawImage(image, 0, imageBounds.top, image.width, image.height);

            pColor = ctx.getImageData(xCord, yCord - headSize, 1, 1).data;
            if (!touchMoved && pColor[3] !== 0) {
                colorName(pColor[0], pColor[1], pColor[2]);
                changeColor(pColor[0], pColor[1], pColor[2]);
            }
            touchMoved = false;
        }, false);
        
        image.addEventListener('touchmove', function (e) {
            touchMoved = true;
        }, false);
    }
    touchHandler(color.changeName, style.changeColor);
}());