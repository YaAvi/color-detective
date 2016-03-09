var touchInit = (function () {
    'use strict';
    var image = document.getElementById('camImage'),
        distanceArr = [],
        viewWidth = image.width,
        imageSize = image.width,
        maxZoom = image.width * 2,
        minZoom = image.width / 2,
        marginLeft = 0;
    
    function touchHandler(colorName, changeColor) {
        image.addEventListener('touchend', function (e) {
            var pColor,
                imageBounds = image.getBoundingClientRect(),
                touchobj = e.changedTouches[0], // reference first touch point (ie: first finger)
                xCord = parseInt(touchobj.clientX, 10), // get x position of touch point relative to left edge (decimal)
                yCord = parseInt(touchobj.clientY, 10), // get y position of touch point relative to top edge (decimal)
                canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
            canvas.width = image.width + imageBounds.left;
            canvas.height = image.height + imageBounds.top; // for when the image is not overflowing 

            ctx.drawImage(image, imageBounds.left, imageBounds.top, image.width, image.height);

            pColor = ctx.getImageData(xCord, yCord, 1, 1).data;
            colorName(pColor[0], pColor[1], pColor[2]);
            changeColor(pColor[0], pColor[1], pColor[2]);
        }, false);
    }
    
    return touchHandler;

}());